function rollOver(iName, iState){

	// Ns4.x treats absolutely positioned divs as separate documents so we have a
	// much harder time getting access to the images collection.
	
	// There's probably a better way of getting a list of divs that contain images 
	// but at least this way minimises the number of divs that have to be parsed

	// list of divs that contain rollovers
	var aDivs = ["document.topnav.document.help", "document.topnav.document.find", "document.content"];
	
	/*
	could use this iteratively to compile list of absolutely positioned divs...
	for(var i=0; i<document.layers.length; i++){
		if(document.layers[i].left && document.layers[i].top){
			alert("absolute");
		}
	}
	*/
	
	
	if(document.images && self[iName + '_' + iState] && document.images.length > 0){
    	document.images[iName].src = self[iName + '_' + iState].src;
	}else if(document.images.length == 0){
  		for(var i=0; i<aDivs.length; i++){
			var oCurrentDiv = eval(aDivs[i]);
			if(oCurrentDiv.document.images[iName]){
				oCurrentDiv.document.images[iName].src = self[iName + '_' + iState].src;
				break;
			}
		}
	}
  
  return true;
}
