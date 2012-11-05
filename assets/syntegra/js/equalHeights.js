DOMAssistant.DOMReady(init);
 function init(){
 	PE_equalHeights("#secPracGrid ul li a","minHeightSmall","minHeightLarge","minHeightXL","minHeightXXL");
 }

 function PE_equalHeights(gridLocation,css1,css2,css3,css4){
 	var gridAnchors = $(gridLocation)
	
	for(var i=0;i<=gridAnchors.length;i++){
		var gridAnchorsTextLength = gridAnchors[i].childNodes[0].length;
		var theUl = gridAnchors[i].parentNode.parentNode;
		if (gridAnchorsTextLength <= 18) {
				if (theUl.className == css1 || theUl.className == css2 || theUl.className == css3 || theUl.className == css4) {
					continue;
				}
				else {
					theUl.className == "";
				}
			}
			
			if (gridAnchorsTextLength > 18 && gridAnchorsTextLength <= 29) {
				if (theUl.className == "") {
					theUl.className = css1;
				}
				if (theUl.className == css1) {
					continue;
				}
			}
			
			if (gridAnchorsTextLength >= 30 && gridAnchorsTextLength <= 48) {
				if (theUl.className == "" || theUl.className == css1) {
					theUl.className = css2;
				}
				if (theUl.className == css2) {
					continue;
				}
			}
			
			if (gridAnchorsTextLength >= 49 && gridAnchorsTextLength <= 68) {
				if (theUl.className == "" || theUl.className == css1 || theUl.className == css2) {
					theUl.className = css3;
				}
				if (theUl.className == css3) {
					continue;
				}
			}
			
			if (gridAnchorsTextLength >= 69) {
				if (theUl.className == "" || theUl.className == css1 || theUl.className == css2 || theUl.className == css3) {
					theUl.className = css4;
				}
				if (theUl.className == css4) {
					continue;
				}
			}
				
			
	} 
	
	
	
}