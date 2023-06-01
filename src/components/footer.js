export default function Footer() {
	//use tailwindcss to style the footer
	return (
		<footer className="flex h-24 w-full items-center justify-center border-t bg-slate-800">
			<p className="text-center text-white">
				© 2023 -{" "}
				<a className="text-schneider-green hover:underline" rel="noreferrer" target="_blank" href="https://www.se.com/ww/en/">
					Schneider Electric
				</a>
			</p>
		</footer>
	)
}
