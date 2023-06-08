import { useState } from "react"
import { ChildComment } from "./childcomment"
import { ChildCommentInput } from "./childcommentInput"
import { SchneiderAvatar } from "../avatar"

export const PostComment = ({ commentId, name, content, image, child_comments, newComment }) => {
	const [replyState, setReplyState] = useState(false)
	const comment = {
		name,
		content,
		image,
		child_comments,
	}

	return (
		<div className="flex flex-col p-3">
			<div className="flex items-center gap-3">
				<SchneiderAvatar src={comment.image} className="h-10 w-10 rounded-full border-2 border-emerald-400 object-cover  shadow-emerald-400" />
				<h3 className="font-bold">
					{comment.name}
					<br />
				</h3>
			</div>
			<p className="mt-2 text-gray-600">{comment.content}</p>
			<button onClick={() => setReplyState(!replyState)} className="text-right text-blue-500">
				{replyState ? "Fechar" : "Responder"}
			</button>
			{replyState && <ChildCommentInput commentId={commentId} setNewComment={newComment} setReplyState={setReplyState} />}

			<section className="flex flex-col gap-6">
				{child_comments?.map((item, index) => (
					<ChildComment item={item} key={`chilcommentkey-${index}`} />
				))}
			</section>
		</div>
	)
}
