const bcrypt = require('bcryptjs')

/* compare password with bcrypt */
exports.compare_password = (password = '', password_hash = '') => {
  return bcrypt.compareSync(password, password_hash)
}
