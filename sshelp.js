window.addEventListener('DOMContentLoaded', init, false);

function init () {
	( function (window) {

		function constructor () {
			var module = {};
			
			module.log = console.log.bind(console),
			module.dir = console.dir.bind(console);

			module.template = function (tpl, data) {
				for (let key in data) {
					if (typeof data[key] === 'object') {
						var info = [];

						for (let sKey in data[key]) {
							info.push(data[key][sKey]);
						}

						tpl = tpl.replace(':' + key, info);

						continue;
					}
					data[key] = this.valid(data[key]);
					tpl = tpl.replace(':' + key, data[key]);
				}

				return tpl;
			};

			module.valid = function (string) {
				if (string <= 0) {
					string = 'No information';
				}

				return string;
			}

			module.extend = function (Parent, Child) {
				var Surrogat = function(){};
				Surrogat.prototype = Parent.prototype;

				Child.prototype = new Surrogat();
				Child.prototype.constuctor = Child;
				Child.prototype.super = Parent.prototype;
			}

			return module;
		}

		window.SS = constructor();

	})(window);
}
