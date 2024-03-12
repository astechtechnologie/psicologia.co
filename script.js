// Función para generar el calendario
function generarCalendario() {
  var hoy = new Date();
  var mes = hoy.getMonth();
  var año = 2024; // Establecer el año en 2024

  // Obtener el primer día del mes y el último día del mes
  var primerDia = new Date(año, mes, 1);
  var ultimoDia = new Date(año, mes + 1, 0);

  var tabla = '<table><thead><tr><th>Lun</th><th>Mar</th><th>Mié</th><th>Jue</th><th>Vie</th><th>Sáb</th><th>Dom</th></tr></thead><tbody><tr>';

  // Rellenar los espacios vacíos antes del primer día del mes
  for (var i = 0; i < primerDia.getDay(); i++) {
      tabla += '<td></td>';
  }

  // Rellenar los días del mes
  for (var dia = 1; dia <= ultimoDia.getDate(); dia++) {
      // Si es el último día de la semana, cerrar la fila y abrir una nueva
      if (primerDia.getDay() === 0 && dia > 1) {
          tabla += '</tr><tr>';
      }
      // Marcar el día actual
      var claseDia = '';
      if (dia === hoy.getDate() && mes === hoy.getMonth() && año === hoy.getFullYear()) {
          claseDia = 'current-day';
      }
      tabla += '<td class="' + claseDia + '">' + dia + '</td>';
      primerDia.setDate(primerDia.getDate() + 1);
  }

  // Rellenar los espacios vacíos después del último día del mes
  for (var i = ultimoDia.getDay() + 1; i < 7; i++) {
      tabla += '<td></td>';
  }

  tabla += '</tr></tbody></table>';

  document.getElementById('calendario').innerHTML = tabla;
}

// Llamar a la función para generar el calendario al cargar la página
window.onload = function () {
  generarCalendario();
};
