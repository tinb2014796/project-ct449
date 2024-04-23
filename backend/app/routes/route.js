const express = require("express");
const nhanvien = require("../controllers/nhanvien.controller");
const docgia = require("../controllers/docgia.controller");
const nhaxuatban = require("../controllers/nhaxuatban.controller");
const sach = require("../controllers/sach.controller");
const theodoimuonsach = require("../controllers/theodoimuonsach.controller");
;


const router = express.Router();

router.route("/nhanvien")
    .get(nhanvien.findAll)
    .post(nhanvien.create)

router.route("/nhanvien/:id")
    .get(nhanvien.findOne)
    .put(nhanvien.delete)

router.route("/docgia")
    .get(docgia.findAll)
    .post(docgia.create)
    .delete(docgia.deleteAll)

router.route("/docgia/:id")
    .get(docgia.findOne)
    .post(docgia.update)
    .delete(sach.delete)
    
router.route("/nhaxuatban")
    .get(nhaxuatban.findAll)
    .post(nhaxuatban.create)

router.route("/nhaxuatban/:id")
    .get(nhaxuatban.findOne)
    .put(nhaxuatban.update)

router.route("/sach")
    .get(sach.findAll)
    .post(sach.create)
    .delete(sach.deleteAll)

router.route("/sach/:id")
    .get(sach.findOne)
    .put(sach.update)
    .delete(sach.delete)

router.route("/theodoimuonsach")
    .get(theodoimuonsach.findAll)
    .post(theodoimuonsach.create)

router.route("/theodoimuonsach/:id")
    .get(theodoimuonsach.findOne)
    .put(theodoimuonsach.update)
    .delete(theodoimuonsach.delete)

module.exports = router;