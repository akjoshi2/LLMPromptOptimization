import React from 'react';
import './index.css';

function SuggestionBox(props) {
	const text = "What is ChatGPT?What is ChatGPT?What is ChatGPT?What is ChatGPT?What is ChatGPT?What is ChatGPT?What is ChatGPT?What is ChatGPTWhat is ChatGPT?What is ChatGPT?What is ChatGPT?What is ChatGPT?";

	return (
		<div class="static ...">
			<details class="closed:bg-white dark:closed:bg-slate-900 closed:ring-1 closed:ring-black/5 dark:closed:ring-white/10 hover:shadow-none p-6 rounded-lg disabled:transform-none disabled:transition-none disabled:bg-gray disabled:cursor-not-allowed" closed>
				<summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
					PromptAI
				</summary>
				<div class="static ...">
					<card class="static btn relative btn-neutral group w-full rounded-xl text-left text-gray-700  dark:text-gray-300 hover:shadow-none" >
						<div class="flex flex-grow flex-col gap-3 max-w-full">
							<div class="flex items-center">

								<div class="flex flex-1 gap-4 text-base mx-auto md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl }">
									<div class="flex flex-wrap opacity-50">{text}</div>

								</div>
							</div>
						</div>
					</card>
					<div class="static ...">
						<button id="declineButton" class=" btn  btn-neutral group  rounded-xl text-left text-gray-700 shadow-[0px_1px_6px_0px_rgba(0,0,0,0.02)] dark:text-gray-300 mr-2" as="button" onClick={props.onDecline}>
							Decline
						</button>

						<button id="submitButton" class=" btn  btn-neutral group  rounded-xl text-left text-gray-700 shadow-[0px_1px_6px_0px_rgba(0,0,0,0.02)] dark:text-gray-300 mt-2" as="button" onClick={props.onClick}>
							Submit
						</button>
					</div>
				</div>
			</details>
		</div>

	)
}

export default SuggestionBox;