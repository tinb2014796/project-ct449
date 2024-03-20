
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const nxbSchema = new Schema({
    tennxb: String,
    diachi: String,
});
    

const Contact = mongoose.model('nhaxuatban',nxbSchema);

module.exports = Contact