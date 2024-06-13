let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito(nombre, precio) {
    let carritoContador = document.getElementById('contador-carrito');
    carritoContador.innerText = parseInt(carritoContador.innerText) + 1;
    const producto = { nombre, precio };
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}

function mostrarCarrito() {
    const ComprasCarrito = document.getElementById('carrito');

    ComprasCarrito.innerHTML = '<h2>Carrito de Compras</h2>';

    if (carrito.length > 0) {
        const listaProductosCarrito = carrito.map((producto) => {
            return `
                <li>
                    ${producto.nombre} - $${producto.precio.toFixed(2)}
                </li>
            `;
        }).join('');

        const totalComprasCarrito = calcularTotalCarrito().toFixed(2);

        ComprasCarrito.innerHTML += `<ul>${listaProductosCarrito}</ul>`;
        ComprasCarrito.innerHTML += `<p>Total: $${totalComprasCarrito}</p>`;
    }
}


function calcularTotalCarrito() {
    return carrito.reduce((totalPrecio, producto) => totalPrecio + producto.precio, 0);
}

mostrarCarrito();
