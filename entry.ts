// entry.ts
import { createApp } from "honox/server";
import { serveStatic } from "hono/bun";

const app = createApp({
	init: (app) => {
		app.use(
			"/static/*",
			serveStatic({
				root: "./dist",
			}),
		);
	},
});

export default app;
