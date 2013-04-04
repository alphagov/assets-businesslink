var $bl=jQuery.noConflict();if(!bLink){var bLink = {};};
/**
 * Shows a Task in the main panel.
 */
function showTask(id)
{
	if(document.getElementById("task_item_"+id))
	{
		// Ignore if already displayed
	}
	else
	{
		if(brightcove) // If Brightcove player used on this page
		{
			// Javascript to stop the existing video playing before re-creating a new one.
			var experienceId = $bl('.BrightcoveExperience');
			if(experienceId.length > 0) // If there are brightcove experiences on the page
			{
				try
				  {
					// Try to remove the div which holds the brightcove video
					$bl('.BrightcoveExperience').remove();
				  }
				catch(err)
				  {		  
					// If the Brightcove video callback causes an error,
					// catch it and ignore it, without presenting the error to the browser.
				  }
			}
			// If there were no divs to remove, carry on and create the video anyway
		}
		// Remove taskSelected class from all images
		$bl("div[class*='taskSelected']").removeClass("taskSelected");
		// Add taskSelected class to selected summary item
		$bl("#task_carousel_summary li a[href='javascript:showTask("+id+")']").parent().addClass("taskSelected");
		// Update the task count section
		$bl("#task_count span").html(id+1+" of");

		// Show the selected task div
		$bl("#task_list").html($bl(taskDivs[id]).clone());
		
		if(brightcove) // If Brightcove player used on this page
		{
			// Create new experience
			brightcove.createExperiences();
		}
	}

}

$bl(document).ready(function() {
	var wrapValue = 'circular';

	if($bl('#task_carousel_summary li').length < 4)
	{
		wrapValue = 'null';
	}
	
	$bl('#cara').show(); // Show the carousel
	$bl('#task_carousel_summary li').show();
	$bl('#task_summary_block form input').hide(); // Hide the non-javascript buttons
	$bl('#task_count span').show(); // Show the task count

    	$bl('#task_carousel_summary').jcarousel({
    	    	vertical: true,
    	    	scroll: 1,
		visible: 4,
		wrap: wrapValue,
		animation: 'slow'
    	});

	// Get all tasks
	var taskSummaryList = $bl("#task_carousel_summary li a input");
	// Iterate through all the Task items
	var index;
	for (index=0; index < taskSummaryList.length; index++)
	{
		// Get the next element
		var item = taskSummaryList[index];
		// Get the parent 'a' tag
		var parent = $bl(item).parent();
		// Set the value from the hidden input as the href on the parent
		parent.attr("href", item.value);
	}
	
	// Get all the task divs in the task list into a global array
	taskDivs = $bl("#task_list div[name='task']");	
	
	// Show the first task div
	$bl("#task_list").html($bl(taskDivs[0]).clone());	

});
