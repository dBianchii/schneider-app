import { api } from "./apiRoot.js"

function getLoggedUser() {
	const session = JSON.parse(localStorage.getItem("session")) || {}
	const loggedUserId = session.loggedUserId
	if (!loggedUserId) {
		return null
	}

	const users = api.user.getAllUsers()
	const loggedUser = users.find((user) => user.id === loggedUserId)

	if (!loggedUser) {
		throw new Error("Invalid logged user")
	}

	delete loggedUser.password

	return loggedUser
}

function logUserIn(email, password) {
	const users = api.user.getAllUsers()

	const user = users.find((user) => user.email === email)

	if (!user) throw new Error("Email não encontrado no sistema")

	if (user.password !== password) throw new Error("Senha incorreta")

	const session = JSON.parse(localStorage.getItem("session")) || {}
	session.loggedUserId = user.id

	localStorage.setItem("session", JSON.stringify(session))
}

function logUserOut() {
	const session = JSON.parse(localStorage.getItem("session")) || {}
	session.loggedUserId = null

	localStorage.setItem("session", JSON.stringify(session))
}

const session = {
	getLoggedUser,
	logUserIn,
	logUserOut,
}
export default session
