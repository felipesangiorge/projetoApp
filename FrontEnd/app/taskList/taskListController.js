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
      $http.post(url, vm.TaskList).then(function(response) {
        msgs.addSuccess('Lista criada com sucesso')
        vm.refresh()
      }).catch(function(response) {
        msgs.addError(response.data.errors)
      })
    }

    vm.refresh()
  }

})()
