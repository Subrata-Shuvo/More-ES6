// 1. const and let

const myName = 'Subrata Shuvo';
let myPhone = 'Xiaomi 6 pro'
myPhone = 'Poco x3 pro';


// 2. Default parameter
function findMax(array = []) {
    const max = Math.max(...array)
    return max;
}

const biggest = findMax()
console.log(biggest);

// 3. TEMPLATE STRING

const myNotes = `I am ${myName}, I am leaning web development`;
console.log(myNotes)


// 4. arrow function

const square = x => x * x;
console.log(square(8));

// 5. spread operator or three dots