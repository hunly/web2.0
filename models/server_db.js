var db = require('../db.js');
save_user_information = (data) => new Promise((resolve, reject)=>{
  db.query('INSERT INTO crypodia_gateway SET ?', data, function(err, results, fields) {
    if(err) {
      reject('Could not insert into crypodia_gateway');
    }
    resolve('Successful');
  });
})

var db = require('../db.js');
get_total_amount = (data) => new Promise((resolve, reject)=>{
  db.query('select sum(amount) as total_amount from crypodia_gateway', null, function(err, results, fields) {
    if(err) {
      reject('Could not get total amount');
    }
    resolve(results);
  });
})

get_list_of_participants = (data) => new Promise((resolve, reject) => {
  db.query('select email from crypodia_gateway', null, function (err, results, fields) {
    if (err) {
      reject('Could not fect list of paticipants');
    }
    resolve(results);
  });
});

delete_users = (data) => new Promise((resolve, reject) => {
  db.query('delete from crypodia_gateway where ID > 0', null, function (err, results, fields) {
    if (err) {
      reject('Could not delete all users');
    }
    resolve('deleted all users successfully');
  });
});

module.exports = {
  save_user_information,
  get_list_of_participants,
  delete_users
}
