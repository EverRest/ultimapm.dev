"use client";
import React, {useEffect, useState} from "react";

export default function ProjectsLayout({children,}: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
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

                        /* Existing ring animations */
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
        <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 ">
            {children}
        </div>
    );
}
