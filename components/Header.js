import React, { Component } from 'react';
import Link from 'next/link';

class Header extends Component {
  render() {
    return (
      <header id="home">
        <div className="menu menu-main">
          <Link href="/">
            <a className="router-link-exact-active router-link-active menu-item menu-item-main menu-item-active menu-item-first">
              <img src="/assets/ethicode-logo-white.png" alt="ethicode-logo" className="logo" />
            </a>
          </Link>

          <Link href="/about">
            <a className="menu-item menu-item-main">About&nbsp;</a>
          </Link>

          <Link href="/work">
            <a className="menu-item menu-item-main">Work&nbsp;</a>
          </Link>

          <Link href="/contact">
            <a className="menu-item menu-item-main">Contact&nbsp;</a>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
