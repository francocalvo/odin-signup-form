const fields = document.querySelectorAll(".field");
console.log("Hola");

fields.forEach((field) => {
  const input = field.children[1];
  input.addEventListener("invalid", (e) => {
    const el = e.target;
    el.classList.toggle('input-invalid')
    const desc = el.dataset.title;
    const attr = el.attributes.id.textContent;

    const span = document.querySelector(`#${attr} + span`);
    span.textContent = desc;
  });
});
