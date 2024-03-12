"use client";
import Image from "next/image";
import Me from "../public/me.jpg";
import { useEffect, useRef } from "react";
import Gallery from "./components/Gallery";
import Experience from "./components/Experience";
import Footer from "../app/components/footer";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";
import { ibmPlexMono, poppins } from "./ui/fonts";

// hover:bg-gray-900 hover:bg-opacity-25 transition duration-800 ease-in-out transform hover:translate-y-0.5 hover:translate-x-0.5

export default function Home() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const viewAnimation = useAnimation();
	const slideControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			viewAnimation.start("visible");
			slideControls.start("visible");
		}
	}, [isInView]);

	return (
		<>
			<div ref={ref}>
				<div className="pt-20"></div>

				<motion.div
					variants={{
						hidden: { opacity: 0, y: 75 },
						visible: { opacity: 1, y: 0 },
					}}
					initial="hidden"
					animate={viewAnimation}
					transition={{ duration: 0.5, delay: 0.25 }}
					className="flex justify-center items-center flex-col"
				>
					<h1
						className={`${poppins.className} antialiased text-white text-3xl mb-6`}
					>
						Hi, I'm Armando 👋
					</h1>

					<div className="w-1/2 p-12 border border-gray-400 rounded-lg border-opacity-20 ">
						<p className={`${ibmPlexMono.className} text-white antialiased`}>
							I'm a software developer intern at the Wallavi company, I love
							technology and learning everything about software.
						</p>
					</div>

					<div className="flex justify-center items-center mt-16 space-x-8 px-12">
						<Image
							src={Me}
							alt="Me"
							width={300}
							height={200}
							className="rounded-xl opacity-80"
						/>
						<p className={`${poppins.className} text-white antialiased`}>
							"In the world of programming, every mistake is
							<br /> an opportunity to learn and improve"
						</p>
					</div>
				</motion.div>

				<div className="flex flex-row justify-between items-center p-12">
					<h1
						className={`${poppins.className} antialiased text-white text-5xl mb-6`}
					>
						About me
					</h1>
				</div>
			</div>

			<Gallery />

			<div className="flex flex-row justify-between items-center p-12">
				<h1
					className={`${poppins.className} antialiased text-white text-5xl mb-6`}
				>
					Experience
				</h1>
			</div>

			<Experience />

			<Footer />
		</>
	);
}
