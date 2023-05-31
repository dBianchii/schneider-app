import { useParams } from "react-router-dom"
import { api } from "./server/api/apiRoot"

export default function Post() {
	const params = useParams()
	const post = api.posts.getPost(params.post)
	console.log(post.comments)

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
					<div>
						INICIO DA DIV DO COMMENTS QUE EU ROUBEI. ALTERE ESSA DIV
						<div class="flex w-full justify-between rounded-md border">
							<div class="p-3">
								<div class="flex items-center gap-3">
									<img src="https://avatars.githubusercontent.com/u/22263436?v=4" class="h-10 w-10 rounded-full border-2 border-emerald-400 object-cover  shadow-emerald-400" />
									<h3 class="font-bold">
										User 1
										<br />
										<span class="text-sm font-normal text-gray-400">Level 1</span>
									</h3>
								</div>
								<p class="mt-2 text-gray-600">this is sample commnent</p>
								<button class="text-right text-blue-500">Reply</button>
							</div>

							<div class="flex flex-col items-end gap-3 py-3 pr-3">
								<div>
									<svg class="h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
									</svg>
								</div>
								<div>
									<svg class="h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
									</svg>
								</div>
							</div>
						</div>
						<div class="pl-14 font-bold text-gray-300">|</div>
						<div class="ml-5 flex justify-between rounded-md  border">
							<div class="p-3">
								<div class="flex items-center gap-3">
									<img src="https://avatars.githubusercontent.com/u/22263436?v=4" class="h-10 w-10 rounded-full border-2 border-emerald-400 object-cover  shadow-emerald-400" />
									<h3 class="font-bold">
										User 2
										<br />
										<span class="text-sm font-normal text-gray-400">Level 1</span>
									</h3>
								</div>
								<p class="mt-2 text-gray-600">asdas</p>
							</div>

							<div class="flex flex-col gap-3 py-3 pr-3">
								<div>
									<svg class="h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
									</svg>
								</div>
								<div>
									<svg class="h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
									</svg>
								</div>
							</div>
						</div>
						<div class="pl-14 font-bold text-gray-300">|</div>
						<div class="ml-5 flex justify-between rounded-md  border">
							<div class="p-3">
								<div class="flex items-center gap-3">
									<img src="https://avatars.githubusercontent.com/u/22263436?v=4" class="h-10 w-10 rounded-full border-2 border-emerald-400 object-cover  shadow-emerald-400" />
									<h3 class="font-bold">
										User 3
										<br />
										<span class="text-sm font-normal text-gray-400">Level 1</span>
									</h3>
								</div>
								<p class="mt-2 text-gray-600">this is sample commnent</p>
							</div>

							<div class="flex flex-col gap-3 py-3 pr-3">
								<div>
									<svg class="h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
									</svg>
								</div>
								<div>
									<svg class="h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
