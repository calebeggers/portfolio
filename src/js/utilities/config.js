function config ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('root', {
			abstract: true,
			templateUrl: 'templates/layout.tmpl.html',
			controller: 'LayoutController as vm'
		})
		.state('root.home', {
			url: '/',
			templateUrl: 'templates/home.tmpl.html',
			controller: 'HomeController as vm'
		})
		.state('root.projects', {
			url: '/projects',
			templateUrl: 'templates/projects.tmpl.html',
			controller: 'ProjectsController as vm'
		})
		.state('root.contact', {
			url: '/contact',
			templateUrl: 'templates/contact.tmpl.html',
			controller: 'ContactController as vm'
		})

	$urlRouterProvider.otherwise('/');
}

config.$inject = ['$stateProvider', '$urlRouterProvider']

export { config }