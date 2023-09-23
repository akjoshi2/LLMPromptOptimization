import React from "react";
import { createRoot } from "react-dom/client";
import SuggestionBox from "./SuggestionBox.jsx";

const reactElement = document.createElement("div");
reactElement.id = "content-target";
const promptElement = document.getElementById("prompt-textarea").parentElement.parentElement;
const promptContainer = promptElement.parentElement;
promptContainer.insertBefore(reactElement, promptElement);

const container = document.getElementById("content-target")
const root = createRoot(container);
root.render(<SuggestionBox />)

const nativeFetch = window.fetch;
window.fetch = function(...args) {
	console.log('detected fetch call');
	if (args && args[0] === "https://chat.openai.com/backend-api/conversation")
	{
		const obj = JSON.parse(args[1].body);
		console.log(obj)
		obj.messages[0].content.parts[0] = document.getElementById("content-target").innerText
		args[1].body = JSON.stringify(obj);
		console.log(args[1].body)
	}
	return nativeFetch.apply(window, args);
}