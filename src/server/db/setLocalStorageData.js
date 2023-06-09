import { v4 as uuidv4 } from "uuid"

const users =[
	{
	  id: "12ef6180-7200-4087-8e8f-45268828eea2",
	  image: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
	  name: "Jiulia Santos",
	  email: "jiulia@schneider.com",
	  followers: [
		"7e233ca7-f1fc-45a3-8a6f-e8977dd53910"
	  ],
	  posts: [
		{
		  postId: "6c87dbc4-3e9b-4bad-a49f-20c2088e5404"
		}
	  ],
	  password: "EuGostoDeBolo123"
	},
	{
	  id: "7e233ca7-f1fc-45a3-8a6f-e8977dd53910",
	  name: "João Rodriguez",
	  email: "rodriguez@schneider.com",
	  followers: [],
	  posts: [
		{
		  postId: "cd8b9ef5-7e82-447e-b356-54f6623ff325"
		}
	  ],
	  password: "EuAmoReact!"
	},
	{
	  id: "3422afd7-4108-426e-8cee-6d165545dc2e",
	  name: "Suellen Nakamoto",
	  email: "suellenNakamoto@schneider.com",
	  followers: [
		"7e233ca7-f1fc-45a3-8a6f-e8977dd53910"
	  ],
	  image: "https://gravatar.com/avatar/79fcbaf7e0a312decb04e94ce3e2ac94?s=400&d=robohash&r=x",
	  posts: [
		{
		  postId: "3d11110f-e0b1-47ac-a872-7b974f826ec6"
		}
	  ],
	  password: "EuGostoDeTailwind25!"
	},
	{
	  id: "355014e7-a3de-443b-b56c-5148077b1040",
	  name: "Pedro Roçini",
	  email: "pedroRocini@schneider.com",
	  followers: [
		"7e233ca7-f1fc-45a3-8a6f-e8977dd53910"
	  ],
	  image: "https://i.imgur.com/qkDf8vg.png",
	  posts: [
		{
		  postId: "f9e19282-b54a-4e8c-b01f-3926025a16c3"
		}
	  ],
	  password: "EuNaoGostoDeBootstrap!23"
	}
  ]

const comments = [
	{
	  id: "ec76f464-5f17-44b7-96e6-fb49ec7694f8",
	  authorId: "12ef6180-7200-4087-8e8f-45268828eea2",
	  content: "Ai meu Deus, eu adorei a ideia! A minha filha iria adorar fazer os próprios brinquedos.",
	  createdAt: "2023-06-09T00:07:23.333Z",
	  childComments: []
	},
	{
	  id: "b6c2d51e-b755-4b83-b44c-6a6aaf0e4c92",
	  authorId: "7e233ca7-f1fc-45a3-8a6f-e8977dd53910",
	  content: "Sim Pedro! Elas são simplesmente facilitadoras!",
	  createdAt: "2023-06-09T17:24:55.614Z",
	  childComments: []
	}
  ]

