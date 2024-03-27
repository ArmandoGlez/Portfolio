"use client";
import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import { poppins } from "../ui/fonts";
import Footer from "../components/footer";

export default function Contact() {
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [submitting, setSubmitting] = useState(false);
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			setSubmitting(true);
			const response = await fetch("https://formspree.io/f/moqgnbdn", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, lastName, email, message }),
			});

			if (response.ok) {
				setShowSuccessMessage(true);
				setName(""); // Reset name field
				setLastName(""); // Reset last name field
				setEmail(""); // Reset email field
				setMessage(""); // Reset message field
				setTimeout(() => setShowSuccessMessage(false), 5000); // Hide success message after 5 seconds
			} else {
				console.error("Error al enviar el formulario");
			}
		} catch (error) {
			console.error("Error inesperado:", error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<>
			<section className="flex items-center justify-center border-gray-500 min-h-screen">
				<div className="border shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
					<h2
						className={`${poppins.className} antialiased text-3xl font-bold text-center mb-6 text-white`}
					>
						Send me a message
					</h2>
					{showSuccessMessage && (
						<Alert severity="success">Thanks for your message.</Alert>
					)}
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label
								className={`${poppins.className} antialiased block text-white text-sm font-bold mb-2`}
								htmlFor="name"
							>
								Your Name:
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="name"
								type="text"
								name="name"
								placeholder="Enter your name"
								required
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="mb-4">
							<label
								className={`${poppins.className} antialiased block text-white text-sm font-bold mb-2`}
								htmlFor="lastName"
							>
								Your Last Name:
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="lastName"
								type="text"
								name="lastName"
								placeholder="Enter your last name"
								required
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
						</div>
						<div className="mb-4">
							<label
								className={`${poppins.className} antialiased block text-white text-sm font-bold mb-2`}
								htmlFor="email"
							>
								Your Email:
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="email"
								type="email"
								name="email"
								placeholder="Enter your email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="mb-6">
							<label
								className={`${poppins.className} antialiased block text-white text-sm font-bold mb-2`}
								htmlFor="message"
							>
								Your Message:
							</label>
							<textarea
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="message"
								name="message"
								placeholder="Enter your message"
								rows={4}
								required
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
						</div>
						<div className="flex items-center justify-center">
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								type="submit"
								disabled={submitting}
							>
								{submitting ? "Submitting..." : "Send"}
							</button>
						</div>
					</form>
				</div>
			</section>
			<Footer />
		</>
	);
}
