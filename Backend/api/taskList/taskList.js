const con = require('../../config/database')


function getTaskList(req,res){
  return con.queryGet('SELECT * FROM TB_TASKLIST',res)
}

function getTaskListById(id,res){
    return con.queryGet(`SELECT * FROM TB_TASKLIST WHERE COD_ID_USER_TASKLIST like ${id}`,res)
}

function verifyTaskList(idUserTaskList,taskListName,cb){
  return con.queryFunction(`SELECT * FROM TB_tasklist tl INNER JOIN tb_user us ON (tl.cod_id_user_tasklist = us.cod_iduser)
  WHERE cod_id_user_tasklist = ${idUserTaskList} AND des_nom_tasklist like "${taskListName}"`,cb)
}

function setTaskListByParams(req,res) {

  return con.query(`INSERT INTO db_lifeapp.TB_tasklist (cod_id_user_tasklist,
                                                    des_nom_user_tasklist,
                                                    des_nom_tasklist,
                                                    des_type_tasklist,
                                                    des_tasklist,
                                                    des_date)
                          VALUES (${req.idUserTaskList},
                                  '${req.taskListUserName}',
                                  '${req.taskListName}',
                                  '${req.taskListType}',
                                  '${req.taskListText}',
                                  '${req.date}')`,res)

}

module.exports = {getTaskList,getTaskListById,verifyTaskList,setTaskListByParams}
