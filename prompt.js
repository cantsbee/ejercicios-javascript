console.log("Iniciando asistente...");
// let nombre = prompt("¿Cuál es tu nombre?");
// console.log("Encantado de conocerte ", nombre, "!");

// let currentYear = new Date();
// console.log("Valor de año actual", currentYear);

// currentYear = currentYear.getFullYear();
// console.log("Valor de año actual", currentYear);

// let userYear = prompt("¿Cuál es tu año de nacimiento?");
// console.log("Año de nacimiento del usuario: ", userYear);
// let birthday = currentYear - userYear;
// console.log ("Oh, tienes", birthday, " genial!");
let opcion = prompt("¿Qué actividad quieres hacer? 1 0 2?");
if (opcion==1){
    console.log("Has elegido la opción 1.")
    let num1 = prompt("Introduce un número: ");
    let num2 = prompt("Introduce otro numero:");
    let suma = Number(num1) + Number(num2);
    console.log("La suma de los numeros es: " + suma);

}else if (opcion==2){
    console.log("Has elegido la opcion 2.") 
    let numRandom = Math.floor(Math.random()*10) + 1;
    console.log(numRandom);
    let numrandom = prompt("Introduce un número aleatorio: ")

    if (Number(numrandom) === Number(numRandom)){
        console.log("Has acertado!")
    } else {
        console.log("Vaya! No has acertado.")
    }

}else {
    alert("Solo tenemos 2 actividades, puedes elegir 1 o 2 :(");
}

// let num1 = prompt("Introduce un número: ");
// let num2 = prompt("Introduce otro numero:");
// let suma = number(num1) + number(num2);
// console.log("La suma de los numeros es: " + suma);

