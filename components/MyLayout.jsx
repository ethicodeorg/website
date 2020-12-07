// https://github.com/zeit/next.js/blob/master/examples/layout-component/components/layout.js
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Layout({ children, title = 'Ethicode', ...props }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/eye-close.png" type="image/x-icon" />
        {/* <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        /> */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;1,300&display=swap"
        />
      </Head>

      <div id="app" className="frontground">
        <Header currentPage={children.type.name} />
        {children}

        <style jsx global>
          {`
            body {
              margin: 0;
              height: 100%;
            }
          `}
        </style>
      </div>
    </div>
  );
}
