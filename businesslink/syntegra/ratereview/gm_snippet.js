//Ver. 2011-08-22
$gm = $bl;

var gm_rating;
var gm_gateway = "https://ds.govmetric.com";
var gm_client_res = "/syntegra/ratereview";
var gm_snippet_res = "/syntegra/ratereview";
var gm_container = $gm('#govmetric_container');
var gm_snippet = gm_container.find('#govmetric_snippet');
var gm_validation_message = 'Please check that you have answered the questions correctly.';
var gm_already_rated = 'You\'ve already rated this page today!';

var gm_available = false;
$gm(document).ready(function () {
    $gm.getScript(gm_client_res + '/gm_core.min.js', function () { gm_available = true; gm_container.fadeIn('slow'); });
    setTimeout('if (!gm_available) gm_container.fadeOut();', 5000);
});