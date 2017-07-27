import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Books } from './Components/Books';
import { BookDetail } from './Components/BookDetail';
import { Dashboard } from './Components/Dashboard';
import { Navbar } from './Components/Navbar';
export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/books" component={Books}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/detail/:id" component={BookDetail}/>
        </div>
      </Router>
    );
  }
}
