import { notFound } from "next/navigation";
import { Mdx } from "@/app/components/mdx";
import { Header } from "@/app/blog/[slug]/header";
import "@/app/blog/[slug]/mdx.css";
import { ReportView } from "@/app/blog/[slug]/view";
import { Redis } from "@upstash/redis";
import { allArticles } from "contentlayer/generated";
import { Metadata } from "next";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allArticles
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export async function generateMetadata({ params }: Props):Promise<Metadata> {
    const slug = params?.slug;
    const blog = allArticles.find((blog) => blog.slug === slug);

    if(!blog) {
        return {};
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const url = `${baseUrl}/blog/${slug}`;

    return {
        title: blog.title,
        description: blog.description,
        metadataBase: new URL(baseUrl),
        openGraph: {
            title: blog.title,
            description: blog.description,
            url: url,
            type: "article",
            images: [
                {
                    url: "/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ],
        },
    };
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const blog = allArticles.find((blog: { slug: string; }) => blog.slug === slug);


  if (!blog) {
    notFound();
  }

  const views =
    (await redis.get<number>(["pageviews", "blog", slug].join(":"))) ?? 0;
  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header blog={blog} views={views} />
      <ReportView slug={blog.slug} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={blog.body.code} />
      </article>
    </div>
  );
}
