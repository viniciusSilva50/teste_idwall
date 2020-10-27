/*
 * Somar os argumentos
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que some
 * todos os argumentos providos.
 *
 */

const sumArguments = (...arr) => {
  return arr.reduce((final, item) => final + item)
}

module.exports = sumArguments
