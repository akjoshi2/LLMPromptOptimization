const waitUntil = (condition, checkInterval=100) => {
    return new Promise(resolve => {
        let interval = setInterval(() => {
            if (!condition()) return;
            clearInterval(interval);
            resolve();
        }, checkInterval)
    }).then(() => {
		chrome.runtime.sendMessage({text: "getQueryType", sentence: localStorage.getItem("prompt")}, function(response) {
			document.getElementById("qtype").innerText = response.queryType;
			document.getElementById("qtype").hidden = false;
			document.getElementById("qtype").classList.remove("waiting");
			waitUntil(() => document.getElementById("qtype").classList.contains("waiting"));
			return true;
		})
	})
}


waitUntil(() => document.getElementById("qtype").classList.contains("waiting"));
