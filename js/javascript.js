


var pelota1 = document.querySelector("#bola1");
var pelota2 = document.querySelector("#bola2");
var pelota3 = document.querySelector("#bola3");
var pelota4 = document.querySelector("#bola4");
var pelota5 = document.querySelector("#bola5");
var pelota6 = document.querySelector("#bola6");
var pelota7 = document.querySelector("#bola7");
var pelota8 = document.querySelector("#bola8");


function pequenio(r, x){
/*
    var arrayBolas = document.getElementsByClassName("bolas");
  for (i in arrayBolas){
        arrayBolas[i].style.transform = "rotate("+r+"deg) scale(1)";
        arrayBolas[i].style.borderRadius = "100%";
    }
*/
    document.querySelector("#aro").style.transform = "rotate(" +-r+ "deg)";

    pelota1.style.transform = "rotate("+r+"deg) scale(1)";
    pelota2.style.transform = "rotate("+r+"deg) scale(1)";
    pelota3.style.transform = "rotate("+r+"deg) scale(1)";
    pelota4.style.transform = "rotate("+r+"deg) scale(1)";
    pelota5.style.transform = "rotate("+r+"deg) scale(1)";
    pelota6.style.transform = "rotate("+r+"deg) scale(1)";
    pelota7.style.transform = "rotate("+r+"deg) scale(1)";
    pelota8.style.transform = "rotate("+r+"deg) scale(1)";

    pelota1.style.borderRadius = "100%";
    pelota2.style.borderRadius = "100%";
    pelota3.style.borderRadius = "100%";
    pelota4.style.borderRadius = "100%";
    pelota5.style.borderRadius = "100%";
    pelota6.style.borderRadius = "100%";
    pelota7.style.borderRadius = "100%";
    pelota8.style.borderRadius = "100%";
    
    x.style.borderRadius = "10px";

    x.style.transform = "rotate("+r+"deg) scale(1.6)";
}

    function barraBusca(f, g, e, d){
    document.querySelector("#searchBar").style.marginTop = f+"px";
    document.querySelector("#searchBar").style.width = g+"px";
    document.querySelector("#searchBar").style.transitionDelay = "."+e+"s, ."+d+"s";    
}

function mensajes(f, r, e, d, u){
    document.querySelector("#mensajes").style.marginTop = f+"px";
    document.querySelector("#mensajes").style.clipPath = "circle("+r+"0% at center)";
    document.querySelector("#mensajes").style.transitionDelay = "."+e+"s, ."+d+"s"; 
    document.querySelector("#triangulito").style.clipPath = "clip-path: polygon(0% 0%, 0% 0%, 0% 100%)";
}

/*Vuelta entera al pasar del 1 al 5*/

function giro(x){
    if(x.id == "bola1"){
        pequenio(-66, x);
        document.querySelector("#movil").style.backgroundColor = "olive";
        barraBusca(360, 200, 2, 4);
        mensajes(660, 1, 1, 4);
    }
    else if(x.id == "bola2"){
        pequenio(-22, x);
        document.querySelector("#movil").style.backgroundColor = "darkred";
        barraBusca(660, 35, 3, 0);
        mensajes(115, 10, 4, 1);
        document.querySelector("#triangulito").style.clipPath = "clip-path: polygon(0% 0%, 100% 0%, 0% 100%)";
    }
    else if(x.id == "bola3"){
        pequenio(22, x);
        document.querySelector("#movil").style.backgroundColor = "goldenrod";
        barraBusca(660, 35, 3, 0);
        mensajes(660, 1, 0, 4);
    }
    else if(x.id == "bola4"){
        pequenio(66, x);
        document.querySelector("#movil").style.backgroundColor = "darkslateblue";
        barraBusca(660, 35, 3, 0);
        mensajes(660, 1, 0, 4);
    }
    if(x.id == "bola5"){
        pequenio(248, x);
        document.querySelector("#movil").style.backgroundColor = "darkslateblue";
        barraBusca(660, 35, 3, 0);
        mensajes(660, 1, 0, 4);
    }
    else if(x.id == "bola6"){
        pequenio(202, x);
        document.querySelector("#movil").style.backgroundColor = "goldenrod";
        barraBusca(660, 35, 3, 0);
        mensajes(660, 1, 0, 4);
    }
    else if(x.id == "bola7"){
        pequenio(158, x);
        document.querySelector("#movil").style.backgroundColor = "darkred";
        barraBusca(660, 35, 3, 0);
        mensajes(115, 10, 4, 1);
        document.querySelector("#triangulito").style.clipPath = "clip-path: polygon(0% 0%, 100% 0%, 0% 100%)";
    }
    else if(x.id == "bola8"){
        pequenio(111, x);
        document.querySelector("#movil").style.backgroundColor = "olive";
        barraBusca(360, 200, 2, 4);
        mensajes(660, 1, 0, 4);
    }
}

function cerracion(){
    menu=document.querySelector("#aro");
    equis=document.querySelector("#cerrarMenu");
    if(menu.style.marginTop!="600px"){
        menu.style.transform = "rotate(0deg)";
        menu.style.marginTop = "600px";
        menu.style.borderRadius = "0%";
        equis.style.transform = "rotate(315deg)";
        barraBusca(660, 35, 3, 0);
        mensajes(660, 1, 0, 4);
        pequenio(0);
    }
    else if(menu.style.marginTop!="430px"){
        menu.style.marginTop = "430px";
        menu.style.borderRadius = "100%";
        equis.style.transform = "rotate(0deg)";

    }
}
