import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import BookFormModal from './BookFormModal';
import EditBookModal from './EditBookModal';
import { Next } from 'react-bootstrap/esm/PageItem';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      show: false,
      editShow: false,
      currentBook: {},
    }

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  async componentDidMount() {
    this.handleGetBook();
  }

  handleGetBook = async () => {
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

  async deleteBook(id) {

    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`;
      await axios.delete(url);
      let updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: updatedBooks,
      })
      console.log(this.state.books);
    } catch (err) {
      console.log(err, 'An error occured');
    }
  }

  // async updatedBook(id) {

  // }

  async handleUpdate(newBookObj) {
    // let book = testState.books;
    let updatedBooks = this.state.books.map(book => {
      if (book._id === newBookObj._id) {
        return newBookObj;
      } else {
        return book;
      }
    })

    this.setState({
      books: updatedBooks,
    })

    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${newBookObj._id}`;
      console.log('url',url);
      console.log(newBookObj);
      await axios.put(url, newBookObj);
    } catch (error) {
      console.log('oh snap! Something went wrong', error.response.data);
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

  handleShowEdit = (e, bookObj) => {
    this.setState({
      editShow: true,
      currentBook: bookObj,
    })
  }

  handleCloseEdit = (e) => {
    this.setState({
      editShow: false
    })
  }

  handleNewBook = (bookObj) => {
    this.setState({
      books: [...this.state.books, bookObj],
    })

  }

  render() {
    /* TODO: render all the books in a Carousel */
    let renderedBooks = this.state.books.map((book) => {
      return (
          <Carousel.Item key={book._id}>
            <img
              className="d-block w-100"
              src="./images/library.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{book.title}</h3>
              <p>{book.description}</p>
              <p>{book.genre}</p>
              <Button
                onClick={() => this.deleteBook(book._id)}
                variant="danger"
              >
                DELETE
              </Button>
              <Button 
                variant="primary" 
                onClick={() => {this.setState({editShow: true, currentBook: book})}}
              >
                Edit Book
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
      )
    })
    console.log(this.state.currentBook);
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
        <BookFormModal
          handleNewBook={this.handleNewBook}
          show={this.state.show}
          handleShow={this.handleShow}
          handleClose={this.handleClose}
        />
        <EditBookModal
            testState={this.state}
            show={this.state.editShow}
            handleShow={this.handleShowEdit}
            handleClose={this.handleCloseEdit}
            handleUpdate={this.handleUpdate}
            onClick={this.handleUpdate}
            book={this.state.currentBook}
          />
      </>
    )
  }
}

export default BestBooks;
