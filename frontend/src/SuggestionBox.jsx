import React from 'react';
import './index.css';

function SuggestionBox(props) {
	return (
		<div class="static ...">
			<details id="popup" class="bg-white dark:bg-black border-2 border-solid border-black closed:bg-white dark:closed:bg-slate-900 closed:ring-1 closed:ring-black/5 dark:closed:ring-white/10 closed:shadow-lg p-1 rounded-lg">
				<summary class="text-lg leading-6 text-slate-900 dark:text-white font-semibold select-none">
					PromptAI
				</summary>
				<div class="static ...">
					<div class="static relative group w-full rounded-xl text-left text-black dark:text-gray-300">
						<div class="flex flex-grow flex-col gap-3 max-w-full mt-2">
							<div class="flex items-center">

								<div class="inline-block flex-col gap-2 text-base md:gap-2 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl }">

									<div id="category" class="inline-block truncate font-semibold"></div>

									<div id="buttons"  class="inline-block align-top hidden">
										<button class="p-1 rounded-md hover:bg-gray-100 hover:text-green-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-green-200 disabled:dark:hover:text-gray-400">
											<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
												<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
											</svg>
										</button>
										<button class="p-1 rounded-md hover:bg-gray-100 hover:text-red-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-red-200 disabled:dark:hover:text-gray-400">
											<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
												<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
											</svg>
										</button>
									</div>

									<div id="qtype" class="flex flex-wrap"></div>
								</div>

							</div>
						</div>
					</div>
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