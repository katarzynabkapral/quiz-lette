// user clicked start button

function start(){
document.getElementById("questions").innerHTML= "blablabla" ;
};



var category= ["history", "language", "nature", "technology"];
var historyQuestions= ["Mexico achieved independence before USA","Sir Winston Churchill was a Labour Prime Minister","The Ming Dynasty was the final Chinese Dynasty"];
var languageQuestions= ["There are 24 letters in the Greek alphabet","There is no German word meaning -fluffy","In Welsh a microwave is known as a /'popty ping'"];
var natureQuestions= ["An octopus has three hearts","There are more stars in space than grains of sand on every beach in the world","There are more fake flamingos in the world than real ones"];
var technologyQuestions= ["Nintendo was founded after the year 1900.", "Gold is not a good conductor of electricity?"," In computing, keyboards are used as input devices"];

// question number ...
function count(){
	for (count=0; count<11; count++){
		document.getElementById("count").innerHTML= "Question " + count;
	}
}

// choose a category and a question

function catAndQuest() {
	var randCat = category[Math.floor(Math.random() * category.length)];

	if (randCat === category[0]){
		var randQuest = historyQuestions[Math.floor(Math.random() * historyQuestions.length)];
		document.getElementById("quest").innerHTML= randQuest ;
	};
	else if (randCat === category[1]) {
		var randQuest = languageQuestions[Math.floor(Math.random() * languageQuestions.length)];
		document.getElementById("quest").innerHTML= randQuest;	
	};
	else if (randCat === category[2]) {
		var randQuest = natureQuestions[Math.floor(Math.random() * natureQuestions.length)];
		document.getElementById("quest").innerHTML= randQuest;
	};
	else (randCat === category[3]) {
		var randQuest = technologyQuestions[Math.floor(Math.random() * technologyQuestions.length)];
		document.getElementById("quest").innerHTML= randQuest;
	};
}


//user answered true

function answerT(){

};

//user answered false

function answerF(){

};

// if user answered right add 1 point

function addPoint(){
	if (answer is correct) {
		var points=[];
		points.push(1);
	}
}
