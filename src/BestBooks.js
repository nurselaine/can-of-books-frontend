import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  async componentDidMount() {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      let bookData = await axios.get(url);
      if (bookData.data) {
        this.setState({
          books: bookData.data
        })
      }
    } catch (err) {
      console.log(err, 'An error occured');
    }
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
      </>
    )
  }
}

export default BestBooks;
