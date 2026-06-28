import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://marquisladybug.github.io",
  base: "/marquis-field-archive",
  output: "static",
  devToolbar: {
    enabled: false
  },
  vite: {
    optimizeDeps: {
      exclude: ["aria-query", "axobject-query", "astro > aria-query", "astro > axobject-query"],
      esbuildOptions: {
        resolveExtensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"]
      }
    },
    plugins: [
      {
        name: "strip-dev-toolbar-audit-optimizer-includes",
        enforce: "post",
        configResolved(config) {
          const blocked = new Set(["astro > aria-query", "astro > axobject-query"]);
          config.optimizeDeps.include = config.optimizeDeps.include?.filter((id) => !blocked.has(id)) ?? [];
        }
      }
    ]
  }
});
