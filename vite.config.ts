// vite.config.ts
import honox from "honox/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      plugins: [
        honox({
          client: {
            input: ["/app/app.css"],
          },
        }),
        tailwindcss(),
      ],
      build: {
        minify: true,
        cssMinify: true,
      },
    };
  } else {
    return {
      build: {
        ssr: true,
        emptyOutDir: false,
        minify: true,
        cssMinify: true,
        rollupOptions: {
          external: [/^node:/],
          input: "./entry.ts",
          output: {
            entryFileNames: "server.js",
          },
        },
      },
      plugins: [
        honox({
          client: {
            input: ["/app/app.css"],
          },
        }),
        tailwindcss(),
      ],
    };
  }
});
