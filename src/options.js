const path = require("path");
// plugins
import alias from "@rollup/plugin-alias";
import css from "rollup-plugin-css-only";
import { terser } from "rollup-plugin-terser";

export function defaultInputOptions(buildDirectory) {
  return {
    plugins: [
      css({
        output: "bundle.css",
      }),
      // alias({
      //   entries: [
      //     {
      //       find: "/__snowpack__",
      //       replacement: path.relative(buildDirectory, "__snowpack__"),
      //     },
      //     {
      //       find: "/web_modules",
      //       replacement: path.relative(buildDirectory, "web_modules"),
      //     },
      //   ],
      // }),
    ],
  };
}

export function defaultOutputOptions(buildDirectory) {
  return {
    format: "es",
    plugins: [terser()],
    chunkFileNames: "packs/[name].js",
    compact: true,
    entryFileNames: "packs/[name].js",
    dir: buildDirectory,
  };
}
