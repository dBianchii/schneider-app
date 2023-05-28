import { v4 as uuidv4 } from "uuid"
import { api } from "../api/apiRoot"

function getAllPosts() {
	let posts = JSON.parse(localStorage.getItem("posts")) || []

	return posts.map((post) => {
		const author = api.user.getUser({ userId: post.authorId })

		return { ...post, author }
	})
}

async function createPost({ title, author, description, body }) {
	const posts = getAllPosts()

	const newPost = {
		id: uuidv4(),
		title,
		author,
		description,
		body,
	}

	posts.push(newPost)

	localStorage.setItem("posts", JSON.stringify(posts))

	return newPost
}

function likePost(id, userId) {
	const posts = getAllPosts()
	const post = posts.find((post) => post.id === id)

	if (!post.likes.includes(userId)) {
		post.likes.push(userId)

		localStorage.setItem("posts", JSON.stringify(posts))
	}
	return post
}

function unlikePost(id, userId) {
	const posts = getAllPosts()
	const post = posts.find((post) => post.id === id)

	if (post.likes.includes(userId)) {
		post.likes = post.likes.filter((like) => like !== userId)

		localStorage.setItem("posts", JSON.stringify(posts))
	}
	return post
}

function deletePost(id) {
	const posts = getAllPosts()

	const postIndex = posts.findIndex((post) => post.id === id)

	if (postIndex === -1) {
		throw new Error("Post not found")
	}

	posts.splice(postIndex, 1)

	localStorage.setItem("posts", JSON.stringify(posts))
}

function getPost(id) {
	const posts = getAllPosts()

	const post = posts.find((x) => x.id === id)

	if (!post) throw new Error("Nenhum post encontrado")

	return post
}

const posts = {
	getAllPosts,
	createPost,
	likePost,
	unlikePost,
	deletePost,
	getPost,
}
export default posts
