let greeting = "what is transpiring good sir?"

let letters = greeting.split("")
let joinedLetters = letters.join("")

letters[Math.floor(Math.random() * letters.length)]

let arr = ['a','b','c','d']

let index1 = Math.floor(Math.random() * arr.length);
let index2 = Math.floor(Math.random() * arr.length);

let l1 = arr[index1];
let l2 = arr[index2];

arr[index1] = l2;
arr[index2] = l1;

let candy = new Map();

candy.set('purple', 'grape').set('red', 'strawberry').set('blue', 'raspberry').set('orange', 'orange').set('yellow', 'banana')
// Map {
  // 'purple' => 'grape',
  // 'red' => 'strawberry',
  // 'blue' => 'raspberry',
  // 'orange' => 'orange',
  // 'yellow' => 'banana' }

for (let [color, c] of candy) {
    console.log(`The ${c} flavor is colored ${color}`);
}

candy.get('purple')
candy.get('sadkjf')


let getFlavor = function(color, candyMap) {
    if (candyMap.has(color)) {
        console.log(candyMap.get(color));
    } else {
        console.log("Sorry i'm colorblind.");
    }
}

getFlavor('blue', candy)

getFlavor('green', candy)


let colors = ['blue', 'red', 'green', 'black']

let displayFlavors = function(colorArray, candyMap) {
    let flavors = [];
    for ( let color of colors ) {
        if (!candyMap.has(color)) {
            flavors.push('Null');
        } else {
        flavors.push(candyMap.get(color));
        }
    }
    return flavors
}

console.log(displayFlavors(colors, candy))