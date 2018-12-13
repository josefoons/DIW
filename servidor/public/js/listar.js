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
    items.push("<li id='" + key + "' class='list-group-item'>" + val.nombreAlumno + " | " + val.nombreProfesor + " | " + val.fechaHoy +  "<input id='" + val._id + "' onclick='modificarL(this.id)' type='button' value='MODIFICAR' style='float:right;'><input onclick='eliminarIncidencia(this.id)' id='" + val._id + "' type='button' value='ELIMINAR' style='float:right;'><input type='button' style='float:right;' data-toggle='modal' id='" + val._id + "#L' data-target='#myModal' onclick='realizaVisto(this.id)' value='CHECK' /></li>");
  });

  $("<ul/>", {
    "class": "list-group",
    html: items.join("")
  }).appendTo("#divListaLeves");
});


$.getJSON("http://localhost:3000/minionsG", function (data) {
  var items = [];
  $.each(data, function (key, val) {
    items.push("<li id='" + key + "' class='list-group-item'>" + val.nombreAlumno + " | " + val.nombreProfesor + " | " + val.fechaHoy +  "<input id='" + val._id + "' onclick='modificarG(this.id)' type='button' value='MODIFICAR' style='float:right;'><input onclick='eliminarIncidencia(this.id)' id='" + val._id + "' type='button' value='ELIMINAR' style='float:right;'><input type='button' style='float:right;' data-toggle='modal' id='" + val._id + "#G' data-target='#myModal' onclick='realizaVisto(this.id)' value='CHECK' /></li>");
  });

  $("<ul/>", {
    "class": "list-group",
    html: items.join("")
  }).appendTo("#divListaGraves");
});


function modificarG(elemento) {
  location.href='http://localhost:3000/editar.html?' + elemento + "?G";
}

function modificarL(elemento) {
  location.href='http://localhost:3000/editar.html?' + elemento + "?L";
}

function checkG(elemento) {
  location.href='http://localhost:3000/visto.html?' + elemento + "?G";
}

function checkL(elemento) {
  location.href='http://localhost:3000/visto.html?' + elemento + "?L";
}