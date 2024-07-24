import { useState } from "hono/jsx";

export default function Counter({ init }: { init: number }) {
  return (
    <div>
      <p>{init}</p>
      <form method="POST">
        <button type="submit">Increment</button>
      </form>
    </div>
  );
}
