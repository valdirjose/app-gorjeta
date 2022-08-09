function calcularGorjeta(event) {
    event.preventDefault();

    let gorjeta = document.getElementById('conta').value;
    let atendimento = document.getElementById('qualidadeAtendi').value;
    let quantidade = document.getElementById('pessoas').value;

    if(gorjeta == '' | atendimento == 0) {
        alert('PREENCHA OS CAMPOS')
    }

    if(quantidade == '' | quantidade <= 1) {
        quantidade = 1,
        document.getElementById('porPessoa').style.display = 'none';
    }
    else {
        document.getElementById('porPessoa').style.display = 'block';
    }

    let total = (gorjeta * atendimento) / quantidade;
    total = total.toFixed(2);
    document.getElementById('gorjeta').innerHTML = total;
    document.getElementById('totalGorjeta').style.display = 'block';
}

document.getElementById('totalGorjeta').style.display = 'none';
document.getElementById('porPessoa').style.display = 'none';

document.getElementById('tipos').addEventListener('submit', calcularGorjeta);