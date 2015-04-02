function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
	getu(function(url){
	    var request = new XMLHttpRequest();
	    request.onreadystatechange = function () {
	        if (request.readyState == 4 && request.status == 200) {
				var json=GetJsonTXT(request.responseText);
	            renderStatus(json);
				
	        }
	    }
	    request.open("GET", url, true);
	    request.send(null);
	});
});
function GetJsonTXT(responseTXT)
{
	var reg=responseTXT.match("(?=g_page_config = ).*(?=;)");
	var json=reg[0].substr(16,reg[0].length-16);
	return json;
}
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