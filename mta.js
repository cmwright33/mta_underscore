// Refactor your code with underscore
// Prompt the user
// Please choose a startLine
// Please chooose a startStation
// Please choose an endLine
// Please choose an endStation
// Find the intersection
// Display the number of stops
// Track the total journeys taken
// Calculate total cost of journeys taken at $2.50 per ride.

function Train(name, stations) {
  this.name = name;
  this.stations = stations;
}

Train.prototype.distance = function(board, exit) {
  board = this.stations.indexOf(board);
  exit = this.stations.indexOf(exit);
  return Math.abs(board - exit);
};

var lStations = [ "8th", "6th", "Union Square", "3rd", "1st" ];
var nStations = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ];
var sixStations = [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ];
var gStations = [ "Greenpoint", "Nassau", "Metropolitan", "Broadway" ];
var sStations = [ "Greenpoint", "Nassau", "Metropolitan", "Broadway" ];

var lTrain = new Train('The L Train', lStations);
var nTrain = new Train('The N Train', nStations);
var sixTrain = new Train('The Six Train', sixStations);
var gTrain = new Train('The G Train', gStations);

// var trains = [lTrain, nTrain, sixTrain, gTrain, sTrain];

// var msg = "Which train would you \nlike to get on?" + displayLines();
// var startTrain = prompt(msg);

var trains = [lTrain, nTrain, sixTrain, gTrain];

var msg = "Which train would you \nlike to get on?\n" + displayLines();
var startTrain = prompt(msg);


function displayLines() {
  var trainNames = "";
  _.each(trains, function(train){ trainNames += (train.name)+ "\n";});
  return trainNames.trim();
};


function displayStations() {
  var train = null;
  for (var j = 0; j < trains.length; j++) {
    if (trains[j].name === startTrain) {
      train = trains[j];
    }
  var trainStations = "";
  _.each(trains, function(train){trainStations += (train.stations)+ "\n";});
  }
  return trainStations.trim();
};

var msg2 = "Which station would you \nlike to get on?\n" + displayStations();
var startStation = prompt(msg2);


var msg3 = "Which train would you \nlike to end up on?\n" + displayLines();
var EndLine = prompt(msg3);


var msg4 = "Which station would you \nlike to get off at? \n" + displayStations();
var endStation = prompt

// Find the intersection of on the route

// find the intersection of the give arrays
// then

 // for (var k = 0; k < train.stations.length; k++) {
 //    trainStations += train.stations[k] + "\n";

