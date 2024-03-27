import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { poppins2, poppins } from "../ui/fonts";

export default function Footer() {
	return (
		<footer className="bg-black text-white md:ml-4 md:mr-4 py-8">
			<div className="container mx-auto flex flex-col md:flex-row justify-center">
				{/* Sección de contacto */}
				<div className="flex-1 mb-8 md:mr-8 md:border-gray-600 md:border-r md:pr-8">
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
				<div className="flex-1 mb-8 md:mr-8 md:border-gray-600 md:border-r md:pr-8">
					<h2
						className={`${poppins2.className} antialiased text-lg font-semibold mb-4`}
					>
						Media
					</h2>
					<ul>
						<a
							href="https://www.facebook.com/profile.php?id=100068826635977"
							target="_blank"
							rel="noopener noreferrer"
						>
							<li className="mb-2">
								<FaFacebook className="text-2xl" />
							</li>
						</a>
						<a
							href="https://www.instagram.com/mandoglezz?igsh=Y28zYjZ5OXVlZm41&utm_source=qr"
							target="_blank"
							rel="noopener noreferrer"
						>
							<li className="mb-2">
								<FaInstagramSquare className="text-2xl" />
							</li>
						</a>
						<a
							href="https://www.linkedin.com/in/armando-gonz%C3%A1lez-398380221/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<li className="mb-2">
								<FaLinkedin className="text-2xl" />
							</li>
						</a>
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
