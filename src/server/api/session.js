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

function logUserIn(userId, password) {
	const user = api.user.getUser({ userId: userId.loggedUserId })

	if (user.password !== password) throw new Error("Invalid password")

	const session = JSON.parse(localStorage.getItem("session")) || {}
	session.loggedUserId = userId.loggedUserId

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
