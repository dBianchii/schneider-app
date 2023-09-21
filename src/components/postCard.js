import { useNavigate } from "react-router-dom";
import { api } from "../server/api/apiRoot";
import { useState } from "react";
import { AiFillHeart, AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import { SchneiderAvatar } from "./avatar";
import { SavePost } from "./savePost";

export function PostCard({ post }) {
  const navigate = useNavigate();
  const user = api.session.getLoggedUser();

  const [liked, setLiked] = useState(user && post?.likes?.includes(user?.id));
  const [likes, setLikes] = useState(post?.likes?.length);

  return (
    <a href={`/post/${post.id}`}>
      <div className="w-96 max-w-sm rounded-lg border border-gray-200 bg-white shadow ">
        {post.image && (
          <a href={`/post/${post.id}`}>
            <img className="rounded-t-lg" src={post.image} alt="imagemDoPost" />
          </a>
        )}

        <div className="p-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
            {post?.title}
          </h5>
          <p className="mb-3 text-base font-normal text-gray-600">
            {post?.description}
          </p>
          <a className="mt-4 flex flex-row" href={`/user/${post.authorId}`}>
            <SchneiderAvatar src={post.author?.image ?? ""} size={"sm"} />
            <span className="ml-2 text-base text-gray-600">
              {post.author?.name}
            </span>
          </a>
          <div className="z-50 mt-4 flex flex-row">
            <div
              className="mr-2 flex items-center"
              onClick={(e) => {
                e.preventDefault();
                if (!user) return navigate("/login");
                setLiked((prev) => {
                  const newPost = prev
                    ? api.posts.unlikePost(post.id, user.id)
                    : api.posts.likePost(post.id, user.id);

                  setLikes(newPost.likes.length);

                  return !prev;
                });
              }}
            >
              {user && liked ? (
                <AiFillHeart className="h-8 w-8 text-red-500 transition-colors hover:text-red-500/80" />
              ) : (
                <AiOutlineHeart className="h-8 w-8 text-gray-400 transition-colors hover:text-red-500/80" />
              )}
              <p
                className={`ml-1 font-bold ${user && liked ? "text-gray-900" : "text-gray-400"
                  }`}
              >
                {likes}
              </p>
            </div>

            <div className="flex items-center">
              <AiOutlineComment
                className={`ml-4 h-8 w-8 ${user && post.comments
                  ? "text-blue-400"
                  : "text-gray-400 hover:text-blue-400"
                  }`}
              />
              <p
                className={`ml-1 font-bold ${post.comments?.length ? "text-gray-900" : "text-gray-400"
                  }`}
              >
                {post.comments?.length ?? 0}
              </p>
            </div>

          </div>
        </div>
      </div>
    </a>
  );
}
