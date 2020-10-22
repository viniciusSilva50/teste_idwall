/*
 * Regex
 */

/* ENUNCIADO
 *
 * Escreva uma função que busque no texto os valores de "height" e "width"
 * e retorne um objeto { "height": x, "width": y } contendo esses valores ignorando sua medida (px, %, em).
 *
 * Ex:1
 * [INPUT]
 * "<div style="height: 20px; width: 60px;">"
 * [OUTPUT]
 * {
 *   height: 20,
 *   width: 60
 * }
 *
 * Ex: 2
 * [INPUT] String
 * "<div style="background-color: red;"> <img style="width: 120px; height: 20%" /></div>"
 * [OUTPUT] Object
 * {
 *   width: 120,
 *   height: 20
 * }
 */

const extractSize = htmlTemplate => {
    const reg = /(height|width)(\: |\:)([0-9]+)/g
    const result = { height:0, width:0 }
    

    while ((results = reg.exec(htmlTemplate)) !== null) {
        const [fullMatch] = results        
        const [prop, number] = fullMatch.split(':')
        if (!result[prop]) result[prop] = +number
    }
    return result
}

module.exports = extractSize
