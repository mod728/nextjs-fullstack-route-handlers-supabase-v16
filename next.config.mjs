/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
    reactCompiler: true,
    images: {
          remotePatterns: [
              {
                  hostname: "res.cloudinary.com"
              }
          ]
    }
};

export default nextConfig;
