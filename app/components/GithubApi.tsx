"use client";
import axios from "axios";
import { poppins } from "../ui/fonts";
import { GoPeople } from "react-icons/go";
import { Spinner } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import Image from "next/image";

interface GitHubUser {
	name: string;
	login: string;
	avatar_url: string;
	followers: number;
	bio: string;
}

const ProfilePage: React.FC = () => {
	const [userData, setUserData] = useState<GitHubUser | null>(null);

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const activateAnimation = useAnimation();

	useEffect(() => {
		if (isInView) {
			activateAnimation.start("visible");
		}
	}, [isInView]);

	useEffect(() => {
		const fetchGitHubData = async () => {
			try {
				const response = await axios.get<GitHubUser>(
					"https://api.github.com/users/ArmandoGlez"
				);
				setUserData(response.data);
			} catch (error) {
				console.error("Error fetching GitHub data:", error);
			}
		};

		fetchGitHubData();
	}, []);

	return (
		<div ref={ref} className="flex flex-col justify-center items-center">
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 75, scale: 0.5 },
					visible: { opacity: 1, y: 0, scale: 1 },
				}}
				initial="hidden"
				animate={activateAnimation}
				transition={{ duration: 0.5, delay: 0.55 }}
			>
				<div className="bg-[#262626] rounded-lg flex flex-col items-center justify-center sm:p-8 p-16">
					{userData ? (
						<>
							<h1 className={`${poppins.className} antialiased text-white`}>
								{userData.name}
							</h1>

							<Image
								src={userData.avatar_url}
								alt="GitHub Avatar"
								style={{ width: 100, height: 100, borderRadius: "50%" }}
								width={100}
								height={100}
							/>
							<div className="flex justify-center items-center gap-4">
								<p className={`${poppins.className} antialiased text-white`}>
									Followers
								</p>
								<GoPeople className="text-white" />

								<p className={`${poppins.className} antialiased text-white`}>
									{userData.followers}
								</p>
							</div>
							<a
								href="https://github.com/ArmandoGlez "
								target="_blank"
								rel="noopener noreferrer"
							>
								<button
									className={`${poppins.className} antialiased rounded-xl border text-white w-56 border-white m-2`}
								>
									Follow me
								</button>
							</a>
						</>
					) : (
						<Spinner color="danger" />
					)}
				</div>
			</motion.div>
		</div>
	);
};

export default ProfilePage;
