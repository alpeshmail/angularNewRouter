angular.module('app', ['ngNewRouter', 'ngAnimate', 'ngMaterial', 'app.home', 'app.detail'])
  .controller('AppController', ['$router', AppController]);

AppController.$routeConfig = [
  {	path: '/', component: 'home' },
	  	{	path: '/home', component: 'home' },
  		{ 	path: '/detail/:id', component: 'detail' },
  			{ 	path: '/test/:id', component: 'test' }
];
function AppController($router) {
}
