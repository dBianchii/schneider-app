export function ActionButton({ children, className, ...props }) {
	return <button className={`rounded-md bg-schneider-green px-4 py-2 font-bold text-white hover:bg-schneider-green/90 ${className}`}>{children}</button>
}

export function DangerButton({ children, className, ...props }) {
	return <button className={`rounded-md bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-600/90 ${className}`}>{children}</button>
}
