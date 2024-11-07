// funcion que me regresa todas las posiciones donde se encuentra un caracter
function findAll(text, character) {
    var output = [];
    for(var i = 0; i < text.length; i++){
        if(text[i] === character) output.push(i);
    }
    return output;
}