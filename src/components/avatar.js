import * as Avatar from "@radix-ui/react-avatar"

export function SchneiderAvatar({ src, size }) {
	//SIZES: sm, md
	return (
		<Avatar.Root className={`inline-flex ${size == "sm" ? "h-6 w-6" : "h-[45px] w-[45px]"} select-none items-center justify-center overflow-hidden rounded-full align-middle`}>
			<Avatar.Image className={`transition-color h-full w-full rounded-[inherit] object-cover`} src={src} alt="Colm Tuite" />
			<Avatar.Fallback className={`leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium text-schneider-green`} delayMs={600}>
				<img alt="schneider-avatar" src={"https://geheugenvanoost.amsterdam/image/2019/3/28/custom_avatar_oost.png%28%29%28A1AA9718B0A7004BA9DA7BBE5B7A6C4C%29.jpg"} />
			</Avatar.Fallback>
		</Avatar.Root>
	)
}
