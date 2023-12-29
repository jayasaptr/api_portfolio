'use_strict'
class Meta {
  constructor(code, message, success) {
    this.code = code
    this.message = message
    this.success = success
  }
}

class Response {
  constructor(code = 2000, message = 'Success', success = true) {
    this.meta = new Meta(code, message, success)
  }

  with_data(data) {
    this.data = data
    return this
  }

  with_token(token) {
    this.token = token
    return this
  }

  with_list(list) {
    this.data = { list }
    return this
  }

  with_stack(stack) {
    this.stack = stack
    return this
  }

  with_data_list(data, list) {
    this.data = { ...data, list }
    return this
  }
}
module.exports = Response
