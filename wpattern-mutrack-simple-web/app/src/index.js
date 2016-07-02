'use strict';

var BASE_URL = 'http://localhost:8080/api';

  angular.module('mutrack', ['checklist-model', 'ngNotify', 'ngRoute'])
  .constant('SERVICE_PATH', {
    'ROOT_PATH': BASE_URL,
    'PUBLIC_PATH': BASE_URL + '/public',
    'PRIVATE_PATH': BASE_URL + '/private'
  })
  .config(function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'src/home/home.html',
        controller: 'HomeCtrl'
      })
      .when('/login', {
        templateUrl: 'src/login/login.html',
        controller: 'LoginCtrl'
      })
      .when('/packagee', {
        templateUrl: 'src/packagee/packagee.html',
        controller: 'PackageeCtrl'
      })
      .when('/user', {
        templateUrl: 'src/user/user.html',
        controller: 'UserCtrl'
      })
      .when('/jasper', {
        templateUrl: 'src/jasper/jasper.html',
        controller: 'JasperCtrl'
      })
      .when('/validar', {
        templateUrl: 'src/validar/main.html',
        controller: 'MainCtrl'
      })
      .when('/file', {
        templateUrl: 'src/file/file.html',
        controller: 'FileCtrl'
      })
      .when('/partial', {
        templateUrl: 'src/partial/slide.html',
        controller: 'SlideCtrl'
      })



      .otherwise({
        redirectTo: '/'
      });
  }).
  run(function($rootScope) {
    $rootScope.authDetails = {
      name: '',
      authenticated: false,
      permissions: [],
      file: {}
    };



  })
.directive('appFilereader', function(
$q
) {
/*
made by elmerbulthuis@gmail.com WTFPL licensed
*/
var slice = Array.prototype.slice;

return {
  restrict: 'A',
  require: '?ngModel',
  link: function(scope, element, attrs, ngModel) {
    if (!ngModel) {return;}

    ngModel.$render = function() {};
    function readFile(file) {
      var deferred = $q.defer();

      var reader = new FileReader();
      reader.onload = function(e) {
        deferred.resolve(e.target.result);
      };
      reader.onerror = function(e) {
        deferred.reject(e);
      };
      reader.readAsDataURL(file);

      return deferred.promise;
    }
    element.bind('change', function(e) {
      var element = e.target;
      if(!element.value) {return;}

      element.disabled = true;
      $q.all(slice.call(element.files, 0).map(readFile))
        .then(function(values) {
          if (element.multiple) {ngModel.$setViewValue(values);}
          else {ngModel.$setViewValue(values.length ? values[0] : null);}
          element.value = null;
          element.disabled = false;

           });
       }); //change
      } //link

};
    }).directive('slider', function ($timeout) {
 return {
   restrict: 'AE',
 replace: true,
 scope:{
   images: '='
 },
   link: function (scope) {

   scope.currentIndex=0;

   scope.next=function(){
     if(scope.currentIndex<scope.images.length-1){
      scope.currentIndex++;
     }else{
       scope.currentIndex=0;
     }
   };

   scope.prev=function(){
     if( scope.currentIndex>0){
       scope.currentIndex--;
     }else{
       scope.currentIndex=scope.images.length-1;
     }
   };

   scope.$watch('currentIndex',function(){
     scope.images.forEach(function(image){
       image.visible=false;
     });
     scope.images[scope.currentIndex].visible=true;
   });

   /* Start: For Automatic slideshow*/

   var timer;

   var sliderFunc=function(){
     timer=$timeout(function(){
       scope.next();
       timer=$timeout(sliderFunc,5000);
     },5000);
   };

   sliderFunc();

   scope.$on('$destroy',function(){
     $timeout.cancel(timer);
   });

   /* End : For Automatic slideshow*/

 },templateUrl:'src/partial/slide.html'




    };


  });
