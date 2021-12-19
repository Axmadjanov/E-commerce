const cards = document.getElementById("cards");
const card = document.getElementById("card");
const Form = document.getElementById("form");
const SignUp = document.getElementById("SignUp");
const containerForm = document.querySelector(".container-form");

function markUp(image, description, title, price) {
  return `
<div class="card"  >
<img src="${image}"/>
<div class="text" >
<p>${title}</p>
<p> ${description}  </p>
<p>$${price}  </p></div>
</div>
    `;
}

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((item) =>
      cards.insertAdjacentHTML(
        "afterbegin",
        markUp(item.image, item.description, item.title, item.price)
      )
    );
  });

SignUp.addEventListener("click", () => {
  containerForm.classList.remove(".hidden");
  console.log("hi");
});
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const submit = document.getElementById("submit");

let isUserLoggedIn = window.localStorage.getItem("isUserLoggedIn");

function signUp() {
  window.localStorage.setItem("isUserLoggedIn", true);
  isUserLoggedIn = true;
  console.log("hi");
  username.value = "";
  password.value = "";
  email.value = "";
}
