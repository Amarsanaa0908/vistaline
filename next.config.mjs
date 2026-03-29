/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // ⚠️ Accepts any HTTPS hostname
            },
            {
                protocol: 'http',
                hostname: '**', // ⚠️ Accepts any HTTP hostname
            },
        ],
        unoptimized: true
    }
};

export default nextConfig;
