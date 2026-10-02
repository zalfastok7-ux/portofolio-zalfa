const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
	navMenu.classList.toggle("show");
});

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

filters.forEach(button => {
	button.addEventListener("click", () => {
		filters.forEach(btn => {
			btn.classList.remove("active");
		});

		button.classList.add("active");

		const category = button.dataset.filter;

		projects.forEach(project => {
			if (category === "all" || project.classList.contains(category)) {
				project.classList.remove("hide");
			} else {
				project.classList.add("hide");
			}
		});
	});
});
