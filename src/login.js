import { useState } from "react"
import { api } from "./server/api/apiRoot"
import { TextInput } from "./components/textInput"
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

		return console.log("Post criado com sucesso")
	}

	return (
		<div className="flex h-screen flex-col items-center justify-center bg-gray-100">
			<div className="flex w-full max-w-md flex-col items-center justify-center rounded-md bg-white px-4 py-8 shadow-md">
				<h1 className="text-2xl font-bold text-gray-900">Login</h1>
				<form className="mt-4 flex w-full flex-col" onSubmit={handleSubmit(onSubmit)}>
					<EmailInput error={errors?.title} title="Email" register={{ ...register("email") }} />
					<PasswordInput className={"mt-4"} error={errors?.title} title="Password" register={{ ...register("password") }} />

					<ActionButton type="submit" className={"mt-4"}>
						Entrar
					</ActionButton>
				</form>
			</div>
		</div>
	)
}
