$(document).ready(function () {
	var routes = {
		"click_counter": clickCounter,
		"one_page": onePage,
		"make_a_dude": makeADude,
		"keep_it_up": keepItUpGame,
		"view_graph": viewGraph,
		"king_of_comments": kingOfComments,
		"pixshow": pixShow,
		"your_space": yourSpace,
		"hangman": hangmanGame,
		"pv_calculator": pvCalculator,
		"tiny_notes": tinyNotes,
		"capture": captureGame,
		"text_scroller": textScroller,
		"hollywood": hollywoodSign,
		"liquor_likes": liquorLikes,
		"fishy_friend": fishyFriend,
		"snare": snare,
		"quick_words": quickWords,
		"countdown": countdownClock,
		"hourglass": hourglass,
		"skinny_drinks": skinnyDrinks,
		"pinwheel": pinwheel,
		"typing_test": typingTest,
		"swivel": swivelGame,
		"mastermind": mastermindGame,
		"sparklers": sparklers,
		"postbored": postbored,
		"text_to_braille": textToBraille,
		"emergency_off": emergencyOff
	};
	var route = window.location.pathname.replace(/^\//, '').replace(/\/.*/, '');
	routes[route]();
});