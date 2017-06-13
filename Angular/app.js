// JavaScript Document

(function(){
	var app = angular.module('myApp', [ ]);
	
	app.controller('storeController', function(){
			this.products = gem;								   
		 });
	
	app.controller("PanelController", function(){
		   this.tab = 1;
		   
			  this.selectTab = function(setTab){
			  this.tab = setTab;
		   };
		   
		   this.isSelected = function(checkTab){
			   return this.tab === checkTab;
		   };
		
		   });
	
	app.controller("ReviewController", function(){
				this.review={};		
				this.addReview = function(product){
					product.reviews.push(this.review);
					this.review={};	
				};
			});
	
	var gem = [{
		name : 'Horlicks',
		price : 159,
		description : 'Health Drink',
		canPurchase : false,
		images: [
				 {
				 full : 'horlicks.jpg',
				 thumb :  'thumb.jpg'
				 }
				 ],
		 reviews : [
				   {
					   stars:5,
					   body : "I like this Product",
					   author: "john@minglebox.com"
				   }
				   ]
		//soldOut : true
	},
	{
		name : 'Complan',
		price : 165,
		description : 'Health Drink',
		canPurchase : false,
		images: [
				 {
				 full : 'complan.jpg',
				 thumb :  'thumb.jpg'
				 }
				 ],
		reviews : [
				   {
					   stars:4,
					   body : "Complan good for Improve Height",
					   author: "john@minglebox.com"
				   }
				   ]
		//soldOut : true
	},
	{
		name : 'Boost',
		price : 135,
		description : 'Health Drink',
		canPurchase : false,
		images: [
				 {
				 full : 'boost.jpg',
				 thumb :  'thumb.jpg'
				 }
				 ],
		reviews : [
				   {
					   stars:3,
					   body : "Boost is good energy",
					   author: "john@minglebox.com"
				   }
				   ]
		//soldOut : true
	},
	{
		name : 'Cavins',
		price : 85,
		description : 'Health Drink',
		canPurchase : false,
		images: [
				 {
				 full : 'cavins.jpg',
				 thumb :  'thumb.jpg'
				 }
				 ],
		reviews : [
				   {
					   stars:4,
					   body : "This is Good for Health",
					   author: "john@minglebox.com"
				   }
				   ]
		//soldOut : true
	}];



})();