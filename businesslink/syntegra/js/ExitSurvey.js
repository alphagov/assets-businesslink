/*	Launch the survey monkey pop-up
 *	PR0378
 *	Tested with IE6, IE7, Opera 9 and Mozilla Firebird
 */		
	var doSurvey=false;
	var bLeaving=false;
	var popupURL="";
	
	function doUnload()
	{
		if(doSurvey)
		{ 
			if(bLeaving)
			{
				var load = window.open(popupURL,'','scrollbars=no,menubar=no,height=600,width=800,resizable=yes,toolbar=no,location=no,status=no');
			}
		}
	}
