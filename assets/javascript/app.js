$(document).ready(function () {

var questions = [{
	question: "Which country does St. Nicholas originally belong to?",
	choices: ["Russia","Turkey","Nederland","United States"],
	correctAnswer:"answer2"
}, {question: "Which country can be credited with the creation of the Christmas beverage, eggnog?",
	choices: ["England", "United States", "Germany","Sweden"],
	correctAnswer:"answer1"
}, {question: "In which year was the first Christmas card created?",
	choices: [1833,1843,1853,1863],
	correctAnswer: "answer2"
}, {question: "Who wrote the score for The Nutcracker?",
	choices:["Mendellson","Mozart","Holst","Tchaikovsky"],
	correctAnswer: "answer4"
}, {question: "What was the original name of the Carol Jingle Bells?",
	choices:["Jingle All The Way","Dashing Trough The Snow","One Horse Open Sleigh","What Fun It Is To Ride"],
	correctAnswer:"answer3"
}, {question: "Which was the last state in the States that declared Christmas a legal holiday?",
	choices:["Oklahoma","Texas","Alabama","Utah"],
	correctAnswer:"answer1"
}, {question: "Traditionally, kids leave out snacks for Santa Claus. What are these snacks?",
	choices:["Milk and Cokkie","Musketers","Milk","Nuts"],
	correctAnswer:"answer1"
}, {question: "What animated 2004 film is about a train that carries kids to the North Pole?",
	choices:["The Nutcrackers", "Christmas Vacation","The Polar Express", "White Christmas"],
	correctAnswer:"answer3"
}, {question: "'Miracle on 34th Street' centers on what real-life department store?",
	choices:["Sears","JC Penny","Macy's","Walmart"],
	correctAnswer:"answer3"
}, {question: "Which president was the first to decorate the White House Christmas tree?",
	choices:["Franklin Pierce","Benjamin Franklin","George Washington","Abraham Lincoln"],
	correctAnswer:"answer1"
}];

var questionCounter=0;
var random=0;
var randomQuestions;
var answerArray=[];
var time=0;
var intervalId;
var correctAnswers=0;
var wrongAnswers=0;
var answer= "";

var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=christmas"
var queryUrlNo ="https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=no"

function getQuestion(){
	time=26;
	$("#question").html(questions[questionCounter].question);
	answerArray = questions[questionCounter].choices;
		$("#answer1").text(answerArray[0]);
    	$("#answer2").text(answerArray[1]);
    	$("#answer3").text(answerArray[2]);
    	$("#answer4").text(answerArray[3]);
    answer = questions[questionCounter].correctAnswer	
}
//timer

function run() { 
    intervalId = setInterval(decrement,1000);
    }
    function decrement(){
    	time--;
    	$("#timer").text("Time: " + time);
    	if (time === 0){
    		getQuestion();
    	}
    }   
//control answers

$(".answers").on("click",function() {
	console.log(this.id)	
	console.log(answer);
	questionCounter++

	if (this.id === answer){
		correctAnswers++
		console.log(correctAnswers)
		console.log("nice")
		$.ajax({
		  url: queryURL,
		  method: 'GET'
		}).done(function(response) {
			var imageUrl = response.data.image_original_url;
			var image =  $("<img>");
			image.attr("src", imageUrl);
		  $("#gif").html(image);
		});
	} else {
		console.log("keep going");
		wrongAnswers++
		$.ajax({
		  url: queryUrlNo,
		  method: 'GET'
		}).done(function(response) {
			var imageUrl = response.data.image_original_url;
			var image =  $("<img>");
			image.attr("src", imageUrl);
		  $("#gif").html(image);
		});	
  }	

  if (questionCounter === 9){
	$("#questionNumber").text("Results");
}
setTimeout(function(){
		  	getQuestion();
		  },3000);

});

//get results 



getQuestion();
run();
decrement();

		
});
	