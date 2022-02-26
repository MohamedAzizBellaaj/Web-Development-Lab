const h3 = document.querySelector("h3");
const color = document.querySelector("#color");
const size = document.querySelector("#size");
const select = document.querySelector("#select");
color.addEventListener("input", () => {
  h3.style.color = `${color.value}`;
});
size.addEventListener("input", () => {
  h3.style.fontSize = `${size.value}px`;
});

select.addEventListener("input", () => {
  h3.style.fontFamily = `${select.value}`;
});
