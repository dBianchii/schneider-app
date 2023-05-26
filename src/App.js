import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./login"
import Home from "./Home"
import Sobre from "./Sobre"
import Post from "./Post"
import "./App.css"
import { ActionButton, SecondaryButton } from "./components/button"
const { useLocation } = require("react-router-dom")

function App() {
	return (
		<BrowserRouter>
			<div className="min-h-screen bg-gray-100">
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/page/:page" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/sobre" element={<Sobre />} />
					<Route path="/post" element={<Post />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

function NavBar() {
	const location = useLocation()
	const navItems = [
		{
			title: "Home",
			href: "/",
		},
		{
			title: "Sobre",
			href: "/sobrenos",
		},
		{
			title: "Login",
			href: "/login",
		},
	]
	console.log(location.pathname)

	return (
		<nav className="border-gray-200 bg-slate-800">
			<div className="mx-8 flex flex-wrap items-center justify-between p-4">
				<a href="/" className="flex items-center">
					<img src="https://companieslogo.com/img/orig/SU.PA-386facc5.png?t=1648148280" className="mr-3 h-8" alt="Flowbite Logo" />
					<span className="self-center whitespace-nowrap text-2xl font-semibold text-schneider-green">Schneider Connect</span>
				</a>
				<button data-collapse-toggle="navbar-default" type="button" className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-400 transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 md:hidden" aria-controls="navbar-default" aria-expanded="false">
					<span className="sr-only">Open main menu</span>
					<svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
					</svg>
				</button>
				<div className="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul className="mt-4 flex flex-col rounded-lg border border-gray-700 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0  md:p-0">
						{navItems.map((item, i) => (
							<li key={i}>
								<a href={item.href} className={`block rounded py-2 pl-3 pr-4 transition-colors hover:bg-gray-700 hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-schneider-green ${location.pathname === item.href ? "text-schneider-green" : "text-white"}`}>
									{item.title}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className={`flex flex-row`}>
					<ActionButton isLink={true} href="/signIn">
						Entrar
					</ActionButton>
					<SecondaryButton className={"ml-4"}>Cadastrar</SecondaryButton>
				</div>
			</div>
		</nav>
	)
}

export default App
