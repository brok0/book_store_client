import logo from "./logo.svg";
import "./App.css";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowcaseContainer from "./Components/showcaseContainer";

function App() {
	return (
		<div className="App">
			<h2>ShowCase</h2>
			<ShowcaseContainer />
		</div>
	);
}

export default App;
