import React, { useState, useEffect } from "react";
import { Form, Col, Dropdown, Button } from "react-bootstrap";

export default function AddBookForm() {
	const [title, SetTitle] = useState("");
	const [authorID, SetAuthorId] = useState(0);
	const [pages, SetPages] = useState(0);
	const [edition, SetEdition] = useState("");
	const [Illustrations, SetIllustration] = useState("");
	const [cover, SetCover] = useState("");
	const [price, SetPrice] = useState(0);
	const [language, SetLanguage] = useState("");
	const [year, SetYear] = useState(0);
	const [printingId, SetPrinting] = useState(0);
	const [image, SetImage] = useState();

	const handleSubmit = (e) => {
		PostBook();
	};

	function toDataURL(src, callback, outputFormat) {
		var img = new Image();
		img.crossOrigin = "Anonymous";
		img.onload = function () {
			var canvas = document.createElement("CANVAS");
			var ctx = canvas.getContext("2d");
			var dataURL;
			canvas.height = this.naturalHeight;
			canvas.width = this.naturalWidth;
			ctx.drawImage(this, 0, 0);
			dataURL = canvas.toDataURL(outputFormat);
			callback(dataURL);
		};
		img.src = src;
		if (img.complete || img.complete === undefined) {
			img.src =
				"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
			img.src = src;
		}
	}

	const PostBook = () => {
		fetch("https://localhost:44378/book/new", {
			method: "post",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				title: title,
				authorId: parseInt(authorID, 10),
				pages: parseInt(pages, 10),
				edition: edition,
				Illustrations: Illustrations,
				cover: cover,
				price: parseInt(price, 10),
				language: language,
				year: parseInt(year, 10),
				printingId: parseInt(printingId, 10),
				image: toDataURL(image),
			}),
		}).then((res) => console.log(res));
	};
	const handleCheckBoxChangeIllustr = ({ target: { value } }) => {
		console.log(Illustrations, value);
		SetIllustration(value);
	};

	const handleCheckBoxChangeCover = ({ target: { checked } }) => {
		console.log(cover, checked);
		SetCover(checked);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Row className="mt-3">
				<Col>
					<Form.Control
						type="text"
						placeholder="Title"
						onChange={(e) => SetTitle(e.target.value)}
						required
					/>
				</Col>
				<Col>
					<Form.Control
						type="number"
						placeholder="Author id"
						onChange={(e) => SetAuthorId(e.target.value)}
						required
					/>
				</Col>
			</Form.Row>

			<Form.Row className="mt-3">
				<Col>
					<Form.Control
						type="number"
						placeholder="Pages"
						onChange={(e) => SetPages(e.target.value)}
						required
					/>
				</Col>
				<Col>
					<Form.Control
						type="text"
						placeholder="edition"
						onChange={(e) => SetEdition(e.target.value)}
						required
					/>
				</Col>
			</Form.Row>

			<Form.Row className="mt-3">
				<Col>
					<Form.Control
						type="number"
						placeholder="Price"
						onChange={(e) => SetPrice(e.target.value)}
						required
					/>
				</Col>
				<Col>
					<Form.Control
						type="text"
						placeholder="Language"
						onChange={(e) => SetLanguage(e.target.value)}
						required
					/>
				</Col>
			</Form.Row>
			<Form.Row className="mt-3">
				<Col>
					<Form.Control
						type="number"
						placeholder="Year"
						onChange={(e) => SetYear(e.target.value)}
						required
					/>
				</Col>

				<Col>
					<Form.Control
						type="number"
						placeholder="Printing id"
						onChange={(e) => SetPrinting(e.target.value)}
						required
					/>
				</Col>
			</Form.Row>

			<Form.Row className="mt-3">
				<Col>
					<label>Illustrations</label>

					<Form.Group controlId="CoverCheckBox">
						<Form.Check
							type="checkbox"
							label="Color"
							onChange={(e) => SetIllustration("Color")}
						/>
						<Form.Check
							type="checkbox"
							label="Black&White"
							onChange={(e) => SetIllustration("Black&White")}
						/>
						<Form.Check
							type="checkbox"
							label="None"
							onChange={(e) => SetIllustration("None")}
						/>
					</Form.Group>
				</Col>
				<Col>
					<label>Cover</label>
					<Form.Group controlId="CoverCheckBox">
						<Form.Check
							type="checkbox"
							label="Matte"
							value="Matte"
							onChange={(e) => SetCover("Matte")}
						/>
						<Form.Check
							type="checkbox"
							label="Hard"
							value="Hard"
							onChange={(e) => SetCover("Hard")}
						/>
						<Form.Check
							type="checkbox"
							label="Soft"
							onChange={(e) => SetCover("Soft")}
						/>
					</Form.Group>
				</Col>
			</Form.Row>

			<Form.Row className="mt-3">
				<label>Image :</label>
				<Col>
					<Form.Control
						type="file"
						placeholder="Image"
						onChange={(e) => SetImage(e.target.value)}
					/>
				</Col>
			</Form.Row>

			<Button className="mt-4" variant="info" type="submit">
				Submit
			</Button>
		</Form>
	);
}
