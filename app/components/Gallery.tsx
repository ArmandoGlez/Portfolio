import React from "react";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { LiaStreetViewSolid } from "react-icons/lia";
import { poppins } from "../ui/fonts";

const locations = [
	{
		title: "Universidad Tecnológica de Nayarit",
		location: "Xalisco Nayarit Mexico 🌮",
		description:
			"I studied 3 years and 4 months at this university, where I am grateful for certain things I learned and the friends I made.",
		image: "/ut.jpg",
		icon: <CiLocationOn className="text-white" />,
	},
	{
		title: "Tepic Nayarit México",
		location: "A small state in México",
		description:
			"A cozy atmosphere with artistic decoration, the aroma of freshly brewed coffee, soft music and a relaxed atmosphere, perfect for enjoying moments of tranquility.",
		image: "/Tepic-Portada.jpg",
		icon: <LiaStreetViewSolid className="text-white" />,
	},
	{
		title: "Ingeniería en Gestión y Desarrollo de Software",
		location: "Xalisco Nayarit Mexico",
		description:
			"I studied 3 years and 4 months at this career, where I am grateful for certain things I learned and the friends I made.",
		image: "/ingeXD.png",
		icon: <CiLocationOn className="text-white" />,
	},
];

export default function Gallery() {
	return (
		<>
			{locations.map((location, index) => (
				<div
					key={index}
					className="flex flex-row justify-center items-center myDiv sm:w-5/6 sm:flex-col mx-auto w-3/5"
				>
					<div className="flex flex-col justify-center items-center w-full">
						<h1
							className={`${poppins.className} font-bold text-white text-xl sm:text-center`}
						>
							{location.title}
						</h1>
						<div className="flex justify-between items-center gap-x-1">
							{location.icon}
							<p className={`${poppins.className} text-white`}>Location</p>
						</div>
						<p className={`${poppins.className} text-white`}>
							{location.location}
						</p>
						<h1
							className={`${poppins.className} font-bold text-white text-xs text-center`}
						>
							{location.description}
						</h1>
					</div>
					<Image
						src={location.image}
						alt="University"
						width={300}
						height={200}
						className="rounded-xl opacity-80 mt-4 sm:mt-5 ml-2"
					/>
				</div>
			))}
		</>
	);
}
