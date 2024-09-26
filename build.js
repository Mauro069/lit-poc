const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/custom-input.ts"],
    bundle: true,
    minify: true,
    outfile: "dist/custom-input.js",
    sourcemap: true,
    format: "esm",
    target: ["es6"],
    external: ["lit"],
  })
  .catch(() => process.exit(1));
