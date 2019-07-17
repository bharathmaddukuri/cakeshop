$(document).ready(function(){
	$("#footer div.facebook a img").hover(
	function() {
		$(this).animate({ "opacity": "0"},  "easeOut");
	},
	function() {
		$(this).animate({ "opacity": "1"},  "easeOut");
	});
	$("#mayCart a").hover(
	function() {
		$(this).animate({ "top": "-7"},  "easeOut");
	},
	function() {
		$(this).animate({ "top": "0"},  "easeOut");
	});
});
