pubcoder.projectID = pubcoder.projectID || "174B25598C6F4BBFBEE716B4FBA1BE0D";
pubcoder.project.id = pubcoder.project.id || "174B25598C6F4BBFBEE716B4FBA1BE0D";
pubcoder.project.title = pubcoder.project.title || "Practically Playing\'s Project";
pubcoder.page.id = pubcoder.page.id || 6416;
pubcoder.page.title = pubcoder.page.title || "2";
pubcoder.page.number = pubcoder.page.number || 2;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

/*
 * 
 * Init Action Lists
 *
 * 
 */

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
 $(window).on(PubCoder.Events.PageLoad, function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	
	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 
 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
var drawerObj6545 = new Drawer('obj6545', {
	backgroundColor: "rgba(0,0,0,0)",
	autosave: true,
	annotationMode: false,
	eraseDialogMessage: "Are you sure to erase your drawing?",
	eraseButtonLabel: "Erase",
	eraseCancelLabel: "Cancel",
	noteDeletionMessage: "Are you sure to delete this note?",
	noteDeletionDeleteButtonLabel: "Delete",
	noteDeletionCancelButtonLabel: "Cancel"
});
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCCrosswords
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCFillInTheGaps
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCTrueFalse
	 * 
	 * 
	 */
	
	
	/*
	 * 
	 * Init SCMatchWordWithPicture
	 * 
	 * 
	 */
	
    
    
	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		




































































































		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		XPUB.ready();
	 }
});
$(window).on(pubcoder.events.pagePlay, function() {
	$(window).trigger(pubcoder.events.pageReady);
	if (pubcoder.isInteractionObserverSupported) {
		var ob = new IntersectionObserver(function(entries) {
			$(entries).each(function (index, entry) {
				if (entry.isIntersecting) {
					$(entry.target).trigger(pubcoder.events.appear);
				} else {
					$(entry.target).trigger(pubcoder.events.disappear);
				}
			});
		}, {
			root: null,
			rootMargin: "0px",
			threshold: 0
		});
		$(".SCView").each(function (i, el) {
			ob.observe(el);
		});	
	}
	
$("#obj6417").trigger('SCEventShow');
$("#obj6419").trigger('SCEventShow');
$("#obj6511").trigger('SCEventShow');
$("#obj6512").trigger('SCEventShow');
$("#obj6514").trigger('SCEventShow');
$("#obj6516").trigger('SCEventShow');
$("#obj6518").trigger('SCEventShow');
$("#obj6520").trigger('SCEventShow');
$("#obj6545").trigger('SCEventShow');
$("#obj6558").trigger('SCEventShow');
	
});