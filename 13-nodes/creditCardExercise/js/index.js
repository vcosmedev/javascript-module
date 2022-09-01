const body = document.querySelector('body');

function createCreditCard(id, cardNumber, title) {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  const img = document.createElement('img');
  const p = document.createElement('p');
  div.id = id;
  h1.innerText = title;
  img.src = 'https://thumbs.dreamstime.com/b/credit-card-chip-isolated-credit-card-chip-isolated-white-background-d-render-110054752.jpg';
  img.alt = 'Card chip';
  p.innerText = cardNumber;
  p.className = 'texto-redondo';

  div.appendChild(h1);
  div.appendChild(img);
  div.appendChild(p);
  body.appendChild(div);
}

createCreditCard('bbva', '4561 1234 1234 1234', 'Clasica MC');
createCreditCard('bbva', '4561 1234 1234 1234', 'Clasica MC');
createCreditCard('bbva', '4561 1234 1234 1234', 'Clasica MC');
createCreditCard('bbva', '4561 1234 1234 1234', 'Clasica MC');
createCreditCard('bbva', '4561 1234 1234 1234', 'Clasica MC');

/*
function generarTarjetaDeCredito(id, numeroTarjeta, titulo){
    
    const template = `<div id="${id}">
    <h1>${titulo}</h1>
    <img src="chip.jpg" alt="chip">
    <p>${numeroTarjeta}</p>
    </div>`
    body.innerHTML += template;
}

generarTarjetaDeCredito('bbva', '4525 6632 5478 5214', 'Mastercard');

*/