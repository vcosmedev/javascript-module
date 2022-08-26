// filter
// filter requiere el argumento que quiere filtrar

// Example 1
// función fruits, array con 3 elementos de tipo string:

const fruits = ['banana', 'apple', 'strawberry'];

function callback(currentItem) {
    return currentItem === 'banana';
}

let arrayOutput = (fruits.filter(callback));
console.log(arrayOutput);

// console.log(fruits.filter(callback)); -> Mismo output que las líneas 13 y 14


// Example 2

const users = [{username: 'Víctor', password: 'Víctor*2022'}, {username: 'Aldo', password: 'Aldo*2023'}];

let users2023 = users.filter((user) => {
    return user.password.split('*')[1] === '2023';
});

console.log(users2023);

// Exercise Filter Coding Rooms

let students = [
    {
      name: 'Alvaro',
      score: 10,
    },
    {
      name: 'Daniel',
      score: 16,
    },
    {
      name: 'Alexys',
      score: 12,
    },
    {
      name: 'Rafa',
      score: 17,
    },
    {
      name: 'Alejandro',
      score: 8,
    },
    {
      name: 'Sofia',
      score: 9,
    }
  ];

let passingStudents = students.filter((student) => {
    return student.score >= '10';
});

console.log(passingStudents);



