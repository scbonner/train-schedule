
//Initialize Firebase

  var config = {
    apiKey: "AIzaSyAQpF1uw7ig4ORErHl9VwUWEKcg1M8lnoc",
    authDomain: "trainschedule-d8e9e.firebaseapp.com",
    databaseURL: "https://trainschedule-d8e9e.firebaseio.com",
    projectId: "trainschedule-d8e9e",
    storageBucket: "trainschedule-d8e9e.appspot.com",
    messagingSenderId: "147332768252"
  };

firebase.initializeApp(config);
var currentTime = moment();
//Create variables and value
let database = firebase.database();
let trainName = "";
let destination = "";
let frequency = "";
let startTime = "";
let minutesAway = "";

$("#trainSchedule > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + startTime + "</td></tr>");

//Pulls information from form text boxes
$("#addSubmitBtn").on("click", function() {
    var trainName = $("#trainLoad").val().trim();
    var destination = $("#destinationLoad").val().trim();
    var startTime = $("#startLoad").val().trim();
    var frequency = $("#frequencytLoad").val().trim();
});

$(".form-field").on("keyup", function() {
    train = $("#train-name").val().trim();
    trainDestination = $("#destination").val().trim();
    trainStartTime = $("#start-time").val().trim();
    trainFrequency = $("#frequency").val().trim();
});
    
//Creates key value pairs in firebase
    database.ref().push({
        trainName: trainName,
        destination: destination,
        frequency: frequency,
        startTime: startTime,
});
//Clear textboxes after submit button is clicked
    trainName = $("#trainName").val("");
    destination = $("#destination").val("");
    startTime = $("#startTime").val("");
    frequency = $("#frequency").val("");

//launch project
database.ref().on("child_added", function(snapshot){
    const trow = $("<tr>");
    trow.append("<td>$(snapshot.val().trainName)</td>");
    trow.append("<td>$(snapshot.val().destination)</td>");
    trow.append("<td>$(snapshot.val().startTime)</td>");
    trow.append("<td>$(snapshot.val().frequency)</td>");
    $("#trPlaceholder");
});
