const con = require('../../config/database')


function getTaskList(req,res){
  return con.queryGet('SELECT * FROM TB_TASKLIST',res)
}

function getTaskListCount(req,res){
  return con.queryGet('SELECT COUNT(cod_idtasklist) AS idTasklist FROM tb_tasklist',res)
}

function getTaskListById(id,res){
    return con.queryGet(`SELECT * FROM TB_TASKLIST WHERE COD_ID_USER_TASKLIST like ${id}`,res)
}

function verifyTaskList(idUserTaskList,taskListName,cb){
  return con.queryFunction(`SELECT * FROM TB_tasklist tl INNER JOIN tb_user us ON (tl.cod_id_user_tasklist = us.cod_iduser)
  WHERE cod_id_user_tasklist = ${idUserTaskList} AND des_nom_tasklist like "${taskListName}"`,cb)
}

function verifyTaskListById(id,cb){
  return con.queryFunction(`SELECT * FROM TB_tasklist WHERE cod_idtasklist = ${id}`,cb)
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

function updateTaskListByParams(req,res){
  return con.query(`UPDATE db_lifeapp.tb_tasklist SET des_nom_tasklist='${req.taskListName}',
                                                  des_type_tasklist='${req.taskListType}',
                                                  des_tasklist='${req.taskListText}',
                                                  des_date='${req.date}'


                                WHERE cod_idtasklist = ${req.tasklistId}`)
}

module.exports = {getTaskList,getTaskListById,getTaskListCount,
                  verifyTaskList,verifyTaskListById,
                  setTaskListByParams,updateTaskListByParams}
