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

	try {
		var batteryManager = navigator.getBattery();

		batteryManager.then(function(battery) {
			document.getElementById("charging").innerHTML = "<b>Charging:</b> " + battery.charging;
			document.getElementById("charging-time").innerHTML = "<b>Charging Time:</b> " + battery.chargingTime;
			document.getElementById("discharging-time").innerHTML = "<b>Discharging Time:</b> " + battery.dischargingTime;
			document.getElementById("level").innerHTML = "<b>Level:</b> " + battery.level;
		});
	}
	catch (e) {
		document.getElementById("charging").innerHTML = "<b>Charging:</b> " + e.name;
		document.getElementById("charging-time").innerHTML = "<b>Charging Time:</b> " + e.message;
	}

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

	var canvas = document.getElementById("fp-canvas");

	var result = [];

	canvas.width = 2000;
	canvas.height = 200;
	canvas.style.display = "inline";

	var ctx2D = canvas.getContext("2d");

	ctx2D.rect(0, 0, 10, 10);
	ctx2D.rect(2, 2, 6, 6);

	ctx2D.textBaseline = "alphabetic";
	ctx2D.fillStyle = "#f60";
	ctx2D.fillRect(125, 1, 62, 20);
	ctx2D.fillStyle = "#069";

	ctx2D.font = "11pt Arial";

	ctx2D.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15);
	ctx2D.fillStyle = "rgba(102, 204, 0, 0.2)";
	ctx2D.font = "18pt Arial";
	ctx2D.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45);

	ctx2D.globalCompositeOperation = "multiply";
	ctx2D.fillStyle = "rgb(255,0,255)";
	ctx2D.beginPath();
	ctx2D.arc(50, 50, 50, 0, Math.PI * 2, true);
	ctx2D.closePath();
	ctx2D.fill();
	ctx2D.fillStyle = "rgb(0,255,255)";
	ctx2D.beginPath();
	ctx2D.arc(100, 50, 50, 0, Math.PI * 2, true);
	ctx2D.closePath();
	ctx2D.fill();
	ctx2D.fillStyle = "rgb(255,255,0)";
	ctx2D.beginPath();
	ctx2D.arc(75, 100, 50, 0, Math.PI * 2, true);
	ctx2D.closePath();
	ctx2D.fill();
	ctx2D.fillStyle = "rgb(255,0,255)";
	ctx2D.arc(75, 75, 75, 0, Math.PI * 2, true);
	ctx2D.arc(75, 75, 25, 0, Math.PI * 2, true);
	ctx2D.fill("evenodd");

	var dataURL = canvas.toDataURL();

	document.getElementById("canvas-url-data").innerHTML = "<b>Canvas URL Data:</b> " + dataURL;
	document.getElementById("canvas-url-fingerprint").innerHTML = "<b>Canvas URL Fingerprint:</b> " + calcMD5(dataURL);

	canvas.toBlob(function(blob) {
		var reader = new FileReader();
		reader.addEventListener("loadend", function() {
			document.getElementById("canvas-blob-data").innerHTML = "<b>Canvas Blob Data:</b> " + reader.result;
			document.getElementById("canvas-blob-fingerprint").innerHTML = "<b>Canvas Blob Fingerprint:</b> " + calcMD5(reader.result);
		});
		reader.readAsText(blob);
	});

	try {
		var imageFile = canvas.mozGetAsFile("canvas.png", "image/png");
		var reader = new FileReader();
		reader.addEventListener("loadend", function() {
			document.getElementById("canvas-file-data").innerHTML = "<b>Canvas File Data:</b> " + reader.result;
			document.getElementById("canvas-file-fingerprint").innerHTML = "<b>Canvas File Fingerprint:</b> " + calcMD5(reader.result);

		});
		reader.readAsText(imageFile);
	}
	catch (e) {
		document.getElementById("canvas-file-data").innerHTML = "<b>Canvas File Data:</b> " + e.name;
		document.getElementById("canvas-file-fingerprint").innerHTML = "<b>Canvas File Fingerprint:</b> " + e.message;
	}

	var imageData = ctx2D.getImageData(0, 0, canvas.width, canvas.height);

	document.getElementById("context2d-image-data").innerHTML = "<b>Context2D Image Data:</b> " + imageData.data;
	document.getElementById("context2d-image-fingerprint").innerHTML = "<b>Context2D Image Fingerprint:</b> " + calcMD5(imageData.data.toString());

	// TODO: Both of these return null.
	//var ctxWebGL = canvas.getContext("webgl");
	//var ctxWebGLExperimental = canvas.getContext("experimental-webgl");

	//console.log(ctxWebGL === null);
	//console.log(ctxWebGLExperimental === null);

	//var image = new ImageData(canvas.width, canvas.height);
	//var pixels = new Uint8Array(image.data.length);

	//ctxWebGL.readPixels(0, 0, canvas.width, canvas.height, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, pixels);

	//document.getElementById("webgl-readpixels-data").innerHTML = "<b>WebGL Pixel Data:</b> " + pixels;
	//document.getElementById("webgl-readpixels-fingerprint").innerHTML = "<b>WebGL Pixel Fingerprint:</b> " + calcMD5(pixels.toString());

	function getAudioFp(callback) {
        	// Details: https://audiofingerprint.openwpm.com/
	        var hybrid_output = [];

        	var audioCtx = new(window.AudioContext || window.webkitAudioContext),
	        oscillator = audioCtx.createOscillator(),
	        analyser = audioCtx.createAnalyser(),
        	gain = audioCtx.createGain(),
	        scriptProcessor = audioCtx.createScriptProcessor(4096, 1, 1),
	        compressor, bins;

        	// Create and configure compressor
	        compressor = audioCtx.createDynamicsCompressor();
	        compressor.threshold && (compressor.threshold.value = -50);
	        compressor.knee && (compressor.knee.value = 40);
	        compressor.ratio && (compressor.ratio.value = 12);
	        compressor.reduction && (compressor.reduction.value = -20);
        	compressor.attack && (compressor.attack.value = 0);
	        compressor.release && (compressor.release.value = .25);

        	gain.gain.value = 0; // Disable volume
	        oscillator.type = 'triangle'; // Set oscillator to output triangle wave
        	oscillator.connect(compressor); // Connect oscillator output to dynamic compressor
	        compressor.connect(analyser); // Connect compressor to analyser
        	analyser.connect(scriptProcessor); // Connect analyser output to scriptProcessor input
	        scriptProcessor.connect(gain); // Connect scriptProcessor output to gain input
	        gain.connect(audioCtx.destination); // Connect gain output to audiocontext destination

        	scriptProcessor.onaudioprocess = function(bins) {
            		bins = new Float32Array(analyser.frequencyBinCount);
            		analyser.getFloatFrequencyData(bins);
            		for (var i = 0; i < bins.length; i = i + 1) {
                		hybrid_output.push(bins[i]);
            		}
            		analyser.disconnect();
            		scriptProcessor.disconnect();
            		gain.disconnect();
            		var audioFp = JSON.stringify(hybrid_output);
			callback(audioFp);
        	};

        	oscillator.start(0);
    	}

	getAudioFp(function(audioFp) {
		document.getElementById("audio-context-fingerprint").innerHTML = "<b>Audio Context Fingerprint:</b> " + calcMD5(audioFp);
	});

	function getClientRectsFp() {
		// Details: http://jcarlosnorte.com/security/2016/03/06/advanced-tor-browser-fingerprinting.html
		var elem = document.createElement('div');
		var s = elem.style;
		s.position = 'absolute';
		s.left = '3.1px';
		s.top = '2.1px';
		s.zIndex = '-100';
		s.visibility = 'hidden';
		s.fontSize = '19.123px';
		s.transformOrigin = '0.1px 0.2px 0.3px';
		s.webkitTransformOrigin = '0.1px 0.2px 0.3px';
		s.webkitTransform = 'scale(1.01123) matrix3d(0.251106, 0.0131141, 0, -0.000109893, -0.0380797, 0.349552, 0, 7.97469e-06, 0, 0, 1, 0, 575, 88, 0, 1)';
		s.transform = 'scale(1.01123) matrix3d(0.251106, 0.0131141, 0, -0.000109893, -0.0380797, 0.349552, 0, 7.97469e-06, 0, 0, 1, 0, 575, 88, 0, 1)';
		elem.innerHTML = '<h1>Sed ut perspiciatis unde</h1>pousdfnmv<b>asd<i id="target">asd</i></b>';
		document.body.appendChild(elem);

		var rect = document.getElementById('target').getClientRects()[0];

		var json = {
			x: rect['x'],
			y: rect['y'],
			width: rect['width'],
			height: rect['height'],
			top: rect['top'],
			right: rect['right'],
			bottom: rect['bottom'],
			left: rect['left']
		};

		if (elem.remove) {
			elem.remove()
		};

		return JSON.stringify(json);
	}

	var clientRectsFp = getClientRectsFp();

	document.getElementById("client-rects-data").innerHTML = "<b>Client Rectangles:</b> " + clientRectsFp;
	document.getElementById("client-rects-fingerprint").innerHTML = "<b>Client Rectangles:</b> " + calcMD5(clientRectsFp);
}
