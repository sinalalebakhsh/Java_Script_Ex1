var list_names = ['sina', 'mina', 'lina', 'bina'];

var element = document.getElementById('result');

var list_names_static = list_names[0] + " <br/>";
list_names_static += list_names[1] + " <br/>";
list_names_static += list_names[2] + " <br/>";
list_names_static += list_names[3] + " <br/>";

element.innerHTML = list_names_static;