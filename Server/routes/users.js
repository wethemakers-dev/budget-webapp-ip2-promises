var express = require('express');
var User = require ('../module/User_regesteration');
const DB = require('../module/Budget_Schema');
var router = express.Router();
const bcrybt = require('bcrypt');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/////////// to retrive budget ////////////
//////////////////////////////////////////

router.get('/backBudget',(req,res) => {
  const {body} = req;
  const {budget} = body.budget;
  const UB  = new DB.userBudget();
  UB.findOne({budget : budget},(err) => {
    if (err) {
      res.send('no data');
    } else {
      res.send(err);
    }
  });
});


router.get('/login', function (req, res, next) {
  res.render('login', { title: 'login' })
});

router.post('/login', (req, res, next) => {
 
  const {body} = req;
  const {userE,userP} = body;
  const userEmails = userE.toLowerCase();
 
  
  User.findOne({userEmail :userEmails  } , (error,previousUser) => {
    console.log(previousUser.validPassword(userP));
    
      if (error) 
      res.send({messege:'error server'});
      
      if (!previousUser) 
        res.send ({messege:'no user found'});
      if (!previousUser.validPassword(userP))
       {res.send({messege : 'error Password'});}
       
       res.send(previousUser);
      
  })
});


router.get('/reg', function (req, res, next) {
  res.render('reg', { title: 'SignUp' })
});



//old my encrypted Sys
///////////////////////////////////////////////////////////////////
// function ASCIIconverter (Password) { 
//   var NewPass = [Password.length];
//   for (let index = 0; index < Password.length; index++) {
    
//     if (index === 0) {
//       NewPass[index] = Password.charCodeAt(index);
//     } else {
//       NewPass += Password.charCodeAt(index);
//     }
     
     
//   }
  
//   return NewPass ;
// }

// function ASCIIdecoded(ACSII) {
//   var NewPass1 = [ACSII.length];
//   for (let index = 0; index < ACSII.length; index++) {
//       if (index === 0) {
//         NewPass1[index]  =  String.fromCharCode(ACSII[index]);
//       } else {
//         NewPass1 += String.fromCharCode(ACSII[index]);
//       }
//   }
//   console.log (NewPass1);
//   return NewPass1;

// }
///////////////////////////////////////////////////////////////////////////////////


///////////////////////
// user registration //
///////////////////////

router.post('/insert', (req, res) => {
  
 // var ASC = req.userEmail.charcodeAt();
  // console.log(ASC);
  
  const { body } = req
  const { userN, userP, userE } = body;
  // console.log(userEmail); 
  // console.log(ASCIIconverter(userPassword));
 
  
  const userEmails = userE.toLowerCase();
 
  const newUser = new User();
    newUser.userName = userN;
    newUser.userEmail = userE.toLowerCase();
    newUser.userPassword = new User().generateHashCode(userP);
    console.log(newUser.userPassword);
    User.findOne({ userEmail: userEmails }, (error, previousUser) => {
      if (error) {
        return res.send(
          {
            sucsses: false, messege: 'server error1'
          }
        )
      }
      if (previousUser) {
  
        return res.send({  messege: 'error : user already exist' })
      }
      else {
  
        newUser.save((error, user) => {
          if (error) {
            return res.send(
              {
                 messege: 'error : server error2'
              });
  
          } else
            return res.send(user);
  
        }
        );
        // save new user
      }
  
    });

  });


  /////////// To add expenses $$ amount //////////
  ////////////////////////////////////////////////

  router.post('/getExpensesAndAmount') , (req,res) => {
    const {formExpenses , formAcount} = req;
    const BI = new DB.userBudget();
    BI.findOne({expenses : formExpenses} , (error) => {
      if (!error) {
        BI.save((error,budggetInfo) => {
          if (error) {
            res.send('Expenses Already Exist')
          } else {
            
          }
        })
      } else {
        return res.send({ sucsses: true, messege: 'Save Done' });
      }
    });
  }


module.exports = router;
