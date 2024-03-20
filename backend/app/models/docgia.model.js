const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const docgiaSchema = new Schema({
    hoten: String,
    ngaysinh: Date,
    phai: String,
    diachi: String,
    sodienthoai: String,
});
    

const Contact = mongoose.model('docgia',docgiaSchema);

module.exports = Contact