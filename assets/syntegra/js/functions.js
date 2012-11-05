/* Code to submit links from an action box drop down
 * This checks whether the link is external and if so forces the
 * browser to open it in a new window.
 *
 * Tested with IE5, IE5.5, IE6, Netscape 4.6, Opera 5 and Mozilla Firebird
 */
function runActionLink()
{
	index = document.actionForm.redirectParams.selectedIndex
	if(index > -1)
	{
		url = document.actionForm.redirectParams[index].value;

		if(url != null)
		{		
			if(url.indexOf(".businesslink.") == -1 && url.indexOf(".bdotg.") == -1)
			{
				document.actionForm.target="bgExternal";
			}
			else
			{
				document.actionForm.target="";	
			}
			document.actionForm.submit();
		}
	}
}

function getOmnitureLinkType()
{
	var linkType = "o";
	var url = "";
	var markerPos = -1;
	
	index = document.actionForm.redirectParams.selectedIndex
	if(index > -1)
	{
		url = document.actionForm.redirectParams[index].value;
		if ( url != null )
		{
			if(url.indexOf("OTHER") != -1)
			{
				linkType = "e";
			}
		}
	}
	return linkType;
}

function getTargetUrl()
{
	var url = "";
	var pos = -1;
	var str = "";
	
	index = document.actionForm.redirectParams.selectedIndex
	if(index > -1)
	{
		str = document.actionForm.redirectParams[index].value;
		url = str.substring(pos = str.lastIndexOf("; ") + 2);
	} 
	return url;
}

function popToFront()
{
	if (document.actionForm.target == "bgExternal")
	{
		var myWin = window.open(document.actionForm.action + "?redirectParams=" + document.actionForm.redirectParams[index].value);
		myWin.focus();
		return false;
	}
	else
	{
		return true;
	}
}

function runLocalisedLink()
{
	if(document.localForm.site.selectedIndex > -1)
	{
			document.localForm.submit();
	}
}

/* Automaticaly moves cursor to next element, one the max number
 * of items have been entered into the current element. 
 * 
 * Tested with IE6, Mozilla Firefox 2.0
 */					
function autoTab(input, maxLength, nextElementID)
{

	var currentLength = input.value.length;
	
	
	if(currentLength >= maxLength) 
	{
		
		var obj = document.getElementById(nextElementID);
										
		if(obj != null)
		{                                                                     
			obj.focus();
		}
		else
		{
	
			var currentElementIndex = getIndex(input) + 1;
		
			var numberOfElementsInForm = input.form.length;
		
			var nextElementIndex = currentElementIndex % numberOfElementsInForm;
		
			input.form[nextElementIndex].focus();
		
		}
	}
	
	function getIndex(input) 
	{
		var index = -1;
		var i = 0;
		var found = false;
	
		while (i < input.form.length && index == -1)
		{
			if (input.form[i] == input)
			{
				index = i;
			}
			else
			{
				i++;
			}
		}
		
		return index;
	}
	
	return true;
}

/* RB 11/09 */

/* FUNCTION DEFINITIONS */

var $bl=jQuery.noConflict();if(!bLink){var bLink = {};};

//style for hiding classes to be added dynamically. we want the objects visible when JS is off!
document.write('<style type="text/css">.toggleClosed {display:none;}</style>');

/* global variable holding css selectors of objects to be hidden for promtion rotation */
var promoSelectors = ['.homepromo1', '.homepromo2', '.homepromo3', '.homepromo4', '.homepromo5', '.homepromo6', '.homepromo7', '#additionalcontent .basicbox:first-child .promo1', '#additionalcontent .basicbox:first-child .promo2', '#additionalcontent .basicbox:first-child .promo3', '#additionalcontent .basicbox:first-child .promo4', '#additionalcontent .basicbox:first-child .promo5'];

/* add inline styles to document head hide promo panels */
var inlineCss = '<style type="text/css">';
$bl.each(promoSelectors, function(i, cssClass) {inlineCss += cssClass + ' {display:none;}\n';});
inlineCss += '</style>';
document.write(inlineCss);

//check if array contains a value
function contains(a, e) {
 for(j=0;j<a.length;j++)if(a[j]==e)return true;
 return false;
}

//this function decides which objects should be visible according to which radio control they are related (use the class attribute [name]_related, where [name] is the name attribute oif the associated radio button/checkbox )
//a radio control may control multiple DOM elements
//a DOM object will be visible if any of the controls that can control it have a value of "yes"
//be warned - this function is a loop within a loop. if many radio buttons are used, this may be problematic to the user experience :(
function toggleRows() {
	var objNameRoot = this.name;
	var relatedObjs = $bl("." + objNameRoot + "_related");
	
	relatedObjs.each(function(i) { //find which objects are related to the control the user just clicked on
		var isVisible = [];
		var classNames = $bl(relatedObjs[i]).attr("class").split(" ");
		$bl(classNames).each(function(j) { //find which controls are related to the objects which are related to the control the user just clicked on...
			classNames[j].match(/.*_related/)?isVisible.push($bl("*[name=" + classNames[j].replace(/(.*)_related/, "$1") + "][checked]").attr("value")):null;
		});
		contains(isVisible, "yes")?$(relatedObjs[i]).removeClass("toggleClosed"):$(relatedObjs[i]).addClass("toggleClosed"); //check if any of those controls are switched on. if so, show the related objects for only those controls
	});
}

function attachToggleEvents() {
	$bl("input.toggleOn").bind("click", toggleRows);
	$bl("input.toggleOff").bind("click", toggleRows);
	//now we display any objects that need to be visible which were hidden by dynamically added css
	$bl("input.toggleOn:checked").trigger("click");
}

/*show random objects */
function hidePromos(promos) {
	if (promos.length > 0) {
		var objIndex = Math.floor(Math.random() * promos.length);
		/*$bl(promos).hide();
		$bl(promos).eq(objIndex).show();*/
		
		$bl(promos).not("*:eq(" + objIndex + ")").remove();
		$bl(promos).eq(objIndex).show();
		
			// force IE to redraw the obj
		/*if (jQuery.browser.msie) {
			$bl(promos).eq(objIndex).parent().attr("className", $bl(promos).eq(objIndex).parent().attr("className"));
			$bl(promos).eq(objIndex).parent().css("display", "none");
			$bl(promos).eq(objIndex).parent().css("display", "block");
			window.status = "yep!";
		}*/
	}
}


function heroCycler(){
	$bl('#heropromopanel').addClass('hasJS');
	var promoContent = $bl('div.hp div.promobody');
	promoContent.hide().filter(':first').show();
	$bl('div.hp div.promoheader').filter(':first').addClass('selected');
	
	$bl('div.hp div.promoheader a').bind('mouseenter mouseleave',function(){
				promoContent.hide();
				$bl(this).parent().parent().siblings().show();
				$bl('div.hp div.promoheader').removeClass('selected');
				$bl(this).parent().parent().addClass('selected');
	});
	$bl('div.hp div.promoheader a').bind('focus',function(){
				promoContent.hide();
				$bl(this).parent().parent().siblings().show();
				$bl('div.hp div.promoheader').removeClass('selected');
				$bl(this).parent().parent().addClass('selected');
	});
	$bl('div.hp div.promoheader a').bind('blur',function(){
				$bl(this).parent().parent().removeClass('selected');
	});
	
	
	
}



/* RUNS ON LOAD */

$bl(document).ready(function() {
	$bl.each(promoSelectors, function(i, cssClass) {hidePromos($bl(cssClass));});
	heroCycler();
	attachToggleEvents();
});
