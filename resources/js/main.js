


var category= ['history', 'language', 'nature', 'technology'];
var Questions= [
	// store answer with questions for easier retrieval
	{ category: 'history', question : 'Mexico achieved independence before USA', answer: true },
	{ category: 'history', question: 'Sir Winston Churchill was a Labour Prime Minister', answer: true },
	{ category: 'history', question: 'The Ming Dynasty was the final Chinese Dynasty', answer: true },

	{category: 'language', question: 'There are 24 letters in the Greek alphabet', answer: true }, 
	{category: 'language', question: 'There is no German word meaning /\'fluffy\'', answer: true }, 
	{category: 'language', question: 'In Welsh a microwave is known as a /\'popty ping\'', answer: true },

	{category: 'nature', question: 'An octopus has three hearts', answer: true }, 
	{category: 'nature', question: 'There are more stars in space than grains of sand on every beach in the world', answer: true }, 
	{category: 'nature', question: 'There are more fake flamingos in the world than real ones', answer: true },

	{category: 'technology', question: 'Nintendo was founded after the year 1900.',  answer: true }, 
	{category: 'technology', question: 'Gold is not a good conductor of electricity?', answer: true }, 
	{category: 'technology', question: ' In computing, keyboards are used as input devices', answer: true }
];

// when declared over here other functions will see it; it's not best practice to register them in global/window scope, but better than nothing ;)
var count = 0;
var points = 0; 
var category;
var question;

//show answer buttons
function showButtons(){
	document.getElementById('answerT').style.display="";
	document.getElementById('answerF').style.display="";
}


// choose a category and a question

function catAndQuest() {
	start.style.display = 'none';
	showButtons();

	document.getElementById('points').innerHTML= 'Points: ' + (points);
	document.getElementById('count').innerHTML= 'Question ' + (++count);

	category = category[Math.floor(Math.random() * (category.length - 1))];
	document.getElementById('category').innerHTML= 'Category: ' + (category);

	var questionList= Questions.filter( function (question){
		return questions.category === category;
	})

	question = questionList[Math.floor(Math.random() * (questionList.length - 1))];
	document.getElementById('quest').innerHTML= question.question; // DRY
};


//user answered

function answer(value){
	if(value === question.answer) {
		points++;
	}	
	catAndQuest();
};


// user wins when 10 points are collected

function win(points){
	if (points === 10){
		alert("You win");
	}
}
