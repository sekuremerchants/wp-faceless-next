import Link from "next/link";

export default function NotFound() {
	return (
		<main>
			<h1>Not Found</h1>
			<p>Are you lost?</p>
			<Link href="/">Back to home</Link>
		</main>
	)
}