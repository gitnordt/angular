
//best to split out modules based on their purpose and functionality
(function(){
	var app = angular.module('store-directives', []); //module to access controller	
	//custom directive made to support templates
	  app.directive('productTitle', function(){
		return {
			restrict:'E', //this is the type of directive, stands for html element
			templateUrl: 'product-title.html'
		};
	  });

	  app.directive('productHeader', function(){
		return {
			restrict:'A', //this is the type of directive, stands for html attribute
			templateUrl: 'product-title.html'
		};
	  });

	  app.directive('productPanels', function(){ //adding a controller to a directive
		return {
			restrict:'E',
			templateUrl: 'product-panels.html'
			controller:function(){ //adding all the functionality from the previous PanelController controller

				this.tab = 1; //define properties inside of the controller
				this.selectTab = function(setTab){
					this.tab = setTab;
				};

				this.isSelected = function(tabName){
					return this.tab === tabName;
				};

			},
			controllerAs: 'panel'
		};
	  });
})();
