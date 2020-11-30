import React, { Component } from 'react';
import Link from 'next/link';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuType: 'dark',
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.props.currentPage.indexOf('Work') >= 0 || this.props.currentPage.indexOf('Contact') >= 0
        ? this.setState({ menuType: 'light' })
        : this.setState({ menuType: 'dark' });
    }
  }
  render() {
    return (
      <header id="home">
        {this.state.menuType === "dark" ? (
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
        ) : (
          <div className="menu menu-main menu-main-light">
            <Link href="/">
              <a className="router-link-exact-active router-link-active menu-item menu-item-main menu-item-active menu-item-first">
                <img src="/assets/ethicode-logo-black.png" alt="ethicode-logo" className="logo" />
              </a>
            </Link>
            <Link href="/about">
              <a className="menu-item menu-item-main menu-item-main-light">About&nbsp;</a>
            </Link>
            <Link href="/work">
              <a className="menu-item menu-item-main menu-item-main-light">Work&nbsp;</a>
            </Link>
            <Link href="/contact">
              <a className="menu-item menu-item-main menu-item-main-light">Contact&nbsp;</a>
            </Link>
          </div>
        )}
      </header>
    );
  }
}

export default Header;
