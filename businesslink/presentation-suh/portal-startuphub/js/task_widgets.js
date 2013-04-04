var $bl=jQuery.noConflict();if(!bLink){var bLink = {};};

function showReadMore() {
	$bl('.itw_hiddenContent').show();
}

function toggleHiddenBodyContent(widId) {
	if ($bl('#itw_wid_'+widId+' .itw_hiddenBodyContent').is(':hidden')) {
		$bl('#itw_wid_'+widId+' .itw_hiddenBodyContent').show();
		$bl('#itw_wid_'+widId+' .itw_textLink').html(closeLbl);
		$bl('#itw_wid_'+widId+' .itw_textLink').attr('title', closeTitle);
		$bl('#itw_wid_'+widId+' .itw_hiddenContent').removeClass("itw_imageLower");
		$bl('#itw_wid_'+widId+' .itw_hiddenContent').addClass("itw_imageHigher");
	}
	else
	{
		$bl('#itw_wid_'+widId+' .itw_hiddenBodyContent').hide();
		$bl('#itw_wid_'+widId+' .itw_textLink').html( readLbl );
		$bl('#itw_wid_'+widId+' .itw_textLink').attr('title', readTitle);
		$bl('#itw_wid_'+widId+' .itw_hiddenContent').removeClass("itw_imageHigher");
		$bl('#itw_wid_'+widId+' .itw_hiddenContent').addClass("itw_imageLower");		
	}
	
	return false;
}
