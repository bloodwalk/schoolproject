﻿$(document).ready(function () {
   // alert("het");
   // alert("jquery works");
    $(".datepicker").datepicker({ format: 'dd/mm/yyyy', autoclose: true, todayBtn: 'linked' })

   // $("#SearchBox").css("background-color", "yellow"); pakt hem dus wel

    //var availableTags = [
    //    "ActionScript",
    //    "AppleScript",
    //    "Asp",
    //    "BASIC",];




    $("#SearchBox").autocomplete({
       // source: '@Url.Action("QuikSearchAsync", "Home")'
       source: function(request, response) {
           $.ajax(
               {
                   url: "/Home/QuikSearchAsync",
                   dataType: "json",
                   data:
                   {
                       term: request.term,
                   },
                   success: function (data) {
                       response(data);
                   }
               });
        }
       // source:availableTags
    })
});



    //$("#EditSubmit2").click(function () {
    //    alert("Handler for .click() called.");
    //});
    
    //$("input[data-autocomplete-source]").each(function () {

    //    var target = $(this);
    //    target.autocomplete({ source: target.attr("data-autocomplete-source") });
    //})
     ///////////////////////////////////////////////////// hierboven misschien later nog gebruiken
    //$("#EditSubmit").click(function () {


    //   // alert("clicked"); //werkt wel

    //    $.ajax({
    //        type: 'GET',
    //        url: "/Home/Demo1",
    //        success: function (result) {
    //            $("#EditData").html(result);
    //        }
    //    });
    //});


    //niewe code
    //$("#EditForm").submit(function (e) {

    //    alert("clicked");
    //    var form = $(this);

    //    $.ajax({
    //        type: 'GET',
    //        url: "/Home/Demo1",
    //        data: form.serialize(),
    //        success: function (result) {
    //            $("#EditData").html(result);
    //        }
    //    });

    //    e.preventDefault();

    //}







    ////////////////////////////////////////// voor morgen.
    //$("#idForm").submit(function (e) {


    //    var form = $(this);
    //    var url = form.attr('action');

    //    $.ajax({
    //        type: "POST",
    //        url: url,
    //        data: form.serialize(), // serializes the form's elements.
    //        success: function (data) {
    //            alert(data); // show response from the php script.
    //        }
    //    });

    //    e.preventDefault(); // avoid to execute the actual submit of the form.
    //});







    //document.getElementById("para").onclick = function () { alert("hey!")};

    //$(".datepicker").click(function () {
    //    $(this).hide();
    //}); datepicker en jquery werken allebei gewoon

var onSuccess = function (context) {
    // alert(context);

    $(".datepicker").datepicker({ format: 'dd/mm/yyyy', autoclose: true, todayBtn: 'linked' })
};

//function Success() {

//    //$('#divloading').hide();

//    //data - ajax - success="Success"data - ajax - failure="Failure"
//}

//function Failure() {

//    //$('#divloading').hide();
//    //alert("Form Failed");
//}