function distribuiCaracter() {
    var caracter = document.getElementById('entrada').value
    document.getElementById('entrada').value = ''
    caracter.trim()
    switch(caracter) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            //adicionar o caracter no campo referente a números
            document.getElementById('apenas_numeros').value = caracter
            break;
            default:
            //adcionar o caracter no campo referemte a letras
            document.getElementById('apenas_letras').value = caracter
        
    }

}