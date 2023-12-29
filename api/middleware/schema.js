// 'use_strict'
// const Joi = require('joi').extend(require('@joi/date'))
// // const myCustomJoi = Joi.extend(require('joi-phone-number'))

// /** ---------------------------------------
//  * [ Validate Collection For Middleware Routes | Methode : Body, Param, Query ]
//  *--------------------------------------- */
// const schema = class Schema {
//   static schema_login () {
//     return Joi.defaults((schema) =>
//       schema.options({
//         allowUnknown: true
//       })
//     ).object({
//       hp: Joi.string().required(),
//       password: Joi.string().required()
//     })
//   }

//   static schema_register () {
//     return Joi.defaults((schema) =>
//       schema.options({
//         allowUnknown: true
//       })
//     ).object({
//       name: Joi.string().required(),
//       username: Joi.string().required(),
//       email: Joi.string().email().required(),
//       hp: Joi.string().min(13).required(),
//       password: Joi.string().required(),
//       confirm_password: Joi.any()
//         .valid(Joi.ref('password'))
//         .required()
//         .messages({
//           'any.ref': '"a" tidak sama dengan password'
//         })
//     })
//   }

//   static schema_request_otp () {
//     return Joi.defaults((schema) =>
//       schema.options({
//         allowUnknown: true
//       })
//     ).object({
//       hp: Joi.string().min(13).required(),
//       type: Joi.string()
//         .valid('login', 'register', 'forgot_pass', 'other')
//         .required()
//     })
//   }

//   static schema_validate_otp () {
//     return Joi.defaults((schema) =>
//       schema.options({
//         allowUnknown: true
//       })
//     ).object({
//       hp: Joi.string().min(13).required(),
//       code: Joi.string().required(),
//       type: Joi.string()
//         .valid('login', 'register', 'forgot_pass', 'other')
//         .required()
//     })
//   }
// }

// module.exports = schema

//   // static schema_sendNotif() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     tokenId: Joi.string().required(),
//   //     content: Joi.string().required(),
//   //     title: Joi.string().max(255).required(),
//   //     tag: Joi.string().max(255).valid("fcm_message", "fcm_promo", "fcm_chat").required(),
//   //     type: Joi.string().max(255).valid("Info", "Promo").required(),
//   //     category: Joi.string().max(255).valid("purchase", "transaction", "promotion").required(),
//   //     image: Joi.string(),
//   //   });
//   // }

//   // static schema_topup_v2() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     nominal: Joi.number().min(50000).max(10000000).required().messages({
//   //       "number.max": "Maximal topup {{#limit}}",
//   //       "number.min": "Minimal topup {{#limit}}",
//   //     }),
//   //   });
//   // }

//   // static schema_processTopup() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     idTransaksi: Joi.string().max(255).required(),
//   //   });
//   // }

//   // static schema_processTransactionEcommerce() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     idTrx: Joi.string().max(255).required(),
//   //     status: Joi.string().valid("process", "packaging", "sending", "finish").required(),
//   //   });
//   // }

//   // static schema_cek_pembayaran() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     kode: Joi.string().max(255).required(),
//   //     // password: Joi.string().max(255).required(),
//   //     noTujuan: Joi.string().max(255).required(),
//   //     // idTrx: Joi.string().max(255).required(),
//   //   });
//   // }

//   // static schema_proses_pembelian() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     kode: Joi.string().max(255).required(),
//   //     noTujuan: Joi.string().max(255).required(),
//   //   });
//   // }

//   // static schema_proses_pembayaran() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     kode: Joi.string().max(255).required(),
//   //     noTujuan: Joi.string().max(255).required(),
//   //     idTrx: Joi.string().max(255).required(),
//   //   });
//   // }

//   // static schema_categori_tipe() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     tipe: Joi.string().max(255).required(),
//   //   });
//   // }

//   // static schema_menu_group() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     group: Joi.string().max(255).required(),
//   //   });
//   // }
//   // static schema_menu_tipe() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     tipe: Joi.string().max(255).required(),
//   //   });
//   // }

//   // static schema_menu_tipe_provider() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     tipe: Joi.string().max(255).required(),
//   //     provider: Joi.string().max(255).required(),
//   //   });
//   // }

//   // static schema_menu_tipe_provider_v2() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     tipe: Joi.string().max(255).required(),
//   //   });
//   // }

//   // static schema_menu_provider_v2() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     provider: Joi.string().max(255).required(),
//   //   });
//   // }

//   // static schema_menu_tipe_provider_group_tipe() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     provider: Joi.string().max(255).required(),
//   //     group_tipe: Joi.string().max(255).required(),
//   //   });
//   // }

//   // static schema_menu_tipe_id() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     tipe: Joi.string().max(255).required(),
//   //     id: Joi.string().max(255).required(),
//   //   });
//   // }

//   // static schema_token() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     token: Joi.string().max(255).required(),
//   //   });
//   // }

