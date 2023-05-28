import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./login"
import Home from "./Home"
import Sobre from "./Sobre"
import Post from "./Post"
import "./App.css"
import NavBar from "./components/navbar"
import { useEffect } from "react"
import { setLocalStorageData } from "./server/db/setLocalStorageData"

function App() {
	useEffect(() => {
		const ran = localStorage.getItem("ranSetLocalStorageData")
		if (!ran) setLocalStorageData() && localStorage.setItem("ranSetLocalStorageData", "true")
	})

	return (
		<BrowserRouter>
			<div className="min-h-screen bg-gray-100">
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/page/:page" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/sobre" element={<Sobre />} />
					<Route path="/post/:post" element={<Post />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
