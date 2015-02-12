angular.module("digitalposter", [
  'ngRoute'
])

.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
      templateUrl: 'views/start.tpl.html',
      controller: 'MenuCtrl'
    }
  );

  $routeProvider.when('/poster/:posterId', {
      templateUrl: 'views/poster.tpl.html',
      controller: 'PosterCtrl'
    }
  );

  $locationProvider.html5Mode(true);
})

.controller("PosterCtrl", function($http, $routeParams) {
  var posterId = $routeParams.posterId;

  $http.get('data/poster0' + posterId + '.csv').success(onSuccess);

  function onSuccess(csvData, status, headers, config) {
    // Convert CSV to JSON.
    console.log("onSuccess");
    var jsonData = Papa.parse(csvData, {header: true});
    self.entries = jsonData.data;
    //console.log(jsonData);
    //self.slideShows.push(jsonData.data);
    console.log('entries', self.entries);
  }

  console.log('PosterCtrl', $routeParams);
  var self = this;
 // this.entries = [];
 // this.slideShows = [];
 // this.slideShow = 0;

})

.controller("MenuCtrl", function($http) {
  console.log('MenuCtrl');
})
;
