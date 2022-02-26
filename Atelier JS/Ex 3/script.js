const ul = document.querySelector("ul");
const name = document.querySelector("#name");
const content = document.querySelector("#content");
const button = document.querySelector("button");
const icon = document.querySelector("i");

name.addEventListener("input", () => {
  if (name.value && content.value) {
    button.disabled = false;
  }
});
content.addEventListener("input", () => {
  if (name.value && content.value) {
    button.disabled = false;
  }
});

button.addEventListener("click", () => {
  if (name.value && content.value) {
    ul.innerHTML += `<li class="p-3 mb-2 bg-white text-dark">${name.value}: ${content.value} <i class="fa fa-trash fa-1x"></i></li>`;
    name.value = "";
    content.value = "";
    button.disabled = true;
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.className == "fa fa-trash fa-1x") {
    e.target.parentNode.remove();
  }
});
