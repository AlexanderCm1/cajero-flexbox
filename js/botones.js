/*****funciones botones */

function capP(){
    let kjero = new Cajero(); 
    let a = document.getElementById("clave");
    let b = document.getElementById("sinborde");
    let pantalla = document.getElementById("quinta-capa");
    if (input.value.length > 8 ){
        input.value = input.value.slice(0,8);
    }else if(input.value.length < 8){
        a.value += kjero.getBp();
    }/*if(pantalla.style.display == "block"){
        b.value += kjero.getBp();
    }*/
    
}

function cap0(){
    let kjero = new Cajero(); 
    let a = document.getElementById("clave");
    let pantalla = document.getElementById("quinta-capa");
    let b = document.getElementById("sinborde");
    if (input.value.length > 8 ){
        input.value = input.value.slice(0,8);
    } else if(input.value.length < 8){
        a.value += kjero.getB0();
    }/*if(pantalla.style.display == "block"){
        b.value += kjero.getB0();
    }*/
    
}
function cap1(){
    let kjero = new Cajero(); 
    let a = document.getElementById("clave");
    let pantalla = document.getElementById("quinta-capa");
    let b = document.getElementById("sinborde");
    if (input.value.length > 8 ){
        input.value = input.value.slice(0,8);
    } else if(input.value.length < 8){
        a.value += kjero.getB1();
    }/*if(pantalla.style.display == "block"){
    b.value += kjero.getB1();
}*/
    
}
function cap2(){
    let kjero = new Cajero(); 
    let a = document.getElementById("clave");
    let pantalla = document.getElementById("quinta-capa");
    let b = document.getElementById("sinborde");
    if (input.value.length > 8 ){
        input.value = input.value.slice(0,8);
    } else if(input.value.length < 8){
        a.value += kjero.getB2();
    }/*if(pantalla.style.display == "block"){
        b.value += kjero.getB2();
    }*/
}
function cap3(){
    let kjero = new Cajero(); 
    let a = document.getElementById("clave");
    let pantalla = document.getElementById("quinta-capa");
    let b = document.getElementById("sinborde");
    if (input.value.length > 8 ){
        input.value = input.value.slice(0,8);
    } else if(input.value.length < 8){
        a.value += kjero.getB3();
    }/*if(pantalla.style.display == "block"){
        b.value += kjero.getB3();
    }*/
}
function cap4(){
    let kjero = new Cajero(); 
    let a = document.getElementById("clave");
    let pantalla = document.getElementById("quinta-capa");
    let b = document.getElementById("sinborde");
    if (input.value.length > 8 ){
        input.value = input.value.slice(0,8);
    } else if(input.value.length < 8){
        a.value += kjero.getB4();
    }/*if(pantalla.style.display == "block"){
        b.value += kjero.getB4();
    }*/
}
function cap5(){
    let kjero = new Cajero(); 
    let a = document.getElementById("clave");
    let pantalla = document.getElementById("quinta-capa");
    let b = document.getElementById("sinborde");
    if (input.value.length > 8 ){
        input.value = input.value.slice(0,8);
    } else if(input.value.length < 8){
        a.value += kjero.getB5();
    }/*if(pantalla.style.display == "block"){
        b.value += kjero.getB5();
    }*/
}
function cap6(){
    let kjero = new Cajero(); 
    let a = document.getElementById("clave");
    let pantalla = document.getElementById("quinta-capa");
    let b = document.getElementById("sinborde");
    if (input.value.length > 8 ){
        input.value = input.value.slice(0,8);
    } else if(input.value.length < 8){
        a.value += kjero.getB6();
    }/*if(pantalla.style.display == "block"){
        b.value += kjero.getB6();
    }*/
}
function cap7(){
    let kjero = new Cajero(); 
    let a = document.getElementById("clave");
    let pantalla = document.getElementById("quinta-capa");
    let b = document.getElementById("sinborde");
    if (input.value.length > 8 ){
        input.value = input.value.slice(0,8);
    } else if(input.value.length < 8){
        a.value += kjero.getB7();
    }/*if(pantalla.style.display == "block"){
        b.value += kjero.getB7();
    }*/
}
function cap8(){
    let kjero = new Cajero(); 
    let a = document.getElementById("clave");
    let pantalla = document.getElementById("quinta-capa");
    let b = document.getElementById("sinborde");
    if (input.value.length > 8 ){
        input.value = input.value.slice(0,8);
    } else if(input.value.length < 8){
        a.value += kjero.getB8();
    }/*if(pantalla.style.display == "block"){
        b.value += kjero.getB8();
    }*/
}
function cap9(){
    let kjero = new Cajero(); 
    let a = document.getElementById("clave");
    let pantalla = document.getElementById("quinta-capa");
    let b = document.getElementById("sinborde");
    if (input.value.length > 8 ){
        input.value = input.value.slice(0,8);
    } else if(input.value.length < 8){
        a.value += kjero.getB9();
    }/*if(pantalla.style.display == "block"){
        b.value += kjero.getB9();
    }*/
}




/*******que nos sobrepase a 8 dig */
function dig8(e){
 
    if(e.value.length > 8){
        e.value = e.value.slice(0,8);
    }
}





/************ */
