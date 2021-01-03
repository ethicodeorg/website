import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames';
import theme from '../styles/theme';

const Header = () => {
  const router = useRouter();
  const activePage = router.pathname;
  const darkPages = ['/about', '/team', '/'];
  const isDark = darkPages.includes(activePage);

  return (
    <div className="menu-main">
      <Link href="/">
        <a className="menu-item menu-item-first">
          <img
            src={`/ethicode-logo-${isDark ? 'white' : 'black'}.png`}
            alt="ethicode-logo"
            className="logo"
          />
        </a>
      </Link>
      <Link href="/work">
        <a
          className={classNames('menu-item', {
            'menu-item-active': activePage === '/work',
          })}
        >
          Work
        </a>
      </Link>
      <Link href="/about">
        <a
          className={classNames('menu-item', {
            'menu-item-active': activePage === '/about',
          })}
        >
          About
        </a>
      </Link>
      <Link href="/team">
        <a
          className={classNames('menu-item', {
            'menu-item-active': activePage === '/team',
          })}
        >
          Team
        </a>
      </Link>
      <Link href="/contact">
        <a
          className={classNames('menu-item', {
            'menu-item-active': activePage === '/contact',
          })}
        >
          Contact
        </a>
      </Link>

      <style jsx>{`
        .menu-main {
          position: fixed;
          display: flex;
          align-items: flex-end;
          width: 100%;
          padding: 20px 20px;
          background-color: ${isDark ? theme.colors.darkBackground : theme.colors.background};
          color: ${isDark ? theme.colors.lightText : theme.colors.text};
          box-sizing: border-box;
          transition: background-color 0.3s ease-in-out;
          z-index: 2;
        }
        .menu-item {
          display: block;
          margin-right: 10px;
          font-size: 16px;
          font-weight: bold;
          color: ${isDark ? theme.colors.lightText : theme.colors.text};
          border: none;
          background: none;
          padding: 0;
          text-decoration: none;
          transition: color 0.2s ease-in-out;
          transform: translateY(0);
        }
        .menu-item:hover,
        .menu-item-active {
          color: ${theme.colors.pink};
          transition: color 0.2s ease-in-out;
          text-decoration: none;
        }
        .menu-item-first {
          display: flex;
          margin-right: auto;
        }
        .logo {
          width: 80px;
          height: 25px;
        }

        @media screen and (min-width: 800px) {
          .logo {
            width: 100px;
            height: 31px;
          }
          .menu-main {
            padding: 30px;
          }
          .menu {
            justify-content: flex-end;
          }
          .menu-main {
            display: flex;
          }
          .menu-item {
            display: block;
            margin: 0 15px;
          }
          .menu-item-first {
            display: flex;
            margin-right: auto;
          }
        }

        @media screen and (min-width: 1000px) {
          .menu-item {
            font-size: 21px;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
