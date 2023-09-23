import React, { useState } from 'react';
import './index.css'

function SuggestionBox() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div class="max-w-lg mx-auto p-8">
  		<details class="close:bg-white dark:close:bg-slate-900 close:ring-1 close:ring-black/5 dark:close:ring-white/10 close:shadow-lg p-6 rounded-lg" close>
    		<summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
      			PromptGPT
    		</summary>
			<div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
				<p>Enter BackEnd Here.</p>
			</div>
  		</details>
	</div>
  );
}

export default SuggestionBox;