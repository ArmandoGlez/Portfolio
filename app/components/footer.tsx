import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { poppins2, poppins } from "../ui/fonts";

export default function Footer() {
	return (
		<footer className="bg-black text-white py-8">
			<div className="container mx-auto flex justify-center">
				{/* Sección de contacto */}
				<div className="flex-1 mr-8 border-gray-600 border-r pr-8">
					<h2
						className={`${poppins2.className} antialiased text-lg font-semibold mb-4`}
					>
						Contact
					</h2>
					<ul>
						<li className={`${poppins.className} antialiased`}>
							Phone: 311-241-5054
						</li>
						<li className={`${poppins.className} antialiased`}>
							Email: armandomglezb@gmail.com
						</li>
						<li className={`${poppins.className} antialiased`}>
							Location: Tepic Nayarit
						</li>
					</ul>
				</div>
				{/* Sección de redes sociales */}
				<div className="flex-1  mr-8 border-gray-600 border-r pr-8">
					<h2
						className={`${poppins2.className} antialiased text-lg font-semibold mb-4`}
					>
						Media
					</h2>
					<ul>
						<FaFacebook className="text-2xl" />
						<FaInstagramSquare className="text-2xl" />
						<FaLinkedin className="text-2xl" />
					</ul>
				</div>
				{/* Sección de correo */}
				<div className="flex-1">
					<h2
						className={`${poppins2.className} antialiased text-lg font-semibold mb-4`}
					>
						Email
					</h2>
					<form>
						<input
							type="email"
							placeholder="Put your email"
							className="bg-gray-700 text-white px-4 py-2 rounded mb-4"
						/>
						<button
							type="submit"
							className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
						>
							Send
						</button>
					</form>
				</div>
			</div>
		</footer>
	);
}
