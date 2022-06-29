import { render } from "@testing-library/react";
import React from "react";
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
   

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value, 'title')
        
         let bookToAdd = {
            title: e.target.title.value,
            description: e.target.description.value,
            genre: e.target.genre.value
         }
         console.log(bookToAdd);
    }

    render() {
        console.log(this.state);
        return (
            <>
                <Button variant="primary" onClick={this.props.handleShow}>
                    Launch demo modal
                </Button>

                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
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