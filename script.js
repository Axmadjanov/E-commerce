const cards = document.getElementById("cards");
const card = document.getElementById("card");

function markUp(image, description, title, price) {
  return `
<div class="card"  >
<img src="${image}"/>
<div class="text" >
<p>${title} </p>
<br/>
<p> ${description}  </p>
<br/>
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
