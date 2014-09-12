var LAN = require('language');

var locale = require('com.shareourideas.locale');
Ti.API.info("module is => " + locale);
Alloy.Globals.CustomTabGroup = $.tgb;
$.tgb.open();
Alloy.Globals.openNewWin = function(win) {
	$.tgb.activeTab.open(win);
};

var setLanguage = function(e) {

	$.tab1.title = LAN.L("history1");
	$.tab2.title = LAN.L("history2");
	$.tab3.title = LAN.L("history3");
	$.tab4.title = LAN.L("history4");
	$.tab5.title = LAN.L("history5");

	

};

setLanguage();

Alloy.Globals.setLanguage = function(e) {
	setLanguage(e);
};

if (OS_ANDROID) {
	$.tgb.addEventListener('open', function(e) {
		Ti.API.info('- this is data');
		if (e.index == 2) {
			Ti.API.info('----123');
			var activity = $.tgb.activeTab.activity;
			Ti.API.info('-------activity: ' + activity);
			activity.onCreateOptionsMenu = function(e) {
				var menu = e.menu;
				// Menu Item 1
				var menuItem1 = menu.add({
					title : "Item 1",
					icon : "images/action_about.png",
					showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
				});
				menuItem1.addEventListener("click", function(e) {
					alert("I was clicked 1");
				});

				// Menu Item 2
				var menuItem2 = menu.add({
					title : "Item 2",
					icon : "images/action_settings.png",
					showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
				});
				menuItem2.addEventListener("click", function(e) {
					alert("I was clicked 2");
				});
			};
		}

	});
}
