
(function($) {

	$.fn.charCount = function(options){
	  
		// default configuration properties
		var defaults = {	
			allowed: 140,		
			warning: 25,
			css: 'counter',
			counterElement: 'span',
			cssWarning: 'warning',
			cssExceeded: 'exceeded',
			counterText: ''
		}; 
			
		var options = $.extend(defaults, options); 
		
		function calculate(obj){
			var count = $(obj).val().length;
			var available = options.allowed - count;
			if(available <= options.warning && available >= 0){
				$(obj).prev().addClass(options.cssWarning);
			} else {
				$(obj).prev().removeClass(options.cssWarning);
			}
			if(available < 0){
				$(obj).prev().addClass(options.cssExceeded);
			} else {
				$(obj).prev().removeClass(options.cssExceeded);
			}
			$(obj).prev().html(options.counterText + available);
		};
				
		this.each(function() {  			
			$(this).before('<'+ options.counterElement +' class="' + options.css + '">'+ options.counterText +'</'+ options.counterElement +'>');
			calculate(this);
			$(this).keyup(function(){calculate(this)});
			$(this).change(function(){calculate(this)});
		});
	  
	};

})(jQuery);
