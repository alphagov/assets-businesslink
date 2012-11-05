// init
if(!window.saveInnerWidth) {
  window.onresize = resizeIt;
  window.saveInnerWidth = window.innerWidth;
  window.saveInnerHeight = window.innerHeight;
  //alert(window.onresize);
}

// refresh
function resizeIt() {
    if (saveInnerWidth < window.innerWidth || 
        saveInnerWidth > window.innerWidth || 
        saveInnerHeight > window.innerHeight || 
        saveInnerHeight < window.innerHeight ) 
	{
		
        window.history.go(0);
    }
	//alert("resizing");
}
