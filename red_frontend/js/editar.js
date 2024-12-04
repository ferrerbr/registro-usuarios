let d = document;
/**Bontones para guardar  y cancelar */
let $cancelar =d.getElementById('cancelar-button');
let $guardar  = d.getElementById("guardar-button")


/**Elementos que puedo editar de mi perfil */
let $profile_pic = d.getElementById("profile-pic");
let $botonFoto = d.getElementById("boton-foto");
let $inputFoto = d.getElementById("input-foto");
let $nombre = d.getElementById("nombre-nombre");
let $apellido = d.getElementById("nombre-apellido");
let $informacion =d.getElementById("informacion");
let $direccion = d.getElementById("informacion-direccion");
let $edad = d.getElementById("informacion-edad")


/**variable global para guardar la imagen en base 64 */
let base64String = undefined;

/**valores de los campos que se pueden editar 
let fotoEdit = $profile_pic.getAttribute("src");
let nombreEdit = $nombre.value;
let apellidoEdit = $apellido.value;
let informacionEdit = $informacion.value;
let direccionEdit = $direccion.value;
let edadEdit = $edad.value;
*/

/**Evento par el boton cancelar para validar si ha echo modificaciones o no *//** si no se han realizado cambios solo saldra de la pagina , pero si si ha realizado un cambio advertira al usuario que sus acmbios puedem perderse */
$cancelar.addEventListener('click', () => {

    fetch('../usuario1.json') /**obeten el  archivo del usuario */
        .then(response => {
            return response.json(); // Convertimos la respuesta a un objeto JSON
        })
        .then(data => { /**asignamos  la variable data al objeto que contiene la informacion del usuario */
                
                
            /**validaciones para saber si los datos han sido editados */
            booleanPic =Boolean($profile_pic.getAttribute("src") === data.profile_pic)

            booleanName =Boolean($nombre.value === data.nombre)

            booleanApellido =Boolean($apellido.value === data.apellido)

            booleanInformacion =Boolean($informacion.value === data.informacion)

            booleanDireccion =Boolean($direccion.value === data.direccion)

            booleanEdad =Boolean($edad.value === data.edad)
                
            /**si no se han realizado cambios la pagina redirigira al  perfil  */
            if(booleanPic && booleanName && booleanApellido && booleanInformacion && booleanDireccion && booleanEdad){
                window.location.href = './perfil.html';/**redireccion al perfil una vez que se ha dado click */
        
            }else{
                let salir = confirm("¿Esta seguro que deseas salir, NO SE GUARDARAN LOS CAMBIOS ?") /**si alguna se ha realizado alguna edicion  se infirmara que se poerderan los cambios  */
                if (salir) {/**si el usuario selecciono aceptar se redirigira a la pagina del perfil  */
                    window.location.href = './perfil.html';/**Redireccion a la pagina del perfil */
                }
            } 
        })
        .catch(error => { /**Manejo de errores, si se ha prpoducido un errror en al ejecucuion del then, se manejara el error */
            console.error('Hubo un problema al obtener el archivo JSON:', error);
        });
});

/**Evento de click al boto de editar para que se active el input file */
$botonFoto.addEventListener("click",()=>{
    $inputFoto.click();
})

/**Evento de cambio en el input para previsualizar la imagen cargada*/
$inputFoto.addEventListener("change",()=>{
    let file =$inputFoto.files[0]/** obtenemos el el primer archivo  */
    //console.log(file);
    if(file){
        let reader = new FileReader(file);
        reader.onload = (event)=> {
            $profile_pic.src = event.target.result;

            base64String = event.target.result.split(',')[1]; // Obtenemos la parte Base64
            //console.log(base64String);
            
            
            
        };
        reader.readAsDataURL(file);
        //cambioDeImagen = false;
    } 
})


/**Validaciones con  expresiones regulares  para verificar que los campos hayan sido llenados correctamente */
const validarNombre =()=>{
    const regexNombre = /^[a-zA-Z\s]{3,25}$/;/**expreion regular para validar la entrada solo de letras y espacios un numero de caracateres de entre 3 y 20 */
    if(regexNombre.test($nombre.value) ){
        $nombre.style.border = "2px solid #ccc"; /** si la expresion regular valida a verdad el color del borde del input se quedara igual que al inicio */
    }else{
        $nombre.style.border = "2px solid red"; /**si la expresion regualar valida a falso  se cambiara el color  del borde del input a rojo  */
    }
}

