/*$(document).ready(function(){
	$('img').click(function(){
		var current = $(this).attr("src");
		var swap = $(this).attr("data-alt-src");
		$(this).attr("src", swap).attr("data-alt-src", current);
	})
})
*/


$(document).ready(function(){
	$('img').click(function(){
		var current = $(this).attr("src");
		var swap = $(this).attr("data-alt-src");
		$(this).attr("src",swap);
		$(this).attr("data-alt-src", current);
	})
})
