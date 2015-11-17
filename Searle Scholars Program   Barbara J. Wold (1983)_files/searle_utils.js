$(function(){

	$('ul.sf-menu').superfish({ 
		// pathClass:     'overideThisToUse', // the class you have applied to list items that lead to the current page 
		// pathLevels:    1,                  // the number of levels of submenus that remain open or are restored using pathClass 
		delay:         600,                // the delay in milliseconds that the mouse can remain outside a submenu without it closing 
		animation:     {opacity:'show'},   // an object equivalent to first parameter of jQuery’s .animate() method 
		// animation: {height:'show'},   // slide-down effect without fade-in 
		speed:         'normal',           // speed of the animation. Equivalent to second parameter of jQuery’s .animate() method 
		autoArrows:    false,               // if true, arrow mark-up generated automatically = cleaner source code at expense of initialisation performance 
		dropShadows:   false,               // completely disable drop shadows by setting this to false 
		disableHI:     true,              // set to true to disable hoverIntent detection 
		onInit:        function(){},       // callback function fires once Superfish is initialised – 'this' is the containing ul 
		onBeforeShow:  function(){},       // callback function fires just before reveal animation begins – 'this' is the ul about to open 
		onShow:        function(){},       // callback function fires once reveal animation completed – 'this' is the opened ul 
		onHide:        function(){}        // callback function fires after a sub-menu has closed – 'this' is the ul that just closed 

	});

	// $("html").keypress(function(e){
		// $("div#debug").text(e.which);
		
		// control-s or control-f gives focus to the find box
// 		if (e.which == 115 || e.which == 102){
// 			$("input#query").focus();
// 		}
// 		
// 	});
});
