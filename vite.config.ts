// vite.config.ts
import honox from "honox/vite";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      plugins: [honox()],
      build: {
        minify: true,
      },
    };
  } else {
    return {
      build: {
        ssr: true,
        emptyOutDir: false,
        minify: true,
        rollupOptions: {
          external: [/^node:/],
          input: "./entry.ts",
          output: {
            entryFileNames: "server.js",
          },
        },
      },
      plugins: [honox()],
    };
  }
});
