
var incidencia_current="";
var link = window.location.href;

function realiza() {
    $.getJSON( getLink(), function (data) {
    var items = [];
    $.each(data, function (key, val) {
        if(key == "nombreAlumno"){
            items.push("<label id='labelTag'>" + key + "</label><input id='nombre' name='" + key + "'value='" + val + "'></input> <input type='button' value='Update' onclick='update()'><br>");
        }

    });
    incidencia_current=data;
    $("<div/>", {
        html: items.join("")
    }).appendTo("#lista");
});
}

function update() {
    var nombre = document.getElementById("nombre").value;
    incidencia_current.nombreAlumno = nombre;

    $.ajax({
      type: "PUT",
      url: getLink(),
      //hacer esto
      data: incidencia_current,
      success: function (msg) {
        location.reload;
      }
    });
    setTimeout(() => {
      location.href = "./listar.html";
    }, 100);
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