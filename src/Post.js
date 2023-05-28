import { useParams } from "react-router-dom"
import { api } from "./server/api/apiRoot"

export default function Post() {
	const params = useParams()
	const post = api.posts.getPost(params.post)

	return (
		<div className="p-16">
			<div className="mx-48">
				<h1 className="text-5xl font-bold text-gray-800">{post.title}</h1>
				<hr class="my-8 h-px w-[700px] border-0 bg-gradient-to-l from-transparent to-gray-600"></hr>
				<p className="text-xl">{post.description}</p>
			</div>
		</div>
	)
}

function Comment() {}
