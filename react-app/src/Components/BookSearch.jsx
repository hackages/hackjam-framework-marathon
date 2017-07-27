import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class BookSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  search = (event) => {
    // You can fetch the books at this url
    // http://localhost:5000/books?q=yourSearchTerm
  };

  render() {
    const books = this.state.books.map(book => {
      return (
        <Link key="book.id" to="/detail/${book.id}" className="navbar-item">
          {book.title.length}
        </Link>
      );
    });
    const navbarItemClassName = books.length === 0 ? 'navbar-item' : 'navbar-item is-active';
    return (
      <div className={navbarItemClassName}>
        <div className="field is-grouped">
          <input className="control input " onKeyUp={this.search()} placeholder="Search"/>
        </div>
        <div className="navbar-dropdown">
          {books}
        </div>
      </div>
    );
  }
}
