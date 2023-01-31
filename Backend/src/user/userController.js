var userService = require('./userService');
 
var createUserControllerFn = async (req, res) =>
{
    try{
        console.log(req.body);
        var status = await userService.createUserDBService(req.body);
        //Try declaring a value to status
        if (status) {
            res.send({ "status": true, "message": "User created successfully" });
        } else {
            res.send({ "status": false, "message": "Error creating user" });
        }
    }
    catch(err){
        console.log(err);
    }
}

var loginUserControllerFn = async (req, res) => {
    var result = null;
    try{
        var result = await userService.loginUserDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        } 
    }
    catch(error){
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
    
}

module.exports = { createUserControllerFn, loginUserControllerFn };