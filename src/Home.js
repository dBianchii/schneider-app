import { api } from "./server/api/apiRoot"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai"
import { ActionButton } from "./components/button"

export default function Home() {
	const [posts, setPosts] = useState(api.posts.getAllPosts())

	const session = api.session.getLoggedUser()

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
					<a href={getPageLink(i)} className={`${currentPage === 0 && "pointer-events-none text-gray-500"} ml-0 border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700`}>
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
					<a href={getPageLink(currentPage - 1)} tabIndex="-1" className={`${currentPage === 0 && "pointer-events-none text-gray-500"} ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight hover:bg-gray-100 disabled:opacity-75`}>
						Previous
					</a>
				</li>
				{renderPaginationItems()}
				<li>
					<a href={getPageLink(currentPage + 1)} tabIndex="-1" className={`${currentPage === 0 && "pointer-events-none text-gray-500"} ml-0 rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight hover:bg-gray-100 disabled:opacity-75`}>
						Next
					</a>
				</li>
			</ul>
		</nav>
	)
}

function PostCard({ post }) {
	const user = api.session.getLoggedUser()
	return (
		<div class="max-w-sm rounded-lg border border-gray-200 bg-white shadow">
			{post.image && (
				<a href="/">
					<img class="rounded-t-lg" src={post.image} alt="imagemDoPost" />
				</a>
			)}

			<div class="p-5">
				<a href="/">
					<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-700">{post.title}</h5>
				</a>
				<p class="mb-3 text-base font-normal text-gray-600">{post.description}</p>
				{/* <a href={`/post/${post.id}`} class="inline-flex items-center rounded-lg bg-schneider-green px-3 py-2 text-center text-sm font-medium text-white hover:bg-schneider-green/90 focus:outline-none focus:ring-4 focus:ring-blue-300">
					Ler post
					<svg aria-hidden="true" class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
					</svg>
				</a> */}
				<div className="mt-4 flex flex-row align-middle">
					{user && post.likes.includes(user.id) ? <AiFillHeart className="h-8 w-8 text-red-500 hover:text-red-500/80" /> : <AiOutlineHeart className="h-8 w-8 hover:text-red-500/80" />}
					{post.likes.length > 0 && <span>{post.likes.length}</span>}
					<AiOutlineComment className={`ml-4 h-8 w-8 ${user && post.comments ? "text-gray-500" : ""}`} />
				</div>
			</div>
		</div>
	)
}