const validarApellido = ()=>{
    const regexApellido = /^[a-zA-Z\s]{2,25}$/;/**expreion regular para validar la entrada solo de letras y espacios un numero de caracateres de entre  y 10 */
    if(regexApellido.test($apellido.value) ){
        $apellido.style.border = "2px solid #ccc"; /** si la expresion regular valida a verdad el color del borde del input se quedara igual que al inicio */
    }else{
        $apellido.style.border = "2px solid red"; /**si la expresion regualar valida a falso  se cambiara el color  del borde del input a rojo  */
    }
}

const validarIformacion = ()=>{
    const regexInformacion =/^(?=.*[a-z])[\s\S]{20,400}$/ /**expreion regular para validar la entrada  de cualquier carcter incluyendo los espacion y saltos de linea y  un numero entre 20 y 400 */
    if(regexInformacion.test($informacion.value)){
        $informacion.style.border = "2px solid #ccc";   /** si la expresion regular valida a verdad el color del borde del input se quedara igual que al inicio */   
    }else{
        $informacion.style.border = "2px solid red"; /**si la expresion regualar valida a falso  se cambiara el color  del borde del input a rojo  */
    }
}

const validarDireccion = ()=>{
    const regexDireccion = /^[a-zA-Z0-9\s.,:]{5,50}$/; /**Expresion regular que valida la entrada de letra mayusculas y minusculas  numeros signos de puntuacion y un total de caracteres de entre 5 y 25 */
    if(regexDireccion.test($direccion.value) ){
        $direccion.style.border = "2px solid #ccc"; /** si la expresion regular valida a verdad el color del borde del input se quedara igual que al inicio */
    }else{
        $direccion.style.border = "2px solid red"; /**si la expresion regualar valida a falso  se cambiara el color  del borde del input a rojo  */
    }
}

const validarEdad = ()=>{
    const regexEdad = /^(1[7-9]|[2-9][0-9]|100)$/;/**Expresion regular que valida que solo obtenga numeros entre 17 y 100 incluyendo los extremos  */
    if(regexEdad.test($edad.value)) {
        $edad.style.border = "2px solid #ccc"; /** si la expresion regular valida a verdad el color del borde del input se quedara igual que al inicio */
    }else{
        $edad.style.border = "2px solid red"; /**si la expresion regualar valida a falso  se cambiara el color  del borde del input a rojo  */
    }
}

/**Eventos asignados a los inputs para que disparen las funciones de validacion cada que sean modificados  */
$nombre.addEventListener("input",()=>{
    validarNombre();
})
$apellido.addEventListener("input",()=>{
    validarApellido();
})
$informacion.addEventListener("input",()=>{
    validarIformacion();
})
$direccion.addEventListener("input",()=>{
    validarDireccion();
})
$edad.addEventListener("input",()=>{
    validarEdad();
})


