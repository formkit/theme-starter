import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/theme.ts"],
  format: ["cjs", "esm"],
  external: ["@formkit/theme-creator"],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
});
