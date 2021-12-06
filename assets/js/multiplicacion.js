//se solicita ingresar numero
let num = +prompt("Ingresar Número entre  1 y 20");

//funcion fibonacci
function fibo(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fibo(n - 2) + fibo(n - 1);
}
    //funcion facotial
    function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}
    //funcion para obtener resultdo
    function resultado() {    
        if (num % 1 != 0 || num < 1 || num > 20) {
        resultado();
    }

    //imprimir resultado de multiplicación
    for (let i = 1; i <= num; i++) {
      console.log(`${i} x ${num} = ${i * num}`);
    }

    //imprimir factoriales
    for (let i = 1; i <= num; i++) {
        console.log(`El Factorial de ${i} es ${factorial(i)}`);
    }
}
resultado();