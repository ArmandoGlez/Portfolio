'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import App from "./components/NavBar";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });
import '../app/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html className="bgPrincipal" lang="en">
      <body className={`${inter.className}`}>
      
      <NextUIProvider>
        <App/>
        <main>
        {children}
        </main>
        </NextUIProvider>
     
      </body>
    </html>
    
    
  );
}
