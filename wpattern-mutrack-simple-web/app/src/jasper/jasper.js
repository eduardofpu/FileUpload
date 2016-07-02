'use strict';

angular.module('mutrack')
  .controller('JasperCtrl', function($scope,$http) {



    $scope.geraRelatorio = function() {
      $http.get('http://localhost:8080/api/private/jasper',
      {responseType: 'arraybuffer'})
       .success(function (data) {
           var file = new Blob([data], {type: 'application/pdf'});
           var fileURL = URL.createObjectURL(file);
           window.open(fileURL);
         });
    };


});
