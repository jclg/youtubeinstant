<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
          "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta http-equiv="Content-Language" content="en-us"/>
    <title>YouTube Instant</title>
    <link rel="stylesheet" type="text/css" media="screen" href="style.css" />
    <meta http-equiv="Content-Script-Type" content="text/javascript" />
    <script type="text/javascript" src="youtubeinstant.js"></script>
  </head>

  <body>
    <div class="wrap">
      <div id="main">
        Instant search on YouTube:
        <div id="form_search">
          <input type="text" id="search" />
          <div id="video">
<?php
   include_once 'youtubeinstant.php';
?>
          </div>
        </div>
      </div>
    </div>
    <script type="text/javascript">youtubeInstant.init();</script>
  </body>

</html>
