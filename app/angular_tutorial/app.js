
/*abstractions : assigning a function to a variable, passing functions into other functions for code reuse*/

/*modules : 
keeps coding capsulated
where the dependencies are defined
The js file that includes this code will need to be included with an html script tag
var app =  angular.module('store', []);*/


/*controller : purpose is to get a javascript defined object onto our web page(html)
use encapsulation for the functions
*/


(function(){
  	var music = { name: 'Sparkle', genre: "r&b", solo:false }; //define an object
  	var songs =[
			{title:'One Wing', length:'4:15', price:'1.57'},
			{title:'Look Into Your Heart', length:'2:26', price:'1.29'},
			{title:'Love Will', length:'3:12', price:'2'},
			{title:'Jump', length:'2:28', price:'1.48'}
		];


	var app = angular.module('megaStore', ['store-directives']); //module to access controller, with dependency
  
  	app.controller("MusicController", function(){
		this.artist = music; //define properties inside of the controller
		this.recordings = songs;
	});  	

	app.controller("PanelController", function(){
		this.tab = 1; //define properties inside of the controller
		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(tabName){
			return this.tab === tabName;
		};
	});

	app.controller("ReviewController", function(){
		this.review = {};
	
		this.addReview = function(product){
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});



	/*service names start with a $ like jquery ($http, $log, $filter...)
	
	//config object HTTP methods
	$http({method:'GET', url:'/products.json'});
	$http({method:'TRACE', url:'/products.json'});

	//shorthand notation
	$http.get('/products.json', {param: 'value'}); 
	$http.post('/products.json');
	$http.delete('/products.json');
	*/
	
	//controller calls the name of a service service and passes the name as an argument
	app.controller('StoreController', ['$http', function($http){
		var store = this;
		store.products = [];
		
		$http.get('/products.json', {param: 'value'}).success(function(data){
			//setting callback variable 
			store.products = data;
		}); 

	}]);
	
	//controller for multiple services, dependency injection of services into the controller as arguments
	/*app.controller('StoreController', ['$http', '$log', function($http, $log){...}]);*/


	/******************************************************************************************************/

	//replaced hard-coded data with a service

	/* app.controller("StoreController", function(){
		this.products = gems; //define properties inside of the controller
	}); 

	
	var gems = [{
	      name: 'Azurite',
	      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
	      shine: 8,
	      price: 110.50,
	      rarity: 7,
	      color: '#CCC',
	      faces: 14,
	      images: [
		"images/gem-02.gif",
		"images/gem-05.gif",
		"images/gem-09.gif"
	      ],
	      reviews: [{
		stars: 5,
		body: "I love this gem!",
		author: "joe@example.org",
		createdOn: 1397490980837
	      }, {
		stars: 1,
		body: "This gem sucks.",
		author: "tim@example.org",
		createdOn: 1397490980837
	      }]
	    }, {
	      name: 'Bloodstone',
	      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
	      shine: 9,
	      price: 22.90,
	      rarity: 6,
	      color: '#EEE',
	      faces: 12,
	      images: [
		"images/gem-01.gif",
		"images/gem-03.gif",
		"images/gem-04.gif",
	      ],
	      reviews: [{
		stars: 3,
		body: "I think this gem was just OK, could honestly use more shine, IMO.",
		author: "JimmyDean@example.org",
		createdOn: 1397490980837
	      }, {
		stars: 4,
		body: "Any gem with 12 faces is for me!",
		author: "gemsRock@example.org",
		createdOn: 1397490980837
	      }]
	    }, {
	      name: 'Zircon',
	      description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
	      shine: 70,
	      price: 1100,
	      rarity: 2,
	      color: '#000',
	      faces: 6,
	      images: [
		"images/gem-06.gif",
		"images/gem-07.gif",
		"images/gem-08.gif"
	      ],
	      reviews: [{
		stars: 1,
		body: "This gem is WAY too expensive for its rarity value.",
		author: "turtleguyy@example.org",
		createdOn: 1397490980837
	      }, {
		stars: 1,
		body: "BBW: High Shine != High Quality.",
		author: "LouisW407@example.org",
		createdOn: 1397490980837
	      }, {
		stars: 1,
		body: "Don't waste your rubles!",
		author: "nat@example.org",
		createdOn: 1397490980837
	      }]
	   }];*/

	



})();
