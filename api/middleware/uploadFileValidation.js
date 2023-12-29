'use_strict'
const ResponseEnvelope = require('../../utils/Response')

// const validateUploadProfile = async (req, res, next) => {
//   var maxSize = 5 * 1000 * 1000;
//   //CHECK FILE EXIST
//   if (!req.file) {
//     let resss = new ResponseEnvelope(4009, "No file selected");
//     return res.status(409).json(resss);
//   } else {
//     //CHECK FILE SIZE
//     if (req.file.size > maxSize) {
//       let resss = new ResponseEnvelope(4009, "Ukuran file terlalu besar, maksimal file 5 Mb");
//       return res.status(409).json(resss);
//     } else {
//       //CHECK FILE EXTENTION
//       if (req.file.mimetype == "image/jpeg" || req.file.mimetype == "image/png" || req.file.mimetype == "image/jpg") {
//         return next();
//       } else {
//         let resss = new ResponseEnvelope(4009, "Type file yang dizinkan [jpeg, png, jpg]");
//         return res.status(409).json(resss);
//       }
//     }
//   }
// };

const validate_upload_file = async (req, res, next) => {
  const max_size = 5 * 1000 * 1000
  // CHECK FILE EXIST
  if (!req.file) {
    const resss = new ResponseEnvelope(4009, 'No file selected')
    return res.status(409).json(resss)
  } else {
    // CHECK FILE SIZE
    if (req.file.size > max_size) {
      const resss = new ResponseEnvelope(
        4009,
        'Ukuran file terlalu besar, maksimal file 5 Mb'
      )
      return res.status(409).json(resss)
    } else {
      // CHECK FILE EXTENTION
      // if (req.file.mimetype == "image/jpeg" || req.file.mimetype == "image/png" || req.file.mimetype == "image/jpg") {
      return next()
      // } else {
      //   let resss = new ResponseEnvelope(4009, "Type file yang dizinkan [jpeg, png, jpg]");
      //   return res.status(409).json(resss);
      // }
    }
  }
}

module.exports = { validate_upload_file }
