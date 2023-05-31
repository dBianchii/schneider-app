import { useParams } from "react-router-dom"
import { api } from "./server/api/apiRoot"

export default function Post() {
	const params = useParams()
	const post = api.posts.getPost(params.post)

	return (
		<div className="p-16">
			<div className="mx-48">
				<div className="min-h-screen">
					<h1 className="text-5xl font-bold text-gray-800">{post.title}</h1>
					<h2 className="mt-6 text-4xl font-semibold text-gray-600">{post.body}</h2>
					<hr className="my-8 h-px w-[700px] border-0 bg-gradient-to-l from-transparent to-gray-600"></hr>
					<p className="mt-8 text-xl">{post.description}</p>
				</div>
				<hr className="my-8 h-px w-[700px] border-0 bg-gradient-to-l from-transparent to-gray-600"></hr>

				<h1 className="text-4xl font-bold text-blue-500">Comentários</h1>
				<div className="mt-8">
					{post.comments?.map((comment) => {
						return (
							<div className="flex flex-col">
								<div className="flex flex-row">
									<h2 className="ml-4 text-xl font-semibold text-gray-600">{comment.content}</h2>

									<div className="flex flex-col">
										<h1 className="text-xl font-semibold text-gray-600">{comment.author}</h1>
										<h2 className="text-xl font-semibold text-gray-600">{comment.date}</h2>

										<div className="flex flex-row">
											<button className="text-xl font-semibold text-gray-600">Editar</button>
											<button className="text-xl font-semibold text-gray-600">Excluir</button>
										</div>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
