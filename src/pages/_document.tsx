import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                <link href="/images/logo.png" rel="icon" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}