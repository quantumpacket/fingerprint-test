<!DOCTYPE html>
<html>
<head>
<title>Fingerprinting Check</title>

<script type="text/javascript" src="js/md5.js"></script>
<script type="text/javascript" src="js/fp.js"></script>

</head>
<body>
<p>This website allows you to see what unique information your browser is leaking through the following channels:</p>
<ul>
<li>HTTP Headers</li>
<li>JavaScript API's</li>
</ul>
<p>This website does not store ANY data. It just tells you what details your browser is leaking which might make a useful fingerprint for anyone interested in tracking you.</p>
<p>I am developing a WebExtension to prevent this kind of tracking. You can find the repository <a href="https://github.com/Snapper26/shapeshifter">here</a>.</p>
<p>This website is free software. You can find the source <a href="https://github.com/Snapper26/fingerprint-test">here</a>.</p>

<h1>HTTP Headers</h1>

<p><b>Number of HTTP headers in request:</b> [@count]</p>
<p>--------------------------------</p>
<p><b>Accept:</b> [@accept]</p>
<p><b>Accept-Charset:</b> [@accept-charset]</p>
<p><b>Accept-Encoding:</b> [@accept-encoding]</p>
<p><b>Accept-Language:</b> [@accept-language]</p>
<p><b>Authorization:</b> [@authorization]</p>
<p><b>Cache-Control:</b> [@cache-control]</p>
<p><b>Connection:</b> [@connection]</p>
<p><b>DNT:</b> [@dnt]</p>
<p><b>Expect:</b> [@expect]</p>
<p><b>From:</b> [@from]</p>
<p><b>Host:</b> [@host]</p>
<p><b>If-Match:</b> [@if-match]</p>
<p><b>If-Modified-Since:</b> [@if-modified-since]</p>
<p><b>If-None-Match:</b> [@if-none-match]</p>
<p><b>If-Range:</b> [@if-range]</p>
<p><b>If-Unmodified-Since:</b> [@if-unmodified-since]</p>
<p><b>Max-Forwards:</b> [@max-forwards]</p>
<p><b>Proxy-Authorization:</b> [@proxy-authorization]</p>
<p><b>Range:</b> [@range]</p>
<p><b>Referer:</b> [@referer]</p>
<p><b>TE:</b> [@te]</p>
<p><b>Upgrade-Insecure-Requests:</b> [@upgrade-insecure-requests]</p>
<p><b>User-Agent:</b> [@user-agent]</p>

<h1>JavaScript API's</h1>

<h2><u>Window API</u></h2>

<p id="device-pixel-ratio"></p>

<h2><u>Document API</u></h2>

<p id="referrer"></p>

<h2><u>Navigator API</u></h2>

<p id="active-vr-displays"></p>
<p id="app-code-name"></p>
<p id="app-name"></p>
<p id="app-version"></p>
<p id="battery"></p>
<p id="connection"></p>
<p id="geo-location"></p>
<p id="hardware-concurrency"></p>
<p id="java-enabled"></p>
<p id="language"></p>
<p id="languages"></p>
<p id="mime-types"></p>
<p id="mime-types-array"></p>
<p id="on-line"></p>
<p id="oscpu"></p>
<p id="permissions"></p>
<p id="platform"></p>
<p id="plugins"></p>
<p id="plugins-array"></p>
<p id="product"></p>
<p id="service-worker"></p>
<p id="storage"></p>
<p id="user-agent"></p>

<h2><u>Battery API</u></h2>

<p id="charging"></p>
<p id="charging-time"></p>
<p id="discharging-time"></p>
<p id="level"></p>

<h2><u>Screen API</u></h2>

<p id="avail-top"></p>
<p id="avail-left"></p>
<p id="avail-height"></p>
<p id="avail-width"></p>
<p id="color-depth"></p>
<p id="height"></p>
<p id="left"></p>
<p id="orientation"></p>
<p id="pixel-depth"></p>
<p id="top"></p>
<p id="width"></p>
<p id="moz-enabled"></p>
<p id="moz-brightness"></p>

<h2><u>History API</u></h2>

<p id="length"></p>

<h2><u>Date/Time API</u></h2>

<p id="date"></p>

<h2><u>Canvas API</u></h2>

<p id="canvas-url-data"></p>
<p id="canvas-url-fingerprint"></p>
<p id="canvas-blob-data"></p>
<p id="canvas-blob-fingerprint"></p>
<p id="canvas-file-data"></p>
<p id="canvas-file-fingerprint"></p>
<p id="context2d-image-data"></p>
<p id="context2d-image-fingerprint"></p>

<h2><u>AudioContext API</u></h2>

<p>Coming Soon ...</p>

</body>
</html>
