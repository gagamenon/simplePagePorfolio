// Resize map widht to fit content 
const mapFrame = document.querySelector("#map-frame");
const formContainer = document.querySelector("#form-container");
const footerTwoColumns = document.querySelector("#footer-two-columns");

function updateSize() {
	if (window.innerWidth > 768) {
		mapFrame.style.width = (footerTwoColumns.clientWidth) / 2 + "px";
		mapFrame.style.height = (footerTwoColumns.clientWidth) / 2 + "px";
	} else {
		mapFrame.style.width = formContainer.clientWidth + "px";
		mapFrame.style.height = formContainer.clientWidth + "px";
	}
}
updateSize();
window.addEventListener("resize", updateSize);

// Set active menu elements on scroll
const sections = document.querySelectorAll("section[id], footer[id]");

function navHighlighter() {
	let scrollY = window.pageYOffset;

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 165;
		sectionId = current.getAttribute("id");
		if (
			scrollY > sectionTop &&
			scrollY <= sectionTop + sectionHeight
		) {
			document.querySelector("nav a[href*=" + sectionId + "]").classList.add("active");
		} else {
			document.querySelector("nav a[href*=" + sectionId + "]").classList.remove("active");
		}
	});
}
window.addEventListener("scroll", navHighlighter);