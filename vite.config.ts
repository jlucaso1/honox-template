// vite.config.ts
import honox from "honox/vite";
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
			],
		};
	}

	return {
		build: {
			ssr: true,
			emptyOutDir: false,
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
		],
	};
});
