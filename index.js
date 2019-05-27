var aesjs = require('aes-js');
var sha256 = require('js-sha256');
let key = 'abcd12345678901*';
let iv = 'abcd12345678901*';
let saltValue = "|Os3dcl82";
function Aes256Generater(string_Val) {
    let textto_Convert = string_Val;
    console.log("String to convert :",textto_Convert);
    key = aesjs.utils.utf8.toBytes(key,'aes');
    iv =aesjs.utils.utf8.toBytes(iv);
    textto_Convert =aesjs.utils.utf8.toBytes(textto_Convert);
    
    let aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
    let encryptedBytes = aesCbc.encrypt(aesjs.padding.pkcs7.pad(textto_Convert));
    let final_aes = Buffer.from(encryptedBytes).toString('base64');
    
    console.log("AES256 Value :",final_aes);
    
    var hash = sha256.create();
    hash.update(final_aes+saltValue);
    let final_Hash = hash.hex();
    console.log("Final Hash is :",final_Hash);
  }
  module.exports = Aes256Generater;