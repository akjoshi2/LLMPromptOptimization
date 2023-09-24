import { useEffect, useState } from 'react';
import React  from "react";

import './index.css'
import './SuggestionBox.jsx'

function App() {

  const [c, setC] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    fetch('https://uiowa.onrender.com/getcat').then(response => {
			return response.json()
		}).then(response => {
      setC(response.res);
		})

  });

  var oC = function(res){
    if(res.target.value){}
    fetch('https://uiowa.onrender.com/get?type=' + encodeURIComponent(res.target.value)).then(response => {
			return response.json()
		}).then(response => {
      console.log(response.value)
      setText(response.value[0]);
		})

  }

  var b = function(){

    let data = new FormData();
    data.append("type" , document.getElementById("converse").value)
    data.append("value", text )
    fetch('https://uiowa.onrender.com/set', {"method" : "POST", body: data }).then(()=> {
        document.getElementById("converse").value = "";
        document.getElementById("val").value = ""
    })

  }

 
  return (
<div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
        Category Title
      </label>
      <select
        id="category"
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        onChange={oC}
      >
        <option value="">Select a category</option>
        {c.map(name => {
          return (<option value={name}>{name}</option>)
        })}
      </select>
 </div>
 <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prompt">
                Prompt
      </label>
      <textarea id="val" placeholder={text} onInput={(res)=>{setText(res.target.value);}}/>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Get Prompt
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Save Data
          </button>
        </div>
      </form>
    </div>)}

  export default App;