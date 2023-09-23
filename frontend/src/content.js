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
var sendRequest = false;
function onClick() {
	sendRequest = true;
}

root.render(<SuggestionBox onClick={onClick} />)
const nativeFetch = window.fetch;
const waitUntil = (condition, res,checkInterval=100) => {
    return new Promise(resolve => {
        let interval = setInterval(() => {
            if (!condition()) return;
            clearInterval(interval);
            resolve();
        }, checkInterval)
    }).then(() => {
		const obj = JSON.parse(res[1].body);
		obj.messages[0].content.parts[0] = document.getElementById("content-target").innerText;
		res[1].body = JSON.stringify(obj);
        sendRequest = false;
        return nativeFetch.apply(window,res)

    })
}
window.fetch = function(...args) {


  if(args[0] === "https://chat.openai.com/backend-api/conversation"){
    
    return waitUntil(() => sendRequest === true, args)


  }
  return nativeFetch.apply(window,args);
}



