import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The original WordPress URLs all end in a trailing slash — preserve that so
  // SEO, backlinks and bookmarks keep resolving to the same canonical URLs.
  trailingSlash: true,

  // Every image is served locally from /public/images (paths mirror the original
  // wp-content/uploads/... structure), so no images.remotePatterns are needed.

  async redirects() {
    return [
      { source: "/wp-admin/:path*", destination: "/", permanent: false },
      { source: "/feed/", destination: "/blog/", permanent: true },
    ];
  },
};

export default nextConfig;
