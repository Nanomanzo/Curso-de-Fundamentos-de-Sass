// Hacer la solicitud a la API
document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll(".product-card");

    fetch("https://dummyjson.com/products?limit=10")
        .then(res => res.json())
        .then(data => {
            const products = data.products;

            productCards.forEach((card, index) => {
                const product = products[index];

                if (!product) return;

                const image = card.querySelector(".product-image img");
                const title = card.querySelector(".product-title");
                const description = card.querySelector(".product-description");
                const price = card.querySelector(".product-price");

                image.src = product.thumbnail;
                image.alt = product.title;
                title.textContent = product.title;
                description.textContent = product.description;
                price.textContent = `€${product.price}`;
            });
        })
        .catch(err => console.error("Error al cargar productos:", err));
});



// JS actualizado
const svgElements = document.querySelectorAll('svg');

function changeFillOnClick(event) {
  const svgElement = event.target;
  if (svgElement.tagName === 'svg') {
    const currentFill = svgElement.getAttribute('fill');
    if (!currentFill || currentFill === 'none') {
      svgElement.setAttribute('fill', '#7C6A0A');
      console.log("agrega");
    } else {
      svgElement.setAttribute('fill', 'none');
      console.log("quita");
    }
  }
}

// Agregar un event listener para cada elemento SVG
svgElements.forEach(svgElement => {
  svgElement.addEventListener('click', changeFillOnClick);
});
