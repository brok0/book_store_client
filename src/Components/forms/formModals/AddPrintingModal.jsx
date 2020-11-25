import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddPrintingForm from "../formsContainers/AddPrintingForm";
export default function AddPrintingModal() {
	const [show, setShow] = useState(false);
	return (
		<div>
			<Button
				className="mb-2 mr-sm-2"
				variant="dark"
				onClick={() => {
					setShow(true);
				}}
			>
				Add printing
			</Button>
			<Modal
				show={show}
				onHide={() => {
					setShow(false);
				}}
			>
				<Modal.Header closeButton>
					<Modal.Title>Add Data</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<AddPrintingForm />
				</Modal.Body>
			</Modal>
		</div>
	);
}
