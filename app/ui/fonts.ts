import { IBM_Plex_Mono } from "next/font/google";
import { Varela_Round } from "next/font/google";
import { Prompt } from "next/font/google";
import { Poppins } from "next/font/google";

export const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: "700" });
export const poppins = Poppins({ subsets: ["latin"], weight: "200" });
export const poppins2 = Poppins({ subsets: ["latin"], weight: "400" });

export const ibmPlexMono2 = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: "500",
});
export const ibmPlexMono3 = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: "300",
});
export const varelaRound = Prompt({ subsets: ["latin"], weight: "900" });
export const prompt = Prompt({ subsets: ["latin"], weight: "500" });
