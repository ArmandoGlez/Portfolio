"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Arduino from "../../public/arduino.jpg";
import Graduation from "../../public/graduation.jpg";
import Meeting from "../../public/meeting.jpg";
import Meeting2 from "../../public/meeting2.jpg";
import Pc from "../../public/pc.jpg";
import MeWithPc from "../../public/mewithpc.jpg";
import { useAnimation, useInView, motion } from "framer-motion";

export default function Experience() {
	const myImages = [
		{ src: Arduino, alt: "Arduino" },
		{ src: Graduation, alt: "Graduation" },
		{ src: Meeting, alt: "Meeting" },
		{ src: Meeting2, alt: "Meeting in Wallavi" },
		{ src: MeWithPc, alt: "Studying" },
		{ src: Pc, alt: "Programming" },
	];

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const activateAnimation = useAnimation();

	useEffect(() => {
		if (isInView) {
			activateAnimation.start("visible");
		}
	}, [isInView, activateAnimation]);

	return (
		<>
			<div ref={ref} className="text-center sm:w-5/6 mx-auto w-3/5">
				<div className="grid sm:grid-cols-2 grid-cols-3 gap-1 justify-center items-center">
					{myImages.map((images, i) => (
						<motion.div
							variants={{
								hidden: { opacity: 0, y: 75 },
								visible: { opacity: 1, y: 0 },
							}}
							initial="hidden"
							animate={activateAnimation}
							transition={{ duration: 0.5, delay: 0.55 }}
							key={i}
						>
							<div className="flex justify-center items-center">
								<Image
									src={images.src}
									alt={images.alt}
									width={300}
									height={200}
									className="rounded-xl opacity-80"
								/>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			<div></div>
		</>
	);
}
