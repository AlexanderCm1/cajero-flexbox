 /****clase cajero */
 
 class Cajero{
    constructor(pass){
        this.boton1 = 1;
        this.boton2 = 2;
        this.boton3 = 3;
        this.boton4 = 4;
        this.boton5 = 5;
        this.boton6 = 6;
        this.boton7 = 7;
        this.boton8 = 8;
        this.boton9 = 9;
        this.boton0 = 0;
        this.botonnada = "";
        this.botonp = ".";
        this.contra = pass;
        this.saldo = 1000;
    }
    getB0(){
        return this.boton0;
    }
    getB1(){
        return this.boton1;
    }
    getB2(){
        return this.boton2;
    }
    getB3(){
        return this.boton3;
    }
    getB4(){
        return this.boton4;
    }
    getB5(){
        return this.boton5;
    }
    getB6(){
        return this.boton6;
    }
    getB7(){
        return this.boton7;
    }
    getB8(){
        return this.boton8;
    }
    getB9(){
        return this.boton9;
    }
    getBn(){
        return this.botonnada;
    }
    getBp(){
        return this.botonp;
    }
    validarPass(){
        var x;
        if(this.contra == '1'){

            x = 1;

        }else{
            x = 0;
        }
        return x;
    }s
    getsaldo(){
        return this.saldo;
    }

}