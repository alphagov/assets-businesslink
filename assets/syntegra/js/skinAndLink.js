//  Global constants
var lrcDomain = "lrc.businesslink.gov.uk";

/**
 * phase 2 of skin and link
 * this function goes directly to the ogd without passing through the lrc
 * @param pUrl
 * @param pLogoffOnTrf
 * @param pDomain
 * @param pCrossSellUri
 * @return
 */
function goToOGD(pUrl, pLogoffOnTrf, pDomain, pCrossSellUri) {
	if(pLogoffOnTrf == 1) {
		doLogoff(pDomain);
	}
	
	if(pDomain == 'null') {
		pDomain = 'businesslink.gov.uk';
	}
	
	var cookiesEnabled = areCookiesEnabled();
	if(cookiesEnabled) {
		
		var xgovs9k = 'OGD_ID';
		var xgovr3h = 'OGD_TRANSACTION_ID';
		var xgovc8h = 'SITE_ID';
		var xgovf0p = 'xgovf0p'
		
		var f0pParam = splitXgovf0p(getParamValFromUrl(xgovf0p, pUrl));
		for(var i = 1; i < (f0pParam.length - 1); i++) {
			var f0pParams = splitIndividualXgovf0pParams(f0pParam[i])
			if(f0pParams[0] == 'xgovs9k') {
				createCookie(xgovs9k, f0pParams[1], 0, lrcDomain);
			} else if(f0pParams[0] == 'xgovr3h') {
				createCookie(xgovr3h, f0pParams[1], 0, lrcDomain);
			} else if(f0pParams[0] == 'xgovc8h') {
				createCookie(xgovc8h, f0pParams[1], 0, lrcDomain);
			}
		}

		createCookie('DOMAIN_NAME', pDomain  , 0, lrcDomain);
		createCookie('CROSS_SELL_URL', pCrossSellUri, 0, lrcDomain);
	}
}

/**
 * splits the xgovf0p parameter
 * @param pIn
 * @return
 */
function splitXgovf0p(pIn) {
	var params = pIn.split('|');
	return params;
}

/**
 * splits each individual xgovf0p parameter
 * @param pIn
 * @return
 */
function splitIndividualXgovf0pParams(pIn) {
	var params = pIn.split('=');
	return params;
}

/**
 * check to see if cookies are enabled by writing a temporary cookie and verifying its existence
 * @return
 */
function areCookiesEnabled() {
	document.cookie = "testcookie";
	return (document.cookie.indexOf("testcookie")!= -1) ? true : false;
}

/**
 * gets the value of the <param> from the <url>
 * @param param
 * @param url
 * @return
 */
function getParamValFromUrl(param, url) {
	param = param.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");  
	var pattern = "[\\?&]" + param + "=([^&#]*)";
	var matcher = new RegExp(pattern);
	var results = matcher.exec(url);
	if(results == null) {
		return "";
	} else {
		return results[1];
	}
}

/**
 * creates a cookie 
 * @param name
 * @param value
 * @param days
 * @return
 */
function createCookie(pName, pValue, pDays, pDomain) {
	if(pName != '') {
		var expires = "";
		if (pDays) {
			var date = new Date();
			date.setTime(date.getTime() + (pDays * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toGMTString();
		}
		
		var cookieString = pName + "=" + pValue + expires + "; path=/; domain=" + pDomain + ";";
		document.cookie = cookieString;
	}
}

/**
 * attempts logoff from the originating application
 * @param pDomain
 * @return
 */
function doLogoff(pDomain) {
	var protocol = 'http://';
	if (location.protocol == 'https:') {
		protocol = 'https://';
	}

	var url = protocol + pDomain + '/bdotg/action/logout/';
	if(window.XMLHttpRequest)
		req = new XMLHttpRequest(); 
	else if (window.ActiveXObject)
		req  = new ActiveXObject(Microsoft.XMLHTTP); 

	req.onreadystatechange = function() {
		if(req.readyState == 4) {
			if(req.status == 200) {
				//successful logoff
			} else {
				//problem...
			}	
		} 
	};
	req.open('GET', url, true);
	//req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
	req.send(null); 
}