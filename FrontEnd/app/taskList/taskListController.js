(function() {
  angular.module('lifeStyleApp').controller('TaskListCtrl',[
    '$http',
    '$location',
    'msgs',
    'tabs',
    TaskListController
  ])

  function TaskListController($http,$location,msgs,tabs){
    const vm = this
    const url = 'http://localhost:4000/api/taskList'

    vm.refresh = function () {
      const page = parseInt($location.search().page) || 1
      $http.get(`${url}?skip=${(page - 1)*10}&limit=10`).then(function(response) {
        vm.TaskList = response.data

        $http.get(`${url}/count`).then(function(response){
          vm.pages=Math.ceil(response.data.value/10)
          tabs.show(vm,{tabList:true,tabCreate:true})

        })
      })
    }

    vm.create = function(){

      var obj = { cod_id_user_tasklist:vm.TaskList.cod_id_user_tasklist,
                  des_nom_user_tasklist:vm.TaskList.des_nom_user_tasklist,
                  des_nom_tasklist:vm.TaskList.des_nom_tasklist,
                  des_type_tasklist:vm.TaskList.des_type_tasklist,
                  des_tasklist:vm.TaskList.des_tasklist,
                  des_date:vm.TaskList.des_date}

      $http.post(url, obj).then(function(response) {
        msgs.addSuccess('Lista criada com sucesso')
        vm.refresh()
      }).catch(function(response) {
        msgs.addError(response.data.errors)
      })
    }

    vm.showTabDelete = function(Tasklist) {
      vm.taskList = Tasklist
      console.log(vm.taskList)
      tabs.show=(vm,{tabUpdate:true})

    }

    vm.refresh()
  }

})()
