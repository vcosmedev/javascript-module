

const fruits = ['banana', 'rotten banana', 'apple', 'strawberry', 'rotten strawberry'];

const firstRottenFuit = fruits.find(function(fruit) {
    if(fruit.includes('rotten') === true) {
        return fruit;
    }
});

console.log(firstRottenFuit);



const arrayOne = [2, 5, 9, 18, 144];

const found = arrayOne.find(element => element > 10);

console.log(found);