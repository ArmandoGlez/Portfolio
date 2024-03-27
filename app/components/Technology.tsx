import React from "react";
import {
	SiTypescript,
	SiJavascript,
	SiNextdotjs,
	SiTailwindcss,
	SiVercel,
} from "react-icons/si";
import { FaGitSquare, FaReact } from "react-icons/fa";
import { FaGithub, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { DiMysql } from "react-icons/di";

export default function Technology() {
	const icons = [
		{ icon: <SiTypescript />, color: "text-blue-500", text: "Typescript" },
		{ icon: <SiJavascript />, color: "text-yellow-500", text: "Javascript" },
		{ icon: <FaGitSquare />, color: "text-orange-600", text: "Git" },
		{ icon: <FaGithub />, color: "text-black", text: "GitHub" },
		{ icon: <FaReact />, color: "text-blue-600", text: "React" },
		{ icon: <SiNextdotjs />, color: "text-black", text: "Next Js" },
		{ icon: <SiTailwindcss />, color: "text-cyan-600", text: "Tailwind" },
		{ icon: <FaNodeJs />, color: "text-green-600", text: "Node js" },
		{ icon: <DiMysql />, color: "text-yellow-600", text: "MySql" },
		{ icon: <FaHtml5 />, color: "text-red-600", text: "HTML" },
		{ icon: <FaCss3Alt />, color: "text-blue-600", text: "CSS" },
		{ icon: <SiVercel />, color: "text-gray-700", text: "Vercel" },
	];

	return (
		<>
			<section className="grid sm:grid-cols-2 sm:grid-rows-2  grid-cols-4 grid-rows-3 gap-4 mx-auto sm:w-5/6 w-3/5">
				{icons.map((icon, index) => (
					<div
						key={index}
						className={`flex flex-col bg-[#262626]  gap-2 justify-center rounded-lg items-center h-40 sm:text-5xl md:text-7xl  ${icon.color}`}
					>
						{icon.icon}
						<p className="text-xs">{icon.text}</p>
					</div>
				))}
			</section>
		</>
	);
}
