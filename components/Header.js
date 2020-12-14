import React, { Component } from 'react';
import Link from 'next/link';

class Header extends Component {
  constructor(props) {
    super(props);

    ~props.currentPage.indexOf('About') &&
      (this.state = {
        menuType: 'dark',
        ethicodeClass: 'menu-item menu-item-main menu-item-first',
        aboutClass: 'menu-item menu-item-main menu-item-active',
        workClass: 'menu-item menu-item-main',
        contactClass: 'menu-item menu-item-main',
      })

    ~props.currentPage.indexOf('Contact') &&
      (this.state = {
        menuType: 'light',
        ethicodeClass: 'menu-item menu-item-main menu-item-first',
        aboutClass: 'menu-item menu-item-main menu-item-main-light',
        workClass: 'menu-item menu-item-main menu-item-main-light',
        contactClass: 'menu-item menu-item-main menu-item-main-light menu-item-active',
      })

    ~props.currentPage.indexOf('Work') &&
      (this.state = {
        menuType: 'light',
        ethicodeClass: 'menu-item menu-item-main menu-item-first',
        aboutClass: 'menu-item menu-item-main menu-item-main-light',
        workClass: 'menu-item menu-item-main menu-item-main-light menu-item-active',
        contactClass: 'menu-item menu-item-main menu-item-main-light',
      })

    ~props.currentPage.indexOf('Index') &&
      (this.state = {
        menuType: 'dark',
        ethicodeClass: 'menu-item menu-item-main menu-item-first menu-item-active',
        aboutClass: 'menu-item menu-item-main',
        workClass: 'menu-item menu-item-main',
        contactClass: 'menu-item menu-item-main',
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      ~this.props.currentPage.indexOf('About') &&
        (this.setState({
          menuType: 'dark',
          ethicodeClass: 'menu-item menu-item-main menu-item-first',
          aboutClass: 'menu-item menu-item-main menu-item-active',
          workClass: 'menu-item menu-item-main',
          contactClass: 'menu-item menu-item-main',
        }));

      ~this.props.currentPage.indexOf('Contact') &&
        (this.setState({
          menuType: 'light',
          ethicodeClass: 'menu-item menu-item-main menu-item-first',
          aboutClass: 'menu-item menu-item-main menu-item-main-light',
          workClass: 'menu-item menu-item-main menu-item-main-light',
          contactClass: 'menu-item menu-item-main menu-item-main-light menu-item-active',
        }));

      ~this.props.currentPage.indexOf('Work') &&
        (this.setState({
          menuType: 'light',
          ethicodeClass: 'menu-item menu-item-main menu-item-first',
          aboutClass: 'menu-item menu-item-main menu-item-main-light',
          workClass: 'menu-item menu-item-main menu-item-main-light menu-item-active',
          contactClass: 'menu-item menu-item-main menu-item-main-light',
        }));

      ~this.props.currentPage.indexOf('Index') &&
        (this.setState({
          menuType: 'dark',
          ethicodeClass: 'menu-item menu-item-main menu-item-first menu-item-active',
          aboutClass: 'menu-item menu-item-main',
          workClass: 'menu-item menu-item-main',
          contactClass: 'menu-item menu-item-main',
        }));
    }
  }
  render() {
    return (
      this.state.menuType === 'dark' ? (
          <div className="menu menu-main">
            <Link href="/">
              <a className={this.state.ethicodeClass}>
                <img src="/assets/ethicode-logo-white.png" alt="ethicode-logo" className="logo" />
              </a>
            </Link>
            <Link href="/about">
              <a className={this.state.aboutClass}>About&nbsp;</a>
            </Link>
            <Link href="/work">
              <a className={this.state.workClass}>Work&nbsp;</a>
            </Link>
            <Link href="/contact">
              <a className={this.state.contactClass}>Contact&nbsp;</a>
            </Link>
          </div>
        ) : (
          <div className="menu menu-main menu-main-light">
            <Link href="/">
              <a className="menu-item menu-item-main menu-item-active menu-item-first">
                <img src="/assets/ethicode-logo-black.png" alt="ethicode-logo" className="logo" />
              </a>
            </Link>
            <Link href="/about">
              <a className={this.state.aboutClass}>About&nbsp;</a>
            </Link>
            <Link href="/work">
              <a className={this.state.workClass}>Work&nbsp;</a>
            </Link>
            <Link href="/contact">
              <a className={this.state.contactClass}>Contact&nbsp;</a>
            </Link>
          </div>
        )
    );
  }
}

export default Header;
