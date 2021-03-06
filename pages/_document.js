import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
						rel="stylesheet"
					/>
					{/* <link
						href="https://fonts.googleapis.com/css2?family=Bitter:wght@300;400&display=swap"
						rel="stylesheet"
					/> */}
				</Head>
				<body className="bg-black">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
