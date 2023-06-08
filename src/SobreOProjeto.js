import { SchneiderAvatar } from "./components/avatar"
import enricoAvatar from "./assets/enrico.JPG"
import gabrielAvatar from "./assets/Gabriel.jpg"

export default function SobreOProjeto() {
	const profiles = [
		{
			name: "Gabriel Bianchi",
			role: <p className="text-center font-semibold">Desenvolvedor</p>,
			image: gabrielAvatar,
		},
		{
			name: "Enrico Pozzi",
			role: <p className="text-center font-semibold">Desenvolvedor</p>,
			image: enricoAvatar,
		},
		{
			name: "Lorenzo",
			role: (
				<p className="text-center font-semibold">
					UX Writing & <br /> Conteúdo Descritivo
				</p>
			),
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
						<div className="flex flex-col items-center space-y-1">
							<SchneiderAvatar src={profile.image} size={"3xl"} />
							<p className="text-lg font-bold text-gray-800">{profile.name}</p>
							<p className="text-lg text-gray-600">{profile.role}</p>
						</div>
					))}
				</div>
			</div>
			<div className="space-y-8 bg-gray-200 px-52 py-8">
				<h1 className="text-4xl font-bold text-gray-600 ">Recursos e tecnologias do curso que foram utilizadas</h1>
				<ul>
					<li className="list-disc text-lg text-gray-600">
						Projeto inicializado usando <span className="font-bold text-schneider-green">Create-React-App</span>
					</li>
					<li className="list-disc text-lg text-gray-600">
						Conceitos de <span className="font-bold text-schneider-green">CSS</span> aplicados utilizando TailwindCSS - uma alternativa ao bootstrap
					</li>
					<li className="list-disc text-lg text-gray-600">
						Roteamento de páginas com <span className="font-bold text-schneider-green">React Router DOM</span>
					</li>
					<li className="list-disc text-lg text-gray-600">React Icons</li>
					<li className="list-disc text-lg text-gray-600">
						Conceitos e utilização de <span className="font-bold text-schneider-green">React Hooks</span> para responsividade
					</li>
					<li className="list-disc text-lg text-gray-600">
						Validação de formulários com <span className="font-bold text-schneider-green">React Hook Form</span> e <span className="font-bold text-schneider-green">Yup</span>
					</li>
					<li className="list-disc text-lg text-gray-600">
						Tratamento de dados utilizando funções <span className="font-bold text-schneider-green">Javascript</span>
					</li>
				</ul>
			</div>
		</>
	)
}
