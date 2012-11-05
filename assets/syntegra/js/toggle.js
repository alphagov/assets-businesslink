var $as=jQuery.noConflict();if(!as){var as = {};};

$as(document).ready(function(){
	$as("h3.trigger").toggle(function(){
		$as(this).addClass("active"); 
		}, function () {
		$as(this).removeClass("active");
	});
	
	$as("h3.trigger").click(function(){
		$as(this).next(".searchtogglecontainer").slideToggle("slow,");
		return false;
	});
});