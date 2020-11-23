import React, { useEffect, useState } from "react";
import AddBookForm from "../formsContainers/AddBookForm";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export default function AddBookModal() {
	const [show, setShow] = useState(false);
	return (
		<div>
			<Button
				className="p-relative "
				variant="dark"
				onClick={() => {
					setShow(true);
				}}
			>
				Add Book
			</Button>
			<Modal
				show={show}
				onHide={() => {
					setShow(false);
				}}
			>
				<Modal.Header closeButton>
					<Modal.Title>Add Book</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<AddBookForm />
				</Modal.Body>
			</Modal>
		</div>
	);
}
