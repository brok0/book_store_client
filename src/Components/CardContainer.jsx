import React, { useState, useEffect } from "react";
import {
	Card,
	CardDeck,
	Button,
	Spinner,
	Popover,
	OverlayTrigger,
	OverlayProps,
} from "react-bootstrap";
import DeleteBookModal from "./forms/DeleteBookModal";
import ChangeBookModal from "./forms/formModals/ChangeBookModal";
export default function CardContainer() {
	const [books, SetBooks] = useState();
	const [loading, setLoading] = useState(true);
	const [authors, setAuthors] = useState();
	const [printings, SetPrintings] = useState();
	/*{book.pages} 
	{book.edition} 
	{book.cover} 
	{book.year} 
	{book.language}
	{book.illustration} 
	{book.price} */

	function getAllAuthors() {}

	function getAllBooks() {
		fetch("https://localhost:44378/book/all")
			.then((res) => res.json())
			.then((res) => {
				SetBooks(res);
				console.log(res);
			})
			.then(setLoading(false))
			.catch((err) => console.error());
	}

	useEffect(() => {
		if (!books) getAllBooks();
	});
	return (
		<div>
			<Spinner animation={loading ? "border" : ""} role="status">
				<span className="sr-only">Loading...</span>
			</Spinner>
			<h4>All Books</h4>
			<div className="container">
				<CardDeck>
					{!books || books.length <= 0
						? ""
						: books.map((book) => (
								<div>
									<Card
										bg=""
										text="black"
										style={{ width: "25rem" }}
										className="m-1"
									>
										<Card.Header>
											<section className="text-left">{book.id}</section>{" "}
											<section className="text-center">
												Book : {book.title}
											</section>
										</Card.Header>
										<Card.Body>
											<Card.Text className="align">
												<div className="float-right text-left">
													<section> Pages: {book.pages}</section>
													<section>Edition: {book.edition}</section>
													<section>Cover: {book.cover}</section>
													<section>Year: {book.year}</section>
													<section>Language: {book.language}</section>
													<section>Illustrations: {book.illustration}</section>
													<section>Price: {book.price} </section>
													<section>Author :</section>
													<OverlayTrigger
														trigger="hover"
														key="top"
														placement="top"
														overlay={popover}
													>
														<button href=""> {book.authorId}</button>
													</OverlayTrigger>

													<section>Printing Company :</section>
													<a href=""> {book.printingId}</a>
												</div>
												<img
													src="logo192.png"
													className="rounded float-left "
												></img>
											</Card.Text>
										</Card.Body>
										<Card.Footer>
											<ChangeBookModal book={{ book }} />

											<DeleteBookModal
												id={book.id}
												title={book.title}
											></DeleteBookModal>
										</Card.Footer>
									</Card>
								</div>
						  ))}
				</CardDeck>
			</div>
		</div>
	);
}
const popover = (props) => (
	<Popover id="popover-basic">
		<Popover.Title as="h3">Popover right</Popover.Title>
		<Popover.Content>
			And here's some <strong>amazing</strong> content. It's very engaging.
			right?
		</Popover.Content>
	</Popover>
);
