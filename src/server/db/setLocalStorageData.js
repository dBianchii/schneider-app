const users = [
	{
		id: "d90e011f-d1ec-461c-897e-2f6038236e00",
		image: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
		name: "Gabriel",
		posts: [
			{
				postId: "d90e011f-d1ec-461c-897e-2f6038236e00",
			},
		],
		password: "123456",
	},
	{
		id: "d90e011f-d1ec-461c-897e-2f6038236e00",
		name: "Lorenzo",
		posts: [
			{
				postId: "d90e011f-d1ec-461c-897e-2f6038236e00",
			},
		],
		password: "1234563",
	},
]

const posts = [
	{
		id: "d90e011f-d1ec-461c-897e-2f6038236e00",
		authorId: "d90e011f-d1ec-461c-897e-2f6038236e00",
		title: "Meu post",
		description: "Meu conteúdo",
		createdAt: "2021-10-19T00:00:00.000Z",
		likes: ["d90e011f-d1ec-461c-897e-2f6038236e00"],
		comments: [
			{
				id: "d90e011f-d1ec-461c-897e-2f6038236e00",
				authorId: "d90e011f-d1ec-461c-897e-2f6038236e00",
				content: "Meu comentário",
				createdAt: "2021-10-19T00:00:00.000Z",
			},
			{
				id: "d90e011f-d1ec-461c-897e-2f6038236e00",
				authorId: "d90e011f-d1ec-461c-897e-2f6038236e00",
				content: "Meu comentário 2",
				createdAt: "2021-10-19T00:00:00.000Z",
			},
		],
	},
	{
		id: "d90e011f-d1ec-461c-897e-2f6038236e00",
		authorId: "d90e011f-d1ec-461c-897e-2f6038236e00",
		title: "Meu post 2",
		description: "Meu conteúdo 2",
		createdAt: "2021-10-19T00:00:00.000Z",
		likes: [
			{
				id: "d90e011f-d1ec-461c-897e-2f6038236e00",
			},
		],
	},
]

const session = {
	loggedUser: "d90e011f-d1ec-461c-897e-2f6038236e00",
}

export function setLocalStorageData() {
	localStorage.setItem("users", JSON.stringify(users))
	localStorage.setItem("posts", JSON.stringify(posts))
	localStorage.setItem("session", JSON.stringify(session))
}
