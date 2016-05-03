var z = angular.module('invApp',['pascalprecht.translate']);

z.config(function($translateProvider, languages) {
  var en = languages.en();
  var tn = languages.tn();
  $translateProvider.translations('en', en);
  $translateProvider.translations('tn', tn);

  $translateProvider.preferredLanguage('en');
  
});
