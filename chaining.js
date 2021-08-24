// declare variable based on the name of an object property


// getting the object property as variable is called destructuring or chaining 

const myObject = { x: 2, y: 50, z: 200, a: 200, b: 68 };
const { x, b } = myObject;
console.log("myObject.p", myObject ? .p ? .q);

// destructuring array
const [p, q] = [45, 54];
// console.log(p, q);

const [best, worst] = ['Subrata', 'Shuvo']
// console.log(best, worst);

const { sky, color, money } = { sky: 'blue', soil: 'mati', color: 'red' }




// chaining object
const office = {
    name: 'Amoled Code',
    ceo: { id: 12, name: 'Shuvo', food: 'Kosa mangso' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};

console.log(office.web.tech.third);