import React from 'react';
import './index.css';

function SuggestionBox() {
	return (
		<div class="static ...">
  			<details class="closed:bg-white dark:closed:bg-slate-900 closed:ring-1 closed:ring-black/5 dark:closed:ring-white/10 closed:shadow-lg p-6 rounded-lg" closed>
    			<summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
      				Improve your prompt
    			</summary>
    			<div class="opacity-40 font-semibold mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
    				<p> THIS TEXT BOX SHOULD DISPLAY IMPROVEMENTS THAT CAN BE MADE TO THE PROMPTS </p>
    			</div>
  			</details>
		</div>
	)
}

export default SuggestionBox