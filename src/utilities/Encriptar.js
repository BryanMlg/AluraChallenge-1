export default function convertirTexto (texto) {
  const reglas = {
    e: 'enter',
    i: 'imes',
    a: 'ai',
    o: 'ober',
    u: 'ufat',
  }

  const expresion = new RegExp(Object.keys(reglas).join('|'), 'gi')

  return texto.replace(expresion, function (letra) {
    return reglas[letra.toLowerCase()] || letra
  })
}
