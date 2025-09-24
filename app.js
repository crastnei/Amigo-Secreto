// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];


function agregarAmigo() {
  const campo = document.getElementById("amigo");
  const nombre = campo.value.trim();


  if (nombre === "") {
    alert("Por favor ingresa el nombre de tu amigo. No se permite dejar el campo en blanco.");
    return;
  }


  if (!isNaN(nombre)) {
    alert("Por favor ingresa un nombre válido, no se permiten números.");
    limpiarCampo();
    return;
  }


  if (amigos.includes(nombre)) {
    alert(`El amigo "${nombre}" ya está registrado, intenta con otro.`);
    limpiarCampo();
    return;
  }


  amigos.push(nombre);


  limpiarCampo();
  imprimirLista();
}


function imprimirLista() {
  const listado = document.getElementById("listaAmigos");
  listado.innerHTML = ""; 

  for (let amigo of amigos) {
    listado.innerHTML += `<li>${amigo}</li>`;
  }
}


function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debes registrar al menos 2 amigos para poder sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${ganador}</strong></li>`;
}


function limpiarCampo() {
  document.getElementById("amigo").value = "";
}
