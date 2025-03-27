"use client";

import { useEffect } from "react";

export const ReportView: React.FC<{ slug: string }> = ({ slug }) => {
	useEffect(() => {
		const type = "blog";
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

export const ReportLike: React.FC<{ slug: string }> = ({ slug }) => {
	useEffect(() => {
		const type = "blog";
		fetch("/api/like", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ slug, type }),
		});
	}, [slug]);

	return null;
};
