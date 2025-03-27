import React from "react";
import Particles from "./components/particles";
import { Navigation } from "@/app/components/nav";
import Link from "next/link";

export default function Home(): React.JSX.Element {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <Navigation showBack={false} />
            <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
            <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
                ultimapm.dev
            </h1>

            <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <div className="my-16 text-center animate-fade-in">
                <h2 className="text-sm text-zinc-500 ">
                    I'm building API, services, applications, websites, SAAS, ERP and CRM systems...
                </h2>
            </div>
            <footer className="absolute bottom-4 text-center w-full text-sm text-zinc-500">
                <p>
                    Made by{" "}
                    <Link
                        target="_blank"
                        href="https://nextjs.org"
                        className="underline duration-500 hover:text-zinc-300"
                    >
                        Pavlo Medynskiy
                    </Link>
                    . Powered by{" "}
                    <span className="font-semibold">
						<Link
                            target="_blank"
                            href="https://nextjs.org"
                            className="underline duration-500 hover:text-zinc-300"
                        >
							NextJS
						</Link>
					</span>{" "}
                    &copy; {new Date().getFullYear()}
                </p>
            </footer>
        </div>
    );
}
