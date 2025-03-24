const start = document.getElementById('start');
const stop  = document.getElementById('stop');
const clear = document.getElementById('clear');

let timer;
let centesimos = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;

function atualizarCronometro(){
    centesimos++;
    if(centesimos === 100){
        centesimos = 0;
        segundos++;
    }
    if(segundos === 60){
        segundos = 0;
        minutos++;
    }
    if(minutos === 60){
        minutos = 0;
        horas++;
    }

    // Atualiza os valores na tela SEMPRE que a função for chamada
    document.getElementById('horas').innerText = horas.toString().padStart(2, '0');
    document.getElementById('minutos').innerText = minutos.toString().padStart(2, '0');
    document.getElementById('segundos').innerText = segundos.toString().padStart(2, '0');
    document.getElementById('centesimos').innerText = centesimos.toString().padStart(2, '0');
}

function iniciarCronometro(){
    if(!timer){ // Evita múltiplos timers rodando ao mesmo tempo
        timer = setInterval(atualizarCronometro, 10); // Atualiza a cada 10ms
    }
}

function pararCronometro(){
    clearInterval(timer);
    timer = null; // Garante que o timer possa ser reiniciado corretamente
}

function resetarCronometro(){
    clearInterval(timer);
    timer = null;
    centesimos = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;

    // Reseta a exibição para 00:00:00:00
    document.getElementById('centesimos').innerText = '00';
    document.getElementById('segundos').innerText = '00';
    document.getElementById('minutos').innerText = '00';
    document.getElementById('horas').innerText = '00';
}

// Eventos dos botões
start.addEventListener('click', iniciarCronometro);
stop.addEventListener('click', pararCronometro);
clear.addEventListener('click', resetarCronometro);
