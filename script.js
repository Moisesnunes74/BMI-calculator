function calcular () {
    let menu = document.getElementById ('menu')
    let res = document.getElementById ('res')
    let nome = document.getElementById ('nome').value
    var peso = document.getElementById ('peso').value
    var altura = document.getElementById ('altura').value


    for (var c = 1; c <= 2; c++) {
        var peso = peso/altura
    }

        if (peso <= 18.50){
            var nivel = 'Desnutrido(a)'
         } else if (peso <= 24.99){
             var nivel = 'com Peso normal'
            } else if (peso <=29.99){
             var nivel = 'com Sobrepeso'
         } else {
              var nivel = 'obeso(a)'
         }
        

    res.innerHTML = `Senhor ${nome} seu IMC é: ` + peso.toFixed(2) + ` Você está ${nivel}`
    
}