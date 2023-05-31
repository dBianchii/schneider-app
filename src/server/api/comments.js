import { api } from "./apiRoot.js"

function getComment(commentId) {
	const comments = JSON.parse(localStorage.getItem("comments"))
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

const comments = {
	getComment,
	getComments,
}

export default comments
