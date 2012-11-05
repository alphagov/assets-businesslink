var keynoteInterceptLikelihood = 0.2;
	var keynoteInterceptTaskKey = 'B24D66E0DB9C44939FAFD10B4FE34086'
	var keynoteInterceptType = 'Layer';
var origUrl = location.href;
if(origUrl.indexOf('https') != -1) {
origUrl = origUrl.substring(8);
} else if(origUrl.indexOf('http') != -1) { origUrl = origUrl.substring(7);}
	function HandleKeynoteIntercept()
	{
		try {
			if (Math.random() >= (keynoteInterceptLikelihood*5)) return;
			var s = document.createElement('script');
			s.src = 'http://webeffective.keynote.com/applications/intercept/filter_page.asp?inv='
+ keynoteInterceptTaskKey + '&type=' + keynoteInterceptType + '&rate='
+ keynoteInterceptLikelihood + '&domain=' + window.location.hostname +
'&max=5&args=STARTURL:'+origUrl;
			document.body.insertBefore(s, document.body.firstChild);
			window.keynoteConnectorWindow = 'primary';
		}
		catch(e){}
	}
	if (window.attachEvent) window.attachEvent('onload',HandleKeynoteIntercept);
		else window.addEventListener('load',HandleKeynoteIntercept,false);