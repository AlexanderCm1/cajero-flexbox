
/*****manipulacion del Dom */
var ok = document.querySelector("#ok");
var first = document.querySelector("#first");
var second = document.querySelector("#second");
var third = document.querySelector("#third");
var four = document.querySelector("#four");


/**************BOTONES */
var b1 = document.querySelector("#button1");
var b2 = document.querySelector("#button2");
var b3 = document.querySelector("#button3");
var b4 = document.querySelector("#button4");
var b5 = document.querySelector("#button5");
var b6 = document.querySelector("#button6");
var b7 = document.querySelector("#button7");
var b8 = document.querySelector("#button8");
var b9 = document.querySelector("#button9");
var b0 = document.querySelector("#button0");
var bp = document.querySelector("#buttonp");

/******inputs */

var input = document.querySelector("#clave");
var input2 = document.querySelector("#m10");

/******eventos */
bp.addEventListener('click',function(){
    capP();
});
b0.addEventListener('click',function(){
    cap0();
});
b1.addEventListener('click',function(){
    cap1();
});
b2.addEventListener('click',function(){
    cap2();
});
b3.addEventListener('click',function(){
    cap3();
});
b4.addEventListener('click',function(){
    cap4();
});
b5.addEventListener('click',function(){
    cap5();
});
b6.addEventListener('click',function(){
    cap6();
});
b7.addEventListener('click',function(){
    cap7();
});
b8.addEventListener('click',function(){
    cap8();
});
b9.addEventListener('click',function(){
    cap9();
});
/*****input */
input.addEventListener('input',function(){
    dig8(this);
});
