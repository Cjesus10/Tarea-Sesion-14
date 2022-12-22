let app = angular.module("MyApp",[])

app.controller("formCtrl", function($scope){
    $scope.calcular = function(){
    
        $scope.basico = $scope.horas * $scope.tarifa;

        if($scope.basico > 10000){
            $scope.desc = 0.3*$scope.basico;
        }
        else if($scope.basico >= 8001){
            $scope.desc = 0.21*$scope.basico;
        }
        else if($scope.basico >= 4001){
            $scope.desc = 0.15*$scope.basico;
        }
        else if($scope.basico >= 1001){
            $scope.desc = 0.08*$scope.basico;
        }
        else if($scope.basico >= 501){
            $scope.desc = 0.02*$scope.basico;
        }
        else{
            
            $scope.desc=0;
            $scope.neto=0;
        }

        $scope.neto = $scope.basico - $scope.desc 
    }
    $scope.calcular()
})