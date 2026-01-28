import Link from "next/Link";

export default function NotFound() {
	return (
		<main>
			<h1>Not Found</h1>
			<p>Are you lost?</p>
			<Link href="/">Back to home</Link>
		</main>
	)
}