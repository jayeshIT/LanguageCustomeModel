// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

var lang = Titanium.App.Properties.getString("lang");
Ti.API.info('----- lang:' + lang);
if (lang) {
} else {
	Ti.API.info('----- SET SET:' + lang);
	Titanium.App.Properties.setString("lang", "en");
}
Ti.API.info('-------Titanium.App.Properties.getString:' + Titanium.App.Properties.getString("lang"));

/*
 *
 * Ti.API.info('-------------Ti.Locale.getString("welcome"):' + Ti.Locale.getString("welcome"));
 Ti.API.info('-------------Ti.Locale.getString("language"):' + Ti.Locale.getString("language"));
 Ti.API.info('-------------Ti.Locale.getString("dictionary"):' + Ti.Locale.getString("dictionary"));
 Ti.API.info('-------------Ti.Locale.getString("search_1"):' + Ti.Locale.getString("search_1"));
 Ti.API.info('-------------Ti.Locale.getString("settings"):' + Ti.Locale.getString("settings"));

 Ti.API.info('-------------Ti.Locale.getString("history1"):' + Ti.Locale.getString("history1"));
 Ti.API.info('-------------Ti.Locale.getString("history2"):' + Ti.Locale.getString("history2"));
 Ti.API.info('-------------Ti.Locale.getString("history3"):' + Ti.Locale.getString("history3"));
 Ti.API.info('-------------Ti.Locale.getString("history4"):' + Ti.Locale.getString("history4"));
 Ti.API.info('-------------Ti.Locale.getString("history6"):' + Ti.Locale.getString("history7"));

 Ti.API.info('-------------Ti.Locale.getString("history8"):' + Ti.Locale.getString("history8"));
 Ti.API.info('-------------Ti.Locale.getString("history7"):' + Ti.Locale.getString("history7"));
 Ti.API.info('-------------Ti.Locale.getString("history9"):' + Ti.Locale.getString("history9"));
 Ti.API.info('-------------Ti.Locale.getString("history10"):' + Ti.Locale.getString("history10"));
 Ti.API.info('-------------Ti.Locale.getString("history11"):' + Ti.Locale.getString("history11"));

 Ti.API.info('-------------Ti.Locale.getString("history12"):' + Ti.Locale.getString("history12"));
 Ti.API.info('-------------Ti.Locale.getString("history13"):' + Ti.Locale.getString("history13"));
 Ti.API.info('-------------Ti.Locale.getString("history14"):' + Ti.Locale.getString("history14"));
 Ti.API.info('-------------Ti.Locale.getString("history15"):' + Ti.Locale.getString("history15"));
 Ti.API.info('-------------Ti.Locale.getString("history16"):' + Ti.Locale.getString("history16"));

 Ti.API.info('-------------Ti.Locale.getString("history17"):' + Ti.Locale.getString("history17"));
 Ti.API.info('-------------Ti.Locale.getString("history18"):' + Ti.Locale.getString("history18"));
 Ti.API.info('-------------Ti.Locale.getString("history19"):' + Ti.Locale.getString("history19"));
 Ti.API.info('-------------Ti.Locale.getString("history20"):' + Ti.Locale.getString("history20"));
 //Ti.API.info('-------------Ti.Locale.getString("history21"):' + Ti.Locale.getString("history21"));
 Ti.API.info('-------------Ti.Locale.getString("history22"):' + Ti.Locale.getString("history22"));

 Ti.API.info('-------------languageExp' + Ti.Locale.getString("languageExp"));
 Ti.API.info('-------------Ti.Locale.getString("languageSelected"):' + Ti.Locale.getString("languageSelected"));
 Ti.API.info('-------------Ti.Locale.getString("confirm"):' + Ti.Locale.getString("confirm"));
 Ti.API.info('-------------Ti.Locale.getString("exit"):' + Ti.Locale.getString("exit"));
 Ti.API.info('-------------Ti.Locale.getString("settings"):' + Ti.Locale.getString("settings"));

 Ti.API.info('-------------Ti.Locale.getString("curiosities"):' + Ti.Locale.getString("curiosities"));
 Ti.API.info('-------------Ti.Locale.getString("language"):' + Ti.Locale.getString("language"));
 Ti.API.info('-------------Ti.Locale.getString("choose_the_dictionary_language"):' + Ti.Locale.getString("choose_the_dictionary_language"));
 Ti.API.info('-------------Ti.Locale.getString("filter_detailed_search"):' + Ti.Locale.getString("filter_detailed_search"));
 Ti.API.info('-------------Ti.Locale.getString("here_you_will_find_some_great_short"):' + Ti.Locale.getString("here_you_will_find_some_great_short"));

 Ti.API.info('-------------Ti.Locale.getString("search_2"):' + Ti.Locale.getString("search_2"));
 Ti.API.info('-------------Ti.Locale.getString("the_last_50_entries_accessed"):' + Ti.Locale.getString("the_last_50_entries_accessed"));
 Ti.API.info('-------------Ti.Locale.getString("language_of_the_application"):' + Ti.Locale.getString("language_of_the_application"));
 Ti.API.info('-------------Ti.Locale.getString("by_accessing_a_word"):' + Ti.Locale.getString("by_accessing_a_word"));
 Ti.API.info('-------------Ti.Locale.getString("confirm"):' + Ti.Locale.getString("confirm"));

 Ti.API.info('-------------Ti.Locale.getString("in_the_navigation_bar"):' + Ti.Locale.getString("in_the_navigation_bar"));
 Ti.API.info('-------------Ti.Locale.getString("under_dictionary"):' + Ti.Locale.getString("under_dictionary"));
 Ti.API.info('-------------Ti.Locale.getString("by_accessing_a_word"):' + Ti.Locale.getString("by_accessing_a_word"));
 Ti.API.info('-------------Ti.Locale.getString("whenever_a_word_is_highlighted"):' + Ti.Locale.getString("whenever_a_word_is_highlighted"));
 Ti.API.info('-------------Ti.Locale.getString("in_find"):' + Ti.Locale.getString("in_find"));

 Ti.API.info('-------------Ti.Locale.getString("in_curiosities"):' + Ti.Locale.getString("in_curiosities"));
 Ti.API.info('-------------Ti.Locale.getString("in_settings"):' + Ti.Locale.getString("in_settings"));
 Ti.API.info('-------------Ti.Locale.getString("late_harvest"):' + Ti.Locale.getString("late_harvest"));
 Ti.API.info('-------------Ti.Locale.getString("president_of_the_regional_council"):' + Ti.Locale.getString("president_of_the_regional_council"));
 Ti.API.info('-------------Ti.Locale.getString("general_director_of_senac_rio_de_janeiro"):' + Ti.Locale.getString("general_director_of_senac_rio_de_janeiro"));

 Ti.API.info('-------------Ti.Locale.getString("editorial_board"):' + Ti.Locale.getString("editorial_board"));
 Ti.API.info('-------------Ti.Locale.getString("publisher_senac_rio_de_janeiro"):' + Ti.Locale.getString("publisher_senac_rio_de_janeiro"));
 Ti.API.info('-------------Ti.Locale.getString("publisher_2"):' + Ti.Locale.getString("publisher_2"));
 Ti.API.info('-------------Ti.Locale.getString("publisher_1"):' + Ti.Locale.getString("publisher_1"));
 Ti.API.info('-------------Ti.Locale.getString("editorial_production"):' + Ti.Locale.getString("editorial_production"));

 Ti.API.info('-------------Ti.Locale.getString("graphic_design"):' + Ti.Locale.getString("graphic_design"));
 Ti.API.info('-------------Ti.Locale.getString("illustrations"):' + Ti.Locale.getString("illustrations"));
 Ti.API.info('-------------Ti.Locale.getString("management_of_educational_media"):' + Ti.Locale.getString("management_of_educational_media"));
 Ti.API.info('-------------Ti.Locale.getString("technical_coordination_and_development"):' + Ti.Locale.getString("technical_coordination_and_development"));
 Ti.API.info('-------------Ti.Locale.getString("supplier"):' + Ti.Locale.getString("supplier"));

 Ti.API.info('-------------Ti.Locale.getString("version_and_narration"):' + Ti.Locale.getString("version_and_narration"));
 Ti.API.info('-------------Ti.Locale.getString("how_to_resolve_territorial"):' + Ti.Locale.getString("how_to_resolve_territorial"));
 Ti.API.info('-------------Ti.Locale.getString("statesman_architect_philosopher"):' + Ti.Locale.getString("statesman_architect_philosopher"));
 Ti.API.info('-------------Ti.Locale.getString("it_is_the_beginning"):' + Ti.Locale.getString("it_is_the_beginning"));
 Ti.API.info('-------------Ti.Locale.getString("horatio_nelson"):' + Ti.Locale.getString("horatio_nelson"));

 Ti.API.info('-------------Ti.Locale.getString("pay_attention_1"):' + Ti.Locale.getString("pay_attention_1"));
 Ti.API.info('-------------Ti.Locale.getString("pay_attention_2"):' + Ti.Locale.getString("pay_attention_2"));
 Ti.API.info('-------------Ti.Locale.getString("the_french_writer"):' + Ti.Locale.getString("the_french_writer"));
 Ti.API.info('-------------Ti.Locale.getString("around_the_year_1110"):' + Ti.Locale.getString("around_the_year_1110"));
 Ti.API.info('-------------Ti.Locale.getString("chateau_mouton"):' + Ti.Locale.getString("chateau_mouton"));

 */