const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const theodoiShema = new Schema({
    hoten: String,
    ngaysinh: Date,
    phai: String,
    diachi: String,
    sodienthoai: String,
    masach: String,
    ngaymuon: Date,
    ngaytra: Date
});
    

const theodoi = mongoose.model('theodoisach',theodoiShema);

module.exports = theodoi