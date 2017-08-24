import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title}
            className="list-group-item"
            onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }

}


function mapStateToProps(state) {
  // pass the application state 'books' to props.books
  return {
    books: state.books
  };
}


function mapDispatchToProps(dispatch) {
  // pass result to all of our reducers, pass selectBook to props.selectBook
  // selectBook is an action function
  return bindActionCreators({ selectBook }, dispatch);
}


// Promote BookList from component to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
