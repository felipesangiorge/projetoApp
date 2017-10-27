const mysql = require('mysql')
const connection = mysql.createConnection({
host : 'localhost',
port: 3306,
user:'root',
password:'',
database:'db_lifeapp'
})


function connectionCheck(){
  connection.connect(function(err) {
    if(err) console.log(err)
    console.log("conectado")
  })
}

function queryGet(sqlQry,res){
  connection.query(sqlQry,function (err,results,fields) {
    if(err){
      res.json(err)
    }else{
      res.json(results)

    }
  })
}

function queryFunction(sqlQry, cb) {
  connection.query(sqlQry, cb)
}

function query(sqlQry,res){
  connection.query(sqlQry,function (err,results,fields) {
    if(err){
        console.log(err)
      return err

    }else{
      console.log(results)
      return results

    }
  })
}


module.exports = {connectionCheck,queryGet,
                  query,queryFunction}
