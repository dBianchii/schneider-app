import { v4 as uuidv4 } from "uuid"
import { api } from "./apiRoot"

function getUser({ userId }) {
	if (!userId) throw new Error("Usuario não encontrado")

	const users = JSON.parse(localStorage.getItem("users")) || []
	const user = users.find((user) => user.id === userId)
	if (!user) throw new Error("Nenhum usuario encontrado")

	return user
}

function getUserSavedPosts({ userId }) {
	const userObject = getUser({ userId })

	return userObject.savedPosts
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
		followers: [],
	}

	users.push(newUser)

	localStorage.setItem("users", JSON.stringify(users))

	api.session.logUserIn(newUser.email, newUser.password)

	return newUser
}

function followUser(userId) {
	const loggedUser = api.session.getLoggedUser()
	if (!loggedUser) throw new Error("Usuario não logado")

	const users = getAllUsers()
	const user = users.find((user) => user.id === userId)
	user.followers.push(loggedUser.id)

	localStorage.setItem("users", JSON.stringify(users))
}

function unfollowUser(userId) {
	const loggedUser = api.session.getLoggedUser()
	if (!loggedUser) throw new Error("Usuario não logado")

	const users = getAllUsers()
	const user = users.find((user) => user.id === userId)
	user.followers = user.followers.filter((follower) => follower !== loggedUser.id)

	localStorage.setItem("users", JSON.stringify(users))
}

function savePostToUser(postId, userId) {
	const users = getAllUsers()
	const user = users.find((user) => user.id === userId)
	user.savedPosts.push(postId)

	return localStorage.setItem("users", JSON.stringify(users))
}

function removeSavedPost(postId, userId) {
	const users = getAllUsers()
	const user = users.find((user) => user.id === userId)
	const getIndex = user.savedPosts.findIndex((post) => post === postId)
	user.savedPosts.shift(getIndex)

	return localStorage.setItem("users", JSON.stringify(users))

}

const user = {
	getUser,
	getAllUsers,
	registerUser,
	followUser,
	unfollowUser,
	getUserSavedPosts,
	savePostToUser,
	removeSavedPost
}
export default user
