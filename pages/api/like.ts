import {NextApiRequest, NextApiResponse} from "next";
import {Redis} from "@upstash/redis";
import {NextRequest, NextResponse} from "next/server";

const redis = Redis.fromEnv();
export const config = {
    runtime: "edge",
};

export default async function handler(req: NextRequest): Promise<NextResponse> {
    if (req.method !== "POST") {
        return new NextResponse("use POST", {status: 405});
    }
    if (req.headers.get("Content-Type") !== "application/json") {
        return new NextResponse("must be json", {status: 400});
    }
    const body = await req.json();
    let slug: string | undefined = undefined;
    if ("slug" in body) {
        slug = body.slug;
    }
    if (!slug) {
        return new NextResponse("Slug not found", {status: 400});
    }
    const types: string[] = ["blog", "projects"];
    let type: string | undefined = undefined;
    if ("type" in body) {
        type = body.type;
    }
    if (!type || !types.includes(type.toLowerCase())) {
        return new NextResponse("Type not found", {status: 400});
    }
    await redis.incr(["likes", type.toLowerCase(), slug].join(":"));
    return new NextResponse(null, {status: 202});
}
