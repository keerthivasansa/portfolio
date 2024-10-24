/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
            },
            {
                protocol: "https",
                hostname: 'camo.githubusercontent.com'
            },
        ],
    },
    output: 'export'
};

export default nextConfig;
