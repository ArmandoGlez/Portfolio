import React from "react";
import Image from "next/image";
import Arduino from "../../public/arduino.jpg";
import Graduation from "../../public/graduation.jpg";
import Meeting from "../../public/meeting.jpg";
import Meeting2 from "../../public/meeting2.jpg";
import Pc from "../../public/pc.jpg";
import MeWithPc from "../../public/mewithpc.jpg";

export default function Experience() {
	const myImages = [
		{ src: Arduino, alt: "Arduino" },
		{ src: Graduation, alt: "Graduation" },
		{ src: Meeting, alt: "Meeting" },
		{ src: Meeting2, alt: "Meeting in Wallavi" },
		{ src: MeWithPc, alt: "Studying" },
		{ src: Pc, alt: "Programming" },
	];
	return (
		<>
			<div className="text-center">
				<div className="grid grid-cols-3 gap-1 justify-center items-center">
					{myImages.map((images, i) => (
						<div className="flex justify-center items-center" key={i}>
							<Image
								key={i}
								src={images.src}
								alt={images.alt}
								width={300}
								height={200}
								className="rounded-xl opacity-80"
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
