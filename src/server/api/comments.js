import { api } from "./apiRoot.js"
import session from "./session.js"
import { v4 as uuidv4} from "uuid"
import posts from "./posts.js"

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

function createComment(postId, content) {
	// {
	// 	isParent: true,
	// 	id: uuidv4(),
	// 	authorId: users[0].id,
	// 	content: "Meu comentário",
	// 	createdAt: new Date().toISOString(),
	// 	childComments: [childComment1Id, childComment2Id],
	// }

	const allPosts = posts.getAllPosts()
	const user = session.getLoggedUser()

	const postComment = {
		isParent: true,
		id: uuidv4(),
		authorId: user.id,
		content,
		createdAt: new Date().toISOString(),
		childComments: []
	}
	 allPosts.map((post) => {
		if(post.id === postId) {
			return post.comments.push(postComment)
		}
	 })

	 const newStorage = localStorage.setItem("comments", JSON.stringify(allPosts))
	return newStorage
}

const comments = {
	getComment,
	getComments,
	createComment
}

export default comments
