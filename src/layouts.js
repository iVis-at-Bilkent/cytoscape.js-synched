var cy_headless = cytoscape({
	headless: true,
	styleEnabled: true,
});

var applyMergedLayout = function (cy, otherCy) {
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

		cy.fit(50); otherCy.fit(50);

		if (cy.zoom() > otherCy.zoom()){
			cy.zoom(otherCy.zoom()); cy.pan(otherCy.pan());
		}
		else{
			otherCy.zoom(cy.zoom()); otherCy.pan(cy.pan());
		}
	});
};

let applyUnnamedLayout = function(cy, otherCy) {
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

		cy.layout({name: "cytoscape.js-synched",  randomize: false, excludedNodes: pos}).run();
		otherCy.layout({name: "cytoscape.js-synched",  randomize: false, excludedNodes: pos}).run();

	});
};

export {applyMergedLayout, applyUnnamedLayout};
