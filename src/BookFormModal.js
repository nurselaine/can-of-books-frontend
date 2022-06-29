import { render } from "@testing-library/react";
import React from "react";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class BookFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      genre: ''
    }
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      title: e.target.title.value,
    })
  }


  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.value, 'title')

    let bookToAdd = {
      title: e.target.title.value,
      description: e.target.description.value,
      genre: e.target.genre.value
    }
    let createdBook = await this.postBooks(bookToAdd);
    console.log(createdBook);
  }

  postBooks = async (newBookObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      let createdBook = await axios.post(url, newBookObj);
      if (createdBook.data) {
        this.props.handleNewBook(createdBook.data);
      }
      // update state that no data response from backend
    } catch (error) {
      console.log('oh snap! Something went wrong', error.response.data);
    }
  }

  render() {
    console.log(this.state);
    return (
      <>
        <Button variant="primary" onClick={this.props.handleShow}>
          Add Book
        </Button>

        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Book!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label>Book Title</Form.Label>
                <Form.Control name='title' type="bookTitle" placeholder="Book Title" />
                <Form.Label>Book Description</Form.Label>
                <Form.Control name='description' type="bookDescription" placeholder="Book Description" />
                <Form.Label>Book Genre</Form.Label>
                <Form.Control name='genre' type="bookGenre" placeholder="Book Genre" />
                <Button variant="primary" type="submit">
                  Add Book
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>

        </Modal>
      </>
    )
  }
}
export default BookFormModal;