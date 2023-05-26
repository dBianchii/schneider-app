import React from "react"

export function ActionButton({ children, className, isLink = false, ...props }) {
	const component = isLink === true ? "a" : "button"

	return React.createElement(component, { className: `transition-colors rounded-md bg-schneider-green px-4 py-2 font-bold text-white hover:bg-schneider-green/90 ${className}`, ...props }, children)
}

export function SecondaryButton({ children, className, isLink = false, ...props }) {
	const component = isLink === true ? "a" : "button"

	return React.createElement(component, { className: `transition-colors rounded-md text-white hover:text-gray-800 hover:bg-gray-200 px-4 py-2 font-bold text-gray-800 hover:bg-gray-200/90 ${className}`, ...props }, children)
}

export function DangerButton({ children, className, isLink = false, ...props }) {
	const component = isLink === true ? "a" : "button"

	return React.createElement(component, { className: `transition-colors rounded-md bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-600/90 ${className}`, ...props }, children)
}
