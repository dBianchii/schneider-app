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

const posts = [
	{
		id: users[0].posts[0].postId,
		authorId: users[0].id,
		title: "Meu post",
		description: "Meu conteúdo",
		createdAt: new Date().toISOString(),
		likes: [users[0].id, users[1].id],
		comments: [
			{
				id: uuidv4(),
				authorId: users[1].id,
				content: "Meu comentário",
				createdAt: new Date().toISOString(),
			},
			{
				id: uuidv4(),
				authorId: users[0].id,
				content: "Meu comentário 2",
				createdAt: new Date().toISOString(),
			},
		],
	},
	{
		id: users[1].posts[0].postId,
		authorId: users[1].id,
		title: "Meu post 2",
		description: "Meu conteúdo 2",
		createdAt: new Date().toISOString(),
		likes: [users[0].id],
	},
	{
		id: users[2].posts[0].postId,
		authorId: users[2].id,
		title: "Meu post 3",
		description: "Meu conteúdo 3",
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
