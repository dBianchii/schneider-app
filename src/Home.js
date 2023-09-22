import { api } from "./server/api/apiRoot";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai";
import { ActionButton } from "./components/button";
import { SchneiderAvatar } from "./components/avatar";
import { useNavigate } from "react-router-dom";
import { CreatePostModal } from "./components/createPostModal";
import { SavePost } from "./components/savePost";

export default function Home() {
  const [posts, setPosts] = useState(api.posts.getAllPosts());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const params = useParams();
  const page = Number(params.page) || 0;

  const perPage = 6;

  const start = page * perPage;
  const end = start + perPage;
  const paginatedPosts = posts.slice(start, end);

  const totalPages = Math.ceil(posts.length / perPage);
  const session = api.session.getLoggedUser();

  return (
    <>
      <section className="min-h-[82.5vh] space-y-6 p-10 ">
        <h4 className="text-4xl font-bold text-gray-800 dark:text-white">
          Últimos posts
        </h4>
        {session && (
          <ActionButton onClick={setIsModalOpen}>Criar post</ActionButton>
        )}
        <div className="mx-20 grid  grid-cols-3 gap-4">
          {paginatedPosts.map((post, i) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <Pagination currentPage={page} totalPages={totalPages} />
      </section>

      {isModalOpen && (
        <CreatePostModal setIsModalOpen={setIsModalOpen} setPosts={setPosts} />
      )}
    </>
  );
}

function PostCard({ post }) {
  const navigate = useNavigate();
  const user = api.session.getLoggedUser();

  const [liked, setLiked] = useState(user && post.likes.includes(user?.id));
  const [likes, setLikes] = useState(post.likes.length);

  return (
    <a href={`/post/${post.id}`}>
      <div className="h-60 max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-600 dark:bg-slate-950 dark:shadow-slate-800">
        {post.image && (
          <a href={`/post/${post.id}`}>
            <img className="rounded-t-lg" src={post.image} alt="imagemDoPost" />
          </a>
        )}

        <div className="flex flex-col justify-evenly p-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-white">
            {post.title}
          </h5>
          <p className="mb-3 text-base font-normal text-gray-600 dark:text-gray-200">
            {post.description}
          </p>
          <a className="mt-4 flex flex-row" href={`/user/${post.authorId}`}>
            <SchneiderAvatar src={post.author?.image ?? ""} size={"sm"} />
            <span className="ml-2 text-base text-gray-600 dark:text-gray-500">
              {post.author.name}
            </span>
          </a>
          <div className="mt-4 flex flex-row">
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
                className={`ml-1 font-bold ${
                  user && liked
                    ? "text-gray-900 dark:text-gray-200"
                    : "text-gray-400"
                }`}
              >
                {likes}
              </p>
            </div>

            <div className="flex items-center">
              <AiOutlineComment
                className={`ml-4 h-8 w-8 ${
                  user && post.comments.find((x) => x === user.id)
                    ? "text-blue-400"
                    : "text-gray-400 hover:text-blue-400"
                }`}
              />
              <p
                className={`ml-1 font-bold ${
                  post.comments?.length ? "text-gray-900" : "text-gray-400"
                }`}
              >
                {post.comments?.length ?? 0}
              </p>
            </div>
            <div className="flex items-center">
              {user && <SavePost postId={post.id} />}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

function Pagination({ currentPage, totalPages }) {
  const getPageLink = (page) => {
    return `/page/${page}`;
  };

  const renderPaginationItems = () => {
    const paginationItems = [];

    for (let i = 0; i <= totalPages - 1; i++) {
      paginationItems.push(
        <li key={i}>
          <a
            href={getPageLink(i)}
            className={`${
              currentPage === 0 && "pointer-events-none text-gray-500"
            } ml-0 border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700`}
          >
            {i}
            {currentPage === i && <span> (atual)</span>}
          </a>
        </li>
      );
    }

    return paginationItems;
  };

  return (
    <nav aria-label="Pagination" className="mt-4 text-center">
      <ul className="inline-flex -space-x-px">
        <li>
          <a
            href={getPageLink(currentPage - 1)}
            tabIndex="-1"
            className={`${
              currentPage === 0 &&
              "pointer-events-none cursor-not-allowed text-gray-500 transition-colors"
            } ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight hover:bg-gray-100 disabled:opacity-75`}
          >
            Anterior
          </a>
        </li>
        {renderPaginationItems()}
        <li>
          <a
            href={getPageLink(currentPage + 1)}
            tabIndex="-1"
            className={`${
              currentPage === totalPages - 1 &&
              "pointer-events-none text-gray-500 transition-colors"
            } ml-0 rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight hover:bg-gray-100 disabled:opacity-75`}
          >
            Próximo
          </a>
        </li>
      </ul>
    </nav>
  );
}
