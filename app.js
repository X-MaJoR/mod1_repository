(function () {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.result = function () {
    var num = countitem($scope.item);
    $scope.message = reply(num);
  };
  function countitem(item) {
    var count = 0;
    if (item) {
      var array = item.split(',');
      for (var string in array) {
        if (array[string].trim().length != 0) {
          count++;
        }    }  }
    return count;
  }
  function reply(num) {
    if (num === 0) {
      return 'Please enter data first';
    }
    else if (num <= 3) {
      return 'Enjoy!';
    } else {
      return 'Too much!';
    }  } }

})();
