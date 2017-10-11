const con = require('../../config/database')


function getTaskList(req,res){
  return con.query('SELECT * FROM TB_TASKLIST',res)
}

function getTaskListById(id,res){
    return con.query(`SELECT * FROM TB_TASKLIST WHERE COD_ID_USER_TASK_LIST like ${id}`,res)

}

module.exports = {getTaskList,getTaskListById}
