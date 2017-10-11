const express= require('express')

module.exports = function (server) {

  const router = express.Router()
  server.use('/api',router)

  //TASKLIST
  const taskList = require('../api/taskList/taskList')

  //TASKLIST_GET
  router.route('/taskList').get(taskList.getTaskList)

  router.get('/taskList/:id?',(req,res) =>{
    if(req.params.id) id = parseInt(req.params.id)
    return taskList.getTaskListById(id,res)
  })
//END_TASKLIST

//USER
  const user = require ('../api/user/user')

//USER_GET
  router.route('/user').get(user.getAllUsers)

  router.get('/user/:id?' ,(req,res) =>{
    if(req.params.id) id= parseInt(req.params.id)
    return user.getUserById(id,res)
  })
//USER_POST
  router.post('/user', (req,res,next) =>{

      var obj =   {name:req.body.des_name,
                  email:req.body.des_email,
                  endereco:req.body.des_endereco,
                  cep:req.body.num_cep,
                  phone:req.body.num_phone,
                  password:req.body.des_password}



            user.verifyUser(obj.name, function(err, rows) {
                 if (rows.length > 0){
                   res.send({res : "usuário já cadastrado"})
                 }
                 else{
                  user.setUserByParams(obj,res)
                  next()
                  }
             })


  },function(obj,res){

    res.send("Usuário cadastrado com sucesso!")
  })

//END_USER

}
