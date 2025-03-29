import { withContentlayer } from "next-contentlayer";

const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
	images	: {
		domains: ["picsum.photos", "via.placeholder.com", "localhost"],
	},
	reactStrictMode: false,
	output: 'standalone',
};

export default withContentlayer(nextConfig);
