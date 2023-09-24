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
var acceptChanges = true;
function onClick() {
	sendRequest = true;
	acceptChanges = true;
  
}

function onDecline() {
	sendRequest = true;
	acceptChanges = false;
}

root.render(<SuggestionBox onClick={onClick} onDecline={onDecline}/>)
const nativeFetch = window.fetch;
const waitUntil = (condition, res,checkInterval=100) => {
    return new Promise(resolve => {
        let interval = setInterval(() => {
            if (!condition()) return;
            clearInterval(interval);
            resolve();
        }, checkInterval)
    }).then(() => {
		if (acceptChanges)
		{
			const obj = JSON.parse(res[1].body);
			obj.messages[0].content.parts[0] = document.getElementById("qtype").innerText;
			res[1].body = JSON.stringify(obj);
		}
    document.getElementById("qtype").innerText = "";
    document.getElementById("qtype").hidden = true;
    sendRequest = false;
    return nativeFetch.apply(window,res)

    })
}
window.fetch = function(...args) {


  if(args[0] === "https://chat.openai.com/backend-api/conversation") {
    const obj = JSON.parse(args[1].body)
    console.log(localStorage.getItem("prompt"))
    if (localStorage.getItem("prompt") != null)
    {
      localStorage.removeItem("prompt");
    }
    localStorage.setItem("prompt", obj.messages[0].content.parts[0])
    console.log(localStorage.getItem("prompt"));
    document.getElementById("qtype").classList.add("waiting");
    return waitUntil(() => sendRequest === true, args)
  }
  return nativeFetch.apply(window,args);
}