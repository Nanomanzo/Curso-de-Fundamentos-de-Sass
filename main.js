// Hacer la solicitud a la API
fetch('https://api.escuelajs.co/api/v1/categories/3/products')
  .then(response => response.json()) // Parsear la respuesta a JSON
  .then(data => {

    for (let i = 0; i < 8 && i < data.length; i++) {
      const product = data[i];
      console.log(product);
      const furnitureContainer = document.querySelector('.furniture');
      const productCard = furnitureContainer.querySelector(`.product-card:nth-child(${i + 1})`);

      if (productCard) {
        productCard.querySelector('.product-title').textContent = product.title;
        productCard.querySelector('.product-price').textContent = `$${product.price}`;
        productCard.querySelector('.product-description').textContent = product.description;
        productCard.querySelector('.product-image img').src = product.images[0];
      }
    }
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });


  fetch('https://api.escuelajs.co/api/v1/categories/5/products')
  .then(response => response.json()) // Parsear la respuesta a JSON
  .then(data => {

    for (let i = 0; i < 8 && i < data.length; i++) {
      const product = data[i];
      console.log(product);
      const healthcareContainer = document.querySelector('.healthcare');
      const productCard = healthcareContainer.querySelector(`.product-card:nth-child(${i + 1})`);

      if (productCard) {
        productCard.querySelector('.product-title').textContent = product.title;
        productCard.querySelector('.product-price').textContent = `$${product.price}`;
        productCard.querySelector('.product-description').textContent = product.description;
        productCard.querySelector('.product-image img').src = product.images[0];
      }
    }
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
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