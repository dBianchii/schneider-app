import { v4 as uuidv4 } from "uuid"
import fs from "fs"

/*------------ Posts Endpoints -----------------*/
export function getAllPosts() {
	const posts = require("./posts.json")

	return posts
}

export function createPost({ title, author, description }) {
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

export function likePost(id, userId) {
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

export function deletePost(id) {
	const posts = getAllPosts()

	const postIndex = posts.findIndex((post) => post.id === id)

	if (postIndex === -1) {
		throw new Error("Post not found")
	}

	posts.splice(postIndex, 1)

	saveJson("posts", posts)
}

/*------------ Helpers -----------------*/
function saveJson(documentName, jsonObj) {
	var jsonContent = JSON.stringify(jsonObj)
	fs.writeFile(`./${documentName}.json`, jsonContent, "utf8", function (err) {
		if (err) {
			console.log("An error occured while writing JSON Object to File.")
			return console.log(err)
		}
	})
}
