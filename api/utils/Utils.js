'use strict'
const ResponseEnvelope = require('../utils/Response')
require('dotenv').config()
// const { customAlphabet } = require('nanoid')
const { customAlphabet } = require('nanoid')
require('dotenv').config()

const convertToRupiah = (angka) => {
  let rupiah = ''
  const angkarev = angka.toString().split('').reverse().join('')
  for (let i = 0; i < angkarev.length; i++) {
    if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.'
  }
  return (
    'Rp. ' +
    rupiah
      .split('', rupiah.length - 1)
      .reverse()
      .join('')
  )
}

function randomString() {
  return Math.floor(100000 + Math.random() * 900000)
}

const validationCallback = (res, error, next) => {
  if (error) {
    const s = error.details[0].message
    const errMessage = s.replace(/\"/g, '').replace(/_/g, ' ') // eslint-disable-line
    const resss = new ResponseEnvelope(4009, errMessage, false)
    return res.status(409).json(resss)
  } else {
    next()
  }
}

const imageResolved = (folder_name, image_name) => {
  return process.env.PUBLIC_IMAGE + '/images/' + folder_name + '/' + image_name
}
// const imageResolved = (req, folderName = "profile", imageName = "default.png") => {
//   const url = process.env.BASE_URL || req.protocol + "://" + req.headers.host + req.url;
//   return url + "/images/" + folderName + "/" + imageName;
//   // return req.protocol + "://" + req.get("host") + "/images/" + folderName + "/" + imageName;
// };

// const generateUUID = (startWith = "TOPUP") => {
//   return `${startWith}-${shortId.generate().toUpperCase()}${Date.now().toString(36).toUpperCase()}`;
// };

const generateUUID = (startWith = '', length = 8) => {
  const result = customAlphabet('1234567890ABCDEFGHIZKLMNOPQRSTUV', length)
  return `${startWith}${result()}`
}

const generateCHAR = () => {
  const result = customAlphabet('ABCDEFGHIZKLMNOPQRSTUV', 3)
  return `${result()}`
}

const generateREFFID = () => {
  const result = customAlphabet('1234567890', 5)
  return `${generateCHAR()}${result()}`
}

const timeSince = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000)

  let interval = Math.floor(seconds / 31536000)

  if (interval > 1) {
    return interval + ' tahun lalu'
  }
  interval = Math.floor(seconds / 2592000)
  if (interval > 1) {
    return interval + ' bulan lalu'
  }
  interval = Math.floor(seconds / 86400)
  if (interval > 1) {
    return interval + ' hari lalu'
  }
  interval = Math.floor(seconds / 3600)
  if (interval > 1) {
    return interval + ' jam lalu'
  }
  interval = Math.floor(seconds / 60)
  if (interval > 1) {
    return interval + ' menit lalu'
  }
  return Math.floor(seconds) + ' detik lalu'
}

module.exports = {
  validationCallback,
  imageResolved,
  generateUUID,
  generateREFFID,
  convertToRupiah,
  timeSince,
  randomString
}
