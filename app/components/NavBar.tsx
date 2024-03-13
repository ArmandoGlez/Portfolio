"use client";
import Link from "next/link";
import { poppins } from "../ui/fonts";
import React, { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className={` bg-black border-gray-500 border-b p-4 `}>
			<div className="container ">
				<div className="flex justify-between items-center">
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
