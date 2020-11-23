import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";

export default function DeleteBookModal(props) {
	const [show, setShow] = useState(false);
	const deleteBook = () => {
		fetch(`https://localhost:44378/book/delete/?id=${props.id}`, {
			method: "DELETE",
		}).then((res) => console.log(res));
	};

	return (
		<div>
			<Button
				className="ml-1 mr-5 float-right"
				variant="danger"
				onClick={() => {
					setShow(true);
				}}
			>
				delete
			</Button>
			<Modal
				show={show}
				onHide={() => {
					setShow(false);
				}}
			>
				<Modal.Header closeButton>
					<Modal.Title>Delete this book???</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={deleteBook}>
						<Form.Row className="mt-3">
							<Col>
								<Button type="submit"> Delete book : {props.title}</Button>
							</Col>
						</Form.Row>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);
}
