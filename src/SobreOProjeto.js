import { SchneiderAvatar } from "./components/avatar";
import enricoAvatar from "./assets/enrico.JPG";
import gabrielAvatar from "./assets/Gabriel.jpg";
import lorenzoAvatar from "./assets/Lorenzo.jpg";
import lucasAvatar from "./assets/Lucas.jpg";
import rodriguezAvatar from "./assets/Rodriguez.jpg";

const profiles = [
  {
    name: "Gabriel Bianchi",
    rm: "RM97325",
    role: <p className="text-center font-semibold">Desenvolvedor</p>,
    image: gabrielAvatar,
  },
  {
    name: "Enrico Pozzi",
    rm: "RM97327",
    role: <p className="text-center font-semibold">Desenvolvedor</p>,
    image: enricoAvatar,
  },
  {
    name: "Lorenzo",
    rm: "RM97318",
    role: (
      <p className="text-center font-semibold">
        UX Writing & <br /> Conteúdo Descritivo
      </p>
    ),
    image: lorenzoAvatar,
  },
  {
    name: "João G. Rodriguez",
    rm: "RM96765",
    role: (
      <p className="text-center font-semibold">
        UX Writing & <br /> Conteúdo Descritivo
      </p>
    ),
    image: rodriguezAvatar,
  },
  {
    name: "Lucas Benedetti",
    rm: "RM96671",
    role: <p className="text-center font-semibold">Pitch do vídeo</p>,
    image: lucasAvatar,
  },
];

export default function SobreOProjeto() {
  return (
    <>
      <div className="mx-52 flex flex-col items-center space-y-8">
        <h1 className="mt-12 text-4xl font-bold text-gray-800">
          Bem vindo ao SchneiderConnect!
        </h1>
        <hr className="my-8 h-[5px] w-[700px] rounded-full bg-gradient-to-r from-transparent via-schneider-green to-transparent"></hr>

        <div className="text-center text-lg text-gray-600">
          O propósito do projeto "Schneider Connect" é possibilitar a melhor
          comunicação entre os colaboradores da{" "}
          <a
            className="text-blue-700 hover:underline"
            href="https://www.se.com/br/pt/"
          >
            Schneider
          </a>{" "}
          para que atinjam uma melhor gestão e sustentabilidade dos recursos.
          Com o Schneider Connect os funcionários poderão interagir e discutir
          maneiras melhores e mais eficientes de executar o trabalho, assim como
          lidar com feedbacks.
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center space-y-8 bg-schneider-green/50 py-16">
        <iframe
          className="aspect-video h-80 rounded-xl"
          src="https://www.youtube.com/embed/Ql-XXgEy91U?si=0tMGUolrl2bXYjCq"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="flex flex-col items-center space-y-8 py-8">
        <div className="my-4 flex flex-row space-x-14">
          {profiles.map((profile, index) => (
            <div key={index} className="flex flex-col items-center">
              <SchneiderAvatar src={profile.image} size={"3xl"} />
              <p className="text-lg font-bold text-gray-800">{profile.name}</p>
              <p className="mt-2 text-lg text-gray-600">{profile.role}</p>
              <p className="text-sm text-gray-400">{profile.rm}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-8 bg-gray-200 px-52 py-8">
        <h1 className="text-4xl font-bold text-gray-600 ">
          Recursos e tecnologias do curso que foram utilizadas
        </h1>
        <ul>
          <li className="list-disc text-lg text-gray-600">
            Projeto inicializado usando{" "}
            <span className="font-bold text-schneider-green">
              Create-React-App
            </span>
          </li>
          <li className="list-disc text-lg text-gray-600">
            Conceitos de{" "}
            <span className="font-bold text-schneider-green">CSS</span>{" "}
            aplicados utilizando TailwindCSS - uma alternativa ao bootstrap
          </li>
          <li className="list-disc text-lg text-gray-600">
            Roteamento de páginas com{" "}
            <span className="font-bold text-schneider-green">
              React Router DOM
            </span>
          </li>
          <li className="list-disc text-lg text-gray-600">
            Conceitos e utilização de{" "}
            <span className="font-bold text-schneider-green">React Hooks</span>{" "}
            para responsividade
          </li>
          <li className="list-disc text-lg text-gray-600">
            Validação de formulários com{" "}
            <span className="font-bold text-schneider-green">
              React Hook Form
            </span>{" "}
            e <span className="font-bold text-schneider-green">Yup</span>
          </li>
          <li className="list-disc text-lg text-gray-600">
            Tratamento de dados utilizando funções{" "}
            <span className="font-bold text-schneider-green">Javascript</span>
          </li>
        </ul>
      </div>
    </>
  );
}
