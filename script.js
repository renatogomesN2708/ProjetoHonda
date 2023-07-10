function saibaMais() {
    let b1 = document.getElementById('box1')
    let b2 = document.getElementById('box2')
    let b3 = document.getElementById('box3')
    let setaVoltar = document.getElementById('setaEsq')
    let setaProx = document.getElementById('setaDir')
    let saiba = document.getElementById('saiba')
    
    saiba.style.opacity = '0%'
    setaVoltar.style.opacity = '10%'
    setaProx.style.opacity = '10%'
    b1.style.opacity = '10%'
    b2.style.opacity = '10%'
    b3.style.display = 'block'
}

function sair() {
    
    let b1 = document.getElementById('box1')
    let b2 = document.getElementById('box2')
    let b3 = document.getElementById('box3')
    let setaVoltar = document.getElementById('setaEsq')
    let setaProx = document.getElementById('setaDir')
    let saiba = document.getElementById('saiba')

    saiba.style.opacity = '100%'
    setaVoltar.style.opacity = '100%'
    setaProx.style.opacity = '100%'
    b1.style.opacity = '100%'
    b2.style.opacity = '100%'
    b3.style.display = 'none'
}

function direita() {
    let cb = document.getElementById('cb500')
    let scooter = document.getElementById('schotter')

    cb.addEventListener('click', direita)
    scooter.style.display = 'none'
    cb.style.display = 'block'    
}

function esquerda() {
    let cb = document.getElementById('cb500')
    let scooter = document.getElementById('schotter')

    scooter.addEventListener('click', esquerda)
    cb.style.display = 'none'
    scooter.style.display = 'block'
}