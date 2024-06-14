document.addEventListener("DOMContentLoaded", () => {
	const contents = [
		{
			title: "Raise Your Helping Hand",
			text: "Every day we bring hope to millions of children in the world’s hardest place as a sign of God’s unconditional love.",
			button: "Donate",
			background: "url(/img/fundraise-img-nav.png)",
		},
		{
			title: "Support Our Mission",
			text: "Join us in making a difference in the lives of children around the globe. Your contribution matters.",
			button: "Support",
			background: "url(/img/fund-2.png)",
		},
		{
			title: "Be a Change Maker",
			text: "Together, we can create a better future for the children in need. Act now and make a difference.",
			button: "Act Now",
			background: "url(/img/fund-3.png)",
		},
	];

	let currentIndex = 0;

	const raiseHandBox = document.getElementById("raise-hand-box");
	const leftArrow = document.getElementById("left-arrow");
	const rightArrow = document.getElementById("right-arrow");

	function updateContent(index) {
		const content = contents[index];
		raiseHandBox.innerHTML = `
        <div class="h2">${content.title}</div>
            <p>${content.text}</p>
            <button class="btn_btn">${content.button}</button>
            `;
		raiseHandBox.style.backgroundImage = content.background;
	}

	function scrollLeft() {
		currentIndex = (currentIndex - 1 + contents.length) % contents.length;
		updateContent(currentIndex);
		raiseHandBox.style.transform = "translateX(-100%)";
		setTimeout(() => (raiseHandBox.style.transform = "translateX(0)"), 0);
	}

	function scrollRight() {
		currentIndex = (currentIndex + 1) % contents.length;
		updateContent(currentIndex);
		raiseHandBox.style.transform = "translateX(100%)";
		setTimeout(() => (raiseHandBox.style.transform = "translateX(0)"), 0);
	}

	leftArrow.addEventListener("click", scrollLeft);
	rightArrow.addEventListener("click", scrollRight);

	// Initialize with the first content
	updateContent(currentIndex);
});
