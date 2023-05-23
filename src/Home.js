import { getAllPosts } from "./db/api"
import { useState } from "react"
import { useParams } from "react-router-dom"

export default function Home() {
	const _posts = getAllPosts()

	const params = useParams()
	const page = Number(params.page) || 0
	const perPage = 6
	const start = page * perPage
	const end = start + perPage
	const paginatedPosts = _posts.slice(start, end)
	const totalPages = Math.ceil(_posts.length / perPage)

	const [posts, setPosts] = useState(paginatedPosts)

	return (
		<div>
			<div class="container">
				<section class="text-center">
					<h4 class="mb-5">
						<strong>Latest posts</strong>
					</h4>

					<div class="row">
						{posts.map((post) => (
							<div class="col-lg-4 col-md-12 mb-4">
								<div class="card">
									<div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
										<img src={post.image} class="img-fluid" alt="somethuigs" />
										<a href="#!">
											<div class="mask" style={{ "background-color": "rgba(251, 251, 251, 0.15);" }}></div>
										</a>
									</div>
									<div class="card-body">
										<h5 class="card-title">{post.title}</h5>
										<p class="card-text">{post.content}</p>
										<a href="#!" class="btn btn-primary">
											Read
										</a>
									</div>
								</div>
							</div>
						))}

						<div class="col-lg-4 col-md-12 mb-4">
							<div class="card">
								<div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
									<img src="" class="img-fluid" alt="somethuigs" />
									<a href="#!">
										<div class="mask" style={{ "background-color": "rgba(251, 251, 251, 0.15);" }}></div>
									</a>
								</div>
								<div class="card-body">
									<h5 class="card-title">Post title</h5>
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a href="#!" class="btn btn-primary">
										Read
									</a>
								</div>
							</div>
						</div>

						<div class="col-lg-4 col-md-6 mb-4">
							<div class="card">
								<div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
									<img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" class="img-fluid" />
									<a href="#!">
										<div class="mask" style={{ "background-color": "rgba(251, 251, 251, 0.15)" }}></div>
									</a>
								</div>
								<div class="card-body">
									<h5 class="card-title">Post title</h5>
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a href="#!" class="btn btn-primary">
										Read
									</a>
								</div>
							</div>
						</div>

						<div class="col-lg-4 col-md-6 mb-4">
							<div class="card">
								<div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
									<img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" class="img-fluid" />
									<a href="#!">
										<div class="mask" style={{ "background-color": "rgba(251, 251, 251, 0.15)" }}></div>
									</a>
								</div>
								<div class="card-body">
									<h5 class="card-title">Post title</h5>
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a href="#!" class="btn btn-primary">
										Read
									</a>
								</div>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-lg-4 col-md-12 mb-4">
							<div class="card">
								<div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
									<img src="https://mdbootstrap.com/img/new/standard/nature/002.jpg" class="img-fluid" />
									<a href="#!">
										<div class="mask" style={{ "background-color": "rgba(251, 251, 251, 0.15)" }}></div>
									</a>
								</div>
								<div class="card-body">
									<h5 class="card-title">Post title</h5>
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a href="#!" class="btn btn-primary">
										Read
									</a>
								</div>
							</div>
						</div>

						<div class="col-lg-4 col-md-6 mb-4">
							<div class="card">
								<div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
									<img src="https://mdbootstrap.com/img/new/standard/nature/022.jpg" class="img-fluid" />
									<a href="#!">
										<div class="mask" style={{ "background-color": "rgba(251, 251, 251, 0.15)" }}></div>
									</a>
								</div>
								<div class="card-body">
									<h5 class="card-title">Post title</h5>
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a href="#!" class="btn btn-primary">
										Read
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<nav class="my-4" aria-label="...">
					<ul class="pagination pagination-circle justify-content-center">
						<li class="page-item">
							<a class="page-link" href="#" tabindex="-1" aria-disabled="true">
								Previous
							</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">
								1
							</a>
						</li>
						<li class="page-item active" aria-current="page">
							<a class="page-link" href="#">
								2 <span class="sr-only">(current)</span>
							</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">
								3
							</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">
								Next
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<p>Ola sou Home</p>
		</div>
	)
}
