"use strict";

$(function () {
	let role;
	role = localStorage.userRole;
	let username;
	username = localStorage.currUser;
	$("#welcomeHeader").text(`Welcome ${role} ${username}`);

	if (role == "Student") 
	{
		$("#btn1").hide();
	} 
	else 
	{
		$("#btn3").hide();
	}

})