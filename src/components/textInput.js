export function TextInput({ title, register, error }) {
  return (
    <div className="relative flex w-full flex-col gap-2 pb-2">
      <label htmlFor={title} className="font-medium dark:text-white">
        {title}
      </label>
      <input
        {...register}
        type="text"
        id={title}
        className="h-9 w-full rounded-md border border-gray-500 px-2 font-light outline-2 outline-transparent duration-100 focus-within:outline-green-400"
      />
      <p className="absolute -bottom-3 text-sm text-red-500">
        {error?.message}
      </p>
    </div>
  );
}
