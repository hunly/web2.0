const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {save_user_information} = require('./models/server_db');

/* Handling all the parsing */
app.use(bodyParser.json());

app.post('/', async (req,res) => {
  var email = req.body.email;
  var amount = req.body.amount;

  /* Check validation */
  if (amount <= 1) {
    return_info = {};
    return_info.error = true;
    return_info.massage = "The amount should be greater than 1";
    return res.send(return_info);
  }

  var result = await save_user_information({'amount' : amount, 'email': email});
  res.send(result);
});



app.listen(3000,()=> {
  console.log("server is running on port 3000");
});