const posts = [
	{
	  id: "03c22785-e994-4ccb-9538-473f51179b0f",
	  title: "Óleo de Cozinha",
	  authorId: "7e233ca7-f1fc-45a3-8a6f-e8977dd53910",
	  description: "O que faço de sustentável em casa.",
	  body: "Eu e minha família guardamos nosso óleo usado em uma garrafa pet para ser reutilizado mais tarde, fiz umas pesquisas recentemente e vi que descartar ele na pia causaria diversos problemas para a biologia marinha! Além disso, como uma forma de abaixar os gastos da conta de luz, aplicamos painéis solares fotovoltaicos, o que ajudou bastante! Isso além de nos ajudar financeiramente, também descobri que reduz o impacto nas mudanças climáticas!",
	  likes: [
		"355014e7-a3de-443b-b56c-5148077b1040"
	  ],
	  comments: [],
	  author: {
		id: "7e233ca7-f1fc-45a3-8a6f-e8977dd53910",
		name: "João Rodriguez",
		email: "rodriguez@schneider.com",
		followers: [],
		posts: [
		  {
			postId: "cd8b9ef5-7e82-447e-b356-54f6623ff325"
		  }
		],
		password: "EuAmoReact!"
	  }
	},
	{
	  id: "f19ad768-7ee5-4c91-8738-f4f503e349f2",
	  title: "Criação de brinquedos recicláveis",
	  authorId: "3422afd7-4108-426e-8cee-6d165545dc2e",
	  description: "Como ajudei uma instituição para crianças com produtos recicláveis.",
	  body: "Ultimamente eu e meu marido tivemos a ideia de começar uma colheita reciclável aqui no prédio, sabe, para sermos mais organizados com os outros. Acontece que a ideia acabou pegando pelo condomínio inteiro e os vizinhos estão bem ativos em relação a isso, o que foi bem legal da parte deles! Logo meu marido teve a ideia de fazer alguns brinquedos caseiros para uma instituição de crianças carentes aqui perto de casa, o que foi simplesmente INCRÍVEL! Ver aquelas crianças brincando com cada um deles me marcou na alma! Uma sensação muito boa que jamais esquecerei.",
	  likes: [
		"12ef6180-7200-4087-8e8f-45268828eea2",
		"355014e7-a3de-443b-b56c-5148077b1040"
	  ],
	  comments: [
		"ec76f464-5f17-44b7-96e6-fb49ec7694f8"
	  ],
	  author: {
		id: "3422afd7-4108-426e-8cee-6d165545dc2e",
		name: "Suellen Nakamoto",
		email: "suellenNakamoto@schneider.com",
		followers: [
		  "7e233ca7-f1fc-45a3-8a6f-e8977dd53910"
		],
		image: "https://lh3.googleusercontent.com/a/AGNmyxYwLT_qbHap7Qn_IHQTBkdXK_rMPrC-BVp2UJJa=s96-c",
		posts: [
		  {
			postId: "3d11110f-e0b1-47ac-a872-7b974f826ec6"
		  }
		],
		password: "EuGostoDeTailwind25!"
	  }
	},
	{
	  id: "d2e3d49e-7f92-4bb5-9302-55ff3ed73cc3",
	  title: "Reutilização de Garrafas Pet",
	  authorId: "12ef6180-7200-4087-8e8f-45268828eea2",
	  description: "Olá! Eu vim contar como eu faço aqui em casa para reutilizar algumas garrafas pet.",
	  body: "Então, tudo começou quando minha filha teve um trabalho de escola sobre reciclagem. Ela acabou entrando bastante na ideia e foi bem a fundo nessa temática! Acabou que eu tive que ajudar ela no trabalho e isso acabou mudando radicalmente nosso dia a dia para melhor! Eu tenho um costume desde pequena de ter muitas plantas em casa, principalmente manjericão e cebolinha, isso facilita muito para cozinhar com ingredientes frescos. Como minha filha tem um amor GIGANTESCO por água com gás, a gente acabou tendo a ideia de reutilizar a garrafa pet como vaso para minhas plantinhas. Foi simplesmente incrível a mudança, além de que minha filha acaba pintando os potinhos e se diverte muito no processo. Minha área está simplesmente LINDA!",
	  likes: [
		"355014e7-a3de-443b-b56c-5148077b1040",
		"7e233ca7-f1fc-45a3-8a6f-e8977dd53910"
	  ],
	  comments: [],
	  author: {
		id: "12ef6180-7200-4087-8e8f-45268828eea2",
		image: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
		name: "Jiulia Santos",
		email: "jiulia@schneider.com",
		followers: [
		  "7e233ca7-f1fc-45a3-8a6f-e8977dd53910"
		],
		posts: [
		  {
			postId: "6c87dbc4-3e9b-4bad-a49f-20c2088e5404"
		  }
		],
		password: "EuGostoDeBolo123"
	  }
	},
	{
	  id: "3e6d3aa2-4562-494b-a120-9c2bed088b3c",
	  title: "Eco Bags",
	  authorId: "355014e7-a3de-443b-b56c-5148077b1040",
	  description: "Como as eco bags facilitaram minha vida.",
	  body: "Recentemente meu marido chegou com uma eco bag em casa após voltar do mercado, sinceramente eu tinha achado um desperdício de dinheiro, já temos as sacolas do mercado, pra que uma sacola de trinta reais? Eu estava completamente errado, aquela sacola simplesmente adiantou muito nas nossas compras mensais! Eu consigo carregar tanta coisa nela, além de que com alguns minutinhos de pesquisa eu vi que as sacolas plásticas acabam prejudicando o meio ambiente pela demora da decomposição, mas isso mudou muito com a eco bag! Eu simplesmente VICIEI nela, acabei comprando outras e agora eu estou com umas seis. Espero que vocês adotem essa ideia também, facilitou muito minha vida.",
	  likes: [
		"7e233ca7-f1fc-45a3-8a6f-e8977dd53910"
	  ],
	  comments: [],
	  author: {
		id: "355014e7-a3de-443b-b56c-5148077b1040",
		name: "Pedro Roçini",
		email: "pedroRocini@schneider.com",
		followers: [
		  "7e233ca7-f1fc-45a3-8a6f-e8977dd53910"
		],
		image: "https://i.imgur.com/qkDf8vg.png",
		posts: [
		  {
			postId: "f9e19282-b54a-4e8c-b01f-3926025a16c3"
		  }
		],
		password: "EuNaoGostoDeBootstrap!23"
	  }
	},
	{
	  id: "1fead152-4959-450a-9059-f849f33e7d4e",
	  title: "Pilhas Recarregáveis",
	  authorId: "355014e7-a3de-443b-b56c-5148077b1040",
	  description: "Essas pilhas recarregáveis são incríveis!",
	  body: "Minha filha costuma a brincar muito naquele vídeo game dela, acho que era Ex Box ou Xbox, não sei direito, mas sei que gasta muita pilha! Era um absurdo gastar com pilha quase todo mês, sem contar que isso prejudica bastante a natureza com o líquido que sai dela. Com isso, minha esposa decidiu comprar uma pilha que recarregava por entrada USB e eu achei um MÁXIMO! Simplesmente não gasto mais com pilhas! Recomendo muito que vocês comprem também, nem é cara!",
	  likes: [
		"7e233ca7-f1fc-45a3-8a6f-e8977dd53910"
	  ],
	  comments: [
		"b6c2d51e-b755-4b83-b44c-6a6aaf0e4c92"
	  ],
	  author: {
		id: "355014e7-a3de-443b-b56c-5148077b1040",
		name: "Pedro Roçini",
		email: "pedroRocini@schneider.com",
		followers: [
		  "7e233ca7-f1fc-45a3-8a6f-e8977dd53910"
		],
		image: "https://i.imgur.com/qkDf8vg.png",
		posts: [
		  {
			postId: "f9e19282-b54a-4e8c-b01f-3926025a16c3"
		  }
		],
		password: "EuNaoGostoDeBootstrap!23"
	  }
	},
	{
		id: "637572fb-3cad-4f72-bfc7-546dfa0af522",
		title: "Redução de Plástico na Empresa",
		authorId: "12ef6180-7200-4087-8e8f-45268828eea2",
		description: "Plástico é um mal que precisamos não só sabermos sobre, é necessário compreensão e mudança de hábitos. \n\n",
		body: "Oi Pessoal, estava refletindo sobre o uso de plástico na empresa. \nTodo mundo já ouviu falar que o plástico é extremamente prejudicial para o meio ambiente, mas só saber não basta, é preciso que haja compreensão desses impactos! \n\nSegundo um estudo da World Wide Fund for Nature (WWF), mostra que até 2050 haverá mais plástico nos oceanos do que peixes, se o problema não for solucionado nos próximos anos. Além disso, há registro de pesquisas com plástico sendo encontrados na água potável que a gente bebe, além de ser apontado como uma das razões da problemática que contribui para a infertilidade de homens! \nOu seja, é muito mais que acabar com os mares e animais marinhos (como se não bastasse), que parecem tão longe de nós. Esse problema já está entre a gente! \n\nCerca de 11 milhões de toneladas desses resíduos são descartados na natureza anualmente só no Brasil! \nPensei que podemos começar do básico: E se a gente deixasse de usar plástico para os nossos santos cafezinhos diários e trouxéssemos cada um, sua própria caneca de café e sua própria garrafa de água?\n\nPode até parecer uma pequena ação, mas se todos aderirem e formos cada vez mais trazendo essa consciência para nossa vida particular, nossas relações etc, podemos contribuir muito para com a natureza. \nO que acham?",
		likes: [
		  "12ef6180-7200-4087-8e8f-45268828eea2"
		],
		comments: [],
		author: {
		  id: "12ef6180-7200-4087-8e8f-45268828eea2",
		  image: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
		  name: "Jiulia Santos",
		  email: "jiulia@schneider.com",
		  followers: [],
		  posts: [
			{
			  postId: "814ed828-7129-4fe7-8615-1311c43650c1"
			}
		  ],
		  password: "EuGostoDeBolo123"
		}
	  },
	  {
		id: "fc8cb74e-fb4a-43d7-b4be-301eaf44d922",
		title: "Agricultura familiar",
		authorId: "3422afd7-4108-426e-8cee-6d165545dc2e",
		description: "Conhecendo a sua importância para o País e para a sustentabilidade!",
		body: "A agricultura familiar é uma grande aliada da sustentabilidade, ela é desenvolvida por pequenos produtores, em pequenas propriedades rurais e assentamentos, tudo o que é produzido serve de alimento para essas famílias, mas principalmente, alimenta parte da população brasileira! 70% dos alimentos consumidos no Brasil, vem da agricultura familiar! \nÀs vezes a gente ouve tanto falar de agronegócio, mas ele não alimenta o País, quem realmente alimenta a população são os pequenos produtores! Sem falar que muitas famílias utilizam o que é chamado de “agrofloresta”, que é basicamente um modelo agrícola que consegue associar a produção de alimentos e a preservação das florestas, trazendo vantagens para os dois ecossistemas. Dessa forma, não agride o solo e consegue uma gama maior de alimentos. Diferente da monocultura, que se baseia na exploração massiva do solo, para plantar apenas uma cultura que não servirá de alimento para a população e sim ração de gado e importação, gerando dinheiro para grandes latifundiários. Os latifúndios tiram as terras dessas famílias, contribuindo para o êxodo rural, impactando negativamente o meio ambiente e a vida de famílias, renda, empregos e consequentemente, tira a qualidade e acesso da comida que chega até o nosso prato. \nÉ muito importante entender isso e fortalecer a agricultura familiar, sabe como? Comprando diretamente deles!\nEu e a minha família recebemos semanalmente cestas de frutas, verduras e legumes diversos plantados por pequenos produtores aqui da nossa cidade! A gente recebe direto em casa! Além de serem sem agrotóxicos é muito gratificante contribuir com essas famílias e contribuir com o meio ambiente! Vou passar o link para vocês se inscreverem!!! Depois me contem!\n\nhttps://codeagro.agricultura.sp.gov.br/codeagro/noticia/533/projeto-cesta-verde-avanca-para-segunda-fase\n",
		likes: [],
		comments: [],
		author: {
		  id: "3422afd7-4108-426e-8cee-6d165545dc2e",
		  name: "Suellen Nakamoto",
		  email: "suellenNakamoto@schneider.com",
		  followers: [],
		  image: "https://lh3.googleusercontent.com/a/AGNmyxYwLT_qbHap7Qn_IHQTBkdXK_rMPrC-BVp2UJJa=s96-c",
		  posts: [
			{
			  postId: "019a7c22-f783-4e2c-8e0d-db2567d97a1e"
			}
		  ],
		  password: "EuGostoDeTailwind25!"
		}
	  }
  ]

const session = {
	loggedUserId: users[0].id,
}

export function setLocalStorageData() {
	localStorage.setItem("users", JSON.stringify(users))
	localStorage.setItem("posts", JSON.stringify(posts))
	localStorage.setItem("session", JSON.stringify(session))
	localStorage.setItem("comments", JSON.stringify(comments))
}
