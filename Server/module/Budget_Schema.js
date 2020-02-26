const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userBudgetSchema = new Schema({
    budget :{
        type : Number,
        require : true
    },
    user_id : String
});

const userBudgetInfo = new Schema({
    expenses: {
        type : String,
        require : true
    },
    amount : {
        type : Number,
        require : true
    },
    user_id : String

});

module.exports.userBudget = mongoose.model('userBudget' , userBudgetSchema);
module.exports.budgetInfo = mongoose.model('budgetInfo' , userBudgetInfo );