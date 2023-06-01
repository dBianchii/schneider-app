export const PostComment = ({ name, content, image, child_comments }) => {
  return (
    <div class="flex flex-col p-3">
      <div class="flex items-center gap-3">
        <img
          src={image}
          class="h-10 w-10 rounded-full border-2 border-emerald-400 object-cover  shadow-emerald-400"
        />
        <h3 class="font-bold">
          {name}
          <br />
          <span class="text-sm font-normal text-gray-400">Level 1</span>
        </h3>
      </div>
      <p class="mt-2 text-gray-600">{content}</p>
      <button class="text-right text-blue-500">Responder</button>

      <section className="flex flex-col gap-6">
        {child_comments?.map((item, index) => (
          <div className="ml-auto w-[95%]">
            <div class="flex items-center gap-3">
              <div className="relative">
                <img
                  src={item.author.image}
                  class="h-10 w-10 rounded-full border-2 border-emerald-400 object-cover  shadow-emerald-400"
                />
                <div className="absolute -top-6 left-0 right-0 mx-auto h-6 w-[2px] bg-gray-300" />
              </div>
              <h3 class="font-bold">
                {item.author.name}
                <br />
                <span class="text-sm font-normal text-gray-400">Level 1</span>
              </h3>
            </div>
            <p class="mt-2 text-gray-600">{item.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
};
