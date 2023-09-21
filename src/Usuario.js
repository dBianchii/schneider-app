import { SchneiderAvatar } from "./components/avatar"
import { api } from "./server/api/apiRoot"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { PostCard } from "./components/postCard"
import { ChangeAvatarModal } from "./components/changeAvatarModal"

export default function Usuario() {
	const [avatarModalState, setAvatarModalState] = useState(false)
	const params = useParams()

	const user = api.user.getUser({ userId: params.userId })
	const loggedUser = api.session.getLoggedUser()

	const [following, setFollowing] = useState(user.followers.includes(loggedUser?.id))

	const posts = api.posts.getPostsForUser(user.id)

	return (
		<div className="flex min-h-[80vh] flex-row">
			<div className="flex h-full w-4/6 flex-wrap justify-center gap-4 p-4">
				{posts?.map((post, index) => (
					<PostCard key={`postCardKey-${index}`} post={post} />
				))}
			</div>
			<div className="w-2/6 p-8">
				<div className="flex flex-col  items-center w-32">
					<SchneiderAvatar src={user.image} size={"lg"} />
					<button onClick={() => setAvatarModalState(true)} className="text-xs text-center px-2 py-1 bg-schneider-green hover:bg-schneider-green/80  text-white font-medium  my-1 rounded-md  " >Alterar imagem</button>
					<h1 className="mt-2 font-semibold">{user.name}</h1>
					<p className="text-sm text-gray-500">{user.email}</p>
					<p className="mt-2 text-sm text-gray-500">
						<span className="font-bold">{user.followers.length}</span> {user.followers.length === 1 ? "seguidor" : "seguidores"}
					</p>

					{loggedUser?.id !== user.id && (
						<button
							className={`mt-4 rounded-md ring-2 ring-schneider-green ${following ? " bg-schneider-green text-white" : "bg-schneider-green/30 text-gray-600"}`}
							size={"sm"}
							onClick={() => {
								try {
									if (loggedUser?.id !== user.id) {
										if (following) api.user.unfollowUser(user.id)
										else api.user.followUser(user.id)
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
			{avatarModalState && (
				<ChangeAvatarModal setIsModalOpen={(x) => setAvatarModalState(x)} userId={user.id} />
			)}
		</div>
	)
}
