import { useParams } from "react-router-dom"
import { api } from "./server/api/apiRoot"
import { PostComment } from "./components/post/postcomment";
import { CommentInput } from "./components/post/CommentInput";
import { useEffect, useState } from "react";

export default function Post() {
  const params = useParams();
  const [ newComment, setNewComment ] = useState(false)
  const [ post, setPost ] = useState(api.posts.getPost(params.post))

  useEffect(() => {
    const thisPost = api.posts.getPost(params.post);

    setPost(thisPost);
  }, [newComment]);

  return (
    <div className="p-16">
      <div className="mx-48">
        <div className="min-h-42">
          <h1 className="text-5xl font-bold text-gray-800">{post.title}</h1>
          <h2 className="mt-6 text-4xl font-semibold text-gray-600">
            {post.description}
          </h2>
          <hr className="my-8 h-px w-[700px] border-0 bg-gradient-to-l from-transparent to-gray-600"></hr>
          <p className="mt-8 text-xl font-light">{post.body}</p>
        </div>
        <hr className="my-8 h-px w-[700px] border-0 bg-gradient-to-l from-transparent to-gray-600"></hr>

        <h1 className="text-4xl font-bold text-blue-500">Comentários</h1>
        <div className="mt-8 w-full max-w-[700px]">
          <CommentInput
            postId={post.id}
            setNewComment={() => setNewComment(!newComment)}
          />
          <section id="comments">
            {post?.comments.map((item, index) => {
              return (
                <PostComment
                  commentId={item.id}
                  key={`PostCommentKey-${index}`}
                  name={item.author.name}
                  content={item.content}
                  image={item.author.image}
                  child_comments={item?.childComments}
                  newComment={() => setNewComment(!newComment)}
                />
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
}
