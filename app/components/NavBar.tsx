"use client";
import Link from "next/link";
import { poppins } from "../ui/fonts";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { MdAgriculture } from "react-icons/md";
import { MdContactEmergency } from "react-icons/md";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const [changeColor, setChangeColor] = useState("");

	const pathname = usePathname();

	const [isOpen, setIsOpen] = useState(false);
	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	const DrawerList = (
		<Box
			style={{ backgroundColor: "black" }}
			sx={{ width: 250, height: "100%" }}
			onClick={toggleDrawer(false)}
		>
			<div className="p-10"></div>
			<List>
				<ListItem disablePadding>
					<Link href="/Agriculture">
						<ListItemButton component="a">
							<ListItemIcon>
								<MdAgriculture className="text-white" />
							</ListItemIcon>
							<ListItemText
								primary="Agriculture"
								className={`${poppins.className} antialiased text-white`}
							/>
						</ListItemButton>
					</Link>
				</ListItem>
				<ListItem disablePadding>
					<Link href="/contact">
						<ListItemButton component="a">
							<ListItemIcon>
								<MdContactEmergency className="text-white" />
							</ListItemIcon>
							<ListItemText
								primary="Contact me"
								className={`${poppins.className} antialiased text-white`}
							/>
						</ListItemButton>
					</Link>
				</ListItem>
				<ListItem disablePadding></ListItem>
			</List>
		</Box>
	);

	return (
		<>
			<nav className={` bg-black border-gray-500 border-b p-4 `}>
				<div className="flex sm:justify-between justify-around items-center">
					<div className="text-white font-bold text-lg">
						<Link href="/">
							<p>Home</p>
						</Link>
					</div>

					<div className={`md:flex md:space-x-4 ${open ? "block" : "hidden"}`}>
						{[
							{ href: "/Agriculture", text: "Agriculture" },
							{ href: "/contact", text: "Contact me" },
						].map((link, i) => (
							<Link
								key={i}
								href={link.href}
								className={`${poppins.className} ${
									pathname === link.href
										? "text-gray-500 md:text-gray-500"
										: "text-white"
								} antialiased text-white hover:text-gray-500`}
								onClick={() => setChangeColor(link.href)}
							>
								{link.text}
							</Link>
						))}
					</div>
					<Drawer
						className="bg-white bg-opacity-20 transition-opacity duration-3000 ease-in"
						open={open}
						onClose={toggleDrawer(false)}
					>
						{DrawerList}
					</Drawer>
					<div className="md:hidden">
						<button
							className="text-white focus:outline-none "
							onClick={toggleDrawer(true)}
						>
							<svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
								/>
							</svg>
						</button>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
