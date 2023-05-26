import React from "react"

export function ActionButton({ children, className, isLink = false, ...props }) {
	const component = isLink === true ? "a" : "button"

	return React.createElement(component, { className: `rounded-md bg-schneider-green px-4 py-2 font-bold text-white hover:bg-schneider-green/90 ${className}`, ...props }, children)
}

export function DangerButton({ children, className, isLink = false, ...props }) {
	const component = isLink === true ? "a" : "button"

	return React.createElement(component, { className: `rounded-md bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-600/90 ${className}`, ...props }, children)
}
