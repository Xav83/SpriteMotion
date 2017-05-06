function loadImageInCanvas(canvas, image) {
	var canvasContext = canvas.getContext("2d");
	image.addEventListener('load', function() {
		canvasContext.drawImage(image, image.x, image.y, image.width, image.height, 0, 0, canvas.width, canvas.height);
	});
}

window.onload = function() {
	var superMarioCanvas = document.getElementById("superMario");
	var superMarioImage = new Image();
	superMarioImage.src = "resources/images/NES - Super Mario Bros - Mario & Luigi.png";
	loadImageInCanvas(superMarioCanvas, superMarioImage);
};
