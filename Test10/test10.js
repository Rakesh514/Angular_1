var app = angular.module("mod", []);
app.controller("ctrl1", func1);
function func1()
{
	this.newtext = "eat1";
}

app.controller("ctrl2", func2);
function func2()
{
	//this.newtext = "eat2";
}
	