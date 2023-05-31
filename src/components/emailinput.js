export function EmailInput({ title, register, error }) {
	return (
		<div className="relative flex w-full flex-col gap-2 pb-2">
			<p className="font-medium">{title}</p>
			<input {...register} type="email" className="h-9 w-full rounded-md border px-2 font-light outline-2 outline-transparent duration-100 focus-within:outline-green-400" />
			<p className="absolute -bottom-3 text-sm text-red-500">{error?.message}</p>
		</div>
	)
}
