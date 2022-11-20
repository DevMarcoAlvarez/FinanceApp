import HtmlWebpackPugPlugin from "html-webpack-plugin";
import { join, resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Esta linea agrega autocompleado a el esquema de webpack 5
 * @type {import('webpack').Configuration}
 * */
export default {
  entry: "./Src/Types/Index.ts",

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.pug$/,
        include: join(__dirname, "./Src/Pages"),
        use: {
          loader: "pug-loader",
        },
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },

      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPugPlugin({
      template: "./Src/Pages/Index.pug",
      filename: "index.html",
    }),
  ],

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "./Dist"),
  },
};
