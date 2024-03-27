import React from "react";
import Avatar from "@mui/material/Avatar";
import { poppins } from "../ui/fonts";
import Image from "next/image";
import Vercel from "../../public/Vercel.jpg";
import NextLogo from "../../public/nextjs.png";

export default function Buttons() {
	return (
		<>
			<div className="flex sm:flex-col  justify-center items-center gap-4">
				<div
					className={`${poppins.className}  hover:bg-gray-900 hover:bg-opacity-25 transition duration-800 ease-in-out transform hover:translate-y-0.5 hover:translate-x-0.5 antialiased bg-[#262626] text-white bg-opacity-50 flex rounded-md justify-between items-center sm:w-5/6 gap-6 p-6 w-2/6`}
				>
					<div className="flex flex-row gap-4 items-center">
						<Image
							src={Vercel}
							alt="Github Image"
							style={{ width: 73, height: 65, borderRadius: "50%" }}
						/>
						<div className="flex flex-col gap-4">
							<p className="text-justify">
								Vercel builds a frontend-as-a-service product—they make it easy
								for engineers to deploy and run the user facing parts of their
								applications.
							</p>
							<a
								href="https://vercel.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="rounded-xl w-60 text-white border border-white">
									See more details
								</button>
							</a>
						</div>
					</div>
				</div>
				<div
					className={`${poppins.className} hover:bg-gray-900 hover:bg-opacity-25 transition duration-800 ease-in-out transform hover:translate-y-0.5 hover:translate-x-0.5 antialiased bg-[#262626] text-white bg-opacity-50 flex rounded-md justify-between items-center sm:w-5/6 gap-6 p-6 w-2/6`}
				>
					<div className="flex flex-row gap-4 items-center">
						<Image
							src={NextLogo}
							alt="Github Image"
							style={{ width: 73, height: 65, borderRadius: "50%" }}
							className="hover:bg-white"
						/>
						<div className="flex flex-col gap-4">
							<p className="text-justify">
								Used by some of the world's largest companies, Next.js enables
								you to create high-quality web applications with the power of
								React components.
							</p>
							<a
								href="https://nextjs.org/"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block"
							>
								<button className="rounded-xl w-60 text-white border border-white">
									See more details
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
