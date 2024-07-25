import { Button } from "./ui/button";

export default function Counter({ init }: { init: number }) {
	return (
		<div>
			<p>{init}</p>
			<form method="POST">
				<Button type="submit" className="bg-red-600">
					Increment
				</Button>
			</form>
		</div>
	);
}
