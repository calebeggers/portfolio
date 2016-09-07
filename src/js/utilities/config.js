function config ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('root', {
			abstract: true,
			templateUrl: 'templates/layout.tmpl.html'
		})
		.state('home', {
			templateUrl: 'templates/home.tmpl.html',
			url: '/'
		})
		.state('projects', {
			templateUrl: 'templates/projects.tmpl.html',
			url: '/projects'
		})

	$urlRouterProvider.otherwise('/#/')
}

export { config }