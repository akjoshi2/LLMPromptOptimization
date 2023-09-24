chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	console.log(request)
	console.log("REACHED")
	if (request.text === "getQueryType")
	{
		console.log("QUERY")
		console.log(request.sentence);
		const formdata = new FormData();
		formdata.append("sentence", request.sentence);
		console.log({method: 'POST', body: formdata})
		fetch('https://uiowa.onrender.com/categorize', {method: 'POST', body: formdata}).then(response => {
			return response.json()
		}).then(response => {
			sendResponse({queryType: response.data})
		})
	}
	return true;
})