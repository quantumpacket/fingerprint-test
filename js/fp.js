window.onload = function() {
	// Window API

	document.getElementById("device-pixel-ratio").innerHTML = "<b>Device Pixel Ratio:</b> " + window.devicePixelRatio;

	// Document API

	document.getElementById("referrer").innerHTML = "<b>Referrer:</b> " + document.referrer;

	// Navigator API

	document.getElementById("active-vr-displays").innerHTML = "<b>Active VR Displays:</b> " + navigator.activeVRDisplays;
	document.getElementById("app-code-name").innerHTML = "<b>App Code Name:</b> " + navigator.appCodeName;
	document.getElementById("app-name").innerHTML = "<b>App Name:</b> " + navigator.appName;
	document.getElementById("app-version").innerHTML = "<b>App Version:</b> " + navigator.appVersion;

	// TODO: Why is battery undefined? Is is because of Promises?
	document.getElementById("battery").innerHTML = "<b>Battery:</b> " + navigator.battery;
	document.getElementById("connection").innerHTML = "<b>Connection:</b> " + navigator.connection;
	document.getElementById("geo-location").innerHTML = "<b>Geo Location:</b> " + navigator.geoLocation;
	document.getElementById("hardware-concurrency").innerHTML = "<b>Hardware Concurrency:</b> " + navigator.hardwareConcurrency;
	document.getElementById("java-enabled").innerHTML = "<b>Java Enabled:</b> " + navigator.javaEnabled();
	document.getElementById("language").innerHTML = "<b>Language:</b> " + navigator.language;
	document.getElementById("languages").innerHTML = "<b>Languages:</b> " + navigator.languages;
	document.getElementById("mime-types").innerHTML = "<b>Mime Types:</b> " + navigator.mimeTypes;

	var mimeTypes = navigator.mimeTypes;

	var mimeTypesArray = "";

	for(var i = 0; i < mimeTypes.length; i++) {
		mimeTypesArray += mimeTypes[i].type;
		if (i != mimeTypes.length - 1) {
			mimeTypesArray += ", ";
		}
	}

	document.getElementById("mime-types-array").innerHTML = "<b>Mime Types Array:</b> " + mimeTypesArray;
	document.getElementById("on-line").innerHTML = "<b>On Line:</b> " + navigator.onLine;
	document.getElementById("oscpu").innerHTML = "<b>OS CPU:</b> " + navigator.oscpu;
	document.getElementById("permissions").innerHTML = "<b>Permissions:</b> " + navigator.permissions;
	document.getElementById("platform").innerHTML = "<b>Platform:</b> " + navigator.platform;
	document.getElementById("plugins").innerHTML = "<b>Plugins:</b> " + navigator.plugins;

	var plugins = navigator.plugins;

	var pluginsArray = "";

	for (var i = 0; i < plugins.length; i++) {

		pluginsArray = "[" + plugins[i].name + " - " + plugins[i].description + " - " + plugins[i].version + "]";
		if (i != plugins.length - 1) {
			pluginsArray = ", ";
		}
	}

	document.getElementById("plugins-array").innerHTML = "<b>Plugins Array:</b> " + pluginsArray;
	document.getElementById("product").innerHTML = "<b>Product:</b> " + navigator.product;
	document.getElementById("service-worker").innerHTML = "<b>Service Worker:</b> " + navigator.serviceWorker;
	document.getElementById("storage").innerHTML = "<b>Storage:</b> " + navigator.storage;
	document.getElementById("user-agent").innerHTML = "<b>User Agent:</b> " + navigator.userAgent;

	// Battery API

	var batteryManager = navigator.getBattery();

	batteryManager.then(function(battery) {
		document.getElementById("charging").innerHTML = "<b>Charging:</b> " + battery.charging;
		document.getElementById("charging-time").innerHTML = "<b>Charging Time:</b> " + battery.chargingTime;
		document.getElementById("discharging-time").innerHTML = "<b>Discharging Time:</b> " + battery.dischargingTime;
		document.getElementById("level").innerHTML = "<b>Level:</b> " + battery.level;
	});

	// Screen API

	document.getElementById("avail-top").innerHTML = "<b>Avail Top:</b> " + screen.availTop;
	document.getElementById("avail-left").innerHTML = "<b>Avail Left:</b> " + screen.availLeft;
	document.getElementById("avail-height").innerHTML = "<b>Avail Height:</b> " + screen.availHeight;
	document.getElementById("avail-width").innerHTML = "<b>Avail Width:</b> " + screen.availWidth;
	document.getElementById("color-depth").innerHTML = "<b>Color Depth:</b> " + screen.colorDepth;
	document.getElementById("height").innerHTML = "<b>Height:</b> " + screen.height;
	document.getElementById("left").innerHTML = "<b>Left:</b> " + screen.left;
	document.getElementById("orientation").innerHTML = "<b>Orientation:</b> " + screen.orientation;
	document.getElementById("pixel-depth").innerHTML = "<b>Pixel Depth:</b> " + screen.pixelDepth;
	document.getElementById("top").innerHTML = "<b>Top:</b> " + screen.top;
	document.getElementById("width").innerHTML = "<b>Width:</b> " + screen.width;
	document.getElementById("moz-enabled").innerHTML = "<b>Moz Enabled:</b> " + screen.mozEnabled;
	document.getElementById("moz-brightness").innerHTML = "<b>Moz Brightness:</b> " + screen.mozBrightness;

	// History API

	document.getElementById("length").innerHTML = "<b>Length:</b> " + history.length;

	// Date/Time API

	var now = new Date();

	document.getElementById("date").innerHTML = "<b>Date:</b> " + now;

	// Canvas API

	var canvas = document.createElement("canvas");

	var result = [];

	canvas.width = 2000;
	canvas.height = 200;
	canvas.style.display = "inline";

	var ctx = canvas.getContext("2d");

	ctx.rect(0, 0, 10, 10);
	ctx.rect(2, 2, 6, 6);

	ctx.textBaseline = "alphabetic";
	ctx.fillStyle = "#f60";
	ctx.fillRect(125, 1, 62, 20);
	ctx.fillStyle = "#069";

	ctx.font = "11pt Arial";

	ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15);
	ctx.fillStyle = "rgba(102, 204, 0, 0.2)";
	ctx.font = "18pt Arial";
	ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45);

	ctx.globalCompositeOperation = "multiply";
	ctx.fillStyle = "rgb(255,0,255)";
	ctx.beginPath();
	ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();
	ctx.fillStyle = "rgb(0,255,255)";
	ctx.beginPath();
	ctx.arc(100, 50, 50, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();
	ctx.fillStyle = "rgb(255,255,0)";
	ctx.beginPath();
	ctx.arc(75, 100, 50, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();
	ctx.fillStyle = "rgb(255,0,255)";
	ctx.arc(75, 75, 75, 0, Math.PI * 2, true);
	ctx.arc(75, 75, 25, 0, Math.PI * 2, true);
	ctx.fill("evenodd");

	var dataURL = canvas.toDataURL();

	document.getElementById("canvas-url-data").innerHTML = "<b>Canvas URL Data:</b> " + dataURL;
	document.getElementById("canvas-url-fingerprint").innerHTML = "<b>Canvas URL Fingerprint:</b> " + calcMD5(dataURL);

	canvas.toBlob(function(blob) {

		document.getElementById("canvas-blob-data").innerHTML = "<b>Canvas Blob Data:</b> " + blob;
		document.getElementById("canvas-blob-fingerprint").innerHTML = "<b>Canvas Blob Fingerprint:</b> " + calcMD5(blob);
	});

	try {
		var imageFile = canvas.mozGetAsFile("canvas.png", "image/png");

		document.getElementById("canvas-file-data").innerHTML = "<b>Canvas File Data:</b> " + imageFile;
		document.getElementById("canvas-file-fingerprint").innerHTML = "<b>Canvas File Fingerprint:</b> " + calcMD5(imageFile);
	}
	catch (e) {
		document.getElementById("canvas-file-data").innerHTML = "<b>Canvas File Data:</b> " + e.name;
		document.getElementById("canvas-file-fingerprint").innerHTML = "<b>Canvas File Fingerprint:</b> " + e.message;
	}

	var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

	document.getElementById("context2d-image-data").innerHTML = "<b>Context 2D Image Data:</b> " + imageData
	document.getElementById("context2d-image-fingerprint").innerHTML = "<b>Context 2D Image Fingerprint:</b> " + calcMD5(imageData);

	// TODO: Add CanvasRenderingContext2D.getImageData()
}
