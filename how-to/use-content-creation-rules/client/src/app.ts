document.addEventListener("DOMContentLoaded", () => {
	const openGoogleBtn = document.querySelector("#open-google");
	openGoogleBtn.addEventListener("click", (e) => {
		window.open("https://www.google.com");
	});
	const openCdnBtn = document.querySelector("#open-cdn");
	openCdnBtn.addEventListener("click", (e) => {
		window.open("https://cdn.openfin.co/embed-web/chart.html");
	});
});
