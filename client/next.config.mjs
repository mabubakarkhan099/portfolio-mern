import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        // pathname: '/account123/**',
      },
      
    ],
  },
};

export default nextConfig;
