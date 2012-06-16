<?php

if (isset($_POST['search'])) {
    $search_query = htmlentities($_POST['search']);
    $url = "http://gdata.youtube.com/feeds/api/videos?category=" . urlencode(str_replace(' ',  '/', $search_query)) . "&v=2&max-results=1";

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    $data = curl_exec($ch);
    curl_close($ch);
    $xml_data = simplexml_load_string($data);
    $desc =  $xml_data->entry->id;
    $tm = explode(":", $desc);
    $tag_video_id = end($tm);

    if ($tag_video_id == "" && isset($search_query) && $search_query != "") {
        $response = array('status' => 'no_result', 'query' => $search_query);
    }
    else {
        $response = array('status' => 'success', 'query' => $search_query, 'video_id' => $tag_video_id);
    }
}
else {
    $response = array('status' => 'error');
}

header('Content-type: application/json');
echo json_encode($response);