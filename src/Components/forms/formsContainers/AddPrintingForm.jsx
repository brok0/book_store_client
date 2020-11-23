import React, { useState, useEffect } from "react";
import { Form, Col, Dropdown, Button } from "react-bootstrap";
export default function AddPrintingForm() {
	const [name, SetName] = useState();
	const [location, SetLocation] = useState();
	const [type, SetType] = useState();
	const PostPrinting = () => {
		fetch("https://localhost:44378/printing/new", {
			method: "post",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				name: name,
				location: location,
				type: type,
			}),
		}).then((res) => console.log(res));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		PostPrinting();
	};
	return (
		<Form onSubmit={handleSubmit}>
			<Form.Row className="mt-3">
				<Col>
					<Form.Control
						type="text"
						placeholder="Name"
						required
						onChange={(e) => SetName(e.target.value)}
					/>
				</Col>
			</Form.Row>
			<Form.Row className="mt-3">
				<Col>
					<Form.Control
						type="text"
						placeholder="Location"
						required
						onChange={(e) => SetLocation(e.target.value)}
					/>
				</Col>
			</Form.Row>

			<Form.Row className="mt-3">
				<Col>
					<Form.Control
						type="text"
						placeholder="Type"
						required
						onChange={(e) => SetType(e.target.value)}
					/>
				</Col>
			</Form.Row>

			<Button className="mt-4" variant="info" type="submit">
				Submit
			</Button>
		</Form>
	);
}
