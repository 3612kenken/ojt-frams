const alphabetArray = [
    ['A', 65],
    ['B', 66],
    ['C', 67],
    ['D', 68],
    ['E', 69],
    ['F', 70],
    ['G', 71],
    ['H', 72],
    ['I', 73],
    ['J', 74],
    ['K', 75],
    ['L', 76],
    ['M', 77],
    ['N', 78],
    ['O', 79],
    ['P', 80],
    ['Q', 81],
    ['R', 82],
    ['S', 83],
    ['T', 84],
    ['U', 85],
    ['V', 86],
    ['W', 87],
    ['X', 88],
    ['Y', 89],
    ['Z', 90]
  ];
  let positiveModulo = (dividend, divisor) => {
    return ((dividend % divisor) + divisor) % divisor;
  };
  
  // Accessing the element at index 2
  const valueAtIndex2 = alphabetArray[2][0];
  
  //console.log(valueAtIndex2); 
console.clear();
  function ces_crypto(k) {
    let result = 0;  // Use 'let' to allow reassignment
    result = 67 + parseInt(k);
  //  console.log("C = " + result);
    
    result2 = 82 + parseInt(k);
  //  console.log("R = " + result);
    
    result3 = 89 + parseInt(k);
  //  console.log("Y = " + result);
    
    result4 = 80 + parseInt(k);
 //   console.log("P = " + result);
    
    result5 = 84 + parseInt(k);
   // console.log("T = " + result);
    
    result6 = 79 + parseInt(k);
  //  console.log("O = " + result);

   // console.log("\n WITH MOD 26 \n");

//     result = 67 + parseInt(k);
//    // console.log("C = " + positiveModulo(result, 26));
    
//     result = 82 + parseInt(k);
//     //console.log("R = " + positiveModulo(result, 26));
    
//     result = 89 + parseInt(k);
//     //console.log("Y = " + positiveModulo(result, 26));
    
//     result = 80 + parseInt(k);
//     //console.log("P = " + positiveModulo(result, 26));
    
//     result = 84 + parseInt(k);
//    // console.log("T = " + positiveModulo(result, 26));
    
//     result = 79 + parseInt(k);
   
//    // console.log("O = " + positiveModulo(result, 26));

    console.log("------------\nCesar Cipher\n\n[P + K] Answer= " + result + ", " + result2 + ", " + result3 + ", " + result4 + ", " + result5 + ", " + result6);
    console.log("[(P + K) mod 26] Answer = " + positiveModulo(result, 26) + ", " + positiveModulo(result2, 26) + ", " + positiveModulo(result3, 26) + ", " + positiveModulo(result4, 26) + ", " + positiveModulo(result5, 26) + ", " + positiveModulo(result6, 26));
   
    cipher = alphabetArray[positiveModulo(result, 26)][0] + alphabetArray[positiveModulo(result2, 26)][0] + alphabetArray[positiveModulo(result3, 26)][0] + alphabetArray[positiveModulo(result4, 26)][0] + alphabetArray[positiveModulo(result5, 26)][0] + alphabetArray[positiveModulo(result6, 26)][0];
    console.log("\nCesar Answer = " + cipher );
    
    
}



function vg_crypto(ka, kb, kc) {

    result = 67 + parseInt(ka);
    result2 = 82 + parseInt(kb);
    result3 = 89 + parseInt(kc);
    result4 = 80 + parseInt(ka);
    result5 = 84 + parseInt(kb);
    result6 = 79 + parseInt(kc);


    console.log("\n----------------\nViginiere Cipher\n\n[P + K] Answer= " + result + ", " + result2 + ", " + result3 + ", " + result4 + ", " + result5 + ", " + result6);
    console.log("[(P + K) mod 26] Answer = " + positiveModulo(result, 26) + ", " + positiveModulo(result2, 26) + ", " + positiveModulo(result3, 26) + ", " + positiveModulo(result4, 26) + ", " + positiveModulo(result5, 26) + ", " + positiveModulo(result6, 26));
    cipher = alphabetArray[positiveModulo(result, 26)][0] + alphabetArray[positiveModulo(result2, 26)][0] + alphabetArray[positiveModulo(result3, 26)][0] + alphabetArray[positiveModulo(result4, 26)][0] + alphabetArray[positiveModulo(result5, 26)][0] + alphabetArray[positiveModulo(result6, 26)][0];
    console.log("\nViginiere Answer = " + cipher + "\n");

}

const playfairArray = [
    ['ANALYSIS', 'DQ NR OP'],
    ['CURRENCY', 'UE BM VM'],
    ['GRAPHY', 'BA DG NQ'],
   
    ['MINING', 'KW ZO YT'],
    ['SYSTEM', 'FP TO YP']
];

function playfairLog(num){

console.log("--------------------\nPlayfair Answer = " + positiveModulo(num, 5) + "\n"+ positiveModulo(num, 5) + ": " + playfairArray[positiveModulo(num, 5)][0] + " = " +playfairArray[positiveModulo(num, 5)][1] + "\n");

}

ces_crypto(83);  // Test with value 83
vg_crypto(83,84, 69);
playfairLog(73);



 

  
  