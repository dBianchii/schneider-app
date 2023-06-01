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

	const allPosts = JSON.parse(localStorage.getItem("posts"))
	const allComments = JSON.parse(localStorage.getItem("comments"))
	const user = session.getLoggedUser()

	const postComment = {
		isParent: true,
		id: uuidv4(),
		authorId: user.id,
		content,
		createdAt: new Date().toISOString(),
		childComments: []
	}
	allComments.push(postComment)

	allPosts.map((post) => {
		if(post.id === postId) {
			return post.comments.push(postComment.id)
		}
		return
	})

	localStorage.setItem("posts", JSON.stringify(allPosts))
	localStorage.setItem("comments", JSON.stringify(allComments))

	
	return postComment
}

function createChildComment(commentId, content) {
  //   const allPosts = JSON.parse(localStorage.getItem("posts"));
  const allComments = JSON.parse(localStorage.getItem("comments"));
  const user = session.getLoggedUser();

  const postComment = {
    isParent: true,
    id: uuidv4(),
    authorId: user.id,
    content,
    createdAt: new Date().toISOString(),
    childComments: [],
  };
  allComments.push(postComment);

  allComments.map((comment) => {
    if (comment.id === commentId) {
      return comment.childComments.push(postComment.id);
    }
    return;
  });

  localStorage.setItem("comments", JSON.stringify(allComments));

  return postComment;
}

const comments = {
  getComment,
  getComments,
  createComment,
  createChildComment,
};

export default comments
