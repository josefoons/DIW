function eliminarIncidencia(elemento) {
  $.ajax({
    type: "DELETE",
    url: "http://localhost:3000/minions/" + elemento,
    data: "",
    success: function (msg) {
      location.reload();
    }
  });
  setTimeout(() => {
    location.reload();
  }, 100);
}


$.getJSON("http://localhost:3000/minionsL", function (data) {
  var items = [];
  $.each(data, function (key, val) {
    items.push("<tr class='list-group-item'><td style='width: 20px; overflow: hidden; display: inline-block;'>" + val.evaluacion + "</td><td style='width: 280px; overflow: hidden; display: inline-block;'>" + val.nombreAlumno + "</td><td style='width: 230px; overflow: hidden; display: inline-block;'>" + val.nombreProfesor + "</td><td style='width: 100px; overflow: hidden; display: inline-block;'>" + val.fechaHoy + "</td><td style='overflow: hidden; display: inline-block;'><input id='" + val._id + "#G' data-target='#myModal' onclick='modificarVentana(this.id)' data-toggle='modal' type='button' value='MODIFICAR' style='float:right;'><input onclick='eliminarIncidencia(this.id)' id='" + val._id + "' type='button' value='ELIMINAR' style='float:right;'><input type='button' style='float:right;' data-toggle='modal' id='" + val._id + "#G' data-target='#myModal' onclick='realizaVisto(this.id)' value='CHECK' /></td></tr>");
  });

  $("<tbody/>", {
    "class": "list-group",
    html: items.join("")
  }).appendTo("#divListaLeveLista");
});


$.getJSON("http://localhost:3000/minionsG", function (data) {
  var items = [];
  $.each(data, function (key, val) {
    items.push("<tr class='list-group-item'><td style='width: 20px; overflow: hidden; display: inline-block;'>" + val.evaluacion + "</td><td style='width: 280px; overflow: hidden; display: inline-block;'>" + val.nombreAlumno + "</td><td style='width: 230px; overflow: hidden; display: inline-block;'>" + val.nombreProfesor + "</td><td style='width: 100px; overflow: hidden; display: inline-block;'>" + val.fechaHoy + "</td><td style='overflow: hidden; display: inline-block;'><input id='" + val._id + "#G' data-target='#myModal' onclick='modificarVentana(this.id)' data-toggle='modal' type='button' value='MODIFICAR' style='float:right;'><input onclick='eliminarIncidencia(this.id)' id='" + val._id + "' type='button' value='ELIMINAR' style='float:right;'><input type='button' style='float:right;' data-toggle='modal' id='" + val._id + "#G' data-target='#myModal' onclick='realizaVisto(this.id)' value='CHECK' /></td></tr>");
  });

  $("<tbody/>", {
    "class": "list-group",
    html: items.join("")
  }).appendTo("#divListaGravesLista");
});

function buscarFiltrosGrave() {
  var caja = document.getElementById("divBuscadorG");
  caja.innerHTML = "";
  caja.innerHTML = "<div>"
    + "<div class='filter-container'>"
    + "<input autocomplete='off' class='filter' name='name' placeholder='Nombre' data-col='name' />"
    + "</div>"
    + "<div class='filter-container'>"
    + "<select id='evalGrave' class='filter' name='evaluacion' data-col='evaluacion'>"
    + "<option selected>Selecciona Evaluacion</option>"
    + "<option value='1'>Primera</option>"
    + "<option value='2'>Segunda</option>"
    + "<option value='3'>Tercera</option>"
    + "</select>"
    + "</div>"
    + "<div class='clearfix'>"
    + "</div>";

}


function buscarFiltrosLeve() {
  var caja = document.getElementById("divBuscadorL");
  caja.innerHTML = "";
  caja.innerHTML = "<table width='20%' class='buscador'><tr><td style='padding-right: 10px'>"
    + "<input style='float:left' type='text' id='buscadorLeve' onkeyup='buscarLeve()' placeholder='       Buscar Nombre'>"
    + "</td></tr></table>"
    + "<select id='evalLeve' class='buscador' onchange='buscarEvaLeve()'>"
    + "<option selected>Selecciona Evaluacion</option>"
    + "<option value='1'>Primera</option>"
    + "<option value='2'>Segunda</option>"
    + "<option value='3'>Tercera</option>"
    + "</select>";
}

/*
            <div>
              <div class='filter-container'>
                <input autocomplete='off' class='filter' name='name' placeholder='Nombre' data-col='name' />
              </div>
              <div class='filter-container'>
                <select id='evalGrave' class='filter' name='evaluacion' data-col='evaluacion'>
                  <option selected>Selecciona Evaluacion</option>
                  <option value='1'>Primera</option>
                  <option value='2'>Segunda</option>
                  <option value='3'>Tercera</option>
                </select>
              </div>
              <div class='clearfix'>
              </div>


*/