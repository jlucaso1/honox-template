// vite.config.ts
import honox from "honox/vite";
import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig(({ mode }) => {
	if (mode === "client") {
		return {
			build: {
				minify: true,
				cssMinify: true,
			},
			plugins: [
				honox({
					client: {
						input: ["/app/app.css"],
					},
				}),
			],
			resolve: {
				alias: {
					"@": path.resolve(__dirname, "./app"),
				},
			},
		};
	}

	return {
		build: {
			minify: true,
			cssMinify: true,
			ssr: true,
			emptyOutDir: false,
			rollupOptions: {
				external: [/^node:/, "@radix-ui/react-slot"],
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
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./app"),
			},
		},
	};
});
