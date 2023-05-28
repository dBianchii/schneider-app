import { api } from "./server/api/apiRoot"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai"
import { ActionButton } from "./components/button"
import { SchneiderAvatar } from "./components/avatar"

export default function Home() {
	const [posts, setPosts] = useState(api.posts.getAllPosts())

	const params = useParams()
	const page = Number(params.page) || 0

	const perPage = 9

	const start = page * perPage
	const end = start + perPage
	const paginatedPosts = posts.slice(start, end)

	const totalPages = Math.ceil(posts.length / perPage)

	return (
		<section className="space-y-6 p-10">
			<h4 class="text-4xl font-bold text-gray-800">Últimos posts</h4>
			<ActionButton>Criar post</ActionButton>
			<div className="grid grid-cols-4 gap-4">
				{paginatedPosts.map((post, i) => (
					<PostCard key={post.id} post={post} />
				))}
			</div>
			<Pagination currentPage={page} totalPages={totalPages} />
		</section>
	)
}

function Pagination({ currentPage, totalPages }) {
	const getPageLink = (page) => {
		return `/page/${page}`
	}

	const renderPaginationItems = () => {
		const paginationItems = []

		for (let i = 0; i <= totalPages - 1; i++) {
			paginationItems.push(
				<li key={i}>
					<a href={getPageLink(i)} className={`${currentPage === 0 && "pointer-events-none text-gray-500"} ml-0 border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700`}>
						{i}
						{currentPage === i && <span> (atual)</span>}
					</a>
				</li>
			)
		}

		return paginationItems
	}

	return (
		<nav aria-label="Pagination" className="mt-4 text-center">
			<ul className="inline-flex -space-x-px">
				<li>
					<a href={getPageLink(currentPage - 1)} tabIndex="-1" className={`${currentPage === 0 && "pointer-events-none text-gray-500 transition-colors"} ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight hover:bg-gray-100 disabled:opacity-75`}>
						Previous
					</a>
				</li>
				{renderPaginationItems()}
				<li>
					<a href={getPageLink(currentPage + 1)} tabIndex="-1" className={`${currentPage === 0 && "pointer-events-none text-gray-500 transition-colors"} ml-0 rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight hover:bg-gray-100 disabled:opacity-75`}>
						Next
					</a>
				</li>
			</ul>
		</nav>
	)
}

function PostCard({ post }) {
	const user = api.session.getLoggedUser()

	const [liked, setLiked] = useState(post.likes.includes(user.id))

	return (
		<a href={`/post/${post.id}`}>
			<div class="max-w-sm rounded-lg border border-gray-200 bg-white shadow">
				{post.image && (
					<a href={`/post/${post.id}`}>
						<img class="rounded-t-lg" src={post.image} alt="imagemDoPost" />
					</a>
				)}

				<div class="p-5">
					<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-700">{post.title}</h5>
					<p class="mb-3 text-base font-normal text-gray-600">{post.description}</p>
					<div className="mt-4 flex flex-row">
						<SchneiderAvatar src={post.author?.image ?? ""} size={"sm"} />
						<span className="ml-2 text-base text-gray-600">{post.author.name}</span>
					</div>
					<div
						className="z-50 mt-4 flex flex-row"
						onClick={(e) => {
							e.preventDefault()
							setLiked((prev) => !prev)
							api.posts.likePost(post.id, user.id)
						}}
					>
						{liked ? <AiFillHeart className="h-8 w-8 text-red-500 transition-colors hover:text-red-500/80" /> : <AiOutlineHeart className="h-8 w-8 transition-colors hover:text-red-500/80" />}
						{post.likes.length > 0 && <span>{post.likes.length}</span>}
						<AiOutlineComment className={`ml-4 h-8 w-8 ${user && post.comments ? "text-gray-500" : ""}`} />
					</div>
				</div>
			</div>
		</a>
	)
}
