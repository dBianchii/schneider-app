export const ChildComment = ({ item }) => {
	return (
		<div className="ml-auto w-[95%]">
			<div className="flex items-center gap-3">
				<div className="relative">
					<img src={item.author.image} className="h-10 w-10 rounded-full border-2 border-emerald-400 object-cover  shadow-emerald-400" />
					<div className="absolute -top-6 left-0 right-0 mx-auto h-6 w-[2px] bg-gray-300" />
				</div>
				<h3 className="font-bold">
					{item.author.name}
					<br />
				</h3>
			</div>
			<p className="mt-2 text-gray-600">{item.content}</p>
		</div>
	)
}
