$.getJSON("http://localhost:3000/minionsL", function (data) {
  var items = [];
  $.each(data, function (key, val) {
    console.log(key);
    items.push("<tr><td> " + val.nombreAlumno + "</td></tr>");
  });


  $("<table/>", {
    "class": "table table-striped table-dark",
    html: items.join("")
  }).appendTo("#divListaLeves");
});


$.getJSON("http://localhost:3000/minionsG", function (data) {
  var items = [];
  $.each(data, function (key, val) {
    console.log(key);
    items.push("<li id='" + key + "' class='list-group-item'>" + val.nombreAlumno + "</li>");
  });

  $("<ul/>", {
    "class": "list-group",
    html: items.join("")
  }).appendTo("#divListaGraves");
});
