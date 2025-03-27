"use client";

import { useEffect, useState } from "react";
import {Heart} from "lucide-react";

type ReportLikeProps = {
	slug: string;
	type: string;
	initialLikes: number;
};

export const ReportView: React.FC<{ slug: string }> = ({ slug }) => {
	useEffect(() => {
		const type = "projects";
		fetch("/api/incr", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ slug, type }),
		});
	}, [slug]);

	return null;
};

export function ReportLike({ slug, type, initialLikes }: ReportLikeProps) {
	const [likes, setLikes] = useState<number | null>(null);
	const [loading, setLoading] = useState(false);

	const handleLike = async () => {
		if (loading) return;
		setLoading(true);
		await fetch("/api/like", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ slug, type }),
		});
		setLikes((prev) => (prev ?? 0) + 1);
		setLoading(false);
	};

	return (
		<button
			onClick={handleLike}
			disabled={loading}
		>
			<Heart className="w-4 h-4"/>
			{likes !== null ? likes : "Like"}
		</button>
	);
}

