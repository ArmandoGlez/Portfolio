import Image from "next/image";
import { poppins } from "../ui/fonts";
import Me from "../../public/me.jpg";
import React, { useEffect, useRef, useState } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
export default function Welcome() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const activateAnimation = useAnimation();

	useEffect(() => {
		if (isInView) {
			activateAnimation.start("visible");
		}
	}, [isInView]);

	return (
		<>
			<div ref={ref}>
				<div className="pt-14"></div>

				<motion.div
					variants={{
						hidden: { opacity: 0, y: -75, scale: 0.5 },
						visible: { opacity: 1, y: 0, scale: 1 },
					}}
					initial="hidden"
					animate={activateAnimation}
					transition={{ duration: 0.3, delay: 0.55 }}
				>
					<div className="flex justify-center items-center flex-col">
						<h1
							className={`${poppins.className} antialiased text-white text-3xl mb-6`}
						>
							Hi, I'm Armando 👋
						</h1>

						<div className="sm:w-9/12 sw:p-1 md:w-9/12 lg:w-1/2 p-12 border border-gray-400 rounded-lg border-opacity-20">
							<p className={`${poppins.className} text-white antialiased`}>
								I'm a software developer intern at the Wallavi company, I love
								technology and learning everything about software.
							</p>
						</div>

						<div className="flex sm:flex-col justify-center items-center mt-16 space-x-8 px-12">
							<Image
								src={Me}
								alt="Me"
								width={300}
								height={200}
								priority={true}
								className="rounded-large opacity-80"
							/>
							<p
								className={`${poppins.className} text-white sm:mt-4 antialiased`}
							>
								"In the world of programming, every mistake is
								<br /> an opportunity to learn and improve"
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
}
