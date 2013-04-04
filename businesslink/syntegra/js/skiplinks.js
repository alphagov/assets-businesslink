 DOMAssistant.DOMReady(init);
 function init(){
 	PE_skip();
 }

 function PE_skip(){
 	var skip = $("#skip ul");
	var skipLinks = $("#skip a");
	skipLinks.each(function(){
		skipLinks.addEvent("focus",function(){skip.addClass("hasJS");});
		skipLinks.addEvent("blur", function(){skip.removeClass("hasJS");});
		});
	
}