let paragraphs = document.getElementsByClassName('paragraph');
// paragraphs[0].style.color = '#FF5733';

console.log(paragraphs);

const div = document.getElementById('div1');
div.style.color = 'red';
console.log(div);

const secondParagraph = document.querySelector('div > p.paragraphTwo');
console.log(secondParagraph);

const body = document.querySelector('body');

const element = document.createElement('h1');
element.style.backgroundColor = 'red';
element.style.color = 'white';
element.classList.add('title');
element.classList.add('tittle-black');
element.classList.add('title-xl');
console.log(body);

body.appendChild(element); // agrega un nodo dentro de otro nodo
// div.appendChild(element);
