const con = require('../../config/database')


function getAllUsers(req,res){
  return con.query('SELECT * FROM TB_USER',res)
}

function getUserById(id,res){
  return con.query(`SELECT * FROM TB_USER WHERE COD_IDUSER like ${id}`,res)
}

function verifyUser(name,cb){

  return con.queryFunction(`SELECT * FROM TB_USER WHERE des_name like "${name}"`,cb)
}

function setUserByParams(req,res){

  return con.query(`INSERT INTO db_lifeapp.tb_user (des_name,
                                                    des_email,
                                                    des_endereco,
                                                    num_cep,
                                                    num_phone,
                                                    des_password)
                          VALUES ('${req.name}',
                                  '${req.email}',
                                  '${req.endereco}',
                                  ${req.cep},
                                  ${req.phone},
                                  '${req.password}')`,res)

      }



module.exports = {getAllUsers,getUserById,verifyUser,setUserByParams}
