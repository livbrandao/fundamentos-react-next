const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  basePath: "/fundamentos-react-next",
  trailingSlash: true,
  output: "export",
};

module.exports = nextConfig;
