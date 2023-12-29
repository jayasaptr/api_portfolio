/* create random string */
function random_string(length, chars) {
  let result = ''
  for (let i = length; i > 0; --i) {
    result += chars[Math.floor(Math.random() * chars.length)]
  }
  return `${result}`
}

/* create generate uniq id with prefix */
const generate_uniq_i_d = (prefix = '', length = 15) => {
  const date = new Date()
  const res =
    prefix +
    random_string(
      length,
      `012345${date.getSeconds()}6789${date.getMinutes()}ABCDEFGHIJKLMNO${date.getFullYear()}PQRSTUVWXYZ`
    )
  return `${res}`
}

module.exports = { generate_uniq_i_d }
