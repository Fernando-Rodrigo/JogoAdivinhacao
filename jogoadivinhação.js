var a
var n = window.document.getElementById('num')
var r = window.document.getElementById('resultado')

const jogoadivinhação = {
    start() {
        a = Math.round(200 * Math.random())
        r.innerHTML = ''
    },

    chutar() {
        num1 = Number(n.value)

        if (num1 == a) {
            r.innerHTML = 'PARABÉNS! Você acertou.'
        } else if (num1 < a) {
            r.innerHTML = 'Tente chutar um número maior.'
        } else {
            r.innerHTML = 'Tente chutar um número menor.'
        }
    },
}