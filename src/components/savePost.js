import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import user from "../server/api/user";
import session from "../server/api/session";
import { useEffect, useState } from "react";

export function SavePost({ postId }) {
  const [isSaved, setIsSaved] = useState(false);
  const sesh = session.getLoggedUser();

  function checkIfPostIsSaved() {
    const sesh = session.getLoggedUser();
    const savedPosts = user.getUserSavedPosts({ userId: sesh.id });

    const isPostSaved = savedPosts.includes(postId);

    return setIsSaved(isPostSaved);
  }

  function savePost(e) {
    e.preventDefault();
    const sesh = session.getLoggedUser();
    user.savePostToUser(postId, sesh.id);

    return setIsSaved(true);
  }

  function removePost(e) {
    e.preventDefault();
    const sesh = session.getLoggedUser();
    user.removeSavedPost(postId, sesh.id);

    return setIsSaved(false);
  }

  useEffect(() => {
    if (sesh) {
      checkIfPostIsSaved();
    }
  }, []);

  return (
    <div className="rounded-md p-3 ">
      {isSaved ? (
        <IoBookmark
          onClick={removePost}
          className={`ml-4 h-7 w-7 text-blue-400 `}
        />
      ) : (
        <IoBookmarkOutline
          onClick={savePost}
          className={`ml-4 h-7 w-7 text-gray-400 hover:text-blue-400`}
        />
      )}
    </div>
  );
}
