// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variables globales

let amigo ;
let nombreAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo   () {  
    // Obtiene el valor del input
    amigo = document.getElementById("amigo").value;
    console.log(amigo);
    // Validación: si el campo está vacío, muestra una alerta
    if (amigo === ""){
        alert("Ingrese un nombre porfavor");
    }else{
        nombreAmigos.push(amigo);
        document.getElementById("amigo").value = ""
        document.querySelector("#amigo").placeholder = "Ingrese un nombre"
        console.log(nombreAmigos)
    };
    // Llama a la función que actualiza la lista en la interfaz
    listaDeAmigos();
    return
};

// Función para mostrar los amigos en la lista en la interfaz

function listaDeAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    // Itera sobre el array de amigos y crea un <li> para cada amigo
    for (let i = 0; i < nombreAmigos.length; i++){
        let li = document.createElement("li");
        li.textContent = nombreAmigos[i];
        lista.appendChild(li);
    };
    return
};

// Función para sortear un amigo de manera aleatoria

function sortearAmigo(){
    // Verifica si hay amigos en la lista
    if (nombreAmigos.length === 0){
        alert("No hay más amigos para sorterar");
        return;
    }
    // Genera un índice aleatorio entre 0 y el tamaño del array

    let indiceAleatorio = Math.floor(Math.random() * nombreAmigos.length);
    // Selecciona el amigo sorteado usando el índice aleatorio

    let amigoSorteado = nombreAmigos[indiceAleatorio];
    // Muestra el amigo sorteado en la interfaz

    document.getElementById("resultado").innerHTML = `<li>${amigoSorteado}</li>`;
}
