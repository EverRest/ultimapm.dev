"use client";
import { Twitter, Linkedin, Facebook } from "lucide-react";
import { useEffect, useState } from "react";
import { generateFlatColors } from "@/app/utils/colors";

interface ShareIconsProps {
    slug: string;
    title: string;
    description: string;
}

export function ShareIcons({ slug, title, description }: ShareIconsProps) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const articleUrl = `${baseUrl}/blog/${slug}`;
    const encodedUrl = encodeURIComponent(articleUrl);
    const encodedTitle = encodeURIComponent(title);
    const encodedDescription = encodeURIComponent(description || "Check out this article!");

    const shareUrls = {
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle} - ${encodedDescription}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}&source=${encodedUrl}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`,
    };

    const [hoverColors, setHoverColors] = useState<string[]>([]);

    useEffect(() => {
        setHoverColors(generateFlatColors(3));
        const interval = setInterval(() => {
            setHoverColors(generateFlatColors(3));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-4 flex justify-center gap-4">
            <a
                href={shareUrls.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-black transition hover:animate-blink border-2 border-white shadow-md hover:shadow-lg transform hover:-translate-y-1"
                style={{
                    backgroundColor: "#FFFFFF",
                    "--hover-bg": hoverColors[0] || "#1DA1F2",
                } as React.CSSProperties}
                title="Share on X"
            >
                <Twitter size={20} strokeWidth={2.5} />
            </a>
            <a
                href={shareUrls.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-black transition hover:animate-blink border-2 border-white shadow-md hover:shadow-lg transform hover:-translate-y-1"
                style={{
                    backgroundColor: "#FFFFFF",
                    "--hover-bg": hoverColors[1] || "#0077B5",
                } as React.CSSProperties}
                title="Share on LinkedIn"
            >
                <Linkedin size={20} strokeWidth={2.5} />
            </a>
            <a
                href={shareUrls.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-black transition hover:animate-blink border-2 border-white shadow-md hover:shadow-lg transform hover:-translate-y-1"
                style={{
                    backgroundColor: "#FFFFFF",
                    "--hover-bg": hoverColors[2] || "#4267B2",
                } as React.CSSProperties}
                title="Share on Facebook"
            >
                <Facebook size={20} strokeWidth={2.5} />
            </a>
            <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-blink {
          animation: blink 1.5s infinite;
        }
        a {
          background-color: #FFFFFF;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
          transition: all 0.5s ease;
        }
        a:hover {
          background-color: var(--hover-bg);
          box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
          transform: translateY(-1px);
          animation: blink 1.5s infinite;
        }
      `}</style>
        </div>
    );
}