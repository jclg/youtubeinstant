youtubeinstant = function() {
    var search = document.getElementById('search').value;
    var parameters = "search="+search;
    ajax(parameters, "youtubeinstant.php", "POST", "video", "<center><img src='loader.gif'></center>", true);
};

ajax = function(parameters, target, method, refreshdiv, loadinghtml, abordprevious) {

    if (typeof this.req == 'undefined' || !abordprevious)
        this.req = null;
    else
        this.req.abort();

  
    if (window.XMLHttpRequest) {
		this.req = new XMLHttpRequest();
		if (this.req.overrideMimeType) 
			this.req.overrideMimeType('text/xml');
	}
    else if (window.ActiveXObject) {
		try {
			this.req = new ActiveXObject("Msxml2.XMLHTTP");
        }
		catch (e) {
			try {
				this.req = new ActiveXObject("Microsoft.XMLHTTP");
            }
			catch (e) {}
		}
    }


    req.onreadystatechange = function() {
		document.getElementById(refreshdiv).innerHTML = loadinghtml;
		if(req.readyState == 4) {
			if(req.status == 200)
				document.getElementById(refreshdiv).innerHTML  = req.responseText;
			else
				document.getElementById(refreshdiv).innerHTML="Error: returned status code " + req.status + " " + req.statusText;
		}
    }; 
    
    this.req.open(method, target, true);
    this.req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    this.req.setRequestHeader("Connection", "close");

    this.req.send(parameters);
};
