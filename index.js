// Función para cargar los gastos desde localStorage y mostrarlos en la tabla
function cargarGastos() {
    const gastos = JSON.parse(localStorage.getItem('gastos')) || [];

    const tablaGastos = document.getElementById('tabla-gastos');

    // Limpiar la tabla antes de agregar nuevos datos
    tablaGastos.innerHTML = '';

    // Recorrer los gastos y agregarlos a la tabla
    gastos.forEach((gasto, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${gasto.fecha}</td>
            <td>${gasto.cuenta}</td>
            <td>${gasto.concepto}</td>
            <td>${gasto.etiqueta}</td>
            <td>${gasto.descripcion}</td>
            <td>${gasto.total}</td>
        `;

        tablaGastos.appendChild(row);
    });
}

// Cargar los gastos cuando la página se carga
document.addEventListener('DOMContentLoaded', cargarGastos);
