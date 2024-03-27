import React from "react";
import { CiLemon } from "react-icons/ci";
import { poppins, poppins2 } from "../ui/fonts";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
export default function FooterAgriculture() {
	return (
		<>
			<footer className="bg-transparent border-t flex-wrap border-gray-500 border-b text-white py-8 px-4 mt-9">
				<div className="container sm:flex-col sm:gap-4 mx-auto flex items-center justify-evenly ">
					<div className="flex sm:w-full sm:flex-col items-center gap-3">
						<CiLemon className="text-9xl text-[#00951d]" />
						<p
							className={`${poppins.className} antialiased text-sm font-semibold`}
						>
							© 2024 Armangos and Aguamandos Inc.
						</p>
					</div>

					<div className="flex sm:w-full flex-col">
						<h3
							className={`${poppins2.className} antialiased text-lg font-bold`}
						>
							Contact Me
						</h3>
						<p className={`${poppins.className} antialiased text-sm`}>
							Amando.agroGlez@gmail.com
						</p>
						<p className={`${poppins.className} antialiased text-sm`}>
							311-241-5054
						</p>
						<p className={`${poppins.className} antialiased text-sm`}>
							Nayarit México
						</p>
					</div>

					<div className=" sm:w-full flex flex-col">
						<h3
							className={`${poppins2.className} antialiased text-lg font-semibold`}
						>
							Media
						</h3>
						<div className="flex flex-row">
							<a
								href="https://www.instagram.com/mandoglezz?igsh=Y28zYjZ5OXVlZm41&utm_source=qr"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaInstagramSquare className="text-6xl" />
							</a>
							<a
								href="https://www.linkedin.com/in/armando-gonz%C3%A1lez-398380221/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedin className="text-6xl" />
							</a>
							<a
								href="https://www.facebook.com/profile.php?id=100068826635977"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaFacebookSquare className="text-6xl" />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
