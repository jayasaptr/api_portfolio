const {
  CODE_GLOBAL_ERROR,
  CODE_ROUTE_NOT_FOUND
} = require('../utils/ResponseCode')

/* handle error */
const error = (req, res, error, next) => {
  console.error(error)

  res.status(CODE_GLOBAL_ERROR).json({
    message: error?.message ?? 'Unhandled error'
  })

  next()
}

/* handle unsupported request */
const unsupported = (req, res, next) => {
  res.status(CODE_ROUTE_NOT_FOUND).json({
    message: 'Unsupported request'
  })

  next()
}

module.exports = { unsupported, error }
