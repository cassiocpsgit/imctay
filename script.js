function calcular() {
    let peso = document.getElementById('ipeso')
    let alt = document.getElementById('ialtu')
    let res = document.querySelector('div#res')
    let idade = document.getElementById('idade')
    let age = Number(idade.value)
    let imc = Number(peso.value) / Number(alt.value ** 2)
    if (Number(peso.value.length) == 0 || Number(alt.value.length) == 0 || Number(idade.value.length) == 0){
        window.alert('Digite os valores para calcular')    
    } else {    
        if (age >= 19 && age <= 59 && imc < 16.9) {
            res.innerHTML = `IMC = ${imc.toFixed(1)} Kg/m². Muito abaixo do peso.`
        } else if (age >= 19 && age <= 59 && imc >= 17 && imc < 18.4) {
            res.innerHTML = `IMC = ${imc.toFixed(1)} Kg/m². Abaixo do peso.`
        } else if (age >= 19 && age <= 59 && imc >= 18.5 && imc < 24.9) {
            res.innerHTML = `IMC = ${imc.toFixed(1)} Kg/m². Peso normal.`
        } else if (age >= 19 && age <= 59 && imc >= 25 && imc < 29.9) {
            res.innerHTML = `IMC = ${imc.toFixed(1)} Kg/m². Acima do peso.`
        } else if (age >= 19 && age <= 59 && imc >= 30 && imc < 34.9) {
            res.innerHTML = `IMC = ${imc.toFixed(1)} Kg/m². Obesidade grau I.`
        } else if (age >= 19 && age <= 59 && imc >= 35 && imc < 40) {
            res.innerHTML = `IMC = ${imc.toFixed(1)} Kg/m². Obesidade grau II.`
        } else if (age >= 19 && age <= 59 && imc >= 40) {
            res.innerHTML = `IMC = ${imc.toFixed(1)} Kg/m². Obesidade grau III.`
        } else if (age >= 60)
            if (imc < 23) {
                res.innerHTML = `IMC = ${imc.toFixed(1)} Kg/m². Baixo Peso.`
            } else if (imc >= 23 && imc < 28) {
                res.innerHTML = `IMC = ${imc.toFixed(1)} Kg/m². Eutrofia.`
            } else if (imc >= 28 && imc < 30) {
                res.innerHTML = `IMC = ${imc.toFixed(1)} Kg/m². Sobrepeso.`
            } else if (imc >= 30) {
                res.innerHTML = `IMC = ${imc.toFixed(1)} Kg/m². Obesidade.`
            }

    }
}