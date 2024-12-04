
/**Inputs */
let d = document;
let $nombre = d.getElementById("name");
let $apellido =d.getElementById("lastname");
let $mail = d.getElementById("email")
let $constrasena= d.getElementById("password");
let $contrasenaConfirm = d.getElementById("password-confirm");
let $fechaNacimiento = d.getElementById("birthday");
let $direccion = d.getElementById("addres");
let $registrar =d.getElementById("registrar");

/**SPAN */
let $spanNombre = d.getElementById("span-nombre");
let $spanApellido = d.getElementById("span-apellido");
let $spanEmail = d.getElementById("span-email");
let $spanContrasena = d.getElementById("span-contrasena");
let $spanConfirmar = d.getElementById("span-confirmar");
let $spanFecha = d.getElementById("span-fecha");
let $spanDireccion = d.getElementById("span-direccion")

/**Validacion para datos correctos deacuerdo a los requerimientos */
let envioNombre = false;
let envioApellido = false ;
let envioEmail = false;
let envioPassword = false;
let envioPassword2 = false;
let envioFecha = false;
let envioDireccion = false;



/**Funcion para validar nombre el el formato correcto */
const validacionTexto = ()=>{
    const regex1 = /^[a-zA-Z\s]{2,25}$/; /**expreion regular para validar la entrada solo de letras y espacios */
    let nombreD = $nombre.value;
    
    if($nombre.value ===""){
        $spanNombre.textContent =".";
        $spanNombre.style.color = "#ABC4FF;";
        envioNombre = false;

    
    }else if(regex1.test(nombreD)){
        $spanNombre.textContent ="campo completado"; /**Cambia el contenido del span */
        $spanNombre.style.color = "green";
        envioNombre =true;

    }else{
        $spanNombre.textContent ="Ingresa solo Letras";
        $spanNombre.style.color = "red";
        envioNombre =false;

    }
}

const validacionTextoA = ()=>{
    const regex1 = /^[a-zA-Z\s]{2,25}$/;; /**expreion regular para validar la entrada solo de letras y espacios */
    let apellidoD = $apellido.value;
    
    if($apellido.value ===""){
        $spanApellido.textContent =".";
        $spanApellido.style.color = "#ABC4FF";
        envioApellido = false;
    
    }else if(regex1.test(apellidoD)){
        $spanApellido.textContent ="campo completado"; /**Cambia el contenido del span */
        $spanApellido.style.color = "green";
        envioApellido =true;

    }else{
        $spanApellido.textContent ="Ingresa solo Letras";
        $spanApellido.style.color = "red";
        envioApellido =false;

    }
}

const validacionCorreo = ()=>{
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,25}$/;  /**expreion regular para validar la entrada solo de letras y espacios */
    let  mailD=$mail.value;
    
    
    if($mail.value ===""){
        $spanEmail.textContent =".";
        $spanEmail.style.color = "#ABC4FF";
        envioEmail = false;
    
    }else if(regexEmail.test(mailD)){
        $spanEmail.textContent ="campo completado"; /**Cambia el contenido del span */
        $spanEmail.style.color = "green";
        envioEmail =true;

    }else{
        $spanEmail.textContent ="Ingresa un correo con el formato ejemplo@mail.com";
        $spanEmail.style.color = "red";
        envioEmail =false;

    }
}

const validacionContrasena = ()=>{
    const regexContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/; /**expreion regular para validar la entrada solo de letras y espacios */
    let  contrasenaD=$constrasena.value;
    
    if($constrasena.value ===""){
        $spanContrasena.textContent =".";
        $spanContrasena.style.color = "#ABC4FF";
        envioPassword = false;
    
    }else if(regexContraseña.test(contrasenaD)){
        $spanContrasena.textContent ="campo completado"; /**Cambia el contenido del span */
        $spanContrasena.style.color = "green";
        envioPassword =true;

    }else{
        $spanContrasena.textContent ="Incluir letras mayusculas, minusculas y numeros";
        $spanContrasena.style.color = "red";
        envioPassword =false;

    }
}
const validacionConfirmar = ()=>{
    let  contrasenaCD=$contrasenaConfirm.value;

    
    if($contrasenaConfirm.value ===""){
        $spanConfirmar.textContent =".";
        $spanConfirmar.style.color = "#ABC4FF";
        envioPassword2 = false;
    
    }else if(contrasenaCD === $constrasena.value){
        $spanConfirmar.textContent ="campo completado"; /**Cambia el contenido del span */
        $spanConfirmar.style.color = "green";
        envioPassword2 =true;

    }else{
        $spanConfirmar.textContent ="las contraseñas no coinciden";
        $spanConfirmar.style.color = "red";
        envioPassword2 =false;

    }
}
const validacionFecha= ()=>{
    let  fechaNacimientoD=$fechaNacimiento.value;
    //console.log(fechaNacimientoD);
    let year =parseInt(fechaNacimientoD.slice(0,4))
    //console.log(year);
    let edad =((new Date()).getFullYear()-year)
    //console.log(edad);
 
    
    
    
    if($fechaNacimiento.value ===""){
        $spanFecha.textContent =".";
        $spanFecha.style.color = "#ABC4FF";
        envioFecha = false;
    
    }else if(edad >= 17){
        $spanFecha.textContent ="campo completado"; /**Cambia el contenido del span */
        $spanFecha.style.color = "green";
        envioFecha = true;

    }else{
        $spanFecha.textContent ="Debes ser mayor de edad ";
        $spanFecha.style.color = "red";
        envioFecha = false;

    }
}

