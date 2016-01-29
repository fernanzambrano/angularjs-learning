(function(){
	
 	var gems = [
 				{ name: 'Azurite 1', price: 3.00, visible: true, 
 				  canPurchase: false, dateInput: '1452950043541',
 				  image: 'images/gems1.png' },
 				{ name: 'Azurite 2', price: 4.00, visible: true, 
 				  canPurchase: true, dateInput: '1452950043541',
 				  image: 'images/gems2.png' },
 				{ name: 'Azurite 3', price: 2.00, visible: false, 
 				  canPurchase: true, dateInput: '1452950043541' },
 				{ name: 'Azurite 4', price: 1.00, visible: true, 
 				  canPurchase: false, dateInput: '1452950043541', 
 				  image: 'images/gems1.png' }
 			   ];

 	var app = angular.module('gemStore', []);
 	app.controller('StoreController', storeCtl);

 	function storeCtl(){
   		this.products = gems;
  	}
  
})();