angular.module('lifeStyleApp').config([
  '$stateProvider',
  '$urlRouterProvider',
  function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('dashboard',{
      url:"/dashboard",
      templateUrl:"dashboard/dashboard.html"
    }).state('taskList',{
      url:"/taskList?page",
      templateUrl:'../taskList/tabs.html'
    })

    $urlRouterProvider.otherwise('/dashboard')
  }
])
