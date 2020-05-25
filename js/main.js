
/*******validando contraseña */

var message = document.getElementById('message');
var messagep5 = document.getElementById('message-p5');


function validarPass(){
    var cajero = new Cajero(input.value);
    var loginp = document.getElementById('login');
    var menup = document.getElementById('menu');
    var h1 = document.getElementById('menu-h1');
    var triangulos = document.getElementById('primera');
    if(cajero.validarPass() == 1) {
        loginp.style.display = 'none';
        menup.style.display = 'flex';
        h1.style.display = 'flex';
        triangulos.style.display = 'flex';

        
    }else{
        message.append("Contraseña incorrecta");
    }

}

ok.addEventListener('click', function() {
    validarPass();

})
/********Acciones Retiros */

function retiro(){
    var menu = document.getElementById('menu');
    var retiro = document.getElementById('retiro');
    var h1 = document.getElementById('retiro-h1');
    var triangulos = document.getElementById('primera-3p');
    

    if(menu.style.display == 'flex'){

        menu.style.display = 'none';
        retiro.style.display = 'flex';
        h1.style.display = 'flex';        
        triangulos.style.display = 'flex';

        

    }else{

    }

}
var x = 0
first.addEventListener('click' ,function(){
    retiro();
    x++;
    console.log(x);
});
function cancelar1(){
    var retiro = document.getElementById('retiro');
    var menu = document.getElementById('menu');
    var h1 = document.getElementById('menu-h1');
    var triangulos = document.getElementById('primera');
    if(retiro.style.display == 'flex'){
        retiro.style.display = 'none';
        menu.style.display = 'flex';
        h1.style.display = 'flex';
        triangulos.style.display = 'flex';
    }else{

    }

}
four.addEventListener('click',function(){
    cancelar1();
})






/********Retiro en soles */
function retiroSoles(){
    var retiro = document.getElementById('retiro');
    var retiroSoles = document.getElementById('retiroSoles');
    var h1 = document.getElementById('retiroSoles-h1');
    var triangulos = document.getElementById('primera-4p');
    if(retiro.style.display == 'flex'){
        retiro.style.display = 'none';

        retiroSoles.style.display = 'flex';
        h1.style.display = 'flex';
        triangulos.style.display = 'flex';
        
    }else {

    }
}
first.addEventListener('click',function(){
    retiroSoles();
});
function cancelar2(){
    var retiroSoles = document.getElementById('retiroSoles');
    var retiro = document.getElementById('retiro');
    var h1 = document.getElementById('retiro-h1');
    var triangulos = document.getElementById('primera-4p');
    if(retiroSoles.style.display == 'flex'){
        retiroSoles.style.display = 'none';
        retiro.style.display = 'flex';
        h1.style.display = 'flex';
        triangulos.style.display = 'flex';
    }else {

    }


}
four.addEventListener('click', function(){
    cancelar2();
});




/*******Otras cantidades */
function otrasCant(){
    var retiroSoles = document.getElementById('retiroSoles');
    var otrasCant = document.getElementById('otrasCant');
    var h1 = document.getElementById('otrasCant-h1');
    var triangulos = document.getElementById('primera-5p');
    if(retiroSoles.style.display == 'flex'){
        retiroSoles.style.display = 'none';
        otrasCant.style.display = 'flex';
        h1.style.display = 'flex';
        triangulos.style.display = 'flex';
    }else{

    }
}
second.addEventListener('click', function(){
    otrasCant();
});

/*******Validacion multiplos de 10 */
function validarM10(){
    var updateSaldo ;
    var cajero = new Cajero(0,input2.value);
    var otrasCant = document.getElementById('otrasCant');
    var transProces = document.getElementById('transProces');
    var h1 = document.getElementById('transProces-h1');
    var triangulos = document.getElementById('primera-6p');
    if((otrasCant.style.display == 'flex') && (cajero.validarMultiplo10() == 1) && (input2.value != "") && (input2.value <= cajero.getsaldo())){
        otrasCant.style.display = 'none';
        transProces.style.display = 'flex';
        h1.style.display = 'flex';
        triangulos.style.display = 'flex';
        updateSaldo = cajero.getsaldo() - input2.value;
        console.log(updateSaldo);
        input3.value = updateSaldo;
    }else if(cajero.validarMultiplo10() == 0 ){
        messagep5.append("Por favor ingrese un multiplo de 10");
        input2.value = "";
    }else if(input2.value == ""){
        messagep5.append(" Por favor ingrese un número");
    }else if(input2.value > cajero.getsaldo()){
        messagep5.append("No tiene saldo suficiente");

    }
}
third.addEventListener('click', function(){
    validarM10();
});


/*******Adios */
function bye(){
    var transProces = document.getElementById('transProces');
    var final = document.getElementById('final');
    var h1 = document.getElementById('final-h1');

    if(transProces.style.display == 'flex'){
        transProces.style.display = 'none';
        final.style.display = 'flex';
        h1.style.display = 'flex';

    }else {

    }
}
four.addEventListener('click', function(){
    bye();
})





/*******Consultas */
function consultas(){
    var cajero = new Cajero();
    var menu = document.getElementById('menu');
    var consultas = document.getElementById('consultas');
    var h1 = document.getElementById('consultas-h1');
    var triangulos = document.getElementById('primera-8p');


    if(menu.style.display == 'flex'){
        menu.style.display = 'none';
        consultas.style.display = 'flex';
        h1.style.display =  'flex';
        triangulos.style.display = 'flex';
        input3.value = "S/."+cajero.getsaldo();
        input3.disabled = true;
    }else {

    }

}
consulta.addEventListener('click', function(){
    consultas();
})
function voler(){
    var consultas = document.getElementById('consultas');
    var menu = document.getElementById('menu');
    var h1 = document.getElementById('menu-h1');
    var triangulos = document.getElementById('primera');
    if(consultas.style.display == 'flex'){
        consultas.style.display = 'none';  
        menu.style.display = 'flex';
        h1.style.display = 'flex';
        triangulos.style.display = 'flex';
    }else{

    }
}
four.addEventListener('click', function(){
    voler();
});





