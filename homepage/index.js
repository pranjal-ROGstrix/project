(function () {
  let myApp = angular.module('myApp', ['ui.router']);

  myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/root');
    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: "profile.html",
      })
      .state('root', {
        url: '/root',
        templateUrl: "home.html"
      })
      .state('hostel', {
        url: '/hostel',
        templateUrl: 'hostel.html'
      })
      .state('academics', {
        url: '/academics',
        templateUrl: 'Academics.html',
      })
      .state('academics.ct1', {
        url: '/ct1',
        templateUrl: 'ct1.html',
        controller: 'ct1'
      })
      .state('academics.ct2', {
        url: '/ct2',
        templateUrl: "ct2.html",
        controller: 'ct2'
      })
  })

  myApp.controller('ct1', function ($scope) {
    $scope.subjects = [{
        "name": "Phisycs",
        "marks": "50/60"
      },
      {
        "name": "Maths",
        "marks": "50/60"
      },
      {
        "name": "Electrical Engineering",
        "marks": "50 / 60"
      },
      {
        "name": "Engineering Drawing",
        "marks": "60 / 60"
      }

    ];
  });
  myApp.controller('ct2', function ($scope) {
    $scope.subjects = [{
        "name": "Phisycs",
        "marks": "50/60"
      },
      {
        "name": "Maths",
        "marks": "55/60"
      },
      {
        "name": "Electrical Engineering",
        "marks": "60 / 60"
      },
      {
        "name": "Engineering Drawing",
        "marks": "10 / 60"
      }

    ];
  });
})();