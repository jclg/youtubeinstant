<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>YouTube Instant</title>
    <link rel="stylesheet" type="text/css" media="screen" href="style.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script src="youtubeinstant.js"></script>
    <script>
      $(document).ready(function () {
        youtubeInstant.init();
      });
    </script>
  </head>
  <body>
    <div class="wrap">
      <div id="main">
        Instant search on YouTube:
        <div id="form_search">
          <input type="text" id="search" />
        </div>
        <div id="video"></div>
      </div>
    </div>
  </body>
</html>
