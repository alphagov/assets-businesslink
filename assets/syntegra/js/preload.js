var iPath = '/syntegra/images/';
var iExt = 'gif';
var suffix = new Array('up', 'over');

function preLoad(){

	if(document.images){
  		var argLen = arguments.length;
    	for(var i = 0; i < argLen; i++){
			var arg = arguments[i];
			var sufLen = suffix.length;
			for(j = 0; j < sufLen; j++){
					var suf = suffix[j];
					self[arg + '_' + suf] = new Image();
					self[arg + '_' + suf].src = iPath + arg + '_' + suf + '.' + iExt;
					
			}
    	}
  	}
}

function onLoad(){
  preLoad('topnav_contact2', 'topnav_map', 'topnav_help', 'topnav_number', 'topnav_form', 'topnav_publication', 'footer_about', 'footer_privacy', 'footer_disclaimer');
}

window.onload = onLoad;