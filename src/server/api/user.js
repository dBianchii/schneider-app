function getUser({ userId }) {
	if (!userId) throw new Error("Usuario não encontrado")

	const users = require("../db/users.json")
	const user = users.find((user) => user.id === userId)
	if (!user) throw new Error("Nenhum usuario encontrado")

	return user
}

const user = {
	getUser,
}
export default user
