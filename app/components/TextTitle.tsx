import React from "react";
import { poppins } from "../ui/fonts";
interface HeaderProps {
	title: string;
}

const TextTitle: React.FC<HeaderProps> = ({ title }) => {
	return (
		<h1
			className={`${poppins.className} sm:ml-9 sm:text-2xl ml-72 mt-8 p-4 antialiased  text-white text-5xl mb-6`}
		>
			{title}
		</h1>
	);
};

export default TextTitle;
