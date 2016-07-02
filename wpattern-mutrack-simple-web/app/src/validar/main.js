
angular.module('mutrack')
  .controller('MainCtrl', function($scope,$http, ngNotify, RestSrv, SERVICE_PATH) {
    $scope.formulario = {};
    $scope.formularios = [];
    $scope.showAddEditformulario = false;

    ngNotify.config({
      theme: 'pastel'
    });




        $scope.relatorioformulario = function() {
          $http.get('http://localhost:8080/api/private/jasperform',
          {responseType: 'arraybuffer'})
           .success(function (data) {
               var file = new Blob([data], {type: 'application/pdf'});
               var fileURL = URL.createObjectURL(file);
               window.open(fileURL);
             });
        };

    // Show the form used to edit or add formularios.
    $scope.show = function() {
      $scope.showAddEditformulario = true;
    };

    // Hide the form used to edit or add formularios.
    $scope.hide = function() {
      $scope.showAddEditformulario = false;
      $scope.formulario = {};
    };



    // Manage CRUD operations.
    var formularioUrl = SERVICE_PATH.PRIVATE_PATH + '/formulario';

    $scope.editformulario = function(formulario) {
      $scope.formulario = angular.copy(formulario);
      $scope.show();
    };

    $scope.deleteformulario = function(formulario) {
      RestSrv.delete(formularioUrl, formulario, function() {
        $scope.formularios.splice($scope.formularios.indexOf(formulario), 1);
        ngNotify.set('Formulario \'' + formulario.name + '\' deleted.', 'success');
      });
    };


  



    $scope.saveformulario = function(formulario) {
      if (formulario.id) {

        RestSrv.edit(formularioUrl, formulario, function() {
          for (var i = 0; i < $scope.formularios.length; i++) {
            if ($scope.formularios[i].id === formulario.id) {
              $scope.formularios[i] = formulario;

            }
          }

          $scope.hide();
          ngNotify.set('Formulario \'' + formulario.name + '\' updated.', 'success');
        });
      } else {
        RestSrv.add(formularioUrl, formulario, function(newFormulario) {
          $scope.formularios.push(newFormulario);
          $scope.hide();
          ngNotify.set('Formulario \'' + formulario.name + '\' added.', 'success');


        });
      }
    };

    // Request all data (formularios).
    RestSrv.find(formularioUrl, function(data) {
      $scope.formularios = data;
      ngNotify.set('Loaded formularios with success.', 'success');
    });



  });
