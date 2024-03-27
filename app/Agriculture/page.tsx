"use client";
import Image from "next/image";
import Aguacate from "../../public/Aguacate.jpg";
import Aguacate2 from "../../public/Aguacate2.jpg";
import Aguacate3 from "../../public/Aguacate3.jpg";
import Aguacate4 from "../../public/Aguacate4.jpg";
import Aguacate5 from "../../public/Aguacate5.jpg";
import Limon from "../../public/Limon.jpg";
import Limon2 from "../../public/Limon2.jpg";
import Limon3 from "../../public/Limon3.jpg";
import Limon4 from "../../public/Limon4.jpg";
import Limon5 from "../../public/Limon5.jpg";
import Limon6 from "../../public/Limon6.jpg";
import Limon7 from "../../public/Limon7.jpg";
import YoCampo from "../../public/yoCampo.jpg";
import FooterAgriculture from "../components/FooterAgriculture";
import { IoIosTime } from "react-icons/io";
import { MdTerrain } from "react-icons/md";
import Production from "../components/Production";

import React, { useEffect, useRef, useState } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import { poppins } from "../ui/fonts";

export default function ImageList() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const activateAnimation = useAnimation();

	useEffect(() => {
		if (isInView) {
			activateAnimation.start("visible");
		}
	}, [isInView, activateAnimation]);

	const images = [
		Aguacate,
		Aguacate2,
		Aguacate3,
		Aguacate4,
		Aguacate5,
		Limon,
		Limon2,
		Limon3,
		Limon4,
		Limon5,
		Limon6,
		Limon7,
	];

	return (
		<>
			<section className=" sm:w-5/6 mx-auto w-3/5">
				<div className=" sm:flex-col  flex justify-center items-center mt-5 mb-5 gap-5">
					<div className="flex justify-center items-center rounded-full w-48 h-48 overflow-hidden">
						<Image
							src={YoCampo}
							alt="Me"
							width={300}
							height={200}
							className="rounded-xl opacity-80"
						/>
					</div>

					<article className="flex flex-col sm:w-5/6 mx-auto  w-3/5 mt-3">
						<div className="bg-slate-700 rounded-large p-10">
							<h2
								className={`${poppins.className} antialiased sm:w-5/6  w-96 text-white`}
							>
								Agriculture is the seed that feeds the future, producing not
								only food, but also thriving communities and a sustainable
								world.
							</h2>
						</div>
						<div className="flex flex-row items-center justify-center mt-4 gap-2">
							<IoIosTime className="text-white text-xl" />
							<p className={`${poppins.className} text-white antialiased`}>
								+5yrs Experience
							</p>
							<MdTerrain className="text-white text-xl" />
							<p className={`${poppins.className} text-white antialiased`}>
								+20 hectares worked
							</p>
						</div>
					</article>
				</div>
				<article className="flex justify-center items-center mt-6 mb-6">
					<Production />
				</article>
				<div ref={ref}>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
						{images.map((src, index) => (
							<motion.div
								key={index}
								variants={{
									hidden: { opacity: 0, y: 75, scale: 0.5 },
									visible: { opacity: 1, y: 0, scale: 1 },
								}}
								initial="hidden"
								animate={activateAnimation}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<div className="relative h-60">
									<Image
										src={src}
										className="rounded-md object-cover absolute inset-0 w-full h-full"
										alt={`Imagen ${index + 1}`}
										priority={true}
									/>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
			<FooterAgriculture />
		</>
	);
}
