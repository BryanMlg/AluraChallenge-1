export default function convertirTextoInverso (texto) {
  const reglas = {
    enter: 'e',
    imes: 'i',
    ai: 'a',
    ober: 'o',
    ufat: 'u',
  }

  const expresion = new RegExp(Object.keys(reglas).join('|'), 'gi')

  return texto.replace(expresion, function (palabra) {
    return reglas[palabra.toLowerCase()] || palabra
  })
}
