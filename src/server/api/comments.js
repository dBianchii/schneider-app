import { api } from "./apiRoot.js"
import session from "./session.js"
import { v4 as uuidv4 } from "uuid"

function getComment(commentId) {
	const comments = JSON.parse(localStorage.getItem("comments")) || []
	const comment = comments.find((comment) => comment.id === commentId)
	comment.author = api.user.getUser({ userId: comment.authorId })
	if (!comment) throw new Error("Nenhum comentário encontrado")
	return comment
}

function getComments(commentIdArray) {
	return commentIdArray.map((commentId) => {
		const comment = api.comments.getComment(commentId)
		comment.author = api.user.getUser({ userId: comment.authorId })
		comment.childComments = getComments(comment.childComments)
		return comment
	})
}

function createComment(postId, content) {
	const allPosts = JSON.parse(localStorage.getItem("posts")) || []
	const allComments = JSON.parse(localStorage.getItem("comments")) || []
	const user = session.getLoggedUser()

	const postComment = {
		id: uuidv4(),
		authorId: user.id,
		content,
		createdAt: new Date().toISOString(),
		childComments: [],
	}
	allComments.push(postComment)

	allPosts.find((post) => post.id === postId).comments.push(postComment.id)

	localStorage.setItem("posts", JSON.stringify(allPosts))
	localStorage.setItem("comments", JSON.stringify(allComments))

	return postComment
}

function createChildComment(commentId, content) {
	const allComments = JSON.parse(localStorage.getItem("comments")) || []
	const user = session.getLoggedUser()

	const postComment = {
		id: uuidv4(),
		authorId: user.id,
		content,
		createdAt: new Date().toISOString(),
		childComments: [],
	}
	allComments.push(postComment)

	allComments.find((x) => x.id === commentId).childComments.push(postComment.id)

	localStorage.setItem("comments", JSON.stringify(allComments))

	return postComment
}

const comments = {
	getComment,
	getComments,
	createComment,
	createChildComment,
}

export default comments
