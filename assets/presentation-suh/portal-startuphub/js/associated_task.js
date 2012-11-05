var $bl=jQuery.noConflict();if(!bLink){var bLink = {};};


$bl(document).ready(function(){ 
    $bl("a[id*='associatedTaskLink']").cluetip({           
	    splitTitle: '|',    // use the invoking element's title attribute to populate the clueTip...
		                    // ...and split the contents into separate divs where there is a "|"
		showTitle: false,   // hide the clueTip's heading
		sticky:    false,   // keep visible until manually closed
		width:     230,     // The width of the clueTip
		clickThrough: true  // if true, and activation is not 'click', then clicking on a clueTipped link will take user to
	});		  
});