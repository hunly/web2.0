var msql = require('mysql');
var db_config = {
  host : '127.0.0.1',
  user : 'root',
  password : 'crypodia123',
  database : 'webapp'
}

var connection;

function handDisconnect() {
  connection = mqsql.createConnetion(db_config);
  connection.connect(function(err){

    if (err) {
      console.log('Error when connecting to db: ', err);
      setTimeout(handDisconnect,2000);
    }
  });

  connction.on('error',function (err) {
    if (err.code==='PROTOCOL_CONNECTION_LOST') {
      handDisconnect();
    }else {
      throw err;
    }

  });
}

handDisconnect();

module.exports = connection;
