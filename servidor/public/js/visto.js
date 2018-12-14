var incidencia_current = "";
var idMinion = "";
var tipo = "";
var listaCamposValidosV = ["vistoTutor", "vistoOrientadora", "vistoJefeEstudios", "vistoConvivencia", "habladoFamilia"];
var listaCamposValidos = ["nombreAlumno", "grupoAlumno", "nombreProfesor", "horarioProfesor", "descripcionIncidente", "telefonoPadres", "emailPadres"];


function modificarVentana(id) {
    document.getElementById("listaCheck").innerHTML = "";
    var total = id.split("#");
    idMinion = total[0];
    tipo = total[1];

    $.getJSON( getLinkCheck(), function (data) {
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
    }).appendTo("#listaCheck");
});
}

function realizaVisto(id) {
    document.getElementById("listaCheck").innerHTML = "";
    var total = id.split("#");
    idMinion = total[0];
    tipo = total[1];

    $.getJSON(getLinkCheck(), function (data) {
        var items = [];
        $.each(data, function (key, val) {
            if (listaCamposValidosV.includes(key)) {
                if (tipo == "L") {

                    switch (key) {
                        case "vistoTutor":
                            if (val == true) {
                                items.push("<label><input style='margin-right: 10px;' id='" + key + "' onchange='updateCheck(\"" + key + "\")' type='checkbox'  name='" + key + "' checked></input>Visto por el Tutor</label>")
                            } else {
                                items.push("<label><input style='margin-right: 10px;' id='" + key + "' onclick='updateCheck(\"" + key + "\")' type='checkbox'  name='" + key + "'></input>Visto por el Tutor</label>")
                            }
                            break;
                        case "vistoOrientadora":
                            if (val == true) {
                                items.push("<label><input style='margin-right: 10px;' id='" + key + "' onchange='updateCheck(\"" + key + "\")' type='checkbox'  name='" + key + "' checked></input>Visto por el Orientador</label>")
                            } else {
                                items.push("<label><input style='margin-right: 10px;' id='" + key + "' onclick='updateCheck(\"" + key + "\")' type='checkbox'  name='" + key + "'></input>Visto por el Orientador</label>")
                            }
                            break;
                        case "vistoJefeEstudios":
                            if (val == true) {
                                items.push("<label><input style='margin-right: 10px;' id='" + key + "' onchange='updateCheck(\"" + key + "\")' type='checkbox'  name='" + key + "' checked></input>Visto por el/la Jefe/a de Estudios</label>")
                            } else {
                                items.push("<label><input style='margin-right: 10px;' id='" + key + "' onchange='updateCheck(\"" + key + "\")' type='checkbox'  name='" + key + "'></input>Visto por el/la Jefe/a de Estudios</label>")
                            }
                            break;
                        case "vistoConvivencia":
                            if (val == true) {
                                items.push("<label><input style='margin-right: 10px;' id='" + key + "' onchange='updateCheck(\"" + key + "\")' type='checkbox'  name='" + key + "' checked></input>Visto por el/la profesor/a de Convivencia</label>")
                            } else {
                                items.push("<label><input style='margin-right: 10px;' id='" + key + "' onchange='updateCheck(\"" + key + "\")' type='checkbox'  name='" + key + "'></input>Visto por el/la profesor/a de Convivencia</label>")
                            }
                            break;
                        case "habladoFamilia":
                            items.push("<hr>");
                            if (val == true) {
                                items.push("<label><input style='margin-right: 10px;' id='" + key + "' onchange='updateCheck(\"" + key + "\")' type='checkbox'  name='" + key + "' checked></input>Hablado con Familia</label>")
                            } else {
                                items.push("<label><input style='margin-right: 10px;' id='" + key + "' onchange='updateCheck(\"" + key + "\")' type='checkbox'  name='" + key + "'></input>Hablado con Familia</label>")
                            }
                            break;
                    }
                } else {
                    if (tipo == "G") {
                        switch (key) {
                            case "vistoTutor":
                                if (val == true) {
                                    items.push("<label><input style='margin-right: 10px;' id='" + key + "' onchange='updateCheck(\"" + key + "\")' type='checkbox'  name='" + key + "' checked></input>Visto por el/la Tutor/a</label>")
                                } else {
                                    items.push("<label><input style='margin-right: 10px;' id='" + key + "' onclick='updateCheck(\"" + key + "\")' type='checkbox'  name='" + key + "'></input>Visto por el/la Tutor/a</label>")
                                }
                                break;
                            case "vistoOrientadora":
                                if (val == true) {
                                    items.push("<label><input style='margin-right: 10px;' id='" + key + "' onchange='updateCheck(\"" + key + "\")' type='checkbox'  name='" + key + "' checked></input>Visto por el/la Orientador/a</label>")
                                } else {
                                    items.push("<label><input style='margin-right: 10px;' id='" + key + "' onclick='updateCheck(\"" + key + "\")' type='checkbox'  name='" + key + "'></input>Visto por el/la Orientador/a</label>")
                                }
                                break;
                            case "vistoJefeEstudios":
                                if (val == true) {
                                    items.push("<label><input style='margin-right: 10px;' id='" + key + "' onchange='updateCheck(\"" + key + "\")' type='checkbox'  name='" + key + "' checked></input>Visto por el/la Jefe/a de Estudios</label>")
                                } else {
                                    items.push("<label><input style='margin-right: 10px;' id='" + key + "' onchange='updateCheck(\"" + key + "\")' type='checkbox'  name='" + key + "'></input>Visto por el/la Jefe/a de Estudios</label>")
                                }
                                break;
                            case "vistoConvivencia":
                                if (val == true) {
                                    items.push("<label><input style='margin-right: 10px;' id='" + key + "' onchange='updateCheck(\"" + key + "\")' type='checkbox'  name='" + key + "' checked></input>Visto por el/la profesor/a de Convivencia</label>")
                                } else {
                                    items.push("<label><input style='margin-right: 10px;' id='" + key + "' onchange='updateCheck(\"" + key + "\")' type='checkbox'  name='" + key + "'></input>Visto por el/la profesor/a de Convivencia</label>")
                                }
                                break;
                            case "habladoFamilia":
                                items.push("<hr>");
                                if (val == true) {
                                    items.push("<label><input style='margin-right: 10px;' id='" + key + "' onchange='updateCheck(\"" + key + "\")' type='checkbox'  name='" + key + "' checked></input>Hablado con Familia</label>")
                                } else {
                                    items.push("<label><input style='margin-right: 10px;' id='" + key + "' onchange='updateCheck(\"" + key + "\")' type='checkbox'  name='" + key + "'></input>Hablado con Familia</label>")
                                }
                                break;
                        }
                    }
                }
                items.push("<br>");
            }
        });
        incidencia_current = data;

        $("<div/>", {
            html: items.join("")
        }).appendTo("#listaCheck");
    });
}

function updateCheck(nombreCampo) {

    incidencia_current[nombreCampo] = document.getElementById(nombreCampo).checked;

    $.ajax({
        type: "PUT",
        url: getLinkCheck(),
        data: incidencia_current,
        success: function (msg) {
            location.reload;
        }
    });
}

function update(nombreCampo) {
    var nombre = document.getElementById(nombreCampo).value;
    incidencia_current[nombreCampo] = nombre;

    $.ajax({
      type: "PUT",
      url: getLinkCheck(),
      data: incidencia_current,
      success: function (msg) {
        location.reload;
      }
    });
}

function getLinkCheck() {

    var nuestraID = idMinion;

    if (tipo == "G") {
        return "http://localhost:3000/minionsG/" + nuestraID;
    } else {
        return "http://localhost:3000/minionsL/" + nuestraID;
    }

}
