$("#factButton").on("click", function() {

	var number = Math.floor((Math.random() * booFactsArray.length));
	// add array value 
	$("#factText").text(booFactsArray[number])
	// adda array value
})

var booFactsArray = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]
// separate values, include punctuation " "


$("#textPink").on("click", function() {

	$("#funText").css("color", "pink")
	// add "" around pink
})

$("#textOrange").on("click", function() {

$("#funText").css("color", "orange")

})

$("#textGreen").on("click", function() {

	$("#funText").css("color", "green")

})


$("#boxGrow").on("click", function() {
	// punctuation "click"
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");

})

$("#boxShrink").on("click", function() {
	// punctuation "click"
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})