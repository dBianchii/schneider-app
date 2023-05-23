import { api } from "./server/api/apiRoot"
import { useState } from "react"
import { useParams } from "react-router-dom"

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
		<div>
			<div class="container">
				<section class="text-center">
					<h4 class="mb-5">
						<strong>Latest posts</strong>
					</h4>

					<div class="row">
						{paginatedPosts.map((post, i) => (
							<>
								{i <= 2 && (
									<div class="col-lg-4 col-md-12 mb-4" key={post.id}>
										<PostCard image={post.image} id={post.id} title={post.title} description={post.description} />
									</div>
								)}
							</>
						))}
					</div>

					<div class="row">
						{paginatedPosts.map((post, i) => (
							<>
								{i >= 3 && i <= 5 && (
									<div class="col-lg-4 col-md-12 mb-4" key={post.id}>
										<PostCard image={post.image} id={post.id} title={post.title} description={post.description} />
									</div>
								)}
							</>
						))}
					</div>

					<div class="row">
						{paginatedPosts.map((post, i) => (
							<>
								{i >= 6 && i <= 8 && (
									<div class="col-lg-4 col-md-12 mb-4" key={post.id}>
										<PostCard image={post.image} id={post.id} title={post.title} description={post.description} />
									</div>
								)}
							</>
						))}
					</div>
				</section>
				<Pagination currentPage={page} totalPages={totalPages} />
			</div>
		</div>
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
				<li key={i} className={`page-item${currentPage === i ? " active" : ""}`}>
					<a href={getPageLink(i)} className="page-link">
						{i}
						{currentPage === i && <span className="sr-only"> (atual)</span>}
					</a>
				</li>
			)
		}

		return paginationItems
	}

	return (
		<nav aria-label="Pagination">
			<ul className="pagination pagination-circle justify-content-center">
				<li className={`page-item${currentPage === 0 ? " disabled" : ""}`}>
					<a href={getPageLink(currentPage - 1)} className="page-link" tabIndex="-1" aria-disabled={currentPage === 0 ? "true" : "false"}>
						Previous
					</a>
				</li>
				{renderPaginationItems()}
				<li className={`page-item${currentPage === totalPages - 1 ? " disabled" : ""}`}>
					<a href={getPageLink(currentPage + 1)} className="page-link" aria-disabled={currentPage === totalPages ? "true" : "false"}>
						Next
					</a>
				</li>
			</ul>
		</nav>
	)
}

function PostCard({ image, id, title, description }) {
	return (
		<div class="card">
			<div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
				<img src={image} class="img-fluid" alt="somethuigs" />
				<a href="#!">
					<div class="mask" style={{ "background-color": "rgba(251, 251, 251, 0.15)" }}></div>
				</a>
			</div>
			<div class="card-body">
				<h5 class="card-title">{title}</h5>
				<p class="card-text">{description}</p>
				<a href={`/post/${id}`} class="btn btn-primary">
					Read
				</a>
			</div>
		</div>
	)
}
