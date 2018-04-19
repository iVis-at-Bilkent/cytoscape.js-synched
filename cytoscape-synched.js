(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cytoscapeSynched"] = factory();
	else
		root["cytoscapeSynched"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./cose-bilkent/src/Layout/CoSEConstants.js":
/*!**************************************************!*\
  !*** ./cose-bilkent/src/Layout/CoSEConstants.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var FDLayoutConstants = __webpack_require__(/*! ./FDLayoutConstants */ "./cose-bilkent/src/Layout/FDLayoutConstants.js");

function CoSEConstants() {}

//CoSEConstants inherits static props in FDLayoutConstants
for (var prop in FDLayoutConstants) {
  CoSEConstants[prop] = FDLayoutConstants[prop];
}

CoSEConstants.DEFAULT_USE_MULTI_LEVEL_SCALING = false;
CoSEConstants.DEFAULT_RADIAL_SEPARATION = FDLayoutConstants.DEFAULT_EDGE_LENGTH;
CoSEConstants.DEFAULT_COMPONENT_SEPERATION = 60;
CoSEConstants.TILE = true;
CoSEConstants.TILING_PADDING_VERTICAL = 10;
CoSEConstants.TILING_PADDING_HORIZONTAL = 10;

module.exports = CoSEConstants;

/***/ }),

/***/ "./cose-bilkent/src/Layout/CoSEEdge.js":
/*!*********************************************!*\
  !*** ./cose-bilkent/src/Layout/CoSEEdge.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var FDLayoutEdge = __webpack_require__(/*! ./FDLayoutEdge */ "./cose-bilkent/src/Layout/FDLayoutEdge.js");

function CoSEEdge(source, target, vEdge) {
  FDLayoutEdge.call(this, source, target, vEdge);
}

CoSEEdge.prototype = Object.create(FDLayoutEdge.prototype);
for (var prop in FDLayoutEdge) {
  CoSEEdge[prop] = FDLayoutEdge[prop];
}

module.exports = CoSEEdge;

/***/ }),

/***/ "./cose-bilkent/src/Layout/CoSEGraph.js":
/*!**********************************************!*\
  !*** ./cose-bilkent/src/Layout/CoSEGraph.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LGraph = __webpack_require__(/*! ./LGraph */ "./cose-bilkent/src/Layout/LGraph.js");

function CoSEGraph(parent, graphMgr, vGraph) {
  LGraph.call(this, parent, graphMgr, vGraph);
}

CoSEGraph.prototype = Object.create(LGraph.prototype);
for (var prop in LGraph) {
  CoSEGraph[prop] = LGraph[prop];
}

module.exports = CoSEGraph;

/***/ }),

/***/ "./cose-bilkent/src/Layout/CoSEGraphManager.js":
/*!*****************************************************!*\
  !*** ./cose-bilkent/src/Layout/CoSEGraphManager.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LGraphManager = __webpack_require__(/*! ./LGraphManager */ "./cose-bilkent/src/Layout/LGraphManager.js");

function CoSEGraphManager(layout) {
  LGraphManager.call(this, layout);
}

CoSEGraphManager.prototype = Object.create(LGraphManager.prototype);
for (var prop in LGraphManager) {
  CoSEGraphManager[prop] = LGraphManager[prop];
}

module.exports = CoSEGraphManager;

/***/ }),

/***/ "./cose-bilkent/src/Layout/CoSELayout.js":
/*!***********************************************!*\
  !*** ./cose-bilkent/src/Layout/CoSELayout.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var FDLayout = __webpack_require__(/*! ./FDLayout */ "./cose-bilkent/src/Layout/FDLayout.js");
var CoSEGraphManager = __webpack_require__(/*! ./CoSEGraphManager */ "./cose-bilkent/src/Layout/CoSEGraphManager.js");
var CoSEGraph = __webpack_require__(/*! ./CoSEGraph */ "./cose-bilkent/src/Layout/CoSEGraph.js");
var CoSENode = __webpack_require__(/*! ./CoSENode */ "./cose-bilkent/src/Layout/CoSENode.js");
var CoSEEdge = __webpack_require__(/*! ./CoSEEdge */ "./cose-bilkent/src/Layout/CoSEEdge.js");
var CoSEConstants = __webpack_require__(/*! ./CoSEConstants */ "./cose-bilkent/src/Layout/CoSEConstants.js");
var FDLayoutConstants = __webpack_require__(/*! ./FDLayoutConstants */ "./cose-bilkent/src/Layout/FDLayoutConstants.js");
var LayoutConstants = __webpack_require__(/*! ./LayoutConstants */ "./cose-bilkent/src/Layout/LayoutConstants.js");
var Point = __webpack_require__(/*! ./Point */ "./cose-bilkent/src/Layout/Point.js");
var PointD = __webpack_require__(/*! ./PointD */ "./cose-bilkent/src/Layout/PointD.js");
var Layout = __webpack_require__(/*! ./Layout */ "./cose-bilkent/src/Layout/Layout.js");
var Integer = __webpack_require__(/*! ./Integer */ "./cose-bilkent/src/Layout/Integer.js");
var IGeometry = __webpack_require__(/*! ./IGeometry */ "./cose-bilkent/src/Layout/IGeometry.js");
var LGraph = __webpack_require__(/*! ./LGraph */ "./cose-bilkent/src/Layout/LGraph.js");
var Transform = __webpack_require__(/*! ./Transform */ "./cose-bilkent/src/Layout/Transform.js");

function CoSELayout() {
  FDLayout.call(this);

  this.toBeTiled = {}; // Memorize if a node is to be tiled or is tiled
}

CoSELayout.prototype = Object.create(FDLayout.prototype);

for (var prop in FDLayout) {
  CoSELayout[prop] = FDLayout[prop];
}

CoSELayout.prototype.newGraphManager = function () {
  var gm = new CoSEGraphManager(this);
  this.graphManager = gm;
  return gm;
};

CoSELayout.prototype.newGraph = function (vGraph) {
  return new CoSEGraph(null, this.graphManager, vGraph);
};

CoSELayout.prototype.newNode = function (vNode) {
  return new CoSENode(this.graphManager, vNode);
};

CoSELayout.prototype.newEdge = function (vEdge) {
  return new CoSEEdge(null, null, vEdge);
};

CoSELayout.prototype.initParameters = function () {
  FDLayout.prototype.initParameters.call(this, arguments);
  if (!this.isSubLayout) {
    if (CoSEConstants.DEFAULT_EDGE_LENGTH < 10) {
      this.idealEdgeLength = 10;
    } else {
      this.idealEdgeLength = CoSEConstants.DEFAULT_EDGE_LENGTH;
    }

    this.useSmartIdealEdgeLengthCalculation = CoSEConstants.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION;
    this.springConstant = FDLayoutConstants.DEFAULT_SPRING_STRENGTH;
    this.repulsionConstant = FDLayoutConstants.DEFAULT_REPULSION_STRENGTH;
    this.gravityConstant = FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH;
    this.compoundGravityConstant = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH;
    this.gravityRangeFactor = FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR;
    this.compoundGravityRangeFactor = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR;
  }
};

CoSELayout.prototype.layout = function () {
  var createBendsAsNeeded = LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED;
  if (createBendsAsNeeded) {
    this.createBendpoints();
    this.graphManager.resetAllEdges();
  }

  this.level = 0;
  return this.classicLayout();
};

CoSELayout.prototype.classicLayout = function () {
  this.nodesWithGravity = this.calculateNodesToApplyGravitationTo();
  this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity);
  this.calcNoOfChildrenForAllNodes();
  this.graphManager.calcLowestCommonAncestors();
  this.graphManager.calcInclusionTreeDepths();
  this.graphManager.getRoot().calcEstimatedSize();
  this.calcIdealEdgeLengths();

  if (!this.incremental) {
    var forest = this.getFlatForest();

    // The graph associated with this layout is flat and a forest
    if (forest.length > 0) {
      this.positionNodesRadially(forest);
    }
    // The graph associated with this layout is not flat or a forest
    else {
        // Reduce the trees when incremental mode is not enabled and graph is not a forest 
        this.reduceTrees();
        // Update nodes that gravity will be applied
        this.graphManager.resetAllNodesToApplyGravitation();
        var allNodes = new Set(this.getAllNodes());
        var intersection = this.nodesWithGravity.filter(function (x) {
          return allNodes.has(x);
        });
        this.graphManager.setAllNodesToApplyGravitation(intersection);

        this.positionNodesRandomly();
      }
  }

  this.initSpringEmbedder();
  this.runSpringEmbedder();

  return true;
};

CoSELayout.prototype.tick = function () {
  this.totalIterations++;

  if (this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished) {
    if (this.prunedNodesAll.length > 0) {
      this.isTreeGrowing = true;
    } else {
      return true;
    }
  }

  if (this.totalIterations % FDLayoutConstants.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
    if (this.isConverged()) {
      if (this.prunedNodesAll.length > 0) {
        this.isTreeGrowing = true;
      } else {
        return true;
      }
    }

    this.coolingFactor = this.initialCoolingFactor * ((this.maxIterations - this.totalIterations) / this.maxIterations);
    this.animationPeriod = Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
  }
  // Operations while tree is growing again 
  if (this.isTreeGrowing) {
    if (this.growTreeIterations % 10 == 0) {
      if (this.prunedNodesAll.length > 0) {
        this.graphManager.updateBounds();
        this.updateGrid();
        this.growTree(this.prunedNodesAll);
        // Update nodes that gravity will be applied
        this.graphManager.resetAllNodesToApplyGravitation();
        var allNodes = new Set(this.getAllNodes());
        var intersection = this.nodesWithGravity.filter(function (x) {
          return allNodes.has(x);
        });
        this.graphManager.setAllNodesToApplyGravitation(intersection);

        this.graphManager.updateBounds();
        this.updateGrid();
        this.coolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL;
      } else {
        this.isTreeGrowing = false;
        this.isGrowthFinished = true;
      }
    }
    this.growTreeIterations++;
  }
  // Operations after growth is finished
  if (this.isGrowthFinished) {
    if (this.isConverged()) {
      return true;
    }
    if (this.afterGrowthIterations % 10 == 0) {
      this.graphManager.updateBounds();
      this.updateGrid();
    }
    this.coolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100);
    this.afterGrowthIterations++;
  }

  this.totalDisplacement = 0;
  this.graphManager.updateBounds();
  this.calcSpringForces();
  this.calcRepulsionForces();
  this.calcGravitationalForces();
  this.moveNodes();
  this.animate();

  return false; // Layout is not ended yet return false
};

CoSELayout.prototype.getPositionsData = function () {
  var allNodes = this.graphManager.getAllNodes();
  var pData = {};
  for (var i = 0; i < allNodes.length; i++) {
    var rect = allNodes[i].rect;
    var id = allNodes[i].id;
    pData[id] = {
      id: id,
      x: rect.getCenterX(),
      y: rect.getCenterY(),
      w: rect.width,
      h: rect.height
    };
  }

  return pData;
};

CoSELayout.prototype.runSpringEmbedder = function () {
  this.initialAnimationPeriod = 25;
  this.animationPeriod = this.initialAnimationPeriod;
  var layoutEnded = false;

  // If aminate option is 'during' signal that layout is supposed to start iterating
  if (FDLayoutConstants.ANIMATE === 'during') {
    this.emit('layoutstarted');
  } else {
    // If aminate option is 'during' tick() function will be called on index.js
    while (!layoutEnded) {
      layoutEnded = this.tick();
    }

    this.graphManager.updateBounds();
  }
};

CoSELayout.prototype.calculateNodesToApplyGravitationTo = function () {
  var nodeList = [];
  var graph;

  var graphs = this.graphManager.getGraphs();
  var size = graphs.length;
  var i;
  for (i = 0; i < size; i++) {
    graph = graphs[i];

    graph.updateConnected();

    if (!graph.isConnected) {
      nodeList = nodeList.concat(graph.getNodes());
    }
  }

  return nodeList;
};

CoSELayout.prototype.calcNoOfChildrenForAllNodes = function () {
  var node;
  var allNodes = this.graphManager.getAllNodes();

  for (var i = 0; i < allNodes.length; i++) {
    node = allNodes[i];
    node.noOfChildren = node.getNoOfChildren();
  }
};

CoSELayout.prototype.createBendpoints = function () {
  var edges = [];
  edges = edges.concat(this.graphManager.getAllEdges());
  var visited = new HashSet();
  var i;
  for (i = 0; i < edges.length; i++) {
    var edge = edges[i];

    if (!visited.contains(edge)) {
      var source = edge.getSource();
      var target = edge.getTarget();

      if (source == target) {
        edge.getBendpoints().push(new PointD());
        edge.getBendpoints().push(new PointD());
        this.createDummyNodesForBendpoints(edge);
        visited.add(edge);
      } else {
        var edgeList = [];

        edgeList = edgeList.concat(source.getEdgeListToNode(target));
        edgeList = edgeList.concat(target.getEdgeListToNode(source));

        if (!visited.contains(edgeList[0])) {
          if (edgeList.length > 1) {
            var k;
            for (k = 0; k < edgeList.length; k++) {
              var multiEdge = edgeList[k];
              multiEdge.getBendpoints().push(new PointD());
              this.createDummyNodesForBendpoints(multiEdge);
            }
          }
          visited.addAll(list);
        }
      }
    }

    if (visited.size() == edges.length) {
      break;
    }
  }
};

CoSELayout.prototype.positionNodesRadially = function (forest) {
  // We tile the trees to a grid row by row; first tree starts at (0,0)
  var currentStartingPoint = new Point(0, 0);
  var numberOfColumns = Math.ceil(Math.sqrt(forest.length));
  var height = 0;
  var currentY = 0;
  var currentX = 0;
  var point = new PointD(0, 0);

  for (var i = 0; i < forest.length; i++) {
    if (i % numberOfColumns == 0) {
      // Start of a new row, make the x coordinate 0, increment the
      // y coordinate with the max height of the previous row
      currentX = 0;
      currentY = height;

      if (i != 0) {
        currentY += CoSEConstants.DEFAULT_COMPONENT_SEPERATION;
      }

      height = 0;
    }

    var tree = forest[i];

    // Find the center of the tree
    var centerNode = Layout.findCenterOfTree(tree);

    // Set the staring point of the next tree
    currentStartingPoint.x = currentX;
    currentStartingPoint.y = currentY;

    // Do a radial layout starting with the center
    point = CoSELayout.radialLayout(tree, centerNode, currentStartingPoint);

    if (point.y > height) {
      height = Math.floor(point.y);
    }

    currentX = Math.floor(point.x + CoSEConstants.DEFAULT_COMPONENT_SEPERATION);
  }

  this.transform(new PointD(LayoutConstants.WORLD_CENTER_X - point.x / 2, LayoutConstants.WORLD_CENTER_Y - point.y / 2));
};

CoSELayout.radialLayout = function (tree, centerNode, startingPoint) {
  var radialSep = Math.max(this.maxDiagonalInTree(tree), CoSEConstants.DEFAULT_RADIAL_SEPARATION);
  CoSELayout.branchRadialLayout(centerNode, null, 0, 359, 0, radialSep);
  var bounds = LGraph.calculateBounds(tree);

  var transform = new Transform();
  transform.setDeviceOrgX(bounds.getMinX());
  transform.setDeviceOrgY(bounds.getMinY());
  transform.setWorldOrgX(startingPoint.x);
  transform.setWorldOrgY(startingPoint.y);

  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];
    node.transform(transform);
  }

  var bottomRight = new PointD(bounds.getMaxX(), bounds.getMaxY());

  return transform.inverseTransformPoint(bottomRight);
};

CoSELayout.branchRadialLayout = function (node, parentOfNode, startAngle, endAngle, distance, radialSeparation) {
  // First, position this node by finding its angle.
  var halfInterval = (endAngle - startAngle + 1) / 2;

  if (halfInterval < 0) {
    halfInterval += 180;
  }

  var nodeAngle = (halfInterval + startAngle) % 360;
  var teta = nodeAngle * IGeometry.TWO_PI / 360;

  // Make polar to java cordinate conversion.
  var cos_teta = Math.cos(teta);
  var x_ = distance * Math.cos(teta);
  var y_ = distance * Math.sin(teta);

  node.setCenter(x_, y_);

  // Traverse all neighbors of this node and recursively call this
  // function.
  var neighborEdges = [];
  neighborEdges = neighborEdges.concat(node.getEdges());
  var childCount = neighborEdges.length;

  if (parentOfNode != null) {
    childCount--;
  }

  var branchCount = 0;

  var incEdgesCount = neighborEdges.length;
  var startIndex;

  var edges = node.getEdgesBetween(parentOfNode);

  // If there are multiple edges, prune them until there remains only one
  // edge.
  while (edges.length > 1) {
    //neighborEdges.remove(edges.remove(0));
    var temp = edges[0];
    edges.splice(0, 1);
    var index = neighborEdges.indexOf(temp);
    if (index >= 0) {
      neighborEdges.splice(index, 1);
    }
    incEdgesCount--;
    childCount--;
  }

  if (parentOfNode != null) {
    //assert edges.length == 1;
    startIndex = (neighborEdges.indexOf(edges[0]) + 1) % incEdgesCount;
  } else {
    startIndex = 0;
  }

  var stepAngle = Math.abs(endAngle - startAngle) / childCount;

  for (var i = startIndex; branchCount != childCount; i = ++i % incEdgesCount) {
    var currentNeighbor = neighborEdges[i].getOtherEnd(node);

    // Don't back traverse to root node in current tree.
    if (currentNeighbor == parentOfNode) {
      continue;
    }

    var childStartAngle = (startAngle + branchCount * stepAngle) % 360;
    var childEndAngle = (childStartAngle + stepAngle) % 360;

    CoSELayout.branchRadialLayout(currentNeighbor, node, childStartAngle, childEndAngle, distance + radialSeparation, radialSeparation);

    branchCount++;
  }
};

CoSELayout.maxDiagonalInTree = function (tree) {
  var maxDiagonal = Integer.MIN_VALUE;

  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];
    var diagonal = node.getDiagonal();

    if (diagonal > maxDiagonal) {
      maxDiagonal = diagonal;
    }
  }

  return maxDiagonal;
};

CoSELayout.prototype.calcRepulsionRange = function () {
  // formula is 2 x (level + 1) x idealEdgeLength
  return 2 * (this.level + 1) * this.idealEdgeLength;
};

// Tiling methods

// Group zero degree members whose parents are not to be tiled, create dummy parents where needed and fill memberGroups by their dummp parent id's
CoSELayout.prototype.groupZeroDegreeMembers = function () {
  var self = this;
  // array of [parent_id x oneDegreeNode_id]
  var tempMemberGroups = {}; // A temporary map of parent node and its zero degree members
  this.memberGroups = {}; // A map of dummy parent node and its zero degree members whose parents are not to be tiled
  this.idToDummyNode = {}; // A map of id to dummy node 

  var zeroDegree = []; // List of zero degree nodes whose parents are not to be tiled
  var allNodes = this.graphManager.getAllNodes();

  // Fill zero degree list
  for (var i = 0; i < allNodes.length; i++) {
    var node = allNodes[i];
    var parent = node.getParent();
    // If a node has zero degree and its parent is not to be tiled if exists add that node to zeroDegres list
    if (this.getNodeDegreeWithChildren(node) === 0 && (parent.id == undefined || !this.getToBeTiled(parent))) {
      zeroDegree.push(node);
    }
  }

  // Create a map of parent node and its zero degree members
  for (var i = 0; i < zeroDegree.length; i++) {
    var node = zeroDegree[i]; // Zero degree node itself
    var p_id = node.getParent().id; // Parent id

    if (typeof tempMemberGroups[p_id] === "undefined") tempMemberGroups[p_id] = [];

    tempMemberGroups[p_id] = tempMemberGroups[p_id].concat(node); // Push node to the list belongs to its parent in tempMemberGroups
  }

  // If there are at least two nodes at a level, create a dummy compound for them
  Object.keys(tempMemberGroups).forEach(function (p_id) {
    if (tempMemberGroups[p_id].length > 1) {
      var dummyCompoundId = "DummyCompound_" + p_id; // The id of dummy compound which will be created soon
      self.memberGroups[dummyCompoundId] = tempMemberGroups[p_id]; // Add dummy compound to memberGroups

      var parent = tempMemberGroups[p_id][0].getParent(); // The parent of zero degree nodes will be the parent of new dummy compound

      // Create a dummy compound with calculated id
      var dummyCompound = new CoSENode(self.graphManager);
      dummyCompound.id = dummyCompoundId;
      dummyCompound.paddingLeft = parent.paddingLeft || 0;
      dummyCompound.paddingRight = parent.paddingRight || 0;
      dummyCompound.paddingBottom = parent.paddingBottom || 0;
      dummyCompound.paddingTop = parent.paddingTop || 0;

      self.idToDummyNode[dummyCompoundId] = dummyCompound;

      var dummyParentGraph = self.getGraphManager().add(self.newGraph(), dummyCompound);
      var parentGraph = parent.getChild();

      // Add dummy compound to parent the graph
      parentGraph.add(dummyCompound);

      // For each zero degree node in this level remove it from its parent graph and add it to the graph of dummy parent
      for (var i = 0; i < tempMemberGroups[p_id].length; i++) {
        var node = tempMemberGroups[p_id][i];

        parentGraph.remove(node);
        dummyParentGraph.add(node);
      }
    }
  });
};

CoSELayout.prototype.clearCompounds = function () {
  var childGraphMap = {};
  var idToNode = {};

  // Get compound ordering by finding the inner one first
  this.performDFSOnCompounds();

  for (var i = 0; i < this.compoundOrder.length; i++) {

    idToNode[this.compoundOrder[i].id] = this.compoundOrder[i];
    childGraphMap[this.compoundOrder[i].id] = [].concat(this.compoundOrder[i].getChild().getNodes());

    // Remove children of compounds
    this.graphManager.remove(this.compoundOrder[i].getChild());
    this.compoundOrder[i].child = null;
  }

  this.graphManager.resetAllNodes();

  // Tile the removed children
  this.tileCompoundMembers(childGraphMap, idToNode);
};

CoSELayout.prototype.clearZeroDegreeMembers = function () {
  var self = this;
  var tiledZeroDegreePack = this.tiledZeroDegreePack = [];

  Object.keys(this.memberGroups).forEach(function (id) {
    var compoundNode = self.idToDummyNode[id]; // Get the dummy compound

    tiledZeroDegreePack[id] = self.tileNodes(self.memberGroups[id], compoundNode.paddingLeft + compoundNode.paddingRight);

    // Set the width and height of the dummy compound as calculated
    compoundNode.rect.width = tiledZeroDegreePack[id].width;
    compoundNode.rect.height = tiledZeroDegreePack[id].height;
  });
};

CoSELayout.prototype.repopulateCompounds = function () {
  for (var i = this.compoundOrder.length - 1; i >= 0; i--) {
    var lCompoundNode = this.compoundOrder[i];
    var id = lCompoundNode.id;
    var horizontalMargin = lCompoundNode.paddingLeft;
    var verticalMargin = lCompoundNode.paddingTop;

    this.adjustLocations(this.tiledMemberPack[id], lCompoundNode.rect.x, lCompoundNode.rect.y, horizontalMargin, verticalMargin);
  }
};

CoSELayout.prototype.repopulateZeroDegreeMembers = function () {
  var self = this;
  var tiledPack = this.tiledZeroDegreePack;

  Object.keys(tiledPack).forEach(function (id) {
    var compoundNode = self.idToDummyNode[id]; // Get the dummy compound by its id
    var horizontalMargin = compoundNode.paddingLeft;
    var verticalMargin = compoundNode.paddingTop;

    // Adjust the positions of nodes wrt its compound
    self.adjustLocations(tiledPack[id], compoundNode.rect.x, compoundNode.rect.y, horizontalMargin, verticalMargin);
  });
};

CoSELayout.prototype.getToBeTiled = function (node) {
  var id = node.id;
  //firstly check the previous results
  if (this.toBeTiled[id] != null) {
    return this.toBeTiled[id];
  }

  //only compound nodes are to be tiled
  var childGraph = node.getChild();
  if (childGraph == null) {
    this.toBeTiled[id] = false;
    return false;
  }

  var children = childGraph.getNodes(); // Get the children nodes

  //a compound node is not to be tiled if all of its compound children are not to be tiled
  for (var i = 0; i < children.length; i++) {
    var theChild = children[i];

    if (this.getNodeDegree(theChild) > 0) {
      this.toBeTiled[id] = false;
      return false;
    }

    //pass the children not having the compound structure
    if (theChild.getChild() == null) {
      this.toBeTiled[theChild.id] = false;
      continue;
    }

    if (!this.getToBeTiled(theChild)) {
      this.toBeTiled[id] = false;
      return false;
    }
  }
  this.toBeTiled[id] = true;
  return true;
};

// Get degree of a node depending of its edges and independent of its children
CoSELayout.prototype.getNodeDegree = function (node) {
  var id = node.id;
  var edges = node.getEdges();
  var degree = 0;

  // For the edges connected
  for (var i = 0; i < edges.length; i++) {
    var edge = edges[i];
    if (edge.getSource().id !== edge.getTarget().id) {
      degree = degree + 1;
    }
  }
  return degree;
};

// Get degree of a node with its children
CoSELayout.prototype.getNodeDegreeWithChildren = function (node) {
  var degree = this.getNodeDegree(node);
  if (node.getChild() == null) {
    return degree;
  }
  var children = node.getChild().getNodes();
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    degree += this.getNodeDegreeWithChildren(child);
  }
  return degree;
};

CoSELayout.prototype.performDFSOnCompounds = function () {
  this.compoundOrder = [];
  this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
};

CoSELayout.prototype.fillCompexOrderByDFS = function (children) {
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    if (child.getChild() != null) {
      this.fillCompexOrderByDFS(child.getChild().getNodes());
    }
    if (this.getToBeTiled(child)) {
      this.compoundOrder.push(child);
    }
  }
};

/**
* This method places each zero degree member wrt given (x,y) coordinates (top left).
*/
CoSELayout.prototype.adjustLocations = function (organization, x, y, compoundHorizontalMargin, compoundVerticalMargin) {
  x += compoundHorizontalMargin;
  y += compoundVerticalMargin;

  var left = x;

  for (var i = 0; i < organization.rows.length; i++) {
    var row = organization.rows[i];
    x = left;
    var maxHeight = 0;

    for (var j = 0; j < row.length; j++) {
      var lnode = row[j];

      lnode.rect.x = x; // + lnode.rect.width / 2;
      lnode.rect.y = y; // + lnode.rect.height / 2;

      x += lnode.rect.width + organization.horizontalPadding;

      if (lnode.rect.height > maxHeight) maxHeight = lnode.rect.height;
    }

    y += maxHeight + organization.verticalPadding;
  }
};

CoSELayout.prototype.tileCompoundMembers = function (childGraphMap, idToNode) {
  var self = this;
  this.tiledMemberPack = [];

  Object.keys(childGraphMap).forEach(function (id) {
    // Get the compound node
    var compoundNode = idToNode[id];

    self.tiledMemberPack[id] = self.tileNodes(childGraphMap[id], compoundNode.paddingLeft + compoundNode.paddingRight);

    compoundNode.rect.width = self.tiledMemberPack[id].width + 20;
    compoundNode.rect.height = self.tiledMemberPack[id].height + 20;
  });
};

CoSELayout.prototype.tileNodes = function (nodes, minWidth) {
  var verticalPadding = CoSEConstants.TILING_PADDING_VERTICAL;
  var horizontalPadding = CoSEConstants.TILING_PADDING_HORIZONTAL;
  var organization = {
    rows: [],
    rowWidth: [],
    rowHeight: [],
    width: 20,
    height: 20,
    verticalPadding: verticalPadding,
    horizontalPadding: horizontalPadding
  };

  // Sort the nodes in ascending order of their areas
  nodes.sort(function (n1, n2) {
    if (n1.rect.width * n1.rect.height > n2.rect.width * n2.rect.height) return -1;
    if (n1.rect.width * n1.rect.height < n2.rect.width * n2.rect.height) return 1;
    return 0;
  });

  // Create the organization -> tile members
  for (var i = 0; i < nodes.length; i++) {
    var lNode = nodes[i];

    if (organization.rows.length == 0) {
      this.insertNodeToRow(organization, lNode, 0, minWidth);
    } else if (this.canAddHorizontal(organization, lNode.rect.width, lNode.rect.height)) {
      this.insertNodeToRow(organization, lNode, this.getShortestRowIndex(organization), minWidth);
    } else {
      this.insertNodeToRow(organization, lNode, organization.rows.length, minWidth);
    }

    this.shiftToLastRow(organization);
  }

  return organization;
};

CoSELayout.prototype.insertNodeToRow = function (organization, node, rowIndex, minWidth) {
  var minCompoundSize = minWidth;

  // Add new row if needed
  if (rowIndex == organization.rows.length) {
    var secondDimension = [];

    organization.rows.push(secondDimension);
    organization.rowWidth.push(minCompoundSize);
    organization.rowHeight.push(0);
  }

  // Update row width
  var w = organization.rowWidth[rowIndex] + node.rect.width;

  if (organization.rows[rowIndex].length > 0) {
    w += organization.horizontalPadding;
  }

  organization.rowWidth[rowIndex] = w;
  // Update compound width
  if (organization.width < w) {
    organization.width = w;
  }

  // Update height
  var h = node.rect.height;
  if (rowIndex > 0) h += organization.verticalPadding;

  var extraHeight = 0;
  if (h > organization.rowHeight[rowIndex]) {
    extraHeight = organization.rowHeight[rowIndex];
    organization.rowHeight[rowIndex] = h;
    extraHeight = organization.rowHeight[rowIndex] - extraHeight;
  }

  organization.height += extraHeight;

  // Insert node
  organization.rows[rowIndex].push(node);
};

//Scans the rows of an organization and returns the one with the min width
CoSELayout.prototype.getShortestRowIndex = function (organization) {
  var r = -1;
  var min = Number.MAX_VALUE;

  for (var i = 0; i < organization.rows.length; i++) {
    if (organization.rowWidth[i] < min) {
      r = i;
      min = organization.rowWidth[i];
    }
  }
  return r;
};

//Scans the rows of an organization and returns the one with the max width
CoSELayout.prototype.getLongestRowIndex = function (organization) {
  var r = -1;
  var max = Number.MIN_VALUE;

  for (var i = 0; i < organization.rows.length; i++) {

    if (organization.rowWidth[i] > max) {
      r = i;
      max = organization.rowWidth[i];
    }
  }

  return r;
};

/**
* This method checks whether adding extra width to the organization violates
* the aspect ratio(1) or not.
*/
CoSELayout.prototype.canAddHorizontal = function (organization, extraWidth, extraHeight) {

  var sri = this.getShortestRowIndex(organization);

  if (sri < 0) {
    return true;
  }

  var min = organization.rowWidth[sri];

  if (min + organization.horizontalPadding + extraWidth <= organization.width) return true;

  var hDiff = 0;

  // Adding to an existing row
  if (organization.rowHeight[sri] < extraHeight) {
    if (sri > 0) hDiff = extraHeight + organization.verticalPadding - organization.rowHeight[sri];
  }

  var add_to_row_ratio;
  if (organization.width - min >= extraWidth + organization.horizontalPadding) {
    add_to_row_ratio = (organization.height + hDiff) / (min + extraWidth + organization.horizontalPadding);
  } else {
    add_to_row_ratio = (organization.height + hDiff) / organization.width;
  }

  // Adding a new row for this node
  hDiff = extraHeight + organization.verticalPadding;
  var add_new_row_ratio;
  if (organization.width < extraWidth) {
    add_new_row_ratio = (organization.height + hDiff) / extraWidth;
  } else {
    add_new_row_ratio = (organization.height + hDiff) / organization.width;
  }

  if (add_new_row_ratio < 1) add_new_row_ratio = 1 / add_new_row_ratio;

  if (add_to_row_ratio < 1) add_to_row_ratio = 1 / add_to_row_ratio;

  return add_to_row_ratio < add_new_row_ratio;
};

//If moving the last node from the longest row and adding it to the last
//row makes the bounding box smaller, do it.
CoSELayout.prototype.shiftToLastRow = function (organization) {
  var longest = this.getLongestRowIndex(organization);
  var last = organization.rowWidth.length - 1;
  var row = organization.rows[longest];
  var node = row[row.length - 1];

  var diff = node.width + organization.horizontalPadding;

  // Check if there is enough space on the last row
  if (organization.width - organization.rowWidth[last] > diff && longest != last) {
    // Remove the last element of the longest row
    row.splice(-1, 1);

    // Push it to the last row
    organization.rows[last].push(node);

    organization.rowWidth[longest] = organization.rowWidth[longest] - diff;
    organization.rowWidth[last] = organization.rowWidth[last] + diff;
    organization.width = organization.rowWidth[instance.getLongestRowIndex(organization)];

    // Update heights of the organization
    var maxHeight = Number.MIN_VALUE;
    for (var i = 0; i < row.length; i++) {
      if (row[i].height > maxHeight) maxHeight = row[i].height;
    }
    if (longest > 0) maxHeight += organization.verticalPadding;

    var prevTotal = organization.rowHeight[longest] + organization.rowHeight[last];

    organization.rowHeight[longest] = maxHeight;
    if (organization.rowHeight[last] < node.height + organization.verticalPadding) organization.rowHeight[last] = node.height + organization.verticalPadding;

    var finalTotal = organization.rowHeight[longest] + organization.rowHeight[last];
    organization.height += finalTotal - prevTotal;

    this.shiftToLastRow(organization);
  }
};

CoSELayout.prototype.tilingPreLayout = function () {
  if (CoSEConstants.TILE) {
    // Find zero degree nodes and create a compound for each level
    this.groupZeroDegreeMembers();
    // Tile and clear children of each compound
    this.clearCompounds();
    // Separately tile and clear zero degree nodes for each level
    this.clearZeroDegreeMembers();
  }
};

CoSELayout.prototype.tilingPostLayout = function () {
  if (CoSEConstants.TILE) {
    this.repopulateZeroDegreeMembers();
    this.repopulateCompounds();
  }
};

module.exports = CoSELayout;

/***/ }),

/***/ "./cose-bilkent/src/Layout/CoSENode.js":
/*!*********************************************!*\
  !*** ./cose-bilkent/src/Layout/CoSENode.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var FDLayoutNode = __webpack_require__(/*! ./FDLayoutNode */ "./cose-bilkent/src/Layout/FDLayoutNode.js");
var IMath = __webpack_require__(/*! ./IMath */ "./cose-bilkent/src/Layout/IMath.js");

function CoSENode(gm, loc, size, vNode) {
  FDLayoutNode.call(this, gm, loc, size, vNode);
}

CoSENode.prototype = Object.create(FDLayoutNode.prototype);
for (var prop in FDLayoutNode) {
  CoSENode[prop] = FDLayoutNode[prop];
}

CoSENode.prototype.move = function () {
  var layout = this.graphManager.getLayout();
  this.displacementX = layout.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren;
  this.displacementY = layout.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren;

  if (Math.abs(this.displacementX) > layout.coolingFactor * layout.maxNodeDisplacement) {
    this.displacementX = layout.coolingFactor * layout.maxNodeDisplacement * IMath.sign(this.displacementX);
  }

  if (Math.abs(this.displacementY) > layout.coolingFactor * layout.maxNodeDisplacement) {
    this.displacementY = layout.coolingFactor * layout.maxNodeDisplacement * IMath.sign(this.displacementY);
  }

  // a simple node, just move it
  if (this.child == null) {
    this.moveBy(this.displacementX, this.displacementY);
  }
  // an empty compound node, again just move it
  else if (this.child.getNodes().length == 0) {
      this.moveBy(this.displacementX, this.displacementY);
    }
    // non-empty compound node, propogate movement to children as well
    else {
        this.propogateDisplacementToChildren(this.displacementX, this.displacementY);
      }

  layout.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY);

  this.springForceX = 0;
  this.springForceY = 0;
  this.repulsionForceX = 0;
  this.repulsionForceY = 0;
  this.gravitationForceX = 0;
  this.gravitationForceY = 0;
  this.displacementX = 0;
  this.displacementY = 0;
};

CoSENode.prototype.propogateDisplacementToChildren = function (dX, dY) {
  var nodes = this.getChild().getNodes();
  var node;
  for (var i = 0; i < nodes.length; i++) {
    node = nodes[i];
    if (node.getChild() == null) {
      node.moveBy(dX, dY);
      node.displacementX += dX;
      node.displacementY += dY;
    } else {
      node.propogateDisplacementToChildren(dX, dY);
    }
  }
};

CoSENode.prototype.setPred1 = function (pred1) {
  this.pred1 = pred1;
};

CoSENode.prototype.getPred1 = function () {
  return pred1;
};

CoSENode.prototype.getPred2 = function () {
  return pred2;
};

CoSENode.prototype.setNext = function (next) {
  this.next = next;
};

CoSENode.prototype.getNext = function () {
  return next;
};

CoSENode.prototype.setProcessed = function (processed) {
  this.processed = processed;
};

CoSENode.prototype.isProcessed = function () {
  return processed;
};

module.exports = CoSENode;

/***/ }),

/***/ "./cose-bilkent/src/Layout/DimensionD.js":
/*!***********************************************!*\
  !*** ./cose-bilkent/src/Layout/DimensionD.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function DimensionD(width, height) {
  this.width = 0;
  this.height = 0;
  if (width !== null && height !== null) {
    this.height = height;
    this.width = width;
  }
}

DimensionD.prototype.getWidth = function () {
  return this.width;
};

DimensionD.prototype.setWidth = function (width) {
  this.width = width;
};

DimensionD.prototype.getHeight = function () {
  return this.height;
};

DimensionD.prototype.setHeight = function (height) {
  this.height = height;
};

module.exports = DimensionD;

/***/ }),

/***/ "./cose-bilkent/src/Layout/Emitter.js":
/*!********************************************!*\
  !*** ./cose-bilkent/src/Layout/Emitter.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Emitter() {
  this.listeners = [];
}

var p = Emitter.prototype;

p.addListener = function (event, callback) {
  this.listeners.push({
    event: event,
    callback: callback
  });
};

p.removeListener = function (event, callback) {
  for (var i = this.listeners.length; i >= 0; i--) {
    var l = this.listeners[i];

    if (l.event === event && l.callback === callback) {
      this.listeners.splice(i, 1);
    }
  }
};

p.emit = function (event, data) {
  for (var i = 0; i < this.listeners.length; i++) {
    var l = this.listeners[i];

    if (event === l.event) {
      l.callback(data);
    }
  }
};

module.exports = Emitter;

/***/ }),

/***/ "./cose-bilkent/src/Layout/FDLayout.js":
/*!*********************************************!*\
  !*** ./cose-bilkent/src/Layout/FDLayout.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Layout = __webpack_require__(/*! ./Layout */ "./cose-bilkent/src/Layout/Layout.js");
var FDLayoutConstants = __webpack_require__(/*! ./FDLayoutConstants */ "./cose-bilkent/src/Layout/FDLayoutConstants.js");
var LayoutConstants = __webpack_require__(/*! ./LayoutConstants */ "./cose-bilkent/src/Layout/LayoutConstants.js");
var IGeometry = __webpack_require__(/*! ./IGeometry */ "./cose-bilkent/src/Layout/IGeometry.js");
var IMath = __webpack_require__(/*! ./IMath */ "./cose-bilkent/src/Layout/IMath.js");
var Integer = __webpack_require__(/*! ./Integer */ "./cose-bilkent/src/Layout/Integer.js");

function FDLayout() {
  Layout.call(this);

  this.useSmartIdealEdgeLengthCalculation = FDLayoutConstants.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION;
  this.idealEdgeLength = FDLayoutConstants.DEFAULT_EDGE_LENGTH;
  this.springConstant = FDLayoutConstants.DEFAULT_SPRING_STRENGTH;
  this.repulsionConstant = FDLayoutConstants.DEFAULT_REPULSION_STRENGTH;
  this.gravityConstant = FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH;
  this.compoundGravityConstant = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH;
  this.gravityRangeFactor = FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR;
  this.compoundGravityRangeFactor = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR;
  this.displacementThresholdPerNode = 3.0 * FDLayoutConstants.DEFAULT_EDGE_LENGTH / 100;
  this.coolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL;
  this.initialCoolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL;
  this.totalDisplacement = 0.0;
  this.oldTotalDisplacement = 0.0;
  this.maxIterations = FDLayoutConstants.MAX_ITERATIONS;
}

FDLayout.prototype = Object.create(Layout.prototype);

for (var prop in Layout) {
  FDLayout[prop] = Layout[prop];
}

FDLayout.prototype.initParameters = function () {
  Layout.prototype.initParameters.call(this, arguments);

  if (this.layoutQuality == LayoutConstants.DRAFT_QUALITY) {
    this.displacementThresholdPerNode += 0.30;
    this.maxIterations *= 0.8;
  } else if (this.layoutQuality == LayoutConstants.PROOF_QUALITY) {
    this.displacementThresholdPerNode -= 0.30;
    this.maxIterations *= 1.2;
  }

  this.totalIterations = 0;
  this.notAnimatedIterations = 0;

  this.useFRGridVariant = FDLayoutConstants.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION;

  this.grid = [];
  // variables for tree reduction support
  this.prunedNodesAll = [];
  this.growTreeIterations = 0;
  this.afterGrowthIterations = 0;
  this.isTreeGrowing = false;
  this.isGrowthFinished = false;
};

FDLayout.prototype.calcIdealEdgeLengths = function () {
  var edge;
  var lcaDepth;
  var source;
  var target;
  var sizeOfSourceInLca;
  var sizeOfTargetInLca;

  var allEdges = this.getGraphManager().getAllEdges();
  for (var i = 0; i < allEdges.length; i++) {
    edge = allEdges[i];

    edge.idealLength = this.idealEdgeLength;

    if (edge.isInterGraph) {
      source = edge.getSource();
      target = edge.getTarget();

      sizeOfSourceInLca = edge.getSourceInLca().getEstimatedSize();
      sizeOfTargetInLca = edge.getTargetInLca().getEstimatedSize();

      if (this.useSmartIdealEdgeLengthCalculation) {
        edge.idealLength += sizeOfSourceInLca + sizeOfTargetInLca - 2 * LayoutConstants.SIMPLE_NODE_SIZE;
      }

      lcaDepth = edge.getLca().getInclusionTreeDepth();

      edge.idealLength += FDLayoutConstants.DEFAULT_EDGE_LENGTH * FDLayoutConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (source.getInclusionTreeDepth() + target.getInclusionTreeDepth() - 2 * lcaDepth);
    }
  }
};

FDLayout.prototype.initSpringEmbedder = function () {

  if (this.incremental) {
    this.maxNodeDisplacement = FDLayoutConstants.MAX_NODE_DISPLACEMENT_INCREMENTAL;
  } else {
    this.coolingFactor = 1.0;
    this.initialCoolingFactor = 1.0;
    this.maxNodeDisplacement = FDLayoutConstants.MAX_NODE_DISPLACEMENT;
  }

  this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations);

  this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length;

  this.repulsionRange = this.calcRepulsionRange();
};

FDLayout.prototype.calcSpringForces = function () {
  var lEdges = this.getAllEdges();
  var edge;

  for (var i = 0; i < lEdges.length; i++) {
    edge = lEdges[i];

    this.calcSpringForce(edge, edge.idealLength);
  }
};

FDLayout.prototype.calcRepulsionForces = function () {
  var i, j;
  var nodeA, nodeB;
  var lNodes = this.getAllNodes();
  var processedNodeSet;

  if (this.useFRGridVariant) {
    if (this.totalIterations % FDLayoutConstants.GRID_CALCULATION_CHECK_PERIOD == 1 && !this.isTreeGrowing && !this.isGrowthFinished) {
      this.updateGrid();
    }

    processedNodeSet = new Set();

    // calculate repulsion forces between each nodes and its surrounding
    for (i = 0; i < lNodes.length; i++) {
      nodeA = lNodes[i];
      this.calculateRepulsionForceOfANode(nodeA, processedNodeSet);
      processedNodeSet.add(nodeA);
    }
  } else {
    for (i = 0; i < lNodes.length; i++) {
      nodeA = lNodes[i];

      for (j = i + 1; j < lNodes.length; j++) {
        nodeB = lNodes[j];

        // If both nodes are not members of the same graph, skip.
        if (nodeA.getOwner() != nodeB.getOwner()) {
          continue;
        }

        this.calcRepulsionForce(nodeA, nodeB);
      }
    }
  }
};

FDLayout.prototype.calcGravitationalForces = function () {
  var node;
  var lNodes = this.getAllNodesToApplyGravitation();

  for (var i = 0; i < lNodes.length; i++) {
    node = lNodes[i];
    this.calcGravitationalForce(node);
  }
};

FDLayout.prototype.moveNodes = function () {
  var lNodes = this.getAllNodes();
  var node;

  for (var i = 0; i < lNodes.length; i++) {
    node = lNodes[i];
    node.move();
  }
};

FDLayout.prototype.calcSpringForce = function (edge, idealLength) {
  var sourceNode = edge.getSource();
  var targetNode = edge.getTarget();

  var length;
  var springForce;
  var springForceX;
  var springForceY;

  // Update edge length
  if (this.uniformLeafNodeSizes && sourceNode.getChild() == null && targetNode.getChild() == null) {
    edge.updateLengthSimple();
  } else {
    edge.updateLength();

    if (edge.isOverlapingSourceAndTarget) {
      return;
    }
  }

  length = edge.getLength();

  // Calculate spring forces
  springForce = this.springConstant * (length - idealLength);

  // Project force onto x and y axes
  springForceX = springForce * (edge.lengthX / length);
  springForceY = springForce * (edge.lengthY / length);

  // Apply forces on the end nodes
  sourceNode.springForceX += springForceX;
  sourceNode.springForceY += springForceY;
  targetNode.springForceX -= springForceX;
  targetNode.springForceY -= springForceY;
};

FDLayout.prototype.calcRepulsionForce = function (nodeA, nodeB) {
  var rectA = nodeA.getRect();
  var rectB = nodeB.getRect();
  var overlapAmount = new Array(2);
  var clipPoints = new Array(4);
  var distanceX;
  var distanceY;
  var distanceSquared;
  var distance;
  var repulsionForce;
  var repulsionForceX;
  var repulsionForceY;

  if (rectA.intersects(rectB)) // two nodes overlap
    {
      // calculate separation amount in x and y directions
      IGeometry.calcSeparationAmount(rectA, rectB, overlapAmount, FDLayoutConstants.DEFAULT_EDGE_LENGTH / 2.0);

      repulsionForceX = 2 * overlapAmount[0];
      repulsionForceY = 2 * overlapAmount[1];

      var childrenConstant = nodeA.noOfChildren * nodeB.noOfChildren / (nodeA.noOfChildren + nodeB.noOfChildren);

      // Apply forces on the two nodes
      nodeA.repulsionForceX -= childrenConstant * repulsionForceX;
      nodeA.repulsionForceY -= childrenConstant * repulsionForceY;
      nodeB.repulsionForceX += childrenConstant * repulsionForceX;
      nodeB.repulsionForceY += childrenConstant * repulsionForceY;
    } else // no overlap
    {
      // calculate distance

      if (this.uniformLeafNodeSizes && nodeA.getChild() == null && nodeB.getChild() == null) // simply base repulsion on distance of node centers
        {
          distanceX = rectB.getCenterX() - rectA.getCenterX();
          distanceY = rectB.getCenterY() - rectA.getCenterY();
        } else // use clipping points
        {
          IGeometry.getIntersection(rectA, rectB, clipPoints);

          distanceX = clipPoints[2] - clipPoints[0];
          distanceY = clipPoints[3] - clipPoints[1];
        }

      // No repulsion range. FR grid variant should take care of this.
      if (Math.abs(distanceX) < FDLayoutConstants.MIN_REPULSION_DIST) {
        distanceX = IMath.sign(distanceX) * FDLayoutConstants.MIN_REPULSION_DIST;
      }

      if (Math.abs(distanceY) < FDLayoutConstants.MIN_REPULSION_DIST) {
        distanceY = IMath.sign(distanceY) * FDLayoutConstants.MIN_REPULSION_DIST;
      }

      distanceSquared = distanceX * distanceX + distanceY * distanceY;
      distance = Math.sqrt(distanceSquared);

      repulsionForce = this.repulsionConstant * nodeA.noOfChildren * nodeB.noOfChildren / distanceSquared;

      // Project force onto x and y axes
      repulsionForceX = repulsionForce * distanceX / distance;
      repulsionForceY = repulsionForce * distanceY / distance;

      // Apply forces on the two nodes    
      nodeA.repulsionForceX -= repulsionForceX;
      nodeA.repulsionForceY -= repulsionForceY;
      nodeB.repulsionForceX += repulsionForceX;
      nodeB.repulsionForceY += repulsionForceY;
    }
};

FDLayout.prototype.calcGravitationalForce = function (node) {
  var ownerGraph;
  var ownerCenterX;
  var ownerCenterY;
  var distanceX;
  var distanceY;
  var absDistanceX;
  var absDistanceY;
  var estimatedSize;
  ownerGraph = node.getOwner();

  ownerCenterX = (ownerGraph.getRight() + ownerGraph.getLeft()) / 2;
  ownerCenterY = (ownerGraph.getTop() + ownerGraph.getBottom()) / 2;
  distanceX = node.getCenterX() - ownerCenterX;
  distanceY = node.getCenterY() - ownerCenterY;
  absDistanceX = Math.abs(distanceX) + node.getWidth() / 2;
  absDistanceY = Math.abs(distanceY) + node.getHeight() / 2;

  if (node.getOwner() == this.graphManager.getRoot()) // in the root graph
    {
      estimatedSize = ownerGraph.getEstimatedSize() * this.gravityRangeFactor;

      if (absDistanceX > estimatedSize || absDistanceY > estimatedSize) {
        node.gravitationForceX = -this.gravityConstant * distanceX;
        node.gravitationForceY = -this.gravityConstant * distanceY;
      }
    } else // inside a compound
    {
      estimatedSize = ownerGraph.getEstimatedSize() * this.compoundGravityRangeFactor;

      if (absDistanceX > estimatedSize || absDistanceY > estimatedSize) {
        node.gravitationForceX = -this.gravityConstant * distanceX * this.compoundGravityConstant;
        node.gravitationForceY = -this.gravityConstant * distanceY * this.compoundGravityConstant;
      }
    }
};

FDLayout.prototype.isConverged = function () {
  var converged;
  var oscilating = false;

  if (this.totalIterations > this.maxIterations / 3) {
    oscilating = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2;
  }

  converged = this.totalDisplacement < this.totalDisplacementThreshold;

  this.oldTotalDisplacement = this.totalDisplacement;

  return converged || oscilating;
};

FDLayout.prototype.animate = function () {
  if (this.animationDuringLayout && !this.isSubLayout) {
    if (this.notAnimatedIterations == this.animationPeriod) {
      this.update();
      this.notAnimatedIterations = 0;
    } else {
      this.notAnimatedIterations++;
    }
  }
};

// -----------------------------------------------------------------------------
// Section: FR-Grid Variant Repulsion Force Calculation
// -----------------------------------------------------------------------------

FDLayout.prototype.calcGrid = function (graph) {

  var sizeX = 0;
  var sizeY = 0;

  sizeX = parseInt(Math.ceil((graph.getRight() - graph.getLeft()) / this.repulsionRange));
  sizeY = parseInt(Math.ceil((graph.getBottom() - graph.getTop()) / this.repulsionRange));

  var grid = new Array(sizeX);

  for (var i = 0; i < sizeX; i++) {
    grid[i] = new Array(sizeY);
  }

  for (var i = 0; i < sizeX; i++) {
    for (var j = 0; j < sizeY; j++) {
      grid[i][j] = new Array();
    }
  }

  return grid;
};

FDLayout.prototype.addNodeToGrid = function (v, left, top) {

  var startX = 0;
  var finishX = 0;
  var startY = 0;
  var finishY = 0;

  startX = parseInt(Math.floor((v.getRect().x - left) / this.repulsionRange));
  finishX = parseInt(Math.floor((v.getRect().width + v.getRect().x - left) / this.repulsionRange));
  startY = parseInt(Math.floor((v.getRect().y - top) / this.repulsionRange));
  finishY = parseInt(Math.floor((v.getRect().height + v.getRect().y - top) / this.repulsionRange));

  for (var i = startX; i <= finishX; i++) {
    for (var j = startY; j <= finishY; j++) {
      this.grid[i][j].push(v);
      v.setGridCoordinates(startX, finishX, startY, finishY);
    }
  }
};

FDLayout.prototype.updateGrid = function () {
  var i;
  var nodeA;
  var lNodes = this.getAllNodes();

  this.grid = this.calcGrid(this.graphManager.getRoot());

  // put all nodes to proper grid cells
  for (i = 0; i < lNodes.length; i++) {
    nodeA = lNodes[i];
    this.addNodeToGrid(nodeA, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
  }
};

FDLayout.prototype.calculateRepulsionForceOfANode = function (nodeA, processedNodeSet) {

  if (this.totalIterations % FDLayoutConstants.GRID_CALCULATION_CHECK_PERIOD == 1 && !this.isTreeGrowing && !this.isGrowthFinished || this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished) {
    var surrounding = new Set();
    nodeA.surrounding = new Array();
    var nodeB;
    var grid = this.grid;

    for (var i = nodeA.startX - 1; i < nodeA.finishX + 2; i++) {
      for (var j = nodeA.startY - 1; j < nodeA.finishY + 2; j++) {
        if (!(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length)) {
          for (var k = 0; k < grid[i][j].length; k++) {
            nodeB = grid[i][j][k];

            // If both nodes are not members of the same graph, 
            // or both nodes are the same, skip.
            if (nodeA.getOwner() != nodeB.getOwner() || nodeA == nodeB) {
              continue;
            }

            // check if the repulsion force between
            // nodeA and nodeB has already been calculated
            if (!processedNodeSet.has(nodeB) && !surrounding.has(nodeB)) {
              var distanceX = Math.abs(nodeA.getCenterX() - nodeB.getCenterX()) - (nodeA.getWidth() / 2 + nodeB.getWidth() / 2);
              var distanceY = Math.abs(nodeA.getCenterY() - nodeB.getCenterY()) - (nodeA.getHeight() / 2 + nodeB.getHeight() / 2);

              // if the distance between nodeA and nodeB 
              // is less then calculation range
              if (distanceX <= this.repulsionRange && distanceY <= this.repulsionRange) {
                //then add nodeB to surrounding of nodeA
                surrounding.add(nodeB);
              }
            }
          }
        }
      }
    }

    nodeA.surrounding = [].concat(_toConsumableArray(surrounding));
  }
  for (i = 0; i < nodeA.surrounding.length; i++) {
    this.calcRepulsionForce(nodeA, nodeA.surrounding[i]);
  }
};

FDLayout.prototype.calcRepulsionRange = function () {
  return 0.0;
};

// -----------------------------------------------------------------------------
// Section: Tree Reduction methods
// -----------------------------------------------------------------------------
// Reduce trees 
FDLayout.prototype.reduceTrees = function () {
  var prunedNodesAll = [];
  var containsLeaf = true;
  var node;

  while (containsLeaf) {
    var allNodes = this.graphManager.getAllNodes();
    var prunedNodesInStepTemp = [];
    containsLeaf = false;

    for (var i = 0; i < allNodes.length; i++) {
      node = allNodes[i];
      if (node.getEdges().length == 1 && !node.getEdges()[0].isInterGraph && node.getChild() == null) {
        prunedNodesInStepTemp.push([node, node.getEdges()[0], node.getOwner()]);
        containsLeaf = true;
      }
    }
    if (containsLeaf == true) {
      var prunedNodesInStep = [];
      for (var j = 0; j < prunedNodesInStepTemp.length; j++) {
        if (prunedNodesInStepTemp[j][0].getEdges().length == 1) {
          prunedNodesInStep.push(prunedNodesInStepTemp[j]);
          prunedNodesInStepTemp[j][0].getOwner().remove(prunedNodesInStepTemp[j][0]);
        }
      }
      prunedNodesAll.push(prunedNodesInStep);
      this.graphManager.resetAllNodes();
      this.graphManager.resetAllEdges();
    }
  }
  this.prunedNodesAll = prunedNodesAll;
};

// Grow tree one step 
FDLayout.prototype.growTree = function (prunedNodesAll) {
  var lengthOfPrunedNodesInStep = prunedNodesAll.length;
  var prunedNodesInStep = prunedNodesAll[lengthOfPrunedNodesInStep - 1];

  var nodeData;
  for (var i = 0; i < prunedNodesInStep.length; i++) {
    nodeData = prunedNodesInStep[i];

    this.findPlaceforPrunedNode(nodeData);

    nodeData[2].add(nodeData[0]);
    nodeData[2].add(nodeData[1], nodeData[1].source, nodeData[1].target);
  }

  prunedNodesAll.splice(prunedNodesAll.length - 1, 1);
  this.graphManager.resetAllNodes();
  this.graphManager.resetAllEdges();
};

// Find an appropriate position to replace pruned node, this method can be improved
FDLayout.prototype.findPlaceforPrunedNode = function (nodeData) {

  var gridForPrunedNode;
  var nodeToConnect;
  var prunedNode = nodeData[0];
  if (prunedNode == nodeData[1].source) {
    nodeToConnect = nodeData[1].target;
  } else {
    nodeToConnect = nodeData[1].source;
  }
  var startGridX = nodeToConnect.startX;
  var finishGridX = nodeToConnect.finishX;
  var startGridY = nodeToConnect.startY;
  var finishGridY = nodeToConnect.finishY;

  var upNodeCount = 0;
  var downNodeCount = 0;
  var rightNodeCount = 0;
  var leftNodeCount = 0;
  var controlRegions = [upNodeCount, rightNodeCount, downNodeCount, leftNodeCount];

  if (startGridY > 0) {
    for (var i = startGridX; i <= finishGridX; i++) {
      controlRegions[0] += this.grid[i][startGridY - 1].length + this.grid[i][startGridY].length - 1;
    }
  }
  if (finishGridX < this.grid.length - 1) {
    for (var i = startGridY; i <= finishGridY; i++) {
      controlRegions[1] += this.grid[finishGridX + 1][i].length + this.grid[finishGridX][i].length - 1;
    }
  }
  if (finishGridY < this.grid[0].length - 1) {
    for (var i = startGridX; i <= finishGridX; i++) {
      controlRegions[2] += this.grid[i][finishGridY + 1].length + this.grid[i][finishGridY].length - 1;
    }
  }
  if (startGridX > 0) {
    for (var i = startGridY; i <= finishGridY; i++) {
      controlRegions[3] += this.grid[startGridX - 1][i].length + this.grid[startGridX][i].length - 1;
    }
  }
  var min = Integer.MAX_VALUE;
  var minCount;
  var minIndex;
  for (var j = 0; j < controlRegions.length; j++) {
    if (controlRegions[j] < min) {
      min = controlRegions[j];
      minCount = 1;
      minIndex = j;
    } else if (controlRegions[j] == min) {
      minCount++;
    }
  }

  if (minCount == 3 && min == 0) {
    if (controlRegions[0] == 0 && controlRegions[1] == 0 && controlRegions[2] == 0) {
      gridForPrunedNode = 1;
    } else if (controlRegions[0] == 0 && controlRegions[1] == 0 && controlRegions[3] == 0) {
      gridForPrunedNode = 0;
    } else if (controlRegions[0] == 0 && controlRegions[2] == 0 && controlRegions[3] == 0) {
      gridForPrunedNode = 3;
    } else if (controlRegions[1] == 0 && controlRegions[2] == 0 && controlRegions[3] == 0) {
      gridForPrunedNode = 2;
    }
  } else if (minCount == 2 && min == 0) {
    var random = Math.floor(Math.random() * 2);
    if (controlRegions[0] == 0 && controlRegions[1] == 0) {
      ;
      if (random == 0) {
        gridForPrunedNode = 0;
      } else {
        gridForPrunedNode = 1;
      }
    } else if (controlRegions[0] == 0 && controlRegions[2] == 0) {
      if (random == 0) {
        gridForPrunedNode = 0;
      } else {
        gridForPrunedNode = 2;
      }
    } else if (controlRegions[0] == 0 && controlRegions[3] == 0) {
      if (random == 0) {
        gridForPrunedNode = 0;
      } else {
        gridForPrunedNode = 3;
      }
    } else if (controlRegions[1] == 0 && controlRegions[2] == 0) {
      if (random == 0) {
        gridForPrunedNode = 1;
      } else {
        gridForPrunedNode = 2;
      }
    } else if (controlRegions[1] == 0 && controlRegions[3] == 0) {
      if (random == 0) {
        gridForPrunedNode = 1;
      } else {
        gridForPrunedNode = 3;
      }
    } else {
      if (random == 0) {
        gridForPrunedNode = 2;
      } else {
        gridForPrunedNode = 3;
      }
    }
  } else if (minCount == 4 && min == 0) {
    var random = Math.floor(Math.random() * 4);
    gridForPrunedNode = random;
  } else {
    gridForPrunedNode = minIndex;
  }

  if (gridForPrunedNode == 0) {
    prunedNode.setCenter(nodeToConnect.getCenterX(), nodeToConnect.getCenterY() - nodeToConnect.getHeight() / 2 - FDLayoutConstants.DEFAULT_EDGE_LENGTH - prunedNode.getHeight() / 2);
  } else if (gridForPrunedNode == 1) {
    prunedNode.setCenter(nodeToConnect.getCenterX() + nodeToConnect.getWidth() / 2 + FDLayoutConstants.DEFAULT_EDGE_LENGTH + prunedNode.getWidth() / 2, nodeToConnect.getCenterY());
  } else if (gridForPrunedNode == 2) {
    prunedNode.setCenter(nodeToConnect.getCenterX(), nodeToConnect.getCenterY() + nodeToConnect.getHeight() / 2 + FDLayoutConstants.DEFAULT_EDGE_LENGTH + prunedNode.getHeight() / 2);
  } else {
    prunedNode.setCenter(nodeToConnect.getCenterX() - nodeToConnect.getWidth() / 2 - FDLayoutConstants.DEFAULT_EDGE_LENGTH - prunedNode.getWidth() / 2, nodeToConnect.getCenterY());
  }
};

module.exports = FDLayout;

/***/ }),

/***/ "./cose-bilkent/src/Layout/FDLayoutConstants.js":
/*!******************************************************!*\
  !*** ./cose-bilkent/src/Layout/FDLayoutConstants.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LayoutConstants = __webpack_require__(/*! ./LayoutConstants */ "./cose-bilkent/src/Layout/LayoutConstants.js");

function FDLayoutConstants() {}

//FDLayoutConstants inherits static props in LayoutConstants
for (var prop in LayoutConstants) {
  FDLayoutConstants[prop] = LayoutConstants[prop];
}

FDLayoutConstants.MAX_ITERATIONS = 2500;

FDLayoutConstants.DEFAULT_EDGE_LENGTH = 50;
FDLayoutConstants.DEFAULT_SPRING_STRENGTH = 0.45;
FDLayoutConstants.DEFAULT_REPULSION_STRENGTH = 4500.0;
FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH = 0.4;
FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1.0;
FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8;
FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5;
FDLayoutConstants.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true;
FDLayoutConstants.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true;
FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.5;
FDLayoutConstants.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100.0;
FDLayoutConstants.MAX_NODE_DISPLACEMENT = FDLayoutConstants.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3;
FDLayoutConstants.MIN_REPULSION_DIST = FDLayoutConstants.DEFAULT_EDGE_LENGTH / 10.0;
FDLayoutConstants.CONVERGENCE_CHECK_PERIOD = 100;
FDLayoutConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1;
FDLayoutConstants.MIN_EDGE_LENGTH = 1;
FDLayoutConstants.GRID_CALCULATION_CHECK_PERIOD = 10;

module.exports = FDLayoutConstants;

/***/ }),

/***/ "./cose-bilkent/src/Layout/FDLayoutEdge.js":
/*!*************************************************!*\
  !*** ./cose-bilkent/src/Layout/FDLayoutEdge.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LEdge = __webpack_require__(/*! ./LEdge */ "./cose-bilkent/src/Layout/LEdge.js");
var FDLayoutConstants = __webpack_require__(/*! ./FDLayoutConstants */ "./cose-bilkent/src/Layout/FDLayoutConstants.js");

function FDLayoutEdge(source, target, vEdge) {
  LEdge.call(this, source, target, vEdge);
  this.idealLength = FDLayoutConstants.DEFAULT_EDGE_LENGTH;
}

FDLayoutEdge.prototype = Object.create(LEdge.prototype);

for (var prop in LEdge) {
  FDLayoutEdge[prop] = LEdge[prop];
}

module.exports = FDLayoutEdge;

/***/ }),

/***/ "./cose-bilkent/src/Layout/FDLayoutNode.js":
/*!*************************************************!*\
  !*** ./cose-bilkent/src/Layout/FDLayoutNode.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LNode = __webpack_require__(/*! ./LNode */ "./cose-bilkent/src/Layout/LNode.js");

function FDLayoutNode(gm, loc, size, vNode) {
  // alternative constructor is handled inside LNode
  LNode.call(this, gm, loc, size, vNode);
  //Spring, repulsion and gravitational forces acting on this node
  this.springForceX = 0;
  this.springForceY = 0;
  this.repulsionForceX = 0;
  this.repulsionForceY = 0;
  this.gravitationForceX = 0;
  this.gravitationForceY = 0;
  //Amount by which this node is to be moved in this iteration
  this.displacementX = 0;
  this.displacementY = 0;

  //Start and finish grid coordinates that this node is fallen into
  this.startX = 0;
  this.finishX = 0;
  this.startY = 0;
  this.finishY = 0;

  //Geometric neighbors of this node
  this.surrounding = [];
}

FDLayoutNode.prototype = Object.create(LNode.prototype);

for (var prop in LNode) {
  FDLayoutNode[prop] = LNode[prop];
}

FDLayoutNode.prototype.setGridCoordinates = function (_startX, _finishX, _startY, _finishY) {
  this.startX = _startX;
  this.finishX = _finishX;
  this.startY = _startY;
  this.finishY = _finishY;
};

module.exports = FDLayoutNode;

/***/ }),

/***/ "./cose-bilkent/src/Layout/HashMap.js":
/*!********************************************!*\
  !*** ./cose-bilkent/src/Layout/HashMap.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var UniqueIDGeneretor = __webpack_require__(/*! ./UniqueIDGeneretor */ "./cose-bilkent/src/Layout/UniqueIDGeneretor.js");

function HashMap() {
  this.map = {};
  this.keys = [];
}

HashMap.prototype.put = function (key, value) {
  var theId = UniqueIDGeneretor.createID(key);
  if (!this.contains(theId)) {
    this.map[theId] = value;
    this.keys.push(key);
  }
};

HashMap.prototype.contains = function (key) {
  var theId = UniqueIDGeneretor.createID(key);
  return this.map[key] != null;
};

HashMap.prototype.get = function (key) {
  var theId = UniqueIDGeneretor.createID(key);
  return this.map[theId];
};

HashMap.prototype.keySet = function () {
  return this.keys;
};

module.exports = HashMap;

/***/ }),

/***/ "./cose-bilkent/src/Layout/HashSet.js":
/*!********************************************!*\
  !*** ./cose-bilkent/src/Layout/HashSet.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var UniqueIDGeneretor = __webpack_require__(/*! ./UniqueIDGeneretor */ "./cose-bilkent/src/Layout/UniqueIDGeneretor.js");

function HashSet() {
  this.set = {};
}
;

HashSet.prototype.add = function (obj) {
  var theId = UniqueIDGeneretor.createID(obj);
  if (!this.contains(theId)) this.set[theId] = obj;
};

HashSet.prototype.remove = function (obj) {
  delete this.set[UniqueIDGeneretor.createID(obj)];
};

HashSet.prototype.clear = function () {
  this.set = {};
};

HashSet.prototype.contains = function (obj) {
  return this.set[UniqueIDGeneretor.createID(obj)] == obj;
};

HashSet.prototype.isEmpty = function () {
  return this.size() === 0;
};

HashSet.prototype.size = function () {
  return Object.keys(this.set).length;
};

//concats this.set to the given list
HashSet.prototype.addAllTo = function (list) {
  var keys = Object.keys(this.set);
  var length = keys.length;
  for (var i = 0; i < length; i++) {
    list.push(this.set[keys[i]]);
  }
};

HashSet.prototype.size = function () {
  return Object.keys(this.set).length;
};

HashSet.prototype.addAll = function (list) {
  var s = list.length;
  for (var i = 0; i < s; i++) {
    var v = list[i];
    this.add(v);
  }
};

module.exports = HashSet;

/***/ }),

/***/ "./cose-bilkent/src/Layout/IGeometry.js":
/*!**********************************************!*\
  !*** ./cose-bilkent/src/Layout/IGeometry.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function IGeometry() {}

IGeometry.calcSeparationAmount = function (rectA, rectB, overlapAmount, separationBuffer) {
  if (!rectA.intersects(rectB)) {
    throw "assert failed";
  }
  var directions = new Array(2);
  IGeometry.decideDirectionsForOverlappingNodes(rectA, rectB, directions);
  overlapAmount[0] = Math.min(rectA.getRight(), rectB.getRight()) - Math.max(rectA.x, rectB.x);
  overlapAmount[1] = Math.min(rectA.getBottom(), rectB.getBottom()) - Math.max(rectA.y, rectB.y);
  // update the overlapping amounts for the following cases:
  if (rectA.getX() <= rectB.getX() && rectA.getRight() >= rectB.getRight()) {
    overlapAmount[0] += Math.min(rectB.getX() - rectA.getX(), rectA.getRight() - rectB.getRight());
  } else if (rectB.getX() <= rectA.getX() && rectB.getRight() >= rectA.getRight()) {
    overlapAmount[0] += Math.min(rectA.getX() - rectB.getX(), rectB.getRight() - rectA.getRight());
  }
  if (rectA.getY() <= rectB.getY() && rectA.getBottom() >= rectB.getBottom()) {
    overlapAmount[1] += Math.min(rectB.getY() - rectA.getY(), rectA.getBottom() - rectB.getBottom());
  } else if (rectB.getY() <= rectA.getY() && rectB.getBottom() >= rectA.getBottom()) {
    overlapAmount[1] += Math.min(rectA.getY() - rectB.getY(), rectB.getBottom() - rectA.getBottom());
  }

  // find slope of the line passes two centers
  var slope = Math.abs((rectB.getCenterY() - rectA.getCenterY()) / (rectB.getCenterX() - rectA.getCenterX()));
  // if centers are overlapped
  if (rectB.getCenterY() == rectA.getCenterY() && rectB.getCenterX() == rectA.getCenterX()) {
    // assume the slope is 1 (45 degree)
    slope = 1.0;
  }

  var moveByY = slope * overlapAmount[0];
  var moveByX = overlapAmount[1] / slope;
  if (overlapAmount[0] < moveByX) {
    moveByX = overlapAmount[0];
  } else {
    moveByY = overlapAmount[1];
  }
  // return half the amount so that if each rectangle is moved by these
  // amounts in opposite directions, overlap will be resolved
  overlapAmount[0] = -1 * directions[0] * (moveByX / 2 + separationBuffer);
  overlapAmount[1] = -1 * directions[1] * (moveByY / 2 + separationBuffer);
};

IGeometry.decideDirectionsForOverlappingNodes = function (rectA, rectB, directions) {
  if (rectA.getCenterX() < rectB.getCenterX()) {
    directions[0] = -1;
  } else {
    directions[0] = 1;
  }

  if (rectA.getCenterY() < rectB.getCenterY()) {
    directions[1] = -1;
  } else {
    directions[1] = 1;
  }
};

IGeometry.getIntersection2 = function (rectA, rectB, result) {
  //result[0-1] will contain clipPoint of rectA, result[2-3] will contain clipPoint of rectB
  var p1x = rectA.getCenterX();
  var p1y = rectA.getCenterY();
  var p2x = rectB.getCenterX();
  var p2y = rectB.getCenterY();

  //if two rectangles intersect, then clipping points are centers
  if (rectA.intersects(rectB)) {
    result[0] = p1x;
    result[1] = p1y;
    result[2] = p2x;
    result[3] = p2y;
    return true;
  }
  //variables for rectA
  var topLeftAx = rectA.getX();
  var topLeftAy = rectA.getY();
  var topRightAx = rectA.getRight();
  var bottomLeftAx = rectA.getX();
  var bottomLeftAy = rectA.getBottom();
  var bottomRightAx = rectA.getRight();
  var halfWidthA = rectA.getWidthHalf();
  var halfHeightA = rectA.getHeightHalf();
  //variables for rectB
  var topLeftBx = rectB.getX();
  var topLeftBy = rectB.getY();
  var topRightBx = rectB.getRight();
  var bottomLeftBx = rectB.getX();
  var bottomLeftBy = rectB.getBottom();
  var bottomRightBx = rectB.getRight();
  var halfWidthB = rectB.getWidthHalf();
  var halfHeightB = rectB.getHeightHalf();
  //flag whether clipping points are found
  var clipPointAFound = false;
  var clipPointBFound = false;

  // line is vertical
  if (p1x == p2x) {
    if (p1y > p2y) {
      result[0] = p1x;
      result[1] = topLeftAy;
      result[2] = p2x;
      result[3] = bottomLeftBy;
      return false;
    } else if (p1y < p2y) {
      result[0] = p1x;
      result[1] = bottomLeftAy;
      result[2] = p2x;
      result[3] = topLeftBy;
      return false;
    } else {
      //not line, return null;
    }
  }
  // line is horizontal
  else if (p1y == p2y) {
      if (p1x > p2x) {
        result[0] = topLeftAx;
        result[1] = p1y;
        result[2] = topRightBx;
        result[3] = p2y;
        return false;
      } else if (p1x < p2x) {
        result[0] = topRightAx;
        result[1] = p1y;
        result[2] = topLeftBx;
        result[3] = p2y;
        return false;
      } else {
        //not valid line, return null;
      }
    } else {
      //slopes of rectA's and rectB's diagonals
      var slopeA = rectA.height / rectA.width;
      var slopeB = rectB.height / rectB.width;

      //slope of line between center of rectA and center of rectB
      var slopePrime = (p2y - p1y) / (p2x - p1x);
      var cardinalDirectionA;
      var cardinalDirectionB;
      var tempPointAx;
      var tempPointAy;
      var tempPointBx;
      var tempPointBy;

      //determine whether clipping point is the corner of nodeA
      if (-slopeA == slopePrime) {
        if (p1x > p2x) {
          result[0] = bottomLeftAx;
          result[1] = bottomLeftAy;
          clipPointAFound = true;
        } else {
          result[0] = topRightAx;
          result[1] = topLeftAy;
          clipPointAFound = true;
        }
      } else if (slopeA == slopePrime) {
        if (p1x > p2x) {
          result[0] = topLeftAx;
          result[1] = topLeftAy;
          clipPointAFound = true;
        } else {
          result[0] = bottomRightAx;
          result[1] = bottomLeftAy;
          clipPointAFound = true;
        }
      }

      //determine whether clipping point is the corner of nodeB
      if (-slopeB == slopePrime) {
        if (p2x > p1x) {
          result[2] = bottomLeftBx;
          result[3] = bottomLeftBy;
          clipPointBFound = true;
        } else {
          result[2] = topRightBx;
          result[3] = topLeftBy;
          clipPointBFound = true;
        }
      } else if (slopeB == slopePrime) {
        if (p2x > p1x) {
          result[2] = topLeftBx;
          result[3] = topLeftBy;
          clipPointBFound = true;
        } else {
          result[2] = bottomRightBx;
          result[3] = bottomLeftBy;
          clipPointBFound = true;
        }
      }

      //if both clipping points are corners
      if (clipPointAFound && clipPointBFound) {
        return false;
      }

      //determine Cardinal Direction of rectangles
      if (p1x > p2x) {
        if (p1y > p2y) {
          cardinalDirectionA = IGeometry.getCardinalDirection(slopeA, slopePrime, 4);
          cardinalDirectionB = IGeometry.getCardinalDirection(slopeB, slopePrime, 2);
        } else {
          cardinalDirectionA = IGeometry.getCardinalDirection(-slopeA, slopePrime, 3);
          cardinalDirectionB = IGeometry.getCardinalDirection(-slopeB, slopePrime, 1);
        }
      } else {
        if (p1y > p2y) {
          cardinalDirectionA = IGeometry.getCardinalDirection(-slopeA, slopePrime, 1);
          cardinalDirectionB = IGeometry.getCardinalDirection(-slopeB, slopePrime, 3);
        } else {
          cardinalDirectionA = IGeometry.getCardinalDirection(slopeA, slopePrime, 2);
          cardinalDirectionB = IGeometry.getCardinalDirection(slopeB, slopePrime, 4);
        }
      }
      //calculate clipping Point if it is not found before
      if (!clipPointAFound) {
        switch (cardinalDirectionA) {
          case 1:
            tempPointAy = topLeftAy;
            tempPointAx = p1x + -halfHeightA / slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
          case 2:
            tempPointAx = bottomRightAx;
            tempPointAy = p1y + halfWidthA * slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
          case 3:
            tempPointAy = bottomLeftAy;
            tempPointAx = p1x + halfHeightA / slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
          case 4:
            tempPointAx = bottomLeftAx;
            tempPointAy = p1y + -halfWidthA * slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
        }
      }
      if (!clipPointBFound) {
        switch (cardinalDirectionB) {
          case 1:
            tempPointBy = topLeftBy;
            tempPointBx = p2x + -halfHeightB / slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
          case 2:
            tempPointBx = bottomRightBx;
            tempPointBy = p2y + halfWidthB * slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
          case 3:
            tempPointBy = bottomLeftBy;
            tempPointBx = p2x + halfHeightB / slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
          case 4:
            tempPointBx = bottomLeftBx;
            tempPointBy = p2y + -halfWidthB * slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
        }
      }
    }
  return false;
};

IGeometry.getCardinalDirection = function (slope, slopePrime, line) {
  if (slope > slopePrime) {
    return line;
  } else {
    return 1 + line % 4;
  }
};

IGeometry.getIntersection = function (s1, s2, f1, f2) {
  if (f2 == null) {
    return IGeometry.getIntersection2(s1, s2, f1);
  }
  var x1 = s1.x;
  var y1 = s1.y;
  var x2 = s2.x;
  var y2 = s2.y;
  var x3 = f1.x;
  var y3 = f1.y;
  var x4 = f2.x;
  var y4 = f2.y;
  var x, y; // intersection point
  var a1, a2, b1, b2, c1, c2; // coefficients of line eqns.
  var denom;

  a1 = y2 - y1;
  b1 = x1 - x2;
  c1 = x2 * y1 - x1 * y2; // { a1*x + b1*y + c1 = 0 is line 1 }

  a2 = y4 - y3;
  b2 = x3 - x4;
  c2 = x4 * y3 - x3 * y4; // { a2*x + b2*y + c2 = 0 is line 2 }

  denom = a1 * b2 - a2 * b1;

  if (denom == 0) {
    return null;
  }

  x = (b1 * c2 - b2 * c1) / denom;
  y = (a2 * c1 - a1 * c2) / denom;

  return new Point(x, y);
};

// -----------------------------------------------------------------------------
// Section: Class Constants
// -----------------------------------------------------------------------------
/**
 * Some useful pre-calculated constants
 */
IGeometry.HALF_PI = 0.5 * Math.PI;
IGeometry.ONE_AND_HALF_PI = 1.5 * Math.PI;
IGeometry.TWO_PI = 2.0 * Math.PI;
IGeometry.THREE_PI = 3.0 * Math.PI;

module.exports = IGeometry;

/***/ }),

/***/ "./cose-bilkent/src/Layout/IMath.js":
/*!******************************************!*\
  !*** ./cose-bilkent/src/Layout/IMath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function IMath() {}

/**
 * This method returns the sign of the input value.
 */
IMath.sign = function (value) {
  if (value > 0) {
    return 1;
  } else if (value < 0) {
    return -1;
  } else {
    return 0;
  }
};

IMath.floor = function (value) {
  return value < 0 ? Math.ceil(value) : Math.floor(value);
};

IMath.ceil = function (value) {
  return value < 0 ? Math.floor(value) : Math.ceil(value);
};

module.exports = IMath;

/***/ }),

/***/ "./cose-bilkent/src/Layout/Integer.js":
/*!********************************************!*\
  !*** ./cose-bilkent/src/Layout/Integer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Integer() {}

Integer.MAX_VALUE = 2147483647;
Integer.MIN_VALUE = -2147483648;

module.exports = Integer;

/***/ }),

/***/ "./cose-bilkent/src/Layout/LEdge.js":
/*!******************************************!*\
  !*** ./cose-bilkent/src/Layout/LEdge.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LGraphObject = __webpack_require__(/*! ./LGraphObject */ "./cose-bilkent/src/Layout/LGraphObject.js");
var IGeometry = __webpack_require__(/*! ./IGeometry */ "./cose-bilkent/src/Layout/IGeometry.js");
var IMath = __webpack_require__(/*! ./IMath */ "./cose-bilkent/src/Layout/IMath.js");

function LEdge(source, target, vEdge) {
  LGraphObject.call(this, vEdge);

  this.isOverlapingSourceAndTarget = false;
  this.vGraphObject = vEdge;
  this.bendpoints = [];
  this.source = source;
  this.target = target;
}

LEdge.prototype = Object.create(LGraphObject.prototype);

for (var prop in LGraphObject) {
  LEdge[prop] = LGraphObject[prop];
}

LEdge.prototype.getSource = function () {
  return this.source;
};

LEdge.prototype.getTarget = function () {
  return this.target;
};

LEdge.prototype.isInterGraph = function () {
  return this.isInterGraph;
};

LEdge.prototype.getLength = function () {
  return this.length;
};

LEdge.prototype.isOverlapingSourceAndTarget = function () {
  return this.isOverlapingSourceAndTarget;
};

LEdge.prototype.getBendpoints = function () {
  return this.bendpoints;
};

LEdge.prototype.getLca = function () {
  return this.lca;
};

LEdge.prototype.getSourceInLca = function () {
  return this.sourceInLca;
};

LEdge.prototype.getTargetInLca = function () {
  return this.targetInLca;
};

LEdge.prototype.getOtherEnd = function (node) {
  if (this.source === node) {
    return this.target;
  } else if (this.target === node) {
    return this.source;
  } else {
    throw "Node is not incident with this edge";
  }
};

LEdge.prototype.getOtherEndInGraph = function (node, graph) {
  var otherEnd = this.getOtherEnd(node);
  var root = graph.getGraphManager().getRoot();

  while (true) {
    if (otherEnd.getOwner() == graph) {
      return otherEnd;
    }

    if (otherEnd.getOwner() == root) {
      break;
    }

    otherEnd = otherEnd.getOwner().getParent();
  }

  return null;
};

LEdge.prototype.updateLength = function () {
  var clipPointCoordinates = new Array(4);

  this.isOverlapingSourceAndTarget = IGeometry.getIntersection(this.target.getRect(), this.source.getRect(), clipPointCoordinates);

  if (!this.isOverlapingSourceAndTarget) {
    this.lengthX = clipPointCoordinates[0] - clipPointCoordinates[2];
    this.lengthY = clipPointCoordinates[1] - clipPointCoordinates[3];

    if (Math.abs(this.lengthX) < 1.0) {
      this.lengthX = IMath.sign(this.lengthX);
    }

    if (Math.abs(this.lengthY) < 1.0) {
      this.lengthY = IMath.sign(this.lengthY);
    }

    this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
  }
};

LEdge.prototype.updateLengthSimple = function () {
  this.lengthX = this.target.getCenterX() - this.source.getCenterX();
  this.lengthY = this.target.getCenterY() - this.source.getCenterY();

  if (Math.abs(this.lengthX) < 1.0) {
    this.lengthX = IMath.sign(this.lengthX);
  }

  if (Math.abs(this.lengthY) < 1.0) {
    this.lengthY = IMath.sign(this.lengthY);
  }

  this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
};

module.exports = LEdge;

/***/ }),

/***/ "./cose-bilkent/src/Layout/LGraph.js":
/*!*******************************************!*\
  !*** ./cose-bilkent/src/Layout/LGraph.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LGraphObject = __webpack_require__(/*! ./LGraphObject */ "./cose-bilkent/src/Layout/LGraphObject.js");
var Integer = __webpack_require__(/*! ./Integer */ "./cose-bilkent/src/Layout/Integer.js");
var LayoutConstants = __webpack_require__(/*! ./LayoutConstants */ "./cose-bilkent/src/Layout/LayoutConstants.js");
var LGraphManager = __webpack_require__(/*! ./LGraphManager */ "./cose-bilkent/src/Layout/LGraphManager.js");
var LNode = __webpack_require__(/*! ./LNode */ "./cose-bilkent/src/Layout/LNode.js");
var LEdge = __webpack_require__(/*! ./LEdge */ "./cose-bilkent/src/Layout/LEdge.js");
var HashSet = __webpack_require__(/*! ./HashSet */ "./cose-bilkent/src/Layout/HashSet.js");
var RectangleD = __webpack_require__(/*! ./RectangleD */ "./cose-bilkent/src/Layout/RectangleD.js");
var Point = __webpack_require__(/*! ./Point */ "./cose-bilkent/src/Layout/Point.js");
var LinkedList = __webpack_require__(/*! ./LinkedList */ "./cose-bilkent/src/Layout/LinkedList.js");

function LGraph(parent, obj2, vGraph) {
  LGraphObject.call(this, vGraph);
  this.estimatedSize = Integer.MIN_VALUE;
  this.margin = LayoutConstants.DEFAULT_GRAPH_MARGIN;
  this.edges = [];
  this.nodes = [];
  this.isConnected = false;
  this.parent = parent;

  if (obj2 != null && obj2 instanceof LGraphManager) {
    this.graphManager = obj2;
  } else if (obj2 != null && obj2 instanceof Layout) {
    this.graphManager = obj2.graphManager;
  }
}

LGraph.prototype = Object.create(LGraphObject.prototype);
for (var prop in LGraphObject) {
  LGraph[prop] = LGraphObject[prop];
}

LGraph.prototype.getNodes = function () {
  return this.nodes;
};

LGraph.prototype.getEdges = function () {
  return this.edges;
};

LGraph.prototype.getGraphManager = function () {
  return this.graphManager;
};

LGraph.prototype.getParent = function () {
  return this.parent;
};

LGraph.prototype.getLeft = function () {
  return this.left;
};

LGraph.prototype.getRight = function () {
  return this.right;
};

LGraph.prototype.getTop = function () {
  return this.top;
};

LGraph.prototype.getBottom = function () {
  return this.bottom;
};

LGraph.prototype.isConnected = function () {
  return this.isConnected;
};

LGraph.prototype.add = function (obj1, sourceNode, targetNode) {
  if (sourceNode == null && targetNode == null) {
    var newNode = obj1;
    if (this.graphManager == null) {
      throw "Graph has no graph mgr!";
    }
    if (this.getNodes().indexOf(newNode) > -1) {
      throw "Node already in graph!";
    }
    newNode.owner = this;
    this.getNodes().push(newNode);

    return newNode;
  } else {
    var newEdge = obj1;
    if (!(this.getNodes().indexOf(sourceNode) > -1 && this.getNodes().indexOf(targetNode) > -1)) {
      throw "Source or target not in graph!";
    }

    if (!(sourceNode.owner == targetNode.owner && sourceNode.owner == this)) {
      throw "Both owners must be this graph!";
    }

    if (sourceNode.owner != targetNode.owner) {
      return null;
    }

    // set source and target
    newEdge.source = sourceNode;
    newEdge.target = targetNode;

    // set as intra-graph edge
    newEdge.isInterGraph = false;

    // add to graph edge list
    this.getEdges().push(newEdge);

    // add to incidency lists
    sourceNode.edges.push(newEdge);

    if (targetNode != sourceNode) {
      targetNode.edges.push(newEdge);
    }

    return newEdge;
  }
};

LGraph.prototype.remove = function (obj) {
  var node = obj;
  if (obj instanceof LNode) {
    if (node == null) {
      throw "Node is null!";
    }
    if (!(node.owner != null && node.owner == this)) {
      throw "Owner graph is invalid!";
    }
    if (this.graphManager == null) {
      throw "Owner graph manager is invalid!";
    }
    // remove incident edges first (make a copy to do it safely)
    var edgesToBeRemoved = node.edges.slice();
    var edge;
    var s = edgesToBeRemoved.length;
    for (var i = 0; i < s; i++) {
      edge = edgesToBeRemoved[i];

      if (edge.isInterGraph) {
        this.graphManager.remove(edge);
      } else {
        edge.source.owner.remove(edge);
      }
    }

    // now the node itself
    var index = this.nodes.indexOf(node);
    if (index == -1) {
      throw "Node not in owner node list!";
    }

    this.nodes.splice(index, 1);
  } else if (obj instanceof LEdge) {
    var edge = obj;
    if (edge == null) {
      throw "Edge is null!";
    }
    if (!(edge.source != null && edge.target != null)) {
      throw "Source and/or target is null!";
    }
    if (!(edge.source.owner != null && edge.target.owner != null && edge.source.owner == this && edge.target.owner == this)) {
      throw "Source and/or target owner is invalid!";
    }

    var sourceIndex = edge.source.edges.indexOf(edge);
    var targetIndex = edge.target.edges.indexOf(edge);
    if (!(sourceIndex > -1 && targetIndex > -1)) {
      throw "Source and/or target doesn't know this edge!";
    }

    edge.source.edges.splice(sourceIndex, 1);

    if (edge.target != edge.source) {
      edge.target.edges.splice(targetIndex, 1);
    }

    var index = edge.source.owner.getEdges().indexOf(edge);
    if (index == -1) {
      throw "Not in owner's edge list!";
    }

    edge.source.owner.getEdges().splice(index, 1);
  }
};

LGraph.prototype.updateLeftTop = function () {
  var top = Integer.MAX_VALUE;
  var left = Integer.MAX_VALUE;
  var nodeTop;
  var nodeLeft;
  var margin;

  var nodes = this.getNodes();
  var s = nodes.length;

  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];
    nodeTop = lNode.getTop();
    nodeLeft = lNode.getLeft();

    if (top > nodeTop) {
      top = nodeTop;
    }

    if (left > nodeLeft) {
      left = nodeLeft;
    }
  }

  // Do we have any nodes in this graph?
  if (top == Integer.MAX_VALUE) {
    return null;
  }

  if (nodes[0].getParent().paddingLeft != undefined) {
    margin = nodes[0].getParent().paddingLeft;
  } else {
    margin = this.margin;
  }

  this.left = left - margin;
  this.top = top - margin;

  // Apply the margins and return the result
  return new Point(this.left, this.top);
};

LGraph.prototype.updateBounds = function (recursive) {
  // calculate bounds
  var left = Integer.MAX_VALUE;
  var right = -Integer.MAX_VALUE;
  var top = Integer.MAX_VALUE;
  var bottom = -Integer.MAX_VALUE;
  var nodeLeft;
  var nodeRight;
  var nodeTop;
  var nodeBottom;
  var margin;

  var nodes = this.nodes;
  var s = nodes.length;
  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];

    if (recursive && lNode.child != null) {
      lNode.updateBounds();
    }
    nodeLeft = lNode.getLeft();
    nodeRight = lNode.getRight();
    nodeTop = lNode.getTop();
    nodeBottom = lNode.getBottom();

    if (left > nodeLeft) {
      left = nodeLeft;
    }

    if (right < nodeRight) {
      right = nodeRight;
    }

    if (top > nodeTop) {
      top = nodeTop;
    }

    if (bottom < nodeBottom) {
      bottom = nodeBottom;
    }
  }

  var boundingRect = new RectangleD(left, top, right - left, bottom - top);
  if (left == Integer.MAX_VALUE) {
    this.left = this.parent.getLeft();
    this.right = this.parent.getRight();
    this.top = this.parent.getTop();
    this.bottom = this.parent.getBottom();
  }

  if (nodes[0].getParent().paddingLeft != undefined) {
    margin = nodes[0].getParent().paddingLeft;
  } else {
    margin = this.margin;
  }

  this.left = boundingRect.x - margin;
  this.right = boundingRect.x + boundingRect.width + margin;
  this.top = boundingRect.y - margin;
  this.bottom = boundingRect.y + boundingRect.height + margin;
};

LGraph.calculateBounds = function (nodes) {
  var left = Integer.MAX_VALUE;
  var right = -Integer.MAX_VALUE;
  var top = Integer.MAX_VALUE;
  var bottom = -Integer.MAX_VALUE;
  var nodeLeft;
  var nodeRight;
  var nodeTop;
  var nodeBottom;

  var s = nodes.length;

  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];
    nodeLeft = lNode.getLeft();
    nodeRight = lNode.getRight();
    nodeTop = lNode.getTop();
    nodeBottom = lNode.getBottom();

    if (left > nodeLeft) {
      left = nodeLeft;
    }

    if (right < nodeRight) {
      right = nodeRight;
    }

    if (top > nodeTop) {
      top = nodeTop;
    }

    if (bottom < nodeBottom) {
      bottom = nodeBottom;
    }
  }

  var boundingRect = new RectangleD(left, top, right - left, bottom - top);

  return boundingRect;
};

LGraph.prototype.getInclusionTreeDepth = function () {
  if (this == this.graphManager.getRoot()) {
    return 1;
  } else {
    return this.parent.getInclusionTreeDepth();
  }
};

LGraph.prototype.getEstimatedSize = function () {
  if (this.estimatedSize == Integer.MIN_VALUE) {
    throw "assert failed";
  }
  return this.estimatedSize;
};

LGraph.prototype.calcEstimatedSize = function () {
  var size = 0;
  var nodes = this.nodes;
  var s = nodes.length;

  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];
    size += lNode.calcEstimatedSize();
  }

  if (size == 0) {
    this.estimatedSize = LayoutConstants.EMPTY_COMPOUND_NODE_SIZE;
  } else {
    this.estimatedSize = size / Math.sqrt(this.nodes.length);
  }

  return this.estimatedSize;
};

LGraph.prototype.updateConnected = function () {
  var self = this;
  if (this.nodes.length == 0) {
    this.isConnected = true;
    return;
  }

  var toBeVisited = new LinkedList();
  var visited = new HashSet();
  var currentNode = this.nodes[0];
  var neighborEdges;
  var currentNeighbor;
  var childrenOfNode = currentNode.withChildren();
  childrenOfNode.forEach(function (node) {
    toBeVisited.push(node);
  });

  while (toBeVisited.length !== 0) {
    currentNode = toBeVisited.shift();
    visited.add(currentNode);

    // Traverse all neighbors of this node
    neighborEdges = currentNode.getEdges();
    var s = neighborEdges.length;
    for (var i = 0; i < s; i++) {
      var neighborEdge = neighborEdges[i];
      currentNeighbor = neighborEdge.getOtherEndInGraph(currentNode, this);

      // Add unvisited neighbors to the list to visit
      if (currentNeighbor != null && !visited.contains(currentNeighbor)) {
        var childrenOfNeighbor = currentNeighbor.withChildren();

        childrenOfNeighbor.forEach(function (node) {
          toBeVisited.push(node);
        });
      }
    }
  }

  this.isConnected = false;

  if (visited.size() >= this.nodes.length) {
    var noOfVisitedInThisGraph = 0;

    var s = visited.size();
    Object.keys(visited.set).forEach(function (visitedId) {
      var visitedNode = visited.set[visitedId];
      if (visitedNode.owner == self) {
        noOfVisitedInThisGraph++;
      }
    });

    if (noOfVisitedInThisGraph == this.nodes.length) {
      this.isConnected = true;
    }
  }
};

module.exports = LGraph;

/***/ }),

/***/ "./cose-bilkent/src/Layout/LGraphManager.js":
/*!**************************************************!*\
  !*** ./cose-bilkent/src/Layout/LGraphManager.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LGraph;
var LEdge = __webpack_require__(/*! ./LEdge */ "./cose-bilkent/src/Layout/LEdge.js");

function LGraphManager(layout) {
  LGraph = __webpack_require__(/*! ./LGraph */ "./cose-bilkent/src/Layout/LGraph.js"); // It may be better to initilize this out of this function but it gives an error (Right-hand side of 'instanceof' is not callable) now.
  this.layout = layout;

  this.graphs = [];
  this.edges = [];
}

LGraphManager.prototype.addRoot = function () {
  var ngraph = this.layout.newGraph();
  var nnode = this.layout.newNode(null);
  var root = this.add(ngraph, nnode);
  this.setRootGraph(root);
  return this.rootGraph;
};

LGraphManager.prototype.add = function (newGraph, parentNode, newEdge, sourceNode, targetNode) {
  //there are just 2 parameters are passed then it adds an LGraph else it adds an LEdge
  if (newEdge == null && sourceNode == null && targetNode == null) {
    if (newGraph == null) {
      throw "Graph is null!";
    }
    if (parentNode == null) {
      throw "Parent node is null!";
    }
    if (this.graphs.indexOf(newGraph) > -1) {
      throw "Graph already in this graph mgr!";
    }

    this.graphs.push(newGraph);

    if (newGraph.parent != null) {
      throw "Already has a parent!";
    }
    if (parentNode.child != null) {
      throw "Already has a child!";
    }

    newGraph.parent = parentNode;
    parentNode.child = newGraph;

    return newGraph;
  } else {
    //change the order of the parameters
    targetNode = newEdge;
    sourceNode = parentNode;
    newEdge = newGraph;
    var sourceGraph = sourceNode.getOwner();
    var targetGraph = targetNode.getOwner();

    if (!(sourceGraph != null && sourceGraph.getGraphManager() == this)) {
      throw "Source not in this graph mgr!";
    }
    if (!(targetGraph != null && targetGraph.getGraphManager() == this)) {
      throw "Target not in this graph mgr!";
    }

    if (sourceGraph == targetGraph) {
      newEdge.isInterGraph = false;
      return sourceGraph.add(newEdge, sourceNode, targetNode);
    } else {
      newEdge.isInterGraph = true;

      // set source and target
      newEdge.source = sourceNode;
      newEdge.target = targetNode;

      // add edge to inter-graph edge list
      if (this.edges.indexOf(newEdge) > -1) {
        throw "Edge already in inter-graph edge list!";
      }

      this.edges.push(newEdge);

      // add edge to source and target incidency lists
      if (!(newEdge.source != null && newEdge.target != null)) {
        throw "Edge source and/or target is null!";
      }

      if (!(newEdge.source.edges.indexOf(newEdge) == -1 && newEdge.target.edges.indexOf(newEdge) == -1)) {
        throw "Edge already in source and/or target incidency list!";
      }

      newEdge.source.edges.push(newEdge);
      newEdge.target.edges.push(newEdge);

      return newEdge;
    }
  }
};

LGraphManager.prototype.remove = function (lObj) {
  if (lObj instanceof LGraph) {
    var graph = lObj;
    if (graph.getGraphManager() != this) {
      throw "Graph not in this graph mgr";
    }
    if (!(graph == this.rootGraph || graph.parent != null && graph.parent.graphManager == this)) {
      throw "Invalid parent node!";
    }

    // first the edges (make a copy to do it safely)
    var edgesToBeRemoved = [];

    edgesToBeRemoved = edgesToBeRemoved.concat(graph.getEdges());

    var edge;
    var s = edgesToBeRemoved.length;
    for (var i = 0; i < s; i++) {
      edge = edgesToBeRemoved[i];
      graph.remove(edge);
    }

    // then the nodes (make a copy to do it safely)
    var nodesToBeRemoved = [];

    nodesToBeRemoved = nodesToBeRemoved.concat(graph.getNodes());

    var node;
    s = nodesToBeRemoved.length;
    for (var i = 0; i < s; i++) {
      node = nodesToBeRemoved[i];
      graph.remove(node);
    }

    // check if graph is the root
    if (graph == this.rootGraph) {
      this.setRootGraph(null);
    }

    // now remove the graph itself
    var index = this.graphs.indexOf(graph);
    this.graphs.splice(index, 1);

    // also reset the parent of the graph
    graph.parent = null;
  } else if (lObj instanceof LEdge) {
    edge = lObj;
    if (edge == null) {
      throw "Edge is null!";
    }
    if (!edge.isInterGraph) {
      throw "Not an inter-graph edge!";
    }
    if (!(edge.source != null && edge.target != null)) {
      throw "Source and/or target is null!";
    }

    // remove edge from source and target nodes' incidency lists

    if (!(edge.source.edges.indexOf(edge) != -1 && edge.target.edges.indexOf(edge) != -1)) {
      throw "Source and/or target doesn't know this edge!";
    }

    var index = edge.source.edges.indexOf(edge);
    edge.source.edges.splice(index, 1);
    index = edge.target.edges.indexOf(edge);
    edge.target.edges.splice(index, 1);

    // remove edge from owner graph manager's inter-graph edge list

    if (!(edge.source.owner != null && edge.source.owner.getGraphManager() != null)) {
      throw "Edge owner graph or owner graph manager is null!";
    }
    if (edge.source.owner.getGraphManager().edges.indexOf(edge) == -1) {
      throw "Not in owner graph manager's edge list!";
    }

    var index = edge.source.owner.getGraphManager().edges.indexOf(edge);
    edge.source.owner.getGraphManager().edges.splice(index, 1);
  }
};

LGraphManager.prototype.updateBounds = function () {
  this.rootGraph.updateBounds(true);
};

LGraphManager.prototype.getGraphs = function () {
  return this.graphs;
};

LGraphManager.prototype.getAllNodes = function () {
  if (this.allNodes == null) {
    var nodeList = [];
    var graphs = this.getGraphs();
    var s = graphs.length;
    for (var i = 0; i < s; i++) {
      nodeList = nodeList.concat(graphs[i].getNodes());
    }
    this.allNodes = nodeList;
  }
  return this.allNodes;
};

LGraphManager.prototype.resetAllNodes = function () {
  this.allNodes = null;
};

LGraphManager.prototype.resetAllEdges = function () {
  this.allEdges = null;
};

LGraphManager.prototype.resetAllNodesToApplyGravitation = function () {
  this.allNodesToApplyGravitation = null;
};

LGraphManager.prototype.getAllEdges = function () {
  if (this.allEdges == null) {
    var edgeList = [];
    var graphs = this.getGraphs();
    var s = graphs.length;
    for (var i = 0; i < graphs.length; i++) {
      edgeList = edgeList.concat(graphs[i].getEdges());
    }

    edgeList = edgeList.concat(this.edges);

    this.allEdges = edgeList;
  }
  return this.allEdges;
};

LGraphManager.prototype.getAllNodesToApplyGravitation = function () {
  return this.allNodesToApplyGravitation;
};

LGraphManager.prototype.setAllNodesToApplyGravitation = function (nodeList) {
  if (this.allNodesToApplyGravitation != null) {
    throw "assert failed";
  }

  this.allNodesToApplyGravitation = nodeList;
};

LGraphManager.prototype.getRoot = function () {
  return this.rootGraph;
};

LGraphManager.prototype.setRootGraph = function (graph) {
  if (graph.getGraphManager() != this) {
    throw "Root not in this graph mgr!";
  }

  this.rootGraph = graph;
  // root graph must have a root node associated with it for convenience
  if (graph.parent == null) {
    graph.parent = this.layout.newNode("Root node");
  }
};

LGraphManager.prototype.getLayout = function () {
  return this.layout;
};

LGraphManager.prototype.isOneAncestorOfOther = function (firstNode, secondNode) {
  if (!(firstNode != null && secondNode != null)) {
    throw "assert failed";
  }

  if (firstNode == secondNode) {
    return true;
  }
  // Is second node an ancestor of the first one?
  var ownerGraph = firstNode.getOwner();
  var parentNode;

  do {
    parentNode = ownerGraph.getParent();

    if (parentNode == null) {
      break;
    }

    if (parentNode == secondNode) {
      return true;
    }

    ownerGraph = parentNode.getOwner();
    if (ownerGraph == null) {
      break;
    }
  } while (true);
  // Is first node an ancestor of the second one?
  ownerGraph = secondNode.getOwner();

  do {
    parentNode = ownerGraph.getParent();

    if (parentNode == null) {
      break;
    }

    if (parentNode == firstNode) {
      return true;
    }

    ownerGraph = parentNode.getOwner();
    if (ownerGraph == null) {
      break;
    }
  } while (true);

  return false;
};

LGraphManager.prototype.calcLowestCommonAncestors = function () {
  var edge;
  var sourceNode;
  var targetNode;
  var sourceAncestorGraph;
  var targetAncestorGraph;

  var edges = this.getAllEdges();
  var s = edges.length;
  for (var i = 0; i < s; i++) {
    edge = edges[i];

    sourceNode = edge.source;
    targetNode = edge.target;
    edge.lca = null;
    edge.sourceInLca = sourceNode;
    edge.targetInLca = targetNode;

    if (sourceNode == targetNode) {
      edge.lca = sourceNode.getOwner();
      continue;
    }

    sourceAncestorGraph = sourceNode.getOwner();

    while (edge.lca == null) {
      edge.targetInLca = targetNode;
      targetAncestorGraph = targetNode.getOwner();

      while (edge.lca == null) {
        if (targetAncestorGraph == sourceAncestorGraph) {
          edge.lca = targetAncestorGraph;
          break;
        }

        if (targetAncestorGraph == this.rootGraph) {
          break;
        }

        if (edge.lca != null) {
          throw "assert failed";
        }
        edge.targetInLca = targetAncestorGraph.getParent();
        targetAncestorGraph = edge.targetInLca.getOwner();
      }

      if (sourceAncestorGraph == this.rootGraph) {
        break;
      }

      if (edge.lca == null) {
        edge.sourceInLca = sourceAncestorGraph.getParent();
        sourceAncestorGraph = edge.sourceInLca.getOwner();
      }
    }

    if (edge.lca == null) {
      throw "assert failed";
    }
  }
};

LGraphManager.prototype.calcLowestCommonAncestor = function (firstNode, secondNode) {
  if (firstNode == secondNode) {
    return firstNode.getOwner();
  }
  var firstOwnerGraph = firstNode.getOwner();

  do {
    if (firstOwnerGraph == null) {
      break;
    }
    var secondOwnerGraph = secondNode.getOwner();

    do {
      if (secondOwnerGraph == null) {
        break;
      }

      if (secondOwnerGraph == firstOwnerGraph) {
        return secondOwnerGraph;
      }
      secondOwnerGraph = secondOwnerGraph.getParent().getOwner();
    } while (true);

    firstOwnerGraph = firstOwnerGraph.getParent().getOwner();
  } while (true);

  return firstOwnerGraph;
};

LGraphManager.prototype.calcInclusionTreeDepths = function (graph, depth) {
  if (graph == null && depth == null) {
    graph = this.rootGraph;
    depth = 1;
  }
  var node;

  var nodes = graph.getNodes();
  var s = nodes.length;
  for (var i = 0; i < s; i++) {
    node = nodes[i];
    node.inclusionTreeDepth = depth;

    if (node.child != null) {
      this.calcInclusionTreeDepths(node.child, depth + 1);
    }
  }
};

LGraphManager.prototype.includesInvalidEdge = function () {
  var edge;

  var s = this.edges.length;
  for (var i = 0; i < s; i++) {
    edge = this.edges[i];

    if (this.isOneAncestorOfOther(edge.source, edge.target)) {
      return true;
    }
  }
  return false;
};

module.exports = LGraphManager;

/***/ }),

/***/ "./cose-bilkent/src/Layout/LGraphObject.js":
/*!*************************************************!*\
  !*** ./cose-bilkent/src/Layout/LGraphObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function LGraphObject(vGraphObject) {
  this.vGraphObject = vGraphObject;
}

module.exports = LGraphObject;

/***/ }),

/***/ "./cose-bilkent/src/Layout/LNode.js":
/*!******************************************!*\
  !*** ./cose-bilkent/src/Layout/LNode.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LGraphObject = __webpack_require__(/*! ./LGraphObject */ "./cose-bilkent/src/Layout/LGraphObject.js");
var Integer = __webpack_require__(/*! ./Integer */ "./cose-bilkent/src/Layout/Integer.js");
var RectangleD = __webpack_require__(/*! ./RectangleD */ "./cose-bilkent/src/Layout/RectangleD.js");
var LayoutConstants = __webpack_require__(/*! ./LayoutConstants */ "./cose-bilkent/src/Layout/LayoutConstants.js");
var RandomSeed = __webpack_require__(/*! ./RandomSeed */ "./cose-bilkent/src/Layout/RandomSeed.js");
var PointD = __webpack_require__(/*! ./PointD */ "./cose-bilkent/src/Layout/PointD.js");
var HashSet = __webpack_require__(/*! ./HashSet */ "./cose-bilkent/src/Layout/HashSet.js");

function LNode(gm, loc, size, vNode) {
  //Alternative constructor 1 : LNode(LGraphManager gm, Point loc, Dimension size, Object vNode)
  if (size == null && vNode == null) {
    vNode = loc;
  }

  LGraphObject.call(this, vNode);

  //Alternative constructor 2 : LNode(Layout layout, Object vNode)
  if (gm.graphManager != null) gm = gm.graphManager;

  this.estimatedSize = Integer.MIN_VALUE;
  this.inclusionTreeDepth = Integer.MAX_VALUE;
  this.vGraphObject = vNode;
  this.edges = [];
  this.graphManager = gm;

  if (size != null && loc != null) this.rect = new RectangleD(loc.x, loc.y, size.width, size.height);else this.rect = new RectangleD();
}

LNode.prototype = Object.create(LGraphObject.prototype);
for (var prop in LGraphObject) {
  LNode[prop] = LGraphObject[prop];
}

LNode.prototype.getEdges = function () {
  return this.edges;
};

LNode.prototype.getChild = function () {
  return this.child;
};

LNode.prototype.getOwner = function () {
  //  if (this.owner != null) {
  //    if (!(this.owner == null || this.owner.getNodes().indexOf(this) > -1)) {
  //      throw "assert failed";
  //    }
  //  }

  return this.owner;
};

LNode.prototype.getWidth = function () {
  return this.rect.width;
};

LNode.prototype.setWidth = function (width) {
  this.rect.width = width;
};

LNode.prototype.getHeight = function () {
  return this.rect.height;
};

LNode.prototype.setHeight = function (height) {
  this.rect.height = height;
};

LNode.prototype.getCenterX = function () {
  return this.rect.x + this.rect.width / 2;
};

LNode.prototype.getCenterY = function () {
  return this.rect.y + this.rect.height / 2;
};

LNode.prototype.getCenter = function () {
  return new PointD(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
};

LNode.prototype.getLocation = function () {
  return new PointD(this.rect.x, this.rect.y);
};

LNode.prototype.getRect = function () {
  return this.rect;
};

LNode.prototype.getDiagonal = function () {
  return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
};

LNode.prototype.setRect = function (upperLeft, dimension) {
  this.rect.x = upperLeft.x;
  this.rect.y = upperLeft.y;
  this.rect.width = dimension.width;
  this.rect.height = dimension.height;
};

LNode.prototype.setCenter = function (cx, cy) {
  this.rect.x = cx - this.rect.width / 2;
  this.rect.y = cy - this.rect.height / 2;
};

LNode.prototype.setLocation = function (x, y) {
  this.rect.x = x;
  this.rect.y = y;
};

LNode.prototype.moveBy = function (dx, dy) {
  this.rect.x += dx;
  this.rect.y += dy;
};

LNode.prototype.getEdgeListToNode = function (to) {
  var edgeList = [];
  var edge;
  var self = this;

  self.edges.forEach(function (edge) {

    if (edge.target == to) {
      if (edge.source != self) throw "Incorrect edge source!";

      edgeList.push(edge);
    }
  });

  return edgeList;
};

LNode.prototype.getEdgesBetween = function (other) {
  var edgeList = [];
  var edge;

  var self = this;
  self.edges.forEach(function (edge) {

    if (!(edge.source == self || edge.target == self)) throw "Incorrect edge source and/or target";

    if (edge.target == other || edge.source == other) {
      edgeList.push(edge);
    }
  });

  return edgeList;
};

LNode.prototype.getNeighborsList = function () {
  var neighbors = new HashSet();
  var edge;

  var self = this;
  self.edges.forEach(function (edge) {

    if (edge.source == self) {
      neighbors.add(edge.target);
    } else {
      if (edge.target != self) {
        throw "Incorrect incidency!";
      }

      neighbors.add(edge.source);
    }
  });

  return neighbors;
};

LNode.prototype.withChildren = function () {
  var withNeighborsList = new Set();
  var childNode;
  var children;

  withNeighborsList.add(this);

  if (this.child != null) {
    var nodes = this.child.getNodes();
    for (var i = 0; i < nodes.length; i++) {
      childNode = nodes[i];
      children = childNode.withChildren();
      children.forEach(function (node) {
        withNeighborsList.add(node);
      });
    }
  }

  return withNeighborsList;
};

LNode.prototype.getNoOfChildren = function () {
  var noOfChildren = 0;
  var childNode;

  if (this.child == null) {
    noOfChildren = 1;
  } else {
    var nodes = this.child.getNodes();
    for (var i = 0; i < nodes.length; i++) {
      childNode = nodes[i];

      noOfChildren += childNode.getNoOfChildren();
    }
  }

  if (noOfChildren == 0) {
    noOfChildren = 1;
  }
  return noOfChildren;
};

LNode.prototype.getEstimatedSize = function () {
  if (this.estimatedSize == Integer.MIN_VALUE) {
    throw "assert failed";
  }
  return this.estimatedSize;
};

LNode.prototype.calcEstimatedSize = function () {
  if (this.child == null) {
    return this.estimatedSize = (this.rect.width + this.rect.height) / 2;
  } else {
    this.estimatedSize = this.child.calcEstimatedSize();
    this.rect.width = this.estimatedSize;
    this.rect.height = this.estimatedSize;

    return this.estimatedSize;
  }
};

LNode.prototype.scatter = function () {
  var randomCenterX;
  var randomCenterY;

  var minX = -LayoutConstants.INITIAL_WORLD_BOUNDARY;
  var maxX = LayoutConstants.INITIAL_WORLD_BOUNDARY;
  randomCenterX = LayoutConstants.WORLD_CENTER_X + RandomSeed.nextDouble() * (maxX - minX) + minX;

  var minY = -LayoutConstants.INITIAL_WORLD_BOUNDARY;
  var maxY = LayoutConstants.INITIAL_WORLD_BOUNDARY;
  randomCenterY = LayoutConstants.WORLD_CENTER_Y + RandomSeed.nextDouble() * (maxY - minY) + minY;

  this.rect.x = randomCenterX;
  this.rect.y = randomCenterY;
};

LNode.prototype.updateBounds = function () {
  if (this.getChild() == null) {
    throw "assert failed";
  }
  if (this.getChild().getNodes().length != 0) {
    // wrap the children nodes by re-arranging the boundaries
    var childGraph = this.getChild();
    childGraph.updateBounds(true);

    this.rect.x = childGraph.getLeft();
    this.rect.y = childGraph.getTop();

    this.setWidth(childGraph.getRight() - childGraph.getLeft());
    this.setHeight(childGraph.getBottom() - childGraph.getTop());

    // Update compound bounds considering its label properties    
    if (LayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS) {

      var width = childGraph.getRight() - childGraph.getLeft();
      var height = childGraph.getBottom() - childGraph.getTop();

      if (this.labelWidth > width) {
        this.rect.x -= (this.labelWidth - width) / 2;
        this.setWidth(this.labelWidth);
      }

      if (this.labelHeight > height) {
        if (this.labelPos == "center") {
          this.rect.y -= (this.labelHeight - height) / 2;
        } else if (this.labelPos == "top") {
          this.rect.y -= this.labelHeight - height;
        }
        this.setHeight(this.labelHeight);
      }
    }
  }
};

LNode.prototype.getInclusionTreeDepth = function () {
  if (this.inclusionTreeDepth == Integer.MAX_VALUE) {
    throw "assert failed";
  }
  return this.inclusionTreeDepth;
};

LNode.prototype.transform = function (trans) {
  var left = this.rect.x;

  if (left > LayoutConstants.WORLD_BOUNDARY) {
    left = LayoutConstants.WORLD_BOUNDARY;
  } else if (left < -LayoutConstants.WORLD_BOUNDARY) {
    left = -LayoutConstants.WORLD_BOUNDARY;
  }

  var top = this.rect.y;

  if (top > LayoutConstants.WORLD_BOUNDARY) {
    top = LayoutConstants.WORLD_BOUNDARY;
  } else if (top < -LayoutConstants.WORLD_BOUNDARY) {
    top = -LayoutConstants.WORLD_BOUNDARY;
  }

  var leftTop = new PointD(left, top);
  var vLeftTop = trans.inverseTransformPoint(leftTop);

  this.setLocation(vLeftTop.x, vLeftTop.y);
};

LNode.prototype.getLeft = function () {
  return this.rect.x;
};

LNode.prototype.getRight = function () {
  return this.rect.x + this.rect.width;
};

LNode.prototype.getTop = function () {
  return this.rect.y;
};

LNode.prototype.getBottom = function () {
  return this.rect.y + this.rect.height;
};

LNode.prototype.getParent = function () {
  if (this.owner == null) {
    return null;
  }

  return this.owner.getParent();
};

module.exports = LNode;

/***/ }),

/***/ "./cose-bilkent/src/Layout/Layout.js":
/*!*******************************************!*\
  !*** ./cose-bilkent/src/Layout/Layout.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LayoutConstants = __webpack_require__(/*! ./LayoutConstants */ "./cose-bilkent/src/Layout/LayoutConstants.js");
var HashMap = __webpack_require__(/*! ./HashMap */ "./cose-bilkent/src/Layout/HashMap.js");
var LGraphManager = __webpack_require__(/*! ./LGraphManager */ "./cose-bilkent/src/Layout/LGraphManager.js");
var LNode = __webpack_require__(/*! ./LNode */ "./cose-bilkent/src/Layout/LNode.js");
var LEdge = __webpack_require__(/*! ./LEdge */ "./cose-bilkent/src/Layout/LEdge.js");
var LGraph = __webpack_require__(/*! ./LGraph */ "./cose-bilkent/src/Layout/LGraph.js");
var PointD = __webpack_require__(/*! ./PointD */ "./cose-bilkent/src/Layout/PointD.js");
var Transform = __webpack_require__(/*! ./Transform */ "./cose-bilkent/src/Layout/Transform.js");
var Emitter = __webpack_require__(/*! ./Emitter */ "./cose-bilkent/src/Layout/Emitter.js");
var HashSet = __webpack_require__(/*! ./HashSet */ "./cose-bilkent/src/Layout/HashSet.js");

function Layout(isRemoteUse) {
  Emitter.call(this);

  //Layout Quality: 0:proof, 1:default, 2:draft
  this.layoutQuality = LayoutConstants.DEFAULT_QUALITY;
  //Whether layout should create bendpoints as needed or not
  this.createBendsAsNeeded = LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED;
  //Whether layout should be incremental or not
  this.incremental = LayoutConstants.DEFAULT_INCREMENTAL;
  //Whether we animate from before to after layout node positions
  this.animationOnLayout = LayoutConstants.DEFAULT_ANIMATION_ON_LAYOUT;
  //Whether we animate the layout process or not
  this.animationDuringLayout = LayoutConstants.DEFAULT_ANIMATION_DURING_LAYOUT;
  //Number iterations that should be done between two successive animations
  this.animationPeriod = LayoutConstants.DEFAULT_ANIMATION_PERIOD;
  /**
   * Whether or not leaf nodes (non-compound nodes) are of uniform sizes. When
   * they are, both spring and repulsion forces between two leaf nodes can be
   * calculated without the expensive clipping point calculations, resulting
   * in major speed-up.
   */
  this.uniformLeafNodeSizes = LayoutConstants.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
  /**
   * This is used for creation of bendpoints by using dummy nodes and edges.
   * Maps an LEdge to its dummy bendpoint path.
   */
  this.edgeToDummyNodes = new HashMap();
  this.graphManager = new LGraphManager(this);
  this.isLayoutFinished = false;
  this.isSubLayout = false;
  this.isRemoteUse = false;

  if (isRemoteUse != null) {
    this.isRemoteUse = isRemoteUse;
  }
}

Layout.RANDOM_SEED = 1;

Layout.prototype = Object.create(Emitter.prototype);

Layout.prototype.getGraphManager = function () {
  return this.graphManager;
};

Layout.prototype.getAllNodes = function () {
  return this.graphManager.getAllNodes();
};

Layout.prototype.getAllEdges = function () {
  return this.graphManager.getAllEdges();
};

Layout.prototype.getAllNodesToApplyGravitation = function () {
  return this.graphManager.getAllNodesToApplyGravitation();
};

Layout.prototype.newGraphManager = function () {
  var gm = new LGraphManager(this);
  this.graphManager = gm;
  return gm;
};

Layout.prototype.newGraph = function (vGraph) {
  return new LGraph(null, this.graphManager, vGraph);
};

Layout.prototype.newNode = function (vNode) {
  return new LNode(this.graphManager, vNode);
};

Layout.prototype.newEdge = function (vEdge) {
  return new LEdge(null, null, vEdge);
};

Layout.prototype.checkLayoutSuccess = function () {
  return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
};

Layout.prototype.runLayout = function () {
  this.isLayoutFinished = false;

  if (this.tilingPreLayout) {
    this.tilingPreLayout();
  }

  this.initParameters();
  var isLayoutSuccessfull;

  if (this.checkLayoutSuccess()) {
    isLayoutSuccessfull = false;
  } else {
    isLayoutSuccessfull = this.layout();
  }

  if (LayoutConstants.ANIMATE === 'during') {
    // If this is a 'during' layout animation. Layout is not finished yet. 
    // We need to perform these in index.js when layout is really finished.
    return false;
  }

  if (isLayoutSuccessfull) {
    if (!this.isSubLayout) {
      this.doPostLayout();
    }
  }

  if (this.tilingPostLayout) {
    this.tilingPostLayout();
  }

  this.isLayoutFinished = true;

  return isLayoutSuccessfull;
};

/**
 * This method performs the operations required after layout.
 */
Layout.prototype.doPostLayout = function () {
  //assert !isSubLayout : "Should not be called on sub-layout!";
  // Propagate geometric changes to v-level objects
  if (!this.incremental) {
    this.transform();
  }
  this.update();
};

/**
 * This method updates the geometry of the target graph according to
 * calculated layout.
 */
Layout.prototype.update2 = function () {
  // update bend points
  if (this.createBendsAsNeeded) {
    this.createBendpointsFromDummyNodes();

    // reset all edges, since the topology has changed
    this.graphManager.resetAllEdges();
  }

  // perform edge, node and root updates if layout is not called
  // remotely
  if (!this.isRemoteUse) {
    // update all edges
    var edge;
    var allEdges = this.graphManager.getAllEdges();
    for (var i = 0; i < allEdges.length; i++) {
      edge = allEdges[i];
      //      this.update(edge);
    }

    // recursively update nodes
    var node;
    var nodes = this.graphManager.getRoot().getNodes();
    for (var i = 0; i < nodes.length; i++) {
      node = nodes[i];
      //      this.update(node);
    }

    // update root graph
    this.update(this.graphManager.getRoot());
  }
};

Layout.prototype.update = function (obj) {
  if (obj == null) {
    this.update2();
  } else if (obj instanceof LNode) {
    var node = obj;
    if (node.getChild() != null) {
      // since node is compound, recursively update child nodes
      var nodes = node.getChild().getNodes();
      for (var i = 0; i < nodes.length; i++) {
        update(nodes[i]);
      }
    }

    // if the l-level node is associated with a v-level graph object,
    // then it is assumed that the v-level node implements the
    // interface Updatable.
    if (node.vGraphObject != null) {
      // cast to Updatable without any type check
      var vNode = node.vGraphObject;

      // call the update method of the interface
      vNode.update(node);
    }
  } else if (obj instanceof LEdge) {
    var edge = obj;
    // if the l-level edge is associated with a v-level graph object,
    // then it is assumed that the v-level edge implements the
    // interface Updatable.

    if (edge.vGraphObject != null) {
      // cast to Updatable without any type check
      var vEdge = edge.vGraphObject;

      // call the update method of the interface
      vEdge.update(edge);
    }
  } else if (obj instanceof LGraph) {
    var graph = obj;
    // if the l-level graph is associated with a v-level graph object,
    // then it is assumed that the v-level object implements the
    // interface Updatable.

    if (graph.vGraphObject != null) {
      // cast to Updatable without any type check
      var vGraph = graph.vGraphObject;

      // call the update method of the interface
      vGraph.update(graph);
    }
  }
};

/**
 * This method is used to set all layout parameters to default values
 * determined at compile time.
 */
Layout.prototype.initParameters = function () {
  if (!this.isSubLayout) {
    this.layoutQuality = LayoutConstants.DEFAULT_QUALITY;
    this.animationDuringLayout = LayoutConstants.DEFAULT_ANIMATION_DURING_LAYOUT;
    this.animationPeriod = LayoutConstants.DEFAULT_ANIMATION_PERIOD;
    this.animationOnLayout = LayoutConstants.DEFAULT_ANIMATION_ON_LAYOUT;
    this.incremental = LayoutConstants.DEFAULT_INCREMENTAL;
    this.createBendsAsNeeded = LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED;
    this.uniformLeafNodeSizes = LayoutConstants.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
  }

  if (this.animationDuringLayout) {
    this.animationOnLayout = false;
  }
};

Layout.prototype.transform = function (newLeftTop) {
  if (newLeftTop == undefined) {
    this.transform(new PointD(0, 0));
  } else {
    // create a transformation object (from Eclipse to layout). When an
    // inverse transform is applied, we get upper-left coordinate of the
    // drawing or the root graph at given input coordinate (some margins
    // already included in calculation of left-top).

    var trans = new Transform();
    var leftTop = this.graphManager.getRoot().updateLeftTop();

    if (leftTop != null) {
      trans.setWorldOrgX(newLeftTop.x);
      trans.setWorldOrgY(newLeftTop.y);

      trans.setDeviceOrgX(leftTop.x);
      trans.setDeviceOrgY(leftTop.y);

      var nodes = this.getAllNodes();
      var node;

      for (var i = 0; i < nodes.length; i++) {
        node = nodes[i];
        node.transform(trans);
      }
    }
  }
};

Layout.prototype.positionNodesRandomly = function (graph) {

  if (graph == undefined) {
    //assert !this.incremental;
    this.positionNodesRandomly(this.getGraphManager().getRoot());
    this.getGraphManager().getRoot().updateBounds(true);
  } else {
    var lNode;
    var childGraph;

    var nodes = graph.getNodes();
    for (var i = 0; i < nodes.length; i++) {
      lNode = nodes[i];
      childGraph = lNode.getChild();

      if (childGraph == null) {
        lNode.scatter();
      } else if (childGraph.getNodes().length == 0) {
        lNode.scatter();
      } else {
        this.positionNodesRandomly(childGraph);
        lNode.updateBounds();
      }
    }
  }
};

/**
 * This method returns a list of trees where each tree is represented as a
 * list of l-nodes. The method returns a list of size 0 when:
 * - The graph is not flat or
 * - One of the component(s) of the graph is not a tree.
 */
Layout.prototype.getFlatForest = function () {
  var flatForest = [];
  var isForest = true;

  // Quick reference for all nodes in the graph manager associated with
  // this layout. The list should not be changed.
  var allNodes = this.graphManager.getRoot().getNodes();

  // First be sure that the graph is flat
  var isFlat = true;

  for (var i = 0; i < allNodes.length; i++) {
    if (allNodes[i].getChild() != null) {
      isFlat = false;
    }
  }

  // Return empty forest if the graph is not flat.
  if (!isFlat) {
    return flatForest;
  }

  // Run BFS for each component of the graph.

  var visited = new HashSet();
  var toBeVisited = [];
  var parents = new HashMap();
  var unProcessedNodes = [];

  unProcessedNodes = unProcessedNodes.concat(allNodes);

  // Each iteration of this loop finds a component of the graph and
  // decides whether it is a tree or not. If it is a tree, adds it to the
  // forest and continued with the next component.

  while (unProcessedNodes.length > 0 && isForest) {
    toBeVisited.push(unProcessedNodes[0]);

    // Start the BFS. Each iteration of this loop visits a node in a
    // BFS manner.
    while (toBeVisited.length > 0 && isForest) {
      //pool operation
      var currentNode = toBeVisited[0];
      toBeVisited.splice(0, 1);
      visited.add(currentNode);

      // Traverse all neighbors of this node
      var neighborEdges = currentNode.getEdges();

      for (var i = 0; i < neighborEdges.length; i++) {
        var currentNeighbor = neighborEdges[i].getOtherEnd(currentNode);

        // If BFS is not growing from this neighbor.
        if (parents.get(currentNode) != currentNeighbor) {
          // We haven't previously visited this neighbor.
          if (!visited.contains(currentNeighbor)) {
            toBeVisited.push(currentNeighbor);
            parents.put(currentNeighbor, currentNode);
          }
          // Since we have previously visited this neighbor and
          // this neighbor is not parent of currentNode, given
          // graph contains a component that is not tree, hence
          // it is not a forest.
          else {
              isForest = false;
              break;
            }
        }
      }
    }

    // The graph contains a component that is not a tree. Empty
    // previously found trees. The method will end.
    if (!isForest) {
      flatForest = [];
    }
    // Save currently visited nodes as a tree in our forest. Reset
    // visited and parents lists. Continue with the next component of
    // the graph, if any.
    else {
        var temp = [];
        visited.addAllTo(temp);
        flatForest.push(temp);
        //flatForest = flatForest.concat(temp);
        //unProcessedNodes.removeAll(visited);
        for (var i = 0; i < temp.length; i++) {
          var value = temp[i];
          var index = unProcessedNodes.indexOf(value);
          if (index > -1) {
            unProcessedNodes.splice(index, 1);
          }
        }
        visited = new HashSet();
        parents = new HashMap();
      }
  }

  return flatForest;
};

/**
 * This method creates dummy nodes (an l-level node with minimal dimensions)
 * for the given edge (one per bendpoint). The existing l-level structure
 * is updated accordingly.
 */
Layout.prototype.createDummyNodesForBendpoints = function (edge) {
  var dummyNodes = [];
  var prev = edge.source;

  var graph = this.graphManager.calcLowestCommonAncestor(edge.source, edge.target);

  for (var i = 0; i < edge.bendpoints.length; i++) {
    // create new dummy node
    var dummyNode = this.newNode(null);
    dummyNode.setRect(new Point(0, 0), new Dimension(1, 1));

    graph.add(dummyNode);

    // create new dummy edge between prev and dummy node
    var dummyEdge = this.newEdge(null);
    this.graphManager.add(dummyEdge, prev, dummyNode);

    dummyNodes.add(dummyNode);
    prev = dummyNode;
  }

  var dummyEdge = this.newEdge(null);
  this.graphManager.add(dummyEdge, prev, edge.target);

  this.edgeToDummyNodes.put(edge, dummyNodes);

  // remove real edge from graph manager if it is inter-graph
  if (edge.isInterGraph()) {
    this.graphManager.remove(edge);
  }
  // else, remove the edge from the current graph
  else {
      graph.remove(edge);
    }

  return dummyNodes;
};

/**
 * This method creates bendpoints for edges from the dummy nodes
 * at l-level.
 */
Layout.prototype.createBendpointsFromDummyNodes = function () {
  var edges = [];
  edges = edges.concat(this.graphManager.getAllEdges());
  edges = this.edgeToDummyNodes.keySet().concat(edges);

  for (var k = 0; k < edges.length; k++) {
    var lEdge = edges[k];

    if (lEdge.bendpoints.length > 0) {
      var path = this.edgeToDummyNodes.get(lEdge);

      for (var i = 0; i < path.length; i++) {
        var dummyNode = path[i];
        var p = new PointD(dummyNode.getCenterX(), dummyNode.getCenterY());

        // update bendpoint's location according to dummy node
        var ebp = lEdge.bendpoints.get(i);
        ebp.x = p.x;
        ebp.y = p.y;

        // remove the dummy node, dummy edges incident with this
        // dummy node is also removed (within the remove method)
        dummyNode.getOwner().remove(dummyNode);
      }

      // add the real edge to graph
      this.graphManager.add(lEdge, lEdge.source, lEdge.target);
    }
  }
};

Layout.transform = function (sliderValue, defaultValue, minDiv, maxMul) {
  if (minDiv != undefined && maxMul != undefined) {
    var value = defaultValue;

    if (sliderValue <= 50) {
      var minValue = defaultValue / minDiv;
      value -= (defaultValue - minValue) / 50 * (50 - sliderValue);
    } else {
      var maxValue = defaultValue * maxMul;
      value += (maxValue - defaultValue) / 50 * (sliderValue - 50);
    }

    return value;
  } else {
    var a, b;

    if (sliderValue <= 50) {
      a = 9.0 * defaultValue / 500.0;
      b = defaultValue / 10.0;
    } else {
      a = 9.0 * defaultValue / 50.0;
      b = -8 * defaultValue;
    }

    return a * sliderValue + b;
  }
};

/**
 * This method finds and returns the center of the given nodes, assuming
 * that the given nodes form a tree in themselves.
 */
Layout.findCenterOfTree = function (nodes) {
  var list = [];
  list = list.concat(nodes);

  var removedNodes = [];
  var remainingDegrees = new HashMap();
  var foundCenter = false;
  var centerNode = null;

  if (list.length == 1 || list.length == 2) {
    foundCenter = true;
    centerNode = list[0];
  }

  for (var i = 0; i < list.length; i++) {
    var node = list[i];
    var degree = node.getNeighborsList().size();
    remainingDegrees.put(node, node.getNeighborsList().size());

    if (degree == 1) {
      removedNodes.push(node);
    }
  }

  var tempList = [];
  tempList = tempList.concat(removedNodes);

  while (!foundCenter) {
    var tempList2 = [];
    tempList2 = tempList2.concat(tempList);
    tempList = [];

    for (var i = 0; i < list.length; i++) {
      var node = list[i];

      var index = list.indexOf(node);
      if (index >= 0) {
        list.splice(index, 1);
      }

      var neighbours = node.getNeighborsList();

      Object.keys(neighbours.set).forEach(function (j) {
        var neighbour = neighbours.set[j];
        if (removedNodes.indexOf(neighbour) < 0) {
          var otherDegree = remainingDegrees.get(neighbour);
          var newDegree = otherDegree - 1;

          if (newDegree == 1) {
            tempList.push(neighbour);
          }

          remainingDegrees.put(neighbour, newDegree);
        }
      });
    }

    removedNodes = removedNodes.concat(tempList);

    if (list.length == 1 || list.length == 2) {
      foundCenter = true;
      centerNode = list[0];
    }
  }

  return centerNode;
};

/**
 * During the coarsening process, this layout may be referenced by two graph managers
 * this setter function grants access to change the currently being used graph manager
 */
Layout.prototype.setGraphManager = function (gm) {
  this.graphManager = gm;
};

module.exports = Layout;

/***/ }),

/***/ "./cose-bilkent/src/Layout/LayoutConstants.js":
/*!****************************************************!*\
  !*** ./cose-bilkent/src/Layout/LayoutConstants.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function LayoutConstants() {}

/**
 * Layout Quality
 */
LayoutConstants.PROOF_QUALITY = 0;
LayoutConstants.DEFAULT_QUALITY = 1;
LayoutConstants.DRAFT_QUALITY = 2;

/**
 * Default parameters
 */
LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED = false;
//LayoutConstants.DEFAULT_INCREMENTAL = true;
LayoutConstants.DEFAULT_INCREMENTAL = false;
LayoutConstants.DEFAULT_ANIMATION_ON_LAYOUT = true;
LayoutConstants.DEFAULT_ANIMATION_DURING_LAYOUT = false;
LayoutConstants.DEFAULT_ANIMATION_PERIOD = 50;
LayoutConstants.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false;

// -----------------------------------------------------------------------------
// Section: General other constants
// -----------------------------------------------------------------------------
/*
 * Margins of a graph to be applied on bouding rectangle of its contents. We
 * assume margins on all four sides to be uniform.
 */
LayoutConstants.DEFAULT_GRAPH_MARGIN = 15;

/*
 * Whether to consider labels in node dimensions or not
 */
LayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS = false;

/*
 * Default dimension of a non-compound node.
 */
LayoutConstants.SIMPLE_NODE_SIZE = 40;

/*
 * Default dimension of a non-compound node.
 */
LayoutConstants.SIMPLE_NODE_HALF_SIZE = LayoutConstants.SIMPLE_NODE_SIZE / 2;

/*
 * Empty compound node size. When a compound node is empty, its both
 * dimensions should be of this value.
 */
LayoutConstants.EMPTY_COMPOUND_NODE_SIZE = 40;

/*
 * Minimum length that an edge should take during layout
 */
LayoutConstants.MIN_EDGE_LENGTH = 1;

/*
 * World boundaries that layout operates on
 */
LayoutConstants.WORLD_BOUNDARY = 1000000;

/*
 * World boundaries that random positioning can be performed with
 */
LayoutConstants.INITIAL_WORLD_BOUNDARY = LayoutConstants.WORLD_BOUNDARY / 1000;

/*
 * Coordinates of the world center
 */
LayoutConstants.WORLD_CENTER_X = 1200;
LayoutConstants.WORLD_CENTER_Y = 900;

module.exports = LayoutConstants;

/***/ }),

/***/ "./cose-bilkent/src/Layout/LinkedList.js":
/*!***********************************************!*\
  !*** ./cose-bilkent/src/Layout/LinkedList.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var nodeFrom = function nodeFrom(value) {
  return { value: value, next: null, prev: null };
};

var add = function add(prev, node, next, list) {
  if (prev !== null) {
    prev.next = node;
  } else {
    list.head = node;
  }

  if (next !== null) {
    next.prev = node;
  } else {
    list.tail = node;
  }

  node.prev = prev;
  node.next = next;

  list.length++;

  return node;
};

var _remove = function _remove(node, list) {
  var prev = node.prev,
      next = node.next;


  if (prev !== null) {
    prev.next = next;
  } else {
    list.head = next;
  }

  if (next !== null) {
    next.prev = prev;
  } else {
    list.tail = prev;
  }

  node.prev = node.next = null;

  list.length--;

  return node;
};

var LinkedList = function () {
  function LinkedList(vals) {
    var _this = this;

    _classCallCheck(this, LinkedList);

    this.length = 0;
    this.head = null;
    this.tail = null;

    if (vals != null) {
      vals.forEach(function (v) {
        return _this.push(v);
      });
    }
  }

  _createClass(LinkedList, [{
    key: "size",
    value: function size() {
      return this.length;
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(val, otherNode) {
      return add(otherNode.prev, nodeFrom(val), otherNode, this);
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(val, otherNode) {
      return add(otherNode, nodeFrom(val), otherNode.next, this);
    }
  }, {
    key: "insertNodeBefore",
    value: function insertNodeBefore(newNode, otherNode) {
      return add(otherNode.prev, newNode, otherNode, this);
    }
  }, {
    key: "insertNodeAfter",
    value: function insertNodeAfter(newNode, otherNode) {
      return add(otherNode, newNode, otherNode.next, this);
    }
  }, {
    key: "push",
    value: function push(val) {
      return add(this.tail, nodeFrom(val), null, this);
    }
  }, {
    key: "unshift",
    value: function unshift(val) {
      return add(null, nodeFrom(val), this.head, this);
    }
  }, {
    key: "remove",
    value: function remove(node) {
      return _remove(node, this);
    }
  }, {
    key: "pop",
    value: function pop() {
      return _remove(this.tail, this).value;
    }
  }, {
    key: "popNode",
    value: function popNode() {
      return _remove(this.tail, this);
    }
  }, {
    key: "shift",
    value: function shift() {
      return _remove(this.head, this).value;
    }
  }, {
    key: "shiftNode",
    value: function shiftNode() {
      return _remove(this.head, this);
    }
  }]);

  return LinkedList;
}();

module.exports = LinkedList;

/***/ }),

/***/ "./cose-bilkent/src/Layout/Point.js":
/*!******************************************!*\
  !*** ./cose-bilkent/src/Layout/Point.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 *This class is the javascript implementation of the Point.java class in jdk
 */
function Point(x, y, p) {
  this.x = null;
  this.y = null;
  if (x == null && y == null && p == null) {
    this.x = 0;
    this.y = 0;
  } else if (typeof x == 'number' && typeof y == 'number' && p == null) {
    this.x = x;
    this.y = y;
  } else if (x.constructor.name == 'Point' && y == null && p == null) {
    p = x;
    this.x = p.x;
    this.y = p.y;
  }
}

Point.prototype.getX = function () {
  return this.x;
};

Point.prototype.getY = function () {
  return this.y;
};

Point.prototype.getLocation = function () {
  return new Point(this.x, this.y);
};

Point.prototype.setLocation = function (x, y, p) {
  if (x.constructor.name == 'Point' && y == null && p == null) {
    p = x;
    this.setLocation(p.x, p.y);
  } else if (typeof x == 'number' && typeof y == 'number' && p == null) {
    //if both parameters are integer just move (x,y) location
    if (parseInt(x) == x && parseInt(y) == y) {
      this.move(x, y);
    } else {
      this.x = Math.floor(x + 0.5);
      this.y = Math.floor(y + 0.5);
    }
  }
};

Point.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};

Point.prototype.translate = function (dx, dy) {
  this.x += dx;
  this.y += dy;
};

Point.prototype.equals = function (obj) {
  if (obj.constructor.name == "Point") {
    var pt = obj;
    return this.x == pt.x && this.y == pt.y;
  }
  return this == obj;
};

Point.prototype.toString = function () {
  return new Point().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
};

module.exports = Point;

/***/ }),

/***/ "./cose-bilkent/src/Layout/PointD.js":
/*!*******************************************!*\
  !*** ./cose-bilkent/src/Layout/PointD.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function PointD(x, y) {
  if (x == null && y == null) {
    this.x = 0;
    this.y = 0;
  } else {
    this.x = x;
    this.y = y;
  }
}

PointD.prototype.getX = function () {
  return this.x;
};

PointD.prototype.getY = function () {
  return this.y;
};

PointD.prototype.setX = function (x) {
  this.x = x;
};

PointD.prototype.setY = function (y) {
  this.y = y;
};

PointD.prototype.getDifference = function (pt) {
  return new DimensionD(this.x - pt.x, this.y - pt.y);
};

PointD.prototype.getCopy = function () {
  return new PointD(this.x, this.y);
};

PointD.prototype.translate = function (dim) {
  this.x += dim.width;
  this.y += dim.height;
  return this;
};

module.exports = PointD;

/***/ }),

/***/ "./cose-bilkent/src/Layout/RandomSeed.js":
/*!***********************************************!*\
  !*** ./cose-bilkent/src/Layout/RandomSeed.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function RandomSeed() {}
RandomSeed.seed = 1;
RandomSeed.x = 0;

RandomSeed.nextDouble = function () {
  RandomSeed.x = Math.sin(RandomSeed.seed++) * 10000;
  return RandomSeed.x - Math.floor(RandomSeed.x);
};

module.exports = RandomSeed;

/***/ }),

/***/ "./cose-bilkent/src/Layout/RectangleD.js":
/*!***********************************************!*\
  !*** ./cose-bilkent/src/Layout/RectangleD.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function RectangleD(x, y, width, height) {
  this.x = 0;
  this.y = 0;
  this.width = 0;
  this.height = 0;

  if (x != null && y != null && width != null && height != null) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

RectangleD.prototype.getX = function () {
  return this.x;
};

RectangleD.prototype.setX = function (x) {
  this.x = x;
};

RectangleD.prototype.getY = function () {
  return this.y;
};

RectangleD.prototype.setY = function (y) {
  this.y = y;
};

RectangleD.prototype.getWidth = function () {
  return this.width;
};

RectangleD.prototype.setWidth = function (width) {
  this.width = width;
};

RectangleD.prototype.getHeight = function () {
  return this.height;
};

RectangleD.prototype.setHeight = function (height) {
  this.height = height;
};

RectangleD.prototype.getRight = function () {
  return this.x + this.width;
};

RectangleD.prototype.getBottom = function () {
  return this.y + this.height;
};

RectangleD.prototype.intersects = function (a) {
  if (this.getRight() < a.x) {
    return false;
  }

  if (this.getBottom() < a.y) {
    return false;
  }

  if (a.getRight() < this.x) {
    return false;
  }

  if (a.getBottom() < this.y) {
    return false;
  }

  return true;
};

RectangleD.prototype.getCenterX = function () {
  return this.x + this.width / 2;
};

RectangleD.prototype.getMinX = function () {
  return this.getX();
};

RectangleD.prototype.getMaxX = function () {
  return this.getX() + this.width;
};

RectangleD.prototype.getCenterY = function () {
  return this.y + this.height / 2;
};

RectangleD.prototype.getMinY = function () {
  return this.getY();
};

RectangleD.prototype.getMaxY = function () {
  return this.getY() + this.height;
};

RectangleD.prototype.getWidthHalf = function () {
  return this.width / 2;
};

RectangleD.prototype.getHeightHalf = function () {
  return this.height / 2;
};

module.exports = RectangleD;

/***/ }),

/***/ "./cose-bilkent/src/Layout/Transform.js":
/*!**********************************************!*\
  !*** ./cose-bilkent/src/Layout/Transform.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PointD = __webpack_require__(/*! ./PointD */ "./cose-bilkent/src/Layout/PointD.js");

function Transform(x, y) {
  this.lworldOrgX = 0.0;
  this.lworldOrgY = 0.0;
  this.ldeviceOrgX = 0.0;
  this.ldeviceOrgY = 0.0;
  this.lworldExtX = 1.0;
  this.lworldExtY = 1.0;
  this.ldeviceExtX = 1.0;
  this.ldeviceExtY = 1.0;
}

Transform.prototype.getWorldOrgX = function () {
  return this.lworldOrgX;
};

Transform.prototype.setWorldOrgX = function (wox) {
  this.lworldOrgX = wox;
};

Transform.prototype.getWorldOrgY = function () {
  return this.lworldOrgY;
};

Transform.prototype.setWorldOrgY = function (woy) {
  this.lworldOrgY = woy;
};

Transform.prototype.getWorldExtX = function () {
  return this.lworldExtX;
};

Transform.prototype.setWorldExtX = function (wex) {
  this.lworldExtX = wex;
};

Transform.prototype.getWorldExtY = function () {
  return this.lworldExtY;
};

Transform.prototype.setWorldExtY = function (wey) {
  this.lworldExtY = wey;
};

/* Device related */

Transform.prototype.getDeviceOrgX = function () {
  return this.ldeviceOrgX;
};

Transform.prototype.setDeviceOrgX = function (dox) {
  this.ldeviceOrgX = dox;
};

Transform.prototype.getDeviceOrgY = function () {
  return this.ldeviceOrgY;
};

Transform.prototype.setDeviceOrgY = function (doy) {
  this.ldeviceOrgY = doy;
};

Transform.prototype.getDeviceExtX = function () {
  return this.ldeviceExtX;
};

Transform.prototype.setDeviceExtX = function (dex) {
  this.ldeviceExtX = dex;
};

Transform.prototype.getDeviceExtY = function () {
  return this.ldeviceExtY;
};

Transform.prototype.setDeviceExtY = function (dey) {
  this.ldeviceExtY = dey;
};

Transform.prototype.transformX = function (x) {
  var xDevice = 0.0;
  var worldExtX = this.lworldExtX;
  if (worldExtX != 0.0) {
    xDevice = this.ldeviceOrgX + (x - this.lworldOrgX) * this.ldeviceExtX / worldExtX;
  }

  return xDevice;
};

Transform.prototype.transformY = function (y) {
  var yDevice = 0.0;
  var worldExtY = this.lworldExtY;
  if (worldExtY != 0.0) {
    yDevice = this.ldeviceOrgY + (y - this.lworldOrgY) * this.ldeviceExtY / worldExtY;
  }

  return yDevice;
};

Transform.prototype.inverseTransformX = function (x) {
  var xWorld = 0.0;
  var deviceExtX = this.ldeviceExtX;
  if (deviceExtX != 0.0) {
    xWorld = this.lworldOrgX + (x - this.ldeviceOrgX) * this.lworldExtX / deviceExtX;
  }

  return xWorld;
};

Transform.prototype.inverseTransformY = function (y) {
  var yWorld = 0.0;
  var deviceExtY = this.ldeviceExtY;
  if (deviceExtY != 0.0) {
    yWorld = this.lworldOrgY + (y - this.ldeviceOrgY) * this.lworldExtY / deviceExtY;
  }
  return yWorld;
};

Transform.prototype.inverseTransformPoint = function (inPoint) {
  var outPoint = new PointD(this.inverseTransformX(inPoint.x), this.inverseTransformY(inPoint.y));
  return outPoint;
};

module.exports = Transform;

/***/ }),

/***/ "./cose-bilkent/src/Layout/UniqueIDGeneretor.js":
/*!******************************************************!*\
  !*** ./cose-bilkent/src/Layout/UniqueIDGeneretor.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function UniqueIDGeneretor() {}

UniqueIDGeneretor.lastID = 0;

UniqueIDGeneretor.createID = function (obj) {
  if (UniqueIDGeneretor.isPrimitive(obj)) {
    return obj;
  }
  if (obj.uniqueID != null) {
    return obj.uniqueID;
  }
  obj.uniqueID = UniqueIDGeneretor.getString();
  UniqueIDGeneretor.lastID++;
  return obj.uniqueID;
};

UniqueIDGeneretor.getString = function (id) {
  if (id == null) id = UniqueIDGeneretor.lastID;
  return "Object#" + id + "";
};

UniqueIDGeneretor.isPrimitive = function (arg) {
  var type = typeof arg === "undefined" ? "undefined" : _typeof(arg);
  return arg == null || type != "object" && type != "function";
};

module.exports = UniqueIDGeneretor;

/***/ }),

/***/ "./cose-bilkent/src/Layout/index.js":
/*!******************************************!*\
  !*** ./cose-bilkent/src/Layout/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DimensionD = __webpack_require__(/*! ./DimensionD */ "./cose-bilkent/src/Layout/DimensionD.js");
var HashMap = __webpack_require__(/*! ./HashMap */ "./cose-bilkent/src/Layout/HashMap.js");
var HashSet = __webpack_require__(/*! ./HashSet */ "./cose-bilkent/src/Layout/HashSet.js");
var IGeometry = __webpack_require__(/*! ./IGeometry */ "./cose-bilkent/src/Layout/IGeometry.js");
var IMath = __webpack_require__(/*! ./IMath */ "./cose-bilkent/src/Layout/IMath.js");
var Integer = __webpack_require__(/*! ./Integer */ "./cose-bilkent/src/Layout/Integer.js");
var Point = __webpack_require__(/*! ./Point */ "./cose-bilkent/src/Layout/Point.js");
var PointD = __webpack_require__(/*! ./PointD */ "./cose-bilkent/src/Layout/PointD.js");
var RandomSeed = __webpack_require__(/*! ./RandomSeed */ "./cose-bilkent/src/Layout/RandomSeed.js");
var RectangleD = __webpack_require__(/*! ./RectangleD */ "./cose-bilkent/src/Layout/RectangleD.js");
var Transform = __webpack_require__(/*! ./Transform */ "./cose-bilkent/src/Layout/Transform.js");
var UniqueIDGeneretor = __webpack_require__(/*! ./UniqueIDGeneretor */ "./cose-bilkent/src/Layout/UniqueIDGeneretor.js");
var LGraphObject = __webpack_require__(/*! ./LGraphObject */ "./cose-bilkent/src/Layout/LGraphObject.js");
var LGraph = __webpack_require__(/*! ./LGraph */ "./cose-bilkent/src/Layout/LGraph.js");
var LEdge = __webpack_require__(/*! ./LEdge */ "./cose-bilkent/src/Layout/LEdge.js");
var LGraphManager = __webpack_require__(/*! ./LGraphManager */ "./cose-bilkent/src/Layout/LGraphManager.js");
var LNode = __webpack_require__(/*! ./LNode */ "./cose-bilkent/src/Layout/LNode.js");
var Layout = __webpack_require__(/*! ./Layout */ "./cose-bilkent/src/Layout/Layout.js");
var LayoutConstants = __webpack_require__(/*! ./LayoutConstants */ "./cose-bilkent/src/Layout/LayoutConstants.js");
var FDLayout = __webpack_require__(/*! ./FDLayout */ "./cose-bilkent/src/Layout/FDLayout.js");
var FDLayoutConstants = __webpack_require__(/*! ./FDLayoutConstants */ "./cose-bilkent/src/Layout/FDLayoutConstants.js");
var FDLayoutEdge = __webpack_require__(/*! ./FDLayoutEdge */ "./cose-bilkent/src/Layout/FDLayoutEdge.js");
var FDLayoutNode = __webpack_require__(/*! ./FDLayoutNode */ "./cose-bilkent/src/Layout/FDLayoutNode.js");
var CoSEConstants = __webpack_require__(/*! ./CoSEConstants */ "./cose-bilkent/src/Layout/CoSEConstants.js");
var CoSEEdge = __webpack_require__(/*! ./CoSEEdge */ "./cose-bilkent/src/Layout/CoSEEdge.js");
var CoSEGraph = __webpack_require__(/*! ./CoSEGraph */ "./cose-bilkent/src/Layout/CoSEGraph.js");
var CoSEGraphManager = __webpack_require__(/*! ./CoSEGraphManager */ "./cose-bilkent/src/Layout/CoSEGraphManager.js");
var CoSELayout = __webpack_require__(/*! ./CoSELayout */ "./cose-bilkent/src/Layout/CoSELayout.js");
var CoSENode = __webpack_require__(/*! ./CoSENode */ "./cose-bilkent/src/Layout/CoSENode.js");

var defaults = {
  // Called on `layoutready`
  ready: function ready() {},
  // Called on `layoutstop`
  stop: function stop() {},
  // include labels in node dimensions
  nodeDimensionsIncludeLabels: false,
  // number of ticks per frame; higher is faster but more jerky
  refresh: 30,
  // Whether to fit the network view after when done
  fit: true,
  // Padding on fit
  padding: 10,
  // Whether to enable incremental mode
  randomize: true,
  // Node repulsion (non overlapping) multiplier
  nodeRepulsion: 4500,
  // Ideal edge (non nested) length
  idealEdgeLength: 50,
  // Divisor to compute edge forces
  edgeElasticity: 0.45,
  // Nesting factor (multiplier) to compute ideal edge length for nested edges
  nestingFactor: 0.1,
  // Gravity force (constant)
  gravity: 0.25,
  // Maximum number of iterations to perform
  numIter: 2500,
  // For enabling tiling
  tile: true,
  // Type of layout animation. The option set is {'during', 'end', false}
  animate: 'end',
  // Duration for animate:end
  animationDuration: 500,
  // Represents the amount of the vertical space to put between the zero degree members during the tiling operation(can also be a function)
  tilingPaddingVertical: 10,
  // Represents the amount of the horizontal space to put between the zero degree members during the tiling operation(can also be a function)
  tilingPaddingHorizontal: 10,
  // Gravity range (constant) for compounds
  gravityRangeCompound: 1.5,
  // Gravity force (constant) for compounds
  gravityCompound: 1.0,
  // Gravity range (constant)
  gravityRange: 3.8,
  // Initial cooling factor for incremental layout
  initialEnergyOnIncremental: 0.5
};

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
  getUserOptions(this.options);
}

var getUserOptions = function getUserOptions(options) {
  if (options.nodeRepulsion != null) CoSEConstants.DEFAULT_REPULSION_STRENGTH = FDLayoutConstants.DEFAULT_REPULSION_STRENGTH = options.nodeRepulsion;
  if (options.idealEdgeLength != null) CoSEConstants.DEFAULT_EDGE_LENGTH = FDLayoutConstants.DEFAULT_EDGE_LENGTH = options.idealEdgeLength;
  if (options.edgeElasticity != null) CoSEConstants.DEFAULT_SPRING_STRENGTH = FDLayoutConstants.DEFAULT_SPRING_STRENGTH = options.edgeElasticity;
  if (options.nestingFactor != null) CoSEConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = FDLayoutConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = options.nestingFactor;
  if (options.gravity != null) CoSEConstants.DEFAULT_GRAVITY_STRENGTH = FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH = options.gravity;
  if (options.numIter != null) CoSEConstants.MAX_ITERATIONS = FDLayoutConstants.MAX_ITERATIONS = options.numIter;
  if (options.gravityRange != null) CoSEConstants.DEFAULT_GRAVITY_RANGE_FACTOR = FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR = options.gravityRange;
  if (options.gravityCompound != null) CoSEConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH = options.gravityCompound;
  if (options.gravityRangeCompound != null) CoSEConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = options.gravityRangeCompound;
  if (options.initialEnergyOnIncremental != null) CoSEConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL = options.initialEnergyOnIncremental;

  CoSEConstants.NODE_DIMENSIONS_INCLUDE_LABELS = FDLayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS = LayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS = options.nodeDimensionsIncludeLabels;
  CoSEConstants.DEFAULT_INCREMENTAL = FDLayoutConstants.DEFAULT_INCREMENTAL = LayoutConstants.DEFAULT_INCREMENTAL = !options.randomize;
  CoSEConstants.ANIMATE = FDLayoutConstants.ANIMATE = LayoutConstants.ANIMATE = options.animate;
  CoSEConstants.TILE = options.tile;
  CoSEConstants.TILING_PADDING_VERTICAL = typeof options.tilingPaddingVertical === 'function' ? options.tilingPaddingVertical.call() : options.tilingPaddingVertical;
  CoSEConstants.TILING_PADDING_HORIZONTAL = typeof options.tilingPaddingHorizontal === 'function' ? options.tilingPaddingHorizontal.call() : options.tilingPaddingHorizontal;
};

_CoSELayout.prototype.run = function () {
  var ready;
  var frameId;
  var options = this.options;
  var idToLNode = this.idToLNode = {};
  var layout = this.layout = new CoSELayout();
  var self = this;

  self.stopped = false;

  this.cy = this.options.cy;

  this.cy.trigger({ type: 'layoutstart', layout: this });

  var gm = layout.newGraphManager();
  this.gm = gm;

  var nodes = this.options.eles.nodes();
  var edges = this.options.eles.edges();

  this.root = gm.addRoot();
  this.processChildrenList(this.root, this.getTopMostNodes(nodes), layout);

  for (var i = 0; i < edges.length; i++) {
    var edge = edges[i];
    var sourceNode = this.idToLNode[edge.data("source")];
    var targetNode = this.idToLNode[edge.data("target")];
    if (sourceNode.getEdgesBetween(targetNode).length == 0) {
      var e1 = gm.add(layout.newEdge(), sourceNode, targetNode);
      e1.id = edge.id();
    }
  }

  var getPositions = function getPositions(ele, i) {
    if (typeof ele === "number") {
      ele = i;
    }
    var theId = ele.data('id');
    var lNode = self.idToLNode[theId];

    return {
      x: lNode.getRect().getCenterX(),
      y: lNode.getRect().getCenterY()
    };
  };

  /*
   * Reposition nodes in iterations animatedly
   */
  var iterateAnimated = function iterateAnimated() {
    // Thigs to perform after nodes are repositioned on screen
    var afterReposition = function afterReposition() {
      if (options.fit) {
        options.cy.fit(options.eles.nodes(), options.padding);
      }

      if (!ready) {
        ready = true;
        self.cy.one('layoutready', options.ready);
        self.cy.trigger({ type: 'layoutready', layout: self });
      }
    };

    var ticksPerFrame = self.options.refresh;
    var isDone;

    for (var i = 0; i < ticksPerFrame && !isDone; i++) {
      isDone = self.stopped || self.layout.tick();
    }

    // If layout is done
    if (isDone) {
      // If the layout is not a sublayout and it is successful perform post layout.
      if (layout.checkLayoutSuccess() && !layout.isSubLayout) {
        layout.doPostLayout();
      }

      // If layout has a tilingPostLayout function property call it.
      if (layout.tilingPostLayout) {
        layout.tilingPostLayout();
      }

      layout.isLayoutFinished = true;

      self.options.eles.nodes().positions(getPositions);

      afterReposition();

      // trigger layoutstop when the layout stops (e.g. finishes)
      self.cy.one('layoutstop', self.options.stop);
      self.cy.trigger({ type: 'layoutstop', layout: self });

      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      ready = false;
      return;
    }

    var animationData = self.layout.getPositionsData(); // Get positions of layout nodes note that all nodes may not be layout nodes because of tiling

    // Position nodes, for the nodes whose id does not included in data (because they are removed from their parents and included in dummy compounds)
    // use position of their ancestors or dummy ancestors
    options.eles.nodes().positions(function (ele, i) {
      if (typeof ele === "number") {
        ele = i;
      }
      var theId = ele.id();
      var pNode = animationData[theId];
      var temp = ele;
      // If pNode is undefined search until finding position data of its first ancestor (It may be dummy as well)
      while (pNode == null) {
        pNode = animationData[temp.data('parent')] || animationData['DummyCompound_' + temp.data('parent')];
        animationData[theId] = pNode;
        temp = temp.parent()[0];
        if (temp == undefined) {
          break;
        }
      }
      if (pNode != null) {
        return {
          x: pNode.x,
          y: pNode.y
        };
      } else {
        return {
          x: ele.x,
          y: ele.y
        };
      }
    });

    afterReposition();

    frameId = requestAnimationFrame(iterateAnimated);
  };

  /*
  * Listen 'layoutstarted' event and start animated iteration if animate option is 'during'
  */
  layout.addListener('layoutstarted', function () {
    if (self.options.animate === 'during') {
      frameId = requestAnimationFrame(iterateAnimated);
    }
  });

  layout.runLayout(); // Run cose layout

  /*
   * If animate option is not 'during' ('end' or false) perform these here (If it is 'during' similar things are already performed)
   */
  if (this.options.animate !== "during") {
    self.options.eles.nodes().not(":parent").layoutPositions(self, self.options, getPositions); // Use layout positions to reposition the nodes it considers the options parameter
    ready = false;
  }

  return this; // chaining
};

//Get the top most ones of a list of nodes
_CoSELayout.prototype.getTopMostNodes = function (nodes) {
  var nodesMap = {};
  for (var i = 0; i < nodes.length; i++) {
    nodesMap[nodes[i].id()] = true;
  }
  var roots = nodes.filter(function (ele, i) {
    if (typeof ele === "number") {
      ele = i;
    }
    var parent = ele.parent()[0];
    while (parent != null) {
      if (nodesMap[parent.id()]) {
        return false;
      }
      parent = parent.parent()[0];
    }
    return true;
  });

  return roots;
};

_CoSELayout.prototype.processChildrenList = function (parent, children, layout) {
  var size = children.length;
  for (var i = 0; i < size; i++) {
    var theChild = children[i];
    var children_of_children = theChild.children();
    var theNode;

    var dimensions = theChild.layoutDimensions({
      nodeDimensionsIncludeLabels: this.options.nodeDimensionsIncludeLabels
    });

    if (theChild.outerWidth() != null && theChild.outerHeight() != null) {
      theNode = parent.add(new CoSENode(layout.graphManager, new PointD(theChild.position('x') - dimensions.w / 2, theChild.position('y') - dimensions.h / 2), new DimensionD(parseFloat(dimensions.w), parseFloat(dimensions.h))));
    } else {
      theNode = parent.add(new CoSENode(this.graphManager));
    }
    // Attach id to the layout node
    theNode.id = theChild.data("id");
    // Attach the paddings of cy node to layout node
    theNode.paddingLeft = parseInt(theChild.css('padding'));
    theNode.paddingTop = parseInt(theChild.css('padding'));
    theNode.paddingRight = parseInt(theChild.css('padding'));
    theNode.paddingBottom = parseInt(theChild.css('padding'));

    //Attach the label properties to compound if labels will be included in node dimensions  
    if (this.options.nodeDimensionsIncludeLabels) {
      if (theChild.isParent()) {
        var labelWidth = theChild.boundingBox({ includeLabels: true, includeNodes: false }).w;
        var labelHeight = theChild.boundingBox({ includeLabels: true, includeNodes: false }).h;
        var labelPos = theChild.css("text-halign");
        theNode.labelWidth = labelWidth;
        theNode.labelHeight = labelHeight;
        theNode.labelPos = labelPos;
      }
    }

    // Map the layout node
    this.idToLNode[theChild.data("id")] = theNode;

    if (isNaN(theNode.rect.x)) {
      theNode.rect.x = 0;
    }

    if (isNaN(theNode.rect.y)) {
      theNode.rect.y = 0;
    }

    if (children_of_children != null && children_of_children.length > 0) {
      var theNewGraph;
      theNewGraph = layout.getGraphManager().add(layout.newGraph(), theNode);
      this.processChildrenList(theNewGraph, children_of_children, layout);
    }
  }
};

/**
 * @brief : called on continuous layouts to stop them before they finish
 */
_CoSELayout.prototype.stop = function () {
  this.stopped = true;

  return this; // chaining
};

module.exports = function get(cytoscape) {
  return _CoSELayout;
};

/***/ }),

/***/ "./src/cose-bilkent-modification.js":
/*!******************************************!*\
  !*** ./src/cose-bilkent-modification.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoSENode = __webpack_require__(/*! ../cose-bilkent/src/Layout/CoSENode */ "./cose-bilkent/src/Layout/CoSENode.js");
var FDLayoutConstants = __webpack_require__(/*! ../cose-bilkent/src/Layout/FDLayoutConstants */ "./cose-bilkent/src/Layout/FDLayoutConstants.js");
var IMath = __webpack_require__(/*! ../cose-bilkent/src/Layout/IMath */ "./cose-bilkent/src/Layout/IMath.js");

CoSENode.prototype.move = function () {
  if (FDLayoutConstants.EXCLUDED_NODES[this.id]) return;

  var layout = this.graphManager.getLayout();
  this.displacementX = layout.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren;
  this.displacementY = layout.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren;

  if (Math.abs(this.displacementX) > layout.coolingFactor * layout.maxNodeDisplacement) {
    this.displacementX = layout.coolingFactor * layout.maxNodeDisplacement * IMath.sign(this.displacementX);
  }

  if (Math.abs(this.displacementY) > layout.coolingFactor * layout.maxNodeDisplacement) {
    this.displacementY = layout.coolingFactor * layout.maxNodeDisplacement * IMath.sign(this.displacementY);
  }

  // a simple node, just move it
  if (this.child == null) {
    this.moveBy(this.displacementX, this.displacementY);
  }
  // an empty compound node, again just move it
  else if (this.child.getNodes().length == 0) {
      this.moveBy(this.displacementX, this.displacementY);
    }
    // non-empty compound node, propogate movement to children as well
    else {
        this.propogateDisplacementToChildren(this.displacementX, this.displacementY);
      }

  layout.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY);

  this.springForceX = 0;
  this.springForceY = 0;
  this.repulsionForceX = 0;
  this.repulsionForceY = 0;
  this.gravitationForceX = 0;
  this.gravitationForceY = 0;
  this.displacementX = 0;
  this.displacementY = 0;
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./cose-bilkent-modification.js */ "./src/cose-bilkent-modification.js");

var _layouts = __webpack_require__(/*! ./layouts.js */ "./src/layouts.js");

var getLayout = __webpack_require__(/*! ../cose-bilkent/src/Layout */ "./cose-bilkent/src/Layout/index.js");
var FDLayoutConstants = __webpack_require__(/*! ../cose-bilkent/src/Layout/FDLayoutConstants */ "./cose-bilkent/src/Layout/FDLayoutConstants.js");

// registers the extension on a cytoscape lib ref
var register = function register(cytoscape) {
	if (!cytoscape) {
		return;
	} // can't register if cytoscape unspecified

	(0, _layouts.createHeadlessInstance)(cytoscape);

	var Layout = getLayout(cytoscape);
	var orgPrototype = Layout.prototype;

	var defaults = new Layout({}).options;

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

		if (_options.excludedNodes) {
			FDLayoutConstants.EXCLUDED_NODES = _options.excludedNodes;
		} else {
			FDLayoutConstants.EXCLUDED_NODES = {};
		}
	};

	_CoSELayout.prototype = Layout.prototype;

	cytoscape('layout', 'cytoscape.js-synched', _CoSELayout); // register with cytoscape.js
	cytoscape('core', 'synchedLayout', function (opts) {
		var api = {};
		api.applyMergedLayout = _layouts.applyMergedLayout;
		api.applyUnnamedLayout = _layouts.applyUnnamedLayout;

		return api;
	});
};

if (typeof cytoscape !== 'undefined') {
	// expose to global cytoscape (i.e. window.cytoscape)
	register(cytoscape);
}

module.exports = register;

/***/ }),

/***/ "./src/layouts.js":
/*!************************!*\
  !*** ./src/layouts.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var cy_headless;

var createHeadlessInstance = function createHeadlessInstance(cytoscape) {
	cy_headless = cytoscape({
		headless: true,
		styleEnabled: true
	});
};

var applyMergedLayout = function applyMergedLayout(cy, otherCy) {
	var eles = cy.elements();
	var otherEles = otherCy.elements();
	var all_eles = eles.union(otherEles);
	var options = { name: 'cytoscape.js-synched' };

	cy_headless.elements().remove();
	cy_headless.add(all_eles);
	cy_headless.layout(options).run();

	cy_headless.one("layoutstop", function () {
		var pos = {};
		cy_headless.nodes().forEach(function (ele, i) {
			pos[ele.id()] = { x: ele.position("x"), y: ele.position("y") };
		});

		cy.nodes().positions(function (ele, i) {
			return { x: pos[ele.id()].x, y: pos[ele.id()].y };
		});

		otherCy.nodes().positions(function (ele, i) {
			return { x: pos[ele.id()].x, y: pos[ele.id()].y };
		});

		cy.trigger("synchedLayoutStopped");
		otherCy.trigger("synchedLayoutStopped");
	});
};

var applyUnnamedLayout = function applyUnnamedLayout(cy, otherCy) {
	var eles = cy.elements();
	var otherEles = otherCy.elements();
	var commonEles = eles.intersection(otherEles);

	var common_id = {};

	commonEles.forEach(function (ele, i) {
		common_id[ele.id()] = true;
	});

	cy_headless.elements().remove();
	cy_headless.add(commonEles);
	cy_headless.layout({ name: "cytoscape.js-synched", excludedNodes: {} }).run();

	cy_headless.one("layoutstop", function () {
		var pos = {};
		cy_headless.nodes().forEach(function (ele, i) {
			pos[ele.id()] = { x: ele.position("x"), y: ele.position("y") };
		});

		cy.nodes().positions(function (ele, i) {
			if (pos[ele.id()]) {
				return { x: pos[ele.id()].x, y: pos[ele.id()].y };
			} else {
				return ele.position();
			}
		});

		otherCy.nodes().positions(function (ele, i) {
			if (pos[ele.id()]) {
				return { x: pos[ele.id()].x, y: pos[ele.id()].y };
			} else {
				return ele.position();
			}
		});

		cy.layout({ name: "cytoscape.js-synched", randomize: false, excludedNodes: pos }).run();
		otherCy.layout({ name: "cytoscape.js-synched", randomize: false, excludedNodes: pos }).run();

		var isLayoutStopped = false,
		    isOtherLayoutStopped = false;

		cy.one("layoutstop", function () {
			isLayoutStopped = true;
			if (isOtherLayoutStopped) {
				cy.trigger("synchedLayoutStopped");
				otherCy.trigger("synchedLayoutStopped");
			}
		});

		otherCy.one("layoutstop", function () {
			isOtherLayoutStopped = true;
			if (isLayoutStopped) {
				cy.trigger("synchedLayoutStopped");
				otherCy.trigger("synchedLayoutStopped");
			}
		});
	});
};

exports.createHeadlessInstance = createHeadlessInstance;
exports.applyMergedLayout = applyMergedLayout;
exports.applyUnnamedLayout = applyUnnamedLayout;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFQ29uc3RhbnRzLmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFRWRnZS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvQ29TRUdyYXBoLmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFR3JhcGhNYW5hZ2VyLmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFTGF5b3V0LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFTm9kZS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvRGltZW5zaW9uRC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvRW1pdHRlci5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvRkRMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0ZETGF5b3V0Q29uc3RhbnRzLmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9GRExheW91dEVkZ2UuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0ZETGF5b3V0Tm9kZS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvSGFzaE1hcC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvSGFzaFNldC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvSUdlb21ldHJ5LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9JTWF0aC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvSW50ZWdlci5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvTEVkZ2UuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0xHcmFwaC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvTEdyYXBoTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvTEdyYXBoT2JqZWN0LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9MTm9kZS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9MYXlvdXRDb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0xpbmtlZExpc3QuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L1BvaW50LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Qb2ludEQuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L1JhbmRvbVNlZWQuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L1JlY3RhbmdsZUQuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvVW5pcXVlSURHZW5lcmV0b3IuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9zcmMvY29zZS1iaWxrZW50LW1vZGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9zcmMvbGF5b3V0cy5qcyJdLCJuYW1lcyI6WyJGRExheW91dENvbnN0YW50cyIsInJlcXVpcmUiLCJDb1NFQ29uc3RhbnRzIiwicHJvcCIsIkRFRkFVTFRfVVNFX01VTFRJX0xFVkVMX1NDQUxJTkciLCJERUZBVUxUX1JBRElBTF9TRVBBUkFUSU9OIiwiREVGQVVMVF9FREdFX0xFTkdUSCIsIkRFRkFVTFRfQ09NUE9ORU5UX1NFUEVSQVRJT04iLCJUSUxFIiwiVElMSU5HX1BBRERJTkdfVkVSVElDQUwiLCJUSUxJTkdfUEFERElOR19IT1JJWk9OVEFMIiwibW9kdWxlIiwiZXhwb3J0cyIsIkZETGF5b3V0RWRnZSIsIkNvU0VFZGdlIiwic291cmNlIiwidGFyZ2V0IiwidkVkZ2UiLCJjYWxsIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiTEdyYXBoIiwiQ29TRUdyYXBoIiwicGFyZW50IiwiZ3JhcGhNZ3IiLCJ2R3JhcGgiLCJMR3JhcGhNYW5hZ2VyIiwiQ29TRUdyYXBoTWFuYWdlciIsImxheW91dCIsIkZETGF5b3V0IiwiQ29TRU5vZGUiLCJMYXlvdXRDb25zdGFudHMiLCJQb2ludCIsIlBvaW50RCIsIkxheW91dCIsIkludGVnZXIiLCJJR2VvbWV0cnkiLCJUcmFuc2Zvcm0iLCJDb1NFTGF5b3V0IiwidG9CZVRpbGVkIiwibmV3R3JhcGhNYW5hZ2VyIiwiZ20iLCJncmFwaE1hbmFnZXIiLCJuZXdHcmFwaCIsIm5ld05vZGUiLCJ2Tm9kZSIsIm5ld0VkZ2UiLCJpbml0UGFyYW1ldGVycyIsImFyZ3VtZW50cyIsImlzU3ViTGF5b3V0IiwiaWRlYWxFZGdlTGVuZ3RoIiwidXNlU21hcnRJZGVhbEVkZ2VMZW5ndGhDYWxjdWxhdGlvbiIsIkRFRkFVTFRfVVNFX1NNQVJUX0lERUFMX0VER0VfTEVOR1RIX0NBTENVTEFUSU9OIiwic3ByaW5nQ29uc3RhbnQiLCJERUZBVUxUX1NQUklOR19TVFJFTkdUSCIsInJlcHVsc2lvbkNvbnN0YW50IiwiREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEgiLCJncmF2aXR5Q29uc3RhbnQiLCJERUZBVUxUX0dSQVZJVFlfU1RSRU5HVEgiLCJjb21wb3VuZEdyYXZpdHlDb25zdGFudCIsIkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9TVFJFTkdUSCIsImdyYXZpdHlSYW5nZUZhY3RvciIsIkRFRkFVTFRfR1JBVklUWV9SQU5HRV9GQUNUT1IiLCJjb21wb3VuZEdyYXZpdHlSYW5nZUZhY3RvciIsIkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1IiLCJjcmVhdGVCZW5kc0FzTmVlZGVkIiwiREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEIiwiY3JlYXRlQmVuZHBvaW50cyIsInJlc2V0QWxsRWRnZXMiLCJsZXZlbCIsImNsYXNzaWNMYXlvdXQiLCJub2Rlc1dpdGhHcmF2aXR5IiwiY2FsY3VsYXRlTm9kZXNUb0FwcGx5R3Jhdml0YXRpb25UbyIsInNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uIiwiY2FsY05vT2ZDaGlsZHJlbkZvckFsbE5vZGVzIiwiY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9ycyIsImNhbGNJbmNsdXNpb25UcmVlRGVwdGhzIiwiZ2V0Um9vdCIsImNhbGNFc3RpbWF0ZWRTaXplIiwiY2FsY0lkZWFsRWRnZUxlbmd0aHMiLCJpbmNyZW1lbnRhbCIsImZvcmVzdCIsImdldEZsYXRGb3Jlc3QiLCJsZW5ndGgiLCJwb3NpdGlvbk5vZGVzUmFkaWFsbHkiLCJyZWR1Y2VUcmVlcyIsInJlc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24iLCJhbGxOb2RlcyIsIlNldCIsImdldEFsbE5vZGVzIiwiaW50ZXJzZWN0aW9uIiwiZmlsdGVyIiwiaGFzIiwieCIsInBvc2l0aW9uTm9kZXNSYW5kb21seSIsImluaXRTcHJpbmdFbWJlZGRlciIsInJ1blNwcmluZ0VtYmVkZGVyIiwidGljayIsInRvdGFsSXRlcmF0aW9ucyIsIm1heEl0ZXJhdGlvbnMiLCJpc1RyZWVHcm93aW5nIiwiaXNHcm93dGhGaW5pc2hlZCIsInBydW5lZE5vZGVzQWxsIiwiQ09OVkVSR0VOQ0VfQ0hFQ0tfUEVSSU9EIiwiaXNDb252ZXJnZWQiLCJjb29saW5nRmFjdG9yIiwiaW5pdGlhbENvb2xpbmdGYWN0b3IiLCJhbmltYXRpb25QZXJpb2QiLCJNYXRoIiwiY2VpbCIsImluaXRpYWxBbmltYXRpb25QZXJpb2QiLCJzcXJ0IiwiZ3Jvd1RyZWVJdGVyYXRpb25zIiwidXBkYXRlQm91bmRzIiwidXBkYXRlR3JpZCIsImdyb3dUcmVlIiwiREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCIsImFmdGVyR3Jvd3RoSXRlcmF0aW9ucyIsInRvdGFsRGlzcGxhY2VtZW50IiwiY2FsY1NwcmluZ0ZvcmNlcyIsImNhbGNSZXB1bHNpb25Gb3JjZXMiLCJjYWxjR3Jhdml0YXRpb25hbEZvcmNlcyIsIm1vdmVOb2RlcyIsImFuaW1hdGUiLCJnZXRQb3NpdGlvbnNEYXRhIiwicERhdGEiLCJpIiwicmVjdCIsImlkIiwiZ2V0Q2VudGVyWCIsInkiLCJnZXRDZW50ZXJZIiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsImxheW91dEVuZGVkIiwiQU5JTUFURSIsImVtaXQiLCJub2RlTGlzdCIsImdyYXBoIiwiZ3JhcGhzIiwiZ2V0R3JhcGhzIiwic2l6ZSIsInVwZGF0ZUNvbm5lY3RlZCIsImlzQ29ubmVjdGVkIiwiY29uY2F0IiwiZ2V0Tm9kZXMiLCJub2RlIiwibm9PZkNoaWxkcmVuIiwiZ2V0Tm9PZkNoaWxkcmVuIiwiZWRnZXMiLCJnZXRBbGxFZGdlcyIsInZpc2l0ZWQiLCJIYXNoU2V0IiwiZWRnZSIsImNvbnRhaW5zIiwiZ2V0U291cmNlIiwiZ2V0VGFyZ2V0IiwiZ2V0QmVuZHBvaW50cyIsInB1c2giLCJjcmVhdGVEdW1teU5vZGVzRm9yQmVuZHBvaW50cyIsImFkZCIsImVkZ2VMaXN0IiwiZ2V0RWRnZUxpc3RUb05vZGUiLCJrIiwibXVsdGlFZGdlIiwiYWRkQWxsIiwibGlzdCIsImN1cnJlbnRTdGFydGluZ1BvaW50IiwibnVtYmVyT2ZDb2x1bW5zIiwiY3VycmVudFkiLCJjdXJyZW50WCIsInBvaW50IiwidHJlZSIsImNlbnRlck5vZGUiLCJmaW5kQ2VudGVyT2ZUcmVlIiwicmFkaWFsTGF5b3V0IiwiZmxvb3IiLCJ0cmFuc2Zvcm0iLCJXT1JMRF9DRU5URVJfWCIsIldPUkxEX0NFTlRFUl9ZIiwic3RhcnRpbmdQb2ludCIsInJhZGlhbFNlcCIsIm1heCIsIm1heERpYWdvbmFsSW5UcmVlIiwiYnJhbmNoUmFkaWFsTGF5b3V0IiwiYm91bmRzIiwiY2FsY3VsYXRlQm91bmRzIiwic2V0RGV2aWNlT3JnWCIsImdldE1pblgiLCJzZXREZXZpY2VPcmdZIiwiZ2V0TWluWSIsInNldFdvcmxkT3JnWCIsInNldFdvcmxkT3JnWSIsImJvdHRvbVJpZ2h0IiwiZ2V0TWF4WCIsImdldE1heFkiLCJpbnZlcnNlVHJhbnNmb3JtUG9pbnQiLCJwYXJlbnRPZk5vZGUiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJkaXN0YW5jZSIsInJhZGlhbFNlcGFyYXRpb24iLCJoYWxmSW50ZXJ2YWwiLCJub2RlQW5nbGUiLCJ0ZXRhIiwiVFdPX1BJIiwiY29zX3RldGEiLCJjb3MiLCJ4XyIsInlfIiwic2luIiwic2V0Q2VudGVyIiwibmVpZ2hib3JFZGdlcyIsImdldEVkZ2VzIiwiY2hpbGRDb3VudCIsImJyYW5jaENvdW50IiwiaW5jRWRnZXNDb3VudCIsInN0YXJ0SW5kZXgiLCJnZXRFZGdlc0JldHdlZW4iLCJ0ZW1wIiwic3BsaWNlIiwiaW5kZXgiLCJpbmRleE9mIiwic3RlcEFuZ2xlIiwiYWJzIiwiY3VycmVudE5laWdoYm9yIiwiZ2V0T3RoZXJFbmQiLCJjaGlsZFN0YXJ0QW5nbGUiLCJjaGlsZEVuZEFuZ2xlIiwibWF4RGlhZ29uYWwiLCJNSU5fVkFMVUUiLCJkaWFnb25hbCIsImdldERpYWdvbmFsIiwiY2FsY1JlcHVsc2lvblJhbmdlIiwiZ3JvdXBaZXJvRGVncmVlTWVtYmVycyIsInNlbGYiLCJ0ZW1wTWVtYmVyR3JvdXBzIiwibWVtYmVyR3JvdXBzIiwiaWRUb0R1bW15Tm9kZSIsInplcm9EZWdyZWUiLCJnZXRQYXJlbnQiLCJnZXROb2RlRGVncmVlV2l0aENoaWxkcmVuIiwidW5kZWZpbmVkIiwiZ2V0VG9CZVRpbGVkIiwicF9pZCIsImtleXMiLCJmb3JFYWNoIiwiZHVtbXlDb21wb3VuZElkIiwiZHVtbXlDb21wb3VuZCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJkdW1teVBhcmVudEdyYXBoIiwiZ2V0R3JhcGhNYW5hZ2VyIiwicGFyZW50R3JhcGgiLCJnZXRDaGlsZCIsInJlbW92ZSIsImNsZWFyQ29tcG91bmRzIiwiY2hpbGRHcmFwaE1hcCIsImlkVG9Ob2RlIiwicGVyZm9ybURGU09uQ29tcG91bmRzIiwiY29tcG91bmRPcmRlciIsImNoaWxkIiwicmVzZXRBbGxOb2RlcyIsInRpbGVDb21wb3VuZE1lbWJlcnMiLCJjbGVhclplcm9EZWdyZWVNZW1iZXJzIiwidGlsZWRaZXJvRGVncmVlUGFjayIsImNvbXBvdW5kTm9kZSIsInRpbGVOb2RlcyIsInJlcG9wdWxhdGVDb21wb3VuZHMiLCJsQ29tcG91bmROb2RlIiwiaG9yaXpvbnRhbE1hcmdpbiIsInZlcnRpY2FsTWFyZ2luIiwiYWRqdXN0TG9jYXRpb25zIiwidGlsZWRNZW1iZXJQYWNrIiwicmVwb3B1bGF0ZVplcm9EZWdyZWVNZW1iZXJzIiwidGlsZWRQYWNrIiwiY2hpbGRHcmFwaCIsImNoaWxkcmVuIiwidGhlQ2hpbGQiLCJnZXROb2RlRGVncmVlIiwiZGVncmVlIiwiZmlsbENvbXBleE9yZGVyQnlERlMiLCJvcmdhbml6YXRpb24iLCJjb21wb3VuZEhvcml6b250YWxNYXJnaW4iLCJjb21wb3VuZFZlcnRpY2FsTWFyZ2luIiwibGVmdCIsInJvd3MiLCJyb3ciLCJtYXhIZWlnaHQiLCJqIiwibG5vZGUiLCJob3Jpem9udGFsUGFkZGluZyIsInZlcnRpY2FsUGFkZGluZyIsIm5vZGVzIiwibWluV2lkdGgiLCJyb3dXaWR0aCIsInJvd0hlaWdodCIsInNvcnQiLCJuMSIsIm4yIiwibE5vZGUiLCJpbnNlcnROb2RlVG9Sb3ciLCJjYW5BZGRIb3Jpem9udGFsIiwiZ2V0U2hvcnRlc3RSb3dJbmRleCIsInNoaWZ0VG9MYXN0Um93Iiwicm93SW5kZXgiLCJtaW5Db21wb3VuZFNpemUiLCJzZWNvbmREaW1lbnNpb24iLCJleHRyYUhlaWdodCIsInIiLCJtaW4iLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJnZXRMb25nZXN0Um93SW5kZXgiLCJleHRyYVdpZHRoIiwic3JpIiwiaERpZmYiLCJhZGRfdG9fcm93X3JhdGlvIiwiYWRkX25ld19yb3dfcmF0aW8iLCJsb25nZXN0IiwibGFzdCIsImRpZmYiLCJpbnN0YW5jZSIsInByZXZUb3RhbCIsImZpbmFsVG90YWwiLCJ0aWxpbmdQcmVMYXlvdXQiLCJ0aWxpbmdQb3N0TGF5b3V0IiwiRkRMYXlvdXROb2RlIiwiSU1hdGgiLCJsb2MiLCJtb3ZlIiwiZ2V0TGF5b3V0IiwiZGlzcGxhY2VtZW50WCIsInNwcmluZ0ZvcmNlWCIsInJlcHVsc2lvbkZvcmNlWCIsImdyYXZpdGF0aW9uRm9yY2VYIiwiZGlzcGxhY2VtZW50WSIsInNwcmluZ0ZvcmNlWSIsInJlcHVsc2lvbkZvcmNlWSIsImdyYXZpdGF0aW9uRm9yY2VZIiwibWF4Tm9kZURpc3BsYWNlbWVudCIsInNpZ24iLCJtb3ZlQnkiLCJwcm9wb2dhdGVEaXNwbGFjZW1lbnRUb0NoaWxkcmVuIiwiZFgiLCJkWSIsInNldFByZWQxIiwicHJlZDEiLCJnZXRQcmVkMSIsImdldFByZWQyIiwicHJlZDIiLCJzZXROZXh0IiwibmV4dCIsImdldE5leHQiLCJzZXRQcm9jZXNzZWQiLCJwcm9jZXNzZWQiLCJpc1Byb2Nlc3NlZCIsIkRpbWVuc2lvbkQiLCJnZXRXaWR0aCIsInNldFdpZHRoIiwiZ2V0SGVpZ2h0Iiwic2V0SGVpZ2h0IiwiRW1pdHRlciIsImxpc3RlbmVycyIsInAiLCJhZGRMaXN0ZW5lciIsImV2ZW50IiwiY2FsbGJhY2siLCJyZW1vdmVMaXN0ZW5lciIsImwiLCJkYXRhIiwiZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSIsIm9sZFRvdGFsRGlzcGxhY2VtZW50IiwiTUFYX0lURVJBVElPTlMiLCJsYXlvdXRRdWFsaXR5IiwiRFJBRlRfUVVBTElUWSIsIlBST09GX1FVQUxJVFkiLCJub3RBbmltYXRlZEl0ZXJhdGlvbnMiLCJ1c2VGUkdyaWRWYXJpYW50IiwiREVGQVVMVF9VU0VfU01BUlRfUkVQVUxTSU9OX1JBTkdFX0NBTENVTEFUSU9OIiwiZ3JpZCIsImxjYURlcHRoIiwic2l6ZU9mU291cmNlSW5MY2EiLCJzaXplT2ZUYXJnZXRJbkxjYSIsImFsbEVkZ2VzIiwiaWRlYWxMZW5ndGgiLCJpc0ludGVyR3JhcGgiLCJnZXRTb3VyY2VJbkxjYSIsImdldEVzdGltYXRlZFNpemUiLCJnZXRUYXJnZXRJbkxjYSIsIlNJTVBMRV9OT0RFX1NJWkUiLCJnZXRMY2EiLCJnZXRJbmNsdXNpb25UcmVlRGVwdGgiLCJQRVJfTEVWRUxfSURFQUxfRURHRV9MRU5HVEhfRkFDVE9SIiwiTUFYX05PREVfRElTUExBQ0VNRU5UX0lOQ1JFTUVOVEFMIiwiTUFYX05PREVfRElTUExBQ0VNRU5UIiwidG90YWxEaXNwbGFjZW1lbnRUaHJlc2hvbGQiLCJyZXB1bHNpb25SYW5nZSIsImxFZGdlcyIsImNhbGNTcHJpbmdGb3JjZSIsIm5vZGVBIiwibm9kZUIiLCJsTm9kZXMiLCJwcm9jZXNzZWROb2RlU2V0IiwiR1JJRF9DQUxDVUxBVElPTl9DSEVDS19QRVJJT0QiLCJjYWxjdWxhdGVSZXB1bHNpb25Gb3JjZU9mQU5vZGUiLCJnZXRPd25lciIsImNhbGNSZXB1bHNpb25Gb3JjZSIsImdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uIiwiY2FsY0dyYXZpdGF0aW9uYWxGb3JjZSIsInNvdXJjZU5vZGUiLCJ0YXJnZXROb2RlIiwic3ByaW5nRm9yY2UiLCJ1bmlmb3JtTGVhZk5vZGVTaXplcyIsInVwZGF0ZUxlbmd0aFNpbXBsZSIsInVwZGF0ZUxlbmd0aCIsImlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCIsImdldExlbmd0aCIsImxlbmd0aFgiLCJsZW5ndGhZIiwicmVjdEEiLCJnZXRSZWN0IiwicmVjdEIiLCJvdmVybGFwQW1vdW50IiwiQXJyYXkiLCJjbGlwUG9pbnRzIiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwiZGlzdGFuY2VTcXVhcmVkIiwicmVwdWxzaW9uRm9yY2UiLCJpbnRlcnNlY3RzIiwiY2FsY1NlcGFyYXRpb25BbW91bnQiLCJjaGlsZHJlbkNvbnN0YW50IiwiZ2V0SW50ZXJzZWN0aW9uIiwiTUlOX1JFUFVMU0lPTl9ESVNUIiwib3duZXJHcmFwaCIsIm93bmVyQ2VudGVyWCIsIm93bmVyQ2VudGVyWSIsImFic0Rpc3RhbmNlWCIsImFic0Rpc3RhbmNlWSIsImVzdGltYXRlZFNpemUiLCJnZXRSaWdodCIsImdldExlZnQiLCJnZXRUb3AiLCJnZXRCb3R0b20iLCJjb252ZXJnZWQiLCJvc2NpbGF0aW5nIiwiYW5pbWF0aW9uRHVyaW5nTGF5b3V0IiwidXBkYXRlIiwiY2FsY0dyaWQiLCJzaXplWCIsInNpemVZIiwicGFyc2VJbnQiLCJhZGROb2RlVG9HcmlkIiwidiIsInRvcCIsInN0YXJ0WCIsImZpbmlzaFgiLCJzdGFydFkiLCJmaW5pc2hZIiwic2V0R3JpZENvb3JkaW5hdGVzIiwic3Vycm91bmRpbmciLCJjb250YWluc0xlYWYiLCJwcnVuZWROb2Rlc0luU3RlcFRlbXAiLCJwcnVuZWROb2Rlc0luU3RlcCIsImxlbmd0aE9mUHJ1bmVkTm9kZXNJblN0ZXAiLCJub2RlRGF0YSIsImZpbmRQbGFjZWZvclBydW5lZE5vZGUiLCJncmlkRm9yUHJ1bmVkTm9kZSIsIm5vZGVUb0Nvbm5lY3QiLCJwcnVuZWROb2RlIiwic3RhcnRHcmlkWCIsImZpbmlzaEdyaWRYIiwic3RhcnRHcmlkWSIsImZpbmlzaEdyaWRZIiwidXBOb2RlQ291bnQiLCJkb3duTm9kZUNvdW50IiwicmlnaHROb2RlQ291bnQiLCJsZWZ0Tm9kZUNvdW50IiwiY29udHJvbFJlZ2lvbnMiLCJtaW5Db3VudCIsIm1pbkluZGV4IiwicmFuZG9tIiwiTUlOX0VER0VfTEVOR1RIIiwiTEVkZ2UiLCJMTm9kZSIsIl9zdGFydFgiLCJfZmluaXNoWCIsIl9zdGFydFkiLCJfZmluaXNoWSIsIlVuaXF1ZUlER2VuZXJldG9yIiwiSGFzaE1hcCIsIm1hcCIsInB1dCIsImtleSIsInZhbHVlIiwidGhlSWQiLCJjcmVhdGVJRCIsImdldCIsImtleVNldCIsInNldCIsIm9iaiIsImNsZWFyIiwiaXNFbXB0eSIsImFkZEFsbFRvIiwicyIsInNlcGFyYXRpb25CdWZmZXIiLCJkaXJlY3Rpb25zIiwiZGVjaWRlRGlyZWN0aW9uc0Zvck92ZXJsYXBwaW5nTm9kZXMiLCJnZXRYIiwiZ2V0WSIsInNsb3BlIiwibW92ZUJ5WSIsIm1vdmVCeVgiLCJnZXRJbnRlcnNlY3Rpb24yIiwicmVzdWx0IiwicDF4IiwicDF5IiwicDJ4IiwicDJ5IiwidG9wTGVmdEF4IiwidG9wTGVmdEF5IiwidG9wUmlnaHRBeCIsImJvdHRvbUxlZnRBeCIsImJvdHRvbUxlZnRBeSIsImJvdHRvbVJpZ2h0QXgiLCJoYWxmV2lkdGhBIiwiZ2V0V2lkdGhIYWxmIiwiaGFsZkhlaWdodEEiLCJnZXRIZWlnaHRIYWxmIiwidG9wTGVmdEJ4IiwidG9wTGVmdEJ5IiwidG9wUmlnaHRCeCIsImJvdHRvbUxlZnRCeCIsImJvdHRvbUxlZnRCeSIsImJvdHRvbVJpZ2h0QngiLCJoYWxmV2lkdGhCIiwiaGFsZkhlaWdodEIiLCJjbGlwUG9pbnRBRm91bmQiLCJjbGlwUG9pbnRCRm91bmQiLCJzbG9wZUEiLCJzbG9wZUIiLCJzbG9wZVByaW1lIiwiY2FyZGluYWxEaXJlY3Rpb25BIiwiY2FyZGluYWxEaXJlY3Rpb25CIiwidGVtcFBvaW50QXgiLCJ0ZW1wUG9pbnRBeSIsInRlbXBQb2ludEJ4IiwidGVtcFBvaW50QnkiLCJnZXRDYXJkaW5hbERpcmVjdGlvbiIsImxpbmUiLCJzMSIsInMyIiwiZjEiLCJmMiIsIngxIiwieTEiLCJ4MiIsInkyIiwieDMiLCJ5MyIsIng0IiwieTQiLCJhMSIsImEyIiwiYjEiLCJiMiIsImMxIiwiYzIiLCJkZW5vbSIsIkhBTEZfUEkiLCJQSSIsIk9ORV9BTkRfSEFMRl9QSSIsIlRIUkVFX1BJIiwiTEdyYXBoT2JqZWN0IiwidkdyYXBoT2JqZWN0IiwiYmVuZHBvaW50cyIsImxjYSIsInNvdXJjZUluTGNhIiwidGFyZ2V0SW5MY2EiLCJnZXRPdGhlckVuZEluR3JhcGgiLCJvdGhlckVuZCIsInJvb3QiLCJjbGlwUG9pbnRDb29yZGluYXRlcyIsIlJlY3RhbmdsZUQiLCJMaW5rZWRMaXN0Iiwib2JqMiIsIm1hcmdpbiIsIkRFRkFVTFRfR1JBUEhfTUFSR0lOIiwicmlnaHQiLCJib3R0b20iLCJvYmoxIiwib3duZXIiLCJlZGdlc1RvQmVSZW1vdmVkIiwic2xpY2UiLCJzb3VyY2VJbmRleCIsInRhcmdldEluZGV4IiwidXBkYXRlTGVmdFRvcCIsIm5vZGVUb3AiLCJub2RlTGVmdCIsInJlY3Vyc2l2ZSIsIm5vZGVSaWdodCIsIm5vZGVCb3R0b20iLCJib3VuZGluZ1JlY3QiLCJFTVBUWV9DT01QT1VORF9OT0RFX1NJWkUiLCJ0b0JlVmlzaXRlZCIsImN1cnJlbnROb2RlIiwiY2hpbGRyZW5PZk5vZGUiLCJ3aXRoQ2hpbGRyZW4iLCJzaGlmdCIsIm5laWdoYm9yRWRnZSIsImNoaWxkcmVuT2ZOZWlnaGJvciIsIm5vT2ZWaXNpdGVkSW5UaGlzR3JhcGgiLCJ2aXNpdGVkSWQiLCJ2aXNpdGVkTm9kZSIsImFkZFJvb3QiLCJuZ3JhcGgiLCJubm9kZSIsInNldFJvb3RHcmFwaCIsInJvb3RHcmFwaCIsInBhcmVudE5vZGUiLCJzb3VyY2VHcmFwaCIsInRhcmdldEdyYXBoIiwibE9iaiIsIm5vZGVzVG9CZVJlbW92ZWQiLCJhbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiIsImlzT25lQW5jZXN0b3JPZk90aGVyIiwiZmlyc3ROb2RlIiwic2Vjb25kTm9kZSIsInNvdXJjZUFuY2VzdG9yR3JhcGgiLCJ0YXJnZXRBbmNlc3RvckdyYXBoIiwiY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9yIiwiZmlyc3RPd25lckdyYXBoIiwic2Vjb25kT3duZXJHcmFwaCIsImRlcHRoIiwiaW5jbHVzaW9uVHJlZURlcHRoIiwiaW5jbHVkZXNJbnZhbGlkRWRnZSIsIlJhbmRvbVNlZWQiLCJnZXRDZW50ZXIiLCJnZXRMb2NhdGlvbiIsInNldFJlY3QiLCJ1cHBlckxlZnQiLCJkaW1lbnNpb24iLCJjeCIsImN5Iiwic2V0TG9jYXRpb24iLCJkeCIsImR5IiwidG8iLCJvdGhlciIsImdldE5laWdoYm9yc0xpc3QiLCJuZWlnaGJvcnMiLCJ3aXRoTmVpZ2hib3JzTGlzdCIsImNoaWxkTm9kZSIsInNjYXR0ZXIiLCJyYW5kb21DZW50ZXJYIiwicmFuZG9tQ2VudGVyWSIsIm1pblgiLCJJTklUSUFMX1dPUkxEX0JPVU5EQVJZIiwibWF4WCIsIm5leHREb3VibGUiLCJtaW5ZIiwibWF4WSIsIk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyIsImxhYmVsV2lkdGgiLCJsYWJlbEhlaWdodCIsImxhYmVsUG9zIiwidHJhbnMiLCJXT1JMRF9CT1VOREFSWSIsImxlZnRUb3AiLCJ2TGVmdFRvcCIsImlzUmVtb3RlVXNlIiwiREVGQVVMVF9RVUFMSVRZIiwiREVGQVVMVF9JTkNSRU1FTlRBTCIsImFuaW1hdGlvbk9uTGF5b3V0IiwiREVGQVVMVF9BTklNQVRJT05fT05fTEFZT1VUIiwiREVGQVVMVF9BTklNQVRJT05fRFVSSU5HX0xBWU9VVCIsIkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRCIsIkRFRkFVTFRfVU5JRk9STV9MRUFGX05PREVfU0laRVMiLCJlZGdlVG9EdW1teU5vZGVzIiwiaXNMYXlvdXRGaW5pc2hlZCIsIlJBTkRPTV9TRUVEIiwiY2hlY2tMYXlvdXRTdWNjZXNzIiwicnVuTGF5b3V0IiwiaXNMYXlvdXRTdWNjZXNzZnVsbCIsImRvUG9zdExheW91dCIsInVwZGF0ZTIiLCJjcmVhdGVCZW5kcG9pbnRzRnJvbUR1bW15Tm9kZXMiLCJuZXdMZWZ0VG9wIiwiZmxhdEZvcmVzdCIsImlzRm9yZXN0IiwiaXNGbGF0IiwicGFyZW50cyIsInVuUHJvY2Vzc2VkTm9kZXMiLCJkdW1teU5vZGVzIiwicHJldiIsImR1bW15Tm9kZSIsIkRpbWVuc2lvbiIsImR1bW15RWRnZSIsImxFZGdlIiwicGF0aCIsImVicCIsInNsaWRlclZhbHVlIiwiZGVmYXVsdFZhbHVlIiwibWluRGl2IiwibWF4TXVsIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsImEiLCJiIiwicmVtb3ZlZE5vZGVzIiwicmVtYWluaW5nRGVncmVlcyIsImZvdW5kQ2VudGVyIiwidGVtcExpc3QiLCJ0ZW1wTGlzdDIiLCJuZWlnaGJvdXJzIiwibmVpZ2hib3VyIiwib3RoZXJEZWdyZWUiLCJuZXdEZWdyZWUiLCJzZXRHcmFwaE1hbmFnZXIiLCJTSU1QTEVfTk9ERV9IQUxGX1NJWkUiLCJub2RlRnJvbSIsImhlYWQiLCJ0YWlsIiwidmFscyIsInZhbCIsIm90aGVyTm9kZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRyYW5zbGF0ZSIsImVxdWFscyIsInB0IiwidG9TdHJpbmciLCJzZXRYIiwic2V0WSIsImdldERpZmZlcmVuY2UiLCJnZXRDb3B5IiwiZGltIiwic2VlZCIsImx3b3JsZE9yZ1giLCJsd29ybGRPcmdZIiwibGRldmljZU9yZ1giLCJsZGV2aWNlT3JnWSIsImx3b3JsZEV4dFgiLCJsd29ybGRFeHRZIiwibGRldmljZUV4dFgiLCJsZGV2aWNlRXh0WSIsImdldFdvcmxkT3JnWCIsIndveCIsImdldFdvcmxkT3JnWSIsIndveSIsImdldFdvcmxkRXh0WCIsInNldFdvcmxkRXh0WCIsIndleCIsImdldFdvcmxkRXh0WSIsInNldFdvcmxkRXh0WSIsIndleSIsImdldERldmljZU9yZ1giLCJkb3giLCJnZXREZXZpY2VPcmdZIiwiZG95IiwiZ2V0RGV2aWNlRXh0WCIsInNldERldmljZUV4dFgiLCJkZXgiLCJnZXREZXZpY2VFeHRZIiwic2V0RGV2aWNlRXh0WSIsImRleSIsInRyYW5zZm9ybVgiLCJ4RGV2aWNlIiwid29ybGRFeHRYIiwidHJhbnNmb3JtWSIsInlEZXZpY2UiLCJ3b3JsZEV4dFkiLCJpbnZlcnNlVHJhbnNmb3JtWCIsInhXb3JsZCIsImRldmljZUV4dFgiLCJpbnZlcnNlVHJhbnNmb3JtWSIsInlXb3JsZCIsImRldmljZUV4dFkiLCJpblBvaW50Iiwib3V0UG9pbnQiLCJsYXN0SUQiLCJpc1ByaW1pdGl2ZSIsInVuaXF1ZUlEIiwiZ2V0U3RyaW5nIiwiYXJnIiwidHlwZSIsImRlZmF1bHRzIiwicmVhZHkiLCJzdG9wIiwibm9kZURpbWVuc2lvbnNJbmNsdWRlTGFiZWxzIiwicmVmcmVzaCIsImZpdCIsInBhZGRpbmciLCJyYW5kb21pemUiLCJub2RlUmVwdWxzaW9uIiwiZWRnZUVsYXN0aWNpdHkiLCJuZXN0aW5nRmFjdG9yIiwiZ3Jhdml0eSIsIm51bUl0ZXIiLCJ0aWxlIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJ0aWxpbmdQYWRkaW5nVmVydGljYWwiLCJ0aWxpbmdQYWRkaW5nSG9yaXpvbnRhbCIsImdyYXZpdHlSYW5nZUNvbXBvdW5kIiwiZ3Jhdml0eUNvbXBvdW5kIiwiZ3Jhdml0eVJhbmdlIiwiaW5pdGlhbEVuZXJneU9uSW5jcmVtZW50YWwiLCJleHRlbmQiLCJvcHRpb25zIiwiX0NvU0VMYXlvdXQiLCJfb3B0aW9ucyIsImdldFVzZXJPcHRpb25zIiwicnVuIiwiZnJhbWVJZCIsImlkVG9MTm9kZSIsInN0b3BwZWQiLCJ0cmlnZ2VyIiwiZWxlcyIsInByb2Nlc3NDaGlsZHJlbkxpc3QiLCJnZXRUb3BNb3N0Tm9kZXMiLCJlMSIsImdldFBvc2l0aW9ucyIsImVsZSIsIml0ZXJhdGVBbmltYXRlZCIsImFmdGVyUmVwb3NpdGlvbiIsIm9uZSIsInRpY2tzUGVyRnJhbWUiLCJpc0RvbmUiLCJwb3NpdGlvbnMiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImFuaW1hdGlvbkRhdGEiLCJwTm9kZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm5vdCIsImxheW91dFBvc2l0aW9ucyIsIm5vZGVzTWFwIiwicm9vdHMiLCJjaGlsZHJlbl9vZl9jaGlsZHJlbiIsInRoZU5vZGUiLCJkaW1lbnNpb25zIiwibGF5b3V0RGltZW5zaW9ucyIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsInBvc2l0aW9uIiwicGFyc2VGbG9hdCIsImNzcyIsImlzUGFyZW50IiwiYm91bmRpbmdCb3giLCJpbmNsdWRlTGFiZWxzIiwiaW5jbHVkZU5vZGVzIiwiaXNOYU4iLCJ0aGVOZXdHcmFwaCIsImN5dG9zY2FwZSIsIkVYQ0xVREVEX05PREVTIiwicmVnaXN0ZXIiLCJvcmdQcm90b3R5cGUiLCJleGNsdWRlZE5vZGVzIiwib3B0cyIsImFwaSIsImFwcGx5TWVyZ2VkTGF5b3V0IiwiYXBwbHlVbm5hbWVkTGF5b3V0IiwiY3lfaGVhZGxlc3MiLCJjcmVhdGVIZWFkbGVzc0luc3RhbmNlIiwiaGVhZGxlc3MiLCJzdHlsZUVuYWJsZWQiLCJvdGhlckN5IiwiZWxlbWVudHMiLCJvdGhlckVsZXMiLCJhbGxfZWxlcyIsInVuaW9uIiwicG9zIiwiY29tbW9uRWxlcyIsImNvbW1vbl9pZCIsImlzTGF5b3V0U3RvcHBlZCIsImlzT3RoZXJMYXlvdXRTdG9wcGVkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25FQSxJQUFJQSxvQkFBb0IsbUJBQUFDLENBQVEsMkVBQVIsQ0FBeEI7O0FBRUEsU0FBU0MsYUFBVCxHQUF5QixDQUN4Qjs7QUFFRDtBQUNBLEtBQUssSUFBSUMsSUFBVCxJQUFpQkgsaUJBQWpCLEVBQW9DO0FBQ2xDRSxnQkFBY0MsSUFBZCxJQUFzQkgsa0JBQWtCRyxJQUFsQixDQUF0QjtBQUNEOztB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aEI7QUFDQTtBQUNELEdBTkQ7QUFRQSxFQTNDRDtBQTRDQSxDQTNERDs7UUE2RFE4QyxzQixHQUFBQSxzQjtRQUF3QkgsaUIsR0FBQUEsaUI7UUFBbUJDLGtCLEdBQUFBLGtCIiwiZmlsZSI6ImN5dG9zY2FwZS1zeW5jaGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY3l0b3NjYXBlU3luY2hlZFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjeXRvc2NhcGVTeW5jaGVkXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgRkRMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0ZETGF5b3V0Q29uc3RhbnRzJyk7XG5cbmZ1bmN0aW9uIENvU0VDb25zdGFudHMoKSB7XG59XG5cbi8vQ29TRUNvbnN0YW50cyBpbmhlcml0cyBzdGF0aWMgcHJvcHMgaW4gRkRMYXlvdXRDb25zdGFudHNcbmZvciAodmFyIHByb3AgaW4gRkRMYXlvdXRDb25zdGFudHMpIHtcbiAgQ29TRUNvbnN0YW50c1twcm9wXSA9IEZETGF5b3V0Q29uc3RhbnRzW3Byb3BdO1xufVxuXG5Db1NFQ29uc3RhbnRzLkRFRkFVTFRfVVNFX01VTFRJX0xFVkVMX1NDQUxJTkcgPSBmYWxzZTtcbkNvU0VDb25zdGFudHMuREVGQVVMVF9SQURJQUxfU0VQQVJBVElPTiA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEg7XG5Db1NFQ29uc3RhbnRzLkRFRkFVTFRfQ09NUE9ORU5UX1NFUEVSQVRJT04gPSA2MDtcbkNvU0VDb25zdGFudHMuVElMRSA9IHRydWU7XG5Db1NFQ29uc3RhbnRzLlRJTElOR19QQURESU5HX1ZFUlRJQ0FMID0gMTA7XG5Db1NFQ29uc3RhbnRzLlRJTElOR19QQURESU5HX0hPUklaT05UQUwgPSAxMDtcblxubW9kdWxlLmV4cG9ydHMgPSBDb1NFQ29uc3RhbnRzO1xuIiwidmFyIEZETGF5b3V0RWRnZSA9IHJlcXVpcmUoJy4vRkRMYXlvdXRFZGdlJyk7XG5cbmZ1bmN0aW9uIENvU0VFZGdlKHNvdXJjZSwgdGFyZ2V0LCB2RWRnZSkge1xuICBGRExheW91dEVkZ2UuY2FsbCh0aGlzLCBzb3VyY2UsIHRhcmdldCwgdkVkZ2UpO1xufVxuXG5Db1NFRWRnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEZETGF5b3V0RWRnZS5wcm90b3R5cGUpO1xuZm9yICh2YXIgcHJvcCBpbiBGRExheW91dEVkZ2UpIHtcbiAgQ29TRUVkZ2VbcHJvcF0gPSBGRExheW91dEVkZ2VbcHJvcF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29TRUVkZ2VcbiIsInZhciBMR3JhcGggPSByZXF1aXJlKCcuL0xHcmFwaCcpO1xuXG5mdW5jdGlvbiBDb1NFR3JhcGgocGFyZW50LCBncmFwaE1nciwgdkdyYXBoKSB7XG4gIExHcmFwaC5jYWxsKHRoaXMsIHBhcmVudCwgZ3JhcGhNZ3IsIHZHcmFwaCk7XG59XG5cbkNvU0VHcmFwaC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaC5wcm90b3R5cGUpO1xuZm9yICh2YXIgcHJvcCBpbiBMR3JhcGgpIHtcbiAgQ29TRUdyYXBoW3Byb3BdID0gTEdyYXBoW3Byb3BdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvU0VHcmFwaDtcbiIsInZhciBMR3JhcGhNYW5hZ2VyID0gcmVxdWlyZSgnLi9MR3JhcGhNYW5hZ2VyJyk7XG5cbmZ1bmN0aW9uIENvU0VHcmFwaE1hbmFnZXIobGF5b3V0KSB7XG4gIExHcmFwaE1hbmFnZXIuY2FsbCh0aGlzLCBsYXlvdXQpO1xufVxuXG5Db1NFR3JhcGhNYW5hZ2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEdyYXBoTWFuYWdlci5wcm90b3R5cGUpO1xuZm9yICh2YXIgcHJvcCBpbiBMR3JhcGhNYW5hZ2VyKSB7XG4gIENvU0VHcmFwaE1hbmFnZXJbcHJvcF0gPSBMR3JhcGhNYW5hZ2VyW3Byb3BdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvU0VHcmFwaE1hbmFnZXI7XG4iLCJ2YXIgRkRMYXlvdXQgPSByZXF1aXJlKCcuL0ZETGF5b3V0Jyk7XG52YXIgQ29TRUdyYXBoTWFuYWdlciA9IHJlcXVpcmUoJy4vQ29TRUdyYXBoTWFuYWdlcicpO1xudmFyIENvU0VHcmFwaCA9IHJlcXVpcmUoJy4vQ29TRUdyYXBoJyk7XG52YXIgQ29TRU5vZGUgPSByZXF1aXJlKCcuL0NvU0VOb2RlJyk7XG52YXIgQ29TRUVkZ2UgPSByZXF1aXJlKCcuL0NvU0VFZGdlJyk7XG52YXIgQ29TRUNvbnN0YW50cyA9IHJlcXVpcmUoJy4vQ29TRUNvbnN0YW50cycpO1xudmFyIEZETGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9GRExheW91dENvbnN0YW50cycpO1xudmFyIExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vTGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgUG9pbnQgPSByZXF1aXJlKCcuL1BvaW50Jyk7XG52YXIgUG9pbnREID0gcmVxdWlyZSgnLi9Qb2ludEQnKTtcbnZhciBMYXlvdXQgPSByZXF1aXJlKCcuL0xheW91dCcpO1xudmFyIEludGVnZXIgPSByZXF1aXJlKCcuL0ludGVnZXInKTtcbnZhciBJR2VvbWV0cnkgPSByZXF1aXJlKCcuL0lHZW9tZXRyeScpO1xudmFyIExHcmFwaCA9IHJlcXVpcmUoJy4vTEdyYXBoJyk7XG52YXIgVHJhbnNmb3JtID0gcmVxdWlyZSgnLi9UcmFuc2Zvcm0nKTtcblxuZnVuY3Rpb24gQ29TRUxheW91dCgpIHtcbiAgRkRMYXlvdXQuY2FsbCh0aGlzKTtcbiAgXG4gIHRoaXMudG9CZVRpbGVkID0ge307IC8vIE1lbW9yaXplIGlmIGEgbm9kZSBpcyB0byBiZSB0aWxlZCBvciBpcyB0aWxlZFxufVxuXG5Db1NFTGF5b3V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRkRMYXlvdXQucHJvdG90eXBlKTtcblxuZm9yICh2YXIgcHJvcCBpbiBGRExheW91dCkge1xuICBDb1NFTGF5b3V0W3Byb3BdID0gRkRMYXlvdXRbcHJvcF07XG59XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLm5ld0dyYXBoTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGdtID0gbmV3IENvU0VHcmFwaE1hbmFnZXIodGhpcyk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyID0gZ207XG4gIHJldHVybiBnbTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLm5ld0dyYXBoID0gZnVuY3Rpb24gKHZHcmFwaCkge1xuICByZXR1cm4gbmV3IENvU0VHcmFwaChudWxsLCB0aGlzLmdyYXBoTWFuYWdlciwgdkdyYXBoKTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLm5ld05vZGUgPSBmdW5jdGlvbiAodk5vZGUpIHtcbiAgcmV0dXJuIG5ldyBDb1NFTm9kZSh0aGlzLmdyYXBoTWFuYWdlciwgdk5vZGUpO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUubmV3RWRnZSA9IGZ1bmN0aW9uICh2RWRnZSkge1xuICByZXR1cm4gbmV3IENvU0VFZGdlKG51bGwsIG51bGwsIHZFZGdlKTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmluaXRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkge1xuICBGRExheW91dC5wcm90b3R5cGUuaW5pdFBhcmFtZXRlcnMuY2FsbCh0aGlzLCBhcmd1bWVudHMpO1xuICBpZiAoIXRoaXMuaXNTdWJMYXlvdXQpIHtcbiAgICBpZiAoQ29TRUNvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIIDwgMTApXG4gICAge1xuICAgICAgdGhpcy5pZGVhbEVkZ2VMZW5ndGggPSAxMDtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIHRoaXMuaWRlYWxFZGdlTGVuZ3RoID0gQ29TRUNvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIO1xuICAgIH1cblxuICAgIHRoaXMudXNlU21hcnRJZGVhbEVkZ2VMZW5ndGhDYWxjdWxhdGlvbiA9XG4gICAgICAgICAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfVVNFX1NNQVJUX0lERUFMX0VER0VfTEVOR1RIX0NBTENVTEFUSU9OO1xuICAgIHRoaXMuc3ByaW5nQ29uc3RhbnQgPVxuICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9TUFJJTkdfU1RSRU5HVEg7XG4gICAgdGhpcy5yZXB1bHNpb25Db25zdGFudCA9XG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX1JFUFVMU0lPTl9TVFJFTkdUSDtcbiAgICB0aGlzLmdyYXZpdHlDb25zdGFudCA9XG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfU1RSRU5HVEg7XG4gICAgdGhpcy5jb21wb3VuZEdyYXZpdHlDb25zdGFudCA9XG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfU1RSRU5HVEg7XG4gICAgdGhpcy5ncmF2aXR5UmFuZ2VGYWN0b3IgPVxuICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUjtcbiAgICB0aGlzLmNvbXBvdW5kR3Jhdml0eVJhbmdlRmFjdG9yID1cbiAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1I7XG4gIH1cbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNyZWF0ZUJlbmRzQXNOZWVkZWQgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEO1xuICBpZiAoY3JlYXRlQmVuZHNBc05lZWRlZClcbiAge1xuICAgIHRoaXMuY3JlYXRlQmVuZHBvaW50cygpO1xuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsRWRnZXMoKTtcbiAgfVxuXG4gIHRoaXMubGV2ZWwgPSAwO1xuICByZXR1cm4gdGhpcy5jbGFzc2ljTGF5b3V0KCk7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5jbGFzc2ljTGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm5vZGVzV2l0aEdyYXZpdHkgPSB0aGlzLmNhbGN1bGF0ZU5vZGVzVG9BcHBseUdyYXZpdGF0aW9uVG8oKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIuc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24odGhpcy5ub2Rlc1dpdGhHcmF2aXR5KTtcbiAgdGhpcy5jYWxjTm9PZkNoaWxkcmVuRm9yQWxsTm9kZXMoKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIuY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9ycygpO1xuICB0aGlzLmdyYXBoTWFuYWdlci5jYWxjSW5jbHVzaW9uVHJlZURlcHRocygpO1xuICB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuY2FsY0VzdGltYXRlZFNpemUoKTtcbiAgdGhpcy5jYWxjSWRlYWxFZGdlTGVuZ3RocygpO1xuICBcbiAgaWYgKCF0aGlzLmluY3JlbWVudGFsKVxuICB7XG4gICAgdmFyIGZvcmVzdCA9IHRoaXMuZ2V0RmxhdEZvcmVzdCgpO1xuXG4gICAgLy8gVGhlIGdyYXBoIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGxheW91dCBpcyBmbGF0IGFuZCBhIGZvcmVzdFxuICAgIGlmIChmb3Jlc3QubGVuZ3RoID4gMClcbiAgICB7XG4gICAgICB0aGlzLnBvc2l0aW9uTm9kZXNSYWRpYWxseShmb3Jlc3QpO1xuICAgIH1cbiAgICAvLyBUaGUgZ3JhcGggYXNzb2NpYXRlZCB3aXRoIHRoaXMgbGF5b3V0IGlzIG5vdCBmbGF0IG9yIGEgZm9yZXN0XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIC8vIFJlZHVjZSB0aGUgdHJlZXMgd2hlbiBpbmNyZW1lbnRhbCBtb2RlIGlzIG5vdCBlbmFibGVkIGFuZCBncmFwaCBpcyBub3QgYSBmb3Jlc3QgXG4gICAgICB0aGlzLnJlZHVjZVRyZWVzKCk7XG4gICAgICAvLyBVcGRhdGUgbm9kZXMgdGhhdCBncmF2aXR5IHdpbGwgYmUgYXBwbGllZFxuICAgICAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbigpO1xuICAgICAgdmFyIGFsbE5vZGVzID0gbmV3IFNldCh0aGlzLmdldEFsbE5vZGVzKCkpO1xuICAgICAgdmFyIGludGVyc2VjdGlvbiA9IHRoaXMubm9kZXNXaXRoR3Jhdml0eS5maWx0ZXIoeCA9PiBhbGxOb2Rlcy5oYXMoeCkpO1xuICAgICAgdGhpcy5ncmFwaE1hbmFnZXIuc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oaW50ZXJzZWN0aW9uKTtcbiAgICAgIFxuICAgICAgdGhpcy5wb3NpdGlvbk5vZGVzUmFuZG9tbHkoKTtcbiAgICB9XG4gIH1cblxuICB0aGlzLmluaXRTcHJpbmdFbWJlZGRlcigpO1xuICB0aGlzLnJ1blNwcmluZ0VtYmVkZGVyKCk7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudG90YWxJdGVyYXRpb25zKys7XG4gIFxuICBpZiAodGhpcy50b3RhbEl0ZXJhdGlvbnMgPT09IHRoaXMubWF4SXRlcmF0aW9ucyAmJiAhdGhpcy5pc1RyZWVHcm93aW5nICYmICF0aGlzLmlzR3Jvd3RoRmluaXNoZWQpIHtcbiAgICBpZih0aGlzLnBydW5lZE5vZGVzQWxsLmxlbmd0aCA+IDApe1xuICAgICAgdGhpcy5pc1RyZWVHcm93aW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTsgIFxuICAgIH1cbiAgfVxuICBcbiAgaWYgKHRoaXMudG90YWxJdGVyYXRpb25zICUgRkRMYXlvdXRDb25zdGFudHMuQ09OVkVSR0VOQ0VfQ0hFQ0tfUEVSSU9EID09IDAgICYmICF0aGlzLmlzVHJlZUdyb3dpbmcgJiYgIXRoaXMuaXNHcm93dGhGaW5pc2hlZClcbiAge1xuICAgIGlmICh0aGlzLmlzQ29udmVyZ2VkKCkpXG4gICAge1xuICAgICAgaWYodGhpcy5wcnVuZWROb2Rlc0FsbC5sZW5ndGggPiAwKXtcbiAgICAgICAgdGhpcy5pc1RyZWVHcm93aW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTsgIFxuICAgICAgfSBcbiAgICB9XG5cbiAgICB0aGlzLmNvb2xpbmdGYWN0b3IgPSB0aGlzLmluaXRpYWxDb29saW5nRmFjdG9yICpcbiAgICAgICAgICAgICgodGhpcy5tYXhJdGVyYXRpb25zIC0gdGhpcy50b3RhbEl0ZXJhdGlvbnMpIC8gdGhpcy5tYXhJdGVyYXRpb25zKTtcbiAgICB0aGlzLmFuaW1hdGlvblBlcmlvZCA9IE1hdGguY2VpbCh0aGlzLmluaXRpYWxBbmltYXRpb25QZXJpb2QgKiBNYXRoLnNxcnQodGhpcy5jb29saW5nRmFjdG9yKSk7XG4gIH1cbiAgLy8gT3BlcmF0aW9ucyB3aGlsZSB0cmVlIGlzIGdyb3dpbmcgYWdhaW4gXG4gIGlmKHRoaXMuaXNUcmVlR3Jvd2luZyl7XG4gICAgaWYodGhpcy5ncm93VHJlZUl0ZXJhdGlvbnMgJSAxMCA9PSAwKXtcbiAgICAgIGlmKHRoaXMucHJ1bmVkTm9kZXNBbGwubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmdyYXBoTWFuYWdlci51cGRhdGVCb3VuZHMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVHcmlkKCk7XG4gICAgICAgIHRoaXMuZ3Jvd1RyZWUodGhpcy5wcnVuZWROb2Rlc0FsbCk7XG4gICAgICAgIC8vIFVwZGF0ZSBub2RlcyB0aGF0IGdyYXZpdHkgd2lsbCBiZSBhcHBsaWVkXG4gICAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oKTtcbiAgICAgICAgdmFyIGFsbE5vZGVzID0gbmV3IFNldCh0aGlzLmdldEFsbE5vZGVzKCkpO1xuICAgICAgICB2YXIgaW50ZXJzZWN0aW9uID0gdGhpcy5ub2Rlc1dpdGhHcmF2aXR5LmZpbHRlcih4ID0+IGFsbE5vZGVzLmhhcyh4KSk7XG4gICAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uKGludGVyc2VjdGlvbik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmdyYXBoTWFuYWdlci51cGRhdGVCb3VuZHMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVHcmlkKCk7IFxuICAgICAgICB0aGlzLmNvb2xpbmdGYWN0b3IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMOyBcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmlzVHJlZUdyb3dpbmcgPSBmYWxzZTsgIFxuICAgICAgICB0aGlzLmlzR3Jvd3RoRmluaXNoZWQgPSB0cnVlOyBcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5ncm93VHJlZUl0ZXJhdGlvbnMrKztcbiAgfVxuICAvLyBPcGVyYXRpb25zIGFmdGVyIGdyb3d0aCBpcyBmaW5pc2hlZFxuICBpZih0aGlzLmlzR3Jvd3RoRmluaXNoZWQpe1xuICAgIGlmICh0aGlzLmlzQ29udmVyZ2VkKCkpXG4gICAge1xuICAgICAgcmV0dXJuIHRydWU7ICBcbiAgICB9XG4gICAgaWYodGhpcy5hZnRlckdyb3d0aEl0ZXJhdGlvbnMgJSAxMCA9PSAwKXtcbiAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnVwZGF0ZUJvdW5kcygpO1xuICAgICAgdGhpcy51cGRhdGVHcmlkKCk7IFxuICAgIH1cbiAgICB0aGlzLmNvb2xpbmdGYWN0b3IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMICogKCgxMDAgLSB0aGlzLmFmdGVyR3Jvd3RoSXRlcmF0aW9ucykgLyAxMDApO1xuICAgIHRoaXMuYWZ0ZXJHcm93dGhJdGVyYXRpb25zKys7XG4gIH1cbiAgXG4gIHRoaXMudG90YWxEaXNwbGFjZW1lbnQgPSAwO1xuICB0aGlzLmdyYXBoTWFuYWdlci51cGRhdGVCb3VuZHMoKTtcbiAgdGhpcy5jYWxjU3ByaW5nRm9yY2VzKCk7XG4gIHRoaXMuY2FsY1JlcHVsc2lvbkZvcmNlcygpO1xuICB0aGlzLmNhbGNHcmF2aXRhdGlvbmFsRm9yY2VzKCk7XG4gIHRoaXMubW92ZU5vZGVzKCk7XG4gIHRoaXMuYW5pbWF0ZSgpO1xuICBcbiAgcmV0dXJuIGZhbHNlOyAvLyBMYXlvdXQgaXMgbm90IGVuZGVkIHlldCByZXR1cm4gZmFsc2Vcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmdldFBvc2l0aW9uc0RhdGEgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGFsbE5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXMoKTtcbiAgdmFyIHBEYXRhID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcmVjdCA9IGFsbE5vZGVzW2ldLnJlY3Q7XG4gICAgdmFyIGlkID0gYWxsTm9kZXNbaV0uaWQ7XG4gICAgcERhdGFbaWRdID0ge1xuICAgICAgaWQ6IGlkLFxuICAgICAgeDogcmVjdC5nZXRDZW50ZXJYKCksXG4gICAgICB5OiByZWN0LmdldENlbnRlclkoKSxcbiAgICAgIHc6IHJlY3Qud2lkdGgsXG4gICAgICBoOiByZWN0LmhlaWdodFxuICAgIH07XG4gIH1cbiAgXG4gIHJldHVybiBwRGF0YTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnJ1blNwcmluZ0VtYmVkZGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmluaXRpYWxBbmltYXRpb25QZXJpb2QgPSAyNTtcbiAgdGhpcy5hbmltYXRpb25QZXJpb2QgPSB0aGlzLmluaXRpYWxBbmltYXRpb25QZXJpb2Q7XG4gIHZhciBsYXlvdXRFbmRlZCA9IGZhbHNlO1xuICBcbiAgLy8gSWYgYW1pbmF0ZSBvcHRpb24gaXMgJ2R1cmluZycgc2lnbmFsIHRoYXQgbGF5b3V0IGlzIHN1cHBvc2VkIHRvIHN0YXJ0IGl0ZXJhdGluZ1xuICBpZiAoIEZETGF5b3V0Q29uc3RhbnRzLkFOSU1BVEUgPT09ICdkdXJpbmcnICkge1xuICAgIHRoaXMuZW1pdCgnbGF5b3V0c3RhcnRlZCcpO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIElmIGFtaW5hdGUgb3B0aW9uIGlzICdkdXJpbmcnIHRpY2soKSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBvbiBpbmRleC5qc1xuICAgIHdoaWxlICghbGF5b3V0RW5kZWQpIHtcbiAgICAgIGxheW91dEVuZGVkID0gdGhpcy50aWNrKCk7XG4gICAgfVxuXG4gICAgdGhpcy5ncmFwaE1hbmFnZXIudXBkYXRlQm91bmRzKCk7XG4gIH1cbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmNhbGN1bGF0ZU5vZGVzVG9BcHBseUdyYXZpdGF0aW9uVG8gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBub2RlTGlzdCA9IFtdO1xuICB2YXIgZ3JhcGg7XG5cbiAgdmFyIGdyYXBocyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEdyYXBocygpO1xuICB2YXIgc2l6ZSA9IGdyYXBocy5sZW5ndGg7XG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKVxuICB7XG4gICAgZ3JhcGggPSBncmFwaHNbaV07XG5cbiAgICBncmFwaC51cGRhdGVDb25uZWN0ZWQoKTtcblxuICAgIGlmICghZ3JhcGguaXNDb25uZWN0ZWQpXG4gICAge1xuICAgICAgbm9kZUxpc3QgPSBub2RlTGlzdC5jb25jYXQoZ3JhcGguZ2V0Tm9kZXMoKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGVMaXN0O1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuY2FsY05vT2ZDaGlsZHJlbkZvckFsbE5vZGVzID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIG5vZGU7XG4gIHZhciBhbGxOb2RlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzKCk7XG4gIFxuICBmb3IodmFyIGkgPSAwOyBpIDwgYWxsTm9kZXMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICAgIG5vZGUgPSBhbGxOb2Rlc1tpXTtcbiAgICAgIG5vZGUubm9PZkNoaWxkcmVuID0gbm9kZS5nZXROb09mQ2hpbGRyZW4oKTtcbiAgfVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuY3JlYXRlQmVuZHBvaW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGVkZ2VzID0gW107XG4gIGVkZ2VzID0gZWRnZXMuY29uY2F0KHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbEVkZ2VzKCkpO1xuICB2YXIgdmlzaXRlZCA9IG5ldyBIYXNoU2V0KCk7XG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgZWRnZXMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICB2YXIgZWRnZSA9IGVkZ2VzW2ldO1xuXG4gICAgaWYgKCF2aXNpdGVkLmNvbnRhaW5zKGVkZ2UpKVxuICAgIHtcbiAgICAgIHZhciBzb3VyY2UgPSBlZGdlLmdldFNvdXJjZSgpO1xuICAgICAgdmFyIHRhcmdldCA9IGVkZ2UuZ2V0VGFyZ2V0KCk7XG5cbiAgICAgIGlmIChzb3VyY2UgPT0gdGFyZ2V0KVxuICAgICAge1xuICAgICAgICBlZGdlLmdldEJlbmRwb2ludHMoKS5wdXNoKG5ldyBQb2ludEQoKSk7XG4gICAgICAgIGVkZ2UuZ2V0QmVuZHBvaW50cygpLnB1c2gobmV3IFBvaW50RCgpKTtcbiAgICAgICAgdGhpcy5jcmVhdGVEdW1teU5vZGVzRm9yQmVuZHBvaW50cyhlZGdlKTtcbiAgICAgICAgdmlzaXRlZC5hZGQoZWRnZSk7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIHZhciBlZGdlTGlzdCA9IFtdO1xuXG4gICAgICAgIGVkZ2VMaXN0ID0gZWRnZUxpc3QuY29uY2F0KHNvdXJjZS5nZXRFZGdlTGlzdFRvTm9kZSh0YXJnZXQpKTtcbiAgICAgICAgZWRnZUxpc3QgPSBlZGdlTGlzdC5jb25jYXQodGFyZ2V0LmdldEVkZ2VMaXN0VG9Ob2RlKHNvdXJjZSkpO1xuXG4gICAgICAgIGlmICghdmlzaXRlZC5jb250YWlucyhlZGdlTGlzdFswXSkpXG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoZWRnZUxpc3QubGVuZ3RoID4gMSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgaztcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBlZGdlTGlzdC5sZW5ndGg7IGsrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFyIG11bHRpRWRnZSA9IGVkZ2VMaXN0W2tdO1xuICAgICAgICAgICAgICBtdWx0aUVkZ2UuZ2V0QmVuZHBvaW50cygpLnB1c2gobmV3IFBvaW50RCgpKTtcbiAgICAgICAgICAgICAgdGhpcy5jcmVhdGVEdW1teU5vZGVzRm9yQmVuZHBvaW50cyhtdWx0aUVkZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB2aXNpdGVkLmFkZEFsbChsaXN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2aXNpdGVkLnNpemUoKSA9PSBlZGdlcy5sZW5ndGgpXG4gICAge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5wb3NpdGlvbk5vZGVzUmFkaWFsbHkgPSBmdW5jdGlvbiAoZm9yZXN0KSB7XG4gIC8vIFdlIHRpbGUgdGhlIHRyZWVzIHRvIGEgZ3JpZCByb3cgYnkgcm93OyBmaXJzdCB0cmVlIHN0YXJ0cyBhdCAoMCwwKVxuICB2YXIgY3VycmVudFN0YXJ0aW5nUG9pbnQgPSBuZXcgUG9pbnQoMCwgMCk7XG4gIHZhciBudW1iZXJPZkNvbHVtbnMgPSBNYXRoLmNlaWwoTWF0aC5zcXJ0KGZvcmVzdC5sZW5ndGgpKTtcbiAgdmFyIGhlaWdodCA9IDA7XG4gIHZhciBjdXJyZW50WSA9IDA7XG4gIHZhciBjdXJyZW50WCA9IDA7XG4gIHZhciBwb2ludCA9IG5ldyBQb2ludEQoMCwgMCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3Jlc3QubGVuZ3RoOyBpKyspXG4gIHtcbiAgICBpZiAoaSAlIG51bWJlck9mQ29sdW1ucyA9PSAwKVxuICAgIHtcbiAgICAgIC8vIFN0YXJ0IG9mIGEgbmV3IHJvdywgbWFrZSB0aGUgeCBjb29yZGluYXRlIDAsIGluY3JlbWVudCB0aGVcbiAgICAgIC8vIHkgY29vcmRpbmF0ZSB3aXRoIHRoZSBtYXggaGVpZ2h0IG9mIHRoZSBwcmV2aW91cyByb3dcbiAgICAgIGN1cnJlbnRYID0gMDtcbiAgICAgIGN1cnJlbnRZID0gaGVpZ2h0O1xuXG4gICAgICBpZiAoaSAhPSAwKVxuICAgICAge1xuICAgICAgICBjdXJyZW50WSArPSBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfQ09NUE9ORU5UX1NFUEVSQVRJT047XG4gICAgICB9XG5cbiAgICAgIGhlaWdodCA9IDA7XG4gICAgfVxuXG4gICAgdmFyIHRyZWUgPSBmb3Jlc3RbaV07XG5cbiAgICAvLyBGaW5kIHRoZSBjZW50ZXIgb2YgdGhlIHRyZWVcbiAgICB2YXIgY2VudGVyTm9kZSA9IExheW91dC5maW5kQ2VudGVyT2ZUcmVlKHRyZWUpO1xuXG4gICAgLy8gU2V0IHRoZSBzdGFyaW5nIHBvaW50IG9mIHRoZSBuZXh0IHRyZWVcbiAgICBjdXJyZW50U3RhcnRpbmdQb2ludC54ID0gY3VycmVudFg7XG4gICAgY3VycmVudFN0YXJ0aW5nUG9pbnQueSA9IGN1cnJlbnRZO1xuXG4gICAgLy8gRG8gYSByYWRpYWwgbGF5b3V0IHN0YXJ0aW5nIHdpdGggdGhlIGNlbnRlclxuICAgIHBvaW50ID1cbiAgICAgICAgICAgIENvU0VMYXlvdXQucmFkaWFsTGF5b3V0KHRyZWUsIGNlbnRlck5vZGUsIGN1cnJlbnRTdGFydGluZ1BvaW50KTtcblxuICAgIGlmIChwb2ludC55ID4gaGVpZ2h0KVxuICAgIHtcbiAgICAgIGhlaWdodCA9IE1hdGguZmxvb3IocG9pbnQueSk7XG4gICAgfVxuXG4gICAgY3VycmVudFggPSBNYXRoLmZsb29yKHBvaW50LnggKyBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfQ09NUE9ORU5UX1NFUEVSQVRJT04pO1xuICB9XG5cbiAgdGhpcy50cmFuc2Zvcm0oXG4gICAgICAgICAgbmV3IFBvaW50RChMYXlvdXRDb25zdGFudHMuV09STERfQ0VOVEVSX1ggLSBwb2ludC54IC8gMixcbiAgICAgICAgICAgICAgICAgIExheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWSAtIHBvaW50LnkgLyAyKSk7XG59O1xuXG5Db1NFTGF5b3V0LnJhZGlhbExheW91dCA9IGZ1bmN0aW9uICh0cmVlLCBjZW50ZXJOb2RlLCBzdGFydGluZ1BvaW50KSB7XG4gIHZhciByYWRpYWxTZXAgPSBNYXRoLm1heCh0aGlzLm1heERpYWdvbmFsSW5UcmVlKHRyZWUpLFxuICAgICAgICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9SQURJQUxfU0VQQVJBVElPTik7XG4gIENvU0VMYXlvdXQuYnJhbmNoUmFkaWFsTGF5b3V0KGNlbnRlck5vZGUsIG51bGwsIDAsIDM1OSwgMCwgcmFkaWFsU2VwKTtcbiAgdmFyIGJvdW5kcyA9IExHcmFwaC5jYWxjdWxhdGVCb3VuZHModHJlZSk7XG5cbiAgdmFyIHRyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm0oKTtcbiAgdHJhbnNmb3JtLnNldERldmljZU9yZ1goYm91bmRzLmdldE1pblgoKSk7XG4gIHRyYW5zZm9ybS5zZXREZXZpY2VPcmdZKGJvdW5kcy5nZXRNaW5ZKCkpO1xuICB0cmFuc2Zvcm0uc2V0V29ybGRPcmdYKHN0YXJ0aW5nUG9pbnQueCk7XG4gIHRyYW5zZm9ybS5zZXRXb3JsZE9yZ1koc3RhcnRpbmdQb2ludC55KTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspXG4gIHtcbiAgICB2YXIgbm9kZSA9IHRyZWVbaV07XG4gICAgbm9kZS50cmFuc2Zvcm0odHJhbnNmb3JtKTtcbiAgfVxuXG4gIHZhciBib3R0b21SaWdodCA9XG4gICAgICAgICAgbmV3IFBvaW50RChib3VuZHMuZ2V0TWF4WCgpLCBib3VuZHMuZ2V0TWF4WSgpKTtcblxuICByZXR1cm4gdHJhbnNmb3JtLmludmVyc2VUcmFuc2Zvcm1Qb2ludChib3R0b21SaWdodCk7XG59O1xuXG5Db1NFTGF5b3V0LmJyYW5jaFJhZGlhbExheW91dCA9IGZ1bmN0aW9uIChub2RlLCBwYXJlbnRPZk5vZGUsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBkaXN0YW5jZSwgcmFkaWFsU2VwYXJhdGlvbikge1xuICAvLyBGaXJzdCwgcG9zaXRpb24gdGhpcyBub2RlIGJ5IGZpbmRpbmcgaXRzIGFuZ2xlLlxuICB2YXIgaGFsZkludGVydmFsID0gKChlbmRBbmdsZSAtIHN0YXJ0QW5nbGUpICsgMSkgLyAyO1xuXG4gIGlmIChoYWxmSW50ZXJ2YWwgPCAwKVxuICB7XG4gICAgaGFsZkludGVydmFsICs9IDE4MDtcbiAgfVxuXG4gIHZhciBub2RlQW5nbGUgPSAoaGFsZkludGVydmFsICsgc3RhcnRBbmdsZSkgJSAzNjA7XG4gIHZhciB0ZXRhID0gKG5vZGVBbmdsZSAqIElHZW9tZXRyeS5UV09fUEkpIC8gMzYwO1xuXG4gIC8vIE1ha2UgcG9sYXIgdG8gamF2YSBjb3JkaW5hdGUgY29udmVyc2lvbi5cbiAgdmFyIGNvc190ZXRhID0gTWF0aC5jb3ModGV0YSk7XG4gIHZhciB4XyA9IGRpc3RhbmNlICogTWF0aC5jb3ModGV0YSk7XG4gIHZhciB5XyA9IGRpc3RhbmNlICogTWF0aC5zaW4odGV0YSk7XG5cbiAgbm9kZS5zZXRDZW50ZXIoeF8sIHlfKTtcblxuICAvLyBUcmF2ZXJzZSBhbGwgbmVpZ2hib3JzIG9mIHRoaXMgbm9kZSBhbmQgcmVjdXJzaXZlbHkgY2FsbCB0aGlzXG4gIC8vIGZ1bmN0aW9uLlxuICB2YXIgbmVpZ2hib3JFZGdlcyA9IFtdO1xuICBuZWlnaGJvckVkZ2VzID0gbmVpZ2hib3JFZGdlcy5jb25jYXQobm9kZS5nZXRFZGdlcygpKTtcbiAgdmFyIGNoaWxkQ291bnQgPSBuZWlnaGJvckVkZ2VzLmxlbmd0aDtcblxuICBpZiAocGFyZW50T2ZOb2RlICE9IG51bGwpXG4gIHtcbiAgICBjaGlsZENvdW50LS07XG4gIH1cblxuICB2YXIgYnJhbmNoQ291bnQgPSAwO1xuXG4gIHZhciBpbmNFZGdlc0NvdW50ID0gbmVpZ2hib3JFZGdlcy5sZW5ndGg7XG4gIHZhciBzdGFydEluZGV4O1xuXG4gIHZhciBlZGdlcyA9IG5vZGUuZ2V0RWRnZXNCZXR3ZWVuKHBhcmVudE9mTm9kZSk7XG5cbiAgLy8gSWYgdGhlcmUgYXJlIG11bHRpcGxlIGVkZ2VzLCBwcnVuZSB0aGVtIHVudGlsIHRoZXJlIHJlbWFpbnMgb25seSBvbmVcbiAgLy8gZWRnZS5cbiAgd2hpbGUgKGVkZ2VzLmxlbmd0aCA+IDEpXG4gIHtcbiAgICAvL25laWdoYm9yRWRnZXMucmVtb3ZlKGVkZ2VzLnJlbW92ZSgwKSk7XG4gICAgdmFyIHRlbXAgPSBlZGdlc1swXTtcbiAgICBlZGdlcy5zcGxpY2UoMCwgMSk7XG4gICAgdmFyIGluZGV4ID0gbmVpZ2hib3JFZGdlcy5pbmRleE9mKHRlbXApO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICBuZWlnaGJvckVkZ2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIGluY0VkZ2VzQ291bnQtLTtcbiAgICBjaGlsZENvdW50LS07XG4gIH1cblxuICBpZiAocGFyZW50T2ZOb2RlICE9IG51bGwpXG4gIHtcbiAgICAvL2Fzc2VydCBlZGdlcy5sZW5ndGggPT0gMTtcbiAgICBzdGFydEluZGV4ID0gKG5laWdoYm9yRWRnZXMuaW5kZXhPZihlZGdlc1swXSkgKyAxKSAlIGluY0VkZ2VzQ291bnQ7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgc3RhcnRJbmRleCA9IDA7XG4gIH1cblxuICB2YXIgc3RlcEFuZ2xlID0gTWF0aC5hYnMoZW5kQW5nbGUgLSBzdGFydEFuZ2xlKSAvIGNoaWxkQ291bnQ7XG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0SW5kZXg7XG4gICAgICAgICAgYnJhbmNoQ291bnQgIT0gY2hpbGRDb3VudDtcbiAgICAgICAgICBpID0gKCsraSkgJSBpbmNFZGdlc0NvdW50KVxuICB7XG4gICAgdmFyIGN1cnJlbnROZWlnaGJvciA9XG4gICAgICAgICAgICBuZWlnaGJvckVkZ2VzW2ldLmdldE90aGVyRW5kKG5vZGUpO1xuXG4gICAgLy8gRG9uJ3QgYmFjayB0cmF2ZXJzZSB0byByb290IG5vZGUgaW4gY3VycmVudCB0cmVlLlxuICAgIGlmIChjdXJyZW50TmVpZ2hib3IgPT0gcGFyZW50T2ZOb2RlKVxuICAgIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBjaGlsZFN0YXJ0QW5nbGUgPVxuICAgICAgICAgICAgKHN0YXJ0QW5nbGUgKyBicmFuY2hDb3VudCAqIHN0ZXBBbmdsZSkgJSAzNjA7XG4gICAgdmFyIGNoaWxkRW5kQW5nbGUgPSAoY2hpbGRTdGFydEFuZ2xlICsgc3RlcEFuZ2xlKSAlIDM2MDtcblxuICAgIENvU0VMYXlvdXQuYnJhbmNoUmFkaWFsTGF5b3V0KGN1cnJlbnROZWlnaGJvcixcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICBjaGlsZFN0YXJ0QW5nbGUsIGNoaWxkRW5kQW5nbGUsXG4gICAgICAgICAgICBkaXN0YW5jZSArIHJhZGlhbFNlcGFyYXRpb24sIHJhZGlhbFNlcGFyYXRpb24pO1xuXG4gICAgYnJhbmNoQ291bnQrKztcbiAgfVxufTtcblxuQ29TRUxheW91dC5tYXhEaWFnb25hbEluVHJlZSA9IGZ1bmN0aW9uICh0cmVlKSB7XG4gIHZhciBtYXhEaWFnb25hbCA9IEludGVnZXIuTUlOX1ZBTFVFO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZS5sZW5ndGg7IGkrKylcbiAge1xuICAgIHZhciBub2RlID0gdHJlZVtpXTtcbiAgICB2YXIgZGlhZ29uYWwgPSBub2RlLmdldERpYWdvbmFsKCk7XG5cbiAgICBpZiAoZGlhZ29uYWwgPiBtYXhEaWFnb25hbClcbiAgICB7XG4gICAgICBtYXhEaWFnb25hbCA9IGRpYWdvbmFsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYXhEaWFnb25hbDtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmNhbGNSZXB1bHNpb25SYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gZm9ybXVsYSBpcyAyIHggKGxldmVsICsgMSkgeCBpZGVhbEVkZ2VMZW5ndGhcbiAgcmV0dXJuICgyICogKHRoaXMubGV2ZWwgKyAxKSAqIHRoaXMuaWRlYWxFZGdlTGVuZ3RoKTtcbn07XG5cbi8vIFRpbGluZyBtZXRob2RzXG5cbi8vIEdyb3VwIHplcm8gZGVncmVlIG1lbWJlcnMgd2hvc2UgcGFyZW50cyBhcmUgbm90IHRvIGJlIHRpbGVkLCBjcmVhdGUgZHVtbXkgcGFyZW50cyB3aGVyZSBuZWVkZWQgYW5kIGZpbGwgbWVtYmVyR3JvdXBzIGJ5IHRoZWlyIGR1bW1wIHBhcmVudCBpZCdzXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5ncm91cFplcm9EZWdyZWVNZW1iZXJzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIC8vIGFycmF5IG9mIFtwYXJlbnRfaWQgeCBvbmVEZWdyZWVOb2RlX2lkXVxuICB2YXIgdGVtcE1lbWJlckdyb3VwcyA9IHt9OyAvLyBBIHRlbXBvcmFyeSBtYXAgb2YgcGFyZW50IG5vZGUgYW5kIGl0cyB6ZXJvIGRlZ3JlZSBtZW1iZXJzXG4gIHRoaXMubWVtYmVyR3JvdXBzID0ge307IC8vIEEgbWFwIG9mIGR1bW15IHBhcmVudCBub2RlIGFuZCBpdHMgemVybyBkZWdyZWUgbWVtYmVycyB3aG9zZSBwYXJlbnRzIGFyZSBub3QgdG8gYmUgdGlsZWRcbiAgdGhpcy5pZFRvRHVtbXlOb2RlID0ge307IC8vIEEgbWFwIG9mIGlkIHRvIGR1bW15IG5vZGUgXG4gIFxuICB2YXIgemVyb0RlZ3JlZSA9IFtdOyAvLyBMaXN0IG9mIHplcm8gZGVncmVlIG5vZGVzIHdob3NlIHBhcmVudHMgYXJlIG5vdCB0byBiZSB0aWxlZFxuICB2YXIgYWxsTm9kZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2RlcygpO1xuXG4gIC8vIEZpbGwgemVybyBkZWdyZWUgbGlzdFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG5vZGUgPSBhbGxOb2Rlc1tpXTtcbiAgICB2YXIgcGFyZW50ID0gbm9kZS5nZXRQYXJlbnQoKTtcbiAgICAvLyBJZiBhIG5vZGUgaGFzIHplcm8gZGVncmVlIGFuZCBpdHMgcGFyZW50IGlzIG5vdCB0byBiZSB0aWxlZCBpZiBleGlzdHMgYWRkIHRoYXQgbm9kZSB0byB6ZXJvRGVncmVzIGxpc3RcbiAgICBpZiAodGhpcy5nZXROb2RlRGVncmVlV2l0aENoaWxkcmVuKG5vZGUpID09PSAwICYmICggcGFyZW50LmlkID09IHVuZGVmaW5lZCB8fCAhdGhpcy5nZXRUb0JlVGlsZWQocGFyZW50KSApICkge1xuICAgICAgemVyb0RlZ3JlZS5wdXNoKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENyZWF0ZSBhIG1hcCBvZiBwYXJlbnQgbm9kZSBhbmQgaXRzIHplcm8gZGVncmVlIG1lbWJlcnNcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB6ZXJvRGVncmVlLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgdmFyIG5vZGUgPSB6ZXJvRGVncmVlW2ldOyAvLyBaZXJvIGRlZ3JlZSBub2RlIGl0c2VsZlxuICAgIHZhciBwX2lkID0gbm9kZS5nZXRQYXJlbnQoKS5pZDsgLy8gUGFyZW50IGlkXG5cbiAgICBpZiAodHlwZW9mIHRlbXBNZW1iZXJHcm91cHNbcF9pZF0gPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICB0ZW1wTWVtYmVyR3JvdXBzW3BfaWRdID0gW107XG5cbiAgICB0ZW1wTWVtYmVyR3JvdXBzW3BfaWRdID0gdGVtcE1lbWJlckdyb3Vwc1twX2lkXS5jb25jYXQobm9kZSk7IC8vIFB1c2ggbm9kZSB0byB0aGUgbGlzdCBiZWxvbmdzIHRvIGl0cyBwYXJlbnQgaW4gdGVtcE1lbWJlckdyb3Vwc1xuICB9XG5cbiAgLy8gSWYgdGhlcmUgYXJlIGF0IGxlYXN0IHR3byBub2RlcyBhdCBhIGxldmVsLCBjcmVhdGUgYSBkdW1teSBjb21wb3VuZCBmb3IgdGhlbVxuICBPYmplY3Qua2V5cyh0ZW1wTWVtYmVyR3JvdXBzKS5mb3JFYWNoKGZ1bmN0aW9uKHBfaWQpIHtcbiAgICBpZiAodGVtcE1lbWJlckdyb3Vwc1twX2lkXS5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgZHVtbXlDb21wb3VuZElkID0gXCJEdW1teUNvbXBvdW5kX1wiICsgcF9pZDsgLy8gVGhlIGlkIG9mIGR1bW15IGNvbXBvdW5kIHdoaWNoIHdpbGwgYmUgY3JlYXRlZCBzb29uXG4gICAgICBzZWxmLm1lbWJlckdyb3Vwc1tkdW1teUNvbXBvdW5kSWRdID0gdGVtcE1lbWJlckdyb3Vwc1twX2lkXTsgLy8gQWRkIGR1bW15IGNvbXBvdW5kIHRvIG1lbWJlckdyb3Vwc1xuXG4gICAgICB2YXIgcGFyZW50ID0gdGVtcE1lbWJlckdyb3Vwc1twX2lkXVswXS5nZXRQYXJlbnQoKTsgLy8gVGhlIHBhcmVudCBvZiB6ZXJvIGRlZ3JlZSBub2RlcyB3aWxsIGJlIHRoZSBwYXJlbnQgb2YgbmV3IGR1bW15IGNvbXBvdW5kXG5cbiAgICAgIC8vIENyZWF0ZSBhIGR1bW15IGNvbXBvdW5kIHdpdGggY2FsY3VsYXRlZCBpZFxuICAgICAgdmFyIGR1bW15Q29tcG91bmQgPSBuZXcgQ29TRU5vZGUoc2VsZi5ncmFwaE1hbmFnZXIpO1xuICAgICAgZHVtbXlDb21wb3VuZC5pZCA9IGR1bW15Q29tcG91bmRJZDtcbiAgICAgIGR1bW15Q29tcG91bmQucGFkZGluZ0xlZnQgPSBwYXJlbnQucGFkZGluZ0xlZnQgfHwgMDtcbiAgICAgIGR1bW15Q29tcG91bmQucGFkZGluZ1JpZ2h0ID0gcGFyZW50LnBhZGRpbmdSaWdodCB8fCAwO1xuICAgICAgZHVtbXlDb21wb3VuZC5wYWRkaW5nQm90dG9tID0gcGFyZW50LnBhZGRpbmdCb3R0b20gfHwgMDtcbiAgICAgIGR1bW15Q29tcG91bmQucGFkZGluZ1RvcCA9IHBhcmVudC5wYWRkaW5nVG9wIHx8IDA7XG4gICAgICBcbiAgICAgIHNlbGYuaWRUb0R1bW15Tm9kZVtkdW1teUNvbXBvdW5kSWRdID0gZHVtbXlDb21wb3VuZDtcbiAgICAgIFxuICAgICAgdmFyIGR1bW15UGFyZW50R3JhcGggPSBzZWxmLmdldEdyYXBoTWFuYWdlcigpLmFkZChzZWxmLm5ld0dyYXBoKCksIGR1bW15Q29tcG91bmQpO1xuICAgICAgdmFyIHBhcmVudEdyYXBoID0gcGFyZW50LmdldENoaWxkKCk7XG5cbiAgICAgIC8vIEFkZCBkdW1teSBjb21wb3VuZCB0byBwYXJlbnQgdGhlIGdyYXBoXG4gICAgICBwYXJlbnRHcmFwaC5hZGQoZHVtbXlDb21wb3VuZCk7XG5cbiAgICAgIC8vIEZvciBlYWNoIHplcm8gZGVncmVlIG5vZGUgaW4gdGhpcyBsZXZlbCByZW1vdmUgaXQgZnJvbSBpdHMgcGFyZW50IGdyYXBoIGFuZCBhZGQgaXQgdG8gdGhlIGdyYXBoIG9mIGR1bW15IHBhcmVudFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wTWVtYmVyR3JvdXBzW3BfaWRdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBub2RlID0gdGVtcE1lbWJlckdyb3Vwc1twX2lkXVtpXTtcbiAgICAgICAgXG4gICAgICAgIHBhcmVudEdyYXBoLnJlbW92ZShub2RlKTtcbiAgICAgICAgZHVtbXlQYXJlbnRHcmFwaC5hZGQobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmNsZWFyQ29tcG91bmRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY2hpbGRHcmFwaE1hcCA9IHt9O1xuICB2YXIgaWRUb05vZGUgPSB7fTtcblxuICAvLyBHZXQgY29tcG91bmQgb3JkZXJpbmcgYnkgZmluZGluZyB0aGUgaW5uZXIgb25lIGZpcnN0XG4gIHRoaXMucGVyZm9ybURGU09uQ29tcG91bmRzKCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbXBvdW5kT3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICBcbiAgICBpZFRvTm9kZVt0aGlzLmNvbXBvdW5kT3JkZXJbaV0uaWRdID0gdGhpcy5jb21wb3VuZE9yZGVyW2ldO1xuICAgIGNoaWxkR3JhcGhNYXBbdGhpcy5jb21wb3VuZE9yZGVyW2ldLmlkXSA9IFtdLmNvbmNhdCh0aGlzLmNvbXBvdW5kT3JkZXJbaV0uZ2V0Q2hpbGQoKS5nZXROb2RlcygpKTtcblxuICAgIC8vIFJlbW92ZSBjaGlsZHJlbiBvZiBjb21wb3VuZHNcbiAgICB0aGlzLmdyYXBoTWFuYWdlci5yZW1vdmUodGhpcy5jb21wb3VuZE9yZGVyW2ldLmdldENoaWxkKCkpO1xuICAgIHRoaXMuY29tcG91bmRPcmRlcltpXS5jaGlsZCA9IG51bGw7XG4gIH1cbiAgXG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsTm9kZXMoKTtcbiAgXG4gIC8vIFRpbGUgdGhlIHJlbW92ZWQgY2hpbGRyZW5cbiAgdGhpcy50aWxlQ29tcG91bmRNZW1iZXJzKGNoaWxkR3JhcGhNYXAsIGlkVG9Ob2RlKTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmNsZWFyWmVyb0RlZ3JlZU1lbWJlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHRpbGVkWmVyb0RlZ3JlZVBhY2sgPSB0aGlzLnRpbGVkWmVyb0RlZ3JlZVBhY2sgPSBbXTtcblxuICBPYmplY3Qua2V5cyh0aGlzLm1lbWJlckdyb3VwcykuZm9yRWFjaChmdW5jdGlvbihpZCkge1xuICAgIHZhciBjb21wb3VuZE5vZGUgPSBzZWxmLmlkVG9EdW1teU5vZGVbaWRdOyAvLyBHZXQgdGhlIGR1bW15IGNvbXBvdW5kXG5cbiAgICB0aWxlZFplcm9EZWdyZWVQYWNrW2lkXSA9IHNlbGYudGlsZU5vZGVzKHNlbGYubWVtYmVyR3JvdXBzW2lkXSwgY29tcG91bmROb2RlLnBhZGRpbmdMZWZ0ICsgY29tcG91bmROb2RlLnBhZGRpbmdSaWdodCk7XG5cbiAgICAvLyBTZXQgdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIGR1bW15IGNvbXBvdW5kIGFzIGNhbGN1bGF0ZWRcbiAgICBjb21wb3VuZE5vZGUucmVjdC53aWR0aCA9IHRpbGVkWmVyb0RlZ3JlZVBhY2tbaWRdLndpZHRoO1xuICAgIGNvbXBvdW5kTm9kZS5yZWN0LmhlaWdodCA9IHRpbGVkWmVyb0RlZ3JlZVBhY2tbaWRdLmhlaWdodDtcbiAgfSk7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5yZXBvcHVsYXRlQ29tcG91bmRzID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBpID0gdGhpcy5jb21wb3VuZE9yZGVyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxDb21wb3VuZE5vZGUgPSB0aGlzLmNvbXBvdW5kT3JkZXJbaV07XG4gICAgdmFyIGlkID0gbENvbXBvdW5kTm9kZS5pZDtcbiAgICB2YXIgaG9yaXpvbnRhbE1hcmdpbiA9IGxDb21wb3VuZE5vZGUucGFkZGluZ0xlZnQ7XG4gICAgdmFyIHZlcnRpY2FsTWFyZ2luID0gbENvbXBvdW5kTm9kZS5wYWRkaW5nVG9wO1xuXG4gICAgdGhpcy5hZGp1c3RMb2NhdGlvbnModGhpcy50aWxlZE1lbWJlclBhY2tbaWRdLCBsQ29tcG91bmROb2RlLnJlY3QueCwgbENvbXBvdW5kTm9kZS5yZWN0LnksIGhvcml6b250YWxNYXJnaW4sIHZlcnRpY2FsTWFyZ2luKTtcbiAgfVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUucmVwb3B1bGF0ZVplcm9EZWdyZWVNZW1iZXJzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciB0aWxlZFBhY2sgPSB0aGlzLnRpbGVkWmVyb0RlZ3JlZVBhY2s7XG4gIFxuICBPYmplY3Qua2V5cyh0aWxlZFBhY2spLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICB2YXIgY29tcG91bmROb2RlID0gc2VsZi5pZFRvRHVtbXlOb2RlW2lkXTsgLy8gR2V0IHRoZSBkdW1teSBjb21wb3VuZCBieSBpdHMgaWRcbiAgICB2YXIgaG9yaXpvbnRhbE1hcmdpbiA9IGNvbXBvdW5kTm9kZS5wYWRkaW5nTGVmdDtcbiAgICB2YXIgdmVydGljYWxNYXJnaW4gPSBjb21wb3VuZE5vZGUucGFkZGluZ1RvcDtcblxuICAgIC8vIEFkanVzdCB0aGUgcG9zaXRpb25zIG9mIG5vZGVzIHdydCBpdHMgY29tcG91bmRcbiAgICBzZWxmLmFkanVzdExvY2F0aW9ucyh0aWxlZFBhY2tbaWRdLCBjb21wb3VuZE5vZGUucmVjdC54LCBjb21wb3VuZE5vZGUucmVjdC55LCBob3Jpem9udGFsTWFyZ2luLCB2ZXJ0aWNhbE1hcmdpbik7XG4gIH0pO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuZ2V0VG9CZVRpbGVkID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIGlkID0gbm9kZS5pZDtcbiAgLy9maXJzdGx5IGNoZWNrIHRoZSBwcmV2aW91cyByZXN1bHRzXG4gIGlmICh0aGlzLnRvQmVUaWxlZFtpZF0gIT0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLnRvQmVUaWxlZFtpZF07XG4gIH1cblxuICAvL29ubHkgY29tcG91bmQgbm9kZXMgYXJlIHRvIGJlIHRpbGVkXG4gIHZhciBjaGlsZEdyYXBoID0gbm9kZS5nZXRDaGlsZCgpO1xuICBpZiAoY2hpbGRHcmFwaCA9PSBudWxsKSB7XG4gICAgdGhpcy50b0JlVGlsZWRbaWRdID0gZmFsc2U7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGNoaWxkcmVuID0gY2hpbGRHcmFwaC5nZXROb2RlcygpOyAvLyBHZXQgdGhlIGNoaWxkcmVuIG5vZGVzXG5cbiAgLy9hIGNvbXBvdW5kIG5vZGUgaXMgbm90IHRvIGJlIHRpbGVkIGlmIGFsbCBvZiBpdHMgY29tcG91bmQgY2hpbGRyZW4gYXJlIG5vdCB0byBiZSB0aWxlZFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRoZUNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICBpZiAodGhpcy5nZXROb2RlRGVncmVlKHRoZUNoaWxkKSA+IDApIHtcbiAgICAgIHRoaXMudG9CZVRpbGVkW2lkXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vcGFzcyB0aGUgY2hpbGRyZW4gbm90IGhhdmluZyB0aGUgY29tcG91bmQgc3RydWN0dXJlXG4gICAgaWYgKHRoZUNoaWxkLmdldENoaWxkKCkgPT0gbnVsbCkge1xuICAgICAgdGhpcy50b0JlVGlsZWRbdGhlQ2hpbGQuaWRdID0gZmFsc2U7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZ2V0VG9CZVRpbGVkKHRoZUNoaWxkKSkge1xuICAgICAgdGhpcy50b0JlVGlsZWRbaWRdID0gZmFsc2U7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHRoaXMudG9CZVRpbGVkW2lkXSA9IHRydWU7XG4gIHJldHVybiB0cnVlO1xufTtcblxuLy8gR2V0IGRlZ3JlZSBvZiBhIG5vZGUgZGVwZW5kaW5nIG9mIGl0cyBlZGdlcyBhbmQgaW5kZXBlbmRlbnQgb2YgaXRzIGNoaWxkcmVuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5nZXROb2RlRGVncmVlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIGlkID0gbm9kZS5pZDtcbiAgdmFyIGVkZ2VzID0gbm9kZS5nZXRFZGdlcygpO1xuICB2YXIgZGVncmVlID0gMDtcbiAgXG4gIC8vIEZvciB0aGUgZWRnZXMgY29ubmVjdGVkXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWRnZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZWRnZSA9IGVkZ2VzW2ldO1xuICAgIGlmIChlZGdlLmdldFNvdXJjZSgpLmlkICE9PSBlZGdlLmdldFRhcmdldCgpLmlkKSB7XG4gICAgICBkZWdyZWUgPSBkZWdyZWUgKyAxO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVncmVlO1xufTtcblxuLy8gR2V0IGRlZ3JlZSBvZiBhIG5vZGUgd2l0aCBpdHMgY2hpbGRyZW5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmdldE5vZGVEZWdyZWVXaXRoQ2hpbGRyZW4gPSBmdW5jdGlvbiAobm9kZSkge1xuICB2YXIgZGVncmVlID0gdGhpcy5nZXROb2RlRGVncmVlKG5vZGUpO1xuICBpZiAobm9kZS5nZXRDaGlsZCgpID09IG51bGwpIHtcbiAgICByZXR1cm4gZGVncmVlO1xuICB9XG4gIHZhciBjaGlsZHJlbiA9IG5vZGUuZ2V0Q2hpbGQoKS5nZXROb2RlcygpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgZGVncmVlICs9IHRoaXMuZ2V0Tm9kZURlZ3JlZVdpdGhDaGlsZHJlbihjaGlsZCk7XG4gIH1cbiAgcmV0dXJuIGRlZ3JlZTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnBlcmZvcm1ERlNPbkNvbXBvdW5kcyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jb21wb3VuZE9yZGVyID0gW107XG4gIHRoaXMuZmlsbENvbXBleE9yZGVyQnlERlModGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldE5vZGVzKCkpO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuZmlsbENvbXBleE9yZGVyQnlERlMgPSBmdW5jdGlvbiAoY2hpbGRyZW4pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgIGlmIChjaGlsZC5nZXRDaGlsZCgpICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZmlsbENvbXBleE9yZGVyQnlERlMoY2hpbGQuZ2V0Q2hpbGQoKS5nZXROb2RlcygpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2V0VG9CZVRpbGVkKGNoaWxkKSkge1xuICAgICAgdGhpcy5jb21wb3VuZE9yZGVyLnB1c2goY2hpbGQpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4qIFRoaXMgbWV0aG9kIHBsYWNlcyBlYWNoIHplcm8gZGVncmVlIG1lbWJlciB3cnQgZ2l2ZW4gKHgseSkgY29vcmRpbmF0ZXMgKHRvcCBsZWZ0KS5cbiovXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5hZGp1c3RMb2NhdGlvbnMgPSBmdW5jdGlvbiAob3JnYW5pemF0aW9uLCB4LCB5LCBjb21wb3VuZEhvcml6b250YWxNYXJnaW4sIGNvbXBvdW5kVmVydGljYWxNYXJnaW4pIHtcbiAgeCArPSBjb21wb3VuZEhvcml6b250YWxNYXJnaW47XG4gIHkgKz0gY29tcG91bmRWZXJ0aWNhbE1hcmdpbjtcblxuICB2YXIgbGVmdCA9IHg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcmdhbml6YXRpb24ucm93cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciByb3cgPSBvcmdhbml6YXRpb24ucm93c1tpXTtcbiAgICB4ID0gbGVmdDtcbiAgICB2YXIgbWF4SGVpZ2h0ID0gMDtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcm93Lmxlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgbG5vZGUgPSByb3dbal07XG5cbiAgICAgIGxub2RlLnJlY3QueCA9IHg7Ly8gKyBsbm9kZS5yZWN0LndpZHRoIC8gMjtcbiAgICAgIGxub2RlLnJlY3QueSA9IHk7Ly8gKyBsbm9kZS5yZWN0LmhlaWdodCAvIDI7XG5cbiAgICAgIHggKz0gbG5vZGUucmVjdC53aWR0aCArIG9yZ2FuaXphdGlvbi5ob3Jpem9udGFsUGFkZGluZztcblxuICAgICAgaWYgKGxub2RlLnJlY3QuaGVpZ2h0ID4gbWF4SGVpZ2h0KVxuICAgICAgICBtYXhIZWlnaHQgPSBsbm9kZS5yZWN0LmhlaWdodDtcbiAgICB9XG5cbiAgICB5ICs9IG1heEhlaWdodCArIG9yZ2FuaXphdGlvbi52ZXJ0aWNhbFBhZGRpbmc7XG4gIH1cbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnRpbGVDb21wb3VuZE1lbWJlcnMgPSBmdW5jdGlvbiAoY2hpbGRHcmFwaE1hcCwgaWRUb05vZGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLnRpbGVkTWVtYmVyUGFjayA9IFtdO1xuXG4gIE9iamVjdC5rZXlzKGNoaWxkR3JhcGhNYXApLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICAvLyBHZXQgdGhlIGNvbXBvdW5kIG5vZGVcbiAgICB2YXIgY29tcG91bmROb2RlID0gaWRUb05vZGVbaWRdO1xuXG4gICAgc2VsZi50aWxlZE1lbWJlclBhY2tbaWRdID0gc2VsZi50aWxlTm9kZXMoY2hpbGRHcmFwaE1hcFtpZF0sIGNvbXBvdW5kTm9kZS5wYWRkaW5nTGVmdCArIGNvbXBvdW5kTm9kZS5wYWRkaW5nUmlnaHQpO1xuXG4gICAgY29tcG91bmROb2RlLnJlY3Qud2lkdGggPSBzZWxmLnRpbGVkTWVtYmVyUGFja1tpZF0ud2lkdGggKyAyMDtcbiAgICBjb21wb3VuZE5vZGUucmVjdC5oZWlnaHQgPSBzZWxmLnRpbGVkTWVtYmVyUGFja1tpZF0uaGVpZ2h0ICsgMjA7XG4gIH0pO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUudGlsZU5vZGVzID0gZnVuY3Rpb24gKG5vZGVzLCBtaW5XaWR0aCkge1xuICB2YXIgdmVydGljYWxQYWRkaW5nID0gQ29TRUNvbnN0YW50cy5USUxJTkdfUEFERElOR19WRVJUSUNBTDtcbiAgdmFyIGhvcml6b250YWxQYWRkaW5nID0gQ29TRUNvbnN0YW50cy5USUxJTkdfUEFERElOR19IT1JJWk9OVEFMO1xuICB2YXIgb3JnYW5pemF0aW9uID0ge1xuICAgIHJvd3M6IFtdLFxuICAgIHJvd1dpZHRoOiBbXSxcbiAgICByb3dIZWlnaHQ6IFtdLFxuICAgIHdpZHRoOiAyMCxcbiAgICBoZWlnaHQ6IDIwLFxuICAgIHZlcnRpY2FsUGFkZGluZzogdmVydGljYWxQYWRkaW5nLFxuICAgIGhvcml6b250YWxQYWRkaW5nOiBob3Jpem9udGFsUGFkZGluZ1xuICB9O1xuXG4gIC8vIFNvcnQgdGhlIG5vZGVzIGluIGFzY2VuZGluZyBvcmRlciBvZiB0aGVpciBhcmVhc1xuICBub2Rlcy5zb3J0KGZ1bmN0aW9uIChuMSwgbjIpIHtcbiAgICBpZiAobjEucmVjdC53aWR0aCAqIG4xLnJlY3QuaGVpZ2h0ID4gbjIucmVjdC53aWR0aCAqIG4yLnJlY3QuaGVpZ2h0KVxuICAgICAgcmV0dXJuIC0xO1xuICAgIGlmIChuMS5yZWN0LndpZHRoICogbjEucmVjdC5oZWlnaHQgPCBuMi5yZWN0LndpZHRoICogbjIucmVjdC5oZWlnaHQpXG4gICAgICByZXR1cm4gMTtcbiAgICByZXR1cm4gMDtcbiAgfSk7XG5cbiAgLy8gQ3JlYXRlIHRoZSBvcmdhbml6YXRpb24gLT4gdGlsZSBtZW1iZXJzXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcbiAgICBcbiAgICBpZiAob3JnYW5pemF0aW9uLnJvd3MubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuaW5zZXJ0Tm9kZVRvUm93KG9yZ2FuaXphdGlvbiwgbE5vZGUsIDAsIG1pbldpZHRoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5jYW5BZGRIb3Jpem9udGFsKG9yZ2FuaXphdGlvbiwgbE5vZGUucmVjdC53aWR0aCwgbE5vZGUucmVjdC5oZWlnaHQpKSB7XG4gICAgICB0aGlzLmluc2VydE5vZGVUb1Jvdyhvcmdhbml6YXRpb24sIGxOb2RlLCB0aGlzLmdldFNob3J0ZXN0Um93SW5kZXgob3JnYW5pemF0aW9uKSwgbWluV2lkdGgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaW5zZXJ0Tm9kZVRvUm93KG9yZ2FuaXphdGlvbiwgbE5vZGUsIG9yZ2FuaXphdGlvbi5yb3dzLmxlbmd0aCwgbWluV2lkdGgpO1xuICAgIH1cblxuICAgIHRoaXMuc2hpZnRUb0xhc3RSb3cob3JnYW5pemF0aW9uKTtcbiAgfVxuXG4gIHJldHVybiBvcmdhbml6YXRpb247XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5pbnNlcnROb2RlVG9Sb3cgPSBmdW5jdGlvbiAob3JnYW5pemF0aW9uLCBub2RlLCByb3dJbmRleCwgbWluV2lkdGgpIHtcbiAgdmFyIG1pbkNvbXBvdW5kU2l6ZSA9IG1pbldpZHRoO1xuXG4gIC8vIEFkZCBuZXcgcm93IGlmIG5lZWRlZFxuICBpZiAocm93SW5kZXggPT0gb3JnYW5pemF0aW9uLnJvd3MubGVuZ3RoKSB7XG4gICAgdmFyIHNlY29uZERpbWVuc2lvbiA9IFtdO1xuXG4gICAgb3JnYW5pemF0aW9uLnJvd3MucHVzaChzZWNvbmREaW1lbnNpb24pO1xuICAgIG9yZ2FuaXphdGlvbi5yb3dXaWR0aC5wdXNoKG1pbkNvbXBvdW5kU2l6ZSk7XG4gICAgb3JnYW5pemF0aW9uLnJvd0hlaWdodC5wdXNoKDApO1xuICB9XG5cbiAgLy8gVXBkYXRlIHJvdyB3aWR0aFxuICB2YXIgdyA9IG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtyb3dJbmRleF0gKyBub2RlLnJlY3Qud2lkdGg7XG5cbiAgaWYgKG9yZ2FuaXphdGlvbi5yb3dzW3Jvd0luZGV4XS5sZW5ndGggPiAwKSB7XG4gICAgdyArPSBvcmdhbml6YXRpb24uaG9yaXpvbnRhbFBhZGRpbmc7XG4gIH1cblxuICBvcmdhbml6YXRpb24ucm93V2lkdGhbcm93SW5kZXhdID0gdztcbiAgLy8gVXBkYXRlIGNvbXBvdW5kIHdpZHRoXG4gIGlmIChvcmdhbml6YXRpb24ud2lkdGggPCB3KSB7XG4gICAgb3JnYW5pemF0aW9uLndpZHRoID0gdztcbiAgfVxuXG4gIC8vIFVwZGF0ZSBoZWlnaHRcbiAgdmFyIGggPSBub2RlLnJlY3QuaGVpZ2h0O1xuICBpZiAocm93SW5kZXggPiAwKVxuICAgIGggKz0gb3JnYW5pemF0aW9uLnZlcnRpY2FsUGFkZGluZztcblxuICB2YXIgZXh0cmFIZWlnaHQgPSAwO1xuICBpZiAoaCA+IG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbcm93SW5kZXhdKSB7XG4gICAgZXh0cmFIZWlnaHQgPSBvcmdhbml6YXRpb24ucm93SGVpZ2h0W3Jvd0luZGV4XTtcbiAgICBvcmdhbml6YXRpb24ucm93SGVpZ2h0W3Jvd0luZGV4XSA9IGg7XG4gICAgZXh0cmFIZWlnaHQgPSBvcmdhbml6YXRpb24ucm93SGVpZ2h0W3Jvd0luZGV4XSAtIGV4dHJhSGVpZ2h0O1xuICB9XG5cbiAgb3JnYW5pemF0aW9uLmhlaWdodCArPSBleHRyYUhlaWdodDtcblxuICAvLyBJbnNlcnQgbm9kZVxuICBvcmdhbml6YXRpb24ucm93c1tyb3dJbmRleF0ucHVzaChub2RlKTtcbn07XG5cbi8vU2NhbnMgdGhlIHJvd3Mgb2YgYW4gb3JnYW5pemF0aW9uIGFuZCByZXR1cm5zIHRoZSBvbmUgd2l0aCB0aGUgbWluIHdpZHRoXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5nZXRTaG9ydGVzdFJvd0luZGV4ID0gZnVuY3Rpb24gKG9yZ2FuaXphdGlvbikge1xuICB2YXIgciA9IC0xO1xuICB2YXIgbWluID0gTnVtYmVyLk1BWF9WQUxVRTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG9yZ2FuaXphdGlvbi5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtpXSA8IG1pbikge1xuICAgICAgciA9IGk7XG4gICAgICBtaW4gPSBvcmdhbml6YXRpb24ucm93V2lkdGhbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiByO1xufTtcblxuLy9TY2FucyB0aGUgcm93cyBvZiBhbiBvcmdhbml6YXRpb24gYW5kIHJldHVybnMgdGhlIG9uZSB3aXRoIHRoZSBtYXggd2lkdGhcbkNvU0VMYXlvdXQucHJvdG90eXBlLmdldExvbmdlc3RSb3dJbmRleCA9IGZ1bmN0aW9uIChvcmdhbml6YXRpb24pIHtcbiAgdmFyIHIgPSAtMTtcbiAgdmFyIG1heCA9IE51bWJlci5NSU5fVkFMVUU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcmdhbml6YXRpb24ucm93cy5sZW5ndGg7IGkrKykge1xuXG4gICAgaWYgKG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtpXSA+IG1heCkge1xuICAgICAgciA9IGk7XG4gICAgICBtYXggPSBvcmdhbml6YXRpb24ucm93V2lkdGhbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHI7XG59O1xuXG4vKipcbiogVGhpcyBtZXRob2QgY2hlY2tzIHdoZXRoZXIgYWRkaW5nIGV4dHJhIHdpZHRoIHRvIHRoZSBvcmdhbml6YXRpb24gdmlvbGF0ZXNcbiogdGhlIGFzcGVjdCByYXRpbygxKSBvciBub3QuXG4qL1xuQ29TRUxheW91dC5wcm90b3R5cGUuY2FuQWRkSG9yaXpvbnRhbCA9IGZ1bmN0aW9uIChvcmdhbml6YXRpb24sIGV4dHJhV2lkdGgsIGV4dHJhSGVpZ2h0KSB7XG5cbiAgdmFyIHNyaSA9IHRoaXMuZ2V0U2hvcnRlc3RSb3dJbmRleChvcmdhbml6YXRpb24pO1xuXG4gIGlmIChzcmkgPCAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgbWluID0gb3JnYW5pemF0aW9uLnJvd1dpZHRoW3NyaV07XG5cbiAgaWYgKG1pbiArIG9yZ2FuaXphdGlvbi5ob3Jpem9udGFsUGFkZGluZyArIGV4dHJhV2lkdGggPD0gb3JnYW5pemF0aW9uLndpZHRoKVxuICAgIHJldHVybiB0cnVlO1xuXG4gIHZhciBoRGlmZiA9IDA7XG5cbiAgLy8gQWRkaW5nIHRvIGFuIGV4aXN0aW5nIHJvd1xuICBpZiAob3JnYW5pemF0aW9uLnJvd0hlaWdodFtzcmldIDwgZXh0cmFIZWlnaHQpIHtcbiAgICBpZiAoc3JpID4gMClcbiAgICAgIGhEaWZmID0gZXh0cmFIZWlnaHQgKyBvcmdhbml6YXRpb24udmVydGljYWxQYWRkaW5nIC0gb3JnYW5pemF0aW9uLnJvd0hlaWdodFtzcmldO1xuICB9XG5cbiAgdmFyIGFkZF90b19yb3dfcmF0aW87XG4gIGlmIChvcmdhbml6YXRpb24ud2lkdGggLSBtaW4gPj0gZXh0cmFXaWR0aCArIG9yZ2FuaXphdGlvbi5ob3Jpem9udGFsUGFkZGluZykge1xuICAgIGFkZF90b19yb3dfcmF0aW8gPSAob3JnYW5pemF0aW9uLmhlaWdodCArIGhEaWZmKSAvIChtaW4gKyBleHRyYVdpZHRoICsgb3JnYW5pemF0aW9uLmhvcml6b250YWxQYWRkaW5nKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRfdG9fcm93X3JhdGlvID0gKG9yZ2FuaXphdGlvbi5oZWlnaHQgKyBoRGlmZikgLyBvcmdhbml6YXRpb24ud2lkdGg7XG4gIH1cblxuICAvLyBBZGRpbmcgYSBuZXcgcm93IGZvciB0aGlzIG5vZGVcbiAgaERpZmYgPSBleHRyYUhlaWdodCArIG9yZ2FuaXphdGlvbi52ZXJ0aWNhbFBhZGRpbmc7XG4gIHZhciBhZGRfbmV3X3Jvd19yYXRpbztcbiAgaWYgKG9yZ2FuaXphdGlvbi53aWR0aCA8IGV4dHJhV2lkdGgpIHtcbiAgICBhZGRfbmV3X3Jvd19yYXRpbyA9IChvcmdhbml6YXRpb24uaGVpZ2h0ICsgaERpZmYpIC8gZXh0cmFXaWR0aDtcbiAgfSBlbHNlIHtcbiAgICBhZGRfbmV3X3Jvd19yYXRpbyA9IChvcmdhbml6YXRpb24uaGVpZ2h0ICsgaERpZmYpIC8gb3JnYW5pemF0aW9uLndpZHRoO1xuICB9XG5cbiAgaWYgKGFkZF9uZXdfcm93X3JhdGlvIDwgMSlcbiAgICBhZGRfbmV3X3Jvd19yYXRpbyA9IDEgLyBhZGRfbmV3X3Jvd19yYXRpbztcblxuICBpZiAoYWRkX3RvX3Jvd19yYXRpbyA8IDEpXG4gICAgYWRkX3RvX3Jvd19yYXRpbyA9IDEgLyBhZGRfdG9fcm93X3JhdGlvO1xuXG4gIHJldHVybiBhZGRfdG9fcm93X3JhdGlvIDwgYWRkX25ld19yb3dfcmF0aW87XG59O1xuXG4vL0lmIG1vdmluZyB0aGUgbGFzdCBub2RlIGZyb20gdGhlIGxvbmdlc3Qgcm93IGFuZCBhZGRpbmcgaXQgdG8gdGhlIGxhc3Rcbi8vcm93IG1ha2VzIHRoZSBib3VuZGluZyBib3ggc21hbGxlciwgZG8gaXQuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5zaGlmdFRvTGFzdFJvdyA9IGZ1bmN0aW9uIChvcmdhbml6YXRpb24pIHtcbiAgdmFyIGxvbmdlc3QgPSB0aGlzLmdldExvbmdlc3RSb3dJbmRleChvcmdhbml6YXRpb24pO1xuICB2YXIgbGFzdCA9IG9yZ2FuaXphdGlvbi5yb3dXaWR0aC5sZW5ndGggLSAxO1xuICB2YXIgcm93ID0gb3JnYW5pemF0aW9uLnJvd3NbbG9uZ2VzdF07XG4gIHZhciBub2RlID0gcm93W3Jvdy5sZW5ndGggLSAxXTtcblxuICB2YXIgZGlmZiA9IG5vZGUud2lkdGggKyBvcmdhbml6YXRpb24uaG9yaXpvbnRhbFBhZGRpbmc7XG5cbiAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgZW5vdWdoIHNwYWNlIG9uIHRoZSBsYXN0IHJvd1xuICBpZiAob3JnYW5pemF0aW9uLndpZHRoIC0gb3JnYW5pemF0aW9uLnJvd1dpZHRoW2xhc3RdID4gZGlmZiAmJiBsb25nZXN0ICE9IGxhc3QpIHtcbiAgICAvLyBSZW1vdmUgdGhlIGxhc3QgZWxlbWVudCBvZiB0aGUgbG9uZ2VzdCByb3dcbiAgICByb3cuc3BsaWNlKC0xLCAxKTtcblxuICAgIC8vIFB1c2ggaXQgdG8gdGhlIGxhc3Qgcm93XG4gICAgb3JnYW5pemF0aW9uLnJvd3NbbGFzdF0ucHVzaChub2RlKTtcblxuICAgIG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtsb25nZXN0XSA9IG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtsb25nZXN0XSAtIGRpZmY7XG4gICAgb3JnYW5pemF0aW9uLnJvd1dpZHRoW2xhc3RdID0gb3JnYW5pemF0aW9uLnJvd1dpZHRoW2xhc3RdICsgZGlmZjtcbiAgICBvcmdhbml6YXRpb24ud2lkdGggPSBvcmdhbml6YXRpb24ucm93V2lkdGhbaW5zdGFuY2UuZ2V0TG9uZ2VzdFJvd0luZGV4KG9yZ2FuaXphdGlvbildO1xuXG4gICAgLy8gVXBkYXRlIGhlaWdodHMgb2YgdGhlIG9yZ2FuaXphdGlvblxuICAgIHZhciBtYXhIZWlnaHQgPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocm93W2ldLmhlaWdodCA+IG1heEhlaWdodClcbiAgICAgICAgbWF4SGVpZ2h0ID0gcm93W2ldLmhlaWdodDtcbiAgICB9XG4gICAgaWYgKGxvbmdlc3QgPiAwKVxuICAgICAgbWF4SGVpZ2h0ICs9IG9yZ2FuaXphdGlvbi52ZXJ0aWNhbFBhZGRpbmc7XG5cbiAgICB2YXIgcHJldlRvdGFsID0gb3JnYW5pemF0aW9uLnJvd0hlaWdodFtsb25nZXN0XSArIG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbbGFzdF07XG5cbiAgICBvcmdhbml6YXRpb24ucm93SGVpZ2h0W2xvbmdlc3RdID0gbWF4SGVpZ2h0O1xuICAgIGlmIChvcmdhbml6YXRpb24ucm93SGVpZ2h0W2xhc3RdIDwgbm9kZS5oZWlnaHQgKyBvcmdhbml6YXRpb24udmVydGljYWxQYWRkaW5nKVxuICAgICAgb3JnYW5pemF0aW9uLnJvd0hlaWdodFtsYXN0XSA9IG5vZGUuaGVpZ2h0ICsgb3JnYW5pemF0aW9uLnZlcnRpY2FsUGFkZGluZztcblxuICAgIHZhciBmaW5hbFRvdGFsID0gb3JnYW5pemF0aW9uLnJvd0hlaWdodFtsb25nZXN0XSArIG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbbGFzdF07XG4gICAgb3JnYW5pemF0aW9uLmhlaWdodCArPSAoZmluYWxUb3RhbCAtIHByZXZUb3RhbCk7XG5cbiAgICB0aGlzLnNoaWZ0VG9MYXN0Um93KG9yZ2FuaXphdGlvbik7XG4gIH1cbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnRpbGluZ1ByZUxheW91dCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoQ29TRUNvbnN0YW50cy5USUxFKSB7XG4gICAgLy8gRmluZCB6ZXJvIGRlZ3JlZSBub2RlcyBhbmQgY3JlYXRlIGEgY29tcG91bmQgZm9yIGVhY2ggbGV2ZWxcbiAgICB0aGlzLmdyb3VwWmVyb0RlZ3JlZU1lbWJlcnMoKTtcbiAgICAvLyBUaWxlIGFuZCBjbGVhciBjaGlsZHJlbiBvZiBlYWNoIGNvbXBvdW5kXG4gICAgdGhpcy5jbGVhckNvbXBvdW5kcygpO1xuICAgIC8vIFNlcGFyYXRlbHkgdGlsZSBhbmQgY2xlYXIgemVybyBkZWdyZWUgbm9kZXMgZm9yIGVhY2ggbGV2ZWxcbiAgICB0aGlzLmNsZWFyWmVyb0RlZ3JlZU1lbWJlcnMoKTtcbiAgfVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUudGlsaW5nUG9zdExheW91dCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoQ29TRUNvbnN0YW50cy5USUxFKSB7XG4gICAgdGhpcy5yZXBvcHVsYXRlWmVyb0RlZ3JlZU1lbWJlcnMoKTtcbiAgICB0aGlzLnJlcG9wdWxhdGVDb21wb3VuZHMoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb1NFTGF5b3V0O1xuIiwidmFyIEZETGF5b3V0Tm9kZSA9IHJlcXVpcmUoJy4vRkRMYXlvdXROb2RlJyk7XG52YXIgSU1hdGggPSByZXF1aXJlKCcuL0lNYXRoJyk7XG5cbmZ1bmN0aW9uIENvU0VOb2RlKGdtLCBsb2MsIHNpemUsIHZOb2RlKSB7XG4gIEZETGF5b3V0Tm9kZS5jYWxsKHRoaXMsIGdtLCBsb2MsIHNpemUsIHZOb2RlKTtcbn1cblxuXG5Db1NFTm9kZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEZETGF5b3V0Tm9kZS5wcm90b3R5cGUpO1xuZm9yICh2YXIgcHJvcCBpbiBGRExheW91dE5vZGUpIHtcbiAgQ29TRU5vZGVbcHJvcF0gPSBGRExheW91dE5vZGVbcHJvcF07XG59XG5cbkNvU0VOb2RlLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIGxheW91dCA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldExheW91dCgpO1xuICB0aGlzLmRpc3BsYWNlbWVudFggPSBsYXlvdXQuY29vbGluZ0ZhY3RvciAqXG4gICAgICAgICAgKHRoaXMuc3ByaW5nRm9yY2VYICsgdGhpcy5yZXB1bHNpb25Gb3JjZVggKyB0aGlzLmdyYXZpdGF0aW9uRm9yY2VYKSAvIHRoaXMubm9PZkNoaWxkcmVuO1xuICB0aGlzLmRpc3BsYWNlbWVudFkgPSBsYXlvdXQuY29vbGluZ0ZhY3RvciAqXG4gICAgICAgICAgKHRoaXMuc3ByaW5nRm9yY2VZICsgdGhpcy5yZXB1bHNpb25Gb3JjZVkgKyB0aGlzLmdyYXZpdGF0aW9uRm9yY2VZKSAvIHRoaXMubm9PZkNoaWxkcmVuO1xuXG5cbiAgaWYgKE1hdGguYWJzKHRoaXMuZGlzcGxhY2VtZW50WCkgPiBsYXlvdXQuY29vbGluZ0ZhY3RvciAqIGxheW91dC5tYXhOb2RlRGlzcGxhY2VtZW50KVxuICB7XG4gICAgdGhpcy5kaXNwbGFjZW1lbnRYID0gbGF5b3V0LmNvb2xpbmdGYWN0b3IgKiBsYXlvdXQubWF4Tm9kZURpc3BsYWNlbWVudCAqXG4gICAgICAgICAgICBJTWF0aC5zaWduKHRoaXMuZGlzcGxhY2VtZW50WCk7XG4gIH1cblxuICBpZiAoTWF0aC5hYnModGhpcy5kaXNwbGFjZW1lbnRZKSA+IGxheW91dC5jb29saW5nRmFjdG9yICogbGF5b3V0Lm1heE5vZGVEaXNwbGFjZW1lbnQpXG4gIHtcbiAgICB0aGlzLmRpc3BsYWNlbWVudFkgPSBsYXlvdXQuY29vbGluZ0ZhY3RvciAqIGxheW91dC5tYXhOb2RlRGlzcGxhY2VtZW50ICpcbiAgICAgICAgICAgIElNYXRoLnNpZ24odGhpcy5kaXNwbGFjZW1lbnRZKTtcbiAgfVxuXG4gIC8vIGEgc2ltcGxlIG5vZGUsIGp1c3QgbW92ZSBpdFxuICBpZiAodGhpcy5jaGlsZCA9PSBudWxsKVxuICB7XG4gICAgdGhpcy5tb3ZlQnkodGhpcy5kaXNwbGFjZW1lbnRYLCB0aGlzLmRpc3BsYWNlbWVudFkpO1xuICB9XG4gIC8vIGFuIGVtcHR5IGNvbXBvdW5kIG5vZGUsIGFnYWluIGp1c3QgbW92ZSBpdFxuICBlbHNlIGlmICh0aGlzLmNoaWxkLmdldE5vZGVzKCkubGVuZ3RoID09IDApXG4gIHtcbiAgICB0aGlzLm1vdmVCeSh0aGlzLmRpc3BsYWNlbWVudFgsIHRoaXMuZGlzcGxhY2VtZW50WSk7XG4gIH1cbiAgLy8gbm9uLWVtcHR5IGNvbXBvdW5kIG5vZGUsIHByb3BvZ2F0ZSBtb3ZlbWVudCB0byBjaGlsZHJlbiBhcyB3ZWxsXG4gIGVsc2VcbiAge1xuICAgIHRoaXMucHJvcG9nYXRlRGlzcGxhY2VtZW50VG9DaGlsZHJlbih0aGlzLmRpc3BsYWNlbWVudFgsXG4gICAgICAgICAgICB0aGlzLmRpc3BsYWNlbWVudFkpO1xuICB9XG5cbiAgbGF5b3V0LnRvdGFsRGlzcGxhY2VtZW50ICs9XG4gICAgICAgICAgTWF0aC5hYnModGhpcy5kaXNwbGFjZW1lbnRYKSArIE1hdGguYWJzKHRoaXMuZGlzcGxhY2VtZW50WSk7XG5cbiAgdGhpcy5zcHJpbmdGb3JjZVggPSAwO1xuICB0aGlzLnNwcmluZ0ZvcmNlWSA9IDA7XG4gIHRoaXMucmVwdWxzaW9uRm9yY2VYID0gMDtcbiAgdGhpcy5yZXB1bHNpb25Gb3JjZVkgPSAwO1xuICB0aGlzLmdyYXZpdGF0aW9uRm9yY2VYID0gMDtcbiAgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWSA9IDA7XG4gIHRoaXMuZGlzcGxhY2VtZW50WCA9IDA7XG4gIHRoaXMuZGlzcGxhY2VtZW50WSA9IDA7XG59O1xuXG5Db1NFTm9kZS5wcm90b3R5cGUucHJvcG9nYXRlRGlzcGxhY2VtZW50VG9DaGlsZHJlbiA9IGZ1bmN0aW9uIChkWCwgZFkpXG57XG4gIHZhciBub2RlcyA9IHRoaXMuZ2V0Q2hpbGQoKS5nZXROb2RlcygpO1xuICB2YXIgbm9kZTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKylcbiAge1xuICAgIG5vZGUgPSBub2Rlc1tpXTtcbiAgICBpZiAobm9kZS5nZXRDaGlsZCgpID09IG51bGwpXG4gICAge1xuICAgICAgbm9kZS5tb3ZlQnkoZFgsIGRZKTtcbiAgICAgIG5vZGUuZGlzcGxhY2VtZW50WCArPSBkWDtcbiAgICAgIG5vZGUuZGlzcGxhY2VtZW50WSArPSBkWTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIG5vZGUucHJvcG9nYXRlRGlzcGxhY2VtZW50VG9DaGlsZHJlbihkWCwgZFkpO1xuICAgIH1cbiAgfVxufTtcblxuQ29TRU5vZGUucHJvdG90eXBlLnNldFByZWQxID0gZnVuY3Rpb24gKHByZWQxKVxue1xuICB0aGlzLnByZWQxID0gcHJlZDE7XG59O1xuXG5Db1NFTm9kZS5wcm90b3R5cGUuZ2V0UHJlZDEgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gcHJlZDE7XG59O1xuXG5Db1NFTm9kZS5wcm90b3R5cGUuZ2V0UHJlZDIgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gcHJlZDI7XG59O1xuXG5Db1NFTm9kZS5wcm90b3R5cGUuc2V0TmV4dCA9IGZ1bmN0aW9uIChuZXh0KVxue1xuICB0aGlzLm5leHQgPSBuZXh0O1xufTtcblxuQ29TRU5vZGUucHJvdG90eXBlLmdldE5leHQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gbmV4dDtcbn07XG5cbkNvU0VOb2RlLnByb3RvdHlwZS5zZXRQcm9jZXNzZWQgPSBmdW5jdGlvbiAocHJvY2Vzc2VkKVxue1xuICB0aGlzLnByb2Nlc3NlZCA9IHByb2Nlc3NlZDtcbn07XG5cbkNvU0VOb2RlLnByb3RvdHlwZS5pc1Byb2Nlc3NlZCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiBwcm9jZXNzZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvU0VOb2RlO1xuIiwiZnVuY3Rpb24gRGltZW5zaW9uRCh3aWR0aCwgaGVpZ2h0KSB7XG4gIHRoaXMud2lkdGggPSAwO1xuICB0aGlzLmhlaWdodCA9IDA7XG4gIGlmICh3aWR0aCAhPT0gbnVsbCAmJiBoZWlnaHQgIT09IG51bGwpIHtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gIH1cbn1cblxuRGltZW5zaW9uRC5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy53aWR0aDtcbn07XG5cbkRpbWVuc2lvbkQucHJvdG90eXBlLnNldFdpZHRoID0gZnVuY3Rpb24gKHdpZHRoKVxue1xuICB0aGlzLndpZHRoID0gd2lkdGg7XG59O1xuXG5EaW1lbnNpb25ELnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5oZWlnaHQ7XG59O1xuXG5EaW1lbnNpb25ELnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbiAoaGVpZ2h0KVxue1xuICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRGltZW5zaW9uRDtcbiIsImZ1bmN0aW9uIEVtaXR0ZXIoKXtcbiAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbn1cblxudmFyIHAgPSBFbWl0dGVyLnByb3RvdHlwZTtcblxucC5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKCBldmVudCwgY2FsbGJhY2sgKXtcbiAgdGhpcy5saXN0ZW5lcnMucHVzaCh7XG4gICAgZXZlbnQ6IGV2ZW50LFxuICAgIGNhbGxiYWNrOiBjYWxsYmFja1xuICB9KTtcbn07XG5cbnAucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiggZXZlbnQsIGNhbGxiYWNrICl7XG4gIGZvciggdmFyIGkgPSB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkgPj0gMDsgaS0tICl7XG4gICAgdmFyIGwgPSB0aGlzLmxpc3RlbmVyc1tpXTtcblxuICAgIGlmKCBsLmV2ZW50ID09PSBldmVudCAmJiBsLmNhbGxiYWNrID09PSBjYWxsYmFjayApe1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKCBpLCAxICk7XG4gICAgfVxuICB9XG59O1xuXG5wLmVtaXQgPSBmdW5jdGlvbiggZXZlbnQsIGRhdGEgKXtcbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKyApe1xuICAgIHZhciBsID0gdGhpcy5saXN0ZW5lcnNbaV07XG5cbiAgICBpZiggZXZlbnQgPT09IGwuZXZlbnQgKXtcbiAgICAgIGwuY2FsbGJhY2soIGRhdGEgKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcbiIsInZhciBMYXlvdXQgPSByZXF1aXJlKCcuL0xheW91dCcpO1xudmFyIEZETGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9GRExheW91dENvbnN0YW50cycpO1xudmFyIExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vTGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgSUdlb21ldHJ5ID0gcmVxdWlyZSgnLi9JR2VvbWV0cnknKTtcbnZhciBJTWF0aCA9IHJlcXVpcmUoJy4vSU1hdGgnKTtcbnZhciBJbnRlZ2VyID0gcmVxdWlyZSgnLi9JbnRlZ2VyJyk7XG5cbmZ1bmN0aW9uIEZETGF5b3V0KCkge1xuICBMYXlvdXQuY2FsbCh0aGlzKTtcblxuICB0aGlzLnVzZVNtYXJ0SWRlYWxFZGdlTGVuZ3RoQ2FsY3VsYXRpb24gPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX1VTRV9TTUFSVF9JREVBTF9FREdFX0xFTkdUSF9DQUxDVUxBVElPTjtcbiAgdGhpcy5pZGVhbEVkZ2VMZW5ndGggPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIO1xuICB0aGlzLnNwcmluZ0NvbnN0YW50ID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9TUFJJTkdfU1RSRU5HVEg7XG4gIHRoaXMucmVwdWxzaW9uQ29uc3RhbnQgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX1JFUFVMU0lPTl9TVFJFTkdUSDtcbiAgdGhpcy5ncmF2aXR5Q29uc3RhbnQgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfU1RSRU5HVEg7XG4gIHRoaXMuY29tcG91bmRHcmF2aXR5Q29uc3RhbnQgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfU1RSRU5HVEg7XG4gIHRoaXMuZ3Jhdml0eVJhbmdlRmFjdG9yID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUjtcbiAgdGhpcy5jb21wb3VuZEdyYXZpdHlSYW5nZUZhY3RvciA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1I7XG4gIHRoaXMuZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSA9ICgzLjAgKiBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIKSAvIDEwMDtcbiAgdGhpcy5jb29saW5nRmFjdG9yID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTDtcbiAgdGhpcy5pbml0aWFsQ29vbGluZ0ZhY3RvciA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUw7XG4gIHRoaXMudG90YWxEaXNwbGFjZW1lbnQgPSAwLjA7XG4gIHRoaXMub2xkVG90YWxEaXNwbGFjZW1lbnQgPSAwLjA7XG4gIHRoaXMubWF4SXRlcmF0aW9ucyA9IEZETGF5b3V0Q29uc3RhbnRzLk1BWF9JVEVSQVRJT05TO1xufVxuXG5GRExheW91dC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExheW91dC5wcm90b3R5cGUpO1xuXG5mb3IgKHZhciBwcm9wIGluIExheW91dCkge1xuICBGRExheW91dFtwcm9wXSA9IExheW91dFtwcm9wXTtcbn1cblxuRkRMYXlvdXQucHJvdG90eXBlLmluaXRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkge1xuICBMYXlvdXQucHJvdG90eXBlLmluaXRQYXJhbWV0ZXJzLmNhbGwodGhpcywgYXJndW1lbnRzKTtcblxuICBpZiAodGhpcy5sYXlvdXRRdWFsaXR5ID09IExheW91dENvbnN0YW50cy5EUkFGVF9RVUFMSVRZKVxuICB7XG4gICAgdGhpcy5kaXNwbGFjZW1lbnRUaHJlc2hvbGRQZXJOb2RlICs9IDAuMzA7XG4gICAgdGhpcy5tYXhJdGVyYXRpb25zICo9IDAuODtcbiAgfVxuICBlbHNlIGlmICh0aGlzLmxheW91dFF1YWxpdHkgPT0gTGF5b3V0Q29uc3RhbnRzLlBST09GX1FVQUxJVFkpXG4gIHtcbiAgICB0aGlzLmRpc3BsYWNlbWVudFRocmVzaG9sZFBlck5vZGUgLT0gMC4zMDtcbiAgICB0aGlzLm1heEl0ZXJhdGlvbnMgKj0gMS4yO1xuICB9XG5cbiAgdGhpcy50b3RhbEl0ZXJhdGlvbnMgPSAwO1xuICB0aGlzLm5vdEFuaW1hdGVkSXRlcmF0aW9ucyA9IDA7XG5cbiAgdGhpcy51c2VGUkdyaWRWYXJpYW50ID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VU0VfU01BUlRfUkVQVUxTSU9OX1JBTkdFX0NBTENVTEFUSU9OO1xuICBcbiAgdGhpcy5ncmlkID0gW107XG4gIC8vIHZhcmlhYmxlcyBmb3IgdHJlZSByZWR1Y3Rpb24gc3VwcG9ydFxuICB0aGlzLnBydW5lZE5vZGVzQWxsID0gW107XG4gIHRoaXMuZ3Jvd1RyZWVJdGVyYXRpb25zID0gMDtcbiAgdGhpcy5hZnRlckdyb3d0aEl0ZXJhdGlvbnMgPSAwO1xuICB0aGlzLmlzVHJlZUdyb3dpbmcgPSBmYWxzZTtcbiAgdGhpcy5pc0dyb3d0aEZpbmlzaGVkID0gZmFsc2U7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY0lkZWFsRWRnZUxlbmd0aHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlZGdlO1xuICB2YXIgbGNhRGVwdGg7XG4gIHZhciBzb3VyY2U7XG4gIHZhciB0YXJnZXQ7XG4gIHZhciBzaXplT2ZTb3VyY2VJbkxjYTtcbiAgdmFyIHNpemVPZlRhcmdldEluTGNhO1xuXG4gIHZhciBhbGxFZGdlcyA9IHRoaXMuZ2V0R3JhcGhNYW5hZ2VyKCkuZ2V0QWxsRWRnZXMoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxFZGdlcy5sZW5ndGg7IGkrKylcbiAge1xuICAgIGVkZ2UgPSBhbGxFZGdlc1tpXTtcblxuICAgIGVkZ2UuaWRlYWxMZW5ndGggPSB0aGlzLmlkZWFsRWRnZUxlbmd0aDtcblxuICAgIGlmIChlZGdlLmlzSW50ZXJHcmFwaClcbiAgICB7XG4gICAgICBzb3VyY2UgPSBlZGdlLmdldFNvdXJjZSgpO1xuICAgICAgdGFyZ2V0ID0gZWRnZS5nZXRUYXJnZXQoKTtcblxuICAgICAgc2l6ZU9mU291cmNlSW5MY2EgPSBlZGdlLmdldFNvdXJjZUluTGNhKCkuZ2V0RXN0aW1hdGVkU2l6ZSgpO1xuICAgICAgc2l6ZU9mVGFyZ2V0SW5MY2EgPSBlZGdlLmdldFRhcmdldEluTGNhKCkuZ2V0RXN0aW1hdGVkU2l6ZSgpO1xuXG4gICAgICBpZiAodGhpcy51c2VTbWFydElkZWFsRWRnZUxlbmd0aENhbGN1bGF0aW9uKVxuICAgICAge1xuICAgICAgICBlZGdlLmlkZWFsTGVuZ3RoICs9IHNpemVPZlNvdXJjZUluTGNhICsgc2l6ZU9mVGFyZ2V0SW5MY2EgLVxuICAgICAgICAgICAgICAgIDIgKiBMYXlvdXRDb25zdGFudHMuU0lNUExFX05PREVfU0laRTtcbiAgICAgIH1cblxuICAgICAgbGNhRGVwdGggPSBlZGdlLmdldExjYSgpLmdldEluY2x1c2lvblRyZWVEZXB0aCgpO1xuXG4gICAgICBlZGdlLmlkZWFsTGVuZ3RoICs9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggKlxuICAgICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5QRVJfTEVWRUxfSURFQUxfRURHRV9MRU5HVEhfRkFDVE9SICpcbiAgICAgICAgICAgICAgKHNvdXJjZS5nZXRJbmNsdXNpb25UcmVlRGVwdGgoKSArXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmdldEluY2x1c2lvblRyZWVEZXB0aCgpIC0gMiAqIGxjYURlcHRoKTtcbiAgICB9XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5pbml0U3ByaW5nRW1iZWRkZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgaWYgKHRoaXMuaW5jcmVtZW50YWwpXG4gIHtcbiAgICB0aGlzLm1heE5vZGVEaXNwbGFjZW1lbnQgPVxuICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuTUFYX05PREVfRElTUExBQ0VNRU5UX0lOQ1JFTUVOVEFMO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIHRoaXMuY29vbGluZ0ZhY3RvciA9IDEuMDtcbiAgICB0aGlzLmluaXRpYWxDb29saW5nRmFjdG9yID0gMS4wO1xuICAgIHRoaXMubWF4Tm9kZURpc3BsYWNlbWVudCA9XG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5NQVhfTk9ERV9ESVNQTEFDRU1FTlQ7XG4gIH1cblxuICB0aGlzLm1heEl0ZXJhdGlvbnMgPVxuICAgICAgICAgIE1hdGgubWF4KHRoaXMuZ2V0QWxsTm9kZXMoKS5sZW5ndGggKiA1LCB0aGlzLm1heEl0ZXJhdGlvbnMpO1xuXG4gIHRoaXMudG90YWxEaXNwbGFjZW1lbnRUaHJlc2hvbGQgPVxuICAgICAgICAgIHRoaXMuZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSAqIHRoaXMuZ2V0QWxsTm9kZXMoKS5sZW5ndGg7XG5cbiAgdGhpcy5yZXB1bHNpb25SYW5nZSA9IHRoaXMuY2FsY1JlcHVsc2lvblJhbmdlKCk7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1NwcmluZ0ZvcmNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxFZGdlcyA9IHRoaXMuZ2V0QWxsRWRnZXMoKTtcbiAgdmFyIGVkZ2U7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsRWRnZXMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICBlZGdlID0gbEVkZ2VzW2ldO1xuXG4gICAgdGhpcy5jYWxjU3ByaW5nRm9yY2UoZWRnZSwgZWRnZS5pZGVhbExlbmd0aCk7XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjUmVwdWxzaW9uRm9yY2VzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaSwgajtcbiAgdmFyIG5vZGVBLCBub2RlQjtcbiAgdmFyIGxOb2RlcyA9IHRoaXMuZ2V0QWxsTm9kZXMoKTtcbiAgdmFyIHByb2Nlc3NlZE5vZGVTZXQ7XG5cbiAgaWYgKHRoaXMudXNlRlJHcmlkVmFyaWFudClcbiAgeyAgICAgICBcbiAgICBpZiAoKHRoaXMudG90YWxJdGVyYXRpb25zICUgRkRMYXlvdXRDb25zdGFudHMuR1JJRF9DQUxDVUxBVElPTl9DSEVDS19QRVJJT0QgPT0gMSAmJiAhdGhpcy5pc1RyZWVHcm93aW5nICYmICF0aGlzLmlzR3Jvd3RoRmluaXNoZWQpKVxuICAgIHsgICAgICAgXG4gICAgICB0aGlzLnVwZGF0ZUdyaWQoKTsgIFxuICAgIH1cblxuICAgIHByb2Nlc3NlZE5vZGVTZXQgPSBuZXcgU2V0KCk7XG4gICAgXG4gICAgLy8gY2FsY3VsYXRlIHJlcHVsc2lvbiBmb3JjZXMgYmV0d2VlbiBlYWNoIG5vZGVzIGFuZCBpdHMgc3Vycm91bmRpbmdcbiAgICBmb3IgKGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIG5vZGVBID0gbE5vZGVzW2ldO1xuICAgICAgdGhpcy5jYWxjdWxhdGVSZXB1bHNpb25Gb3JjZU9mQU5vZGUobm9kZUEsIHByb2Nlc3NlZE5vZGVTZXQpO1xuICAgICAgcHJvY2Vzc2VkTm9kZVNldC5hZGQobm9kZUEpO1xuICAgIH1cbiAgfVxuICBlbHNlXG4gIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIG5vZGVBID0gbE5vZGVzW2ldO1xuXG4gICAgICBmb3IgKGogPSBpICsgMTsgaiA8IGxOb2Rlcy5sZW5ndGg7IGorKylcbiAgICAgIHtcbiAgICAgICAgbm9kZUIgPSBsTm9kZXNbal07XG5cbiAgICAgICAgLy8gSWYgYm90aCBub2RlcyBhcmUgbm90IG1lbWJlcnMgb2YgdGhlIHNhbWUgZ3JhcGgsIHNraXAuXG4gICAgICAgIGlmIChub2RlQS5nZXRPd25lcigpICE9IG5vZGVCLmdldE93bmVyKCkpXG4gICAgICAgIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FsY1JlcHVsc2lvbkZvcmNlKG5vZGVBLCBub2RlQik7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY0dyYXZpdGF0aW9uYWxGb3JjZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBub2RlO1xuICB2YXIgbE5vZGVzID0gdGhpcy5nZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbigpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgbm9kZSA9IGxOb2Rlc1tpXTtcbiAgICB0aGlzLmNhbGNHcmF2aXRhdGlvbmFsRm9yY2Uobm9kZSk7XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5tb3ZlTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsTm9kZXMgPSB0aGlzLmdldEFsbE5vZGVzKCk7XG4gIHZhciBub2RlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgbm9kZSA9IGxOb2Rlc1tpXTtcbiAgICBub2RlLm1vdmUoKTtcbiAgfVxufVxuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1NwcmluZ0ZvcmNlID0gZnVuY3Rpb24gKGVkZ2UsIGlkZWFsTGVuZ3RoKSB7XG4gIHZhciBzb3VyY2VOb2RlID0gZWRnZS5nZXRTb3VyY2UoKTtcbiAgdmFyIHRhcmdldE5vZGUgPSBlZGdlLmdldFRhcmdldCgpO1xuXG4gIHZhciBsZW5ndGg7XG4gIHZhciBzcHJpbmdGb3JjZTtcbiAgdmFyIHNwcmluZ0ZvcmNlWDtcbiAgdmFyIHNwcmluZ0ZvcmNlWTtcblxuICAvLyBVcGRhdGUgZWRnZSBsZW5ndGhcbiAgaWYgKHRoaXMudW5pZm9ybUxlYWZOb2RlU2l6ZXMgJiZcbiAgICAgICAgICBzb3VyY2VOb2RlLmdldENoaWxkKCkgPT0gbnVsbCAmJiB0YXJnZXROb2RlLmdldENoaWxkKCkgPT0gbnVsbClcbiAge1xuICAgIGVkZ2UudXBkYXRlTGVuZ3RoU2ltcGxlKCk7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgZWRnZS51cGRhdGVMZW5ndGgoKTtcblxuICAgIGlmIChlZGdlLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldClcbiAgICB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgbGVuZ3RoID0gZWRnZS5nZXRMZW5ndGgoKTtcblxuICAvLyBDYWxjdWxhdGUgc3ByaW5nIGZvcmNlc1xuICBzcHJpbmdGb3JjZSA9IHRoaXMuc3ByaW5nQ29uc3RhbnQgKiAobGVuZ3RoIC0gaWRlYWxMZW5ndGgpO1xuXG4gIC8vIFByb2plY3QgZm9yY2Ugb250byB4IGFuZCB5IGF4ZXNcbiAgc3ByaW5nRm9yY2VYID0gc3ByaW5nRm9yY2UgKiAoZWRnZS5sZW5ndGhYIC8gbGVuZ3RoKTtcbiAgc3ByaW5nRm9yY2VZID0gc3ByaW5nRm9yY2UgKiAoZWRnZS5sZW5ndGhZIC8gbGVuZ3RoKTtcblxuICAvLyBBcHBseSBmb3JjZXMgb24gdGhlIGVuZCBub2Rlc1xuICBzb3VyY2VOb2RlLnNwcmluZ0ZvcmNlWCArPSBzcHJpbmdGb3JjZVg7XG4gIHNvdXJjZU5vZGUuc3ByaW5nRm9yY2VZICs9IHNwcmluZ0ZvcmNlWTtcbiAgdGFyZ2V0Tm9kZS5zcHJpbmdGb3JjZVggLT0gc3ByaW5nRm9yY2VYO1xuICB0YXJnZXROb2RlLnNwcmluZ0ZvcmNlWSAtPSBzcHJpbmdGb3JjZVk7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1JlcHVsc2lvbkZvcmNlID0gZnVuY3Rpb24gKG5vZGVBLCBub2RlQikge1xuICB2YXIgcmVjdEEgPSBub2RlQS5nZXRSZWN0KCk7XG4gIHZhciByZWN0QiA9IG5vZGVCLmdldFJlY3QoKTtcbiAgdmFyIG92ZXJsYXBBbW91bnQgPSBuZXcgQXJyYXkoMik7XG4gIHZhciBjbGlwUG9pbnRzID0gbmV3IEFycmF5KDQpO1xuICB2YXIgZGlzdGFuY2VYO1xuICB2YXIgZGlzdGFuY2VZO1xuICB2YXIgZGlzdGFuY2VTcXVhcmVkO1xuICB2YXIgZGlzdGFuY2U7XG4gIHZhciByZXB1bHNpb25Gb3JjZTtcbiAgdmFyIHJlcHVsc2lvbkZvcmNlWDtcbiAgdmFyIHJlcHVsc2lvbkZvcmNlWTtcblxuICBpZiAocmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpLy8gdHdvIG5vZGVzIG92ZXJsYXBcbiAge1xuICAgIC8vIGNhbGN1bGF0ZSBzZXBhcmF0aW9uIGFtb3VudCBpbiB4IGFuZCB5IGRpcmVjdGlvbnNcbiAgICBJR2VvbWV0cnkuY2FsY1NlcGFyYXRpb25BbW91bnQocmVjdEEsXG4gICAgICAgICAgICByZWN0QixcbiAgICAgICAgICAgIG92ZXJsYXBBbW91bnQsXG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIIC8gMi4wKTtcblxuICAgIHJlcHVsc2lvbkZvcmNlWCA9IDIgKiBvdmVybGFwQW1vdW50WzBdO1xuICAgIHJlcHVsc2lvbkZvcmNlWSA9IDIgKiBvdmVybGFwQW1vdW50WzFdO1xuICAgIFxuICAgIHZhciBjaGlsZHJlbkNvbnN0YW50ID0gbm9kZUEubm9PZkNoaWxkcmVuICogbm9kZUIubm9PZkNoaWxkcmVuIC8gKG5vZGVBLm5vT2ZDaGlsZHJlbiArIG5vZGVCLm5vT2ZDaGlsZHJlbik7XG4gICAgXG4gICAgLy8gQXBwbHkgZm9yY2VzIG9uIHRoZSB0d28gbm9kZXNcbiAgICBub2RlQS5yZXB1bHNpb25Gb3JjZVggLT0gY2hpbGRyZW5Db25zdGFudCAqIHJlcHVsc2lvbkZvcmNlWDtcbiAgICBub2RlQS5yZXB1bHNpb25Gb3JjZVkgLT0gY2hpbGRyZW5Db25zdGFudCAqIHJlcHVsc2lvbkZvcmNlWTtcbiAgICBub2RlQi5yZXB1bHNpb25Gb3JjZVggKz0gY2hpbGRyZW5Db25zdGFudCAqIHJlcHVsc2lvbkZvcmNlWDtcbiAgICBub2RlQi5yZXB1bHNpb25Gb3JjZVkgKz0gY2hpbGRyZW5Db25zdGFudCAqIHJlcHVsc2lvbkZvcmNlWTtcbiAgfVxuICBlbHNlLy8gbm8gb3ZlcmxhcFxuICB7XG4gICAgLy8gY2FsY3VsYXRlIGRpc3RhbmNlXG5cbiAgICBpZiAodGhpcy51bmlmb3JtTGVhZk5vZGVTaXplcyAmJlxuICAgICAgICAgICAgbm9kZUEuZ2V0Q2hpbGQoKSA9PSBudWxsICYmIG5vZGVCLmdldENoaWxkKCkgPT0gbnVsbCkvLyBzaW1wbHkgYmFzZSByZXB1bHNpb24gb24gZGlzdGFuY2Ugb2Ygbm9kZSBjZW50ZXJzXG4gICAge1xuICAgICAgZGlzdGFuY2VYID0gcmVjdEIuZ2V0Q2VudGVyWCgpIC0gcmVjdEEuZ2V0Q2VudGVyWCgpO1xuICAgICAgZGlzdGFuY2VZID0gcmVjdEIuZ2V0Q2VudGVyWSgpIC0gcmVjdEEuZ2V0Q2VudGVyWSgpO1xuICAgIH1cbiAgICBlbHNlLy8gdXNlIGNsaXBwaW5nIHBvaW50c1xuICAgIHtcbiAgICAgIElHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24ocmVjdEEsIHJlY3RCLCBjbGlwUG9pbnRzKTtcblxuICAgICAgZGlzdGFuY2VYID0gY2xpcFBvaW50c1syXSAtIGNsaXBQb2ludHNbMF07XG4gICAgICBkaXN0YW5jZVkgPSBjbGlwUG9pbnRzWzNdIC0gY2xpcFBvaW50c1sxXTtcbiAgICB9XG5cbiAgICAvLyBObyByZXB1bHNpb24gcmFuZ2UuIEZSIGdyaWQgdmFyaWFudCBzaG91bGQgdGFrZSBjYXJlIG9mIHRoaXMuXG4gICAgaWYgKE1hdGguYWJzKGRpc3RhbmNlWCkgPCBGRExheW91dENvbnN0YW50cy5NSU5fUkVQVUxTSU9OX0RJU1QpXG4gICAge1xuICAgICAgZGlzdGFuY2VYID0gSU1hdGguc2lnbihkaXN0YW5jZVgpICpcbiAgICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuTUlOX1JFUFVMU0lPTl9ESVNUO1xuICAgIH1cblxuICAgIGlmIChNYXRoLmFicyhkaXN0YW5jZVkpIDwgRkRMYXlvdXRDb25zdGFudHMuTUlOX1JFUFVMU0lPTl9ESVNUKVxuICAgIHtcbiAgICAgIGRpc3RhbmNlWSA9IElNYXRoLnNpZ24oZGlzdGFuY2VZKSAqXG4gICAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLk1JTl9SRVBVTFNJT05fRElTVDtcbiAgICB9XG5cbiAgICBkaXN0YW5jZVNxdWFyZWQgPSBkaXN0YW5jZVggKiBkaXN0YW5jZVggKyBkaXN0YW5jZVkgKiBkaXN0YW5jZVk7XG4gICAgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZGlzdGFuY2VTcXVhcmVkKTtcblxuICAgIHJlcHVsc2lvbkZvcmNlID0gdGhpcy5yZXB1bHNpb25Db25zdGFudCAqIG5vZGVBLm5vT2ZDaGlsZHJlbiAqIG5vZGVCLm5vT2ZDaGlsZHJlbiAvIGRpc3RhbmNlU3F1YXJlZDtcblxuICAgIC8vIFByb2plY3QgZm9yY2Ugb250byB4IGFuZCB5IGF4ZXNcbiAgICByZXB1bHNpb25Gb3JjZVggPSByZXB1bHNpb25Gb3JjZSAqIGRpc3RhbmNlWCAvIGRpc3RhbmNlO1xuICAgIHJlcHVsc2lvbkZvcmNlWSA9IHJlcHVsc2lvbkZvcmNlICogZGlzdGFuY2VZIC8gZGlzdGFuY2U7XG4gICAgIFxuICAgIC8vIEFwcGx5IGZvcmNlcyBvbiB0aGUgdHdvIG5vZGVzICAgIFxuICAgIG5vZGVBLnJlcHVsc2lvbkZvcmNlWCAtPSByZXB1bHNpb25Gb3JjZVg7XG4gICAgbm9kZUEucmVwdWxzaW9uRm9yY2VZIC09IHJlcHVsc2lvbkZvcmNlWTtcbiAgICBub2RlQi5yZXB1bHNpb25Gb3JjZVggKz0gcmVwdWxzaW9uRm9yY2VYO1xuICAgIG5vZGVCLnJlcHVsc2lvbkZvcmNlWSArPSByZXB1bHNpb25Gb3JjZVk7XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjR3Jhdml0YXRpb25hbEZvcmNlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIG93bmVyR3JhcGg7XG4gIHZhciBvd25lckNlbnRlclg7XG4gIHZhciBvd25lckNlbnRlclk7XG4gIHZhciBkaXN0YW5jZVg7XG4gIHZhciBkaXN0YW5jZVk7XG4gIHZhciBhYnNEaXN0YW5jZVg7XG4gIHZhciBhYnNEaXN0YW5jZVk7XG4gIHZhciBlc3RpbWF0ZWRTaXplO1xuICBvd25lckdyYXBoID0gbm9kZS5nZXRPd25lcigpO1xuXG4gIG93bmVyQ2VudGVyWCA9IChvd25lckdyYXBoLmdldFJpZ2h0KCkgKyBvd25lckdyYXBoLmdldExlZnQoKSkgLyAyO1xuICBvd25lckNlbnRlclkgPSAob3duZXJHcmFwaC5nZXRUb3AoKSArIG93bmVyR3JhcGguZ2V0Qm90dG9tKCkpIC8gMjtcbiAgZGlzdGFuY2VYID0gbm9kZS5nZXRDZW50ZXJYKCkgLSBvd25lckNlbnRlclg7XG4gIGRpc3RhbmNlWSA9IG5vZGUuZ2V0Q2VudGVyWSgpIC0gb3duZXJDZW50ZXJZO1xuICBhYnNEaXN0YW5jZVggPSBNYXRoLmFicyhkaXN0YW5jZVgpICsgbm9kZS5nZXRXaWR0aCgpIC8gMjtcbiAgYWJzRGlzdGFuY2VZID0gTWF0aC5hYnMoZGlzdGFuY2VZKSArIG5vZGUuZ2V0SGVpZ2h0KCkgLyAyO1xuXG4gIGlmIChub2RlLmdldE93bmVyKCkgPT0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpKS8vIGluIHRoZSByb290IGdyYXBoXG4gIHtcbiAgICBlc3RpbWF0ZWRTaXplID0gb3duZXJHcmFwaC5nZXRFc3RpbWF0ZWRTaXplKCkgKiB0aGlzLmdyYXZpdHlSYW5nZUZhY3RvcjtcblxuICAgIGlmIChhYnNEaXN0YW5jZVggPiBlc3RpbWF0ZWRTaXplIHx8IGFic0Rpc3RhbmNlWSA+IGVzdGltYXRlZFNpemUpXG4gICAge1xuICAgICAgbm9kZS5ncmF2aXRhdGlvbkZvcmNlWCA9IC10aGlzLmdyYXZpdHlDb25zdGFudCAqIGRpc3RhbmNlWDtcbiAgICAgIG5vZGUuZ3Jhdml0YXRpb25Gb3JjZVkgPSAtdGhpcy5ncmF2aXR5Q29uc3RhbnQgKiBkaXN0YW5jZVk7XG4gICAgfVxuICB9XG4gIGVsc2UvLyBpbnNpZGUgYSBjb21wb3VuZFxuICB7XG4gICAgZXN0aW1hdGVkU2l6ZSA9IG93bmVyR3JhcGguZ2V0RXN0aW1hdGVkU2l6ZSgpICogdGhpcy5jb21wb3VuZEdyYXZpdHlSYW5nZUZhY3RvcjtcblxuICAgIGlmIChhYnNEaXN0YW5jZVggPiBlc3RpbWF0ZWRTaXplIHx8IGFic0Rpc3RhbmNlWSA+IGVzdGltYXRlZFNpemUpXG4gICAge1xuICAgICAgbm9kZS5ncmF2aXRhdGlvbkZvcmNlWCA9IC10aGlzLmdyYXZpdHlDb25zdGFudCAqIGRpc3RhbmNlWCAqXG4gICAgICAgICAgICAgIHRoaXMuY29tcG91bmRHcmF2aXR5Q29uc3RhbnQ7XG4gICAgICBub2RlLmdyYXZpdGF0aW9uRm9yY2VZID0gLXRoaXMuZ3Jhdml0eUNvbnN0YW50ICogZGlzdGFuY2VZICpcbiAgICAgICAgICAgICAgdGhpcy5jb21wb3VuZEdyYXZpdHlDb25zdGFudDtcbiAgICB9XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5pc0NvbnZlcmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvbnZlcmdlZDtcbiAgdmFyIG9zY2lsYXRpbmcgPSBmYWxzZTtcblxuICBpZiAodGhpcy50b3RhbEl0ZXJhdGlvbnMgPiB0aGlzLm1heEl0ZXJhdGlvbnMgLyAzKVxuICB7XG4gICAgb3NjaWxhdGluZyA9XG4gICAgICAgICAgICBNYXRoLmFicyh0aGlzLnRvdGFsRGlzcGxhY2VtZW50IC0gdGhpcy5vbGRUb3RhbERpc3BsYWNlbWVudCkgPCAyO1xuICB9XG5cbiAgY29udmVyZ2VkID0gdGhpcy50b3RhbERpc3BsYWNlbWVudCA8IHRoaXMudG90YWxEaXNwbGFjZW1lbnRUaHJlc2hvbGQ7XG5cbiAgdGhpcy5vbGRUb3RhbERpc3BsYWNlbWVudCA9IHRoaXMudG90YWxEaXNwbGFjZW1lbnQ7XG5cbiAgcmV0dXJuIGNvbnZlcmdlZCB8fCBvc2NpbGF0aW5nO1xufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dCAmJiAhdGhpcy5pc1N1YkxheW91dClcbiAge1xuICAgIGlmICh0aGlzLm5vdEFuaW1hdGVkSXRlcmF0aW9ucyA9PSB0aGlzLmFuaW1hdGlvblBlcmlvZClcbiAgICB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgdGhpcy5ub3RBbmltYXRlZEl0ZXJhdGlvbnMgPSAwO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgdGhpcy5ub3RBbmltYXRlZEl0ZXJhdGlvbnMrKztcbiAgICB9XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBGUi1HcmlkIFZhcmlhbnQgUmVwdWxzaW9uIEZvcmNlIENhbGN1bGF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY0dyaWQgPSBmdW5jdGlvbiAoZ3JhcGgpe1xuXG4gIHZhciBzaXplWCA9IDA7IFxuICB2YXIgc2l6ZVkgPSAwO1xuICBcbiAgc2l6ZVggPSBwYXJzZUludChNYXRoLmNlaWwoKGdyYXBoLmdldFJpZ2h0KCkgLSBncmFwaC5nZXRMZWZ0KCkpIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpO1xuICBzaXplWSA9IHBhcnNlSW50KE1hdGguY2VpbCgoZ3JhcGguZ2V0Qm90dG9tKCkgLSBncmFwaC5nZXRUb3AoKSkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSk7XG4gIFxuICB2YXIgZ3JpZCA9IG5ldyBBcnJheShzaXplWCk7XG4gIFxuICBmb3IodmFyIGkgPSAwOyBpIDwgc2l6ZVg7IGkrKyl7XG4gICAgZ3JpZFtpXSA9IG5ldyBBcnJheShzaXplWSk7ICAgIFxuICB9XG4gIFxuICBmb3IodmFyIGkgPSAwOyBpIDwgc2l6ZVg7IGkrKyl7XG4gICAgZm9yKHZhciBqID0gMDsgaiA8IHNpemVZOyBqKyspe1xuICAgICAgZ3JpZFtpXVtqXSA9IG5ldyBBcnJheSgpOyAgICBcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBncmlkO1xufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmFkZE5vZGVUb0dyaWQgPSBmdW5jdGlvbiAodiwgbGVmdCwgdG9wKXtcbiAgICBcbiAgdmFyIHN0YXJ0WCA9IDA7XG4gIHZhciBmaW5pc2hYID0gMDtcbiAgdmFyIHN0YXJ0WSA9IDA7XG4gIHZhciBmaW5pc2hZID0gMDtcbiAgXG4gIHN0YXJ0WCA9IHBhcnNlSW50KE1hdGguZmxvb3IoKHYuZ2V0UmVjdCgpLnggLSBsZWZ0KSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgZmluaXNoWCA9IHBhcnNlSW50KE1hdGguZmxvb3IoKHYuZ2V0UmVjdCgpLndpZHRoICsgdi5nZXRSZWN0KCkueCAtIGxlZnQpIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpO1xuICBzdGFydFkgPSBwYXJzZUludChNYXRoLmZsb29yKCh2LmdldFJlY3QoKS55IC0gdG9wKSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgZmluaXNoWSA9IHBhcnNlSW50KE1hdGguZmxvb3IoKHYuZ2V0UmVjdCgpLmhlaWdodCArIHYuZ2V0UmVjdCgpLnkgLSB0b3ApIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpO1xuXG4gIGZvciAodmFyIGkgPSBzdGFydFg7IGkgPD0gZmluaXNoWDsgaSsrKVxuICB7XG4gICAgZm9yICh2YXIgaiA9IHN0YXJ0WTsgaiA8PSBmaW5pc2hZOyBqKyspXG4gICAge1xuICAgICAgdGhpcy5ncmlkW2ldW2pdLnB1c2godik7XG4gICAgICB2LnNldEdyaWRDb29yZGluYXRlcyhzdGFydFgsIGZpbmlzaFgsIHN0YXJ0WSwgZmluaXNoWSk7IFxuICAgIH1cbiAgfSAgXG5cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS51cGRhdGVHcmlkID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpO1xuICB2YXIgbm9kZUE7XG4gIHZhciBsTm9kZXMgPSB0aGlzLmdldEFsbE5vZGVzKCk7XG4gIFxuICB0aGlzLmdyaWQgPSB0aGlzLmNhbGNHcmlkKHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSk7ICAgXG5cbiAgLy8gcHV0IGFsbCBub2RlcyB0byBwcm9wZXIgZ3JpZCBjZWxsc1xuICBmb3IgKGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgbm9kZUEgPSBsTm9kZXNbaV07XG4gICAgdGhpcy5hZGROb2RlVG9HcmlkKG5vZGVBLCB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0TGVmdCgpLCB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0VG9wKCkpO1xuICB9IFxuXG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY3VsYXRlUmVwdWxzaW9uRm9yY2VPZkFOb2RlID0gZnVuY3Rpb24gKG5vZGVBLCBwcm9jZXNzZWROb2RlU2V0KXtcbiAgXG4gIGlmICgodGhpcy50b3RhbEl0ZXJhdGlvbnMgJSBGRExheW91dENvbnN0YW50cy5HUklEX0NBTENVTEFUSU9OX0NIRUNLX1BFUklPRCA9PSAxICYmICF0aGlzLmlzVHJlZUdyb3dpbmcgJiYgIXRoaXMuaXNHcm93dGhGaW5pc2hlZCkgfHwgKHRoaXMuZ3Jvd1RyZWVJdGVyYXRpb25zICUgMTAgPT0gMSAmJiB0aGlzLmlzVHJlZUdyb3dpbmcpIHx8ICh0aGlzLmFmdGVyR3Jvd3RoSXRlcmF0aW9ucyAlIDEwID09IDEgJiYgdGhpcy5pc0dyb3d0aEZpbmlzaGVkKSlcbiAge1xuICAgIHZhciBzdXJyb3VuZGluZyA9IG5ldyBTZXQoKTtcbiAgICBub2RlQS5zdXJyb3VuZGluZyA9IG5ldyBBcnJheSgpO1xuICAgIHZhciBub2RlQjtcbiAgICB2YXIgZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICBcbiAgICBmb3IgKHZhciBpID0gKG5vZGVBLnN0YXJ0WCAtIDEpOyBpIDwgKG5vZGVBLmZpbmlzaFggKyAyKTsgaSsrKVxuICAgIHtcbiAgICAgIGZvciAodmFyIGogPSAobm9kZUEuc3RhcnRZIC0gMSk7IGogPCAobm9kZUEuZmluaXNoWSArIDIpOyBqKyspXG4gICAgICB7XG4gICAgICAgIGlmICghKChpIDwgMCkgfHwgKGogPCAwKSB8fCAoaSA+PSBncmlkLmxlbmd0aCkgfHwgKGogPj0gZ3JpZFswXS5sZW5ndGgpKSlcbiAgICAgICAgeyAgXG4gICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBncmlkW2ldW2pdLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBub2RlQiA9IGdyaWRbaV1bal1ba107XG5cbiAgICAgICAgICAgIC8vIElmIGJvdGggbm9kZXMgYXJlIG5vdCBtZW1iZXJzIG9mIHRoZSBzYW1lIGdyYXBoLCBcbiAgICAgICAgICAgIC8vIG9yIGJvdGggbm9kZXMgYXJlIHRoZSBzYW1lLCBza2lwLlxuICAgICAgICAgICAgaWYgKChub2RlQS5nZXRPd25lcigpICE9IG5vZGVCLmdldE93bmVyKCkpIHx8IChub2RlQSA9PSBub2RlQikpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgcmVwdWxzaW9uIGZvcmNlIGJldHdlZW5cbiAgICAgICAgICAgIC8vIG5vZGVBIGFuZCBub2RlQiBoYXMgYWxyZWFkeSBiZWVuIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgIGlmICghcHJvY2Vzc2VkTm9kZVNldC5oYXMobm9kZUIpICYmICFzdXJyb3VuZGluZy5oYXMobm9kZUIpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VYID0gTWF0aC5hYnMobm9kZUEuZ2V0Q2VudGVyWCgpLW5vZGVCLmdldENlbnRlclgoKSkgLSBcbiAgICAgICAgICAgICAgICAgICAgKChub2RlQS5nZXRXaWR0aCgpLzIpICsgKG5vZGVCLmdldFdpZHRoKCkvMikpO1xuICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VZID0gTWF0aC5hYnMobm9kZUEuZ2V0Q2VudGVyWSgpLW5vZGVCLmdldENlbnRlclkoKSkgLSBcbiAgICAgICAgICAgICAgICAgICAgKChub2RlQS5nZXRIZWlnaHQoKS8yKSArIChub2RlQi5nZXRIZWlnaHQoKS8yKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gaWYgdGhlIGRpc3RhbmNlIGJldHdlZW4gbm9kZUEgYW5kIG5vZGVCIFxuICAgICAgICAgICAgICAvLyBpcyBsZXNzIHRoZW4gY2FsY3VsYXRpb24gcmFuZ2VcbiAgICAgICAgICAgICAgaWYgKChkaXN0YW5jZVggPD0gdGhpcy5yZXB1bHNpb25SYW5nZSkgJiYgKGRpc3RhbmNlWSA8PSB0aGlzLnJlcHVsc2lvblJhbmdlKSlcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vdGhlbiBhZGQgbm9kZUIgdG8gc3Vycm91bmRpbmcgb2Ygbm9kZUFcbiAgICAgICAgICAgICAgICBzdXJyb3VuZGluZy5hZGQobm9kZUIpO1xuICAgICAgICAgICAgICB9ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgfVxuICAgICAgICB9ICAgICAgICAgIFxuICAgICAgfVxuICAgIH1cblxuICAgIG5vZGVBLnN1cnJvdW5kaW5nID0gWy4uLnN1cnJvdW5kaW5nXTtcblx0XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IG5vZGVBLnN1cnJvdW5kaW5nLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgdGhpcy5jYWxjUmVwdWxzaW9uRm9yY2Uobm9kZUEsIG5vZGVBLnN1cnJvdW5kaW5nW2ldKTtcbiAgfVx0XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1JlcHVsc2lvblJhbmdlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gMC4wO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IFRyZWUgUmVkdWN0aW9uIG1ldGhvZHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBSZWR1Y2UgdHJlZXMgXG5GRExheW91dC5wcm90b3R5cGUucmVkdWNlVHJlZXMgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgcHJ1bmVkTm9kZXNBbGwgPSBbXTtcbiAgdmFyIGNvbnRhaW5zTGVhZiA9IHRydWU7XG4gIHZhciBub2RlO1xuICBcbiAgd2hpbGUoY29udGFpbnNMZWFmKSB7XG4gICAgdmFyIGFsbE5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXMoKTtcbiAgICB2YXIgcHJ1bmVkTm9kZXNJblN0ZXBUZW1wID0gW107XG4gICAgY29udGFpbnNMZWFmID0gZmFsc2U7XG4gICAgXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbm9kZSA9IGFsbE5vZGVzW2ldO1xuICAgICAgaWYobm9kZS5nZXRFZGdlcygpLmxlbmd0aCA9PSAxICYmICFub2RlLmdldEVkZ2VzKClbMF0uaXNJbnRlckdyYXBoICYmIG5vZGUuZ2V0Q2hpbGQoKSA9PSBudWxsKXtcbiAgICAgICAgcHJ1bmVkTm9kZXNJblN0ZXBUZW1wLnB1c2goW25vZGUsIG5vZGUuZ2V0RWRnZXMoKVswXSwgbm9kZS5nZXRPd25lcigpXSk7XG4gICAgICAgIGNvbnRhaW5zTGVhZiA9IHRydWU7XG4gICAgICB9ICBcbiAgICB9XG4gICAgaWYoY29udGFpbnNMZWFmID09IHRydWUpe1xuICAgICAgdmFyIHBydW5lZE5vZGVzSW5TdGVwID0gW107XG4gICAgICBmb3IodmFyIGogPSAwOyBqIDwgcHJ1bmVkTm9kZXNJblN0ZXBUZW1wLmxlbmd0aDsgaisrKXtcbiAgICAgICAgaWYocHJ1bmVkTm9kZXNJblN0ZXBUZW1wW2pdWzBdLmdldEVkZ2VzKCkubGVuZ3RoID09IDEpe1xuICAgICAgICAgIHBydW5lZE5vZGVzSW5TdGVwLnB1c2gocHJ1bmVkTm9kZXNJblN0ZXBUZW1wW2pdKTsgIFxuICAgICAgICAgIHBydW5lZE5vZGVzSW5TdGVwVGVtcFtqXVswXS5nZXRPd25lcigpLnJlbW92ZShwcnVuZWROb2Rlc0luU3RlcFRlbXBbal1bMF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwcnVuZWROb2Rlc0FsbC5wdXNoKHBydW5lZE5vZGVzSW5TdGVwKTtcbiAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsTm9kZXMoKTtcbiAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsRWRnZXMoKTtcbiAgICB9XG4gIH1cbiAgdGhpcy5wcnVuZWROb2Rlc0FsbCA9IHBydW5lZE5vZGVzQWxsO1xufTtcblxuLy8gR3JvdyB0cmVlIG9uZSBzdGVwIFxuRkRMYXlvdXQucHJvdG90eXBlLmdyb3dUcmVlID0gZnVuY3Rpb24ocHJ1bmVkTm9kZXNBbGwpXG57XG4gIHZhciBsZW5ndGhPZlBydW5lZE5vZGVzSW5TdGVwID0gcHJ1bmVkTm9kZXNBbGwubGVuZ3RoOyBcbiAgdmFyIHBydW5lZE5vZGVzSW5TdGVwID0gcHJ1bmVkTm9kZXNBbGxbbGVuZ3RoT2ZQcnVuZWROb2Rlc0luU3RlcCAtIDFdOyAgXG5cbiAgdmFyIG5vZGVEYXRhOyAgXG4gIGZvcih2YXIgaSA9IDA7IGkgPCBwcnVuZWROb2Rlc0luU3RlcC5sZW5ndGg7IGkrKyl7XG4gICAgbm9kZURhdGEgPSBwcnVuZWROb2Rlc0luU3RlcFtpXTtcblxuICAgIHRoaXMuZmluZFBsYWNlZm9yUHJ1bmVkTm9kZShub2RlRGF0YSk7XG4gICAgXG4gICAgbm9kZURhdGFbMl0uYWRkKG5vZGVEYXRhWzBdKTtcbiAgICBub2RlRGF0YVsyXS5hZGQobm9kZURhdGFbMV0sIG5vZGVEYXRhWzFdLnNvdXJjZSwgbm9kZURhdGFbMV0udGFyZ2V0KTtcbiAgfVxuXG4gIHBydW5lZE5vZGVzQWxsLnNwbGljZShwcnVuZWROb2Rlc0FsbC5sZW5ndGgtMSwgMSk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsTm9kZXMoKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxFZGdlcygpO1xufTtcblxuLy8gRmluZCBhbiBhcHByb3ByaWF0ZSBwb3NpdGlvbiB0byByZXBsYWNlIHBydW5lZCBub2RlLCB0aGlzIG1ldGhvZCBjYW4gYmUgaW1wcm92ZWRcbkZETGF5b3V0LnByb3RvdHlwZS5maW5kUGxhY2Vmb3JQcnVuZWROb2RlID0gZnVuY3Rpb24obm9kZURhdGEpe1xuICBcbiAgdmFyIGdyaWRGb3JQcnVuZWROb2RlOyAgXG4gIHZhciBub2RlVG9Db25uZWN0O1xuICB2YXIgcHJ1bmVkTm9kZSA9IG5vZGVEYXRhWzBdO1xuICBpZihwcnVuZWROb2RlID09IG5vZGVEYXRhWzFdLnNvdXJjZSl7XG4gICAgbm9kZVRvQ29ubmVjdCA9IG5vZGVEYXRhWzFdLnRhcmdldDtcbiAgfVxuICBlbHNlIHtcbiAgICBub2RlVG9Db25uZWN0ID0gbm9kZURhdGFbMV0uc291cmNlOyAgXG4gIH1cbiAgdmFyIHN0YXJ0R3JpZFggPSBub2RlVG9Db25uZWN0LnN0YXJ0WDtcbiAgdmFyIGZpbmlzaEdyaWRYID0gbm9kZVRvQ29ubmVjdC5maW5pc2hYO1xuICB2YXIgc3RhcnRHcmlkWSA9IG5vZGVUb0Nvbm5lY3Quc3RhcnRZO1xuICB2YXIgZmluaXNoR3JpZFkgPSBub2RlVG9Db25uZWN0LmZpbmlzaFk7IFxuICBcbiAgdmFyIHVwTm9kZUNvdW50ID0gMDtcbiAgdmFyIGRvd25Ob2RlQ291bnQgPSAwO1xuICB2YXIgcmlnaHROb2RlQ291bnQgPSAwO1xuICB2YXIgbGVmdE5vZGVDb3VudCA9IDA7XG4gIHZhciBjb250cm9sUmVnaW9ucyA9IFt1cE5vZGVDb3VudCwgcmlnaHROb2RlQ291bnQsIGRvd25Ob2RlQ291bnQsIGxlZnROb2RlQ291bnRdXG4gIFxuICBpZihzdGFydEdyaWRZID4gMCl7XG4gICAgZm9yKHZhciBpID0gc3RhcnRHcmlkWDsgaSA8PSBmaW5pc2hHcmlkWDsgaSsrICl7XG4gICAgICBjb250cm9sUmVnaW9uc1swXSArPSAodGhpcy5ncmlkW2ldW3N0YXJ0R3JpZFkgLSAxXS5sZW5ndGggKyB0aGlzLmdyaWRbaV1bc3RhcnRHcmlkWV0ubGVuZ3RoIC0gMSk7ICAgXG4gICAgfVxuICB9XG4gIGlmKGZpbmlzaEdyaWRYIDwgdGhpcy5ncmlkLmxlbmd0aCAtIDEpe1xuICAgIGZvcih2YXIgaSA9IHN0YXJ0R3JpZFk7IGkgPD0gZmluaXNoR3JpZFk7IGkrKyApe1xuICAgICAgY29udHJvbFJlZ2lvbnNbMV0gKz0gKHRoaXMuZ3JpZFtmaW5pc2hHcmlkWCArIDFdW2ldLmxlbmd0aCArIHRoaXMuZ3JpZFtmaW5pc2hHcmlkWF1baV0ubGVuZ3RoIC0gMSk7ICAgXG4gICAgfVxuICB9XG4gIGlmKGZpbmlzaEdyaWRZIDwgdGhpcy5ncmlkWzBdLmxlbmd0aCAtIDEpe1xuICAgIGZvcih2YXIgaSA9IHN0YXJ0R3JpZFg7IGkgPD0gZmluaXNoR3JpZFg7IGkrKyApe1xuICAgICAgY29udHJvbFJlZ2lvbnNbMl0gKz0gKHRoaXMuZ3JpZFtpXVtmaW5pc2hHcmlkWSArIDFdLmxlbmd0aCArIHRoaXMuZ3JpZFtpXVtmaW5pc2hHcmlkWV0ubGVuZ3RoIC0gMSk7ICAgXG4gICAgfVxuICB9XG4gIGlmKHN0YXJ0R3JpZFggPiAwKXtcbiAgICBmb3IodmFyIGkgPSBzdGFydEdyaWRZOyBpIDw9IGZpbmlzaEdyaWRZOyBpKysgKXtcbiAgICAgIGNvbnRyb2xSZWdpb25zWzNdICs9ICh0aGlzLmdyaWRbc3RhcnRHcmlkWCAtIDFdW2ldLmxlbmd0aCArIHRoaXMuZ3JpZFtzdGFydEdyaWRYXVtpXS5sZW5ndGggLSAxKTsgICBcbiAgICB9XG4gIH1cbiAgdmFyIG1pbiA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgbWluQ291bnQ7XG4gIHZhciBtaW5JbmRleDtcbiAgZm9yKHZhciBqID0gMDsgaiA8IGNvbnRyb2xSZWdpb25zLmxlbmd0aDsgaisrKXtcbiAgICBpZihjb250cm9sUmVnaW9uc1tqXSA8IG1pbil7XG4gICAgICBtaW4gPSBjb250cm9sUmVnaW9uc1tqXTtcbiAgICAgIG1pbkNvdW50ID0gMTtcbiAgICAgIG1pbkluZGV4ID0gajtcbiAgICB9ICBcbiAgICBlbHNlIGlmKGNvbnRyb2xSZWdpb25zW2pdID09IG1pbil7XG4gICAgICBtaW5Db3VudCsrOyAgXG4gICAgfVxuICB9XG4gIFxuICBpZihtaW5Db3VudCA9PSAzICYmIG1pbiA9PSAwKXtcbiAgICBpZihjb250cm9sUmVnaW9uc1swXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzFdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbMl0gPT0gMCl7XG4gICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDE7ICAgIFxuICAgIH1cbiAgICBlbHNlIGlmKGNvbnRyb2xSZWdpb25zWzBdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbMV0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1szXSA9PSAwKXtcbiAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMDsgIFxuICAgIH1cbiAgICBlbHNlIGlmKGNvbnRyb2xSZWdpb25zWzBdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbMl0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1szXSA9PSAwKXtcbiAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMzsgIFxuICAgIH1cbiAgICBlbHNlIGlmKGNvbnRyb2xSZWdpb25zWzFdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbMl0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1szXSA9PSAwKXtcbiAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMjsgIFxuICAgIH1cbiAgfVxuICBlbHNlIGlmKG1pbkNvdW50ID09IDIgJiYgbWluID09IDApe1xuICAgIHZhciByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICBpZihjb250cm9sUmVnaW9uc1swXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzFdID09IDApeztcbiAgICAgIGlmKHJhbmRvbSA9PSAwKXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAwO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKGNvbnRyb2xSZWdpb25zWzBdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbMl0gPT0gMCl7XG4gICAgICBpZihyYW5kb20gPT0gMCl7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMDtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMjtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZihjb250cm9sUmVnaW9uc1swXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzNdID09IDApe1xuICAgICAgaWYocmFuZG9tID09IDApe1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDA7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDM7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYoY29udHJvbFJlZ2lvbnNbMV0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1syXSA9PSAwKXtcbiAgICAgIGlmKHJhbmRvbSA9PSAwKXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAxO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAyO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKGNvbnRyb2xSZWdpb25zWzFdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbM10gPT0gMCl7XG4gICAgICBpZihyYW5kb20gPT0gMCl7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMztcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZihyYW5kb20gPT0gMCl7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMjtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSBpZihtaW5Db3VudCA9PSA0ICYmIG1pbiA9PSAwKXtcbiAgICB2YXIgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XG4gICAgZ3JpZEZvclBydW5lZE5vZGUgPSByYW5kb207ICBcbiAgfVxuICBlbHNlIHtcbiAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IG1pbkluZGV4O1xuICB9XG4gIFxuICBpZihncmlkRm9yUHJ1bmVkTm9kZSA9PSAwKSB7XG4gICAgcHJ1bmVkTm9kZS5zZXRDZW50ZXIobm9kZVRvQ29ubmVjdC5nZXRDZW50ZXJYKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvQ29ubmVjdC5nZXRDZW50ZXJZKCkgLSBub2RlVG9Db25uZWN0LmdldEhlaWdodCgpLzIgLSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIIC0gcHJ1bmVkTm9kZS5nZXRIZWlnaHQoKS8yKTsgIFxuICB9XG4gIGVsc2UgaWYoZ3JpZEZvclBydW5lZE5vZGUgPT0gMSkge1xuICAgIHBydW5lZE5vZGUuc2V0Q2VudGVyKG5vZGVUb0Nvbm5lY3QuZ2V0Q2VudGVyWCgpICsgbm9kZVRvQ29ubmVjdC5nZXRXaWR0aCgpLzIgKyBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIICsgcHJ1bmVkTm9kZS5nZXRXaWR0aCgpLzIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvQ29ubmVjdC5nZXRDZW50ZXJZKCkpOyAgXG4gIH1cbiAgZWxzZSBpZihncmlkRm9yUHJ1bmVkTm9kZSA9PSAyKSB7XG4gICAgcHJ1bmVkTm9kZS5zZXRDZW50ZXIobm9kZVRvQ29ubmVjdC5nZXRDZW50ZXJYKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvQ29ubmVjdC5nZXRDZW50ZXJZKCkgKyBub2RlVG9Db25uZWN0LmdldEhlaWdodCgpLzIgKyBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIICsgcHJ1bmVkTm9kZS5nZXRIZWlnaHQoKS8yKTsgIFxuICB9XG4gIGVsc2UgeyBcbiAgICBwcnVuZWROb2RlLnNldENlbnRlcihub2RlVG9Db25uZWN0LmdldENlbnRlclgoKSAtIG5vZGVUb0Nvbm5lY3QuZ2V0V2lkdGgoKS8yIC0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCAtIHBydW5lZE5vZGUuZ2V0V2lkdGgoKS8yLFxuICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUb0Nvbm5lY3QuZ2V0Q2VudGVyWSgpKTsgIFxuICB9XG4gIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGRExheW91dDtcbiIsInZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0xheW91dENvbnN0YW50cycpO1xuXG5mdW5jdGlvbiBGRExheW91dENvbnN0YW50cygpIHtcbn1cblxuLy9GRExheW91dENvbnN0YW50cyBpbmhlcml0cyBzdGF0aWMgcHJvcHMgaW4gTGF5b3V0Q29uc3RhbnRzXG5mb3IgKHZhciBwcm9wIGluIExheW91dENvbnN0YW50cykge1xuICBGRExheW91dENvbnN0YW50c1twcm9wXSA9IExheW91dENvbnN0YW50c1twcm9wXTtcbn1cblxuRkRMYXlvdXRDb25zdGFudHMuTUFYX0lURVJBVElPTlMgPSAyNTAwO1xuXG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIID0gNTA7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX1NQUklOR19TVFJFTkdUSCA9IDAuNDU7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX1JFUFVMU0lPTl9TVFJFTkdUSCA9IDQ1MDAuMDtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9TVFJFTkdUSCA9IDAuNDtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9TVFJFTkdUSCA9IDEuMDtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9SQU5HRV9GQUNUT1IgPSAzLjg7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfUkFOR0VfRkFDVE9SID0gMS41O1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VU0VfU01BUlRfSURFQUxfRURHRV9MRU5HVEhfQ0FMQ1VMQVRJT04gPSB0cnVlO1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VU0VfU01BUlRfUkVQVUxTSU9OX1JBTkdFX0NBTENVTEFUSU9OID0gdHJ1ZTtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUwgPSAwLjU7XG5GRExheW91dENvbnN0YW50cy5NQVhfTk9ERV9ESVNQTEFDRU1FTlRfSU5DUkVNRU5UQUwgPSAxMDAuMDtcbkZETGF5b3V0Q29uc3RhbnRzLk1BWF9OT0RFX0RJU1BMQUNFTUVOVCA9IEZETGF5b3V0Q29uc3RhbnRzLk1BWF9OT0RFX0RJU1BMQUNFTUVOVF9JTkNSRU1FTlRBTCAqIDM7XG5GRExheW91dENvbnN0YW50cy5NSU5fUkVQVUxTSU9OX0RJU1QgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIIC8gMTAuMDtcbkZETGF5b3V0Q29uc3RhbnRzLkNPTlZFUkdFTkNFX0NIRUNLX1BFUklPRCA9IDEwMDtcbkZETGF5b3V0Q29uc3RhbnRzLlBFUl9MRVZFTF9JREVBTF9FREdFX0xFTkdUSF9GQUNUT1IgPSAwLjE7XG5GRExheW91dENvbnN0YW50cy5NSU5fRURHRV9MRU5HVEggPSAxO1xuRkRMYXlvdXRDb25zdGFudHMuR1JJRF9DQUxDVUxBVElPTl9DSEVDS19QRVJJT0QgPSAxMDtcblxubW9kdWxlLmV4cG9ydHMgPSBGRExheW91dENvbnN0YW50cztcbiIsInZhciBMRWRnZSA9IHJlcXVpcmUoJy4vTEVkZ2UnKTtcbnZhciBGRExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vRkRMYXlvdXRDb25zdGFudHMnKTtcblxuZnVuY3Rpb24gRkRMYXlvdXRFZGdlKHNvdXJjZSwgdGFyZ2V0LCB2RWRnZSkge1xuICBMRWRnZS5jYWxsKHRoaXMsIHNvdXJjZSwgdGFyZ2V0LCB2RWRnZSk7XG4gIHRoaXMuaWRlYWxMZW5ndGggPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIO1xufVxuXG5GRExheW91dEVkZ2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMRWRnZS5wcm90b3R5cGUpO1xuXG5mb3IgKHZhciBwcm9wIGluIExFZGdlKSB7XG4gIEZETGF5b3V0RWRnZVtwcm9wXSA9IExFZGdlW3Byb3BdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZETGF5b3V0RWRnZTtcbiIsInZhciBMTm9kZSA9IHJlcXVpcmUoJy4vTE5vZGUnKTtcblxuZnVuY3Rpb24gRkRMYXlvdXROb2RlKGdtLCBsb2MsIHNpemUsIHZOb2RlKSB7XG4gIC8vIGFsdGVybmF0aXZlIGNvbnN0cnVjdG9yIGlzIGhhbmRsZWQgaW5zaWRlIExOb2RlXG4gIExOb2RlLmNhbGwodGhpcywgZ20sIGxvYywgc2l6ZSwgdk5vZGUpO1xuICAvL1NwcmluZywgcmVwdWxzaW9uIGFuZCBncmF2aXRhdGlvbmFsIGZvcmNlcyBhY3Rpbmcgb24gdGhpcyBub2RlXG4gIHRoaXMuc3ByaW5nRm9yY2VYID0gMDtcbiAgdGhpcy5zcHJpbmdGb3JjZVkgPSAwO1xuICB0aGlzLnJlcHVsc2lvbkZvcmNlWCA9IDA7XG4gIHRoaXMucmVwdWxzaW9uRm9yY2VZID0gMDtcbiAgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWCA9IDA7XG4gIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVkgPSAwO1xuICAvL0Ftb3VudCBieSB3aGljaCB0aGlzIG5vZGUgaXMgdG8gYmUgbW92ZWQgaW4gdGhpcyBpdGVyYXRpb25cbiAgdGhpcy5kaXNwbGFjZW1lbnRYID0gMDtcbiAgdGhpcy5kaXNwbGFjZW1lbnRZID0gMDtcblxuICAvL1N0YXJ0IGFuZCBmaW5pc2ggZ3JpZCBjb29yZGluYXRlcyB0aGF0IHRoaXMgbm9kZSBpcyBmYWxsZW4gaW50b1xuICB0aGlzLnN0YXJ0WCA9IDA7XG4gIHRoaXMuZmluaXNoWCA9IDA7XG4gIHRoaXMuc3RhcnRZID0gMDtcbiAgdGhpcy5maW5pc2hZID0gMDtcblxuICAvL0dlb21ldHJpYyBuZWlnaGJvcnMgb2YgdGhpcyBub2RlXG4gIHRoaXMuc3Vycm91bmRpbmcgPSBbXTtcbn1cblxuRkRMYXlvdXROb2RlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTE5vZGUucHJvdG90eXBlKTtcblxuZm9yICh2YXIgcHJvcCBpbiBMTm9kZSkge1xuICBGRExheW91dE5vZGVbcHJvcF0gPSBMTm9kZVtwcm9wXTtcbn1cblxuRkRMYXlvdXROb2RlLnByb3RvdHlwZS5zZXRHcmlkQ29vcmRpbmF0ZXMgPSBmdW5jdGlvbiAoX3N0YXJ0WCwgX2ZpbmlzaFgsIF9zdGFydFksIF9maW5pc2hZKVxue1xuICB0aGlzLnN0YXJ0WCA9IF9zdGFydFg7XG4gIHRoaXMuZmluaXNoWCA9IF9maW5pc2hYO1xuICB0aGlzLnN0YXJ0WSA9IF9zdGFydFk7XG4gIHRoaXMuZmluaXNoWSA9IF9maW5pc2hZO1xuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZETGF5b3V0Tm9kZTtcbiIsInZhciBVbmlxdWVJREdlbmVyZXRvciA9IHJlcXVpcmUoJy4vVW5pcXVlSURHZW5lcmV0b3InKTtcblxuZnVuY3Rpb24gSGFzaE1hcCgpIHtcbiAgdGhpcy5tYXAgPSB7fTtcbiAgdGhpcy5rZXlzID0gW107XG59XG5cbkhhc2hNYXAucHJvdG90eXBlLnB1dCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHZhciB0aGVJZCA9IFVuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKGtleSk7XG4gIGlmICghdGhpcy5jb250YWlucyh0aGVJZCkpIHtcbiAgICB0aGlzLm1hcFt0aGVJZF0gPSB2YWx1ZTtcbiAgICB0aGlzLmtleXMucHVzaChrZXkpO1xuICB9XG59O1xuXG5IYXNoTWFwLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdmFyIHRoZUlkID0gVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQoa2V5KTtcbiAgcmV0dXJuIHRoaXMubWFwW2tleV0gIT0gbnVsbDtcbn07XG5cbkhhc2hNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdmFyIHRoZUlkID0gVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQoa2V5KTtcbiAgcmV0dXJuIHRoaXMubWFwW3RoZUlkXTtcbn07XG5cbkhhc2hNYXAucHJvdG90eXBlLmtleVNldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMua2V5cztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaE1hcDtcbiIsInZhciBVbmlxdWVJREdlbmVyZXRvciA9IHJlcXVpcmUoJy4vVW5pcXVlSURHZW5lcmV0b3InKTtcblxuZnVuY3Rpb24gSGFzaFNldCgpIHtcbiAgdGhpcy5zZXQgPSB7fTtcbn1cbjtcblxuSGFzaFNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKG9iaikge1xuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChvYmopO1xuICBpZiAoIXRoaXMuY29udGFpbnModGhlSWQpKVxuICAgIHRoaXMuc2V0W3RoZUlkXSA9IG9iajtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgZGVsZXRlIHRoaXMuc2V0W1VuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKG9iaildO1xufTtcblxuSGFzaFNldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuc2V0ID0ge307XG59O1xuXG5IYXNoU2V0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRoaXMuc2V0W1VuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKG9iaildID09IG9iajtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnNpemUoKSA9PT0gMDtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnNldCkubGVuZ3RoO1xufTtcblxuLy9jb25jYXRzIHRoaXMuc2V0IHRvIHRoZSBnaXZlbiBsaXN0XG5IYXNoU2V0LnByb3RvdHlwZS5hZGRBbGxUbyA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zZXQpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBsaXN0LnB1c2godGhpcy5zZXRba2V5c1tpXV0pO1xuICB9XG59O1xuXG5IYXNoU2V0LnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zZXQpLmxlbmd0aDtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLmFkZEFsbCA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gIHZhciBzID0gbGlzdC5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XG4gICAgdmFyIHYgPSBsaXN0W2ldO1xuICAgIHRoaXMuYWRkKHYpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2hTZXQ7XG4iLCJmdW5jdGlvbiBJR2VvbWV0cnkoKSB7XG59XG5cbklHZW9tZXRyeS5jYWxjU2VwYXJhdGlvbkFtb3VudCA9IGZ1bmN0aW9uIChyZWN0QSwgcmVjdEIsIG92ZXJsYXBBbW91bnQsIHNlcGFyYXRpb25CdWZmZXIpXG57XG4gIGlmICghcmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuICB2YXIgZGlyZWN0aW9ucyA9IG5ldyBBcnJheSgyKTtcbiAgSUdlb21ldHJ5LmRlY2lkZURpcmVjdGlvbnNGb3JPdmVybGFwcGluZ05vZGVzKHJlY3RBLCByZWN0QiwgZGlyZWN0aW9ucyk7XG4gIG92ZXJsYXBBbW91bnRbMF0gPSBNYXRoLm1pbihyZWN0QS5nZXRSaWdodCgpLCByZWN0Qi5nZXRSaWdodCgpKSAtXG4gICAgICAgICAgTWF0aC5tYXgocmVjdEEueCwgcmVjdEIueCk7XG4gIG92ZXJsYXBBbW91bnRbMV0gPSBNYXRoLm1pbihyZWN0QS5nZXRCb3R0b20oKSwgcmVjdEIuZ2V0Qm90dG9tKCkpIC1cbiAgICAgICAgICBNYXRoLm1heChyZWN0QS55LCByZWN0Qi55KTtcbiAgLy8gdXBkYXRlIHRoZSBvdmVybGFwcGluZyBhbW91bnRzIGZvciB0aGUgZm9sbG93aW5nIGNhc2VzOlxuICBpZiAoKHJlY3RBLmdldFgoKSA8PSByZWN0Qi5nZXRYKCkpICYmIChyZWN0QS5nZXRSaWdodCgpID49IHJlY3RCLmdldFJpZ2h0KCkpKVxuICB7XG4gICAgb3ZlcmxhcEFtb3VudFswXSArPSBNYXRoLm1pbigocmVjdEIuZ2V0WCgpIC0gcmVjdEEuZ2V0WCgpKSxcbiAgICAgICAgICAgIChyZWN0QS5nZXRSaWdodCgpIC0gcmVjdEIuZ2V0UmlnaHQoKSkpO1xuICB9XG4gIGVsc2UgaWYgKChyZWN0Qi5nZXRYKCkgPD0gcmVjdEEuZ2V0WCgpKSAmJiAocmVjdEIuZ2V0UmlnaHQoKSA+PSByZWN0QS5nZXRSaWdodCgpKSlcbiAge1xuICAgIG92ZXJsYXBBbW91bnRbMF0gKz0gTWF0aC5taW4oKHJlY3RBLmdldFgoKSAtIHJlY3RCLmdldFgoKSksXG4gICAgICAgICAgICAocmVjdEIuZ2V0UmlnaHQoKSAtIHJlY3RBLmdldFJpZ2h0KCkpKTtcbiAgfVxuICBpZiAoKHJlY3RBLmdldFkoKSA8PSByZWN0Qi5nZXRZKCkpICYmIChyZWN0QS5nZXRCb3R0b20oKSA+PSByZWN0Qi5nZXRCb3R0b20oKSkpXG4gIHtcbiAgICBvdmVybGFwQW1vdW50WzFdICs9IE1hdGgubWluKChyZWN0Qi5nZXRZKCkgLSByZWN0QS5nZXRZKCkpLFxuICAgICAgICAgICAgKHJlY3RBLmdldEJvdHRvbSgpIC0gcmVjdEIuZ2V0Qm90dG9tKCkpKTtcbiAgfVxuICBlbHNlIGlmICgocmVjdEIuZ2V0WSgpIDw9IHJlY3RBLmdldFkoKSkgJiYgKHJlY3RCLmdldEJvdHRvbSgpID49IHJlY3RBLmdldEJvdHRvbSgpKSlcbiAge1xuICAgIG92ZXJsYXBBbW91bnRbMV0gKz0gTWF0aC5taW4oKHJlY3RBLmdldFkoKSAtIHJlY3RCLmdldFkoKSksXG4gICAgICAgICAgICAocmVjdEIuZ2V0Qm90dG9tKCkgLSByZWN0QS5nZXRCb3R0b20oKSkpO1xuICB9XG5cbiAgLy8gZmluZCBzbG9wZSBvZiB0aGUgbGluZSBwYXNzZXMgdHdvIGNlbnRlcnNcbiAgdmFyIHNsb3BlID0gTWF0aC5hYnMoKHJlY3RCLmdldENlbnRlclkoKSAtIHJlY3RBLmdldENlbnRlclkoKSkgL1xuICAgICAgICAgIChyZWN0Qi5nZXRDZW50ZXJYKCkgLSByZWN0QS5nZXRDZW50ZXJYKCkpKTtcbiAgLy8gaWYgY2VudGVycyBhcmUgb3ZlcmxhcHBlZFxuICBpZiAoKHJlY3RCLmdldENlbnRlclkoKSA9PSByZWN0QS5nZXRDZW50ZXJZKCkpICYmXG4gICAgICAgICAgKHJlY3RCLmdldENlbnRlclgoKSA9PSByZWN0QS5nZXRDZW50ZXJYKCkpKVxuICB7XG4gICAgLy8gYXNzdW1lIHRoZSBzbG9wZSBpcyAxICg0NSBkZWdyZWUpXG4gICAgc2xvcGUgPSAxLjA7XG4gIH1cblxuICB2YXIgbW92ZUJ5WSA9IHNsb3BlICogb3ZlcmxhcEFtb3VudFswXTtcbiAgdmFyIG1vdmVCeVggPSBvdmVybGFwQW1vdW50WzFdIC8gc2xvcGU7XG4gIGlmIChvdmVybGFwQW1vdW50WzBdIDwgbW92ZUJ5WClcbiAge1xuICAgIG1vdmVCeVggPSBvdmVybGFwQW1vdW50WzBdO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIG1vdmVCeVkgPSBvdmVybGFwQW1vdW50WzFdO1xuICB9XG4gIC8vIHJldHVybiBoYWxmIHRoZSBhbW91bnQgc28gdGhhdCBpZiBlYWNoIHJlY3RhbmdsZSBpcyBtb3ZlZCBieSB0aGVzZVxuICAvLyBhbW91bnRzIGluIG9wcG9zaXRlIGRpcmVjdGlvbnMsIG92ZXJsYXAgd2lsbCBiZSByZXNvbHZlZFxuICBvdmVybGFwQW1vdW50WzBdID0gLTEgKiBkaXJlY3Rpb25zWzBdICogKChtb3ZlQnlYIC8gMikgKyBzZXBhcmF0aW9uQnVmZmVyKTtcbiAgb3ZlcmxhcEFtb3VudFsxXSA9IC0xICogZGlyZWN0aW9uc1sxXSAqICgobW92ZUJ5WSAvIDIpICsgc2VwYXJhdGlvbkJ1ZmZlcik7XG59XG5cbklHZW9tZXRyeS5kZWNpZGVEaXJlY3Rpb25zRm9yT3ZlcmxhcHBpbmdOb2RlcyA9IGZ1bmN0aW9uIChyZWN0QSwgcmVjdEIsIGRpcmVjdGlvbnMpXG57XG4gIGlmIChyZWN0QS5nZXRDZW50ZXJYKCkgPCByZWN0Qi5nZXRDZW50ZXJYKCkpXG4gIHtcbiAgICBkaXJlY3Rpb25zWzBdID0gLTE7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgZGlyZWN0aW9uc1swXSA9IDE7XG4gIH1cblxuICBpZiAocmVjdEEuZ2V0Q2VudGVyWSgpIDwgcmVjdEIuZ2V0Q2VudGVyWSgpKVxuICB7XG4gICAgZGlyZWN0aW9uc1sxXSA9IC0xO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIGRpcmVjdGlvbnNbMV0gPSAxO1xuICB9XG59XG5cbklHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24yID0gZnVuY3Rpb24gKHJlY3RBLCByZWN0QiwgcmVzdWx0KVxue1xuICAvL3Jlc3VsdFswLTFdIHdpbGwgY29udGFpbiBjbGlwUG9pbnQgb2YgcmVjdEEsIHJlc3VsdFsyLTNdIHdpbGwgY29udGFpbiBjbGlwUG9pbnQgb2YgcmVjdEJcbiAgdmFyIHAxeCA9IHJlY3RBLmdldENlbnRlclgoKTtcbiAgdmFyIHAxeSA9IHJlY3RBLmdldENlbnRlclkoKTtcbiAgdmFyIHAyeCA9IHJlY3RCLmdldENlbnRlclgoKTtcbiAgdmFyIHAyeSA9IHJlY3RCLmdldENlbnRlclkoKTtcblxuICAvL2lmIHR3byByZWN0YW5nbGVzIGludGVyc2VjdCwgdGhlbiBjbGlwcGluZyBwb2ludHMgYXJlIGNlbnRlcnNcbiAgaWYgKHJlY3RBLmludGVyc2VjdHMocmVjdEIpKVxuICB7XG4gICAgcmVzdWx0WzBdID0gcDF4O1xuICAgIHJlc3VsdFsxXSA9IHAxeTtcbiAgICByZXN1bHRbMl0gPSBwMng7XG4gICAgcmVzdWx0WzNdID0gcDJ5O1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8vdmFyaWFibGVzIGZvciByZWN0QVxuICB2YXIgdG9wTGVmdEF4ID0gcmVjdEEuZ2V0WCgpO1xuICB2YXIgdG9wTGVmdEF5ID0gcmVjdEEuZ2V0WSgpO1xuICB2YXIgdG9wUmlnaHRBeCA9IHJlY3RBLmdldFJpZ2h0KCk7XG4gIHZhciBib3R0b21MZWZ0QXggPSByZWN0QS5nZXRYKCk7XG4gIHZhciBib3R0b21MZWZ0QXkgPSByZWN0QS5nZXRCb3R0b20oKTtcbiAgdmFyIGJvdHRvbVJpZ2h0QXggPSByZWN0QS5nZXRSaWdodCgpO1xuICB2YXIgaGFsZldpZHRoQSA9IHJlY3RBLmdldFdpZHRoSGFsZigpO1xuICB2YXIgaGFsZkhlaWdodEEgPSByZWN0QS5nZXRIZWlnaHRIYWxmKCk7XG4gIC8vdmFyaWFibGVzIGZvciByZWN0QlxuICB2YXIgdG9wTGVmdEJ4ID0gcmVjdEIuZ2V0WCgpO1xuICB2YXIgdG9wTGVmdEJ5ID0gcmVjdEIuZ2V0WSgpO1xuICB2YXIgdG9wUmlnaHRCeCA9IHJlY3RCLmdldFJpZ2h0KCk7XG4gIHZhciBib3R0b21MZWZ0QnggPSByZWN0Qi5nZXRYKCk7XG4gIHZhciBib3R0b21MZWZ0QnkgPSByZWN0Qi5nZXRCb3R0b20oKTtcbiAgdmFyIGJvdHRvbVJpZ2h0QnggPSByZWN0Qi5nZXRSaWdodCgpO1xuICB2YXIgaGFsZldpZHRoQiA9IHJlY3RCLmdldFdpZHRoSGFsZigpO1xuICB2YXIgaGFsZkhlaWdodEIgPSByZWN0Qi5nZXRIZWlnaHRIYWxmKCk7XG4gIC8vZmxhZyB3aGV0aGVyIGNsaXBwaW5nIHBvaW50cyBhcmUgZm91bmRcbiAgdmFyIGNsaXBQb2ludEFGb3VuZCA9IGZhbHNlO1xuICB2YXIgY2xpcFBvaW50QkZvdW5kID0gZmFsc2U7XG5cbiAgLy8gbGluZSBpcyB2ZXJ0aWNhbFxuICBpZiAocDF4ID09IHAyeClcbiAge1xuICAgIGlmIChwMXkgPiBwMnkpXG4gICAge1xuICAgICAgcmVzdWx0WzBdID0gcDF4O1xuICAgICAgcmVzdWx0WzFdID0gdG9wTGVmdEF5O1xuICAgICAgcmVzdWx0WzJdID0gcDJ4O1xuICAgICAgcmVzdWx0WzNdID0gYm90dG9tTGVmdEJ5O1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChwMXkgPCBwMnkpXG4gICAge1xuICAgICAgcmVzdWx0WzBdID0gcDF4O1xuICAgICAgcmVzdWx0WzFdID0gYm90dG9tTGVmdEF5O1xuICAgICAgcmVzdWx0WzJdID0gcDJ4O1xuICAgICAgcmVzdWx0WzNdID0gdG9wTGVmdEJ5O1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgLy9ub3QgbGluZSwgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIC8vIGxpbmUgaXMgaG9yaXpvbnRhbFxuICBlbHNlIGlmIChwMXkgPT0gcDJ5KVxuICB7XG4gICAgaWYgKHAxeCA+IHAyeClcbiAgICB7XG4gICAgICByZXN1bHRbMF0gPSB0b3BMZWZ0QXg7XG4gICAgICByZXN1bHRbMV0gPSBwMXk7XG4gICAgICByZXN1bHRbMl0gPSB0b3BSaWdodEJ4O1xuICAgICAgcmVzdWx0WzNdID0gcDJ5O1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChwMXggPCBwMngpXG4gICAge1xuICAgICAgcmVzdWx0WzBdID0gdG9wUmlnaHRBeDtcbiAgICAgIHJlc3VsdFsxXSA9IHAxeTtcbiAgICAgIHJlc3VsdFsyXSA9IHRvcExlZnRCeDtcbiAgICAgIHJlc3VsdFszXSA9IHAyeTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIC8vbm90IHZhbGlkIGxpbmUsIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICBlbHNlXG4gIHtcbiAgICAvL3Nsb3BlcyBvZiByZWN0QSdzIGFuZCByZWN0QidzIGRpYWdvbmFsc1xuICAgIHZhciBzbG9wZUEgPSByZWN0QS5oZWlnaHQgLyByZWN0QS53aWR0aDtcbiAgICB2YXIgc2xvcGVCID0gcmVjdEIuaGVpZ2h0IC8gcmVjdEIud2lkdGg7XG5cbiAgICAvL3Nsb3BlIG9mIGxpbmUgYmV0d2VlbiBjZW50ZXIgb2YgcmVjdEEgYW5kIGNlbnRlciBvZiByZWN0QlxuICAgIHZhciBzbG9wZVByaW1lID0gKHAyeSAtIHAxeSkgLyAocDJ4IC0gcDF4KTtcbiAgICB2YXIgY2FyZGluYWxEaXJlY3Rpb25BO1xuICAgIHZhciBjYXJkaW5hbERpcmVjdGlvbkI7XG4gICAgdmFyIHRlbXBQb2ludEF4O1xuICAgIHZhciB0ZW1wUG9pbnRBeTtcbiAgICB2YXIgdGVtcFBvaW50Qng7XG4gICAgdmFyIHRlbXBQb2ludEJ5O1xuXG4gICAgLy9kZXRlcm1pbmUgd2hldGhlciBjbGlwcGluZyBwb2ludCBpcyB0aGUgY29ybmVyIG9mIG5vZGVBXG4gICAgaWYgKCgtc2xvcGVBKSA9PSBzbG9wZVByaW1lKVxuICAgIHtcbiAgICAgIGlmIChwMXggPiBwMngpXG4gICAgICB7XG4gICAgICAgIHJlc3VsdFswXSA9IGJvdHRvbUxlZnRBeDtcbiAgICAgICAgcmVzdWx0WzFdID0gYm90dG9tTGVmdEF5O1xuICAgICAgICBjbGlwUG9pbnRBRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICByZXN1bHRbMF0gPSB0b3BSaWdodEF4O1xuICAgICAgICByZXN1bHRbMV0gPSB0b3BMZWZ0QXk7XG4gICAgICAgIGNsaXBQb2ludEFGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHNsb3BlQSA9PSBzbG9wZVByaW1lKVxuICAgIHtcbiAgICAgIGlmIChwMXggPiBwMngpXG4gICAgICB7XG4gICAgICAgIHJlc3VsdFswXSA9IHRvcExlZnRBeDtcbiAgICAgICAgcmVzdWx0WzFdID0gdG9wTGVmdEF5O1xuICAgICAgICBjbGlwUG9pbnRBRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICByZXN1bHRbMF0gPSBib3R0b21SaWdodEF4O1xuICAgICAgICByZXN1bHRbMV0gPSBib3R0b21MZWZ0QXk7XG4gICAgICAgIGNsaXBQb2ludEFGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9kZXRlcm1pbmUgd2hldGhlciBjbGlwcGluZyBwb2ludCBpcyB0aGUgY29ybmVyIG9mIG5vZGVCXG4gICAgaWYgKCgtc2xvcGVCKSA9PSBzbG9wZVByaW1lKVxuICAgIHtcbiAgICAgIGlmIChwMnggPiBwMXgpXG4gICAgICB7XG4gICAgICAgIHJlc3VsdFsyXSA9IGJvdHRvbUxlZnRCeDtcbiAgICAgICAgcmVzdWx0WzNdID0gYm90dG9tTGVmdEJ5O1xuICAgICAgICBjbGlwUG9pbnRCRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICByZXN1bHRbMl0gPSB0b3BSaWdodEJ4O1xuICAgICAgICByZXN1bHRbM10gPSB0b3BMZWZ0Qnk7XG4gICAgICAgIGNsaXBQb2ludEJGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHNsb3BlQiA9PSBzbG9wZVByaW1lKVxuICAgIHtcbiAgICAgIGlmIChwMnggPiBwMXgpXG4gICAgICB7XG4gICAgICAgIHJlc3VsdFsyXSA9IHRvcExlZnRCeDtcbiAgICAgICAgcmVzdWx0WzNdID0gdG9wTGVmdEJ5O1xuICAgICAgICBjbGlwUG9pbnRCRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICByZXN1bHRbMl0gPSBib3R0b21SaWdodEJ4O1xuICAgICAgICByZXN1bHRbM10gPSBib3R0b21MZWZ0Qnk7XG4gICAgICAgIGNsaXBQb2ludEJGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9pZiBib3RoIGNsaXBwaW5nIHBvaW50cyBhcmUgY29ybmVyc1xuICAgIGlmIChjbGlwUG9pbnRBRm91bmQgJiYgY2xpcFBvaW50QkZvdW5kKVxuICAgIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvL2RldGVybWluZSBDYXJkaW5hbCBEaXJlY3Rpb24gb2YgcmVjdGFuZ2xlc1xuICAgIGlmIChwMXggPiBwMngpXG4gICAge1xuICAgICAgaWYgKHAxeSA+IHAyeSlcbiAgICAgIHtcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25BID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKHNsb3BlQSwgc2xvcGVQcmltZSwgNCk7XG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQiA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbihzbG9wZUIsIHNsb3BlUHJpbWUsIDIpO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLXNsb3BlQSwgc2xvcGVQcmltZSwgMyk7XG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQiA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbigtc2xvcGVCLCBzbG9wZVByaW1lLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIGlmIChwMXkgPiBwMnkpXG4gICAgICB7XG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQSA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbigtc2xvcGVBLCBzbG9wZVByaW1lLCAxKTtcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25CID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUIsIHNsb3BlUHJpbWUsIDMpO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVBLCBzbG9wZVByaW1lLCAyKTtcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25CID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKHNsb3BlQiwgc2xvcGVQcmltZSwgNCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vY2FsY3VsYXRlIGNsaXBwaW5nIFBvaW50IGlmIGl0IGlzIG5vdCBmb3VuZCBiZWZvcmVcbiAgICBpZiAoIWNsaXBQb2ludEFGb3VuZClcbiAgICB7XG4gICAgICBzd2l0Y2ggKGNhcmRpbmFsRGlyZWN0aW9uQSlcbiAgICAgIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRlbXBQb2ludEF5ID0gdG9wTGVmdEF5O1xuICAgICAgICAgIHRlbXBQb2ludEF4ID0gcDF4ICsgKC1oYWxmSGVpZ2h0QSkgLyBzbG9wZVByaW1lO1xuICAgICAgICAgIHJlc3VsdFswXSA9IHRlbXBQb2ludEF4O1xuICAgICAgICAgIHJlc3VsdFsxXSA9IHRlbXBQb2ludEF5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGVtcFBvaW50QXggPSBib3R0b21SaWdodEF4O1xuICAgICAgICAgIHRlbXBQb2ludEF5ID0gcDF5ICsgaGFsZldpZHRoQSAqIHNsb3BlUHJpbWU7XG4gICAgICAgICAgcmVzdWx0WzBdID0gdGVtcFBvaW50QXg7XG4gICAgICAgICAgcmVzdWx0WzFdID0gdGVtcFBvaW50QXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICB0ZW1wUG9pbnRBeSA9IGJvdHRvbUxlZnRBeTtcbiAgICAgICAgICB0ZW1wUG9pbnRBeCA9IHAxeCArIGhhbGZIZWlnaHRBIC8gc2xvcGVQcmltZTtcbiAgICAgICAgICByZXN1bHRbMF0gPSB0ZW1wUG9pbnRBeDtcbiAgICAgICAgICByZXN1bHRbMV0gPSB0ZW1wUG9pbnRBeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHRlbXBQb2ludEF4ID0gYm90dG9tTGVmdEF4O1xuICAgICAgICAgIHRlbXBQb2ludEF5ID0gcDF5ICsgKC1oYWxmV2lkdGhBKSAqIHNsb3BlUHJpbWU7XG4gICAgICAgICAgcmVzdWx0WzBdID0gdGVtcFBvaW50QXg7XG4gICAgICAgICAgcmVzdWx0WzFdID0gdGVtcFBvaW50QXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghY2xpcFBvaW50QkZvdW5kKVxuICAgIHtcbiAgICAgIHN3aXRjaCAoY2FyZGluYWxEaXJlY3Rpb25CKVxuICAgICAge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdGVtcFBvaW50QnkgPSB0b3BMZWZ0Qnk7XG4gICAgICAgICAgdGVtcFBvaW50QnggPSBwMnggKyAoLWhhbGZIZWlnaHRCKSAvIHNsb3BlUHJpbWU7XG4gICAgICAgICAgcmVzdWx0WzJdID0gdGVtcFBvaW50Qng7XG4gICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0ZW1wUG9pbnRCeCA9IGJvdHRvbVJpZ2h0Qng7XG4gICAgICAgICAgdGVtcFBvaW50QnkgPSBwMnkgKyBoYWxmV2lkdGhCICogc2xvcGVQcmltZTtcbiAgICAgICAgICByZXN1bHRbMl0gPSB0ZW1wUG9pbnRCeDtcbiAgICAgICAgICByZXN1bHRbM10gPSB0ZW1wUG9pbnRCeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRlbXBQb2ludEJ5ID0gYm90dG9tTGVmdEJ5O1xuICAgICAgICAgIHRlbXBQb2ludEJ4ID0gcDJ4ICsgaGFsZkhlaWdodEIgLyBzbG9wZVByaW1lO1xuICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xuICAgICAgICAgIHJlc3VsdFszXSA9IHRlbXBQb2ludEJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdGVtcFBvaW50QnggPSBib3R0b21MZWZ0Qng7XG4gICAgICAgICAgdGVtcFBvaW50QnkgPSBwMnkgKyAoLWhhbGZXaWR0aEIpICogc2xvcGVQcmltZTtcbiAgICAgICAgICByZXN1bHRbMl0gPSB0ZW1wUG9pbnRCeDtcbiAgICAgICAgICByZXN1bHRbM10gPSB0ZW1wUG9pbnRCeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5JR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24gPSBmdW5jdGlvbiAoc2xvcGUsIHNsb3BlUHJpbWUsIGxpbmUpXG57XG4gIGlmIChzbG9wZSA+IHNsb3BlUHJpbWUpXG4gIHtcbiAgICByZXR1cm4gbGluZTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICByZXR1cm4gMSArIGxpbmUgJSA0O1xuICB9XG59XG5cbklHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24gPSBmdW5jdGlvbiAoczEsIHMyLCBmMSwgZjIpXG57XG4gIGlmIChmMiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIElHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24yKHMxLCBzMiwgZjEpO1xuICB9XG4gIHZhciB4MSA9IHMxLng7XG4gIHZhciB5MSA9IHMxLnk7XG4gIHZhciB4MiA9IHMyLng7XG4gIHZhciB5MiA9IHMyLnk7XG4gIHZhciB4MyA9IGYxLng7XG4gIHZhciB5MyA9IGYxLnk7XG4gIHZhciB4NCA9IGYyLng7XG4gIHZhciB5NCA9IGYyLnk7XG4gIHZhciB4LCB5OyAvLyBpbnRlcnNlY3Rpb24gcG9pbnRcbiAgdmFyIGExLCBhMiwgYjEsIGIyLCBjMSwgYzI7IC8vIGNvZWZmaWNpZW50cyBvZiBsaW5lIGVxbnMuXG4gIHZhciBkZW5vbTtcblxuICBhMSA9IHkyIC0geTE7XG4gIGIxID0geDEgLSB4MjtcbiAgYzEgPSB4MiAqIHkxIC0geDEgKiB5MjsgIC8vIHsgYTEqeCArIGIxKnkgKyBjMSA9IDAgaXMgbGluZSAxIH1cblxuICBhMiA9IHk0IC0geTM7XG4gIGIyID0geDMgLSB4NDtcbiAgYzIgPSB4NCAqIHkzIC0geDMgKiB5NDsgIC8vIHsgYTIqeCArIGIyKnkgKyBjMiA9IDAgaXMgbGluZSAyIH1cblxuICBkZW5vbSA9IGExICogYjIgLSBhMiAqIGIxO1xuXG4gIGlmIChkZW5vbSA9PSAwKVxuICB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB4ID0gKGIxICogYzIgLSBiMiAqIGMxKSAvIGRlbm9tO1xuICB5ID0gKGEyICogYzEgLSBhMSAqIGMyKSAvIGRlbm9tO1xuXG4gIHJldHVybiBuZXcgUG9pbnQoeCwgeSk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBDbGFzcyBDb25zdGFudHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vKipcbiAqIFNvbWUgdXNlZnVsIHByZS1jYWxjdWxhdGVkIGNvbnN0YW50c1xuICovXG5JR2VvbWV0cnkuSEFMRl9QSSA9IDAuNSAqIE1hdGguUEk7XG5JR2VvbWV0cnkuT05FX0FORF9IQUxGX1BJID0gMS41ICogTWF0aC5QSTtcbklHZW9tZXRyeS5UV09fUEkgPSAyLjAgKiBNYXRoLlBJO1xuSUdlb21ldHJ5LlRIUkVFX1BJID0gMy4wICogTWF0aC5QSTtcblxubW9kdWxlLmV4cG9ydHMgPSBJR2VvbWV0cnk7XG4iLCJmdW5jdGlvbiBJTWF0aCgpIHtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBzaWduIG9mIHRoZSBpbnB1dCB2YWx1ZS5cbiAqL1xuSU1hdGguc2lnbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodmFsdWUgPiAwKVxuICB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgZWxzZSBpZiAodmFsdWUgPCAwKVxuICB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbklNYXRoLmZsb29yID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA8IDAgPyBNYXRoLmNlaWwodmFsdWUpIDogTWF0aC5mbG9vcih2YWx1ZSk7XG59XG5cbklNYXRoLmNlaWwgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIDwgMCA/IE1hdGguZmxvb3IodmFsdWUpIDogTWF0aC5jZWlsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJTWF0aDtcbiIsImZ1bmN0aW9uIEludGVnZXIoKSB7XG59XG5cbkludGVnZXIuTUFYX1ZBTFVFID0gMjE0NzQ4MzY0NztcbkludGVnZXIuTUlOX1ZBTFVFID0gLTIxNDc0ODM2NDg7XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZWdlcjtcbiIsInZhciBMR3JhcGhPYmplY3QgPSByZXF1aXJlKCcuL0xHcmFwaE9iamVjdCcpO1xudmFyIElHZW9tZXRyeSA9IHJlcXVpcmUoJy4vSUdlb21ldHJ5Jyk7XG52YXIgSU1hdGggPSByZXF1aXJlKCcuL0lNYXRoJyk7XG5cbmZ1bmN0aW9uIExFZGdlKHNvdXJjZSwgdGFyZ2V0LCB2RWRnZSkge1xuICBMR3JhcGhPYmplY3QuY2FsbCh0aGlzLCB2RWRnZSk7XG5cbiAgdGhpcy5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQgPSBmYWxzZTtcbiAgdGhpcy52R3JhcGhPYmplY3QgPSB2RWRnZTtcbiAgdGhpcy5iZW5kcG9pbnRzID0gW107XG4gIHRoaXMuc291cmNlID0gc291cmNlO1xuICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbn1cblxuTEVkZ2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMR3JhcGhPYmplY3QucHJvdG90eXBlKTtcblxuZm9yICh2YXIgcHJvcCBpbiBMR3JhcGhPYmplY3QpIHtcbiAgTEVkZ2VbcHJvcF0gPSBMR3JhcGhPYmplY3RbcHJvcF07XG59XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRTb3VyY2UgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5zb3VyY2U7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMudGFyZ2V0O1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmlzSW50ZXJHcmFwaCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmlzSW50ZXJHcmFwaDtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sZW5ndGg7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0O1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldEJlbmRwb2ludHMgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5iZW5kcG9pbnRzO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldExjYSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmxjYTtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRTb3VyY2VJbkxjYSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnNvdXJjZUluTGNhO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldFRhcmdldEluTGNhID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMudGFyZ2V0SW5MY2E7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0T3RoZXJFbmQgPSBmdW5jdGlvbiAobm9kZSlcbntcbiAgaWYgKHRoaXMuc291cmNlID09PSBub2RlKVxuICB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0O1xuICB9XG4gIGVsc2UgaWYgKHRoaXMudGFyZ2V0ID09PSBub2RlKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIHRocm93IFwiTm9kZSBpcyBub3QgaW5jaWRlbnQgd2l0aCB0aGlzIGVkZ2VcIjtcbiAgfVxufVxuXG5MRWRnZS5wcm90b3R5cGUuZ2V0T3RoZXJFbmRJbkdyYXBoID0gZnVuY3Rpb24gKG5vZGUsIGdyYXBoKVxue1xuICB2YXIgb3RoZXJFbmQgPSB0aGlzLmdldE90aGVyRW5kKG5vZGUpO1xuICB2YXIgcm9vdCA9IGdyYXBoLmdldEdyYXBoTWFuYWdlcigpLmdldFJvb3QoKTtcblxuICB3aGlsZSAodHJ1ZSlcbiAge1xuICAgIGlmIChvdGhlckVuZC5nZXRPd25lcigpID09IGdyYXBoKVxuICAgIHtcbiAgICAgIHJldHVybiBvdGhlckVuZDtcbiAgICB9XG5cbiAgICBpZiAob3RoZXJFbmQuZ2V0T3duZXIoKSA9PSByb290KVxuICAgIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIG90aGVyRW5kID0gb3RoZXJFbmQuZ2V0T3duZXIoKS5nZXRQYXJlbnQoKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLnVwZGF0ZUxlbmd0aCA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBjbGlwUG9pbnRDb29yZGluYXRlcyA9IG5ldyBBcnJheSg0KTtcblxuICB0aGlzLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCA9XG4gICAgICAgICAgSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbih0aGlzLnRhcmdldC5nZXRSZWN0KCksXG4gICAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRSZWN0KCksXG4gICAgICAgICAgICAgICAgICBjbGlwUG9pbnRDb29yZGluYXRlcyk7XG5cbiAgaWYgKCF0aGlzLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldClcbiAge1xuICAgIHRoaXMubGVuZ3RoWCA9IGNsaXBQb2ludENvb3JkaW5hdGVzWzBdIC0gY2xpcFBvaW50Q29vcmRpbmF0ZXNbMl07XG4gICAgdGhpcy5sZW5ndGhZID0gY2xpcFBvaW50Q29vcmRpbmF0ZXNbMV0gLSBjbGlwUG9pbnRDb29yZGluYXRlc1szXTtcblxuICAgIGlmIChNYXRoLmFicyh0aGlzLmxlbmd0aFgpIDwgMS4wKVxuICAgIHtcbiAgICAgIHRoaXMubGVuZ3RoWCA9IElNYXRoLnNpZ24odGhpcy5sZW5ndGhYKTtcbiAgICB9XG5cbiAgICBpZiAoTWF0aC5hYnModGhpcy5sZW5ndGhZKSA8IDEuMClcbiAgICB7XG4gICAgICB0aGlzLmxlbmd0aFkgPSBJTWF0aC5zaWduKHRoaXMubGVuZ3RoWSk7XG4gICAgfVxuXG4gICAgdGhpcy5sZW5ndGggPSBNYXRoLnNxcnQoXG4gICAgICAgICAgICB0aGlzLmxlbmd0aFggKiB0aGlzLmxlbmd0aFggKyB0aGlzLmxlbmd0aFkgKiB0aGlzLmxlbmd0aFkpO1xuICB9XG59O1xuXG5MRWRnZS5wcm90b3R5cGUudXBkYXRlTGVuZ3RoU2ltcGxlID0gZnVuY3Rpb24gKClcbntcbiAgdGhpcy5sZW5ndGhYID0gdGhpcy50YXJnZXQuZ2V0Q2VudGVyWCgpIC0gdGhpcy5zb3VyY2UuZ2V0Q2VudGVyWCgpO1xuICB0aGlzLmxlbmd0aFkgPSB0aGlzLnRhcmdldC5nZXRDZW50ZXJZKCkgLSB0aGlzLnNvdXJjZS5nZXRDZW50ZXJZKCk7XG5cbiAgaWYgKE1hdGguYWJzKHRoaXMubGVuZ3RoWCkgPCAxLjApXG4gIHtcbiAgICB0aGlzLmxlbmd0aFggPSBJTWF0aC5zaWduKHRoaXMubGVuZ3RoWCk7XG4gIH1cblxuICBpZiAoTWF0aC5hYnModGhpcy5sZW5ndGhZKSA8IDEuMClcbiAge1xuICAgIHRoaXMubGVuZ3RoWSA9IElNYXRoLnNpZ24odGhpcy5sZW5ndGhZKTtcbiAgfVxuXG4gIHRoaXMubGVuZ3RoID0gTWF0aC5zcXJ0KFxuICAgICAgICAgIHRoaXMubGVuZ3RoWCAqIHRoaXMubGVuZ3RoWCArIHRoaXMubGVuZ3RoWSAqIHRoaXMubGVuZ3RoWSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTEVkZ2U7XG4iLCJ2YXIgTEdyYXBoT2JqZWN0ID0gcmVxdWlyZSgnLi9MR3JhcGhPYmplY3QnKTtcbnZhciBJbnRlZ2VyID0gcmVxdWlyZSgnLi9JbnRlZ2VyJyk7XG52YXIgTGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9MYXlvdXRDb25zdGFudHMnKTtcbnZhciBMR3JhcGhNYW5hZ2VyID0gcmVxdWlyZSgnLi9MR3JhcGhNYW5hZ2VyJyk7XG52YXIgTE5vZGUgPSByZXF1aXJlKCcuL0xOb2RlJyk7XG52YXIgTEVkZ2UgPSByZXF1aXJlKCcuL0xFZGdlJyk7XG52YXIgSGFzaFNldCA9IHJlcXVpcmUoJy4vSGFzaFNldCcpO1xudmFyIFJlY3RhbmdsZUQgPSByZXF1aXJlKCcuL1JlY3RhbmdsZUQnKTtcbnZhciBQb2ludCA9IHJlcXVpcmUoJy4vUG9pbnQnKTtcbnZhciBMaW5rZWRMaXN0ID0gcmVxdWlyZSgnLi9MaW5rZWRMaXN0Jyk7XG5cbmZ1bmN0aW9uIExHcmFwaChwYXJlbnQsIG9iajIsIHZHcmFwaCkge1xuICBMR3JhcGhPYmplY3QuY2FsbCh0aGlzLCB2R3JhcGgpO1xuICB0aGlzLmVzdGltYXRlZFNpemUgPSBJbnRlZ2VyLk1JTl9WQUxVRTtcbiAgdGhpcy5tYXJnaW4gPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFQSF9NQVJHSU47XG4gIHRoaXMuZWRnZXMgPSBbXTtcbiAgdGhpcy5ub2RlcyA9IFtdO1xuICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gIGlmIChvYmoyICE9IG51bGwgJiYgb2JqMiBpbnN0YW5jZW9mIExHcmFwaE1hbmFnZXIpIHtcbiAgICB0aGlzLmdyYXBoTWFuYWdlciA9IG9iajI7XG4gIH1cbiAgZWxzZSBpZiAob2JqMiAhPSBudWxsICYmIG9iajIgaW5zdGFuY2VvZiBMYXlvdXQpIHtcbiAgICB0aGlzLmdyYXBoTWFuYWdlciA9IG9iajIuZ3JhcGhNYW5hZ2VyO1xuICB9XG59XG5cbkxHcmFwaC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaE9iamVjdC5wcm90b3R5cGUpO1xuZm9yICh2YXIgcHJvcCBpbiBMR3JhcGhPYmplY3QpIHtcbiAgTEdyYXBoW3Byb3BdID0gTEdyYXBoT2JqZWN0W3Byb3BdO1xufVxuXG5MR3JhcGgucHJvdG90eXBlLmdldE5vZGVzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ub2Rlcztcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0RWRnZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmVkZ2VzO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXI7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldFBhcmVudCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnBhcmVudDtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmxlZnQ7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldFJpZ2h0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmlnaHQ7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldFRvcCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnRvcDtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0Qm90dG9tID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuYm90dG9tO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5pc0Nvbm5lY3RlZCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmlzQ29ubmVjdGVkO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAob2JqMSwgc291cmNlTm9kZSwgdGFyZ2V0Tm9kZSkge1xuICBpZiAoc291cmNlTm9kZSA9PSBudWxsICYmIHRhcmdldE5vZGUgPT0gbnVsbCkge1xuICAgIHZhciBuZXdOb2RlID0gb2JqMTtcbiAgICBpZiAodGhpcy5ncmFwaE1hbmFnZXIgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJHcmFwaCBoYXMgbm8gZ3JhcGggbWdyIVwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5nZXROb2RlcygpLmluZGV4T2YobmV3Tm9kZSkgPiAtMSkge1xuICAgICAgdGhyb3cgXCJOb2RlIGFscmVhZHkgaW4gZ3JhcGghXCI7XG4gICAgfVxuICAgIG5ld05vZGUub3duZXIgPSB0aGlzO1xuICAgIHRoaXMuZ2V0Tm9kZXMoKS5wdXNoKG5ld05vZGUpO1xuXG4gICAgcmV0dXJuIG5ld05vZGU7XG4gIH1cbiAgZWxzZSB7XG4gICAgdmFyIG5ld0VkZ2UgPSBvYmoxO1xuICAgIGlmICghKHRoaXMuZ2V0Tm9kZXMoKS5pbmRleE9mKHNvdXJjZU5vZGUpID4gLTEgJiYgKHRoaXMuZ2V0Tm9kZXMoKS5pbmRleE9mKHRhcmdldE5vZGUpKSA+IC0xKSkge1xuICAgICAgdGhyb3cgXCJTb3VyY2Ugb3IgdGFyZ2V0IG5vdCBpbiBncmFwaCFcIjtcbiAgICB9XG5cbiAgICBpZiAoIShzb3VyY2VOb2RlLm93bmVyID09IHRhcmdldE5vZGUub3duZXIgJiYgc291cmNlTm9kZS5vd25lciA9PSB0aGlzKSkge1xuICAgICAgdGhyb3cgXCJCb3RoIG93bmVycyBtdXN0IGJlIHRoaXMgZ3JhcGghXCI7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZU5vZGUub3duZXIgIT0gdGFyZ2V0Tm9kZS5vd25lcilcbiAgICB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBzZXQgc291cmNlIGFuZCB0YXJnZXRcbiAgICBuZXdFZGdlLnNvdXJjZSA9IHNvdXJjZU5vZGU7XG4gICAgbmV3RWRnZS50YXJnZXQgPSB0YXJnZXROb2RlO1xuXG4gICAgLy8gc2V0IGFzIGludHJhLWdyYXBoIGVkZ2VcbiAgICBuZXdFZGdlLmlzSW50ZXJHcmFwaCA9IGZhbHNlO1xuXG4gICAgLy8gYWRkIHRvIGdyYXBoIGVkZ2UgbGlzdFxuICAgIHRoaXMuZ2V0RWRnZXMoKS5wdXNoKG5ld0VkZ2UpO1xuXG4gICAgLy8gYWRkIHRvIGluY2lkZW5jeSBsaXN0c1xuICAgIHNvdXJjZU5vZGUuZWRnZXMucHVzaChuZXdFZGdlKTtcblxuICAgIGlmICh0YXJnZXROb2RlICE9IHNvdXJjZU5vZGUpXG4gICAge1xuICAgICAgdGFyZ2V0Tm9kZS5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdFZGdlO1xuICB9XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIG5vZGUgPSBvYmo7XG4gIGlmIChvYmogaW5zdGFuY2VvZiBMTm9kZSkge1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiTm9kZSBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAoIShub2RlLm93bmVyICE9IG51bGwgJiYgbm9kZS5vd25lciA9PSB0aGlzKSkge1xuICAgICAgdGhyb3cgXCJPd25lciBncmFwaCBpcyBpbnZhbGlkIVwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5ncmFwaE1hbmFnZXIgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJPd25lciBncmFwaCBtYW5hZ2VyIGlzIGludmFsaWQhXCI7XG4gICAgfVxuICAgIC8vIHJlbW92ZSBpbmNpZGVudCBlZGdlcyBmaXJzdCAobWFrZSBhIGNvcHkgdG8gZG8gaXQgc2FmZWx5KVxuICAgIHZhciBlZGdlc1RvQmVSZW1vdmVkID0gbm9kZS5lZGdlcy5zbGljZSgpO1xuICAgIHZhciBlZGdlO1xuICAgIHZhciBzID0gZWRnZXNUb0JlUmVtb3ZlZC5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gICAge1xuICAgICAgZWRnZSA9IGVkZ2VzVG9CZVJlbW92ZWRbaV07XG5cbiAgICAgIGlmIChlZGdlLmlzSW50ZXJHcmFwaClcbiAgICAgIHtcbiAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIucmVtb3ZlKGVkZ2UpO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICBlZGdlLnNvdXJjZS5vd25lci5yZW1vdmUoZWRnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbm93IHRoZSBub2RlIGl0c2VsZlxuICAgIHZhciBpbmRleCA9IHRoaXMubm9kZXMuaW5kZXhPZihub2RlKTtcbiAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgIHRocm93IFwiTm9kZSBub3QgaW4gb3duZXIgbm9kZSBsaXN0IVwiO1xuICAgIH1cblxuICAgIHRoaXMubm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMRWRnZSkge1xuICAgIHZhciBlZGdlID0gb2JqO1xuICAgIGlmIChlZGdlID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiRWRnZSBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAoIShlZGdlLnNvdXJjZSAhPSBudWxsICYmIGVkZ2UudGFyZ2V0ICE9IG51bGwpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmICghKGVkZ2Uuc291cmNlLm93bmVyICE9IG51bGwgJiYgZWRnZS50YXJnZXQub3duZXIgIT0gbnVsbCAmJlxuICAgICAgICAgICAgZWRnZS5zb3VyY2Uub3duZXIgPT0gdGhpcyAmJiBlZGdlLnRhcmdldC5vd25lciA9PSB0aGlzKSkge1xuICAgICAgdGhyb3cgXCJTb3VyY2UgYW5kL29yIHRhcmdldCBvd25lciBpcyBpbnZhbGlkIVwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmRleCA9IGVkZ2Uuc291cmNlLmVkZ2VzLmluZGV4T2YoZWRnZSk7XG4gICAgdmFyIHRhcmdldEluZGV4ID0gZWRnZS50YXJnZXQuZWRnZXMuaW5kZXhPZihlZGdlKTtcbiAgICBpZiAoIShzb3VyY2VJbmRleCA+IC0xICYmIHRhcmdldEluZGV4ID4gLTEpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGRvZXNuJ3Qga25vdyB0aGlzIGVkZ2UhXCI7XG4gICAgfVxuXG4gICAgZWRnZS5zb3VyY2UuZWRnZXMuc3BsaWNlKHNvdXJjZUluZGV4LCAxKTtcblxuICAgIGlmIChlZGdlLnRhcmdldCAhPSBlZGdlLnNvdXJjZSlcbiAgICB7XG4gICAgICBlZGdlLnRhcmdldC5lZGdlcy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGVkZ2Uuc291cmNlLm93bmVyLmdldEVkZ2VzKCkuaW5kZXhPZihlZGdlKTtcbiAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgIHRocm93IFwiTm90IGluIG93bmVyJ3MgZWRnZSBsaXN0IVwiO1xuICAgIH1cblxuICAgIGVkZ2Uuc291cmNlLm93bmVyLmdldEVkZ2VzKCkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufTtcblxuTEdyYXBoLnByb3RvdHlwZS51cGRhdGVMZWZ0VG9wID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIHRvcCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgbGVmdCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgbm9kZVRvcDtcbiAgdmFyIG5vZGVMZWZ0O1xuICB2YXIgbWFyZ2luO1xuXG4gIHZhciBub2RlcyA9IHRoaXMuZ2V0Tm9kZXMoKTtcbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gIHtcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcbiAgICBub2RlVG9wID0gbE5vZGUuZ2V0VG9wKCk7XG4gICAgbm9kZUxlZnQgPSBsTm9kZS5nZXRMZWZ0KCk7XG5cbiAgICBpZiAodG9wID4gbm9kZVRvcClcbiAgICB7XG4gICAgICB0b3AgPSBub2RlVG9wO1xuICAgIH1cblxuICAgIGlmIChsZWZ0ID4gbm9kZUxlZnQpXG4gICAge1xuICAgICAgbGVmdCA9IG5vZGVMZWZ0O1xuICAgIH1cbiAgfVxuXG4gIC8vIERvIHdlIGhhdmUgYW55IG5vZGVzIGluIHRoaXMgZ3JhcGg/XG4gIGlmICh0b3AgPT0gSW50ZWdlci5NQVhfVkFMVUUpXG4gIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmKG5vZGVzWzBdLmdldFBhcmVudCgpLnBhZGRpbmdMZWZ0ICE9IHVuZGVmaW5lZCl7XG4gICAgbWFyZ2luID0gbm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQ7XG4gIH1cbiAgZWxzZXtcbiAgICBtYXJnaW4gPSB0aGlzLm1hcmdpbjtcbiAgfVxuXG4gIHRoaXMubGVmdCA9IGxlZnQgLSBtYXJnaW47XG4gIHRoaXMudG9wID0gdG9wIC0gbWFyZ2luO1xuXG4gIC8vIEFwcGx5IHRoZSBtYXJnaW5zIGFuZCByZXR1cm4gdGhlIHJlc3VsdFxuICByZXR1cm4gbmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy50b3ApO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS51cGRhdGVCb3VuZHMgPSBmdW5jdGlvbiAocmVjdXJzaXZlKVxue1xuICAvLyBjYWxjdWxhdGUgYm91bmRzXG4gIHZhciBsZWZ0ID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciByaWdodCA9IC1JbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIHRvcCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgYm90dG9tID0gLUludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgbm9kZUxlZnQ7XG4gIHZhciBub2RlUmlnaHQ7XG4gIHZhciBub2RlVG9wO1xuICB2YXIgbm9kZUJvdHRvbTtcbiAgdmFyIG1hcmdpbjtcblxuICB2YXIgbm9kZXMgPSB0aGlzLm5vZGVzO1xuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gIHtcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcblxuICAgIGlmIChyZWN1cnNpdmUgJiYgbE5vZGUuY2hpbGQgIT0gbnVsbClcbiAgICB7XG4gICAgICBsTm9kZS51cGRhdGVCb3VuZHMoKTtcbiAgICB9XG4gICAgbm9kZUxlZnQgPSBsTm9kZS5nZXRMZWZ0KCk7XG4gICAgbm9kZVJpZ2h0ID0gbE5vZGUuZ2V0UmlnaHQoKTtcbiAgICBub2RlVG9wID0gbE5vZGUuZ2V0VG9wKCk7XG4gICAgbm9kZUJvdHRvbSA9IGxOb2RlLmdldEJvdHRvbSgpO1xuXG4gICAgaWYgKGxlZnQgPiBub2RlTGVmdClcbiAgICB7XG4gICAgICBsZWZ0ID0gbm9kZUxlZnQ7XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0IDwgbm9kZVJpZ2h0KVxuICAgIHtcbiAgICAgIHJpZ2h0ID0gbm9kZVJpZ2h0O1xuICAgIH1cblxuICAgIGlmICh0b3AgPiBub2RlVG9wKVxuICAgIHtcbiAgICAgIHRvcCA9IG5vZGVUb3A7XG4gICAgfVxuXG4gICAgaWYgKGJvdHRvbSA8IG5vZGVCb3R0b20pXG4gICAge1xuICAgICAgYm90dG9tID0gbm9kZUJvdHRvbTtcbiAgICB9XG4gIH1cblxuICB2YXIgYm91bmRpbmdSZWN0ID0gbmV3IFJlY3RhbmdsZUQobGVmdCwgdG9wLCByaWdodCAtIGxlZnQsIGJvdHRvbSAtIHRvcCk7XG4gIGlmIChsZWZ0ID09IEludGVnZXIuTUFYX1ZBTFVFKVxuICB7XG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5wYXJlbnQuZ2V0TGVmdCgpO1xuICAgIHRoaXMucmlnaHQgPSB0aGlzLnBhcmVudC5nZXRSaWdodCgpO1xuICAgIHRoaXMudG9wID0gdGhpcy5wYXJlbnQuZ2V0VG9wKCk7XG4gICAgdGhpcy5ib3R0b20gPSB0aGlzLnBhcmVudC5nZXRCb3R0b20oKTtcbiAgfVxuXG4gIGlmKG5vZGVzWzBdLmdldFBhcmVudCgpLnBhZGRpbmdMZWZ0ICE9IHVuZGVmaW5lZCl7XG4gICAgbWFyZ2luID0gbm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQ7XG4gIH1cbiAgZWxzZXtcbiAgICBtYXJnaW4gPSB0aGlzLm1hcmdpbjtcbiAgfVxuXG4gIHRoaXMubGVmdCA9IGJvdW5kaW5nUmVjdC54IC0gbWFyZ2luO1xuICB0aGlzLnJpZ2h0ID0gYm91bmRpbmdSZWN0LnggKyBib3VuZGluZ1JlY3Qud2lkdGggKyBtYXJnaW47XG4gIHRoaXMudG9wID0gYm91bmRpbmdSZWN0LnkgLSBtYXJnaW47XG4gIHRoaXMuYm90dG9tID0gYm91bmRpbmdSZWN0LnkgKyBib3VuZGluZ1JlY3QuaGVpZ2h0ICsgbWFyZ2luO1xufTtcblxuTEdyYXBoLmNhbGN1bGF0ZUJvdW5kcyA9IGZ1bmN0aW9uIChub2RlcylcbntcbiAgdmFyIGxlZnQgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIHJpZ2h0ID0gLUludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgdG9wID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBib3R0b20gPSAtSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBub2RlTGVmdDtcbiAgdmFyIG5vZGVSaWdodDtcbiAgdmFyIG5vZGVUb3A7XG4gIHZhciBub2RlQm90dG9tO1xuXG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICB7XG4gICAgdmFyIGxOb2RlID0gbm9kZXNbaV07XG4gICAgbm9kZUxlZnQgPSBsTm9kZS5nZXRMZWZ0KCk7XG4gICAgbm9kZVJpZ2h0ID0gbE5vZGUuZ2V0UmlnaHQoKTtcbiAgICBub2RlVG9wID0gbE5vZGUuZ2V0VG9wKCk7XG4gICAgbm9kZUJvdHRvbSA9IGxOb2RlLmdldEJvdHRvbSgpO1xuXG4gICAgaWYgKGxlZnQgPiBub2RlTGVmdClcbiAgICB7XG4gICAgICBsZWZ0ID0gbm9kZUxlZnQ7XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0IDwgbm9kZVJpZ2h0KVxuICAgIHtcbiAgICAgIHJpZ2h0ID0gbm9kZVJpZ2h0O1xuICAgIH1cblxuICAgIGlmICh0b3AgPiBub2RlVG9wKVxuICAgIHtcbiAgICAgIHRvcCA9IG5vZGVUb3A7XG4gICAgfVxuXG4gICAgaWYgKGJvdHRvbSA8IG5vZGVCb3R0b20pXG4gICAge1xuICAgICAgYm90dG9tID0gbm9kZUJvdHRvbTtcbiAgICB9XG4gIH1cblxuICB2YXIgYm91bmRpbmdSZWN0ID0gbmV3IFJlY3RhbmdsZUQobGVmdCwgdG9wLCByaWdodCAtIGxlZnQsIGJvdHRvbSAtIHRvcCk7XG5cbiAgcmV0dXJuIGJvdW5kaW5nUmVjdDtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0SW5jbHVzaW9uVHJlZURlcHRoID0gZnVuY3Rpb24gKClcbntcbiAgaWYgKHRoaXMgPT0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpKVxuICB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50LmdldEluY2x1c2lvblRyZWVEZXB0aCgpO1xuICB9XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldEVzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKVxue1xuICBpZiAodGhpcy5lc3RpbWF0ZWRTaXplID09IEludGVnZXIuTUlOX1ZBTFVFKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cbiAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuY2FsY0VzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgc2l6ZSA9IDA7XG4gIHZhciBub2RlcyA9IHRoaXMubm9kZXM7XG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICB7XG4gICAgdmFyIGxOb2RlID0gbm9kZXNbaV07XG4gICAgc2l6ZSArPSBsTm9kZS5jYWxjRXN0aW1hdGVkU2l6ZSgpO1xuICB9XG5cbiAgaWYgKHNpemUgPT0gMClcbiAge1xuICAgIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IExheW91dENvbnN0YW50cy5FTVBUWV9DT01QT1VORF9OT0RFX1NJWkU7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgdGhpcy5lc3RpbWF0ZWRTaXplID0gc2l6ZSAvIE1hdGguc3FydCh0aGlzLm5vZGVzLmxlbmd0aCk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS51cGRhdGVDb25uZWN0ZWQgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmICh0aGlzLm5vZGVzLmxlbmd0aCA9PSAwKVxuICB7XG4gICAgdGhpcy5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHRvQmVWaXNpdGVkID0gbmV3IExpbmtlZExpc3QoKTtcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgSGFzaFNldCgpO1xuICB2YXIgY3VycmVudE5vZGUgPSB0aGlzLm5vZGVzWzBdO1xuICB2YXIgbmVpZ2hib3JFZGdlcztcbiAgdmFyIGN1cnJlbnROZWlnaGJvcjtcbiAgdmFyIGNoaWxkcmVuT2ZOb2RlID0gY3VycmVudE5vZGUud2l0aENoaWxkcmVuKCk7XG4gIGNoaWxkcmVuT2ZOb2RlLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xuICAgIHRvQmVWaXNpdGVkLnB1c2gobm9kZSk7XG4gIH0pO1xuXG4gIHdoaWxlICh0b0JlVmlzaXRlZC5sZW5ndGggIT09IDApXG4gIHtcbiAgICBjdXJyZW50Tm9kZSA9IHRvQmVWaXNpdGVkLnNoaWZ0KCk7XG4gICAgdmlzaXRlZC5hZGQoY3VycmVudE5vZGUpO1xuXG4gICAgLy8gVHJhdmVyc2UgYWxsIG5laWdoYm9ycyBvZiB0aGlzIG5vZGVcbiAgICBuZWlnaGJvckVkZ2VzID0gY3VycmVudE5vZGUuZ2V0RWRnZXMoKTtcbiAgICB2YXIgcyA9IG5laWdoYm9yRWRnZXMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICAgIHtcbiAgICAgIHZhciBuZWlnaGJvckVkZ2UgPSBuZWlnaGJvckVkZ2VzW2ldO1xuICAgICAgY3VycmVudE5laWdoYm9yID1cbiAgICAgICAgICAgICAgbmVpZ2hib3JFZGdlLmdldE90aGVyRW5kSW5HcmFwaChjdXJyZW50Tm9kZSwgdGhpcyk7XG5cbiAgICAgIC8vIEFkZCB1bnZpc2l0ZWQgbmVpZ2hib3JzIHRvIHRoZSBsaXN0IHRvIHZpc2l0XG4gICAgICBpZiAoY3VycmVudE5laWdoYm9yICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgIXZpc2l0ZWQuY29udGFpbnMoY3VycmVudE5laWdoYm9yKSlcbiAgICAgIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuT2ZOZWlnaGJvciA9IGN1cnJlbnROZWlnaGJvci53aXRoQ2hpbGRyZW4oKTtcblxuICAgICAgICBjaGlsZHJlbk9mTmVpZ2hib3IuZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgdG9CZVZpc2l0ZWQucHVzaChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuXG4gIGlmICh2aXNpdGVkLnNpemUoKSA+PSB0aGlzLm5vZGVzLmxlbmd0aClcbiAge1xuICAgIHZhciBub09mVmlzaXRlZEluVGhpc0dyYXBoID0gMDtcblxuICAgIHZhciBzID0gdmlzaXRlZC5zaXplKCk7XG4gICAgIE9iamVjdC5rZXlzKHZpc2l0ZWQuc2V0KS5mb3JFYWNoKGZ1bmN0aW9uKHZpc2l0ZWRJZCkge1xuICAgICAgdmFyIHZpc2l0ZWROb2RlID0gdmlzaXRlZC5zZXRbdmlzaXRlZElkXTtcbiAgICAgIGlmICh2aXNpdGVkTm9kZS5vd25lciA9PSBzZWxmKVxuICAgICAge1xuICAgICAgICBub09mVmlzaXRlZEluVGhpc0dyYXBoKys7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobm9PZlZpc2l0ZWRJblRoaXNHcmFwaCA9PSB0aGlzLm5vZGVzLmxlbmd0aClcbiAgICB7XG4gICAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTEdyYXBoO1xuIiwidmFyIExHcmFwaDtcbnZhciBMRWRnZSA9IHJlcXVpcmUoJy4vTEVkZ2UnKTtcblxuZnVuY3Rpb24gTEdyYXBoTWFuYWdlcihsYXlvdXQpIHtcbiAgTEdyYXBoID0gcmVxdWlyZSgnLi9MR3JhcGgnKTsgLy8gSXQgbWF5IGJlIGJldHRlciB0byBpbml0aWxpemUgdGhpcyBvdXQgb2YgdGhpcyBmdW5jdGlvbiBidXQgaXQgZ2l2ZXMgYW4gZXJyb3IgKFJpZ2h0LWhhbmQgc2lkZSBvZiAnaW5zdGFuY2VvZicgaXMgbm90IGNhbGxhYmxlKSBub3cuXG4gIHRoaXMubGF5b3V0ID0gbGF5b3V0O1xuXG4gIHRoaXMuZ3JhcGhzID0gW107XG4gIHRoaXMuZWRnZXMgPSBbXTtcbn1cblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuYWRkUm9vdCA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBuZ3JhcGggPSB0aGlzLmxheW91dC5uZXdHcmFwaCgpO1xuICB2YXIgbm5vZGUgPSB0aGlzLmxheW91dC5uZXdOb2RlKG51bGwpO1xuICB2YXIgcm9vdCA9IHRoaXMuYWRkKG5ncmFwaCwgbm5vZGUpO1xuICB0aGlzLnNldFJvb3RHcmFwaChyb290KTtcbiAgcmV0dXJuIHRoaXMucm9vdEdyYXBoO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKG5ld0dyYXBoLCBwYXJlbnROb2RlLCBuZXdFZGdlLCBzb3VyY2VOb2RlLCB0YXJnZXROb2RlKVxue1xuICAvL3RoZXJlIGFyZSBqdXN0IDIgcGFyYW1ldGVycyBhcmUgcGFzc2VkIHRoZW4gaXQgYWRkcyBhbiBMR3JhcGggZWxzZSBpdCBhZGRzIGFuIExFZGdlXG4gIGlmIChuZXdFZGdlID09IG51bGwgJiYgc291cmNlTm9kZSA9PSBudWxsICYmIHRhcmdldE5vZGUgPT0gbnVsbCkge1xuICAgIGlmIChuZXdHcmFwaCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIkdyYXBoIGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmIChwYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiUGFyZW50IG5vZGUgaXMgbnVsbCFcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ3JhcGhzLmluZGV4T2YobmV3R3JhcGgpID4gLTEpIHtcbiAgICAgIHRocm93IFwiR3JhcGggYWxyZWFkeSBpbiB0aGlzIGdyYXBoIG1nciFcIjtcbiAgICB9XG5cbiAgICB0aGlzLmdyYXBocy5wdXNoKG5ld0dyYXBoKTtcblxuICAgIGlmIChuZXdHcmFwaC5wYXJlbnQgIT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJBbHJlYWR5IGhhcyBhIHBhcmVudCFcIjtcbiAgICB9XG4gICAgaWYgKHBhcmVudE5vZGUuY2hpbGQgIT0gbnVsbCkge1xuICAgICAgdGhyb3cgIFwiQWxyZWFkeSBoYXMgYSBjaGlsZCFcIjtcbiAgICB9XG5cbiAgICBuZXdHcmFwaC5wYXJlbnQgPSBwYXJlbnROb2RlO1xuICAgIHBhcmVudE5vZGUuY2hpbGQgPSBuZXdHcmFwaDtcblxuICAgIHJldHVybiBuZXdHcmFwaDtcbiAgfVxuICBlbHNlIHtcbiAgICAvL2NoYW5nZSB0aGUgb3JkZXIgb2YgdGhlIHBhcmFtZXRlcnNcbiAgICB0YXJnZXROb2RlID0gbmV3RWRnZTtcbiAgICBzb3VyY2VOb2RlID0gcGFyZW50Tm9kZTtcbiAgICBuZXdFZGdlID0gbmV3R3JhcGg7XG4gICAgdmFyIHNvdXJjZUdyYXBoID0gc291cmNlTm9kZS5nZXRPd25lcigpO1xuICAgIHZhciB0YXJnZXRHcmFwaCA9IHRhcmdldE5vZGUuZ2V0T3duZXIoKTtcblxuICAgIGlmICghKHNvdXJjZUdyYXBoICE9IG51bGwgJiYgc291cmNlR3JhcGguZ2V0R3JhcGhNYW5hZ2VyKCkgPT0gdGhpcykpIHtcbiAgICAgIHRocm93IFwiU291cmNlIG5vdCBpbiB0aGlzIGdyYXBoIG1nciFcIjtcbiAgICB9XG4gICAgaWYgKCEodGFyZ2V0R3JhcGggIT0gbnVsbCAmJiB0YXJnZXRHcmFwaC5nZXRHcmFwaE1hbmFnZXIoKSA9PSB0aGlzKSkge1xuICAgICAgdGhyb3cgXCJUYXJnZXQgbm90IGluIHRoaXMgZ3JhcGggbWdyIVwiO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2VHcmFwaCA9PSB0YXJnZXRHcmFwaClcbiAgICB7XG4gICAgICBuZXdFZGdlLmlzSW50ZXJHcmFwaCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHNvdXJjZUdyYXBoLmFkZChuZXdFZGdlLCBzb3VyY2VOb2RlLCB0YXJnZXROb2RlKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIG5ld0VkZ2UuaXNJbnRlckdyYXBoID0gdHJ1ZTtcblxuICAgICAgLy8gc2V0IHNvdXJjZSBhbmQgdGFyZ2V0XG4gICAgICBuZXdFZGdlLnNvdXJjZSA9IHNvdXJjZU5vZGU7XG4gICAgICBuZXdFZGdlLnRhcmdldCA9IHRhcmdldE5vZGU7XG5cbiAgICAgIC8vIGFkZCBlZGdlIHRvIGludGVyLWdyYXBoIGVkZ2UgbGlzdFxuICAgICAgaWYgKHRoaXMuZWRnZXMuaW5kZXhPZihuZXdFZGdlKSA+IC0xKSB7XG4gICAgICAgIHRocm93IFwiRWRnZSBhbHJlYWR5IGluIGludGVyLWdyYXBoIGVkZ2UgbGlzdCFcIjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xuXG4gICAgICAvLyBhZGQgZWRnZSB0byBzb3VyY2UgYW5kIHRhcmdldCBpbmNpZGVuY3kgbGlzdHNcbiAgICAgIGlmICghKG5ld0VkZ2Uuc291cmNlICE9IG51bGwgJiYgbmV3RWRnZS50YXJnZXQgIT0gbnVsbCkpIHtcbiAgICAgICAgdGhyb3cgXCJFZGdlIHNvdXJjZSBhbmQvb3IgdGFyZ2V0IGlzIG51bGwhXCI7XG4gICAgICB9XG5cbiAgICAgIGlmICghKG5ld0VkZ2Uuc291cmNlLmVkZ2VzLmluZGV4T2YobmV3RWRnZSkgPT0gLTEgJiYgbmV3RWRnZS50YXJnZXQuZWRnZXMuaW5kZXhPZihuZXdFZGdlKSA9PSAtMSkpIHtcbiAgICAgICAgdGhyb3cgXCJFZGdlIGFscmVhZHkgaW4gc291cmNlIGFuZC9vciB0YXJnZXQgaW5jaWRlbmN5IGxpc3QhXCI7XG4gICAgICB9XG5cbiAgICAgIG5ld0VkZ2Uuc291cmNlLmVkZ2VzLnB1c2gobmV3RWRnZSk7XG4gICAgICBuZXdFZGdlLnRhcmdldC5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xuXG4gICAgICByZXR1cm4gbmV3RWRnZTtcbiAgICB9XG4gIH1cbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChsT2JqKSB7XG4gIGlmIChsT2JqIGluc3RhbmNlb2YgTEdyYXBoKSB7XG4gICAgdmFyIGdyYXBoID0gbE9iajtcbiAgICBpZiAoZ3JhcGguZ2V0R3JhcGhNYW5hZ2VyKCkgIT0gdGhpcykge1xuICAgICAgdGhyb3cgXCJHcmFwaCBub3QgaW4gdGhpcyBncmFwaCBtZ3JcIjtcbiAgICB9XG4gICAgaWYgKCEoZ3JhcGggPT0gdGhpcy5yb290R3JhcGggfHwgKGdyYXBoLnBhcmVudCAhPSBudWxsICYmIGdyYXBoLnBhcmVudC5ncmFwaE1hbmFnZXIgPT0gdGhpcykpKSB7XG4gICAgICB0aHJvdyBcIkludmFsaWQgcGFyZW50IG5vZGUhXCI7XG4gICAgfVxuXG4gICAgLy8gZmlyc3QgdGhlIGVkZ2VzIChtYWtlIGEgY29weSB0byBkbyBpdCBzYWZlbHkpXG4gICAgdmFyIGVkZ2VzVG9CZVJlbW92ZWQgPSBbXTtcblxuICAgIGVkZ2VzVG9CZVJlbW92ZWQgPSBlZGdlc1RvQmVSZW1vdmVkLmNvbmNhdChncmFwaC5nZXRFZGdlcygpKTtcblxuICAgIHZhciBlZGdlO1xuICAgIHZhciBzID0gZWRnZXNUb0JlUmVtb3ZlZC5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gICAge1xuICAgICAgZWRnZSA9IGVkZ2VzVG9CZVJlbW92ZWRbaV07XG4gICAgICBncmFwaC5yZW1vdmUoZWRnZSk7XG4gICAgfVxuXG4gICAgLy8gdGhlbiB0aGUgbm9kZXMgKG1ha2UgYSBjb3B5IHRvIGRvIGl0IHNhZmVseSlcbiAgICB2YXIgbm9kZXNUb0JlUmVtb3ZlZCA9IFtdO1xuXG4gICAgbm9kZXNUb0JlUmVtb3ZlZCA9IG5vZGVzVG9CZVJlbW92ZWQuY29uY2F0KGdyYXBoLmdldE5vZGVzKCkpO1xuXG4gICAgdmFyIG5vZGU7XG4gICAgcyA9IG5vZGVzVG9CZVJlbW92ZWQubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICAgIHtcbiAgICAgIG5vZGUgPSBub2Rlc1RvQmVSZW1vdmVkW2ldO1xuICAgICAgZ3JhcGgucmVtb3ZlKG5vZGUpO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIGdyYXBoIGlzIHRoZSByb290XG4gICAgaWYgKGdyYXBoID09IHRoaXMucm9vdEdyYXBoKVxuICAgIHtcbiAgICAgIHRoaXMuc2V0Um9vdEdyYXBoKG51bGwpO1xuICAgIH1cblxuICAgIC8vIG5vdyByZW1vdmUgdGhlIGdyYXBoIGl0c2VsZlxuICAgIHZhciBpbmRleCA9IHRoaXMuZ3JhcGhzLmluZGV4T2YoZ3JhcGgpO1xuICAgIHRoaXMuZ3JhcGhzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAvLyBhbHNvIHJlc2V0IHRoZSBwYXJlbnQgb2YgdGhlIGdyYXBoXG4gICAgZ3JhcGgucGFyZW50ID0gbnVsbDtcbiAgfVxuICBlbHNlIGlmIChsT2JqIGluc3RhbmNlb2YgTEVkZ2UpIHtcbiAgICBlZGdlID0gbE9iajtcbiAgICBpZiAoZWRnZSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIkVkZ2UgaXMgbnVsbCFcIjtcbiAgICB9XG4gICAgaWYgKCFlZGdlLmlzSW50ZXJHcmFwaCkge1xuICAgICAgdGhyb3cgXCJOb3QgYW4gaW50ZXItZ3JhcGggZWRnZSFcIjtcbiAgICB9XG4gICAgaWYgKCEoZWRnZS5zb3VyY2UgIT0gbnVsbCAmJiBlZGdlLnRhcmdldCAhPSBudWxsKSkge1xuICAgICAgdGhyb3cgXCJTb3VyY2UgYW5kL29yIHRhcmdldCBpcyBudWxsIVwiO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZSBlZGdlIGZyb20gc291cmNlIGFuZCB0YXJnZXQgbm9kZXMnIGluY2lkZW5jeSBsaXN0c1xuXG4gICAgaWYgKCEoZWRnZS5zb3VyY2UuZWRnZXMuaW5kZXhPZihlZGdlKSAhPSAtMSAmJiBlZGdlLnRhcmdldC5lZGdlcy5pbmRleE9mKGVkZ2UpICE9IC0xKSkge1xuICAgICAgdGhyb3cgXCJTb3VyY2UgYW5kL29yIHRhcmdldCBkb2Vzbid0IGtub3cgdGhpcyBlZGdlIVwiO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGVkZ2Uuc291cmNlLmVkZ2VzLmluZGV4T2YoZWRnZSk7XG4gICAgZWRnZS5zb3VyY2UuZWRnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBpbmRleCA9IGVkZ2UudGFyZ2V0LmVkZ2VzLmluZGV4T2YoZWRnZSk7XG4gICAgZWRnZS50YXJnZXQuZWRnZXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIC8vIHJlbW92ZSBlZGdlIGZyb20gb3duZXIgZ3JhcGggbWFuYWdlcidzIGludGVyLWdyYXBoIGVkZ2UgbGlzdFxuXG4gICAgaWYgKCEoZWRnZS5zb3VyY2Uub3duZXIgIT0gbnVsbCAmJiBlZGdlLnNvdXJjZS5vd25lci5nZXRHcmFwaE1hbmFnZXIoKSAhPSBudWxsKSkge1xuICAgICAgdGhyb3cgXCJFZGdlIG93bmVyIGdyYXBoIG9yIG93bmVyIGdyYXBoIG1hbmFnZXIgaXMgbnVsbCFcIjtcbiAgICB9XG4gICAgaWYgKGVkZ2Uuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpLmVkZ2VzLmluZGV4T2YoZWRnZSkgPT0gLTEpIHtcbiAgICAgIHRocm93IFwiTm90IGluIG93bmVyIGdyYXBoIG1hbmFnZXIncyBlZGdlIGxpc3QhXCI7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gZWRnZS5zb3VyY2Uub3duZXIuZ2V0R3JhcGhNYW5hZ2VyKCkuZWRnZXMuaW5kZXhPZihlZGdlKTtcbiAgICBlZGdlLnNvdXJjZS5vd25lci5nZXRHcmFwaE1hbmFnZXIoKS5lZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVCb3VuZHMgPSBmdW5jdGlvbiAoKVxue1xuICB0aGlzLnJvb3RHcmFwaC51cGRhdGVCb3VuZHModHJ1ZSk7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRHcmFwaHMgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5ncmFwaHM7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRBbGxOb2RlcyA9IGZ1bmN0aW9uICgpXG57XG4gIGlmICh0aGlzLmFsbE5vZGVzID09IG51bGwpXG4gIHtcbiAgICB2YXIgbm9kZUxpc3QgPSBbXTtcbiAgICB2YXIgZ3JhcGhzID0gdGhpcy5nZXRHcmFwaHMoKTtcbiAgICB2YXIgcyA9IGdyYXBocy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gICAge1xuICAgICAgbm9kZUxpc3QgPSBub2RlTGlzdC5jb25jYXQoZ3JhcGhzW2ldLmdldE5vZGVzKCkpO1xuICAgIH1cbiAgICB0aGlzLmFsbE5vZGVzID0gbm9kZUxpc3Q7XG4gIH1cbiAgcmV0dXJuIHRoaXMuYWxsTm9kZXM7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5yZXNldEFsbE5vZGVzID0gZnVuY3Rpb24gKClcbntcbiAgdGhpcy5hbGxOb2RlcyA9IG51bGw7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5yZXNldEFsbEVkZ2VzID0gZnVuY3Rpb24gKClcbntcbiAgdGhpcy5hbGxFZGdlcyA9IG51bGw7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5yZXNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gZnVuY3Rpb24gKClcbntcbiAgdGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IG51bGw7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRBbGxFZGdlcyA9IGZ1bmN0aW9uICgpXG57XG4gIGlmICh0aGlzLmFsbEVkZ2VzID09IG51bGwpXG4gIHtcbiAgICB2YXIgZWRnZUxpc3QgPSBbXTtcbiAgICB2YXIgZ3JhcGhzID0gdGhpcy5nZXRHcmFwaHMoKTtcbiAgICB2YXIgcyA9IGdyYXBocy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncmFwaHMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgZWRnZUxpc3QgPSBlZGdlTGlzdC5jb25jYXQoZ3JhcGhzW2ldLmdldEVkZ2VzKCkpO1xuICAgIH1cblxuICAgIGVkZ2VMaXN0ID0gZWRnZUxpc3QuY29uY2F0KHRoaXMuZWRnZXMpO1xuXG4gICAgdGhpcy5hbGxFZGdlcyA9IGVkZ2VMaXN0O1xuICB9XG4gIHJldHVybiB0aGlzLmFsbEVkZ2VzO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbjtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gZnVuY3Rpb24gKG5vZGVMaXN0KVxue1xuICBpZiAodGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiAhPSBudWxsKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cblxuICB0aGlzLmFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gbm9kZUxpc3Q7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRSb290ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucm9vdEdyYXBoO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuc2V0Um9vdEdyYXBoID0gZnVuY3Rpb24gKGdyYXBoKVxue1xuICBpZiAoZ3JhcGguZ2V0R3JhcGhNYW5hZ2VyKCkgIT0gdGhpcykge1xuICAgIHRocm93IFwiUm9vdCBub3QgaW4gdGhpcyBncmFwaCBtZ3IhXCI7XG4gIH1cblxuICB0aGlzLnJvb3RHcmFwaCA9IGdyYXBoO1xuICAvLyByb290IGdyYXBoIG11c3QgaGF2ZSBhIHJvb3Qgbm9kZSBhc3NvY2lhdGVkIHdpdGggaXQgZm9yIGNvbnZlbmllbmNlXG4gIGlmIChncmFwaC5wYXJlbnQgPT0gbnVsbClcbiAge1xuICAgIGdyYXBoLnBhcmVudCA9IHRoaXMubGF5b3V0Lm5ld05vZGUoXCJSb290IG5vZGVcIik7XG4gIH1cbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldExheW91dCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmxheW91dDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmlzT25lQW5jZXN0b3JPZk90aGVyID0gZnVuY3Rpb24gKGZpcnN0Tm9kZSwgc2Vjb25kTm9kZSlcbntcbiAgaWYgKCEoZmlyc3ROb2RlICE9IG51bGwgJiYgc2Vjb25kTm9kZSAhPSBudWxsKSkge1xuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICB9XG5cbiAgaWYgKGZpcnN0Tm9kZSA9PSBzZWNvbmROb2RlKVxuICB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy8gSXMgc2Vjb25kIG5vZGUgYW4gYW5jZXN0b3Igb2YgdGhlIGZpcnN0IG9uZT9cbiAgdmFyIG93bmVyR3JhcGggPSBmaXJzdE5vZGUuZ2V0T3duZXIoKTtcbiAgdmFyIHBhcmVudE5vZGU7XG5cbiAgZG9cbiAge1xuICAgIHBhcmVudE5vZGUgPSBvd25lckdyYXBoLmdldFBhcmVudCgpO1xuXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gbnVsbClcbiAgICB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAocGFyZW50Tm9kZSA9PSBzZWNvbmROb2RlKVxuICAgIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIG93bmVyR3JhcGggPSBwYXJlbnROb2RlLmdldE93bmVyKCk7XG4gICAgaWYgKG93bmVyR3JhcGggPT0gbnVsbClcbiAgICB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH0gd2hpbGUgKHRydWUpO1xuICAvLyBJcyBmaXJzdCBub2RlIGFuIGFuY2VzdG9yIG9mIHRoZSBzZWNvbmQgb25lP1xuICBvd25lckdyYXBoID0gc2Vjb25kTm9kZS5nZXRPd25lcigpO1xuXG4gIGRvXG4gIHtcbiAgICBwYXJlbnROb2RlID0gb3duZXJHcmFwaC5nZXRQYXJlbnQoKTtcblxuICAgIGlmIChwYXJlbnROb2RlID09IG51bGwpXG4gICAge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gZmlyc3ROb2RlKVxuICAgIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIG93bmVyR3JhcGggPSBwYXJlbnROb2RlLmdldE93bmVyKCk7XG4gICAgaWYgKG93bmVyR3JhcGggPT0gbnVsbClcbiAgICB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH0gd2hpbGUgKHRydWUpO1xuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmNhbGNMb3dlc3RDb21tb25BbmNlc3RvcnMgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgZWRnZTtcbiAgdmFyIHNvdXJjZU5vZGU7XG4gIHZhciB0YXJnZXROb2RlO1xuICB2YXIgc291cmNlQW5jZXN0b3JHcmFwaDtcbiAgdmFyIHRhcmdldEFuY2VzdG9yR3JhcGg7XG5cbiAgdmFyIGVkZ2VzID0gdGhpcy5nZXRBbGxFZGdlcygpO1xuICB2YXIgcyA9IGVkZ2VzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gIHtcbiAgICBlZGdlID0gZWRnZXNbaV07XG5cbiAgICBzb3VyY2VOb2RlID0gZWRnZS5zb3VyY2U7XG4gICAgdGFyZ2V0Tm9kZSA9IGVkZ2UudGFyZ2V0O1xuICAgIGVkZ2UubGNhID0gbnVsbDtcbiAgICBlZGdlLnNvdXJjZUluTGNhID0gc291cmNlTm9kZTtcbiAgICBlZGdlLnRhcmdldEluTGNhID0gdGFyZ2V0Tm9kZTtcblxuICAgIGlmIChzb3VyY2VOb2RlID09IHRhcmdldE5vZGUpXG4gICAge1xuICAgICAgZWRnZS5sY2EgPSBzb3VyY2VOb2RlLmdldE93bmVyKCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBzb3VyY2VBbmNlc3RvckdyYXBoID0gc291cmNlTm9kZS5nZXRPd25lcigpO1xuXG4gICAgd2hpbGUgKGVkZ2UubGNhID09IG51bGwpXG4gICAge1xuICAgICAgZWRnZS50YXJnZXRJbkxjYSA9IHRhcmdldE5vZGU7ICBcbiAgICAgIHRhcmdldEFuY2VzdG9yR3JhcGggPSB0YXJnZXROb2RlLmdldE93bmVyKCk7XG5cbiAgICAgIHdoaWxlIChlZGdlLmxjYSA9PSBudWxsKVxuICAgICAge1xuICAgICAgICBpZiAodGFyZ2V0QW5jZXN0b3JHcmFwaCA9PSBzb3VyY2VBbmNlc3RvckdyYXBoKVxuICAgICAgICB7XG4gICAgICAgICAgZWRnZS5sY2EgPSB0YXJnZXRBbmNlc3RvckdyYXBoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldEFuY2VzdG9yR3JhcGggPT0gdGhpcy5yb290R3JhcGgpXG4gICAgICAgIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlZGdlLmxjYSAhPSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWRnZS50YXJnZXRJbkxjYSA9IHRhcmdldEFuY2VzdG9yR3JhcGguZ2V0UGFyZW50KCk7XG4gICAgICAgIHRhcmdldEFuY2VzdG9yR3JhcGggPSBlZGdlLnRhcmdldEluTGNhLmdldE93bmVyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzb3VyY2VBbmNlc3RvckdyYXBoID09IHRoaXMucm9vdEdyYXBoKVxuICAgICAge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGVkZ2UubGNhID09IG51bGwpXG4gICAgICB7XG4gICAgICAgIGVkZ2Uuc291cmNlSW5MY2EgPSBzb3VyY2VBbmNlc3RvckdyYXBoLmdldFBhcmVudCgpO1xuICAgICAgICBzb3VyY2VBbmNlc3RvckdyYXBoID0gZWRnZS5zb3VyY2VJbkxjYS5nZXRPd25lcigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlZGdlLmxjYSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgICB9XG4gIH1cbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmNhbGNMb3dlc3RDb21tb25BbmNlc3RvciA9IGZ1bmN0aW9uIChmaXJzdE5vZGUsIHNlY29uZE5vZGUpXG57XG4gIGlmIChmaXJzdE5vZGUgPT0gc2Vjb25kTm9kZSlcbiAge1xuICAgIHJldHVybiBmaXJzdE5vZGUuZ2V0T3duZXIoKTtcbiAgfVxuICB2YXIgZmlyc3RPd25lckdyYXBoID0gZmlyc3ROb2RlLmdldE93bmVyKCk7XG5cbiAgZG9cbiAge1xuICAgIGlmIChmaXJzdE93bmVyR3JhcGggPT0gbnVsbClcbiAgICB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdmFyIHNlY29uZE93bmVyR3JhcGggPSBzZWNvbmROb2RlLmdldE93bmVyKCk7XG5cbiAgICBkb1xuICAgIHtcbiAgICAgIGlmIChzZWNvbmRPd25lckdyYXBoID09IG51bGwpXG4gICAgICB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2Vjb25kT3duZXJHcmFwaCA9PSBmaXJzdE93bmVyR3JhcGgpXG4gICAgICB7XG4gICAgICAgIHJldHVybiBzZWNvbmRPd25lckdyYXBoO1xuICAgICAgfVxuICAgICAgc2Vjb25kT3duZXJHcmFwaCA9IHNlY29uZE93bmVyR3JhcGguZ2V0UGFyZW50KCkuZ2V0T3duZXIoKTtcbiAgICB9IHdoaWxlICh0cnVlKTtcblxuICAgIGZpcnN0T3duZXJHcmFwaCA9IGZpcnN0T3duZXJHcmFwaC5nZXRQYXJlbnQoKS5nZXRPd25lcigpO1xuICB9IHdoaWxlICh0cnVlKTtcblxuICByZXR1cm4gZmlyc3RPd25lckdyYXBoO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuY2FsY0luY2x1c2lvblRyZWVEZXB0aHMgPSBmdW5jdGlvbiAoZ3JhcGgsIGRlcHRoKSB7XG4gIGlmIChncmFwaCA9PSBudWxsICYmIGRlcHRoID09IG51bGwpIHtcbiAgICBncmFwaCA9IHRoaXMucm9vdEdyYXBoO1xuICAgIGRlcHRoID0gMTtcbiAgfVxuICB2YXIgbm9kZTtcblxuICB2YXIgbm9kZXMgPSBncmFwaC5nZXROb2RlcygpO1xuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gIHtcbiAgICBub2RlID0gbm9kZXNbaV07XG4gICAgbm9kZS5pbmNsdXNpb25UcmVlRGVwdGggPSBkZXB0aDtcblxuICAgIGlmIChub2RlLmNoaWxkICE9IG51bGwpXG4gICAge1xuICAgICAgdGhpcy5jYWxjSW5jbHVzaW9uVHJlZURlcHRocyhub2RlLmNoaWxkLCBkZXB0aCArIDEpO1xuICAgIH1cbiAgfVxufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuaW5jbHVkZXNJbnZhbGlkRWRnZSA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBlZGdlO1xuXG4gIHZhciBzID0gdGhpcy5lZGdlcy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICB7XG4gICAgZWRnZSA9IHRoaXMuZWRnZXNbaV07XG5cbiAgICBpZiAodGhpcy5pc09uZUFuY2VzdG9yT2ZPdGhlcihlZGdlLnNvdXJjZSwgZWRnZS50YXJnZXQpKVxuICAgIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExHcmFwaE1hbmFnZXI7XG4iLCJmdW5jdGlvbiBMR3JhcGhPYmplY3QodkdyYXBoT2JqZWN0KSB7XG4gIHRoaXMudkdyYXBoT2JqZWN0ID0gdkdyYXBoT2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExHcmFwaE9iamVjdDtcbiIsInZhciBMR3JhcGhPYmplY3QgPSByZXF1aXJlKCcuL0xHcmFwaE9iamVjdCcpO1xudmFyIEludGVnZXIgPSByZXF1aXJlKCcuL0ludGVnZXInKTtcbnZhciBSZWN0YW5nbGVEID0gcmVxdWlyZSgnLi9SZWN0YW5nbGVEJyk7XG52YXIgTGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9MYXlvdXRDb25zdGFudHMnKTtcbnZhciBSYW5kb21TZWVkID0gcmVxdWlyZSgnLi9SYW5kb21TZWVkJyk7XG52YXIgUG9pbnREID0gcmVxdWlyZSgnLi9Qb2ludEQnKTtcbnZhciBIYXNoU2V0ID0gcmVxdWlyZSgnLi9IYXNoU2V0Jyk7XG5cbmZ1bmN0aW9uIExOb2RlKGdtLCBsb2MsIHNpemUsIHZOb2RlKSB7XG4gIC8vQWx0ZXJuYXRpdmUgY29uc3RydWN0b3IgMSA6IExOb2RlKExHcmFwaE1hbmFnZXIgZ20sIFBvaW50IGxvYywgRGltZW5zaW9uIHNpemUsIE9iamVjdCB2Tm9kZSlcbiAgaWYgKHNpemUgPT0gbnVsbCAmJiB2Tm9kZSA9PSBudWxsKSB7XG4gICAgdk5vZGUgPSBsb2M7XG4gIH1cblxuICBMR3JhcGhPYmplY3QuY2FsbCh0aGlzLCB2Tm9kZSk7XG5cbiAgLy9BbHRlcm5hdGl2ZSBjb25zdHJ1Y3RvciAyIDogTE5vZGUoTGF5b3V0IGxheW91dCwgT2JqZWN0IHZOb2RlKVxuICBpZiAoZ20uZ3JhcGhNYW5hZ2VyICE9IG51bGwpXG4gICAgZ20gPSBnbS5ncmFwaE1hbmFnZXI7XG5cbiAgdGhpcy5lc3RpbWF0ZWRTaXplID0gSW50ZWdlci5NSU5fVkFMVUU7XG4gIHRoaXMuaW5jbHVzaW9uVHJlZURlcHRoID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHRoaXMudkdyYXBoT2JqZWN0ID0gdk5vZGU7XG4gIHRoaXMuZWRnZXMgPSBbXTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcblxuICBpZiAoc2l6ZSAhPSBudWxsICYmIGxvYyAhPSBudWxsKVxuICAgIHRoaXMucmVjdCA9IG5ldyBSZWN0YW5nbGVEKGxvYy54LCBsb2MueSwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xuICBlbHNlXG4gICAgdGhpcy5yZWN0ID0gbmV3IFJlY3RhbmdsZUQoKTtcbn1cblxuTE5vZGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMR3JhcGhPYmplY3QucHJvdG90eXBlKTtcbmZvciAodmFyIHByb3AgaW4gTEdyYXBoT2JqZWN0KSB7XG4gIExOb2RlW3Byb3BdID0gTEdyYXBoT2JqZWN0W3Byb3BdO1xufVxuXG5MTm9kZS5wcm90b3R5cGUuZ2V0RWRnZXMgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5lZGdlcztcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRDaGlsZCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmNoaWxkO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldE93bmVyID0gZnVuY3Rpb24gKClcbntcbi8vICBpZiAodGhpcy5vd25lciAhPSBudWxsKSB7XG4vLyAgICBpZiAoISh0aGlzLm93bmVyID09IG51bGwgfHwgdGhpcy5vd25lci5nZXROb2RlcygpLmluZGV4T2YodGhpcykgPiAtMSkpIHtcbi8vICAgICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4vLyAgICB9XG4vLyAgfVxuXG4gIHJldHVybiB0aGlzLm93bmVyO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdC53aWR0aDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5zZXRXaWR0aCA9IGZ1bmN0aW9uICh3aWR0aClcbntcbiAgdGhpcy5yZWN0LndpZHRoID0gd2lkdGg7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdC5oZWlnaHQ7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGhlaWdodClcbntcbiAgdGhpcy5yZWN0LmhlaWdodCA9IGhlaWdodDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRDZW50ZXJYID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdC54ICsgdGhpcy5yZWN0LndpZHRoIC8gMjtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRDZW50ZXJZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdC55ICsgdGhpcy5yZWN0LmhlaWdodCAvIDI7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2VudGVyID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIG5ldyBQb2ludEQodGhpcy5yZWN0LnggKyB0aGlzLnJlY3Qud2lkdGggLyAyLFxuICAgICAgICAgIHRoaXMucmVjdC55ICsgdGhpcy5yZWN0LmhlaWdodCAvIDIpO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldExvY2F0aW9uID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIG5ldyBQb2ludEQodGhpcy5yZWN0LngsIHRoaXMucmVjdC55KTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRSZWN0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXREaWFnb25hbCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiBNYXRoLnNxcnQodGhpcy5yZWN0LndpZHRoICogdGhpcy5yZWN0LndpZHRoICtcbiAgICAgICAgICB0aGlzLnJlY3QuaGVpZ2h0ICogdGhpcy5yZWN0LmhlaWdodCk7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuc2V0UmVjdCA9IGZ1bmN0aW9uICh1cHBlckxlZnQsIGRpbWVuc2lvbilcbntcbiAgdGhpcy5yZWN0LnggPSB1cHBlckxlZnQueDtcbiAgdGhpcy5yZWN0LnkgPSB1cHBlckxlZnQueTtcbiAgdGhpcy5yZWN0LndpZHRoID0gZGltZW5zaW9uLndpZHRoO1xuICB0aGlzLnJlY3QuaGVpZ2h0ID0gZGltZW5zaW9uLmhlaWdodDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5zZXRDZW50ZXIgPSBmdW5jdGlvbiAoY3gsIGN5KVxue1xuICB0aGlzLnJlY3QueCA9IGN4IC0gdGhpcy5yZWN0LndpZHRoIC8gMjtcbiAgdGhpcy5yZWN0LnkgPSBjeSAtIHRoaXMucmVjdC5oZWlnaHQgLyAyO1xufTtcblxuTE5vZGUucHJvdG90eXBlLnNldExvY2F0aW9uID0gZnVuY3Rpb24gKHgsIHkpXG57XG4gIHRoaXMucmVjdC54ID0geDtcbiAgdGhpcy5yZWN0LnkgPSB5O1xufTtcblxuTE5vZGUucHJvdG90eXBlLm1vdmVCeSA9IGZ1bmN0aW9uIChkeCwgZHkpXG57XG4gIHRoaXMucmVjdC54ICs9IGR4O1xuICB0aGlzLnJlY3QueSArPSBkeTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRFZGdlTGlzdFRvTm9kZSA9IGZ1bmN0aW9uICh0bylcbntcbiAgdmFyIGVkZ2VMaXN0ID0gW107XG4gIHZhciBlZGdlO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgc2VsZi5lZGdlcy5mb3JFYWNoKGZ1bmN0aW9uKGVkZ2UpIHtcbiAgICBcbiAgICBpZiAoZWRnZS50YXJnZXQgPT0gdG8pXG4gICAge1xuICAgICAgaWYgKGVkZ2Uuc291cmNlICE9IHNlbGYpXG4gICAgICAgIHRocm93IFwiSW5jb3JyZWN0IGVkZ2Ugc291cmNlIVwiO1xuXG4gICAgICBlZGdlTGlzdC5wdXNoKGVkZ2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VMaXN0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEVkZ2VzQmV0d2VlbiA9IGZ1bmN0aW9uIChvdGhlcilcbntcbiAgdmFyIGVkZ2VMaXN0ID0gW107XG4gIHZhciBlZGdlO1xuICBcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24oZWRnZSkge1xuXG4gICAgaWYgKCEoZWRnZS5zb3VyY2UgPT0gc2VsZiB8fCBlZGdlLnRhcmdldCA9PSBzZWxmKSlcbiAgICAgIHRocm93IFwiSW5jb3JyZWN0IGVkZ2Ugc291cmNlIGFuZC9vciB0YXJnZXRcIjtcblxuICAgIGlmICgoZWRnZS50YXJnZXQgPT0gb3RoZXIpIHx8IChlZGdlLnNvdXJjZSA9PSBvdGhlcikpXG4gICAge1xuICAgICAgZWRnZUxpc3QucHVzaChlZGdlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlTGlzdDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXROZWlnaGJvcnNMaXN0ID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIG5laWdoYm9ycyA9IG5ldyBIYXNoU2V0KCk7XG4gIHZhciBlZGdlO1xuICBcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24oZWRnZSkge1xuXG4gICAgaWYgKGVkZ2Uuc291cmNlID09IHNlbGYpXG4gICAge1xuICAgICAgbmVpZ2hib3JzLmFkZChlZGdlLnRhcmdldCk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICBpZiAoZWRnZS50YXJnZXQgIT0gc2VsZikge1xuICAgICAgICB0aHJvdyBcIkluY29ycmVjdCBpbmNpZGVuY3khXCI7XG4gICAgICB9XG4gICAgXG4gICAgICBuZWlnaGJvcnMuYWRkKGVkZ2Uuc291cmNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBuZWlnaGJvcnM7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUud2l0aENoaWxkcmVuID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIHdpdGhOZWlnaGJvcnNMaXN0ID0gbmV3IFNldCgpO1xuICB2YXIgY2hpbGROb2RlO1xuICB2YXIgY2hpbGRyZW47XG5cbiAgd2l0aE5laWdoYm9yc0xpc3QuYWRkKHRoaXMpO1xuXG4gIGlmICh0aGlzLmNoaWxkICE9IG51bGwpXG4gIHtcbiAgICB2YXIgbm9kZXMgPSB0aGlzLmNoaWxkLmdldE5vZGVzKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBjaGlsZE5vZGUgPSBub2Rlc1tpXTtcbiAgICAgIGNoaWxkcmVuID0gY2hpbGROb2RlLndpdGhDaGlsZHJlbigpO1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIHdpdGhOZWlnaGJvcnNMaXN0LmFkZChub2RlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB3aXRoTmVpZ2hib3JzTGlzdDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXROb09mQ2hpbGRyZW4gPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgbm9PZkNoaWxkcmVuID0gMDtcbiAgdmFyIGNoaWxkTm9kZTtcblxuICBpZih0aGlzLmNoaWxkID09IG51bGwpe1xuICAgIG5vT2ZDaGlsZHJlbiA9IDE7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgdmFyIG5vZGVzID0gdGhpcy5jaGlsZC5nZXROb2RlcygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgY2hpbGROb2RlID0gbm9kZXNbaV07XG5cbiAgICAgIG5vT2ZDaGlsZHJlbiArPSBjaGlsZE5vZGUuZ2V0Tm9PZkNoaWxkcmVuKCk7XG4gICAgfVxuICB9XG4gIFxuICBpZihub09mQ2hpbGRyZW4gPT0gMCl7XG4gICAgbm9PZkNoaWxkcmVuID0gMTtcbiAgfVxuICByZXR1cm4gbm9PZkNoaWxkcmVuO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEVzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmVzdGltYXRlZFNpemUgPT0gSW50ZWdlci5NSU5fVkFMVUUpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmNhbGNFc3RpbWF0ZWRTaXplID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5jaGlsZCA9PSBudWxsKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZSA9ICh0aGlzLnJlY3Qud2lkdGggKyB0aGlzLnJlY3QuaGVpZ2h0KSAvIDI7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgdGhpcy5lc3RpbWF0ZWRTaXplID0gdGhpcy5jaGlsZC5jYWxjRXN0aW1hdGVkU2l6ZSgpO1xuICAgIHRoaXMucmVjdC53aWR0aCA9IHRoaXMuZXN0aW1hdGVkU2l6ZTtcbiAgICB0aGlzLnJlY3QuaGVpZ2h0ID0gdGhpcy5lc3RpbWF0ZWRTaXplO1xuXG4gICAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcbiAgfVxufTtcblxuTE5vZGUucHJvdG90eXBlLnNjYXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciByYW5kb21DZW50ZXJYO1xuICB2YXIgcmFuZG9tQ2VudGVyWTtcblxuICB2YXIgbWluWCA9IC1MYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcbiAgdmFyIG1heFggPSBMYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcbiAgcmFuZG9tQ2VudGVyWCA9IExheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWCArXG4gICAgICAgICAgKFJhbmRvbVNlZWQubmV4dERvdWJsZSgpICogKG1heFggLSBtaW5YKSkgKyBtaW5YO1xuXG4gIHZhciBtaW5ZID0gLUxheW91dENvbnN0YW50cy5JTklUSUFMX1dPUkxEX0JPVU5EQVJZO1xuICB2YXIgbWF4WSA9IExheW91dENvbnN0YW50cy5JTklUSUFMX1dPUkxEX0JPVU5EQVJZO1xuICByYW5kb21DZW50ZXJZID0gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0NFTlRFUl9ZICtcbiAgICAgICAgICAoUmFuZG9tU2VlZC5uZXh0RG91YmxlKCkgKiAobWF4WSAtIG1pblkpKSArIG1pblk7XG5cbiAgdGhpcy5yZWN0LnggPSByYW5kb21DZW50ZXJYO1xuICB0aGlzLnJlY3QueSA9IHJhbmRvbUNlbnRlcllcbn07XG5cbkxOb2RlLnByb3RvdHlwZS51cGRhdGVCb3VuZHMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmdldENoaWxkKCkgPT0gbnVsbCkge1xuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICB9XG4gIGlmICh0aGlzLmdldENoaWxkKCkuZ2V0Tm9kZXMoKS5sZW5ndGggIT0gMClcbiAge1xuICAgIC8vIHdyYXAgdGhlIGNoaWxkcmVuIG5vZGVzIGJ5IHJlLWFycmFuZ2luZyB0aGUgYm91bmRhcmllc1xuICAgIHZhciBjaGlsZEdyYXBoID0gdGhpcy5nZXRDaGlsZCgpO1xuICAgIGNoaWxkR3JhcGgudXBkYXRlQm91bmRzKHRydWUpO1xuXG4gICAgdGhpcy5yZWN0LnggPSBjaGlsZEdyYXBoLmdldExlZnQoKTtcbiAgICB0aGlzLnJlY3QueSA9IGNoaWxkR3JhcGguZ2V0VG9wKCk7XG5cbiAgICB0aGlzLnNldFdpZHRoKGNoaWxkR3JhcGguZ2V0UmlnaHQoKSAtIGNoaWxkR3JhcGguZ2V0TGVmdCgpKTtcbiAgICB0aGlzLnNldEhlaWdodChjaGlsZEdyYXBoLmdldEJvdHRvbSgpIC0gY2hpbGRHcmFwaC5nZXRUb3AoKSk7XG4gICAgXG4gICAgLy8gVXBkYXRlIGNvbXBvdW5kIGJvdW5kcyBjb25zaWRlcmluZyBpdHMgbGFiZWwgcHJvcGVydGllcyAgICBcbiAgICBpZihMYXlvdXRDb25zdGFudHMuTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTKXtcbiAgICAgICAgXG4gICAgICB2YXIgd2lkdGggPSBjaGlsZEdyYXBoLmdldFJpZ2h0KCkgLSBjaGlsZEdyYXBoLmdldExlZnQoKTtcbiAgICAgIHZhciBoZWlnaHQgPSBjaGlsZEdyYXBoLmdldEJvdHRvbSgpIC0gY2hpbGRHcmFwaC5nZXRUb3AoKTtcblxuICAgICAgaWYodGhpcy5sYWJlbFdpZHRoID4gd2lkdGgpe1xuICAgICAgICB0aGlzLnJlY3QueCAtPSAodGhpcy5sYWJlbFdpZHRoIC0gd2lkdGgpIC8gMjtcbiAgICAgICAgdGhpcy5zZXRXaWR0aCh0aGlzLmxhYmVsV2lkdGgpO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmxhYmVsSGVpZ2h0ID4gaGVpZ2h0KXtcbiAgICAgICAgaWYodGhpcy5sYWJlbFBvcyA9PSBcImNlbnRlclwiKXtcbiAgICAgICAgICB0aGlzLnJlY3QueSAtPSAodGhpcy5sYWJlbEhlaWdodCAtIGhlaWdodCkgLyAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5sYWJlbFBvcyA9PSBcInRvcFwiKXtcbiAgICAgICAgICB0aGlzLnJlY3QueSAtPSAodGhpcy5sYWJlbEhlaWdodCAtIGhlaWdodCk7IFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SGVpZ2h0KHRoaXMubGFiZWxIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEluY2x1c2lvblRyZWVEZXB0aCA9IGZ1bmN0aW9uICgpXG57XG4gIGlmICh0aGlzLmluY2x1c2lvblRyZWVEZXB0aCA9PSBJbnRlZ2VyLk1BWF9WQUxVRSkge1xuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICB9XG4gIHJldHVybiB0aGlzLmluY2x1c2lvblRyZWVEZXB0aDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS50cmFuc2Zvcm0gPSBmdW5jdGlvbiAodHJhbnMpXG57XG4gIHZhciBsZWZ0ID0gdGhpcy5yZWN0Lng7XG5cbiAgaWYgKGxlZnQgPiBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkpXG4gIHtcbiAgICBsZWZ0ID0gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZO1xuICB9XG4gIGVsc2UgaWYgKGxlZnQgPCAtTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZKVxuICB7XG4gICAgbGVmdCA9IC1MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlk7XG4gIH1cblxuICB2YXIgdG9wID0gdGhpcy5yZWN0Lnk7XG5cbiAgaWYgKHRvcCA+IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSlcbiAge1xuICAgIHRvcCA9IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWTtcbiAgfVxuICBlbHNlIGlmICh0b3AgPCAtTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZKVxuICB7XG4gICAgdG9wID0gLUxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWTtcbiAgfVxuXG4gIHZhciBsZWZ0VG9wID0gbmV3IFBvaW50RChsZWZ0LCB0b3ApO1xuICB2YXIgdkxlZnRUb3AgPSB0cmFucy5pbnZlcnNlVHJhbnNmb3JtUG9pbnQobGVmdFRvcCk7XG5cbiAgdGhpcy5zZXRMb2NhdGlvbih2TGVmdFRvcC54LCB2TGVmdFRvcC55KTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRMZWZ0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdC54O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFJpZ2h0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdC54ICsgdGhpcy5yZWN0LndpZHRoO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFRvcCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnJlY3QueTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRCb3R0b20gPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yZWN0LnkgKyB0aGlzLnJlY3QuaGVpZ2h0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFBhcmVudCA9IGZ1bmN0aW9uICgpXG57XG4gIGlmICh0aGlzLm93bmVyID09IG51bGwpXG4gIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB0aGlzLm93bmVyLmdldFBhcmVudCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMTm9kZTtcbiIsInZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0xheW91dENvbnN0YW50cycpO1xudmFyIEhhc2hNYXAgPSByZXF1aXJlKCcuL0hhc2hNYXAnKTtcbnZhciBMR3JhcGhNYW5hZ2VyID0gcmVxdWlyZSgnLi9MR3JhcGhNYW5hZ2VyJyk7XG52YXIgTE5vZGUgPSByZXF1aXJlKCcuL0xOb2RlJyk7XG52YXIgTEVkZ2UgPSByZXF1aXJlKCcuL0xFZGdlJyk7XG52YXIgTEdyYXBoID0gcmVxdWlyZSgnLi9MR3JhcGgnKTtcbnZhciBQb2ludEQgPSByZXF1aXJlKCcuL1BvaW50RCcpO1xudmFyIFRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vVHJhbnNmb3JtJyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJy4vRW1pdHRlcicpO1xudmFyIEhhc2hTZXQgPSByZXF1aXJlKCcuL0hhc2hTZXQnKTtcblxuZnVuY3Rpb24gTGF5b3V0KGlzUmVtb3RlVXNlKSB7XG4gIEVtaXR0ZXIuY2FsbCggdGhpcyApO1xuXG4gIC8vTGF5b3V0IFF1YWxpdHk6IDA6cHJvb2YsIDE6ZGVmYXVsdCwgMjpkcmFmdFxuICB0aGlzLmxheW91dFF1YWxpdHkgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9RVUFMSVRZO1xuICAvL1doZXRoZXIgbGF5b3V0IHNob3VsZCBjcmVhdGUgYmVuZHBvaW50cyBhcyBuZWVkZWQgb3Igbm90XG4gIHRoaXMuY3JlYXRlQmVuZHNBc05lZWRlZCA9XG4gICAgICAgICAgTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ1JFQVRFX0JFTkRTX0FTX05FRURFRDtcbiAgLy9XaGV0aGVyIGxheW91dCBzaG91bGQgYmUgaW5jcmVtZW50YWwgb3Igbm90XG4gIHRoaXMuaW5jcmVtZW50YWwgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9JTkNSRU1FTlRBTDtcbiAgLy9XaGV0aGVyIHdlIGFuaW1hdGUgZnJvbSBiZWZvcmUgdG8gYWZ0ZXIgbGF5b3V0IG5vZGUgcG9zaXRpb25zXG4gIHRoaXMuYW5pbWF0aW9uT25MYXlvdXQgPVxuICAgICAgICAgIExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9PTl9MQVlPVVQ7XG4gIC8vV2hldGhlciB3ZSBhbmltYXRlIHRoZSBsYXlvdXQgcHJvY2VzcyBvciBub3RcbiAgdGhpcy5hbmltYXRpb25EdXJpbmdMYXlvdXQgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fRFVSSU5HX0xBWU9VVDtcbiAgLy9OdW1iZXIgaXRlcmF0aW9ucyB0aGF0IHNob3VsZCBiZSBkb25lIGJldHdlZW4gdHdvIHN1Y2Nlc3NpdmUgYW5pbWF0aW9uc1xuICB0aGlzLmFuaW1hdGlvblBlcmlvZCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9QRVJJT0Q7XG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCBsZWFmIG5vZGVzIChub24tY29tcG91bmQgbm9kZXMpIGFyZSBvZiB1bmlmb3JtIHNpemVzLiBXaGVuXG4gICAqIHRoZXkgYXJlLCBib3RoIHNwcmluZyBhbmQgcmVwdWxzaW9uIGZvcmNlcyBiZXR3ZWVuIHR3byBsZWFmIG5vZGVzIGNhbiBiZVxuICAgKiBjYWxjdWxhdGVkIHdpdGhvdXQgdGhlIGV4cGVuc2l2ZSBjbGlwcGluZyBwb2ludCBjYWxjdWxhdGlvbnMsIHJlc3VsdGluZ1xuICAgKiBpbiBtYWpvciBzcGVlZC11cC5cbiAgICovXG4gIHRoaXMudW5pZm9ybUxlYWZOb2RlU2l6ZXMgPVxuICAgICAgICAgIExheW91dENvbnN0YW50cy5ERUZBVUxUX1VOSUZPUk1fTEVBRl9OT0RFX1NJWkVTO1xuICAvKipcbiAgICogVGhpcyBpcyB1c2VkIGZvciBjcmVhdGlvbiBvZiBiZW5kcG9pbnRzIGJ5IHVzaW5nIGR1bW15IG5vZGVzIGFuZCBlZGdlcy5cbiAgICogTWFwcyBhbiBMRWRnZSB0byBpdHMgZHVtbXkgYmVuZHBvaW50IHBhdGguXG4gICAqL1xuICB0aGlzLmVkZ2VUb0R1bW15Tm9kZXMgPSBuZXcgSGFzaE1hcCgpO1xuICB0aGlzLmdyYXBoTWFuYWdlciA9IG5ldyBMR3JhcGhNYW5hZ2VyKHRoaXMpO1xuICB0aGlzLmlzTGF5b3V0RmluaXNoZWQgPSBmYWxzZTtcbiAgdGhpcy5pc1N1YkxheW91dCA9IGZhbHNlO1xuICB0aGlzLmlzUmVtb3RlVXNlID0gZmFsc2U7XG5cbiAgaWYgKGlzUmVtb3RlVXNlICE9IG51bGwpIHtcbiAgICB0aGlzLmlzUmVtb3RlVXNlID0gaXNSZW1vdGVVc2U7XG4gIH1cbn1cblxuTGF5b3V0LlJBTkRPTV9TRUVEID0gMTtcblxuTGF5b3V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEVtaXR0ZXIucHJvdG90eXBlICk7XG5cbkxheW91dC5wcm90b3R5cGUuZ2V0R3JhcGhNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXI7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLmdldEFsbE5vZGVzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXMoKTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUuZ2V0QWxsRWRnZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxFZGdlcygpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5nZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uKCk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLm5ld0dyYXBoTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGdtID0gbmV3IExHcmFwaE1hbmFnZXIodGhpcyk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyID0gZ207XG4gIHJldHVybiBnbTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUubmV3R3JhcGggPSBmdW5jdGlvbiAodkdyYXBoKVxue1xuICByZXR1cm4gbmV3IExHcmFwaChudWxsLCB0aGlzLmdyYXBoTWFuYWdlciwgdkdyYXBoKTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUubmV3Tm9kZSA9IGZ1bmN0aW9uICh2Tm9kZSlcbntcbiAgcmV0dXJuIG5ldyBMTm9kZSh0aGlzLmdyYXBoTWFuYWdlciwgdk5vZGUpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5uZXdFZGdlID0gZnVuY3Rpb24gKHZFZGdlKVxue1xuICByZXR1cm4gbmV3IExFZGdlKG51bGwsIG51bGwsIHZFZGdlKTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUuY2hlY2tMYXlvdXRTdWNjZXNzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAodGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpID09IG51bGwpXG4gICAgICAgICAgfHwgdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldE5vZGVzKCkubGVuZ3RoID09IDBcbiAgICAgICAgICB8fCB0aGlzLmdyYXBoTWFuYWdlci5pbmNsdWRlc0ludmFsaWRFZGdlKCk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLnJ1bkxheW91dCA9IGZ1bmN0aW9uICgpXG57XG4gIHRoaXMuaXNMYXlvdXRGaW5pc2hlZCA9IGZhbHNlO1xuICBcbiAgaWYgKHRoaXMudGlsaW5nUHJlTGF5b3V0KSB7XG4gICAgdGhpcy50aWxpbmdQcmVMYXlvdXQoKTtcbiAgfVxuXG4gIHRoaXMuaW5pdFBhcmFtZXRlcnMoKTtcbiAgdmFyIGlzTGF5b3V0U3VjY2Vzc2Z1bGw7XG5cbiAgaWYgKHRoaXMuY2hlY2tMYXlvdXRTdWNjZXNzKCkpXG4gIHtcbiAgICBpc0xheW91dFN1Y2Nlc3NmdWxsID0gZmFsc2U7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgaXNMYXlvdXRTdWNjZXNzZnVsbCA9IHRoaXMubGF5b3V0KCk7XG4gIH1cbiAgXG4gIGlmIChMYXlvdXRDb25zdGFudHMuQU5JTUFURSA9PT0gJ2R1cmluZycpIHtcbiAgICAvLyBJZiB0aGlzIGlzIGEgJ2R1cmluZycgbGF5b3V0IGFuaW1hdGlvbi4gTGF5b3V0IGlzIG5vdCBmaW5pc2hlZCB5ZXQuIFxuICAgIC8vIFdlIG5lZWQgdG8gcGVyZm9ybSB0aGVzZSBpbiBpbmRleC5qcyB3aGVuIGxheW91dCBpcyByZWFsbHkgZmluaXNoZWQuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICBpZiAoaXNMYXlvdXRTdWNjZXNzZnVsbClcbiAge1xuICAgIGlmICghdGhpcy5pc1N1YkxheW91dClcbiAgICB7XG4gICAgICB0aGlzLmRvUG9zdExheW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aGlzLnRpbGluZ1Bvc3RMYXlvdXQpIHtcbiAgICB0aGlzLnRpbGluZ1Bvc3RMYXlvdXQoKTtcbiAgfVxuXG4gIHRoaXMuaXNMYXlvdXRGaW5pc2hlZCA9IHRydWU7XG5cbiAgcmV0dXJuIGlzTGF5b3V0U3VjY2Vzc2Z1bGw7XG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHBlcmZvcm1zIHRoZSBvcGVyYXRpb25zIHJlcXVpcmVkIGFmdGVyIGxheW91dC5cbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5kb1Bvc3RMYXlvdXQgPSBmdW5jdGlvbiAoKVxue1xuICAvL2Fzc2VydCAhaXNTdWJMYXlvdXQgOiBcIlNob3VsZCBub3QgYmUgY2FsbGVkIG9uIHN1Yi1sYXlvdXQhXCI7XG4gIC8vIFByb3BhZ2F0ZSBnZW9tZXRyaWMgY2hhbmdlcyB0byB2LWxldmVsIG9iamVjdHNcbiAgaWYoIXRoaXMuaW5jcmVtZW50YWwpe1xuICAgIHRoaXMudHJhbnNmb3JtKCk7XG4gIH1cbiAgdGhpcy51cGRhdGUoKTtcbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgdXBkYXRlcyB0aGUgZ2VvbWV0cnkgb2YgdGhlIHRhcmdldCBncmFwaCBhY2NvcmRpbmcgdG9cbiAqIGNhbGN1bGF0ZWQgbGF5b3V0LlxuICovXG5MYXlvdXQucHJvdG90eXBlLnVwZGF0ZTIgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIHVwZGF0ZSBiZW5kIHBvaW50c1xuICBpZiAodGhpcy5jcmVhdGVCZW5kc0FzTmVlZGVkKVxuICB7XG4gICAgdGhpcy5jcmVhdGVCZW5kcG9pbnRzRnJvbUR1bW15Tm9kZXMoKTtcblxuICAgIC8vIHJlc2V0IGFsbCBlZGdlcywgc2luY2UgdGhlIHRvcG9sb2d5IGhhcyBjaGFuZ2VkXG4gICAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxFZGdlcygpO1xuICB9XG5cbiAgLy8gcGVyZm9ybSBlZGdlLCBub2RlIGFuZCByb290IHVwZGF0ZXMgaWYgbGF5b3V0IGlzIG5vdCBjYWxsZWRcbiAgLy8gcmVtb3RlbHlcbiAgaWYgKCF0aGlzLmlzUmVtb3RlVXNlKVxuICB7XG4gICAgLy8gdXBkYXRlIGFsbCBlZGdlc1xuICAgIHZhciBlZGdlO1xuICAgIHZhciBhbGxFZGdlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbEVkZ2VzKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxFZGdlcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBlZGdlID0gYWxsRWRnZXNbaV07XG4vLyAgICAgIHRoaXMudXBkYXRlKGVkZ2UpO1xuICAgIH1cblxuICAgIC8vIHJlY3Vyc2l2ZWx5IHVwZGF0ZSBub2Rlc1xuICAgIHZhciBub2RlO1xuICAgIHZhciBub2RlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXROb2RlcygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgbm9kZSA9IG5vZGVzW2ldO1xuLy8gICAgICB0aGlzLnVwZGF0ZShub2RlKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgcm9vdCBncmFwaFxuICAgIHRoaXMudXBkYXRlKHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSk7XG4gIH1cbn07XG5cbkxheW91dC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAob2JqID09IG51bGwpIHtcbiAgICB0aGlzLnVwZGF0ZTIoKTtcbiAgfVxuICBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMTm9kZSkge1xuICAgIHZhciBub2RlID0gb2JqO1xuICAgIGlmIChub2RlLmdldENoaWxkKCkgIT0gbnVsbClcbiAgICB7XG4gICAgICAvLyBzaW5jZSBub2RlIGlzIGNvbXBvdW5kLCByZWN1cnNpdmVseSB1cGRhdGUgY2hpbGQgbm9kZXNcbiAgICAgIHZhciBub2RlcyA9IG5vZGUuZ2V0Q2hpbGQoKS5nZXROb2RlcygpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKylcbiAgICAgIHtcbiAgICAgICAgdXBkYXRlKG5vZGVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgbC1sZXZlbCBub2RlIGlzIGFzc29jaWF0ZWQgd2l0aCBhIHYtbGV2ZWwgZ3JhcGggb2JqZWN0LFxuICAgIC8vIHRoZW4gaXQgaXMgYXNzdW1lZCB0aGF0IHRoZSB2LWxldmVsIG5vZGUgaW1wbGVtZW50cyB0aGVcbiAgICAvLyBpbnRlcmZhY2UgVXBkYXRhYmxlLlxuICAgIGlmIChub2RlLnZHcmFwaE9iamVjdCAhPSBudWxsKVxuICAgIHtcbiAgICAgIC8vIGNhc3QgdG8gVXBkYXRhYmxlIHdpdGhvdXQgYW55IHR5cGUgY2hlY2tcbiAgICAgIHZhciB2Tm9kZSA9IG5vZGUudkdyYXBoT2JqZWN0O1xuXG4gICAgICAvLyBjYWxsIHRoZSB1cGRhdGUgbWV0aG9kIG9mIHRoZSBpbnRlcmZhY2VcbiAgICAgIHZOb2RlLnVwZGF0ZShub2RlKTtcbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgTEVkZ2UpIHtcbiAgICB2YXIgZWRnZSA9IG9iajtcbiAgICAvLyBpZiB0aGUgbC1sZXZlbCBlZGdlIGlzIGFzc29jaWF0ZWQgd2l0aCBhIHYtbGV2ZWwgZ3JhcGggb2JqZWN0LFxuICAgIC8vIHRoZW4gaXQgaXMgYXNzdW1lZCB0aGF0IHRoZSB2LWxldmVsIGVkZ2UgaW1wbGVtZW50cyB0aGVcbiAgICAvLyBpbnRlcmZhY2UgVXBkYXRhYmxlLlxuXG4gICAgaWYgKGVkZ2UudkdyYXBoT2JqZWN0ICE9IG51bGwpXG4gICAge1xuICAgICAgLy8gY2FzdCB0byBVcGRhdGFibGUgd2l0aG91dCBhbnkgdHlwZSBjaGVja1xuICAgICAgdmFyIHZFZGdlID0gZWRnZS52R3JhcGhPYmplY3Q7XG5cbiAgICAgIC8vIGNhbGwgdGhlIHVwZGF0ZSBtZXRob2Qgb2YgdGhlIGludGVyZmFjZVxuICAgICAgdkVkZ2UudXBkYXRlKGVkZ2UpO1xuICAgIH1cbiAgfVxuICBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMR3JhcGgpIHtcbiAgICB2YXIgZ3JhcGggPSBvYmo7XG4gICAgLy8gaWYgdGhlIGwtbGV2ZWwgZ3JhcGggaXMgYXNzb2NpYXRlZCB3aXRoIGEgdi1sZXZlbCBncmFwaCBvYmplY3QsXG4gICAgLy8gdGhlbiBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHYtbGV2ZWwgb2JqZWN0IGltcGxlbWVudHMgdGhlXG4gICAgLy8gaW50ZXJmYWNlIFVwZGF0YWJsZS5cblxuICAgIGlmIChncmFwaC52R3JhcGhPYmplY3QgIT0gbnVsbClcbiAgICB7XG4gICAgICAvLyBjYXN0IHRvIFVwZGF0YWJsZSB3aXRob3V0IGFueSB0eXBlIGNoZWNrXG4gICAgICB2YXIgdkdyYXBoID0gZ3JhcGgudkdyYXBoT2JqZWN0O1xuXG4gICAgICAvLyBjYWxsIHRoZSB1cGRhdGUgbWV0aG9kIG9mIHRoZSBpbnRlcmZhY2VcbiAgICAgIHZHcmFwaC51cGRhdGUoZ3JhcGgpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIHNldCBhbGwgbGF5b3V0IHBhcmFtZXRlcnMgdG8gZGVmYXVsdCB2YWx1ZXNcbiAqIGRldGVybWluZWQgYXQgY29tcGlsZSB0aW1lLlxuICovXG5MYXlvdXQucHJvdG90eXBlLmluaXRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuaXNTdWJMYXlvdXQpXG4gIHtcbiAgICB0aGlzLmxheW91dFF1YWxpdHkgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9RVUFMSVRZO1xuICAgIHRoaXMuYW5pbWF0aW9uRHVyaW5nTGF5b3V0ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX0RVUklOR19MQVlPVVQ7XG4gICAgdGhpcy5hbmltYXRpb25QZXJpb2QgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fUEVSSU9EO1xuICAgIHRoaXMuYW5pbWF0aW9uT25MYXlvdXQgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fT05fTEFZT1VUO1xuICAgIHRoaXMuaW5jcmVtZW50YWwgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9JTkNSRU1FTlRBTDtcbiAgICB0aGlzLmNyZWF0ZUJlbmRzQXNOZWVkZWQgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEO1xuICAgIHRoaXMudW5pZm9ybUxlYWZOb2RlU2l6ZXMgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VTklGT1JNX0xFQUZfTk9ERV9TSVpFUztcbiAgfVxuXG4gIGlmICh0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dClcbiAge1xuICAgIHRoaXMuYW5pbWF0aW9uT25MYXlvdXQgPSBmYWxzZTtcbiAgfVxufTtcblxuTGF5b3V0LnByb3RvdHlwZS50cmFuc2Zvcm0gPSBmdW5jdGlvbiAobmV3TGVmdFRvcCkge1xuICBpZiAobmV3TGVmdFRvcCA9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnRyYW5zZm9ybShuZXcgUG9pbnREKDAsIDApKTtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBjcmVhdGUgYSB0cmFuc2Zvcm1hdGlvbiBvYmplY3QgKGZyb20gRWNsaXBzZSB0byBsYXlvdXQpLiBXaGVuIGFuXG4gICAgLy8gaW52ZXJzZSB0cmFuc2Zvcm0gaXMgYXBwbGllZCwgd2UgZ2V0IHVwcGVyLWxlZnQgY29vcmRpbmF0ZSBvZiB0aGVcbiAgICAvLyBkcmF3aW5nIG9yIHRoZSByb290IGdyYXBoIGF0IGdpdmVuIGlucHV0IGNvb3JkaW5hdGUgKHNvbWUgbWFyZ2luc1xuICAgIC8vIGFscmVhZHkgaW5jbHVkZWQgaW4gY2FsY3VsYXRpb24gb2YgbGVmdC10b3ApLlxuXG4gICAgdmFyIHRyYW5zID0gbmV3IFRyYW5zZm9ybSgpO1xuICAgIHZhciBsZWZ0VG9wID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLnVwZGF0ZUxlZnRUb3AoKTtcblxuICAgIGlmIChsZWZ0VG9wICE9IG51bGwpXG4gICAge1xuICAgICAgdHJhbnMuc2V0V29ybGRPcmdYKG5ld0xlZnRUb3AueCk7XG4gICAgICB0cmFucy5zZXRXb3JsZE9yZ1kobmV3TGVmdFRvcC55KTtcblxuICAgICAgdHJhbnMuc2V0RGV2aWNlT3JnWChsZWZ0VG9wLngpO1xuICAgICAgdHJhbnMuc2V0RGV2aWNlT3JnWShsZWZ0VG9wLnkpO1xuXG4gICAgICB2YXIgbm9kZXMgPSB0aGlzLmdldEFsbE5vZGVzKCk7XG4gICAgICB2YXIgbm9kZTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKylcbiAgICAgIHtcbiAgICAgICAgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBub2RlLnRyYW5zZm9ybSh0cmFucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLnBvc2l0aW9uTm9kZXNSYW5kb21seSA9IGZ1bmN0aW9uIChncmFwaCkge1xuXG4gIGlmIChncmFwaCA9PSB1bmRlZmluZWQpIHtcbiAgICAvL2Fzc2VydCAhdGhpcy5pbmNyZW1lbnRhbDtcbiAgICB0aGlzLnBvc2l0aW9uTm9kZXNSYW5kb21seSh0aGlzLmdldEdyYXBoTWFuYWdlcigpLmdldFJvb3QoKSk7XG4gICAgdGhpcy5nZXRHcmFwaE1hbmFnZXIoKS5nZXRSb290KCkudXBkYXRlQm91bmRzKHRydWUpO1xuICB9XG4gIGVsc2Uge1xuICAgIHZhciBsTm9kZTtcbiAgICB2YXIgY2hpbGRHcmFwaDtcblxuICAgIHZhciBub2RlcyA9IGdyYXBoLmdldE5vZGVzKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBsTm9kZSA9IG5vZGVzW2ldO1xuICAgICAgY2hpbGRHcmFwaCA9IGxOb2RlLmdldENoaWxkKCk7XG5cbiAgICAgIGlmIChjaGlsZEdyYXBoID09IG51bGwpXG4gICAgICB7XG4gICAgICAgIGxOb2RlLnNjYXR0ZXIoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGNoaWxkR3JhcGguZ2V0Tm9kZXMoKS5sZW5ndGggPT0gMClcbiAgICAgIHtcbiAgICAgICAgbE5vZGUuc2NhdHRlcigpO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICB0aGlzLnBvc2l0aW9uTm9kZXNSYW5kb21seShjaGlsZEdyYXBoKTtcbiAgICAgICAgbE5vZGUudXBkYXRlQm91bmRzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBsaXN0IG9mIHRyZWVzIHdoZXJlIGVhY2ggdHJlZSBpcyByZXByZXNlbnRlZCBhcyBhXG4gKiBsaXN0IG9mIGwtbm9kZXMuIFRoZSBtZXRob2QgcmV0dXJucyBhIGxpc3Qgb2Ygc2l6ZSAwIHdoZW46XG4gKiAtIFRoZSBncmFwaCBpcyBub3QgZmxhdCBvclxuICogLSBPbmUgb2YgdGhlIGNvbXBvbmVudChzKSBvZiB0aGUgZ3JhcGggaXMgbm90IGEgdHJlZS5cbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5nZXRGbGF0Rm9yZXN0ID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIGZsYXRGb3Jlc3QgPSBbXTtcbiAgdmFyIGlzRm9yZXN0ID0gdHJ1ZTtcblxuICAvLyBRdWljayByZWZlcmVuY2UgZm9yIGFsbCBub2RlcyBpbiB0aGUgZ3JhcGggbWFuYWdlciBhc3NvY2lhdGVkIHdpdGhcbiAgLy8gdGhpcyBsYXlvdXQuIFRoZSBsaXN0IHNob3VsZCBub3QgYmUgY2hhbmdlZC5cbiAgdmFyIGFsbE5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldE5vZGVzKCk7XG5cbiAgLy8gRmlyc3QgYmUgc3VyZSB0aGF0IHRoZSBncmFwaCBpcyBmbGF0XG4gIHZhciBpc0ZsYXQgPSB0cnVlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTm9kZXMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICBpZiAoYWxsTm9kZXNbaV0uZ2V0Q2hpbGQoKSAhPSBudWxsKVxuICAgIHtcbiAgICAgIGlzRmxhdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybiBlbXB0eSBmb3Jlc3QgaWYgdGhlIGdyYXBoIGlzIG5vdCBmbGF0LlxuICBpZiAoIWlzRmxhdClcbiAge1xuICAgIHJldHVybiBmbGF0Rm9yZXN0O1xuICB9XG5cbiAgLy8gUnVuIEJGUyBmb3IgZWFjaCBjb21wb25lbnQgb2YgdGhlIGdyYXBoLlxuXG4gIHZhciB2aXNpdGVkID0gbmV3IEhhc2hTZXQoKTtcbiAgdmFyIHRvQmVWaXNpdGVkID0gW107XG4gIHZhciBwYXJlbnRzID0gbmV3IEhhc2hNYXAoKTtcbiAgdmFyIHVuUHJvY2Vzc2VkTm9kZXMgPSBbXTtcblxuICB1blByb2Nlc3NlZE5vZGVzID0gdW5Qcm9jZXNzZWROb2Rlcy5jb25jYXQoYWxsTm9kZXMpO1xuXG4gIC8vIEVhY2ggaXRlcmF0aW9uIG9mIHRoaXMgbG9vcCBmaW5kcyBhIGNvbXBvbmVudCBvZiB0aGUgZ3JhcGggYW5kXG4gIC8vIGRlY2lkZXMgd2hldGhlciBpdCBpcyBhIHRyZWUgb3Igbm90LiBJZiBpdCBpcyBhIHRyZWUsIGFkZHMgaXQgdG8gdGhlXG4gIC8vIGZvcmVzdCBhbmQgY29udGludWVkIHdpdGggdGhlIG5leHQgY29tcG9uZW50LlxuXG4gIHdoaWxlICh1blByb2Nlc3NlZE5vZGVzLmxlbmd0aCA+IDAgJiYgaXNGb3Jlc3QpXG4gIHtcbiAgICB0b0JlVmlzaXRlZC5wdXNoKHVuUHJvY2Vzc2VkTm9kZXNbMF0pO1xuXG4gICAgLy8gU3RhcnQgdGhlIEJGUy4gRWFjaCBpdGVyYXRpb24gb2YgdGhpcyBsb29wIHZpc2l0cyBhIG5vZGUgaW4gYVxuICAgIC8vIEJGUyBtYW5uZXIuXG4gICAgd2hpbGUgKHRvQmVWaXNpdGVkLmxlbmd0aCA+IDAgJiYgaXNGb3Jlc3QpXG4gICAge1xuICAgICAgLy9wb29sIG9wZXJhdGlvblxuICAgICAgdmFyIGN1cnJlbnROb2RlID0gdG9CZVZpc2l0ZWRbMF07XG4gICAgICB0b0JlVmlzaXRlZC5zcGxpY2UoMCwgMSk7XG4gICAgICB2aXNpdGVkLmFkZChjdXJyZW50Tm9kZSk7XG5cbiAgICAgIC8vIFRyYXZlcnNlIGFsbCBuZWlnaGJvcnMgb2YgdGhpcyBub2RlXG4gICAgICB2YXIgbmVpZ2hib3JFZGdlcyA9IGN1cnJlbnROb2RlLmdldEVkZ2VzKCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmVpZ2hib3JFZGdlcy5sZW5ndGg7IGkrKylcbiAgICAgIHtcbiAgICAgICAgdmFyIGN1cnJlbnROZWlnaGJvciA9XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JFZGdlc1tpXS5nZXRPdGhlckVuZChjdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgLy8gSWYgQkZTIGlzIG5vdCBncm93aW5nIGZyb20gdGhpcyBuZWlnaGJvci5cbiAgICAgICAgaWYgKHBhcmVudHMuZ2V0KGN1cnJlbnROb2RlKSAhPSBjdXJyZW50TmVpZ2hib3IpXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBXZSBoYXZlbid0IHByZXZpb3VzbHkgdmlzaXRlZCB0aGlzIG5laWdoYm9yLlxuICAgICAgICAgIGlmICghdmlzaXRlZC5jb250YWlucyhjdXJyZW50TmVpZ2hib3IpKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRvQmVWaXNpdGVkLnB1c2goY3VycmVudE5laWdoYm9yKTtcbiAgICAgICAgICAgIHBhcmVudHMucHV0KGN1cnJlbnROZWlnaGJvciwgY3VycmVudE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBTaW5jZSB3ZSBoYXZlIHByZXZpb3VzbHkgdmlzaXRlZCB0aGlzIG5laWdoYm9yIGFuZFxuICAgICAgICAgIC8vIHRoaXMgbmVpZ2hib3IgaXMgbm90IHBhcmVudCBvZiBjdXJyZW50Tm9kZSwgZ2l2ZW5cbiAgICAgICAgICAvLyBncmFwaCBjb250YWlucyBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB0cmVlLCBoZW5jZVxuICAgICAgICAgIC8vIGl0IGlzIG5vdCBhIGZvcmVzdC5cbiAgICAgICAgICBlbHNlXG4gICAgICAgICAge1xuICAgICAgICAgICAgaXNGb3Jlc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZSBncmFwaCBjb250YWlucyBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCBhIHRyZWUuIEVtcHR5XG4gICAgLy8gcHJldmlvdXNseSBmb3VuZCB0cmVlcy4gVGhlIG1ldGhvZCB3aWxsIGVuZC5cbiAgICBpZiAoIWlzRm9yZXN0KVxuICAgIHtcbiAgICAgIGZsYXRGb3Jlc3QgPSBbXTtcbiAgICB9XG4gICAgLy8gU2F2ZSBjdXJyZW50bHkgdmlzaXRlZCBub2RlcyBhcyBhIHRyZWUgaW4gb3VyIGZvcmVzdC4gUmVzZXRcbiAgICAvLyB2aXNpdGVkIGFuZCBwYXJlbnRzIGxpc3RzLiBDb250aW51ZSB3aXRoIHRoZSBuZXh0IGNvbXBvbmVudCBvZlxuICAgIC8vIHRoZSBncmFwaCwgaWYgYW55LlxuICAgIGVsc2VcbiAgICB7XG4gICAgICB2YXIgdGVtcCA9IFtdO1xuICAgICAgdmlzaXRlZC5hZGRBbGxUbyh0ZW1wKTtcbiAgICAgIGZsYXRGb3Jlc3QucHVzaCh0ZW1wKTtcbiAgICAgIC8vZmxhdEZvcmVzdCA9IGZsYXRGb3Jlc3QuY29uY2F0KHRlbXApO1xuICAgICAgLy91blByb2Nlc3NlZE5vZGVzLnJlbW92ZUFsbCh2aXNpdGVkKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdmFsdWUgPSB0ZW1wW2ldO1xuICAgICAgICB2YXIgaW5kZXggPSB1blByb2Nlc3NlZE5vZGVzLmluZGV4T2YodmFsdWUpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgIHVuUHJvY2Vzc2VkTm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmlzaXRlZCA9IG5ldyBIYXNoU2V0KCk7XG4gICAgICBwYXJlbnRzID0gbmV3IEhhc2hNYXAoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmxhdEZvcmVzdDtcbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgY3JlYXRlcyBkdW1teSBub2RlcyAoYW4gbC1sZXZlbCBub2RlIHdpdGggbWluaW1hbCBkaW1lbnNpb25zKVxuICogZm9yIHRoZSBnaXZlbiBlZGdlIChvbmUgcGVyIGJlbmRwb2ludCkuIFRoZSBleGlzdGluZyBsLWxldmVsIHN0cnVjdHVyZVxuICogaXMgdXBkYXRlZCBhY2NvcmRpbmdseS5cbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5jcmVhdGVEdW1teU5vZGVzRm9yQmVuZHBvaW50cyA9IGZ1bmN0aW9uIChlZGdlKVxue1xuICB2YXIgZHVtbXlOb2RlcyA9IFtdO1xuICB2YXIgcHJldiA9IGVkZ2Uuc291cmNlO1xuXG4gIHZhciBncmFwaCA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmNhbGNMb3dlc3RDb21tb25BbmNlc3RvcihlZGdlLnNvdXJjZSwgZWRnZS50YXJnZXQpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWRnZS5iZW5kcG9pbnRzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgLy8gY3JlYXRlIG5ldyBkdW1teSBub2RlXG4gICAgdmFyIGR1bW15Tm9kZSA9IHRoaXMubmV3Tm9kZShudWxsKTtcbiAgICBkdW1teU5vZGUuc2V0UmVjdChuZXcgUG9pbnQoMCwgMCksIG5ldyBEaW1lbnNpb24oMSwgMSkpO1xuXG4gICAgZ3JhcGguYWRkKGR1bW15Tm9kZSk7XG5cbiAgICAvLyBjcmVhdGUgbmV3IGR1bW15IGVkZ2UgYmV0d2VlbiBwcmV2IGFuZCBkdW1teSBub2RlXG4gICAgdmFyIGR1bW15RWRnZSA9IHRoaXMubmV3RWRnZShudWxsKTtcbiAgICB0aGlzLmdyYXBoTWFuYWdlci5hZGQoZHVtbXlFZGdlLCBwcmV2LCBkdW1teU5vZGUpO1xuXG4gICAgZHVtbXlOb2Rlcy5hZGQoZHVtbXlOb2RlKTtcbiAgICBwcmV2ID0gZHVtbXlOb2RlO1xuICB9XG5cbiAgdmFyIGR1bW15RWRnZSA9IHRoaXMubmV3RWRnZShudWxsKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIuYWRkKGR1bW15RWRnZSwgcHJldiwgZWRnZS50YXJnZXQpO1xuXG4gIHRoaXMuZWRnZVRvRHVtbXlOb2Rlcy5wdXQoZWRnZSwgZHVtbXlOb2Rlcyk7XG5cbiAgLy8gcmVtb3ZlIHJlYWwgZWRnZSBmcm9tIGdyYXBoIG1hbmFnZXIgaWYgaXQgaXMgaW50ZXItZ3JhcGhcbiAgaWYgKGVkZ2UuaXNJbnRlckdyYXBoKCkpXG4gIHtcbiAgICB0aGlzLmdyYXBoTWFuYWdlci5yZW1vdmUoZWRnZSk7XG4gIH1cbiAgLy8gZWxzZSwgcmVtb3ZlIHRoZSBlZGdlIGZyb20gdGhlIGN1cnJlbnQgZ3JhcGhcbiAgZWxzZVxuICB7XG4gICAgZ3JhcGgucmVtb3ZlKGVkZ2UpO1xuICB9XG5cbiAgcmV0dXJuIGR1bW15Tm9kZXM7XG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGNyZWF0ZXMgYmVuZHBvaW50cyBmb3IgZWRnZXMgZnJvbSB0aGUgZHVtbXkgbm9kZXNcbiAqIGF0IGwtbGV2ZWwuXG4gKi9cbkxheW91dC5wcm90b3R5cGUuY3JlYXRlQmVuZHBvaW50c0Zyb21EdW1teU5vZGVzID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIGVkZ2VzID0gW107XG4gIGVkZ2VzID0gZWRnZXMuY29uY2F0KHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbEVkZ2VzKCkpO1xuICBlZGdlcyA9IHRoaXMuZWRnZVRvRHVtbXlOb2Rlcy5rZXlTZXQoKS5jb25jYXQoZWRnZXMpO1xuXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgZWRnZXMubGVuZ3RoOyBrKyspXG4gIHtcbiAgICB2YXIgbEVkZ2UgPSBlZGdlc1trXTtcblxuICAgIGlmIChsRWRnZS5iZW5kcG9pbnRzLmxlbmd0aCA+IDApXG4gICAge1xuICAgICAgdmFyIHBhdGggPSB0aGlzLmVkZ2VUb0R1bW15Tm9kZXMuZ2V0KGxFZGdlKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKVxuICAgICAge1xuICAgICAgICB2YXIgZHVtbXlOb2RlID0gcGF0aFtpXTtcbiAgICAgICAgdmFyIHAgPSBuZXcgUG9pbnREKGR1bW15Tm9kZS5nZXRDZW50ZXJYKCksXG4gICAgICAgICAgICAgICAgZHVtbXlOb2RlLmdldENlbnRlclkoKSk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGJlbmRwb2ludCdzIGxvY2F0aW9uIGFjY29yZGluZyB0byBkdW1teSBub2RlXG4gICAgICAgIHZhciBlYnAgPSBsRWRnZS5iZW5kcG9pbnRzLmdldChpKTtcbiAgICAgICAgZWJwLnggPSBwLng7XG4gICAgICAgIGVicC55ID0gcC55O1xuXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgZHVtbXkgbm9kZSwgZHVtbXkgZWRnZXMgaW5jaWRlbnQgd2l0aCB0aGlzXG4gICAgICAgIC8vIGR1bW15IG5vZGUgaXMgYWxzbyByZW1vdmVkICh3aXRoaW4gdGhlIHJlbW92ZSBtZXRob2QpXG4gICAgICAgIGR1bW15Tm9kZS5nZXRPd25lcigpLnJlbW92ZShkdW1teU5vZGUpO1xuICAgICAgfVxuXG4gICAgICAvLyBhZGQgdGhlIHJlYWwgZWRnZSB0byBncmFwaFxuICAgICAgdGhpcy5ncmFwaE1hbmFnZXIuYWRkKGxFZGdlLCBsRWRnZS5zb3VyY2UsIGxFZGdlLnRhcmdldCk7XG4gICAgfVxuICB9XG59O1xuXG5MYXlvdXQudHJhbnNmb3JtID0gZnVuY3Rpb24gKHNsaWRlclZhbHVlLCBkZWZhdWx0VmFsdWUsIG1pbkRpdiwgbWF4TXVsKSB7XG4gIGlmIChtaW5EaXYgIT0gdW5kZWZpbmVkICYmIG1heE11bCAhPSB1bmRlZmluZWQpIHtcbiAgICB2YXIgdmFsdWUgPSBkZWZhdWx0VmFsdWU7XG5cbiAgICBpZiAoc2xpZGVyVmFsdWUgPD0gNTApXG4gICAge1xuICAgICAgdmFyIG1pblZhbHVlID0gZGVmYXVsdFZhbHVlIC8gbWluRGl2O1xuICAgICAgdmFsdWUgLT0gKChkZWZhdWx0VmFsdWUgLSBtaW5WYWx1ZSkgLyA1MCkgKiAoNTAgLSBzbGlkZXJWYWx1ZSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICB2YXIgbWF4VmFsdWUgPSBkZWZhdWx0VmFsdWUgKiBtYXhNdWw7XG4gICAgICB2YWx1ZSArPSAoKG1heFZhbHVlIC0gZGVmYXVsdFZhbHVlKSAvIDUwKSAqIChzbGlkZXJWYWx1ZSAtIDUwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgZWxzZSB7XG4gICAgdmFyIGEsIGI7XG5cbiAgICBpZiAoc2xpZGVyVmFsdWUgPD0gNTApXG4gICAge1xuICAgICAgYSA9IDkuMCAqIGRlZmF1bHRWYWx1ZSAvIDUwMC4wO1xuICAgICAgYiA9IGRlZmF1bHRWYWx1ZSAvIDEwLjA7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICBhID0gOS4wICogZGVmYXVsdFZhbHVlIC8gNTAuMDtcbiAgICAgIGIgPSAtOCAqIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKGEgKiBzbGlkZXJWYWx1ZSArIGIpO1xuICB9XG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGZpbmRzIGFuZCByZXR1cm5zIHRoZSBjZW50ZXIgb2YgdGhlIGdpdmVuIG5vZGVzLCBhc3N1bWluZ1xuICogdGhhdCB0aGUgZ2l2ZW4gbm9kZXMgZm9ybSBhIHRyZWUgaW4gdGhlbXNlbHZlcy5cbiAqL1xuTGF5b3V0LmZpbmRDZW50ZXJPZlRyZWUgPSBmdW5jdGlvbiAobm9kZXMpXG57XG4gIHZhciBsaXN0ID0gW107XG4gIGxpc3QgPSBsaXN0LmNvbmNhdChub2Rlcyk7XG5cbiAgdmFyIHJlbW92ZWROb2RlcyA9IFtdO1xuICB2YXIgcmVtYWluaW5nRGVncmVlcyA9IG5ldyBIYXNoTWFwKCk7XG4gIHZhciBmb3VuZENlbnRlciA9IGZhbHNlO1xuICB2YXIgY2VudGVyTm9kZSA9IG51bGw7XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09IDEgfHwgbGlzdC5sZW5ndGggPT0gMilcbiAge1xuICAgIGZvdW5kQ2VudGVyID0gdHJ1ZTtcbiAgICBjZW50ZXJOb2RlID0gbGlzdFswXTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKylcbiAge1xuICAgIHZhciBub2RlID0gbGlzdFtpXTtcbiAgICB2YXIgZGVncmVlID0gbm9kZS5nZXROZWlnaGJvcnNMaXN0KCkuc2l6ZSgpO1xuICAgIHJlbWFpbmluZ0RlZ3JlZXMucHV0KG5vZGUsIG5vZGUuZ2V0TmVpZ2hib3JzTGlzdCgpLnNpemUoKSk7XG5cbiAgICBpZiAoZGVncmVlID09IDEpXG4gICAge1xuICAgICAgcmVtb3ZlZE5vZGVzLnB1c2gobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHRlbXBMaXN0ID0gW107XG4gIHRlbXBMaXN0ID0gdGVtcExpc3QuY29uY2F0KHJlbW92ZWROb2Rlcyk7XG5cbiAgd2hpbGUgKCFmb3VuZENlbnRlcilcbiAge1xuICAgIHZhciB0ZW1wTGlzdDIgPSBbXTtcbiAgICB0ZW1wTGlzdDIgPSB0ZW1wTGlzdDIuY29uY2F0KHRlbXBMaXN0KTtcbiAgICB0ZW1wTGlzdCA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIHZhciBub2RlID0gbGlzdFtpXTtcblxuICAgICAgdmFyIGluZGV4ID0gbGlzdC5pbmRleE9mKG5vZGUpO1xuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmVpZ2hib3VycyA9IG5vZGUuZ2V0TmVpZ2hib3JzTGlzdCgpO1xuXG4gICAgICBPYmplY3Qua2V5cyhuZWlnaGJvdXJzLnNldCkuZm9yRWFjaChmdW5jdGlvbihqKSB7XG4gICAgICAgIHZhciBuZWlnaGJvdXIgPSBuZWlnaGJvdXJzLnNldFtqXTtcbiAgICAgICAgaWYgKHJlbW92ZWROb2Rlcy5pbmRleE9mKG5laWdoYm91cikgPCAwKVxuICAgICAgICB7XG4gICAgICAgICAgdmFyIG90aGVyRGVncmVlID0gcmVtYWluaW5nRGVncmVlcy5nZXQobmVpZ2hib3VyKTtcbiAgICAgICAgICB2YXIgbmV3RGVncmVlID0gb3RoZXJEZWdyZWUgLSAxO1xuXG4gICAgICAgICAgaWYgKG5ld0RlZ3JlZSA9PSAxKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRlbXBMaXN0LnB1c2gobmVpZ2hib3VyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZW1haW5pbmdEZWdyZWVzLnB1dChuZWlnaGJvdXIsIG5ld0RlZ3JlZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbW92ZWROb2RlcyA9IHJlbW92ZWROb2Rlcy5jb25jYXQodGVtcExpc3QpO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09IDEgfHwgbGlzdC5sZW5ndGggPT0gMilcbiAgICB7XG4gICAgICBmb3VuZENlbnRlciA9IHRydWU7XG4gICAgICBjZW50ZXJOb2RlID0gbGlzdFswXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2VudGVyTm9kZTtcbn07XG5cbi8qKlxuICogRHVyaW5nIHRoZSBjb2Fyc2VuaW5nIHByb2Nlc3MsIHRoaXMgbGF5b3V0IG1heSBiZSByZWZlcmVuY2VkIGJ5IHR3byBncmFwaCBtYW5hZ2Vyc1xuICogdGhpcyBzZXR0ZXIgZnVuY3Rpb24gZ3JhbnRzIGFjY2VzcyB0byBjaGFuZ2UgdGhlIGN1cnJlbnRseSBiZWluZyB1c2VkIGdyYXBoIG1hbmFnZXJcbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5zZXRHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoZ20pXG57XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyID0gZ207XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExheW91dDtcbiIsImZ1bmN0aW9uIExheW91dENvbnN0YW50cygpIHtcbn1cblxuLyoqXG4gKiBMYXlvdXQgUXVhbGl0eVxuICovXG5MYXlvdXRDb25zdGFudHMuUFJPT0ZfUVVBTElUWSA9IDA7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9RVUFMSVRZID0gMTtcbkxheW91dENvbnN0YW50cy5EUkFGVF9RVUFMSVRZID0gMjtcblxuLyoqXG4gKiBEZWZhdWx0IHBhcmFtZXRlcnNcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ1JFQVRFX0JFTkRTX0FTX05FRURFRCA9IGZhbHNlO1xuLy9MYXlvdXRDb25zdGFudHMuREVGQVVMVF9JTkNSRU1FTlRBTCA9IHRydWU7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9JTkNSRU1FTlRBTCA9IGZhbHNlO1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVCA9IHRydWU7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fRFVSSU5HX0xBWU9VVCA9IGZhbHNlO1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRCA9IDUwO1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVU5JRk9STV9MRUFGX05PREVfU0laRVMgPSBmYWxzZTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IEdlbmVyYWwgb3RoZXIgY29uc3RhbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLypcbiAqIE1hcmdpbnMgb2YgYSBncmFwaCB0byBiZSBhcHBsaWVkIG9uIGJvdWRpbmcgcmVjdGFuZ2xlIG9mIGl0cyBjb250ZW50cy4gV2VcbiAqIGFzc3VtZSBtYXJnaW5zIG9uIGFsbCBmb3VyIHNpZGVzIHRvIGJlIHVuaWZvcm0uXG4gKi9cbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVBIX01BUkdJTiA9IDE1O1xuXG4vKlxuICogV2hldGhlciB0byBjb25zaWRlciBsYWJlbHMgaW4gbm9kZSBkaW1lbnNpb25zIG9yIG5vdFxuICovXG5MYXlvdXRDb25zdGFudHMuTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTID0gZmFsc2U7XG5cbi8qXG4gKiBEZWZhdWx0IGRpbWVuc2lvbiBvZiBhIG5vbi1jb21wb3VuZCBub2RlLlxuICovXG5MYXlvdXRDb25zdGFudHMuU0lNUExFX05PREVfU0laRSA9IDQwO1xuXG4vKlxuICogRGVmYXVsdCBkaW1lbnNpb24gb2YgYSBub24tY29tcG91bmQgbm9kZS5cbiAqL1xuTGF5b3V0Q29uc3RhbnRzLlNJTVBMRV9OT0RFX0hBTEZfU0laRSA9IExheW91dENvbnN0YW50cy5TSU1QTEVfTk9ERV9TSVpFIC8gMjtcblxuLypcbiAqIEVtcHR5IGNvbXBvdW5kIG5vZGUgc2l6ZS4gV2hlbiBhIGNvbXBvdW5kIG5vZGUgaXMgZW1wdHksIGl0cyBib3RoXG4gKiBkaW1lbnNpb25zIHNob3VsZCBiZSBvZiB0aGlzIHZhbHVlLlxuICovXG5MYXlvdXRDb25zdGFudHMuRU1QVFlfQ09NUE9VTkRfTk9ERV9TSVpFID0gNDA7XG5cbi8qXG4gKiBNaW5pbXVtIGxlbmd0aCB0aGF0IGFuIGVkZ2Ugc2hvdWxkIHRha2UgZHVyaW5nIGxheW91dFxuICovXG5MYXlvdXRDb25zdGFudHMuTUlOX0VER0VfTEVOR1RIID0gMTtcblxuLypcbiAqIFdvcmxkIGJvdW5kYXJpZXMgdGhhdCBsYXlvdXQgb3BlcmF0ZXMgb25cbiAqL1xuTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZID0gMTAwMDAwMDtcblxuLypcbiAqIFdvcmxkIGJvdW5kYXJpZXMgdGhhdCByYW5kb20gcG9zaXRpb25pbmcgY2FuIGJlIHBlcmZvcm1lZCB3aXRoXG4gKi9cbkxheW91dENvbnN0YW50cy5JTklUSUFMX1dPUkxEX0JPVU5EQVJZID0gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZIC8gMTAwMDtcblxuLypcbiAqIENvb3JkaW5hdGVzIG9mIHRoZSB3b3JsZCBjZW50ZXJcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLldPUkxEX0NFTlRFUl9YID0gMTIwMDtcbkxheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWSA9IDkwMDtcblxubW9kdWxlLmV4cG9ydHMgPSBMYXlvdXRDb25zdGFudHM7XG4iLCJjb25zdCBub2RlRnJvbSA9IHZhbHVlID0+ICh7IHZhbHVlLCBuZXh0OiBudWxsLCBwcmV2OiBudWxsIH0pO1xuXG5jb25zdCBhZGQgPSAoIHByZXYsIG5vZGUsIG5leHQsIGxpc3QgKSA9PiB7XG4gIGlmKCBwcmV2ICE9PSBudWxsICl7XG4gICAgcHJldi5uZXh0ID0gbm9kZTtcbiAgfSBlbHNlIHtcbiAgICBsaXN0LmhlYWQgPSBub2RlO1xuICB9XG5cbiAgaWYoIG5leHQgIT09IG51bGwgKXtcbiAgICBuZXh0LnByZXYgPSBub2RlO1xuICB9IGVsc2Uge1xuICAgIGxpc3QudGFpbCA9IG5vZGU7XG4gIH1cblxuICBub2RlLnByZXYgPSBwcmV2O1xuICBub2RlLm5leHQgPSBuZXh0O1xuXG4gIGxpc3QubGVuZ3RoKys7XG5cbiAgcmV0dXJuIG5vZGU7XG59O1xuXG5jb25zdCByZW1vdmUgPSAoIG5vZGUsIGxpc3QgKSA9PiB7XG4gIGxldCB7IHByZXYsIG5leHQgfSA9IG5vZGU7XG5cbiAgaWYoIHByZXYgIT09IG51bGwgKXtcbiAgICBwcmV2Lm5leHQgPSBuZXh0O1xuICB9IGVsc2Uge1xuICAgIGxpc3QuaGVhZCA9IG5leHQ7XG4gIH1cblxuICBpZiggbmV4dCAhPT0gbnVsbCApe1xuICAgIG5leHQucHJldiA9IHByZXY7XG4gIH0gZWxzZSB7XG4gICAgbGlzdC50YWlsID0gcHJldjtcbiAgfVxuXG4gIG5vZGUucHJldiA9IG5vZGUubmV4dCA9IG51bGw7XG5cbiAgbGlzdC5sZW5ndGgtLTtcblxuICByZXR1cm4gbm9kZTtcbn07XG5cbmNsYXNzIExpbmtlZExpc3Qge1xuICBjb25zdHJ1Y3RvciggdmFscyApe1xuICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmhlYWQgPSBudWxsO1xuICAgIHRoaXMudGFpbCA9IG51bGw7XG5cbiAgICBpZiggdmFscyAhPSBudWxsICl7XG4gICAgICB2YWxzLmZvckVhY2goIHYgPT4gdGhpcy5wdXNoKHYpICk7XG4gICAgfVxuICB9XG5cbiAgc2l6ZSgpe1xuICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgfVxuXG4gIGluc2VydEJlZm9yZSggdmFsLCBvdGhlck5vZGUgKXtcbiAgICByZXR1cm4gYWRkKCBvdGhlck5vZGUucHJldiwgbm9kZUZyb20odmFsKSwgb3RoZXJOb2RlLCB0aGlzICk7XG4gIH1cblxuICBpbnNlcnRBZnRlciggdmFsLCBvdGhlck5vZGUgKXtcbiAgICByZXR1cm4gYWRkKCBvdGhlck5vZGUsIG5vZGVGcm9tKHZhbCksIG90aGVyTm9kZS5uZXh0LCB0aGlzICk7XG4gIH1cblxuICBpbnNlcnROb2RlQmVmb3JlKCBuZXdOb2RlLCBvdGhlck5vZGUgKXtcbiAgICByZXR1cm4gYWRkKCBvdGhlck5vZGUucHJldiwgbmV3Tm9kZSwgb3RoZXJOb2RlLCB0aGlzICk7XG4gIH1cblxuICBpbnNlcnROb2RlQWZ0ZXIoIG5ld05vZGUsIG90aGVyTm9kZSApe1xuICAgIHJldHVybiBhZGQoIG90aGVyTm9kZSwgbmV3Tm9kZSwgb3RoZXJOb2RlLm5leHQsIHRoaXMgKTtcbiAgfVxuXG4gIHB1c2goIHZhbCApe1xuICAgIHJldHVybiBhZGQoIHRoaXMudGFpbCwgbm9kZUZyb20odmFsKSwgbnVsbCwgdGhpcyApO1xuICB9XG5cbiAgdW5zaGlmdCggdmFsICl7XG4gICAgcmV0dXJuIGFkZCggbnVsbCwgbm9kZUZyb20odmFsKSwgdGhpcy5oZWFkLCB0aGlzICk7XG4gIH1cblxuICByZW1vdmUoIG5vZGUgKXtcbiAgICByZXR1cm4gcmVtb3ZlKCBub2RlLCB0aGlzICk7XG4gIH1cblxuICBwb3AoKXtcbiAgICByZXR1cm4gcmVtb3ZlKCB0aGlzLnRhaWwsIHRoaXMgKS52YWx1ZTtcbiAgfVxuXG4gIHBvcE5vZGUoKXtcbiAgICAgcmV0dXJuIHJlbW92ZSggdGhpcy50YWlsLCB0aGlzICk7XG4gIH1cblxuICBzaGlmdCgpe1xuICAgIHJldHVybiByZW1vdmUoIHRoaXMuaGVhZCwgdGhpcyApLnZhbHVlO1xuICB9XG5cbiAgc2hpZnROb2RlKCl7XG4gICAgcmV0dXJuIHJlbW92ZSggdGhpcy5oZWFkLCB0aGlzICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rZWRMaXN0O1xuIiwiLypcbiAqVGhpcyBjbGFzcyBpcyB0aGUgamF2YXNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUG9pbnQuamF2YSBjbGFzcyBpbiBqZGtcbiAqL1xuZnVuY3Rpb24gUG9pbnQoeCwgeSwgcCkge1xuICB0aGlzLnggPSBudWxsO1xuICB0aGlzLnkgPSBudWxsO1xuICBpZiAoeCA9PSBudWxsICYmIHkgPT0gbnVsbCAmJiBwID09IG51bGwpIHtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIHggPT0gJ251bWJlcicgJiYgdHlwZW9mIHkgPT0gJ251bWJlcicgJiYgcCA9PSBudWxsKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG4gIGVsc2UgaWYgKHguY29uc3RydWN0b3IubmFtZSA9PSAnUG9pbnQnICYmIHkgPT0gbnVsbCAmJiBwID09IG51bGwpIHtcbiAgICBwID0geDtcbiAgICB0aGlzLnggPSBwLng7XG4gICAgdGhpcy55ID0gcC55O1xuICB9XG59XG5cblBvaW50LnByb3RvdHlwZS5nZXRYID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy54O1xufVxuXG5Qb2ludC5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMueTtcbn1cblxuUG9pbnQucHJvdG90eXBlLmdldExvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTtcbn1cblxuUG9pbnQucHJvdG90eXBlLnNldExvY2F0aW9uID0gZnVuY3Rpb24gKHgsIHksIHApIHtcbiAgaWYgKHguY29uc3RydWN0b3IubmFtZSA9PSAnUG9pbnQnICYmIHkgPT0gbnVsbCAmJiBwID09IG51bGwpIHtcbiAgICBwID0geDtcbiAgICB0aGlzLnNldExvY2F0aW9uKHAueCwgcC55KTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgeCA9PSAnbnVtYmVyJyAmJiB0eXBlb2YgeSA9PSAnbnVtYmVyJyAmJiBwID09IG51bGwpIHtcbiAgICAvL2lmIGJvdGggcGFyYW1ldGVycyBhcmUgaW50ZWdlciBqdXN0IG1vdmUgKHgseSkgbG9jYXRpb25cbiAgICBpZiAocGFyc2VJbnQoeCkgPT0geCAmJiBwYXJzZUludCh5KSA9PSB5KSB7XG4gICAgICB0aGlzLm1vdmUoeCwgeSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcih4ICsgMC41KTtcbiAgICAgIHRoaXMueSA9IE1hdGguZmxvb3IoeSArIDAuNSk7XG4gICAgfVxuICB9XG59XG5cblBvaW50LnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgdGhpcy54ID0geDtcbiAgdGhpcy55ID0geTtcbn1cblxuUG9pbnQucHJvdG90eXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uIChkeCwgZHkpIHtcbiAgdGhpcy54ICs9IGR4O1xuICB0aGlzLnkgKz0gZHk7XG59XG5cblBvaW50LnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmIChvYmouY29uc3RydWN0b3IubmFtZSA9PSBcIlBvaW50XCIpIHtcbiAgICB2YXIgcHQgPSBvYmo7XG4gICAgcmV0dXJuICh0aGlzLnggPT0gcHQueCkgJiYgKHRoaXMueSA9PSBwdC55KTtcbiAgfVxuICByZXR1cm4gdGhpcyA9PSBvYmo7XG59XG5cblBvaW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCgpLmNvbnN0cnVjdG9yLm5hbWUgKyBcIlt4PVwiICsgdGhpcy54ICsgXCIseT1cIiArIHRoaXMueSArIFwiXVwiO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50O1xuIiwiZnVuY3Rpb24gUG9pbnREKHgsIHkpIHtcbiAgaWYgKHggPT0gbnVsbCAmJiB5ID09IG51bGwpIHtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG59XG5cblBvaW50RC5wcm90b3R5cGUuZ2V0WCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLng7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLmdldFkgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy55O1xufTtcblxuUG9pbnRELnByb3RvdHlwZS5zZXRYID0gZnVuY3Rpb24gKHgpXG57XG4gIHRoaXMueCA9IHg7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLnNldFkgPSBmdW5jdGlvbiAoeSlcbntcbiAgdGhpcy55ID0geTtcbn07XG5cblBvaW50RC5wcm90b3R5cGUuZ2V0RGlmZmVyZW5jZSA9IGZ1bmN0aW9uIChwdClcbntcbiAgcmV0dXJuIG5ldyBEaW1lbnNpb25EKHRoaXMueCAtIHB0LngsIHRoaXMueSAtIHB0LnkpO1xufTtcblxuUG9pbnRELnByb3RvdHlwZS5nZXRDb3B5ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIG5ldyBQb2ludEQodGhpcy54LCB0aGlzLnkpO1xufTtcblxuUG9pbnRELnByb3RvdHlwZS50cmFuc2xhdGUgPSBmdW5jdGlvbiAoZGltKVxue1xuICB0aGlzLnggKz0gZGltLndpZHRoO1xuICB0aGlzLnkgKz0gZGltLmhlaWdodDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50RDtcbiIsImZ1bmN0aW9uIFJhbmRvbVNlZWQoKSB7XG59XG5SYW5kb21TZWVkLnNlZWQgPSAxO1xuUmFuZG9tU2VlZC54ID0gMDtcblxuUmFuZG9tU2VlZC5uZXh0RG91YmxlID0gZnVuY3Rpb24gKCkge1xuICBSYW5kb21TZWVkLnggPSBNYXRoLnNpbihSYW5kb21TZWVkLnNlZWQrKykgKiAxMDAwMDtcbiAgcmV0dXJuIFJhbmRvbVNlZWQueCAtIE1hdGguZmxvb3IoUmFuZG9tU2VlZC54KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmFuZG9tU2VlZDtcbiIsImZ1bmN0aW9uIFJlY3RhbmdsZUQoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICB0aGlzLnggPSAwO1xuICB0aGlzLnkgPSAwO1xuICB0aGlzLndpZHRoID0gMDtcbiAgdGhpcy5oZWlnaHQgPSAwO1xuXG4gIGlmICh4ICE9IG51bGwgJiYgeSAhPSBudWxsICYmIHdpZHRoICE9IG51bGwgJiYgaGVpZ2h0ICE9IG51bGwpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG59XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy54O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0WCA9IGZ1bmN0aW9uICh4KVxue1xuICB0aGlzLnggPSB4O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnk7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5zZXRZID0gZnVuY3Rpb24gKHkpXG57XG4gIHRoaXMueSA9IHk7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLndpZHRoO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0V2lkdGggPSBmdW5jdGlvbiAod2lkdGgpXG57XG4gIHRoaXMud2lkdGggPSB3aWR0aDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmhlaWdodDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uIChoZWlnaHQpXG57XG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0UmlnaHQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldEJvdHRvbSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmludGVyc2VjdHMgPSBmdW5jdGlvbiAoYSlcbntcbiAgaWYgKHRoaXMuZ2V0UmlnaHQoKSA8IGEueClcbiAge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0aGlzLmdldEJvdHRvbSgpIDwgYS55KVxuICB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGEuZ2V0UmlnaHQoKSA8IHRoaXMueClcbiAge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChhLmdldEJvdHRvbSgpIDwgdGhpcy55KVxuICB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRDZW50ZXJYID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGggLyAyO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0TWluWCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmdldFgoKTtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldE1heFggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5nZXRYKCkgKyB0aGlzLndpZHRoO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0Q2VudGVyWSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodCAvIDI7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRNaW5ZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuZ2V0WSgpO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0TWF4WSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmdldFkoKSArIHRoaXMuaGVpZ2h0O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0V2lkdGhIYWxmID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMud2lkdGggLyAyO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0SGVpZ2h0SGFsZiA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmhlaWdodCAvIDI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlY3RhbmdsZUQ7XG4iLCJ2YXIgUG9pbnREID0gcmVxdWlyZSgnLi9Qb2ludEQnKTtcblxuZnVuY3Rpb24gVHJhbnNmb3JtKHgsIHkpIHtcbiAgdGhpcy5sd29ybGRPcmdYID0gMC4wO1xuICB0aGlzLmx3b3JsZE9yZ1kgPSAwLjA7XG4gIHRoaXMubGRldmljZU9yZ1ggPSAwLjA7XG4gIHRoaXMubGRldmljZU9yZ1kgPSAwLjA7XG4gIHRoaXMubHdvcmxkRXh0WCA9IDEuMDtcbiAgdGhpcy5sd29ybGRFeHRZID0gMS4wO1xuICB0aGlzLmxkZXZpY2VFeHRYID0gMS4wO1xuICB0aGlzLmxkZXZpY2VFeHRZID0gMS4wO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldFdvcmxkT3JnWCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmx3b3JsZE9yZ1g7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0V29ybGRPcmdYID0gZnVuY3Rpb24gKHdveClcbntcbiAgdGhpcy5sd29ybGRPcmdYID0gd294O1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldFdvcmxkT3JnWSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmx3b3JsZE9yZ1k7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0V29ybGRPcmdZID0gZnVuY3Rpb24gKHdveSlcbntcbiAgdGhpcy5sd29ybGRPcmdZID0gd295O1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldFdvcmxkRXh0WCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmx3b3JsZEV4dFg7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0V29ybGRFeHRYID0gZnVuY3Rpb24gKHdleClcbntcbiAgdGhpcy5sd29ybGRFeHRYID0gd2V4O1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldFdvcmxkRXh0WSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmx3b3JsZEV4dFk7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0V29ybGRFeHRZID0gZnVuY3Rpb24gKHdleSlcbntcbiAgdGhpcy5sd29ybGRFeHRZID0gd2V5O1xufVxuXG4vKiBEZXZpY2UgcmVsYXRlZCAqL1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldERldmljZU9yZ1ggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sZGV2aWNlT3JnWDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXREZXZpY2VPcmdYID0gZnVuY3Rpb24gKGRveClcbntcbiAgdGhpcy5sZGV2aWNlT3JnWCA9IGRveDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VPcmdZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubGRldmljZU9yZ1k7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0RGV2aWNlT3JnWSA9IGZ1bmN0aW9uIChkb3kpXG57XG4gIHRoaXMubGRldmljZU9yZ1kgPSBkb3k7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0RGV2aWNlRXh0WCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmxkZXZpY2VFeHRYO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZUV4dFggPSBmdW5jdGlvbiAoZGV4KVxue1xuICB0aGlzLmxkZXZpY2VFeHRYID0gZGV4O1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldERldmljZUV4dFkgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sZGV2aWNlRXh0WTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXREZXZpY2VFeHRZID0gZnVuY3Rpb24gKGRleSlcbntcbiAgdGhpcy5sZGV2aWNlRXh0WSA9IGRleTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS50cmFuc2Zvcm1YID0gZnVuY3Rpb24gKHgpXG57XG4gIHZhciB4RGV2aWNlID0gMC4wO1xuICB2YXIgd29ybGRFeHRYID0gdGhpcy5sd29ybGRFeHRYO1xuICBpZiAod29ybGRFeHRYICE9IDAuMClcbiAge1xuICAgIHhEZXZpY2UgPSB0aGlzLmxkZXZpY2VPcmdYICtcbiAgICAgICAgICAgICgoeCAtIHRoaXMubHdvcmxkT3JnWCkgKiB0aGlzLmxkZXZpY2VFeHRYIC8gd29ybGRFeHRYKTtcbiAgfVxuXG4gIHJldHVybiB4RGV2aWNlO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnRyYW5zZm9ybVkgPSBmdW5jdGlvbiAoeSlcbntcbiAgdmFyIHlEZXZpY2UgPSAwLjA7XG4gIHZhciB3b3JsZEV4dFkgPSB0aGlzLmx3b3JsZEV4dFk7XG4gIGlmICh3b3JsZEV4dFkgIT0gMC4wKVxuICB7XG4gICAgeURldmljZSA9IHRoaXMubGRldmljZU9yZ1kgK1xuICAgICAgICAgICAgKCh5IC0gdGhpcy5sd29ybGRPcmdZKSAqIHRoaXMubGRldmljZUV4dFkgLyB3b3JsZEV4dFkpO1xuICB9XG5cblxuICByZXR1cm4geURldmljZTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtWCA9IGZ1bmN0aW9uICh4KVxue1xuICB2YXIgeFdvcmxkID0gMC4wO1xuICB2YXIgZGV2aWNlRXh0WCA9IHRoaXMubGRldmljZUV4dFg7XG4gIGlmIChkZXZpY2VFeHRYICE9IDAuMClcbiAge1xuICAgIHhXb3JsZCA9IHRoaXMubHdvcmxkT3JnWCArXG4gICAgICAgICAgICAoKHggLSB0aGlzLmxkZXZpY2VPcmdYKSAqIHRoaXMubHdvcmxkRXh0WCAvIGRldmljZUV4dFgpO1xuICB9XG5cblxuICByZXR1cm4geFdvcmxkO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmludmVyc2VUcmFuc2Zvcm1ZID0gZnVuY3Rpb24gKHkpXG57XG4gIHZhciB5V29ybGQgPSAwLjA7XG4gIHZhciBkZXZpY2VFeHRZID0gdGhpcy5sZGV2aWNlRXh0WTtcbiAgaWYgKGRldmljZUV4dFkgIT0gMC4wKVxuICB7XG4gICAgeVdvcmxkID0gdGhpcy5sd29ybGRPcmdZICtcbiAgICAgICAgICAgICgoeSAtIHRoaXMubGRldmljZU9yZ1kpICogdGhpcy5sd29ybGRFeHRZIC8gZGV2aWNlRXh0WSk7XG4gIH1cbiAgcmV0dXJuIHlXb3JsZDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtUG9pbnQgPSBmdW5jdGlvbiAoaW5Qb2ludClcbntcbiAgdmFyIG91dFBvaW50ID1cbiAgICAgICAgICBuZXcgUG9pbnREKHRoaXMuaW52ZXJzZVRyYW5zZm9ybVgoaW5Qb2ludC54KSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuaW52ZXJzZVRyYW5zZm9ybVkoaW5Qb2ludC55KSk7XG4gIHJldHVybiBvdXRQb2ludDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc2Zvcm07XG4iLCJmdW5jdGlvbiBVbmlxdWVJREdlbmVyZXRvcigpIHtcbn1cblxuVW5pcXVlSURHZW5lcmV0b3IubGFzdElEID0gMDtcblxuVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmIChVbmlxdWVJREdlbmVyZXRvci5pc1ByaW1pdGl2ZShvYmopKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICBpZiAob2JqLnVuaXF1ZUlEICE9IG51bGwpIHtcbiAgICByZXR1cm4gb2JqLnVuaXF1ZUlEO1xuICB9XG4gIG9iai51bmlxdWVJRCA9IFVuaXF1ZUlER2VuZXJldG9yLmdldFN0cmluZygpO1xuICBVbmlxdWVJREdlbmVyZXRvci5sYXN0SUQrKztcbiAgcmV0dXJuIG9iai51bmlxdWVJRDtcbn1cblxuVW5pcXVlSURHZW5lcmV0b3IuZ2V0U3RyaW5nID0gZnVuY3Rpb24gKGlkKSB7XG4gIGlmIChpZCA9PSBudWxsKVxuICAgIGlkID0gVW5pcXVlSURHZW5lcmV0b3IubGFzdElEO1xuICByZXR1cm4gXCJPYmplY3QjXCIgKyBpZCArIFwiXCI7XG59XG5cblVuaXF1ZUlER2VuZXJldG9yLmlzUHJpbWl0aXZlID0gZnVuY3Rpb24gKGFyZykge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBhcmc7XG4gIHJldHVybiBhcmcgPT0gbnVsbCB8fCAodHlwZSAhPSBcIm9iamVjdFwiICYmIHR5cGUgIT0gXCJmdW5jdGlvblwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbmlxdWVJREdlbmVyZXRvcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIERpbWVuc2lvbkQgPSByZXF1aXJlKCcuL0RpbWVuc2lvbkQnKTtcbnZhciBIYXNoTWFwID0gcmVxdWlyZSgnLi9IYXNoTWFwJyk7XG52YXIgSGFzaFNldCA9IHJlcXVpcmUoJy4vSGFzaFNldCcpO1xudmFyIElHZW9tZXRyeSA9IHJlcXVpcmUoJy4vSUdlb21ldHJ5Jyk7XG52YXIgSU1hdGggPSByZXF1aXJlKCcuL0lNYXRoJyk7XG52YXIgSW50ZWdlciA9IHJlcXVpcmUoJy4vSW50ZWdlcicpO1xudmFyIFBvaW50ID0gcmVxdWlyZSgnLi9Qb2ludCcpO1xudmFyIFBvaW50RCA9IHJlcXVpcmUoJy4vUG9pbnREJyk7XG52YXIgUmFuZG9tU2VlZCA9IHJlcXVpcmUoJy4vUmFuZG9tU2VlZCcpO1xudmFyIFJlY3RhbmdsZUQgPSByZXF1aXJlKCcuL1JlY3RhbmdsZUQnKTtcbnZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL1RyYW5zZm9ybScpO1xudmFyIFVuaXF1ZUlER2VuZXJldG9yID0gcmVxdWlyZSgnLi9VbmlxdWVJREdlbmVyZXRvcicpO1xudmFyIExHcmFwaE9iamVjdCA9IHJlcXVpcmUoJy4vTEdyYXBoT2JqZWN0Jyk7XG52YXIgTEdyYXBoID0gcmVxdWlyZSgnLi9MR3JhcGgnKTtcbnZhciBMRWRnZSA9IHJlcXVpcmUoJy4vTEVkZ2UnKTtcbnZhciBMR3JhcGhNYW5hZ2VyID0gcmVxdWlyZSgnLi9MR3JhcGhNYW5hZ2VyJyk7XG52YXIgTE5vZGUgPSByZXF1aXJlKCcuL0xOb2RlJyk7XG52YXIgTGF5b3V0ID0gcmVxdWlyZSgnLi9MYXlvdXQnKTtcbnZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0xheW91dENvbnN0YW50cycpO1xudmFyIEZETGF5b3V0ID0gcmVxdWlyZSgnLi9GRExheW91dCcpO1xudmFyIEZETGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9GRExheW91dENvbnN0YW50cycpO1xudmFyIEZETGF5b3V0RWRnZSA9IHJlcXVpcmUoJy4vRkRMYXlvdXRFZGdlJyk7XG52YXIgRkRMYXlvdXROb2RlID0gcmVxdWlyZSgnLi9GRExheW91dE5vZGUnKTtcbnZhciBDb1NFQ29uc3RhbnRzID0gcmVxdWlyZSgnLi9Db1NFQ29uc3RhbnRzJyk7XG52YXIgQ29TRUVkZ2UgPSByZXF1aXJlKCcuL0NvU0VFZGdlJyk7XG52YXIgQ29TRUdyYXBoID0gcmVxdWlyZSgnLi9Db1NFR3JhcGgnKTtcbnZhciBDb1NFR3JhcGhNYW5hZ2VyID0gcmVxdWlyZSgnLi9Db1NFR3JhcGhNYW5hZ2VyJyk7XG52YXIgQ29TRUxheW91dCA9IHJlcXVpcmUoJy4vQ29TRUxheW91dCcpO1xudmFyIENvU0VOb2RlID0gcmVxdWlyZSgnLi9Db1NFTm9kZScpO1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gIC8vIENhbGxlZCBvbiBgbGF5b3V0cmVhZHlgXG4gIHJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gIH0sXG4gIC8vIENhbGxlZCBvbiBgbGF5b3V0c3RvcGBcbiAgc3RvcDogZnVuY3Rpb24gKCkge1xuICB9LFxuICAvLyBpbmNsdWRlIGxhYmVscyBpbiBub2RlIGRpbWVuc2lvbnNcbiAgbm9kZURpbWVuc2lvbnNJbmNsdWRlTGFiZWxzOiBmYWxzZSxcbiAgLy8gbnVtYmVyIG9mIHRpY2tzIHBlciBmcmFtZTsgaGlnaGVyIGlzIGZhc3RlciBidXQgbW9yZSBqZXJreVxuICByZWZyZXNoOiAzMCxcbiAgLy8gV2hldGhlciB0byBmaXQgdGhlIG5ldHdvcmsgdmlldyBhZnRlciB3aGVuIGRvbmVcbiAgZml0OiB0cnVlLFxuICAvLyBQYWRkaW5nIG9uIGZpdFxuICBwYWRkaW5nOiAxMCxcbiAgLy8gV2hldGhlciB0byBlbmFibGUgaW5jcmVtZW50YWwgbW9kZVxuICByYW5kb21pemU6IHRydWUsXG4gIC8vIE5vZGUgcmVwdWxzaW9uIChub24gb3ZlcmxhcHBpbmcpIG11bHRpcGxpZXJcbiAgbm9kZVJlcHVsc2lvbjogNDUwMCxcbiAgLy8gSWRlYWwgZWRnZSAobm9uIG5lc3RlZCkgbGVuZ3RoXG4gIGlkZWFsRWRnZUxlbmd0aDogNTAsXG4gIC8vIERpdmlzb3IgdG8gY29tcHV0ZSBlZGdlIGZvcmNlc1xuICBlZGdlRWxhc3RpY2l0eTogMC40NSxcbiAgLy8gTmVzdGluZyBmYWN0b3IgKG11bHRpcGxpZXIpIHRvIGNvbXB1dGUgaWRlYWwgZWRnZSBsZW5ndGggZm9yIG5lc3RlZCBlZGdlc1xuICBuZXN0aW5nRmFjdG9yOiAwLjEsXG4gIC8vIEdyYXZpdHkgZm9yY2UgKGNvbnN0YW50KVxuICBncmF2aXR5OiAwLjI1LFxuICAvLyBNYXhpbXVtIG51bWJlciBvZiBpdGVyYXRpb25zIHRvIHBlcmZvcm1cbiAgbnVtSXRlcjogMjUwMCxcbiAgLy8gRm9yIGVuYWJsaW5nIHRpbGluZ1xuICB0aWxlOiB0cnVlLFxuICAvLyBUeXBlIG9mIGxheW91dCBhbmltYXRpb24uIFRoZSBvcHRpb24gc2V0IGlzIHsnZHVyaW5nJywgJ2VuZCcsIGZhbHNlfVxuICBhbmltYXRlOiAnZW5kJyxcbiAgLy8gRHVyYXRpb24gZm9yIGFuaW1hdGU6ZW5kXG4gIGFuaW1hdGlvbkR1cmF0aW9uOiA1MDAsXG4gIC8vIFJlcHJlc2VudHMgdGhlIGFtb3VudCBvZiB0aGUgdmVydGljYWwgc3BhY2UgdG8gcHV0IGJldHdlZW4gdGhlIHplcm8gZGVncmVlIG1lbWJlcnMgZHVyaW5nIHRoZSB0aWxpbmcgb3BlcmF0aW9uKGNhbiBhbHNvIGJlIGEgZnVuY3Rpb24pXG4gIHRpbGluZ1BhZGRpbmdWZXJ0aWNhbDogMTAsXG4gIC8vIFJlcHJlc2VudHMgdGhlIGFtb3VudCBvZiB0aGUgaG9yaXpvbnRhbCBzcGFjZSB0byBwdXQgYmV0d2VlbiB0aGUgemVybyBkZWdyZWUgbWVtYmVycyBkdXJpbmcgdGhlIHRpbGluZyBvcGVyYXRpb24oY2FuIGFsc28gYmUgYSBmdW5jdGlvbilcbiAgdGlsaW5nUGFkZGluZ0hvcml6b250YWw6IDEwLFxuICAvLyBHcmF2aXR5IHJhbmdlIChjb25zdGFudCkgZm9yIGNvbXBvdW5kc1xuICBncmF2aXR5UmFuZ2VDb21wb3VuZDogMS41LFxuICAvLyBHcmF2aXR5IGZvcmNlIChjb25zdGFudCkgZm9yIGNvbXBvdW5kc1xuICBncmF2aXR5Q29tcG91bmQ6IDEuMCxcbiAgLy8gR3Jhdml0eSByYW5nZSAoY29uc3RhbnQpXG4gIGdyYXZpdHlSYW5nZTogMy44LFxuICAvLyBJbml0aWFsIGNvb2xpbmcgZmFjdG9yIGZvciBpbmNyZW1lbnRhbCBsYXlvdXRcbiAgaW5pdGlhbEVuZXJneU9uSW5jcmVtZW50YWw6IDAuNVxufTtcblxuZnVuY3Rpb24gZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKSB7XG4gIHZhciBvYmogPSB7fTtcblxuICBmb3IgKHZhciBpIGluIGRlZmF1bHRzKSB7XG4gICAgb2JqW2ldID0gZGVmYXVsdHNbaV07XG4gIH1cblxuICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICBvYmpbaV0gPSBvcHRpb25zW2ldO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbmZ1bmN0aW9uIF9Db1NFTGF5b3V0KF9vcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IGV4dGVuZChkZWZhdWx0cywgX29wdGlvbnMpO1xuICBnZXRVc2VyT3B0aW9ucyh0aGlzLm9wdGlvbnMpO1xufVxuXG52YXIgZ2V0VXNlck9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5ub2RlUmVwdWxzaW9uICE9IG51bGwpXG4gICAgQ29TRUNvbnN0YW50cy5ERUZBVUxUX1JFUFVMU0lPTl9TVFJFTkdUSCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUkVQVUxTSU9OX1NUUkVOR1RIID0gb3B0aW9ucy5ub2RlUmVwdWxzaW9uO1xuICBpZiAob3B0aW9ucy5pZGVhbEVkZ2VMZW5ndGggIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIID0gb3B0aW9ucy5pZGVhbEVkZ2VMZW5ndGg7XG4gIGlmIChvcHRpb25zLmVkZ2VFbGFzdGljaXR5ICE9IG51bGwpXG4gICAgQ29TRUNvbnN0YW50cy5ERUZBVUxUX1NQUklOR19TVFJFTkdUSCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfU1BSSU5HX1NUUkVOR1RIID0gb3B0aW9ucy5lZGdlRWxhc3RpY2l0eTtcbiAgaWYgKG9wdGlvbnMubmVzdGluZ0ZhY3RvciAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuUEVSX0xFVkVMX0lERUFMX0VER0VfTEVOR1RIX0ZBQ1RPUiA9IEZETGF5b3V0Q29uc3RhbnRzLlBFUl9MRVZFTF9JREVBTF9FREdFX0xFTkdUSF9GQUNUT1IgPSBvcHRpb25zLm5lc3RpbmdGYWN0b3I7XG4gIGlmIChvcHRpb25zLmdyYXZpdHkgIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9TVFJFTkdUSCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9TVFJFTkdUSCA9IG9wdGlvbnMuZ3Jhdml0eTtcbiAgaWYgKG9wdGlvbnMubnVtSXRlciAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuTUFYX0lURVJBVElPTlMgPSBGRExheW91dENvbnN0YW50cy5NQVhfSVRFUkFUSU9OUyA9IG9wdGlvbnMubnVtSXRlcjtcbiAgaWYgKG9wdGlvbnMuZ3Jhdml0eVJhbmdlICE9IG51bGwpXG4gICAgQ29TRUNvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiA9IG9wdGlvbnMuZ3Jhdml0eVJhbmdlO1xuICBpZihvcHRpb25zLmdyYXZpdHlDb21wb3VuZCAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1NUUkVOR1RIID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1NUUkVOR1RIID0gb3B0aW9ucy5ncmF2aXR5Q29tcG91bmQ7XG4gIGlmKG9wdGlvbnMuZ3Jhdml0eVJhbmdlQ29tcG91bmQgIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfUkFOR0VfRkFDVE9SID0gb3B0aW9ucy5ncmF2aXR5UmFuZ2VDb21wb3VuZDtcbiAgaWYgKG9wdGlvbnMuaW5pdGlhbEVuZXJneU9uSW5jcmVtZW50YWwgIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUwgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMID0gb3B0aW9ucy5pbml0aWFsRW5lcmd5T25JbmNyZW1lbnRhbDtcblxuICBDb1NFQ29uc3RhbnRzLk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyA9IEZETGF5b3V0Q29uc3RhbnRzLk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyA9IExheW91dENvbnN0YW50cy5OT0RFX0RJTUVOU0lPTlNfSU5DTFVERV9MQUJFTFMgPSBvcHRpb25zLm5vZGVEaW1lbnNpb25zSW5jbHVkZUxhYmVscztcbiAgQ29TRUNvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9JTkNSRU1FTlRBTCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMID1cbiAgICAgICAgICAhKG9wdGlvbnMucmFuZG9taXplKTtcbiAgQ29TRUNvbnN0YW50cy5BTklNQVRFID0gRkRMYXlvdXRDb25zdGFudHMuQU5JTUFURSA9IExheW91dENvbnN0YW50cy5BTklNQVRFID0gb3B0aW9ucy5hbmltYXRlO1xuICBDb1NFQ29uc3RhbnRzLlRJTEUgPSBvcHRpb25zLnRpbGU7XG4gIENvU0VDb25zdGFudHMuVElMSU5HX1BBRERJTkdfVkVSVElDQUwgPSBcbiAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy50aWxpbmdQYWRkaW5nVmVydGljYWwgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnRpbGluZ1BhZGRpbmdWZXJ0aWNhbC5jYWxsKCkgOiBvcHRpb25zLnRpbGluZ1BhZGRpbmdWZXJ0aWNhbDtcbiAgQ29TRUNvbnN0YW50cy5USUxJTkdfUEFERElOR19IT1JJWk9OVEFMID0gXG4gICAgICAgICAgdHlwZW9mIG9wdGlvbnMudGlsaW5nUGFkZGluZ0hvcml6b250YWwgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnRpbGluZ1BhZGRpbmdIb3Jpem9udGFsLmNhbGwoKSA6IG9wdGlvbnMudGlsaW5nUGFkZGluZ0hvcml6b250YWw7XG59O1xuXG5fQ29TRUxheW91dC5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcmVhZHk7XG4gIHZhciBmcmFtZUlkO1xuICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgdmFyIGlkVG9MTm9kZSA9IHRoaXMuaWRUb0xOb2RlID0ge307XG4gIHZhciBsYXlvdXQgPSB0aGlzLmxheW91dCA9IG5ldyBDb1NFTGF5b3V0KCk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgXG4gIHNlbGYuc3RvcHBlZCA9IGZhbHNlO1xuXG4gIHRoaXMuY3kgPSB0aGlzLm9wdGlvbnMuY3k7XG5cbiAgdGhpcy5jeS50cmlnZ2VyKHsgdHlwZTogJ2xheW91dHN0YXJ0JywgbGF5b3V0OiB0aGlzIH0pO1xuXG4gIHZhciBnbSA9IGxheW91dC5uZXdHcmFwaE1hbmFnZXIoKTtcbiAgdGhpcy5nbSA9IGdtO1xuXG4gIHZhciBub2RlcyA9IHRoaXMub3B0aW9ucy5lbGVzLm5vZGVzKCk7XG4gIHZhciBlZGdlcyA9IHRoaXMub3B0aW9ucy5lbGVzLmVkZ2VzKCk7XG5cbiAgdGhpcy5yb290ID0gZ20uYWRkUm9vdCgpO1xuICB0aGlzLnByb2Nlc3NDaGlsZHJlbkxpc3QodGhpcy5yb290LCB0aGlzLmdldFRvcE1vc3ROb2Rlcyhub2RlcyksIGxheW91dCk7XG5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVkZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGVkZ2UgPSBlZGdlc1tpXTtcbiAgICB2YXIgc291cmNlTm9kZSA9IHRoaXMuaWRUb0xOb2RlW2VkZ2UuZGF0YShcInNvdXJjZVwiKV07XG4gICAgdmFyIHRhcmdldE5vZGUgPSB0aGlzLmlkVG9MTm9kZVtlZGdlLmRhdGEoXCJ0YXJnZXRcIildO1xuICAgIGlmKHNvdXJjZU5vZGUuZ2V0RWRnZXNCZXR3ZWVuKHRhcmdldE5vZGUpLmxlbmd0aCA9PSAwKXtcbiAgICAgIHZhciBlMSA9IGdtLmFkZChsYXlvdXQubmV3RWRnZSgpLCBzb3VyY2VOb2RlLCB0YXJnZXROb2RlKTtcbiAgICAgIGUxLmlkID0gZWRnZS5pZCgpO1xuICAgIH1cbiAgfVxuICBcbiAgIHZhciBnZXRQb3NpdGlvbnMgPSBmdW5jdGlvbihlbGUsIGkpe1xuICAgIGlmKHR5cGVvZiBlbGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGVsZSA9IGk7XG4gICAgfVxuICAgIHZhciB0aGVJZCA9IGVsZS5kYXRhKCdpZCcpO1xuICAgIHZhciBsTm9kZSA9IHNlbGYuaWRUb0xOb2RlW3RoZUlkXTtcblxuICAgIHJldHVybiB7XG4gICAgICB4OiBsTm9kZS5nZXRSZWN0KCkuZ2V0Q2VudGVyWCgpLFxuICAgICAgeTogbE5vZGUuZ2V0UmVjdCgpLmdldENlbnRlclkoKVxuICAgIH07XG4gIH07XG4gIFxuICAvKlxuICAgKiBSZXBvc2l0aW9uIG5vZGVzIGluIGl0ZXJhdGlvbnMgYW5pbWF0ZWRseVxuICAgKi9cbiAgdmFyIGl0ZXJhdGVBbmltYXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUaGlncyB0byBwZXJmb3JtIGFmdGVyIG5vZGVzIGFyZSByZXBvc2l0aW9uZWQgb24gc2NyZWVuXG4gICAgdmFyIGFmdGVyUmVwb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKG9wdGlvbnMuZml0KSB7XG4gICAgICAgIG9wdGlvbnMuY3kuZml0KG9wdGlvbnMuZWxlcy5ub2RlcygpLCBvcHRpb25zLnBhZGRpbmcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXJlYWR5KSB7XG4gICAgICAgIHJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgc2VsZi5jeS5vbmUoJ2xheW91dHJlYWR5Jywgb3B0aW9ucy5yZWFkeSk7XG4gICAgICAgIHNlbGYuY3kudHJpZ2dlcih7dHlwZTogJ2xheW91dHJlYWR5JywgbGF5b3V0OiBzZWxmfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICB2YXIgdGlja3NQZXJGcmFtZSA9IHNlbGYub3B0aW9ucy5yZWZyZXNoO1xuICAgIHZhciBpc0RvbmU7XG5cbiAgICBmb3IoIHZhciBpID0gMDsgaSA8IHRpY2tzUGVyRnJhbWUgJiYgIWlzRG9uZTsgaSsrICl7XG4gICAgICBpc0RvbmUgPSBzZWxmLnN0b3BwZWQgfHwgc2VsZi5sYXlvdXQudGljaygpO1xuICAgIH1cbiAgICBcbiAgICAvLyBJZiBsYXlvdXQgaXMgZG9uZVxuICAgIGlmIChpc0RvbmUpIHtcbiAgICAgIC8vIElmIHRoZSBsYXlvdXQgaXMgbm90IGEgc3VibGF5b3V0IGFuZCBpdCBpcyBzdWNjZXNzZnVsIHBlcmZvcm0gcG9zdCBsYXlvdXQuXG4gICAgICBpZiAobGF5b3V0LmNoZWNrTGF5b3V0U3VjY2VzcygpICYmICFsYXlvdXQuaXNTdWJMYXlvdXQpIHtcbiAgICAgICAgbGF5b3V0LmRvUG9zdExheW91dCgpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBJZiBsYXlvdXQgaGFzIGEgdGlsaW5nUG9zdExheW91dCBmdW5jdGlvbiBwcm9wZXJ0eSBjYWxsIGl0LlxuICAgICAgaWYgKGxheW91dC50aWxpbmdQb3N0TGF5b3V0KSB7XG4gICAgICAgIGxheW91dC50aWxpbmdQb3N0TGF5b3V0KCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGxheW91dC5pc0xheW91dEZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgIFxuICAgICAgc2VsZi5vcHRpb25zLmVsZXMubm9kZXMoKS5wb3NpdGlvbnMoZ2V0UG9zaXRpb25zKTtcbiAgICAgIFxuICAgICAgYWZ0ZXJSZXBvc2l0aW9uKCk7XG4gICAgICBcbiAgICAgIC8vIHRyaWdnZXIgbGF5b3V0c3RvcCB3aGVuIHRoZSBsYXlvdXQgc3RvcHMgKGUuZy4gZmluaXNoZXMpXG4gICAgICBzZWxmLmN5Lm9uZSgnbGF5b3V0c3RvcCcsIHNlbGYub3B0aW9ucy5zdG9wKTtcbiAgICAgIHNlbGYuY3kudHJpZ2dlcih7IHR5cGU6ICdsYXlvdXRzdG9wJywgbGF5b3V0OiBzZWxmIH0pO1xuXG4gICAgICBpZiAoZnJhbWVJZCkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZUlkKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcmVhZHkgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdmFyIGFuaW1hdGlvbkRhdGEgPSBzZWxmLmxheW91dC5nZXRQb3NpdGlvbnNEYXRhKCk7IC8vIEdldCBwb3NpdGlvbnMgb2YgbGF5b3V0IG5vZGVzIG5vdGUgdGhhdCBhbGwgbm9kZXMgbWF5IG5vdCBiZSBsYXlvdXQgbm9kZXMgYmVjYXVzZSBvZiB0aWxpbmdcbiAgICBcbiAgICAvLyBQb3NpdGlvbiBub2RlcywgZm9yIHRoZSBub2RlcyB3aG9zZSBpZCBkb2VzIG5vdCBpbmNsdWRlZCBpbiBkYXRhIChiZWNhdXNlIHRoZXkgYXJlIHJlbW92ZWQgZnJvbSB0aGVpciBwYXJlbnRzIGFuZCBpbmNsdWRlZCBpbiBkdW1teSBjb21wb3VuZHMpXG4gICAgLy8gdXNlIHBvc2l0aW9uIG9mIHRoZWlyIGFuY2VzdG9ycyBvciBkdW1teSBhbmNlc3RvcnNcbiAgICBvcHRpb25zLmVsZXMubm9kZXMoKS5wb3NpdGlvbnMoZnVuY3Rpb24gKGVsZSwgaSkge1xuICAgICAgaWYgKHR5cGVvZiBlbGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgZWxlID0gaTtcbiAgICAgIH1cbiAgICAgIHZhciB0aGVJZCA9IGVsZS5pZCgpO1xuICAgICAgdmFyIHBOb2RlID0gYW5pbWF0aW9uRGF0YVt0aGVJZF07XG4gICAgICB2YXIgdGVtcCA9IGVsZTtcbiAgICAgIC8vIElmIHBOb2RlIGlzIHVuZGVmaW5lZCBzZWFyY2ggdW50aWwgZmluZGluZyBwb3NpdGlvbiBkYXRhIG9mIGl0cyBmaXJzdCBhbmNlc3RvciAoSXQgbWF5IGJlIGR1bW15IGFzIHdlbGwpXG4gICAgICB3aGlsZSAocE5vZGUgPT0gbnVsbCkge1xuICAgICAgICBwTm9kZSA9IGFuaW1hdGlvbkRhdGFbdGVtcC5kYXRhKCdwYXJlbnQnKV0gfHwgYW5pbWF0aW9uRGF0YVsnRHVtbXlDb21wb3VuZF8nICsgdGVtcC5kYXRhKCdwYXJlbnQnKV07XG4gICAgICAgIGFuaW1hdGlvbkRhdGFbdGhlSWRdID0gcE5vZGU7XG4gICAgICAgIHRlbXAgPSB0ZW1wLnBhcmVudCgpWzBdO1xuICAgICAgICBpZih0ZW1wID09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHBOb2RlICE9IG51bGwpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IHBOb2RlLngsXG4gICAgICAgICAgeTogcE5vZGUueVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB4OiBlbGUueCxcbiAgICAgICAgICB5OiBlbGUueVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYWZ0ZXJSZXBvc2l0aW9uKCk7XG5cbiAgICBmcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGl0ZXJhdGVBbmltYXRlZCk7XG4gIH07XG4gIFxuICAvKlxuICAqIExpc3RlbiAnbGF5b3V0c3RhcnRlZCcgZXZlbnQgYW5kIHN0YXJ0IGFuaW1hdGVkIGl0ZXJhdGlvbiBpZiBhbmltYXRlIG9wdGlvbiBpcyAnZHVyaW5nJ1xuICAqL1xuICBsYXlvdXQuYWRkTGlzdGVuZXIoJ2xheW91dHN0YXJ0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNlbGYub3B0aW9ucy5hbmltYXRlID09PSAnZHVyaW5nJykge1xuICAgICAgZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShpdGVyYXRlQW5pbWF0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFxuICBsYXlvdXQucnVuTGF5b3V0KCk7IC8vIFJ1biBjb3NlIGxheW91dFxuICBcbiAgLypcbiAgICogSWYgYW5pbWF0ZSBvcHRpb24gaXMgbm90ICdkdXJpbmcnICgnZW5kJyBvciBmYWxzZSkgcGVyZm9ybSB0aGVzZSBoZXJlIChJZiBpdCBpcyAnZHVyaW5nJyBzaW1pbGFyIHRoaW5ncyBhcmUgYWxyZWFkeSBwZXJmb3JtZWQpXG4gICAqL1xuICBpZih0aGlzLm9wdGlvbnMuYW5pbWF0ZSAhPT0gXCJkdXJpbmdcIil7XG4gICAgc2VsZi5vcHRpb25zLmVsZXMubm9kZXMoKS5ub3QoXCI6cGFyZW50XCIpLmxheW91dFBvc2l0aW9ucyhzZWxmLCBzZWxmLm9wdGlvbnMsIGdldFBvc2l0aW9ucyk7IC8vIFVzZSBsYXlvdXQgcG9zaXRpb25zIHRvIHJlcG9zaXRpb24gdGhlIG5vZGVzIGl0IGNvbnNpZGVycyB0aGUgb3B0aW9ucyBwYXJhbWV0ZXJcbiAgICByZWFkeSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7IC8vIGNoYWluaW5nXG59O1xuXG4vL0dldCB0aGUgdG9wIG1vc3Qgb25lcyBvZiBhIGxpc3Qgb2Ygbm9kZXNcbl9Db1NFTGF5b3V0LnByb3RvdHlwZS5nZXRUb3BNb3N0Tm9kZXMgPSBmdW5jdGlvbihub2Rlcykge1xuICB2YXIgbm9kZXNNYXAgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbm9kZXNNYXBbbm9kZXNbaV0uaWQoKV0gPSB0cnVlO1xuICB9XG4gIHZhciByb290cyA9IG5vZGVzLmZpbHRlcihmdW5jdGlvbiAoZWxlLCBpKSB7XG4gICAgICBpZih0eXBlb2YgZWxlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGVsZSA9IGk7XG4gICAgICB9XG4gICAgICB2YXIgcGFyZW50ID0gZWxlLnBhcmVudCgpWzBdO1xuICAgICAgd2hpbGUocGFyZW50ICE9IG51bGwpe1xuICAgICAgICBpZihub2Rlc01hcFtwYXJlbnQuaWQoKV0pe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50KClbMF07XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJvb3RzO1xufTtcblxuX0NvU0VMYXlvdXQucHJvdG90eXBlLnByb2Nlc3NDaGlsZHJlbkxpc3QgPSBmdW5jdGlvbiAocGFyZW50LCBjaGlsZHJlbiwgbGF5b3V0KSB7XG4gIHZhciBzaXplID0gY2hpbGRyZW4ubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgIHZhciB0aGVDaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgIHZhciBjaGlsZHJlbl9vZl9jaGlsZHJlbiA9IHRoZUNoaWxkLmNoaWxkcmVuKCk7XG4gICAgdmFyIHRoZU5vZGU7ICAgIFxuXG4gICAgdmFyIGRpbWVuc2lvbnMgPSB0aGVDaGlsZC5sYXlvdXREaW1lbnNpb25zKHtcbiAgICAgIG5vZGVEaW1lbnNpb25zSW5jbHVkZUxhYmVsczogdGhpcy5vcHRpb25zLm5vZGVEaW1lbnNpb25zSW5jbHVkZUxhYmVsc1xuICAgIH0pO1xuXG4gICAgaWYgKHRoZUNoaWxkLm91dGVyV2lkdGgoKSAhPSBudWxsXG4gICAgICAgICAgICAmJiB0aGVDaGlsZC5vdXRlckhlaWdodCgpICE9IG51bGwpIHtcbiAgICAgIHRoZU5vZGUgPSBwYXJlbnQuYWRkKG5ldyBDb1NFTm9kZShsYXlvdXQuZ3JhcGhNYW5hZ2VyLFxuICAgICAgICAgICAgICBuZXcgUG9pbnREKHRoZUNoaWxkLnBvc2l0aW9uKCd4JykgLSBkaW1lbnNpb25zLncgLyAyLCB0aGVDaGlsZC5wb3NpdGlvbigneScpIC0gZGltZW5zaW9ucy5oIC8gMiksXG4gICAgICAgICAgICAgIG5ldyBEaW1lbnNpb25EKHBhcnNlRmxvYXQoZGltZW5zaW9ucy53KSwgcGFyc2VGbG9hdChkaW1lbnNpb25zLmgpKSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoZU5vZGUgPSBwYXJlbnQuYWRkKG5ldyBDb1NFTm9kZSh0aGlzLmdyYXBoTWFuYWdlcikpO1xuICAgIH1cbiAgICAvLyBBdHRhY2ggaWQgdG8gdGhlIGxheW91dCBub2RlXG4gICAgdGhlTm9kZS5pZCA9IHRoZUNoaWxkLmRhdGEoXCJpZFwiKTtcbiAgICAvLyBBdHRhY2ggdGhlIHBhZGRpbmdzIG9mIGN5IG5vZGUgdG8gbGF5b3V0IG5vZGVcbiAgICB0aGVOb2RlLnBhZGRpbmdMZWZ0ID0gcGFyc2VJbnQoIHRoZUNoaWxkLmNzcygncGFkZGluZycpICk7XG4gICAgdGhlTm9kZS5wYWRkaW5nVG9wID0gcGFyc2VJbnQoIHRoZUNoaWxkLmNzcygncGFkZGluZycpICk7XG4gICAgdGhlTm9kZS5wYWRkaW5nUmlnaHQgPSBwYXJzZUludCggdGhlQ2hpbGQuY3NzKCdwYWRkaW5nJykgKTtcbiAgICB0aGVOb2RlLnBhZGRpbmdCb3R0b20gPSBwYXJzZUludCggdGhlQ2hpbGQuY3NzKCdwYWRkaW5nJykgKTtcbiAgICBcbiAgICAvL0F0dGFjaCB0aGUgbGFiZWwgcHJvcGVydGllcyB0byBjb21wb3VuZCBpZiBsYWJlbHMgd2lsbCBiZSBpbmNsdWRlZCBpbiBub2RlIGRpbWVuc2lvbnMgIFxuICAgIGlmKHRoaXMub3B0aW9ucy5ub2RlRGltZW5zaW9uc0luY2x1ZGVMYWJlbHMpe1xuICAgICAgaWYodGhlQ2hpbGQuaXNQYXJlbnQoKSl7XG4gICAgICAgICAgdmFyIGxhYmVsV2lkdGggPSB0aGVDaGlsZC5ib3VuZGluZ0JveCh7IGluY2x1ZGVMYWJlbHM6IHRydWUsIGluY2x1ZGVOb2RlczogZmFsc2UgfSkudzsgICAgICAgICAgXG4gICAgICAgICAgdmFyIGxhYmVsSGVpZ2h0ID0gdGhlQ2hpbGQuYm91bmRpbmdCb3goeyBpbmNsdWRlTGFiZWxzOiB0cnVlLCBpbmNsdWRlTm9kZXM6IGZhbHNlIH0pLmg7XG4gICAgICAgICAgdmFyIGxhYmVsUG9zID0gdGhlQ2hpbGQuY3NzKFwidGV4dC1oYWxpZ25cIik7XG4gICAgICAgICAgdGhlTm9kZS5sYWJlbFdpZHRoID0gbGFiZWxXaWR0aDtcbiAgICAgICAgICB0aGVOb2RlLmxhYmVsSGVpZ2h0ID0gbGFiZWxIZWlnaHQ7XG4gICAgICAgICAgdGhlTm9kZS5sYWJlbFBvcyA9IGxhYmVsUG9zO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBNYXAgdGhlIGxheW91dCBub2RlXG4gICAgdGhpcy5pZFRvTE5vZGVbdGhlQ2hpbGQuZGF0YShcImlkXCIpXSA9IHRoZU5vZGU7XG5cbiAgICBpZiAoaXNOYU4odGhlTm9kZS5yZWN0LngpKSB7XG4gICAgICB0aGVOb2RlLnJlY3QueCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGlzTmFOKHRoZU5vZGUucmVjdC55KSkge1xuICAgICAgdGhlTm9kZS5yZWN0LnkgPSAwO1xuICAgIH1cblxuICAgIGlmIChjaGlsZHJlbl9vZl9jaGlsZHJlbiAhPSBudWxsICYmIGNoaWxkcmVuX29mX2NoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciB0aGVOZXdHcmFwaDtcbiAgICAgIHRoZU5ld0dyYXBoID0gbGF5b3V0LmdldEdyYXBoTWFuYWdlcigpLmFkZChsYXlvdXQubmV3R3JhcGgoKSwgdGhlTm9kZSk7XG4gICAgICB0aGlzLnByb2Nlc3NDaGlsZHJlbkxpc3QodGhlTmV3R3JhcGgsIGNoaWxkcmVuX29mX2NoaWxkcmVuLCBsYXlvdXQpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBAYnJpZWYgOiBjYWxsZWQgb24gY29udGludW91cyBsYXlvdXRzIHRvIHN0b3AgdGhlbSBiZWZvcmUgdGhleSBmaW5pc2hcbiAqL1xuX0NvU0VMYXlvdXQucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuc3RvcHBlZCA9IHRydWU7XG5cbiAgcmV0dXJuIHRoaXM7IC8vIGNoYWluaW5nXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldChjeXRvc2NhcGUpIHtcbiAgcmV0dXJuIF9Db1NFTGF5b3V0O1xufTtcbiIsInZhciBDb1NFTm9kZSA9IHJlcXVpcmUoJy4uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0NvU0VOb2RlJyk7XG52YXIgRkRMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9GRExheW91dENvbnN0YW50cycpO1xudmFyIElNYXRoID0gcmVxdWlyZSgnLi4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvSU1hdGgnKTtcblxuQ29TRU5vZGUucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoKVxue1xuICBpZiAoRkRMYXlvdXRDb25zdGFudHMuRVhDTFVERURfTk9ERVNbdGhpcy5pZF0pXG4gICAgcmV0dXJuO1xuXG4gIHZhciBsYXlvdXQgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRMYXlvdXQoKTtcbiAgdGhpcy5kaXNwbGFjZW1lbnRYID0gbGF5b3V0LmNvb2xpbmdGYWN0b3IgKlxuICAgICAgICAgICh0aGlzLnNwcmluZ0ZvcmNlWCArIHRoaXMucmVwdWxzaW9uRm9yY2VYICsgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWCkgLyB0aGlzLm5vT2ZDaGlsZHJlbjtcbiAgdGhpcy5kaXNwbGFjZW1lbnRZID0gbGF5b3V0LmNvb2xpbmdGYWN0b3IgKlxuICAgICAgICAgICh0aGlzLnNwcmluZ0ZvcmNlWSArIHRoaXMucmVwdWxzaW9uRm9yY2VZICsgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWSkgLyB0aGlzLm5vT2ZDaGlsZHJlbjtcblxuXG4gIGlmIChNYXRoLmFicyh0aGlzLmRpc3BsYWNlbWVudFgpID4gbGF5b3V0LmNvb2xpbmdGYWN0b3IgKiBsYXlvdXQubWF4Tm9kZURpc3BsYWNlbWVudClcbiAge1xuICAgIHRoaXMuZGlzcGxhY2VtZW50WCA9IGxheW91dC5jb29saW5nRmFjdG9yICogbGF5b3V0Lm1heE5vZGVEaXNwbGFjZW1lbnQgKlxuICAgICAgICAgICAgSU1hdGguc2lnbih0aGlzLmRpc3BsYWNlbWVudFgpO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKHRoaXMuZGlzcGxhY2VtZW50WSkgPiBsYXlvdXQuY29vbGluZ0ZhY3RvciAqIGxheW91dC5tYXhOb2RlRGlzcGxhY2VtZW50KVxuICB7XG4gICAgdGhpcy5kaXNwbGFjZW1lbnRZID0gbGF5b3V0LmNvb2xpbmdGYWN0b3IgKiBsYXlvdXQubWF4Tm9kZURpc3BsYWNlbWVudCAqXG4gICAgICAgICAgICBJTWF0aC5zaWduKHRoaXMuZGlzcGxhY2VtZW50WSk7XG4gIH1cblxuICAvLyBhIHNpbXBsZSBub2RlLCBqdXN0IG1vdmUgaXRcbiAgaWYgKHRoaXMuY2hpbGQgPT0gbnVsbClcbiAge1xuICAgIHRoaXMubW92ZUJ5KHRoaXMuZGlzcGxhY2VtZW50WCwgdGhpcy5kaXNwbGFjZW1lbnRZKTtcbiAgfVxuICAvLyBhbiBlbXB0eSBjb21wb3VuZCBub2RlLCBhZ2FpbiBqdXN0IG1vdmUgaXRcbiAgZWxzZSBpZiAodGhpcy5jaGlsZC5nZXROb2RlcygpLmxlbmd0aCA9PSAwKVxuICB7XG4gICAgdGhpcy5tb3ZlQnkodGhpcy5kaXNwbGFjZW1lbnRYLCB0aGlzLmRpc3BsYWNlbWVudFkpO1xuICB9XG4gIC8vIG5vbi1lbXB0eSBjb21wb3VuZCBub2RlLCBwcm9wb2dhdGUgbW92ZW1lbnQgdG8gY2hpbGRyZW4gYXMgd2VsbFxuICBlbHNlXG4gIHtcbiAgICB0aGlzLnByb3BvZ2F0ZURpc3BsYWNlbWVudFRvQ2hpbGRyZW4odGhpcy5kaXNwbGFjZW1lbnRYLFxuICAgICAgICAgICAgdGhpcy5kaXNwbGFjZW1lbnRZKTtcbiAgfVxuXG4gIGxheW91dC50b3RhbERpc3BsYWNlbWVudCArPVxuICAgICAgICAgIE1hdGguYWJzKHRoaXMuZGlzcGxhY2VtZW50WCkgKyBNYXRoLmFicyh0aGlzLmRpc3BsYWNlbWVudFkpO1xuXG4gIHRoaXMuc3ByaW5nRm9yY2VYID0gMDtcbiAgdGhpcy5zcHJpbmdGb3JjZVkgPSAwO1xuICB0aGlzLnJlcHVsc2lvbkZvcmNlWCA9IDA7XG4gIHRoaXMucmVwdWxzaW9uRm9yY2VZID0gMDtcbiAgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWCA9IDA7XG4gIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVkgPSAwO1xuICB0aGlzLmRpc3BsYWNlbWVudFggPSAwO1xuICB0aGlzLmRpc3BsYWNlbWVudFkgPSAwO1xufTtcbiIsImltcG9ydCAnLi9jb3NlLWJpbGtlbnQtbW9kaWZpY2F0aW9uLmpzJztcbmltcG9ydCB7Y3JlYXRlSGVhZGxlc3NJbnN0YW5jZSwgYXBwbHlNZXJnZWRMYXlvdXQsIGFwcGx5VW5uYW1lZExheW91dH0gZnJvbSAnLi9sYXlvdXRzLmpzJztcbmNvbnN0IGdldExheW91dCA9IHJlcXVpcmUoJy4uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0Jyk7XG52YXIgRkRMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9GRExheW91dENvbnN0YW50cycpO1xuXG4vLyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBvbiBhIGN5dG9zY2FwZSBsaWIgcmVmXG5sZXQgcmVnaXN0ZXIgPSBmdW5jdGlvbiggY3l0b3NjYXBlICl7XG5cdGlmKCAhY3l0b3NjYXBlICl7IHJldHVybjsgfSAvLyBjYW4ndCByZWdpc3RlciBpZiBjeXRvc2NhcGUgdW5zcGVjaWZpZWRcblxuXHRjcmVhdGVIZWFkbGVzc0luc3RhbmNlKGN5dG9zY2FwZSk7XG5cblx0bGV0IExheW91dCA9IGdldExheW91dChjeXRvc2NhcGUpO1xuXHRsZXQgb3JnUHJvdG90eXBlID0gTGF5b3V0LnByb3RvdHlwZTtcblxuXHRsZXQgZGVmYXVsdHMgPSBuZXcgTGF5b3V0KHt9KS5vcHRpb25zO1xuXG5cdGZ1bmN0aW9uIGV4dGVuZChkZWZhdWx0cywgb3B0aW9ucykge1xuXHRcdHZhciBvYmogPSB7fTtcblxuXHRcdGZvciAodmFyIGkgaW4gZGVmYXVsdHMpIHtcblx0XHRcdG9ialtpXSA9IGRlZmF1bHRzW2ldO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xuXHRcdFx0b2JqW2ldID0gb3B0aW9uc1tpXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb2JqO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIF9Db1NFTGF5b3V0KF9vcHRpb25zKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gZXh0ZW5kKGRlZmF1bHRzLCBfb3B0aW9ucyk7XG5cdFx0bmV3IExheW91dChfb3B0aW9ucyk7XG5cblx0XHRpZiAoX29wdGlvbnMuZXhjbHVkZWROb2Rlcykge1xuXHRcdFx0RkRMYXlvdXRDb25zdGFudHMuRVhDTFVERURfTk9ERVMgPSBfb3B0aW9ucy5leGNsdWRlZE5vZGVzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRGRExheW91dENvbnN0YW50cy5FWENMVURFRF9OT0RFUyA9IHt9O1xuXHRcdH1cblxuXHR9O1xuXG5cdF9Db1NFTGF5b3V0LnByb3RvdHlwZSA9IExheW91dC5wcm90b3R5cGU7XG5cblx0Y3l0b3NjYXBlKCAnbGF5b3V0JywgJ2N5dG9zY2FwZS5qcy1zeW5jaGVkJywgX0NvU0VMYXlvdXQpOyAvLyByZWdpc3RlciB3aXRoIGN5dG9zY2FwZS5qc1xuXHRjeXRvc2NhcGUoJ2NvcmUnLCAnc3luY2hlZExheW91dCcsIGZ1bmN0aW9uIChvcHRzKSB7XG5cdFx0bGV0IGFwaSA9IHt9O1xuXHRcdGFwaS5hcHBseU1lcmdlZExheW91dCA9IGFwcGx5TWVyZ2VkTGF5b3V0O1xuXHRcdGFwaS5hcHBseVVubmFtZWRMYXlvdXQgPSBhcHBseVVubmFtZWRMYXlvdXQ7XG5cblx0XHRyZXR1cm4gYXBpO1xuXHR9KTtcbn07XG5cbmlmKCB0eXBlb2YgY3l0b3NjYXBlICE9PSAndW5kZWZpbmVkJyApeyAvLyBleHBvc2UgdG8gZ2xvYmFsIGN5dG9zY2FwZSAoaS5lLiB3aW5kb3cuY3l0b3NjYXBlKVxuXHRyZWdpc3RlciggY3l0b3NjYXBlICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVnaXN0ZXI7XG4iLCJ2YXIgY3lfaGVhZGxlc3M7IFxuXG52YXIgY3JlYXRlSGVhZGxlc3NJbnN0YW5jZSA9IGZ1bmN0aW9uKGN5dG9zY2FwZSkge1xuXHRjeV9oZWFkbGVzcyA9IGN5dG9zY2FwZSh7XG5cdFx0aGVhZGxlc3M6IHRydWUsXG5cdFx0c3R5bGVFbmFibGVkOiB0cnVlLFxuXHR9KTtcbn07XG5cbnZhciBhcHBseU1lcmdlZExheW91dCA9IGZ1bmN0aW9uIChjeSwgb3RoZXJDeSkge1xuXHRsZXQgZWxlcyA9IGN5LmVsZW1lbnRzKCk7XG5cdGxldCBvdGhlckVsZXMgPSBvdGhlckN5LmVsZW1lbnRzKCk7XG5cdGxldCBhbGxfZWxlcyA9IGVsZXMudW5pb24ob3RoZXJFbGVzKTtcblx0bGV0IG9wdGlvbnMgPSB7bmFtZTogJ2N5dG9zY2FwZS5qcy1zeW5jaGVkJ307XG5cdFxuXHRjeV9oZWFkbGVzcy5lbGVtZW50cygpLnJlbW92ZSgpO1xuXHRjeV9oZWFkbGVzcy5hZGQoYWxsX2VsZXMpO1xuXHRjeV9oZWFkbGVzcy5sYXlvdXQob3B0aW9ucykucnVuKCk7XG5cblx0Y3lfaGVhZGxlc3Mub25lKFwibGF5b3V0c3RvcFwiLCBmdW5jdGlvbigpe1xuXHRcdGxldCBwb3MgPSB7fTtcblx0XHRjeV9oZWFkbGVzcy5ub2RlcygpLmZvckVhY2goZnVuY3Rpb24oZWxlLCBpKSB7XG5cdFx0XHRwb3NbZWxlLmlkKCldID0ge3g6ZWxlLnBvc2l0aW9uKFwieFwiKSwgeTogZWxlLnBvc2l0aW9uKFwieVwiKX07XG5cdFx0fSlcblxuXHRcdGN5Lm5vZGVzKCkucG9zaXRpb25zKGZ1bmN0aW9uKGVsZSwgaSkge1xuXHRcdFx0cmV0dXJuIHt4OiBwb3NbZWxlLmlkKCldLngsIHk6IHBvc1tlbGUuaWQoKV0ueX1cblx0XHR9KTtcblxuXHRcdG90aGVyQ3kubm9kZXMoKS5wb3NpdGlvbnMoZnVuY3Rpb24oZWxlLCBpKSB7XG5cdFx0XHRyZXR1cm4ge3g6IHBvc1tlbGUuaWQoKV0ueCwgeTogcG9zW2VsZS5pZCgpXS55fVxuXHRcdH0pO1xuXG5cdFx0Y3kudHJpZ2dlcihcInN5bmNoZWRMYXlvdXRTdG9wcGVkXCIpO1xuXHRcdG90aGVyQ3kudHJpZ2dlcihcInN5bmNoZWRMYXlvdXRTdG9wcGVkXCIpO1xuXG5cdH0pO1xufTtcblxubGV0IGFwcGx5VW5uYW1lZExheW91dCA9IGZ1bmN0aW9uKGN5LCBvdGhlckN5KSB7XG5cdGxldCBlbGVzID0gY3kuZWxlbWVudHMoKTtcblx0bGV0IG90aGVyRWxlcyA9IG90aGVyQ3kuZWxlbWVudHMoKTtcblx0bGV0IGNvbW1vbkVsZXMgPSBlbGVzLmludGVyc2VjdGlvbihvdGhlckVsZXMpO1xuXG5cdGxldCBjb21tb25faWQgPSB7fTtcblxuXHRjb21tb25FbGVzLmZvckVhY2goZnVuY3Rpb24oZWxlLCBpKSB7XG5cdFx0Y29tbW9uX2lkW2VsZS5pZCgpXSA9IHRydWU7XG5cdH0pO1xuXG5cdGN5X2hlYWRsZXNzLmVsZW1lbnRzKCkucmVtb3ZlKCk7XG5cdGN5X2hlYWRsZXNzLmFkZChjb21tb25FbGVzKTtcblx0Y3lfaGVhZGxlc3MubGF5b3V0KHtuYW1lOiBcImN5dG9zY2FwZS5qcy1zeW5jaGVkXCIsIGV4Y2x1ZGVkTm9kZXM6IHt9fSkucnVuKCk7XG5cblx0Y3lfaGVhZGxlc3Mub25lKFwibGF5b3V0c3RvcFwiLCBmdW5jdGlvbigpe1xuXHRcdGxldCBwb3MgPSB7fTtcblx0XHRjeV9oZWFkbGVzcy5ub2RlcygpLmZvckVhY2goZnVuY3Rpb24oZWxlLCBpKSB7XG5cdFx0XHRwb3NbZWxlLmlkKCldID0ge3g6IGVsZS5wb3NpdGlvbihcInhcIiksIHk6IGVsZS5wb3NpdGlvbihcInlcIil9O1xuXHRcdH0pXG5cblx0XHRjeS5ub2RlcygpLnBvc2l0aW9ucyhmdW5jdGlvbihlbGUsIGkpe1xuXHRcdFx0aWYgKHBvc1tlbGUuaWQoKV0pIHtcblx0XHRcdFx0cmV0dXJuIHt4OiBwb3NbZWxlLmlkKCldLngsIHk6IHBvc1tlbGUuaWQoKV0ueX07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gZWxlLnBvc2l0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRvdGhlckN5Lm5vZGVzKCkucG9zaXRpb25zKGZ1bmN0aW9uKGVsZSwgaSl7XG5cdFx0XHRpZiAocG9zW2VsZS5pZCgpXSkge1xuXHRcdFx0XHRyZXR1cm4ge3g6IHBvc1tlbGUuaWQoKV0ueCwgeTogcG9zW2VsZS5pZCgpXS55fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBlbGUucG9zaXRpb24oKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGN5LmxheW91dCh7bmFtZTogXCJjeXRvc2NhcGUuanMtc3luY2hlZFwiLCAgcmFuZG9taXplOiBmYWxzZSwgZXhjbHVkZWROb2RlczogcG9zfSkucnVuKCk7XG5cdFx0b3RoZXJDeS5sYXlvdXQoe25hbWU6IFwiY3l0b3NjYXBlLmpzLXN5bmNoZWRcIiwgIHJhbmRvbWl6ZTogZmFsc2UsIGV4Y2x1ZGVkTm9kZXM6IHBvc30pLnJ1bigpO1xuXG5cdFx0bGV0IGlzTGF5b3V0U3RvcHBlZCA9IGZhbHNlLCBpc090aGVyTGF5b3V0U3RvcHBlZCA9IGZhbHNlO1xuXG5cdFx0Y3kub25lKFwibGF5b3V0c3RvcFwiLCBmdW5jdGlvbigpe1xuXHRcdFx0aXNMYXlvdXRTdG9wcGVkID0gdHJ1ZTtcblx0XHRcdGlmIChpc090aGVyTGF5b3V0U3RvcHBlZCkge1xuXHRcdFx0XHRjeS50cmlnZ2VyKFwic3luY2hlZExheW91dFN0b3BwZWRcIik7XG5cdFx0XHRcdG90aGVyQ3kudHJpZ2dlcihcInN5bmNoZWRMYXlvdXRTdG9wcGVkXCIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0b3RoZXJDeS5vbmUoXCJsYXlvdXRzdG9wXCIsIGZ1bmN0aW9uKCl7XG5cdFx0XHRpc090aGVyTGF5b3V0U3RvcHBlZCA9IHRydWU7XG5cdFx0XHRpZiAoaXNMYXlvdXRTdG9wcGVkKSB7XG5cdFx0XHRcdGN5LnRyaWdnZXIoXCJzeW5jaGVkTGF5b3V0U3RvcHBlZFwiKTtcblx0XHRcdFx0b3RoZXJDeS50cmlnZ2VyKFwic3luY2hlZExheW91dFN0b3BwZWRcIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0fSk7XG59O1xuXG5leHBvcnQge2NyZWF0ZUhlYWRsZXNzSW5zdGFuY2UsIGFwcGx5TWVyZ2VkTGF5b3V0LCBhcHBseVVubmFtZWRMYXlvdXR9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==