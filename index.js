var typed = new Typed('.typing', {
    strings: ['Developed by Caio Freire.', 'Desenvolvido Por Caio Freire.'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: false
});

function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = ''
}

function back() {
    var backspace =  document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = backspace.substring(0, backspace.length -1);
}

function calc() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = '[ERROR]';
    }
}

function porcent() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado / 100
}