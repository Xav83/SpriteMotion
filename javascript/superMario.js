window.onload = function() {
	var canvas = document.getElementById("superMario");
	var canvasContext = canvas.getContext("2d");
	var superMarioImage = new Image();
	superMarioImage.addEventListener('load', function() {
		canvasContext.drawImage(superMarioImage, 0, 0, superMarioImage.width, superMarioImage.height, 0, 0, canvas.width, canvas.height);
	});
	superMarioImage.src = "resources/images/NES - Super Mario Bros - Mario & Luigi.png";
};
