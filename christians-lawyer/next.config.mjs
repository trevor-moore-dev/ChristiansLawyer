/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        reactCompiler: true
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.node$/,
            use: [{ loader: "nextjs-node-loader" }]
        });

        return config;
    }
};

export default nextConfig;
