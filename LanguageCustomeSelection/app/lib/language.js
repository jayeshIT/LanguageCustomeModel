exports.L = function(text) {

	var langFile = Titanium.App.Properties.getString("lang");
	var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'i18n/' + langFile + '/strings.xml');
	var xmltext = file.read().text;
	var xmldata = Titanium.XML.parseString(xmltext);
	var data = xmldata.documentElement.getElementsByTagName(text);
	var xpath = "/resources/string[@name='" + text + "']/text()";
	var result = xmldata.evaluate(xpath).item(0);
	if (result) {
		return result.textContent;
	} else {
		return "";
	}
};

/**
 * Returns the text based on the selected language in the application settings.
 */
exports.LLL = function(text) {

	if (Ti.App.languageXML === undefined || Ti.App.languageXML === null) {

		var langFile = Ti.App.Properties.getString('lang');

		// We should store user's language setting in lang
		var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'i18n/' + langFile + '.xml');

		// Get the corresponding file from i18n]

		if (!file.exists()) {

			Ti.API.info('---No exists:' + file.nativePath);
			var langFile = "en";
			// Fall back to english as the default language
			file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'i18n/' + langFile + '.xml');

		} else {

			Ti.API.info('--- exists:' + file.nativePath);

		}

		var xmltext = file.read().text;

		var xmldata = Titanium.XML.parseString(xmltext);

		// Parse the xml
		Ti.App.languageXML = xmldata;
		// Store the parsed xml so that we don't parse everytime L() is called
	}
	// Get the localised string from xml file

	var xpath = "/resources/string[@name='" + text + "']/text()";

	Ti.API.info('-----xpath:' + xpath);

	var p_t = Ti.App.languageXML.evaluate(xpath);

	Ti.API.info('-------Ti.App.languageXML.evaluate(xpath) ; ' + p_t);

	var result = '';
	if (p_t) {

		result = p_t.item(0);
	}
	if (result) {
		return result.text;
	} else {
		return text;
		// Return the text if localised version not found
	}
};

exports.Languages = function() {
	var self = {};

	//self.contentFolder = Titanium.Filesystem.resourcesDirectory + 'library/';
	self.languageSupport = 'en es pt';
	self.languageList = [{
		id : 0,
		code : 'en',
		title : 'English',
		strings : require('strings/en')
	}, {
		id : 1,
		code : 'es',
		title : 'Español',
		strings : require('strings/es')
	}, {
		id : 2,
		code : 'pt',
		title : 'Português',
		strings : require('strings/pt')
	}];

	self.init = function() {
		console.log('language.init');

		if (!Ti.App.Properties.hasProperty('defaultLanguageCode')) {

			for (var j = 0; j < self.languageList.length; j++) {

				if (self.languageList[j].id === Ti.Locale.currentLanguage) {

					Ti.App.Properties.setString('defaultLanguageCode', self.languageList[j].code);
					Ti.App.Properties.setString('defaultLanguageTitle', self.languageList[j].code);
					Ti.App.Properties.setInt('defaultLanguageId', self.languageList[j].code);

					self.defaultLanguageCode = self.languageList[j].code;
					self.defaultLanguageTitle = self.languageList[j].title;
					self.defaultLanguageId = self.languageList[j].id;

					j = self.languageList.length;

				} else {

					Ti.App.Properties.setString('defaultLanguageCode', 'en');
					Ti.App.Properties.setString('defaultLanguageTitle', 'English');
					Ti.App.Properties.setInt('defaultLanguageId', 0);
					self.defaultLanguageCode = 'en';
					self.defaultLanguageTitle = 'English';
					self.defaultLanguageId = 0;

				}
			}

		} else {
			self.defaultLanguageCode = Ti.App.Properties.getString('defaultLanguageCode');
			self.defaultLanguageTitle = Ti.App.Properties.getString('defaultLanguageTitle');
			self.defaultLanguageId = Ti.App.Properties.getInt('defaultLanguageId');
		}
	};

	self.setLanguage = function(args) {
		console.log('language.setLanguage: ' + args);
		if (args >= 0) {
			console.log('args greater or = 0');
			Ti.App.Properties.setString('defaultLanguageCode', self.languageList[args].code);
			Ti.App.Properties.setString('defaultLanguageTitle', self.languageList[args].title);
			Ti.App.Properties.setInt('defaultLanguageId', self.languageList[args].id);
			self.defaultLanguageCode = Ti.App.Properties.getString('defaultLanguageCode');
			self.defaultLanguageTitle = Ti.App.Properties.getString('defaultLanguageTitle');
			self.defaultLanguageId = Ti.App.Properties.getInt('defaultLanguageId');
			console.log();
		}

		return self.languageList[args];
	};

	self.getLanguageCode = function() {
		return Ti.App.Properties.getString('defaultLanguageCode');
	};

	self.getLanguageTitle = function() {
		return Ti.App.Properties.getString('defaultLanguageTitle');
	};

	self.getLanguage = function() {
		return self.languageList[self.defaultLanguageId];
	};

	self.L = function(key, fallBack) {
		//console.log('languages.L');
		//console.log(self.languageList[Ti.App.Properties.getString('defaultLanguageId')].strings[key]);
		if (self.languageList[Ti.App.Properties.getString('defaultLanguageId')].strings[key]) {
			return self.languageList[Ti.App.Properties.getString('defaultLanguageId')].strings[key];
		}
		if (fallBack) {
			return fallBack;
		} else {
			return key;
		}
	};
	return self;
};

