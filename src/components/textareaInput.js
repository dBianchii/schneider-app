export function TextareaInput({ title, register, height, placeholder, error }) {
  return (
    <div className="relative flex w-full flex-col gap-2 pb-2">
      <p className="font-medium dark:text-white">{title}</p>
      <textarea
        {...register}
        style={{
          height,
        }}
        placeholder={placeholder}
        type="text"
        className="w-full resize-none rounded-md border border-gray-500 p-2 text-sm font-light outline-2 outline-transparent transition-colors duration-100 focus-within:outline-green-400"
      />

      <p className="absolute -bottom-3 text-sm text-red-500">
        {error?.message}
      </p>
    </div>
  );
}
