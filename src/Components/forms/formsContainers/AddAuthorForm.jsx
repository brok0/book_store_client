import React, { useState, useEffect } from "react";
import { Form, Col, Dropdown, Button } from "react-bootstrap";
export default function AddAuthorForm() {
	const [name, SetName] = useState();
	const [birhtday, SetBirthday] = useState();
	const [biography, SetBiography] = useState();
	const [image, SetImage] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

		PostAuthor();
	};
	const PostAuthor = () => {
		fetch("https://localhost:44378/author/new", {
			method: "post",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				name: name,
				birhtday: birhtday,
				biography: biography,
				image: image,
			}),
		}).then((res) => console.log(res));
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
				<Col>
					<Form.Control
						type="date"
						placeholder="Birthday"
						required
						onChange={(e) => SetBirthday(e.target.value)}
					/>
				</Col>
			</Form.Row>

			<Form.Row className="mt-3">
				<Col>
					<Form.Control
						as="textarea"
						rows={3}
						placeholder="Biography"
						onChange={(e) => SetBiography(e.target.value)}
					/>
				</Col>
			</Form.Row>
			<Form.Row className="mt-3">
				<label>Image : </label>
				<Col>
					<Form.Control
						type="file"
						placeholder="Image"
						onChange={(e) => SetImage(e.target.value.toDataUrl("image/jpeg"))}
					/>
				</Col>
			</Form.Row>

			<Button className="mt-4" variant="info" type="submit">
				Submit
			</Button>
		</Form>
	);
}
