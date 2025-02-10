function factorizar () {
    const numFactorizadoStr = document.getElementById('numFactorizado').value;

    if(isNaN(numFactorizadoStr) || numFactorizadoStr === ''){
        alert('Por favor, ingresa un valor numérico válido');
        return;
    }

    const numFactorizado = parseInt(numFactorizadoStr);

    if(numFactorizadoStr <0 ){
        alert('Por favor, ingresa un número positivo');
        return;
    }

    let factorizado = 1
    for ( let i=2; i <= numFactorizado; i++) {
        factorizado = factorizado * i;
    }    
    
    document.getElementById('resultadoFactorizado').textContent = numFactorizado + factorizado;
}