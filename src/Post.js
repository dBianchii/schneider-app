import { useParams } from "react-router-dom"
import { api } from "./server/api/apiRoot"
import { PostComment } from "./components/post/postcomment";
import { CommentInput } from "./components/post/CommentInput";

export default function Post() {
  const params = useParams();
  console.log(params);
  const post = api.posts.getPost(params.post);
  console.log(post);



  return (
    <div className="p-16">
      <div className="mx-48">
        <div className="min-h-screen">
          <h1 className="text-5xl font-bold text-gray-800">{post.title}</h1>
          <h2 className="mt-6 text-4xl font-semibold text-gray-600">
            {post.body}
          </h2>
          <hr className="my-8 h-px w-[700px] border-0 bg-gradient-to-l from-transparent to-gray-600"></hr>
          <p className="mt-8 text-xl">{post.description}</p>
        </div>
        <hr className="my-8 h-px w-[700px] border-0 bg-gradient-to-l from-transparent to-gray-600"></hr>

        <h1 className="text-4xl font-bold text-blue-500">Comentários</h1>
        <div className="mt-8 w-full max-w-[700px]">
          <CommentInput postId={post.id} />
          <section id="comments ">
            {post?.comments.map((item, index) => (
              <PostComment
                key={`PostCommentKey-${index}`}
                name={item.author.name}
                content={item.content}
                image={item.author.image}
                child_comments={item.childComments}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
