///carrito
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function actualizarCarrito() {
    let carritoContador = document.getElementById('contador-carrito');
    carritoContador.innerText = carrito.length;
    mostrarCarrito();
}
function cargarMenu() {
    const container = document.getElementById('menu-container');
    const containerPizza = document.getElementById('menu-container-pizza');

    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../js/carrito.json', true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const menuJSON = JSON.parse(xhr.responseText);
        
        for (let i = 0; i < menuJSON.bebidas.length; i += 2) {
          const CATEGORIABEBIDAS1 = menuJSON.bebidas[i];
          const CATEGORIABEBIDAS2 = menuJSON.bebidas[i + 1];
        
          
          const categoriaHTML = `
            <div class="row">
              <div class="col-lg-6">
                <ul class="cerveza-list">
                  <li class="cerveza-item">
                    <h3>${CATEGORIABEBIDAS1.categoria}</h3>
                    <div class="d-flex align-items-center">
                      <div>
                        ${CATEGORIABEBIDAS1.items.map(item => `
                          <div class="d-flex justify-content-between align-items-center">
                            <p style="margin-bottom: 5px;">${item.nombre} - $${item.precio.toFixed(2)}</p>
                            <button class="btn-agregar" onclick="agregarAlCarrito('${item.nombre}', ${item.precio})">Agregar</button>
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              
              ${CATEGORIABEBIDAS2 ? `
                <div class="col-lg-6">
                  <ul class="cerveza-list">
                    <li class="cerveza-item">
                      <h3>${CATEGORIABEBIDAS2.categoria}</h3>
                      <div class="d-flex align-items-center">
                        <div>
                          ${CATEGORIABEBIDAS2.items.map(item => `
                            <div class="d-flex justify-content-between align-items-center">
                              <p style="margin-bottom: 5px;">${item.nombre} - $${item.precio.toFixed(2)}</p>
                              <button class="btn-agregar" onclick="agregarAlCarrito('${item.nombre}', ${item.precio})">Agregar</button>
                            </div>
                          `).join('')}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              ` : ''}
            </div>

            
          `;
          
          container.innerHTML += categoriaHTML;
        }
      } else {
        console.error('Error al cargar el archivo JSON');
      }
    };
    xhr.send();
}
function cargarMenuPizza() {
    const containerPizza = document.getElementById('menu-container-pizza');

    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../js/carrito.json', true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const menuJSON = JSON.parse(xhr.responseText);
        
        for (let i = 0; i < menuJSON.pizzas.length; i += 2) {
          const CATEGORIAPIZZA1 = menuJSON.pizzas[i];
          const CATEGORIAPIZZA2 = menuJSON.pizzas[i + 1];
        
          
          const categoriaPizzaHTML = `
            <div class="row">
              <div class="col-lg-6">
                <ul class="cerveza-list">
                  <li class="cerveza-item">
                    <h3>${CATEGORIAPIZZA1.categoria}</h3>
                    <div class="d-flex align-items-center">
                      <div>
                        ${CATEGORIAPIZZA1.items.map(item => `
                          <div class="d-flex justify-content-between align-items-center">
                            <p style="margin-bottom: 5px;">${item.nombre} - $${item.precio.toFixed(2)}</p>
                            <button class="btn-agregar" onclick="agregarAlCarrito('${item.nombre}', ${item.precio})">Agregar</button>
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              
              ${CATEGORIAPIZZA2 ? `
                <div class="col-lg-6">
                  <ul class="cerveza-list">
                    <li class="cerveza-item">
                      <h3>${CATEGORIAPIZZA2.categoria}</h3>
                      <div class="d-flex align-items-center">
                        <div>
                          ${CATEGORIAPIZZA2.items.map(item => `
                            <div class="d-flex justify-content-between align-items-center">
                              <p style="margin-bottom: 5px;">${item.nombre} - $${item.precio.toFixed(2)}</p>
                              <button class="btn-agregar" onclick="agregarAlCarrito('${item.nombre}', ${item.precio})">Agregar</button>
                            </div>
                          `).join('')}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              ` : ''}
            </div>

            
          `;
          
          containerPizza.innerHTML += categoriaPizzaHTML;
        }
      } else {
        console.error('Error al cargar el archivo JSON');
      }
    };
    xhr.send();
}


