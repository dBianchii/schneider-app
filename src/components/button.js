import React from "react"

export function ActionButton({ children, className, isLink = false, size = "md", ...props }) {
	const component = isLink === true ? "a" : "button"

	return React.createElement(component, { className: `transition-colors rounded-md bg-schneider-green font-bold text-white hover:bg-schneider-green/90 ${sizeToClass(size)} ${className}`, ...props }, children)
}

export function SecondaryButton({ children, className, isLink = false, ...props }) {
	const component = isLink === true ? "a" : "button"

	return React.createElement(component, { className: `transition-colors rounded-md text-white hover:text-gray-800 hover:bg-gray-200 font-bold text-gray-800 hover:bg-gray-200/90 ${sizeToClass} ${className}`, ...props }, children)
}

export function DangerButton({ children, className, isLink = false, ...props }) {
	const component = isLink === true ? "a" : "button"

	return React.createElement(component, { className: `transition-colors rounded-md bg-red-600 font-bold text-white hover:bg-red-600/90 ${sizeToClass} ${className}`, ...props }, children)
}

function sizeToClass(size) {
	switch (size) {
		case "sm":
			return "px-2 py-1 text-sm"
		case "md":
			return "px-4 py-2 text-base"
		case "lg":
			return "px-6 py-3 text-lg"
		default:
			return "px-4 py-2 text-base"
	}
}
