import React, { useEffect, useState } from "react";
import AddAuthorForm from "../formsContainers/AddAuthorForm";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ChangeBookForm from "../formsContainers/ChangeBookForm";
export default function ChangeBookModal(book) {
	const [show, setShow] = useState(false);
	const [obook, SetBook] = useState(book.book);

	return (
		<div>
			<Button
				className="ml-5 mr-1 float-left"
				variant="warning"
				onClick={() => {
					setShow(true);
				}}
			>
				Edit
			</Button>
			<Modal
				show={show}
				onHide={() => {
					setShow(false);
				}}
			>
				<Modal.Header closeButton>
					<Modal.Title>Edit Book</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ChangeBookForm obook={obook} />
				</Modal.Body>
			</Modal>
		</div>
	);
}
