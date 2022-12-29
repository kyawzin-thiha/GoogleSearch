
import 'styles/globals.scss';


export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
	}) {

	return (
		<html>
			<head>
				<title>Google Search API</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				></meta>
			</head>
			<body>{children}</body>
		</html>
	);
}
