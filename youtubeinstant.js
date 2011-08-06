var youtubeInstant = {


    init: function() {
        document.getElementById("search").focus();
        document.getElementById("search").onkeyup = youtubeInstant.onKey;
    },


    onKey: function(e) {
        var key = (window.event) ? event.keyCode : e.keyCode;
        var altkey = (window.event) ? event.altKey : e.altKey;
        var ctrlkey = (window.event) ? event.ctrlKey : e.ctrlKey;
        var noactionkeys = [37, 38, 39, 40, 112, 113, 114, 115, 116, 117, 118, 119];
        for (i in noactionkeys) {
            if (key == noactionkeys[i] || altkey || ctrlkey)
                return;
        }
        var search = document.getElementById('search').value;
        if (search == '')
            return;
        var parameters = "search="+search;
        youtubeInstant.ajax(parameters, "youtubeinstant.php", "POST", "video", "<center><img src='loader.gif'></center>", true);
    },


    ajax: function(parameters, target, method, refreshdiv, loadinghtml, abordprevious) {
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

        this.req.onreadystatechange = function() {
		    document.getElementById(refreshdiv).innerHTML = loadinghtml;
		    if(this.readyState == 4) {
			    if(this.status == 200)
				    document.getElementById(refreshdiv).innerHTML  = this.responseText;
			    else
				    document.getElementById(refreshdiv).innerHTML="Error: returned status code " + this.status + " " + this.statusText;
		    }
        };

        this.req.open(method, target, true);
        this.req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        this.req.setRequestHeader("Connection", "close");

        this.req.send(parameters);
    }

}