//   // static schema_prefix() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     prefix: Joi.string().min(4).max(255).required(),
//   //     tipe: Joi.string().min(4).max(255).required().valid("pulsa", "data").lowercase(),
//   //   });
//   // }

//   // static schema_prefixFindNomor() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     prefix: Joi.string().min(4).max(255).required(),
//   //   });
//   // }

//   // static schema_prefix_with_data() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     prefix: Joi.string().min(4).max(255).required(),
//   //     tipe: Joi.string().required(),
//   //   });
//   // }

//   // static schema_sendOTP() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     // hp: Joi.string().required(),
//   //     hp: myCustomJoi.string().phoneNumber({ defaultCountry: "ID", format: "e164" }).min(10).max(20).required(),
//   //   });
//   // }

//   // static schema_sendOTP_V2() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     // hp: Joi.string().required(),
//   //     hp: myCustomJoi.string().phoneNumber({ defaultCountry: "ID", format: "e164" }).min(10).max(20).required(),
//   //     email: Joi.string().email().required(),
//   //   });
//   // }

//   // static schema_validateOTPLogin() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     kode: Joi.string().required(),
//   //     hp: myCustomJoi.string().phoneNumber({ defaultCountry: "ID", format: "e164" }).min(10).max(20).required(),
//   //   });
//   // }

//   // static schema_validateOTPRegister() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     kode: Joi.string().required(),
//   //     hp: myCustomJoi.string().phoneNumber({ defaultCountry: "ID", format: "e164" }).min(10).max(20).required(),
//   //     nama: Joi.string().required(),
//   //     email: Joi.string().email().required(),
//   //     hp: Joi.string().required(),
//   //   });
//   // }

//   // static schema_detailProduct() {
//   //   return Joi.object({
//   //     id: Joi.string().min(1).required(),
//   //   });
//   // }

//   // static schema_productProvider() {
//   //   return Joi.object({
//   //     provider: Joi.string().min(1).required(),
//   //   });
//   // }

//   // static schema_product_list() {
//   //   return Joi.object({
//   //     // type: Joi.string().valid("ALL", "EMONEY", "VOUCHER").required(),
//   //     size: Joi.number().integer().min(1).required(),
//   //     pageSize: Joi.number().integer().min(1).required(),
//   //   });
//   // }

//   // static schema_paginate() {
//   //   return Joi.object({
//   //     currentPage: Joi.number().integer().min(1).required(),
//   //     pageSize: Joi.number().integer().min(1).required(),
//   //   });
//   // }

//   // static schema_status() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     status: Joi.string().valid("PROSES", "SELESAI").required(),
//   //   });
//   // }
//   // static schema_ayat() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     surah: Joi.number().integer().required(),
//   //   });
//   // }

//   // static schema_userByID() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     id: Joi.string().required(),
//   //   });
//   // }
//   // static schema_firebaseID() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     firebase_id: Joi.string().required(),
//   //   });
//   // }

//   // static schema_updateNama() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     nama: Joi.string().required(),
//   //   });
//   // }

//   // static schema_updateUserName() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     username: Joi.string().required(),
//   //   });
//   // }

//   // static schema_updateEmail() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     email: Joi.string().email().required(),
//   //   });
//   // }

//   // static schema_forgotPassword() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     hp: Joi.string().min(6).max(20).required(),
//   //     new_password: Joi.string().min(4).max(15).required(),
//   //     konfirmasi_new_password: Joi.any().valid(Joi.ref("new_password")).required(),
//   //   });
//   // }

//   // static schema_updatePassword() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     password: Joi.string().min(4).max(15).required(),
//   //     konfirmasi_password: Joi.any().valid(Joi.ref("password")).required(),
//   //   });
//   // }

//   // static schema_updateAlamat() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     alamat: Joi.string().required(),
//   //   });
//   // }

//   // static schema_password() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     password: Joi.string().required(),
//   //   });
//   // }

//   // static schema_updateBanner() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     title: Joi.string().max(30).required(),
//   //     deskripsi: Joi.string().max(255).required(),
//   //     url: Joi.string().uri(),
//   //     active: Joi.string().required().valid("0", "1"),
//   //   });
//   // }

//   // static schema_updateBank() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     bank_name: Joi.string().max(30).required(),
//   //     no_rekening: Joi.string().max(255).required(),
//   //     atas_nama: Joi.string().uri(),
//   //     active: Joi.string().required().valid("0", "1"),
//   //   });
//   // }

//   // static schema_addBank() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     bank_name: Joi.string().max(30).required(),
//   //     no_rekening: Joi.string().max(255).required(),
//   //     atas_nama: Joi.string().uri(),
//   //   });
//   // }

//   // static schema_addNominalTopup() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     nominal: Joi.integer().min(20000).required(),
//   //   });
//   // }

//   // static schema_upline_list() {
//   //   return Joi.defaults((schema) =>
//   //     schema.options({
//   //       allowUnknown: true,
//   //     })
//   //   ).object({
//   //     upline_id: Joi.string().required(),
//   //   });
//   // }
