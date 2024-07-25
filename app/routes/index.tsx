import { createRoute } from "honox/factory";
import Counter from "../components/counter";
import { getCookie, setCookie } from "hono/cookie";

export default createRoute((c) => {
	const name = c.req.query("name") ?? "Hono";

	const counter = getCookie(c, "counter");

	const counterInt = Number.parseInt(counter ?? "0");

	return c.render(
		<div>
			<h1>Hello, {name}!</h1>
			<Counter init={counterInt} />
		</div>,
		{ title: name },
	);
});

export const POST = createRoute(async (c) => {
	const counter = getCookie(c, "counter");

	const counterInt = Number.parseInt(counter ?? "0");

	setCookie(c, "counter", String(counterInt + 1));

	return c.redirect("/");
});
