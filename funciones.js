document.querySelector('#calcular').addEventListener('click', function() {
    var altura = parseFloat(document.querySelector("#alt").value);
    var peso = parseFloat(document.querySelector("#pes").value);
    var res = peso / ((altura/100) * (altura/100));

    document.getElementById("imc").innerHTML = res.toFixed(2);
});

    
