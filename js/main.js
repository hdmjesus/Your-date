// Selectores

const $name = document.getElementById("name")
const $fecha = document.getElementById("fecha")
const $select = document.getElementById("select")
const $butonsito = document.getElementById("button")



$butonsito.addEventListener("click", calcular)






function calcular(event) {
    event.preventDefault();
    let valorSelect = $select.options[select.selectedIndex].value
    switch (valorSelect) {
        case "edad en dias":
            calcularDias(valorSelect)
            break;

        case "edad en horas":
            calcularHoras(valorSelect)
            break;

        case "edad en minutos":
            calcularMinutos(valorSelect)
            break;

        case "edad en segundos":
            calcularSegundos(valorSelect)
            break;

        default:
            break;
    }




}

function calcularDias(select) {

    let inputDate = new Date($fecha.value)
    let hoy = new Date()

    const miliSegundoDia = 1000 * 60 * 60 * 24
    let diferencia = Math.abs(inputDate - hoy)

    let resultado = Math.floor(diferencia / miliSegundoDia)

    if ($name.value) {
        swal(`${$name.value}, tu ${select} es ${new Intl.NumberFormat().format(resultado)} dias`);
    } else {
        swal(`Llena los campos`)
    }


}

function calcularHoras(select) {

    let inputDate = new Date($fecha.value)
    let hoy = new Date()

    const miliSegundoHora = 60 * 60 * 1000
    let diferencia = Math.abs(inputDate - hoy)

    let resultado = Math.floor(diferencia / miliSegundoHora)

    if ($name.value) {
        swal(`${$name.value}, tu ${select} es ${new Intl.NumberFormat().format(resultado)} horas`);
    } else {
        swal(`Llena los campos`)
    }

}

function calcularMinutos(select) {

    let inputDate = new Date($fecha.value)
    let hoy = new Date()

    const miliSegundoMinuto = 60 * 1000
    let diferencia = Math.abs(inputDate - hoy)

    let resultado = Math.floor(diferencia / miliSegundoMinuto)
    if ($name.value) {
        swal(`${$name.value}, tu ${select} es ${new Intl.NumberFormat().format(resultado)} minutos`);
    } else {
        swal(`Llena los campos`)
    }


}

function calcularSegundos(select) {

    let inputDate = new Date($fecha.value)
    let hoy = new Date()

    const miliSegundoSegundos = 1000
    let diferencia = Math.abs(inputDate - hoy) //Calcula el valor absoluto del resultado

    let resultado = Math.floor(diferencia / miliSegundoSegundos) //Rendodea el resultado hacia abajo

    if ($name.value) {
        swal(`${$name.value}, tu ${select} es ${new Intl.NumberFormat().format(resultado)} segundos`);
    } else {
        swal(`Llena los campos`)
    }

}