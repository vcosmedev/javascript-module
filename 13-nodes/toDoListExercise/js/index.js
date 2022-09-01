



function createToDoList(toDosNumber) {
    const body = document.querySelector('body');
    const ul = document.createElement('ul');
 
    for(i = 0; i < toDosNumber; i++) {
        let li = createLi(`text${i}`);
        ul.appendChild(li);
    }

    body.appendChild(ul);

}
function createLi(text) {
    const liOne = document.createElement('li');
    liOne.innerText = text;
    return liOne;
}


createToDoList(5);