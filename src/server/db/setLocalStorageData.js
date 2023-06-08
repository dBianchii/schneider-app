import { v4 as uuidv4 } from "uuid"

const users = [
	{
		id: "12ef6180-7200-4087-8e8f-45268828eea2",
		image: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
		name: "Jiulia Santos",
		email: "jiulia@schneider.com",
		followers: [],
		posts: [
			{
				postId: uuidv4(),
			},
		],
		password: "EuGostoDeBolo123",
	},
	{
		id: "7e233ca7-f1fc-45a3-8a6f-e8977dd53910",
		name: "João Rodriguez",
		email: "rodriguez@schneider.com",
		followers: [],
		posts: [
			{
				postId: uuidv4(),
			},
		],
		password: "EuAmoReact!",
	},
	{
		id: "3422afd7-4108-426e-8cee-6d165545dc2e",
		name: "Gabriel",
		email: "gabriel@schneider.com",
		followers: [],
		image: "https://lh3.googleusercontent.com/a/AGNmyxYwLT_qbHap7Qn_IHQTBkdXK_rMPrC-BVp2UJJa=s96-c",
		posts: [
			{
				postId: uuidv4(),
			},
		],
		password: "EuAmoTypescript!!",
	},
	{
		id: "355014e7-a3de-443b-b56c-5148077b1040",
		name: "Pedro Roçini",
		email: "pedroRocini@schneider.com",
		followers: [],
		image: "https://i.imgur.com/qkDf8vg.png",
		posts: [
			{
				postId: uuidv4(),
			},
		],
		password: "EuNaoGostoDeBootstrap!23",
	},
]

const childComment1Id = uuidv4()
const childComment2Id = uuidv4()
const childComment3Id = uuidv4()

const comments = [
	{
		id: uuidv4(),
		authorId: users[0].id,
		content: "Meu comentário",
		createdAt: new Date().toISOString(),
		childComments: [childComment1Id, childComment2Id],
	},
	{
		id: childComment1Id,
		authorId: users[0].id,
		content: "Meu comentário 2",
		createdAt: new Date().toISOString(),
		childComments: [childComment3Id],
	},
	{
		id: childComment2Id,
		authorId: users[0].id,
		content: "Meu comentário 3",
		createdAt: new Date().toISOString(),
		childComments: [],
	},
	{
		id: childComment3Id,
		authorId: users[0].id,
		content: "Meu comentário 4",
		createdAt: new Date().toISOString(),
		childComments: [],
	},
	{
		id: uuidv4(),
		authorId: users[1].id,
		content: "Meu comentário 5",
		createdAt: new Date().toISOString(),
		childComments: [],
	},
]

const posts = [
	{
		id: users[3].posts[0].postId,
		authorId: users[3].id,
		title: "Meu post 4",
		description: "Meu conteúdo 4",
		body: "Meu corpo 4",
		createdAt: new Date().toISOString(),
		likes: [],
		comments: [],
	},
	{
		id: users[0].posts[0].postId,
		authorId: users[0].id,
		title: "Meu post",
		description: "Meu conteúdo",
		body: "Meu corpo",
		createdAt: new Date().toISOString(),
		likes: [users[0].id, users[1].id],
		comments: [comments[0].id],
	},
	{
		id: users[1].posts[0].postId,
		authorId: users[1].id,
		title: "Meu post 2",
		description: "Meu conteúdo 2",
		body: "Meu corpo2",
		createdAt: new Date().toISOString(),
		likes: [users[0].id],
		comments: [comments[4].id],
	},
	{
		id: users[2].posts[0].postId,
		authorId: users[2].id,
		title: "Meu post 3",
		description: "Meu conteúdo 3",
		body: "Meu corpo 3",
		createdAt: new Date().toISOString(),
		likes: [],
		comments: [],
	},
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
