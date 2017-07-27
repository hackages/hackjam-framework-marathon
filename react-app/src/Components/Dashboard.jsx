import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

  componentDidMount() {
    // You should fetch de books from http://localhost:5000/books
    // and store them in your state
  }

  render() {
    return (
      <section className="section">
        <div class="container">
          <div className="columns is-multiline">
            {this.state.books.map(book => (
              <div className="column is-one-quarter" key="book.id">
                <div className="card">
                  <Link to={`/detail/book.id`}>
                    <div className="card-header">
                      <p className="card-header-title has-text-centered">{{book.title}}</p>
                    </div>
                    <div className="card-content">
                      <div class="content">
                        {{book.description}}
                        <br />
                      </div>
                    </div>
                    <div class="card-footer">
                      <p className="card-footer-item">{book.category}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
