import type { AppProps } from 'next/app';
import React, { useMemo, useState } from 'react';
import '@/app/styles/globals.css';

// import localFont from 'next/font/local'
import 'moment/locale/th';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useOnMount } from '@/utils/hook';

// example add file font
// const myFont = localFont({
//     src: [
//         {
//             path: '',
//             weight: '',
//             style: '',
//         },
//     ],
// })

export default function App({ Component, pageProps }: AppProps) {
  const metaTag = pageProps?.metaTag;
  let content = <Component {...pageProps} />;

  useOnMount(() => {});

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"
        />

        <title>{metaTag?.title || 'title'}</title>
        <meta
          name="description"
          content={metaTag?.description || 'description'}
        />
      </Head>
      <ApplicationProvider>
        {/*Have Font*/}
        {/*<main className={`${myFont.className} `}>*/}
        <main>{content}</main>
      </ApplicationProvider>
    </>
  );
}

///For add other context
const ApplicationProvider = ({ children }: any) => {
  const router = useRouter();
  return <>{children}</>;
};
