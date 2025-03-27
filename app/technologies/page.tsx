"use client";
import { Navigation } from "../components/nav";
import { ResponsiveContainer, Treemap, TreemapProps } from "recharts";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import { generateFlatColors } from "@/app/utils/colors";

const data = [
	{
		name: "Software Architecture",
		children: [
			{ name: "ReactJS", size: 90 },
			{ name: "NextJS", size: 5 },
			{ name: "NextJS", size: 65 },
			{ name: "TailwindCSS", size: 8 },
			{ name: "TailwindCSS", size: 68 },
			{ name: "TailwindCSS", size: 48 },
		],
	},
	{
		name: "GO",
		children: [
			{ name: "ReactJS", size: 90 },
			{ name: "NextJS", size: 5 },
			{ name: "NextJS", size: 65 },
			{ name: "TailwindCSS", size: 58 },
			{ name: "TailwindCSS", size: 4 },
		],
	},
	{
		name: "Software Design",
		children: [
			{ name: "ReactJS", size: 90 },
			{ name: "NextJS", size: 5 },
			{ name: "NextJS", size: 65 },
			{ name: "TailwindCSS", size: 8 },
		],
	},
	{
		name: "Javascript",
		children: [
			{ name: "TailwindCSS", size: 10 },
			{ name: "TailwindCSS", size: 48 },
		],
	},
	{
		name: "K8S",
		children: [
			{ name: "ReactJS", size: 90 },
			{ name: "TailwindCSS", size: 48 },
		],
	},
	{
		name: "PHP",
		children: [
			{ name: "ReactJS", size: 90 },
			{ name: "NextJS", size: 5 },
			{ name: "NextJS", size: 65 },
			{ name: "TailwindCSS", size: 8 },
			{ name: "TailwindCSS", size: 18 },
			{ name: "TailwindCSS", size: 58 },
			{ name: "TailwindCSS", size: 3 },
			{ name: "TailwindCSS", size: 48 },
		],
	},
	{
		name: "NodeJS",
		children: [
			{ name: "ReactJS", size: 90 },
			{ name: "NextJS", size: 5 },
			{ name: "NextJS", size: 65 },
			{ name: "TailwindCSS", size: 8 },
			{ name: "TailwindCSS", size: 18 },
			{ name: "TailwindCSS", size: 58 },
			{ name: "TailwindCSS", size: 88 },
			{ name: "TailwindCSS", size: 5 },
			{ name: "TailwindCSS", size: 98 },
			{ name: "TailwindCSS", size: 48 },
		],
	},
	{
		name: "SQL",
		children: [
			{ name: "ReactJS", size: 90 },
			{ name: "NextJS", size: 5 },
		],
	},
	{
		name: "API Design",
		children: [
			{ name: "ReactJS", size: 90 },
			{ name: "NextJS", size: 5 },
			{ name: "NextJS", size: 65 },
			{ name: "TailwindCSS", size: 8 },
			{ name: "TailwindCSS", size: 18 },
			{ name: "TailwindCSS", size: 58 },
		],
	},
	{
		name: "Solidity",
		children: [
			{ name: "ReactJS", size: 90 },
			{ name: "NextJS", size: 5 },
			{ name: "NextJS", size: 65 },
			{ name: "TailwindCSS", size: 8 },
			{ name: "TailwindCSS", size: 18 },
			{ name: "TailwindCSS", size: 98 },
			{ name: "TailwindCSS", size: 48 },
		],
	},
	{
		name: "Docker",
		children: [
			{ name: "ReactJS", size: 90 },
			{ name: "TailwindCSS", size: 8 },
			{ name: "TailwindCSS", size: 48 },
		],
	},
	{
		name: "NOSQL",
		children: [
			{ name: "ReactJS", size: 90 },
			{ name: "NextJS", size: 5 },
			{ name: "TailwindCSS", size: 58 },
			{ name: "TailwindCSS", size: 88 },
		],
	},
	{
		name: "Cloud",
		children: [
			{ name: "TailwindCSS", size: 88 },
			{ name: "TailwindCSS", size: 68 },
			{ name: "TailwindCSS", size: 98 },
			{ name: "TailwindCSS", size: 48 },
		],
	},
	{
		name: "Blockchain",
		children: [
			{ name: "TailwindCSS", size: 58 },
			{ name: "TailwindCSS", size: 88 },
			{ name: "TailwindCSS", size: 68 },
			{ name: "TailwindCSS", size: 98 },
			{ name: "TailwindCSS", size: 48 },
		],
	},
];

let COLORS: string[] = generateFlatColors(data.length);

interface TreemapContentProps {
	root: any;
	depth: number;
	x: number;
	y: number;
	width: number;
	height: number;
	index: number;
	name: string;
}

const CustomizedContent: React.FC<TreemapContentProps> = ({
															  root : any,
															  depth,
															  x,
															  y,
															  width,
															  height,
															  index,
															  name,
														  }) => {
	return (
		<g>
			<rect
				x={x}
				y={y}
				width={width}
				height={height}
				style={{
					fill: depth < 2 ? COLORS[index % COLORS.length] : "#ffffff00",
					stroke: "#18181b",
					strokeWidth: 2 / (depth + 1e-10),
				}}
			/>
			{depth === 1 && (
				<text x={x + width / 2} y={y + height / 2} textAnchor="middle" fill="#fff" fontSize={14}>
					{name}
				</text>
			)}
		</g>
	);
};

interface CustomTreemapProps extends React.ComponentProps<typeof Treemap> {
	content?: React.ReactElement<unknown, React.FC<TreemapContentProps>>;
}

export default function Example() : React.JSX.Element {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 500);
		return () => clearTimeout(timer);
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
		<div className="bg-gradient-to-tl from-zinc-900/0 min-h-screen  via-zinc-900 to-zinc-900/0">
			<Navigation/>
			<div className="hidden sm:block mx-auto max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-42 pb-5">
				<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl pb-2">
					Technologies
				</h2>
				<span className="pt-5 text-zinc-400">
					Some of the projects are from work and some are on my own time.
				</span>
			</div>
			<div className="container mx-auto max-w-6x pb-4">
				<div className="w-full h-px bg-zinc-800"/>
			</div>
			<div className="container flex items-center justify-center px-4 mx-auto">
				<ResponsiveContainer width="100%" height={650}>
					<Treemap
						width={600}
						height={400}
						data={data}
						dataKey="size"
						stroke="#fff"
						fill="#8884d8"
						content={<CustomizedContent depth={0} height={400} index={0} name={"TailwindCSS"} root={"root"}
													width={600} x={3} y={3}/>}
					/>
				</ResponsiveContainer>
			</div>
			<div className="container mx-auto max-w-7x pt-1">
				<div className="w-full h-px bg-zinc-800"/>
			</div>
			<footer className="absolute hidden sm:block bottom-4 text-center w-full text-sm text-zinc-500">
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
					© {new Date().getFullYear()}
				</p>
			</footer>
		</div>
	);
}