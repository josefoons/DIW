
var incidencia_current="";
var link = window.location.href;
var listaCamposValidos = ["nombreAlumno", "grupoAlumno", "nombreProfesor", "horarioProfesor", "descripcionIncidente", "telefonoPadres", "emailPadres"];


function realiza() {
    $.getJSON( getLink(), function (data) {
    var items = [];
    $.each(data, function (key, val) {
        if(listaCamposValidos.includes(key)){
            if(key == "descripcionIncidente") {
                items.push("<label id='labelTag'>" + key + "</label><textarea id='" + key + "' class='form-control' name='" + key + "' oninput='update(\""+ key +"\")'>" + val + "</textarea> <br>");
            } else {
                items.push("<label id='labelTag'>" + key + "</label><input id='" + key + "' class='form-control' name='" + key + "' value='" + val + "' oninput='update(\""+ key +"\")'></input> <br>");
            }
        }
    });
    incidencia_current=data;
    $("<div/>", {
        html: items.join("")
    }).appendTo("#lista");
});
}

/* function realiza() {
    $.getJSON( getLink(), function (data) {
    var items = [];
    $.each(data, function (key, val) {
        if(listaCamposValidos.includes(key)){
            if(key == "descripcionIncidente") {
                items.push("<label id='labelTag'>" + key + "</label><textarea id='" + key + "' class='form-control' name='" + key + "'>" + val + "</textarea><input type='button' style='float: right;' value='UPDATE' onclick='update(\""+ key +"\")'> <br>");
            } else {
                items.push("<label id='labelTag'>" + key + "</label><input id='" + key + "' class='form-control' name='" + key + "' value='" + val + "'></input><input type='button' style='float: right;' value='UPDATE' onclick='update(\""+ key +"\")'> <br>");
            }
        }
    });
    incidencia_current=data;
    $("<div/>", {
        html: items.join("")
    }).appendTo("#lista");
});
} */

function update(nombreCampo) {
    var nombre = document.getElementById(nombreCampo).value;
    
    incidencia_current[nombreCampo] = nombre;

    $.ajax({
      type: "PUT",
      url: getLink(),
      data: incidencia_current,
      success: function (msg) {
        location.reload;
      }
    });
}

function getLink() {
    var array = link.split("?");
    var nuestraID = array[1];
    var tipo = array[2];

    if(tipo == "G"){
        return "http://localhost:3000/minionsG/" + nuestraID;
    } else {
        return "http://localhost:3000/minionsL/" + nuestraID;
    }

}