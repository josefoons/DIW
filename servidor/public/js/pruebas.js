function realiza() {
    $.getJSON("http://localhost:3000/minionsG/5bfec45d5db3db12e6fcd3a5", function (data) {
    var items = [];
    $.each(data, function (key, val) {
        //Hacer un if para lo que yo quiera
        if(key == "nombreAlumno"){
            items.push("<label id='labelTag'>" + key + "</label><input id='nombre' name='" + key + "'value='" + val + "'></input> <input type='button' value='Update' onclick='update()'><br>");
        }
    });
    $("<div/>", {
        html: items.join("")
    }).appendTo("#lista");
});
}

function update() {
    var nombre = document.getElementById("nombre").value;
    $.ajax({
      type: "PUT",
      url: "http://localhost:3000/minionsG/5bfec45d5db3db12e6fcd3a5",
      //hacer esto
      data: JSON.stringify({nombreAlumno: nombre}),
      success: function (msg) {
        location.reload();
      }
    });
    setTimeout(() => {
      location.reload();
    }, 100);
  }