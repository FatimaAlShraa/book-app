import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export class BookForm extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.showModal} onHide={this.props.closeModalFx}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.addBooks}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Book Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Book Name" name="bookName" onChange={this.props.updateBookName} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Description" name="description" onChange={this.props.updateDescription}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control type="text" placeholder="Image URL" name="image_url" onChange={this.props.updateImgUrl}/>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                            ➕ Add Book
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closeModalFx}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}

export default BookForm;