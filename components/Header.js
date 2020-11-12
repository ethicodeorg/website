import React, { Component } from 'react';

class Header extends Component {
  
   render() {

    return (
      <header id="home">

      {/* <nav id="nav-wrap">

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Ethicode</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#work">Work</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav> */}

      <div class="menu menu-main"><a href="#/" class="router-link-exact-active router-link-active menu-item menu-item-main menu-item-active menu-item-first">
            
            <img src="/assets/ethicode-logo-white.png" alt="ethicode-logo" class="logo" /></a><a href="#/about" class="menu-item menu-item-main">
            About
            &nbsp;</a><a href="#/work" class="menu-item menu-item-main">
            Work
            &nbsp;</a><a href="#/contact" class="menu-item menu-item-main">
            Contact
            &nbsp;</a>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
