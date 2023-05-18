// Resize map widht to fit content 
const mapFrame = document.querySelector("#map-frame");
const formContainer = document.querySelector("#form-container");
const footerTwoColumns = document.querySelector("#footer-two-columns");

function updateSize() {
	if (window.innerWidth > 768) {
		mapFrame.style.width = (footerTwoColumns.clientWidth)/2 + "px";
		mapFrame.style.height = (footerTwoColumns.clientWidth)/2 + "px";	
	} else {
	mapFrame.style.width = formContainer.clientWidth + "px";
	mapFrame.style.height = formContainer.clientWidth + "px";	}
}
updateSize();
window.addEventListener("resize", updateSize);