function cargarMenuCafe() {
    const containerCafe = document.getElementById('menu-container-cafe');

    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../js/carrito.json', true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const menuJSON = JSON.parse(xhr.responseText);
        
        for (let i = 0; i < menuJSON.cafes.length; i += 2) {
          const CATEGORIACAFE1 = menuJSON.cafes[i];
          const CATEGORIACAFE2 = menuJSON.cafes[i + 1];
        
          
          const categoriaCafeHTML = `
            <div class="row">
              <div class="col-lg-6">
                <ul class="cerveza-list">
                  <li class="cerveza-item">
                    <h3>${CATEGORIACAFE1.categoria}</h3>
                    <div class="d-flex align-items-center">
                      <div>
                        ${CATEGORIACAFE1.items.map(item => `
                          <div class="d-flex justify-content-between align-items-center">
                            <p style="margin-bottom: 5px;">${item.nombre} - $${item.precio.toFixed(2)}</p>
                            <button class="btn-agregar" onclick="agregarAlCarrito('${item.nombre}', ${item.precio})">Agregar</button>
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              
              ${CATEGORIACAFE2 ? `
                <div class="col-lg-6">
                  <ul class="cerveza-list">
                    <li class="cerveza-item">
                      <h3>${CATEGORIACAFE2.categoria}</h3>
                      <div class="d-flex align-items-center">
                        <div>
                          ${CATEGORIACAFE2.items.map(item => `
                            <div class="d-flex justify-content-between align-items-center">
                              <p style="margin-bottom: 5px;">${item.nombre} - $${item.precio.toFixed(2)}</p>
                              <button class="btn-agregar" onclick="agregarAlCarrito('${item.nombre}', ${item.precio})">Agregar</button>
                            </div>
                          `).join('')}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              ` : ''}
            </div>

            
          `;
          
          containerCafe.innerHTML += categoriaCafeHTML;
        }
      } else {
        console.error('Error al cargar el archivo JSON');
      }
    };
    xhr.send();
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
      timer: 1500
    });
}
  
cargarMenu();
cargarMenuPizza();
cargarMenuCafe();

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
async function ComienzaJuego() {
    let NumeroAzar = Math.floor(Math.random() * 10) + 1;
    let intentos = 3;
    let messageJuego = document.getElementById('message');

    while (intentos > 0) {
        const { value: clienteUser } = await Swal.fire({
            title: `Tienes ${intentos} intentos`,
            input: 'number',
            inputLabel: 'Ingresa un número entre 1 y 10:',
            inputPlaceholder: 'Número',
            inputValidator: (value) => {
                if (!value || value < 1 || value > 10) {
                    return 'Por favor, ingresa un número válido entre 1 y 10.';
                }
            },
            showCancelButton: true,
            cancelButtonText: 'Cancelar'
        });

   

        if (clienteUser == NumeroAzar) {
            messageJuego.innerText = `¡Felicidades! Has ganado, el número ${NumeroAzar} fue correcto. Acércate a la caja y retira la cerveza, papas y hamburguesa!`;
            console.log(`Número ingresado correcto: ${clienteUser}`);
            return;

        } else {
            intentos--;
            if (intentos > 0) {
                Swal.fire(`El número ingresado es incorrecto. ¡Ten cuidado, te quedan ${intentos} intentos!`);
                console.log(`Número ingresado incorrecto: ${clienteUser}. Quedan ${intentos} intentos.`);
            }
        }
        
    }

    messageJuego.innerText = `Lo siento, has perdido. El número era ${NumeroAzar}. Intenta de nuevo.`;
    Swal.fire({
        title: 'Lo siento, has perdido',
        text: `El número era ${NumeroAzar}. Intenta de nuevo.`,
        icon: 'error'
    });
    console.log(`Perdió. El número era ${NumeroAzar}.`);

}