import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./login"
import Home from "./Home"
import Sobre from "./Sobre"
import Post from "./Post"

function App() {
	return (
		<BrowserRouter>
			<nav class="navbar navbar-light bg-light ">
				<a class="navbar-brand" href="/">
					Bootstrap
				</a>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/page/:page" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/sobre" element={<Sobre />} />
				<Route path="/post" element={<Post />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
