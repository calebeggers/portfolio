import $ from "jquery"

function LayoutController ($location, $rootScope) {
	function stateCheck () {
		let curr = $location.$$path;
		if (curr === '/') {
			$('#1').addClass('active');
			$('#2,#3').removeClass('active');
		} else if (curr === '/projects') {
			$('#2').addClass('active');
			$('#1,#3').removeClass('active');
		} else if (curr === '/contact') {
			$('#3').addClass('active');
			$('#1,#2').removeClass('active');
		}
	};

	stateCheck();
	$rootScope.$on('$stateChangeStart', stateCheck);
};

LayoutController.$inject = ['$location', '$rootScope'];

export { LayoutController }