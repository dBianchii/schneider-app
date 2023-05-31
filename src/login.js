import { api } from "./server/api/apiRoot"
import { ActionButton } from "./components/button"
import { useForm } from "react-hook-form"
import { EmailInput } from "./components/emailinput"
import { PasswordInput } from "./components/passwordinput"

export default function Login() {
	const {
		handleSubmit,
		register,
		setError,
		formState: { errors },
	} = useForm({})

	const validationFuction = (fields) => {
		let errors = []

		if (fields.email === (undefined || "")) {
			errors.push({ field: "email", message: "Por favor digite um email" })
		}

		if (fields.password === (undefined || "")) {
			errors.push({ field: "password", message: "Por favor digite uma senha" })
		}

		return errors
	}

	const onSubmit = (fields) => {
		const errors = validationFuction(fields)

		if (errors[0] !== undefined) {
			return errors.map((err) => {
				return setError(err.field, { message: err.message })
			})
		}
		try {
			api.session.logUserIn(fields.email, fields.password)
		} catch (error) {
			if (error.message === "Email não encontrado no sistema") {
				setError("email", { message: error.message })
			} else if (error.message === "Senha incorreta") setError("password", { message: error.message })
			return errors
		}

		window.location.href = "/"
	}

	return (
		<div className="flex h-screen flex-col items-center justify-center bg-gray-100">
			<div className="flex w-full max-w-md flex-col items-center justify-center rounded-md bg-white px-4 py-8 shadow-md">
				<h1 className="text-2xl font-bold text-gray-900">Login</h1>
				<form className="mt-4 flex w-full flex-col" onSubmit={handleSubmit(onSubmit)}>
					<EmailInput error={errors?.email} title="Email" register={{ ...register("email") }} />
					<PasswordInput className={"mt-6"} error={errors?.password} title="Password" register={{ ...register("password") }} />

					<ActionButton type="submit" className={"mt-4"}>
						Entrar
					</ActionButton>
				</form>
				<p className="mt-4">
					Não possui cadastro?{" "}
					<a className="text-blue-400 hover:underline" href="/register">
						Registre-se aqui
					</a>
				</p>
			</div>
		</div>
	)
}
