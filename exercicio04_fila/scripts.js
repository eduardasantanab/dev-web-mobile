const meuArray = [];

function adicionarInput() {
    const valorInput = document.getElementById("number").value;
    const valorCor = document.getElementById("favcolor").value;

    if (document.querySelector('input[id="fila"]:checked')) {
        meuArray.push({ numero: valorInput, cor: valorCor });
        atualizarFila();
    } else {
        alert("Por favor, selecione uma opção.");
    }
}

function removerInput() {
    if (document.querySelector('input[id="fila"]:checked')) {
        meuArray.shift();
        atualizarFila();
    } else {
        alert("Por favor, selecione uma opção.");
    }
}

function atualizarFila() {
   const filaElement = document.getElementById("exibe-fila");
   filaElement.innerHTML = "Fila: ";

   meuArray.forEach(item => {
     const corDiv = document.createElement('div');
     corDiv.className = 'color-icon';
     corDiv.style.backgroundColor = item.cor;
     filaElement.appendChild(corDiv);
     filaElement.innerHTML += " " + `${item.numero} | `;
     });
}

