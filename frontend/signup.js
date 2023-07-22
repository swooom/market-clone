const form = document.querySelector("#signup-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const body = new FormData(form);
  const res = await fetch('/signup', j{
    method:'post',
    body
  })
  console.log(data);
};

form.addEventListener("submit", handleSubmit);
