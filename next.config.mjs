import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["th.bing.com"],
  },
};

export default withNextVideo(nextConfig);
