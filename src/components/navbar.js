import { ActionButton, SecondaryButton } from "./button"
import { SchneiderAvatar } from "./avatar"
import { CiLogout } from "react-icons/ci"
import { CgProfile } from "react-icons/cg"
import { api } from "../server/api/apiRoot"
import { useLocation } from "react-router-dom"
import { useState } from "react"
export default function NavBar() {
	const location = useLocation()
	const user = api.session.getLoggedUser()
	const navItems = [
		{
			title: "Home",
			href: "/",
		},
		{
			title: "Sobre",
			href: "/sobre",
		},
		{
			title: "Login",
			href: "/login",
			hidden: Boolean(user),
		},
	]

	const [open, setOpen] = useState(false)

	const menuItems = [
    {
      title: "Profile",
      icon: <CgProfile className="mr-2 h-4 w-4 text-slate-400" />,
      onClick: () => {
        window.location.assign(`/user/${user.id}`);
      },
    },
    {
      title: "Log Out",
      icon: <CiLogout className="mr-2 h-4 w-4 text-slate-600" />,
      onClick: () => {
        api.session.logUserOut();
        window.location.reload();
      },
    },
  ];

	return (
		<nav className="border-gray-200 bg-slate-800">
			<div className="mx-8 flex flex-wrap items-center justify-between p-4">
				<a href="/" className="flex items-center">
					<img src="https://companieslogo.com/img/orig/SU.PA-386facc5.png?t=1648148280" className="mr-3 h-8" alt="Flowbite Logo" />
					<span className="self-center whitespace-nowrap text-2xl font-semibold text-schneider-green">Schneider Connect</span>
				</a>
				<div className="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul className="mt-4 flex flex-col rounded-lg border border-gray-700 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0  md:p-0">
						{navItems.map((item, i) => (
							<li key={i}>
								<a
									href={item.href}
									className={`${item.hidden && "hidden"} block rounded py-2 pl-3 pr-4 transition-colors hover:bg-gray-700 hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-schneider-green ${location.pathname === item.href ? "text-schneider-green" : "text-white"}`}
								>
									{item.title}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className={`flex flex-row`}>
					{user ? (
						<div className="relative" onClick={() => setOpen((prev) => !prev)}>
							<div className="rounded-full ring-4 ring-offset-2 transition-all hover:ring-schneider-green">
								<SchneiderAvatar src={user.image ?? ""} />
							</div>
							<div className={`absolute right-0 mt-2 w-[150px] rounded-md bg-white shadow-md ${!open && "hidden"}`}>
								{menuItems.map((item, i) => (
									<div
										key={i}
										onClick={(e) => {
											e.preventDefault()
											item.onClick()
										}}
										className="flex cursor-default select-none items-center rounded-md p-2 text-sm font-medium outline-none transition-colors hover:bg-gray-200"
									>
										{item.icon}
										<span>{item.title}</span>
									</div>
								))}
							</div>
						</div>
					) : (
						<div className="hidden md:block">
							<ActionButton isLink={true} href="/login">
								Entrar
							</ActionButton>
							<SecondaryButton isLink={true} href="/login" className={"ml-4"}>
								Cadastrar
							</SecondaryButton>
						</div>
					)}
				</div>
				<button data-collapse-toggle="navbar-default" type="button" className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-400 transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 md:hidden" aria-controls="navbar-default" aria-expanded="false">
					<span className="sr-only">Open main menu</span>
					<svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
					</svg>
				</button>
			</div>
		</nav>
	)
}
