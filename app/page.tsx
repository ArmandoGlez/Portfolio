"use client";
import { useEffect, useRef } from "react";
import Gallery from "./components/Gallery";
import Experience from "./components/Experience";
import Footer from "../app/components/footer";
import { motion, useInView } from "framer-motion";
import { poppins } from "./ui/fonts";
import Buttons from "./components/Buttons";
import TextTitle from "./components/TextTitle";
import GithubApi from "./components/GithubApi";
import Techology from "./components/Technology";
import Welcome from "./components/Welcome";

export default function Home() {
	return (
		<>
			<Welcome />

			<TextTitle title="About me" />

			<Gallery />

			<TextTitle title="Knowledge" />

			<Techology />

			<TextTitle title="Albums" />

			<Experience />

			<TextTitle title="Made with" />

			<Buttons />

			<h1
				className={`${poppins.className} antialiased text-center text-2xl p-20 text-white`}
			>
				Follow me on my Github 😇
			</h1>

			<GithubApi />

			<Footer />
		</>
	);
}
