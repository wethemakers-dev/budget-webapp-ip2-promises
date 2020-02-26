const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema();

const userSchema = new mongoose.Schema({
    userName:{
       type:String,
       require:true
    },
    userEmail:{
        type:String,
        require:true
    },
    userPassword : {
        type:String,
        require:true
    }
});

userSchema.methods.generateHashCode = function(password) {
    return bcrypt.hashSync(password , bcrypt.genSaltSync(9));
}
    
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password , this.userPassword)
}


module.exports = mongoose.model('User',userSchema);
