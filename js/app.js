
let amigos = []
let lista = document.getElementById('lista-amigos');
let amigo = document.getElementById('nome-amigo');

function adicionar() {
  
    if (amigo.value == '') {
        alert('informe o nome desejado!');
        return;
    }
    if (amigos.includes(amigo.value)) {
        alert('nome ja adicionado!')
        return
    }

    amigos.push(amigo.value);
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + "," + amigo.value;
    }
    amigo.value = '';
   
}

function sortear() {
    if(amigos.length <= 3) {
        alert('adicione pelo menos quatro amigos!')
        return
    }

    embaralhar(amigos);

    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }    
}

function reiniciar() {
        amigos = [];
        document.getElementById('lista-amigos').innerHTML = '';
        document.getElementById('lista-sorteio').innerHTML = '';
}


function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}
