export function SchneiderAvatar({ src, size = "md" }) {
	//SIZES: sm, md
	let sizeClass = ""
	switch (size) {
		case "sm":
			sizeClass = "h-6 w-6"
			break
		case "md":
			sizeClass = "h-[45px] w-[45px]"
			break
		default:
			sizeClass = "h-[45px] w-[45px]"
	}

	return <img alt="schneider-avatar" src={src ? src : "https://geheugenvanoost.amsterdam/image/2019/3/28/custom_avatar_oost.png%28%29%28A1AA9718B0A7004BA9DA7BBE5B7A6C4C%29.jpg"} className={`${sizeClass} rounded-full object-cover transition-colors`} />
}
