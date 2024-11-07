// funcion que recibe un arreglo de numeros, regresa un arreglo con los numeros multiplicados por dos
function doble(arr){
    var doblar=[];
    for(var i=0;i<arr.length;i++){
        
       doblar.push(arr[i]*2);
    }
    return doblar;
}
console.log(doble([4,7,9]));