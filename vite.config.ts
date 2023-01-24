import handlebars from "vite-plugin-handlebars";
import { resolve } from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import pagesConfig from "./pages.config";
import globalContext from "./pages-data/globalContext";

export default {
  server: {
    host: true,
  },
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/icons")],
      symbolId: "[name]",
    }),
    handlebars({
      partialDirectory: resolve(__dirname, "partials"),
      context(pagePath) {
        return {
          ...globalContext,
          ...pagesConfig[pagePath],
        };
      },
    }),
  ],
};
