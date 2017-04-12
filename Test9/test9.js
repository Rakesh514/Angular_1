var app = angular.module("mod", []);
app.controller("ctrl1", func1);
function func1($scope)
{
	$scope.newtext = "eat1";
}

app.controller("ctrl2", func2);
function func2($scope)
{
//Uncommenting the below line will show up 'eat2' in the browser. But when commented,
//in html, the inner div does not have any impact because of the function, 'func2' associated with the 
//respective controller, 'ctrl2'. So, it bubbles up to the nesting 'div' searching for the binding
//provided for the same variable. So, even though the scope is different for the nesting div controller, 
//the variable(property) associated with the scope is shown up in the nested div.
	//$scope.newtext = "eat2";
}
	