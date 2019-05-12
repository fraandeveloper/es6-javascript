function log(param) {
    return console.log(param);
}

function insertDom(el) {
    const containerApp = document.querySelector('#app');
    containerApp.appendChild(el);
}

function soma(x, y) {
    return x += y;
}

log(soma(2, 4));

function write(){
    console.log('hello world');
}

//Executa em loop a cada determinado tempo
// setInterval(write, 4000);

// setTimeout(write, 2000);

const buttonElement = document.querySelector('#app button');

// buttonElement.onclick = () => {
//     alert('clicado');
// }

function eventoClick(el) {
    el.onclick = () => alert('cliquei');
}

eventoClick(buttonElement);


const createLink = document.createElement('a');
createLink.setAttribute('href','http://teste.com');

const textLink = document.createTextNode('Acesse o link');
createLink.appendChild(textLink);

const createParagraph = document.createElement('p');
const textParagraph = document.createTextNode('Texto criado atraves do DOM');
createParagraph.appendChild(textParagraph);

insertDom(createLink);
insertDom(createParagraph);







