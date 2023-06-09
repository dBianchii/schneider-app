import { CgClose } from "react-icons/cg"
import { TextInput } from "./textInput"
import { TextareaInput } from "./textareaInput"
import { useForm } from "react-hook-form"
import posts from "../../src/server/api/posts"
import { api } from "../server/api/apiRoot"
import * as y from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const formSchema = y.object({
	title: y.string().required("Campo obrigatório"),
	description: y.string(),
	body: y.string().required("Campo obrigatório"),
})

export function CreatePostModal({ setIsModalOpen, setPosts }) {
	const user = api.session.getLoggedUser()
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(formSchema),
	})

	const onSubmit = (fields) => {
		posts.createPost({ title: fields.title, authorId: user.id, description: fields.description, body: fields.body })
		setPosts(api.posts.getAllPosts())
		setIsModalOpen(false)

		return console.log("Post criado com sucesso")
	}

	return (
		<main className="fixed top-0 flex h-screen w-screen items-center justify-center bg-black/20 transition-colors">
			<div className="flex h-[36rem] w-[28rem] flex-col rounded-md border bg-gray-50 p-6">
				<div className="flex items-center justify-between">
					<p className="text-2xl font-semibold">Criar post</p>
					<div className="transiton-colors cursor-pointer rounded-full p-3 text-gray-800 duration-100 hover:bg-gray-200" onClick={() => setIsModalOpen(false)}>
						<CgClose size={20} />
					</div>
				</div>

				<form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex h-full flex-col gap-3">
					<TextInput error={errors?.title} register={{ ...register("title") }} title="Título" />

					<TextareaInput height={"5rem"} title="Descrição" placeholder="Opcional" register={{ ...register("description") }} />

					<TextareaInput
						height={"10rem"}
						title="Corpo do post"
						register={{
							...register("body"),
						}}
						error={errors?.body}
					/>

					<button className="ml-auto mt-auto h-9 w-fit rounded-md bg-green-500 px-8 font-medium text-white transition-colors duration-100 hover:bg-green-500/90" type="submit">
						Criar post
					</button>
				</form>
			</div>
		</main>
	)
}
