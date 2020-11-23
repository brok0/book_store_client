import React, { useState, useEffect } from "react";
import { Form, Col, Dropdown, Button } from "react-bootstrap";

export default function ChangeBookForm(obook) {
	const [book, SetBook] = useState(obook);

	const [title, SetTitle] = useState(book.obook.book.title);
	const [authorID, SetAuthorId] = useState(book.obook.book.authorId);
	const [pages, SetPages] = useState(book.obook.book.pages);
	const [edition, SetEdition] = useState(book.obook.book.edition);
	const [Illustrations, SetIllustration] = useState(
		book.obook.book.illustrations
	);
	const [cover, SetCover] = useState(book.obook.book.cover);
	const [price, SetPrice] = useState(book.obook.book.price);
	const [language, SetLanguage] = useState(book.obook.book.language);
	const [year, SetYear] = useState(book.obook.book.year);
	const [printingId, SetPrinting] = useState(book.obook.book.printingId);
	const [image, SetImage] = useState(book.obook.book.image);

	const handleSubmit = (e) => {
		e.preventDefault();
		PutBook();
	};

	const PutBook = () => {
		fetch("https://localhost:44378/book/edit", {
			method: "put",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				id: book.obook.book.id,
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
						placeholder="Title"
						onChange={(e) => SetTitle(e.target.value)}
						value={title}
						required
					/>
				</Col>
				<Col>
					<Form.Control
						type="number"
						placeholder="Author id"
						onChange={(e) => SetAuthorId(e.target.value)}
						value={authorID}
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
						value={pages}
						required
					/>
				</Col>
				<Col>
					<Form.Control
						type="text"
						placeholder="edition"
						onChange={(e) => SetEdition(e.target.value)}
						value={edition}
						required
					/>
				</Col>
			</Form.Row>

			<Form.Row className="mt-3">
				<Col>
					<label>Illustrations</label>
					<Dropdown
						onChange={(e) => SetIllustration(e.target.value)}
						value={Illustrations}
					>
						<Dropdown.Toggle
							variant="success"
							id="dropdown-basic"
						></Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#">Matte</Dropdown.Item>
							<Dropdown.Item href="#">Hard</Dropdown.Item>
							<Dropdown.Item href="#">Soft</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Col>
				<Col>
					<Dropdown onChange={(e) => SetCover(e.target.value)}>
						<Dropdown.Toggle variant="success" id="dropdown-basic">
							Cover
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#">Black&White</Dropdown.Item>
							<Dropdown.Item href="#">Colour</Dropdown.Item>
							<Dropdown.Item href="#">None</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Col>
			</Form.Row>

			<Form.Row className="mt-3">
				<Col>
					<Form.Control
						type="number"
						placeholder="Price"
						onChange={(e) => SetPrice(e.target.value)}
						value={price}
						required
					/>
				</Col>
				<Col>
					<Form.Control
						type="text"
						placeholder="Language"
						onChange={(e) => SetLanguage(e.target.value)}
						value={language}
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
						value={year}
						required
					/>
				</Col>

				<Col>
					<Form.Control
						type="number"
						placeholder="Printing id"
						onChange={(e) => SetPrinting(e.target.value)}
						value={printingId}
						required
					/>
				</Col>
			</Form.Row>
			<Form.Row className="mt-3">
				<label>Image :</label>
				<Col>
					<Form.Control
						type="file"
						placeholder="Image"
						onChange={(e) => SetImage(e.target.value)}
						value={image}
					/>
				</Col>
			</Form.Row>
			<Button className="mt-4" variant="info" type="submit">
				Submit
			</Button>
		</Form>
	);
}
