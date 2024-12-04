let d = document;
let $cancelar = d.getElementById("cancelar-button"); //boton para cancelar
let $eliminar = d.getElementById("eliminar-button"); //boton para eliminar
let $imagen =d.getElementById("imagen-despedida"); //imagen
let $password = d.getElementById("password-input") // constraseña


//Evento para cuando entra el mosue al boton cancelar  cambiar la imagen
$cancelar.addEventListener("mouseenter", () => {
    $imagen.src = "../img/happy.jpeg"; // Cambia la dirección del enlace
});

//Evento para cuando el mouse deja el boton de cancelar cambiar la imgen
$cancelar.addEventListener("mouseleave", () => {
    $imagen.src = "../img/adios.jpg"; // Cambia la dirección del enlace
});

//Al hacer clicl en el boton de cancelar , enviar a el perfil 
$cancelar.addEventListener("click",()=>{
    window.location.href = "./perfil.html" // pagina del perfil 
   
})

// acciones o requerimientos para cuand se hace clic en el boton eliminar
$eliminar.addEventListener("click",()=>{
    let constrasena = $password.value; // obtiene el dato que se ingreso en la contraseña
    console.log(constrasena);
    
    
    if(constrasena === "" ||constrasena === false){
        
   
        
    }else{
        const ADTN3$sh54 = localStorage.getItem("loginUser");
        console.log(ADTN3$sh54,constrasena);
        
      
        fetch(`http://localhost:8080/api/red/delete?email=${ADTN3$sh54}&password=${constrasena}`,{
            method : "DELETE",
            headers : {
                "Content-Type":"application/json"
            }
        })
        .then(response=>{
            if(response.status === 400){
                response.text().then(errorMesage=>{
                    alert(errorMesage)
                    //window.location.href = "./eliminar.html"
                })
            }else if(!response.ok){
                throw new Error("Error al eliminar el usuario por favor intentalo mas tarde")
            }
            return response.text()
        })
        .then(data=>{
            localStorage.removeItem("loginUser");
            alert(data)
            window.location.href = "../index.html"
            
        })
        .catch(error=>{
            console.error("Error al realizar la solicitud ", error)
        })

        
       
    }
})



