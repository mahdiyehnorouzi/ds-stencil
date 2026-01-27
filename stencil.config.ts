import { Config } from "@stencil/core";
import { postcss } from "@stencil-community/postcss";

export const config: Config = {
  namespace: "stencil-test",
  globalStyle: "src/global/tailwind.css",
  plugins: [
    postcss({
      plugins: [require("tailwindcss"), require("autoprefixer")],
    }),
  ],
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    { type: "docs-readme" },
    {
      type: "www",
      serviceWorker: null,
    },
  ],
};
