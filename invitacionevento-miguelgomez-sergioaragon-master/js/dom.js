document.getElementById("ocultar1").addEventListener('change', ocultarmostrar);

function ocultarmostrar(){
    let x = document.getElementsByClassName("noconfirmed");
    for(let i = 0; i < x.length; i++){
        if(document.getElementById("ocultar1").checked){
            x[i].style.display = "none";
        }else{
            x[i].style.display = "block";
        }
    }

}
  
document.getElementById("boton1").addEventListener("click", añadirInvitado);

function añadirInvitado(e){
   e.preventDefault();
   var newLi = document.createElement("li");
   newLi.setAttribute("class", "noconfirmed")
   var nombre = document.createElement("span");
   nombre.innerHTML = document.getElementById("nombre").value;
   var etiqueta = document.createElement("label");
   etiqueta.innerHTML = "Confirmed";
   var cuadrado = document.createElement("checkbox");
   cuadrado.setAttribute("id", "cajon");
   etiqueta.appendChild(cuadrado);
   var boton1 = document.createElement("button");
   boton1.innerHTML = "edit";


   var boton2 = document.createElement("button");
   boton2.innerHTML = "remove";
  /* boton2.addEventListener("click", function () {
       boton2.parentElement.remove();
   })*/

   newLi.appendChild(nombre);
   newLi.appendChild(etiqueta);
   newLi.appendChild(boton1);
   newLi.appendChild(boton2);

   document.getElementById("invitedList").appendChild(newLi);

}




    var x = document.getElementsByTagName("button");

    for(let i = 2; i<x.length; i+=2){
        x[i].addEventListener('click', function(){
            x[i].parentElement.remove();
            x = document.getElementsByTagName("button");
            i=2;
        });
    }
    









