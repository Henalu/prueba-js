/*
Solicita al usuario que elija entre la opción 1 o 2:
    Se le debe pedir dos números al usuario e indicar si son pares y múltiplos de 25 ambos, uno de ellos o ninguno.
    Se le debe pedir una palabra y comprobar si empieza o termina por a
*/

//---------------Creando opcion1--------------------
var numero1 = 0;
var numero2 = 0;

var palabra = '';

function eligeDosNumeros() {
    do {
        var pedirNumero1 = parseInt(prompt('Introduzca un numero'));
        var pedirNumero2 = parseInt(prompt('Introduzca otro numero'));
        if (isNaN(pedirNumero1) || isNaN(pedirNumero2)) {
            alert('Por favor, introduzca solamente numeros, otros caracteres no son validos')
        } else {
            numero1 = pedirNumero1;
            numero2 = pedirNumero2;
        }
    } while (isNaN(pedirNumero1) || isNaN(pedirNumero2));

    return numero1, numero2;
}

function pares() {
    if ((numero1 % 2) == 0 && (numero2 % 2) == 0) {
        alert('ambos numeros: ' + numero1 + ' y ' + numero2 + ' son pares');
    } else if ((numero1 % 2) == 0 && (numero2 % 2) != 0) {
        alert('el primer número elegido: ' + numero1 + ' es par y el segundo: ' + numero2 + ' es impar');
    } else if ((numero1 % 2) != 0 && (numero2 % 2) == 0) {
        alert('el primer número elegido: ' + numero1 + ' es impar y el segundo: ' + numero2 + ' es par');
    } else {
        alert('ambos numeros: ' + numero1 + ' y ' + numero2 + ' son impares');
    }
}

function multiplos() {
    if ((numero1 % 25) == 0 && (numero2 % 25) == 0) {
        alert('ambos numeros: ' + numero1 + ' y ' + numero2 + ' son multiplos de 25');
    } else if ((numero1 % 25) == 0 && (numero2 % 25) != 0) {
        alert('el primer número elegido: ' + numero1 + ' es multiplo de 25 y el segundo: ' + numero2 + ' no lo es');
    } else if ((numero1 % 25) != 0 && (numero2 % 25) == 0) {
        alert('el primer número elegido: ' + numero1 + ' es multiplo de 25 y el segundo: ' + numero2 + ' no lo es');
    } else {
        alert('ninguno de los numeros: ' + numero1 + ' y ' + numero2 + ' son multiplos de 25');
    }
}

function opcion1() {
    eligeDosNumeros();
    pares();
    multiplos();
}

//-----------------Creando opcion2-------------------------
var palabra = '';
var contadorLetraA = 0;
var letra = 'a';

function pedirPalabra() {
    do {
        var eligePalabra = prompt('Introduce una palabra para saber cuántas "A" contiene. \nSi introduce más de una palabra se contarán todas');
        if (!isNaN(eligePalabra)) {
            alert('por favor, introduzca solamente letras');
        } else {
            palabra = eligePalabra;
        }
    } while (!isNaN(eligePalabra));

    return palabra;
}

function comprobarLetraA() {
    var contador = 0;
    for (i = 0; i < palabra.length; i++) {
        if (palabra[i] == letra) {
            contador++;
        }
    }
    contadorLetraA = contador;

    return contadorLetraA;
}

function opcion2() {
    pedirPalabra();
    comprobarLetraA();
    alert('La palabra ' + palabra + ' tiene ' + contadorLetraA + ' "A"');
}

//------------------Creando programa para elegir entre las opciones-----------
function seleccion() {
    do {
        var eligeOpcion = prompt('Elige entre: \n' + ' - opcion 1 \n - opcion 2')
        if (eligeOpcion == 'opcion1' || eligeOpcion == 1) {
            opcion1();
        } else if (eligeOpcion == 'opcion2' || eligeOpcion == 2) {
            opcion2();
        }
    }while((eligeOpcion!='opcion1' && eligeOpcion != 1) && (eligeOpcion!='opcion2' && eligeOpcion != 2))
}


//-------------------Ejercicio 2-------------------
/*
Solicita una frase al usuario y contando los espacios que tiene, indica de cuántas palabras consta 
(debes presuponer que la frase tiene un único espacio entre palabras).
*/

var frase = '';
var contadorPalabras = 0;

function solicitarFrase() {
    do {
        var pedirFrase = prompt('Introduzca aquí una frase:');
        if (!isNaN(pedirFrase)) {
            alert('Por favor, no introduzca números');
        } else {
            frase = pedirFrase;
        }
    } while (!isNaN(pedirFrase));

    return frase;
}

function contarPalabras() {
    contador = 1;
    for (i = 0; i < frase.length; i++) {
        if (frase[i] == ' ') {
            contador++;
        }
    }
    contadorPalabras = contador;

    return contadorPalabras;
}

function ejercicio2() {
    solicitarFrase();
    contarPalabras();
    alert('El numero de palabras de la frase: ' + '"' + frase + '"' + ' es ' + contadorPalabras);
}