angular.module("sportsStore")
			 .controller("sportsStoreCtrl", function($scope) {

			 	$scope.data = {
					products: [
						{ name: "Product #1", description: "A product",
							category: "category #1", price: 100},
						{ name: "Product #2", description: "A product",
							category: "category #1", price: 110},
						{ name: "Product #3", description: "A product",
							category: "category #2", price: 120},
						{ name: "Product #4", description: "A product",
							category: "category #3", price: 130}]
			 	};
			 });