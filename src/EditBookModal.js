import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class EditBookModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.book.title,
      description: this.props.book.description,
      genre: this.props.book.genre,
    }
  }

  handleSubmit = (e) => {
    let updatedBook = {
      title: this.state.title || this.props.book.title,
      description: this.state.description || this.props.book.description,
      genre: this.state.genre || this.props.book.genre,
      _id: this.props.book._id,
      __v: this.props.book.__v,
    }
    console.log(`handleSubmit`)
    console.log(updatedBook);
    this.props.handleUpdate(updatedBook);
  }

  render() {

    console.log(this.props.testState);

    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Make Changes to Book!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label>Book Title</Form.Label>
                <Form.Control onChange={(e) => this.setState({title: e.target.value})} name='title' type="bookTitle" defaultValue={this.props.book.title} />
                <Form.Label>Book Description</Form.Label>
                <Form.Control onChange={(e) => this.setState({description: e.target.value})} name='description' type="bookDescription" placeholder="Book Description" defaultValue={this.props.book.description} />
                <Form.Label>Book Genre</Form.Label>
                <Form.Control onChange={(e) => this.setState({genre: e.target.value})} name='genre' type="bookGenre" placeholder="Book Genre" defaultValue={this.props.book.genre}/>
                <Button variant="primary" onClick={this.handleSubmit}>
                  Edit Book
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>

        </Modal>
      </>
    )
  }
}

export default EditBookModal;