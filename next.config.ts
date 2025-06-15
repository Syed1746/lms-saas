import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  removePatterns:[
    {
      hostname:'img.clerk.com'
    }
  ]
};

export default nextConfig;
