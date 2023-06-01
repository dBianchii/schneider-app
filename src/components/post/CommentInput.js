import { useState } from "react"
import comments from "../../server/api/comments" 

export const CommentInput = ({postId}) => {
    const [ comment, setComment ] = useState('')

    function handleSubmit() {
        if(comment === '') {
            return
        }
        return comments.createComment(postId, comment)

    }

    return (
        <div className="w-full flex flex-col gap-3" >
        <textarea onChange={(event) => setComment(event.target.value)} className="w-full h-40 border rounded bg-white resize-none focus-within:outline-none focus-within:ring-1 text-sm p-2"  />
        <button onClick={handleSubmit} className="px-6 text ml-auto py-1 bg-slate-800 hover:bg-slate-700 duration-100 text-white w-fit rounded" >Comentar</button>
        </div>
    )
}