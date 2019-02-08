function Main(array) {

    let result = "{";
   for (let i=0; i < array.length; i+=2){
       result += ` ${array[i]}: ${array[i + 1]},`;

   }
   result = result.slice(0, result.length - 1)
   result += " }";
    console.log(result);
}

Main(['Yoghurt', 48, 'Rise',138, 'Apple' , 52])