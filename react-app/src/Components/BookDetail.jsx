import React, { Component } from 'react';
import axios from 'axios';

export class BookDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {
        id: 0,
        title: '',
        category: '',
      },
    };
  }

  componentDidMount() {
    this.fetchBook(this.props.match.params.id);
  }

  fetchBook = (id) => {
    // You can get the book details at http://localhost:5000/books/id
  };

  update = (event) =>
    this.setState({
      book: {
        ...this.state.book,
        title: event.target.value
      }
    });

  save = () => {
    // You can update the book details at http://localhost:5000/books/id

  };

  goBack = () => {
    // Check the history props
  };

  render() {
    const {book} = this.state;
    return (

      book
        ?
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              #book.id - book.title details!
            </p>
            <a className="card-header-icon">
      <span className="icon">
        <i className="fa fa-angle-down"/>
      </span>
            </a>
          </header>
          <div className="card-content">
            <div className="content">
              <label>Title </label>
              <input className="input" value="this.state.book.title" onChange={this.update()} placeholder="title"/>
            </div>
          </div>
          <footer className="card-footer">
            <a className="card-footer-item" onClick="this.goBack">Back</a>
            <a className="card-footer-item" onClick=this.save>Save</a>
          </footer>
        </div>
        : <div />
    );
  }
};
