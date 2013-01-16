var $bl=jQuery.noConflict();if(!bLink){var bLink = {};};

(function($) {
	$.fn.jslider = function(o) {
		return this.each(function(){
			new $js(this, o).init();
		});
	};
	$.jslider = function(e, o) {
		var c = $(e).children(".content");
		var crsl = c.find(".carousel")
		var ctrls = c.find(".controls")
		var con = crsl.find(".container")
		var hld = con.find(".holder")
		var w = hld.children("li");
		var sliding = 0;
		var position = 0;
				
		// Add jse class to the element: JavaScript enabled
		c.addClass("jse");
		hld.attr('tabindex',0);
		w.css('position','absolute');
		w.attr('tabindex',-1);		//add tabIndexes to li elements
		w.find('a').attr('tabindex','-1');	//remove tabIndex from links inside
		
		//need to add a controls container
		ctrls.addClass("clearfix");
		ctrls.append('<p class="left"><a class="previous" href="#previous" title="previous">prev</a></p>')
		ctrls.append('<span id="carouselCounter"></span>');
		ctrls.append('<p class="right"><a class="next" href="#next" title="next">next</a></p>')
		var counter = ctrls.find("#carouselCounter");
		var btnPrev = ctrls.find(".previous");
		var btnNext = ctrls.find(".next");
				
		//setup the carousel's initial state
		this.init = function() {
			w.each(function(i) {
				switch (i) {
					case 0:
						$(this).css("left", 0);
						break;
					case w.size() - 1:
						$(this).css("left", parseInt(w.eq(0).css("left")) - w.eq(0).width() - parseInt(w.eq(0).css("marginRight")));
						break;
					default:
						$(this).css("left", parseInt(w.eq(i - 1).css("left")) + w.eq(i - 1).width() + parseInt(w.eq(i - 1).css("marginRight")));
						break;
				}
			});
		
			setCounter();
		
		};
			
		$(hld).keydown(function(e){
				
			var firstOffset = getCellOffset(0);
			var lastOffset = getCellOffset(w.size() - 1);

			//need to check the control state to see if we need to tab out or not. if not, return false to cancel the tab. otherwise, return true
			
			switch (e.which) {
				case 9:
					switch (e.shiftKey) {
						case true:
							switch (firstOffset) {
								case 0:
									return true;
								default:
									move(1, true);
									return false;
							}
						default:
							switch (lastOffset) {
								case 0:
									return true;
								default:
									move(-1, true);
									return false;
							}
					}
				default:
					return true;
			}		
		});
		
		btnPrev.click(function(e){
			move(1, false);
			return false;
		});
		
		btnNext.click(function(e){
			move(-1, false);
			return false;
		});
		
		move = function(direction) {
			if (sliding>0) return; //force immediate return if we are still animating

			sliding=w.size();
			hideCounter();
			
			for (i=0; i<w.size(); i++) {
				var index = ((i + direction) % w.size() + w.size()) % w.size(); //get index of element with position to which element index i should move
				var left = getCellOffset(index); //set new position in pixels
				if (left * direction < 0) w.eq(i).css("visibility", "hidden");											
				$(w.eq(i)).animate({left:left + "px"}, "medium", null, function(i){sliding--;$(this).css("visibility","visible");if ($bl(w).index(this)==w.size()-1) {setCounter();showCounter();}});
			}
		};
		
		hideCounter = function() {$bl(counter).fadeOut("fast");}

		showCounter = function() {$bl(counter).fadeIn("fast");}
		
		setCounter = function() {$bl(counter).text(getCurrentCell() + 1 + "/" + w.size());}
		
		getCellOffset = function(i) {	return parseInt($bl(w).eq(i).css("left"));}
		
		getCurrentCell = function() {
			var index = -1;
			$bl(w).each(function(i, el) {
				if (getCellOffset(i)==0) index = i;
			});
			return index;
		}
	};

	var $js = $.jslider;
})(jQuery);

// accordion using jQuery accordion
(function($) {$.fn.jaccordion = function(o) {
	var a = $bl(this).children(".content");
	var ls = a.find("li");
	var hd = a.find("h4");
	var p =  a.find("pnl");
	ls.removeClass("active");
	a.addClass("jse");
	a.accordion({ header: 'li h4', collapsible: true, autoHeight: false })};
})(jQuery);

// Submit button replacement
(function($) {
	$.fn.replaceSubmit = function(){
		return this.each(function(index){
			new $rs(this, index);
		});
	};
	$.replaceSubmit = function(e, i) {
		var page, varData, vars = "";
		var thisSubmit = $(e);
		var submitID = thisSubmit.attr('id');
		var submitName = thisSubmit.attr('name').length?thisSubmit.attr('name'):'defaultSubmit';
		var submitClass = thisSubmit.attr('className');
		var submitValue = thisSubmit.attr('value');
		
		var formAction = thisSubmit.parents("form").attr("action");
		
		if (submitClass == "btnBig") {
			thisSubmit.after('<span class="' + submitClass + ' btnReplaced"><a rel="' + submitName + '" href="' + formAction + '"><span>' + submitValue + '</span></a></span>');
		}
		else {
			thisSubmit.after('<span class="btn clearfix btnReplaced"><a rel="' + submitName + '" class="' + submitClass + '" href="' + formAction + '"><span>' + submitValue + '</span></a></span>');
		}

		$(".btnReplaced").not(".norm").eq(i).click(function(){
			$(this).parents('form').append('<input type="hidden" name="' + $(this).find('a').attr('rel') + '" value="' + $(this).find('span').text() + '"');
			$(this).parents("form").submit();
			return false;
		});
		
		$(".btnReplaced").not(".norm").eq(i).bind("contextmenu",function(e){
			$(this).css("text-decoration", "none");
			return false;
		});
		
		thisSubmit.hide(); //we have to hide, not remove the submit button as this, in conjunction with bad xhtml crashes ie6 for some, weird, bizarre, unknowable reason.
	};
	var $rs = $.replaceSubmit;
})(jQuery);


