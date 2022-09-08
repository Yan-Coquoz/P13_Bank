import { src as _src, build } from "./paths.js";

export const entry = [_src + "/index.js", _src + "/style/index.scss"];
export const output = {
  path: build,
  publicPath: "/",
  filename: "js/[name].[contenthash].js",
};
export const resolve = {
  alias: {
    src: _src,
    app: _src,
  },
};
export const module = {
  rules: [
    //JS
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      ],
    },

    // Fonts
    {
      test: /\.(woff2?|eot|ttf|otf)$/,
      loader: "file-loader",
      options: {
        outputPath: "fonts/",
      },
    },

    // Images
    {
      test: /\.(ico|gif|png|jpe?g|webp|svg)$/i,
      use: [
        {
          loader: "file-loader",
          options: { outputPath: "images/" },
        },
      ],
    },
  ],
};
export const uniqueName = "p13_bank";
export const devServer = {
  port: 3005,
  client: {
    progress: true,
  },
  hot: true,
};
