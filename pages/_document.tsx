import {Html, Head, Main, NextScript} from 'next/document'
import React from "react";

export default function Document() {
    return (
        <Html lang={"th"}>
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" type="image/x-icon" href="/next.svg" />
            </Head>
            <body >
                <Main />
                <NextScript/>
            </body>
        </Html>
    )
}
