import { v4 as uuidv4 } from "uuid"
import { api } from "./apiRoot"

function getUser({ userId }) {
	if (!userId) throw new Error("Usuario não encontrado")

	const users = JSON.parse(localStorage.getItem("users")) || []
	const user = users.find((user) => user.id === userId)
	if (!user) throw new Error("Nenhum usuario encontrado")

	return user
}

function getAllUsers() {
	const users = JSON.parse(localStorage.getItem("users")) || []
	return users
}

function registerUser({ email, name, image, password }) {
	const users = getAllUsers()

	const user = users.find((user) => user.email === email)

	if (user) throw new Error("Email já está em uso")

	const newUser = {
		id: uuidv4(),
		email,
		name,
		image,
		password,
		posts: [],
	}

	users.push(newUser)

	localStorage.setItem("users", JSON.stringify(users))

	api.session.logUserIn(newUser.email, newUser.password)

	return newUser
}

const user = {
	getUser,
	getAllUsers,
	registerUser,
}
export default user
