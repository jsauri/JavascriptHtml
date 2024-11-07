function promedio(arr){
   var output;
   var suma=0;
   for(i=0;i<arr.lenght;i++){
       suma += arr[i];
   }
   var resultado = suma / arr.lenght;
   return resultado
}
console.log(promedio)
    