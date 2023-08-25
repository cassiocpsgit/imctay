function calcular() {
    let peso = document.getElementById('ipeso')
    let alt = document.getElementById('ialtu')
    let res = document.querySelector('div#res')
    let imc = Number(peso.value) / Number(alt.value * 2)
    if (Number(peso.value.length) == 0 || Number(alt.value.length) == 0){
        window.alert('Digite os valores para calcular')
    } else {
        res.innerHTML = `IMC = ${imc.toFixed(1)}`
    }
}
