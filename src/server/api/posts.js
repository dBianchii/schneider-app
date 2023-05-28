import { v4 as uuidv4 } from "uuid"
import { saveJson } from "./_helpers"

function getAllPosts() {
	const posts = require("../db/posts.json")

	return posts
}

async function createPost({ title, author, description, body }) {
  const posts = getAllPosts();

  const newPost = {
    id: uuidv4(),
    title,
    author,
    description,
    body,
  };

  posts.push(newPost);

  saveJson("posts", posts);

  return newPost;
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

const posts = {
	getAllPosts,
	createPost,
	likePost,
	deletePost,
}
export default posts
