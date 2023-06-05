import { SchneiderAvatar } from "./components/avatar"

export default function SobreOProjeto() {
	const profiles = [
		{
			name: "Gabriel Bianchi",
			role: "Desenvolvedor",
			image: "https://avatars.githubusercontent.com/u/60052506?v=4",
		},
		{
			name: "Enrico",
			role: "Desenvolvedor",
			image: "https://avatars.githubusercontent.com/u/60052506?v=4",
		},
		{
			name: "Lorenzo",
			role: "Desenvolvedor",
			image: "https://avatars.githubusercontent.com/u/60052506?v=4",
		},
	]

	return (
		<>
			<div className="mx-52 flex flex-col items-center space-y-8">
				<h1 className="mt-12 text-4xl font-bold text-gray-800">Bem vindo ao SchneiderConnect!</h1>
				<hr className="my-8 h-[5px] w-[700px] rounded-full bg-gradient-to-r from-transparent via-schneider-green to-transparent"></hr>

				<p className="text-center text-lg text-gray-600">
					lorem ipsum dolor sit amet, consectetur adipiscing elit. sed euismod, nisl eget aliquam ultricies, nunc nisl ultricies arcu, quis ultricies nisl nisl vitae nisl. sed euismod, nisl eget aliquam ultricies, nunc nisl ultricies arcu, quis ultricies nisl nisl vitae nisl. sed euismod, nisl eget
					aliquam ultricies, nunc nisl ultricies arcu, quis ultricies nisl nisl vitae nisl. sed euismod, nisl eget aliquam ultricies, nunc nisl ultricies arcu, quis ultricies nisl nisl vitae nisl. sed euismod, nisl eget aliquam
				</p>
			</div>
			<div className="mt-8 flex flex-col items-center space-y-8 bg-schneider-green/60 py-16">
				<iframe className="aspect-video h-80" src="https://www.youtube.com/embed/R1FG54FY-18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
			<div className="flex flex-col items-center space-y-8 py-8">
				<div className="my-4 flex flex-row space-x-24">
					{profiles.map((profile) => (
						<div className="flex flex-col items-center space-y-2">
							<SchneiderAvatar src={profile.image} size={"3xl"} />
							<p className="text-lg font-bold text-gray-800">{profile.name}</p>
							<p className="text-lg text-gray-600">{profile.role}</p>
						</div>
					))}
				</div>
			</div>
			<div className="space-y-8 bg-gray-200 px-32 py-8">
				<h1 className="text-4xl font-bold text-gray-600 ">Recursos e tecnologias do curso que foram utilizadas</h1>
				<ul>
					<li className="text-lg text-gray-600">Projeto inicializado usando Create-React-App</li>
					<li className="text-lg text-gray-600">Conceitos de CSS aplicados utilizando TailwindCSS - uma alternativa ao bootstrap</li>
					<li className="text-lg text-gray-600">React Router</li>
					<li className="text-lg text-gray-600">React Icons</li>
					<li className="text-lg text-gray-600">React Hooks</li>
					<li className="text-lg text-gray-600">Javascript, funções</li>
				</ul>
			</div>
		</>
	)
}
