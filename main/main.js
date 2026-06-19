let datos;

function cargarDatos(res) {
  return res.json();
}

function guardarDatos(json) {
  datos = json;
  cargarProductos("furniture");
}

fetch("productos.json").then(cargarDatos).then(guardarDatos);

const botones = document.querySelectorAll(".nav-menu-catalog li");
const contenedor = document.querySelector(".container-products");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    // 1) Quitar active de todos
    botones.forEach((b) => b.classList.remove("active"));

    // 2) Activar el clicado
    boton.classList.add("active");

    // 3) Cargar productos según categoría
    const categoria = boton.classList[0];
    console.log(categoria); // furniture, jewelry, multimedia, toys
    cargarProductos(categoria);
  });
});

function cargarProductos(categoria) {
  contenedor.innerHTML = ""; // limpiar

  const productos = datos[categoria];

  productos.forEach((prod) => {
    const card = document.createElement("div");
    card.classList.add("card-producto");

    card.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">
      <h3>${prod.nombre}</h3>
      <p>${prod.precio}</p>
    `;

    contenedor.appendChild(card);
  });
}
