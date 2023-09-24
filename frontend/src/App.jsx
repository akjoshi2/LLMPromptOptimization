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
    fetch('https://uiowa.onrender.com/get?type=' + encodeURIComponent(res.target.value)).then(response => {
			return response.json()
		}).then(response => {
      console.log(response.value)
      setText(response.value[0]);
		})

  }

  var b = function(){

    let data = new FormData();
    data.append("type" , c)
    data.append("value", text )
    fetch('https://uiowa.onrender.com/set', {"method" : "POST", body: data })
  }

 
  return (
<div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Category Title
      </label>
      <input list="s" id="converse" onChange={oC}/>
      <datalist id="s">
        {
         c.map(name => {
            return (<option value={name}/>)

          })
        }
</datalist>   

 </div>
 <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Prompt
      </label>
      <textarea id="val" placeholder={text}/>

 </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={b}>
                  Revise
      </button>
    </div>
  </form>
</div>
  );
}

export default App;