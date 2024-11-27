document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const cuenta = document.getElementById('cuenta').value;
    const concepto = document.getElementById('concepto').value;
    const etiqueta = document.getElementById('etiqueta').value;
    const descripcion = document.getElementById('descripcion').value;
    const total = document.getElementById('total').value;
    const fecha = document.getElementById('fecha').value;

    const gasto = {
        cuenta,
        concepto,
        etiqueta,
        descripcion,
        total: parseFloat(total),
        fecha
    };

    let gastos = JSON.parse(localStorage.getItem('gastos')) || [];
    gastos.push(gasto);
    localStorage.setItem('gastos', JSON.stringify(gastos));

    alert('Gasto agregado exitosamente');
    window.location.href = 'index.html';
});