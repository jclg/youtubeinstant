var youtubeInstant = {

    init: function() {
        $("#search").focus();
        $("#search").keyup(youtubeInstant.throttle(youtubeInstant.onKey, 500));
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

        var search = $('#search').val();
        if (search != '') {
            $('#video').html("<center><img src='loader.gif'></center>")
            $.ajax({
                url : 'https://gdata.youtube.com/feeds/api/videos?q='+search+'&v=2&safeSearch=none&alt=json&max-results=1',
                dataType : 'jsonp',
                success : youtubeInstant.onReceive
            });
        }
    },

    /* http://remysharp.com/2010/07/21/throttling-function-calls/ */
    throttle: function(f, delay){
        var timer = null;
        return function(){
            var context = this, args = arguments;
            clearTimeout(timer);
            timer = window.setTimeout(function(){
                f.apply(context, args);
            }, delay || 500);
        };
    },

    onReceive: function(data) {
        var video_html = '';
        if (data['feed']['entry']) {
            var video_id = data['feed']['entry'][0]['id']['$t'].split(':').pop();
            $('#video').html('<object width="640" height="505"><param name="movie" value="http://www.youtube.com/v/'+video_id+'"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/'+video_id+'" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="640" height="505"></embed></object>');
        }
        else {
            var query = data['feed']['title']['$t'].split(':').pop();
            $('#video').text('No result for '+query+' :(');
        }
    }

}
