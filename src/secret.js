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
    console.log('Found secret!')
}catch(_){
    secret = generateSecret();
    fs.writeFileSync('./secret.txt',secret);
    console.log('Generated secret. It is in secret.txt!');
}

module.exports = secret;