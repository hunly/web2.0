const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {save_user_information} = require('./models/server_db');
const path = require('path');
const publicPath = path.join(__dirname,'./public');
const paypal = require('paypal-rest-sdk');

/* Handling all the parsing */
app.use(bodyParser.json());
app.use(express.static(publicPath));

/*Paypal configuration */
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AQ-rZjwnQtNrHrzM6v96oGp9VMefkosl3LLJ-S80MyAitvim3W6gIkm-QW-n1yo5eK62CsmDcJ0Je7tR',
  'client_secret': 'EAh6j6qEfV_rlRgKk0ezb-Suak3-pEGlR3JH0ScoxgqCa_ftjkoZorgB76L8tubvix_VN67VdCM23Ddt'
});


app.post('/post_info', async (req,res) => {
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

app.get('/get_total_amount', async(req, res)=> {
  var result = await get_total_amount();
  console.log(result);
  res.send(result);
})

app.listen(3000,()=> {
  console.log("server is running on port 3000");
});