// Plugin: Panel Toggle Function
(function($) {
	$.fn.toggler = function(o){
		
		//Extend function will replace the defualt object if they do not match
		var opt = $.extend({
			 toggleClick:		'.toggle',
			 togglePanel:		'.toggleChild',
			 toggleOpenMsg:		'Close',
			 toggleClosedMsg:	'Open'
			 }, o);
		
		return this.each(function(){
			new $tg(this, opt);
		});
	};
	
	$.toggler = function(e, o) {
		//Show all toggle buttons, CSS for toggle is set to diplay: none
		var tc = $(e).find(o.toggleClick);
		var tp = $(e).find(o.togglePanel);
	
		tc.css("display","inline");
		//Toggle Functionality
		tc.toggle(
			function(){
				//add toggle functionality here
				$(this).addClass("closed");
				$(this).removeClass("open");
				$(this).text(o.toggleClosedMsg);
				tp.toggle("slow");
				return false;
			},
			function(){
				//add toggle functionality here
				$(this).addClass("open");
				$(this).removeClass("closed");
				$(this).text(o.toggleOpenMsg);
				tp.toggle("slow");
				return false;
			}
		)
	};
	
	var $tg = $.toggler;
})(jQuery);

// Plugin: Panel Toggle Function
(function($) {
	$.fn.panels = function(o){
		//Extend function will replace the defualt object if they do not match
		var opt = $.extend({
			 toggleClick:		'.panelToggle',
			 togglePanel:		'.panelToggleChild'
			 }, o);
		
		return this.each(function(){
			new $pn(this, opt);
		});
	};
	
	$.panels = function(e, o) {
		var tc = $(e).find(o.toggleClick);
		var tp = $(e).find(o.togglePanel);
		//Javascript styling
		tc.css("cursor", "pointer");
		//Toggle Functionality
		tc.toggle(
			function(){
				$(this).addClass("closed");
				$(this).removeClass("open");
				tp.slideUp("slow");
				return false;
			},
			function(){
				$(this).addClass("open");
				$(this).removeClass("closed");
				tp.slideDown("slow");
				return false;
			}
		)
		if (tp.hasClass("initClosed")) {tc.trigger('click');};

	};
	
	var $pn = $.panels;
})(jQuery);


function triggerPanels(pageControlClass,pccLC) {
	//Javascript styling
	$bl(".triggerAllPanels").css("display","inline");
	
	//Collapse / Expand all panels
	if (pageControlClass == ".TP1") {
		$bl(pccLC).toggle(function(){
			$bl("div." + pageControlClass + " .open").trigger('click');
			$bl(this).text("Show all");
			return false;
		}, function(){
			$bl("div." + pageControlClass + " .closed").trigger('click');
			$bl(this).text("Hide all");
			return false;
		})
	}
	else {
		$bl(pccLC).toggle(function(){
			$bl("div." + pageControlClass + " .closed").trigger('click');
			$bl(this).text("Hide all");
			return false;
		}, function(){
			$bl("div." + pageControlClass + " .open").trigger('click');
			$bl(this).text("Show all");
			return false;
		})
	}
};


/* PopUp Windows */
function popUp () {
	//Pop up Window Links			
	$bl("a[rel='popUp']").click(function () {
		 var features = "height=350,width=470,scrollTo,resizable=1,scrollbars=1,location=0";
		 newwindow=window.open(this.href, 'Popup', features);
		 return false;
		});
	
	//Javascript styling
	$bl("#popUpClose a").css("visibility","visible");
};

(function($) {
	$.fn.form = function(o){
		var opt = $.extend({
			 keyboardSubmit:	'form'
			 }, o);
		
		return this.each(function(){
			new $form(this, opt);
		});
	};
	
	$.forms = function(object, opt) {
		$(object).keypress(
			function(e) {
				e.which==13?this.submit():null;
			}
		);
	};
	
	var $form = $.forms;
})(jQuery);

//style for hiding classes to be added dynamically. we want the objects visible when JS is off!
document.write('<style type="text/css">.toggleClosed {display:none;}</style>');

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
		contains(isVisible, "true")?$(relatedObjs[i]).removeClass("toggleClosed"):$(relatedObjs[i]).addClass("toggleClosed"); //check if any of those controls are switched on. if so, show the related objects for only those controls
	});
}

function attachToggleEvents() {
	$bl("input.toggleOn").bind("click", toggleRows);
	$bl("input.toggleOff").bind("click", toggleRows);
	//now we display any objects that need to be visible which were hidden by dynamically added css
	$bl("input.toggleOn:checked").trigger("click");
}

$bl(document).ready(function() {
	//$bl('input[type=submit][:eq=0]').replaceSubmit();
	$bl('form').form();
	$bl(".pnlMyBusiness").jaccordion();
	$bl(".pnlCaseStudy").jslider();
	$bl(".toggler").toggler();
	$bl(".panels").panels();
	$bl("#fullPage #txtDescription").focus();
	
	attachToggleEvents();
	triggerPanels(".TP1",".tp1");
	triggerPanels(".TP2",".tp2");
	triggerPanels(".TP3",".tp3");
	triggerPanels(".TP4",".tp4");
	triggerPanels(".TP5",".tp5");
	popUp();

	
});