export default function Counter({ init }: { init: number }) {
	return (
		<div>
			<p>{init}</p>
			<form method="POST">
				<button type="submit" className="bg-red-600">
					Increment
				</button>
			</form>
		</div>
	);
}
