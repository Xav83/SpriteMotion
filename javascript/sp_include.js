function include(doc, url) {
	var scriptElement = doc.createElement("script");
	scriptElement.type = 'text/javascript';
	scriptElement.src = url + '?' + (new Date().getTime());
	if (doc.getElementsByTagName("head").length <= 0) {
		throw "Function include - No <head> element in the specified document.";
	}
	doc.getElementsByTagName("head")[0].appendChild(scriptElement);
}

module.exports = {
	include: function(doc, url) {
		include(doc, url);
	}
};
