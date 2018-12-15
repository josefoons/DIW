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
    items.push("<li id='" + key + "' class='list-group-item'><span class='incidenciasLeve'>" + val.nombreAlumno + "</span> | " + val.nombreProfesor + " | " + val.fechaHoy + "<span class='evalLeve' style='visibility: hidden;'>" + val.evaluacion + "</span>" + "<input id='" + val._id + "#L' data-target='#myModal' onclick='modificarVentana(this.id)' data-toggle='modal' type='button' value='MODIFICAR' style='float:right;'><input onclick='eliminarIncidencia(this.id)' id='" + val._id + "' type='button' value='ELIMINAR' style='float:right;'><input type='button' style='float:right;' data-toggle='modal' id='" + val._id + "#L' data-target='#myModal' onclick='realizaVisto(this.id)' value='CHECK' /></li>");
  });

  $("<ul/>", {
    "class": "list-group",
    html: items.join("")
  }).appendTo("#divListaLeves");
});


$.getJSON("http://localhost:3000/minionsG", function (data) {
  var items = [];
  $.each(data, function (key, val) {//+ "<span class='incidenciasGrave'>" + val.nombreAlumno + "</span>
    items.push("<li id='" + key + "' class='list-group-item'><span class='incidenciasGrave'>" + val.nombreAlumno + "</span> | " +  val.nombreProfesor + " | " + val.fechaHoy + "<span class='evalGrave' style='visibility: hidden;'>" + val.evaluacion + "</span>" + "<input id='" + val._id + "#G' data-target='#myModal' onclick='modificarVentana(this.id)' data-toggle='modal' type='button' value='MODIFICAR' style='float:right;'><input onclick='eliminarIncidencia(this.id)' id='" + val._id + "' type='button' value='ELIMINAR' style='float:right;'><input type='button' style='float:right;' data-toggle='modal' id='" + val._id + "#G' data-target='#myModal' onclick='realizaVisto(this.id)' value='CHECK' /></li>");
  });

  $("<ul/>", {
    "class": "list-group",
    html: items.join("")
  }).appendTo("#divListaGraves");
});

function buscarGrave() {
  var input = document.getElementById("buscadorGrave");
  var filter = input.value.toLowerCase();
  var nodes = document.getElementsByClassName('incidenciasGrave');

  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].innerText.toLowerCase().includes(filter)) {
      nodes[i].parentNode.style.display = "block";
      //nodes[i].style.display = "block";
    } else {
      //nodes[i].style.display = "none";
      nodes[i].parentNode.style.display = "none";
    }
  }
}

function buscarLeve() {
  var input = document.getElementById("buscadorLeve");
  var filter = input.value.toLowerCase();
  var nodes = document.getElementsByClassName('incidenciasLeve');

  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].innerText.toLowerCase().includes(filter)) {
      nodes[i].parentNode.style.display = "block";
      //nodes[i].style.display = "block";
    } else {
      //nodes[i].style.display = "none";
      nodes[i].parentNode.style.display = "none";
    }
  }
}

function buscarEvaLeve() {
  var input = document.getElementById("evalLeve");
  var filter = input.value.toLowerCase();
  var nodes = document.getElementsByClassName('evalLeve');

  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].innerText.toLowerCase().includes(filter)) {
      nodes[i].parentNode.style.display = "block";
      //nodes[i].style.display = "block";
    } else {
      //nodes[i].style.display = "none";
      nodes[i].parentNode.style.display = "none";
    }
  }
}

function buscarEvaGrave() {
  var input = document.getElementById("evalLeve");
  var filter = input.value.toLowerCase();
  var nodes = document.getElementsByClassName('evalGrave');

  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].innerText.toLowerCase().includes(filter)) {
      nodes[i].parentNode.style.display = "block";
      //nodes[i].style.display = "block";
    } else {
      //nodes[i].style.display = "none";
      nodes[i].parentNode.style.display = "none";
    }
  }
}

function buscarFiltrosGrave() {
  var caja = document.getElementById("divBuscadorG");
  caja.innerHTML = "";
  caja.innerHTML = "<table width='20%' class='buscador'><tr><td style='padding-right: 10px'>" 
  + "<input style='float:left' type='text' id='buscadorGrave' onkeyup='buscarGrave()' placeholder='       Buscar Nombre'>"
  + "</td></tr></table>"
  + "<select id='evalGrave' class='buscador' onchange='buscarEvaGrave()'>"
  + "<option selected>Selecciona Evaluacion</option>"
  + "<option value='1'>Primera</option>"
  + "<option value='2'>Segunda</option>"
  + "<option value='3'>Tercera</option>"
  + "</select>";

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