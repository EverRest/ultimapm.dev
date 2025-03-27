"use client";
import { ArrowLeft, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const navigation = [
	{ name: "Blog", href: "/blog" },
	// { name: "Projects", href: "/projects" },
	{ name: "Feedback", href: "/feedback" },
	{ name: "Contact", href: "/contact" },
	{ name: "Technologies", href: "/technologies" },
	{ name: "About me", href: "/about" },
];

export const Navigation: React.FC<{ showBack?: boolean }> = ({ showBack = true }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const [isMenuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting)
		);
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500 border-zinc-800"
				}`}
			>
				<div className="container flex items-center justify-between p-6 mx-auto">
					{showBack ? (
						<Link
							href="/"
							className="duration-200 text-zinc-300 hover:text-zinc-100"
						>
							<ArrowLeft className="w-6 h-6" />
						</Link>
					) : (
						<div></div>
					)}

					<div className="hidden md:flex gap-8">
						{navigation.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="duration-200 text-zinc-400 hover:text-zinc-100"
							>
								{item.name}
							</Link>
						))}
					</div>

					{/* Mobile Hamburger */}
					<button
						className="md:hidden text-zinc-400 hover:text-zinc-100"
						onClick={() => setMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="md:hidden px-6 pb-6 flex flex-col gap-4">
						{navigation.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-zinc-400 hover:text-zinc-100"
								onClick={() => setMenuOpen(false)}
							>
								{item.name}
							</Link>
						))}
					</div>
				)}
			</div>
		</header>
	);
};
