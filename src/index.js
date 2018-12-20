import './cose-bilkent-modification.js';
import {createHeadlessInstance, applyAggregatedLayout, applyInterLayedLayout, applyExtendedInterLayedLayout, applyIterativeLayout} from './layouts.js';
const getLayout = require('../cose-bilkent/src/Layout');
var FDLayoutConstants = require('../cose-bilkent/src/Layout/FDLayoutConstants');

// registers the extension on a cytoscape lib ref
let register = function( cytoscape ){
	if( !cytoscape ){ return; } // can't register if cytoscape unspecified

	createHeadlessInstance(cytoscape);

	let Layout = getLayout(cytoscape);
	let orgPrototype = Layout.prototype;

	let defaults = new Layout({}).options;

	function extend(defaults, options) {
		var obj = {};

		for (var i in defaults) {
			obj[i] = defaults[i];
		}

		for (var i in options) {
			obj[i] = options[i];
		}

		return obj;
	};

	function _CoSELayout(_options) {
		this.options = extend(defaults, _options);
		new Layout(_options);
		FDLayoutConstants.excludedNodeMoveFactor = _options.excludedNodeMoveFactor || 0;

		if (_options.excludedNodes) {
			FDLayoutConstants.EXCLUDED_NODES = _options.excludedNodes;
		} else {
			FDLayoutConstants.EXCLUDED_NODES = {};
		}

	};

	_CoSELayout.prototype = Layout.prototype;

	cytoscape( 'layout', 'cytoscape.js-synched', _CoSELayout); // register with cytoscape.js
	cytoscape('core', 'synchedLayout', function (opts) {
		let api = {};
		api.applyAggregatedLayout = applyAggregatedLayout;
		api.applyInterLayedLayout = applyInterLayedLayout;
		api.applyExtendedInterLayedLayout = applyExtendedInterLayedLayout;
		api.applyIterativeLayout = applyIterativeLayout;

		return api;
	});
};

if( typeof cytoscape !== 'undefined' ){ // expose to global cytoscape (i.e. window.cytoscape)
	register( cytoscape );
}

module.exports = register;
