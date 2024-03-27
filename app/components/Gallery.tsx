import React from "react";
import Image from "next/image";
import Univer from "../../public/ut.jpg";
import Inge from "../../public/ingeXD.png";
import { CiLocationOn } from "react-icons/ci";
import Tepic from "../../public/Tepic-Portada.jpg";
import { LiaStreetViewSolid } from "react-icons/lia";
import { poppins } from "../ui/fonts";

export default function Gallery() {
	return (
		<>
			<div className="flex flex-row justify-center items-center myDiv sm:flex-col sm:w-5/6 mx-auto w-3/5">
				<div className="flex flex-col justify-center items-center w-full">
					<h1
						className={`${poppins.className} font-bold text-white text-center text-xl`}
					>
						Universidad Tecnológica de Nayarit
					</h1>

					<div className="flex justify-between items-center gap-x-1">
						<CiLocationOn className="text-white" />
						<p className={`${poppins.className} text-white`}>Location</p>
					</div>

					<p className={`${poppins.className} text-white`}>
						Xalisco Nayarit Mexico 🌮
					</p>

					<h1
						className={`${poppins.className} font-bold text-white text-xs text-center`}
					>
						I studied 3 years and 4 months at this <br />
						university, where I am grateful for certain <br /> things I learned
						and the friends I made.
					</h1>
				</div>

				<Image
					src={Univer}
					alt="University"
					width={300}
					height={200}
					className="rounded-xl opacity-80 sm:mt-5"
				/>
			</div>

			<div className="mx-auto mt-8 mb-8 sm:w-3/4 w-1/2 border-t border-gray-400 opacity-50"></div>

			<div className="flex flex-row justify-center items-center myDiv sm:w-5/6 sm:flex-col mx-auto w-3/5">
				<Image
					src={Tepic}
					alt="University"
					width={300}
					height={200}
					className="rounded-xl opacity-80 sm:mt-5"
				/>

				<div className="flex flex-col justify-center items-center w-full">
					<h1 className={`${poppins.className} font-bold text-white text-xl`}>
						Tepic Nayarit México
					</h1>

					<div className="flex justify-between items-center gap-x-1">
						<LiaStreetViewSolid className="text-white" />
						<p className={`${poppins.className} text-white`}>State</p>
					</div>

					<p className={`${poppins.className} text-white`}>
						A small state in México
					</p>

					<h1
						className={`${poppins.className} font-bold text-center text-white text-xs`}
					>
						A cozy atmosphere with artistic decoration,
						<br /> the aroma of freshly brewed coffee, <br />
						soft music and a relaxed atmosphere, perfect for enjoying <br />
						moments of "tranquility".
					</h1>
				</div>
			</div>

			<div className="mx-auto mt-8 mb-8 sm:w-3/4 w-1/2 border-t border-gray-400 opacity-50"></div>

			<div className="flex flex-row justify-center items-center myDiv sm:w-5/6 sm:flex-col mx-auto w-3/5">
				<div className="flex flex-col justify-center items-center w-full">
					<h1
						className={`${poppins.className} font-bold text-white text-xl sm:text-center`}
					>
						Ingeniería en Gestión y Desarrollo de Software
					</h1>

					<div className="flex justify-between items-center gap-x-1">
						<CiLocationOn className="text-white" />
						<p className={`${poppins.className} text-white`}>Location</p>
					</div>

					<p className={`${poppins.className} text-white`}>
						Xalisco Nayarit Mexico
					</p>

					<h1
						className={`${poppins.className} font-bold text-white text-xs text-center`}
					>
						I studied 3 years and 4 months at this career, where I am grateful
						for certain things I learned and the friends I made.
					</h1>
				</div>

				<Image
					src={Inge}
					alt="University"
					width={300}
					height={200}
					className="rounded-xl opacity-80"
				/>
			</div>
		</>
	);
}
