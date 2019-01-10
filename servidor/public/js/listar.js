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
    items.push("<tr class='list-group-item'><td style='width: 20px; overflow: hidden; display: inline-block;'>" + val.evaluacion + "</td><td style='width: 290px; overflow: hidden; display: inline-block;'>" + val.nombreAlumno + "</td><td style='width: 240px; overflow: hidden; display: inline-block;'>" + val.nombreProfesor + "</td><td style='width: 120px; overflow: hidden; display: inline-block;'>" + val.fechaHoy + "</td><td style='overflow: hidden; display: inline-block;'><input id='" + val._id + "#L' data-target='#myModal' onclick='modificarVentana(this.id)' data-toggle='modal' type='button' value='MODIFICAR' style='float:right;'><input onclick='eliminarIncidencia(this.id)' id='" + val._id + "' type='button' value='ELIMINAR' style='float:right;'><input type='button' style='float:right;' data-toggle='modal' id='" + val._id + "#L' data-target='#myModal' onclick='realizaVisto(this.id)' value='CHECK' /></td></tr>");
  });

  $("<tbody/>", {
    "class": "list-group",
    html: items.join("")
  }).appendTo("#divListaLeveLista");
});


$.getJSON("http://localhost:3000/minionsG", function (data) {
  var items = [];
  $.each(data, function (key, val) {
    items.push("<tr class='list-group-item'><td style='width: 20px; overflow: hidden; display: inline-block;'>" + val.evaluacion + "</td><td style='width: 290px; overflow: hidden; display: inline-block;'>" + val.nombreAlumno + "</td><td style='width: 240px; overflow: hidden; display: inline-block;'>" + val.nombreProfesor + "</td><td style='width: 120px; overflow: hidden; display: inline-block;'>" + val.fechaHoy + "</td><td style='overflow: hidden; display: inline-block;'><input id='" + val._id + "#G' data-target='#myModal' onclick='modificarVentana(this.id)' data-toggle='modal' type='button' value='MODIFICAR' style='float:right;'><input onclick='eliminarIncidencia(this.id)' id='" + val._id + "' type='button' value='ELIMINAR' style='float:right;'><input type='button' style='float:right;' data-toggle='modal' id='" + val._id + "#G' data-target='#myModal' onclick='realizaVisto(this.id)' value='CHECK' /></td></tr>");
  });

  $("<tbody/>", {
    "class": "list-group",
    html: items.join("")
  }).appendTo("#divListaGravesLista");
});
