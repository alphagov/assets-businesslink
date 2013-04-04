var $blt=jQuery.noConflict();if(!blt){var blt = {};};

$blt(document).ready(function(){
	$blt(".message").charCount({
			allowed: 4000,		
			warning: 20,
			counterText: 'Characters left: '	
		});
	
	
});