// "use_strict";
// const schema = require("./schema");
// const utils = require("../utils/Utils");

// const validate = class validation {
//   static v_login(req, res, next) {
//     const { error } = schema.schema_login().validate(req.body);
//     utils.validationCallback(res, error, next);
//   }

//   static v_register(req, res, next) {
//     const { error } = schema.schema_register().validate(req.body);
//     utils.validationCallback(res, error, next);
//   }

//   static v_request_otp(req, res, next) {
//     const { error } = schema.schema_request_otp().validate(req.body);
//     utils.validationCallback(res, error, next);
//   }

//   static v_validate_otp(req, res, next) {
//     const { error } = schema.schema_validate_otp().validate(req.body);
//     utils.validationCallback(res, error, next);
//   }
// };

// module.exports = validate;

// // static v_sendNotification(req, res, next) {
// //   const { error } = schema.schema_sendNotif().validate(req.body);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_topup(req, res, next) {
// //   const { error } = schema.schema_topup().validate(req.body);
// //   utils.validationCallback(res, error, next);
// // }
// // static v_topup_v2(req, res, next) {
// //   const { error } = schema.schema_topup_v2().validate(req.body);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_processTopup(req, res, next) {
// //   const { error } = schema.schema_processTopup().validate(req.body);
// //   utils.validationCallback(res, error, next);
// // }

// // static vv_processTransactionEcommerce(req, res, next) {
// //   const { error } = schema.schema_processTransactionEcommerce().validate(req.body);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_cek_pembayaran(req, res, next) {
// //   const { error } = schema.schema_cek_pembayaran().validate(req.body);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_proses_pembelian(req, res, next) {
// //   const { error } = schema.schema_proses_pembelian().validate(req.body);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_proses_pembayaran(req, res, next) {
// //   const { error } = schema.schema_proses_pembayaran().validate(req.body);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_prefix(req, res, next) {
// //   const { error } = schema.schema_prefix().validate(req.params);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_prefixFindNomor(req, res, next) {
// //   const { error } = schema.schema_prefixFindNomor().validate(req.params);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_prefix_with_data(req, res, next) {
// //   const { error } = schema.schema_prefix_with_data().validate(req.query);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_product_list(req, res, next) {
// //   const { error } = schema.schema_product_list().validate(req.query);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_product_provider(req, res, next) {
// //   const { error } = schema.schema_productProvider().validate(req.params);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_detail_product(req, res, next) {
// //   const { error } = schema.schema_detailProduct().validate(req.params);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_menu_group(req, res, next) {
// //   const { error } = schema.schema_menu_group().validate(req.params);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_menu_tipe(req, res, next) {
// //   const { error } = schema.schema_menu_tipe().validate(req.params);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_menu_tipe_provider(req, res, next) {
// //   const { error } = schema.schema_menu_tipe_provider().validate(req.params);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_menu_tipe_provider_v2(req, res, next) {
// //   const { error } = schema.schema_menu_tipe_provider_v2().validate(req.params);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_menu_provider_v2(req, res, next) {
// //   const { error } = schema.schema_menu_provider_v2().validate(req.params);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_menu_tipe_provider_group_tipe(req, res, next) {
// //   const { error } = schema.schema_menu_tipe_provider_group_tipe().validate(req.params);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_menu_tipe_id(req, res, next) {
// //   const { error } = schema.schema_menu_tipe_id().validate(req.params);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_kategori_group(req, res, next) {
// //   const { error } = schema.schema_menu_group().validate(req.params);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_kategori_tipe(req, res, next) {
// //   const { error } = schema.schema_categori_tipe().validate(req.params);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_status(req, res, next) {
// //   const { error } = schema.schema_status().validate(req.query);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_paging_data(req, res, next) {
// //   const { error } = schema.schema_paginate().validate(req.query);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_ayat(req, res, next) {
// //   const { error } = schema.schema_ayat().validate(req.params);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_userByID(req, res, next) {
// //   const { error } = schema.schema_userByID().validate(req.query);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_firebaseID(req, res, next) {
// //   const { error } = schema.schema_firebaseID().validate(req.body);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_updateNama(req, res, next) {
// //   const { error } = schema.schema_updateNama().validate(req.body);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_updateUserName(req, res, next) {
// //   const { error } = schema.schema_updateUserName().validate(req.body);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_updateEmail(req, res, next) {
// //   const { error } = schema.schema_updateEmail().validate(req.body);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_updatePassword(req, res, next) {
// //   const { error } = schema.schema_updatePassword().validate(req.body);
// //   utils.validationCallback(res, error, next);
// // }
// // static v_forgotPassword(req, res, next) {
// //   const { error } = schema.schema_forgotPassword().validate(req.body);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_updateAlamat(req, res, next) {
// //   const { error } = schema.schema_updateAlamat().validate(req.body);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_addNominalTopup(req, res, next) {
// //   const { error } = schema.schema_addNominalTopup().validate(req.body);
// //   utils.validationCallback(res, error, next);
// // }

// // static v_password(req, res, next) {
// //   const { error } = schema.schema_password().validate(req.body);
// //   utils.validationCallback(res, error, next);
// // }
