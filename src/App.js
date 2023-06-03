import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Home from "./Home"
import Post from "./Post"
import Usuario from "./Usuario"
import Register from "./Register"
import "./App.css"
import NavBar from "./components/navbar"
import Footer from "./components/footer"
import { useEffect } from "react"
import { setLocalStorageData } from "./server/db/setLocalStorageData"
import SobreOProjeto from "./SobreOProjeto"

function App() {
	useEffect(() => {
		const ran = localStorage.getItem("ranSetLocalStorageData")
		if (!ran) {
			setLocalStorageData()
			localStorage.setItem("ranSetLocalStorageData", "true")
			window.location.reload()
		}
	})

	const routesNavAndFooterNotNeeded = ["/login", "/register"]

	return (
		<BrowserRouter>
			<div className="min-h-screen bg-gray-100">
				{!routesNavAndFooterNotNeeded.includes(window.location.pathname) && <NavBar />}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/page/:page" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/sobre" element={<SobreOProjeto />} />
					<Route path="/post/:post" element={<Post />} />
					<Route path="/user/:userId" element={<Usuario />} />
				</Routes>
				{!routesNavAndFooterNotNeeded.includes(window.location.pathname) && <Footer />}
			</div>
		</BrowserRouter>
	)
}

export default App
