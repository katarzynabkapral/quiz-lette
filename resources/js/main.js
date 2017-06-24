


var category= ['history', 'language', 'nature', 'technology'];
var historyQuestions= [
	// store answer with questions for easier retrieval
	{ question : 'Mexico achieved independence before USA', answer: true },
	{ question: 'Sir Winston Churchill was a Labour Prime Minister', answer: true },
	{ question: 'The Ming Dynasty was the final Chinese Dynasty', answer: true }
];
var languageQuestions= [{
	question: 'There are 24 letters in the Greek alphabet', answer: true }, {
	question: 'There is no German word meaning -fluffy', answer: true }, {
	question: 'In Welsh a microwave is known as a /\'popty ping\'', answer: true }];
var natureQuestions= [{
	question: 'An octopus has three hearts', answer: true }, {
	question: 'There are more stars in space than grains of sand on every beach in the world', answer: true }, {
	question: 'There are more fake flamingos in the world than real ones', answer: true }];
var technologyQuestions= [{
	question: 'Nintendo was founded after the year 1900.',  answer: true }, {
	question: 'Gold is not a good conductor of electricity?', answer: true }, {
	question: ' In computing, keyboards are used as input devices', answer: true }];

// when declared over here other functions will see it; it's not best practice to register them in global/window scope, but better than nothing ;)
var count = 0;
var points = 0; 
var category;
var question;


// choose a category and a question

function catAndQuest() {
	document.getElementById('points').innerHTML= 'Points ' + (points);
	document.getElementById('count').innerHTML= 'Question ' + (++count);
	category = category[Math.floor(Math.random() * (category.length - 1))];
	var questionList;
	switch(category) {
		case category[0]: {
			questionList = historyQuestions;
			break;
		}
		case category[1]: {
			questionList = languageQuestions;
			break;
		}
		case category[2]: {
			questionList = natureQuestions;
			break;
		}
		default: {
			questionList = technologyQuestions;
		}
	}
	question = questionList[Math.floor(Math.random() * (questionList.length - 1))];
	document.getElementById('quest').innerHTML= question.question; // DRY
}


//user answered

function answer(value){
	if(value === question.answer) {
		points++;
	}	
	catAndQuest();
};


