let uri="https://accounts.spotify.com/api/token";

let dato1="grant_type=client_credentials";
let dato2="client_id=a78ed21163754b4db6cec7d7c8b5cb5f";
let dato3= "client_secret=517ddc44a8fa4febbc62516e5b7079e8";

// se crean paratametros de la aplicación

let parametrosPeticion={

    method: "POST",
    headers:{
        "Content-Type": "application/x-www-form-urlencoded"//atributo y valor
    },

    body:dato1+"&"+dato2+"&"+dato3
   // body: `${dato1}&$ {dato2}& $ {dato3}`
}

fetch(uri, parametrosPeticion)
.then(function(respuesta){
return (respuesta.json())
})

.then(function(respuesta){
    console.log(respuesta)
    obtenerToquen(respuesta)// Utilizar Token
})

.catch(function(error){ 
    console.log (error)
})

function obtenerToquen (datos){

    let toquen= datos.token_type+ " "+ datos.access_token
    console.log (toquen)
    pedirCanciones(toquen)
}

function pedirCanciones(token){

    let uri = "https://api.spotify.com/v1/artists/60d24wfXkVzDSfLS6hyCjZ/top-tracks?market=US";// uri de servicios

    // parametros para pedir canciones se de servicios
let parametrosPeticion={

    
    method : "GET",
    headers : {
        Authorization : token
    }
}
// traigo fetch de servicios
fetch(uri,parametrosPeticion)
.then(function (respuesta) {
   return( respuesta.json());
})
.then(function(respuesta) {
    console.log(respuesta);//objeto
    pintarDatos(respuesta.tracks); 
})
.catch(function(error) {
    console.log(error);
})

}

function pintarDatos(datos){
    let fila = document.getElementById("fila");
    datos.forEach(function (cancion) {
        let columna = document.createElement("div");
        columna.classList.add("col");
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card");
        tarjeta.classList.add("h-100");
        let imagen = document.createElement("img");
        imagen.classList.add("card-img-top");
        imagen.src=cancion.album.images[0].url;
        let cuerpo = document.createElement("div");
        cuerpo.classList.add("card-body");
        let titulo = document.createElement("h5");
        titulo.classList.add("card-title");
        titulo.innerHTML = cancion.name;
        let descripcion = document.createElement("p");
        descripcion.classList.add("card-text");
        descripcion.innerHTML = cancion.name;
        let pieCarta = document.createElement("div");
        pieCarta.classList.add("card-footer");
        
        // CREAR UN AUDIO

        let audio = document.createElement("audio");        
        audio.classList.add("w-100");
        audio.setAttribute("controls","controls");// Propiedad para control
        audio.src=cancion.preview_url;
        
        
        // PADRES E HIJOS-> el elemento mas externo
        // Se empieza de adentro a afuera, comenzando por la imagen porque es lo que van en el centro
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(descripcion);
        tarjeta.appendChild(pieCarta);
        pieCarta.appendChild(audio);
        columna.appendChild(tarjeta);
        imagen.appendChild(cuerpo);
        fila.appendChild(columna);

    });
}