import React, { useState, useEffect } from "react";
import BookCarousel from "./bookCarousel";
import AddBookModal from "./forms/formModals/AddBookModal";
import AddAuthorModal from "./forms/formModals/AddAuthorModal";
import AddPrintingModal from "./forms/formModals/AddPrintingModal";
import AddBookForm from "./forms/formsContainers/AddBookForm";
import CardContainer from "./CardContainer";
export default function ShowcaseContainer() {
	return (
		<div className="container">
			<hr></hr>
			<AddBookModal />
			<AddAuthorModal />
			<AddPrintingModal />
			<hr></hr>
			<CardContainer />
		</div>
	);
}
