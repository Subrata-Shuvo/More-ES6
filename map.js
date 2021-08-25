const numbers = [4, 6, 8, 10];
const output2 = [];

// function doubleOld(number) {
//     return number * 2;
// }

const doubleIt = number => number * 2;


for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result);
}
// console.log(output);

// 1. loop through each element
// 2. for each element call the provided function
// 3. result for each element will be stored in an array


// amra jodi array er nam er por .map likhi tahole se array er proti ta element k niye ekta loop chaliye dey, vetore vetore.. r protita element er jonne deya function k call korbe, call kore je result ta pabe set baam pase deya const variable er moddhe save korbe

// system one
// const output = numbers.map(doubleIt);

// system 2
// const output = numbers.map(number => number * 2);
const output = numbers.map(x => x * 2)
console.log(output);

// system 3
const squares = numbers.map(x => x * x);
console.log(squares);



/* Map mane holo -- kono ekta array ache, sei array'r moddhe loop through kore prottek ta element theke kichu ekta ( +, -, *, /, %, square........ onno kichu o hote pare) korba,, then setar output/ hisebe ekta array paba,{Mane result ta return korbe}
*/
