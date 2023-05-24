function getUser({ userId }) {
	const users = require("../db/users.json")
	const user = users.find((user) => user.id === userId)
	if (!user) throw new Error("Invalid logged user")

	return user
}

const user = {
	getUser,
}
export default user
