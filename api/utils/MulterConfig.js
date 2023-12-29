'use_strict'
const multer = require('multer')
const path = require('path')
const ResponseEnvelope = require('../utils/Response')
const fs = require('fs')
const { generate_u_u_i_d } = require('../utils/Utils')

const remove_file = (folder_name, filename) => {
  try {
    fs.unlink_sync(path.resolve(`./api/images/${folder_name}/${filename}`))

    // file removed
  } catch (err) {
    // console.error(err);
  }
}

const error_handling = async (error, req, res, next) => {
  const resss = new ResponseEnvelope(4009, error.message)
  res.status(409).json(resss)
}

// const isFileValid = (req, file, validType = ["jpg", "jpeg", "png"], cb) => {
//   const type = file.mimetype.split("/").pop();
//   const validTypes = validType;
//   console.log(type);
//   if (validTypes.indexOf(type) === -1) {
//     return cb(new Error(`jenis file yang diperbolehkan ${validType}`));
//   }
//   cb(undefined, req);
// };

const image_upload = (
  file_path,
  field_name,
  prefix = '',
  valid_type = ['jpg', 'jpeg', 'png'],
  size_of = 2000000
) => {
  return multer({
    storage: multer.disk_storage({
      // Destination to store image
      destination: path.resolve(`./api/images/${file_path}/`),
      filename: (req, file, cb) => {
        cb(
          null,
          generate_u_u_i_d(prefix, 25).toLocaleLowerCase() +
            path.extname(file.originalname)
        )
      }
    }),
    limits: {
      file_size: size_of
    }
    // fileFilter(req, file, cb) {
    //   isFileValid(req, file, validType, cb);
    // },
  }).single(field_name)
}

module.exports = { image_upload, error_handling, remove_file }
