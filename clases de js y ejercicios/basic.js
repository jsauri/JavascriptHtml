// Variable types (Primitives)
var nothing;

var number = 2;
var negative = -2;
var decimal = 2.2;
var negativeDecimal = -60.1;
console.log(negative);
var words = "string";
var anotherWord = 'simple';
var character = "c";
var stringNumber = "112321";
var empty = "";
var whiteSpace = " ";

var boolean = true;
var falseBoolean = false;

// Operators

// = lo que esta en la izquierda del igual agarra el valor de lo de la derecha
var equal = 1 + 1 + 1;

// +

var sum1 = 5 + 6;
var sum2 = number + negative;
var sum3 = number + decimal + 5 + 100;

var sumString1 = "hola " + "mundo";  // hola mundo
var sumString2 = anotherWord + " " + words;  // string simple
var sumString3 = "una linea" + "\n" + "otra linea";

// -
var sub1 = 5 - 6;
var sub2 = negative - number;
var sub3 = 1 - 2 - 3 - 4;

// *
var mult1 = 5 * 6;
var mult2 = 6 * 4 * 3 * 1;

// /
var div1 = 10 / 2;
var div2 = 5 / -0;

// % modulus (el residuo de la division)
var mod1 = 6 % 2;


// Convertir string a numbero (Casting explicito)
var edad = "15";
var edadEnNumero = Number(edad);
var otraEdadEnNumero = +edad;

var escalones = 14;
var escalonesString = escalones.toString();  // "14"

// Casting implicito
var experiment1 = number + words;   // el numero se convierte en string   console.log("10" + 1);
var experiment2 = words + boolean;  // el booleano se converte en string
var experiment3 = number + boolean; // el booleano se converte en el numero 1
var experiment4 = "10" - 1;  // El string se converte en numero

// Array;

var arr1 = ["a", 1, true, ["b", 2, false, []]];
var arr2 = [];

arr2.push(1);
arr2.push(2);
arr2.push(3);
arr2.push(100);
arr2.unshift(0);

var a = arr2[2]; // Obtener valor
arr2[3] = "a";   // Modificar valor

// console.log(arr2);
var ultimo = arr2.pop();
var primero = arr2.shift();

var arreglo = [[1,2],[3,4],[5,6]];