( function (window) {

	function Constructor () {
		var module = {};
		
		module.log = console.log.bind(console),
		module.dir = console.dir.bind(console);

		module.valid = function (string) {
			if (string <= 0) {
				string = 'No information';
			}

			return string;
		};

		module.extend = function (Parent, Child) {
			var Surrogat = function(){};
			Surrogat.prototype = Parent.prototype;

			Child.prototype = new Surrogat();
			Child.prototype.constuctor = Child;
			Child.prototype.super = Parent.prototype;
		};

		module.getTypeString = function (obj) {
		  	return Object.prototype.toString.call(obj).slice(8, -1);
		};

		module.createId = function (length) {
			return Math.random().toString(36).substring(7);
		};

		return module;
	}

	window.SS = Constructor();

} )(typeof window !== "undefined" ? window : this);