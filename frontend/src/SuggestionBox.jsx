import { React } from "react";

function SuggestionBox(props) {
	const text = "What is ChatGPT?";
	return (
		<>
			<div id="contentTextBox">
				{text}
			</div>
			<div id="qtype" hidden>
				""
			</div>
			<button id="submitButton" onClick={props.onClick}>
				SUBMIT
			</button>
			<button id="declineButton" onClick={props.onDecline}>
				DECLINE
			</button>
		</>


	);
}

export default SuggestionBox