/**
 * Created by Sufiyan on 2/19/2016.
 */
angular.module('SalesmanApp')
    .controller('SalesmanController', function ($scope,$http) {
$scope.sale= function () {
    console.log("check");
    $http.get("Admin.html",$scope.sm).success(function (response) {
    console.log('response')
    })

}

    });