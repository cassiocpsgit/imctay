function calcular() {
    let peso = document.getElementById('ipeso')
    let alt = document.getElementById('ialtu')
    let res = document.querySelector('div#res')
    if (Number(peso.value.length) == 0 || Number(alt.value.length) == 0){
        window.alert('Digite os valores para calcular')
    } else {
        let imc = Number(peso.value) / Number(alt.value * 2)
        res.innerHTML = `${imc.toFixed(2)}`
    }
}
