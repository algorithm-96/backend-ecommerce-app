require('dotenv').config();

const generateToken = ()=> {
    const xendit_api_key = process.env.XENDIT_KEY+':';
    const base64 = Buffer.from(xendit_api_key).toString('base64');
    return base64;
}

exports.xenditHeader ={
    'Authorization' : 'Basic '+generateToken(),
    'Content-Type': 'application/json'
}