chrome.runtime.onMessage.addListener((function(e,o,n){if(console.log(e),console.log("REACHED"),"getQueryType"===e.text){console.log("QUERY"),console.log(e.sentence);var t=new FormData;t.append("sentence",e.sentence),console.log({method:"POST",body:t}),fetch("https://uiowa.onrender.com/categorize",{method:"POST",body:t}).then((function(e){return e.json()})).then((function(e){n({queryType:e.data})}))}return!0}));