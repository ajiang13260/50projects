const container = document.querySelector(".container");
const panels = container.querySelectorAll(".panel");

container.addEventListener("click", function (event) {
  if (!event.target.closest(".panel")) return;

  panels.forEach(item => {
    item.classList.remove("active");
  });

  const elem = event.target.closest(".panel");
  elem.classList.add("active");
});
