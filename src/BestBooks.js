import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import BookFormModal from './BookFormModal';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      show: false
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  async componentDidMount(){
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      let bookData = await axios.get(url);
      console.log('hello');
      if (bookData.data) {
        this.setState({
          books: bookData.data
        })
      }
    } catch (err) {
      console.log(err, 'An error occured');
    }
  }

  handleShow = (e) => {
    this.setState({
      show: true
    })
  }

  handleClose = (e) => {
    this.setState({
      show: false
    })
  }

  render() {
    console.log(this.state.books, 'books');
    /* TODO: render all the books in a Carousel */
    let renderedBooks = this.state.books.map((book, idx) => {
      return (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src="./images/library.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <p>{book.genre}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })
    return (
      <>

        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Carousel>
            {renderedBooks}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
        <BookFormModal show={this.state.show} handleShow={this.handleShow} handleClose={this.handleClose}/>
      </>
    )
  }
}

export default BestBooks;
