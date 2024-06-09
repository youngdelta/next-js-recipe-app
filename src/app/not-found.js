import Link from 'next/link';

export default function NotFound(params) {
	return (
		<div>
			<h1>Page Not Found.</h1>
			<Link href={'/'}>Go to Home</Link>
		</div>
	);
}
