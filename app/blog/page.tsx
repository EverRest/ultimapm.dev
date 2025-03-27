import Link from "next/link";
import React from "react";
import { allArticles } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";
import { ShareIcons } from "./components/ShareIcons";
import { ArticleTags } from "./components/ArticleTags";

const redis = Redis.fromEnv();
const ARTICLES_PER_PAGE = 6;

export const revalidate = 60;
export default async function BlogPage({ searchParams }: { searchParams: { page?: string } }) {
    const currentPage = Number(searchParams?.page) || 1;

    const views = (
        await redis.mget<number[]>(
            ...allArticles.map((p) => ["pageviews", "blog", p.slug].join(":"))
        )
    ).reduce((acc, v, i) => {
        acc[allArticles[i].slug] = v ?? 0;
        return acc;
    }, {} as Record<string, number>);

    const likes = (
        await redis.mget<number[]>(
            ...allArticles.map((p) => ["likes", "blog", p.slug].join(":"))
        )
    ).reduce((acc, v, i) => {
        acc[allArticles[i].slug] = v ?? 0;
        return acc;
    }, {} as Record<string, number>);

    const sortedByViews = [...allArticles]
        .filter((a) => a.published)
        .sort((a, b) => (views[b.slug] ?? 0) - (views[a.slug] ?? 0));

    const [featured, top2, top3] = sortedByViews;
    const sorted = allArticles
        .filter((a) => a.published)
        .filter(
            (article) =>
                article.slug !== featured.slug &&
                article.slug !== top2.slug &&
                article.slug !== top3.slug
        )
        .sort(
            (a, b) =>
                new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
                new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
        );

    const totalPages = Math.ceil(sorted.length / ARTICLES_PER_PAGE);
    const paginatedArticles = sorted.slice(
        (currentPage - 1) * ARTICLES_PER_PAGE,
        currentPage * ARTICLES_PER_PAGE
    );

    return (
        <div className="relative pb-16 min-h-screen">
            <Navigation />
            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Blog
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        Some of the posts about technologies are on my own time.
                    </p>
                </div>
                <div className="w-full h-px bg-zinc-800" />
                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
                    <Card>
                        <ArticleTags tags={featured.tags} />
                        <hr />
                        <ShareIcons
                            slug={featured.slug}
                            title={featured.title}
                            description={featured.description}
                        />
                        <hr />
                        <Link href={`/blog/${featured.slug}`}>
                            <article className="relative w-full h-full p-4 md:p-8">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="text-xs text-zinc-100">
                                        {featured.date ? (
                                            <time dateTime={new Date(featured.date).toISOString()}>
                                                {Intl.DateTimeFormat(undefined, {
                                                    dateStyle: "medium",
                                                }).format(new Date(featured.date))}
                                            </time>
                                        ) : (
                                            <span>SOON</span>
                                        )}
                                    </div>
                                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                                        <Eye className="w-4 h-4" />{" "}
                                        {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                                            views[featured.slug] ?? 0
                                        )}
                                    </span>
                                </div>
                                <h2
                                    id="featured-post"
                                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                                >
                                    {featured.title}
                                </h2>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    {featured.description}
                                </p>
                                <div className="absolute bottom-2 md:bottom-4">
                                    <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                                        Read more <span aria-hidden="true">→</span>
                                    </p>
                                </div>
                            </article>
                        </Link>
                    </Card>
                    <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
                        {[top2, top3].map((article) => (
                            <Card key={article.slug}>
                                <ArticleTags tags={article.tags} />
                                <hr />
                                <Article article={article} views={views[article.slug] ?? 0} />
                                <hr />
                                <ShareIcons
                                    slug={article.slug}
                                    title={article.title}
                                    description={article.description}
                                />
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
                    <div className="grid grid-cols-1 gap-4">
                        {paginatedArticles
                            .filter((_, i) => i % 3 === 0)
                            .map((article) => (
                                <Card key={article.slug}>
                                    <ArticleTags tags={article.tags} />
                                    <hr />
                                    <Article article={article} views={views[article.slug] ?? 0} />
                                    <hr />
                                    <ShareIcons
                                        slug={article.slug}
                                        title={article.title}
                                        description={article.description}
                                    />
                                </Card>
                            ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {paginatedArticles
                            .filter((_, i) => i % 3 === 1)
                            .map((article) => (
                                <Card key={article.slug}>
                                    <ArticleTags tags={article.tags} />
                                    <hr />
                                    <Article article={article} views={views[article.slug] ?? 0} />
                                    <hr />
                                    <ShareIcons
                                        slug={article.slug}
                                        title={article.title}
                                        description={article.description}
                                    />
                                </Card>
                            ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {paginatedArticles
                            .filter((_, i) => i % 3 === 2)
                            .map((article) => (
                                <Card key={article.slug}>
                                    <ArticleTags tags={article.tags} />
                                    <hr />
                                    <Article article={article} views={views[article.slug] ?? 0} />
                                    <hr />
                                    <ShareIcons
                                        slug={article.slug}
                                        title={article.title}
                                        description={article.description}
                                    />
                                </Card>
                            ))}
                    </div>
                </div>

                {totalPages > 1 && (
                    <nav className="flex justify-center gap-4 mt-8">
                        <Link
                            href={`/blog?page=${Math.max(1, currentPage - 1)}`}
                            className={`px-4 py-2 rounded-md ${currentPage === 1
                                ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                                : "bg-zinc-900 text-zinc-100 hover:bg-zinc-800"}`}
                        >
                            Previous
                        </Link>
                        <span className="px-4 py-2 text-zinc-400">
                            Page {currentPage} of {totalPages}
                        </span>
                        <Link
                            href={`/blog?page=${Math.min(totalPages, currentPage + 1)}`}
                            className={`px-4 py-2 rounded-md ${currentPage === totalPages
                                ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                                : "bg-zinc-900 text-zinc-100 hover:bg-zinc-800"}`}
                        >
                            Next
                        </Link>
                    </nav>
                )}
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
                    © {new Date().getFullYear()}
                </p>
            </footer>
        </div>
    );
}