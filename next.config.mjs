const isProd = process.env.NODE_ENV === "production";

export default {
  reactStrictMode: true,
  assetPrefix: isProd ? "/http://minjinworld.github.io/29cm_next/" : "",
  trailingSlash: true,
};
