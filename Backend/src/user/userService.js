var userModel = require('./userModel');
var key = "123456789encryptkey";
var encryptor = require('simple-encryptor')(key);

module.exports.createUserDBService = (userDetails) => {

    return new Promise(function myRegFn(resolve, reject) {

        var userModelData = new userModel();

        userModelData.username = userDetails.username;
        userModelData.email = userDetails.email;
        //Encrypt the password before saving to the database
        //userModelData.password = userDetails.password;
        var encrypted = encryptor.encrypt(userDetails.password);
        userModelData.password = encrypted;

        userModelData.save(function resultHandle(error) {
            if (error) {
                reject(false);
                console.log(error);
            } else {
                resolve(true);
            }
        });
    });
}

module.exports.loginUserDBService = (userDetails) => {

    return new Promise(function myLogFn(resolve, reject) {

        userModel.findOne({ email: userDetails.email}, function getresult(errorvalue, result) {
            if(errorvalue){
                reject({status: false, msg: "Invalid Data"});
            }
            else{
                if(result != undefined && result != null) {
                    var decrypted = encryptor.decrypt(result.password);
                    if(decrypted == userDetails.password){
                        resolve({status: true, msg: "User Validated Successfully!"});
                    }
                    else{
                        reject({status: false, msg: "Invalid password"});
                    }
                }
                else{
                    reject({status: false, msg: "Invalid email"});
                }
            }
        });
    });
}
