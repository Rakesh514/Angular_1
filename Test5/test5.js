
		var m = angular.module("mod", []);
		m.controller("cntrl", func);
		
		function func($scope)
		{
			$scope.hrs = 9;
		
			$scope.onclickfunc = function()
			{
				$scope.hrs = 3;
			}
		}
	