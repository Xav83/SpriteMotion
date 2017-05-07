include(document, 'javascript/sp_rectangle.js');

function loadImageInCanvas(canvas, image, imagePartToDisplay) {
	var canvasContext = canvas.getContext("2d");
	image.addEventListener('load', function() {
		canvasContext.drawImage(image,
			imagePartToDisplay.x, imagePartToDisplay.y,
			imagePartToDisplay.width, imagePartToDisplay.height,
			0, 0, canvas.width, canvas.height);
	});
}

window.onload = function() {
	var superMarioCanvas = document.getElementById("superMario");
	var superMarioImage = new Image();
	superMarioImage.src = "resources/images/NES - Super Mario Bros - Mario & Luigi.png";
	var superMarioFrame = new Rectangle(81, 2, 14, 30);
	loadImageInCanvas(superMarioCanvas, superMarioImage, superMarioFrame);
};
