var cy_headless; 

var createHeadlessInstance = function(cytoscape) {
	cy_headless = cytoscape({
		headless: true,
		styleEnabled: true,
	});
};

var applyAggregatedLayout = function (cy, otherCy) {
	let eles = cy.elements();
	let otherEles = otherCy.elements();
	let all_eles = eles.union(otherEles);
	let options = {name: 'cytoscape.js-synched'};
	
	cy_headless.elements().remove();
	cy_headless.add(all_eles);
	cy_headless.layout(options).run();

	cy_headless.one("layoutstop", function(){
		let pos = {};
		cy_headless.nodes().forEach(function(ele, i) {
			pos[ele.id()] = {x:ele.position("x"), y: ele.position("y")};
		})

		cy.nodes().positions(function(ele, i) {
			return {x: pos[ele.id()].x, y: pos[ele.id()].y}
		});

		otherCy.nodes().positions(function(ele, i) {
			return {x: pos[ele.id()].x, y: pos[ele.id()].y}
		});

		cy.trigger("synchedLayoutStopped");
		otherCy.trigger("synchedLayoutStopped");

	});
};

let applyInterLayedLayout = function(cy, otherCy, excludedNodeMoveFactor) {
	let eles = cy.elements();
	let otherEles = otherCy.elements();
	let commonEles = eles.intersection(otherEles);

	let common_id = {};

	commonEles.forEach(function(ele, i) {
		common_id[ele.id()] = true;
	});

	cy_headless.elements().remove();
	cy_headless.add(commonEles);
	cy_headless.layout({name: "cytoscape.js-synched", excludedNodes: {}}).run();

	cy_headless.one("layoutstop", function(){
		let pos = {};
		cy_headless.nodes().forEach(function(ele, i) {
			pos[ele.id()] = {x: ele.position("x"), y: ele.position("y")};
		})

		cy.nodes().positions(function(ele, i){
			if (pos[ele.id()]) {
				return {x: pos[ele.id()].x, y: pos[ele.id()].y};
			} else {
				return ele.position();
			}
		});

		otherCy.nodes().positions(function(ele, i){
			if (pos[ele.id()]) {
				return {x: pos[ele.id()].x, y: pos[ele.id()].y};
			} else {
				return ele.position();
			}
		});

		cy.layout({name: "cytoscape.js-synched",  tile: false, randomize: false, excludedNodes: pos, excludedNodeMoveFactor: excludedNodeMoveFactor}).run();
		otherCy.layout({name: "cytoscape.js-synched", tile: false,  randomize: false, excludedNodes: pos, excludedNodeMoveFactor: excludedNodeMoveFactor}).run();

		let isLayoutStopped = false, isOtherLayoutStopped = false;

		cy.one("layoutstop", function(){
			isLayoutStopped = true;
			if (isOtherLayoutStopped) {
				cy.trigger("synchedLayoutStopped");
				otherCy.trigger("synchedLayoutStopped");
			}
		});

		otherCy.one("layoutstop", function(){
			isOtherLayoutStopped = true;
			if (isLayoutStopped) {
				cy.trigger("synchedLayoutStopped");
				otherCy.trigger("synchedLayoutStopped");
			}
		});

	});
};

let applyExtendedInterLayedLayout = function(cy, otherCy, excludedNodeMoveFactor) {
	let eles = cy.elements();
	let otherEles = otherCy.elements();
	let commonEles = eles.intersection(otherEles);

	let common_id = {};

	commonEles.forEach(function(ele, i) {
		common_id[ele.id()] = true;
	});


	let collection = cy.collection();
	collection = collection.add(commonEles);

	commonEles.forEach(function(ele) {
		collection = collection.add(cy.getElementById(ele.id()).neighborhood());
		collection = collection.add(otherCy.getElementById(ele.id()).neighborhood());
	});

	cy_headless.elements().remove();
	cy_headless.add(collection);
	cy_headless.layout({name: "cytoscape.js-synched", excludedNodes: {}}).run();

	cy_headless.one("layoutstop", function(){
		let pos = {};
		cy_headless.nodes().forEach(function(ele, i) {
			pos[ele.id()] = {x: ele.position("x"), y: ele.position("y")};
		})

		cy.nodes().positions(function(ele, i){
			if (pos[ele.id()]) {
				return {x: pos[ele.id()].x, y: pos[ele.id()].y};
			} else {
				return ele.position();
			}
		});

		otherCy.nodes().positions(function(ele, i){
			if (pos[ele.id()]) {
				return {x: pos[ele.id()].x, y: pos[ele.id()].y};
			} else {
				return ele.position();
			}
		});

		cy.layout({name: "cytoscape.js-synched",  tile: false, randomize: false, excludedNodes: pos, excludedNodeMoveFactor: excludedNodeMoveFactor}).run();
		otherCy.layout({name: "cytoscape.js-synched",  tile: false, randomize: false, excludedNodes: pos, excludedNodeMoveFactor: excludedNodeMoveFactor}).run();

		let isLayoutStopped = false, isOtherLayoutStopped = false;

		cy.one("layoutstop", function(){
			isLayoutStopped = true;
			if (isOtherLayoutStopped) {
				cy.trigger("synchedLayoutStopped");
				otherCy.trigger("synchedLayoutStopped");
			}
		});

		otherCy.one("layoutstop", function(){
			isOtherLayoutStopped = true;
			if (isLayoutStopped) {
				cy.trigger("synchedLayoutStopped");
				otherCy.trigger("synchedLayoutStopped");
			}
		});

	});
};

var applyIterativeLayout = function(cy, otherCy, maxIter) {
	var counter = 0;
	maxIter = 2 * maxIter;

	otherCy.on('layoutstop', function() {
		if (counter < maxIter) {
			cy.nodes().positions(node => {
				let otherNode = otherCy.getElementById(node.id());

				if (otherNode.length > 0) {
					return otherNode.position();
				} else {
					return node.position();
				}
			});

			cy.layout({name: "cytoscape.js-synched",  tile: false,  randomize: false, numIter: 1}).run();
			counter++;
		}
	});

	cy.on('layoutstop', function() {
		if (counter < maxIter) {
			otherCy.nodes().positions(node => {
				let otherNode = cy.getElementById(node.id());

				if (otherNode.length > 0) {
					return otherNode.position();
				} else {
					return node.position();
				}
			});

			otherCy.layout({name: "cytoscape.js-synched",  tile: false,  randomize: false, numIter: 1}).run();
			counter++;
		}
	});

	cy.layout({name: 'random'}).run();
};

export {createHeadlessInstance, applyAggregatedLayout, applyInterLayedLayout, applyExtendedInterLayedLayout, applyIterativeLayout};
