 // Cargar productos desde Local Storage o usar una lista predeterminada
 const dataPaquetes = [
    { nombre: 'Jujuy', precio: '$100', imagen: `img/jujuy1.jpg `},
    { nombre: 'Salta', precio: '$150', imagen: 'img/salta1.jpg' },
    { nombre: 'Mendoza', precio: '$200', imagen: 'img/mendoza3.jpg' },
    { nombre: 'Santa Cruz', precio: '$100', imagen: 'img/santacruz2.jpg' },
    { nombre: 'Tierra Del Fuego', precio: '$150', imagen: 'img/tierradelfuego1.jpg' },
    { nombre: 'Cordoba', precio: '$200', imagen: 'img/cordoba4.jpg' },

  ]

  
  function comprar(paquetes) {
       paquetes = JSON.parse(localStorage.getItem('paquetes')) || dataPaquetes;
    window.location.href = `pestaniashtml/formulario.html`;
  }

  const cardContainer = document.getElementById('cardContainer');

  function crearCard() {
    cardContainer.innerHTML = '';
    paquetes.forEach(paquetes => {
      const cardDiv = document.createElement('div');
      cardDiv.className = 'col-md-4 mb-4';
      cardDiv.innerHTML = `
      <div class="card">
      <div class="card-body">
        <img src="${paquetes.imagen}" class="card-img-top" alt="Imagen del paquete">
        <h5 class="card-title">${paquetes.nombre}</h5>
        <p class="card-text">Precio: ${paquetes.precio}</p>
        <button class="btn btn-primary" onclick="comprar('${paquetes.nombre}')">Comprar</button>
      </div>
    </div>
      `;
      cardContainer.appendChild(cardDiv);
    });
  }




  document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementbyId('formulario');
  
    formulario.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const cantidad = document.getElementById('cantidad').value;
      const metodoPago = document.getElementById('metodoPago').value;
  
      const datos = { nombre, apellido, cantidad, metodoPago };
  
      // Obtener datos previos o inicializar el array
      const registros = JSON.parse(localStorage.getItem('registros')) || [];
  
      // Agregar el nuevo registro
      registros.push(datos);
  
      // Guardar en Local Storage
      localStorage.setItem('registros', JSON.stringify(registros));
  
      // Limpiar el formulario
      formulario.reset();
    });
  });
  

