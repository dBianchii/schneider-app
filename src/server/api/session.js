import { saveJson } from "./_helpers.js"
import api from "./apiRoot.js"

function getLoggedUser() {
	const loggedUserId = require("../db/session.json").loggedUserId

	if (!loggedUserId) {
		return null
	}

	const users = require("../db/users.json")
	const loggedUser = users.find((user) => user.id === loggedUserId)
	if (!loggedUser) {
		throw new Error("Invalid logged user")
	}

	return loggedUser
}

function logUserIn(userId, password) {
	const user = api.user.getUser({ userId: userId.loggedUserId })

	if (user.password !== password) throw new Error("Invalid password")

	const session = require("../db/session.json")
	session.loggedUserId = userId.loggedUserId

	saveJson("session", session)
}

const session = {
	getLoggedUser,
	LogInUser: logUserIn,
}
export default session
