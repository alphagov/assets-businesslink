
var xgovk3w="xgovk3w";var xgovs9k="xgovs9k";var xgovf0p="xgovf0p";var xgovd2v="xgovd2v";var xgovr3h="xgovr3h";document.write('<script type="text/javascript" src="https://lrc.businesslink.gov.uk/xgovsnl/js/lrcSiteStyles.js"></script>');function createCookie(name,value,days)
{var expires="";if(days)
{var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toGMTString();}
document.cookie=name+"="+value+expires+"; path=/";}
function readCookie(name)
{var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++)
{var c=ca[i];while(c.charAt(0)==' ')
c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)
return c.substring(nameEQ.length,c.length);}
return null;}
function eraseCookie(name)
{createCookie(name,"",-1);}
function getParameterOnUrl(name)
{name=name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var regexS="[\\?&]"+name+"=([^&#]*)";var regex=new RegExp(regexS);var results=regex.exec(window.location.href);if(results==null)
return"";else
return results[1];}
function getXgovfopParameter(name)
{var delimiter="|";var xgovf0pUrlParams=getParameterOnUrl(xgovf0p);var xgovf0pUrlParamsArray=xgovf0pUrlParams.split(delimiter);for(i=1;i<=xgovf0pUrlParamsArray.length-1;i++)
{if(xgovf0pUrlParamsArray[i]!='')
{var keyValue=xgovf0pUrlParamsArray[i].split("=");if(keyValue[0]=name)
{return keyValue[1].toLowerCase();}}}
if(readCookie(name)!=null)
{return readCookie(name);}
return"test123";}
function createCookieForUrlParameter(urlParameterName)
{var urlParamValue=getParameterOnUrl(urlParameterName);if(urlParamValue!='')
{createCookie(urlParameterName,urlParamValue.toLowerCase(),0);}}
function createCookiesForXgovf0pUrlParameters()
{var delimiter="|";var xgovf0pUrlParams=getParameterOnUrl(xgovf0p);var xgovf0pUrlParamsArray=xgovf0pUrlParams.split(delimiter);if(xgovf0pUrlParamsArray.length==1)
{var webTestDelimiter="%7C";xgovf0pUrlParamsArray=xgovf0pUrlParams.split(webTestDelimiter);}
var i=0;for(i=1;i<=xgovf0pUrlParamsArray.length-1;i++)
{if(xgovf0pUrlParamsArray[i]!='')
{var keyValue=xgovf0pUrlParamsArray[i].split("=");createCookie(keyValue[0],keyValue[1].toLowerCase(),0);}}}
function replaceParameters(inString)
{var modifier="gi";var xgovs9k_regex="%"+xgovs9k+"%";var xgovr3h_regex="%"+xgovr3h+"%";var xgovd2v_regex="%"+xgovd2v+"%";var xgovk3w_regex="%"+xgovk3w+"%";var tempString;var myregexp=new RegExp(xgovs9k_regex,modifier);tempString=inString.replace(myregexp,readCookie(xgovs9k));myregexp=new RegExp(xgovr3h_regex,modifier);tempString=tempString.replace(myregexp,readCookie(xgovr3h));myregexp=new RegExp(xgovd2v_regex,modifier);tempString=tempString.replace(myregexp,readCookie(xgovd2v));myregexp=new RegExp(xgovk3w_regex,modifier);tempString=tempString.replace(myregexp,readCookie(xgovk3w));return tempString;}
function init()
{if(arguments.callee.done)return;arguments.callee.done=true;if(_timer)clearInterval(_timer);renderHeader();};function injectMIS()
{div=document.getElementsByTagName("body")[0];misElement=document.createElement("script");misElement.type="text/javascript";misElement.src="https://lrc.businesslink.gov.uk/xgovsnl/js/lrc_mis.js";div.appendChild(misElement);misElement2=document.createElement("script");misElement2.type="text/javascript";misElement2.src="http://www.businesslink.gov.uk/syntegra/js/s_code_remote.js";div.appendChild(misElement2);}
function renderHeader()
{document.cookie="xgovTest";cookieEnabled=(document.cookie.indexOf("xgovTest")!=-1)?true:false;var isCookiesPresent=true;if(cookieEnabled)
{isCookiesPresent=isCookiePresent(xgovs9k)&isCookiePresent(xgovr3h)&isCookiePresent(xgovd2v)&isCookiePresent(xgovk3w);}
var htmlFragment=headerConfig.html_fragment;var substitutionVariable="%blImageConfig.bl_swish%";var lrcConfigMember=blImageConfig.bl_swish;if(lrcConfigMember.indexOf("%")>0)
{if(cookieEnabled&isCookiesPresent)
{lrcConfigMember=replaceParameters(lrcConfigMember);}
else
{lrcConfigMember=blImageConfig.bl_swish_default;}}
htmlFragment=htmlFragment.replace(substitutionVariable,lrcConfigMember);substitutionVariable="%blImageConfig.bl_logo%";lrcConfigMember=blImageConfig.bl_logo;if(lrcConfigMember.indexOf("%")>0)
{if(cookieEnabled&isCookiesPresent)
{lrcConfigMember=replaceParameters(lrcConfigMember);}
else
{lrcConfigMember=blImageConfig.bl_logo_default;}}
htmlFragment=htmlFragment.replace(substitutionVariable,lrcConfigMember);substitutionVariable="%blImageConfig.bl_alt%";lrcConfigMember=blImageConfig.bl_alt;lrcConfigMember=replaceParameters(lrcConfigMember);htmlFragment=htmlFragment.replace(substitutionVariable,lrcConfigMember);substitutionVariable="%ogdConfig.partner_logo%";lrcConfigMember=ogdConfig.partner_logo;if(lrcConfigMember.indexOf("%")>0)
{if(cookieEnabled&isCookiesPresent)
{lrcConfigMember=replaceParameters(lrcConfigMember);}
else
{lrcConfigMember=ogdConfig.partner_logo_default;}}
htmlFragment=htmlFragment.replace(substitutionVariable,lrcConfigMember);substitutionVariable="%ogdConfig.partner_alt%";lrcConfigMember=ogdConfig.partner_alt;htmlFragment=htmlFragment.replace(substitutionVariable,lrcConfigMember);var brandingWrapperDiv=document.getElementById("brandingWrapper");var brandingWrapperNoScriptHtml=brandingWrapperDiv.innerHTML;brandingWrapperDiv.innerHTML=htmlFragment+brandingWrapperNoScriptHtml;setBrandingWrapperDiv(brandingWrapperDiv,cookieEnabled,isCookiesPresent);var brandingHeaderDiv=document.getElementById("brandingHeader");setBrandingHeaderDiv(brandingHeaderDiv,cookieEnabled,isCookiesPresent);var blinkLogoImage=document.getElementById("blink_logo");setBusinesslinkLogo(blinkLogoImage,cookieEnabled,isCookiesPresent);}
function setBrandingWrapperDiv(div,cookieEnabled,isCookiesPresent)
{var index="defaultSite";if(cookieEnabled&isCookiesPresent)
{index=readCookie(xgovk3w);}
if(sites[index].background_colour!='')
{div.style.backgroundColor=sites[index].background_colour;}
else
{div.style.backgroundImage="url("+sites[index].background_image+")";div.style.backgroundRepeat="repeat-x";div.style.backgroundPosition="top left";}
div.style.borderBottomWidth="1px";div.style.borderBottomStyle="solid";div.style.borderBottomColor=sites[index].border_colour;}
function setBrandingHeaderDiv(div,cookieEnabled,isCookiesPresent)
{div.style.backgroundColor="#FFF";div.style.backgroundRepeat="no-repeat";div.style.backgroundPosition="100% 0%";}
function setBusinesslinkLogo(img,cookieEnabled,isCookiesPresent)
{var index="defaultSite";if(cookieEnabled&isCookiesPresent)
{index=readCookie(xgovk3w);}
img.style.top=sites[index].logo_coord_x;img.style.right=sites[index].logo_coord_y;}
function isCookiePresent(snlCookie)
{var isCookieExist=(readCookie(snlCookie)!=null)?true:false;if(isCookieExist)
{return(readCookie(snlCookie)!="")?true:false;}
return false;}
String.prototype._$$split=String.prototype._$$split||String.prototype.split;String.prototype.split=function(s,limit){if(!(s instanceof RegExp))
return String.prototype._$$split.apply(this,arguments);var flags=(s.global?"g":"")+(s.ignoreCase?"i":"")+(s.multiline?"m":""),s2=new RegExp("^"+s.source+"$",flags),output=[],origLastIndex=s.lastIndex,lastLastIndex=0,i=0,match,lastLength;if(limit===undefined||+limit<0){limit=false;}else{limit=Math.floor(+limit);if(!limit)
return[];}
if(s.global)
s.lastIndex=0;else
s=new RegExp(s.source,"g"+flags);while((!limit||i++<=limit)&&(match=s.exec(this))){var emptyMatch=!match[0].length;if(emptyMatch&&s.lastIndex>match.index)
s.lastIndex--;if(s.lastIndex>lastLastIndex){if(match.length>1){match[0].replace(s2,function(){for(var j=1;j<arguments.length-2;j++){if(arguments[j]===undefined)
match[j]=undefined;}});}
output=output.concat(this.slice(lastLastIndex,match.index));if(1<match.length&&match.index<this.length)
output=output.concat(match.slice(1));lastLength=match[0].length;lastLastIndex=s.lastIndex;}
if(emptyMatch)
s.lastIndex++;}
output=lastLastIndex===this.length?(s.test("")&&!lastLength?output:output.concat("")):(limit?output:output.concat(this.slice(lastLastIndex)));s.lastIndex=origLastIndex;return output;};createCookieForUrlParameter(xgovk3w);createCookieForUrlParameter(xgovf0p);createCookieForUrlParameter(xgovd2v);createCookiesForXgovf0pUrlParameters();if(document.addEventListener)
{document.addEventListener("DOMContentLoaded",init,false);}
if(/WebKit/i.test(navigator.userAgent))
{var _timer=setInterval(function()
{if(/loaded|complete/.test(document.readyState))
{init();}},10);}
window.onload=init;