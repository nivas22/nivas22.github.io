z.controller('contentControl',function($scope,$translate,$rootScope){
	$scope.name ="dsfdsf";
	//$translateProvider.preferredLanguage('en');
	$translate.use('en');
	$scope.Hero_Name =$translate.instant("Hero_Name");
      $scope.Heroine_Name=$translate.instant("Heroine_Name");
      $scope.Label_Fun=$translate.instant("Label_Fun");
      $scope.Top_Quote=$translate.instant("Top_Quote");

     $scope.Second_Heading=$translate.instant("Second_Heading");
     $scope.Line_One=$translate.instant("Line_One");
      $scope.Sub_Quote=$translate.instant("Sub_Quote");
      $scope.Label_Hero=$translate.instant("Label_Hero");
      $scope.Label_Heroine=$translate.instant("Label_Heroine");
     $scope.Label_Day=$translate.instant("Label_Day");
      $scope.Mrg_Day=$translate.instant("Mrg_Day");
      $scope.Label_Invitaiton=$translate.instant("Label_Invitaiton");
      $scope.Labe_U=$translate.instant("Labe_U");
      $scope.Label_Description=$translate.instant("Label_Description");
      $scope.Label_Address =$translate.instant("Label_Address");
     $scope.Label_venue  =$translate.instant("Label_venue");
     $scope.Label_Location =$translate.instant("Label_Location");
     $scope.Label_District=$translate.instant("Label_District");
	$scope.changeLanguage = function(tag){
		//alert(tag);
		$translate.use(tag);
		$scope.Hero_Name =$translate.instant("Hero_Name");
      $scope.Heroine_Name=$translate.instant("Heroine_Name");
      $scope.Label_Fun=$translate.instant("Label_Fun");
      $scope.Top_Quote=$translate.instant("Top_Quote");

     $scope.Second_Heading=$translate.instant("Second_Heading");
     $scope.Line_One=$translate.instant("Line_One");
      $scope.Sub_Quote=$translate.instant("Sub_Quote");
      $scope.Label_Hero=$translate.instant("Label_Hero");
      $scope.Label_Heroine=$translate.instant("Label_Heroine");
     $scope.Label_Day=$translate.instant("Label_Day");
      $scope.Mrg_Day=$translate.instant("Mrg_Day");
      $scope.Label_Invitaiton=$translate.instant("Label_Invitaiton");
      $scope.Labe_U=$translate.instant("Labe_U");
      $scope.Label_Description=$translate.instant("Label_Description");
      $scope.Label_Address =$translate.instant("Label_Address");
     $scope.Label_venue  =$translate.instant("Label_venue");
     $scope.Label_Location =$translate.instant("Label_Location");
     $scope.Label_District=$translate.instant("Label_District");
		
	};
	/* $rootScope.$on('$translateChangeSuccess', function(event, data) {
      alert('change success');
    });*/
});