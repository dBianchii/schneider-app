import { api } from "./server/api/apiRoot"
import { ActionButton } from "./components/button"
import { useForm } from "react-hook-form"
import { EmailInput } from "./components/emailinput"
import { PasswordInput } from "./components/passwordinput"
import { TextInput } from "./components/textInput"

export default function Register() {
	const {
		handleSubmit,
		register,
		setError,
		formState: { errors },
	} = useForm({})

	const user = api.session.getLoggedUser()
	if (user !== null) {
		window.location.href = "/"
	}

	const validationFunction = (fields) => {
		let errors = []

		if (fields.email === (undefined || "")) {
			errors.push({ field: "email", message: "Por favor digite um email" })
		}

		if (fields.name === (undefined || "")) {
			errors.push({ field: "name", message: "Por favor digite um nome" })
		}

		if (fields.password === (undefined || "")) {
			errors.push({ field: "password", message: "Por favor digite uma senha" })
		}

		if (fields.password.length < 6) {
			errors.push({ field: "password", message: "A senha deve ter no mínimo 6 caracteres" })
		}

		return errors
	}

	const onSubmit = (fields) => {
		const errors = validationFunction(fields)

		if (errors[0] !== undefined) {
			return errors.map((err) => {
				return setError(err.field, { message: err.message })
			})
		}

		try {
			api.user.registerUser({
				email: fields.email,
				name: fields.name,
				image: fields.image,
				password: fields.password,
			})
		} catch (error) {
			if (error.message === "Email já está em uso") {
				setError("email", { message: error.message })
			}
			return errors
		}

		window.location.href = "/"
	}

	return (
		<div className="flex h-screen flex-col items-center justify-center bg-gray-100">
			<div className="flex w-full max-w-md flex-col items-center justify-center rounded-md bg-white px-4 py-8 shadow-md">
				<h1 className="text-2xl font-bold text-gray-900">Cadastrar</h1>
				<form className="mt-4 flex w-full flex-col" onSubmit={handleSubmit(onSubmit)}>
					<EmailInput error={errors?.email} title="Email" register={{ ...register("email") }} />
					<div className="mt-6">
						<TextInput error={errors?.name} title={"Nome"} register={{ ...register("name") }} />
					</div>
					<div className="mt-6">
						<TextInput error={errors?.image} title={"URL da foto de perfil - opcional"} register={{ ...register("image") }} />
					</div>
					<PasswordInput className="mt-6" error={errors?.password} title="Password" register={{ ...register("password") }} />

					<ActionButton type="submit" className="mt-4">
						Register
					</ActionButton>
				</form>
				<p className="mt-4">
					Já possui cadastro?{" "}
					<a className="text-blue-400 hover:underline" href="/login">
						Entre aqui
					</a>
				</p>
			</div>
		</div>
	)
}
