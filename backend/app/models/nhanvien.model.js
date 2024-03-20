const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const nhanVienSchema = new Schema({
    hotennv: String,
    password: String,
    chucvu: String,
    diachi: String,
    sodienthoai: String,
});
    

const nhanVien = mongoose.model('nhanvien',nhanVienSchema);

module.exports = nhanVien