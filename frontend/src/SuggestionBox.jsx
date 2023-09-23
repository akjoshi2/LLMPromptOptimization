import { React } from "react";

function SuggestionBox(props) {
	const text = "What is ChatGPT?";

	return (
		<>
			<div>
				{text}
			</div>
			<button id="submitButton" onClick={props.onClick}>
				SUBMIT
			</button>
		</>


	);
}

export default SuggestionBox