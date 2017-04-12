var app = angular.module("mod", []);
app.controller("calctrl", func);
function func($scope)
{
	$scope.op1;
	$scope.op2;
	$scope.result;
	
	$scope.calculate = function()
	{
		if($scope.operator == "+")
		{
			$scope.result = parseInt($scope.op1) + parseInt($scope.op2);
		}
		else if($scope.operator == "-")
		{
			$scope.result = parseInt($scope.op1) - parseInt($scope.op2);
		}
		else if($scope.operator == "*")
		{
			$scope.result = parseInt($scope.op1) * parseInt($scope.op2);
		}
		else if($scope.operator == "/")
		{
			$scope.result = parseInt($scope.op1) / parseInt($scope.op2);
		}
		else
		{
			$scope.result = "Please select an operator";
		}
	}
	
	/*
	$scope.selectAdd = function()
	{
		$scope.operator="+";
	}
	$scope.selectSubtraction = function()
	{
		$scope.operator="-";
	}
	$scope.selectMultiplication = function()
	{
		$scope.operator="*";
	}
	$scope.selectDivision = function()
	{
		$scope.operator="/";
	}*/
	
	$scope.selectOperator = function(optr)
	{
		$scope.operator = optr;
	}
}

