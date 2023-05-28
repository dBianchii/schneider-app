import { v4 as uuidv4 } from "uuid"

const users = [
	{
		id: uuidv4(),
		image: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
		name: "Gabriel",
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
		posts: [
			{
				postId: uuidv4(),
			},
		],
		password: "1234563",
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
]

const session = {
	loggedUser: users[0].id,
}

export function setLocalStorageData() {
	localStorage.setItem("users", JSON.stringify(users))
	localStorage.setItem("posts", JSON.stringify(posts))
	localStorage.setItem("session", JSON.stringify(session))
}
