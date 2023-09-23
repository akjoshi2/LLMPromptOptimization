import React from 'react';
import './index.css';

function SuggestionBox(props) {
	const text = "What is ChatGPT?What is ChatGPT?What is ChatGPT?What is ChatGPT?What is ChatGPT?What is ChatGPT?What is ChatGPT?What is ChatGPTWhat is ChatGPT?What is ChatGPT?What is ChatGPT?What is ChatGPT?";

	return (
		<div class="static ...">
			<details class="closed:bg-white dark:closed:bg-slate-900 closed:ring-1 closed:ring-black/5 dark:closed:ring-white/10 closed:shadow-lg p-6 rounded-lg" closed>
				<summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
					PromptAI
				</summary>
				<div class="static ...">
					<button class="static btn relative btn-neutral group w-full rounded-xl text-left text-gray-700 shadow-[0px_1px_6px_0px_rgba(0,0,0,0.02)] dark:text-gray-300" as="button" onClick={props.onClick}>
						<div class="flex flex-grow flex-col gap-3 max-w-full">
							<div class="flex items-center">

								<div class="flex flex-1 gap-4 text-base mx-auto md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl }">
									<div class="flex flex-wrap opacity-50">{text}</div>
								</div>
								<div class="absolute bottom-0 right-0 flex items-center rounded-xl bg-gradient-to-l from-gray-100 from-[60%] p-3 text-gray-700 opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:text-gray-200">
									<span class="" data-state="closed">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="icon-sm">
											<path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor"></path>
										</svg>
									</span>
								</div>

							</div>
						</div>
					</button>
				</div>
			</details>

			<div>
				{text}
			</div>
			<button id="submitButton" onClick={props.onClick}>
				SUBMIT
			</button>
			<button id="declineButton" onClick={props.onDecline}>
				DECLINE
			</button>
		</div>

	)
}

export default SuggestionBox;