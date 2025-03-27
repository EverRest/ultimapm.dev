"use client";
import {useEffect, useState} from "react";

interface ArticleTagsProps {
    tags?: string[];
}

export function ArticleTags({tags}: ArticleTagsProps) {
    const [colors, setColors] = useState<string[]>([]);

    useEffect(() => {
        if (tags && tags.length > 0) {
            const lightColors = tags.map(() => {
                const hue = Math.floor(Math.random() * 360);
                return `hsl(${hue}, 70%, 85%)`;
            });
            setColors(lightColors);
        }
    }, [tags]);

    if (!tags || tags.length === 0) return null;

    return (
        <div className="relative overflow-hidden w-full mt-2 h-10">
            <div className="animate-marquee whitespace-nowrap">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="inline-block px-3 py-2 mx-2 text-sm font-bold uppercase text-gray-800 rounded-sm shadow-sm"
                        style={{backgroundColor: colors[index] || "#E5E7EB"}}
                    >
            #{tag}
          </span>
                ))}
                {tags.map((tag, index) => (
                    <span
                        key={`duplicate-${index}`}
                        className="tag inline-block px-3 py-2 mx-2 text-sm font-bold uppercase text-gray-800 rounded-sm shadow-sm"
                        style={{backgroundColor: colors[index] || "#E5E7EB"}}
                    >
            #{tag}
          </span>
                ))}
                {tags.map((tag, index) => (
                    <span
                        key={`trio-${index}`}
                        className="inline-block px-3 py-2 mx-2 text-sm font-bold uppercase text-gray-800 rounded-sm shadow-sm"
                        style={{backgroundColor: colors[index] || "#E5E7EB"}}
                    >
            #{tag}
          </span>
                ))}
            </div>
            <style jsx>{`
                .animate-marquee {
                    display: inline-block;
                    animation: marquee 50s linear infinite;
                }

                @keyframes marquee {
                    0% {
                        transform: translateX(100%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }

                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}