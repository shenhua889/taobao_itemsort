function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
	getu(function(url){
	    var request = new XMLHttpRequest();
	    request.onreadystatechange = function () {
	        if (request.readyState == 4 && request.status == 200) {
	            var responseTXT = request.responseText;
	            /*renderStatus(url + responseTXT);
				renderStatus(aaa);*/
	        }
	    }
	    request.open("GET", url, true);
	    request.send(null);
	});
});
 function getu(callback){
	var queryInfo = {
    active: true,
    currentWindow: true
	};
	chrome.tabs.query(queryInfo,function(tabs){
		var tab=tabs[0];
		var url=tab.url;
		chrome.tabs.executeScript(null,{code: 'var a=1'});
		callback(url);
	});
 }