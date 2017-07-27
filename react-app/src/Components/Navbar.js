import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BookSearch } from './BookSearch';
import Logo from '../hackages.jpg';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="navbar-brand">
            <a className="navbar-item" href="http://bulma.io">
              <img src={Logo}
                   alt="Logo"
                   width="112" height="28"/>
            </a>
            <div className="navbar-item">
              <h1>Hackzon</h1>
            </div>
          </div>

          <div id="navmenuMobile" className="navbar-menu is-active">
            <div className="navbar-start">
              <p className="navbar-item">
                <Link to="/dashboard">Home</Link>
              </p>
              <div className="navbar-item">
                <p>
                  <Link to="/books">Manage Books</Link>
                </p>
              </div>
            </div>

            <div className="navbar-end">
              <BookSearch/>
            </div>

          </div>
        </nav>
      </div>
    );
  }
}

