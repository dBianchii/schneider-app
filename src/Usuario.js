import { api } from "./server/api/apiRoot"
import { useParams } from "react-router-dom"
export default function Usuario() {
	const params = useParams()

	const user = api.user.getUser({ userId: params.userId })

	return (
		<div className="flex flex-row">
			<div className="w-4/6 bg-red-200"></div>
			<div className="w-2/6 bg-blue-200"></div>
		</div>
	)
}
