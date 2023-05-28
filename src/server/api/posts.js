import { v4 as uuidv4 } from "uuid"
import { saveJson } from "./_helpers"
import { api } from "../api/apiRoot"

function getAllPosts() {
	let posts = require("../db/posts.json")

	return posts.map((post) => {
		const author = api.user.getUser({ userId: post.authorId })

		return { ...post, author }
	})
}

function createPost({ title, author, description }) {
	const posts = getAllPosts()

	const newPost = {
		id: uuidv4(),
		title,
		author,
		description,
	}

	posts.push(newPost)

	saveJson("posts", posts)

	return newPost
}

function likePost(id, userId) {
	const posts = getAllPosts()
	const post = posts.find((post) => post.id === id)

	if (post.likes.includes(userId)) {
		post.likes = post.likes.filter((like) => like !== userId)
	} else {
		post.likes.push(userId)
	}
	saveJson("posts", posts)

	return post
}

function deletePost(id) {
	const posts = getAllPosts()

	const postIndex = posts.findIndex((post) => post.id === id)

	if (postIndex === -1) {
		throw new Error("Post not found")
	}

	posts.splice(postIndex, 1)

	saveJson("posts", posts)
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
	deletePost,
	getPost,
}
export default posts
