const con = require('../../config/database')


function getAllUsers(req,res){
  return con.queryGet('SELECT * FROM TB_USER',res)
}

function getUserById(idUser,res){
  return con.queryGet(`SELECT * FROM TB_USER WHERE COD_IDUSER like ${idUser}`,res)
}

function verifyUser(name,cb){

  return con.queryFunction(`SELECT * FROM TB_USER WHERE des_name like "${name}"`,cb)
}

function verifyUserById(idUser,cb){

  return con.queryFunction(`SELECT * FROM TB_USER WHERE cod_iduser = ${idUser}`,cb)
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
function updateUserByParams(req,res){
  return con.query(`UPDATE db_lifeapp.TB_USER SET des_name='${req.name}',
                                                  des_email='${req.email}',
                                                  des_endereco='${req.endereco}',
                                                  num_cep=${req.cep},
                                                  num_phone=${req.phone},
                                                  des_password='${req.password}'

                                WHERE cod_iduser = ${req.idUser}`)
}

function deleteUserByParams(req,res){
  return con.query(`DELETE FROM tb_user where cod_iduser = ${req.idUser}`)
}



module.exports = {getAllUsers,getUserById,
                  verifyUser,verifyUserById,
                  setUserByParams,updateUserByParams,
                  deleteUserByParams}
