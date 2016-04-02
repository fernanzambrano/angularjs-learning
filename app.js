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
 				  image: 'images/amatista.jpg', description: 'Piedra semi-preciosa de color morado.',
 				  comment: 'Como ya sabemos, la amatista fue considerada piedra preciosa, pero, tras el descubrimiento de minas en Brasil, su rareza perdió enteros y pasó a formar parte del grupo de piedras semipreciosas'
 				}  				
 			   ];
	
 	var app = angular.module('gemStore', []);
 	app.directive('storeproducts', storeProducts);

 	function storeProducts(){
		return {
 			restrict: 'E',
 			templateUrl: 'storeproducts.html',
      controller: storeCtl,
      controllerAs: 'store'
 		};
 	};

 	function storeCtl(){

   		this.products = gems;
   		this.form = { visible: false, title: 'Sin título', typeOperation: 'init' };
  			
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

  		this.setForm = function(visible, title, typeOperation, disableName) {
 			this.form.visible = visible;
 			this.form.title = title;
 			this.form.typeOperation = typeOperation;
 			this.form.disableName = disableName;
 		};

 		this.formIsVisible = function() {
 			return this.form.visible;
 		};

 		this.disableName = function() {
 			return this.form.disableName;
 		};    		

   		this.setProduct = function(typeOperation) {
   			if (typeOperation === 'add') {
   				this.product = {};
   				this.setForm(true, 'Alta Producto', typeOperation, false);
   			} else if (typeOperation === 'update') {
   				this.product = this.clone(this.currentProduct);
   				this.setForm(true, 'Modificar Producto', typeOperation, true);
   			} else if (typeOperation === 'delete') {
   				this.product = this.clone(this.currentProduct);
   				this.setForm(true, 'Baja Producto', typeOperation, true);   				
   			} else {
   				this.setForm(false, 'Sin Título', typeOperation);
   			}   			
   		};

 		this.manageProduct = function() {
 			if (this.form.typeOperation === 'add') {
 				this.addProduct();
 			} else if (this.form.typeOperation === 'update') {
 				this.updateProduct();
 			} else {
 				this.deleteProduct();
 			}
 		};   		

   		this.addProduct = function() {
   			this.product.visible = true;
   			this.product.canPurchase = true;
   			this.product.dateInput = Date.now();
   			this.product.image="images/nothing";
   			this.products.push(this.product);

   			this.setForm(false, 'Sin titulo')
   			gems = this.products;
   		};

  		this.updateProduct = function() {
  			var i = this.locateProduct();
 			this.products[i].description = this.product.description;
 			this.products[i].price = this.product.price;
  			this.products[i].comment = this.product.comment;

  			this.product = {};
  			this.setForm(false, 'Sin titulo')
   			gems = this.products;
   		};

   		this.deleteProduct = function() {
   			var i = this.locateProduct();
   			this.products.splice(i,1);

   			this.product = {};
   			this.currentProduct = {};
  			this.setForm(false, 'Sin titulo')
   			gems = this.products;	
   		};

   		this.locateProduct = function() {
			for (var i = 0; i < this.products.length; i++) { 
  				if (this.products[i].name === this.product.name) { 
    				return i;
  				} 
			}
   		};

   		this.clone = function(obj) {
    		return JSON.parse(JSON.stringify(obj));
		};
  	};  
})();