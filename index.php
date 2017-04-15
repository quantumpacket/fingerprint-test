<?php
	include("lib/Template.php");

	$http_headers = getallheaders();

	$template = new Template("index.tpl");
	$template->set("count", count($http_headers));
	$template->set("accept", "NOT SET");
	$template->set("accept-charset", "NOT SET");
	$template->set("accept-encoding", "NOT SET");
	$template->set("accept-language", "NOT SET");
	$template->set("authorization", "NOT SET");
	$template->set("cache-control", "NOT SET");
	$template->set("connection", "NOT SET");
	$template->set("dnt", "NOT SET");
	$template->set("expect", "NOT SET");
	$template->set("from", "NOT SET");
	$template->set("host", "NOT SET");
	$template->set("if-match", "NOT SET");
	$template->set("if-modified-since", "NOT SET");
	$template->set("if-none-match", "NOT SET");
	$template->set("if-range", "NOT SET");
	$template->set("if-unmodified-since", "NOT SET");
	$template->set("max-forwards", "NOT SET");
	$template->set("proxy-authorization", "NOT SET");
	$template->set("range", "NOT SET");
	$template->set("referer", "NOT SET");
	$template->set("te", "NOT SET");
	$template->set("upgrade-insecure-requests", "NOT SET");
	$template->set("user-agent", "NOT SET");

	foreach ($http_headers as $header_name => $header_value) {
		if ($header_name === "Accept") {
			$template->set("accept", $header_value);
		}
		else if ($header_name === "Accept-Charset") {
			$template->set("accept-charset", $header_value);
		}
		else if ($header_name === "Accept-Encoding") {
			$template->set("accept-encoding", $header_value);
		}
		else if ($header_name === "Accept-Language") {
			$template->set("accept-language", $header_value);
		}
		else if ($header_name === "Authorization") {
			$template->set("authorization", $header_value);
		}
		else if ($header_name === "Cache-Control") {
			$template->set("cache-control", $header_value);
		}
		else if ($header_name === "Connection") {
			$template->set("connection", $header_value);
		}
		else if ($header_name === "DNT") {
			$template->set("dnt", $header_value);
		}
		else if ($header_name === "Expect") {
			$template->set("expect", $header_value);
		}
		else if ($header_name === "From") {
			$template->set("from", $header_value);
		}
		else if ($header_name === "Host") {
			$template->set("host", $header_value);
		}
		else if ($header_name === "If-Match") {
			$template->set("if-match", $header_value);
		}
		else if ($header_name === "If-Modified-Since") {
			$template->set("if-modified-since", $header_value);
		}
		else if ($header_name === "If-None-Match") {
			$template->set("if-none-match", $header_value);
		}
		else if ($header_name === "If-Range") {
			$template->set("if-range", $header_value);
		}
		else if ($header_name === "If-Unmodified-Since") {
			$template->set("if-unmodified-since", $header_value);
		}
		else if ($header_name === "Max-Forwards") {
			$template->set("max-forwards", $header_value);
		}
		else if ($header_name === "Proxy-Authorization") {
			$template->set("proxy-authorization", $header_value);
		}
		else if ($header_name === "Range") {
			$template->set("range", $header_value);
		}
		else if ($header_name === "Referer") {
			$template->set("referer", $header_value);
		}
		else if ($header_name === "TE") {
			$template->set("te", $header_value);
		}
		else if ($header_name === "Upgrade-Insecure-Requests") {
			$template->set("upgrade-insecure-requests", $header_value);
		}
		else if ($header_name === "User-Agent") {
			$template->set("user-agent", $header_value);
		}
	}

	echo $template->output();
?>
