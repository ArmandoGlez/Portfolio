"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { poppins } from "../ui/fonts";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleMenu = () => {
		setIsOpen(!isOpen);
	};
	const router = useRouter();
	// ${router.pathname !== '/' ? 'bg-gray-500' : ''}

	return (
		<nav className={` bg-black border-gray-500 border-b p-4 `}>
			<div className="container mx-auto">
				<div className="flex justify-evenly items-center">
					<div className="text-white font-bold text-lg">
						<Link href="/">
							<p>Home</p>
						</Link>
					</div>
					<div
						className={`md:flex md:space-x-4 ${isOpen ? "block" : "hidden"}`}
					>
						<Link href="/Agriculture">
							<p
								className={`${poppins.className} antialiased text-white hover:text-gray-500`}
							>
								Agriculture
							</p>
						</Link>
						<Link href="/contact">
							<p
								className={`${poppins.className} antialiased text-white hover:text-gray-500`}
							>
								Contact me
							</p>
						</Link>
						<Link href="/cv">
							<p
								className={`${poppins.className} antialiased text-white hover:text-gray-500`}
							>
								CV
							</p>
						</Link>
					</div>
					<div className="md:hidden">
						<button
							className="text-white focus:outline-none "
							onClick={handleToggleMenu}
						>
							<svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
