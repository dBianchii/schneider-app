import { useState } from "react";
import { api } from "../../server/api/apiRoot";
import comments from "../../server/api/comments";

export const ChildCommentInput = ({
  commentId,
  setNewComment,
  setReplyState,
}) => {
  const [comment, setComment] = useState("");
  const user = api.session.getLoggedUser();

  function handleSubmit() {
    if (!user) {
      return window.alert("Você precisa fazer login para comentar");
    }
    if (comment === "") {
      return;
    }
    comments.createChildComment(commentId, comment);

    setReplyState(false);
    return setNewComment();
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <textarea
        onChange={(event) => setComment(event.target.value)}
        className="h-28 w-full resize-none rounded border border-gray-400 bg-white p-2 text-sm ring-offset-1 duration-100 focus-within:outline-none focus-within:ring-2 dark:text-black"
      />
      <button
        onClick={handleSubmit}
        className="text ml-auto w-fit rounded bg-slate-800 px-6 py-1 text-white duration-100 hover:bg-slate-700"
      >
        Comentar
      </button>
    </div>
  );
};
