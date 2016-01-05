(function(){
	
 	var gems = [
 				{ name: 'Azurite 1', price: 3.00, visible: true, canPurchase: false },
 				{ name: 'Azurite 2', price: 4.00, visible: true, canPurchase: true },
 				{ name: 'Azurite 3', price: 2.00, visible: false, canPurchase: true },
 				{ name: 'Azurite 4', price: 1.00, visible: true, canPurchase: false }
 			   ];

 	var app = angular.module('gemStore', []);
 	app.controller('StoreController', storeCtl);

 	function storeCtl(){
   		this.products = gems;
  	}
  
})();