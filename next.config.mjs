/** @type {import('next').NextConfig} */
const nextConfig = {
  // The live WordPress site uses trailing slashes; preserve them to avoid duplicate URLs.
  trailingSlash: true,
  images: {
    // All images should be localized under /public. Remote patterns are only a
    // temporary bridge for any asset not yet downloaded — the goal is everything local.
    remotePatterns: [],
  },
  async redirects() {
    return [
      // Legacy WordPress paths so nothing 404s after cutover.
      { source: "/wp-admin/:path*", destination: "/", permanent: false },
      { source: "/wp-login.php", destination: "/", permanent: false },
      { source: "/feed", destination: "/blog", permanent: true },
      { source: "/feed/:path*", destination: "/blog", permanent: true },
      { source: "/category/:path*", destination: "/blog", permanent: false },
      { source: "/shelter-transformation", destination: "/shelter-showcase", permanent: true },
    ];
  },
};

export default nextConfig;
