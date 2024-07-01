///carrito
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function actualizarCarrito() {
    let carritoContador = document.getElementById('contador-carrito');
    carritoContador.innerText = carrito.length;
    mostrarCarrito();
}

function agregarAlCarrito(nombre, precio) {
    let carritoContador = document.getElementById('contador-carrito');
    carritoContador.innerText = parseInt(carritoContador.innerText) + 1;
    const producto = { nombre, precio };
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));


    Swal.fire({
        icon: 'success',
        title: 'Producto Agregado',
        text: `${nombre} se ha agregado al carrito con éxito.`,
        showConfirmButton: false,
        timer: 1500,
       
    });

   
}

function mostrarCarrito() {
    const ComprasCarrito = document.getElementById('carrito');

    ComprasCarrito.innerHTML = '<h2>Carrito de Compras</h2>';

    if (carrito.length > 0) {
        const listaProductosCarrito = carrito.map((producto,eliminarProducto) => {
            return `
                <li class="carrito-listado">
                    ${producto.nombre} - $${producto.precio.toFixed(2)}
                    <span class="btn-eliminar" onclick="eliminarProdcutoCarrito(${eliminarProducto})">&times</span>
                  


                </li>
            `;
        }).join('');

        const totalComprasCarrito = calcularTotalCarrito().toFixed(2);

        ComprasCarrito.innerHTML += `<ul>${listaProductosCarrito}</ul>`;
        ComprasCarrito.innerHTML += `<div class="separacion-carrito"></div>`;
        ComprasCarrito.innerHTML += `
            <div class="carrito-total-container">
                <p class="carrito-total">Total: $${totalComprasCarrito}</p>
                <button class="btn-pagar" onclick="pagarCarrito()">Pagar</button>
                <button class="btn-vaciar" onclick="vaciarCarrito()">Vaciar Carrito</button>    
            </div>
        `;
    }
    else {
        ComprasCarrito.innerHTML += '<p>El carrito se encuentra vacío.</p>';
    }
}


function calcularTotalCarrito() {
    return carrito.reduce((totalPrecio, producto) => totalPrecio + producto.precio, 0);
}

function eliminarProdcutoCarrito(eliminarProducto) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: 'De confirmar, se eliminará el producto del carrito.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#dc3545',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            carrito.splice(eliminarProducto, 1);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            mostrarCarrito();
            Swal.fire(
                '¡Eliminado!',
                'El producto ha sido eliminado corrextamente del carrito.',
                'success'
            );
        }
    });
}

function vaciarCarrito() {
        Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción eliminará todos los productos del carrito.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, vaciar carrito',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            carrito = [];
            localStorage.removeItem('carrito');
            mostrarCarrito();
            Swal.fire({
                icon: 'success',
                title: 'Carrito Vacío',
                text: 'Todos los productos han sido eliminados del carrito.',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
}

function pagarCarrito() {
    Swal.fire({
        title: 'Seleccione el método de pago',
        showCancelButton: true,
        confirmButtonColor: '#28a745', 
        confirmButtonText: '<span class="icono-efectivo">💵</span>Efectivo',
        cancelButtonColor: '#dc3545', 
        cancelButtonText: 'Cancelar',
        showDenyButton: true,
        denyButtonColor: '#007bff', 
        denyButtonText: '<span  class="icono-tarjeta">💳</span>Tarjeta', 
        html: `<a href="https://www.mercadopago.com.ar"  target="_blank" class="boton-mercado-pago"><span class="icono-mercado-pago">🛒</span> Mercado Pago</a>`  
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Pagará en efectivo');
        } else if (result.isDenied) {
            Swal.fire({
                title: 'Ingrese los datos de la tarjeta',
                showCancelButton: true,
                cancelButtonText: 'Cancelar',
                html:
                    `<input type="text" id="nombreTarjeta" placeholder="Nombre titular"  class="swal2-input" required>
                     <input type="number" id="numeroTarjeta" placeholder="Número de tarjeta" class="swal2-input" required>
                     <input type="number" id="fechaVenTarjeta" placeholder="Fecha Vencimiento (MM/YY)" class="swal2-input" required>
                     <input type="number" id="cvv" placeholder="CVV" class="swal2-input" required>`,
               focusConfirm: false,
                preConfirm: () => {
                    const nombre = document.getElementById('nombreTarjeta').value;
                    const numero = document.getElementById('numeroTarjeta').value;
                    const fechaVen = document.getElementById('fechaVenTarjeta').value;
                    const cvv = document.getElementById('cvv').value;            
                    if (!nombre || !numero || !fechaVen || !cvv) {
                        Swal.showValidationMessage('Por favor complete todos los campos.');
                    }
                    return { nombre, numero, fechaVen, cvv };
                    
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'info',
                        title: 'Datos de tarjeta',
                        html: `<pNombre titular: ${result.value.nombre}</p>
                            <p>Número de tarjeta: ${result.value.numero}</p>
                            <p>Fecha de vencimiento: ${result.value.fechaVen}</p>
                           `
                    });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire('Pago cancelado');
                }
            });
        }  else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire('Pago cancelado');
        } 
    });
}




document.addEventListener('DOMContentLoaded', (event) => {
    actualizarCarrito();
});
mostrarCarrito();

///funcion de juego
function ComienzaJuego() {
    let NumeroAzar = Math.floor(Math.random() * 10) + 1;
    let intentos = 3;
    let messageJuego = document.getElementById('message');

    while (intentos > 0) {
        let clienteUser = parseInt(prompt(`Tienes ${intentos} intentos. Ingresa un número entre 1 y 10:`));
        console.log(`Número ingresado por el cliente es: ${clienteUser}`); 
        if (isNaN(clienteUser) || clienteUser < 1 || clienteUser > 10) {
            alert('Por favor, ingresa un número válido entre 1 y 10.');
            continue;
        
        }           
        if (clienteUser === NumeroAzar) {
            messageJuego.innerText = `¡Felicidades! Has ganado, el número ${NumeroAzar} fue correcto. Acerquese a la caja, y retira la cerveza, papas y hamburguesa!`;
            console.log(`El número ingresado es incorrecto. ¡Ten cuidado, te quedan ${intentos} intentos!.`);
            return;
         
        } else {
            intentos--; // es la froma abrevieda de intentos = intentos - 1;
            if (intentos > 0) {
                alert(`El número ingresado es incorrecto. ¡Ten cuidado, te quedan ${intentos} intentos!.`);
                console.log(`El número ingresado es incorrecto. ¡Ten cuidado, te quedan ${intentos} intentos!.`);                        
            }
        }
    }
    messageJuego.innerText = `Lo siento, has perdido. El número era ${NumeroAzar}. Intenta de nuevo.`;
    console.log(`Lo siento, has perdido. El número era ${NumeroAzar}. Intenta de nuevo.`);
}

