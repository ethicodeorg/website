import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import theme from '../styles/theme';

export default function Layout({ children, title = 'Ethicode', ...props }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/eye-close.png" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;1,300&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
      </Head>

      <div id="app">
        <Header currentPage={children.type.name} />
        {children}

        <style jsx global>
          {`
            body {
              margin: 0;
              height: 100%;
            }
            #app {
              font-family: ${theme.fontFamily.default};
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              background-color: ${theme.colors.darkBackground};
            }
          `}
        </style>
      </div>
    </div>
  );
}
