let d = document;
let $logout =d.getElementById('logout-button');
let $menu = d.getElementById("menu-hamburguesa");
// let $menuDesplegado = d.getElementById("eliminar-editar");  deprecada

let $eliminar = d.getElementById("eliminar-cuenta");
let $editar = d.getElementById("editar-info");
let $triangulo = d.getElementById("triangulo")
let $box = d.getElementById("cuadro-azul");
let $rectanguloP = d.getElementById("menu-menu")

/**Elementos del dom que cargaran informacion del usuario */
let $profile_pic = d.getElementById("profile-pic");
let $nombre = d.getElementById("nombre-apellido");
let $informacion =d.getElementById("informacion");
let $direccion = d.getElementById("informacion-direccion");
let $edad = d.getElementById("informacion-edad")

/**Evento del tipo click a el boton logout */
$logout.addEventListener('click', () => {
  let salir = confirm("¿Esta seguro que deseas salir?")/** le envia un aviso al usuario para preguntarle si desea salir  */
  if (salir) {/** si la respuesta es si, lo redirigira a otra pagina si la respuesta es no , entonces no hara nada */
    localStorage.removeItem("loginUser");

    window.location.href = '../index.html';/**cuando el ususario de click en acepar se redirigira a la pagian de inicio de sesion */
  }
});

/**Evento del tipo mouseenter al boton de menu desplegable */
$menu.addEventListener("mouseenter", () => {
  /**mostrara los botones de editar un eliminar */
  $eliminar.style.display = "block";
  $editar.style.display = "block";
  $rectanguloP.style.display = "block";
  /**girara el tiagulo que hay en el interiro del boton de menu */
  $triangulo.style.transform = "rotate(-360deg)";
  $triangulo.style.transition = "transform 0.5s ease";
});

/**Evento de mouse enter para cuando el mouse toque el area de pefil el menu desaparezca */
$box.addEventListener("mouseenter",()=>{
  /**dejar de mostrar en la pantalla el menu */
  $eliminar.style.display = "none"
  $editar.style.display = "none"
  $rectanguloP.style.display = "none"
  /**rotar el triangulo del menu a su posicion originar */
  $triangulo.style.transform = "rotate(-180deg)";
  $triangulo.style.transition = "transform 0.5s ease";
});

/**evento de mouse enter para cuando el puntero toqe el botn de salir el menu desaparezca */
$logout.addEventListener("mouseenter",()=>{
  /**dejar de mostar en la pantalla el menu */
  $eliminar.style.display = "none";
  $editar.style.display = "none";
  $rectanguloP.style.display = "none";
  /**Rotar el triagulo del menu a su posicion original */
  $triangulo.style.transform = "rotate(-180deg)";
  $triangulo.style.transition = "transform 0.5s ease";
})

/**Evento del tipo clic en el boton eliminar */
$eliminar.addEventListener("click",()=>{
    window.location.href = './eliminar.html'; /** cuando el usuario presione eliminar se redirigira a la pagina de eliminar */
})
/**Evento del tipo clik en el boton editar */
$editar.addEventListener("click",()=>{
    window.location.href = "./editar.html"/** cuando el usuario presion eliminar se redirigira a la pagina de edicion de los datos */
})

/**Cargar informacion del ususario  */
const ADTN3$sh54 = localStorage.getItem("loginUser");
console.log(ADTN3$sh54);

// Usamos fetch para cargar el archivo JSON
fetch(`http://localhost:8080/api/red/${ADTN3$sh54}`,{
  method: "GET",
  Headers:{
    "Content.Type":"application/json"
  }

}) /** pide el archivo usuario 1 */
  .then(response => {
    if (!response.ok) {
      throw new Error('no se pudo cargar la informacion del usuario ');/** si la repuesta es un status diferente al 200 enetonce manejara un nuevo error */
      window.location.href ="../index.html";
    }
    return response.json(); // Convertimos la respuesta a un objeto JSON
  })
  .then(data => { /** asignamos el nombre data a el objeto que contiene la informacion de mi usuario */
    console.log(data);  // Imprime el contenido del JSON

    // Accediendo a los datos del usuario y los asignamos a las partes de la pagina donde deberian estar 
  
    let nombreCompleto = data.nombre + " " + data.apellido/** unimos el nombre y el apellido para colocarlo en el la misma etiqueta <p> */
    $nombre.textContent = nombreCompleto;
    $informacion.textContent = data.descripcion;
    $direccion.textContent ="Direccion: " + data.direccion;
    let edad = new Date().getFullYear()-(data.fechaNacimiento.slice(0,4));
    $edad.textContent = "Edad: " + edad;

   
    if (data.fotoPerfil){
      $profile_pic.src = data.fotoPerfil;

    }else{
      $profile_pic.src ="../img/fotoperfil.jpg"
    }

  })
  .catch(error => {
    console.error('Hubo un problema al obtener el archivo JSON:', error);/** si hubo errores al acceder el archivo JSON entonces se ejecutaran los errores */
  });