const validacionDireccion = ()=>{
    const regexDireccion = /^[a-zA-Z0-9\s.,:]{5,50}$/; /**expreion regular para validar la entrada solo de letras y espacios */
    let direccionD = $direccion.value;

    
    if($direccion.value ===""){
        $spanDireccion.textContent =".";
        $spanDireccion.style.color = "#ABC4FF;";
        envioDireccion = false;

    
    }else if(regexDireccion.test(direccionD)){
        $spanDireccion.textContent ="campo completado"; /**Cambia el contenido del span */
        $spanDireccion.style.color = "green";
        envioDireccion = true;

    }else{
        $spanDireccion.textContent ="Ingresa una direccion valida";
        $spanDireccion.style.color = "red";
        envioDireccion = false;

    }
}


$nombre.addEventListener("input",()=>{
         validacionTexto();
    
   
})

$apellido.addEventListener("input",()=>{
    validacionTextoA();

})

$mail.addEventListener("input",()=>{
    validacionCorreo();

})

$constrasena.addEventListener("input",()=>{
    validacionContrasena();

})

$contrasenaConfirm.addEventListener("input",()=>{
    validacionConfirmar();

})

$fechaNacimiento.addEventListener("input",()=>{
    validacionFecha();

})

$direccion.addEventListener("input",()=>{
    validacionDireccion();

})

      
/**Evento de click en el botonn Registrar  */
$registrar.addEventListener("click",(event)=>{
    
    console.log(envioNombre && envioApellido && envioEmail && envioPassword && envioPassword2 && envioFecha && envioDireccion);
    console.log("hola mundo");
    
    if (!(envioNombre && envioApellido && envioEmail && envioPassword && envioPassword2 && envioFecha && envioDireccion) ) {
        console.log("vacio");
        
        
        
    }else{
        event.preventDefault();
        console.log("llno");
        
        /**Extra el los valores de los inputs */
        let nombreD = $nombre.value;
        let apellidoD =$apellido.value;
        let mailD = $mail.value;
        let contrasenaD = $constrasena.value;
        
        let fechaNacimientoD = $fechaNacimiento.value;
        let direccionD = $direccion.value;

        //crea el objeto usuario
        const usuario ={
            nombre:nombreD,
            apellido:apellidoD,
            correo:mailD,
            contrasena:contrasenaD,
            fechaNacimiento:fechaNacimientoD,
            direccion:direccionD,
            fotoPerfil:"", 
            descripcion:""
        }
        const usuarioJson =JSON.stringify(usuario)
        console.log(usuarioJson);

        fetch(`http://localhost:8080/api/red/create`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(usuario)
        })
        .then(response=>{
            if(response.status === 409){
                //El status409 en java lo configuramos como usuario ya existente
                return response.text().then(errorMesage=>{
                    alert(errorMesage)
                    window.location.href = "./sigIn.html"
                });
            }else if (!response.ok){
                throw new Error("ocurrio un error inesperado")

            }else{
               return response.json();
            }
        })
        .then(data=>{
            if(data){
                alert("Usuario creado con exito")
                window.location.href = "../index.html"
            }
        })
        .catch(error=>{
            console.error("Error",error);
            alert("No se pudo completar la solicitud por favor intentalo mas tarde ")

        })

    }


    
 
})

/**
 * 
 * 

    

    
        
        
        

        fetch("http://localhost:8080/api/red/create",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(usuario)
        })
        .then(response=>{
            console.log(response.status);
            
            if(response.status === 409){
                //el status 409 fue un status que en java lo manejamos como Ususario duplicado
                return response.text().then(errorMessage =>{
                    alert(errorMessage)
                });
            }else if(!response.ok){
                throw new Error("Ocurrio un error inesperado");
            }else{
                return response.json();//procesa resouesta exitosa 
            }
        })
        .then(data =>{
            if(data){
                alert("UsusarioCreadocon exito")
                window.location.href ="../index.html"
            }
        })
        .catch(error =>{
            console.error("Error",error);
            alert("No se pudo completar la solicitud por favor intentalo mas tarde ")
            window.location.href ="../index.html"
        })
        
    }   
 */