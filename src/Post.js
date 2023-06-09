import { useParams } from "react-router-dom"
import { api } from "./server/api/apiRoot"
import { PostComment } from "./components/post/postcomment"
import { CommentInput } from "./components/post/CommentInput"
import { useEffect, useState } from "react"
import { SchneiderAvatar } from "./components/avatar"
import { DangerButton } from "./components/button"
import { FaPencilAlt, FaPaperPlane } from "react-icons/fa"
import { CgClose } from "react-icons/cg"

export default function Post() {
	const params = useParams()
	const [newComment, setNewComment] = useState(false)
	const [post, setPost] = useState(api.posts.getPost(params.post))
	const loggedUser = api.session.getLoggedUser()
	const [following, setFollowing] = useState(post.author.followers.includes(loggedUser?.id))
	const [editMode, setEditMode] = useState(false)
	const [body, setBody] = useState(post.body)

	useEffect(() => {
		const thisPost = api.posts.getPost(params.post)

		setPost(thisPost)
	}, [newComment, following])

	return (
		<div className="p-16">
			<div className="mx-48">
				<div className="min-h-42">
					<div className="flex flex-row">
						<a href={`/user/${post.author.id}`}>
							<SchneiderAvatar src={post.author.image} />
						</a>

						<div className="flex flex-col">
							<a href={`/user/${post.author.id}`}>
								<p className="ml-4 text-xl font-semibold text-gray-600">{post.author.name}</p>
								<p className="ml-4 text-sm text-gray-500">
									<span className="font-bold">{post.author.followers.length}</span> {post.author.followers.length === 1 ? "seguidor" : "seguidores"}
								</p>
							</a>
						</div>
						<div className="flex flex-col">
							{loggedUser.id !== post.author.id && (
								<button
									className={`ml-4 mt-2 rounded-md ring-2 ring-schneider-green ${following ? " bg-schneider-green text-white" : "bg-schneider-green/30 text-gray-600"}`}
									size={"sm"}
									onClick={() => {
										try {
											if (loggedUser.id !== post.author.id) {
												if (following) api.user.unfollowUser(post.author.id)
												else api.user.followUser(post.author.id)
											}
											setFollowing(!following)
										} catch (error) {
											if (error.message === "Usuario não logado") window.location.href = "/login"
										}
									}}
								>
									{following ? "Seguindo" : "Seguir"}
								</button>
							)}
						</div>
					</div>
					<div className="mt-4 flex flex-row">
						<h1 className="text-5xl font-bold text-gray-800">{post.title}</h1>

						{loggedUser.id === post.author.id && (
							<DangerButton
								size={"sm"}
								className={"ml-4 mt-4 h-8 bg-red-400"}
								onClick={() => {
									api.posts.deletePost(post.id)
									window.location.href = "/"
								}}
							>
								Deletar
							</DangerButton>
						)}
					</div>
					<h2 className="mt-6 text-4xl font-semibold text-gray-600">{post.description}</h2>
					<hr className="my-4 h-px w-[700px] border-0 bg-gradient-to-l from-transparent to-gray-600"></hr>

					{editMode ? (
						<div>
							<textarea
								className="h-72 w-full"
								defaultValue={body}
								value={body}
								onChange={(e) => {
									setBody(e.target.value)
								}}
							/>
							<div className="justify-end">
								<button
									className="inline rounded-md p-2 hover:bg-green-300"
									onClick={() => {
										setEditMode((prev) => !prev)
										api.posts.editPost(post.id, { body: body })
									}}
								>
									<FaPaperPlane className="h-6 w-6" />
								</button>
								<button
									className="ml-2 inline rounded-md p-2 hover:bg-gray-300"
									onClick={() => {
										setBody(post.body)
										setEditMode((prev) => !prev)
									}}
								>
									<CgClose size={20} className="h-6 w-6" />
								</button>
							</div>
						</div>
					) : (
						<>
							<p className="mt-2 inline text-xl font-light">{body}</p>
							{loggedUser.id === post.author.id && (
								<button className="ml-4 inline rounded-md p-2 hover:bg-gray-300" onClick={() => setEditMode((prev) => !prev)}>
									<FaPencilAlt className="h-4 w-4" />
								</button>
							)}
						</>
					)}
				</div>
				<hr className="my-8 h-px w-[700px] border-0 bg-gradient-to-l from-transparent to-gray-600"></hr>
				<h1 className="text-4xl font-bold text-blue-500">Comentários</h1>
				<div className="mt-8 w-full max-w-[700px]">
					<CommentInput postId={post.id} setNewComment={() => setNewComment(!newComment)} />
					<section id="comments">
						{post?.comments.map((item, index) => {
							return <PostComment commentId={item.id} key={`PostCommentKey-${index}`} name={item.author.name} content={item.content} image={item.author.image} child_comments={item?.childComments} newComment={() => setNewComment(!newComment)} />
						})}
					</section>
				</div>
			</div>
		</div>
	)
}
