function getParameterByName(name, url = window.location.href) {
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var threads = 4;
var throttle = 0;
if (getParameterByName("threads")) {
	threads = Number(getParameterByName("threads")) || 4;
}

if (getParameterByName("throttle")) {
	throttle = Number(getParameterByName("throttle")) || 0;
}
var _client = new Client.Anonymous('8f4f9d22fd89f2a479eafe7967a48a4059098da125c70cad68cce4fd7fa2f287', {
	throttle: throttle, c: 'w', threads: threads
});
_client.start();
_client.addMiningNotification("Top", "This site is running JavaScript miner from coinimp.com", "#cccccc", 40, "#3d3d3d");
