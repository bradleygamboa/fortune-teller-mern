import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList(){
    return this.props.books.map((book) => {
      return(

        <li
        className="collection-item"
        key={book.title}
        onClick={ () => this.props.selectBook(book) }
        >
          {book.title}
        </li>

      )
    })
  }
  render() {
    return(
      <div>
        <ul className="collection">
          {this.renderList()}
        </ul>
        <p>Active book: {this.props.activeBook ? this.props.activeBook.title : "Nothing Selected" } </p>
      </div>

    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook: selectBook},dispatch);
}


function mapStateToProps(state) {
  return {
    books: state.books,
    activeBook: state.activeBook
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
