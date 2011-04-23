<?php

if (isset($_POST['search']))
  $search_query = htmlentities($_POST['search']);
else
  return;

//echo "Search for : " . $search_query;

//$search_query = "";
$url = "http://gdata.youtube.com/feeds/api/videos?category=" . urlencode(str_replace(' ',  '/', $search_query)) . "&v=2&max-results=1";
//echo $url;
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
$data = curl_exec($ch);
curl_close($ch);
$xml_data = simplexml_load_string($data);
$desc =  $xml_data->entry->id;
$tm = explode(":", $desc);
$tag_video_id = end($tm);
//echo $tag_video_id;
//echo $desc;
//echo $data;

if ($tag_video_id == "") {
  if (isset($search_query) && $search_query != "")
    echo "No result for <b>$search_query</b> :(<br />";
  return;
}

echo '<object width="640" height="505">
		<param name="movie" value="http://www.youtube.com/v/' . $tag_video_id . '"></param>
		<param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param>
		<embed src="http://www.youtube.com/v/' . $tag_video_id . '" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="640" height="505"></embed>
	</object>';

?>