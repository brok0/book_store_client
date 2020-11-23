import React, { useEffect, useState } from "react";
import AddAuthorForm from "../formsContainers/AddAuthorForm";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export default function AddAuthorModal() {
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
				Add Author
			</Button>
			<Modal
				show={show}
				onHide={() => {
					setShow(false);
				}}
			>
				<Modal.Header closeButton>
					<Modal.Title>Add Author</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<AddAuthorForm />
				</Modal.Body>
			</Modal>
		</div>
	);
}
