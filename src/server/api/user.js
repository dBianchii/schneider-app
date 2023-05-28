function getUser({ userId }) {
	if (!userId) throw new Error("Usuario não encontrado")

	const users = require("../db/users.json")
	const user = users.find((user) => user.id === userId)
	if (!user) throw new Error("Nenhum usuario encontrado")

	return user
}

function getAllUsers() {
	const users = localStorage.getItem("users")
	return users
}

const user = {
	getUser,
	getAllUsers,
}
export default user
