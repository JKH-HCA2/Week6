"use strict";

$(function()
{
    $("#enterBtn").on("click",function()
    {
        let username = $("#nameInput").val();
        localStorage.currUser = username;
        let role = $("input[name='typeRadio']:checked").val()
        localStorage.userRole = role
    })
})