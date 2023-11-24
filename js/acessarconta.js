'use strict'

const conta = document.getElementById('conta')

function contaMudarCor () {
    conta.classList.toggle('Criar')
}

conta.addEventListener('click', contaMudarCor)