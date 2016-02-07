(function(){
	
 	var gems = [	
 				{ name: 'Rubi', price: 3000, visible: true, 
 				  canPurchase: true, dateInput: '1452950043541',
 				  image: 'images/rubi.jpg', description: 'Piedra preciosa de color rojizo.',
 				  comment: 'Su denominación proviene del latín ruber, que significa rojo. Su principal característica es el intenso y brillante color rojo que su propio nombre indica. Este color es debido a los metales que lo componen, el hierro y el cromo'
 				},
 				{ name: 'Esmeralda', price: 2000, visible: true, 
 				  canPurchase: true, dateInput: '1452950043541',
 				  image: 'images/esmeralda.jpg', description: 'Piedra preciosa de color verde.',
 				  comment: 'La esmeralda ha sido siempre muy valorada, ya que, a pesar de que existían otras piedras verdes, la única cristalina era la esmeralda. En la actualidad, conocemos otras piedras cristalinas de color verde, pero ninguna de ellas es comparable en color y transparencia a la esmeralda. Pertenece a la familia del Berilio y tiene una dureza de 8 en la escala de Mohs'
 				},
 				{ name: 'Zafiro azul', price: 1000, visible: true, 
 				  canPurchase: true, dateInput: '1452950043541', 
 				  image: 'images/zafiro-azul.jpg', description: 'Piedra preciosa de color azul.',
 				  comment: 'Como el rubí, pertenece a la familia del Corindón. Su característica distintiva es su intenso color azul; aunque existen zafiros de otras tonalidades, el más valorado y apreciado es el zafiro azul. A cualquier Corindón de color distinto al rojo se le denomina zafiro; de ahí que se adjetive y se le denomine zafiro azul.'
 				},
 				{ name: 'Amatista', price: 4000, visible: true, 
 				  canPurchase: true, dateInput: '1452950043541',
 				  image: 'images/amatista.jpg', description: 'Piedra semi-preciosa de colo morado.',
 				  comment: 'Como ya sabemos, la amatista fue considerada piedra preciosa, pero, tras el descubrimiento de minas en Brasil, su rareza perdió enteros y pasó a formar parte del grupo de piedras semipreciosas'
 				}  				
 			   ];

 	
 	var app = angular.module('gemStore', []);
 	app.controller('StoreController', storeCtl);

 	function storeCtl(){
   		this.products = gems;
   			
   		this.selectTab = function(selTab) {
   			this.tab = selTab;
   		};

   		this.isTabSelected = function(tabToEvaluate) {
   			return this.tab === tabToEvaluate;
   		};

   		this.selectProduct = function(product) {
   			this.currentProduct = product;
   		};

   		this.isProductSelected = function(productToEvaluate) {
   			return this.currentProduct === productToEvaluate;
   		};
  	}
  
})();