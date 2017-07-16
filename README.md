
<html>
<head>

<!-- Content Type Meta tag -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        
<!--Responsive Viewport Meta tag-->
     <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
        
        
<title>QUIZ-lette</title>

<!-- FONT -->
	<link href="https://fonts.googleapis.com/css?family=Bungee+Shade" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Coda" rel="stylesheet">

<!-- Stylesheets -->
	<link rel="stylesheet" type="text/css" href="resources/css/style.css">

</head>
<body>

<header>
<h1> Quiz-lette </h1>
<p>Play a game of true or false</p>
<button onclick="catAndQuest()" id="start"> START </button>
</header>


<div class="container">
<div id="questions">
	<div id="count"></div>
	<div id="category"></span> </div>
	<div id="quest"> </div>
	<button onclick="answer(true)" style="display:none;" id="answerT"> TRUE</button>
	<button onclick="answer(false)" style="display:none;" id="answerF"> FALSE</button>
	<div id="points"></div>
</div>
<div id="winner" style="display:none;">YOU WIN! <br>Congrats, smartypants!</div>
<div id="looser" style="display:none;">Sorry, no more questions.<br> You loose!</div>
<button onclick="restart()" style="display:none;" id="reset"> PLAY AGAIN? </button>
</div>
</div>



<!-- JavaScript -->
		<script src="resources/js/main.js"></script>
</body>
</html>
