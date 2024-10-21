// Obtener el formulario
const form = document.getElementById('gastoForm');

// Función para guardar el gasto en localStorage
function guardarGasto(e) {
    e.preventDefault();

    // Obtener los valores de los inputs
    const fecha = document.getElementById('fecha').value;
    const cuenta = document.getElementById('cuenta').value;
    const concepto = document.getElementById('concepto').value;
    const etiqueta = document.getElementById('etiqueta').value;
    const descripcion = document.getElementById('descripcion').value;
    const total = document.getElementById('total').value;

    // Crear objeto de gasto
    const gasto = {
        fecha,
        cuenta,
        concepto,
        etiqueta,
        descripcion,
        total
    };

    // Obtener los gastos del localStorage o crear uno nuevo si no existe
    let gastos = JSON.parse(localStorage.getItem('gastos')) || [];

    // Añadir el nuevo gasto
    gastos.push(gasto);

    // Guardar el nuevo array de gastos en localStorage
    localStorage.setItem('gastos', JSON.stringify(gastos));

    console.log('Gasto guardado:', nuevoGasto);
    console.log('Todos los gastos en localStorage:', gastos);

    // Redireccionar a la página principal
    window.location.href = 'index.html';
}



// Asignar la función al botón de confirmar
form.addEventListener('submit', guardarGasto);

// Botón de salir
document.getElementById('btnSalir').addEventListener('click', () => {
    window.location.href = 'index.html';
});
