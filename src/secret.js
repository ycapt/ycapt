const crypto = require('crypto');
const fs = require('fs');

function generateSecret(length = 10) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    const bytes = crypto.randomBytes(length);

    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars[bytes[i] % chars.length];
    }

    return password;
}

let secret;

try{
    secret = fs.readFileSync('./secret.txt').toString();
}catch(_){
    secret = generateSecret();
    fs.writeFileSync('./secret.txt',secret);
}

module.exports = secret;