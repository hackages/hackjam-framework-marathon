import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class Books extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      books: [],
      inputContent: "",
      selectedBook: null
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    // You can get the book list @ http://localhost:5000/books
  };

  add = () => {
    // You should add your new book to http://localhost:5000/books json server will create an id for you if you dont provide one  };

  remove = (bookId) => {
    // You should remove the book from  http://localhost:5000/books/bookId
  };

  render() {
    return (
      <div>
        <nav className="level">
          <div className="level-left">
            <div className="level-item">
              <p className="subtitle is-5">
                <strong>Book's</strong> title
              </p>
            </div>
            <div className="level-item">
              <div className="field has-addons">
                <p className="control">
                  <input className="input" type="text" placeholder="books"
                         value="this.state.inputContent"
                         change={(e) => this.setState({inputContent: e})}/>
                </p>
                <p className="control">
                  <button className="button" onClick={this.add}>
                    Add
                  </button>
                </p>
              </div>
            </div>
          </div>
        </nav>
        <table className="table">
          <thead>
          <tr>
            <th><abbr title="ID">ID</abbr></th>
            <th>Title</th>
            <th>{this.state.selectedBook ? 'View Details' : ''}</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {this.state.books.map(book => (
            <tr
              key="book.id"
              className={this.state.selectedBook && this.state.selectedBook.id === book.id && 'is-selected'}
              onClick={this.setState({selectedBook: book})}
            >
              <td>{{book.id}}</td>
              <td>{{book.title}}</td>

              {this.state.selectedBook && this.state.selectedBook.id === book.id
                ? (<td>
                  <Link to={`/detail/${this.state.selectedBook.id}`}>
                    View details
                  </Link>
                </td>)
                : <td />
              }
              <td>
                <button
                  className="button is-danger"
                  onClick={this.remove(book.id)}
                >x
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}
