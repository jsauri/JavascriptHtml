function exp(numero,exponente) {
    var resultado = numero;

    for(var i=1; i < exponente; i++){
        resultado= resultado*numero;
    }

    return resultado;
}
console.log(exp(2,8));
