
/*******validando contraseña */

var message = document.getElementById('message');


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
})

/********Retiro en soles */





