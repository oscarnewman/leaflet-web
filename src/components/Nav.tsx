import { useClickOutside } from '@/hooks/useClickOutside'
import { Transition } from '@headlessui/react'
import React, { useRef, useState } from 'react'
import SecondaryButton from './ui/Button/SecondaryButton'
import Icon from './ui/icons/Icon'
import { Logo } from './ui/Logo'

type Props = {}

function Nav(props: Props) {
	const [isOpen, setIsOpen] = useState(false)
	const ref = useRef(null)

	useClickOutside(ref, () => setIsOpen(false))

	return (
		<>
			<nav className="py-4 z-50">
				<div className="max-w-7xl mx-auto">
					<div className="flex justify-between h-16">
						<div className="flex">
							<div className="flex-shrink-0 flex items-center">
								<Logo className="h-8 w-auto" />
							</div>
						</div>
						<div className="flex items-center">
							<div className="flex-shrink-0">
								<SecondaryButton
									href="https://airtable.com/shrQgLHH0QV46ve7b"
									openInNewWindow
									leadingIcon={<Icon icon="plus-circle" className="w-6 mr-2" />}
								>
									List your place
								</SecondaryButton>
							</div>
						</div>
					</div>
				</div>
				{/*
			Mobile menu, toggle classes based on menu state.
	
			Menu open: "block", Menu closed: "hidden"
		*/}
				<div className="hidden md:hidden">
					<div className="pt-2 pb-3 space-y-1">
						{/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
						<a
							href="#"
							className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
						>
							Dashboard
						</a>
						<a
							href="#"
							className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
						>
							Team
						</a>
						<a
							href="#"
							className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
						>
							Projects
						</a>
						<a
							href="#"
							className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
						>
							Calendar
						</a>
					</div>
					<div className="pt-4 pb-3 border-t border-gray-200">
						<div className="flex items-center px-4 sm:px-6">
							<div className="flex-shrink-0">
								<img
									className="h-10 w-10 rounded-full"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								/>
							</div>
							<div className="ml-3">
								<div className="text-base font-medium text-gray-800">
									Tom Cook
								</div>
								<div className="text-sm font-medium text-gray-500">
									tom@example.com
								</div>
							</div>
							<button className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								<span className="sr-only">View notifications</span>
								{/* Heroicon name: bell */}
								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
									/>
								</svg>
							</button>
						</div>
						<div className="mt-3 space-y-1">
							<a
								href="#"
								className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
							>
								Your Profile
							</a>
							<a
								href="#"
								className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
							>
								Settings
							</a>
							<a
								href="#"
								className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
							>
								Sign out
							</a>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Nav
