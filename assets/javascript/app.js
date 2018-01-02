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
var time=16;
var intervalId;
var correctAnswers=0;
var wrongAnswers=1;
var answer= "";
var interval = null;

var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=christmas"
var queryUrlNo ="https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=no"

function getQuestion(){
	time=16;
	$("#question").html(questions[questionCounter].question);
	answerArray = questions[questionCounter].choices;
		$("#answer1").text(answerArray[0]);
    	$("#answer2").text(answerArray[1]);
    	$("#answer3").text(answerArray[2]);
    	$("#answer4").text(answerArray[3]);
    answer = questions[questionCounter].correctAnswer
    questionCounter++

     if (questionCounter === 9){
  
  	results();
  	notRun();
  } else {

  	
  }
   	
}
//timer

function run() { 
    interval = setInterval(decrement,1000);
    }
 
 function notRun(){
    clearInterval(interval);
 }    

function decrement(){
    	time--;
    	if (time > 0){
    	   $("#timer").text("Time: " + time); 
    	} else if (time <= 0){
   ;
    		getQuestion();
    	}
 
    }

//control answers

$(".answers").on("click",function() {
	if (this.id === answer){
		correctAnswers++
		// console.log(correctAnswers)
		console.log("corrects"+correctAnswers)
	 // that part for giphys but there is a little bug if I open I can stop and continue to the game 
		// $.ajax({
		//   url: queryURL,
		//   method: 'GET'
		// }).done(function(response) {
		// 	var imageUrl = response.data.image_original_url;
		// 	var image =  $("<img>");
		// 	image.attr("src", imageUrl);
		//   $("#gif").html(image);
		// });
		getQuestion();
	} else if (this.id != answer){
		console.log("wrong answers" + wrongAnswers);
		wrongAnswers++
		// $.ajax({
		//   url: queryUrlNo,
		//   method: 'GET'
		// }).done(function(response) {
		// 	var imageUrl = response.data.image_original_url;
		// 	var image =  $("<img>");
		// 	image.attr("src", imageUrl);
		//   $("#gif").html(image);
		// });
	     	
	getQuestion();	 	
  }

});

//get results 

function results(){
		$("#question").html("");
  		$("#questionNumber").html("");
  		$("#timer").text(" ");
  		$("#answer1").text("Total Questions is 10.");
    	$("#answer2").text("Wrong Answers: "  + wrongAnswers);
    	$("#answer3").text("Correct Answers: " + correctAnswers);
    	$("#answer4").text("Play Again");
    $("#answer4").on("click",function() { 
    	resetGame();
    });

	}

//for new game

function resetGame() {
		questionCounter=0;
		random=0;
		randomQuestions;
		answerArray=[];
		time=16;
		intervalId;
		correctAnswers=0;
		wrongAnswers=1;
		answer= "";
		interval = null;

		getQuestion();
		run();
		decrement();
	}



getQuestion();
run();
decrement();

		
});
	