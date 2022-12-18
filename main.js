const fields = document.querySelectorAll(".field");
const btn = document.querySelector(".btn");
const pass = document.querySelector("#pass");

console.log("Hola");

/* btn.addEventListener("mouseenter", (e) => console.log(countScore())); */

fields.forEach((field) => {
  const input = field.children[1];
  input.addEventListener("invalid", (e) => {
    const el = e.target;
    el.classList.add("input-invalid");
    const desc = el.dataset.title;
    const attr = el.attributes.id.textContent;
    const span = document.querySelector(`#${attr} + span`);
    span.textContent = desc;
  });

  if (input.id === "confirm") {
    input.addEventListener("input", (e) => {
      const pass = document.querySelector("#pass").value;
      if (pass === e.target.value) e.target.setCustomValidity("");
      else {
        e.target.setCustomValidity(e.target.dataset.title);
        const attr = e.target.attributes.id.textContent;
        const span = document.querySelector(`#${attr} + span`);
        span.textContent = e.target.dataset.confirm;
      }
    });
  }
});
