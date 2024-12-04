/**Elementos del DOM  */
let $email = document.getElementById("email-in");
let $password =document.getElementById("password-in");
let $buttonLogin =document.getElementById("button-login");
let $spanMail = document.getElementById("validacionmail");
let $spanPassword = document.getElementById("validacionpassword");

/**Evento de clicl en el boton login */
$buttonLogin.addEventListener("click",()=>{
    /**Obtener los datos que el usuario ingreso en los campos */
    let emailDato = $email.value;
    let passwordDato = $password.value;
    
    /**si el usuario deja campos vacios creamos las diferentes posi bilidades  */
    if (emailDato ==="" &&  passwordDato ==="") {/** si los dos campo estan vacios */
        $spanMail.textContent = "Ingresa un correo electronico valido";
        $spanPassword.textContent = "Ingresa una contraseña";
    }else if(passwordDato ===""){/**Si solo el campo de la contraseña esta vacio */
        $spanPassword.textContent = "Ingresa una contraseña";
        $spanMail.textContent = "";
        /** pasara a validar el mail para ver si coloca el span */
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!(regexEmail.test(emailDato))){/** si el correo tiene el formato correcto nop hara nada  si el formato es incorrecto ejecutara un mensaje en la etiqueta <span> */
            $spanMail.textContent = "formato valido: ejemplo@mail.com";
        }
    }else if(emailDato ===""){/**Si solo el campo del mail esta vacio */
        $spanMail.textContent = "Ingresa un correo electronico valido";
        $spanPassword.textContent = "";
    }else{/** si los campos han sido llenados ambos  */
        /** eliminara los anuncios que viven en las estiquetas <span> */
        $spanMail.textContent = "";
        $spanPassword.textContent = "";

        /** validara si el correo tiene el formato correcto */
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regexEmail.test(emailDato)){/** si el correo tiene el formato correcto  */
            let login = {
                correo : emailDato,
                contrasena : passwordDato
            }
            console.log(JSON.stringify(login));
            
            /**S e realizara una peticion  */
            fetch("http://localhost:8080/api/red/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(login)
                
                
            })
            .then(response=>{
                console.log(response.status);
                
                if(response.ok){
                    //return response.json()
                    localStorage.setItem("loginUser",emailDato)
                    window.location.href = "./html/perfil.html"
                }else{
                    alert("Correo ocontraseña incorrecta")
                }
            })
            .catch(error =>{
                alert("Error en al solicitud, por favor intentalo mas tarde")
                console.log();
                
            })

            

        }else{/** si el correo no tiene el formato correcto */
            $spanMail.textContent = "formato valido ejemplo@mail.com";
        }



    }
   
    
    
})


$email.addEventListener("input",()=>{
    $spanMail.textContent = ""
})
$password.addEventListener("input",()=>{
    $spanPassword.textContent = ""
})