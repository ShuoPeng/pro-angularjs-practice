angular.module("sportsStore")
			 .constant("productListActiveClass", "btn-primary")
			 .constant("productListPageCount", 3)
			 .controller("productListCtrl", function($scope, $filter, 
			 	productListActiveClass, productListPageCount, cart){
					
					// 注意这里的变量是私有的，而不是scope的，所以不被data binding。此处利用了闭包
					var selectedCategory = null;

					$scope.selectedPage = 1;
					$scope.pageSize = productListPageCount;

					$scope.selectCategory = function(newCategory){
						selectedCategory = newCategory;
						$scope.selectedPage = 1;
					}
					
					$scope.selectPage = function(newPage){
						$scope.selectedPage = newPage;
					}
					
					// 当传递的product的category是选择的category时，返回true 
					$scope.categoryFilterFn = function(product){
						return selectedCategory == null || product.category == selectedCategory;
					}

					$scope.getCategoryClass = function(category){
						return selectedCategory == category ? productListActiveClass: "";
					}

					$scope.getPageClass = function(page){
						return $scope.selectedPage == page ? productListActiveClass : "";
					}

					$scope.addProductToCart = function(product) {
						cart.addProduct(product.id, product.name, product.price);
					}
			 });