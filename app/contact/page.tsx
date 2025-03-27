"use client";
import React, {useEffect, useState} from "react";
import {Github, Mail, Twitter} from "lucide-react";
import {FaTelegramPlane} from "react-icons/fa";
import {Card} from "@/app/components/card";
import Link from "next/link";
import {Navigation} from "../components/nav";
import {generateFlatColors} from "../utils/colors";

const socials = [
    {
        icon: <Twitter size={20}/>,
        href: "https://x.com/PMedynskyi63394",
        label: "X",
        handle: "@PMedynskyi63394",
    },
    {
        icon: <Mail size={20}/>,
        href: "mailto:medynskyypavlo@gmail.com",
        label: "EMAIl",
        handle: "Email",
    },
    {
        icon: <Github size={20}/>,
        href: "https://github.com/EverRest",
        label: "GITHUB",
        handle: "EverRest",
    },
    {
        icon: <FaTelegramPlane size={20}/>,
        href: "https://t.me/pavlo_med",
        label: "Telegram",
        handle: "@pav_med",
    }
];

export default function Example() {
    const [isLoading, setIsLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [colors, setColors] = useState<string[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setColors(generateFlatColors(4));
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                const nextIndex = (prev + 4) % socials.length;
                setColors(generateFlatColors(4));
                return nextIndex;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    if (isLoading) {
        return (
            <div
                className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen flex items-center justify-center">
                <div className="ring" data-pulse-speed="0.05s">
                    <span className="loading-text">Loading</span>
                    <span></span>
                    <style jsx>{`
                        .ring {
                            position: relative;
                            width: 150px;
                            height: 150px;
                            background: transparent;
                            border: 3px solid rgba(255, 255, 255, 0.3);
                            border-radius: 50%;
                            text-align: center;
                            line-height: 150px;
                            font-family: sans-serif;
                            font-size: 20px;
                            color: rgba(255, 255, 255, 0);
                            letter-spacing: 4px;
                            text-transform: uppercase;
                            text-shadow: 0 0 10px rgba(255, 255, 255, 0);
                            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
                            animation: fadeIn 0.4s forwards;
                        }

                        .loading-text {
                            animation: blink 1s infinite;
                            color: rgba(255, 255, 255, 1);
                        }

                        @keyframes blink {
                            0%, 100% {
                                opacity: 1;
                            }
                            50% {
                                opacity: 0;
                            }
                        }

                        .ring:before {
                            content: "";
                            position: absolute;
                            top: -3px;
                            left: -3px;
                            width: 100%;
                            height: 100%;
                            border: 3px solid transparent;
                            border-top: 3px solid rgba(255, 255, 255, 0);
                            border-right: 3px solid rgba(255, 255, 255, 0);
                            border-radius: 50%;
                            animation: animateC 2s linear infinite, fadeIn 0.4s forwards;
                        }

                        @keyframes animateC {
                            0% {
                                transform: rotate(0deg);
                            }
                            100% {
                                transform: rotate(360deg);
                            }
                        }

                        @keyframes fadeIn {
                            0% {
                                opacity: 0;
                                color: rgba(255, 255, 255, 0);
                                border-color: rgba(255, 255, 255, 0);
                            }
                            100% {
                                opacity: 1;
                                color: rgba(255, 255, 255, 1);
                                border-color: rgba(255, 255, 255, 1);
                            }
                        }
                    `}</style>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
            <Navigation/>
            <main className="flex-1">
                <div className="mx-auto hidden sm:block max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-42 pb-5">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Contact me
                    </h2>
                </div>
                <div className="container mx-auto max-w-7x">
                    <div className="h-px bg-zinc-800"/>
                </div>
                <div className="container flex items-center justify-center pt-10 px-4 mx-auto">
                    <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto sm:mt-0 lg:gap-16">
                        {socials.map((s, index) => (
                            <Card key={index}>
                                <Link
                                    href={s.href}
                                    target="_blank"
                                    className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
                                >
                                <span
                                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                    aria-hidden="true"
                                />
                                    <span
                                        className="relative z-10 flex items-center justify-center w-12 h-12 text-sm border rounded-full text-white drop-shadow-orange animate-blink"
                                        style={{
                                            backgroundColor: colors[index],
                                            borderColor: "white",
                                        }}
                                    >
                                    {s.icon}
                                </span>
                                    <div className="z-10 flex flex-col items-center">
                                        <span
                                            className="lg:text-xl font-medium duration-150 xl:text-1xl text-zinc-200 group-hover:text-white font-display">
                                            {s.handle}
                                        </span>
                                            <span
                                                className="mt-4 hidden sm:block text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                            {s.label}
                                        </span>
                                    </div>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
            <footer className=" hidden sm:block text-center lg:pt-52 md:pt-52 sm:pt-24 xs:12 py-4 text-sm text-zinc-500">
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
                        <Link target="_blank" href="https://nextjs.org"
                              className="underline duration-500 hover:text-zinc-300">
                            NextJS
                        </Link>
                    </span>{" "}
                    © {new Date().getFullYear()}
                </p>
            </footer>

            <style jsx>{`
                @keyframes blink {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }

                .animate-blink {
                    animation: blink 1.5s infinite;
                }
            `}</style>
        </div>
    );
}