/**Evento para cuando el usuario da click en el boton guardar, este validara que los campos tengan datos con el numero y tipo de caracteres correctos */
$guardar.addEventListener('click', () => {
        
    const ADTN3$sh54 = localStorage.getItem("loginUser");
    // Usamos fetch para cargar el archivo JSON 
    fetch(`http://localhost:8080/api/red/${ADTN3$sh54}`,{
        method : "GET",
        headers:{
            "Content-Type":"application/json"
        },
    })
    .then(response => {
        
        if (!response.ok) {
            throw new Error('no se pudo cargar la informacion del usuario ');/** si la repuesta es un status diferente al 200 enetonce manejara un nuevo error */
            window.location.href ="./perfil.html";
        }
        return response.json(); // Convertimos la respuesta a un objeto JSON
    })
    .then(data => {

        /**validaciones para saber si los datos han sido editados */
        let booleanPic = undefined;
        
        if (!data.fotoPerfil){
             booleanPic = true   
        }else{
            booleanPic = false
        }
            

        let booleanName = Boolean($nombre.value === data.nombre);

        let booleanApellido = Boolean($apellido.value === data.apellido);

        let booleanInformacion = Boolean($informacion.value === data.descripcion);

        let booleanDireccion = Boolean($direccion.value === data.direccion);

        let edad = new Date().getFullYear()-(data.fechaNacimiento.slice(0,4));
        let booleanEdad = Boolean(parseInt($edad.value)  === edad);
        
        
            

        /**Obtencion de el color del borde de cada uno de los inputs */
        let nombreBorder = (window.getComputedStyle($nombre)).getPropertyValue("border");
        let apellidoBorder = (window.getComputedStyle($apellido)).getPropertyValue("border");
        let informacionBorder = (window.getComputedStyle($informacion)).getPropertyValue("border");
        let direccionBorder = (window.getComputedStyle($direccion)).getPropertyValue("border");
        let edadBorder = (window.getComputedStyle($edad)).getPropertyValue("border");
            

        /**Validacion de  el color del borde  de cada uno de los inputs */
        let nombreCorrecto = Boolean(nombreBorder === "2px solid rgb(204, 204, 204)");
        let apellidoCorrecto = Boolean(apellidoBorder === "2px solid rgb(204, 204, 204)");
        let informacionCorrecto = Boolean(informacionBorder === "2px solid rgb(204, 204, 204)");
        let direcccionCorrecto = Boolean(direccionBorder === "2px solid rgb(204, 204, 204)");
        let edadCorrecto = Boolean(edadBorder === "2px solid rgb(204, 204, 204)");
       
        

        /**Validacion de cambios realizados */
        let validacionCambios =(booleanPic && booleanName && booleanApellido && booleanInformacion && booleanDireccion && booleanEdad)

         
        /**Validacion de todos los campos con caracteres correctos */
        let validacionCampos = (nombreCorrecto && apellidoCorrecto && informacionCorrecto && direcccionCorrecto && edadCorrecto);

        /**si no se han realizado cambios no se hara nada  */
        if(validacionCambios){
            alert("No se han realizado cambios") /**se avisara que no hay cambios que guardar */
        }else if(!validacionCampos){/**si se han ralizado cambios pero los campos tienen caracateres incorrectos  tampoco se hara nada y se mandara un aviso */
            alert("Revisa que todos los campos hayan sido llenados correctamente") /*se le indicara que llene los campos correctamente  */
        }else{/** si se han realiza cambios  se guardaran los cambios y se redigira a la pagina perfil */
            /**asignamos los nuevos datos editados a el objeto data */
            let nacimiento = new Date().getFullYear()-(parseInt($edad.value)) ;
            let newNacimiento = nacimiento + (data.fechaNacimiento).substring(4)
            
            
                 let userUpdate={
                    nombre: $nombre.value,
                    apellido: $apellido.value,
                    correo: data.correo,
                    contrasena: data.contrasena,
                    fechaNacimiento: newNacimiento,
                    direccion: $direccion.value,
                    fotoPerfil: "", 
                    descripcion: $informacion.value
                  }
                  
                  


                fetch(`http://localhost:8080/api/red/${ADTN3$sh54}`,{
                    method :"PUT",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(userUpdate)
                })
                .then(response=>{
                    alert("se guardara la informacion")
                    window.location.href = "./perfil.html"
                    

                })
                .catch(error =>{
                    alert("no fue posible completar la solicitud intentalo mas tarde")
                })
                
                //console.log(data); 
                //alert("se guardara la informacion")/**informacion al usuario de la informacion sera guardada */
                //window.location.href = './perfil.html';/**redireccion al perfil una vez que se ha dado click 
            
        } 

    })
    .catch(error => {/**manejo de error si se produce alguna anomalia durante la ejecucion de los then */
            console.error('Hubo un problema al obtener el archivo JSON:', error);
    }); 
});








const ADTN3$sh54 = localStorage.getItem("loginUser");
// Usamos fetch para cargar el archivo JSON 
fetch(`http://localhost:8080/api/red/${ADTN3$sh54}`,{
    method : "GET",
    headers:{
        "Content-Type":"application/json"
    },
})
  .then(response => {
    if (!response.ok) {
        throw new Error('no se pudo cargar la informacion del usuario ');/** si la repuesta es un status diferente al 200 enetonce manejara un nuevo error */
        window.location.href ="./perfil.html";
    }
    return response.json(); // Convertimos la respuesta a un objeto JSON
  })
  .then(data => {

    /** se cargaran los datos a los inputs para que el usuario pueda modificarlos */
    if (data.fotoPerfil){
        $profile_pic.src = data.fotoPerfil; //si el usuario cuanta con una foto de perfil la colocara 
    }else{
        $profile_pic.src ="../img/fotoperfil.jpg"//si el usuarion cuenta con una foto de perfil colocara una por defecto
    }
    
    $nombre.value = data.nombre;
    $apellido.value = data.apellido;
    if(data.descripcion === undefined){
        $informacion.value = ""; //si el usuario no cuenta con una descripcion , colocara una cadena vacia
    }else{
        $informacion.value = data.descripcion;// si el usuario cuanta con unformacion la cargara 
    }
    $direccion.value = data.direccion;

    let edad = data.fechaNacimiento.slice(0,4);// obtiene la fecha de nacimineto y recorta el año
    $edad.value = new Date().getFullYear()-edad;// resta el año de nacimiento al año en que nos encontraños actualmente
    

  })
  .catch(error => {
    console.error('Hubo un problema al obtener el archivo JSON:', error);
  });

