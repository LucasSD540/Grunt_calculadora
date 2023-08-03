function inserir(num) {
    let numero = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = numero + num;
}

function clean() {
    document.getElementById('visor').innerHTML = '';
}

function remove() {
    let visor = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = visor.substring(0, visor.length -1);
}

function calcular() {
    let visor = document.getElementById('visor').innerHTML;
    
    if (visor) 
    {
        document.getElementById('visor').innerHTML = eval(visor);
    } else {
        alert('Digite um número.');
    }
}
