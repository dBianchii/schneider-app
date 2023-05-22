import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./login"
import "./App.css"
import Home from "./Home"
import Sobre from "./Sobre"
import Post from "./Post"

function App() {
	return (
		<BrowserRouter>
			<div>Ola eu sou um cabecalho</div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/sobre" element={<Sobre />} />
				<Route path="/post" element={<Post />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
