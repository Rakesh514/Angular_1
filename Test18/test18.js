var app = angular.module("mod", []);
app.controller("ctrl", func);
function func()
{
	this.arr = ["eat", "sleep"];
	this.addToList = function()
	{
		if(this.newItem == undefined || this.newItem.trim() == "")
		{
			return;
		}
		this.arr.push(this.newItem);
		this.newItem = "";
	}
	
	this.editList = function()
	{
		this.edit = true;
	}
	
	this.updateList = function()
	{
		this.edit = false;
		this.res = this.arr;
	}
}	