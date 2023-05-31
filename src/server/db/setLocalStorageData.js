import { comment } from "postcss"
import { v4 as uuidv4 } from "uuid"

const users = [
	{
		id: uuidv4(),
		image: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
		name: "Jiulia Santos",
		email: "jiulia@schneider.com",
		posts: [
			{
				postId: uuidv4(),
			},
		],
		password: "123456",
	},
	{
		id: uuidv4(),
		name: "Lorenzo",
		email: "lorenzo@schneider.com",
		posts: [
			{
				postId: uuidv4(),
			},
		],
		password: "1234563",
	},
	{
		id: uuidv4(),
		name: "Gabriel",
		email: "gabriel@schneider.com",
		image: "https://lh3.googleusercontent.com/a/AGNmyxYwLT_qbHap7Qn_IHQTBkdXK_rMPrC-BVp2UJJa=s96-c",
		posts: [
			{
				postId: uuidv4(),
			},
		],
		password: "43234",
	},
]

const childComment1Id = uuidv4()
const childComment2Id = uuidv4()
const childComment3Id = uuidv4()

const comments = [
	{
		isParent: true,
		id: uuidv4(),
		authorId: users[0].id,
		content: "Meu comentário",
		createdAt: new Date().toISOString(),
		childComments: [childComment1Id, childComment2Id],
	},
	{
		isParent: false,
		id: childComment1Id,
		authorId: users[0].id,
		content: "Meu comentário 2",
		createdAt: new Date().toISOString(),
		childComments: [childComment3Id],
	},
	{
		isParent: false,
		id: childComment2Id,
		authorId: users[0].id,
		content: "Meu comentário 3",
		createdAt: new Date().toISOString(),
		childComments: [],
	},
	{
		isParent: false,
		id: childComment3Id,
		authorId: users[0].id,
		content: "Meu comentário 4",
		createdAt: new Date().toISOString(),
		childComments: [],
	},
	{
		isParent: true,
		id: uuidv4(),
		authorId: users[1].id,
		content: "Meu comentário 5",
		createdAt: new Date().toISOString(),
		childComments: [],
	},
]

const posts = [
	{
		id: users[0].posts[0].postId,
		authorId: users[0].id,
		title: "Meu post",
		description: "Meu conteúdo",
		body: "Meu corpo",
		createdAt: new Date().toISOString(),
		likes: [users[0].id, users[1].id],
		comments: [comments[0]],
	},
	{
		id: users[1].posts[0].postId,
		authorId: users[1].id,
		title: "Meu post 2",
		description: "Meu conteúdo 2",
		body: "Meu corpo2",
		createdAt: new Date().toISOString(),
		likes: [users[0].id],
		comments: [comments[4]],
	},
	{
		id: users[2].posts[0].postId,
		authorId: users[2].id,
		title: "Meu post 3",
		description: "Meu conteúdo 3",
		body: "Meu corpo 3",
		createdAt: new Date().toISOString(),
		likes: [],
	},
]

const session = {
	loggedUserId: users[0].id,
}

export function setLocalStorageData() {
	localStorage.setItem("users", JSON.stringify(users))
	localStorage.setItem("posts", JSON.stringify(posts))
	localStorage.setItem("session", JSON.stringify(session))
}
