var locale = require('com.shareourideas.locale');
Ti.API.info("module is => " + locale);
var args = arguments[0] || {};

var lang = Titanium.App.Properties.getString("lang");

if (OS_ANDROID) {

	alert(lang);

	if (lang == "en") {
		$.EnSwitch.setValue(true);
		$.NlSwitch.setValue(false);
		$.BrSwitch.setValue(false);
	}
	if (lang == "fr") {

		$.EnSwitch.setValue(false);
		$.NlSwitch.setValue(true);
		$.BrSwitch.setValue(false);
	}

	if (lang == "pt") {
		$.EnSwitch.setValue(false);
		$.NlSwitch.setValue(false);
		$.BrSwitch.setValue(true);
	}
	$.EnSwitch.addEventListener('click', function(e) {

		Titanium.App.Properties.setString("lang", "en");
		locale.setLocale("en");
		Alloy.Globals.setLanguage();
		$.EnSwitch.setValue(true);
		$.NlSwitch.setValue(false);
		$.BrSwitch.setValue(false);

	});
	$.NlSwitch.addEventListener('click', function(e) {
		Titanium.App.Properties.setString("lang", "fr");
		locale.setLocale("fr");
		Alloy.Globals.setLanguage();
		$.EnSwitch.setValue(false);
		$.NlSwitch.setValue(true);
		$.BrSwitch.setValue(false);
	});

	$.BrSwitch.addEventListener('click', function(e) {
		Titanium.App.Properties.setString("lang", "pt");
		locale.setLocale("pt");
		Alloy.Globals.setLanguage();
		$.EnSwitch.setValue(false);
		$.NlSwitch.setValue(false);
		$.BrSwitch.setValue(true);
	});
} else {

	alert(lang);

	if (lang == "en") {
		$.EnSwitch.image = "/bluecheck.png";
		$.NlSwitch.image = "/blueuncheck.png";
		$.BrSwitch.image = "/blueuncheck.png";
	}
	if (lang == "fr") {
		$.NlSwitch.image = "/bluecheck.png";
		$.EnSwitch.image = "/blueuncheck.png";
		$.BrSwitch.image = "/blueuncheck.png";

	}
	if (lang == "pt") {
		$.BrSwitch.image = "/bluecheck.png";
		$.EnSwitch.image = "/blueuncheck.png";
		$.NlSwitch.image = "/blueuncheck.png";
	}

	$.EnSwitch.addEventListener('click', function(e) {
		if ($.EnSwitch.image == "/blueuncheck.png") {
			Titanium.App.Properties.setString("lang", "en");
			Alloy.Globals.setLanguage();
			$.EnSwitch.image = "/bluecheck.png";
			$.NlSwitch.image = "/blueuncheck.png";
			$.BrSwitch.image = "/blueuncheck.png";
		} else {
			alert('Already selected');
		}
	});

	$.NlSwitch.addEventListener('click', function(e) {
		if ($.NlSwitch.image == "/blueuncheck.png") {
			Titanium.App.Properties.setString("lang", "fr");
			Alloy.Globals.setLanguage();
			$.EnSwitch.image = "/blueuncheck.png";
			$.NlSwitch.image = "/bluecheck.png";
			$.BrSwitch.image = "/blueuncheck.png";
		} else {
			alert('Already selected');
		}
	});

	$.BrSwitch.addEventListener('click', function(e) {
		if ($.BrSwitch.image == "/blueuncheck.png") {
			Titanium.App.Properties.setString("lang", "pt");
			Alloy.Globals.setLanguage();
			$.EnSwitch.image = "/blueuncheck.png";
			$.NlSwitch.image = "/blueuncheck.png";
			$.BrSwitch.image = "/bluecheck.png";
		} else {
			alert('Already selected');
		}
	});
}

