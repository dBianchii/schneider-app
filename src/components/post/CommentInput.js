import { useState } from "react"
import comments from "../../server/api/comments" 
import { api } from "../../server/api/apiRoot"

export const CommentInput = ({postId, setNewComment}) => {
    const [ comment, setComment ] = useState('')
    const user = api.session.getLoggedUser()

    function handleSubmit() {
        if(!user) {
            return window.alert("Você precisa fazer login para comentar")
        }
        if(comment === '') {
            return
        }
        comments.createComment(postId, comment)

        return setNewComment()

    }

    return (
        <div className="w-full flex flex-col gap-3" >
        <textarea onChange={(event) => setComment(event.target.value)} className="w-full h-40 border-gray-400 rounded bg-white resize-none focus-within:outline-none border focus-within:ring-2 ring-offset-1 text-sm p-2 duration-100"  />
        <button onClick={handleSubmit} className="px-6 text ml-auto py-1 bg-slate-800 hover:bg-slate-700 duration-100 text-white w-fit rounded" >Comentar</button>
        </div>
    )
}