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
  var layout = this.graphManager.getLayout();
  this.displacementX = layout.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren;
  this.displacementY = layout.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren;

  if (Math.abs(this.displacementX) > layout.coolingFactor * layout.maxNodeDisplacement) {
    this.displacementX = layout.coolingFactor * layout.maxNodeDisplacement * IMath.sign(this.displacementX);
  }

  if (Math.abs(this.displacementY) > layout.coolingFactor * layout.maxNodeDisplacement) {
    this.displacementY = layout.coolingFactor * layout.maxNodeDisplacement * IMath.sign(this.displacementY);
  }

  if (FDLayoutConstants.EXCLUDED_NODES[this.id]) {
    this.displacementX *= FDLayoutConstants.excludedNodeMoveFactor;
    this.displacementY *= FDLayoutConstants.excludedNodeMoveFactor;
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
		FDLayoutConstants.excludedNodeMoveFactor = _options.excludedNodeMoveFactor || 0;

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
		api.applyInterLayedLayout = _layouts.applyInterLayedLayout;
		api.applyExtendedInterLayedLayout = _layouts.applyExtendedInterLayedLayout;

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

var applyInterLayedLayout = function applyInterLayedLayout(cy, otherCy, excludedNodeMoveFactor) {
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

		cy.layout({ name: "cytoscape.js-synched", randomize: false, excludedNodes: pos, excludedNodeMoveFactor: excludedNodeMoveFactor }).run();
		otherCy.layout({ name: "cytoscape.js-synched", randomize: false, excludedNodes: pos, excludedNodeMoveFactor: excludedNodeMoveFactor }).run();

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

var applyExtendedInterLayedLayout = function applyExtendedInterLayedLayout(cy, otherCy, excludedNodeMoveFactor) {
	var eles = cy.elements();
	var otherEles = otherCy.elements();
	var commonEles = eles.intersection(otherEles);

	var common_id = {};

	commonEles.forEach(function (ele, i) {
		common_id[ele.id()] = true;
	});

	var collection = cy.collection();
	collection = collection.add(commonEles);
	collection = collection.add(commonEles.neighborhood());

	cy_headless.elements().remove();
	cy_headless.add(collection);
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

		cy.layout({ name: "cytoscape.js-synched", randomize: false, excludedNodes: pos, excludedNodeMoveFactor: excludedNodeMoveFactor }).run();
		otherCy.layout({ name: "cytoscape.js-synched", randomize: false, excludedNodes: pos, excludedNodeMoveFactor: excludedNodeMoveFactor }).run();

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
exports.applyInterLayedLayout = applyInterLayedLayout;
exports.applyExtendedInterLayedLayout = applyExtendedInterLayedLayout;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFQ29uc3RhbnRzLmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFRWRnZS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvQ29TRUdyYXBoLmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFR3JhcGhNYW5hZ2VyLmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFTGF5b3V0LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFTm9kZS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvRGltZW5zaW9uRC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvRW1pdHRlci5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvRkRMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0ZETGF5b3V0Q29uc3RhbnRzLmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9GRExheW91dEVkZ2UuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0ZETGF5b3V0Tm9kZS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvSGFzaE1hcC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvSGFzaFNldC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvSUdlb21ldHJ5LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9JTWF0aC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvSW50ZWdlci5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvTEVkZ2UuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0xHcmFwaC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvTEdyYXBoTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvTEdyYXBoT2JqZWN0LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9MTm9kZS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9MYXlvdXRDb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0xpbmtlZExpc3QuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L1BvaW50LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Qb2ludEQuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L1JhbmRvbVNlZWQuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L1JlY3RhbmdsZUQuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvVW5pcXVlSURHZW5lcmV0b3IuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9zcmMvY29zZS1iaWxrZW50LW1vZGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9zcmMvbGF5b3V0cy5qcyJdLCJuYW1lcyI6WyJGRExheW91dENvbnN0YW50cyIsInJlcXVpcmUiLCJDb1NFQ29uc3RhbnRzIiwicHJvcCIsIkRFRkFVTFRfVVNFX01VTFRJX0xFVkVMX1NDQUxJTkciLCJERUZBVUxUX1JBRElBTF9TRVBBUkFUSU9OIiwiREVGQVVMVF9FREdFX0xFTkdUSCIsIkRFRkFVTFRfQ09NUE9ORU5UX1NFUEVSQVRJT04iLCJUSUxFIiwiVElMSU5HX1BBRERJTkdfVkVSVElDQUwiLCJUSUxJTkdfUEFERElOR19IT1JJWk9OVEFMIiwibW9kdWxlIiwiZXhwb3J0cyIsIkZETGF5b3V0RWRnZSIsIkNvU0VFZGdlIiwic291cmNlIiwidGFyZ2V0IiwidkVkZ2UiLCJjYWxsIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiTEdyYXBoIiwiQ29TRUdyYXBoIiwicGFyZW50IiwiZ3JhcGhNZ3IiLCJ2R3JhcGgiLCJMR3JhcGhNYW5hZ2VyIiwiQ29TRUdyYXBoTWFuYWdlciIsImxheW91dCIsIkZETGF5b3V0IiwiQ29TRU5vZGUiLCJMYXlvdXRDb25zdGFudHMiLCJQb2ludCIsIlBvaW50RCIsIkxheW91dCIsIkludGVnZXIiLCJJR2VvbWV0cnkiLCJUcmFuc2Zvcm0iLCJDb1NFTGF5b3V0IiwidG9CZVRpbGVkIiwibmV3R3JhcGhNYW5hZ2VyIiwiZ20iLCJncmFwaE1hbmFnZXIiLCJuZXdHcmFwaCIsIm5ld05vZGUiLCJ2Tm9kZSIsIm5ld0VkZ2UiLCJpbml0UGFyYW1ldGVycyIsImFyZ3VtZW50cyIsImlzU3ViTGF5b3V0IiwiaWRlYWxFZGdlTGVuZ3RoIiwidXNlU21hcnRJZGVhbEVkZ2VMZW5ndGhDYWxjdWxhdGlvbiIsIkRFRkFVTFRfVVNFX1NNQVJUX0lERUFMX0VER0VfTEVOR1RIX0NBTENVTEFUSU9OIiwic3ByaW5nQ29uc3RhbnQiLCJERUZBVUxUX1NQUklOR19TVFJFTkdUSCIsInJlcHVsc2lvbkNvbnN0YW50IiwiREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEgiLCJncmF2aXR5Q29uc3RhbnQiLCJERUZBVUxUX0dSQVZJVFlfU1RSRU5HVEgiLCJjb21wb3VuZEdyYXZpdHlDb25zdGFudCIsIkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9TVFJFTkdUSCIsImdyYXZpdHlSYW5nZUZhY3RvciIsIkRFRkFVTFRfR1JBVklUWV9SQU5HRV9GQUNUT1IiLCJjb21wb3VuZEdyYXZpdHlSYW5nZUZhY3RvciIsIkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1IiLCJjcmVhdGVCZW5kc0FzTmVlZGVkIiwiREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEIiwiY3JlYXRlQmVuZHBvaW50cyIsInJlc2V0QWxsRWRnZXMiLCJsZXZlbCIsImNsYXNzaWNMYXlvdXQiLCJub2Rlc1dpdGhHcmF2aXR5IiwiY2FsY3VsYXRlTm9kZXNUb0FwcGx5R3Jhdml0YXRpb25UbyIsInNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uIiwiY2FsY05vT2ZDaGlsZHJlbkZvckFsbE5vZGVzIiwiY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9ycyIsImNhbGNJbmNsdXNpb25UcmVlRGVwdGhzIiwiZ2V0Um9vdCIsImNhbGNFc3RpbWF0ZWRTaXplIiwiY2FsY0lkZWFsRWRnZUxlbmd0aHMiLCJpbmNyZW1lbnRhbCIsImZvcmVzdCIsImdldEZsYXRGb3Jlc3QiLCJsZW5ndGgiLCJwb3NpdGlvbk5vZGVzUmFkaWFsbHkiLCJyZWR1Y2VUcmVlcyIsInJlc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24iLCJhbGxOb2RlcyIsIlNldCIsImdldEFsbE5vZGVzIiwiaW50ZXJzZWN0aW9uIiwiZmlsdGVyIiwiaGFzIiwieCIsInBvc2l0aW9uTm9kZXNSYW5kb21seSIsImluaXRTcHJpbmdFbWJlZGRlciIsInJ1blNwcmluZ0VtYmVkZGVyIiwidGljayIsInRvdGFsSXRlcmF0aW9ucyIsIm1heEl0ZXJhdGlvbnMiLCJpc1RyZWVHcm93aW5nIiwiaXNHcm93dGhGaW5pc2hlZCIsInBydW5lZE5vZGVzQWxsIiwiQ09OVkVSR0VOQ0VfQ0hFQ0tfUEVSSU9EIiwiaXNDb252ZXJnZWQiLCJjb29saW5nRmFjdG9yIiwiaW5pdGlhbENvb2xpbmdGYWN0b3IiLCJhbmltYXRpb25QZXJpb2QiLCJNYXRoIiwiY2VpbCIsImluaXRpYWxBbmltYXRpb25QZXJpb2QiLCJzcXJ0IiwiZ3Jvd1RyZWVJdGVyYXRpb25zIiwidXBkYXRlQm91bmRzIiwidXBkYXRlR3JpZCIsImdyb3dUcmVlIiwiREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCIsImFmdGVyR3Jvd3RoSXRlcmF0aW9ucyIsInRvdGFsRGlzcGxhY2VtZW50IiwiY2FsY1NwcmluZ0ZvcmNlcyIsImNhbGNSZXB1bHNpb25Gb3JjZXMiLCJjYWxjR3Jhdml0YXRpb25hbEZvcmNlcyIsIm1vdmVOb2RlcyIsImFuaW1hdGUiLCJnZXRQb3NpdGlvbnNEYXRhIiwicERhdGEiLCJpIiwicmVjdCIsImlkIiwiZ2V0Q2VudGVyWCIsInkiLCJnZXRDZW50ZXJZIiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsImxheW91dEVuZGVkIiwiQU5JTUFURSIsImVtaXQiLCJub2RlTGlzdCIsImdyYXBoIiwiZ3JhcGhzIiwiZ2V0R3JhcGhzIiwic2l6ZSIsInVwZGF0ZUNvbm5lY3RlZCIsImlzQ29ubmVjdGVkIiwiY29uY2F0IiwiZ2V0Tm9kZXMiLCJub2RlIiwibm9PZkNoaWxkcmVuIiwiZ2V0Tm9PZkNoaWxkcmVuIiwiZWRnZXMiLCJnZXRBbGxFZGdlcyIsInZpc2l0ZWQiLCJIYXNoU2V0IiwiZWRnZSIsImNvbnRhaW5zIiwiZ2V0U291cmNlIiwiZ2V0VGFyZ2V0IiwiZ2V0QmVuZHBvaW50cyIsInB1c2giLCJjcmVhdGVEdW1teU5vZGVzRm9yQmVuZHBvaW50cyIsImFkZCIsImVkZ2VMaXN0IiwiZ2V0RWRnZUxpc3RUb05vZGUiLCJrIiwibXVsdGlFZGdlIiwiYWRkQWxsIiwibGlzdCIsImN1cnJlbnRTdGFydGluZ1BvaW50IiwibnVtYmVyT2ZDb2x1bW5zIiwiY3VycmVudFkiLCJjdXJyZW50WCIsInBvaW50IiwidHJlZSIsImNlbnRlck5vZGUiLCJmaW5kQ2VudGVyT2ZUcmVlIiwicmFkaWFsTGF5b3V0IiwiZmxvb3IiLCJ0cmFuc2Zvcm0iLCJXT1JMRF9DRU5URVJfWCIsIldPUkxEX0NFTlRFUl9ZIiwic3RhcnRpbmdQb2ludCIsInJhZGlhbFNlcCIsIm1heCIsIm1heERpYWdvbmFsSW5UcmVlIiwiYnJhbmNoUmFkaWFsTGF5b3V0IiwiYm91bmRzIiwiY2FsY3VsYXRlQm91bmRzIiwic2V0RGV2aWNlT3JnWCIsImdldE1pblgiLCJzZXREZXZpY2VPcmdZIiwiZ2V0TWluWSIsInNldFdvcmxkT3JnWCIsInNldFdvcmxkT3JnWSIsImJvdHRvbVJpZ2h0IiwiZ2V0TWF4WCIsImdldE1heFkiLCJpbnZlcnNlVHJhbnNmb3JtUG9pbnQiLCJwYXJlbnRPZk5vZGUiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJkaXN0YW5jZSIsInJhZGlhbFNlcGFyYXRpb24iLCJoYWxmSW50ZXJ2YWwiLCJub2RlQW5nbGUiLCJ0ZXRhIiwiVFdPX1BJIiwiY29zX3RldGEiLCJjb3MiLCJ4XyIsInlfIiwic2luIiwic2V0Q2VudGVyIiwibmVpZ2hib3JFZGdlcyIsImdldEVkZ2VzIiwiY2hpbGRDb3VudCIsImJyYW5jaENvdW50IiwiaW5jRWRnZXNDb3VudCIsInN0YXJ0SW5kZXgiLCJnZXRFZGdlc0JldHdlZW4iLCJ0ZW1wIiwic3BsaWNlIiwiaW5kZXgiLCJpbmRleE9mIiwic3RlcEFuZ2xlIiwiYWJzIiwiY3VycmVudE5laWdoYm9yIiwiZ2V0T3RoZXJFbmQiLCJjaGlsZFN0YXJ0QW5nbGUiLCJjaGlsZEVuZEFuZ2xlIiwibWF4RGlhZ29uYWwiLCJNSU5fVkFMVUUiLCJkaWFnb25hbCIsImdldERpYWdvbmFsIiwiY2FsY1JlcHVsc2lvblJhbmdlIiwiZ3JvdXBaZXJvRGVncmVlTWVtYmVycyIsInNlbGYiLCJ0ZW1wTWVtYmVyR3JvdXBzIiwibWVtYmVyR3JvdXBzIiwiaWRUb0R1bW15Tm9kZSIsInplcm9EZWdyZWUiLCJnZXRQYXJlbnQiLCJnZXROb2RlRGVncmVlV2l0aENoaWxkcmVuIiwidW5kZWZpbmVkIiwiZ2V0VG9CZVRpbGVkIiwicF9pZCIsImtleXMiLCJmb3JFYWNoIiwiZHVtbXlDb21wb3VuZElkIiwiZHVtbXlDb21wb3VuZCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJkdW1teVBhcmVudEdyYXBoIiwiZ2V0R3JhcGhNYW5hZ2VyIiwicGFyZW50R3JhcGgiLCJnZXRDaGlsZCIsInJlbW92ZSIsImNsZWFyQ29tcG91bmRzIiwiY2hpbGRHcmFwaE1hcCIsImlkVG9Ob2RlIiwicGVyZm9ybURGU09uQ29tcG91bmRzIiwiY29tcG91bmRPcmRlciIsImNoaWxkIiwicmVzZXRBbGxOb2RlcyIsInRpbGVDb21wb3VuZE1lbWJlcnMiLCJjbGVhclplcm9EZWdyZWVNZW1iZXJzIiwidGlsZWRaZXJvRGVncmVlUGFjayIsImNvbXBvdW5kTm9kZSIsInRpbGVOb2RlcyIsInJlcG9wdWxhdGVDb21wb3VuZHMiLCJsQ29tcG91bmROb2RlIiwiaG9yaXpvbnRhbE1hcmdpbiIsInZlcnRpY2FsTWFyZ2luIiwiYWRqdXN0TG9jYXRpb25zIiwidGlsZWRNZW1iZXJQYWNrIiwicmVwb3B1bGF0ZVplcm9EZWdyZWVNZW1iZXJzIiwidGlsZWRQYWNrIiwiY2hpbGRHcmFwaCIsImNoaWxkcmVuIiwidGhlQ2hpbGQiLCJnZXROb2RlRGVncmVlIiwiZGVncmVlIiwiZmlsbENvbXBleE9yZGVyQnlERlMiLCJvcmdhbml6YXRpb24iLCJjb21wb3VuZEhvcml6b250YWxNYXJnaW4iLCJjb21wb3VuZFZlcnRpY2FsTWFyZ2luIiwibGVmdCIsInJvd3MiLCJyb3ciLCJtYXhIZWlnaHQiLCJqIiwibG5vZGUiLCJob3Jpem9udGFsUGFkZGluZyIsInZlcnRpY2FsUGFkZGluZyIsIm5vZGVzIiwibWluV2lkdGgiLCJyb3dXaWR0aCIsInJvd0hlaWdodCIsInNvcnQiLCJuMSIsIm4yIiwibE5vZGUiLCJpbnNlcnROb2RlVG9Sb3ciLCJjYW5BZGRIb3Jpem9udGFsIiwiZ2V0U2hvcnRlc3RSb3dJbmRleCIsInNoaWZ0VG9MYXN0Um93Iiwicm93SW5kZXgiLCJtaW5Db21wb3VuZFNpemUiLCJzZWNvbmREaW1lbnNpb24iLCJleHRyYUhlaWdodCIsInIiLCJtaW4iLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJnZXRMb25nZXN0Um93SW5kZXgiLCJleHRyYVdpZHRoIiwic3JpIiwiaERpZmYiLCJhZGRfdG9fcm93X3JhdGlvIiwiYWRkX25ld19yb3dfcmF0aW8iLCJsb25nZXN0IiwibGFzdCIsImRpZmYiLCJpbnN0YW5jZSIsInByZXZUb3RhbCIsImZpbmFsVG90YWwiLCJ0aWxpbmdQcmVMYXlvdXQiLCJ0aWxpbmdQb3N0TGF5b3V0IiwiRkRMYXlvdXROb2RlIiwiSU1hdGgiLCJsb2MiLCJtb3ZlIiwiZ2V0TGF5b3V0IiwiZGlzcGxhY2VtZW50WCIsInNwcmluZ0ZvcmNlWCIsInJlcHVsc2lvbkZvcmNlWCIsImdyYXZpdGF0aW9uRm9yY2VYIiwiZGlzcGxhY2VtZW50WSIsInNwcmluZ0ZvcmNlWSIsInJlcHVsc2lvbkZvcmNlWSIsImdyYXZpdGF0aW9uRm9yY2VZIiwibWF4Tm9kZURpc3BsYWNlbWVudCIsInNpZ24iLCJtb3ZlQnkiLCJwcm9wb2dhdGVEaXNwbGFjZW1lbnRUb0NoaWxkcmVuIiwiZFgiLCJkWSIsInNldFByZWQxIiwicHJlZDEiLCJnZXRQcmVkMSIsImdldFByZWQyIiwicHJlZDIiLCJzZXROZXh0IiwibmV4dCIsImdldE5leHQiLCJzZXRQcm9jZXNzZWQiLCJwcm9jZXNzZWQiLCJpc1Byb2Nlc3NlZCIsIkRpbWVuc2lvbkQiLCJnZXRXaWR0aCIsInNldFdpZHRoIiwiZ2V0SGVpZ2h0Iiwic2V0SGVpZ2h0IiwiRW1pdHRlciIsImxpc3RlbmVycyIsInAiLCJhZGRMaXN0ZW5lciIsImV2ZW50IiwiY2FsbGJhY2siLCJyZW1vdmVMaXN0ZW5lciIsImwiLCJkYXRhIiwiZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSIsIm9sZFRvdGFsRGlzcGxhY2VtZW50IiwiTUFYX0lURVJBVElPTlMiLCJsYXlvdXRRdWFsaXR5IiwiRFJBRlRfUVVBTElUWSIsIlBST09GX1FVQUxJVFkiLCJub3RBbmltYXRlZEl0ZXJhdGlvbnMiLCJ1c2VGUkdyaWRWYXJpYW50IiwiREVGQVVMVF9VU0VfU01BUlRfUkVQVUxTSU9OX1JBTkdFX0NBTENVTEFUSU9OIiwiZ3JpZCIsImxjYURlcHRoIiwic2l6ZU9mU291cmNlSW5MY2EiLCJzaXplT2ZUYXJnZXRJbkxjYSIsImFsbEVkZ2VzIiwiaWRlYWxMZW5ndGgiLCJpc0ludGVyR3JhcGgiLCJnZXRTb3VyY2VJbkxjYSIsImdldEVzdGltYXRlZFNpemUiLCJnZXRUYXJnZXRJbkxjYSIsIlNJTVBMRV9OT0RFX1NJWkUiLCJnZXRMY2EiLCJnZXRJbmNsdXNpb25UcmVlRGVwdGgiLCJQRVJfTEVWRUxfSURFQUxfRURHRV9MRU5HVEhfRkFDVE9SIiwiTUFYX05PREVfRElTUExBQ0VNRU5UX0lOQ1JFTUVOVEFMIiwiTUFYX05PREVfRElTUExBQ0VNRU5UIiwidG90YWxEaXNwbGFjZW1lbnRUaHJlc2hvbGQiLCJyZXB1bHNpb25SYW5nZSIsImxFZGdlcyIsImNhbGNTcHJpbmdGb3JjZSIsIm5vZGVBIiwibm9kZUIiLCJsTm9kZXMiLCJwcm9jZXNzZWROb2RlU2V0IiwiR1JJRF9DQUxDVUxBVElPTl9DSEVDS19QRVJJT0QiLCJjYWxjdWxhdGVSZXB1bHNpb25Gb3JjZU9mQU5vZGUiLCJnZXRPd25lciIsImNhbGNSZXB1bHNpb25Gb3JjZSIsImdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uIiwiY2FsY0dyYXZpdGF0aW9uYWxGb3JjZSIsInNvdXJjZU5vZGUiLCJ0YXJnZXROb2RlIiwic3ByaW5nRm9yY2UiLCJ1bmlmb3JtTGVhZk5vZGVTaXplcyIsInVwZGF0ZUxlbmd0aFNpbXBsZSIsInVwZGF0ZUxlbmd0aCIsImlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCIsImdldExlbmd0aCIsImxlbmd0aFgiLCJsZW5ndGhZIiwicmVjdEEiLCJnZXRSZWN0IiwicmVjdEIiLCJvdmVybGFwQW1vdW50IiwiQXJyYXkiLCJjbGlwUG9pbnRzIiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwiZGlzdGFuY2VTcXVhcmVkIiwicmVwdWxzaW9uRm9yY2UiLCJpbnRlcnNlY3RzIiwiY2FsY1NlcGFyYXRpb25BbW91bnQiLCJjaGlsZHJlbkNvbnN0YW50IiwiZ2V0SW50ZXJzZWN0aW9uIiwiTUlOX1JFUFVMU0lPTl9ESVNUIiwib3duZXJHcmFwaCIsIm93bmVyQ2VudGVyWCIsIm93bmVyQ2VudGVyWSIsImFic0Rpc3RhbmNlWCIsImFic0Rpc3RhbmNlWSIsImVzdGltYXRlZFNpemUiLCJnZXRSaWdodCIsImdldExlZnQiLCJnZXRUb3AiLCJnZXRCb3R0b20iLCJjb252ZXJnZWQiLCJvc2NpbGF0aW5nIiwiYW5pbWF0aW9uRHVyaW5nTGF5b3V0IiwidXBkYXRlIiwiY2FsY0dyaWQiLCJzaXplWCIsInNpemVZIiwicGFyc2VJbnQiLCJhZGROb2RlVG9HcmlkIiwidiIsInRvcCIsInN0YXJ0WCIsImZpbmlzaFgiLCJzdGFydFkiLCJmaW5pc2hZIiwic2V0R3JpZENvb3JkaW5hdGVzIiwic3Vycm91bmRpbmciLCJjb250YWluc0xlYWYiLCJwcnVuZWROb2Rlc0luU3RlcFRlbXAiLCJwcnVuZWROb2Rlc0luU3RlcCIsImxlbmd0aE9mUHJ1bmVkTm9kZXNJblN0ZXAiLCJub2RlRGF0YSIsImZpbmRQbGFjZWZvclBydW5lZE5vZGUiLCJncmlkRm9yUHJ1bmVkTm9kZSIsIm5vZGVUb0Nvbm5lY3QiLCJwcnVuZWROb2RlIiwic3RhcnRHcmlkWCIsImZpbmlzaEdyaWRYIiwic3RhcnRHcmlkWSIsImZpbmlzaEdyaWRZIiwidXBOb2RlQ291bnQiLCJkb3duTm9kZUNvdW50IiwicmlnaHROb2RlQ291bnQiLCJsZWZ0Tm9kZUNvdW50IiwiY29udHJvbFJlZ2lvbnMiLCJtaW5Db3VudCIsIm1pbkluZGV4IiwicmFuZG9tIiwiTUlOX0VER0VfTEVOR1RIIiwiTEVkZ2UiLCJMTm9kZSIsIl9zdGFydFgiLCJfZmluaXNoWCIsIl9zdGFydFkiLCJfZmluaXNoWSIsIlVuaXF1ZUlER2VuZXJldG9yIiwiSGFzaE1hcCIsIm1hcCIsInB1dCIsImtleSIsInZhbHVlIiwidGhlSWQiLCJjcmVhdGVJRCIsImdldCIsImtleVNldCIsInNldCIsIm9iaiIsImNsZWFyIiwiaXNFbXB0eSIsImFkZEFsbFRvIiwicyIsInNlcGFyYXRpb25CdWZmZXIiLCJkaXJlY3Rpb25zIiwiZGVjaWRlRGlyZWN0aW9uc0Zvck92ZXJsYXBwaW5nTm9kZXMiLCJnZXRYIiwiZ2V0WSIsInNsb3BlIiwibW92ZUJ5WSIsIm1vdmVCeVgiLCJnZXRJbnRlcnNlY3Rpb24yIiwicmVzdWx0IiwicDF4IiwicDF5IiwicDJ4IiwicDJ5IiwidG9wTGVmdEF4IiwidG9wTGVmdEF5IiwidG9wUmlnaHRBeCIsImJvdHRvbUxlZnRBeCIsImJvdHRvbUxlZnRBeSIsImJvdHRvbVJpZ2h0QXgiLCJoYWxmV2lkdGhBIiwiZ2V0V2lkdGhIYWxmIiwiaGFsZkhlaWdodEEiLCJnZXRIZWlnaHRIYWxmIiwidG9wTGVmdEJ4IiwidG9wTGVmdEJ5IiwidG9wUmlnaHRCeCIsImJvdHRvbUxlZnRCeCIsImJvdHRvbUxlZnRCeSIsImJvdHRvbVJpZ2h0QngiLCJoYWxmV2lkdGhCIiwiaGFsZkhlaWdodEIiLCJjbGlwUG9pbnRBRm91bmQiLCJjbGlwUG9pbnRCRm91bmQiLCJzbG9wZUEiLCJzbG9wZUIiLCJzbG9wZVByaW1lIiwiY2FyZGluYWxEaXJlY3Rpb25BIiwiY2FyZGluYWxEaXJlY3Rpb25CIiwidGVtcFBvaW50QXgiLCJ0ZW1wUG9pbnRBeSIsInRlbXBQb2ludEJ4IiwidGVtcFBvaW50QnkiLCJnZXRDYXJkaW5hbERpcmVjdGlvbiIsImxpbmUiLCJzMSIsInMyIiwiZjEiLCJmMiIsIngxIiwieTEiLCJ4MiIsInkyIiwieDMiLCJ5MyIsIng0IiwieTQiLCJhMSIsImEyIiwiYjEiLCJiMiIsImMxIiwiYzIiLCJkZW5vbSIsIkhBTEZfUEkiLCJQSSIsIk9ORV9BTkRfSEFMRl9QSSIsIlRIUkVFX1BJIiwiTEdyYXBoT2JqZWN0IiwidkdyYXBoT2JqZWN0IiwiYmVuZHBvaW50cyIsImxjYSIsInNvdXJjZUluTGNhIiwidGFyZ2V0SW5MY2EiLCJnZXRPdGhlckVuZEluR3JhcGgiLCJvdGhlckVuZCIsInJvb3QiLCJjbGlwUG9pbnRDb29yZGluYXRlcyIsIlJlY3RhbmdsZUQiLCJMaW5rZWRMaXN0Iiwib2JqMiIsIm1hcmdpbiIsIkRFRkFVTFRfR1JBUEhfTUFSR0lOIiwicmlnaHQiLCJib3R0b20iLCJvYmoxIiwib3duZXIiLCJlZGdlc1RvQmVSZW1vdmVkIiwic2xpY2UiLCJzb3VyY2VJbmRleCIsInRhcmdldEluZGV4IiwidXBkYXRlTGVmdFRvcCIsIm5vZGVUb3AiLCJub2RlTGVmdCIsInJlY3Vyc2l2ZSIsIm5vZGVSaWdodCIsIm5vZGVCb3R0b20iLCJib3VuZGluZ1JlY3QiLCJFTVBUWV9DT01QT1VORF9OT0RFX1NJWkUiLCJ0b0JlVmlzaXRlZCIsImN1cnJlbnROb2RlIiwiY2hpbGRyZW5PZk5vZGUiLCJ3aXRoQ2hpbGRyZW4iLCJzaGlmdCIsIm5laWdoYm9yRWRnZSIsImNoaWxkcmVuT2ZOZWlnaGJvciIsIm5vT2ZWaXNpdGVkSW5UaGlzR3JhcGgiLCJ2aXNpdGVkSWQiLCJ2aXNpdGVkTm9kZSIsImFkZFJvb3QiLCJuZ3JhcGgiLCJubm9kZSIsInNldFJvb3RHcmFwaCIsInJvb3RHcmFwaCIsInBhcmVudE5vZGUiLCJzb3VyY2VHcmFwaCIsInRhcmdldEdyYXBoIiwibE9iaiIsIm5vZGVzVG9CZVJlbW92ZWQiLCJhbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiIsImlzT25lQW5jZXN0b3JPZk90aGVyIiwiZmlyc3ROb2RlIiwic2Vjb25kTm9kZSIsInNvdXJjZUFuY2VzdG9yR3JhcGgiLCJ0YXJnZXRBbmNlc3RvckdyYXBoIiwiY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9yIiwiZmlyc3RPd25lckdyYXBoIiwic2Vjb25kT3duZXJHcmFwaCIsImRlcHRoIiwiaW5jbHVzaW9uVHJlZURlcHRoIiwiaW5jbHVkZXNJbnZhbGlkRWRnZSIsIlJhbmRvbVNlZWQiLCJnZXRDZW50ZXIiLCJnZXRMb2NhdGlvbiIsInNldFJlY3QiLCJ1cHBlckxlZnQiLCJkaW1lbnNpb24iLCJjeCIsImN5Iiwic2V0TG9jYXRpb24iLCJkeCIsImR5IiwidG8iLCJvdGhlciIsImdldE5laWdoYm9yc0xpc3QiLCJuZWlnaGJvcnMiLCJ3aXRoTmVpZ2hib3JzTGlzdCIsImNoaWxkTm9kZSIsInNjYXR0ZXIiLCJyYW5kb21DZW50ZXJYIiwicmFuZG9tQ2VudGVyWSIsIm1pblgiLCJJTklUSUFMX1dPUkxEX0JPVU5EQVJZIiwibWF4WCIsIm5leHREb3VibGUiLCJtaW5ZIiwibWF4WSIsIk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyIsImxhYmVsV2lkdGgiLCJsYWJlbEhlaWdodCIsImxhYmVsUG9zIiwidHJhbnMiLCJXT1JMRF9CT1VOREFSWSIsImxlZnRUb3AiLCJ2TGVmdFRvcCIsImlzUmVtb3RlVXNlIiwiREVGQVVMVF9RVUFMSVRZIiwiREVGQVVMVF9JTkNSRU1FTlRBTCIsImFuaW1hdGlvbk9uTGF5b3V0IiwiREVGQVVMVF9BTklNQVRJT05fT05fTEFZT1VUIiwiREVGQVVMVF9BTklNQVRJT05fRFVSSU5HX0xBWU9VVCIsIkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRCIsIkRFRkFVTFRfVU5JRk9STV9MRUFGX05PREVfU0laRVMiLCJlZGdlVG9EdW1teU5vZGVzIiwiaXNMYXlvdXRGaW5pc2hlZCIsIlJBTkRPTV9TRUVEIiwiY2hlY2tMYXlvdXRTdWNjZXNzIiwicnVuTGF5b3V0IiwiaXNMYXlvdXRTdWNjZXNzZnVsbCIsImRvUG9zdExheW91dCIsInVwZGF0ZTIiLCJjcmVhdGVCZW5kcG9pbnRzRnJvbUR1bW15Tm9kZXMiLCJuZXdMZWZ0VG9wIiwiZmxhdEZvcmVzdCIsImlzRm9yZXN0IiwiaXNGbGF0IiwicGFyZW50cyIsInVuUHJvY2Vzc2VkTm9kZXMiLCJkdW1teU5vZGVzIiwicHJldiIsImR1bW15Tm9kZSIsIkRpbWVuc2lvbiIsImR1bW15RWRnZSIsImxFZGdlIiwicGF0aCIsImVicCIsInNsaWRlclZhbHVlIiwiZGVmYXVsdFZhbHVlIiwibWluRGl2IiwibWF4TXVsIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsImEiLCJiIiwicmVtb3ZlZE5vZGVzIiwicmVtYWluaW5nRGVncmVlcyIsImZvdW5kQ2VudGVyIiwidGVtcExpc3QiLCJ0ZW1wTGlzdDIiLCJuZWlnaGJvdXJzIiwibmVpZ2hib3VyIiwib3RoZXJEZWdyZWUiLCJuZXdEZWdyZWUiLCJzZXRHcmFwaE1hbmFnZXIiLCJTSU1QTEVfTk9ERV9IQUxGX1NJWkUiLCJub2RlRnJvbSIsImhlYWQiLCJ0YWlsIiwidmFscyIsInZhbCIsIm90aGVyTm9kZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRyYW5zbGF0ZSIsImVxdWFscyIsInB0IiwidG9TdHJpbmciLCJzZXRYIiwic2V0WSIsImdldERpZmZlcmVuY2UiLCJnZXRDb3B5IiwiZGltIiwic2VlZCIsImx3b3JsZE9yZ1giLCJsd29ybGRPcmdZIiwibGRldmljZU9yZ1giLCJsZGV2aWNlT3JnWSIsImx3b3JsZEV4dFgiLCJsd29ybGRFeHRZIiwibGRldmljZUV4dFgiLCJsZGV2aWNlRXh0WSIsImdldFdvcmxkT3JnWCIsIndveCIsImdldFdvcmxkT3JnWSIsIndveSIsImdldFdvcmxkRXh0WCIsInNldFdvcmxkRXh0WCIsIndleCIsImdldFdvcmxkRXh0WSIsInNldFdvcmxkRXh0WSIsIndleSIsImdldERldmljZU9yZ1giLCJkb3giLCJnZXREZXZpY2VPcmdZIiwiZG95IiwiZ2V0RGV2aWNlRXh0WCIsInNldERldmljZUV4dFgiLCJkZXgiLCJnZXREZXZpY2VFeHRZIiwic2V0RGV2aWNlRXh0WSIsImRleSIsInRyYW5zZm9ybVgiLCJ4RGV2aWNlIiwid29ybGRFeHRYIiwidHJhbnNmb3JtWSIsInlEZXZpY2UiLCJ3b3JsZEV4dFkiLCJpbnZlcnNlVHJhbnNmb3JtWCIsInhXb3JsZCIsImRldmljZUV4dFgiLCJpbnZlcnNlVHJhbnNmb3JtWSIsInlXb3JsZCIsImRldmljZUV4dFkiLCJpblBvaW50Iiwib3V0UG9pbnQiLCJsYXN0SUQiLCJpc1ByaW1pdGl2ZSIsInVuaXF1ZUlEIiwiZ2V0U3RyaW5nIiwiYXJnIiwidHlwZSIsImRlZmF1bHRzIiwicmVhZHkiLCJzdG9wIiwibm9kZURpbWVuc2lvbnNJbmNsdWRlTGFiZWxzIiwicmVmcmVzaCIsImZpdCIsInBhZGRpbmciLCJyYW5kb21pemUiLCJub2RlUmVwdWxzaW9uIiwiZWRnZUVsYXN0aWNpdHkiLCJuZXN0aW5nRmFjdG9yIiwiZ3Jhdml0eSIsIm51bUl0ZXIiLCJ0aWxlIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJ0aWxpbmdQYWRkaW5nVmVydGljYWwiLCJ0aWxpbmdQYWRkaW5nSG9yaXpvbnRhbCIsImdyYXZpdHlSYW5nZUNvbXBvdW5kIiwiZ3Jhdml0eUNvbXBvdW5kIiwiZ3Jhdml0eVJhbmdlIiwiaW5pdGlhbEVuZXJneU9uSW5jcmVtZW50YWwiLCJleHRlbmQiLCJvcHRpb25zIiwiX0NvU0VMYXlvdXQiLCJfb3B0aW9ucyIsImdldFVzZXJPcHRpb25zIiwicnVuIiwiZnJhbWVJZCIsImlkVG9MTm9kZSIsInN0b3BwZWQiLCJ0cmlnZ2VyIiwiZWxlcyIsInByb2Nlc3NDaGlsZHJlbkxpc3QiLCJnZXRUb3BNb3N0Tm9kZXMiLCJlMSIsImdldFBvc2l0aW9ucyIsImVsZSIsIml0ZXJhdGVBbmltYXRlZCIsImFmdGVyUmVwb3NpdGlvbiIsIm9uZSIsInRpY2tzUGVyRnJhbWUiLCJpc0RvbmUiLCJwb3NpdGlvbnMiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImFuaW1hdGlvbkRhdGEiLCJwTm9kZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm5vdCIsImxheW91dFBvc2l0aW9ucyIsIm5vZGVzTWFwIiwicm9vdHMiLCJjaGlsZHJlbl9vZl9jaGlsZHJlbiIsInRoZU5vZGUiLCJkaW1lbnNpb25zIiwibGF5b3V0RGltZW5zaW9ucyIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsInBvc2l0aW9uIiwicGFyc2VGbG9hdCIsImNzcyIsImlzUGFyZW50IiwiYm91bmRpbmdCb3giLCJpbmNsdWRlTGFiZWxzIiwiaW5jbHVkZU5vZGVzIiwiaXNOYU4iLCJ0aGVOZXdHcmFwaCIsImN5dG9zY2FwZSIsIkVYQ0xVREVEX05PREVTIiwiZXhjbHVkZWROb2RlTW92ZUZhY3RvciIsInJlZ2lzdGVyIiwib3JnUHJvdG90eXBlIiwiZXhjbHVkZWROb2RlcyIsIm9wdHMiLCJhcGkiLCJhcHBseU1lcmdlZExheW91dCIsImFwcGx5SW50ZXJMYXllZExheW91dCIsImFwcGx5RXh0ZW5kZWRJbnRlckxheWVkTGF5b3V0IiwiY3lfaGVhZGxlc3MiLCJjcmVhdGVIZWFkbGVzc0luc3RhbmNlIiwiaGVhZGxlc3MiLCJzdHlsZUVuYWJsZWQiLCJvdGhlckN5IiwiZWxlbWVudHMiLCJvdGhlckVsZXMiLCJhbGxfZWxlcyIsInVuaW9uIiwicG9zIiwiY29tbW9uRWxlcyIsImNvbW1vbl9pZCIsImlzTGF5b3V0U3RvcHBlZCIsImlzT3RoZXJMYXlvdXRTdG9wcGVkIiwiY29sbGVjdGlvbiIsIm5laWdoYm9yaG9vZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuRUEsSUFBSUEsb0JBQW9CLG1CQUFBQyxDQUFRLDJFQUFSLENBQXhCOztBQUVBLFNBQVNDLGFBQVQsR0FBeUIsQ0FDeEI7O0FBRUQ7QUFDQSxLQUFLLElBQUlDLElBQVQsSUFBaUJILGlCQUFqQixFQUFvQztBQUNsQ0UsZ0JBQWNDLElBQWQsSUFBc0JILGtCQUFrQkcsSUFBbEIsQ0FBdEI7QUFDRDs7QUFFREQsY0FBY0UsK0JBQWQsR0FBZ0QsS0FBaEQ7QUFDQUYsY0FBY0cseUJBQWQsR0FBMENMLGtCQUFrQk0sbUJBQTVEO0FBQ0FKLGNBQWNLLDRCQUFkLEdBQTZDLEVBQTdDO0FBQ0FMLGNBQWNNLElBQWQsR0FBcUIsSUFBckI7QUFDQU4sY0FBY08sdUJBQWQsR0FBd0MsRUFBeEM7QUFDQVAsY0FBY1EseUJBQWQsR0FBMEMsRUFBMUM7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUJWLGFBQWpCLEM7Ozs7Ozs7Ozs7Ozs7O0FDakJBLElBQUlXLGVBQWUsbUJBQUFaLENBQVEsaUVBQVIsQ0FBbkI7O0FBRUEsU0FBU2EsUUFBVCxDQUFrQkMsTUFBbEIsRUFBMEJDLE1BQTFCLEVBQWtDQyxLQUFsQyxFQUF5QztBQUN2Q0osZUFBYUssSUFBYixDQUFrQixJQUFsQixFQUF3QkgsTUFBeEIsRUFBZ0NDLE1BQWhDLEVBQXdDQyxLQUF4QztBQUNEOztBQUVESCxTQUFTSyxTQUFULEdBQXFCQyxPQUFPQyxNQUFQLENBQWNSLGFBQWFNLFNBQTNCLENBQXJCO0FBQ0EsS0FBSyxJQUFJaEIsSUFBVCxJQUFpQlUsWUFBakIsRUFBK0I7QUFDN0JDLFdBQVNYLElBQVQsSUFBaUJVLGFBQWFWLElBQWIsQ0FBakI7QUFDRDs7QUFFRFEsT0FBT0MsT0FBUCxHQUFpQkUsUUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7QUNYQSxJQUFJUSxTQUFTLG1CQUFBckIsQ0FBUSxxREFBUixDQUFiOztBQUVBLFNBQVNzQixTQUFULENBQW1CQyxNQUFuQixFQUEyQkMsUUFBM0IsRUFBcUNDLE1BQXJDLEVBQTZDO0FBQzNDSixTQUFPSixJQUFQLENBQVksSUFBWixFQUFrQk0sTUFBbEIsRUFBMEJDLFFBQTFCLEVBQW9DQyxNQUFwQztBQUNEOztBQUVESCxVQUFVSixTQUFWLEdBQXNCQyxPQUFPQyxNQUFQLENBQWNDLE9BQU9ILFNBQXJCLENBQXRCO0FBQ0EsS0FBSyxJQUFJaEIsSUFBVCxJQUFpQm1CLE1BQWpCLEVBQXlCO0FBQ3ZCQyxZQUFVcEIsSUFBVixJQUFrQm1CLE9BQU9uQixJQUFQLENBQWxCO0FBQ0Q7O0FBRURRLE9BQU9DLE9BQVAsR0FBaUJXLFNBQWpCLEM7Ozs7Ozs7Ozs7Ozs7O0FDWEEsSUFBSUksZ0JBQWdCLG1CQUFBMUIsQ0FBUSxtRUFBUixDQUFwQjs7QUFFQSxTQUFTMkIsZ0JBQVQsQ0FBMEJDLE1BQTFCLEVBQWtDO0FBQ2hDRixnQkFBY1QsSUFBZCxDQUFtQixJQUFuQixFQUF5QlcsTUFBekI7QUFDRDs7QUFFREQsaUJBQWlCVCxTQUFqQixHQUE2QkMsT0FBT0MsTUFBUCxDQUFjTSxjQUFjUixTQUE1QixDQUE3QjtBQUNBLEtBQUssSUFBSWhCLElBQVQsSUFBaUJ3QixhQUFqQixFQUFnQztBQUM5QkMsbUJBQWlCekIsSUFBakIsSUFBeUJ3QixjQUFjeEIsSUFBZCxDQUF6QjtBQUNEOztBQUVEUSxPQUFPQyxPQUFQLEdBQWlCZ0IsZ0JBQWpCLEM7Ozs7Ozs7Ozs7Ozs7O0FDWEEsSUFBSUUsV0FBVyxtQkFBQTdCLENBQVEseURBQVIsQ0FBZjtBQUNBLElBQUkyQixtQkFBbUIsbUJBQUEzQixDQUFRLHlFQUFSLENBQXZCO0FBQ0EsSUFBSXNCLFlBQVksbUJBQUF0QixDQUFRLDJEQUFSLENBQWhCO0FBQ0EsSUFBSThCLFdBQVcsbUJBQUE5QixDQUFRLHlEQUFSLENBQWY7QUFDQSxJQUFJYSxXQUFXLG1CQUFBYixDQUFRLHlEQUFSLENBQWY7QUFDQSxJQUFJQyxnQkFBZ0IsbUJBQUFELENBQVEsbUVBQVIsQ0FBcEI7QUFDQSxJQUFJRCxvQkFBb0IsbUJBQUFDLENBQVEsMkVBQVIsQ0FBeEI7QUFDQSxJQUFJK0Isa0JBQWtCLG1CQUFBL0IsQ0FBUSx1RUFBUixDQUF0QjtBQUNBLElBQUlnQyxRQUFRLG1CQUFBaEMsQ0FBUSxtREFBUixDQUFaO0FBQ0EsSUFBSWlDLFNBQVMsbUJBQUFqQyxDQUFRLHFEQUFSLENBQWI7QUFDQSxJQUFJa0MsU0FBUyxtQkFBQWxDLENBQVEscURBQVIsQ0FBYjtBQUNBLElBQUltQyxVQUFVLG1CQUFBbkMsQ0FBUSx1REFBUixDQUFkO0FBQ0EsSUFBSW9DLFlBQVksbUJBQUFwQyxDQUFRLDJEQUFSLENBQWhCO0FBQ0EsSUFBSXFCLFNBQVMsbUJBQUFyQixDQUFRLHFEQUFSLENBQWI7QUFDQSxJQUFJcUMsWUFBWSxtQkFBQXJDLENBQVEsMkRBQVIsQ0FBaEI7O0FBRUEsU0FBU3NDLFVBQVQsR0FBc0I7QUFDcEJULFdBQVNaLElBQVQsQ0FBYyxJQUFkOztBQUVBLE9BQUtzQixTQUFMLEdBQWlCLEVBQWpCLENBSG9CLENBR0M7QUFDdEI7O0FBRURELFdBQVdwQixTQUFYLEdBQXVCQyxPQUFPQyxNQUFQLENBQWNTLFNBQVNYLFNBQXZCLENBQXZCOztBQUVBLEtBQUssSUFBSWhCLElBQVQsSUFBaUIyQixRQUFqQixFQUEyQjtBQUN6QlMsYUFBV3BDLElBQVgsSUFBbUIyQixTQUFTM0IsSUFBVCxDQUFuQjtBQUNEOztBQUVEb0MsV0FBV3BCLFNBQVgsQ0FBcUJzQixlQUFyQixHQUF1QyxZQUFZO0FBQ2pELE1BQUlDLEtBQUssSUFBSWQsZ0JBQUosQ0FBcUIsSUFBckIsQ0FBVDtBQUNBLE9BQUtlLFlBQUwsR0FBb0JELEVBQXBCO0FBQ0EsU0FBT0EsRUFBUDtBQUNELENBSkQ7O0FBTUFILFdBQVdwQixTQUFYLENBQXFCeUIsUUFBckIsR0FBZ0MsVUFBVWxCLE1BQVYsRUFBa0I7QUFDaEQsU0FBTyxJQUFJSCxTQUFKLENBQWMsSUFBZCxFQUFvQixLQUFLb0IsWUFBekIsRUFBdUNqQixNQUF2QyxDQUFQO0FBQ0QsQ0FGRDs7QUFJQWEsV0FBV3BCLFNBQVgsQ0FBcUIwQixPQUFyQixHQUErQixVQUFVQyxLQUFWLEVBQWlCO0FBQzlDLFNBQU8sSUFBSWYsUUFBSixDQUFhLEtBQUtZLFlBQWxCLEVBQWdDRyxLQUFoQyxDQUFQO0FBQ0QsQ0FGRDs7QUFJQVAsV0FBV3BCLFNBQVgsQ0FBcUI0QixPQUFyQixHQUErQixVQUFVOUIsS0FBVixFQUFpQjtBQUM5QyxTQUFPLElBQUlILFFBQUosQ0FBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCRyxLQUF6QixDQUFQO0FBQ0QsQ0FGRDs7QUFJQXNCLFdBQVdwQixTQUFYLENBQXFCNkIsY0FBckIsR0FBc0MsWUFBWTtBQUNoRGxCLFdBQVNYLFNBQVQsQ0FBbUI2QixjQUFuQixDQUFrQzlCLElBQWxDLENBQXVDLElBQXZDLEVBQTZDK0IsU0FBN0M7QUFDQSxNQUFJLENBQUMsS0FBS0MsV0FBVixFQUF1QjtBQUNyQixRQUFJaEQsY0FBY0ksbUJBQWQsR0FBb0MsRUFBeEMsRUFDQTtBQUNFLFdBQUs2QyxlQUFMLEdBQXVCLEVBQXZCO0FBQ0QsS0FIRCxNQUtBO0FBQ0UsV0FBS0EsZUFBTCxHQUF1QmpELGNBQWNJLG1CQUFyQztBQUNEOztBQUVELFNBQUs4QyxrQ0FBTCxHQUNRbEQsY0FBY21ELCtDQUR0QjtBQUVBLFNBQUtDLGNBQUwsR0FDUXRELGtCQUFrQnVELHVCQUQxQjtBQUVBLFNBQUtDLGlCQUFMLEdBQ1F4RCxrQkFBa0J5RCwwQkFEMUI7QUFFQSxTQUFLQyxlQUFMLEdBQ1ExRCxrQkFBa0IyRCx3QkFEMUI7QUFFQSxTQUFLQyx1QkFBTCxHQUNRNUQsa0JBQWtCNkQsaUNBRDFCO0FBRUEsU0FBS0Msa0JBQUwsR0FDUTlELGtCQUFrQitELDRCQUQxQjtBQUVBLFNBQUtDLDBCQUFMLEdBQ1FoRSxrQkFBa0JpRSxxQ0FEMUI7QUFFRDtBQUNGLENBM0JEOztBQTZCQTFCLFdBQVdwQixTQUFYLENBQXFCVSxNQUFyQixHQUE4QixZQUFZO0FBQ3hDLE1BQUlxQyxzQkFBc0JsQyxnQkFBZ0JtQyw4QkFBMUM7QUFDQSxNQUFJRCxtQkFBSixFQUNBO0FBQ0UsU0FBS0UsZ0JBQUw7QUFDQSxTQUFLekIsWUFBTCxDQUFrQjBCLGFBQWxCO0FBQ0Q7O0FBRUQsT0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFPLEtBQUtDLGFBQUwsRUFBUDtBQUNELENBVkQ7O0FBWUFoQyxXQUFXcEIsU0FBWCxDQUFxQm9ELGFBQXJCLEdBQXFDLFlBQVk7QUFDL0MsT0FBS0MsZ0JBQUwsR0FBd0IsS0FBS0Msa0NBQUwsRUFBeEI7QUFDQSxPQUFLOUIsWUFBTCxDQUFrQitCLDZCQUFsQixDQUFnRCxLQUFLRixnQkFBckQ7QUFDQSxPQUFLRywyQkFBTDtBQUNBLE9BQUtoQyxZQUFMLENBQWtCaUMseUJBQWxCO0FBQ0EsT0FBS2pDLFlBQUwsQ0FBa0JrQyx1QkFBbEI7QUFDQSxPQUFLbEMsWUFBTCxDQUFrQm1DLE9BQWxCLEdBQTRCQyxpQkFBNUI7QUFDQSxPQUFLQyxvQkFBTDs7QUFFQSxNQUFJLENBQUMsS0FBS0MsV0FBVixFQUNBO0FBQ0UsUUFBSUMsU0FBUyxLQUFLQyxhQUFMLEVBQWI7O0FBRUE7QUFDQSxRQUFJRCxPQUFPRSxNQUFQLEdBQWdCLENBQXBCLEVBQ0E7QUFDRSxXQUFLQyxxQkFBTCxDQUEyQkgsTUFBM0I7QUFDRDtBQUNEO0FBSkEsU0FNQTtBQUNFO0FBQ0EsYUFBS0ksV0FBTDtBQUNBO0FBQ0EsYUFBSzNDLFlBQUwsQ0FBa0I0QywrQkFBbEI7QUFDQSxZQUFJQyxXQUFXLElBQUlDLEdBQUosQ0FBUSxLQUFLQyxXQUFMLEVBQVIsQ0FBZjtBQUNBLFlBQUlDLGVBQWUsS0FBS25CLGdCQUFMLENBQXNCb0IsTUFBdEIsQ0FBNkI7QUFBQSxpQkFBS0osU0FBU0ssR0FBVCxDQUFhQyxDQUFiLENBQUw7QUFBQSxTQUE3QixDQUFuQjtBQUNBLGFBQUtuRCxZQUFMLENBQWtCK0IsNkJBQWxCLENBQWdEaUIsWUFBaEQ7O0FBRUEsYUFBS0kscUJBQUw7QUFDRDtBQUNGOztBQUVELE9BQUtDLGtCQUFMO0FBQ0EsT0FBS0MsaUJBQUw7O0FBRUEsU0FBTyxJQUFQO0FBQ0QsQ0FyQ0Q7O0FBdUNBMUQsV0FBV3BCLFNBQVgsQ0FBcUIrRSxJQUFyQixHQUE0QixZQUFXO0FBQ3JDLE9BQUtDLGVBQUw7O0FBRUEsTUFBSSxLQUFLQSxlQUFMLEtBQXlCLEtBQUtDLGFBQTlCLElBQStDLENBQUMsS0FBS0MsYUFBckQsSUFBc0UsQ0FBQyxLQUFLQyxnQkFBaEYsRUFBa0c7QUFDaEcsUUFBRyxLQUFLQyxjQUFMLENBQW9CbkIsTUFBcEIsR0FBNkIsQ0FBaEMsRUFBa0M7QUFDaEMsV0FBS2lCLGFBQUwsR0FBcUIsSUFBckI7QUFDRCxLQUZELE1BR0s7QUFDSCxhQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELE1BQUksS0FBS0YsZUFBTCxHQUF1Qm5HLGtCQUFrQndHLHdCQUF6QyxJQUFxRSxDQUFyRSxJQUEyRSxDQUFDLEtBQUtILGFBQWpGLElBQWtHLENBQUMsS0FBS0MsZ0JBQTVHLEVBQ0E7QUFDRSxRQUFJLEtBQUtHLFdBQUwsRUFBSixFQUNBO0FBQ0UsVUFBRyxLQUFLRixjQUFMLENBQW9CbkIsTUFBcEIsR0FBNkIsQ0FBaEMsRUFBa0M7QUFDaEMsYUFBS2lCLGFBQUwsR0FBcUIsSUFBckI7QUFDRCxPQUZELE1BR0s7QUFDSCxlQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELFNBQUtLLGFBQUwsR0FBcUIsS0FBS0Msb0JBQUwsSUFDWixDQUFDLEtBQUtQLGFBQUwsR0FBcUIsS0FBS0QsZUFBM0IsSUFBOEMsS0FBS0MsYUFEdkMsQ0FBckI7QUFFQSxTQUFLUSxlQUFMLEdBQXVCQyxLQUFLQyxJQUFMLENBQVUsS0FBS0Msc0JBQUwsR0FBOEJGLEtBQUtHLElBQUwsQ0FBVSxLQUFLTixhQUFmLENBQXhDLENBQXZCO0FBQ0Q7QUFDRDtBQUNBLE1BQUcsS0FBS0wsYUFBUixFQUFzQjtBQUNwQixRQUFHLEtBQUtZLGtCQUFMLEdBQTBCLEVBQTFCLElBQWdDLENBQW5DLEVBQXFDO0FBQ25DLFVBQUcsS0FBS1YsY0FBTCxDQUFvQm5CLE1BQXBCLEdBQTZCLENBQWhDLEVBQW1DO0FBQ2pDLGFBQUt6QyxZQUFMLENBQWtCdUUsWUFBbEI7QUFDQSxhQUFLQyxVQUFMO0FBQ0EsYUFBS0MsUUFBTCxDQUFjLEtBQUtiLGNBQW5CO0FBQ0E7QUFDQSxhQUFLNUQsWUFBTCxDQUFrQjRDLCtCQUFsQjtBQUNBLFlBQUlDLFdBQVcsSUFBSUMsR0FBSixDQUFRLEtBQUtDLFdBQUwsRUFBUixDQUFmO0FBQ0EsWUFBSUMsZUFBZSxLQUFLbkIsZ0JBQUwsQ0FBc0JvQixNQUF0QixDQUE2QjtBQUFBLGlCQUFLSixTQUFTSyxHQUFULENBQWFDLENBQWIsQ0FBTDtBQUFBLFNBQTdCLENBQW5CO0FBQ0EsYUFBS25ELFlBQUwsQ0FBa0IrQiw2QkFBbEIsQ0FBZ0RpQixZQUFoRDs7QUFFQSxhQUFLaEQsWUFBTCxDQUFrQnVFLFlBQWxCO0FBQ0EsYUFBS0MsVUFBTDtBQUNBLGFBQUtULGFBQUwsR0FBcUIxRyxrQkFBa0JxSCxrQ0FBdkM7QUFDRCxPQWJELE1BY0s7QUFDSCxhQUFLaEIsYUFBTCxHQUFxQixLQUFyQjtBQUNBLGFBQUtDLGdCQUFMLEdBQXdCLElBQXhCO0FBQ0Q7QUFDRjtBQUNELFNBQUtXLGtCQUFMO0FBQ0Q7QUFDRDtBQUNBLE1BQUcsS0FBS1gsZ0JBQVIsRUFBeUI7QUFDdkIsUUFBSSxLQUFLRyxXQUFMLEVBQUosRUFDQTtBQUNFLGFBQU8sSUFBUDtBQUNEO0FBQ0QsUUFBRyxLQUFLYSxxQkFBTCxHQUE2QixFQUE3QixJQUFtQyxDQUF0QyxFQUF3QztBQUN0QyxXQUFLM0UsWUFBTCxDQUFrQnVFLFlBQWxCO0FBQ0EsV0FBS0MsVUFBTDtBQUNEO0FBQ0QsU0FBS1QsYUFBTCxHQUFxQjFHLGtCQUFrQnFILGtDQUFsQixJQUF3RCxDQUFDLE1BQU0sS0FBS0MscUJBQVosSUFBcUMsR0FBN0YsQ0FBckI7QUFDQSxTQUFLQSxxQkFBTDtBQUNEOztBQUVELE9BQUtDLGlCQUFMLEdBQXlCLENBQXpCO0FBQ0EsT0FBSzVFLFlBQUwsQ0FBa0J1RSxZQUFsQjtBQUNBLE9BQUtNLGdCQUFMO0FBQ0EsT0FBS0MsbUJBQUw7QUFDQSxPQUFLQyx1QkFBTDtBQUNBLE9BQUtDLFNBQUw7QUFDQSxPQUFLQyxPQUFMOztBQUVBLFNBQU8sS0FBUCxDQTFFcUMsQ0EwRXZCO0FBQ2YsQ0EzRUQ7O0FBNkVBckYsV0FBV3BCLFNBQVgsQ0FBcUIwRyxnQkFBckIsR0FBd0MsWUFBVztBQUNqRCxNQUFJckMsV0FBVyxLQUFLN0MsWUFBTCxDQUFrQitDLFdBQWxCLEVBQWY7QUFDQSxNQUFJb0MsUUFBUSxFQUFaO0FBQ0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUl2QyxTQUFTSixNQUE3QixFQUFxQzJDLEdBQXJDLEVBQTBDO0FBQ3hDLFFBQUlDLE9BQU94QyxTQUFTdUMsQ0FBVCxFQUFZQyxJQUF2QjtBQUNBLFFBQUlDLEtBQUt6QyxTQUFTdUMsQ0FBVCxFQUFZRSxFQUFyQjtBQUNBSCxVQUFNRyxFQUFOLElBQVk7QUFDVkEsVUFBSUEsRUFETTtBQUVWbkMsU0FBR2tDLEtBQUtFLFVBQUwsRUFGTztBQUdWQyxTQUFHSCxLQUFLSSxVQUFMLEVBSE87QUFJVkMsU0FBR0wsS0FBS00sS0FKRTtBQUtWQyxTQUFHUCxLQUFLUTtBQUxFLEtBQVo7QUFPRDs7QUFFRCxTQUFPVixLQUFQO0FBQ0QsQ0FoQkQ7O0FBa0JBdkYsV0FBV3BCLFNBQVgsQ0FBcUI4RSxpQkFBckIsR0FBeUMsWUFBWTtBQUNuRCxPQUFLYyxzQkFBTCxHQUE4QixFQUE5QjtBQUNBLE9BQUtILGVBQUwsR0FBdUIsS0FBS0csc0JBQTVCO0FBQ0EsTUFBSTBCLGNBQWMsS0FBbEI7O0FBRUE7QUFDQSxNQUFLekksa0JBQWtCMEksT0FBbEIsS0FBOEIsUUFBbkMsRUFBOEM7QUFDNUMsU0FBS0MsSUFBTCxDQUFVLGVBQVY7QUFDRCxHQUZELE1BR0s7QUFDSDtBQUNBLFdBQU8sQ0FBQ0YsV0FBUixFQUFxQjtBQUNuQkEsb0JBQWMsS0FBS3ZDLElBQUwsRUFBZDtBQUNEOztBQUVELFNBQUt2RCxZQUFMLENBQWtCdUUsWUFBbEI7QUFDRDtBQUNGLENBakJEOztBQW1CQTNFLFdBQVdwQixTQUFYLENBQXFCc0Qsa0NBQXJCLEdBQTBELFlBQVk7QUFDcEUsTUFBSW1FLFdBQVcsRUFBZjtBQUNBLE1BQUlDLEtBQUo7O0FBRUEsTUFBSUMsU0FBUyxLQUFLbkcsWUFBTCxDQUFrQm9HLFNBQWxCLEVBQWI7QUFDQSxNQUFJQyxPQUFPRixPQUFPMUQsTUFBbEI7QUFDQSxNQUFJMkMsQ0FBSjtBQUNBLE9BQUtBLElBQUksQ0FBVCxFQUFZQSxJQUFJaUIsSUFBaEIsRUFBc0JqQixHQUF0QixFQUNBO0FBQ0VjLFlBQVFDLE9BQU9mLENBQVAsQ0FBUjs7QUFFQWMsVUFBTUksZUFBTjs7QUFFQSxRQUFJLENBQUNKLE1BQU1LLFdBQVgsRUFDQTtBQUNFTixpQkFBV0EsU0FBU08sTUFBVCxDQUFnQk4sTUFBTU8sUUFBTixFQUFoQixDQUFYO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPUixRQUFQO0FBQ0QsQ0FwQkQ7O0FBc0JBckcsV0FBV3BCLFNBQVgsQ0FBcUJ3RCwyQkFBckIsR0FBbUQsWUFDbkQ7QUFDRSxNQUFJMEUsSUFBSjtBQUNBLE1BQUk3RCxXQUFXLEtBQUs3QyxZQUFMLENBQWtCK0MsV0FBbEIsRUFBZjs7QUFFQSxPQUFJLElBQUlxQyxJQUFJLENBQVosRUFBZUEsSUFBSXZDLFNBQVNKLE1BQTVCLEVBQW9DMkMsR0FBcEMsRUFDQTtBQUNJc0IsV0FBTzdELFNBQVN1QyxDQUFULENBQVA7QUFDQXNCLFNBQUtDLFlBQUwsR0FBb0JELEtBQUtFLGVBQUwsRUFBcEI7QUFDSDtBQUNGLENBVkQ7O0FBWUFoSCxXQUFXcEIsU0FBWCxDQUFxQmlELGdCQUFyQixHQUF3QyxZQUFZO0FBQ2xELE1BQUlvRixRQUFRLEVBQVo7QUFDQUEsVUFBUUEsTUFBTUwsTUFBTixDQUFhLEtBQUt4RyxZQUFMLENBQWtCOEcsV0FBbEIsRUFBYixDQUFSO0FBQ0EsTUFBSUMsVUFBVSxJQUFJQyxPQUFKLEVBQWQ7QUFDQSxNQUFJNUIsQ0FBSjtBQUNBLE9BQUtBLElBQUksQ0FBVCxFQUFZQSxJQUFJeUIsTUFBTXBFLE1BQXRCLEVBQThCMkMsR0FBOUIsRUFDQTtBQUNFLFFBQUk2QixPQUFPSixNQUFNekIsQ0FBTixDQUFYOztBQUVBLFFBQUksQ0FBQzJCLFFBQVFHLFFBQVIsQ0FBaUJELElBQWpCLENBQUwsRUFDQTtBQUNFLFVBQUk3SSxTQUFTNkksS0FBS0UsU0FBTCxFQUFiO0FBQ0EsVUFBSTlJLFNBQVM0SSxLQUFLRyxTQUFMLEVBQWI7O0FBRUEsVUFBSWhKLFVBQVVDLE1BQWQsRUFDQTtBQUNFNEksYUFBS0ksYUFBTCxHQUFxQkMsSUFBckIsQ0FBMEIsSUFBSS9ILE1BQUosRUFBMUI7QUFDQTBILGFBQUtJLGFBQUwsR0FBcUJDLElBQXJCLENBQTBCLElBQUkvSCxNQUFKLEVBQTFCO0FBQ0EsYUFBS2dJLDZCQUFMLENBQW1DTixJQUFuQztBQUNBRixnQkFBUVMsR0FBUixDQUFZUCxJQUFaO0FBQ0QsT0FORCxNQVFBO0FBQ0UsWUFBSVEsV0FBVyxFQUFmOztBQUVBQSxtQkFBV0EsU0FBU2pCLE1BQVQsQ0FBZ0JwSSxPQUFPc0osaUJBQVAsQ0FBeUJySixNQUF6QixDQUFoQixDQUFYO0FBQ0FvSixtQkFBV0EsU0FBU2pCLE1BQVQsQ0FBZ0JuSSxPQUFPcUosaUJBQVAsQ0FBeUJ0SixNQUF6QixDQUFoQixDQUFYOztBQUVBLFlBQUksQ0FBQzJJLFFBQVFHLFFBQVIsQ0FBaUJPLFNBQVMsQ0FBVCxDQUFqQixDQUFMLEVBQ0E7QUFDRSxjQUFJQSxTQUFTaEYsTUFBVCxHQUFrQixDQUF0QixFQUNBO0FBQ0UsZ0JBQUlrRixDQUFKO0FBQ0EsaUJBQUtBLElBQUksQ0FBVCxFQUFZQSxJQUFJRixTQUFTaEYsTUFBekIsRUFBaUNrRixHQUFqQyxFQUNBO0FBQ0Usa0JBQUlDLFlBQVlILFNBQVNFLENBQVQsQ0FBaEI7QUFDQUMsd0JBQVVQLGFBQVYsR0FBMEJDLElBQTFCLENBQStCLElBQUkvSCxNQUFKLEVBQS9CO0FBQ0EsbUJBQUtnSSw2QkFBTCxDQUFtQ0ssU0FBbkM7QUFDRDtBQUNGO0FBQ0RiLGtCQUFRYyxNQUFSLENBQWVDLElBQWY7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsUUFBSWYsUUFBUVYsSUFBUixNQUFrQlEsTUFBTXBFLE1BQTVCLEVBQ0E7QUFDRTtBQUNEO0FBQ0Y7QUFDRixDQWxERDs7QUFvREE3QyxXQUFXcEIsU0FBWCxDQUFxQmtFLHFCQUFyQixHQUE2QyxVQUFVSCxNQUFWLEVBQWtCO0FBQzdEO0FBQ0EsTUFBSXdGLHVCQUF1QixJQUFJekksS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQTNCO0FBQ0EsTUFBSTBJLGtCQUFrQjlELEtBQUtDLElBQUwsQ0FBVUQsS0FBS0csSUFBTCxDQUFVOUIsT0FBT0UsTUFBakIsQ0FBVixDQUF0QjtBQUNBLE1BQUlvRCxTQUFTLENBQWI7QUFDQSxNQUFJb0MsV0FBVyxDQUFmO0FBQ0EsTUFBSUMsV0FBVyxDQUFmO0FBQ0EsTUFBSUMsUUFBUSxJQUFJNUksTUFBSixDQUFXLENBQVgsRUFBYyxDQUFkLENBQVo7O0FBRUEsT0FBSyxJQUFJNkYsSUFBSSxDQUFiLEVBQWdCQSxJQUFJN0MsT0FBT0UsTUFBM0IsRUFBbUMyQyxHQUFuQyxFQUNBO0FBQ0UsUUFBSUEsSUFBSTRDLGVBQUosSUFBdUIsQ0FBM0IsRUFDQTtBQUNFO0FBQ0E7QUFDQUUsaUJBQVcsQ0FBWDtBQUNBRCxpQkFBV3BDLE1BQVg7O0FBRUEsVUFBSVQsS0FBSyxDQUFULEVBQ0E7QUFDRTZDLG9CQUFZMUssY0FBY0ssNEJBQTFCO0FBQ0Q7O0FBRURpSSxlQUFTLENBQVQ7QUFDRDs7QUFFRCxRQUFJdUMsT0FBTzdGLE9BQU82QyxDQUFQLENBQVg7O0FBRUE7QUFDQSxRQUFJaUQsYUFBYTdJLE9BQU84SSxnQkFBUCxDQUF3QkYsSUFBeEIsQ0FBakI7O0FBRUE7QUFDQUwseUJBQXFCNUUsQ0FBckIsR0FBeUIrRSxRQUF6QjtBQUNBSCx5QkFBcUJ2QyxDQUFyQixHQUF5QnlDLFFBQXpCOztBQUVBO0FBQ0FFLFlBQ1F2SSxXQUFXMkksWUFBWCxDQUF3QkgsSUFBeEIsRUFBOEJDLFVBQTlCLEVBQTBDTixvQkFBMUMsQ0FEUjs7QUFHQSxRQUFJSSxNQUFNM0MsQ0FBTixHQUFVSyxNQUFkLEVBQ0E7QUFDRUEsZUFBUzNCLEtBQUtzRSxLQUFMLENBQVdMLE1BQU0zQyxDQUFqQixDQUFUO0FBQ0Q7O0FBRUQwQyxlQUFXaEUsS0FBS3NFLEtBQUwsQ0FBV0wsTUFBTWhGLENBQU4sR0FBVTVGLGNBQWNLLDRCQUFuQyxDQUFYO0FBQ0Q7O0FBRUQsT0FBSzZLLFNBQUwsQ0FDUSxJQUFJbEosTUFBSixDQUFXRixnQkFBZ0JxSixjQUFoQixHQUFpQ1AsTUFBTWhGLENBQU4sR0FBVSxDQUF0RCxFQUNROUQsZ0JBQWdCc0osY0FBaEIsR0FBaUNSLE1BQU0zQyxDQUFOLEdBQVUsQ0FEbkQsQ0FEUjtBQUdELENBbEREOztBQW9EQTVGLFdBQVcySSxZQUFYLEdBQTBCLFVBQVVILElBQVYsRUFBZ0JDLFVBQWhCLEVBQTRCTyxhQUE1QixFQUEyQztBQUNuRSxNQUFJQyxZQUFZM0UsS0FBSzRFLEdBQUwsQ0FBUyxLQUFLQyxpQkFBTCxDQUF1QlgsSUFBdkIsQ0FBVCxFQUNSN0ssY0FBY0cseUJBRE4sQ0FBaEI7QUFFQWtDLGFBQVdvSixrQkFBWCxDQUE4QlgsVUFBOUIsRUFBMEMsSUFBMUMsRUFBZ0QsQ0FBaEQsRUFBbUQsR0FBbkQsRUFBd0QsQ0FBeEQsRUFBMkRRLFNBQTNEO0FBQ0EsTUFBSUksU0FBU3RLLE9BQU91SyxlQUFQLENBQXVCZCxJQUF2QixDQUFiOztBQUVBLE1BQUlLLFlBQVksSUFBSTlJLFNBQUosRUFBaEI7QUFDQThJLFlBQVVVLGFBQVYsQ0FBd0JGLE9BQU9HLE9BQVAsRUFBeEI7QUFDQVgsWUFBVVksYUFBVixDQUF3QkosT0FBT0ssT0FBUCxFQUF4QjtBQUNBYixZQUFVYyxZQUFWLENBQXVCWCxjQUFjekYsQ0FBckM7QUFDQXNGLFlBQVVlLFlBQVYsQ0FBdUJaLGNBQWNwRCxDQUFyQzs7QUFFQSxPQUFLLElBQUlKLElBQUksQ0FBYixFQUFnQkEsSUFBSWdELEtBQUszRixNQUF6QixFQUFpQzJDLEdBQWpDLEVBQ0E7QUFDRSxRQUFJc0IsT0FBTzBCLEtBQUtoRCxDQUFMLENBQVg7QUFDQXNCLFNBQUsrQixTQUFMLENBQWVBLFNBQWY7QUFDRDs7QUFFRCxNQUFJZ0IsY0FDSSxJQUFJbEssTUFBSixDQUFXMEosT0FBT1MsT0FBUCxFQUFYLEVBQTZCVCxPQUFPVSxPQUFQLEVBQTdCLENBRFI7O0FBR0EsU0FBT2xCLFVBQVVtQixxQkFBVixDQUFnQ0gsV0FBaEMsQ0FBUDtBQUNELENBdEJEOztBQXdCQTdKLFdBQVdvSixrQkFBWCxHQUFnQyxVQUFVdEMsSUFBVixFQUFnQm1ELFlBQWhCLEVBQThCQyxVQUE5QixFQUEwQ0MsUUFBMUMsRUFBb0RDLFFBQXBELEVBQThEQyxnQkFBOUQsRUFBZ0Y7QUFDOUc7QUFDQSxNQUFJQyxlQUFlLENBQUVILFdBQVdELFVBQVosR0FBMEIsQ0FBM0IsSUFBZ0MsQ0FBbkQ7O0FBRUEsTUFBSUksZUFBZSxDQUFuQixFQUNBO0FBQ0VBLG9CQUFnQixHQUFoQjtBQUNEOztBQUVELE1BQUlDLFlBQVksQ0FBQ0QsZUFBZUosVUFBaEIsSUFBOEIsR0FBOUM7QUFDQSxNQUFJTSxPQUFRRCxZQUFZekssVUFBVTJLLE1BQXZCLEdBQWlDLEdBQTVDOztBQUVBO0FBQ0EsTUFBSUMsV0FBV3BHLEtBQUtxRyxHQUFMLENBQVNILElBQVQsQ0FBZjtBQUNBLE1BQUlJLEtBQUtSLFdBQVc5RixLQUFLcUcsR0FBTCxDQUFTSCxJQUFULENBQXBCO0FBQ0EsTUFBSUssS0FBS1QsV0FBVzlGLEtBQUt3RyxHQUFMLENBQVNOLElBQVQsQ0FBcEI7O0FBRUExRCxPQUFLaUUsU0FBTCxDQUFlSCxFQUFmLEVBQW1CQyxFQUFuQjs7QUFFQTtBQUNBO0FBQ0EsTUFBSUcsZ0JBQWdCLEVBQXBCO0FBQ0FBLGtCQUFnQkEsY0FBY3BFLE1BQWQsQ0FBcUJFLEtBQUttRSxRQUFMLEVBQXJCLENBQWhCO0FBQ0EsTUFBSUMsYUFBYUYsY0FBY25JLE1BQS9COztBQUVBLE1BQUlvSCxnQkFBZ0IsSUFBcEIsRUFDQTtBQUNFaUI7QUFDRDs7QUFFRCxNQUFJQyxjQUFjLENBQWxCOztBQUVBLE1BQUlDLGdCQUFnQkosY0FBY25JLE1BQWxDO0FBQ0EsTUFBSXdJLFVBQUo7O0FBRUEsTUFBSXBFLFFBQVFILEtBQUt3RSxlQUFMLENBQXFCckIsWUFBckIsQ0FBWjs7QUFFQTtBQUNBO0FBQ0EsU0FBT2hELE1BQU1wRSxNQUFOLEdBQWUsQ0FBdEIsRUFDQTtBQUNFO0FBQ0EsUUFBSTBJLE9BQU90RSxNQUFNLENBQU4sQ0FBWDtBQUNBQSxVQUFNdUUsTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEI7QUFDQSxRQUFJQyxRQUFRVCxjQUFjVSxPQUFkLENBQXNCSCxJQUF0QixDQUFaO0FBQ0EsUUFBSUUsU0FBUyxDQUFiLEVBQWdCO0FBQ2RULG9CQUFjUSxNQUFkLENBQXFCQyxLQUFyQixFQUE0QixDQUE1QjtBQUNEO0FBQ0RMO0FBQ0FGO0FBQ0Q7O0FBRUQsTUFBSWpCLGdCQUFnQixJQUFwQixFQUNBO0FBQ0U7QUFDQW9CLGlCQUFhLENBQUNMLGNBQWNVLE9BQWQsQ0FBc0J6RSxNQUFNLENBQU4sQ0FBdEIsSUFBa0MsQ0FBbkMsSUFBd0NtRSxhQUFyRDtBQUNELEdBSkQsTUFNQTtBQUNFQyxpQkFBYSxDQUFiO0FBQ0Q7O0FBRUQsTUFBSU0sWUFBWXJILEtBQUtzSCxHQUFMLENBQVN6QixXQUFXRCxVQUFwQixJQUFrQ2dCLFVBQWxEOztBQUVBLE9BQUssSUFBSTFGLElBQUk2RixVQUFiLEVBQ1FGLGVBQWVELFVBRHZCLEVBRVExRixJQUFLLEVBQUVBLENBQUgsR0FBUTRGLGFBRnBCLEVBR0E7QUFDRSxRQUFJUyxrQkFDSWIsY0FBY3hGLENBQWQsRUFBaUJzRyxXQUFqQixDQUE2QmhGLElBQTdCLENBRFI7O0FBR0E7QUFDQSxRQUFJK0UsbUJBQW1CNUIsWUFBdkIsRUFDQTtBQUNFO0FBQ0Q7O0FBRUQsUUFBSThCLGtCQUNJLENBQUM3QixhQUFhaUIsY0FBY1EsU0FBNUIsSUFBeUMsR0FEakQ7QUFFQSxRQUFJSyxnQkFBZ0IsQ0FBQ0Qsa0JBQWtCSixTQUFuQixJQUFnQyxHQUFwRDs7QUFFQTNMLGVBQVdvSixrQkFBWCxDQUE4QnlDLGVBQTlCLEVBQ1EvRSxJQURSLEVBRVFpRixlQUZSLEVBRXlCQyxhQUZ6QixFQUdRNUIsV0FBV0MsZ0JBSG5CLEVBR3FDQSxnQkFIckM7O0FBS0FjO0FBQ0Q7QUFDRixDQXhGRDs7QUEwRkFuTCxXQUFXbUosaUJBQVgsR0FBK0IsVUFBVVgsSUFBVixFQUFnQjtBQUM3QyxNQUFJeUQsY0FBY3BNLFFBQVFxTSxTQUExQjs7QUFFQSxPQUFLLElBQUkxRyxJQUFJLENBQWIsRUFBZ0JBLElBQUlnRCxLQUFLM0YsTUFBekIsRUFBaUMyQyxHQUFqQyxFQUNBO0FBQ0UsUUFBSXNCLE9BQU8wQixLQUFLaEQsQ0FBTCxDQUFYO0FBQ0EsUUFBSTJHLFdBQVdyRixLQUFLc0YsV0FBTCxFQUFmOztBQUVBLFFBQUlELFdBQVdGLFdBQWYsRUFDQTtBQUNFQSxvQkFBY0UsUUFBZDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0YsV0FBUDtBQUNELENBZkQ7O0FBaUJBak0sV0FBV3BCLFNBQVgsQ0FBcUJ5TixrQkFBckIsR0FBMEMsWUFBWTtBQUNwRDtBQUNBLFNBQVEsS0FBSyxLQUFLdEssS0FBTCxHQUFhLENBQWxCLElBQXVCLEtBQUtuQixlQUFwQztBQUNELENBSEQ7O0FBS0E7O0FBRUE7QUFDQVosV0FBV3BCLFNBQVgsQ0FBcUIwTixzQkFBckIsR0FBOEMsWUFBWTtBQUN4RCxNQUFJQyxPQUFPLElBQVg7QUFDQTtBQUNBLE1BQUlDLG1CQUFtQixFQUF2QixDQUh3RCxDQUc3QjtBQUMzQixPQUFLQyxZQUFMLEdBQW9CLEVBQXBCLENBSndELENBSWhDO0FBQ3hCLE9BQUtDLGFBQUwsR0FBcUIsRUFBckIsQ0FMd0QsQ0FLL0I7O0FBRXpCLE1BQUlDLGFBQWEsRUFBakIsQ0FQd0QsQ0FPbkM7QUFDckIsTUFBSTFKLFdBQVcsS0FBSzdDLFlBQUwsQ0FBa0IrQyxXQUFsQixFQUFmOztBQUVBO0FBQ0EsT0FBSyxJQUFJcUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJdkMsU0FBU0osTUFBN0IsRUFBcUMyQyxHQUFyQyxFQUEwQztBQUN4QyxRQUFJc0IsT0FBTzdELFNBQVN1QyxDQUFULENBQVg7QUFDQSxRQUFJdkcsU0FBUzZILEtBQUs4RixTQUFMLEVBQWI7QUFDQTtBQUNBLFFBQUksS0FBS0MseUJBQUwsQ0FBK0IvRixJQUEvQixNQUF5QyxDQUF6QyxLQUFnRDdILE9BQU95RyxFQUFQLElBQWFvSCxTQUFiLElBQTBCLENBQUMsS0FBS0MsWUFBTCxDQUFrQjlOLE1BQWxCLENBQTNFLENBQUosRUFBNkc7QUFDM0cwTixpQkFBV2pGLElBQVgsQ0FBZ0JaLElBQWhCO0FBQ0Q7QUFDRjs7QUFFRDtBQUNBLE9BQUssSUFBSXRCLElBQUksQ0FBYixFQUFnQkEsSUFBSW1ILFdBQVc5SixNQUEvQixFQUF1QzJDLEdBQXZDLEVBQ0E7QUFDRSxRQUFJc0IsT0FBTzZGLFdBQVduSCxDQUFYLENBQVgsQ0FERixDQUM0QjtBQUMxQixRQUFJd0gsT0FBT2xHLEtBQUs4RixTQUFMLEdBQWlCbEgsRUFBNUIsQ0FGRixDQUVrQzs7QUFFaEMsUUFBSSxPQUFPOEcsaUJBQWlCUSxJQUFqQixDQUFQLEtBQWtDLFdBQXRDLEVBQ0VSLGlCQUFpQlEsSUFBakIsSUFBeUIsRUFBekI7O0FBRUZSLHFCQUFpQlEsSUFBakIsSUFBeUJSLGlCQUFpQlEsSUFBakIsRUFBdUJwRyxNQUF2QixDQUE4QkUsSUFBOUIsQ0FBekIsQ0FQRixDQU9nRTtBQUMvRDs7QUFFRDtBQUNBakksU0FBT29PLElBQVAsQ0FBWVQsZ0JBQVosRUFBOEJVLE9BQTlCLENBQXNDLFVBQVNGLElBQVQsRUFBZTtBQUNuRCxRQUFJUixpQkFBaUJRLElBQWpCLEVBQXVCbkssTUFBdkIsR0FBZ0MsQ0FBcEMsRUFBdUM7QUFDckMsVUFBSXNLLGtCQUFrQixtQkFBbUJILElBQXpDLENBRHFDLENBQ1U7QUFDL0NULFdBQUtFLFlBQUwsQ0FBa0JVLGVBQWxCLElBQXFDWCxpQkFBaUJRLElBQWpCLENBQXJDLENBRnFDLENBRXdCOztBQUU3RCxVQUFJL04sU0FBU3VOLGlCQUFpQlEsSUFBakIsRUFBdUIsQ0FBdkIsRUFBMEJKLFNBQTFCLEVBQWIsQ0FKcUMsQ0FJZTs7QUFFcEQ7QUFDQSxVQUFJUSxnQkFBZ0IsSUFBSTVOLFFBQUosQ0FBYStNLEtBQUtuTSxZQUFsQixDQUFwQjtBQUNBZ04sb0JBQWMxSCxFQUFkLEdBQW1CeUgsZUFBbkI7QUFDQUMsb0JBQWNDLFdBQWQsR0FBNEJwTyxPQUFPb08sV0FBUCxJQUFzQixDQUFsRDtBQUNBRCxvQkFBY0UsWUFBZCxHQUE2QnJPLE9BQU9xTyxZQUFQLElBQXVCLENBQXBEO0FBQ0FGLG9CQUFjRyxhQUFkLEdBQThCdE8sT0FBT3NPLGFBQVAsSUFBd0IsQ0FBdEQ7QUFDQUgsb0JBQWNJLFVBQWQsR0FBMkJ2TyxPQUFPdU8sVUFBUCxJQUFxQixDQUFoRDs7QUFFQWpCLFdBQUtHLGFBQUwsQ0FBbUJTLGVBQW5CLElBQXNDQyxhQUF0Qzs7QUFFQSxVQUFJSyxtQkFBbUJsQixLQUFLbUIsZUFBTCxHQUF1QjlGLEdBQXZCLENBQTJCMkUsS0FBS2xNLFFBQUwsRUFBM0IsRUFBNEMrTSxhQUE1QyxDQUF2QjtBQUNBLFVBQUlPLGNBQWMxTyxPQUFPMk8sUUFBUCxFQUFsQjs7QUFFQTtBQUNBRCxrQkFBWS9GLEdBQVosQ0FBZ0J3RixhQUFoQjs7QUFFQTtBQUNBLFdBQUssSUFBSTVILElBQUksQ0FBYixFQUFnQkEsSUFBSWdILGlCQUFpQlEsSUFBakIsRUFBdUJuSyxNQUEzQyxFQUFtRDJDLEdBQW5ELEVBQXdEO0FBQ3RELFlBQUlzQixPQUFPMEYsaUJBQWlCUSxJQUFqQixFQUF1QnhILENBQXZCLENBQVg7O0FBRUFtSSxvQkFBWUUsTUFBWixDQUFtQi9HLElBQW5CO0FBQ0EyRyx5QkFBaUI3RixHQUFqQixDQUFxQmQsSUFBckI7QUFDRDtBQUNGO0FBQ0YsR0EvQkQ7QUFnQ0QsQ0FqRUQ7O0FBbUVBOUcsV0FBV3BCLFNBQVgsQ0FBcUJrUCxjQUFyQixHQUFzQyxZQUFZO0FBQ2hELE1BQUlDLGdCQUFnQixFQUFwQjtBQUNBLE1BQUlDLFdBQVcsRUFBZjs7QUFFQTtBQUNBLE9BQUtDLHFCQUFMOztBQUVBLE9BQUssSUFBSXpJLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLMEksYUFBTCxDQUFtQnJMLE1BQXZDLEVBQStDMkMsR0FBL0MsRUFBb0Q7O0FBRWxEd0ksYUFBUyxLQUFLRSxhQUFMLENBQW1CMUksQ0FBbkIsRUFBc0JFLEVBQS9CLElBQXFDLEtBQUt3SSxhQUFMLENBQW1CMUksQ0FBbkIsQ0FBckM7QUFDQXVJLGtCQUFjLEtBQUtHLGFBQUwsQ0FBbUIxSSxDQUFuQixFQUFzQkUsRUFBcEMsSUFBMEMsR0FBR2tCLE1BQUgsQ0FBVSxLQUFLc0gsYUFBTCxDQUFtQjFJLENBQW5CLEVBQXNCb0ksUUFBdEIsR0FBaUMvRyxRQUFqQyxFQUFWLENBQTFDOztBQUVBO0FBQ0EsU0FBS3pHLFlBQUwsQ0FBa0J5TixNQUFsQixDQUF5QixLQUFLSyxhQUFMLENBQW1CMUksQ0FBbkIsRUFBc0JvSSxRQUF0QixFQUF6QjtBQUNBLFNBQUtNLGFBQUwsQ0FBbUIxSSxDQUFuQixFQUFzQjJJLEtBQXRCLEdBQThCLElBQTlCO0FBQ0Q7O0FBRUQsT0FBSy9OLFlBQUwsQ0FBa0JnTyxhQUFsQjs7QUFFQTtBQUNBLE9BQUtDLG1CQUFMLENBQXlCTixhQUF6QixFQUF3Q0MsUUFBeEM7QUFDRCxDQXJCRDs7QUF1QkFoTyxXQUFXcEIsU0FBWCxDQUFxQjBQLHNCQUFyQixHQUE4QyxZQUFZO0FBQ3hELE1BQUkvQixPQUFPLElBQVg7QUFDQSxNQUFJZ0Msc0JBQXNCLEtBQUtBLG1CQUFMLEdBQTJCLEVBQXJEOztBQUVBMVAsU0FBT29PLElBQVAsQ0FBWSxLQUFLUixZQUFqQixFQUErQlMsT0FBL0IsQ0FBdUMsVUFBU3hILEVBQVQsRUFBYTtBQUNsRCxRQUFJOEksZUFBZWpDLEtBQUtHLGFBQUwsQ0FBbUJoSCxFQUFuQixDQUFuQixDQURrRCxDQUNQOztBQUUzQzZJLHdCQUFvQjdJLEVBQXBCLElBQTBCNkcsS0FBS2tDLFNBQUwsQ0FBZWxDLEtBQUtFLFlBQUwsQ0FBa0IvRyxFQUFsQixDQUFmLEVBQXNDOEksYUFBYW5CLFdBQWIsR0FBMkJtQixhQUFhbEIsWUFBOUUsQ0FBMUI7O0FBRUE7QUFDQWtCLGlCQUFhL0ksSUFBYixDQUFrQk0sS0FBbEIsR0FBMEJ3SSxvQkFBb0I3SSxFQUFwQixFQUF3QkssS0FBbEQ7QUFDQXlJLGlCQUFhL0ksSUFBYixDQUFrQlEsTUFBbEIsR0FBMkJzSSxvQkFBb0I3SSxFQUFwQixFQUF3Qk8sTUFBbkQ7QUFDRCxHQVJEO0FBU0QsQ0FiRDs7QUFlQWpHLFdBQVdwQixTQUFYLENBQXFCOFAsbUJBQXJCLEdBQTJDLFlBQVk7QUFDckQsT0FBSyxJQUFJbEosSUFBSSxLQUFLMEksYUFBTCxDQUFtQnJMLE1BQW5CLEdBQTRCLENBQXpDLEVBQTRDMkMsS0FBSyxDQUFqRCxFQUFvREEsR0FBcEQsRUFBeUQ7QUFDdkQsUUFBSW1KLGdCQUFnQixLQUFLVCxhQUFMLENBQW1CMUksQ0FBbkIsQ0FBcEI7QUFDQSxRQUFJRSxLQUFLaUosY0FBY2pKLEVBQXZCO0FBQ0EsUUFBSWtKLG1CQUFtQkQsY0FBY3RCLFdBQXJDO0FBQ0EsUUFBSXdCLGlCQUFpQkYsY0FBY25CLFVBQW5DOztBQUVBLFNBQUtzQixlQUFMLENBQXFCLEtBQUtDLGVBQUwsQ0FBcUJySixFQUFyQixDQUFyQixFQUErQ2lKLGNBQWNsSixJQUFkLENBQW1CbEMsQ0FBbEUsRUFBcUVvTCxjQUFjbEosSUFBZCxDQUFtQkcsQ0FBeEYsRUFBMkZnSixnQkFBM0YsRUFBNkdDLGNBQTdHO0FBQ0Q7QUFDRixDQVREOztBQVdBN08sV0FBV3BCLFNBQVgsQ0FBcUJvUSwyQkFBckIsR0FBbUQsWUFBWTtBQUM3RCxNQUFJekMsT0FBTyxJQUFYO0FBQ0EsTUFBSTBDLFlBQVksS0FBS1YsbUJBQXJCOztBQUVBMVAsU0FBT29PLElBQVAsQ0FBWWdDLFNBQVosRUFBdUIvQixPQUF2QixDQUErQixVQUFTeEgsRUFBVCxFQUFhO0FBQzFDLFFBQUk4SSxlQUFlakMsS0FBS0csYUFBTCxDQUFtQmhILEVBQW5CLENBQW5CLENBRDBDLENBQ0M7QUFDM0MsUUFBSWtKLG1CQUFtQkosYUFBYW5CLFdBQXBDO0FBQ0EsUUFBSXdCLGlCQUFpQkwsYUFBYWhCLFVBQWxDOztBQUVBO0FBQ0FqQixTQUFLdUMsZUFBTCxDQUFxQkcsVUFBVXZKLEVBQVYsQ0FBckIsRUFBb0M4SSxhQUFhL0ksSUFBYixDQUFrQmxDLENBQXRELEVBQXlEaUwsYUFBYS9JLElBQWIsQ0FBa0JHLENBQTNFLEVBQThFZ0osZ0JBQTlFLEVBQWdHQyxjQUFoRztBQUNELEdBUEQ7QUFRRCxDQVpEOztBQWNBN08sV0FBV3BCLFNBQVgsQ0FBcUJtTyxZQUFyQixHQUFvQyxVQUFVakcsSUFBVixFQUFnQjtBQUNsRCxNQUFJcEIsS0FBS29CLEtBQUtwQixFQUFkO0FBQ0E7QUFDQSxNQUFJLEtBQUt6RixTQUFMLENBQWV5RixFQUFmLEtBQXNCLElBQTFCLEVBQWdDO0FBQzlCLFdBQU8sS0FBS3pGLFNBQUwsQ0FBZXlGLEVBQWYsQ0FBUDtBQUNEOztBQUVEO0FBQ0EsTUFBSXdKLGFBQWFwSSxLQUFLOEcsUUFBTCxFQUFqQjtBQUNBLE1BQUlzQixjQUFjLElBQWxCLEVBQXdCO0FBQ3RCLFNBQUtqUCxTQUFMLENBQWV5RixFQUFmLElBQXFCLEtBQXJCO0FBQ0EsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsTUFBSXlKLFdBQVdELFdBQVdySSxRQUFYLEVBQWYsQ0Fka0QsQ0FjWjs7QUFFdEM7QUFDQSxPQUFLLElBQUlyQixJQUFJLENBQWIsRUFBZ0JBLElBQUkySixTQUFTdE0sTUFBN0IsRUFBcUMyQyxHQUFyQyxFQUEwQztBQUN4QyxRQUFJNEosV0FBV0QsU0FBUzNKLENBQVQsQ0FBZjs7QUFFQSxRQUFJLEtBQUs2SixhQUFMLENBQW1CRCxRQUFuQixJQUErQixDQUFuQyxFQUFzQztBQUNwQyxXQUFLblAsU0FBTCxDQUFleUYsRUFBZixJQUFxQixLQUFyQjtBQUNBLGFBQU8sS0FBUDtBQUNEOztBQUVEO0FBQ0EsUUFBSTBKLFNBQVN4QixRQUFULE1BQXVCLElBQTNCLEVBQWlDO0FBQy9CLFdBQUszTixTQUFMLENBQWVtUCxTQUFTMUosRUFBeEIsSUFBOEIsS0FBOUI7QUFDQTtBQUNEOztBQUVELFFBQUksQ0FBQyxLQUFLcUgsWUFBTCxDQUFrQnFDLFFBQWxCLENBQUwsRUFBa0M7QUFDaEMsV0FBS25QLFNBQUwsQ0FBZXlGLEVBQWYsSUFBcUIsS0FBckI7QUFDQSxhQUFPLEtBQVA7QUFDRDtBQUNGO0FBQ0QsT0FBS3pGLFNBQUwsQ0FBZXlGLEVBQWYsSUFBcUIsSUFBckI7QUFDQSxTQUFPLElBQVA7QUFDRCxDQXRDRDs7QUF3Q0E7QUFDQTFGLFdBQVdwQixTQUFYLENBQXFCeVEsYUFBckIsR0FBcUMsVUFBVXZJLElBQVYsRUFBZ0I7QUFDbkQsTUFBSXBCLEtBQUtvQixLQUFLcEIsRUFBZDtBQUNBLE1BQUl1QixRQUFRSCxLQUFLbUUsUUFBTCxFQUFaO0FBQ0EsTUFBSXFFLFNBQVMsQ0FBYjs7QUFFQTtBQUNBLE9BQUssSUFBSTlKLElBQUksQ0FBYixFQUFnQkEsSUFBSXlCLE1BQU1wRSxNQUExQixFQUFrQzJDLEdBQWxDLEVBQXVDO0FBQ3JDLFFBQUk2QixPQUFPSixNQUFNekIsQ0FBTixDQUFYO0FBQ0EsUUFBSTZCLEtBQUtFLFNBQUwsR0FBaUI3QixFQUFqQixLQUF3QjJCLEtBQUtHLFNBQUwsR0FBaUI5QixFQUE3QyxFQUFpRDtBQUMvQzRKLGVBQVNBLFNBQVMsQ0FBbEI7QUFDRDtBQUNGO0FBQ0QsU0FBT0EsTUFBUDtBQUNELENBYkQ7O0FBZUE7QUFDQXRQLFdBQVdwQixTQUFYLENBQXFCaU8seUJBQXJCLEdBQWlELFVBQVUvRixJQUFWLEVBQWdCO0FBQy9ELE1BQUl3SSxTQUFTLEtBQUtELGFBQUwsQ0FBbUJ2SSxJQUFuQixDQUFiO0FBQ0EsTUFBSUEsS0FBSzhHLFFBQUwsTUFBbUIsSUFBdkIsRUFBNkI7QUFDM0IsV0FBTzBCLE1BQVA7QUFDRDtBQUNELE1BQUlILFdBQVdySSxLQUFLOEcsUUFBTCxHQUFnQi9HLFFBQWhCLEVBQWY7QUFDQSxPQUFLLElBQUlyQixJQUFJLENBQWIsRUFBZ0JBLElBQUkySixTQUFTdE0sTUFBN0IsRUFBcUMyQyxHQUFyQyxFQUEwQztBQUN4QyxRQUFJMkksUUFBUWdCLFNBQVMzSixDQUFULENBQVo7QUFDQThKLGNBQVUsS0FBS3pDLHlCQUFMLENBQStCc0IsS0FBL0IsQ0FBVjtBQUNEO0FBQ0QsU0FBT21CLE1BQVA7QUFDRCxDQVhEOztBQWFBdFAsV0FBV3BCLFNBQVgsQ0FBcUJxUCxxQkFBckIsR0FBNkMsWUFBWTtBQUN2RCxPQUFLQyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsT0FBS3FCLG9CQUFMLENBQTBCLEtBQUtuUCxZQUFMLENBQWtCbUMsT0FBbEIsR0FBNEJzRSxRQUE1QixFQUExQjtBQUNELENBSEQ7O0FBS0E3RyxXQUFXcEIsU0FBWCxDQUFxQjJRLG9CQUFyQixHQUE0QyxVQUFVSixRQUFWLEVBQW9CO0FBQzlELE9BQUssSUFBSTNKLElBQUksQ0FBYixFQUFnQkEsSUFBSTJKLFNBQVN0TSxNQUE3QixFQUFxQzJDLEdBQXJDLEVBQTBDO0FBQ3hDLFFBQUkySSxRQUFRZ0IsU0FBUzNKLENBQVQsQ0FBWjtBQUNBLFFBQUkySSxNQUFNUCxRQUFOLE1BQW9CLElBQXhCLEVBQThCO0FBQzVCLFdBQUsyQixvQkFBTCxDQUEwQnBCLE1BQU1QLFFBQU4sR0FBaUIvRyxRQUFqQixFQUExQjtBQUNEO0FBQ0QsUUFBSSxLQUFLa0csWUFBTCxDQUFrQm9CLEtBQWxCLENBQUosRUFBOEI7QUFDNUIsV0FBS0QsYUFBTCxDQUFtQnhHLElBQW5CLENBQXdCeUcsS0FBeEI7QUFDRDtBQUNGO0FBQ0YsQ0FWRDs7QUFZQTs7O0FBR0FuTyxXQUFXcEIsU0FBWCxDQUFxQmtRLGVBQXJCLEdBQXVDLFVBQVVVLFlBQVYsRUFBd0JqTSxDQUF4QixFQUEyQnFDLENBQTNCLEVBQThCNkosd0JBQTlCLEVBQXdEQyxzQkFBeEQsRUFBZ0Y7QUFDckhuTSxPQUFLa00sd0JBQUw7QUFDQTdKLE9BQUs4SixzQkFBTDs7QUFFQSxNQUFJQyxPQUFPcE0sQ0FBWDs7QUFFQSxPQUFLLElBQUlpQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlnSyxhQUFhSSxJQUFiLENBQWtCL00sTUFBdEMsRUFBOEMyQyxHQUE5QyxFQUFtRDtBQUNqRCxRQUFJcUssTUFBTUwsYUFBYUksSUFBYixDQUFrQnBLLENBQWxCLENBQVY7QUFDQWpDLFFBQUlvTSxJQUFKO0FBQ0EsUUFBSUcsWUFBWSxDQUFoQjs7QUFFQSxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsSUFBSWhOLE1BQXhCLEVBQWdDa04sR0FBaEMsRUFBcUM7QUFDbkMsVUFBSUMsUUFBUUgsSUFBSUUsQ0FBSixDQUFaOztBQUVBQyxZQUFNdkssSUFBTixDQUFXbEMsQ0FBWCxHQUFlQSxDQUFmLENBSG1DLENBR2xCO0FBQ2pCeU0sWUFBTXZLLElBQU4sQ0FBV0csQ0FBWCxHQUFlQSxDQUFmLENBSm1DLENBSWxCOztBQUVqQnJDLFdBQUt5TSxNQUFNdkssSUFBTixDQUFXTSxLQUFYLEdBQW1CeUosYUFBYVMsaUJBQXJDOztBQUVBLFVBQUlELE1BQU12SyxJQUFOLENBQVdRLE1BQVgsR0FBb0I2SixTQUF4QixFQUNFQSxZQUFZRSxNQUFNdkssSUFBTixDQUFXUSxNQUF2QjtBQUNIOztBQUVETCxTQUFLa0ssWUFBWU4sYUFBYVUsZUFBOUI7QUFDRDtBQUNGLENBekJEOztBQTJCQWxRLFdBQVdwQixTQUFYLENBQXFCeVAsbUJBQXJCLEdBQTJDLFVBQVVOLGFBQVYsRUFBeUJDLFFBQXpCLEVBQW1DO0FBQzVFLE1BQUl6QixPQUFPLElBQVg7QUFDQSxPQUFLd0MsZUFBTCxHQUF1QixFQUF2Qjs7QUFFQWxRLFNBQU9vTyxJQUFQLENBQVljLGFBQVosRUFBMkJiLE9BQTNCLENBQW1DLFVBQVN4SCxFQUFULEVBQWE7QUFDOUM7QUFDQSxRQUFJOEksZUFBZVIsU0FBU3RJLEVBQVQsQ0FBbkI7O0FBRUE2RyxTQUFLd0MsZUFBTCxDQUFxQnJKLEVBQXJCLElBQTJCNkcsS0FBS2tDLFNBQUwsQ0FBZVYsY0FBY3JJLEVBQWQsQ0FBZixFQUFrQzhJLGFBQWFuQixXQUFiLEdBQTJCbUIsYUFBYWxCLFlBQTFFLENBQTNCOztBQUVBa0IsaUJBQWEvSSxJQUFiLENBQWtCTSxLQUFsQixHQUEwQndHLEtBQUt3QyxlQUFMLENBQXFCckosRUFBckIsRUFBeUJLLEtBQXpCLEdBQWlDLEVBQTNEO0FBQ0F5SSxpQkFBYS9JLElBQWIsQ0FBa0JRLE1BQWxCLEdBQTJCc0csS0FBS3dDLGVBQUwsQ0FBcUJySixFQUFyQixFQUF5Qk8sTUFBekIsR0FBa0MsRUFBN0Q7QUFDRCxHQVJEO0FBU0QsQ0FiRDs7QUFlQWpHLFdBQVdwQixTQUFYLENBQXFCNlAsU0FBckIsR0FBaUMsVUFBVTBCLEtBQVYsRUFBaUJDLFFBQWpCLEVBQTJCO0FBQzFELE1BQUlGLGtCQUFrQnZTLGNBQWNPLHVCQUFwQztBQUNBLE1BQUkrUixvQkFBb0J0UyxjQUFjUSx5QkFBdEM7QUFDQSxNQUFJcVIsZUFBZTtBQUNqQkksVUFBTSxFQURXO0FBRWpCUyxjQUFVLEVBRk87QUFHakJDLGVBQVcsRUFITTtBQUlqQnZLLFdBQU8sRUFKVTtBQUtqQkUsWUFBUSxFQUxTO0FBTWpCaUsscUJBQWlCQSxlQU5BO0FBT2pCRCx1QkFBbUJBO0FBUEYsR0FBbkI7O0FBVUE7QUFDQUUsUUFBTUksSUFBTixDQUFXLFVBQVVDLEVBQVYsRUFBY0MsRUFBZCxFQUFrQjtBQUMzQixRQUFJRCxHQUFHL0ssSUFBSCxDQUFRTSxLQUFSLEdBQWdCeUssR0FBRy9LLElBQUgsQ0FBUVEsTUFBeEIsR0FBaUN3SyxHQUFHaEwsSUFBSCxDQUFRTSxLQUFSLEdBQWdCMEssR0FBR2hMLElBQUgsQ0FBUVEsTUFBN0QsRUFDRSxPQUFPLENBQUMsQ0FBUjtBQUNGLFFBQUl1SyxHQUFHL0ssSUFBSCxDQUFRTSxLQUFSLEdBQWdCeUssR0FBRy9LLElBQUgsQ0FBUVEsTUFBeEIsR0FBaUN3SyxHQUFHaEwsSUFBSCxDQUFRTSxLQUFSLEdBQWdCMEssR0FBR2hMLElBQUgsQ0FBUVEsTUFBN0QsRUFDRSxPQUFPLENBQVA7QUFDRixXQUFPLENBQVA7QUFDRCxHQU5EOztBQVFBO0FBQ0EsT0FBSyxJQUFJVCxJQUFJLENBQWIsRUFBZ0JBLElBQUkySyxNQUFNdE4sTUFBMUIsRUFBa0MyQyxHQUFsQyxFQUF1QztBQUNyQyxRQUFJa0wsUUFBUVAsTUFBTTNLLENBQU4sQ0FBWjs7QUFFQSxRQUFJZ0ssYUFBYUksSUFBYixDQUFrQi9NLE1BQWxCLElBQTRCLENBQWhDLEVBQW1DO0FBQ2pDLFdBQUs4TixlQUFMLENBQXFCbkIsWUFBckIsRUFBbUNrQixLQUFuQyxFQUEwQyxDQUExQyxFQUE2Q04sUUFBN0M7QUFDRCxLQUZELE1BR0ssSUFBSSxLQUFLUSxnQkFBTCxDQUFzQnBCLFlBQXRCLEVBQW9Da0IsTUFBTWpMLElBQU4sQ0FBV00sS0FBL0MsRUFBc0QySyxNQUFNakwsSUFBTixDQUFXUSxNQUFqRSxDQUFKLEVBQThFO0FBQ2pGLFdBQUswSyxlQUFMLENBQXFCbkIsWUFBckIsRUFBbUNrQixLQUFuQyxFQUEwQyxLQUFLRyxtQkFBTCxDQUF5QnJCLFlBQXpCLENBQTFDLEVBQWtGWSxRQUFsRjtBQUNELEtBRkksTUFHQTtBQUNILFdBQUtPLGVBQUwsQ0FBcUJuQixZQUFyQixFQUFtQ2tCLEtBQW5DLEVBQTBDbEIsYUFBYUksSUFBYixDQUFrQi9NLE1BQTVELEVBQW9FdU4sUUFBcEU7QUFDRDs7QUFFRCxTQUFLVSxjQUFMLENBQW9CdEIsWUFBcEI7QUFDRDs7QUFFRCxTQUFPQSxZQUFQO0FBQ0QsQ0F4Q0Q7O0FBMENBeFAsV0FBV3BCLFNBQVgsQ0FBcUIrUixlQUFyQixHQUF1QyxVQUFVbkIsWUFBVixFQUF3QjFJLElBQXhCLEVBQThCaUssUUFBOUIsRUFBd0NYLFFBQXhDLEVBQWtEO0FBQ3ZGLE1BQUlZLGtCQUFrQlosUUFBdEI7O0FBRUE7QUFDQSxNQUFJVyxZQUFZdkIsYUFBYUksSUFBYixDQUFrQi9NLE1BQWxDLEVBQTBDO0FBQ3hDLFFBQUlvTyxrQkFBa0IsRUFBdEI7O0FBRUF6QixpQkFBYUksSUFBYixDQUFrQmxJLElBQWxCLENBQXVCdUosZUFBdkI7QUFDQXpCLGlCQUFhYSxRQUFiLENBQXNCM0ksSUFBdEIsQ0FBMkJzSixlQUEzQjtBQUNBeEIsaUJBQWFjLFNBQWIsQ0FBdUI1SSxJQUF2QixDQUE0QixDQUE1QjtBQUNEOztBQUVEO0FBQ0EsTUFBSTVCLElBQUkwSixhQUFhYSxRQUFiLENBQXNCVSxRQUF0QixJQUFrQ2pLLEtBQUtyQixJQUFMLENBQVVNLEtBQXBEOztBQUVBLE1BQUl5SixhQUFhSSxJQUFiLENBQWtCbUIsUUFBbEIsRUFBNEJsTyxNQUE1QixHQUFxQyxDQUF6QyxFQUE0QztBQUMxQ2lELFNBQUswSixhQUFhUyxpQkFBbEI7QUFDRDs7QUFFRFQsZUFBYWEsUUFBYixDQUFzQlUsUUFBdEIsSUFBa0NqTCxDQUFsQztBQUNBO0FBQ0EsTUFBSTBKLGFBQWF6SixLQUFiLEdBQXFCRCxDQUF6QixFQUE0QjtBQUMxQjBKLGlCQUFhekosS0FBYixHQUFxQkQsQ0FBckI7QUFDRDs7QUFFRDtBQUNBLE1BQUlFLElBQUljLEtBQUtyQixJQUFMLENBQVVRLE1BQWxCO0FBQ0EsTUFBSThLLFdBQVcsQ0FBZixFQUNFL0ssS0FBS3dKLGFBQWFVLGVBQWxCOztBQUVGLE1BQUlnQixjQUFjLENBQWxCO0FBQ0EsTUFBSWxMLElBQUl3SixhQUFhYyxTQUFiLENBQXVCUyxRQUF2QixDQUFSLEVBQTBDO0FBQ3hDRyxrQkFBYzFCLGFBQWFjLFNBQWIsQ0FBdUJTLFFBQXZCLENBQWQ7QUFDQXZCLGlCQUFhYyxTQUFiLENBQXVCUyxRQUF2QixJQUFtQy9LLENBQW5DO0FBQ0FrTCxrQkFBYzFCLGFBQWFjLFNBQWIsQ0FBdUJTLFFBQXZCLElBQW1DRyxXQUFqRDtBQUNEOztBQUVEMUIsZUFBYXZKLE1BQWIsSUFBdUJpTCxXQUF2Qjs7QUFFQTtBQUNBMUIsZUFBYUksSUFBYixDQUFrQm1CLFFBQWxCLEVBQTRCckosSUFBNUIsQ0FBaUNaLElBQWpDO0FBQ0QsQ0F6Q0Q7O0FBMkNBO0FBQ0E5RyxXQUFXcEIsU0FBWCxDQUFxQmlTLG1CQUFyQixHQUEyQyxVQUFVckIsWUFBVixFQUF3QjtBQUNqRSxNQUFJMkIsSUFBSSxDQUFDLENBQVQ7QUFDQSxNQUFJQyxNQUFNQyxPQUFPQyxTQUFqQjs7QUFFQSxPQUFLLElBQUk5TCxJQUFJLENBQWIsRUFBZ0JBLElBQUlnSyxhQUFhSSxJQUFiLENBQWtCL00sTUFBdEMsRUFBOEMyQyxHQUE5QyxFQUFtRDtBQUNqRCxRQUFJZ0ssYUFBYWEsUUFBYixDQUFzQjdLLENBQXRCLElBQTJCNEwsR0FBL0IsRUFBb0M7QUFDbENELFVBQUkzTCxDQUFKO0FBQ0E0TCxZQUFNNUIsYUFBYWEsUUFBYixDQUFzQjdLLENBQXRCLENBQU47QUFDRDtBQUNGO0FBQ0QsU0FBTzJMLENBQVA7QUFDRCxDQVhEOztBQWFBO0FBQ0FuUixXQUFXcEIsU0FBWCxDQUFxQjJTLGtCQUFyQixHQUEwQyxVQUFVL0IsWUFBVixFQUF3QjtBQUNoRSxNQUFJMkIsSUFBSSxDQUFDLENBQVQ7QUFDQSxNQUFJakksTUFBTW1JLE9BQU9uRixTQUFqQjs7QUFFQSxPQUFLLElBQUkxRyxJQUFJLENBQWIsRUFBZ0JBLElBQUlnSyxhQUFhSSxJQUFiLENBQWtCL00sTUFBdEMsRUFBOEMyQyxHQUE5QyxFQUFtRDs7QUFFakQsUUFBSWdLLGFBQWFhLFFBQWIsQ0FBc0I3SyxDQUF0QixJQUEyQjBELEdBQS9CLEVBQW9DO0FBQ2xDaUksVUFBSTNMLENBQUo7QUFDQTBELFlBQU1zRyxhQUFhYSxRQUFiLENBQXNCN0ssQ0FBdEIsQ0FBTjtBQUNEO0FBQ0Y7O0FBRUQsU0FBTzJMLENBQVA7QUFDRCxDQWJEOztBQWVBOzs7O0FBSUFuUixXQUFXcEIsU0FBWCxDQUFxQmdTLGdCQUFyQixHQUF3QyxVQUFVcEIsWUFBVixFQUF3QmdDLFVBQXhCLEVBQW9DTixXQUFwQyxFQUFpRDs7QUFFdkYsTUFBSU8sTUFBTSxLQUFLWixtQkFBTCxDQUF5QnJCLFlBQXpCLENBQVY7O0FBRUEsTUFBSWlDLE1BQU0sQ0FBVixFQUFhO0FBQ1gsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsTUFBSUwsTUFBTTVCLGFBQWFhLFFBQWIsQ0FBc0JvQixHQUF0QixDQUFWOztBQUVBLE1BQUlMLE1BQU01QixhQUFhUyxpQkFBbkIsR0FBdUN1QixVQUF2QyxJQUFxRGhDLGFBQWF6SixLQUF0RSxFQUNFLE9BQU8sSUFBUDs7QUFFRixNQUFJMkwsUUFBUSxDQUFaOztBQUVBO0FBQ0EsTUFBSWxDLGFBQWFjLFNBQWIsQ0FBdUJtQixHQUF2QixJQUE4QlAsV0FBbEMsRUFBK0M7QUFDN0MsUUFBSU8sTUFBTSxDQUFWLEVBQ0VDLFFBQVFSLGNBQWMxQixhQUFhVSxlQUEzQixHQUE2Q1YsYUFBYWMsU0FBYixDQUF1Qm1CLEdBQXZCLENBQXJEO0FBQ0g7O0FBRUQsTUFBSUUsZ0JBQUo7QUFDQSxNQUFJbkMsYUFBYXpKLEtBQWIsR0FBcUJxTCxHQUFyQixJQUE0QkksYUFBYWhDLGFBQWFTLGlCQUExRCxFQUE2RTtBQUMzRTBCLHVCQUFtQixDQUFDbkMsYUFBYXZKLE1BQWIsR0FBc0J5TCxLQUF2QixLQUFpQ04sTUFBTUksVUFBTixHQUFtQmhDLGFBQWFTLGlCQUFqRSxDQUFuQjtBQUNELEdBRkQsTUFFTztBQUNMMEIsdUJBQW1CLENBQUNuQyxhQUFhdkosTUFBYixHQUFzQnlMLEtBQXZCLElBQWdDbEMsYUFBYXpKLEtBQWhFO0FBQ0Q7O0FBRUQ7QUFDQTJMLFVBQVFSLGNBQWMxQixhQUFhVSxlQUFuQztBQUNBLE1BQUkwQixpQkFBSjtBQUNBLE1BQUlwQyxhQUFhekosS0FBYixHQUFxQnlMLFVBQXpCLEVBQXFDO0FBQ25DSSx3QkFBb0IsQ0FBQ3BDLGFBQWF2SixNQUFiLEdBQXNCeUwsS0FBdkIsSUFBZ0NGLFVBQXBEO0FBQ0QsR0FGRCxNQUVPO0FBQ0xJLHdCQUFvQixDQUFDcEMsYUFBYXZKLE1BQWIsR0FBc0J5TCxLQUF2QixJQUFnQ2xDLGFBQWF6SixLQUFqRTtBQUNEOztBQUVELE1BQUk2TCxvQkFBb0IsQ0FBeEIsRUFDRUEsb0JBQW9CLElBQUlBLGlCQUF4Qjs7QUFFRixNQUFJRCxtQkFBbUIsQ0FBdkIsRUFDRUEsbUJBQW1CLElBQUlBLGdCQUF2Qjs7QUFFRixTQUFPQSxtQkFBbUJDLGlCQUExQjtBQUNELENBNUNEOztBQThDQTtBQUNBO0FBQ0E1UixXQUFXcEIsU0FBWCxDQUFxQmtTLGNBQXJCLEdBQXNDLFVBQVV0QixZQUFWLEVBQXdCO0FBQzVELE1BQUlxQyxVQUFVLEtBQUtOLGtCQUFMLENBQXdCL0IsWUFBeEIsQ0FBZDtBQUNBLE1BQUlzQyxPQUFPdEMsYUFBYWEsUUFBYixDQUFzQnhOLE1BQXRCLEdBQStCLENBQTFDO0FBQ0EsTUFBSWdOLE1BQU1MLGFBQWFJLElBQWIsQ0FBa0JpQyxPQUFsQixDQUFWO0FBQ0EsTUFBSS9LLE9BQU8rSSxJQUFJQSxJQUFJaE4sTUFBSixHQUFhLENBQWpCLENBQVg7O0FBRUEsTUFBSWtQLE9BQU9qTCxLQUFLZixLQUFMLEdBQWF5SixhQUFhUyxpQkFBckM7O0FBRUE7QUFDQSxNQUFJVCxhQUFhekosS0FBYixHQUFxQnlKLGFBQWFhLFFBQWIsQ0FBc0J5QixJQUF0QixDQUFyQixHQUFtREMsSUFBbkQsSUFBMkRGLFdBQVdDLElBQTFFLEVBQWdGO0FBQzlFO0FBQ0FqQyxRQUFJckUsTUFBSixDQUFXLENBQUMsQ0FBWixFQUFlLENBQWY7O0FBRUE7QUFDQWdFLGlCQUFhSSxJQUFiLENBQWtCa0MsSUFBbEIsRUFBd0JwSyxJQUF4QixDQUE2QlosSUFBN0I7O0FBRUEwSSxpQkFBYWEsUUFBYixDQUFzQndCLE9BQXRCLElBQWlDckMsYUFBYWEsUUFBYixDQUFzQndCLE9BQXRCLElBQWlDRSxJQUFsRTtBQUNBdkMsaUJBQWFhLFFBQWIsQ0FBc0J5QixJQUF0QixJQUE4QnRDLGFBQWFhLFFBQWIsQ0FBc0J5QixJQUF0QixJQUE4QkMsSUFBNUQ7QUFDQXZDLGlCQUFhekosS0FBYixHQUFxQnlKLGFBQWFhLFFBQWIsQ0FBc0IyQixTQUFTVCxrQkFBVCxDQUE0Qi9CLFlBQTVCLENBQXRCLENBQXJCOztBQUVBO0FBQ0EsUUFBSU0sWUFBWXVCLE9BQU9uRixTQUF2QjtBQUNBLFNBQUssSUFBSTFHLElBQUksQ0FBYixFQUFnQkEsSUFBSXFLLElBQUloTixNQUF4QixFQUFnQzJDLEdBQWhDLEVBQXFDO0FBQ25DLFVBQUlxSyxJQUFJckssQ0FBSixFQUFPUyxNQUFQLEdBQWdCNkosU0FBcEIsRUFDRUEsWUFBWUQsSUFBSXJLLENBQUosRUFBT1MsTUFBbkI7QUFDSDtBQUNELFFBQUk0TCxVQUFVLENBQWQsRUFDRS9CLGFBQWFOLGFBQWFVLGVBQTFCOztBQUVGLFFBQUkrQixZQUFZekMsYUFBYWMsU0FBYixDQUF1QnVCLE9BQXZCLElBQWtDckMsYUFBYWMsU0FBYixDQUF1QndCLElBQXZCLENBQWxEOztBQUVBdEMsaUJBQWFjLFNBQWIsQ0FBdUJ1QixPQUF2QixJQUFrQy9CLFNBQWxDO0FBQ0EsUUFBSU4sYUFBYWMsU0FBYixDQUF1QndCLElBQXZCLElBQStCaEwsS0FBS2IsTUFBTCxHQUFjdUosYUFBYVUsZUFBOUQsRUFDRVYsYUFBYWMsU0FBYixDQUF1QndCLElBQXZCLElBQStCaEwsS0FBS2IsTUFBTCxHQUFjdUosYUFBYVUsZUFBMUQ7O0FBRUYsUUFBSWdDLGFBQWExQyxhQUFhYyxTQUFiLENBQXVCdUIsT0FBdkIsSUFBa0NyQyxhQUFhYyxTQUFiLENBQXVCd0IsSUFBdkIsQ0FBbkQ7QUFDQXRDLGlCQUFhdkosTUFBYixJQUF3QmlNLGFBQWFELFNBQXJDOztBQUVBLFNBQUtuQixjQUFMLENBQW9CdEIsWUFBcEI7QUFDRDtBQUNGLENBeENEOztBQTBDQXhQLFdBQVdwQixTQUFYLENBQXFCdVQsZUFBckIsR0FBdUMsWUFBVztBQUNoRCxNQUFJeFUsY0FBY00sSUFBbEIsRUFBd0I7QUFDdEI7QUFDQSxTQUFLcU8sc0JBQUw7QUFDQTtBQUNBLFNBQUt3QixjQUFMO0FBQ0E7QUFDQSxTQUFLUSxzQkFBTDtBQUNEO0FBQ0YsQ0FURDs7QUFXQXRPLFdBQVdwQixTQUFYLENBQXFCd1QsZ0JBQXJCLEdBQXdDLFlBQVc7QUFDakQsTUFBSXpVLGNBQWNNLElBQWxCLEVBQXdCO0FBQ3RCLFNBQUsrUSwyQkFBTDtBQUNBLFNBQUtOLG1CQUFMO0FBQ0Q7QUFDRixDQUxEOztBQU9BdFEsT0FBT0MsT0FBUCxHQUFpQjJCLFVBQWpCLEM7Ozs7Ozs7Ozs7Ozs7O0FDOStCQSxJQUFJcVMsZUFBZSxtQkFBQTNVLENBQVEsaUVBQVIsQ0FBbkI7QUFDQSxJQUFJNFUsUUFBUSxtQkFBQTVVLENBQVEsbURBQVIsQ0FBWjs7QUFFQSxTQUFTOEIsUUFBVCxDQUFrQlcsRUFBbEIsRUFBc0JvUyxHQUF0QixFQUEyQjlMLElBQTNCLEVBQWlDbEcsS0FBakMsRUFBd0M7QUFDdEM4UixlQUFhMVQsSUFBYixDQUFrQixJQUFsQixFQUF3QndCLEVBQXhCLEVBQTRCb1MsR0FBNUIsRUFBaUM5TCxJQUFqQyxFQUF1Q2xHLEtBQXZDO0FBQ0Q7O0FBR0RmLFNBQVNaLFNBQVQsR0FBcUJDLE9BQU9DLE1BQVAsQ0FBY3VULGFBQWF6VCxTQUEzQixDQUFyQjtBQUNBLEtBQUssSUFBSWhCLElBQVQsSUFBaUJ5VSxZQUFqQixFQUErQjtBQUM3QjdTLFdBQVM1QixJQUFULElBQWlCeVUsYUFBYXpVLElBQWIsQ0FBakI7QUFDRDs7QUFFRDRCLFNBQVNaLFNBQVQsQ0FBbUI0VCxJQUFuQixHQUEwQixZQUMxQjtBQUNFLE1BQUlsVCxTQUFTLEtBQUtjLFlBQUwsQ0FBa0JxUyxTQUFsQixFQUFiO0FBQ0EsT0FBS0MsYUFBTCxHQUFxQnBULE9BQU82RSxhQUFQLElBQ1osS0FBS3dPLFlBQUwsR0FBb0IsS0FBS0MsZUFBekIsR0FBMkMsS0FBS0MsaUJBRHBDLElBQ3lELEtBQUs5TCxZQURuRjtBQUVBLE9BQUsrTCxhQUFMLEdBQXFCeFQsT0FBTzZFLGFBQVAsSUFDWixLQUFLNE8sWUFBTCxHQUFvQixLQUFLQyxlQUF6QixHQUEyQyxLQUFLQyxpQkFEcEMsSUFDeUQsS0FBS2xNLFlBRG5GOztBQUlBLE1BQUl6QyxLQUFLc0gsR0FBTCxDQUFTLEtBQUs4RyxhQUFkLElBQStCcFQsT0FBTzZFLGFBQVAsR0FBdUI3RSxPQUFPNFQsbUJBQWpFLEVBQ0E7QUFDRSxTQUFLUixhQUFMLEdBQXFCcFQsT0FBTzZFLGFBQVAsR0FBdUI3RSxPQUFPNFQsbUJBQTlCLEdBQ2JaLE1BQU1hLElBQU4sQ0FBVyxLQUFLVCxhQUFoQixDQURSO0FBRUQ7O0FBRUQsTUFBSXBPLEtBQUtzSCxHQUFMLENBQVMsS0FBS2tILGFBQWQsSUFBK0J4VCxPQUFPNkUsYUFBUCxHQUF1QjdFLE9BQU80VCxtQkFBakUsRUFDQTtBQUNFLFNBQUtKLGFBQUwsR0FBcUJ4VCxPQUFPNkUsYUFBUCxHQUF1QjdFLE9BQU80VCxtQkFBOUIsR0FDYlosTUFBTWEsSUFBTixDQUFXLEtBQUtMLGFBQWhCLENBRFI7QUFFRDs7QUFFRDtBQUNBLE1BQUksS0FBSzNFLEtBQUwsSUFBYyxJQUFsQixFQUNBO0FBQ0UsU0FBS2lGLE1BQUwsQ0FBWSxLQUFLVixhQUFqQixFQUFnQyxLQUFLSSxhQUFyQztBQUNEO0FBQ0Q7QUFKQSxPQUtLLElBQUksS0FBSzNFLEtBQUwsQ0FBV3RILFFBQVgsR0FBc0JoRSxNQUF0QixJQUFnQyxDQUFwQyxFQUNMO0FBQ0UsV0FBS3VRLE1BQUwsQ0FBWSxLQUFLVixhQUFqQixFQUFnQyxLQUFLSSxhQUFyQztBQUNEO0FBQ0Q7QUFKSyxTQU1MO0FBQ0UsYUFBS08sK0JBQUwsQ0FBcUMsS0FBS1gsYUFBMUMsRUFDUSxLQUFLSSxhQURiO0FBRUQ7O0FBRUR4VCxTQUFPMEYsaUJBQVAsSUFDUVYsS0FBS3NILEdBQUwsQ0FBUyxLQUFLOEcsYUFBZCxJQUErQnBPLEtBQUtzSCxHQUFMLENBQVMsS0FBS2tILGFBQWQsQ0FEdkM7O0FBR0EsT0FBS0gsWUFBTCxHQUFvQixDQUFwQjtBQUNBLE9BQUtJLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxPQUFLSCxlQUFMLEdBQXVCLENBQXZCO0FBQ0EsT0FBS0ksZUFBTCxHQUF1QixDQUF2QjtBQUNBLE9BQUtILGlCQUFMLEdBQXlCLENBQXpCO0FBQ0EsT0FBS0ksaUJBQUwsR0FBeUIsQ0FBekI7QUFDQSxPQUFLUCxhQUFMLEdBQXFCLENBQXJCO0FBQ0EsT0FBS0ksYUFBTCxHQUFxQixDQUFyQjtBQUNELENBakREOztBQW1EQXRULFNBQVNaLFNBQVQsQ0FBbUJ5VSwrQkFBbkIsR0FBcUQsVUFBVUMsRUFBVixFQUFjQyxFQUFkLEVBQ3JEO0FBQ0UsTUFBSXBELFFBQVEsS0FBS3ZDLFFBQUwsR0FBZ0IvRyxRQUFoQixFQUFaO0FBQ0EsTUFBSUMsSUFBSjtBQUNBLE9BQUssSUFBSXRCLElBQUksQ0FBYixFQUFnQkEsSUFBSTJLLE1BQU10TixNQUExQixFQUFrQzJDLEdBQWxDLEVBQ0E7QUFDRXNCLFdBQU9xSixNQUFNM0ssQ0FBTixDQUFQO0FBQ0EsUUFBSXNCLEtBQUs4RyxRQUFMLE1BQW1CLElBQXZCLEVBQ0E7QUFDRTlHLFdBQUtzTSxNQUFMLENBQVlFLEVBQVosRUFBZ0JDLEVBQWhCO0FBQ0F6TSxXQUFLNEwsYUFBTCxJQUFzQlksRUFBdEI7QUFDQXhNLFdBQUtnTSxhQUFMLElBQXNCUyxFQUF0QjtBQUNELEtBTEQsTUFPQTtBQUNFek0sV0FBS3VNLCtCQUFMLENBQXFDQyxFQUFyQyxFQUF5Q0MsRUFBekM7QUFDRDtBQUNGO0FBQ0YsQ0FsQkQ7O0FBb0JBL1QsU0FBU1osU0FBVCxDQUFtQjRVLFFBQW5CLEdBQThCLFVBQVVDLEtBQVYsRUFDOUI7QUFDRSxPQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRCxDQUhEOztBQUtBalUsU0FBU1osU0FBVCxDQUFtQjhVLFFBQW5CLEdBQThCLFlBQzlCO0FBQ0UsU0FBT0QsS0FBUDtBQUNELENBSEQ7O0FBS0FqVSxTQUFTWixTQUFULENBQW1CK1UsUUFBbkIsR0FBOEIsWUFDOUI7QUFDRSxTQUFPQyxLQUFQO0FBQ0QsQ0FIRDs7QUFLQXBVLFNBQVNaLFNBQVQsQ0FBbUJpVixPQUFuQixHQUE2QixVQUFVQyxJQUFWLEVBQzdCO0FBQ0UsT0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0QsQ0FIRDs7QUFLQXRVLFNBQVNaLFNBQVQsQ0FBbUJtVixPQUFuQixHQUE2QixZQUM3QjtBQUNFLFNBQU9ELElBQVA7QUFDRCxDQUhEOztBQUtBdFUsU0FBU1osU0FBVCxDQUFtQm9WLFlBQW5CLEdBQWtDLFVBQVVDLFNBQVYsRUFDbEM7QUFDRSxPQUFLQSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNELENBSEQ7O0FBS0F6VSxTQUFTWixTQUFULENBQW1Cc1YsV0FBbkIsR0FBaUMsWUFDakM7QUFDRSxTQUFPRCxTQUFQO0FBQ0QsQ0FIRDs7QUFLQTdWLE9BQU9DLE9BQVAsR0FBaUJtQixRQUFqQixDOzs7Ozs7Ozs7Ozs7OztBQ3ZIQSxTQUFTMlUsVUFBVCxDQUFvQnBPLEtBQXBCLEVBQTJCRSxNQUEzQixFQUFtQztBQUNqQyxPQUFLRixLQUFMLEdBQWEsQ0FBYjtBQUNBLE9BQUtFLE1BQUwsR0FBYyxDQUFkO0FBQ0EsTUFBSUYsVUFBVSxJQUFWLElBQWtCRSxXQUFXLElBQWpDLEVBQXVDO0FBQ3JDLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtGLEtBQUwsR0FBYUEsS0FBYjtBQUNEO0FBQ0Y7O0FBRURvTyxXQUFXdlYsU0FBWCxDQUFxQndWLFFBQXJCLEdBQWdDLFlBQ2hDO0FBQ0UsU0FBTyxLQUFLck8sS0FBWjtBQUNELENBSEQ7O0FBS0FvTyxXQUFXdlYsU0FBWCxDQUFxQnlWLFFBQXJCLEdBQWdDLFVBQVV0TyxLQUFWLEVBQ2hDO0FBQ0UsT0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0QsQ0FIRDs7QUFLQW9PLFdBQVd2VixTQUFYLENBQXFCMFYsU0FBckIsR0FBaUMsWUFDakM7QUFDRSxTQUFPLEtBQUtyTyxNQUFaO0FBQ0QsQ0FIRDs7QUFLQWtPLFdBQVd2VixTQUFYLENBQXFCMlYsU0FBckIsR0FBaUMsVUFBVXRPLE1BQVYsRUFDakM7QUFDRSxPQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRCxDQUhEOztBQUtBN0gsT0FBT0MsT0FBUCxHQUFpQjhWLFVBQWpCLEM7Ozs7Ozs7Ozs7Ozs7O0FDN0JBLFNBQVNLLE9BQVQsR0FBa0I7QUFDaEIsT0FBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNEOztBQUVELElBQUlDLElBQUlGLFFBQVE1VixTQUFoQjs7QUFFQThWLEVBQUVDLFdBQUYsR0FBZ0IsVUFBVUMsS0FBVixFQUFpQkMsUUFBakIsRUFBMkI7QUFDekMsT0FBS0osU0FBTCxDQUFlL00sSUFBZixDQUFvQjtBQUNsQmtOLFdBQU9BLEtBRFc7QUFFbEJDLGNBQVVBO0FBRlEsR0FBcEI7QUFJRCxDQUxEOztBQU9BSCxFQUFFSSxjQUFGLEdBQW1CLFVBQVVGLEtBQVYsRUFBaUJDLFFBQWpCLEVBQTJCO0FBQzVDLE9BQUssSUFBSXJQLElBQUksS0FBS2lQLFNBQUwsQ0FBZTVSLE1BQTVCLEVBQW9DMkMsS0FBSyxDQUF6QyxFQUE0Q0EsR0FBNUMsRUFBaUQ7QUFDL0MsUUFBSXVQLElBQUksS0FBS04sU0FBTCxDQUFlalAsQ0FBZixDQUFSOztBQUVBLFFBQUl1UCxFQUFFSCxLQUFGLEtBQVlBLEtBQVosSUFBcUJHLEVBQUVGLFFBQUYsS0FBZUEsUUFBeEMsRUFBa0Q7QUFDaEQsV0FBS0osU0FBTCxDQUFlakosTUFBZixDQUF1QmhHLENBQXZCLEVBQTBCLENBQTFCO0FBQ0Q7QUFDRjtBQUNGLENBUkQ7O0FBVUFrUCxFQUFFdE8sSUFBRixHQUFTLFVBQVV3TyxLQUFWLEVBQWlCSSxJQUFqQixFQUF1QjtBQUM5QixPQUFLLElBQUl4UCxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS2lQLFNBQUwsQ0FBZTVSLE1BQW5DLEVBQTJDMkMsR0FBM0MsRUFBZ0Q7QUFDOUMsUUFBSXVQLElBQUksS0FBS04sU0FBTCxDQUFlalAsQ0FBZixDQUFSOztBQUVBLFFBQUlvUCxVQUFVRyxFQUFFSCxLQUFoQixFQUF1QjtBQUNyQkcsUUFBRUYsUUFBRixDQUFZRyxJQUFaO0FBQ0Q7QUFDRjtBQUNGLENBUkQ7O0FBVUE1VyxPQUFPQyxPQUFQLEdBQWlCbVcsT0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQSxJQUFJNVUsU0FBUyxtQkFBQWxDLENBQVEscURBQVIsQ0FBYjtBQUNBLElBQUlELG9CQUFvQixtQkFBQUMsQ0FBUSwyRUFBUixDQUF4QjtBQUNBLElBQUkrQixrQkFBa0IsbUJBQUEvQixDQUFRLHVFQUFSLENBQXRCO0FBQ0EsSUFBSW9DLFlBQVksbUJBQUFwQyxDQUFRLDJEQUFSLENBQWhCO0FBQ0EsSUFBSTRVLFFBQVEsbUJBQUE1VSxDQUFRLG1EQUFSLENBQVo7QUFDQSxJQUFJbUMsVUFBVSxtQkFBQW5DLENBQVEsdURBQVIsQ0FBZDs7QUFFQSxTQUFTNkIsUUFBVCxHQUFvQjtBQUNsQkssU0FBT2pCLElBQVAsQ0FBWSxJQUFaOztBQUVBLE9BQUtrQyxrQ0FBTCxHQUEwQ3BELGtCQUFrQnFELCtDQUE1RDtBQUNBLE9BQUtGLGVBQUwsR0FBdUJuRCxrQkFBa0JNLG1CQUF6QztBQUNBLE9BQUtnRCxjQUFMLEdBQXNCdEQsa0JBQWtCdUQsdUJBQXhDO0FBQ0EsT0FBS0MsaUJBQUwsR0FBeUJ4RCxrQkFBa0J5RCwwQkFBM0M7QUFDQSxPQUFLQyxlQUFMLEdBQXVCMUQsa0JBQWtCMkQsd0JBQXpDO0FBQ0EsT0FBS0MsdUJBQUwsR0FBK0I1RCxrQkFBa0I2RCxpQ0FBakQ7QUFDQSxPQUFLQyxrQkFBTCxHQUEwQjlELGtCQUFrQitELDRCQUE1QztBQUNBLE9BQUtDLDBCQUFMLEdBQWtDaEUsa0JBQWtCaUUscUNBQXBEO0FBQ0EsT0FBS3VULDRCQUFMLEdBQXFDLE1BQU14WCxrQkFBa0JNLG1CQUF6QixHQUFnRCxHQUFwRjtBQUNBLE9BQUtvRyxhQUFMLEdBQXFCMUcsa0JBQWtCcUgsa0NBQXZDO0FBQ0EsT0FBS1Ysb0JBQUwsR0FBNEIzRyxrQkFBa0JxSCxrQ0FBOUM7QUFDQSxPQUFLRSxpQkFBTCxHQUF5QixHQUF6QjtBQUNBLE9BQUtrUSxvQkFBTCxHQUE0QixHQUE1QjtBQUNBLE9BQUtyUixhQUFMLEdBQXFCcEcsa0JBQWtCMFgsY0FBdkM7QUFDRDs7QUFFRDVWLFNBQVNYLFNBQVQsR0FBcUJDLE9BQU9DLE1BQVAsQ0FBY2MsT0FBT2hCLFNBQXJCLENBQXJCOztBQUVBLEtBQUssSUFBSWhCLElBQVQsSUFBaUJnQyxNQUFqQixFQUF5QjtBQUN2QkwsV0FBUzNCLElBQVQsSUFBaUJnQyxPQUFPaEMsSUFBUCxDQUFqQjtBQUNEOztBQUVEMkIsU0FBU1gsU0FBVCxDQUFtQjZCLGNBQW5CLEdBQW9DLFlBQVk7QUFDOUNiLFNBQU9oQixTQUFQLENBQWlCNkIsY0FBakIsQ0FBZ0M5QixJQUFoQyxDQUFxQyxJQUFyQyxFQUEyQytCLFNBQTNDOztBQUVBLE1BQUksS0FBSzBVLGFBQUwsSUFBc0IzVixnQkFBZ0I0VixhQUExQyxFQUNBO0FBQ0UsU0FBS0osNEJBQUwsSUFBcUMsSUFBckM7QUFDQSxTQUFLcFIsYUFBTCxJQUFzQixHQUF0QjtBQUNELEdBSkQsTUFLSyxJQUFJLEtBQUt1UixhQUFMLElBQXNCM1YsZ0JBQWdCNlYsYUFBMUMsRUFDTDtBQUNFLFNBQUtMLDRCQUFMLElBQXFDLElBQXJDO0FBQ0EsU0FBS3BSLGFBQUwsSUFBc0IsR0FBdEI7QUFDRDs7QUFFRCxPQUFLRCxlQUFMLEdBQXVCLENBQXZCO0FBQ0EsT0FBSzJSLHFCQUFMLEdBQTZCLENBQTdCOztBQUVBLE9BQUtDLGdCQUFMLEdBQXdCL1gsa0JBQWtCZ1ksNkNBQTFDOztBQUVBLE9BQUtDLElBQUwsR0FBWSxFQUFaO0FBQ0E7QUFDQSxPQUFLMVIsY0FBTCxHQUFzQixFQUF0QjtBQUNBLE9BQUtVLGtCQUFMLEdBQTBCLENBQTFCO0FBQ0EsT0FBS0sscUJBQUwsR0FBNkIsQ0FBN0I7QUFDQSxPQUFLakIsYUFBTCxHQUFxQixLQUFyQjtBQUNBLE9BQUtDLGdCQUFMLEdBQXdCLEtBQXhCO0FBQ0QsQ0ExQkQ7O0FBNEJBeEUsU0FBU1gsU0FBVCxDQUFtQjZELG9CQUFuQixHQUEwQyxZQUFZO0FBQ3BELE1BQUk0RSxJQUFKO0FBQ0EsTUFBSXNPLFFBQUo7QUFDQSxNQUFJblgsTUFBSjtBQUNBLE1BQUlDLE1BQUo7QUFDQSxNQUFJbVgsaUJBQUo7QUFDQSxNQUFJQyxpQkFBSjs7QUFFQSxNQUFJQyxXQUFXLEtBQUtwSSxlQUFMLEdBQXVCeEcsV0FBdkIsRUFBZjtBQUNBLE9BQUssSUFBSTFCLElBQUksQ0FBYixFQUFnQkEsSUFBSXNRLFNBQVNqVCxNQUE3QixFQUFxQzJDLEdBQXJDLEVBQ0E7QUFDRTZCLFdBQU95TyxTQUFTdFEsQ0FBVCxDQUFQOztBQUVBNkIsU0FBSzBPLFdBQUwsR0FBbUIsS0FBS25WLGVBQXhCOztBQUVBLFFBQUl5RyxLQUFLMk8sWUFBVCxFQUNBO0FBQ0V4WCxlQUFTNkksS0FBS0UsU0FBTCxFQUFUO0FBQ0E5SSxlQUFTNEksS0FBS0csU0FBTCxFQUFUOztBQUVBb08sMEJBQW9Cdk8sS0FBSzRPLGNBQUwsR0FBc0JDLGdCQUF0QixFQUFwQjtBQUNBTCwwQkFBb0J4TyxLQUFLOE8sY0FBTCxHQUFzQkQsZ0JBQXRCLEVBQXBCOztBQUVBLFVBQUksS0FBS3JWLGtDQUFULEVBQ0E7QUFDRXdHLGFBQUswTyxXQUFMLElBQW9CSCxvQkFBb0JDLGlCQUFwQixHQUNaLElBQUlwVyxnQkFBZ0IyVyxnQkFENUI7QUFFRDs7QUFFRFQsaUJBQVd0TyxLQUFLZ1AsTUFBTCxHQUFjQyxxQkFBZCxFQUFYOztBQUVBalAsV0FBSzBPLFdBQUwsSUFBb0J0WSxrQkFBa0JNLG1CQUFsQixHQUNaTixrQkFBa0I4WSxrQ0FETixJQUVYL1gsT0FBTzhYLHFCQUFQLEtBQ083WCxPQUFPNlgscUJBQVAsRUFEUCxHQUN3QyxJQUFJWCxRQUhqQyxDQUFwQjtBQUlEO0FBQ0Y7QUFDRixDQXJDRDs7QUF1Q0FwVyxTQUFTWCxTQUFULENBQW1CNkUsa0JBQW5CLEdBQXdDLFlBQVk7O0FBRWxELE1BQUksS0FBS2YsV0FBVCxFQUNBO0FBQ0UsU0FBS3dRLG1CQUFMLEdBQ1F6VixrQkFBa0IrWSxpQ0FEMUI7QUFFRCxHQUpELE1BTUE7QUFDRSxTQUFLclMsYUFBTCxHQUFxQixHQUFyQjtBQUNBLFNBQUtDLG9CQUFMLEdBQTRCLEdBQTVCO0FBQ0EsU0FBSzhPLG1CQUFMLEdBQ1F6VixrQkFBa0JnWixxQkFEMUI7QUFFRDs7QUFFRCxPQUFLNVMsYUFBTCxHQUNRUyxLQUFLNEUsR0FBTCxDQUFTLEtBQUsvRixXQUFMLEdBQW1CTixNQUFuQixHQUE0QixDQUFyQyxFQUF3QyxLQUFLZ0IsYUFBN0MsQ0FEUjs7QUFHQSxPQUFLNlMsMEJBQUwsR0FDUSxLQUFLekIsNEJBQUwsR0FBb0MsS0FBSzlSLFdBQUwsR0FBbUJOLE1BRC9EOztBQUdBLE9BQUs4VCxjQUFMLEdBQXNCLEtBQUt0SyxrQkFBTCxFQUF0QjtBQUNELENBdEJEOztBQXdCQTlNLFNBQVNYLFNBQVQsQ0FBbUJxRyxnQkFBbkIsR0FBc0MsWUFBWTtBQUNoRCxNQUFJMlIsU0FBUyxLQUFLMVAsV0FBTCxFQUFiO0FBQ0EsTUFBSUcsSUFBSjs7QUFFQSxPQUFLLElBQUk3QixJQUFJLENBQWIsRUFBZ0JBLElBQUlvUixPQUFPL1QsTUFBM0IsRUFBbUMyQyxHQUFuQyxFQUNBO0FBQ0U2QixXQUFPdVAsT0FBT3BSLENBQVAsQ0FBUDs7QUFFQSxTQUFLcVIsZUFBTCxDQUFxQnhQLElBQXJCLEVBQTJCQSxLQUFLME8sV0FBaEM7QUFDRDtBQUNGLENBVkQ7O0FBWUF4VyxTQUFTWCxTQUFULENBQW1Cc0csbUJBQW5CLEdBQXlDLFlBQVk7QUFDbkQsTUFBSU0sQ0FBSixFQUFPdUssQ0FBUDtBQUNBLE1BQUkrRyxLQUFKLEVBQVdDLEtBQVg7QUFDQSxNQUFJQyxTQUFTLEtBQUs3VCxXQUFMLEVBQWI7QUFDQSxNQUFJOFQsZ0JBQUo7O0FBRUEsTUFBSSxLQUFLekIsZ0JBQVQsRUFDQTtBQUNFLFFBQUssS0FBSzVSLGVBQUwsR0FBdUJuRyxrQkFBa0J5Wiw2QkFBekMsSUFBMEUsQ0FBMUUsSUFBK0UsQ0FBQyxLQUFLcFQsYUFBckYsSUFBc0csQ0FBQyxLQUFLQyxnQkFBakgsRUFDQTtBQUNFLFdBQUthLFVBQUw7QUFDRDs7QUFFRHFTLHVCQUFtQixJQUFJL1QsR0FBSixFQUFuQjs7QUFFQTtBQUNBLFNBQUtzQyxJQUFJLENBQVQsRUFBWUEsSUFBSXdSLE9BQU9uVSxNQUF2QixFQUErQjJDLEdBQS9CLEVBQ0E7QUFDRXNSLGNBQVFFLE9BQU94UixDQUFQLENBQVI7QUFDQSxXQUFLMlIsOEJBQUwsQ0FBb0NMLEtBQXBDLEVBQTJDRyxnQkFBM0M7QUFDQUEsdUJBQWlCclAsR0FBakIsQ0FBcUJrUCxLQUFyQjtBQUNEO0FBQ0YsR0FoQkQsTUFrQkE7QUFDRSxTQUFLdFIsSUFBSSxDQUFULEVBQVlBLElBQUl3UixPQUFPblUsTUFBdkIsRUFBK0IyQyxHQUEvQixFQUNBO0FBQ0VzUixjQUFRRSxPQUFPeFIsQ0FBUCxDQUFSOztBQUVBLFdBQUt1SyxJQUFJdkssSUFBSSxDQUFiLEVBQWdCdUssSUFBSWlILE9BQU9uVSxNQUEzQixFQUFtQ2tOLEdBQW5DLEVBQ0E7QUFDRWdILGdCQUFRQyxPQUFPakgsQ0FBUCxDQUFSOztBQUVBO0FBQ0EsWUFBSStHLE1BQU1NLFFBQU4sTUFBb0JMLE1BQU1LLFFBQU4sRUFBeEIsRUFDQTtBQUNFO0FBQ0Q7O0FBRUQsYUFBS0Msa0JBQUwsQ0FBd0JQLEtBQXhCLEVBQStCQyxLQUEvQjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLENBM0NEOztBQTZDQXhYLFNBQVNYLFNBQVQsQ0FBbUJ1Ryx1QkFBbkIsR0FBNkMsWUFBWTtBQUN2RCxNQUFJMkIsSUFBSjtBQUNBLE1BQUlrUSxTQUFTLEtBQUtNLDZCQUFMLEVBQWI7O0FBRUEsT0FBSyxJQUFJOVIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJd1IsT0FBT25VLE1BQTNCLEVBQW1DMkMsR0FBbkMsRUFDQTtBQUNFc0IsV0FBT2tRLE9BQU94UixDQUFQLENBQVA7QUFDQSxTQUFLK1Isc0JBQUwsQ0FBNEJ6USxJQUE1QjtBQUNEO0FBQ0YsQ0FURDs7QUFXQXZILFNBQVNYLFNBQVQsQ0FBbUJ3RyxTQUFuQixHQUErQixZQUFZO0FBQ3pDLE1BQUk0UixTQUFTLEtBQUs3VCxXQUFMLEVBQWI7QUFDQSxNQUFJMkQsSUFBSjs7QUFFQSxPQUFLLElBQUl0QixJQUFJLENBQWIsRUFBZ0JBLElBQUl3UixPQUFPblUsTUFBM0IsRUFBbUMyQyxHQUFuQyxFQUNBO0FBQ0VzQixXQUFPa1EsT0FBT3hSLENBQVAsQ0FBUDtBQUNBc0IsU0FBSzBMLElBQUw7QUFDRDtBQUNGLENBVEQ7O0FBV0FqVCxTQUFTWCxTQUFULENBQW1CaVksZUFBbkIsR0FBcUMsVUFBVXhQLElBQVYsRUFBZ0IwTyxXQUFoQixFQUE2QjtBQUNoRSxNQUFJeUIsYUFBYW5RLEtBQUtFLFNBQUwsRUFBakI7QUFDQSxNQUFJa1EsYUFBYXBRLEtBQUtHLFNBQUwsRUFBakI7O0FBRUEsTUFBSTNFLE1BQUo7QUFDQSxNQUFJNlUsV0FBSjtBQUNBLE1BQUkvRSxZQUFKO0FBQ0EsTUFBSUksWUFBSjs7QUFFQTtBQUNBLE1BQUksS0FBSzRFLG9CQUFMLElBQ0lILFdBQVc1SixRQUFYLE1BQXlCLElBRDdCLElBQ3FDNkosV0FBVzdKLFFBQVgsTUFBeUIsSUFEbEUsRUFFQTtBQUNFdkcsU0FBS3VRLGtCQUFMO0FBQ0QsR0FKRCxNQU1BO0FBQ0V2USxTQUFLd1EsWUFBTDs7QUFFQSxRQUFJeFEsS0FBS3lRLDJCQUFULEVBQ0E7QUFDRTtBQUNEO0FBQ0Y7O0FBRURqVixXQUFTd0UsS0FBSzBRLFNBQUwsRUFBVDs7QUFFQTtBQUNBTCxnQkFBYyxLQUFLM1csY0FBTCxJQUF1QjhCLFNBQVNrVCxXQUFoQyxDQUFkOztBQUVBO0FBQ0FwRCxpQkFBZStFLGVBQWVyUSxLQUFLMlEsT0FBTCxHQUFlblYsTUFBOUIsQ0FBZjtBQUNBa1EsaUJBQWUyRSxlQUFlclEsS0FBSzRRLE9BQUwsR0FBZXBWLE1BQTlCLENBQWY7O0FBRUE7QUFDQTJVLGFBQVc3RSxZQUFYLElBQTJCQSxZQUEzQjtBQUNBNkUsYUFBV3pFLFlBQVgsSUFBMkJBLFlBQTNCO0FBQ0EwRSxhQUFXOUUsWUFBWCxJQUEyQkEsWUFBM0I7QUFDQThFLGFBQVcxRSxZQUFYLElBQTJCQSxZQUEzQjtBQUNELENBdkNEOztBQXlDQXhULFNBQVNYLFNBQVQsQ0FBbUJ5WSxrQkFBbkIsR0FBd0MsVUFBVVAsS0FBVixFQUFpQkMsS0FBakIsRUFBd0I7QUFDOUQsTUFBSW1CLFFBQVFwQixNQUFNcUIsT0FBTixFQUFaO0FBQ0EsTUFBSUMsUUFBUXJCLE1BQU1vQixPQUFOLEVBQVo7QUFDQSxNQUFJRSxnQkFBZ0IsSUFBSUMsS0FBSixDQUFVLENBQVYsQ0FBcEI7QUFDQSxNQUFJQyxhQUFhLElBQUlELEtBQUosQ0FBVSxDQUFWLENBQWpCO0FBQ0EsTUFBSUUsU0FBSjtBQUNBLE1BQUlDLFNBQUo7QUFDQSxNQUFJQyxlQUFKO0FBQ0EsTUFBSXRPLFFBQUo7QUFDQSxNQUFJdU8sY0FBSjtBQUNBLE1BQUkvRixlQUFKO0FBQ0EsTUFBSUksZUFBSjs7QUFFQSxNQUFJa0YsTUFBTVUsVUFBTixDQUFpQlIsS0FBakIsQ0FBSixFQUE0QjtBQUM1QjtBQUNFO0FBQ0F0WSxnQkFBVStZLG9CQUFWLENBQStCWCxLQUEvQixFQUNRRSxLQURSLEVBRVFDLGFBRlIsRUFHUTVhLGtCQUFrQk0sbUJBQWxCLEdBQXdDLEdBSGhEOztBQUtBNlUsd0JBQWtCLElBQUl5RixjQUFjLENBQWQsQ0FBdEI7QUFDQXJGLHdCQUFrQixJQUFJcUYsY0FBYyxDQUFkLENBQXRCOztBQUVBLFVBQUlTLG1CQUFtQmhDLE1BQU0vUCxZQUFOLEdBQXFCZ1EsTUFBTWhRLFlBQTNCLElBQTJDK1AsTUFBTS9QLFlBQU4sR0FBcUJnUSxNQUFNaFEsWUFBdEUsQ0FBdkI7O0FBRUE7QUFDQStQLFlBQU1sRSxlQUFOLElBQXlCa0csbUJBQW1CbEcsZUFBNUM7QUFDQWtFLFlBQU05RCxlQUFOLElBQXlCOEYsbUJBQW1COUYsZUFBNUM7QUFDQStELFlBQU1uRSxlQUFOLElBQXlCa0csbUJBQW1CbEcsZUFBNUM7QUFDQW1FLFlBQU0vRCxlQUFOLElBQXlCOEYsbUJBQW1COUYsZUFBNUM7QUFDRCxLQWxCRCxNQW1CSTtBQUNKO0FBQ0U7O0FBRUEsVUFBSSxLQUFLMkUsb0JBQUwsSUFDSWIsTUFBTWxKLFFBQU4sTUFBb0IsSUFEeEIsSUFDZ0NtSixNQUFNbkosUUFBTixNQUFvQixJQUR4RCxFQUM2RDtBQUM3RDtBQUNFNEssc0JBQVlKLE1BQU16UyxVQUFOLEtBQXFCdVMsTUFBTXZTLFVBQU4sRUFBakM7QUFDQThTLHNCQUFZTCxNQUFNdlMsVUFBTixLQUFxQnFTLE1BQU1yUyxVQUFOLEVBQWpDO0FBQ0QsU0FMRCxNQU1JO0FBQ0o7QUFDRS9GLG9CQUFVaVosZUFBVixDQUEwQmIsS0FBMUIsRUFBaUNFLEtBQWpDLEVBQXdDRyxVQUF4Qzs7QUFFQUMsc0JBQVlELFdBQVcsQ0FBWCxJQUFnQkEsV0FBVyxDQUFYLENBQTVCO0FBQ0FFLHNCQUFZRixXQUFXLENBQVgsSUFBZ0JBLFdBQVcsQ0FBWCxDQUE1QjtBQUNEOztBQUVEO0FBQ0EsVUFBSWpVLEtBQUtzSCxHQUFMLENBQVM0TSxTQUFULElBQXNCL2Esa0JBQWtCdWIsa0JBQTVDLEVBQ0E7QUFDRVIsb0JBQVlsRyxNQUFNYSxJQUFOLENBQVdxRixTQUFYLElBQ0ovYSxrQkFBa0J1YixrQkFEMUI7QUFFRDs7QUFFRCxVQUFJMVUsS0FBS3NILEdBQUwsQ0FBUzZNLFNBQVQsSUFBc0JoYixrQkFBa0J1YixrQkFBNUMsRUFDQTtBQUNFUCxvQkFBWW5HLE1BQU1hLElBQU4sQ0FBV3NGLFNBQVgsSUFDSmhiLGtCQUFrQnViLGtCQUQxQjtBQUVEOztBQUVETix3QkFBa0JGLFlBQVlBLFNBQVosR0FBd0JDLFlBQVlBLFNBQXREO0FBQ0FyTyxpQkFBVzlGLEtBQUtHLElBQUwsQ0FBVWlVLGVBQVYsQ0FBWDs7QUFFQUMsdUJBQWlCLEtBQUsxWCxpQkFBTCxHQUF5QjZWLE1BQU0vUCxZQUEvQixHQUE4Q2dRLE1BQU1oUSxZQUFwRCxHQUFtRTJSLGVBQXBGOztBQUVBO0FBQ0E5Rix3QkFBa0IrRixpQkFBaUJILFNBQWpCLEdBQTZCcE8sUUFBL0M7QUFDQTRJLHdCQUFrQjJGLGlCQUFpQkYsU0FBakIsR0FBNkJyTyxRQUEvQzs7QUFFQTtBQUNBME0sWUFBTWxFLGVBQU4sSUFBeUJBLGVBQXpCO0FBQ0FrRSxZQUFNOUQsZUFBTixJQUF5QkEsZUFBekI7QUFDQStELFlBQU1uRSxlQUFOLElBQXlCQSxlQUF6QjtBQUNBbUUsWUFBTS9ELGVBQU4sSUFBeUJBLGVBQXpCO0FBQ0Q7QUFDRixDQTlFRDs7QUFnRkF6VCxTQUFTWCxTQUFULENBQW1CMlksc0JBQW5CLEdBQTRDLFVBQVV6USxJQUFWLEVBQWdCO0FBQzFELE1BQUltUyxVQUFKO0FBQ0EsTUFBSUMsWUFBSjtBQUNBLE1BQUlDLFlBQUo7QUFDQSxNQUFJWCxTQUFKO0FBQ0EsTUFBSUMsU0FBSjtBQUNBLE1BQUlXLFlBQUo7QUFDQSxNQUFJQyxZQUFKO0FBQ0EsTUFBSUMsYUFBSjtBQUNBTCxlQUFhblMsS0FBS3NRLFFBQUwsRUFBYjs7QUFFQThCLGlCQUFlLENBQUNELFdBQVdNLFFBQVgsS0FBd0JOLFdBQVdPLE9BQVgsRUFBekIsSUFBaUQsQ0FBaEU7QUFDQUwsaUJBQWUsQ0FBQ0YsV0FBV1EsTUFBWCxLQUFzQlIsV0FBV1MsU0FBWCxFQUF2QixJQUFpRCxDQUFoRTtBQUNBbEIsY0FBWTFSLEtBQUtuQixVQUFMLEtBQW9CdVQsWUFBaEM7QUFDQVQsY0FBWTNSLEtBQUtqQixVQUFMLEtBQW9Cc1QsWUFBaEM7QUFDQUMsaUJBQWU5VSxLQUFLc0gsR0FBTCxDQUFTNE0sU0FBVCxJQUFzQjFSLEtBQUtzTixRQUFMLEtBQWtCLENBQXZEO0FBQ0FpRixpQkFBZS9VLEtBQUtzSCxHQUFMLENBQVM2TSxTQUFULElBQXNCM1IsS0FBS3dOLFNBQUwsS0FBbUIsQ0FBeEQ7O0FBRUEsTUFBSXhOLEtBQUtzUSxRQUFMLE1BQW1CLEtBQUtoWCxZQUFMLENBQWtCbUMsT0FBbEIsRUFBdkIsRUFBbUQ7QUFDbkQ7QUFDRStXLHNCQUFnQkwsV0FBVy9DLGdCQUFYLEtBQWdDLEtBQUszVSxrQkFBckQ7O0FBRUEsVUFBSTZYLGVBQWVFLGFBQWYsSUFBZ0NELGVBQWVDLGFBQW5ELEVBQ0E7QUFDRXhTLGFBQUsrTCxpQkFBTCxHQUF5QixDQUFDLEtBQUsxUixlQUFOLEdBQXdCcVgsU0FBakQ7QUFDQTFSLGFBQUttTSxpQkFBTCxHQUF5QixDQUFDLEtBQUs5UixlQUFOLEdBQXdCc1gsU0FBakQ7QUFDRDtBQUNGLEtBVEQsTUFVSTtBQUNKO0FBQ0VhLHNCQUFnQkwsV0FBVy9DLGdCQUFYLEtBQWdDLEtBQUt6VSwwQkFBckQ7O0FBRUEsVUFBSTJYLGVBQWVFLGFBQWYsSUFBZ0NELGVBQWVDLGFBQW5ELEVBQ0E7QUFDRXhTLGFBQUsrTCxpQkFBTCxHQUF5QixDQUFDLEtBQUsxUixlQUFOLEdBQXdCcVgsU0FBeEIsR0FDakIsS0FBS25YLHVCQURiO0FBRUF5RixhQUFLbU0saUJBQUwsR0FBeUIsQ0FBQyxLQUFLOVIsZUFBTixHQUF3QnNYLFNBQXhCLEdBQ2pCLEtBQUtwWCx1QkFEYjtBQUVEO0FBQ0Y7QUFDRixDQXhDRDs7QUEwQ0E5QixTQUFTWCxTQUFULENBQW1Cc0YsV0FBbkIsR0FBaUMsWUFBWTtBQUMzQyxNQUFJeVYsU0FBSjtBQUNBLE1BQUlDLGFBQWEsS0FBakI7O0FBRUEsTUFBSSxLQUFLaFcsZUFBTCxHQUF1QixLQUFLQyxhQUFMLEdBQXFCLENBQWhELEVBQ0E7QUFDRStWLGlCQUNRdFYsS0FBS3NILEdBQUwsQ0FBUyxLQUFLNUcsaUJBQUwsR0FBeUIsS0FBS2tRLG9CQUF2QyxJQUErRCxDQUR2RTtBQUVEOztBQUVEeUUsY0FBWSxLQUFLM1UsaUJBQUwsR0FBeUIsS0FBSzBSLDBCQUExQzs7QUFFQSxPQUFLeEIsb0JBQUwsR0FBNEIsS0FBS2xRLGlCQUFqQzs7QUFFQSxTQUFPMlUsYUFBYUMsVUFBcEI7QUFDRCxDQWZEOztBQWlCQXJhLFNBQVNYLFNBQVQsQ0FBbUJ5RyxPQUFuQixHQUE2QixZQUFZO0FBQ3ZDLE1BQUksS0FBS3dVLHFCQUFMLElBQThCLENBQUMsS0FBS2xaLFdBQXhDLEVBQ0E7QUFDRSxRQUFJLEtBQUs0VSxxQkFBTCxJQUE4QixLQUFLbFIsZUFBdkMsRUFDQTtBQUNFLFdBQUt5VixNQUFMO0FBQ0EsV0FBS3ZFLHFCQUFMLEdBQTZCLENBQTdCO0FBQ0QsS0FKRCxNQU1BO0FBQ0UsV0FBS0EscUJBQUw7QUFDRDtBQUNGO0FBQ0YsQ0FiRDs7QUFlQTtBQUNBO0FBQ0E7O0FBRUFoVyxTQUFTWCxTQUFULENBQW1CbWIsUUFBbkIsR0FBOEIsVUFBVXpULEtBQVYsRUFBZ0I7O0FBRTVDLE1BQUkwVCxRQUFRLENBQVo7QUFDQSxNQUFJQyxRQUFRLENBQVo7O0FBRUFELFVBQVFFLFNBQVM1VixLQUFLQyxJQUFMLENBQVUsQ0FBQytCLE1BQU1pVCxRQUFOLEtBQW1CalQsTUFBTWtULE9BQU4sRUFBcEIsSUFBdUMsS0FBSzdDLGNBQXRELENBQVQsQ0FBUjtBQUNBc0QsVUFBUUMsU0FBUzVWLEtBQUtDLElBQUwsQ0FBVSxDQUFDK0IsTUFBTW9ULFNBQU4sS0FBb0JwVCxNQUFNbVQsTUFBTixFQUFyQixJQUF1QyxLQUFLOUMsY0FBdEQsQ0FBVCxDQUFSOztBQUVBLE1BQUlqQixPQUFPLElBQUk0QyxLQUFKLENBQVUwQixLQUFWLENBQVg7O0FBRUEsT0FBSSxJQUFJeFUsSUFBSSxDQUFaLEVBQWVBLElBQUl3VSxLQUFuQixFQUEwQnhVLEdBQTFCLEVBQThCO0FBQzVCa1EsU0FBS2xRLENBQUwsSUFBVSxJQUFJOFMsS0FBSixDQUFVMkIsS0FBVixDQUFWO0FBQ0Q7O0FBRUQsT0FBSSxJQUFJelUsSUFBSSxDQUFaLEVBQWVBLElBQUl3VSxLQUFuQixFQUEwQnhVLEdBQTFCLEVBQThCO0FBQzVCLFNBQUksSUFBSXVLLElBQUksQ0FBWixFQUFlQSxJQUFJa0ssS0FBbkIsRUFBMEJsSyxHQUExQixFQUE4QjtBQUM1QjJGLFdBQUtsUSxDQUFMLEVBQVF1SyxDQUFSLElBQWEsSUFBSXVJLEtBQUosRUFBYjtBQUNEO0FBQ0Y7O0FBRUQsU0FBTzVDLElBQVA7QUFDRCxDQXJCRDs7QUF1QkFuVyxTQUFTWCxTQUFULENBQW1CdWIsYUFBbkIsR0FBbUMsVUFBVUMsQ0FBVixFQUFhekssSUFBYixFQUFtQjBLLEdBQW5CLEVBQXVCOztBQUV4RCxNQUFJQyxTQUFTLENBQWI7QUFDQSxNQUFJQyxVQUFVLENBQWQ7QUFDQSxNQUFJQyxTQUFTLENBQWI7QUFDQSxNQUFJQyxVQUFVLENBQWQ7O0FBRUFILFdBQVNKLFNBQVM1VixLQUFLc0UsS0FBTCxDQUFXLENBQUN3UixFQUFFakMsT0FBRixHQUFZNVUsQ0FBWixHQUFnQm9NLElBQWpCLElBQXlCLEtBQUtnSCxjQUF6QyxDQUFULENBQVQ7QUFDQTRELFlBQVVMLFNBQVM1VixLQUFLc0UsS0FBTCxDQUFXLENBQUN3UixFQUFFakMsT0FBRixHQUFZcFMsS0FBWixHQUFvQnFVLEVBQUVqQyxPQUFGLEdBQVk1VSxDQUFoQyxHQUFvQ29NLElBQXJDLElBQTZDLEtBQUtnSCxjQUE3RCxDQUFULENBQVY7QUFDQTZELFdBQVNOLFNBQVM1VixLQUFLc0UsS0FBTCxDQUFXLENBQUN3UixFQUFFakMsT0FBRixHQUFZdlMsQ0FBWixHQUFnQnlVLEdBQWpCLElBQXdCLEtBQUsxRCxjQUF4QyxDQUFULENBQVQ7QUFDQThELFlBQVVQLFNBQVM1VixLQUFLc0UsS0FBTCxDQUFXLENBQUN3UixFQUFFakMsT0FBRixHQUFZbFMsTUFBWixHQUFxQm1VLEVBQUVqQyxPQUFGLEdBQVl2UyxDQUFqQyxHQUFxQ3lVLEdBQXRDLElBQTZDLEtBQUsxRCxjQUE3RCxDQUFULENBQVY7O0FBRUEsT0FBSyxJQUFJblIsSUFBSThVLE1BQWIsRUFBcUI5VSxLQUFLK1UsT0FBMUIsRUFBbUMvVSxHQUFuQyxFQUNBO0FBQ0UsU0FBSyxJQUFJdUssSUFBSXlLLE1BQWIsRUFBcUJ6SyxLQUFLMEssT0FBMUIsRUFBbUMxSyxHQUFuQyxFQUNBO0FBQ0UsV0FBSzJGLElBQUwsQ0FBVWxRLENBQVYsRUFBYXVLLENBQWIsRUFBZ0JySSxJQUFoQixDQUFxQjBTLENBQXJCO0FBQ0FBLFFBQUVNLGtCQUFGLENBQXFCSixNQUFyQixFQUE2QkMsT0FBN0IsRUFBc0NDLE1BQXRDLEVBQThDQyxPQUE5QztBQUNEO0FBQ0Y7QUFFRixDQXJCRDs7QUF1QkFsYixTQUFTWCxTQUFULENBQW1CZ0csVUFBbkIsR0FBZ0MsWUFBVztBQUN6QyxNQUFJWSxDQUFKO0FBQ0EsTUFBSXNSLEtBQUo7QUFDQSxNQUFJRSxTQUFTLEtBQUs3VCxXQUFMLEVBQWI7O0FBRUEsT0FBS3VTLElBQUwsR0FBWSxLQUFLcUUsUUFBTCxDQUFjLEtBQUszWixZQUFMLENBQWtCbUMsT0FBbEIsRUFBZCxDQUFaOztBQUVBO0FBQ0EsT0FBS2lELElBQUksQ0FBVCxFQUFZQSxJQUFJd1IsT0FBT25VLE1BQXZCLEVBQStCMkMsR0FBL0IsRUFDQTtBQUNFc1IsWUFBUUUsT0FBT3hSLENBQVAsQ0FBUjtBQUNBLFNBQUsyVSxhQUFMLENBQW1CckQsS0FBbkIsRUFBMEIsS0FBSzFXLFlBQUwsQ0FBa0JtQyxPQUFsQixHQUE0QmlYLE9BQTVCLEVBQTFCLEVBQWlFLEtBQUtwWixZQUFMLENBQWtCbUMsT0FBbEIsR0FBNEJrWCxNQUE1QixFQUFqRTtBQUNEO0FBRUYsQ0FkRDs7QUFnQkFsYSxTQUFTWCxTQUFULENBQW1CdVksOEJBQW5CLEdBQW9ELFVBQVVMLEtBQVYsRUFBaUJHLGdCQUFqQixFQUFrQzs7QUFFcEYsTUFBSyxLQUFLclQsZUFBTCxHQUF1Qm5HLGtCQUFrQnlaLDZCQUF6QyxJQUEwRSxDQUExRSxJQUErRSxDQUFDLEtBQUtwVCxhQUFyRixJQUFzRyxDQUFDLEtBQUtDLGdCQUE3RyxJQUFtSSxLQUFLVyxrQkFBTCxHQUEwQixFQUExQixJQUFnQyxDQUFoQyxJQUFxQyxLQUFLWixhQUE3SyxJQUFnTSxLQUFLaUIscUJBQUwsR0FBNkIsRUFBN0IsSUFBbUMsQ0FBbkMsSUFBd0MsS0FBS2hCLGdCQUFqUCxFQUNBO0FBQ0UsUUFBSTRXLGNBQWMsSUFBSXpYLEdBQUosRUFBbEI7QUFDQTRULFVBQU02RCxXQUFOLEdBQW9CLElBQUlyQyxLQUFKLEVBQXBCO0FBQ0EsUUFBSXZCLEtBQUo7QUFDQSxRQUFJckIsT0FBTyxLQUFLQSxJQUFoQjs7QUFFQSxTQUFLLElBQUlsUSxJQUFLc1IsTUFBTXdELE1BQU4sR0FBZSxDQUE3QixFQUFpQzlVLElBQUtzUixNQUFNeUQsT0FBTixHQUFnQixDQUF0RCxFQUEwRC9VLEdBQTFELEVBQ0E7QUFDRSxXQUFLLElBQUl1SyxJQUFLK0csTUFBTTBELE1BQU4sR0FBZSxDQUE3QixFQUFpQ3pLLElBQUsrRyxNQUFNMkQsT0FBTixHQUFnQixDQUF0RCxFQUEwRDFLLEdBQTFELEVBQ0E7QUFDRSxZQUFJLEVBQUd2SyxJQUFJLENBQUwsSUFBWXVLLElBQUksQ0FBaEIsSUFBdUJ2SyxLQUFLa1EsS0FBSzdTLE1BQWpDLElBQTZDa04sS0FBSzJGLEtBQUssQ0FBTCxFQUFRN1MsTUFBNUQsQ0FBSixFQUNBO0FBQ0UsZUFBSyxJQUFJa0YsSUFBSSxDQUFiLEVBQWdCQSxJQUFJMk4sS0FBS2xRLENBQUwsRUFBUXVLLENBQVIsRUFBV2xOLE1BQS9CLEVBQXVDa0YsR0FBdkMsRUFBNEM7QUFDMUNnUCxvQkFBUXJCLEtBQUtsUSxDQUFMLEVBQVF1SyxDQUFSLEVBQVdoSSxDQUFYLENBQVI7O0FBRUE7QUFDQTtBQUNBLGdCQUFLK08sTUFBTU0sUUFBTixNQUFvQkwsTUFBTUssUUFBTixFQUFyQixJQUEyQ04sU0FBU0MsS0FBeEQsRUFDQTtBQUNFO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBLGdCQUFJLENBQUNFLGlCQUFpQjNULEdBQWpCLENBQXFCeVQsS0FBckIsQ0FBRCxJQUFnQyxDQUFDNEQsWUFBWXJYLEdBQVosQ0FBZ0J5VCxLQUFoQixDQUFyQyxFQUNBO0FBQ0Usa0JBQUl5QixZQUFZbFUsS0FBS3NILEdBQUwsQ0FBU2tMLE1BQU1uUixVQUFOLEtBQW1Cb1IsTUFBTXBSLFVBQU4sRUFBNUIsS0FDUm1SLE1BQU0xQyxRQUFOLEtBQWlCLENBQWxCLEdBQXdCMkMsTUFBTTNDLFFBQU4sS0FBaUIsQ0FEaEMsQ0FBaEI7QUFFQSxrQkFBSXFFLFlBQVluVSxLQUFLc0gsR0FBTCxDQUFTa0wsTUFBTWpSLFVBQU4sS0FBbUJrUixNQUFNbFIsVUFBTixFQUE1QixLQUNSaVIsTUFBTXhDLFNBQU4sS0FBa0IsQ0FBbkIsR0FBeUJ5QyxNQUFNekMsU0FBTixLQUFrQixDQURsQyxDQUFoQjs7QUFHQTtBQUNBO0FBQ0Esa0JBQUtrRSxhQUFhLEtBQUs3QixjQUFuQixJQUF1QzhCLGFBQWEsS0FBSzlCLGNBQTdELEVBQ0E7QUFDRTtBQUNBZ0UsNEJBQVkvUyxHQUFaLENBQWdCbVAsS0FBaEI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNGO0FBQ0Y7O0FBRURELFVBQU02RCxXQUFOLGdDQUF3QkEsV0FBeEI7QUFFRDtBQUNELE9BQUtuVixJQUFJLENBQVQsRUFBWUEsSUFBSXNSLE1BQU02RCxXQUFOLENBQWtCOVgsTUFBbEMsRUFBMEMyQyxHQUExQyxFQUNBO0FBQ0UsU0FBSzZSLGtCQUFMLENBQXdCUCxLQUF4QixFQUErQkEsTUFBTTZELFdBQU4sQ0FBa0JuVixDQUFsQixDQUEvQjtBQUNEO0FBQ0YsQ0F0REQ7O0FBd0RBakcsU0FBU1gsU0FBVCxDQUFtQnlOLGtCQUFuQixHQUF3QyxZQUFZO0FBQ2xELFNBQU8sR0FBUDtBQUNELENBRkQ7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTlNLFNBQVNYLFNBQVQsQ0FBbUJtRSxXQUFuQixHQUFpQyxZQUNqQztBQUNFLE1BQUlpQixpQkFBaUIsRUFBckI7QUFDQSxNQUFJNFcsZUFBZSxJQUFuQjtBQUNBLE1BQUk5VCxJQUFKOztBQUVBLFNBQU04VCxZQUFOLEVBQW9CO0FBQ2xCLFFBQUkzWCxXQUFXLEtBQUs3QyxZQUFMLENBQWtCK0MsV0FBbEIsRUFBZjtBQUNBLFFBQUkwWCx3QkFBd0IsRUFBNUI7QUFDQUQsbUJBQWUsS0FBZjs7QUFFQSxTQUFLLElBQUlwVixJQUFJLENBQWIsRUFBZ0JBLElBQUl2QyxTQUFTSixNQUE3QixFQUFxQzJDLEdBQXJDLEVBQTBDO0FBQ3hDc0IsYUFBTzdELFNBQVN1QyxDQUFULENBQVA7QUFDQSxVQUFHc0IsS0FBS21FLFFBQUwsR0FBZ0JwSSxNQUFoQixJQUEwQixDQUExQixJQUErQixDQUFDaUUsS0FBS21FLFFBQUwsR0FBZ0IsQ0FBaEIsRUFBbUIrSyxZQUFuRCxJQUFtRWxQLEtBQUs4RyxRQUFMLE1BQW1CLElBQXpGLEVBQThGO0FBQzVGaU4sOEJBQXNCblQsSUFBdEIsQ0FBMkIsQ0FBQ1osSUFBRCxFQUFPQSxLQUFLbUUsUUFBTCxHQUFnQixDQUFoQixDQUFQLEVBQTJCbkUsS0FBS3NRLFFBQUwsRUFBM0IsQ0FBM0I7QUFDQXdELHVCQUFlLElBQWY7QUFDRDtBQUNGO0FBQ0QsUUFBR0EsZ0JBQWdCLElBQW5CLEVBQXdCO0FBQ3RCLFVBQUlFLG9CQUFvQixFQUF4QjtBQUNBLFdBQUksSUFBSS9LLElBQUksQ0FBWixFQUFlQSxJQUFJOEssc0JBQXNCaFksTUFBekMsRUFBaURrTixHQUFqRCxFQUFxRDtBQUNuRCxZQUFHOEssc0JBQXNCOUssQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEI5RSxRQUE1QixHQUF1Q3BJLE1BQXZDLElBQWlELENBQXBELEVBQXNEO0FBQ3BEaVksNEJBQWtCcFQsSUFBbEIsQ0FBdUJtVCxzQkFBc0I5SyxDQUF0QixDQUF2QjtBQUNBOEssZ0NBQXNCOUssQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEJxSCxRQUE1QixHQUF1Q3ZKLE1BQXZDLENBQThDZ04sc0JBQXNCOUssQ0FBdEIsRUFBeUIsQ0FBekIsQ0FBOUM7QUFDRDtBQUNGO0FBQ0QvTCxxQkFBZTBELElBQWYsQ0FBb0JvVCxpQkFBcEI7QUFDQSxXQUFLMWEsWUFBTCxDQUFrQmdPLGFBQWxCO0FBQ0EsV0FBS2hPLFlBQUwsQ0FBa0IwQixhQUFsQjtBQUNEO0FBQ0Y7QUFDRCxPQUFLa0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDRCxDQWhDRDs7QUFrQ0E7QUFDQXpFLFNBQVNYLFNBQVQsQ0FBbUJpRyxRQUFuQixHQUE4QixVQUFTYixjQUFULEVBQzlCO0FBQ0UsTUFBSStXLDRCQUE0Qi9XLGVBQWVuQixNQUEvQztBQUNBLE1BQUlpWSxvQkFBb0I5VyxlQUFlK1csNEJBQTRCLENBQTNDLENBQXhCOztBQUVBLE1BQUlDLFFBQUo7QUFDQSxPQUFJLElBQUl4VixJQUFJLENBQVosRUFBZUEsSUFBSXNWLGtCQUFrQmpZLE1BQXJDLEVBQTZDMkMsR0FBN0MsRUFBaUQ7QUFDL0N3VixlQUFXRixrQkFBa0J0VixDQUFsQixDQUFYOztBQUVBLFNBQUt5VixzQkFBTCxDQUE0QkQsUUFBNUI7O0FBRUFBLGFBQVMsQ0FBVCxFQUFZcFQsR0FBWixDQUFnQm9ULFNBQVMsQ0FBVCxDQUFoQjtBQUNBQSxhQUFTLENBQVQsRUFBWXBULEdBQVosQ0FBZ0JvVCxTQUFTLENBQVQsQ0FBaEIsRUFBNkJBLFNBQVMsQ0FBVCxFQUFZeGMsTUFBekMsRUFBaUR3YyxTQUFTLENBQVQsRUFBWXZjLE1BQTdEO0FBQ0Q7O0FBRUR1RixpQkFBZXdILE1BQWYsQ0FBc0J4SCxlQUFlbkIsTUFBZixHQUFzQixDQUE1QyxFQUErQyxDQUEvQztBQUNBLE9BQUt6QyxZQUFMLENBQWtCZ08sYUFBbEI7QUFDQSxPQUFLaE8sWUFBTCxDQUFrQjBCLGFBQWxCO0FBQ0QsQ0FsQkQ7O0FBb0JBO0FBQ0F2QyxTQUFTWCxTQUFULENBQW1CcWMsc0JBQW5CLEdBQTRDLFVBQVNELFFBQVQsRUFBa0I7O0FBRTVELE1BQUlFLGlCQUFKO0FBQ0EsTUFBSUMsYUFBSjtBQUNBLE1BQUlDLGFBQWFKLFNBQVMsQ0FBVCxDQUFqQjtBQUNBLE1BQUdJLGNBQWNKLFNBQVMsQ0FBVCxFQUFZeGMsTUFBN0IsRUFBb0M7QUFDbEMyYyxvQkFBZ0JILFNBQVMsQ0FBVCxFQUFZdmMsTUFBNUI7QUFDRCxHQUZELE1BR0s7QUFDSDBjLG9CQUFnQkgsU0FBUyxDQUFULEVBQVl4YyxNQUE1QjtBQUNEO0FBQ0QsTUFBSTZjLGFBQWFGLGNBQWNiLE1BQS9CO0FBQ0EsTUFBSWdCLGNBQWNILGNBQWNaLE9BQWhDO0FBQ0EsTUFBSWdCLGFBQWFKLGNBQWNYLE1BQS9CO0FBQ0EsTUFBSWdCLGNBQWNMLGNBQWNWLE9BQWhDOztBQUVBLE1BQUlnQixjQUFjLENBQWxCO0FBQ0EsTUFBSUMsZ0JBQWdCLENBQXBCO0FBQ0EsTUFBSUMsaUJBQWlCLENBQXJCO0FBQ0EsTUFBSUMsZ0JBQWdCLENBQXBCO0FBQ0EsTUFBSUMsaUJBQWlCLENBQUNKLFdBQUQsRUFBY0UsY0FBZCxFQUE4QkQsYUFBOUIsRUFBNkNFLGFBQTdDLENBQXJCOztBQUVBLE1BQUdMLGFBQWEsQ0FBaEIsRUFBa0I7QUFDaEIsU0FBSSxJQUFJL1YsSUFBSTZWLFVBQVosRUFBd0I3VixLQUFLOFYsV0FBN0IsRUFBMEM5VixHQUExQyxFQUErQztBQUM3Q3FXLHFCQUFlLENBQWYsS0FBc0IsS0FBS25HLElBQUwsQ0FBVWxRLENBQVYsRUFBYStWLGFBQWEsQ0FBMUIsRUFBNkIxWSxNQUE3QixHQUFzQyxLQUFLNlMsSUFBTCxDQUFVbFEsQ0FBVixFQUFhK1YsVUFBYixFQUF5QjFZLE1BQS9ELEdBQXdFLENBQTlGO0FBQ0Q7QUFDRjtBQUNELE1BQUd5WSxjQUFjLEtBQUs1RixJQUFMLENBQVU3UyxNQUFWLEdBQW1CLENBQXBDLEVBQXNDO0FBQ3BDLFNBQUksSUFBSTJDLElBQUkrVixVQUFaLEVBQXdCL1YsS0FBS2dXLFdBQTdCLEVBQTBDaFcsR0FBMUMsRUFBK0M7QUFDN0NxVyxxQkFBZSxDQUFmLEtBQXNCLEtBQUtuRyxJQUFMLENBQVU0RixjQUFjLENBQXhCLEVBQTJCOVYsQ0FBM0IsRUFBOEIzQyxNQUE5QixHQUF1QyxLQUFLNlMsSUFBTCxDQUFVNEYsV0FBVixFQUF1QjlWLENBQXZCLEVBQTBCM0MsTUFBakUsR0FBMEUsQ0FBaEc7QUFDRDtBQUNGO0FBQ0QsTUFBRzJZLGNBQWMsS0FBSzlGLElBQUwsQ0FBVSxDQUFWLEVBQWE3UyxNQUFiLEdBQXNCLENBQXZDLEVBQXlDO0FBQ3ZDLFNBQUksSUFBSTJDLElBQUk2VixVQUFaLEVBQXdCN1YsS0FBSzhWLFdBQTdCLEVBQTBDOVYsR0FBMUMsRUFBK0M7QUFDN0NxVyxxQkFBZSxDQUFmLEtBQXNCLEtBQUtuRyxJQUFMLENBQVVsUSxDQUFWLEVBQWFnVyxjQUFjLENBQTNCLEVBQThCM1ksTUFBOUIsR0FBdUMsS0FBSzZTLElBQUwsQ0FBVWxRLENBQVYsRUFBYWdXLFdBQWIsRUFBMEIzWSxNQUFqRSxHQUEwRSxDQUFoRztBQUNEO0FBQ0Y7QUFDRCxNQUFHd1ksYUFBYSxDQUFoQixFQUFrQjtBQUNoQixTQUFJLElBQUk3VixJQUFJK1YsVUFBWixFQUF3Qi9WLEtBQUtnVyxXQUE3QixFQUEwQ2hXLEdBQTFDLEVBQStDO0FBQzdDcVcscUJBQWUsQ0FBZixLQUFzQixLQUFLbkcsSUFBTCxDQUFVMkYsYUFBYSxDQUF2QixFQUEwQjdWLENBQTFCLEVBQTZCM0MsTUFBN0IsR0FBc0MsS0FBSzZTLElBQUwsQ0FBVTJGLFVBQVYsRUFBc0I3VixDQUF0QixFQUF5QjNDLE1BQS9ELEdBQXdFLENBQTlGO0FBQ0Q7QUFDRjtBQUNELE1BQUl1TyxNQUFNdlIsUUFBUXlSLFNBQWxCO0FBQ0EsTUFBSXdLLFFBQUo7QUFDQSxNQUFJQyxRQUFKO0FBQ0EsT0FBSSxJQUFJaE0sSUFBSSxDQUFaLEVBQWVBLElBQUk4TCxlQUFlaFosTUFBbEMsRUFBMENrTixHQUExQyxFQUE4QztBQUM1QyxRQUFHOEwsZUFBZTlMLENBQWYsSUFBb0JxQixHQUF2QixFQUEyQjtBQUN6QkEsWUFBTXlLLGVBQWU5TCxDQUFmLENBQU47QUFDQStMLGlCQUFXLENBQVg7QUFDQUMsaUJBQVdoTSxDQUFYO0FBQ0QsS0FKRCxNQUtLLElBQUc4TCxlQUFlOUwsQ0FBZixLQUFxQnFCLEdBQXhCLEVBQTRCO0FBQy9CMEs7QUFDRDtBQUNGOztBQUVELE1BQUdBLFlBQVksQ0FBWixJQUFpQjFLLE9BQU8sQ0FBM0IsRUFBNkI7QUFDM0IsUUFBR3lLLGVBQWUsQ0FBZixLQUFxQixDQUFyQixJQUEwQkEsZUFBZSxDQUFmLEtBQXFCLENBQS9DLElBQW9EQSxlQUFlLENBQWYsS0FBcUIsQ0FBNUUsRUFBOEU7QUFDNUVYLDBCQUFvQixDQUFwQjtBQUNELEtBRkQsTUFHSyxJQUFHVyxlQUFlLENBQWYsS0FBcUIsQ0FBckIsSUFBMEJBLGVBQWUsQ0FBZixLQUFxQixDQUEvQyxJQUFvREEsZUFBZSxDQUFmLEtBQXFCLENBQTVFLEVBQThFO0FBQ2pGWCwwQkFBb0IsQ0FBcEI7QUFDRCxLQUZJLE1BR0EsSUFBR1csZUFBZSxDQUFmLEtBQXFCLENBQXJCLElBQTBCQSxlQUFlLENBQWYsS0FBcUIsQ0FBL0MsSUFBb0RBLGVBQWUsQ0FBZixLQUFxQixDQUE1RSxFQUE4RTtBQUNqRlgsMEJBQW9CLENBQXBCO0FBQ0QsS0FGSSxNQUdBLElBQUdXLGVBQWUsQ0FBZixLQUFxQixDQUFyQixJQUEwQkEsZUFBZSxDQUFmLEtBQXFCLENBQS9DLElBQW9EQSxlQUFlLENBQWYsS0FBcUIsQ0FBNUUsRUFBOEU7QUFDakZYLDBCQUFvQixDQUFwQjtBQUNEO0FBQ0YsR0FiRCxNQWNLLElBQUdZLFlBQVksQ0FBWixJQUFpQjFLLE9BQU8sQ0FBM0IsRUFBNkI7QUFDaEMsUUFBSTRLLFNBQVMxWCxLQUFLc0UsS0FBTCxDQUFXdEUsS0FBSzBYLE1BQUwsS0FBZ0IsQ0FBM0IsQ0FBYjtBQUNBLFFBQUdILGVBQWUsQ0FBZixLQUFxQixDQUFyQixJQUEwQkEsZUFBZSxDQUFmLEtBQXFCLENBQWxELEVBQW9EO0FBQUM7QUFDbkQsVUFBR0csVUFBVSxDQUFiLEVBQWU7QUFDYmQsNEJBQW9CLENBQXBCO0FBQ0QsT0FGRCxNQUdJO0FBQ0ZBLDRCQUFvQixDQUFwQjtBQUNEO0FBQ0YsS0FQRCxNQVFLLElBQUdXLGVBQWUsQ0FBZixLQUFxQixDQUFyQixJQUEwQkEsZUFBZSxDQUFmLEtBQXFCLENBQWxELEVBQW9EO0FBQ3ZELFVBQUdHLFVBQVUsQ0FBYixFQUFlO0FBQ2JkLDRCQUFvQixDQUFwQjtBQUNELE9BRkQsTUFHSTtBQUNGQSw0QkFBb0IsQ0FBcEI7QUFDRDtBQUNGLEtBUEksTUFRQSxJQUFHVyxlQUFlLENBQWYsS0FBcUIsQ0FBckIsSUFBMEJBLGVBQWUsQ0FBZixLQUFxQixDQUFsRCxFQUFvRDtBQUN2RCxVQUFHRyxVQUFVLENBQWIsRUFBZTtBQUNiZCw0QkFBb0IsQ0FBcEI7QUFDRCxPQUZELE1BR0k7QUFDRkEsNEJBQW9CLENBQXBCO0FBQ0Q7QUFDRixLQVBJLE1BUUEsSUFBR1csZUFBZSxDQUFmLEtBQXFCLENBQXJCLElBQTBCQSxlQUFlLENBQWYsS0FBcUIsQ0FBbEQsRUFBb0Q7QUFDdkQsVUFBR0csVUFBVSxDQUFiLEVBQWU7QUFDYmQsNEJBQW9CLENBQXBCO0FBQ0QsT0FGRCxNQUdJO0FBQ0ZBLDRCQUFvQixDQUFwQjtBQUNEO0FBQ0YsS0FQSSxNQVFBLElBQUdXLGVBQWUsQ0FBZixLQUFxQixDQUFyQixJQUEwQkEsZUFBZSxDQUFmLEtBQXFCLENBQWxELEVBQW9EO0FBQ3ZELFVBQUdHLFVBQVUsQ0FBYixFQUFlO0FBQ2JkLDRCQUFvQixDQUFwQjtBQUNELE9BRkQsTUFHSTtBQUNGQSw0QkFBb0IsQ0FBcEI7QUFDRDtBQUNGLEtBUEksTUFRQTtBQUNILFVBQUdjLFVBQVUsQ0FBYixFQUFlO0FBQ2JkLDRCQUFvQixDQUFwQjtBQUNELE9BRkQsTUFHSTtBQUNGQSw0QkFBb0IsQ0FBcEI7QUFDRDtBQUNGO0FBQ0YsR0FsREksTUFtREEsSUFBR1ksWUFBWSxDQUFaLElBQWlCMUssT0FBTyxDQUEzQixFQUE2QjtBQUNoQyxRQUFJNEssU0FBUzFYLEtBQUtzRSxLQUFMLENBQVd0RSxLQUFLMFgsTUFBTCxLQUFnQixDQUEzQixDQUFiO0FBQ0FkLHdCQUFvQmMsTUFBcEI7QUFDRCxHQUhJLE1BSUE7QUFDSGQsd0JBQW9CYSxRQUFwQjtBQUNEOztBQUVELE1BQUdiLHFCQUFxQixDQUF4QixFQUEyQjtBQUN6QkUsZUFBV3JRLFNBQVgsQ0FBcUJvUSxjQUFjeFYsVUFBZCxFQUFyQixFQUNxQndWLGNBQWN0VixVQUFkLEtBQTZCc1YsY0FBYzdHLFNBQWQsS0FBMEIsQ0FBdkQsR0FBMkQ3VyxrQkFBa0JNLG1CQUE3RSxHQUFtR3FkLFdBQVc5RyxTQUFYLEtBQXVCLENBRC9JO0FBRUQsR0FIRCxNQUlLLElBQUc0RyxxQkFBcUIsQ0FBeEIsRUFBMkI7QUFDOUJFLGVBQVdyUSxTQUFYLENBQXFCb1EsY0FBY3hWLFVBQWQsS0FBNkJ3VixjQUFjL0csUUFBZCxLQUF5QixDQUF0RCxHQUEwRDNXLGtCQUFrQk0sbUJBQTVFLEdBQWtHcWQsV0FBV2hILFFBQVgsS0FBc0IsQ0FBN0ksRUFDcUIrRyxjQUFjdFYsVUFBZCxFQURyQjtBQUVELEdBSEksTUFJQSxJQUFHcVYscUJBQXFCLENBQXhCLEVBQTJCO0FBQzlCRSxlQUFXclEsU0FBWCxDQUFxQm9RLGNBQWN4VixVQUFkLEVBQXJCLEVBQ3FCd1YsY0FBY3RWLFVBQWQsS0FBNkJzVixjQUFjN0csU0FBZCxLQUEwQixDQUF2RCxHQUEyRDdXLGtCQUFrQk0sbUJBQTdFLEdBQW1HcWQsV0FBVzlHLFNBQVgsS0FBdUIsQ0FEL0k7QUFFRCxHQUhJLE1BSUE7QUFDSDhHLGVBQVdyUSxTQUFYLENBQXFCb1EsY0FBY3hWLFVBQWQsS0FBNkJ3VixjQUFjL0csUUFBZCxLQUF5QixDQUF0RCxHQUEwRDNXLGtCQUFrQk0sbUJBQTVFLEdBQWtHcWQsV0FBV2hILFFBQVgsS0FBc0IsQ0FBN0ksRUFDcUIrRyxjQUFjdFYsVUFBZCxFQURyQjtBQUVEO0FBRUYsQ0FsSkQ7O0FBb0pBekgsT0FBT0MsT0FBUCxHQUFpQmtCLFFBQWpCLEM7Ozs7Ozs7Ozs7Ozs7O0FDM3RCQSxJQUFJRSxrQkFBa0IsbUJBQUEvQixDQUFRLHVFQUFSLENBQXRCOztBQUVBLFNBQVNELGlCQUFULEdBQTZCLENBQzVCOztBQUVEO0FBQ0EsS0FBSyxJQUFJRyxJQUFULElBQWlCNkIsZUFBakIsRUFBa0M7QUFDaENoQyxvQkFBa0JHLElBQWxCLElBQTBCNkIsZ0JBQWdCN0IsSUFBaEIsQ0FBMUI7QUFDRDs7QUFFREgsa0JBQWtCMFgsY0FBbEIsR0FBbUMsSUFBbkM7O0FBRUExWCxrQkFBa0JNLG1CQUFsQixHQUF3QyxFQUF4QztBQUNBTixrQkFBa0J1RCx1QkFBbEIsR0FBNEMsSUFBNUM7QUFDQXZELGtCQUFrQnlELDBCQUFsQixHQUErQyxNQUEvQztBQUNBekQsa0JBQWtCMkQsd0JBQWxCLEdBQTZDLEdBQTdDO0FBQ0EzRCxrQkFBa0I2RCxpQ0FBbEIsR0FBc0QsR0FBdEQ7QUFDQTdELGtCQUFrQitELDRCQUFsQixHQUFpRCxHQUFqRDtBQUNBL0Qsa0JBQWtCaUUscUNBQWxCLEdBQTBELEdBQTFEO0FBQ0FqRSxrQkFBa0JxRCwrQ0FBbEIsR0FBb0UsSUFBcEU7QUFDQXJELGtCQUFrQmdZLDZDQUFsQixHQUFrRSxJQUFsRTtBQUNBaFksa0JBQWtCcUgsa0NBQWxCLEdBQXVELEdBQXZEO0FBQ0FySCxrQkFBa0IrWSxpQ0FBbEIsR0FBc0QsS0FBdEQ7QUFDQS9ZLGtCQUFrQmdaLHFCQUFsQixHQUEwQ2haLGtCQUFrQitZLGlDQUFsQixHQUFzRCxDQUFoRztBQUNBL1ksa0JBQWtCdWIsa0JBQWxCLEdBQXVDdmIsa0JBQWtCTSxtQkFBbEIsR0FBd0MsSUFBL0U7QUFDQU4sa0JBQWtCd0csd0JBQWxCLEdBQTZDLEdBQTdDO0FBQ0F4RyxrQkFBa0I4WSxrQ0FBbEIsR0FBdUQsR0FBdkQ7QUFDQTlZLGtCQUFrQndlLGVBQWxCLEdBQW9DLENBQXBDO0FBQ0F4ZSxrQkFBa0J5Wiw2QkFBbEIsR0FBa0QsRUFBbEQ7O0FBRUE5WSxPQUFPQyxPQUFQLEdBQWlCWixpQkFBakIsQzs7Ozs7Ozs7Ozs7Ozs7QUM5QkEsSUFBSXllLFFBQVEsbUJBQUF4ZSxDQUFRLG1EQUFSLENBQVo7QUFDQSxJQUFJRCxvQkFBb0IsbUJBQUFDLENBQVEsMkVBQVIsQ0FBeEI7O0FBRUEsU0FBU1ksWUFBVCxDQUFzQkUsTUFBdEIsRUFBOEJDLE1BQTlCLEVBQXNDQyxLQUF0QyxFQUE2QztBQUMzQ3dkLFFBQU12ZCxJQUFOLENBQVcsSUFBWCxFQUFpQkgsTUFBakIsRUFBeUJDLE1BQXpCLEVBQWlDQyxLQUFqQztBQUNBLE9BQUtxWCxXQUFMLEdBQW1CdFksa0JBQWtCTSxtQkFBckM7QUFDRDs7QUFFRE8sYUFBYU0sU0FBYixHQUF5QkMsT0FBT0MsTUFBUCxDQUFjb2QsTUFBTXRkLFNBQXBCLENBQXpCOztBQUVBLEtBQUssSUFBSWhCLElBQVQsSUFBaUJzZSxLQUFqQixFQUF3QjtBQUN0QjVkLGVBQWFWLElBQWIsSUFBcUJzZSxNQUFNdGUsSUFBTixDQUFyQjtBQUNEOztBQUVEUSxPQUFPQyxPQUFQLEdBQWlCQyxZQUFqQixDOzs7Ozs7Ozs7Ozs7OztBQ2RBLElBQUk2ZCxRQUFRLG1CQUFBemUsQ0FBUSxtREFBUixDQUFaOztBQUVBLFNBQVMyVSxZQUFULENBQXNCbFMsRUFBdEIsRUFBMEJvUyxHQUExQixFQUErQjlMLElBQS9CLEVBQXFDbEcsS0FBckMsRUFBNEM7QUFDMUM7QUFDQTRiLFFBQU14ZCxJQUFOLENBQVcsSUFBWCxFQUFpQndCLEVBQWpCLEVBQXFCb1MsR0FBckIsRUFBMEI5TCxJQUExQixFQUFnQ2xHLEtBQWhDO0FBQ0E7QUFDQSxPQUFLb1MsWUFBTCxHQUFvQixDQUFwQjtBQUNBLE9BQUtJLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxPQUFLSCxlQUFMLEdBQXVCLENBQXZCO0FBQ0EsT0FBS0ksZUFBTCxHQUF1QixDQUF2QjtBQUNBLE9BQUtILGlCQUFMLEdBQXlCLENBQXpCO0FBQ0EsT0FBS0ksaUJBQUwsR0FBeUIsQ0FBekI7QUFDQTtBQUNBLE9BQUtQLGFBQUwsR0FBcUIsQ0FBckI7QUFDQSxPQUFLSSxhQUFMLEdBQXFCLENBQXJCOztBQUVBO0FBQ0EsT0FBS3dILE1BQUwsR0FBYyxDQUFkO0FBQ0EsT0FBS0MsT0FBTCxHQUFlLENBQWY7QUFDQSxPQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLE9BQUtDLE9BQUwsR0FBZSxDQUFmOztBQUVBO0FBQ0EsT0FBS0UsV0FBTCxHQUFtQixFQUFuQjtBQUNEOztBQUVEdEksYUFBYXpULFNBQWIsR0FBeUJDLE9BQU9DLE1BQVAsQ0FBY3FkLE1BQU12ZCxTQUFwQixDQUF6Qjs7QUFFQSxLQUFLLElBQUloQixJQUFULElBQWlCdWUsS0FBakIsRUFBd0I7QUFDdEI5SixlQUFhelUsSUFBYixJQUFxQnVlLE1BQU12ZSxJQUFOLENBQXJCO0FBQ0Q7O0FBRUR5VSxhQUFhelQsU0FBYixDQUF1QjhiLGtCQUF2QixHQUE0QyxVQUFVMEIsT0FBVixFQUFtQkMsUUFBbkIsRUFBNkJDLE9BQTdCLEVBQXNDQyxRQUF0QyxFQUM1QztBQUNFLE9BQUtqQyxNQUFMLEdBQWM4QixPQUFkO0FBQ0EsT0FBSzdCLE9BQUwsR0FBZThCLFFBQWY7QUFDQSxPQUFLN0IsTUFBTCxHQUFjOEIsT0FBZDtBQUNBLE9BQUs3QixPQUFMLEdBQWU4QixRQUFmO0FBRUQsQ0FQRDs7QUFTQW5lLE9BQU9DLE9BQVAsR0FBaUJnVSxZQUFqQixDOzs7Ozs7Ozs7Ozs7OztBQ3pDQSxJQUFJbUssb0JBQW9CLG1CQUFBOWUsQ0FBUSwyRUFBUixDQUF4Qjs7QUFFQSxTQUFTK2UsT0FBVCxHQUFtQjtBQUNqQixPQUFLQyxHQUFMLEdBQVcsRUFBWDtBQUNBLE9BQUt6UCxJQUFMLEdBQVksRUFBWjtBQUNEOztBQUVEd1AsUUFBUTdkLFNBQVIsQ0FBa0IrZCxHQUFsQixHQUF3QixVQUFVQyxHQUFWLEVBQWVDLEtBQWYsRUFBc0I7QUFDNUMsTUFBSUMsUUFBUU4sa0JBQWtCTyxRQUFsQixDQUEyQkgsR0FBM0IsQ0FBWjtBQUNBLE1BQUksQ0FBQyxLQUFLdFYsUUFBTCxDQUFjd1YsS0FBZCxDQUFMLEVBQTJCO0FBQ3pCLFNBQUtKLEdBQUwsQ0FBU0ksS0FBVCxJQUFrQkQsS0FBbEI7QUFDQSxTQUFLNVAsSUFBTCxDQUFVdkYsSUFBVixDQUFla1YsR0FBZjtBQUNEO0FBQ0YsQ0FORDs7QUFRQUgsUUFBUTdkLFNBQVIsQ0FBa0IwSSxRQUFsQixHQUE2QixVQUFVc1YsR0FBVixFQUFlO0FBQzFDLE1BQUlFLFFBQVFOLGtCQUFrQk8sUUFBbEIsQ0FBMkJILEdBQTNCLENBQVo7QUFDQSxTQUFPLEtBQUtGLEdBQUwsQ0FBU0UsR0FBVCxLQUFpQixJQUF4QjtBQUNELENBSEQ7O0FBS0FILFFBQVE3ZCxTQUFSLENBQWtCb2UsR0FBbEIsR0FBd0IsVUFBVUosR0FBVixFQUFlO0FBQ3JDLE1BQUlFLFFBQVFOLGtCQUFrQk8sUUFBbEIsQ0FBMkJILEdBQTNCLENBQVo7QUFDQSxTQUFPLEtBQUtGLEdBQUwsQ0FBU0ksS0FBVCxDQUFQO0FBQ0QsQ0FIRDs7QUFLQUwsUUFBUTdkLFNBQVIsQ0FBa0JxZSxNQUFsQixHQUEyQixZQUFZO0FBQ3JDLFNBQU8sS0FBS2hRLElBQVo7QUFDRCxDQUZEOztBQUlBN08sT0FBT0MsT0FBUCxHQUFpQm9lLE9BQWpCLEM7Ozs7Ozs7Ozs7Ozs7O0FDN0JBLElBQUlELG9CQUFvQixtQkFBQTllLENBQVEsMkVBQVIsQ0FBeEI7O0FBRUEsU0FBUzBKLE9BQVQsR0FBbUI7QUFDakIsT0FBSzhWLEdBQUwsR0FBVyxFQUFYO0FBQ0Q7QUFDRDs7QUFFQTlWLFFBQVF4SSxTQUFSLENBQWtCZ0osR0FBbEIsR0FBd0IsVUFBVXVWLEdBQVYsRUFBZTtBQUNyQyxNQUFJTCxRQUFRTixrQkFBa0JPLFFBQWxCLENBQTJCSSxHQUEzQixDQUFaO0FBQ0EsTUFBSSxDQUFDLEtBQUs3VixRQUFMLENBQWN3VixLQUFkLENBQUwsRUFDRSxLQUFLSSxHQUFMLENBQVNKLEtBQVQsSUFBa0JLLEdBQWxCO0FBQ0gsQ0FKRDs7QUFNQS9WLFFBQVF4SSxTQUFSLENBQWtCaVAsTUFBbEIsR0FBMkIsVUFBVXNQLEdBQVYsRUFBZTtBQUN4QyxTQUFPLEtBQUtELEdBQUwsQ0FBU1Ysa0JBQWtCTyxRQUFsQixDQUEyQkksR0FBM0IsQ0FBVCxDQUFQO0FBQ0QsQ0FGRDs7QUFJQS9WLFFBQVF4SSxTQUFSLENBQWtCd2UsS0FBbEIsR0FBMEIsWUFBWTtBQUNwQyxPQUFLRixHQUFMLEdBQVcsRUFBWDtBQUNELENBRkQ7O0FBSUE5VixRQUFReEksU0FBUixDQUFrQjBJLFFBQWxCLEdBQTZCLFVBQVU2VixHQUFWLEVBQWU7QUFDMUMsU0FBTyxLQUFLRCxHQUFMLENBQVNWLGtCQUFrQk8sUUFBbEIsQ0FBMkJJLEdBQTNCLENBQVQsS0FBNkNBLEdBQXBEO0FBQ0QsQ0FGRDs7QUFJQS9WLFFBQVF4SSxTQUFSLENBQWtCeWUsT0FBbEIsR0FBNEIsWUFBWTtBQUN0QyxTQUFPLEtBQUs1VyxJQUFMLE9BQWdCLENBQXZCO0FBQ0QsQ0FGRDs7QUFJQVcsUUFBUXhJLFNBQVIsQ0FBa0I2SCxJQUFsQixHQUF5QixZQUFZO0FBQ25DLFNBQU81SCxPQUFPb08sSUFBUCxDQUFZLEtBQUtpUSxHQUFqQixFQUFzQnJhLE1BQTdCO0FBQ0QsQ0FGRDs7QUFJQTtBQUNBdUUsUUFBUXhJLFNBQVIsQ0FBa0IwZSxRQUFsQixHQUE2QixVQUFVcFYsSUFBVixFQUFnQjtBQUMzQyxNQUFJK0UsT0FBT3BPLE9BQU9vTyxJQUFQLENBQVksS0FBS2lRLEdBQWpCLENBQVg7QUFDQSxNQUFJcmEsU0FBU29LLEtBQUtwSyxNQUFsQjtBQUNBLE9BQUssSUFBSTJDLElBQUksQ0FBYixFQUFnQkEsSUFBSTNDLE1BQXBCLEVBQTRCMkMsR0FBNUIsRUFBaUM7QUFDL0IwQyxTQUFLUixJQUFMLENBQVUsS0FBS3dWLEdBQUwsQ0FBU2pRLEtBQUt6SCxDQUFMLENBQVQsQ0FBVjtBQUNEO0FBQ0YsQ0FORDs7QUFRQTRCLFFBQVF4SSxTQUFSLENBQWtCNkgsSUFBbEIsR0FBeUIsWUFBWTtBQUNuQyxTQUFPNUgsT0FBT29PLElBQVAsQ0FBWSxLQUFLaVEsR0FBakIsRUFBc0JyYSxNQUE3QjtBQUNELENBRkQ7O0FBSUF1RSxRQUFReEksU0FBUixDQUFrQnFKLE1BQWxCLEdBQTJCLFVBQVVDLElBQVYsRUFBZ0I7QUFDekMsTUFBSXFWLElBQUlyVixLQUFLckYsTUFBYjtBQUNBLE9BQUssSUFBSTJDLElBQUksQ0FBYixFQUFnQkEsSUFBSStYLENBQXBCLEVBQXVCL1gsR0FBdkIsRUFBNEI7QUFDMUIsUUFBSTRVLElBQUlsUyxLQUFLMUMsQ0FBTCxDQUFSO0FBQ0EsU0FBS29DLEdBQUwsQ0FBU3dTLENBQVQ7QUFDRDtBQUNGLENBTkQ7O0FBUUFoYyxPQUFPQyxPQUFQLEdBQWlCK0ksT0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7QUN0REEsU0FBU3RILFNBQVQsR0FBcUIsQ0FDcEI7O0FBRURBLFVBQVUrWSxvQkFBVixHQUFpQyxVQUFVWCxLQUFWLEVBQWlCRSxLQUFqQixFQUF3QkMsYUFBeEIsRUFBdUNtRixnQkFBdkMsRUFDakM7QUFDRSxNQUFJLENBQUN0RixNQUFNVSxVQUFOLENBQWlCUixLQUFqQixDQUFMLEVBQThCO0FBQzVCLFVBQU0sZUFBTjtBQUNEO0FBQ0QsTUFBSXFGLGFBQWEsSUFBSW5GLEtBQUosQ0FBVSxDQUFWLENBQWpCO0FBQ0F4WSxZQUFVNGQsbUNBQVYsQ0FBOEN4RixLQUE5QyxFQUFxREUsS0FBckQsRUFBNERxRixVQUE1RDtBQUNBcEYsZ0JBQWMsQ0FBZCxJQUFtQi9ULEtBQUs4TSxHQUFMLENBQVM4RyxNQUFNcUIsUUFBTixFQUFULEVBQTJCbkIsTUFBTW1CLFFBQU4sRUFBM0IsSUFDWGpWLEtBQUs0RSxHQUFMLENBQVNnUCxNQUFNM1UsQ0FBZixFQUFrQjZVLE1BQU03VSxDQUF4QixDQURSO0FBRUE4VSxnQkFBYyxDQUFkLElBQW1CL1QsS0FBSzhNLEdBQUwsQ0FBUzhHLE1BQU13QixTQUFOLEVBQVQsRUFBNEJ0QixNQUFNc0IsU0FBTixFQUE1QixJQUNYcFYsS0FBSzRFLEdBQUwsQ0FBU2dQLE1BQU10UyxDQUFmLEVBQWtCd1MsTUFBTXhTLENBQXhCLENBRFI7QUFFQTtBQUNBLE1BQUtzUyxNQUFNeUYsSUFBTixNQUFnQnZGLE1BQU11RixJQUFOLEVBQWpCLElBQW1DekYsTUFBTXFCLFFBQU4sTUFBb0JuQixNQUFNbUIsUUFBTixFQUEzRCxFQUNBO0FBQ0VsQixrQkFBYyxDQUFkLEtBQW9CL1QsS0FBSzhNLEdBQUwsQ0FBVWdILE1BQU11RixJQUFOLEtBQWV6RixNQUFNeUYsSUFBTixFQUF6QixFQUNYekYsTUFBTXFCLFFBQU4sS0FBbUJuQixNQUFNbUIsUUFBTixFQURSLENBQXBCO0FBRUQsR0FKRCxNQUtLLElBQUtuQixNQUFNdUYsSUFBTixNQUFnQnpGLE1BQU15RixJQUFOLEVBQWpCLElBQW1DdkYsTUFBTW1CLFFBQU4sTUFBb0JyQixNQUFNcUIsUUFBTixFQUEzRCxFQUNMO0FBQ0VsQixrQkFBYyxDQUFkLEtBQW9CL1QsS0FBSzhNLEdBQUwsQ0FBVThHLE1BQU15RixJQUFOLEtBQWV2RixNQUFNdUYsSUFBTixFQUF6QixFQUNYdkYsTUFBTW1CLFFBQU4sS0FBbUJyQixNQUFNcUIsUUFBTixFQURSLENBQXBCO0FBRUQ7QUFDRCxNQUFLckIsTUFBTTBGLElBQU4sTUFBZ0J4RixNQUFNd0YsSUFBTixFQUFqQixJQUFtQzFGLE1BQU13QixTQUFOLE1BQXFCdEIsTUFBTXNCLFNBQU4sRUFBNUQsRUFDQTtBQUNFckIsa0JBQWMsQ0FBZCxLQUFvQi9ULEtBQUs4TSxHQUFMLENBQVVnSCxNQUFNd0YsSUFBTixLQUFlMUYsTUFBTTBGLElBQU4sRUFBekIsRUFDWDFGLE1BQU13QixTQUFOLEtBQW9CdEIsTUFBTXNCLFNBQU4sRUFEVCxDQUFwQjtBQUVELEdBSkQsTUFLSyxJQUFLdEIsTUFBTXdGLElBQU4sTUFBZ0IxRixNQUFNMEYsSUFBTixFQUFqQixJQUFtQ3hGLE1BQU1zQixTQUFOLE1BQXFCeEIsTUFBTXdCLFNBQU4sRUFBNUQsRUFDTDtBQUNFckIsa0JBQWMsQ0FBZCxLQUFvQi9ULEtBQUs4TSxHQUFMLENBQVU4RyxNQUFNMEYsSUFBTixLQUFleEYsTUFBTXdGLElBQU4sRUFBekIsRUFDWHhGLE1BQU1zQixTQUFOLEtBQW9CeEIsTUFBTXdCLFNBQU4sRUFEVCxDQUFwQjtBQUVEOztBQUVEO0FBQ0EsTUFBSW1FLFFBQVF2WixLQUFLc0gsR0FBTCxDQUFTLENBQUN3TSxNQUFNdlMsVUFBTixLQUFxQnFTLE1BQU1yUyxVQUFOLEVBQXRCLEtBQ1p1UyxNQUFNelMsVUFBTixLQUFxQnVTLE1BQU12UyxVQUFOLEVBRFQsQ0FBVCxDQUFaO0FBRUE7QUFDQSxNQUFLeVMsTUFBTXZTLFVBQU4sTUFBc0JxUyxNQUFNclMsVUFBTixFQUF2QixJQUNLdVMsTUFBTXpTLFVBQU4sTUFBc0J1UyxNQUFNdlMsVUFBTixFQUQvQixFQUVBO0FBQ0U7QUFDQWtZLFlBQVEsR0FBUjtBQUNEOztBQUVELE1BQUlDLFVBQVVELFFBQVF4RixjQUFjLENBQWQsQ0FBdEI7QUFDQSxNQUFJMEYsVUFBVTFGLGNBQWMsQ0FBZCxJQUFtQndGLEtBQWpDO0FBQ0EsTUFBSXhGLGNBQWMsQ0FBZCxJQUFtQjBGLE9BQXZCLEVBQ0E7QUFDRUEsY0FBVTFGLGNBQWMsQ0FBZCxDQUFWO0FBQ0QsR0FIRCxNQUtBO0FBQ0V5RixjQUFVekYsY0FBYyxDQUFkLENBQVY7QUFDRDtBQUNEO0FBQ0E7QUFDQUEsZ0JBQWMsQ0FBZCxJQUFtQixDQUFDLENBQUQsR0FBS29GLFdBQVcsQ0FBWCxDQUFMLElBQXVCTSxVQUFVLENBQVgsR0FBZ0JQLGdCQUF0QyxDQUFuQjtBQUNBbkYsZ0JBQWMsQ0FBZCxJQUFtQixDQUFDLENBQUQsR0FBS29GLFdBQVcsQ0FBWCxDQUFMLElBQXVCSyxVQUFVLENBQVgsR0FBZ0JOLGdCQUF0QyxDQUFuQjtBQUNELENBMUREOztBQTREQTFkLFVBQVU0ZCxtQ0FBVixHQUFnRCxVQUFVeEYsS0FBVixFQUFpQkUsS0FBakIsRUFBd0JxRixVQUF4QixFQUNoRDtBQUNFLE1BQUl2RixNQUFNdlMsVUFBTixLQUFxQnlTLE1BQU16UyxVQUFOLEVBQXpCLEVBQ0E7QUFDRThYLGVBQVcsQ0FBWCxJQUFnQixDQUFDLENBQWpCO0FBQ0QsR0FIRCxNQUtBO0FBQ0VBLGVBQVcsQ0FBWCxJQUFnQixDQUFoQjtBQUNEOztBQUVELE1BQUl2RixNQUFNclMsVUFBTixLQUFxQnVTLE1BQU12UyxVQUFOLEVBQXpCLEVBQ0E7QUFDRTRYLGVBQVcsQ0FBWCxJQUFnQixDQUFDLENBQWpCO0FBQ0QsR0FIRCxNQUtBO0FBQ0VBLGVBQVcsQ0FBWCxJQUFnQixDQUFoQjtBQUNEO0FBQ0YsQ0FuQkQ7O0FBcUJBM2QsVUFBVWtlLGdCQUFWLEdBQTZCLFVBQVU5RixLQUFWLEVBQWlCRSxLQUFqQixFQUF3QjZGLE1BQXhCLEVBQzdCO0FBQ0U7QUFDQSxNQUFJQyxNQUFNaEcsTUFBTXZTLFVBQU4sRUFBVjtBQUNBLE1BQUl3WSxNQUFNakcsTUFBTXJTLFVBQU4sRUFBVjtBQUNBLE1BQUl1WSxNQUFNaEcsTUFBTXpTLFVBQU4sRUFBVjtBQUNBLE1BQUkwWSxNQUFNakcsTUFBTXZTLFVBQU4sRUFBVjs7QUFFQTtBQUNBLE1BQUlxUyxNQUFNVSxVQUFOLENBQWlCUixLQUFqQixDQUFKLEVBQ0E7QUFDRTZGLFdBQU8sQ0FBUCxJQUFZQyxHQUFaO0FBQ0FELFdBQU8sQ0FBUCxJQUFZRSxHQUFaO0FBQ0FGLFdBQU8sQ0FBUCxJQUFZRyxHQUFaO0FBQ0FILFdBQU8sQ0FBUCxJQUFZSSxHQUFaO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7QUFDRDtBQUNBLE1BQUlDLFlBQVlwRyxNQUFNeUYsSUFBTixFQUFoQjtBQUNBLE1BQUlZLFlBQVlyRyxNQUFNMEYsSUFBTixFQUFoQjtBQUNBLE1BQUlZLGFBQWF0RyxNQUFNcUIsUUFBTixFQUFqQjtBQUNBLE1BQUlrRixlQUFldkcsTUFBTXlGLElBQU4sRUFBbkI7QUFDQSxNQUFJZSxlQUFleEcsTUFBTXdCLFNBQU4sRUFBbkI7QUFDQSxNQUFJaUYsZ0JBQWdCekcsTUFBTXFCLFFBQU4sRUFBcEI7QUFDQSxNQUFJcUYsYUFBYTFHLE1BQU0yRyxZQUFOLEVBQWpCO0FBQ0EsTUFBSUMsY0FBYzVHLE1BQU02RyxhQUFOLEVBQWxCO0FBQ0E7QUFDQSxNQUFJQyxZQUFZNUcsTUFBTXVGLElBQU4sRUFBaEI7QUFDQSxNQUFJc0IsWUFBWTdHLE1BQU13RixJQUFOLEVBQWhCO0FBQ0EsTUFBSXNCLGFBQWE5RyxNQUFNbUIsUUFBTixFQUFqQjtBQUNBLE1BQUk0RixlQUFlL0csTUFBTXVGLElBQU4sRUFBbkI7QUFDQSxNQUFJeUIsZUFBZWhILE1BQU1zQixTQUFOLEVBQW5CO0FBQ0EsTUFBSTJGLGdCQUFnQmpILE1BQU1tQixRQUFOLEVBQXBCO0FBQ0EsTUFBSStGLGFBQWFsSCxNQUFNeUcsWUFBTixFQUFqQjtBQUNBLE1BQUlVLGNBQWNuSCxNQUFNMkcsYUFBTixFQUFsQjtBQUNBO0FBQ0EsTUFBSVMsa0JBQWtCLEtBQXRCO0FBQ0EsTUFBSUMsa0JBQWtCLEtBQXRCOztBQUVBO0FBQ0EsTUFBSXZCLE9BQU9FLEdBQVgsRUFDQTtBQUNFLFFBQUlELE1BQU1FLEdBQVYsRUFDQTtBQUNFSixhQUFPLENBQVAsSUFBWUMsR0FBWjtBQUNBRCxhQUFPLENBQVAsSUFBWU0sU0FBWjtBQUNBTixhQUFPLENBQVAsSUFBWUcsR0FBWjtBQUNBSCxhQUFPLENBQVAsSUFBWW1CLFlBQVo7QUFDQSxhQUFPLEtBQVA7QUFDRCxLQVBELE1BUUssSUFBSWpCLE1BQU1FLEdBQVYsRUFDTDtBQUNFSixhQUFPLENBQVAsSUFBWUMsR0FBWjtBQUNBRCxhQUFPLENBQVAsSUFBWVMsWUFBWjtBQUNBVCxhQUFPLENBQVAsSUFBWUcsR0FBWjtBQUNBSCxhQUFPLENBQVAsSUFBWWdCLFNBQVo7QUFDQSxhQUFPLEtBQVA7QUFDRCxLQVBJLE1BU0w7QUFDRTtBQUNEO0FBQ0Y7QUFDRDtBQXZCQSxPQXdCSyxJQUFJZCxPQUFPRSxHQUFYLEVBQ0w7QUFDRSxVQUFJSCxNQUFNRSxHQUFWLEVBQ0E7QUFDRUgsZUFBTyxDQUFQLElBQVlLLFNBQVo7QUFDQUwsZUFBTyxDQUFQLElBQVlFLEdBQVo7QUFDQUYsZUFBTyxDQUFQLElBQVlpQixVQUFaO0FBQ0FqQixlQUFPLENBQVAsSUFBWUksR0FBWjtBQUNBLGVBQU8sS0FBUDtBQUNELE9BUEQsTUFRSyxJQUFJSCxNQUFNRSxHQUFWLEVBQ0w7QUFDRUgsZUFBTyxDQUFQLElBQVlPLFVBQVo7QUFDQVAsZUFBTyxDQUFQLElBQVlFLEdBQVo7QUFDQUYsZUFBTyxDQUFQLElBQVllLFNBQVo7QUFDQWYsZUFBTyxDQUFQLElBQVlJLEdBQVo7QUFDQSxlQUFPLEtBQVA7QUFDRCxPQVBJLE1BU0w7QUFDRTtBQUNEO0FBQ0YsS0F0QkksTUF3Qkw7QUFDRTtBQUNBLFVBQUlxQixTQUFTeEgsTUFBTWpTLE1BQU4sR0FBZWlTLE1BQU1uUyxLQUFsQztBQUNBLFVBQUk0WixTQUFTdkgsTUFBTW5TLE1BQU4sR0FBZW1TLE1BQU1yUyxLQUFsQzs7QUFFQTtBQUNBLFVBQUk2WixhQUFhLENBQUN2QixNQUFNRixHQUFQLEtBQWVDLE1BQU1GLEdBQXJCLENBQWpCO0FBQ0EsVUFBSTJCLGtCQUFKO0FBQ0EsVUFBSUMsa0JBQUo7QUFDQSxVQUFJQyxXQUFKO0FBQ0EsVUFBSUMsV0FBSjtBQUNBLFVBQUlDLFdBQUo7QUFDQSxVQUFJQyxXQUFKOztBQUVBO0FBQ0EsVUFBSyxDQUFDUixNQUFGLElBQWFFLFVBQWpCLEVBQ0E7QUFDRSxZQUFJMUIsTUFBTUUsR0FBVixFQUNBO0FBQ0VILGlCQUFPLENBQVAsSUFBWVEsWUFBWjtBQUNBUixpQkFBTyxDQUFQLElBQVlTLFlBQVo7QUFDQWMsNEJBQWtCLElBQWxCO0FBQ0QsU0FMRCxNQU9BO0FBQ0V2QixpQkFBTyxDQUFQLElBQVlPLFVBQVo7QUFDQVAsaUJBQU8sQ0FBUCxJQUFZTSxTQUFaO0FBQ0FpQiw0QkFBa0IsSUFBbEI7QUFDRDtBQUNGLE9BZEQsTUFlSyxJQUFJRSxVQUFVRSxVQUFkLEVBQ0w7QUFDRSxZQUFJMUIsTUFBTUUsR0FBVixFQUNBO0FBQ0VILGlCQUFPLENBQVAsSUFBWUssU0FBWjtBQUNBTCxpQkFBTyxDQUFQLElBQVlNLFNBQVo7QUFDQWlCLDRCQUFrQixJQUFsQjtBQUNELFNBTEQsTUFPQTtBQUNFdkIsaUJBQU8sQ0FBUCxJQUFZVSxhQUFaO0FBQ0FWLGlCQUFPLENBQVAsSUFBWVMsWUFBWjtBQUNBYyw0QkFBa0IsSUFBbEI7QUFDRDtBQUNGOztBQUVEO0FBQ0EsVUFBSyxDQUFDRyxNQUFGLElBQWFDLFVBQWpCLEVBQ0E7QUFDRSxZQUFJeEIsTUFBTUYsR0FBVixFQUNBO0FBQ0VELGlCQUFPLENBQVAsSUFBWWtCLFlBQVo7QUFDQWxCLGlCQUFPLENBQVAsSUFBWW1CLFlBQVo7QUFDQUssNEJBQWtCLElBQWxCO0FBQ0QsU0FMRCxNQU9BO0FBQ0V4QixpQkFBTyxDQUFQLElBQVlpQixVQUFaO0FBQ0FqQixpQkFBTyxDQUFQLElBQVlnQixTQUFaO0FBQ0FRLDRCQUFrQixJQUFsQjtBQUNEO0FBQ0YsT0FkRCxNQWVLLElBQUlFLFVBQVVDLFVBQWQsRUFDTDtBQUNFLFlBQUl4QixNQUFNRixHQUFWLEVBQ0E7QUFDRUQsaUJBQU8sQ0FBUCxJQUFZZSxTQUFaO0FBQ0FmLGlCQUFPLENBQVAsSUFBWWdCLFNBQVo7QUFDQVEsNEJBQWtCLElBQWxCO0FBQ0QsU0FMRCxNQU9BO0FBQ0V4QixpQkFBTyxDQUFQLElBQVlvQixhQUFaO0FBQ0FwQixpQkFBTyxDQUFQLElBQVltQixZQUFaO0FBQ0FLLDRCQUFrQixJQUFsQjtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQSxVQUFJRCxtQkFBbUJDLGVBQXZCLEVBQ0E7QUFDRSxlQUFPLEtBQVA7QUFDRDs7QUFFRDtBQUNBLFVBQUl2QixNQUFNRSxHQUFWLEVBQ0E7QUFDRSxZQUFJRCxNQUFNRSxHQUFWLEVBQ0E7QUFDRXdCLCtCQUFxQi9mLFVBQVVxZ0Isb0JBQVYsQ0FBK0JULE1BQS9CLEVBQXVDRSxVQUF2QyxFQUFtRCxDQUFuRCxDQUFyQjtBQUNBRSwrQkFBcUJoZ0IsVUFBVXFnQixvQkFBVixDQUErQlIsTUFBL0IsRUFBdUNDLFVBQXZDLEVBQW1ELENBQW5ELENBQXJCO0FBQ0QsU0FKRCxNQU1BO0FBQ0VDLCtCQUFxQi9mLFVBQVVxZ0Isb0JBQVYsQ0FBK0IsQ0FBQ1QsTUFBaEMsRUFBd0NFLFVBQXhDLEVBQW9ELENBQXBELENBQXJCO0FBQ0FFLCtCQUFxQmhnQixVQUFVcWdCLG9CQUFWLENBQStCLENBQUNSLE1BQWhDLEVBQXdDQyxVQUF4QyxFQUFvRCxDQUFwRCxDQUFyQjtBQUNEO0FBQ0YsT0FaRCxNQWNBO0FBQ0UsWUFBSXpCLE1BQU1FLEdBQVYsRUFDQTtBQUNFd0IsK0JBQXFCL2YsVUFBVXFnQixvQkFBVixDQUErQixDQUFDVCxNQUFoQyxFQUF3Q0UsVUFBeEMsRUFBb0QsQ0FBcEQsQ0FBckI7QUFDQUUsK0JBQXFCaGdCLFVBQVVxZ0Isb0JBQVYsQ0FBK0IsQ0FBQ1IsTUFBaEMsRUFBd0NDLFVBQXhDLEVBQW9ELENBQXBELENBQXJCO0FBQ0QsU0FKRCxNQU1BO0FBQ0VDLCtCQUFxQi9mLFVBQVVxZ0Isb0JBQVYsQ0FBK0JULE1BQS9CLEVBQXVDRSxVQUF2QyxFQUFtRCxDQUFuRCxDQUFyQjtBQUNBRSwrQkFBcUJoZ0IsVUFBVXFnQixvQkFBVixDQUErQlIsTUFBL0IsRUFBdUNDLFVBQXZDLEVBQW1ELENBQW5ELENBQXJCO0FBQ0Q7QUFDRjtBQUNEO0FBQ0EsVUFBSSxDQUFDSixlQUFMLEVBQ0E7QUFDRSxnQkFBUUssa0JBQVI7QUFFRSxlQUFLLENBQUw7QUFDRUcsMEJBQWN6QixTQUFkO0FBQ0F3QiwwQkFBYzdCLE1BQU8sQ0FBQ1ksV0FBRixHQUFpQmMsVUFBckM7QUFDQTNCLG1CQUFPLENBQVAsSUFBWThCLFdBQVo7QUFDQTlCLG1CQUFPLENBQVAsSUFBWStCLFdBQVo7QUFDQTtBQUNGLGVBQUssQ0FBTDtBQUNFRCwwQkFBY3BCLGFBQWQ7QUFDQXFCLDBCQUFjN0IsTUFBTVMsYUFBYWdCLFVBQWpDO0FBQ0EzQixtQkFBTyxDQUFQLElBQVk4QixXQUFaO0FBQ0E5QixtQkFBTyxDQUFQLElBQVkrQixXQUFaO0FBQ0E7QUFDRixlQUFLLENBQUw7QUFDRUEsMEJBQWN0QixZQUFkO0FBQ0FxQiwwQkFBYzdCLE1BQU1ZLGNBQWNjLFVBQWxDO0FBQ0EzQixtQkFBTyxDQUFQLElBQVk4QixXQUFaO0FBQ0E5QixtQkFBTyxDQUFQLElBQVkrQixXQUFaO0FBQ0E7QUFDRixlQUFLLENBQUw7QUFDRUQsMEJBQWN0QixZQUFkO0FBQ0F1QiwwQkFBYzdCLE1BQU8sQ0FBQ1MsVUFBRixHQUFnQmdCLFVBQXBDO0FBQ0EzQixtQkFBTyxDQUFQLElBQVk4QixXQUFaO0FBQ0E5QixtQkFBTyxDQUFQLElBQVkrQixXQUFaO0FBQ0E7QUF6Qko7QUEyQkQ7QUFDRCxVQUFJLENBQUNQLGVBQUwsRUFDQTtBQUNFLGdCQUFRSyxrQkFBUjtBQUVFLGVBQUssQ0FBTDtBQUNFSSwwQkFBY2pCLFNBQWQ7QUFDQWdCLDBCQUFjN0IsTUFBTyxDQUFDbUIsV0FBRixHQUFpQkssVUFBckM7QUFDQTNCLG1CQUFPLENBQVAsSUFBWWdDLFdBQVo7QUFDQWhDLG1CQUFPLENBQVAsSUFBWWlDLFdBQVo7QUFDQTtBQUNGLGVBQUssQ0FBTDtBQUNFRCwwQkFBY1osYUFBZDtBQUNBYSwwQkFBYzdCLE1BQU1pQixhQUFhTSxVQUFqQztBQUNBM0IsbUJBQU8sQ0FBUCxJQUFZZ0MsV0FBWjtBQUNBaEMsbUJBQU8sQ0FBUCxJQUFZaUMsV0FBWjtBQUNBO0FBQ0YsZUFBSyxDQUFMO0FBQ0VBLDBCQUFjZCxZQUFkO0FBQ0FhLDBCQUFjN0IsTUFBTW1CLGNBQWNLLFVBQWxDO0FBQ0EzQixtQkFBTyxDQUFQLElBQVlnQyxXQUFaO0FBQ0FoQyxtQkFBTyxDQUFQLElBQVlpQyxXQUFaO0FBQ0E7QUFDRixlQUFLLENBQUw7QUFDRUQsMEJBQWNkLFlBQWQ7QUFDQWUsMEJBQWM3QixNQUFPLENBQUNpQixVQUFGLEdBQWdCTSxVQUFwQztBQUNBM0IsbUJBQU8sQ0FBUCxJQUFZZ0MsV0FBWjtBQUNBaEMsbUJBQU8sQ0FBUCxJQUFZaUMsV0FBWjtBQUNBO0FBekJKO0FBMkJEO0FBQ0Y7QUFDRCxTQUFPLEtBQVA7QUFDRCxDQXRRRDs7QUF3UUFwZ0IsVUFBVXFnQixvQkFBVixHQUFpQyxVQUFVdEMsS0FBVixFQUFpQitCLFVBQWpCLEVBQTZCUSxJQUE3QixFQUNqQztBQUNFLE1BQUl2QyxRQUFRK0IsVUFBWixFQUNBO0FBQ0UsV0FBT1EsSUFBUDtBQUNELEdBSEQsTUFLQTtBQUNFLFdBQU8sSUFBSUEsT0FBTyxDQUFsQjtBQUNEO0FBQ0YsQ0FWRDs7QUFZQXRnQixVQUFVaVosZUFBVixHQUE0QixVQUFVc0gsRUFBVixFQUFjQyxFQUFkLEVBQWtCQyxFQUFsQixFQUFzQkMsRUFBdEIsRUFDNUI7QUFDRSxNQUFJQSxNQUFNLElBQVYsRUFBZ0I7QUFDZCxXQUFPMWdCLFVBQVVrZSxnQkFBVixDQUEyQnFDLEVBQTNCLEVBQStCQyxFQUEvQixFQUFtQ0MsRUFBbkMsQ0FBUDtBQUNEO0FBQ0QsTUFBSUUsS0FBS0osR0FBRzljLENBQVo7QUFDQSxNQUFJbWQsS0FBS0wsR0FBR3phLENBQVo7QUFDQSxNQUFJK2EsS0FBS0wsR0FBRy9jLENBQVo7QUFDQSxNQUFJcWQsS0FBS04sR0FBRzFhLENBQVo7QUFDQSxNQUFJaWIsS0FBS04sR0FBR2hkLENBQVo7QUFDQSxNQUFJdWQsS0FBS1AsR0FBRzNhLENBQVo7QUFDQSxNQUFJbWIsS0FBS1AsR0FBR2pkLENBQVo7QUFDQSxNQUFJeWQsS0FBS1IsR0FBRzVhLENBQVo7QUFDQSxNQUFJckMsQ0FBSixFQUFPcUMsQ0FBUCxDQVpGLENBWVk7QUFDVixNQUFJcWIsRUFBSixFQUFRQyxFQUFSLEVBQVlDLEVBQVosRUFBZ0JDLEVBQWhCLEVBQW9CQyxFQUFwQixFQUF3QkMsRUFBeEIsQ0FiRixDQWE4QjtBQUM1QixNQUFJQyxLQUFKOztBQUVBTixPQUFLTCxLQUFLRixFQUFWO0FBQ0FTLE9BQUtWLEtBQUtFLEVBQVY7QUFDQVUsT0FBS1YsS0FBS0QsRUFBTCxHQUFVRCxLQUFLRyxFQUFwQixDQWxCRixDQWtCMkI7O0FBRXpCTSxPQUFLRixLQUFLRixFQUFWO0FBQ0FNLE9BQUtQLEtBQUtFLEVBQVY7QUFDQU8sT0FBS1AsS0FBS0QsRUFBTCxHQUFVRCxLQUFLRyxFQUFwQixDQXRCRixDQXNCMkI7O0FBRXpCTyxVQUFRTixLQUFLRyxFQUFMLEdBQVVGLEtBQUtDLEVBQXZCOztBQUVBLE1BQUlJLFNBQVMsQ0FBYixFQUNBO0FBQ0UsV0FBTyxJQUFQO0FBQ0Q7O0FBRURoZSxNQUFJLENBQUM0ZCxLQUFLRyxFQUFMLEdBQVVGLEtBQUtDLEVBQWhCLElBQXNCRSxLQUExQjtBQUNBM2IsTUFBSSxDQUFDc2IsS0FBS0csRUFBTCxHQUFVSixLQUFLSyxFQUFoQixJQUFzQkMsS0FBMUI7O0FBRUEsU0FBTyxJQUFJN2hCLEtBQUosQ0FBVTZELENBQVYsRUFBYXFDLENBQWIsQ0FBUDtBQUNELENBcENEOztBQXNDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E5RixVQUFVMGhCLE9BQVYsR0FBb0IsTUFBTWxkLEtBQUttZCxFQUEvQjtBQUNBM2hCLFVBQVU0aEIsZUFBVixHQUE0QixNQUFNcGQsS0FBS21kLEVBQXZDO0FBQ0EzaEIsVUFBVTJLLE1BQVYsR0FBbUIsTUFBTW5HLEtBQUttZCxFQUE5QjtBQUNBM2hCLFVBQVU2aEIsUUFBVixHQUFxQixNQUFNcmQsS0FBS21kLEVBQWhDOztBQUVBcmpCLE9BQU9DLE9BQVAsR0FBaUJ5QixTQUFqQixDOzs7Ozs7Ozs7Ozs7OztBQ3paQSxTQUFTd1MsS0FBVCxHQUFpQixDQUNoQjs7QUFFRDs7O0FBR0FBLE1BQU1hLElBQU4sR0FBYSxVQUFVMEosS0FBVixFQUFpQjtBQUM1QixNQUFJQSxRQUFRLENBQVosRUFDQTtBQUNFLFdBQU8sQ0FBUDtBQUNELEdBSEQsTUFJSyxJQUFJQSxRQUFRLENBQVosRUFDTDtBQUNFLFdBQU8sQ0FBQyxDQUFSO0FBQ0QsR0FISSxNQUtMO0FBQ0UsV0FBTyxDQUFQO0FBQ0Q7QUFDRixDQWJEOztBQWVBdkssTUFBTTFKLEtBQU4sR0FBYyxVQUFVaVUsS0FBVixFQUFpQjtBQUM3QixTQUFPQSxRQUFRLENBQVIsR0FBWXZZLEtBQUtDLElBQUwsQ0FBVXNZLEtBQVYsQ0FBWixHQUErQnZZLEtBQUtzRSxLQUFMLENBQVdpVSxLQUFYLENBQXRDO0FBQ0QsQ0FGRDs7QUFJQXZLLE1BQU0vTixJQUFOLEdBQWEsVUFBVXNZLEtBQVYsRUFBaUI7QUFDNUIsU0FBT0EsUUFBUSxDQUFSLEdBQVl2WSxLQUFLc0UsS0FBTCxDQUFXaVUsS0FBWCxDQUFaLEdBQWdDdlksS0FBS0MsSUFBTCxDQUFVc1ksS0FBVixDQUF2QztBQUNELENBRkQ7O0FBSUF6ZSxPQUFPQyxPQUFQLEdBQWlCaVUsS0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7QUM3QkEsU0FBU3pTLE9BQVQsR0FBbUIsQ0FDbEI7O0FBRURBLFFBQVF5UixTQUFSLEdBQW9CLFVBQXBCO0FBQ0F6UixRQUFRcU0sU0FBUixHQUFvQixDQUFDLFVBQXJCOztBQUVBOU4sT0FBT0MsT0FBUCxHQUFpQndCLE9BQWpCLEM7Ozs7Ozs7Ozs7Ozs7O0FDTkEsSUFBSStoQixlQUFlLG1CQUFBbGtCLENBQVEsaUVBQVIsQ0FBbkI7QUFDQSxJQUFJb0MsWUFBWSxtQkFBQXBDLENBQVEsMkRBQVIsQ0FBaEI7QUFDQSxJQUFJNFUsUUFBUSxtQkFBQTVVLENBQVEsbURBQVIsQ0FBWjs7QUFFQSxTQUFTd2UsS0FBVCxDQUFlMWQsTUFBZixFQUF1QkMsTUFBdkIsRUFBK0JDLEtBQS9CLEVBQXNDO0FBQ3BDa2pCLGVBQWFqakIsSUFBYixDQUFrQixJQUFsQixFQUF3QkQsS0FBeEI7O0FBRUEsT0FBS29aLDJCQUFMLEdBQW1DLEtBQW5DO0FBQ0EsT0FBSytKLFlBQUwsR0FBb0JuakIsS0FBcEI7QUFDQSxPQUFLb2pCLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxPQUFLdGpCLE1BQUwsR0FBY0EsTUFBZDtBQUNBLE9BQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNEOztBQUVEeWQsTUFBTXRkLFNBQU4sR0FBa0JDLE9BQU9DLE1BQVAsQ0FBYzhpQixhQUFhaGpCLFNBQTNCLENBQWxCOztBQUVBLEtBQUssSUFBSWhCLElBQVQsSUFBaUJna0IsWUFBakIsRUFBK0I7QUFDN0IxRixRQUFNdGUsSUFBTixJQUFjZ2tCLGFBQWFoa0IsSUFBYixDQUFkO0FBQ0Q7O0FBRURzZSxNQUFNdGQsU0FBTixDQUFnQjJJLFNBQWhCLEdBQTRCLFlBQzVCO0FBQ0UsU0FBTyxLQUFLL0ksTUFBWjtBQUNELENBSEQ7O0FBS0EwZCxNQUFNdGQsU0FBTixDQUFnQjRJLFNBQWhCLEdBQTRCLFlBQzVCO0FBQ0UsU0FBTyxLQUFLL0ksTUFBWjtBQUNELENBSEQ7O0FBS0F5ZCxNQUFNdGQsU0FBTixDQUFnQm9YLFlBQWhCLEdBQStCLFlBQy9CO0FBQ0UsU0FBTyxLQUFLQSxZQUFaO0FBQ0QsQ0FIRDs7QUFLQWtHLE1BQU10ZCxTQUFOLENBQWdCbVosU0FBaEIsR0FBNEIsWUFDNUI7QUFDRSxTQUFPLEtBQUtsVixNQUFaO0FBQ0QsQ0FIRDs7QUFLQXFaLE1BQU10ZCxTQUFOLENBQWdCa1osMkJBQWhCLEdBQThDLFlBQzlDO0FBQ0UsU0FBTyxLQUFLQSwyQkFBWjtBQUNELENBSEQ7O0FBS0FvRSxNQUFNdGQsU0FBTixDQUFnQjZJLGFBQWhCLEdBQWdDLFlBQ2hDO0FBQ0UsU0FBTyxLQUFLcWEsVUFBWjtBQUNELENBSEQ7O0FBS0E1RixNQUFNdGQsU0FBTixDQUFnQnlYLE1BQWhCLEdBQXlCLFlBQ3pCO0FBQ0UsU0FBTyxLQUFLMEwsR0FBWjtBQUNELENBSEQ7O0FBS0E3RixNQUFNdGQsU0FBTixDQUFnQnFYLGNBQWhCLEdBQWlDLFlBQ2pDO0FBQ0UsU0FBTyxLQUFLK0wsV0FBWjtBQUNELENBSEQ7O0FBS0E5RixNQUFNdGQsU0FBTixDQUFnQnVYLGNBQWhCLEdBQWlDLFlBQ2pDO0FBQ0UsU0FBTyxLQUFLOEwsV0FBWjtBQUNELENBSEQ7O0FBS0EvRixNQUFNdGQsU0FBTixDQUFnQmtOLFdBQWhCLEdBQThCLFVBQVVoRixJQUFWLEVBQzlCO0FBQ0UsTUFBSSxLQUFLdEksTUFBTCxLQUFnQnNJLElBQXBCLEVBQ0E7QUFDRSxXQUFPLEtBQUtySSxNQUFaO0FBQ0QsR0FIRCxNQUlLLElBQUksS0FBS0EsTUFBTCxLQUFnQnFJLElBQXBCLEVBQ0w7QUFDRSxXQUFPLEtBQUt0SSxNQUFaO0FBQ0QsR0FISSxNQUtMO0FBQ0UsVUFBTSxxQ0FBTjtBQUNEO0FBQ0YsQ0FkRDs7QUFnQkEwZCxNQUFNdGQsU0FBTixDQUFnQnNqQixrQkFBaEIsR0FBcUMsVUFBVXBiLElBQVYsRUFBZ0JSLEtBQWhCLEVBQ3JDO0FBQ0UsTUFBSTZiLFdBQVcsS0FBS3JXLFdBQUwsQ0FBaUJoRixJQUFqQixDQUFmO0FBQ0EsTUFBSXNiLE9BQU85YixNQUFNb0gsZUFBTixHQUF3Qm5MLE9BQXhCLEVBQVg7O0FBRUEsU0FBTyxJQUFQLEVBQ0E7QUFDRSxRQUFJNGYsU0FBUy9LLFFBQVQsTUFBdUI5USxLQUEzQixFQUNBO0FBQ0UsYUFBTzZiLFFBQVA7QUFDRDs7QUFFRCxRQUFJQSxTQUFTL0ssUUFBVCxNQUF1QmdMLElBQTNCLEVBQ0E7QUFDRTtBQUNEOztBQUVERCxlQUFXQSxTQUFTL0ssUUFBVCxHQUFvQnhLLFNBQXBCLEVBQVg7QUFDRDs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQXJCRDs7QUF1QkFzUCxNQUFNdGQsU0FBTixDQUFnQmlaLFlBQWhCLEdBQStCLFlBQy9CO0FBQ0UsTUFBSXdLLHVCQUF1QixJQUFJL0osS0FBSixDQUFVLENBQVYsQ0FBM0I7O0FBRUEsT0FBS1IsMkJBQUwsR0FDUWhZLFVBQVVpWixlQUFWLENBQTBCLEtBQUt0YSxNQUFMLENBQVkwWixPQUFaLEVBQTFCLEVBQ1EsS0FBSzNaLE1BQUwsQ0FBWTJaLE9BQVosRUFEUixFQUVRa0ssb0JBRlIsQ0FEUjs7QUFLQSxNQUFJLENBQUMsS0FBS3ZLLDJCQUFWLEVBQ0E7QUFDRSxTQUFLRSxPQUFMLEdBQWVxSyxxQkFBcUIsQ0FBckIsSUFBMEJBLHFCQUFxQixDQUFyQixDQUF6QztBQUNBLFNBQUtwSyxPQUFMLEdBQWVvSyxxQkFBcUIsQ0FBckIsSUFBMEJBLHFCQUFxQixDQUFyQixDQUF6Qzs7QUFFQSxRQUFJL2QsS0FBS3NILEdBQUwsQ0FBUyxLQUFLb00sT0FBZCxJQUF5QixHQUE3QixFQUNBO0FBQ0UsV0FBS0EsT0FBTCxHQUFlMUYsTUFBTWEsSUFBTixDQUFXLEtBQUs2RSxPQUFoQixDQUFmO0FBQ0Q7O0FBRUQsUUFBSTFULEtBQUtzSCxHQUFMLENBQVMsS0FBS3FNLE9BQWQsSUFBeUIsR0FBN0IsRUFDQTtBQUNFLFdBQUtBLE9BQUwsR0FBZTNGLE1BQU1hLElBQU4sQ0FBVyxLQUFLOEUsT0FBaEIsQ0FBZjtBQUNEOztBQUVELFNBQUtwVixNQUFMLEdBQWN5QixLQUFLRyxJQUFMLENBQ04sS0FBS3VULE9BQUwsR0FBZSxLQUFLQSxPQUFwQixHQUE4QixLQUFLQyxPQUFMLEdBQWUsS0FBS0EsT0FENUMsQ0FBZDtBQUVEO0FBQ0YsQ0EzQkQ7O0FBNkJBaUUsTUFBTXRkLFNBQU4sQ0FBZ0JnWixrQkFBaEIsR0FBcUMsWUFDckM7QUFDRSxPQUFLSSxPQUFMLEdBQWUsS0FBS3ZaLE1BQUwsQ0FBWWtILFVBQVosS0FBMkIsS0FBS25ILE1BQUwsQ0FBWW1ILFVBQVosRUFBMUM7QUFDQSxPQUFLc1MsT0FBTCxHQUFlLEtBQUt4WixNQUFMLENBQVlvSCxVQUFaLEtBQTJCLEtBQUtySCxNQUFMLENBQVlxSCxVQUFaLEVBQTFDOztBQUVBLE1BQUl2QixLQUFLc0gsR0FBTCxDQUFTLEtBQUtvTSxPQUFkLElBQXlCLEdBQTdCLEVBQ0E7QUFDRSxTQUFLQSxPQUFMLEdBQWUxRixNQUFNYSxJQUFOLENBQVcsS0FBSzZFLE9BQWhCLENBQWY7QUFDRDs7QUFFRCxNQUFJMVQsS0FBS3NILEdBQUwsQ0FBUyxLQUFLcU0sT0FBZCxJQUF5QixHQUE3QixFQUNBO0FBQ0UsU0FBS0EsT0FBTCxHQUFlM0YsTUFBTWEsSUFBTixDQUFXLEtBQUs4RSxPQUFoQixDQUFmO0FBQ0Q7O0FBRUQsT0FBS3BWLE1BQUwsR0FBY3lCLEtBQUtHLElBQUwsQ0FDTixLQUFLdVQsT0FBTCxHQUFlLEtBQUtBLE9BQXBCLEdBQThCLEtBQUtDLE9BQUwsR0FBZSxLQUFLQSxPQUQ1QyxDQUFkO0FBRUQsQ0FqQkQ7O0FBbUJBN1osT0FBT0MsT0FBUCxHQUFpQjZkLEtBQWpCLEM7Ozs7Ozs7Ozs7Ozs7O0FDeEpBLElBQUkwRixlQUFlLG1CQUFBbGtCLENBQVEsaUVBQVIsQ0FBbkI7QUFDQSxJQUFJbUMsVUFBVSxtQkFBQW5DLENBQVEsdURBQVIsQ0FBZDtBQUNBLElBQUkrQixrQkFBa0IsbUJBQUEvQixDQUFRLHVFQUFSLENBQXRCO0FBQ0EsSUFBSTBCLGdCQUFnQixtQkFBQTFCLENBQVEsbUVBQVIsQ0FBcEI7QUFDQSxJQUFJeWUsUUFBUSxtQkFBQXplLENBQVEsbURBQVIsQ0FBWjtBQUNBLElBQUl3ZSxRQUFRLG1CQUFBeGUsQ0FBUSxtREFBUixDQUFaO0FBQ0EsSUFBSTBKLFVBQVUsbUJBQUExSixDQUFRLHVEQUFSLENBQWQ7QUFDQSxJQUFJNGtCLGFBQWEsbUJBQUE1a0IsQ0FBUSw2REFBUixDQUFqQjtBQUNBLElBQUlnQyxRQUFRLG1CQUFBaEMsQ0FBUSxtREFBUixDQUFaO0FBQ0EsSUFBSTZrQixhQUFhLG1CQUFBN2tCLENBQVEsNkRBQVIsQ0FBakI7O0FBRUEsU0FBU3FCLE1BQVQsQ0FBZ0JFLE1BQWhCLEVBQXdCdWpCLElBQXhCLEVBQThCcmpCLE1BQTlCLEVBQXNDO0FBQ3BDeWlCLGVBQWFqakIsSUFBYixDQUFrQixJQUFsQixFQUF3QlEsTUFBeEI7QUFDQSxPQUFLbWEsYUFBTCxHQUFxQnpaLFFBQVFxTSxTQUE3QjtBQUNBLE9BQUt1VyxNQUFMLEdBQWNoakIsZ0JBQWdCaWpCLG9CQUE5QjtBQUNBLE9BQUt6YixLQUFMLEdBQWEsRUFBYjtBQUNBLE9BQUtrSixLQUFMLEdBQWEsRUFBYjtBQUNBLE9BQUt4SixXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsT0FBSzFILE1BQUwsR0FBY0EsTUFBZDs7QUFFQSxNQUFJdWpCLFFBQVEsSUFBUixJQUFnQkEsZ0JBQWdCcGpCLGFBQXBDLEVBQW1EO0FBQ2pELFNBQUtnQixZQUFMLEdBQW9Cb2lCLElBQXBCO0FBQ0QsR0FGRCxNQUdLLElBQUlBLFFBQVEsSUFBUixJQUFnQkEsZ0JBQWdCNWlCLE1BQXBDLEVBQTRDO0FBQy9DLFNBQUtRLFlBQUwsR0FBb0JvaUIsS0FBS3BpQixZQUF6QjtBQUNEO0FBQ0Y7O0FBRURyQixPQUFPSCxTQUFQLEdBQW1CQyxPQUFPQyxNQUFQLENBQWM4aUIsYUFBYWhqQixTQUEzQixDQUFuQjtBQUNBLEtBQUssSUFBSWhCLElBQVQsSUFBaUJna0IsWUFBakIsRUFBK0I7QUFDN0I3aUIsU0FBT25CLElBQVAsSUFBZWdrQixhQUFhaGtCLElBQWIsQ0FBZjtBQUNEOztBQUVEbUIsT0FBT0gsU0FBUCxDQUFpQmlJLFFBQWpCLEdBQTRCLFlBQVk7QUFDdEMsU0FBTyxLQUFLc0osS0FBWjtBQUNELENBRkQ7O0FBSUFwUixPQUFPSCxTQUFQLENBQWlCcU0sUUFBakIsR0FBNEIsWUFBWTtBQUN0QyxTQUFPLEtBQUtoRSxLQUFaO0FBQ0QsQ0FGRDs7QUFJQWxJLE9BQU9ILFNBQVAsQ0FBaUI4TyxlQUFqQixHQUFtQyxZQUNuQztBQUNFLFNBQU8sS0FBS3ROLFlBQVo7QUFDRCxDQUhEOztBQUtBckIsT0FBT0gsU0FBUCxDQUFpQmdPLFNBQWpCLEdBQTZCLFlBQzdCO0FBQ0UsU0FBTyxLQUFLM04sTUFBWjtBQUNELENBSEQ7O0FBS0FGLE9BQU9ILFNBQVAsQ0FBaUI0YSxPQUFqQixHQUEyQixZQUMzQjtBQUNFLFNBQU8sS0FBSzdKLElBQVo7QUFDRCxDQUhEOztBQUtBNVEsT0FBT0gsU0FBUCxDQUFpQjJhLFFBQWpCLEdBQTRCLFlBQzVCO0FBQ0UsU0FBTyxLQUFLb0osS0FBWjtBQUNELENBSEQ7O0FBS0E1akIsT0FBT0gsU0FBUCxDQUFpQjZhLE1BQWpCLEdBQTBCLFlBQzFCO0FBQ0UsU0FBTyxLQUFLWSxHQUFaO0FBQ0QsQ0FIRDs7QUFLQXRiLE9BQU9ILFNBQVAsQ0FBaUI4YSxTQUFqQixHQUE2QixZQUM3QjtBQUNFLFNBQU8sS0FBS2tKLE1BQVo7QUFDRCxDQUhEOztBQUtBN2pCLE9BQU9ILFNBQVAsQ0FBaUIrSCxXQUFqQixHQUErQixZQUMvQjtBQUNFLFNBQU8sS0FBS0EsV0FBWjtBQUNELENBSEQ7O0FBS0E1SCxPQUFPSCxTQUFQLENBQWlCZ0osR0FBakIsR0FBdUIsVUFBVWliLElBQVYsRUFBZ0JyTCxVQUFoQixFQUE0QkMsVUFBNUIsRUFBd0M7QUFDN0QsTUFBSUQsY0FBYyxJQUFkLElBQXNCQyxjQUFjLElBQXhDLEVBQThDO0FBQzVDLFFBQUluWCxVQUFVdWlCLElBQWQ7QUFDQSxRQUFJLEtBQUt6aUIsWUFBTCxJQUFxQixJQUF6QixFQUErQjtBQUM3QixZQUFNLHlCQUFOO0FBQ0Q7QUFDRCxRQUFJLEtBQUt5RyxRQUFMLEdBQWdCNkUsT0FBaEIsQ0FBd0JwTCxPQUF4QixJQUFtQyxDQUFDLENBQXhDLEVBQTJDO0FBQ3pDLFlBQU0sd0JBQU47QUFDRDtBQUNEQSxZQUFRd2lCLEtBQVIsR0FBZ0IsSUFBaEI7QUFDQSxTQUFLamMsUUFBTCxHQUFnQmEsSUFBaEIsQ0FBcUJwSCxPQUFyQjs7QUFFQSxXQUFPQSxPQUFQO0FBQ0QsR0FaRCxNQWFLO0FBQ0gsUUFBSUUsVUFBVXFpQixJQUFkO0FBQ0EsUUFBSSxFQUFFLEtBQUtoYyxRQUFMLEdBQWdCNkUsT0FBaEIsQ0FBd0I4TCxVQUF4QixJQUFzQyxDQUFDLENBQXZDLElBQTZDLEtBQUszUSxRQUFMLEdBQWdCNkUsT0FBaEIsQ0FBd0IrTCxVQUF4QixDQUFELEdBQXdDLENBQUMsQ0FBdkYsQ0FBSixFQUErRjtBQUM3RixZQUFNLGdDQUFOO0FBQ0Q7O0FBRUQsUUFBSSxFQUFFRCxXQUFXc0wsS0FBWCxJQUFvQnJMLFdBQVdxTCxLQUEvQixJQUF3Q3RMLFdBQVdzTCxLQUFYLElBQW9CLElBQTlELENBQUosRUFBeUU7QUFDdkUsWUFBTSxpQ0FBTjtBQUNEOztBQUVELFFBQUl0TCxXQUFXc0wsS0FBWCxJQUFvQnJMLFdBQVdxTCxLQUFuQyxFQUNBO0FBQ0UsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQ7QUFDQXRpQixZQUFRaEMsTUFBUixHQUFpQmdaLFVBQWpCO0FBQ0FoWCxZQUFRL0IsTUFBUixHQUFpQmdaLFVBQWpCOztBQUVBO0FBQ0FqWCxZQUFRd1YsWUFBUixHQUF1QixLQUF2Qjs7QUFFQTtBQUNBLFNBQUsvSyxRQUFMLEdBQWdCdkQsSUFBaEIsQ0FBcUJsSCxPQUFyQjs7QUFFQTtBQUNBZ1gsZUFBV3ZRLEtBQVgsQ0FBaUJTLElBQWpCLENBQXNCbEgsT0FBdEI7O0FBRUEsUUFBSWlYLGNBQWNELFVBQWxCLEVBQ0E7QUFDRUMsaUJBQVd4USxLQUFYLENBQWlCUyxJQUFqQixDQUFzQmxILE9BQXRCO0FBQ0Q7O0FBRUQsV0FBT0EsT0FBUDtBQUNEO0FBQ0YsQ0FqREQ7O0FBbURBekIsT0FBT0gsU0FBUCxDQUFpQmlQLE1BQWpCLEdBQTBCLFVBQVVzUCxHQUFWLEVBQWU7QUFDdkMsTUFBSXJXLE9BQU9xVyxHQUFYO0FBQ0EsTUFBSUEsZUFBZWhCLEtBQW5CLEVBQTBCO0FBQ3hCLFFBQUlyVixRQUFRLElBQVosRUFBa0I7QUFDaEIsWUFBTSxlQUFOO0FBQ0Q7QUFDRCxRQUFJLEVBQUVBLEtBQUtnYyxLQUFMLElBQWMsSUFBZCxJQUFzQmhjLEtBQUtnYyxLQUFMLElBQWMsSUFBdEMsQ0FBSixFQUFpRDtBQUMvQyxZQUFNLHlCQUFOO0FBQ0Q7QUFDRCxRQUFJLEtBQUsxaUIsWUFBTCxJQUFxQixJQUF6QixFQUErQjtBQUM3QixZQUFNLGlDQUFOO0FBQ0Q7QUFDRDtBQUNBLFFBQUkyaUIsbUJBQW1CamMsS0FBS0csS0FBTCxDQUFXK2IsS0FBWCxFQUF2QjtBQUNBLFFBQUkzYixJQUFKO0FBQ0EsUUFBSWtXLElBQUl3RixpQkFBaUJsZ0IsTUFBekI7QUFDQSxTQUFLLElBQUkyQyxJQUFJLENBQWIsRUFBZ0JBLElBQUkrWCxDQUFwQixFQUF1Qi9YLEdBQXZCLEVBQ0E7QUFDRTZCLGFBQU8wYixpQkFBaUJ2ZCxDQUFqQixDQUFQOztBQUVBLFVBQUk2QixLQUFLMk8sWUFBVCxFQUNBO0FBQ0UsYUFBSzVWLFlBQUwsQ0FBa0J5TixNQUFsQixDQUF5QnhHLElBQXpCO0FBQ0QsT0FIRCxNQUtBO0FBQ0VBLGFBQUs3SSxNQUFMLENBQVlza0IsS0FBWixDQUFrQmpWLE1BQWxCLENBQXlCeEcsSUFBekI7QUFDRDtBQUNGOztBQUVEO0FBQ0EsUUFBSW9FLFFBQVEsS0FBSzBFLEtBQUwsQ0FBV3pFLE9BQVgsQ0FBbUI1RSxJQUFuQixDQUFaO0FBQ0EsUUFBSTJFLFNBQVMsQ0FBQyxDQUFkLEVBQWlCO0FBQ2YsWUFBTSw4QkFBTjtBQUNEOztBQUVELFNBQUswRSxLQUFMLENBQVczRSxNQUFYLENBQWtCQyxLQUFsQixFQUF5QixDQUF6QjtBQUNELEdBbkNELE1Bb0NLLElBQUkwUixlQUFlakIsS0FBbkIsRUFBMEI7QUFDN0IsUUFBSTdVLE9BQU84VixHQUFYO0FBQ0EsUUFBSTlWLFFBQVEsSUFBWixFQUFrQjtBQUNoQixZQUFNLGVBQU47QUFDRDtBQUNELFFBQUksRUFBRUEsS0FBSzdJLE1BQUwsSUFBZSxJQUFmLElBQXVCNkksS0FBSzVJLE1BQUwsSUFBZSxJQUF4QyxDQUFKLEVBQW1EO0FBQ2pELFlBQU0sK0JBQU47QUFDRDtBQUNELFFBQUksRUFBRTRJLEtBQUs3SSxNQUFMLENBQVlza0IsS0FBWixJQUFxQixJQUFyQixJQUE2QnpiLEtBQUs1SSxNQUFMLENBQVlxa0IsS0FBWixJQUFxQixJQUFsRCxJQUNFemIsS0FBSzdJLE1BQUwsQ0FBWXNrQixLQUFaLElBQXFCLElBRHZCLElBQytCemIsS0FBSzVJLE1BQUwsQ0FBWXFrQixLQUFaLElBQXFCLElBRHRELENBQUosRUFDaUU7QUFDL0QsWUFBTSx3Q0FBTjtBQUNEOztBQUVELFFBQUlHLGNBQWM1YixLQUFLN0ksTUFBTCxDQUFZeUksS0FBWixDQUFrQnlFLE9BQWxCLENBQTBCckUsSUFBMUIsQ0FBbEI7QUFDQSxRQUFJNmIsY0FBYzdiLEtBQUs1SSxNQUFMLENBQVl3SSxLQUFaLENBQWtCeUUsT0FBbEIsQ0FBMEJyRSxJQUExQixDQUFsQjtBQUNBLFFBQUksRUFBRTRiLGNBQWMsQ0FBQyxDQUFmLElBQW9CQyxjQUFjLENBQUMsQ0FBckMsQ0FBSixFQUE2QztBQUMzQyxZQUFNLDhDQUFOO0FBQ0Q7O0FBRUQ3YixTQUFLN0ksTUFBTCxDQUFZeUksS0FBWixDQUFrQnVFLE1BQWxCLENBQXlCeVgsV0FBekIsRUFBc0MsQ0FBdEM7O0FBRUEsUUFBSTViLEtBQUs1SSxNQUFMLElBQWU0SSxLQUFLN0ksTUFBeEIsRUFDQTtBQUNFNkksV0FBSzVJLE1BQUwsQ0FBWXdJLEtBQVosQ0FBa0J1RSxNQUFsQixDQUF5QjBYLFdBQXpCLEVBQXNDLENBQXRDO0FBQ0Q7O0FBRUQsUUFBSXpYLFFBQVFwRSxLQUFLN0ksTUFBTCxDQUFZc2tCLEtBQVosQ0FBa0I3WCxRQUFsQixHQUE2QlMsT0FBN0IsQ0FBcUNyRSxJQUFyQyxDQUFaO0FBQ0EsUUFBSW9FLFNBQVMsQ0FBQyxDQUFkLEVBQWlCO0FBQ2YsWUFBTSwyQkFBTjtBQUNEOztBQUVEcEUsU0FBSzdJLE1BQUwsQ0FBWXNrQixLQUFaLENBQWtCN1gsUUFBbEIsR0FBNkJPLE1BQTdCLENBQW9DQyxLQUFwQyxFQUEyQyxDQUEzQztBQUNEO0FBQ0YsQ0F2RUQ7O0FBeUVBMU0sT0FBT0gsU0FBUCxDQUFpQnVrQixhQUFqQixHQUFpQyxZQUNqQztBQUNFLE1BQUk5SSxNQUFNeGEsUUFBUXlSLFNBQWxCO0FBQ0EsTUFBSTNCLE9BQU85UCxRQUFReVIsU0FBbkI7QUFDQSxNQUFJOFIsT0FBSjtBQUNBLE1BQUlDLFFBQUo7QUFDQSxNQUFJWixNQUFKOztBQUVBLE1BQUl0UyxRQUFRLEtBQUt0SixRQUFMLEVBQVo7QUFDQSxNQUFJMFcsSUFBSXBOLE1BQU10TixNQUFkOztBQUVBLE9BQUssSUFBSTJDLElBQUksQ0FBYixFQUFnQkEsSUFBSStYLENBQXBCLEVBQXVCL1gsR0FBdkIsRUFDQTtBQUNFLFFBQUlrTCxRQUFRUCxNQUFNM0ssQ0FBTixDQUFaO0FBQ0E0ZCxjQUFVMVMsTUFBTStJLE1BQU4sRUFBVjtBQUNBNEosZUFBVzNTLE1BQU04SSxPQUFOLEVBQVg7O0FBRUEsUUFBSWEsTUFBTStJLE9BQVYsRUFDQTtBQUNFL0ksWUFBTStJLE9BQU47QUFDRDs7QUFFRCxRQUFJelQsT0FBTzBULFFBQVgsRUFDQTtBQUNFMVQsYUFBTzBULFFBQVA7QUFDRDtBQUNGOztBQUVEO0FBQ0EsTUFBSWhKLE9BQU94YSxRQUFReVIsU0FBbkIsRUFDQTtBQUNFLFdBQU8sSUFBUDtBQUNEOztBQUVELE1BQUduQixNQUFNLENBQU4sRUFBU3ZELFNBQVQsR0FBcUJTLFdBQXJCLElBQW9DUCxTQUF2QyxFQUFpRDtBQUMvQzJWLGFBQVN0UyxNQUFNLENBQU4sRUFBU3ZELFNBQVQsR0FBcUJTLFdBQTlCO0FBQ0QsR0FGRCxNQUdJO0FBQ0ZvVixhQUFTLEtBQUtBLE1BQWQ7QUFDRDs7QUFFRCxPQUFLOVMsSUFBTCxHQUFZQSxPQUFPOFMsTUFBbkI7QUFDQSxPQUFLcEksR0FBTCxHQUFXQSxNQUFNb0ksTUFBakI7O0FBRUE7QUFDQSxTQUFPLElBQUkvaUIsS0FBSixDQUFVLEtBQUtpUSxJQUFmLEVBQXFCLEtBQUswSyxHQUExQixDQUFQO0FBQ0QsQ0E5Q0Q7O0FBZ0RBdGIsT0FBT0gsU0FBUCxDQUFpQitGLFlBQWpCLEdBQWdDLFVBQVUyZSxTQUFWLEVBQ2hDO0FBQ0U7QUFDQSxNQUFJM1QsT0FBTzlQLFFBQVF5UixTQUFuQjtBQUNBLE1BQUlxUixRQUFRLENBQUM5aUIsUUFBUXlSLFNBQXJCO0FBQ0EsTUFBSStJLE1BQU14YSxRQUFReVIsU0FBbEI7QUFDQSxNQUFJc1IsU0FBUyxDQUFDL2lCLFFBQVF5UixTQUF0QjtBQUNBLE1BQUkrUixRQUFKO0FBQ0EsTUFBSUUsU0FBSjtBQUNBLE1BQUlILE9BQUo7QUFDQSxNQUFJSSxVQUFKO0FBQ0EsTUFBSWYsTUFBSjs7QUFFQSxNQUFJdFMsUUFBUSxLQUFLQSxLQUFqQjtBQUNBLE1BQUlvTixJQUFJcE4sTUFBTXROLE1BQWQ7QUFDQSxPQUFLLElBQUkyQyxJQUFJLENBQWIsRUFBZ0JBLElBQUkrWCxDQUFwQixFQUF1Qi9YLEdBQXZCLEVBQ0E7QUFDRSxRQUFJa0wsUUFBUVAsTUFBTTNLLENBQU4sQ0FBWjs7QUFFQSxRQUFJOGQsYUFBYTVTLE1BQU12QyxLQUFOLElBQWUsSUFBaEMsRUFDQTtBQUNFdUMsWUFBTS9MLFlBQU47QUFDRDtBQUNEMGUsZUFBVzNTLE1BQU04SSxPQUFOLEVBQVg7QUFDQStKLGdCQUFZN1MsTUFBTTZJLFFBQU4sRUFBWjtBQUNBNkosY0FBVTFTLE1BQU0rSSxNQUFOLEVBQVY7QUFDQStKLGlCQUFhOVMsTUFBTWdKLFNBQU4sRUFBYjs7QUFFQSxRQUFJL0osT0FBTzBULFFBQVgsRUFDQTtBQUNFMVQsYUFBTzBULFFBQVA7QUFDRDs7QUFFRCxRQUFJVixRQUFRWSxTQUFaLEVBQ0E7QUFDRVosY0FBUVksU0FBUjtBQUNEOztBQUVELFFBQUlsSixNQUFNK0ksT0FBVixFQUNBO0FBQ0UvSSxZQUFNK0ksT0FBTjtBQUNEOztBQUVELFFBQUlSLFNBQVNZLFVBQWIsRUFDQTtBQUNFWixlQUFTWSxVQUFUO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJQyxlQUFlLElBQUluQixVQUFKLENBQWUzUyxJQUFmLEVBQXFCMEssR0FBckIsRUFBMEJzSSxRQUFRaFQsSUFBbEMsRUFBd0NpVCxTQUFTdkksR0FBakQsQ0FBbkI7QUFDQSxNQUFJMUssUUFBUTlQLFFBQVF5UixTQUFwQixFQUNBO0FBQ0UsU0FBSzNCLElBQUwsR0FBWSxLQUFLMVEsTUFBTCxDQUFZdWEsT0FBWixFQUFaO0FBQ0EsU0FBS21KLEtBQUwsR0FBYSxLQUFLMWpCLE1BQUwsQ0FBWXNhLFFBQVosRUFBYjtBQUNBLFNBQUtjLEdBQUwsR0FBVyxLQUFLcGIsTUFBTCxDQUFZd2EsTUFBWixFQUFYO0FBQ0EsU0FBS21KLE1BQUwsR0FBYyxLQUFLM2pCLE1BQUwsQ0FBWXlhLFNBQVosRUFBZDtBQUNEOztBQUVELE1BQUd2SixNQUFNLENBQU4sRUFBU3ZELFNBQVQsR0FBcUJTLFdBQXJCLElBQW9DUCxTQUF2QyxFQUFpRDtBQUMvQzJWLGFBQVN0UyxNQUFNLENBQU4sRUFBU3ZELFNBQVQsR0FBcUJTLFdBQTlCO0FBQ0QsR0FGRCxNQUdJO0FBQ0ZvVixhQUFTLEtBQUtBLE1BQWQ7QUFDRDs7QUFFRCxPQUFLOVMsSUFBTCxHQUFZOFQsYUFBYWxnQixDQUFiLEdBQWlCa2YsTUFBN0I7QUFDQSxPQUFLRSxLQUFMLEdBQWFjLGFBQWFsZ0IsQ0FBYixHQUFpQmtnQixhQUFhMWQsS0FBOUIsR0FBc0MwYyxNQUFuRDtBQUNBLE9BQUtwSSxHQUFMLEdBQVdvSixhQUFhN2QsQ0FBYixHQUFpQjZjLE1BQTVCO0FBQ0EsT0FBS0csTUFBTCxHQUFjYSxhQUFhN2QsQ0FBYixHQUFpQjZkLGFBQWF4ZCxNQUE5QixHQUF1Q3djLE1BQXJEO0FBQ0QsQ0FyRUQ7O0FBdUVBMWpCLE9BQU91SyxlQUFQLEdBQXlCLFVBQVU2RyxLQUFWLEVBQ3pCO0FBQ0UsTUFBSVIsT0FBTzlQLFFBQVF5UixTQUFuQjtBQUNBLE1BQUlxUixRQUFRLENBQUM5aUIsUUFBUXlSLFNBQXJCO0FBQ0EsTUFBSStJLE1BQU14YSxRQUFReVIsU0FBbEI7QUFDQSxNQUFJc1IsU0FBUyxDQUFDL2lCLFFBQVF5UixTQUF0QjtBQUNBLE1BQUkrUixRQUFKO0FBQ0EsTUFBSUUsU0FBSjtBQUNBLE1BQUlILE9BQUo7QUFDQSxNQUFJSSxVQUFKOztBQUVBLE1BQUlqRyxJQUFJcE4sTUFBTXROLE1BQWQ7O0FBRUEsT0FBSyxJQUFJMkMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJK1gsQ0FBcEIsRUFBdUIvWCxHQUF2QixFQUNBO0FBQ0UsUUFBSWtMLFFBQVFQLE1BQU0zSyxDQUFOLENBQVo7QUFDQTZkLGVBQVczUyxNQUFNOEksT0FBTixFQUFYO0FBQ0ErSixnQkFBWTdTLE1BQU02SSxRQUFOLEVBQVo7QUFDQTZKLGNBQVUxUyxNQUFNK0ksTUFBTixFQUFWO0FBQ0ErSixpQkFBYTlTLE1BQU1nSixTQUFOLEVBQWI7O0FBRUEsUUFBSS9KLE9BQU8wVCxRQUFYLEVBQ0E7QUFDRTFULGFBQU8wVCxRQUFQO0FBQ0Q7O0FBRUQsUUFBSVYsUUFBUVksU0FBWixFQUNBO0FBQ0VaLGNBQVFZLFNBQVI7QUFDRDs7QUFFRCxRQUFJbEosTUFBTStJLE9BQVYsRUFDQTtBQUNFL0ksWUFBTStJLE9BQU47QUFDRDs7QUFFRCxRQUFJUixTQUFTWSxVQUFiLEVBQ0E7QUFDRVosZUFBU1ksVUFBVDtBQUNEO0FBQ0Y7O0FBRUQsTUFBSUMsZUFBZSxJQUFJbkIsVUFBSixDQUFlM1MsSUFBZixFQUFxQjBLLEdBQXJCLEVBQTBCc0ksUUFBUWhULElBQWxDLEVBQXdDaVQsU0FBU3ZJLEdBQWpELENBQW5COztBQUVBLFNBQU9vSixZQUFQO0FBQ0QsQ0E3Q0Q7O0FBK0NBMWtCLE9BQU9ILFNBQVAsQ0FBaUIwWCxxQkFBakIsR0FBeUMsWUFDekM7QUFDRSxNQUFJLFFBQVEsS0FBS2xXLFlBQUwsQ0FBa0JtQyxPQUFsQixFQUFaLEVBQ0E7QUFDRSxXQUFPLENBQVA7QUFDRCxHQUhELE1BS0E7QUFDRSxXQUFPLEtBQUt0RCxNQUFMLENBQVlxWCxxQkFBWixFQUFQO0FBQ0Q7QUFDRixDQVZEOztBQVlBdlgsT0FBT0gsU0FBUCxDQUFpQnNYLGdCQUFqQixHQUFvQyxZQUNwQztBQUNFLE1BQUksS0FBS29ELGFBQUwsSUFBc0J6WixRQUFRcU0sU0FBbEMsRUFBNkM7QUFDM0MsVUFBTSxlQUFOO0FBQ0Q7QUFDRCxTQUFPLEtBQUtvTixhQUFaO0FBQ0QsQ0FORDs7QUFRQXZhLE9BQU9ILFNBQVAsQ0FBaUI0RCxpQkFBakIsR0FBcUMsWUFDckM7QUFDRSxNQUFJaUUsT0FBTyxDQUFYO0FBQ0EsTUFBSTBKLFFBQVEsS0FBS0EsS0FBakI7QUFDQSxNQUFJb04sSUFBSXBOLE1BQU10TixNQUFkOztBQUVBLE9BQUssSUFBSTJDLElBQUksQ0FBYixFQUFnQkEsSUFBSStYLENBQXBCLEVBQXVCL1gsR0FBdkIsRUFDQTtBQUNFLFFBQUlrTCxRQUFRUCxNQUFNM0ssQ0FBTixDQUFaO0FBQ0FpQixZQUFRaUssTUFBTWxPLGlCQUFOLEVBQVI7QUFDRDs7QUFFRCxNQUFJaUUsUUFBUSxDQUFaLEVBQ0E7QUFDRSxTQUFLNlMsYUFBTCxHQUFxQjdaLGdCQUFnQmlrQix3QkFBckM7QUFDRCxHQUhELE1BS0E7QUFDRSxTQUFLcEssYUFBTCxHQUFxQjdTLE9BQU9uQyxLQUFLRyxJQUFMLENBQVUsS0FBSzBMLEtBQUwsQ0FBV3ROLE1BQXJCLENBQTVCO0FBQ0Q7O0FBRUQsU0FBTyxLQUFLeVcsYUFBWjtBQUNELENBdEJEOztBQXdCQXZhLE9BQU9ILFNBQVAsQ0FBaUI4SCxlQUFqQixHQUFtQyxZQUNuQztBQUNFLE1BQUk2RixPQUFPLElBQVg7QUFDQSxNQUFJLEtBQUs0RCxLQUFMLENBQVd0TixNQUFYLElBQXFCLENBQXpCLEVBQ0E7QUFDRSxTQUFLOEQsV0FBTCxHQUFtQixJQUFuQjtBQUNBO0FBQ0Q7O0FBRUQsTUFBSWdkLGNBQWMsSUFBSXBCLFVBQUosRUFBbEI7QUFDQSxNQUFJcGIsVUFBVSxJQUFJQyxPQUFKLEVBQWQ7QUFDQSxNQUFJd2MsY0FBYyxLQUFLelQsS0FBTCxDQUFXLENBQVgsQ0FBbEI7QUFDQSxNQUFJbkYsYUFBSjtBQUNBLE1BQUlhLGVBQUo7QUFDQSxNQUFJZ1ksaUJBQWlCRCxZQUFZRSxZQUFaLEVBQXJCO0FBQ0FELGlCQUFlM1csT0FBZixDQUF1QixVQUFTcEcsSUFBVCxFQUFlO0FBQ3BDNmMsZ0JBQVlqYyxJQUFaLENBQWlCWixJQUFqQjtBQUNELEdBRkQ7O0FBSUEsU0FBTzZjLFlBQVk5Z0IsTUFBWixLQUF1QixDQUE5QixFQUNBO0FBQ0UrZ0Isa0JBQWNELFlBQVlJLEtBQVosRUFBZDtBQUNBNWMsWUFBUVMsR0FBUixDQUFZZ2MsV0FBWjs7QUFFQTtBQUNBNVksb0JBQWdCNFksWUFBWTNZLFFBQVosRUFBaEI7QUFDQSxRQUFJc1MsSUFBSXZTLGNBQWNuSSxNQUF0QjtBQUNBLFNBQUssSUFBSTJDLElBQUksQ0FBYixFQUFnQkEsSUFBSStYLENBQXBCLEVBQXVCL1gsR0FBdkIsRUFDQTtBQUNFLFVBQUl3ZSxlQUFlaFosY0FBY3hGLENBQWQsQ0FBbkI7QUFDQXFHLHdCQUNRbVksYUFBYTlCLGtCQUFiLENBQWdDMEIsV0FBaEMsRUFBNkMsSUFBN0MsQ0FEUjs7QUFHQTtBQUNBLFVBQUkvWCxtQkFBbUIsSUFBbkIsSUFDSSxDQUFDMUUsUUFBUUcsUUFBUixDQUFpQnVFLGVBQWpCLENBRFQsRUFFQTtBQUNFLFlBQUlvWSxxQkFBcUJwWSxnQkFBZ0JpWSxZQUFoQixFQUF6Qjs7QUFFQUcsMkJBQW1CL1csT0FBbkIsQ0FBMkIsVUFBU3BHLElBQVQsRUFBZTtBQUN4QzZjLHNCQUFZamMsSUFBWixDQUFpQlosSUFBakI7QUFDRCxTQUZEO0FBR0Q7QUFDRjtBQUNGOztBQUVELE9BQUtILFdBQUwsR0FBbUIsS0FBbkI7O0FBRUEsTUFBSVEsUUFBUVYsSUFBUixNQUFrQixLQUFLMEosS0FBTCxDQUFXdE4sTUFBakMsRUFDQTtBQUNFLFFBQUlxaEIseUJBQXlCLENBQTdCOztBQUVBLFFBQUkzRyxJQUFJcFcsUUFBUVYsSUFBUixFQUFSO0FBQ0M1SCxXQUFPb08sSUFBUCxDQUFZOUYsUUFBUStWLEdBQXBCLEVBQXlCaFEsT0FBekIsQ0FBaUMsVUFBU2lYLFNBQVQsRUFBb0I7QUFDcEQsVUFBSUMsY0FBY2pkLFFBQVErVixHQUFSLENBQVlpSCxTQUFaLENBQWxCO0FBQ0EsVUFBSUMsWUFBWXRCLEtBQVosSUFBcUJ2VyxJQUF6QixFQUNBO0FBQ0UyWDtBQUNEO0FBQ0YsS0FOQTs7QUFRRCxRQUFJQSwwQkFBMEIsS0FBSy9ULEtBQUwsQ0FBV3ROLE1BQXpDLEVBQ0E7QUFDRSxXQUFLOEQsV0FBTCxHQUFtQixJQUFuQjtBQUNEO0FBQ0Y7QUFDRixDQWxFRDs7QUFvRUF2SSxPQUFPQyxPQUFQLEdBQWlCVSxNQUFqQixDOzs7Ozs7Ozs7Ozs7OztBQzlkQSxJQUFJQSxNQUFKO0FBQ0EsSUFBSW1kLFFBQVEsbUJBQUF4ZSxDQUFRLG1EQUFSLENBQVo7O0FBRUEsU0FBUzBCLGFBQVQsQ0FBdUJFLE1BQXZCLEVBQStCO0FBQzdCUCxXQUFTLG1CQUFBckIsQ0FBUSxxREFBUixDQUFULENBRDZCLENBQ0M7QUFDOUIsT0FBSzRCLE1BQUwsR0FBY0EsTUFBZDs7QUFFQSxPQUFLaUgsTUFBTCxHQUFjLEVBQWQ7QUFDQSxPQUFLVSxLQUFMLEdBQWEsRUFBYjtBQUNEOztBQUVEN0gsY0FBY1IsU0FBZCxDQUF3QnlsQixPQUF4QixHQUFrQyxZQUNsQztBQUNFLE1BQUlDLFNBQVMsS0FBS2hsQixNQUFMLENBQVllLFFBQVosRUFBYjtBQUNBLE1BQUlra0IsUUFBUSxLQUFLamxCLE1BQUwsQ0FBWWdCLE9BQVosQ0FBb0IsSUFBcEIsQ0FBWjtBQUNBLE1BQUk4aEIsT0FBTyxLQUFLeGEsR0FBTCxDQUFTMGMsTUFBVCxFQUFpQkMsS0FBakIsQ0FBWDtBQUNBLE9BQUtDLFlBQUwsQ0FBa0JwQyxJQUFsQjtBQUNBLFNBQU8sS0FBS3FDLFNBQVo7QUFDRCxDQVBEOztBQVNBcmxCLGNBQWNSLFNBQWQsQ0FBd0JnSixHQUF4QixHQUE4QixVQUFVdkgsUUFBVixFQUFvQnFrQixVQUFwQixFQUFnQ2xrQixPQUFoQyxFQUF5Q2dYLFVBQXpDLEVBQXFEQyxVQUFyRCxFQUM5QjtBQUNFO0FBQ0EsTUFBSWpYLFdBQVcsSUFBWCxJQUFtQmdYLGNBQWMsSUFBakMsSUFBeUNDLGNBQWMsSUFBM0QsRUFBaUU7QUFDL0QsUUFBSXBYLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsWUFBTSxnQkFBTjtBQUNEO0FBQ0QsUUFBSXFrQixjQUFjLElBQWxCLEVBQXdCO0FBQ3RCLFlBQU0sc0JBQU47QUFDRDtBQUNELFFBQUksS0FBS25lLE1BQUwsQ0FBWW1GLE9BQVosQ0FBb0JyTCxRQUFwQixJQUFnQyxDQUFDLENBQXJDLEVBQXdDO0FBQ3RDLFlBQU0sa0NBQU47QUFDRDs7QUFFRCxTQUFLa0csTUFBTCxDQUFZbUIsSUFBWixDQUFpQnJILFFBQWpCOztBQUVBLFFBQUlBLFNBQVNwQixNQUFULElBQW1CLElBQXZCLEVBQTZCO0FBQzNCLFlBQU0sdUJBQU47QUFDRDtBQUNELFFBQUl5bEIsV0FBV3ZXLEtBQVgsSUFBb0IsSUFBeEIsRUFBOEI7QUFDNUIsWUFBTyxzQkFBUDtBQUNEOztBQUVEOU4sYUFBU3BCLE1BQVQsR0FBa0J5bEIsVUFBbEI7QUFDQUEsZUFBV3ZXLEtBQVgsR0FBbUI5TixRQUFuQjs7QUFFQSxXQUFPQSxRQUFQO0FBQ0QsR0F4QkQsTUF5Qks7QUFDSDtBQUNBb1gsaUJBQWFqWCxPQUFiO0FBQ0FnWCxpQkFBYWtOLFVBQWI7QUFDQWxrQixjQUFVSCxRQUFWO0FBQ0EsUUFBSXNrQixjQUFjbk4sV0FBV0osUUFBWCxFQUFsQjtBQUNBLFFBQUl3TixjQUFjbk4sV0FBV0wsUUFBWCxFQUFsQjs7QUFFQSxRQUFJLEVBQUV1TixlQUFlLElBQWYsSUFBdUJBLFlBQVlqWCxlQUFaLE1BQWlDLElBQTFELENBQUosRUFBcUU7QUFDbkUsWUFBTSwrQkFBTjtBQUNEO0FBQ0QsUUFBSSxFQUFFa1gsZUFBZSxJQUFmLElBQXVCQSxZQUFZbFgsZUFBWixNQUFpQyxJQUExRCxDQUFKLEVBQXFFO0FBQ25FLFlBQU0sK0JBQU47QUFDRDs7QUFFRCxRQUFJaVgsZUFBZUMsV0FBbkIsRUFDQTtBQUNFcGtCLGNBQVF3VixZQUFSLEdBQXVCLEtBQXZCO0FBQ0EsYUFBTzJPLFlBQVkvYyxHQUFaLENBQWdCcEgsT0FBaEIsRUFBeUJnWCxVQUF6QixFQUFxQ0MsVUFBckMsQ0FBUDtBQUNELEtBSkQsTUFNQTtBQUNFalgsY0FBUXdWLFlBQVIsR0FBdUIsSUFBdkI7O0FBRUE7QUFDQXhWLGNBQVFoQyxNQUFSLEdBQWlCZ1osVUFBakI7QUFDQWhYLGNBQVEvQixNQUFSLEdBQWlCZ1osVUFBakI7O0FBRUE7QUFDQSxVQUFJLEtBQUt4USxLQUFMLENBQVd5RSxPQUFYLENBQW1CbEwsT0FBbkIsSUFBOEIsQ0FBQyxDQUFuQyxFQUFzQztBQUNwQyxjQUFNLHdDQUFOO0FBQ0Q7O0FBRUQsV0FBS3lHLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQmxILE9BQWhCOztBQUVBO0FBQ0EsVUFBSSxFQUFFQSxRQUFRaEMsTUFBUixJQUFrQixJQUFsQixJQUEwQmdDLFFBQVEvQixNQUFSLElBQWtCLElBQTlDLENBQUosRUFBeUQ7QUFDdkQsY0FBTSxvQ0FBTjtBQUNEOztBQUVELFVBQUksRUFBRStCLFFBQVFoQyxNQUFSLENBQWV5SSxLQUFmLENBQXFCeUUsT0FBckIsQ0FBNkJsTCxPQUE3QixLQUF5QyxDQUFDLENBQTFDLElBQStDQSxRQUFRL0IsTUFBUixDQUFld0ksS0FBZixDQUFxQnlFLE9BQXJCLENBQTZCbEwsT0FBN0IsS0FBeUMsQ0FBQyxDQUEzRixDQUFKLEVBQW1HO0FBQ2pHLGNBQU0sc0RBQU47QUFDRDs7QUFFREEsY0FBUWhDLE1BQVIsQ0FBZXlJLEtBQWYsQ0FBcUJTLElBQXJCLENBQTBCbEgsT0FBMUI7QUFDQUEsY0FBUS9CLE1BQVIsQ0FBZXdJLEtBQWYsQ0FBcUJTLElBQXJCLENBQTBCbEgsT0FBMUI7O0FBRUEsYUFBT0EsT0FBUDtBQUNEO0FBQ0Y7QUFDRixDQTlFRDs7QUFnRkFwQixjQUFjUixTQUFkLENBQXdCaVAsTUFBeEIsR0FBaUMsVUFBVWdYLElBQVYsRUFBZ0I7QUFDL0MsTUFBSUEsZ0JBQWdCOWxCLE1BQXBCLEVBQTRCO0FBQzFCLFFBQUl1SCxRQUFRdWUsSUFBWjtBQUNBLFFBQUl2ZSxNQUFNb0gsZUFBTixNQUEyQixJQUEvQixFQUFxQztBQUNuQyxZQUFNLDZCQUFOO0FBQ0Q7QUFDRCxRQUFJLEVBQUVwSCxTQUFTLEtBQUttZSxTQUFkLElBQTRCbmUsTUFBTXJILE1BQU4sSUFBZ0IsSUFBaEIsSUFBd0JxSCxNQUFNckgsTUFBTixDQUFhbUIsWUFBYixJQUE2QixJQUFuRixDQUFKLEVBQStGO0FBQzdGLFlBQU0sc0JBQU47QUFDRDs7QUFFRDtBQUNBLFFBQUkyaUIsbUJBQW1CLEVBQXZCOztBQUVBQSx1QkFBbUJBLGlCQUFpQm5jLE1BQWpCLENBQXdCTixNQUFNMkUsUUFBTixFQUF4QixDQUFuQjs7QUFFQSxRQUFJNUQsSUFBSjtBQUNBLFFBQUlrVyxJQUFJd0YsaUJBQWlCbGdCLE1BQXpCO0FBQ0EsU0FBSyxJQUFJMkMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJK1gsQ0FBcEIsRUFBdUIvWCxHQUF2QixFQUNBO0FBQ0U2QixhQUFPMGIsaUJBQWlCdmQsQ0FBakIsQ0FBUDtBQUNBYyxZQUFNdUgsTUFBTixDQUFheEcsSUFBYjtBQUNEOztBQUVEO0FBQ0EsUUFBSXlkLG1CQUFtQixFQUF2Qjs7QUFFQUEsdUJBQW1CQSxpQkFBaUJsZSxNQUFqQixDQUF3Qk4sTUFBTU8sUUFBTixFQUF4QixDQUFuQjs7QUFFQSxRQUFJQyxJQUFKO0FBQ0F5VyxRQUFJdUgsaUJBQWlCamlCLE1BQXJCO0FBQ0EsU0FBSyxJQUFJMkMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJK1gsQ0FBcEIsRUFBdUIvWCxHQUF2QixFQUNBO0FBQ0VzQixhQUFPZ2UsaUJBQWlCdGYsQ0FBakIsQ0FBUDtBQUNBYyxZQUFNdUgsTUFBTixDQUFhL0csSUFBYjtBQUNEOztBQUVEO0FBQ0EsUUFBSVIsU0FBUyxLQUFLbWUsU0FBbEIsRUFDQTtBQUNFLFdBQUtELFlBQUwsQ0FBa0IsSUFBbEI7QUFDRDs7QUFFRDtBQUNBLFFBQUkvWSxRQUFRLEtBQUtsRixNQUFMLENBQVltRixPQUFaLENBQW9CcEYsS0FBcEIsQ0FBWjtBQUNBLFNBQUtDLE1BQUwsQ0FBWWlGLE1BQVosQ0FBbUJDLEtBQW5CLEVBQTBCLENBQTFCOztBQUVBO0FBQ0FuRixVQUFNckgsTUFBTixHQUFlLElBQWY7QUFDRCxHQS9DRCxNQWdESyxJQUFJNGxCLGdCQUFnQjNJLEtBQXBCLEVBQTJCO0FBQzlCN1UsV0FBT3dkLElBQVA7QUFDQSxRQUFJeGQsUUFBUSxJQUFaLEVBQWtCO0FBQ2hCLFlBQU0sZUFBTjtBQUNEO0FBQ0QsUUFBSSxDQUFDQSxLQUFLMk8sWUFBVixFQUF3QjtBQUN0QixZQUFNLDBCQUFOO0FBQ0Q7QUFDRCxRQUFJLEVBQUUzTyxLQUFLN0ksTUFBTCxJQUFlLElBQWYsSUFBdUI2SSxLQUFLNUksTUFBTCxJQUFlLElBQXhDLENBQUosRUFBbUQ7QUFDakQsWUFBTSwrQkFBTjtBQUNEOztBQUVEOztBQUVBLFFBQUksRUFBRTRJLEtBQUs3SSxNQUFMLENBQVl5SSxLQUFaLENBQWtCeUUsT0FBbEIsQ0FBMEJyRSxJQUExQixLQUFtQyxDQUFDLENBQXBDLElBQXlDQSxLQUFLNUksTUFBTCxDQUFZd0ksS0FBWixDQUFrQnlFLE9BQWxCLENBQTBCckUsSUFBMUIsS0FBbUMsQ0FBQyxDQUEvRSxDQUFKLEVBQXVGO0FBQ3JGLFlBQU0sOENBQU47QUFDRDs7QUFFRCxRQUFJb0UsUUFBUXBFLEtBQUs3SSxNQUFMLENBQVl5SSxLQUFaLENBQWtCeUUsT0FBbEIsQ0FBMEJyRSxJQUExQixDQUFaO0FBQ0FBLFNBQUs3SSxNQUFMLENBQVl5SSxLQUFaLENBQWtCdUUsTUFBbEIsQ0FBeUJDLEtBQXpCLEVBQWdDLENBQWhDO0FBQ0FBLFlBQVFwRSxLQUFLNUksTUFBTCxDQUFZd0ksS0FBWixDQUFrQnlFLE9BQWxCLENBQTBCckUsSUFBMUIsQ0FBUjtBQUNBQSxTQUFLNUksTUFBTCxDQUFZd0ksS0FBWixDQUFrQnVFLE1BQWxCLENBQXlCQyxLQUF6QixFQUFnQyxDQUFoQzs7QUFFQTs7QUFFQSxRQUFJLEVBQUVwRSxLQUFLN0ksTUFBTCxDQUFZc2tCLEtBQVosSUFBcUIsSUFBckIsSUFBNkJ6YixLQUFLN0ksTUFBTCxDQUFZc2tCLEtBQVosQ0FBa0JwVixlQUFsQixNQUF1QyxJQUF0RSxDQUFKLEVBQWlGO0FBQy9FLFlBQU0sa0RBQU47QUFDRDtBQUNELFFBQUlyRyxLQUFLN0ksTUFBTCxDQUFZc2tCLEtBQVosQ0FBa0JwVixlQUFsQixHQUFvQ3pHLEtBQXBDLENBQTBDeUUsT0FBMUMsQ0FBa0RyRSxJQUFsRCxLQUEyRCxDQUFDLENBQWhFLEVBQW1FO0FBQ2pFLFlBQU0seUNBQU47QUFDRDs7QUFFRCxRQUFJb0UsUUFBUXBFLEtBQUs3SSxNQUFMLENBQVlza0IsS0FBWixDQUFrQnBWLGVBQWxCLEdBQW9DekcsS0FBcEMsQ0FBMEN5RSxPQUExQyxDQUFrRHJFLElBQWxELENBQVo7QUFDQUEsU0FBSzdJLE1BQUwsQ0FBWXNrQixLQUFaLENBQWtCcFYsZUFBbEIsR0FBb0N6RyxLQUFwQyxDQUEwQ3VFLE1BQTFDLENBQWlEQyxLQUFqRCxFQUF3RCxDQUF4RDtBQUNEO0FBQ0YsQ0FwRkQ7O0FBc0ZBck0sY0FBY1IsU0FBZCxDQUF3QitGLFlBQXhCLEdBQXVDLFlBQ3ZDO0FBQ0UsT0FBSzhmLFNBQUwsQ0FBZTlmLFlBQWYsQ0FBNEIsSUFBNUI7QUFDRCxDQUhEOztBQUtBdkYsY0FBY1IsU0FBZCxDQUF3QjRILFNBQXhCLEdBQW9DLFlBQ3BDO0FBQ0UsU0FBTyxLQUFLRCxNQUFaO0FBQ0QsQ0FIRDs7QUFLQW5ILGNBQWNSLFNBQWQsQ0FBd0J1RSxXQUF4QixHQUFzQyxZQUN0QztBQUNFLE1BQUksS0FBS0YsUUFBTCxJQUFpQixJQUFyQixFQUNBO0FBQ0UsUUFBSW9ELFdBQVcsRUFBZjtBQUNBLFFBQUlFLFNBQVMsS0FBS0MsU0FBTCxFQUFiO0FBQ0EsUUFBSStXLElBQUloWCxPQUFPMUQsTUFBZjtBQUNBLFNBQUssSUFBSTJDLElBQUksQ0FBYixFQUFnQkEsSUFBSStYLENBQXBCLEVBQXVCL1gsR0FBdkIsRUFDQTtBQUNFYSxpQkFBV0EsU0FBU08sTUFBVCxDQUFnQkwsT0FBT2YsQ0FBUCxFQUFVcUIsUUFBVixFQUFoQixDQUFYO0FBQ0Q7QUFDRCxTQUFLNUQsUUFBTCxHQUFnQm9ELFFBQWhCO0FBQ0Q7QUFDRCxTQUFPLEtBQUtwRCxRQUFaO0FBQ0QsQ0FkRDs7QUFnQkE3RCxjQUFjUixTQUFkLENBQXdCd1AsYUFBeEIsR0FBd0MsWUFDeEM7QUFDRSxPQUFLbkwsUUFBTCxHQUFnQixJQUFoQjtBQUNELENBSEQ7O0FBS0E3RCxjQUFjUixTQUFkLENBQXdCa0QsYUFBeEIsR0FBd0MsWUFDeEM7QUFDRSxPQUFLZ1UsUUFBTCxHQUFnQixJQUFoQjtBQUNELENBSEQ7O0FBS0ExVyxjQUFjUixTQUFkLENBQXdCb0UsK0JBQXhCLEdBQTBELFlBQzFEO0FBQ0UsT0FBSytoQiwwQkFBTCxHQUFrQyxJQUFsQztBQUNELENBSEQ7O0FBS0EzbEIsY0FBY1IsU0FBZCxDQUF3QnNJLFdBQXhCLEdBQXNDLFlBQ3RDO0FBQ0UsTUFBSSxLQUFLNE8sUUFBTCxJQUFpQixJQUFyQixFQUNBO0FBQ0UsUUFBSWpPLFdBQVcsRUFBZjtBQUNBLFFBQUl0QixTQUFTLEtBQUtDLFNBQUwsRUFBYjtBQUNBLFFBQUkrVyxJQUFJaFgsT0FBTzFELE1BQWY7QUFDQSxTQUFLLElBQUkyQyxJQUFJLENBQWIsRUFBZ0JBLElBQUllLE9BQU8xRCxNQUEzQixFQUFtQzJDLEdBQW5DLEVBQ0E7QUFDRXFDLGlCQUFXQSxTQUFTakIsTUFBVCxDQUFnQkwsT0FBT2YsQ0FBUCxFQUFVeUYsUUFBVixFQUFoQixDQUFYO0FBQ0Q7O0FBRURwRCxlQUFXQSxTQUFTakIsTUFBVCxDQUFnQixLQUFLSyxLQUFyQixDQUFYOztBQUVBLFNBQUs2TyxRQUFMLEdBQWdCak8sUUFBaEI7QUFDRDtBQUNELFNBQU8sS0FBS2lPLFFBQVo7QUFDRCxDQWpCRDs7QUFtQkExVyxjQUFjUixTQUFkLENBQXdCMFksNkJBQXhCLEdBQXdELFlBQ3hEO0FBQ0UsU0FBTyxLQUFLeU4sMEJBQVo7QUFDRCxDQUhEOztBQUtBM2xCLGNBQWNSLFNBQWQsQ0FBd0J1RCw2QkFBeEIsR0FBd0QsVUFBVWtFLFFBQVYsRUFDeEQ7QUFDRSxNQUFJLEtBQUswZSwwQkFBTCxJQUFtQyxJQUF2QyxFQUE2QztBQUMzQyxVQUFNLGVBQU47QUFDRDs7QUFFRCxPQUFLQSwwQkFBTCxHQUFrQzFlLFFBQWxDO0FBQ0QsQ0FQRDs7QUFTQWpILGNBQWNSLFNBQWQsQ0FBd0IyRCxPQUF4QixHQUFrQyxZQUNsQztBQUNFLFNBQU8sS0FBS2tpQixTQUFaO0FBQ0QsQ0FIRDs7QUFLQXJsQixjQUFjUixTQUFkLENBQXdCNGxCLFlBQXhCLEdBQXVDLFVBQVVsZSxLQUFWLEVBQ3ZDO0FBQ0UsTUFBSUEsTUFBTW9ILGVBQU4sTUFBMkIsSUFBL0IsRUFBcUM7QUFDbkMsVUFBTSw2QkFBTjtBQUNEOztBQUVELE9BQUsrVyxTQUFMLEdBQWlCbmUsS0FBakI7QUFDQTtBQUNBLE1BQUlBLE1BQU1ySCxNQUFOLElBQWdCLElBQXBCLEVBQ0E7QUFDRXFILFVBQU1ySCxNQUFOLEdBQWUsS0FBS0ssTUFBTCxDQUFZZ0IsT0FBWixDQUFvQixXQUFwQixDQUFmO0FBQ0Q7QUFDRixDQVpEOztBQWNBbEIsY0FBY1IsU0FBZCxDQUF3QjZULFNBQXhCLEdBQW9DLFlBQ3BDO0FBQ0UsU0FBTyxLQUFLblQsTUFBWjtBQUNELENBSEQ7O0FBS0FGLGNBQWNSLFNBQWQsQ0FBd0JvbUIsb0JBQXhCLEdBQStDLFVBQVVDLFNBQVYsRUFBcUJDLFVBQXJCLEVBQy9DO0FBQ0UsTUFBSSxFQUFFRCxhQUFhLElBQWIsSUFBcUJDLGNBQWMsSUFBckMsQ0FBSixFQUFnRDtBQUM5QyxVQUFNLGVBQU47QUFDRDs7QUFFRCxNQUFJRCxhQUFhQyxVQUFqQixFQUNBO0FBQ0UsV0FBTyxJQUFQO0FBQ0Q7QUFDRDtBQUNBLE1BQUlqTSxhQUFhZ00sVUFBVTdOLFFBQVYsRUFBakI7QUFDQSxNQUFJc04sVUFBSjs7QUFFQSxLQUNBO0FBQ0VBLGlCQUFhekwsV0FBV3JNLFNBQVgsRUFBYjs7QUFFQSxRQUFJOFgsY0FBYyxJQUFsQixFQUNBO0FBQ0U7QUFDRDs7QUFFRCxRQUFJQSxjQUFjUSxVQUFsQixFQUNBO0FBQ0UsYUFBTyxJQUFQO0FBQ0Q7O0FBRURqTSxpQkFBYXlMLFdBQVd0TixRQUFYLEVBQWI7QUFDQSxRQUFJNkIsY0FBYyxJQUFsQixFQUNBO0FBQ0U7QUFDRDtBQUNGLEdBbkJELFFBbUJTLElBbkJUO0FBb0JBO0FBQ0FBLGVBQWFpTSxXQUFXOU4sUUFBWCxFQUFiOztBQUVBLEtBQ0E7QUFDRXNOLGlCQUFhekwsV0FBV3JNLFNBQVgsRUFBYjs7QUFFQSxRQUFJOFgsY0FBYyxJQUFsQixFQUNBO0FBQ0U7QUFDRDs7QUFFRCxRQUFJQSxjQUFjTyxTQUFsQixFQUNBO0FBQ0UsYUFBTyxJQUFQO0FBQ0Q7O0FBRURoTSxpQkFBYXlMLFdBQVd0TixRQUFYLEVBQWI7QUFDQSxRQUFJNkIsY0FBYyxJQUFsQixFQUNBO0FBQ0U7QUFDRDtBQUNGLEdBbkJELFFBbUJTLElBbkJUOztBQXFCQSxTQUFPLEtBQVA7QUFDRCxDQTNERDs7QUE2REE3WixjQUFjUixTQUFkLENBQXdCeUQseUJBQXhCLEdBQW9ELFlBQ3BEO0FBQ0UsTUFBSWdGLElBQUo7QUFDQSxNQUFJbVEsVUFBSjtBQUNBLE1BQUlDLFVBQUo7QUFDQSxNQUFJME4sbUJBQUo7QUFDQSxNQUFJQyxtQkFBSjs7QUFFQSxNQUFJbmUsUUFBUSxLQUFLQyxXQUFMLEVBQVo7QUFDQSxNQUFJcVcsSUFBSXRXLE1BQU1wRSxNQUFkO0FBQ0EsT0FBSyxJQUFJMkMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJK1gsQ0FBcEIsRUFBdUIvWCxHQUF2QixFQUNBO0FBQ0U2QixXQUFPSixNQUFNekIsQ0FBTixDQUFQOztBQUVBZ1MsaUJBQWFuUSxLQUFLN0ksTUFBbEI7QUFDQWlaLGlCQUFhcFEsS0FBSzVJLE1BQWxCO0FBQ0E0SSxTQUFLMGEsR0FBTCxHQUFXLElBQVg7QUFDQTFhLFNBQUsyYSxXQUFMLEdBQW1CeEssVUFBbkI7QUFDQW5RLFNBQUs0YSxXQUFMLEdBQW1CeEssVUFBbkI7O0FBRUEsUUFBSUQsY0FBY0MsVUFBbEIsRUFDQTtBQUNFcFEsV0FBSzBhLEdBQUwsR0FBV3ZLLFdBQVdKLFFBQVgsRUFBWDtBQUNBO0FBQ0Q7O0FBRUQrTiwwQkFBc0IzTixXQUFXSixRQUFYLEVBQXRCOztBQUVBLFdBQU8vUCxLQUFLMGEsR0FBTCxJQUFZLElBQW5CLEVBQ0E7QUFDRTFhLFdBQUs0YSxXQUFMLEdBQW1CeEssVUFBbkI7QUFDQTJOLDRCQUFzQjNOLFdBQVdMLFFBQVgsRUFBdEI7O0FBRUEsYUFBTy9QLEtBQUswYSxHQUFMLElBQVksSUFBbkIsRUFDQTtBQUNFLFlBQUlxRCx1QkFBdUJELG1CQUEzQixFQUNBO0FBQ0U5ZCxlQUFLMGEsR0FBTCxHQUFXcUQsbUJBQVg7QUFDQTtBQUNEOztBQUVELFlBQUlBLHVCQUF1QixLQUFLWCxTQUFoQyxFQUNBO0FBQ0U7QUFDRDs7QUFFRCxZQUFJcGQsS0FBSzBhLEdBQUwsSUFBWSxJQUFoQixFQUFzQjtBQUNwQixnQkFBTSxlQUFOO0FBQ0Q7QUFDRDFhLGFBQUs0YSxXQUFMLEdBQW1CbUQsb0JBQW9CeFksU0FBcEIsRUFBbkI7QUFDQXdZLDhCQUFzQi9kLEtBQUs0YSxXQUFMLENBQWlCN0ssUUFBakIsRUFBdEI7QUFDRDs7QUFFRCxVQUFJK04sdUJBQXVCLEtBQUtWLFNBQWhDLEVBQ0E7QUFDRTtBQUNEOztBQUVELFVBQUlwZCxLQUFLMGEsR0FBTCxJQUFZLElBQWhCLEVBQ0E7QUFDRTFhLGFBQUsyYSxXQUFMLEdBQW1CbUQsb0JBQW9CdlksU0FBcEIsRUFBbkI7QUFDQXVZLDhCQUFzQjlkLEtBQUsyYSxXQUFMLENBQWlCNUssUUFBakIsRUFBdEI7QUFDRDtBQUNGOztBQUVELFFBQUkvUCxLQUFLMGEsR0FBTCxJQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQU0sZUFBTjtBQUNEO0FBQ0Y7QUFDRixDQXJFRDs7QUF1RUEzaUIsY0FBY1IsU0FBZCxDQUF3QnltQix3QkFBeEIsR0FBbUQsVUFBVUosU0FBVixFQUFxQkMsVUFBckIsRUFDbkQ7QUFDRSxNQUFJRCxhQUFhQyxVQUFqQixFQUNBO0FBQ0UsV0FBT0QsVUFBVTdOLFFBQVYsRUFBUDtBQUNEO0FBQ0QsTUFBSWtPLGtCQUFrQkwsVUFBVTdOLFFBQVYsRUFBdEI7O0FBRUEsS0FDQTtBQUNFLFFBQUlrTyxtQkFBbUIsSUFBdkIsRUFDQTtBQUNFO0FBQ0Q7QUFDRCxRQUFJQyxtQkFBbUJMLFdBQVc5TixRQUFYLEVBQXZCOztBQUVBLE9BQ0E7QUFDRSxVQUFJbU8sb0JBQW9CLElBQXhCLEVBQ0E7QUFDRTtBQUNEOztBQUVELFVBQUlBLG9CQUFvQkQsZUFBeEIsRUFDQTtBQUNFLGVBQU9DLGdCQUFQO0FBQ0Q7QUFDREEseUJBQW1CQSxpQkFBaUIzWSxTQUFqQixHQUE2QndLLFFBQTdCLEVBQW5CO0FBQ0QsS0FaRCxRQVlTLElBWlQ7O0FBY0FrTyxzQkFBa0JBLGdCQUFnQjFZLFNBQWhCLEdBQTRCd0ssUUFBNUIsRUFBbEI7QUFDRCxHQXZCRCxRQXVCUyxJQXZCVDs7QUF5QkEsU0FBT2tPLGVBQVA7QUFDRCxDQWxDRDs7QUFvQ0FsbUIsY0FBY1IsU0FBZCxDQUF3QjBELHVCQUF4QixHQUFrRCxVQUFVZ0UsS0FBVixFQUFpQmtmLEtBQWpCLEVBQXdCO0FBQ3hFLE1BQUlsZixTQUFTLElBQVQsSUFBaUJrZixTQUFTLElBQTlCLEVBQW9DO0FBQ2xDbGYsWUFBUSxLQUFLbWUsU0FBYjtBQUNBZSxZQUFRLENBQVI7QUFDRDtBQUNELE1BQUkxZSxJQUFKOztBQUVBLE1BQUlxSixRQUFRN0osTUFBTU8sUUFBTixFQUFaO0FBQ0EsTUFBSTBXLElBQUlwTixNQUFNdE4sTUFBZDtBQUNBLE9BQUssSUFBSTJDLElBQUksQ0FBYixFQUFnQkEsSUFBSStYLENBQXBCLEVBQXVCL1gsR0FBdkIsRUFDQTtBQUNFc0IsV0FBT3FKLE1BQU0zSyxDQUFOLENBQVA7QUFDQXNCLFNBQUsyZSxrQkFBTCxHQUEwQkQsS0FBMUI7O0FBRUEsUUFBSTFlLEtBQUtxSCxLQUFMLElBQWMsSUFBbEIsRUFDQTtBQUNFLFdBQUs3TCx1QkFBTCxDQUE2QndFLEtBQUtxSCxLQUFsQyxFQUF5Q3FYLFFBQVEsQ0FBakQ7QUFDRDtBQUNGO0FBQ0YsQ0FuQkQ7O0FBcUJBcG1CLGNBQWNSLFNBQWQsQ0FBd0I4bUIsbUJBQXhCLEdBQThDLFlBQzlDO0FBQ0UsTUFBSXJlLElBQUo7O0FBRUEsTUFBSWtXLElBQUksS0FBS3RXLEtBQUwsQ0FBV3BFLE1BQW5CO0FBQ0EsT0FBSyxJQUFJMkMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJK1gsQ0FBcEIsRUFBdUIvWCxHQUF2QixFQUNBO0FBQ0U2QixXQUFPLEtBQUtKLEtBQUwsQ0FBV3pCLENBQVgsQ0FBUDs7QUFFQSxRQUFJLEtBQUt3ZixvQkFBTCxDQUEwQjNkLEtBQUs3SSxNQUEvQixFQUF1QzZJLEtBQUs1SSxNQUE1QyxDQUFKLEVBQ0E7QUFDRSxhQUFPLElBQVA7QUFDRDtBQUNGO0FBQ0QsU0FBTyxLQUFQO0FBQ0QsQ0FmRDs7QUFpQkFMLE9BQU9DLE9BQVAsR0FBaUJlLGFBQWpCLEM7Ozs7Ozs7Ozs7Ozs7O0FDMWVBLFNBQVN3aUIsWUFBVCxDQUFzQkMsWUFBdEIsRUFBb0M7QUFDbEMsT0FBS0EsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRDs7QUFFRHpqQixPQUFPQyxPQUFQLEdBQWlCdWpCLFlBQWpCLEM7Ozs7Ozs7Ozs7Ozs7O0FDSkEsSUFBSUEsZUFBZSxtQkFBQWxrQixDQUFRLGlFQUFSLENBQW5CO0FBQ0EsSUFBSW1DLFVBQVUsbUJBQUFuQyxDQUFRLHVEQUFSLENBQWQ7QUFDQSxJQUFJNGtCLGFBQWEsbUJBQUE1a0IsQ0FBUSw2REFBUixDQUFqQjtBQUNBLElBQUkrQixrQkFBa0IsbUJBQUEvQixDQUFRLHVFQUFSLENBQXRCO0FBQ0EsSUFBSWlvQixhQUFhLG1CQUFBam9CLENBQVEsNkRBQVIsQ0FBakI7QUFDQSxJQUFJaUMsU0FBUyxtQkFBQWpDLENBQVEscURBQVIsQ0FBYjtBQUNBLElBQUkwSixVQUFVLG1CQUFBMUosQ0FBUSx1REFBUixDQUFkOztBQUVBLFNBQVN5ZSxLQUFULENBQWVoYyxFQUFmLEVBQW1Cb1MsR0FBbkIsRUFBd0I5TCxJQUF4QixFQUE4QmxHLEtBQTlCLEVBQXFDO0FBQ25DO0FBQ0EsTUFBSWtHLFFBQVEsSUFBUixJQUFnQmxHLFNBQVMsSUFBN0IsRUFBbUM7QUFDakNBLFlBQVFnUyxHQUFSO0FBQ0Q7O0FBRURxUCxlQUFhampCLElBQWIsQ0FBa0IsSUFBbEIsRUFBd0I0QixLQUF4Qjs7QUFFQTtBQUNBLE1BQUlKLEdBQUdDLFlBQUgsSUFBbUIsSUFBdkIsRUFDRUQsS0FBS0EsR0FBR0MsWUFBUjs7QUFFRixPQUFLa1osYUFBTCxHQUFxQnpaLFFBQVFxTSxTQUE3QjtBQUNBLE9BQUt1WixrQkFBTCxHQUEwQjVsQixRQUFReVIsU0FBbEM7QUFDQSxPQUFLdVEsWUFBTCxHQUFvQnRoQixLQUFwQjtBQUNBLE9BQUswRyxLQUFMLEdBQWEsRUFBYjtBQUNBLE9BQUs3RyxZQUFMLEdBQW9CRCxFQUFwQjs7QUFFQSxNQUFJc0csUUFBUSxJQUFSLElBQWdCOEwsT0FBTyxJQUEzQixFQUNFLEtBQUs5TSxJQUFMLEdBQVksSUFBSTZjLFVBQUosQ0FBZS9QLElBQUloUCxDQUFuQixFQUFzQmdQLElBQUkzTSxDQUExQixFQUE2QmEsS0FBS1YsS0FBbEMsRUFBeUNVLEtBQUtSLE1BQTlDLENBQVosQ0FERixLQUdFLEtBQUtSLElBQUwsR0FBWSxJQUFJNmMsVUFBSixFQUFaO0FBQ0g7O0FBRURuRyxNQUFNdmQsU0FBTixHQUFrQkMsT0FBT0MsTUFBUCxDQUFjOGlCLGFBQWFoakIsU0FBM0IsQ0FBbEI7QUFDQSxLQUFLLElBQUloQixJQUFULElBQWlCZ2tCLFlBQWpCLEVBQStCO0FBQzdCekYsUUFBTXZlLElBQU4sSUFBY2drQixhQUFhaGtCLElBQWIsQ0FBZDtBQUNEOztBQUVEdWUsTUFBTXZkLFNBQU4sQ0FBZ0JxTSxRQUFoQixHQUEyQixZQUMzQjtBQUNFLFNBQU8sS0FBS2hFLEtBQVo7QUFDRCxDQUhEOztBQUtBa1YsTUFBTXZkLFNBQU4sQ0FBZ0JnUCxRQUFoQixHQUEyQixZQUMzQjtBQUNFLFNBQU8sS0FBS08sS0FBWjtBQUNELENBSEQ7O0FBS0FnTyxNQUFNdmQsU0FBTixDQUFnQndZLFFBQWhCLEdBQTJCLFlBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRSxTQUFPLEtBQUswTCxLQUFaO0FBQ0QsQ0FURDs7QUFXQTNHLE1BQU12ZCxTQUFOLENBQWdCd1YsUUFBaEIsR0FBMkIsWUFDM0I7QUFDRSxTQUFPLEtBQUszTyxJQUFMLENBQVVNLEtBQWpCO0FBQ0QsQ0FIRDs7QUFLQW9XLE1BQU12ZCxTQUFOLENBQWdCeVYsUUFBaEIsR0FBMkIsVUFBVXRPLEtBQVYsRUFDM0I7QUFDRSxPQUFLTixJQUFMLENBQVVNLEtBQVYsR0FBa0JBLEtBQWxCO0FBQ0QsQ0FIRDs7QUFLQW9XLE1BQU12ZCxTQUFOLENBQWdCMFYsU0FBaEIsR0FBNEIsWUFDNUI7QUFDRSxTQUFPLEtBQUs3TyxJQUFMLENBQVVRLE1BQWpCO0FBQ0QsQ0FIRDs7QUFLQWtXLE1BQU12ZCxTQUFOLENBQWdCMlYsU0FBaEIsR0FBNEIsVUFBVXRPLE1BQVYsRUFDNUI7QUFDRSxPQUFLUixJQUFMLENBQVVRLE1BQVYsR0FBbUJBLE1BQW5CO0FBQ0QsQ0FIRDs7QUFLQWtXLE1BQU12ZCxTQUFOLENBQWdCK0csVUFBaEIsR0FBNkIsWUFDN0I7QUFDRSxTQUFPLEtBQUtGLElBQUwsQ0FBVWxDLENBQVYsR0FBYyxLQUFLa0MsSUFBTCxDQUFVTSxLQUFWLEdBQWtCLENBQXZDO0FBQ0QsQ0FIRDs7QUFLQW9XLE1BQU12ZCxTQUFOLENBQWdCaUgsVUFBaEIsR0FBNkIsWUFDN0I7QUFDRSxTQUFPLEtBQUtKLElBQUwsQ0FBVUcsQ0FBVixHQUFjLEtBQUtILElBQUwsQ0FBVVEsTUFBVixHQUFtQixDQUF4QztBQUNELENBSEQ7O0FBS0FrVyxNQUFNdmQsU0FBTixDQUFnQmduQixTQUFoQixHQUE0QixZQUM1QjtBQUNFLFNBQU8sSUFBSWptQixNQUFKLENBQVcsS0FBSzhGLElBQUwsQ0FBVWxDLENBQVYsR0FBYyxLQUFLa0MsSUFBTCxDQUFVTSxLQUFWLEdBQWtCLENBQTNDLEVBQ0MsS0FBS04sSUFBTCxDQUFVRyxDQUFWLEdBQWMsS0FBS0gsSUFBTCxDQUFVUSxNQUFWLEdBQW1CLENBRGxDLENBQVA7QUFFRCxDQUpEOztBQU1Ba1csTUFBTXZkLFNBQU4sQ0FBZ0JpbkIsV0FBaEIsR0FBOEIsWUFDOUI7QUFDRSxTQUFPLElBQUlsbUIsTUFBSixDQUFXLEtBQUs4RixJQUFMLENBQVVsQyxDQUFyQixFQUF3QixLQUFLa0MsSUFBTCxDQUFVRyxDQUFsQyxDQUFQO0FBQ0QsQ0FIRDs7QUFLQXVXLE1BQU12ZCxTQUFOLENBQWdCdVosT0FBaEIsR0FBMEIsWUFDMUI7QUFDRSxTQUFPLEtBQUsxUyxJQUFaO0FBQ0QsQ0FIRDs7QUFLQTBXLE1BQU12ZCxTQUFOLENBQWdCd04sV0FBaEIsR0FBOEIsWUFDOUI7QUFDRSxTQUFPOUgsS0FBS0csSUFBTCxDQUFVLEtBQUtnQixJQUFMLENBQVVNLEtBQVYsR0FBa0IsS0FBS04sSUFBTCxDQUFVTSxLQUE1QixHQUNULEtBQUtOLElBQUwsQ0FBVVEsTUFBVixHQUFtQixLQUFLUixJQUFMLENBQVVRLE1BRDlCLENBQVA7QUFFRCxDQUpEOztBQU1Ba1csTUFBTXZkLFNBQU4sQ0FBZ0JrbkIsT0FBaEIsR0FBMEIsVUFBVUMsU0FBVixFQUFxQkMsU0FBckIsRUFDMUI7QUFDRSxPQUFLdmdCLElBQUwsQ0FBVWxDLENBQVYsR0FBY3dpQixVQUFVeGlCLENBQXhCO0FBQ0EsT0FBS2tDLElBQUwsQ0FBVUcsQ0FBVixHQUFjbWdCLFVBQVVuZ0IsQ0FBeEI7QUFDQSxPQUFLSCxJQUFMLENBQVVNLEtBQVYsR0FBa0JpZ0IsVUFBVWpnQixLQUE1QjtBQUNBLE9BQUtOLElBQUwsQ0FBVVEsTUFBVixHQUFtQitmLFVBQVUvZixNQUE3QjtBQUNELENBTkQ7O0FBUUFrVyxNQUFNdmQsU0FBTixDQUFnQm1NLFNBQWhCLEdBQTRCLFVBQVVrYixFQUFWLEVBQWNDLEVBQWQsRUFDNUI7QUFDRSxPQUFLemdCLElBQUwsQ0FBVWxDLENBQVYsR0FBYzBpQixLQUFLLEtBQUt4Z0IsSUFBTCxDQUFVTSxLQUFWLEdBQWtCLENBQXJDO0FBQ0EsT0FBS04sSUFBTCxDQUFVRyxDQUFWLEdBQWNzZ0IsS0FBSyxLQUFLemdCLElBQUwsQ0FBVVEsTUFBVixHQUFtQixDQUF0QztBQUNELENBSkQ7O0FBTUFrVyxNQUFNdmQsU0FBTixDQUFnQnVuQixXQUFoQixHQUE4QixVQUFVNWlCLENBQVYsRUFBYXFDLENBQWIsRUFDOUI7QUFDRSxPQUFLSCxJQUFMLENBQVVsQyxDQUFWLEdBQWNBLENBQWQ7QUFDQSxPQUFLa0MsSUFBTCxDQUFVRyxDQUFWLEdBQWNBLENBQWQ7QUFDRCxDQUpEOztBQU1BdVcsTUFBTXZkLFNBQU4sQ0FBZ0J3VSxNQUFoQixHQUF5QixVQUFVZ1QsRUFBVixFQUFjQyxFQUFkLEVBQ3pCO0FBQ0UsT0FBSzVnQixJQUFMLENBQVVsQyxDQUFWLElBQWU2aUIsRUFBZjtBQUNBLE9BQUszZ0IsSUFBTCxDQUFVRyxDQUFWLElBQWV5Z0IsRUFBZjtBQUNELENBSkQ7O0FBTUFsSyxNQUFNdmQsU0FBTixDQUFnQmtKLGlCQUFoQixHQUFvQyxVQUFVd2UsRUFBVixFQUNwQztBQUNFLE1BQUl6ZSxXQUFXLEVBQWY7QUFDQSxNQUFJUixJQUFKO0FBQ0EsTUFBSWtGLE9BQU8sSUFBWDs7QUFFQUEsT0FBS3RGLEtBQUwsQ0FBV2lHLE9BQVgsQ0FBbUIsVUFBUzdGLElBQVQsRUFBZTs7QUFFaEMsUUFBSUEsS0FBSzVJLE1BQUwsSUFBZTZuQixFQUFuQixFQUNBO0FBQ0UsVUFBSWpmLEtBQUs3SSxNQUFMLElBQWUrTixJQUFuQixFQUNFLE1BQU0sd0JBQU47O0FBRUYxRSxlQUFTSCxJQUFULENBQWNMLElBQWQ7QUFDRDtBQUNGLEdBVEQ7O0FBV0EsU0FBT1EsUUFBUDtBQUNELENBbEJEOztBQW9CQXNVLE1BQU12ZCxTQUFOLENBQWdCME0sZUFBaEIsR0FBa0MsVUFBVWliLEtBQVYsRUFDbEM7QUFDRSxNQUFJMWUsV0FBVyxFQUFmO0FBQ0EsTUFBSVIsSUFBSjs7QUFFQSxNQUFJa0YsT0FBTyxJQUFYO0FBQ0FBLE9BQUt0RixLQUFMLENBQVdpRyxPQUFYLENBQW1CLFVBQVM3RixJQUFULEVBQWU7O0FBRWhDLFFBQUksRUFBRUEsS0FBSzdJLE1BQUwsSUFBZStOLElBQWYsSUFBdUJsRixLQUFLNUksTUFBTCxJQUFlOE4sSUFBeEMsQ0FBSixFQUNFLE1BQU0scUNBQU47O0FBRUYsUUFBS2xGLEtBQUs1SSxNQUFMLElBQWU4bkIsS0FBaEIsSUFBMkJsZixLQUFLN0ksTUFBTCxJQUFlK25CLEtBQTlDLEVBQ0E7QUFDRTFlLGVBQVNILElBQVQsQ0FBY0wsSUFBZDtBQUNEO0FBQ0YsR0FURDs7QUFXQSxTQUFPUSxRQUFQO0FBQ0QsQ0FsQkQ7O0FBb0JBc1UsTUFBTXZkLFNBQU4sQ0FBZ0I0bkIsZ0JBQWhCLEdBQW1DLFlBQ25DO0FBQ0UsTUFBSUMsWUFBWSxJQUFJcmYsT0FBSixFQUFoQjtBQUNBLE1BQUlDLElBQUo7O0FBRUEsTUFBSWtGLE9BQU8sSUFBWDtBQUNBQSxPQUFLdEYsS0FBTCxDQUFXaUcsT0FBWCxDQUFtQixVQUFTN0YsSUFBVCxFQUFlOztBQUVoQyxRQUFJQSxLQUFLN0ksTUFBTCxJQUFlK04sSUFBbkIsRUFDQTtBQUNFa2EsZ0JBQVU3ZSxHQUFWLENBQWNQLEtBQUs1SSxNQUFuQjtBQUNELEtBSEQsTUFLQTtBQUNFLFVBQUk0SSxLQUFLNUksTUFBTCxJQUFlOE4sSUFBbkIsRUFBeUI7QUFDdkIsY0FBTSxzQkFBTjtBQUNEOztBQUVEa2EsZ0JBQVU3ZSxHQUFWLENBQWNQLEtBQUs3SSxNQUFuQjtBQUNEO0FBQ0YsR0FkRDs7QUFnQkEsU0FBT2lvQixTQUFQO0FBQ0QsQ0F2QkQ7O0FBeUJBdEssTUFBTXZkLFNBQU4sQ0FBZ0JrbEIsWUFBaEIsR0FBK0IsWUFDL0I7QUFDRSxNQUFJNEMsb0JBQW9CLElBQUl4akIsR0FBSixFQUF4QjtBQUNBLE1BQUl5akIsU0FBSjtBQUNBLE1BQUl4WCxRQUFKOztBQUVBdVgsb0JBQWtCOWUsR0FBbEIsQ0FBc0IsSUFBdEI7O0FBRUEsTUFBSSxLQUFLdUcsS0FBTCxJQUFjLElBQWxCLEVBQ0E7QUFDRSxRQUFJZ0MsUUFBUSxLQUFLaEMsS0FBTCxDQUFXdEgsUUFBWCxFQUFaO0FBQ0EsU0FBSyxJQUFJckIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJMkssTUFBTXROLE1BQTFCLEVBQWtDMkMsR0FBbEMsRUFDQTtBQUNFbWhCLGtCQUFZeFcsTUFBTTNLLENBQU4sQ0FBWjtBQUNBMkosaUJBQVd3WCxVQUFVN0MsWUFBVixFQUFYO0FBQ0EzVSxlQUFTakMsT0FBVCxDQUFpQixVQUFTcEcsSUFBVCxFQUFlO0FBQzlCNGYsMEJBQWtCOWUsR0FBbEIsQ0FBc0JkLElBQXRCO0FBQ0QsT0FGRDtBQUdEO0FBQ0Y7O0FBRUQsU0FBTzRmLGlCQUFQO0FBQ0QsQ0F0QkQ7O0FBd0JBdkssTUFBTXZkLFNBQU4sQ0FBZ0JvSSxlQUFoQixHQUFrQyxZQUNsQztBQUNFLE1BQUlELGVBQWUsQ0FBbkI7QUFDQSxNQUFJNGYsU0FBSjs7QUFFQSxNQUFHLEtBQUt4WSxLQUFMLElBQWMsSUFBakIsRUFBc0I7QUFDcEJwSCxtQkFBZSxDQUFmO0FBQ0QsR0FGRCxNQUlBO0FBQ0UsUUFBSW9KLFFBQVEsS0FBS2hDLEtBQUwsQ0FBV3RILFFBQVgsRUFBWjtBQUNBLFNBQUssSUFBSXJCLElBQUksQ0FBYixFQUFnQkEsSUFBSTJLLE1BQU10TixNQUExQixFQUFrQzJDLEdBQWxDLEVBQ0E7QUFDRW1oQixrQkFBWXhXLE1BQU0zSyxDQUFOLENBQVo7O0FBRUF1QixzQkFBZ0I0ZixVQUFVM2YsZUFBVixFQUFoQjtBQUNEO0FBQ0Y7O0FBRUQsTUFBR0QsZ0JBQWdCLENBQW5CLEVBQXFCO0FBQ25CQSxtQkFBZSxDQUFmO0FBQ0Q7QUFDRCxTQUFPQSxZQUFQO0FBQ0QsQ0F2QkQ7O0FBeUJBb1YsTUFBTXZkLFNBQU4sQ0FBZ0JzWCxnQkFBaEIsR0FBbUMsWUFBWTtBQUM3QyxNQUFJLEtBQUtvRCxhQUFMLElBQXNCelosUUFBUXFNLFNBQWxDLEVBQTZDO0FBQzNDLFVBQU0sZUFBTjtBQUNEO0FBQ0QsU0FBTyxLQUFLb04sYUFBWjtBQUNELENBTEQ7O0FBT0E2QyxNQUFNdmQsU0FBTixDQUFnQjRELGlCQUFoQixHQUFvQyxZQUFZO0FBQzlDLE1BQUksS0FBSzJMLEtBQUwsSUFBYyxJQUFsQixFQUNBO0FBQ0UsV0FBTyxLQUFLbUwsYUFBTCxHQUFxQixDQUFDLEtBQUs3VCxJQUFMLENBQVVNLEtBQVYsR0FBa0IsS0FBS04sSUFBTCxDQUFVUSxNQUE3QixJQUF1QyxDQUFuRTtBQUNELEdBSEQsTUFLQTtBQUNFLFNBQUtxVCxhQUFMLEdBQXFCLEtBQUtuTCxLQUFMLENBQVczTCxpQkFBWCxFQUFyQjtBQUNBLFNBQUtpRCxJQUFMLENBQVVNLEtBQVYsR0FBa0IsS0FBS3VULGFBQXZCO0FBQ0EsU0FBSzdULElBQUwsQ0FBVVEsTUFBVixHQUFtQixLQUFLcVQsYUFBeEI7O0FBRUEsV0FBTyxLQUFLQSxhQUFaO0FBQ0Q7QUFDRixDQWJEOztBQWVBNkMsTUFBTXZkLFNBQU4sQ0FBZ0Jnb0IsT0FBaEIsR0FBMEIsWUFBWTtBQUNwQyxNQUFJQyxhQUFKO0FBQ0EsTUFBSUMsYUFBSjs7QUFFQSxNQUFJQyxPQUFPLENBQUN0bkIsZ0JBQWdCdW5CLHNCQUE1QjtBQUNBLE1BQUlDLE9BQU94bkIsZ0JBQWdCdW5CLHNCQUEzQjtBQUNBSCxrQkFBZ0JwbkIsZ0JBQWdCcUosY0FBaEIsR0FDUDZjLFdBQVd1QixVQUFYLE1BQTJCRCxPQUFPRixJQUFsQyxDQURPLEdBQ29DQSxJQURwRDs7QUFHQSxNQUFJSSxPQUFPLENBQUMxbkIsZ0JBQWdCdW5CLHNCQUE1QjtBQUNBLE1BQUlJLE9BQU8zbkIsZ0JBQWdCdW5CLHNCQUEzQjtBQUNBRixrQkFBZ0JybkIsZ0JBQWdCc0osY0FBaEIsR0FDUDRjLFdBQVd1QixVQUFYLE1BQTJCRSxPQUFPRCxJQUFsQyxDQURPLEdBQ29DQSxJQURwRDs7QUFHQSxPQUFLMWhCLElBQUwsQ0FBVWxDLENBQVYsR0FBY3NqQixhQUFkO0FBQ0EsT0FBS3BoQixJQUFMLENBQVVHLENBQVYsR0FBY2toQixhQUFkO0FBQ0QsQ0FoQkQ7O0FBa0JBM0ssTUFBTXZkLFNBQU4sQ0FBZ0IrRixZQUFoQixHQUErQixZQUFZO0FBQ3pDLE1BQUksS0FBS2lKLFFBQUwsTUFBbUIsSUFBdkIsRUFBNkI7QUFDM0IsVUFBTSxlQUFOO0FBQ0Q7QUFDRCxNQUFJLEtBQUtBLFFBQUwsR0FBZ0IvRyxRQUFoQixHQUEyQmhFLE1BQTNCLElBQXFDLENBQXpDLEVBQ0E7QUFDRTtBQUNBLFFBQUlxTSxhQUFhLEtBQUt0QixRQUFMLEVBQWpCO0FBQ0FzQixlQUFXdkssWUFBWCxDQUF3QixJQUF4Qjs7QUFFQSxTQUFLYyxJQUFMLENBQVVsQyxDQUFWLEdBQWMyTCxXQUFXc0ssT0FBWCxFQUFkO0FBQ0EsU0FBSy9ULElBQUwsQ0FBVUcsQ0FBVixHQUFjc0osV0FBV3VLLE1BQVgsRUFBZDs7QUFFQSxTQUFLcEYsUUFBTCxDQUFjbkYsV0FBV3FLLFFBQVgsS0FBd0JySyxXQUFXc0ssT0FBWCxFQUF0QztBQUNBLFNBQUtqRixTQUFMLENBQWVyRixXQUFXd0ssU0FBWCxLQUF5QnhLLFdBQVd1SyxNQUFYLEVBQXhDOztBQUVBO0FBQ0EsUUFBR2hhLGdCQUFnQjRuQiw4QkFBbkIsRUFBa0Q7O0FBRWhELFVBQUl0aEIsUUFBUW1KLFdBQVdxSyxRQUFYLEtBQXdCckssV0FBV3NLLE9BQVgsRUFBcEM7QUFDQSxVQUFJdlQsU0FBU2lKLFdBQVd3SyxTQUFYLEtBQXlCeEssV0FBV3VLLE1BQVgsRUFBdEM7O0FBRUEsVUFBRyxLQUFLNk4sVUFBTCxHQUFrQnZoQixLQUFyQixFQUEyQjtBQUN6QixhQUFLTixJQUFMLENBQVVsQyxDQUFWLElBQWUsQ0FBQyxLQUFLK2pCLFVBQUwsR0FBa0J2aEIsS0FBbkIsSUFBNEIsQ0FBM0M7QUFDQSxhQUFLc08sUUFBTCxDQUFjLEtBQUtpVCxVQUFuQjtBQUNEOztBQUVELFVBQUcsS0FBS0MsV0FBTCxHQUFtQnRoQixNQUF0QixFQUE2QjtBQUMzQixZQUFHLEtBQUt1aEIsUUFBTCxJQUFpQixRQUFwQixFQUE2QjtBQUMzQixlQUFLL2hCLElBQUwsQ0FBVUcsQ0FBVixJQUFlLENBQUMsS0FBSzJoQixXQUFMLEdBQW1CdGhCLE1BQXBCLElBQThCLENBQTdDO0FBQ0QsU0FGRCxNQUdLLElBQUcsS0FBS3VoQixRQUFMLElBQWlCLEtBQXBCLEVBQTBCO0FBQzdCLGVBQUsvaEIsSUFBTCxDQUFVRyxDQUFWLElBQWdCLEtBQUsyaEIsV0FBTCxHQUFtQnRoQixNQUFuQztBQUNEO0FBQ0QsYUFBS3NPLFNBQUwsQ0FBZSxLQUFLZ1QsV0FBcEI7QUFDRDtBQUNGO0FBQ0Y7QUFDRixDQXRDRDs7QUF3Q0FwTCxNQUFNdmQsU0FBTixDQUFnQjBYLHFCQUFoQixHQUF3QyxZQUN4QztBQUNFLE1BQUksS0FBS21QLGtCQUFMLElBQTJCNWxCLFFBQVF5UixTQUF2QyxFQUFrRDtBQUNoRCxVQUFNLGVBQU47QUFDRDtBQUNELFNBQU8sS0FBS21VLGtCQUFaO0FBQ0QsQ0FORDs7QUFRQXRKLE1BQU12ZCxTQUFOLENBQWdCaUssU0FBaEIsR0FBNEIsVUFBVTRlLEtBQVYsRUFDNUI7QUFDRSxNQUFJOVgsT0FBTyxLQUFLbEssSUFBTCxDQUFVbEMsQ0FBckI7O0FBRUEsTUFBSW9NLE9BQU9sUSxnQkFBZ0Jpb0IsY0FBM0IsRUFDQTtBQUNFL1gsV0FBT2xRLGdCQUFnQmlvQixjQUF2QjtBQUNELEdBSEQsTUFJSyxJQUFJL1gsT0FBTyxDQUFDbFEsZ0JBQWdCaW9CLGNBQTVCLEVBQ0w7QUFDRS9YLFdBQU8sQ0FBQ2xRLGdCQUFnQmlvQixjQUF4QjtBQUNEOztBQUVELE1BQUlyTixNQUFNLEtBQUs1VSxJQUFMLENBQVVHLENBQXBCOztBQUVBLE1BQUl5VSxNQUFNNWEsZ0JBQWdCaW9CLGNBQTFCLEVBQ0E7QUFDRXJOLFVBQU01YSxnQkFBZ0Jpb0IsY0FBdEI7QUFDRCxHQUhELE1BSUssSUFBSXJOLE1BQU0sQ0FBQzVhLGdCQUFnQmlvQixjQUEzQixFQUNMO0FBQ0VyTixVQUFNLENBQUM1YSxnQkFBZ0Jpb0IsY0FBdkI7QUFDRDs7QUFFRCxNQUFJQyxVQUFVLElBQUlob0IsTUFBSixDQUFXZ1EsSUFBWCxFQUFpQjBLLEdBQWpCLENBQWQ7QUFDQSxNQUFJdU4sV0FBV0gsTUFBTXpkLHFCQUFOLENBQTRCMmQsT0FBNUIsQ0FBZjs7QUFFQSxPQUFLeEIsV0FBTCxDQUFpQnlCLFNBQVNya0IsQ0FBMUIsRUFBNkJxa0IsU0FBU2hpQixDQUF0QztBQUNELENBNUJEOztBQThCQXVXLE1BQU12ZCxTQUFOLENBQWdCNGEsT0FBaEIsR0FBMEIsWUFDMUI7QUFDRSxTQUFPLEtBQUsvVCxJQUFMLENBQVVsQyxDQUFqQjtBQUNELENBSEQ7O0FBS0E0WSxNQUFNdmQsU0FBTixDQUFnQjJhLFFBQWhCLEdBQTJCLFlBQzNCO0FBQ0UsU0FBTyxLQUFLOVQsSUFBTCxDQUFVbEMsQ0FBVixHQUFjLEtBQUtrQyxJQUFMLENBQVVNLEtBQS9CO0FBQ0QsQ0FIRDs7QUFLQW9XLE1BQU12ZCxTQUFOLENBQWdCNmEsTUFBaEIsR0FBeUIsWUFDekI7QUFDRSxTQUFPLEtBQUtoVSxJQUFMLENBQVVHLENBQWpCO0FBQ0QsQ0FIRDs7QUFLQXVXLE1BQU12ZCxTQUFOLENBQWdCOGEsU0FBaEIsR0FBNEIsWUFDNUI7QUFDRSxTQUFPLEtBQUtqVSxJQUFMLENBQVVHLENBQVYsR0FBYyxLQUFLSCxJQUFMLENBQVVRLE1BQS9CO0FBQ0QsQ0FIRDs7QUFLQWtXLE1BQU12ZCxTQUFOLENBQWdCZ08sU0FBaEIsR0FBNEIsWUFDNUI7QUFDRSxNQUFJLEtBQUtrVyxLQUFMLElBQWMsSUFBbEIsRUFDQTtBQUNFLFdBQU8sSUFBUDtBQUNEOztBQUVELFNBQU8sS0FBS0EsS0FBTCxDQUFXbFcsU0FBWCxFQUFQO0FBQ0QsQ0FSRDs7QUFVQXhPLE9BQU9DLE9BQVAsR0FBaUI4ZCxLQUFqQixDOzs7Ozs7Ozs7Ozs7OztBQzlZQSxJQUFJMWMsa0JBQWtCLG1CQUFBL0IsQ0FBUSx1RUFBUixDQUF0QjtBQUNBLElBQUkrZSxVQUFVLG1CQUFBL2UsQ0FBUSx1REFBUixDQUFkO0FBQ0EsSUFBSTBCLGdCQUFnQixtQkFBQTFCLENBQVEsbUVBQVIsQ0FBcEI7QUFDQSxJQUFJeWUsUUFBUSxtQkFBQXplLENBQVEsbURBQVIsQ0FBWjtBQUNBLElBQUl3ZSxRQUFRLG1CQUFBeGUsQ0FBUSxtREFBUixDQUFaO0FBQ0EsSUFBSXFCLFNBQVMsbUJBQUFyQixDQUFRLHFEQUFSLENBQWI7QUFDQSxJQUFJaUMsU0FBUyxtQkFBQWpDLENBQVEscURBQVIsQ0FBYjtBQUNBLElBQUlxQyxZQUFZLG1CQUFBckMsQ0FBUSwyREFBUixDQUFoQjtBQUNBLElBQUk4VyxVQUFVLG1CQUFBOVcsQ0FBUSx1REFBUixDQUFkO0FBQ0EsSUFBSTBKLFVBQVUsbUJBQUExSixDQUFRLHVEQUFSLENBQWQ7O0FBRUEsU0FBU2tDLE1BQVQsQ0FBZ0Jpb0IsV0FBaEIsRUFBNkI7QUFDM0JyVCxVQUFRN1YsSUFBUixDQUFjLElBQWQ7O0FBRUE7QUFDQSxPQUFLeVcsYUFBTCxHQUFxQjNWLGdCQUFnQnFvQixlQUFyQztBQUNBO0FBQ0EsT0FBS25tQixtQkFBTCxHQUNRbEMsZ0JBQWdCbUMsOEJBRHhCO0FBRUE7QUFDQSxPQUFLYyxXQUFMLEdBQW1CakQsZ0JBQWdCc29CLG1CQUFuQztBQUNBO0FBQ0EsT0FBS0MsaUJBQUwsR0FDUXZvQixnQkFBZ0J3b0IsMkJBRHhCO0FBRUE7QUFDQSxPQUFLcE8scUJBQUwsR0FBNkJwYSxnQkFBZ0J5b0IsK0JBQTdDO0FBQ0E7QUFDQSxPQUFLN2pCLGVBQUwsR0FBdUI1RSxnQkFBZ0Iwb0Isd0JBQXZDO0FBQ0E7Ozs7OztBQU1BLE9BQUt4USxvQkFBTCxHQUNRbFksZ0JBQWdCMm9CLCtCQUR4QjtBQUVBOzs7O0FBSUEsT0FBS0MsZ0JBQUwsR0FBd0IsSUFBSTVMLE9BQUosRUFBeEI7QUFDQSxPQUFLcmMsWUFBTCxHQUFvQixJQUFJaEIsYUFBSixDQUFrQixJQUFsQixDQUFwQjtBQUNBLE9BQUtrcEIsZ0JBQUwsR0FBd0IsS0FBeEI7QUFDQSxPQUFLM25CLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxPQUFLa25CLFdBQUwsR0FBbUIsS0FBbkI7O0FBRUEsTUFBSUEsZUFBZSxJQUFuQixFQUF5QjtBQUN2QixTQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEO0FBQ0Y7O0FBRURqb0IsT0FBTzJvQixXQUFQLEdBQXFCLENBQXJCOztBQUVBM29CLE9BQU9oQixTQUFQLEdBQW1CQyxPQUFPQyxNQUFQLENBQWUwVixRQUFRNVYsU0FBdkIsQ0FBbkI7O0FBRUFnQixPQUFPaEIsU0FBUCxDQUFpQjhPLGVBQWpCLEdBQW1DLFlBQVk7QUFDN0MsU0FBTyxLQUFLdE4sWUFBWjtBQUNELENBRkQ7O0FBSUFSLE9BQU9oQixTQUFQLENBQWlCdUUsV0FBakIsR0FBK0IsWUFBWTtBQUN6QyxTQUFPLEtBQUsvQyxZQUFMLENBQWtCK0MsV0FBbEIsRUFBUDtBQUNELENBRkQ7O0FBSUF2RCxPQUFPaEIsU0FBUCxDQUFpQnNJLFdBQWpCLEdBQStCLFlBQVk7QUFDekMsU0FBTyxLQUFLOUcsWUFBTCxDQUFrQjhHLFdBQWxCLEVBQVA7QUFDRCxDQUZEOztBQUlBdEgsT0FBT2hCLFNBQVAsQ0FBaUIwWSw2QkFBakIsR0FBaUQsWUFBWTtBQUMzRCxTQUFPLEtBQUtsWCxZQUFMLENBQWtCa1gsNkJBQWxCLEVBQVA7QUFDRCxDQUZEOztBQUlBMVgsT0FBT2hCLFNBQVAsQ0FBaUJzQixlQUFqQixHQUFtQyxZQUFZO0FBQzdDLE1BQUlDLEtBQUssSUFBSWYsYUFBSixDQUFrQixJQUFsQixDQUFUO0FBQ0EsT0FBS2dCLFlBQUwsR0FBb0JELEVBQXBCO0FBQ0EsU0FBT0EsRUFBUDtBQUNELENBSkQ7O0FBTUFQLE9BQU9oQixTQUFQLENBQWlCeUIsUUFBakIsR0FBNEIsVUFBVWxCLE1BQVYsRUFDNUI7QUFDRSxTQUFPLElBQUlKLE1BQUosQ0FBVyxJQUFYLEVBQWlCLEtBQUtxQixZQUF0QixFQUFvQ2pCLE1BQXBDLENBQVA7QUFDRCxDQUhEOztBQUtBUyxPQUFPaEIsU0FBUCxDQUFpQjBCLE9BQWpCLEdBQTJCLFVBQVVDLEtBQVYsRUFDM0I7QUFDRSxTQUFPLElBQUk0YixLQUFKLENBQVUsS0FBSy9iLFlBQWYsRUFBNkJHLEtBQTdCLENBQVA7QUFDRCxDQUhEOztBQUtBWCxPQUFPaEIsU0FBUCxDQUFpQjRCLE9BQWpCLEdBQTJCLFVBQVU5QixLQUFWLEVBQzNCO0FBQ0UsU0FBTyxJQUFJd2QsS0FBSixDQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0J4ZCxLQUF0QixDQUFQO0FBQ0QsQ0FIRDs7QUFLQWtCLE9BQU9oQixTQUFQLENBQWlCNHBCLGtCQUFqQixHQUFzQyxZQUFXO0FBQy9DLFNBQVEsS0FBS3BvQixZQUFMLENBQWtCbUMsT0FBbEIsTUFBK0IsSUFBaEMsSUFDSSxLQUFLbkMsWUFBTCxDQUFrQm1DLE9BQWxCLEdBQTRCc0UsUUFBNUIsR0FBdUNoRSxNQUF2QyxJQUFpRCxDQURyRCxJQUVJLEtBQUt6QyxZQUFMLENBQWtCc2xCLG1CQUFsQixFQUZYO0FBR0QsQ0FKRDs7QUFNQTlsQixPQUFPaEIsU0FBUCxDQUFpQjZwQixTQUFqQixHQUE2QixZQUM3QjtBQUNFLE9BQUtILGdCQUFMLEdBQXdCLEtBQXhCOztBQUVBLE1BQUksS0FBS25XLGVBQVQsRUFBMEI7QUFDeEIsU0FBS0EsZUFBTDtBQUNEOztBQUVELE9BQUsxUixjQUFMO0FBQ0EsTUFBSWlvQixtQkFBSjs7QUFFQSxNQUFJLEtBQUtGLGtCQUFMLEVBQUosRUFDQTtBQUNFRSwwQkFBc0IsS0FBdEI7QUFDRCxHQUhELE1BS0E7QUFDRUEsMEJBQXNCLEtBQUtwcEIsTUFBTCxFQUF0QjtBQUNEOztBQUVELE1BQUlHLGdCQUFnQjBHLE9BQWhCLEtBQTRCLFFBQWhDLEVBQTBDO0FBQ3hDO0FBQ0E7QUFDQSxXQUFPLEtBQVA7QUFDRDs7QUFFRCxNQUFJdWlCLG1CQUFKLEVBQ0E7QUFDRSxRQUFJLENBQUMsS0FBSy9uQixXQUFWLEVBQ0E7QUFDRSxXQUFLZ29CLFlBQUw7QUFDRDtBQUNGOztBQUVELE1BQUksS0FBS3ZXLGdCQUFULEVBQTJCO0FBQ3pCLFNBQUtBLGdCQUFMO0FBQ0Q7O0FBRUQsT0FBS2tXLGdCQUFMLEdBQXdCLElBQXhCOztBQUVBLFNBQU9JLG1CQUFQO0FBQ0QsQ0F6Q0Q7O0FBMkNBOzs7QUFHQTlvQixPQUFPaEIsU0FBUCxDQUFpQitwQixZQUFqQixHQUFnQyxZQUNoQztBQUNFO0FBQ0E7QUFDQSxNQUFHLENBQUMsS0FBS2ptQixXQUFULEVBQXFCO0FBQ25CLFNBQUttRyxTQUFMO0FBQ0Q7QUFDRCxPQUFLaVIsTUFBTDtBQUNELENBUkQ7O0FBVUE7Ozs7QUFJQWxhLE9BQU9oQixTQUFQLENBQWlCZ3FCLE9BQWpCLEdBQTJCLFlBQVk7QUFDckM7QUFDQSxNQUFJLEtBQUtqbkIsbUJBQVQsRUFDQTtBQUNFLFNBQUtrbkIsOEJBQUw7O0FBRUE7QUFDQSxTQUFLem9CLFlBQUwsQ0FBa0IwQixhQUFsQjtBQUNEOztBQUVEO0FBQ0E7QUFDQSxNQUFJLENBQUMsS0FBSytsQixXQUFWLEVBQ0E7QUFDRTtBQUNBLFFBQUl4Z0IsSUFBSjtBQUNBLFFBQUl5TyxXQUFXLEtBQUsxVixZQUFMLENBQWtCOEcsV0FBbEIsRUFBZjtBQUNBLFNBQUssSUFBSTFCLElBQUksQ0FBYixFQUFnQkEsSUFBSXNRLFNBQVNqVCxNQUE3QixFQUFxQzJDLEdBQXJDLEVBQ0E7QUFDRTZCLGFBQU95TyxTQUFTdFEsQ0FBVCxDQUFQO0FBQ047QUFDSzs7QUFFRDtBQUNBLFFBQUlzQixJQUFKO0FBQ0EsUUFBSXFKLFFBQVEsS0FBSy9QLFlBQUwsQ0FBa0JtQyxPQUFsQixHQUE0QnNFLFFBQTVCLEVBQVo7QUFDQSxTQUFLLElBQUlyQixJQUFJLENBQWIsRUFBZ0JBLElBQUkySyxNQUFNdE4sTUFBMUIsRUFBa0MyQyxHQUFsQyxFQUNBO0FBQ0VzQixhQUFPcUosTUFBTTNLLENBQU4sQ0FBUDtBQUNOO0FBQ0s7O0FBRUQ7QUFDQSxTQUFLc1UsTUFBTCxDQUFZLEtBQUsxWixZQUFMLENBQWtCbUMsT0FBbEIsRUFBWjtBQUNEO0FBQ0YsQ0FuQ0Q7O0FBcUNBM0MsT0FBT2hCLFNBQVAsQ0FBaUJrYixNQUFqQixHQUEwQixVQUFVcUQsR0FBVixFQUFlO0FBQ3ZDLE1BQUlBLE9BQU8sSUFBWCxFQUFpQjtBQUNmLFNBQUt5TCxPQUFMO0FBQ0QsR0FGRCxNQUdLLElBQUl6TCxlQUFlaEIsS0FBbkIsRUFBMEI7QUFDN0IsUUFBSXJWLE9BQU9xVyxHQUFYO0FBQ0EsUUFBSXJXLEtBQUs4RyxRQUFMLE1BQW1CLElBQXZCLEVBQ0E7QUFDRTtBQUNBLFVBQUl1QyxRQUFRckosS0FBSzhHLFFBQUwsR0FBZ0IvRyxRQUFoQixFQUFaO0FBQ0EsV0FBSyxJQUFJckIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJMkssTUFBTXROLE1BQTFCLEVBQWtDMkMsR0FBbEMsRUFDQTtBQUNFc1UsZUFBTzNKLE1BQU0zSyxDQUFOLENBQVA7QUFDRDtBQUNGOztBQUVEO0FBQ0E7QUFDQTtBQUNBLFFBQUlzQixLQUFLK2EsWUFBTCxJQUFxQixJQUF6QixFQUNBO0FBQ0U7QUFDQSxVQUFJdGhCLFFBQVF1RyxLQUFLK2EsWUFBakI7O0FBRUE7QUFDQXRoQixZQUFNdVosTUFBTixDQUFhaFQsSUFBYjtBQUNEO0FBQ0YsR0F2QkksTUF3QkEsSUFBSXFXLGVBQWVqQixLQUFuQixFQUEwQjtBQUM3QixRQUFJN1UsT0FBTzhWLEdBQVg7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBSTlWLEtBQUt3YSxZQUFMLElBQXFCLElBQXpCLEVBQ0E7QUFDRTtBQUNBLFVBQUluakIsUUFBUTJJLEtBQUt3YSxZQUFqQjs7QUFFQTtBQUNBbmpCLFlBQU1vYixNQUFOLENBQWF6UyxJQUFiO0FBQ0Q7QUFDRixHQWRJLE1BZUEsSUFBSThWLGVBQWVwZSxNQUFuQixFQUEyQjtBQUM5QixRQUFJdUgsUUFBUTZXLEdBQVo7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBSTdXLE1BQU11YixZQUFOLElBQXNCLElBQTFCLEVBQ0E7QUFDRTtBQUNBLFVBQUkxaUIsU0FBU21ILE1BQU11YixZQUFuQjs7QUFFQTtBQUNBMWlCLGFBQU8yYSxNQUFQLENBQWN4VCxLQUFkO0FBQ0Q7QUFDRjtBQUNGLENBMUREOztBQTREQTs7OztBQUlBMUcsT0FBT2hCLFNBQVAsQ0FBaUI2QixjQUFqQixHQUFrQyxZQUFZO0FBQzVDLE1BQUksQ0FBQyxLQUFLRSxXQUFWLEVBQ0E7QUFDRSxTQUFLeVUsYUFBTCxHQUFxQjNWLGdCQUFnQnFvQixlQUFyQztBQUNBLFNBQUtqTyxxQkFBTCxHQUE2QnBhLGdCQUFnQnlvQiwrQkFBN0M7QUFDQSxTQUFLN2pCLGVBQUwsR0FBdUI1RSxnQkFBZ0Iwb0Isd0JBQXZDO0FBQ0EsU0FBS0gsaUJBQUwsR0FBeUJ2b0IsZ0JBQWdCd29CLDJCQUF6QztBQUNBLFNBQUt2bEIsV0FBTCxHQUFtQmpELGdCQUFnQnNvQixtQkFBbkM7QUFDQSxTQUFLcG1CLG1CQUFMLEdBQTJCbEMsZ0JBQWdCbUMsOEJBQTNDO0FBQ0EsU0FBSytWLG9CQUFMLEdBQTRCbFksZ0JBQWdCMm9CLCtCQUE1QztBQUNEOztBQUVELE1BQUksS0FBS3ZPLHFCQUFULEVBQ0E7QUFDRSxTQUFLbU8saUJBQUwsR0FBeUIsS0FBekI7QUFDRDtBQUNGLENBaEJEOztBQWtCQXBvQixPQUFPaEIsU0FBUCxDQUFpQmlLLFNBQWpCLEdBQTZCLFVBQVVpZ0IsVUFBVixFQUFzQjtBQUNqRCxNQUFJQSxjQUFjaGMsU0FBbEIsRUFBNkI7QUFDM0IsU0FBS2pFLFNBQUwsQ0FBZSxJQUFJbEosTUFBSixDQUFXLENBQVgsRUFBYyxDQUFkLENBQWY7QUFDRCxHQUZELE1BR0s7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFJOG5CLFFBQVEsSUFBSTFuQixTQUFKLEVBQVo7QUFDQSxRQUFJNG5CLFVBQVUsS0FBS3ZuQixZQUFMLENBQWtCbUMsT0FBbEIsR0FBNEI0Z0IsYUFBNUIsRUFBZDs7QUFFQSxRQUFJd0UsV0FBVyxJQUFmLEVBQ0E7QUFDRUYsWUFBTTlkLFlBQU4sQ0FBbUJtZixXQUFXdmxCLENBQTlCO0FBQ0Fra0IsWUFBTTdkLFlBQU4sQ0FBbUJrZixXQUFXbGpCLENBQTlCOztBQUVBNmhCLFlBQU1sZSxhQUFOLENBQW9Cb2UsUUFBUXBrQixDQUE1QjtBQUNBa2tCLFlBQU1oZSxhQUFOLENBQW9Ca2UsUUFBUS9oQixDQUE1Qjs7QUFFQSxVQUFJdUssUUFBUSxLQUFLaE4sV0FBTCxFQUFaO0FBQ0EsVUFBSTJELElBQUo7O0FBRUEsV0FBSyxJQUFJdEIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJMkssTUFBTXROLE1BQTFCLEVBQWtDMkMsR0FBbEMsRUFDQTtBQUNFc0IsZUFBT3FKLE1BQU0zSyxDQUFOLENBQVA7QUFDQXNCLGFBQUsrQixTQUFMLENBQWU0ZSxLQUFmO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsQ0EvQkQ7O0FBaUNBN25CLE9BQU9oQixTQUFQLENBQWlCNEUscUJBQWpCLEdBQXlDLFVBQVU4QyxLQUFWLEVBQWlCOztBQUV4RCxNQUFJQSxTQUFTd0csU0FBYixFQUF3QjtBQUN0QjtBQUNBLFNBQUt0SixxQkFBTCxDQUEyQixLQUFLa0ssZUFBTCxHQUF1Qm5MLE9BQXZCLEVBQTNCO0FBQ0EsU0FBS21MLGVBQUwsR0FBdUJuTCxPQUF2QixHQUFpQ29DLFlBQWpDLENBQThDLElBQTlDO0FBQ0QsR0FKRCxNQUtLO0FBQ0gsUUFBSStMLEtBQUo7QUFDQSxRQUFJeEIsVUFBSjs7QUFFQSxRQUFJaUIsUUFBUTdKLE1BQU1PLFFBQU4sRUFBWjtBQUNBLFNBQUssSUFBSXJCLElBQUksQ0FBYixFQUFnQkEsSUFBSTJLLE1BQU10TixNQUExQixFQUFrQzJDLEdBQWxDLEVBQ0E7QUFDRWtMLGNBQVFQLE1BQU0zSyxDQUFOLENBQVI7QUFDQTBKLG1CQUFhd0IsTUFBTTlDLFFBQU4sRUFBYjs7QUFFQSxVQUFJc0IsY0FBYyxJQUFsQixFQUNBO0FBQ0V3QixjQUFNa1csT0FBTjtBQUNELE9BSEQsTUFJSyxJQUFJMVgsV0FBV3JJLFFBQVgsR0FBc0JoRSxNQUF0QixJQUFnQyxDQUFwQyxFQUNMO0FBQ0U2TixjQUFNa1csT0FBTjtBQUNELE9BSEksTUFLTDtBQUNFLGFBQUtwakIscUJBQUwsQ0FBMkIwTCxVQUEzQjtBQUNBd0IsY0FBTS9MLFlBQU47QUFDRDtBQUNGO0FBQ0Y7QUFDRixDQWhDRDs7QUFrQ0E7Ozs7OztBQU1BL0UsT0FBT2hCLFNBQVAsQ0FBaUJnRSxhQUFqQixHQUFpQyxZQUNqQztBQUNFLE1BQUltbUIsYUFBYSxFQUFqQjtBQUNBLE1BQUlDLFdBQVcsSUFBZjs7QUFFQTtBQUNBO0FBQ0EsTUFBSS9sQixXQUFXLEtBQUs3QyxZQUFMLENBQWtCbUMsT0FBbEIsR0FBNEJzRSxRQUE1QixFQUFmOztBQUVBO0FBQ0EsTUFBSW9pQixTQUFTLElBQWI7O0FBRUEsT0FBSyxJQUFJempCLElBQUksQ0FBYixFQUFnQkEsSUFBSXZDLFNBQVNKLE1BQTdCLEVBQXFDMkMsR0FBckMsRUFDQTtBQUNFLFFBQUl2QyxTQUFTdUMsQ0FBVCxFQUFZb0ksUUFBWixNQUEwQixJQUE5QixFQUNBO0FBQ0VxYixlQUFTLEtBQVQ7QUFDRDtBQUNGOztBQUVEO0FBQ0EsTUFBSSxDQUFDQSxNQUFMLEVBQ0E7QUFDRSxXQUFPRixVQUFQO0FBQ0Q7O0FBRUQ7O0FBRUEsTUFBSTVoQixVQUFVLElBQUlDLE9BQUosRUFBZDtBQUNBLE1BQUl1YyxjQUFjLEVBQWxCO0FBQ0EsTUFBSXVGLFVBQVUsSUFBSXpNLE9BQUosRUFBZDtBQUNBLE1BQUkwTSxtQkFBbUIsRUFBdkI7O0FBRUFBLHFCQUFtQkEsaUJBQWlCdmlCLE1BQWpCLENBQXdCM0QsUUFBeEIsQ0FBbkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQU9rbUIsaUJBQWlCdG1CLE1BQWpCLEdBQTBCLENBQTFCLElBQStCbW1CLFFBQXRDLEVBQ0E7QUFDRXJGLGdCQUFZamMsSUFBWixDQUFpQnloQixpQkFBaUIsQ0FBakIsQ0FBakI7O0FBRUE7QUFDQTtBQUNBLFdBQU94RixZQUFZOWdCLE1BQVosR0FBcUIsQ0FBckIsSUFBMEJtbUIsUUFBakMsRUFDQTtBQUNFO0FBQ0EsVUFBSXBGLGNBQWNELFlBQVksQ0FBWixDQUFsQjtBQUNBQSxrQkFBWW5ZLE1BQVosQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEI7QUFDQXJFLGNBQVFTLEdBQVIsQ0FBWWdjLFdBQVo7O0FBRUE7QUFDQSxVQUFJNVksZ0JBQWdCNFksWUFBWTNZLFFBQVosRUFBcEI7O0FBRUEsV0FBSyxJQUFJekYsSUFBSSxDQUFiLEVBQWdCQSxJQUFJd0YsY0FBY25JLE1BQWxDLEVBQTBDMkMsR0FBMUMsRUFDQTtBQUNFLFlBQUlxRyxrQkFDSWIsY0FBY3hGLENBQWQsRUFBaUJzRyxXQUFqQixDQUE2QjhYLFdBQTdCLENBRFI7O0FBR0E7QUFDQSxZQUFJc0YsUUFBUWxNLEdBQVIsQ0FBWTRHLFdBQVosS0FBNEIvWCxlQUFoQyxFQUNBO0FBQ0U7QUFDQSxjQUFJLENBQUMxRSxRQUFRRyxRQUFSLENBQWlCdUUsZUFBakIsQ0FBTCxFQUNBO0FBQ0U4WCx3QkFBWWpjLElBQVosQ0FBaUJtRSxlQUFqQjtBQUNBcWQsb0JBQVF2TSxHQUFSLENBQVk5USxlQUFaLEVBQTZCK1gsV0FBN0I7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBUkEsZUFVQTtBQUNFb0YseUJBQVcsS0FBWDtBQUNBO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQ7QUFDQTtBQUNBLFFBQUksQ0FBQ0EsUUFBTCxFQUNBO0FBQ0VELG1CQUFhLEVBQWI7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQU5BLFNBUUE7QUFDRSxZQUFJeGQsT0FBTyxFQUFYO0FBQ0FwRSxnQkFBUW1XLFFBQVIsQ0FBaUIvUixJQUFqQjtBQUNBd2QsbUJBQVdyaEIsSUFBWCxDQUFnQjZELElBQWhCO0FBQ0E7QUFDQTtBQUNBLGFBQUssSUFBSS9GLElBQUksQ0FBYixFQUFnQkEsSUFBSStGLEtBQUsxSSxNQUF6QixFQUFpQzJDLEdBQWpDLEVBQXNDO0FBQ3BDLGNBQUlxWCxRQUFRdFIsS0FBSy9GLENBQUwsQ0FBWjtBQUNBLGNBQUlpRyxRQUFRMGQsaUJBQWlCemQsT0FBakIsQ0FBeUJtUixLQUF6QixDQUFaO0FBQ0EsY0FBSXBSLFFBQVEsQ0FBQyxDQUFiLEVBQWdCO0FBQ2QwZCw2QkFBaUIzZCxNQUFqQixDQUF3QkMsS0FBeEIsRUFBK0IsQ0FBL0I7QUFDRDtBQUNGO0FBQ0R0RSxrQkFBVSxJQUFJQyxPQUFKLEVBQVY7QUFDQThoQixrQkFBVSxJQUFJek0sT0FBSixFQUFWO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPc00sVUFBUDtBQUNELENBL0dEOztBQWlIQTs7Ozs7QUFLQW5wQixPQUFPaEIsU0FBUCxDQUFpQitJLDZCQUFqQixHQUFpRCxVQUFVTixJQUFWLEVBQ2pEO0FBQ0UsTUFBSStoQixhQUFhLEVBQWpCO0FBQ0EsTUFBSUMsT0FBT2hpQixLQUFLN0ksTUFBaEI7O0FBRUEsTUFBSThILFFBQVEsS0FBS2xHLFlBQUwsQ0FBa0JpbEIsd0JBQWxCLENBQTJDaGUsS0FBSzdJLE1BQWhELEVBQXdENkksS0FBSzVJLE1BQTdELENBQVo7O0FBRUEsT0FBSyxJQUFJK0csSUFBSSxDQUFiLEVBQWdCQSxJQUFJNkIsS0FBS3lhLFVBQUwsQ0FBZ0JqZixNQUFwQyxFQUE0QzJDLEdBQTVDLEVBQ0E7QUFDRTtBQUNBLFFBQUk4akIsWUFBWSxLQUFLaHBCLE9BQUwsQ0FBYSxJQUFiLENBQWhCO0FBQ0FncEIsY0FBVXhELE9BQVYsQ0FBa0IsSUFBSXBtQixLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsQ0FBbEIsRUFBbUMsSUFBSTZwQixTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixDQUFuQzs7QUFFQWpqQixVQUFNc0IsR0FBTixDQUFVMGhCLFNBQVY7O0FBRUE7QUFDQSxRQUFJRSxZQUFZLEtBQUtocEIsT0FBTCxDQUFhLElBQWIsQ0FBaEI7QUFDQSxTQUFLSixZQUFMLENBQWtCd0gsR0FBbEIsQ0FBc0I0aEIsU0FBdEIsRUFBaUNILElBQWpDLEVBQXVDQyxTQUF2Qzs7QUFFQUYsZUFBV3hoQixHQUFYLENBQWUwaEIsU0FBZjtBQUNBRCxXQUFPQyxTQUFQO0FBQ0Q7O0FBRUQsTUFBSUUsWUFBWSxLQUFLaHBCLE9BQUwsQ0FBYSxJQUFiLENBQWhCO0FBQ0EsT0FBS0osWUFBTCxDQUFrQndILEdBQWxCLENBQXNCNGhCLFNBQXRCLEVBQWlDSCxJQUFqQyxFQUF1Q2hpQixLQUFLNUksTUFBNUM7O0FBRUEsT0FBSzRwQixnQkFBTCxDQUFzQjFMLEdBQXRCLENBQTBCdFYsSUFBMUIsRUFBZ0MraEIsVUFBaEM7O0FBRUE7QUFDQSxNQUFJL2hCLEtBQUsyTyxZQUFMLEVBQUosRUFDQTtBQUNFLFNBQUs1VixZQUFMLENBQWtCeU4sTUFBbEIsQ0FBeUJ4RyxJQUF6QjtBQUNEO0FBQ0Q7QUFKQSxPQU1BO0FBQ0VmLFlBQU11SCxNQUFOLENBQWF4RyxJQUFiO0FBQ0Q7O0FBRUQsU0FBTytoQixVQUFQO0FBQ0QsQ0F4Q0Q7O0FBMENBOzs7O0FBSUF4cEIsT0FBT2hCLFNBQVAsQ0FBaUJpcUIsOEJBQWpCLEdBQWtELFlBQ2xEO0FBQ0UsTUFBSTVoQixRQUFRLEVBQVo7QUFDQUEsVUFBUUEsTUFBTUwsTUFBTixDQUFhLEtBQUt4RyxZQUFMLENBQWtCOEcsV0FBbEIsRUFBYixDQUFSO0FBQ0FELFVBQVEsS0FBS29oQixnQkFBTCxDQUFzQnBMLE1BQXRCLEdBQStCclcsTUFBL0IsQ0FBc0NLLEtBQXRDLENBQVI7O0FBRUEsT0FBSyxJQUFJYyxJQUFJLENBQWIsRUFBZ0JBLElBQUlkLE1BQU1wRSxNQUExQixFQUFrQ2tGLEdBQWxDLEVBQ0E7QUFDRSxRQUFJMGhCLFFBQVF4aUIsTUFBTWMsQ0FBTixDQUFaOztBQUVBLFFBQUkwaEIsTUFBTTNILFVBQU4sQ0FBaUJqZixNQUFqQixHQUEwQixDQUE5QixFQUNBO0FBQ0UsVUFBSTZtQixPQUFPLEtBQUtyQixnQkFBTCxDQUFzQnJMLEdBQXRCLENBQTBCeU0sS0FBMUIsQ0FBWDs7QUFFQSxXQUFLLElBQUlqa0IsSUFBSSxDQUFiLEVBQWdCQSxJQUFJa2tCLEtBQUs3bUIsTUFBekIsRUFBaUMyQyxHQUFqQyxFQUNBO0FBQ0UsWUFBSThqQixZQUFZSSxLQUFLbGtCLENBQUwsQ0FBaEI7QUFDQSxZQUFJa1AsSUFBSSxJQUFJL1UsTUFBSixDQUFXMnBCLFVBQVUzakIsVUFBVixFQUFYLEVBQ0EyakIsVUFBVXpqQixVQUFWLEVBREEsQ0FBUjs7QUFHQTtBQUNBLFlBQUk4akIsTUFBTUYsTUFBTTNILFVBQU4sQ0FBaUI5RSxHQUFqQixDQUFxQnhYLENBQXJCLENBQVY7QUFDQW1rQixZQUFJcG1CLENBQUosR0FBUW1SLEVBQUVuUixDQUFWO0FBQ0FvbUIsWUFBSS9qQixDQUFKLEdBQVE4TyxFQUFFOU8sQ0FBVjs7QUFFQTtBQUNBO0FBQ0EwakIsa0JBQVVsUyxRQUFWLEdBQXFCdkosTUFBckIsQ0FBNEJ5YixTQUE1QjtBQUNEOztBQUVEO0FBQ0EsV0FBS2xwQixZQUFMLENBQWtCd0gsR0FBbEIsQ0FBc0I2aEIsS0FBdEIsRUFBNkJBLE1BQU1qckIsTUFBbkMsRUFBMkNpckIsTUFBTWhyQixNQUFqRDtBQUNEO0FBQ0Y7QUFDRixDQWxDRDs7QUFvQ0FtQixPQUFPaUosU0FBUCxHQUFtQixVQUFVK2dCLFdBQVYsRUFBdUJDLFlBQXZCLEVBQXFDQyxNQUFyQyxFQUE2Q0MsTUFBN0MsRUFBcUQ7QUFDdEUsTUFBSUQsVUFBVWhkLFNBQVYsSUFBdUJpZCxVQUFVamQsU0FBckMsRUFBZ0Q7QUFDOUMsUUFBSStQLFFBQVFnTixZQUFaOztBQUVBLFFBQUlELGVBQWUsRUFBbkIsRUFDQTtBQUNFLFVBQUlJLFdBQVdILGVBQWVDLE1BQTlCO0FBQ0FqTixlQUFVLENBQUNnTixlQUFlRyxRQUFoQixJQUE0QixFQUE3QixJQUFvQyxLQUFLSixXQUF6QyxDQUFUO0FBQ0QsS0FKRCxNQU1BO0FBQ0UsVUFBSUssV0FBV0osZUFBZUUsTUFBOUI7QUFDQWxOLGVBQVUsQ0FBQ29OLFdBQVdKLFlBQVosSUFBNEIsRUFBN0IsSUFBb0NELGNBQWMsRUFBbEQsQ0FBVDtBQUNEOztBQUVELFdBQU8vTSxLQUFQO0FBQ0QsR0FmRCxNQWdCSztBQUNILFFBQUlxTixDQUFKLEVBQU9DLENBQVA7O0FBRUEsUUFBSVAsZUFBZSxFQUFuQixFQUNBO0FBQ0VNLFVBQUksTUFBTUwsWUFBTixHQUFxQixLQUF6QjtBQUNBTSxVQUFJTixlQUFlLElBQW5CO0FBQ0QsS0FKRCxNQU1BO0FBQ0VLLFVBQUksTUFBTUwsWUFBTixHQUFxQixJQUF6QjtBQUNBTSxVQUFJLENBQUMsQ0FBRCxHQUFLTixZQUFUO0FBQ0Q7O0FBRUQsV0FBUUssSUFBSU4sV0FBSixHQUFrQk8sQ0FBMUI7QUFDRDtBQUNGLENBakNEOztBQW1DQTs7OztBQUlBdnFCLE9BQU84SSxnQkFBUCxHQUEwQixVQUFVeUgsS0FBVixFQUMxQjtBQUNFLE1BQUlqSSxPQUFPLEVBQVg7QUFDQUEsU0FBT0EsS0FBS3RCLE1BQUwsQ0FBWXVKLEtBQVosQ0FBUDs7QUFFQSxNQUFJaWEsZUFBZSxFQUFuQjtBQUNBLE1BQUlDLG1CQUFtQixJQUFJNU4sT0FBSixFQUF2QjtBQUNBLE1BQUk2TixjQUFjLEtBQWxCO0FBQ0EsTUFBSTdoQixhQUFhLElBQWpCOztBQUVBLE1BQUlQLEtBQUtyRixNQUFMLElBQWUsQ0FBZixJQUFvQnFGLEtBQUtyRixNQUFMLElBQWUsQ0FBdkMsRUFDQTtBQUNFeW5CLGtCQUFjLElBQWQ7QUFDQTdoQixpQkFBYVAsS0FBSyxDQUFMLENBQWI7QUFDRDs7QUFFRCxPQUFLLElBQUkxQyxJQUFJLENBQWIsRUFBZ0JBLElBQUkwQyxLQUFLckYsTUFBekIsRUFBaUMyQyxHQUFqQyxFQUNBO0FBQ0UsUUFBSXNCLE9BQU9vQixLQUFLMUMsQ0FBTCxDQUFYO0FBQ0EsUUFBSThKLFNBQVN4SSxLQUFLMGYsZ0JBQUwsR0FBd0IvZixJQUF4QixFQUFiO0FBQ0E0akIscUJBQWlCMU4sR0FBakIsQ0FBcUI3VixJQUFyQixFQUEyQkEsS0FBSzBmLGdCQUFMLEdBQXdCL2YsSUFBeEIsRUFBM0I7O0FBRUEsUUFBSTZJLFVBQVUsQ0FBZCxFQUNBO0FBQ0U4YSxtQkFBYTFpQixJQUFiLENBQWtCWixJQUFsQjtBQUNEO0FBQ0Y7O0FBRUQsTUFBSXlqQixXQUFXLEVBQWY7QUFDQUEsYUFBV0EsU0FBUzNqQixNQUFULENBQWdCd2pCLFlBQWhCLENBQVg7O0FBRUEsU0FBTyxDQUFDRSxXQUFSLEVBQ0E7QUFDRSxRQUFJRSxZQUFZLEVBQWhCO0FBQ0FBLGdCQUFZQSxVQUFVNWpCLE1BQVYsQ0FBaUIyakIsUUFBakIsQ0FBWjtBQUNBQSxlQUFXLEVBQVg7O0FBRUEsU0FBSyxJQUFJL2tCLElBQUksQ0FBYixFQUFnQkEsSUFBSTBDLEtBQUtyRixNQUF6QixFQUFpQzJDLEdBQWpDLEVBQ0E7QUFDRSxVQUFJc0IsT0FBT29CLEtBQUsxQyxDQUFMLENBQVg7O0FBRUEsVUFBSWlHLFFBQVF2RCxLQUFLd0QsT0FBTCxDQUFhNUUsSUFBYixDQUFaO0FBQ0EsVUFBSTJFLFNBQVMsQ0FBYixFQUFnQjtBQUNkdkQsYUFBS3NELE1BQUwsQ0FBWUMsS0FBWixFQUFtQixDQUFuQjtBQUNEOztBQUVELFVBQUlnZixhQUFhM2pCLEtBQUswZixnQkFBTCxFQUFqQjs7QUFFQTNuQixhQUFPb08sSUFBUCxDQUFZd2QsV0FBV3ZOLEdBQXZCLEVBQTRCaFEsT0FBNUIsQ0FBb0MsVUFBUzZDLENBQVQsRUFBWTtBQUM5QyxZQUFJMmEsWUFBWUQsV0FBV3ZOLEdBQVgsQ0FBZW5OLENBQWYsQ0FBaEI7QUFDQSxZQUFJcWEsYUFBYTFlLE9BQWIsQ0FBcUJnZixTQUFyQixJQUFrQyxDQUF0QyxFQUNBO0FBQ0UsY0FBSUMsY0FBY04saUJBQWlCck4sR0FBakIsQ0FBcUIwTixTQUFyQixDQUFsQjtBQUNBLGNBQUlFLFlBQVlELGNBQWMsQ0FBOUI7O0FBRUEsY0FBSUMsYUFBYSxDQUFqQixFQUNBO0FBQ0VMLHFCQUFTN2lCLElBQVQsQ0FBY2dqQixTQUFkO0FBQ0Q7O0FBRURMLDJCQUFpQjFOLEdBQWpCLENBQXFCK04sU0FBckIsRUFBZ0NFLFNBQWhDO0FBQ0Q7QUFDRixPQWREO0FBZUQ7O0FBRURSLG1CQUFlQSxhQUFheGpCLE1BQWIsQ0FBb0IyakIsUUFBcEIsQ0FBZjs7QUFFQSxRQUFJcmlCLEtBQUtyRixNQUFMLElBQWUsQ0FBZixJQUFvQnFGLEtBQUtyRixNQUFMLElBQWUsQ0FBdkMsRUFDQTtBQUNFeW5CLG9CQUFjLElBQWQ7QUFDQTdoQixtQkFBYVAsS0FBSyxDQUFMLENBQWI7QUFDRDtBQUNGOztBQUVELFNBQU9PLFVBQVA7QUFDRCxDQTNFRDs7QUE2RUE7Ozs7QUFJQTdJLE9BQU9oQixTQUFQLENBQWlCaXNCLGVBQWpCLEdBQW1DLFVBQVUxcUIsRUFBVixFQUNuQztBQUNFLE9BQUtDLFlBQUwsR0FBb0JELEVBQXBCO0FBQ0QsQ0FIRDs7QUFLQS9CLE9BQU9DLE9BQVAsR0FBaUJ1QixNQUFqQixDOzs7Ozs7Ozs7Ozs7OztBQ25xQkEsU0FBU0gsZUFBVCxHQUEyQixDQUMxQjs7QUFFRDs7O0FBR0FBLGdCQUFnQjZWLGFBQWhCLEdBQWdDLENBQWhDO0FBQ0E3VixnQkFBZ0Jxb0IsZUFBaEIsR0FBa0MsQ0FBbEM7QUFDQXJvQixnQkFBZ0I0VixhQUFoQixHQUFnQyxDQUFoQzs7QUFFQTs7O0FBR0E1VixnQkFBZ0JtQyw4QkFBaEIsR0FBaUQsS0FBakQ7QUFDQTtBQUNBbkMsZ0JBQWdCc29CLG1CQUFoQixHQUFzQyxLQUF0QztBQUNBdG9CLGdCQUFnQndvQiwyQkFBaEIsR0FBOEMsSUFBOUM7QUFDQXhvQixnQkFBZ0J5b0IsK0JBQWhCLEdBQWtELEtBQWxEO0FBQ0F6b0IsZ0JBQWdCMG9CLHdCQUFoQixHQUEyQyxFQUEzQztBQUNBMW9CLGdCQUFnQjJvQiwrQkFBaEIsR0FBa0QsS0FBbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTNvQixnQkFBZ0JpakIsb0JBQWhCLEdBQXVDLEVBQXZDOztBQUVBOzs7QUFHQWpqQixnQkFBZ0I0bkIsOEJBQWhCLEdBQWlELEtBQWpEOztBQUVBOzs7QUFHQTVuQixnQkFBZ0IyVyxnQkFBaEIsR0FBbUMsRUFBbkM7O0FBRUE7OztBQUdBM1csZ0JBQWdCcXJCLHFCQUFoQixHQUF3Q3JyQixnQkFBZ0IyVyxnQkFBaEIsR0FBbUMsQ0FBM0U7O0FBRUE7Ozs7QUFJQTNXLGdCQUFnQmlrQix3QkFBaEIsR0FBMkMsRUFBM0M7O0FBRUE7OztBQUdBamtCLGdCQUFnQndjLGVBQWhCLEdBQWtDLENBQWxDOztBQUVBOzs7QUFHQXhjLGdCQUFnQmlvQixjQUFoQixHQUFpQyxPQUFqQzs7QUFFQTs7O0FBR0Fqb0IsZ0JBQWdCdW5CLHNCQUFoQixHQUF5Q3ZuQixnQkFBZ0Jpb0IsY0FBaEIsR0FBaUMsSUFBMUU7O0FBRUE7OztBQUdBam9CLGdCQUFnQnFKLGNBQWhCLEdBQWlDLElBQWpDO0FBQ0FySixnQkFBZ0JzSixjQUFoQixHQUFpQyxHQUFqQzs7QUFFQTNLLE9BQU9DLE9BQVAsR0FBaUJvQixlQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUEsSUFBTXNyQixXQUFXLFNBQVhBLFFBQVc7QUFBQSxTQUFVLEVBQUVsTyxZQUFGLEVBQVMvSSxNQUFNLElBQWYsRUFBcUJ1VixNQUFNLElBQTNCLEVBQVY7QUFBQSxDQUFqQjs7QUFFQSxJQUFNemhCLE1BQU0sU0FBTkEsR0FBTSxDQUFFeWhCLElBQUYsRUFBUXZpQixJQUFSLEVBQWNnTixJQUFkLEVBQW9CNUwsSUFBcEIsRUFBOEI7QUFDeEMsTUFBSW1oQixTQUFTLElBQWIsRUFBbUI7QUFDakJBLFNBQUt2VixJQUFMLEdBQVloTixJQUFaO0FBQ0QsR0FGRCxNQUVPO0FBQ0xvQixTQUFLOGlCLElBQUwsR0FBWWxrQixJQUFaO0FBQ0Q7O0FBRUQsTUFBSWdOLFNBQVMsSUFBYixFQUFtQjtBQUNqQkEsU0FBS3VWLElBQUwsR0FBWXZpQixJQUFaO0FBQ0QsR0FGRCxNQUVPO0FBQ0xvQixTQUFLK2lCLElBQUwsR0FBWW5rQixJQUFaO0FBQ0Q7O0FBRURBLE9BQUt1aUIsSUFBTCxHQUFZQSxJQUFaO0FBQ0F2aUIsT0FBS2dOLElBQUwsR0FBWUEsSUFBWjs7QUFFQTVMLE9BQUtyRixNQUFMOztBQUVBLFNBQU9pRSxJQUFQO0FBQ0QsQ0FuQkQ7O0FBcUJBLElBQU0rRyxVQUFTLFNBQVRBLE9BQVMsQ0FBRS9HLElBQUYsRUFBUW9CLElBQVIsRUFBa0I7QUFBQSxNQUN6Qm1oQixJQUR5QixHQUNWdmlCLElBRFUsQ0FDekJ1aUIsSUFEeUI7QUFBQSxNQUNuQnZWLElBRG1CLEdBQ1ZoTixJQURVLENBQ25CZ04sSUFEbUI7OztBQUcvQixNQUFJdVYsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCQSxTQUFLdlYsSUFBTCxHQUFZQSxJQUFaO0FBQ0QsR0FGRCxNQUVPO0FBQ0w1TCxTQUFLOGlCLElBQUwsR0FBWWxYLElBQVo7QUFDRDs7QUFFRCxNQUFJQSxTQUFTLElBQWIsRUFBbUI7QUFDakJBLFNBQUt1VixJQUFMLEdBQVlBLElBQVo7QUFDRCxHQUZELE1BRU87QUFDTG5oQixTQUFLK2lCLElBQUwsR0FBWTVCLElBQVo7QUFDRDs7QUFFRHZpQixPQUFLdWlCLElBQUwsR0FBWXZpQixLQUFLZ04sSUFBTCxHQUFZLElBQXhCOztBQUVBNUwsT0FBS3JGLE1BQUw7O0FBRUEsU0FBT2lFLElBQVA7QUFDRCxDQXBCRDs7SUFzQk15YixVO0FBQ0osc0JBQWEySSxJQUFiLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLFNBQUtyb0IsTUFBTCxHQUFjLENBQWQ7QUFDQSxTQUFLbW9CLElBQUwsR0FBWSxJQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLElBQVo7O0FBRUEsUUFBSUMsUUFBUSxJQUFaLEVBQWtCO0FBQ2hCQSxXQUFLaGUsT0FBTCxDQUFjO0FBQUEsZUFBSyxNQUFLeEYsSUFBTCxDQUFVMFMsQ0FBVixDQUFMO0FBQUEsT0FBZDtBQUNEO0FBQ0Y7Ozs7MkJBRUs7QUFDSixhQUFPLEtBQUt2WCxNQUFaO0FBQ0Q7OztpQ0FFYXNvQixHLEVBQUtDLFMsRUFBVztBQUM1QixhQUFPeGpCLElBQUt3akIsVUFBVS9CLElBQWYsRUFBcUIwQixTQUFTSSxHQUFULENBQXJCLEVBQW9DQyxTQUFwQyxFQUErQyxJQUEvQyxDQUFQO0FBQ0Q7OztnQ0FFWUQsRyxFQUFLQyxTLEVBQVc7QUFDM0IsYUFBT3hqQixJQUFLd2pCLFNBQUwsRUFBZ0JMLFNBQVNJLEdBQVQsQ0FBaEIsRUFBK0JDLFVBQVV0WCxJQUF6QyxFQUErQyxJQUEvQyxDQUFQO0FBQ0Q7OztxQ0FFaUJ4VCxPLEVBQVM4cUIsUyxFQUFXO0FBQ3BDLGFBQU94akIsSUFBS3dqQixVQUFVL0IsSUFBZixFQUFxQi9vQixPQUFyQixFQUE4QjhxQixTQUE5QixFQUF5QyxJQUF6QyxDQUFQO0FBQ0Q7OztvQ0FFZ0I5cUIsTyxFQUFTOHFCLFMsRUFBVztBQUNuQyxhQUFPeGpCLElBQUt3akIsU0FBTCxFQUFnQjlxQixPQUFoQixFQUF5QjhxQixVQUFVdFgsSUFBbkMsRUFBeUMsSUFBekMsQ0FBUDtBQUNEOzs7eUJBRUtxWCxHLEVBQUs7QUFDVCxhQUFPdmpCLElBQUssS0FBS3FqQixJQUFWLEVBQWdCRixTQUFTSSxHQUFULENBQWhCLEVBQStCLElBQS9CLEVBQXFDLElBQXJDLENBQVA7QUFDRDs7OzRCQUVRQSxHLEVBQUs7QUFDWixhQUFPdmpCLElBQUssSUFBTCxFQUFXbWpCLFNBQVNJLEdBQVQsQ0FBWCxFQUEwQixLQUFLSCxJQUEvQixFQUFxQyxJQUFyQyxDQUFQO0FBQ0Q7OzsyQkFFT2xrQixJLEVBQU07QUFDWixhQUFPK0csUUFBUS9HLElBQVIsRUFBYyxJQUFkLENBQVA7QUFDRDs7OzBCQUVJO0FBQ0gsYUFBTytHLFFBQVEsS0FBS29kLElBQWIsRUFBbUIsSUFBbkIsRUFBMEJwTyxLQUFqQztBQUNEOzs7OEJBRVE7QUFDTixhQUFPaFAsUUFBUSxLQUFLb2QsSUFBYixFQUFtQixJQUFuQixDQUFQO0FBQ0Y7Ozs0QkFFTTtBQUNMLGFBQU9wZCxRQUFRLEtBQUttZCxJQUFiLEVBQW1CLElBQW5CLEVBQTBCbk8sS0FBakM7QUFDRDs7O2dDQUVVO0FBQ1QsYUFBT2hQLFFBQVEsS0FBS21kLElBQWIsRUFBbUIsSUFBbkIsQ0FBUDtBQUNEOzs7Ozs7QUFHSDVzQixPQUFPQyxPQUFQLEdBQWlCa2tCLFVBQWpCLEM7Ozs7Ozs7Ozs7Ozs7O0FDekdBOzs7QUFHQSxTQUFTN2lCLEtBQVQsQ0FBZTZELENBQWYsRUFBa0JxQyxDQUFsQixFQUFxQjhPLENBQXJCLEVBQXdCO0FBQ3RCLE9BQUtuUixDQUFMLEdBQVMsSUFBVDtBQUNBLE9BQUtxQyxDQUFMLEdBQVMsSUFBVDtBQUNBLE1BQUlyQyxLQUFLLElBQUwsSUFBYXFDLEtBQUssSUFBbEIsSUFBMEI4TyxLQUFLLElBQW5DLEVBQXlDO0FBQ3ZDLFNBQUtuUixDQUFMLEdBQVMsQ0FBVDtBQUNBLFNBQUtxQyxDQUFMLEdBQVMsQ0FBVDtBQUNELEdBSEQsTUFJSyxJQUFJLE9BQU9yQyxDQUFQLElBQVksUUFBWixJQUF3QixPQUFPcUMsQ0FBUCxJQUFZLFFBQXBDLElBQWdEOE8sS0FBSyxJQUF6RCxFQUErRDtBQUNsRSxTQUFLblIsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS3FDLENBQUwsR0FBU0EsQ0FBVDtBQUNELEdBSEksTUFJQSxJQUFJckMsRUFBRThuQixXQUFGLENBQWNDLElBQWQsSUFBc0IsT0FBdEIsSUFBaUMxbEIsS0FBSyxJQUF0QyxJQUE4QzhPLEtBQUssSUFBdkQsRUFBNkQ7QUFDaEVBLFFBQUluUixDQUFKO0FBQ0EsU0FBS0EsQ0FBTCxHQUFTbVIsRUFBRW5SLENBQVg7QUFDQSxTQUFLcUMsQ0FBTCxHQUFTOE8sRUFBRTlPLENBQVg7QUFDRDtBQUNGOztBQUVEbEcsTUFBTWQsU0FBTixDQUFnQitlLElBQWhCLEdBQXVCLFlBQVk7QUFDakMsU0FBTyxLQUFLcGEsQ0FBWjtBQUNELENBRkQ7O0FBSUE3RCxNQUFNZCxTQUFOLENBQWdCZ2YsSUFBaEIsR0FBdUIsWUFBWTtBQUNqQyxTQUFPLEtBQUtoWSxDQUFaO0FBQ0QsQ0FGRDs7QUFJQWxHLE1BQU1kLFNBQU4sQ0FBZ0JpbkIsV0FBaEIsR0FBOEIsWUFBWTtBQUN4QyxTQUFPLElBQUlubUIsS0FBSixDQUFVLEtBQUs2RCxDQUFmLEVBQWtCLEtBQUtxQyxDQUF2QixDQUFQO0FBQ0QsQ0FGRDs7QUFJQWxHLE1BQU1kLFNBQU4sQ0FBZ0J1bkIsV0FBaEIsR0FBOEIsVUFBVTVpQixDQUFWLEVBQWFxQyxDQUFiLEVBQWdCOE8sQ0FBaEIsRUFBbUI7QUFDL0MsTUFBSW5SLEVBQUU4bkIsV0FBRixDQUFjQyxJQUFkLElBQXNCLE9BQXRCLElBQWlDMWxCLEtBQUssSUFBdEMsSUFBOEM4TyxLQUFLLElBQXZELEVBQTZEO0FBQzNEQSxRQUFJblIsQ0FBSjtBQUNBLFNBQUs0aUIsV0FBTCxDQUFpQnpSLEVBQUVuUixDQUFuQixFQUFzQm1SLEVBQUU5TyxDQUF4QjtBQUNELEdBSEQsTUFJSyxJQUFJLE9BQU9yQyxDQUFQLElBQVksUUFBWixJQUF3QixPQUFPcUMsQ0FBUCxJQUFZLFFBQXBDLElBQWdEOE8sS0FBSyxJQUF6RCxFQUErRDtBQUNsRTtBQUNBLFFBQUl3RixTQUFTM1csQ0FBVCxLQUFlQSxDQUFmLElBQW9CMlcsU0FBU3RVLENBQVQsS0FBZUEsQ0FBdkMsRUFBMEM7QUFDeEMsV0FBSzRNLElBQUwsQ0FBVWpQLENBQVYsRUFBYXFDLENBQWI7QUFDRCxLQUZELE1BR0s7QUFDSCxXQUFLckMsQ0FBTCxHQUFTZSxLQUFLc0UsS0FBTCxDQUFXckYsSUFBSSxHQUFmLENBQVQ7QUFDQSxXQUFLcUMsQ0FBTCxHQUFTdEIsS0FBS3NFLEtBQUwsQ0FBV2hELElBQUksR0FBZixDQUFUO0FBQ0Q7QUFDRjtBQUNGLENBZkQ7O0FBaUJBbEcsTUFBTWQsU0FBTixDQUFnQjRULElBQWhCLEdBQXVCLFVBQVVqUCxDQUFWLEVBQWFxQyxDQUFiLEVBQWdCO0FBQ3JDLE9BQUtyQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxPQUFLcUMsQ0FBTCxHQUFTQSxDQUFUO0FBQ0QsQ0FIRDs7QUFLQWxHLE1BQU1kLFNBQU4sQ0FBZ0Iyc0IsU0FBaEIsR0FBNEIsVUFBVW5GLEVBQVYsRUFBY0MsRUFBZCxFQUFrQjtBQUM1QyxPQUFLOWlCLENBQUwsSUFBVTZpQixFQUFWO0FBQ0EsT0FBS3hnQixDQUFMLElBQVV5Z0IsRUFBVjtBQUNELENBSEQ7O0FBS0EzbUIsTUFBTWQsU0FBTixDQUFnQjRzQixNQUFoQixHQUF5QixVQUFVck8sR0FBVixFQUFlO0FBQ3RDLE1BQUlBLElBQUlrTyxXQUFKLENBQWdCQyxJQUFoQixJQUF3QixPQUE1QixFQUFxQztBQUNuQyxRQUFJRyxLQUFLdE8sR0FBVDtBQUNBLFdBQVEsS0FBSzVaLENBQUwsSUFBVWtvQixHQUFHbG9CLENBQWQsSUFBcUIsS0FBS3FDLENBQUwsSUFBVTZsQixHQUFHN2xCLENBQXpDO0FBQ0Q7QUFDRCxTQUFPLFFBQVF1WCxHQUFmO0FBQ0QsQ0FORDs7QUFRQXpkLE1BQU1kLFNBQU4sQ0FBZ0I4c0IsUUFBaEIsR0FBMkIsWUFBWTtBQUNyQyxTQUFPLElBQUloc0IsS0FBSixHQUFZMnJCLFdBQVosQ0FBd0JDLElBQXhCLEdBQStCLEtBQS9CLEdBQXVDLEtBQUsvbkIsQ0FBNUMsR0FBZ0QsS0FBaEQsR0FBd0QsS0FBS3FDLENBQTdELEdBQWlFLEdBQXhFO0FBQ0QsQ0FGRDs7QUFJQXhILE9BQU9DLE9BQVAsR0FBaUJxQixLQUFqQixDOzs7Ozs7Ozs7Ozs7OztBQ3hFQSxTQUFTQyxNQUFULENBQWdCNEQsQ0FBaEIsRUFBbUJxQyxDQUFuQixFQUFzQjtBQUNwQixNQUFJckMsS0FBSyxJQUFMLElBQWFxQyxLQUFLLElBQXRCLEVBQTRCO0FBQzFCLFNBQUtyQyxDQUFMLEdBQVMsQ0FBVDtBQUNBLFNBQUtxQyxDQUFMLEdBQVMsQ0FBVDtBQUNELEdBSEQsTUFHTztBQUNMLFNBQUtyQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLcUMsQ0FBTCxHQUFTQSxDQUFUO0FBQ0Q7QUFDRjs7QUFFRGpHLE9BQU9mLFNBQVAsQ0FBaUIrZSxJQUFqQixHQUF3QixZQUN4QjtBQUNFLFNBQU8sS0FBS3BhLENBQVo7QUFDRCxDQUhEOztBQUtBNUQsT0FBT2YsU0FBUCxDQUFpQmdmLElBQWpCLEdBQXdCLFlBQ3hCO0FBQ0UsU0FBTyxLQUFLaFksQ0FBWjtBQUNELENBSEQ7O0FBS0FqRyxPQUFPZixTQUFQLENBQWlCK3NCLElBQWpCLEdBQXdCLFVBQVVwb0IsQ0FBVixFQUN4QjtBQUNFLE9BQUtBLENBQUwsR0FBU0EsQ0FBVDtBQUNELENBSEQ7O0FBS0E1RCxPQUFPZixTQUFQLENBQWlCZ3RCLElBQWpCLEdBQXdCLFVBQVVobUIsQ0FBVixFQUN4QjtBQUNFLE9BQUtBLENBQUwsR0FBU0EsQ0FBVDtBQUNELENBSEQ7O0FBS0FqRyxPQUFPZixTQUFQLENBQWlCaXRCLGFBQWpCLEdBQWlDLFVBQVVKLEVBQVYsRUFDakM7QUFDRSxTQUFPLElBQUl0WCxVQUFKLENBQWUsS0FBSzVRLENBQUwsR0FBU2tvQixHQUFHbG9CLENBQTNCLEVBQThCLEtBQUtxQyxDQUFMLEdBQVM2bEIsR0FBRzdsQixDQUExQyxDQUFQO0FBQ0QsQ0FIRDs7QUFLQWpHLE9BQU9mLFNBQVAsQ0FBaUJrdEIsT0FBakIsR0FBMkIsWUFDM0I7QUFDRSxTQUFPLElBQUluc0IsTUFBSixDQUFXLEtBQUs0RCxDQUFoQixFQUFtQixLQUFLcUMsQ0FBeEIsQ0FBUDtBQUNELENBSEQ7O0FBS0FqRyxPQUFPZixTQUFQLENBQWlCMnNCLFNBQWpCLEdBQTZCLFVBQVVRLEdBQVYsRUFDN0I7QUFDRSxPQUFLeG9CLENBQUwsSUFBVXdvQixJQUFJaG1CLEtBQWQ7QUFDQSxPQUFLSCxDQUFMLElBQVVtbUIsSUFBSTlsQixNQUFkO0FBQ0EsU0FBTyxJQUFQO0FBQ0QsQ0FMRDs7QUFPQTdILE9BQU9DLE9BQVAsR0FBaUJzQixNQUFqQixDOzs7Ozs7Ozs7Ozs7OztBQy9DQSxTQUFTZ21CLFVBQVQsR0FBc0IsQ0FDckI7QUFDREEsV0FBV3FHLElBQVgsR0FBa0IsQ0FBbEI7QUFDQXJHLFdBQVdwaUIsQ0FBWCxHQUFlLENBQWY7O0FBRUFvaUIsV0FBV3VCLFVBQVgsR0FBd0IsWUFBWTtBQUNsQ3ZCLGFBQVdwaUIsQ0FBWCxHQUFlZSxLQUFLd0csR0FBTCxDQUFTNmEsV0FBV3FHLElBQVgsRUFBVCxJQUE4QixLQUE3QztBQUNBLFNBQU9yRyxXQUFXcGlCLENBQVgsR0FBZWUsS0FBS3NFLEtBQUwsQ0FBVytjLFdBQVdwaUIsQ0FBdEIsQ0FBdEI7QUFDRCxDQUhEOztBQUtBbkYsT0FBT0MsT0FBUCxHQUFpQnNuQixVQUFqQixDOzs7Ozs7Ozs7Ozs7OztBQ1ZBLFNBQVNyRCxVQUFULENBQW9CL2UsQ0FBcEIsRUFBdUJxQyxDQUF2QixFQUEwQkcsS0FBMUIsRUFBaUNFLE1BQWpDLEVBQXlDO0FBQ3ZDLE9BQUsxQyxDQUFMLEdBQVMsQ0FBVDtBQUNBLE9BQUtxQyxDQUFMLEdBQVMsQ0FBVDtBQUNBLE9BQUtHLEtBQUwsR0FBYSxDQUFiO0FBQ0EsT0FBS0UsTUFBTCxHQUFjLENBQWQ7O0FBRUEsTUFBSTFDLEtBQUssSUFBTCxJQUFhcUMsS0FBSyxJQUFsQixJQUEwQkcsU0FBUyxJQUFuQyxJQUEyQ0UsVUFBVSxJQUF6RCxFQUErRDtBQUM3RCxTQUFLMUMsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS3FDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtHLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtFLE1BQUwsR0FBY0EsTUFBZDtBQUNEO0FBQ0Y7O0FBRURxYyxXQUFXMWpCLFNBQVgsQ0FBcUIrZSxJQUFyQixHQUE0QixZQUM1QjtBQUNFLFNBQU8sS0FBS3BhLENBQVo7QUFDRCxDQUhEOztBQUtBK2UsV0FBVzFqQixTQUFYLENBQXFCK3NCLElBQXJCLEdBQTRCLFVBQVVwb0IsQ0FBVixFQUM1QjtBQUNFLE9BQUtBLENBQUwsR0FBU0EsQ0FBVDtBQUNELENBSEQ7O0FBS0ErZSxXQUFXMWpCLFNBQVgsQ0FBcUJnZixJQUFyQixHQUE0QixZQUM1QjtBQUNFLFNBQU8sS0FBS2hZLENBQVo7QUFDRCxDQUhEOztBQUtBMGMsV0FBVzFqQixTQUFYLENBQXFCZ3RCLElBQXJCLEdBQTRCLFVBQVVobUIsQ0FBVixFQUM1QjtBQUNFLE9BQUtBLENBQUwsR0FBU0EsQ0FBVDtBQUNELENBSEQ7O0FBS0EwYyxXQUFXMWpCLFNBQVgsQ0FBcUJ3VixRQUFyQixHQUFnQyxZQUNoQztBQUNFLFNBQU8sS0FBS3JPLEtBQVo7QUFDRCxDQUhEOztBQUtBdWMsV0FBVzFqQixTQUFYLENBQXFCeVYsUUFBckIsR0FBZ0MsVUFBVXRPLEtBQVYsRUFDaEM7QUFDRSxPQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRCxDQUhEOztBQUtBdWMsV0FBVzFqQixTQUFYLENBQXFCMFYsU0FBckIsR0FBaUMsWUFDakM7QUFDRSxTQUFPLEtBQUtyTyxNQUFaO0FBQ0QsQ0FIRDs7QUFLQXFjLFdBQVcxakIsU0FBWCxDQUFxQjJWLFNBQXJCLEdBQWlDLFVBQVV0TyxNQUFWLEVBQ2pDO0FBQ0UsT0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0QsQ0FIRDs7QUFLQXFjLFdBQVcxakIsU0FBWCxDQUFxQjJhLFFBQXJCLEdBQWdDLFlBQ2hDO0FBQ0UsU0FBTyxLQUFLaFcsQ0FBTCxHQUFTLEtBQUt3QyxLQUFyQjtBQUNELENBSEQ7O0FBS0F1YyxXQUFXMWpCLFNBQVgsQ0FBcUI4YSxTQUFyQixHQUFpQyxZQUNqQztBQUNFLFNBQU8sS0FBSzlULENBQUwsR0FBUyxLQUFLSyxNQUFyQjtBQUNELENBSEQ7O0FBS0FxYyxXQUFXMWpCLFNBQVgsQ0FBcUJnYSxVQUFyQixHQUFrQyxVQUFVc1IsQ0FBVixFQUNsQztBQUNFLE1BQUksS0FBSzNRLFFBQUwsS0FBa0IyUSxFQUFFM21CLENBQXhCLEVBQ0E7QUFDRSxXQUFPLEtBQVA7QUFDRDs7QUFFRCxNQUFJLEtBQUttVyxTQUFMLEtBQW1Cd1EsRUFBRXRrQixDQUF6QixFQUNBO0FBQ0UsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsTUFBSXNrQixFQUFFM1EsUUFBRixLQUFlLEtBQUtoVyxDQUF4QixFQUNBO0FBQ0UsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsTUFBSTJtQixFQUFFeFEsU0FBRixLQUFnQixLQUFLOVQsQ0FBekIsRUFDQTtBQUNFLFdBQU8sS0FBUDtBQUNEOztBQUVELFNBQU8sSUFBUDtBQUNELENBdkJEOztBQXlCQTBjLFdBQVcxakIsU0FBWCxDQUFxQitHLFVBQXJCLEdBQWtDLFlBQ2xDO0FBQ0UsU0FBTyxLQUFLcEMsQ0FBTCxHQUFTLEtBQUt3QyxLQUFMLEdBQWEsQ0FBN0I7QUFDRCxDQUhEOztBQUtBdWMsV0FBVzFqQixTQUFYLENBQXFCNEssT0FBckIsR0FBK0IsWUFDL0I7QUFDRSxTQUFPLEtBQUttVSxJQUFMLEVBQVA7QUFDRCxDQUhEOztBQUtBMkUsV0FBVzFqQixTQUFYLENBQXFCa0wsT0FBckIsR0FBK0IsWUFDL0I7QUFDRSxTQUFPLEtBQUs2VCxJQUFMLEtBQWMsS0FBSzVYLEtBQTFCO0FBQ0QsQ0FIRDs7QUFLQXVjLFdBQVcxakIsU0FBWCxDQUFxQmlILFVBQXJCLEdBQWtDLFlBQ2xDO0FBQ0UsU0FBTyxLQUFLRCxDQUFMLEdBQVMsS0FBS0ssTUFBTCxHQUFjLENBQTlCO0FBQ0QsQ0FIRDs7QUFLQXFjLFdBQVcxakIsU0FBWCxDQUFxQjhLLE9BQXJCLEdBQStCLFlBQy9CO0FBQ0UsU0FBTyxLQUFLa1UsSUFBTCxFQUFQO0FBQ0QsQ0FIRDs7QUFLQTBFLFdBQVcxakIsU0FBWCxDQUFxQm1MLE9BQXJCLEdBQStCLFlBQy9CO0FBQ0UsU0FBTyxLQUFLNlQsSUFBTCxLQUFjLEtBQUszWCxNQUExQjtBQUNELENBSEQ7O0FBS0FxYyxXQUFXMWpCLFNBQVgsQ0FBcUJpZ0IsWUFBckIsR0FBb0MsWUFDcEM7QUFDRSxTQUFPLEtBQUs5WSxLQUFMLEdBQWEsQ0FBcEI7QUFDRCxDQUhEOztBQUtBdWMsV0FBVzFqQixTQUFYLENBQXFCbWdCLGFBQXJCLEdBQXFDLFlBQ3JDO0FBQ0UsU0FBTyxLQUFLOVksTUFBTCxHQUFjLENBQXJCO0FBQ0QsQ0FIRDs7QUFLQTdILE9BQU9DLE9BQVAsR0FBaUJpa0IsVUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7QUNqSUEsSUFBSTNpQixTQUFTLG1CQUFBakMsQ0FBUSxxREFBUixDQUFiOztBQUVBLFNBQVNxQyxTQUFULENBQW1Cd0QsQ0FBbkIsRUFBc0JxQyxDQUF0QixFQUF5QjtBQUN2QixPQUFLcW1CLFVBQUwsR0FBa0IsR0FBbEI7QUFDQSxPQUFLQyxVQUFMLEdBQWtCLEdBQWxCO0FBQ0EsT0FBS0MsV0FBTCxHQUFtQixHQUFuQjtBQUNBLE9BQUtDLFdBQUwsR0FBbUIsR0FBbkI7QUFDQSxPQUFLQyxVQUFMLEdBQWtCLEdBQWxCO0FBQ0EsT0FBS0MsVUFBTCxHQUFrQixHQUFsQjtBQUNBLE9BQUtDLFdBQUwsR0FBbUIsR0FBbkI7QUFDQSxPQUFLQyxXQUFMLEdBQW1CLEdBQW5CO0FBQ0Q7O0FBRUR6c0IsVUFBVW5CLFNBQVYsQ0FBb0I2dEIsWUFBcEIsR0FBbUMsWUFDbkM7QUFDRSxTQUFPLEtBQUtSLFVBQVo7QUFDRCxDQUhEOztBQUtBbHNCLFVBQVVuQixTQUFWLENBQW9CK0ssWUFBcEIsR0FBbUMsVUFBVStpQixHQUFWLEVBQ25DO0FBQ0UsT0FBS1QsVUFBTCxHQUFrQlMsR0FBbEI7QUFDRCxDQUhEOztBQUtBM3NCLFVBQVVuQixTQUFWLENBQW9CK3RCLFlBQXBCLEdBQW1DLFlBQ25DO0FBQ0UsU0FBTyxLQUFLVCxVQUFaO0FBQ0QsQ0FIRDs7QUFLQW5zQixVQUFVbkIsU0FBVixDQUFvQmdMLFlBQXBCLEdBQW1DLFVBQVVnakIsR0FBVixFQUNuQztBQUNFLE9BQUtWLFVBQUwsR0FBa0JVLEdBQWxCO0FBQ0QsQ0FIRDs7QUFLQTdzQixVQUFVbkIsU0FBVixDQUFvQml1QixZQUFwQixHQUFtQyxZQUNuQztBQUNFLFNBQU8sS0FBS1IsVUFBWjtBQUNELENBSEQ7O0FBS0F0c0IsVUFBVW5CLFNBQVYsQ0FBb0JrdUIsWUFBcEIsR0FBbUMsVUFBVUMsR0FBVixFQUNuQztBQUNFLE9BQUtWLFVBQUwsR0FBa0JVLEdBQWxCO0FBQ0QsQ0FIRDs7QUFLQWh0QixVQUFVbkIsU0FBVixDQUFvQm91QixZQUFwQixHQUFtQyxZQUNuQztBQUNFLFNBQU8sS0FBS1YsVUFBWjtBQUNELENBSEQ7O0FBS0F2c0IsVUFBVW5CLFNBQVYsQ0FBb0JxdUIsWUFBcEIsR0FBbUMsVUFBVUMsR0FBVixFQUNuQztBQUNFLE9BQUtaLFVBQUwsR0FBa0JZLEdBQWxCO0FBQ0QsQ0FIRDs7QUFLQTs7QUFFQW50QixVQUFVbkIsU0FBVixDQUFvQnV1QixhQUFwQixHQUFvQyxZQUNwQztBQUNFLFNBQU8sS0FBS2hCLFdBQVo7QUFDRCxDQUhEOztBQUtBcHNCLFVBQVVuQixTQUFWLENBQW9CMkssYUFBcEIsR0FBb0MsVUFBVTZqQixHQUFWLEVBQ3BDO0FBQ0UsT0FBS2pCLFdBQUwsR0FBbUJpQixHQUFuQjtBQUNELENBSEQ7O0FBS0FydEIsVUFBVW5CLFNBQVYsQ0FBb0J5dUIsYUFBcEIsR0FBb0MsWUFDcEM7QUFDRSxTQUFPLEtBQUtqQixXQUFaO0FBQ0QsQ0FIRDs7QUFLQXJzQixVQUFVbkIsU0FBVixDQUFvQjZLLGFBQXBCLEdBQW9DLFVBQVU2akIsR0FBVixFQUNwQztBQUNFLE9BQUtsQixXQUFMLEdBQW1Ca0IsR0FBbkI7QUFDRCxDQUhEOztBQUtBdnRCLFVBQVVuQixTQUFWLENBQW9CMnVCLGFBQXBCLEdBQW9DLFlBQ3BDO0FBQ0UsU0FBTyxLQUFLaEIsV0FBWjtBQUNELENBSEQ7O0FBS0F4c0IsVUFBVW5CLFNBQVYsQ0FBb0I0dUIsYUFBcEIsR0FBb0MsVUFBVUMsR0FBVixFQUNwQztBQUNFLE9BQUtsQixXQUFMLEdBQW1Ca0IsR0FBbkI7QUFDRCxDQUhEOztBQUtBMXRCLFVBQVVuQixTQUFWLENBQW9COHVCLGFBQXBCLEdBQW9DLFlBQ3BDO0FBQ0UsU0FBTyxLQUFLbEIsV0FBWjtBQUNELENBSEQ7O0FBS0F6c0IsVUFBVW5CLFNBQVYsQ0FBb0IrdUIsYUFBcEIsR0FBb0MsVUFBVUMsR0FBVixFQUNwQztBQUNFLE9BQUtwQixXQUFMLEdBQW1Cb0IsR0FBbkI7QUFDRCxDQUhEOztBQUtBN3RCLFVBQVVuQixTQUFWLENBQW9CaXZCLFVBQXBCLEdBQWlDLFVBQVV0cUIsQ0FBVixFQUNqQztBQUNFLE1BQUl1cUIsVUFBVSxHQUFkO0FBQ0EsTUFBSUMsWUFBWSxLQUFLMUIsVUFBckI7QUFDQSxNQUFJMEIsYUFBYSxHQUFqQixFQUNBO0FBQ0VELGNBQVUsS0FBSzNCLFdBQUwsR0FDRCxDQUFDNW9CLElBQUksS0FBSzBvQixVQUFWLElBQXdCLEtBQUtNLFdBQTdCLEdBQTJDd0IsU0FEcEQ7QUFFRDs7QUFFRCxTQUFPRCxPQUFQO0FBQ0QsQ0FYRDs7QUFhQS90QixVQUFVbkIsU0FBVixDQUFvQm92QixVQUFwQixHQUFpQyxVQUFVcG9CLENBQVYsRUFDakM7QUFDRSxNQUFJcW9CLFVBQVUsR0FBZDtBQUNBLE1BQUlDLFlBQVksS0FBSzVCLFVBQXJCO0FBQ0EsTUFBSTRCLGFBQWEsR0FBakIsRUFDQTtBQUNFRCxjQUFVLEtBQUs3QixXQUFMLEdBQ0QsQ0FBQ3htQixJQUFJLEtBQUtzbUIsVUFBVixJQUF3QixLQUFLTSxXQUE3QixHQUEyQzBCLFNBRHBEO0FBRUQ7O0FBR0QsU0FBT0QsT0FBUDtBQUNELENBWkQ7O0FBY0FsdUIsVUFBVW5CLFNBQVYsQ0FBb0J1dkIsaUJBQXBCLEdBQXdDLFVBQVU1cUIsQ0FBVixFQUN4QztBQUNFLE1BQUk2cUIsU0FBUyxHQUFiO0FBQ0EsTUFBSUMsYUFBYSxLQUFLOUIsV0FBdEI7QUFDQSxNQUFJOEIsY0FBYyxHQUFsQixFQUNBO0FBQ0VELGFBQVMsS0FBS25DLFVBQUwsR0FDQSxDQUFDMW9CLElBQUksS0FBSzRvQixXQUFWLElBQXlCLEtBQUtFLFVBQTlCLEdBQTJDZ0MsVUFEcEQ7QUFFRDs7QUFHRCxTQUFPRCxNQUFQO0FBQ0QsQ0FaRDs7QUFjQXJ1QixVQUFVbkIsU0FBVixDQUFvQjB2QixpQkFBcEIsR0FBd0MsVUFBVTFvQixDQUFWLEVBQ3hDO0FBQ0UsTUFBSTJvQixTQUFTLEdBQWI7QUFDQSxNQUFJQyxhQUFhLEtBQUtoQyxXQUF0QjtBQUNBLE1BQUlnQyxjQUFjLEdBQWxCLEVBQ0E7QUFDRUQsYUFBUyxLQUFLckMsVUFBTCxHQUNBLENBQUN0bUIsSUFBSSxLQUFLd21CLFdBQVYsSUFBeUIsS0FBS0UsVUFBOUIsR0FBMkNrQyxVQURwRDtBQUVEO0FBQ0QsU0FBT0QsTUFBUDtBQUNELENBVkQ7O0FBWUF4dUIsVUFBVW5CLFNBQVYsQ0FBb0JvTCxxQkFBcEIsR0FBNEMsVUFBVXlrQixPQUFWLEVBQzVDO0FBQ0UsTUFBSUMsV0FDSSxJQUFJL3VCLE1BQUosQ0FBVyxLQUFLd3VCLGlCQUFMLENBQXVCTSxRQUFRbHJCLENBQS9CLENBQVgsRUFDUSxLQUFLK3FCLGlCQUFMLENBQXVCRyxRQUFRN29CLENBQS9CLENBRFIsQ0FEUjtBQUdBLFNBQU84b0IsUUFBUDtBQUNELENBTkQ7O0FBUUF0d0IsT0FBT0MsT0FBUCxHQUFpQjBCLFNBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SkEsU0FBU3ljLGlCQUFULEdBQTZCLENBQzVCOztBQUVEQSxrQkFBa0JtUyxNQUFsQixHQUEyQixDQUEzQjs7QUFFQW5TLGtCQUFrQk8sUUFBbEIsR0FBNkIsVUFBVUksR0FBVixFQUFlO0FBQzFDLE1BQUlYLGtCQUFrQm9TLFdBQWxCLENBQThCelIsR0FBOUIsQ0FBSixFQUF3QztBQUN0QyxXQUFPQSxHQUFQO0FBQ0Q7QUFDRCxNQUFJQSxJQUFJMFIsUUFBSixJQUFnQixJQUFwQixFQUEwQjtBQUN4QixXQUFPMVIsSUFBSTBSLFFBQVg7QUFDRDtBQUNEMVIsTUFBSTBSLFFBQUosR0FBZXJTLGtCQUFrQnNTLFNBQWxCLEVBQWY7QUFDQXRTLG9CQUFrQm1TLE1BQWxCO0FBQ0EsU0FBT3hSLElBQUkwUixRQUFYO0FBQ0QsQ0FWRDs7QUFZQXJTLGtCQUFrQnNTLFNBQWxCLEdBQThCLFVBQVVwcEIsRUFBVixFQUFjO0FBQzFDLE1BQUlBLE1BQU0sSUFBVixFQUNFQSxLQUFLOFcsa0JBQWtCbVMsTUFBdkI7QUFDRixTQUFPLFlBQVlqcEIsRUFBWixHQUFpQixFQUF4QjtBQUNELENBSkQ7O0FBTUE4VyxrQkFBa0JvUyxXQUFsQixHQUFnQyxVQUFVRyxHQUFWLEVBQWU7QUFDN0MsTUFBSUMsY0FBY0QsR0FBZCx5Q0FBY0EsR0FBZCxDQUFKO0FBQ0EsU0FBT0EsT0FBTyxJQUFQLElBQWdCQyxRQUFRLFFBQVIsSUFBb0JBLFFBQVEsVUFBbkQ7QUFDRCxDQUhEOztBQUtBNXdCLE9BQU9DLE9BQVAsR0FBaUJtZSxpQkFBakIsQzs7Ozs7Ozs7Ozs7O0FDNUJBOztBQUVBLElBQUlySSxhQUFhLG1CQUFBelcsQ0FBUSw2REFBUixDQUFqQjtBQUNBLElBQUkrZSxVQUFVLG1CQUFBL2UsQ0FBUSx1REFBUixDQUFkO0FBQ0EsSUFBSTBKLFVBQVUsbUJBQUExSixDQUFRLHVEQUFSLENBQWQ7QUFDQSxJQUFJb0MsWUFBWSxtQkFBQXBDLENBQVEsMkRBQVIsQ0FBaEI7QUFDQSxJQUFJNFUsUUFBUSxtQkFBQTVVLENBQVEsbURBQVIsQ0FBWjtBQUNBLElBQUltQyxVQUFVLG1CQUFBbkMsQ0FBUSx1REFBUixDQUFkO0FBQ0EsSUFBSWdDLFFBQVEsbUJBQUFoQyxDQUFRLG1EQUFSLENBQVo7QUFDQSxJQUFJaUMsU0FBUyxtQkFBQWpDLENBQVEscURBQVIsQ0FBYjtBQUNBLElBQUlpb0IsYUFBYSxtQkFBQWpvQixDQUFRLDZEQUFSLENBQWpCO0FBQ0EsSUFBSTRrQixhQUFhLG1CQUFBNWtCLENBQVEsNkRBQVIsQ0FBakI7QUFDQSxJQUFJcUMsWUFBWSxtQkFBQXJDLENBQVEsMkRBQVIsQ0FBaEI7QUFDQSxJQUFJOGUsb0JBQW9CLG1CQUFBOWUsQ0FBUSwyRUFBUixDQUF4QjtBQUNBLElBQUlra0IsZUFBZSxtQkFBQWxrQixDQUFRLGlFQUFSLENBQW5CO0FBQ0EsSUFBSXFCLFNBQVMsbUJBQUFyQixDQUFRLHFEQUFSLENBQWI7QUFDQSxJQUFJd2UsUUFBUSxtQkFBQXhlLENBQVEsbURBQVIsQ0FBWjtBQUNBLElBQUkwQixnQkFBZ0IsbUJBQUExQixDQUFRLG1FQUFSLENBQXBCO0FBQ0EsSUFBSXllLFFBQVEsbUJBQUF6ZSxDQUFRLG1EQUFSLENBQVo7QUFDQSxJQUFJa0MsU0FBUyxtQkFBQWxDLENBQVEscURBQVIsQ0FBYjtBQUNBLElBQUkrQixrQkFBa0IsbUJBQUEvQixDQUFRLHVFQUFSLENBQXRCO0FBQ0EsSUFBSTZCLFdBQVcsbUJBQUE3QixDQUFRLHlEQUFSLENBQWY7QUFDQSxJQUFJRCxvQkFBb0IsbUJBQUFDLENBQVEsMkVBQVIsQ0FBeEI7QUFDQSxJQUFJWSxlQUFlLG1CQUFBWixDQUFRLGlFQUFSLENBQW5CO0FBQ0EsSUFBSTJVLGVBQWUsbUJBQUEzVSxDQUFRLGlFQUFSLENBQW5CO0FBQ0EsSUFBSUMsZ0JBQWdCLG1CQUFBRCxDQUFRLG1FQUFSLENBQXBCO0FBQ0EsSUFBSWEsV0FBVyxtQkFBQWIsQ0FBUSx5REFBUixDQUFmO0FBQ0EsSUFBSXNCLFlBQVksbUJBQUF0QixDQUFRLDJEQUFSLENBQWhCO0FBQ0EsSUFBSTJCLG1CQUFtQixtQkFBQTNCLENBQVEseUVBQVIsQ0FBdkI7QUFDQSxJQUFJc0MsYUFBYSxtQkFBQXRDLENBQVEsNkRBQVIsQ0FBakI7QUFDQSxJQUFJOEIsV0FBVyxtQkFBQTlCLENBQVEseURBQVIsQ0FBZjs7QUFFQSxJQUFJdXhCLFdBQVc7QUFDYjtBQUNBQyxTQUFPLGlCQUFZLENBQ2xCLENBSFk7QUFJYjtBQUNBQyxRQUFNLGdCQUFZLENBQ2pCLENBTlk7QUFPYjtBQUNBQywrQkFBNkIsS0FSaEI7QUFTYjtBQUNBQyxXQUFTLEVBVkk7QUFXYjtBQUNBQyxPQUFLLElBWlE7QUFhYjtBQUNBQyxXQUFTLEVBZEk7QUFlYjtBQUNBQyxhQUFXLElBaEJFO0FBaUJiO0FBQ0FDLGlCQUFlLElBbEJGO0FBbUJiO0FBQ0E3dUIsbUJBQWlCLEVBcEJKO0FBcUJiO0FBQ0E4dUIsa0JBQWdCLElBdEJIO0FBdUJiO0FBQ0FDLGlCQUFlLEdBeEJGO0FBeUJiO0FBQ0FDLFdBQVMsSUExQkk7QUEyQmI7QUFDQUMsV0FBUyxJQTVCSTtBQTZCYjtBQUNBQyxRQUFNLElBOUJPO0FBK0JiO0FBQ0F6cUIsV0FBUyxLQWhDSTtBQWlDYjtBQUNBMHFCLHFCQUFtQixHQWxDTjtBQW1DYjtBQUNBQyx5QkFBdUIsRUFwQ1Y7QUFxQ2I7QUFDQUMsMkJBQXlCLEVBdENaO0FBdUNiO0FBQ0FDLHdCQUFzQixHQXhDVDtBQXlDYjtBQUNBQyxtQkFBaUIsR0ExQ0o7QUEyQ2I7QUFDQUMsZ0JBQWMsR0E1Q0Q7QUE2Q2I7QUFDQUMsOEJBQTRCO0FBOUNmLENBQWY7O0FBaURBLFNBQVNDLE1BQVQsQ0FBZ0JyQixRQUFoQixFQUEwQnNCLE9BQTFCLEVBQW1DO0FBQ2pDLE1BQUlwVCxNQUFNLEVBQVY7O0FBRUEsT0FBSyxJQUFJM1gsQ0FBVCxJQUFjeXBCLFFBQWQsRUFBd0I7QUFDdEI5UixRQUFJM1gsQ0FBSixJQUFTeXBCLFNBQVN6cEIsQ0FBVCxDQUFUO0FBQ0Q7O0FBRUQsT0FBSyxJQUFJQSxDQUFULElBQWMrcUIsT0FBZCxFQUF1QjtBQUNyQnBULFFBQUkzWCxDQUFKLElBQVMrcUIsUUFBUS9xQixDQUFSLENBQVQ7QUFDRDs7QUFFRCxTQUFPMlgsR0FBUDtBQUNEOztBQUVELFNBQVNxVCxXQUFULENBQXFCQyxRQUFyQixFQUErQjtBQUM3QixPQUFLRixPQUFMLEdBQWVELE9BQU9yQixRQUFQLEVBQWlCd0IsUUFBakIsQ0FBZjtBQUNBQyxpQkFBZSxLQUFLSCxPQUFwQjtBQUNEOztBQUVELElBQUlHLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBVUgsT0FBVixFQUFtQjtBQUN0QyxNQUFJQSxRQUFRZCxhQUFSLElBQXlCLElBQTdCLEVBQ0U5eEIsY0FBY3VELDBCQUFkLEdBQTJDekQsa0JBQWtCeUQsMEJBQWxCLEdBQStDcXZCLFFBQVFkLGFBQWxHO0FBQ0YsTUFBSWMsUUFBUTN2QixlQUFSLElBQTJCLElBQS9CLEVBQ0VqRCxjQUFjSSxtQkFBZCxHQUFvQ04sa0JBQWtCTSxtQkFBbEIsR0FBd0N3eUIsUUFBUTN2QixlQUFwRjtBQUNGLE1BQUkydkIsUUFBUWIsY0FBUixJQUEwQixJQUE5QixFQUNFL3hCLGNBQWNxRCx1QkFBZCxHQUF3Q3ZELGtCQUFrQnVELHVCQUFsQixHQUE0Q3V2QixRQUFRYixjQUE1RjtBQUNGLE1BQUlhLFFBQVFaLGFBQVIsSUFBeUIsSUFBN0IsRUFDRWh5QixjQUFjNFksa0NBQWQsR0FBbUQ5WSxrQkFBa0I4WSxrQ0FBbEIsR0FBdURnYSxRQUFRWixhQUFsSDtBQUNGLE1BQUlZLFFBQVFYLE9BQVIsSUFBbUIsSUFBdkIsRUFDRWp5QixjQUFjeUQsd0JBQWQsR0FBeUMzRCxrQkFBa0IyRCx3QkFBbEIsR0FBNkNtdkIsUUFBUVgsT0FBOUY7QUFDRixNQUFJVyxRQUFRVixPQUFSLElBQW1CLElBQXZCLEVBQ0VseUIsY0FBY3dYLGNBQWQsR0FBK0IxWCxrQkFBa0IwWCxjQUFsQixHQUFtQ29iLFFBQVFWLE9BQTFFO0FBQ0YsTUFBSVUsUUFBUUgsWUFBUixJQUF3QixJQUE1QixFQUNFenlCLGNBQWM2RCw0QkFBZCxHQUE2Qy9ELGtCQUFrQitELDRCQUFsQixHQUFpRCt1QixRQUFRSCxZQUF0RztBQUNGLE1BQUdHLFFBQVFKLGVBQVIsSUFBMkIsSUFBOUIsRUFDRXh5QixjQUFjMkQsaUNBQWQsR0FBa0Q3RCxrQkFBa0I2RCxpQ0FBbEIsR0FBc0RpdkIsUUFBUUosZUFBaEg7QUFDRixNQUFHSSxRQUFRTCxvQkFBUixJQUFnQyxJQUFuQyxFQUNFdnlCLGNBQWMrRCxxQ0FBZCxHQUFzRGpFLGtCQUFrQmlFLHFDQUFsQixHQUEwRDZ1QixRQUFRTCxvQkFBeEg7QUFDRixNQUFJSyxRQUFRRiwwQkFBUixJQUFzQyxJQUExQyxFQUNFMXlCLGNBQWNtSCxrQ0FBZCxHQUFtRHJILGtCQUFrQnFILGtDQUFsQixHQUF1RHlyQixRQUFRRiwwQkFBbEg7O0FBRUYxeUIsZ0JBQWMwcEIsOEJBQWQsR0FBK0M1cEIsa0JBQWtCNHBCLDhCQUFsQixHQUFtRDVuQixnQkFBZ0I0bkIsOEJBQWhCLEdBQWlEa0osUUFBUW5CLDJCQUEzSjtBQUNBenhCLGdCQUFjb3FCLG1CQUFkLEdBQW9DdHFCLGtCQUFrQnNxQixtQkFBbEIsR0FBd0N0b0IsZ0JBQWdCc29CLG1CQUFoQixHQUNwRSxDQUFFd0ksUUFBUWYsU0FEbEI7QUFFQTd4QixnQkFBY3dJLE9BQWQsR0FBd0IxSSxrQkFBa0IwSSxPQUFsQixHQUE0QjFHLGdCQUFnQjBHLE9BQWhCLEdBQTBCb3FCLFFBQVFsckIsT0FBdEY7QUFDQTFILGdCQUFjTSxJQUFkLEdBQXFCc3lCLFFBQVFULElBQTdCO0FBQ0FueUIsZ0JBQWNPLHVCQUFkLEdBQ1EsT0FBT3F5QixRQUFRUCxxQkFBZixLQUF5QyxVQUF6QyxHQUFzRE8sUUFBUVAscUJBQVIsQ0FBOEJyeEIsSUFBOUIsRUFBdEQsR0FBNkY0eEIsUUFBUVAscUJBRDdHO0FBRUFyeUIsZ0JBQWNRLHlCQUFkLEdBQ1EsT0FBT295QixRQUFRTix1QkFBZixLQUEyQyxVQUEzQyxHQUF3RE0sUUFBUU4sdUJBQVIsQ0FBZ0N0eEIsSUFBaEMsRUFBeEQsR0FBaUc0eEIsUUFBUU4sdUJBRGpIO0FBRUQsQ0EvQkQ7O0FBaUNBTyxZQUFZNXhCLFNBQVosQ0FBc0IreEIsR0FBdEIsR0FBNEIsWUFBWTtBQUN0QyxNQUFJekIsS0FBSjtBQUNBLE1BQUkwQixPQUFKO0FBQ0EsTUFBSUwsVUFBVSxLQUFLQSxPQUFuQjtBQUNBLE1BQUlNLFlBQVksS0FBS0EsU0FBTCxHQUFpQixFQUFqQztBQUNBLE1BQUl2eEIsU0FBUyxLQUFLQSxNQUFMLEdBQWMsSUFBSVUsVUFBSixFQUEzQjtBQUNBLE1BQUl1TSxPQUFPLElBQVg7O0FBRUFBLE9BQUt1a0IsT0FBTCxHQUFlLEtBQWY7O0FBRUEsT0FBSzVLLEVBQUwsR0FBVSxLQUFLcUssT0FBTCxDQUFhckssRUFBdkI7O0FBRUEsT0FBS0EsRUFBTCxDQUFRNkssT0FBUixDQUFnQixFQUFFL0IsTUFBTSxhQUFSLEVBQXVCMXZCLFFBQVEsSUFBL0IsRUFBaEI7O0FBRUEsTUFBSWEsS0FBS2IsT0FBT1ksZUFBUCxFQUFUO0FBQ0EsT0FBS0MsRUFBTCxHQUFVQSxFQUFWOztBQUVBLE1BQUlnUSxRQUFRLEtBQUtvZ0IsT0FBTCxDQUFhUyxJQUFiLENBQWtCN2dCLEtBQWxCLEVBQVo7QUFDQSxNQUFJbEosUUFBUSxLQUFLc3BCLE9BQUwsQ0FBYVMsSUFBYixDQUFrQi9wQixLQUFsQixFQUFaOztBQUVBLE9BQUttYixJQUFMLEdBQVlqaUIsR0FBR2trQixPQUFILEVBQVo7QUFDQSxPQUFLNE0sbUJBQUwsQ0FBeUIsS0FBSzdPLElBQTlCLEVBQW9DLEtBQUs4TyxlQUFMLENBQXFCL2dCLEtBQXJCLENBQXBDLEVBQWlFN1EsTUFBakU7O0FBR0EsT0FBSyxJQUFJa0csSUFBSSxDQUFiLEVBQWdCQSxJQUFJeUIsTUFBTXBFLE1BQTFCLEVBQWtDMkMsR0FBbEMsRUFBdUM7QUFDckMsUUFBSTZCLE9BQU9KLE1BQU16QixDQUFOLENBQVg7QUFDQSxRQUFJZ1MsYUFBYSxLQUFLcVosU0FBTCxDQUFleHBCLEtBQUsyTixJQUFMLENBQVUsUUFBVixDQUFmLENBQWpCO0FBQ0EsUUFBSXlDLGFBQWEsS0FBS29aLFNBQUwsQ0FBZXhwQixLQUFLMk4sSUFBTCxDQUFVLFFBQVYsQ0FBZixDQUFqQjtBQUNBLFFBQUd3QyxXQUFXbE0sZUFBWCxDQUEyQm1NLFVBQTNCLEVBQXVDNVUsTUFBdkMsSUFBaUQsQ0FBcEQsRUFBc0Q7QUFDcEQsVUFBSXN1QixLQUFLaHhCLEdBQUd5SCxHQUFILENBQU90SSxPQUFPa0IsT0FBUCxFQUFQLEVBQXlCZ1gsVUFBekIsRUFBcUNDLFVBQXJDLENBQVQ7QUFDQTBaLFNBQUd6ckIsRUFBSCxHQUFRMkIsS0FBSzNCLEVBQUwsRUFBUjtBQUNEO0FBQ0Y7O0FBRUEsTUFBSTByQixlQUFlLFNBQWZBLFlBQWUsQ0FBU0MsR0FBVCxFQUFjN3JCLENBQWQsRUFBZ0I7QUFDbEMsUUFBRyxPQUFPNnJCLEdBQVAsS0FBZSxRQUFsQixFQUE0QjtBQUMxQkEsWUFBTTdyQixDQUFOO0FBQ0Q7QUFDRCxRQUFJc1gsUUFBUXVVLElBQUlyYyxJQUFKLENBQVMsSUFBVCxDQUFaO0FBQ0EsUUFBSXRFLFFBQVFuRSxLQUFLc2tCLFNBQUwsQ0FBZS9ULEtBQWYsQ0FBWjs7QUFFQSxXQUFPO0FBQ0x2WixTQUFHbU4sTUFBTXlILE9BQU4sR0FBZ0J4UyxVQUFoQixFQURFO0FBRUxDLFNBQUc4SyxNQUFNeUgsT0FBTixHQUFnQnRTLFVBQWhCO0FBRkUsS0FBUDtBQUlELEdBWEE7O0FBYUQ7OztBQUdBLE1BQUl5ckIsa0JBQWtCLFNBQWxCQSxlQUFrQixHQUFZO0FBQ2hDO0FBQ0EsUUFBSUMsa0JBQWtCLFNBQWxCQSxlQUFrQixHQUFXO0FBQy9CLFVBQUloQixRQUFRakIsR0FBWixFQUFpQjtBQUNmaUIsZ0JBQVFySyxFQUFSLENBQVdvSixHQUFYLENBQWVpQixRQUFRUyxJQUFSLENBQWE3Z0IsS0FBYixFQUFmLEVBQXFDb2dCLFFBQVFoQixPQUE3QztBQUNEOztBQUVELFVBQUksQ0FBQ0wsS0FBTCxFQUFZO0FBQ1ZBLGdCQUFRLElBQVI7QUFDQTNpQixhQUFLMlosRUFBTCxDQUFRc0wsR0FBUixDQUFZLGFBQVosRUFBMkJqQixRQUFRckIsS0FBbkM7QUFDQTNpQixhQUFLMlosRUFBTCxDQUFRNkssT0FBUixDQUFnQixFQUFDL0IsTUFBTSxhQUFQLEVBQXNCMXZCLFFBQVFpTixJQUE5QixFQUFoQjtBQUNEO0FBQ0YsS0FWRDs7QUFZQSxRQUFJa2xCLGdCQUFnQmxsQixLQUFLZ2tCLE9BQUwsQ0FBYWxCLE9BQWpDO0FBQ0EsUUFBSXFDLE1BQUo7O0FBRUEsU0FBSyxJQUFJbHNCLElBQUksQ0FBYixFQUFnQkEsSUFBSWlzQixhQUFKLElBQXFCLENBQUNDLE1BQXRDLEVBQThDbHNCLEdBQTlDLEVBQW1EO0FBQ2pEa3NCLGVBQVNubEIsS0FBS3VrQixPQUFMLElBQWdCdmtCLEtBQUtqTixNQUFMLENBQVlxRSxJQUFaLEVBQXpCO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFJK3RCLE1BQUosRUFBWTtBQUNWO0FBQ0EsVUFBSXB5QixPQUFPa3BCLGtCQUFQLE1BQStCLENBQUNscEIsT0FBT3FCLFdBQTNDLEVBQXdEO0FBQ3REckIsZUFBT3FwQixZQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxVQUFJcnBCLE9BQU84UyxnQkFBWCxFQUE2QjtBQUMzQjlTLGVBQU84UyxnQkFBUDtBQUNEOztBQUVEOVMsYUFBT2dwQixnQkFBUCxHQUEwQixJQUExQjs7QUFFQS9iLFdBQUtna0IsT0FBTCxDQUFhUyxJQUFiLENBQWtCN2dCLEtBQWxCLEdBQTBCd2hCLFNBQTFCLENBQW9DUCxZQUFwQzs7QUFFQUc7O0FBRUE7QUFDQWhsQixXQUFLMlosRUFBTCxDQUFRc0wsR0FBUixDQUFZLFlBQVosRUFBMEJqbEIsS0FBS2drQixPQUFMLENBQWFwQixJQUF2QztBQUNBNWlCLFdBQUsyWixFQUFMLENBQVE2SyxPQUFSLENBQWdCLEVBQUUvQixNQUFNLFlBQVIsRUFBc0IxdkIsUUFBUWlOLElBQTlCLEVBQWhCOztBQUVBLFVBQUlxa0IsT0FBSixFQUFhO0FBQ1hnQiw2QkFBcUJoQixPQUFyQjtBQUNEOztBQUVEMUIsY0FBUSxLQUFSO0FBQ0E7QUFDRDs7QUFFRCxRQUFJMkMsZ0JBQWdCdGxCLEtBQUtqTixNQUFMLENBQVlnRyxnQkFBWixFQUFwQixDQW5EZ0MsQ0FtRG9COztBQUVwRDtBQUNBO0FBQ0FpckIsWUFBUVMsSUFBUixDQUFhN2dCLEtBQWIsR0FBcUJ3aEIsU0FBckIsQ0FBK0IsVUFBVU4sR0FBVixFQUFlN3JCLENBQWYsRUFBa0I7QUFDL0MsVUFBSSxPQUFPNnJCLEdBQVAsS0FBZSxRQUFuQixFQUE2QjtBQUMzQkEsY0FBTTdyQixDQUFOO0FBQ0Q7QUFDRCxVQUFJc1gsUUFBUXVVLElBQUkzckIsRUFBSixFQUFaO0FBQ0EsVUFBSW9zQixRQUFRRCxjQUFjL1UsS0FBZCxDQUFaO0FBQ0EsVUFBSXZSLE9BQU84bEIsR0FBWDtBQUNBO0FBQ0EsYUFBT1MsU0FBUyxJQUFoQixFQUFzQjtBQUNwQkEsZ0JBQVFELGNBQWN0bUIsS0FBS3lKLElBQUwsQ0FBVSxRQUFWLENBQWQsS0FBc0M2YyxjQUFjLG1CQUFtQnRtQixLQUFLeUosSUFBTCxDQUFVLFFBQVYsQ0FBakMsQ0FBOUM7QUFDQTZjLHNCQUFjL1UsS0FBZCxJQUF1QmdWLEtBQXZCO0FBQ0F2bUIsZUFBT0EsS0FBS3RNLE1BQUwsR0FBYyxDQUFkLENBQVA7QUFDQSxZQUFHc00sUUFBUXVCLFNBQVgsRUFBcUI7QUFDbkI7QUFDRDtBQUNGO0FBQ0QsVUFBR2dsQixTQUFTLElBQVosRUFBaUI7QUFDZixlQUFPO0FBQ0x2dUIsYUFBR3V1QixNQUFNdnVCLENBREo7QUFFTHFDLGFBQUdrc0IsTUFBTWxzQjtBQUZKLFNBQVA7QUFJRCxPQUxELE1BTUk7QUFDRixlQUFPO0FBQ0xyQyxhQUFHOHRCLElBQUk5dEIsQ0FERjtBQUVMcUMsYUFBR3lyQixJQUFJenJCO0FBRkYsU0FBUDtBQUlEO0FBQ0YsS0E1QkQ7O0FBOEJBMnJCOztBQUVBWCxjQUFVbUIsc0JBQXNCVCxlQUF0QixDQUFWO0FBQ0QsR0F4RkQ7O0FBMEZBOzs7QUFHQWh5QixTQUFPcVYsV0FBUCxDQUFtQixlQUFuQixFQUFvQyxZQUFZO0FBQzlDLFFBQUlwSSxLQUFLZ2tCLE9BQUwsQ0FBYWxyQixPQUFiLEtBQXlCLFFBQTdCLEVBQXVDO0FBQ3JDdXJCLGdCQUFVbUIsc0JBQXNCVCxlQUF0QixDQUFWO0FBQ0Q7QUFDRixHQUpEOztBQU1BaHlCLFNBQU9tcEIsU0FBUCxHQXJKc0MsQ0FxSmxCOztBQUVwQjs7O0FBR0EsTUFBRyxLQUFLOEgsT0FBTCxDQUFhbHJCLE9BQWIsS0FBeUIsUUFBNUIsRUFBcUM7QUFDbkNrSCxTQUFLZ2tCLE9BQUwsQ0FBYVMsSUFBYixDQUFrQjdnQixLQUFsQixHQUEwQjZoQixHQUExQixDQUE4QixTQUE5QixFQUF5Q0MsZUFBekMsQ0FBeUQxbEIsSUFBekQsRUFBK0RBLEtBQUtna0IsT0FBcEUsRUFBNkVhLFlBQTdFLEVBRG1DLENBQ3lEO0FBQzVGbEMsWUFBUSxLQUFSO0FBQ0Q7O0FBRUQsU0FBTyxJQUFQLENBL0pzQyxDQStKekI7QUFDZCxDQWhLRDs7QUFrS0E7QUFDQXNCLFlBQVk1eEIsU0FBWixDQUFzQnN5QixlQUF0QixHQUF3QyxVQUFTL2dCLEtBQVQsRUFBZ0I7QUFDdEQsTUFBSStoQixXQUFXLEVBQWY7QUFDQSxPQUFLLElBQUkxc0IsSUFBSSxDQUFiLEVBQWdCQSxJQUFJMkssTUFBTXROLE1BQTFCLEVBQWtDMkMsR0FBbEMsRUFBdUM7QUFDbkMwc0IsYUFBUy9oQixNQUFNM0ssQ0FBTixFQUFTRSxFQUFULEVBQVQsSUFBMEIsSUFBMUI7QUFDSDtBQUNELE1BQUl5c0IsUUFBUWhpQixNQUFNOU0sTUFBTixDQUFhLFVBQVVndUIsR0FBVixFQUFlN3JCLENBQWYsRUFBa0I7QUFDdkMsUUFBRyxPQUFPNnJCLEdBQVAsS0FBZSxRQUFsQixFQUE0QjtBQUMxQkEsWUFBTTdyQixDQUFOO0FBQ0Q7QUFDRCxRQUFJdkcsU0FBU295QixJQUFJcHlCLE1BQUosR0FBYSxDQUFiLENBQWI7QUFDQSxXQUFNQSxVQUFVLElBQWhCLEVBQXFCO0FBQ25CLFVBQUdpekIsU0FBU2p6QixPQUFPeUcsRUFBUCxFQUFULENBQUgsRUFBeUI7QUFDdkIsZUFBTyxLQUFQO0FBQ0Q7QUFDRHpHLGVBQVNBLE9BQU9BLE1BQVAsR0FBZ0IsQ0FBaEIsQ0FBVDtBQUNEO0FBQ0QsV0FBTyxJQUFQO0FBQ0gsR0FaVyxDQUFaOztBQWNBLFNBQU9rekIsS0FBUDtBQUNELENBcEJEOztBQXNCQTNCLFlBQVk1eEIsU0FBWixDQUFzQnF5QixtQkFBdEIsR0FBNEMsVUFBVWh5QixNQUFWLEVBQWtCa1EsUUFBbEIsRUFBNEI3UCxNQUE1QixFQUFvQztBQUM5RSxNQUFJbUgsT0FBTzBJLFNBQVN0TSxNQUFwQjtBQUNBLE9BQUssSUFBSTJDLElBQUksQ0FBYixFQUFnQkEsSUFBSWlCLElBQXBCLEVBQTBCakIsR0FBMUIsRUFBK0I7QUFDN0IsUUFBSTRKLFdBQVdELFNBQVMzSixDQUFULENBQWY7QUFDQSxRQUFJNHNCLHVCQUF1QmhqQixTQUFTRCxRQUFULEVBQTNCO0FBQ0EsUUFBSWtqQixPQUFKOztBQUVBLFFBQUlDLGFBQWFsakIsU0FBU21qQixnQkFBVCxDQUEwQjtBQUN6Q25ELG1DQUE2QixLQUFLbUIsT0FBTCxDQUFhbkI7QUFERCxLQUExQixDQUFqQjs7QUFJQSxRQUFJaGdCLFNBQVNvakIsVUFBVCxNQUF5QixJQUF6QixJQUNPcGpCLFNBQVNxakIsV0FBVCxNQUEwQixJQURyQyxFQUMyQztBQUN6Q0osZ0JBQVVwekIsT0FBTzJJLEdBQVAsQ0FBVyxJQUFJcEksUUFBSixDQUFhRixPQUFPYyxZQUFwQixFQUNiLElBQUlULE1BQUosQ0FBV3lQLFNBQVNzakIsUUFBVCxDQUFrQixHQUFsQixJQUF5QkosV0FBV3hzQixDQUFYLEdBQWUsQ0FBbkQsRUFBc0RzSixTQUFTc2pCLFFBQVQsQ0FBa0IsR0FBbEIsSUFBeUJKLFdBQVd0c0IsQ0FBWCxHQUFlLENBQTlGLENBRGEsRUFFYixJQUFJbU8sVUFBSixDQUFld2UsV0FBV0wsV0FBV3hzQixDQUF0QixDQUFmLEVBQXlDNnNCLFdBQVdMLFdBQVd0c0IsQ0FBdEIsQ0FBekMsQ0FGYSxDQUFYLENBQVY7QUFHRCxLQUxELE1BTUs7QUFDSHFzQixnQkFBVXB6QixPQUFPMkksR0FBUCxDQUFXLElBQUlwSSxRQUFKLENBQWEsS0FBS1ksWUFBbEIsQ0FBWCxDQUFWO0FBQ0Q7QUFDRDtBQUNBaXlCLFlBQVEzc0IsRUFBUixHQUFhMEosU0FBUzRGLElBQVQsQ0FBYyxJQUFkLENBQWI7QUFDQTtBQUNBcWQsWUFBUWhsQixXQUFSLEdBQXNCNk0sU0FBVTlLLFNBQVN3akIsR0FBVCxDQUFhLFNBQWIsQ0FBVixDQUF0QjtBQUNBUCxZQUFRN2tCLFVBQVIsR0FBcUIwTSxTQUFVOUssU0FBU3dqQixHQUFULENBQWEsU0FBYixDQUFWLENBQXJCO0FBQ0FQLFlBQVEva0IsWUFBUixHQUF1QjRNLFNBQVU5SyxTQUFTd2pCLEdBQVQsQ0FBYSxTQUFiLENBQVYsQ0FBdkI7QUFDQVAsWUFBUTlrQixhQUFSLEdBQXdCMk0sU0FBVTlLLFNBQVN3akIsR0FBVCxDQUFhLFNBQWIsQ0FBVixDQUF4Qjs7QUFFQTtBQUNBLFFBQUcsS0FBS3JDLE9BQUwsQ0FBYW5CLDJCQUFoQixFQUE0QztBQUMxQyxVQUFHaGdCLFNBQVN5akIsUUFBVCxFQUFILEVBQXVCO0FBQ25CLFlBQUl2TCxhQUFhbFksU0FBUzBqQixXQUFULENBQXFCLEVBQUVDLGVBQWUsSUFBakIsRUFBdUJDLGNBQWMsS0FBckMsRUFBckIsRUFBbUVsdEIsQ0FBcEY7QUFDQSxZQUFJeWhCLGNBQWNuWSxTQUFTMGpCLFdBQVQsQ0FBcUIsRUFBRUMsZUFBZSxJQUFqQixFQUF1QkMsY0FBYyxLQUFyQyxFQUFyQixFQUFtRWh0QixDQUFyRjtBQUNBLFlBQUl3aEIsV0FBV3BZLFNBQVN3akIsR0FBVCxDQUFhLGFBQWIsQ0FBZjtBQUNBUCxnQkFBUS9LLFVBQVIsR0FBcUJBLFVBQXJCO0FBQ0ErSyxnQkFBUTlLLFdBQVIsR0FBc0JBLFdBQXRCO0FBQ0E4SyxnQkFBUTdLLFFBQVIsR0FBbUJBLFFBQW5CO0FBQ0g7QUFDRjs7QUFFRDtBQUNBLFNBQUtxSixTQUFMLENBQWV6aEIsU0FBUzRGLElBQVQsQ0FBYyxJQUFkLENBQWYsSUFBc0NxZCxPQUF0Qzs7QUFFQSxRQUFJWSxNQUFNWixRQUFRNXNCLElBQVIsQ0FBYWxDLENBQW5CLENBQUosRUFBMkI7QUFDekI4dUIsY0FBUTVzQixJQUFSLENBQWFsQyxDQUFiLEdBQWlCLENBQWpCO0FBQ0Q7O0FBRUQsUUFBSTB2QixNQUFNWixRQUFRNXNCLElBQVIsQ0FBYUcsQ0FBbkIsQ0FBSixFQUEyQjtBQUN6QnlzQixjQUFRNXNCLElBQVIsQ0FBYUcsQ0FBYixHQUFpQixDQUFqQjtBQUNEOztBQUVELFFBQUl3c0Isd0JBQXdCLElBQXhCLElBQWdDQSxxQkFBcUJ2dkIsTUFBckIsR0FBOEIsQ0FBbEUsRUFBcUU7QUFDbkUsVUFBSXF3QixXQUFKO0FBQ0FBLG9CQUFjNXpCLE9BQU9vTyxlQUFQLEdBQXlCOUYsR0FBekIsQ0FBNkJ0SSxPQUFPZSxRQUFQLEVBQTdCLEVBQWdEZ3lCLE9BQWhELENBQWQ7QUFDQSxXQUFLcEIsbUJBQUwsQ0FBeUJpQyxXQUF6QixFQUFzQ2Qsb0JBQXRDLEVBQTREOXlCLE1BQTVEO0FBQ0Q7QUFDRjtBQUNGLENBekREOztBQTJEQTs7O0FBR0FreEIsWUFBWTV4QixTQUFaLENBQXNCdXdCLElBQXRCLEdBQTZCLFlBQVk7QUFDdkMsT0FBSzJCLE9BQUwsR0FBZSxJQUFmOztBQUVBLFNBQU8sSUFBUCxDQUh1QyxDQUcxQjtBQUNkLENBSkQ7O0FBTUExeUIsT0FBT0MsT0FBUCxHQUFpQixTQUFTMmUsR0FBVCxDQUFhbVcsU0FBYixFQUF3QjtBQUN2QyxTQUFPM0MsV0FBUDtBQUNELENBRkQsQzs7Ozs7Ozs7Ozs7Ozs7QUNsWUEsSUFBSWh4QixXQUFXLG1CQUFBOUIsQ0FBUSxrRkFBUixDQUFmO0FBQ0EsSUFBSUQsb0JBQW9CLG1CQUFBQyxDQUFRLG9HQUFSLENBQXhCO0FBQ0EsSUFBSTRVLFFBQVEsbUJBQUE1VSxDQUFRLDRFQUFSLENBQVo7O0FBRUE4QixTQUFTWixTQUFULENBQW1CNFQsSUFBbkIsR0FBMEIsWUFDMUI7QUFDRSxNQUFJbFQsU0FBUyxLQUFLYyxZQUFMLENBQWtCcVMsU0FBbEIsRUFBYjtBQUNBLE9BQUtDLGFBQUwsR0FBcUJwVCxPQUFPNkUsYUFBUCxJQUNaLEtBQUt3TyxZQUFMLEdBQW9CLEtBQUtDLGVBQXpCLEdBQTJDLEtBQUtDLGlCQURwQyxJQUN5RCxLQUFLOUwsWUFEbkY7QUFFQSxPQUFLK0wsYUFBTCxHQUFxQnhULE9BQU82RSxhQUFQLElBQ1osS0FBSzRPLFlBQUwsR0FBb0IsS0FBS0MsZUFBekIsR0FBMkMsS0FBS0MsaUJBRHBDLElBQ3lELEtBQUtsTSxZQURuRjs7QUFJQSxNQUFJekMsS0FBS3NILEdBQUwsQ0FBUyxLQUFLOEcsYUFBZCxJQUErQnBULE9BQU82RSxhQUFQLEdBQXVCN0UsT0FBTzRULG1CQUFqRSxFQUNBO0FBQ0UsU0FBS1IsYUFBTCxHQUFxQnBULE9BQU82RSxhQUFQLEdBQXVCN0UsT0FBTzRULG1CQUE5QixHQUNiWixNQUFNYSxJQUFOLENBQVcsS0FBS1QsYUFBaEIsQ0FEUjtBQUVEOztBQUVELE1BQUlwTyxLQUFLc0gsR0FBTCxDQUFTLEtBQUtrSCxhQUFkLElBQStCeFQsT0FBTzZFLGFBQVAsR0FBdUI3RSxPQUFPNFQsbUJBQWpFLEVBQ0E7QUFDRSxTQUFLSixhQUFMLEdBQXFCeFQsT0FBTzZFLGFBQVAsR0FBdUI3RSxPQUFPNFQsbUJBQTlCLEdBQ2JaLE1BQU1hLElBQU4sQ0FBVyxLQUFLTCxhQUFoQixDQURSO0FBRUQ7O0FBRUQsTUFBSXJWLGtCQUFrQjIxQixjQUFsQixDQUFpQyxLQUFLMXRCLEVBQXRDLENBQUosRUFBK0M7QUFDN0MsU0FBS2dOLGFBQUwsSUFBc0JqVixrQkFBa0I0MUIsc0JBQXhDO0FBQ0EsU0FBS3ZnQixhQUFMLElBQXNCclYsa0JBQWtCNDFCLHNCQUF4QztBQUNEOztBQUVEO0FBQ0EsTUFBSSxLQUFLbGxCLEtBQUwsSUFBYyxJQUFsQixFQUNBO0FBQ0UsU0FBS2lGLE1BQUwsQ0FBWSxLQUFLVixhQUFqQixFQUFnQyxLQUFLSSxhQUFyQztBQUNEO0FBQ0Q7QUFKQSxPQUtLLElBQUksS0FBSzNFLEtBQUwsQ0FBV3RILFFBQVgsR0FBc0JoRSxNQUF0QixJQUFnQyxDQUFwQyxFQUNMO0FBQ0UsV0FBS3VRLE1BQUwsQ0FBWSxLQUFLVixhQUFqQixFQUFnQyxLQUFLSSxhQUFyQztBQUNEO0FBQ0Q7QUFKSyxTQU1MO0FBQ0UsYUFBS08sK0JBQUwsQ0FBcUMsS0FBS1gsYUFBMUMsRUFDUSxLQUFLSSxhQURiO0FBRUQ7O0FBRUR4VCxTQUFPMEYsaUJBQVAsSUFDUVYsS0FBS3NILEdBQUwsQ0FBUyxLQUFLOEcsYUFBZCxJQUErQnBPLEtBQUtzSCxHQUFMLENBQVMsS0FBS2tILGFBQWQsQ0FEdkM7O0FBR0EsT0FBS0gsWUFBTCxHQUFvQixDQUFwQjtBQUNBLE9BQUtJLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxPQUFLSCxlQUFMLEdBQXVCLENBQXZCO0FBQ0EsT0FBS0ksZUFBTCxHQUF1QixDQUF2QjtBQUNBLE9BQUtILGlCQUFMLEdBQXlCLENBQXpCO0FBQ0EsT0FBS0ksaUJBQUwsR0FBeUIsQ0FBekI7QUFDQSxPQUFLUCxhQUFMLEdBQXFCLENBQXJCO0FBQ0EsT0FBS0ksYUFBTCxHQUFxQixDQUFyQjtBQUNELENBdERELEM7Ozs7Ozs7Ozs7Ozs7O0FDSkE7O0FBQ0E7O0FBQ0EsSUFBTUwsWUFBWSxtQkFBQS9VLENBQVEsc0VBQVIsQ0FBbEI7QUFDQSxJQUFJRCxvQkFBb0IsbUJBQUFDLENBQVEsb0dBQVIsQ0FBeEI7O0FBRUE7QUFDQSxJQUFJNDFCLFdBQVcsU0FBWEEsUUFBVyxDQUFVSCxTQUFWLEVBQXFCO0FBQ25DLEtBQUksQ0FBQ0EsU0FBTCxFQUFnQjtBQUFFO0FBQVMsRUFEUSxDQUNQOztBQUU1QixzQ0FBdUJBLFNBQXZCOztBQUVBLEtBQUl2ekIsU0FBUzZTLFVBQVUwZ0IsU0FBVixDQUFiO0FBQ0EsS0FBSUksZUFBZTN6QixPQUFPaEIsU0FBMUI7O0FBRUEsS0FBSXF3QixXQUFXLElBQUlydkIsTUFBSixDQUFXLEVBQVgsRUFBZTJ3QixPQUE5Qjs7QUFFQSxVQUFTRCxNQUFULENBQWdCckIsUUFBaEIsRUFBMEJzQixPQUExQixFQUFtQztBQUNsQyxNQUFJcFQsTUFBTSxFQUFWOztBQUVBLE9BQUssSUFBSTNYLENBQVQsSUFBY3lwQixRQUFkLEVBQXdCO0FBQ3ZCOVIsT0FBSTNYLENBQUosSUFBU3lwQixTQUFTenBCLENBQVQsQ0FBVDtBQUNBOztBQUVELE9BQUssSUFBSUEsQ0FBVCxJQUFjK3FCLE9BQWQsRUFBdUI7QUFDdEJwVCxPQUFJM1gsQ0FBSixJQUFTK3FCLFFBQVEvcUIsQ0FBUixDQUFUO0FBQ0E7O0FBRUQsU0FBTzJYLEdBQVA7QUFDQTs7QUFFRCxVQUFTcVQsV0FBVCxDQUFxQkMsUUFBckIsRUFBK0I7QUFDOUIsT0FBS0YsT0FBTCxHQUFlRCxPQUFPckIsUUFBUCxFQUFpQndCLFFBQWpCLENBQWY7QUFDQSxNQUFJN3dCLE1BQUosQ0FBVzZ3QixRQUFYO0FBQ0FoekIsb0JBQWtCNDFCLHNCQUFsQixHQUEyQzVDLFNBQVM0QyxzQkFBVCxJQUFtQyxDQUE5RTs7QUFFQSxNQUFJNUMsU0FBUytDLGFBQWIsRUFBNEI7QUFDM0IvMUIscUJBQWtCMjFCLGNBQWxCLEdBQW1DM0MsU0FBUytDLGFBQTVDO0FBQ0EsR0FGRCxNQUVPO0FBQ04vMUIscUJBQWtCMjFCLGNBQWxCLEdBQW1DLEVBQW5DO0FBQ0E7QUFFRDs7QUFFRDVDLGFBQVk1eEIsU0FBWixHQUF3QmdCLE9BQU9oQixTQUEvQjs7QUFFQXUwQixXQUFXLFFBQVgsRUFBcUIsc0JBQXJCLEVBQTZDM0MsV0FBN0MsRUF2Q21DLENBdUN3QjtBQUMzRDJDLFdBQVUsTUFBVixFQUFrQixlQUFsQixFQUFtQyxVQUFVTSxJQUFWLEVBQWdCO0FBQ2xELE1BQUlDLE1BQU0sRUFBVjtBQUNBQSxNQUFJQyxpQkFBSjtBQUNBRCxNQUFJRSxxQkFBSjtBQUNBRixNQUFJRyw2QkFBSjs7QUFFQSxTQUFPSCxHQUFQO0FBQ0EsRUFQRDtBQVFBLENBaEREOztBQWtEQSxJQUFJLE9BQU9QLFNBQVAsS0FBcUIsV0FBekIsRUFBc0M7QUFBRTtBQUN2Q0csVUFBVUgsU0FBVjtBQUNBOztBQUVELzBCLE9BQU9DLE9BQVAsR0FBaUJpMUIsUUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REEsSUFBSVEsV0FBSjs7QUFFQSxJQUFJQyx5QkFBeUIsU0FBekJBLHNCQUF5QixDQUFTWixTQUFULEVBQW9CO0FBQ2hEVyxlQUFjWCxVQUFVO0FBQ3ZCYSxZQUFVLElBRGE7QUFFdkJDLGdCQUFjO0FBRlMsRUFBVixDQUFkO0FBSUEsQ0FMRDs7QUFPQSxJQUFJTixvQkFBb0IsU0FBcEJBLGlCQUFvQixDQUFVek4sRUFBVixFQUFjZ08sT0FBZCxFQUF1QjtBQUM5QyxLQUFJbEQsT0FBTzlLLEdBQUdpTyxRQUFILEVBQVg7QUFDQSxLQUFJQyxZQUFZRixRQUFRQyxRQUFSLEVBQWhCO0FBQ0EsS0FBSUUsV0FBV3JELEtBQUtzRCxLQUFMLENBQVdGLFNBQVgsQ0FBZjtBQUNBLEtBQUk3RCxVQUFVLEVBQUNqRixNQUFNLHNCQUFQLEVBQWQ7O0FBRUF3SSxhQUFZSyxRQUFaLEdBQXVCdG1CLE1BQXZCO0FBQ0FpbUIsYUFBWWxzQixHQUFaLENBQWdCeXNCLFFBQWhCO0FBQ0FQLGFBQVl4MEIsTUFBWixDQUFtQml4QixPQUFuQixFQUE0QkksR0FBNUI7O0FBRUFtRCxhQUFZdEMsR0FBWixDQUFnQixZQUFoQixFQUE4QixZQUFVO0FBQ3ZDLE1BQUkrQyxNQUFNLEVBQVY7QUFDQVQsY0FBWTNqQixLQUFaLEdBQW9CakQsT0FBcEIsQ0FBNEIsVUFBU21rQixHQUFULEVBQWM3ckIsQ0FBZCxFQUFpQjtBQUM1Qyt1QixPQUFJbEQsSUFBSTNyQixFQUFKLEVBQUosSUFBZ0IsRUFBQ25DLEdBQUU4dEIsSUFBSXFCLFFBQUosQ0FBYSxHQUFiLENBQUgsRUFBc0I5c0IsR0FBR3lyQixJQUFJcUIsUUFBSixDQUFhLEdBQWIsQ0FBekIsRUFBaEI7QUFDQSxHQUZEOztBQUlBeE0sS0FBRy9WLEtBQUgsR0FBV3doQixTQUFYLENBQXFCLFVBQVNOLEdBQVQsRUFBYzdyQixDQUFkLEVBQWlCO0FBQ3JDLFVBQU8sRUFBQ2pDLEdBQUdneEIsSUFBSWxELElBQUkzckIsRUFBSixFQUFKLEVBQWNuQyxDQUFsQixFQUFxQnFDLEdBQUcydUIsSUFBSWxELElBQUkzckIsRUFBSixFQUFKLEVBQWNFLENBQXRDLEVBQVA7QUFDQSxHQUZEOztBQUlBc3VCLFVBQVEvakIsS0FBUixHQUFnQndoQixTQUFoQixDQUEwQixVQUFTTixHQUFULEVBQWM3ckIsQ0FBZCxFQUFpQjtBQUMxQyxVQUFPLEVBQUNqQyxHQUFHZ3hCLElBQUlsRCxJQUFJM3JCLEVBQUosRUFBSixFQUFjbkMsQ0FBbEIsRUFBcUJxQyxHQUFHMnVCLElBQUlsRCxJQUFJM3JCLEVBQUosRUFBSixFQUFjRSxDQUF0QyxFQUFQO0FBQ0EsR0FGRDs7QUFJQXNnQixLQUFHNkssT0FBSCxDQUFXLHNCQUFYO0FBQ0FtRCxVQUFRbkQsT0FBUixDQUFnQixzQkFBaEI7QUFFQSxFQWpCRDtBQWtCQSxDQTVCRDs7QUE4QkEsSUFBSTZDLHdCQUF3QixTQUF4QkEscUJBQXdCLENBQVMxTixFQUFULEVBQWFnTyxPQUFiLEVBQXNCYixzQkFBdEIsRUFBOEM7QUFDekUsS0FBSXJDLE9BQU85SyxHQUFHaU8sUUFBSCxFQUFYO0FBQ0EsS0FBSUMsWUFBWUYsUUFBUUMsUUFBUixFQUFoQjtBQUNBLEtBQUlLLGFBQWF4RCxLQUFLNXRCLFlBQUwsQ0FBa0JneEIsU0FBbEIsQ0FBakI7O0FBRUEsS0FBSUssWUFBWSxFQUFoQjs7QUFFQUQsWUFBV3RuQixPQUFYLENBQW1CLFVBQVNta0IsR0FBVCxFQUFjN3JCLENBQWQsRUFBaUI7QUFDbkNpdkIsWUFBVXBELElBQUkzckIsRUFBSixFQUFWLElBQXNCLElBQXRCO0FBQ0EsRUFGRDs7QUFJQW91QixhQUFZSyxRQUFaLEdBQXVCdG1CLE1BQXZCO0FBQ0FpbUIsYUFBWWxzQixHQUFaLENBQWdCNHNCLFVBQWhCO0FBQ0FWLGFBQVl4MEIsTUFBWixDQUFtQixFQUFDZ3NCLE1BQU0sc0JBQVAsRUFBK0JrSSxlQUFlLEVBQTlDLEVBQW5CLEVBQXNFN0MsR0FBdEU7O0FBRUFtRCxhQUFZdEMsR0FBWixDQUFnQixZQUFoQixFQUE4QixZQUFVO0FBQ3ZDLE1BQUkrQyxNQUFNLEVBQVY7QUFDQVQsY0FBWTNqQixLQUFaLEdBQW9CakQsT0FBcEIsQ0FBNEIsVUFBU21rQixHQUFULEVBQWM3ckIsQ0FBZCxFQUFpQjtBQUM1Qyt1QixPQUFJbEQsSUFBSTNyQixFQUFKLEVBQUosSUFBZ0IsRUFBQ25DLEdBQUc4dEIsSUFBSXFCLFFBQUosQ0FBYSxHQUFiLENBQUosRUFBdUI5c0IsR0FBR3lyQixJQUFJcUIsUUFBSixDQUFhLEdBQWIsQ0FBMUIsRUFBaEI7QUFDQSxHQUZEOztBQUlBeE0sS0FBRy9WLEtBQUgsR0FBV3doQixTQUFYLENBQXFCLFVBQVNOLEdBQVQsRUFBYzdyQixDQUFkLEVBQWdCO0FBQ3BDLE9BQUkrdUIsSUFBSWxELElBQUkzckIsRUFBSixFQUFKLENBQUosRUFBbUI7QUFDbEIsV0FBTyxFQUFDbkMsR0FBR2d4QixJQUFJbEQsSUFBSTNyQixFQUFKLEVBQUosRUFBY25DLENBQWxCLEVBQXFCcUMsR0FBRzJ1QixJQUFJbEQsSUFBSTNyQixFQUFKLEVBQUosRUFBY0UsQ0FBdEMsRUFBUDtBQUNBLElBRkQsTUFFTztBQUNOLFdBQU95ckIsSUFBSXFCLFFBQUosRUFBUDtBQUNBO0FBQ0QsR0FORDs7QUFRQXdCLFVBQVEvakIsS0FBUixHQUFnQndoQixTQUFoQixDQUEwQixVQUFTTixHQUFULEVBQWM3ckIsQ0FBZCxFQUFnQjtBQUN6QyxPQUFJK3VCLElBQUlsRCxJQUFJM3JCLEVBQUosRUFBSixDQUFKLEVBQW1CO0FBQ2xCLFdBQU8sRUFBQ25DLEdBQUdneEIsSUFBSWxELElBQUkzckIsRUFBSixFQUFKLEVBQWNuQyxDQUFsQixFQUFxQnFDLEdBQUcydUIsSUFBSWxELElBQUkzckIsRUFBSixFQUFKLEVBQWNFLENBQXRDLEVBQVA7QUFDQSxJQUZELE1BRU87QUFDTixXQUFPeXJCLElBQUlxQixRQUFKLEVBQVA7QUFDQTtBQUNELEdBTkQ7O0FBUUF4TSxLQUFHNW1CLE1BQUgsQ0FBVSxFQUFDZ3NCLE1BQU0sc0JBQVAsRUFBZ0NrRSxXQUFXLEtBQTNDLEVBQWtEZ0UsZUFBZWUsR0FBakUsRUFBc0VsQix3QkFBd0JBLHNCQUE5RixFQUFWLEVBQWlJMUMsR0FBakk7QUFDQXVELFVBQVE1MEIsTUFBUixDQUFlLEVBQUNnc0IsTUFBTSxzQkFBUCxFQUFnQ2tFLFdBQVcsS0FBM0MsRUFBa0RnRSxlQUFlZSxHQUFqRSxFQUFzRWxCLHdCQUF3QkEsc0JBQTlGLEVBQWYsRUFBc0kxQyxHQUF0STs7QUFFQSxNQUFJK0Qsa0JBQWtCLEtBQXRCO0FBQUEsTUFBNkJDLHVCQUF1QixLQUFwRDs7QUFFQXpPLEtBQUdzTCxHQUFILENBQU8sWUFBUCxFQUFxQixZQUFVO0FBQzlCa0QscUJBQWtCLElBQWxCO0FBQ0EsT0FBSUMsb0JBQUosRUFBMEI7QUFDekJ6TyxPQUFHNkssT0FBSCxDQUFXLHNCQUFYO0FBQ0FtRCxZQUFRbkQsT0FBUixDQUFnQixzQkFBaEI7QUFDQTtBQUNELEdBTkQ7O0FBUUFtRCxVQUFRMUMsR0FBUixDQUFZLFlBQVosRUFBMEIsWUFBVTtBQUNuQ21ELDBCQUF1QixJQUF2QjtBQUNBLE9BQUlELGVBQUosRUFBcUI7QUFDcEJ4TyxPQUFHNkssT0FBSCxDQUFXLHNCQUFYO0FBQ0FtRCxZQUFRbkQsT0FBUixDQUFnQixzQkFBaEI7QUFDQTtBQUNELEdBTkQ7QUFRQSxFQTNDRDtBQTRDQSxDQTNERDs7QUE2REEsSUFBSThDLGdDQUFnQyxTQUFoQ0EsNkJBQWdDLENBQVMzTixFQUFULEVBQWFnTyxPQUFiLEVBQXNCYixzQkFBdEIsRUFBOEM7QUFDakYsS0FBSXJDLE9BQU85SyxHQUFHaU8sUUFBSCxFQUFYO0FBQ0EsS0FBSUMsWUFBWUYsUUFBUUMsUUFBUixFQUFoQjtBQUNBLEtBQUlLLGFBQWF4RCxLQUFLNXRCLFlBQUwsQ0FBa0JneEIsU0FBbEIsQ0FBakI7O0FBRUEsS0FBSUssWUFBWSxFQUFoQjs7QUFFQUQsWUFBV3RuQixPQUFYLENBQW1CLFVBQVNta0IsR0FBVCxFQUFjN3JCLENBQWQsRUFBaUI7QUFDbkNpdkIsWUFBVXBELElBQUkzckIsRUFBSixFQUFWLElBQXNCLElBQXRCO0FBQ0EsRUFGRDs7QUFLQSxLQUFJa3ZCLGFBQWExTyxHQUFHME8sVUFBSCxFQUFqQjtBQUNBQSxjQUFhQSxXQUFXaHRCLEdBQVgsQ0FBZTRzQixVQUFmLENBQWI7QUFDQUksY0FBYUEsV0FBV2h0QixHQUFYLENBQWU0c0IsV0FBV0ssWUFBWCxFQUFmLENBQWI7O0FBRUFmLGFBQVlLLFFBQVosR0FBdUJ0bUIsTUFBdkI7QUFDQWltQixhQUFZbHNCLEdBQVosQ0FBZ0JndEIsVUFBaEI7QUFDQWQsYUFBWXgwQixNQUFaLENBQW1CLEVBQUNnc0IsTUFBTSxzQkFBUCxFQUErQmtJLGVBQWUsRUFBOUMsRUFBbkIsRUFBc0U3QyxHQUF0RTs7QUFFQW1ELGFBQVl0QyxHQUFaLENBQWdCLFlBQWhCLEVBQThCLFlBQVU7QUFDdkMsTUFBSStDLE1BQU0sRUFBVjtBQUNBVCxjQUFZM2pCLEtBQVosR0FBb0JqRCxPQUFwQixDQUE0QixVQUFTbWtCLEdBQVQsRUFBYzdyQixDQUFkLEVBQWlCO0FBQzVDK3VCLE9BQUlsRCxJQUFJM3JCLEVBQUosRUFBSixJQUFnQixFQUFDbkMsR0FBRzh0QixJQUFJcUIsUUFBSixDQUFhLEdBQWIsQ0FBSixFQUF1QjlzQixHQUFHeXJCLElBQUlxQixRQUFKLENBQWEsR0FBYixDQUExQixFQUFoQjtBQUNBLEdBRkQ7O0FBSUF4TSxLQUFHL1YsS0FBSCxHQUFXd2hCLFNBQVgsQ0FBcUIsVUFBU04sR0FBVCxFQUFjN3JCLENBQWQsRUFBZ0I7QUFDcEMsT0FBSSt1QixJQUFJbEQsSUFBSTNyQixFQUFKLEVBQUosQ0FBSixFQUFtQjtBQUNsQixXQUFPLEVBQUNuQyxHQUFHZ3hCLElBQUlsRCxJQUFJM3JCLEVBQUosRUFBSixFQUFjbkMsQ0FBbEIsRUFBcUJxQyxHQUFHMnVCLElBQUlsRCxJQUFJM3JCLEVBQUosRUFBSixFQUFjRSxDQUF0QyxFQUFQO0FBQ0EsSUFGRCxNQUVPO0FBQ04sV0FBT3lyQixJQUFJcUIsUUFBSixFQUFQO0FBQ0E7QUFDRCxHQU5EOztBQVFBd0IsVUFBUS9qQixLQUFSLEdBQWdCd2hCLFNBQWhCLENBQTBCLFVBQVNOLEdBQVQsRUFBYzdyQixDQUFkLEVBQWdCO0FBQ3pDLE9BQUkrdUIsSUFBSWxELElBQUkzckIsRUFBSixFQUFKLENBQUosRUFBbUI7QUFDbEIsV0FBTyxFQUFDbkMsR0FBR2d4QixJQUFJbEQsSUFBSTNyQixFQUFKLEVBQUosRUFBY25DLENBQWxCLEVBQXFCcUMsR0FBRzJ1QixJQUFJbEQsSUFBSTNyQixFQUFKLEVBQUosRUFBY0UsQ0FBdEMsRUFBUDtBQUNBLElBRkQsTUFFTztBQUNOLFdBQU95ckIsSUFBSXFCLFFBQUosRUFBUDtBQUNBO0FBQ0QsR0FORDs7QUFRQXhNLEtBQUc1bUIsTUFBSCxDQUFVLEVBQUNnc0IsTUFBTSxzQkFBUCxFQUFnQ2tFLFdBQVcsS0FBM0MsRUFBa0RnRSxlQUFlZSxHQUFqRSxFQUFzRWxCLHdCQUF3QkEsc0JBQTlGLEVBQVYsRUFBaUkxQyxHQUFqSTtBQUNBdUQsVUFBUTUwQixNQUFSLENBQWUsRUFBQ2dzQixNQUFNLHNCQUFQLEVBQWdDa0UsV0FBVyxLQUEzQyxFQUFrRGdFLGVBQWVlLEdBQWpFLEVBQXNFbEIsd0JBQXdCQSxzQkFBOUYsRUFBZixFQUFzSTFDLEdBQXRJOztBQUVBLE1BQUkrRCxrQkFBa0IsS0FBdEI7QUFBQSxNQUE2QkMsdUJBQXVCLEtBQXBEOztBQUVBek8sS0FBR3NMLEdBQUgsQ0FBTyxZQUFQLEVBQXFCLFlBQVU7QUFDOUJrRCxxQkFBa0IsSUFBbEI7QUFDQSxPQUFJQyxvQkFBSixFQUEwQjtBQUN6QnpPLE9BQUc2SyxPQUFILENBQVcsc0JBQVg7QUFDQW1ELFlBQVFuRCxPQUFSLENBQWdCLHNCQUFoQjtBQUNBO0FBQ0QsR0FORDs7QUFRQW1ELFVBQVExQyxHQUFSLENBQVksWUFBWixFQUEwQixZQUFVO0FBQ25DbUQsMEJBQXVCLElBQXZCO0FBQ0EsT0FBSUQsZUFBSixFQUFxQjtBQUNwQnhPLE9BQUc2SyxPQUFILENBQVcsc0JBQVg7QUFDQW1ELFlBQVFuRCxPQUFSLENBQWdCLHNCQUFoQjtBQUNBO0FBQ0QsR0FORDtBQVFBLEVBM0NEO0FBNENBLENBaEVEO1FBaUVRZ0Qsc0IsR0FBQUEsc0I7UUFBd0JKLGlCLEdBQUFBLGlCO1FBQW1CQyxxQixHQUFBQSxxQjtRQUF1QkMsNkIsR0FBQUEsNkIiLCJmaWxlIjoiY3l0b3NjYXBlLXN5bmNoZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjeXRvc2NhcGVTeW5jaGVkXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImN5dG9zY2FwZVN5bmNoZWRcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBGRExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vRkRMYXlvdXRDb25zdGFudHMnKTtcblxuZnVuY3Rpb24gQ29TRUNvbnN0YW50cygpIHtcbn1cblxuLy9Db1NFQ29uc3RhbnRzIGluaGVyaXRzIHN0YXRpYyBwcm9wcyBpbiBGRExheW91dENvbnN0YW50c1xuZm9yICh2YXIgcHJvcCBpbiBGRExheW91dENvbnN0YW50cykge1xuICBDb1NFQ29uc3RhbnRzW3Byb3BdID0gRkRMYXlvdXRDb25zdGFudHNbcHJvcF07XG59XG5cbkNvU0VDb25zdGFudHMuREVGQVVMVF9VU0VfTVVMVElfTEVWRUxfU0NBTElORyA9IGZhbHNlO1xuQ29TRUNvbnN0YW50cy5ERUZBVUxUX1JBRElBTF9TRVBBUkFUSU9OID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSDtcbkNvU0VDb25zdGFudHMuREVGQVVMVF9DT01QT05FTlRfU0VQRVJBVElPTiA9IDYwO1xuQ29TRUNvbnN0YW50cy5USUxFID0gdHJ1ZTtcbkNvU0VDb25zdGFudHMuVElMSU5HX1BBRERJTkdfVkVSVElDQUwgPSAxMDtcbkNvU0VDb25zdGFudHMuVElMSU5HX1BBRERJTkdfSE9SSVpPTlRBTCA9IDEwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvU0VDb25zdGFudHM7XG4iLCJ2YXIgRkRMYXlvdXRFZGdlID0gcmVxdWlyZSgnLi9GRExheW91dEVkZ2UnKTtcblxuZnVuY3Rpb24gQ29TRUVkZ2Uoc291cmNlLCB0YXJnZXQsIHZFZGdlKSB7XG4gIEZETGF5b3V0RWRnZS5jYWxsKHRoaXMsIHNvdXJjZSwgdGFyZ2V0LCB2RWRnZSk7XG59XG5cbkNvU0VFZGdlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRkRMYXlvdXRFZGdlLnByb3RvdHlwZSk7XG5mb3IgKHZhciBwcm9wIGluIEZETGF5b3V0RWRnZSkge1xuICBDb1NFRWRnZVtwcm9wXSA9IEZETGF5b3V0RWRnZVtwcm9wXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb1NFRWRnZVxuIiwidmFyIExHcmFwaCA9IHJlcXVpcmUoJy4vTEdyYXBoJyk7XG5cbmZ1bmN0aW9uIENvU0VHcmFwaChwYXJlbnQsIGdyYXBoTWdyLCB2R3JhcGgpIHtcbiAgTEdyYXBoLmNhbGwodGhpcywgcGFyZW50LCBncmFwaE1nciwgdkdyYXBoKTtcbn1cblxuQ29TRUdyYXBoLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEdyYXBoLnByb3RvdHlwZSk7XG5mb3IgKHZhciBwcm9wIGluIExHcmFwaCkge1xuICBDb1NFR3JhcGhbcHJvcF0gPSBMR3JhcGhbcHJvcF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29TRUdyYXBoO1xuIiwidmFyIExHcmFwaE1hbmFnZXIgPSByZXF1aXJlKCcuL0xHcmFwaE1hbmFnZXInKTtcblxuZnVuY3Rpb24gQ29TRUdyYXBoTWFuYWdlcihsYXlvdXQpIHtcbiAgTEdyYXBoTWFuYWdlci5jYWxsKHRoaXMsIGxheW91dCk7XG59XG5cbkNvU0VHcmFwaE1hbmFnZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMR3JhcGhNYW5hZ2VyLnByb3RvdHlwZSk7XG5mb3IgKHZhciBwcm9wIGluIExHcmFwaE1hbmFnZXIpIHtcbiAgQ29TRUdyYXBoTWFuYWdlcltwcm9wXSA9IExHcmFwaE1hbmFnZXJbcHJvcF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29TRUdyYXBoTWFuYWdlcjtcbiIsInZhciBGRExheW91dCA9IHJlcXVpcmUoJy4vRkRMYXlvdXQnKTtcbnZhciBDb1NFR3JhcGhNYW5hZ2VyID0gcmVxdWlyZSgnLi9Db1NFR3JhcGhNYW5hZ2VyJyk7XG52YXIgQ29TRUdyYXBoID0gcmVxdWlyZSgnLi9Db1NFR3JhcGgnKTtcbnZhciBDb1NFTm9kZSA9IHJlcXVpcmUoJy4vQ29TRU5vZGUnKTtcbnZhciBDb1NFRWRnZSA9IHJlcXVpcmUoJy4vQ29TRUVkZ2UnKTtcbnZhciBDb1NFQ29uc3RhbnRzID0gcmVxdWlyZSgnLi9Db1NFQ29uc3RhbnRzJyk7XG52YXIgRkRMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0ZETGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgTGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9MYXlvdXRDb25zdGFudHMnKTtcbnZhciBQb2ludCA9IHJlcXVpcmUoJy4vUG9pbnQnKTtcbnZhciBQb2ludEQgPSByZXF1aXJlKCcuL1BvaW50RCcpO1xudmFyIExheW91dCA9IHJlcXVpcmUoJy4vTGF5b3V0Jyk7XG52YXIgSW50ZWdlciA9IHJlcXVpcmUoJy4vSW50ZWdlcicpO1xudmFyIElHZW9tZXRyeSA9IHJlcXVpcmUoJy4vSUdlb21ldHJ5Jyk7XG52YXIgTEdyYXBoID0gcmVxdWlyZSgnLi9MR3JhcGgnKTtcbnZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL1RyYW5zZm9ybScpO1xuXG5mdW5jdGlvbiBDb1NFTGF5b3V0KCkge1xuICBGRExheW91dC5jYWxsKHRoaXMpO1xuICBcbiAgdGhpcy50b0JlVGlsZWQgPSB7fTsgLy8gTWVtb3JpemUgaWYgYSBub2RlIGlzIHRvIGJlIHRpbGVkIG9yIGlzIHRpbGVkXG59XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShGRExheW91dC5wcm90b3R5cGUpO1xuXG5mb3IgKHZhciBwcm9wIGluIEZETGF5b3V0KSB7XG4gIENvU0VMYXlvdXRbcHJvcF0gPSBGRExheW91dFtwcm9wXTtcbn1cblxuQ29TRUxheW91dC5wcm90b3R5cGUubmV3R3JhcGhNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZ20gPSBuZXcgQ29TRUdyYXBoTWFuYWdlcih0aGlzKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcbiAgcmV0dXJuIGdtO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUubmV3R3JhcGggPSBmdW5jdGlvbiAodkdyYXBoKSB7XG4gIHJldHVybiBuZXcgQ29TRUdyYXBoKG51bGwsIHRoaXMuZ3JhcGhNYW5hZ2VyLCB2R3JhcGgpO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUubmV3Tm9kZSA9IGZ1bmN0aW9uICh2Tm9kZSkge1xuICByZXR1cm4gbmV3IENvU0VOb2RlKHRoaXMuZ3JhcGhNYW5hZ2VyLCB2Tm9kZSk7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5uZXdFZGdlID0gZnVuY3Rpb24gKHZFZGdlKSB7XG4gIHJldHVybiBuZXcgQ29TRUVkZ2UobnVsbCwgbnVsbCwgdkVkZ2UpO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuaW5pdFBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIEZETGF5b3V0LnByb3RvdHlwZS5pbml0UGFyYW1ldGVycy5jYWxsKHRoaXMsIGFyZ3VtZW50cyk7XG4gIGlmICghdGhpcy5pc1N1YkxheW91dCkge1xuICAgIGlmIChDb1NFQ29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggPCAxMClcbiAgICB7XG4gICAgICB0aGlzLmlkZWFsRWRnZUxlbmd0aCA9IDEwO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgdGhpcy5pZGVhbEVkZ2VMZW5ndGggPSBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEg7XG4gICAgfVxuXG4gICAgdGhpcy51c2VTbWFydElkZWFsRWRnZUxlbmd0aENhbGN1bGF0aW9uID1cbiAgICAgICAgICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9VU0VfU01BUlRfSURFQUxfRURHRV9MRU5HVEhfQ0FMQ1VMQVRJT047XG4gICAgdGhpcy5zcHJpbmdDb25zdGFudCA9XG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX1NQUklOR19TVFJFTkdUSDtcbiAgICB0aGlzLnJlcHVsc2lvbkNvbnN0YW50ID1cbiAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUkVQVUxTSU9OX1NUUkVOR1RIO1xuICAgIHRoaXMuZ3Jhdml0eUNvbnN0YW50ID1cbiAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9TVFJFTkdUSDtcbiAgICB0aGlzLmNvbXBvdW5kR3Jhdml0eUNvbnN0YW50ID1cbiAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9TVFJFTkdUSDtcbiAgICB0aGlzLmdyYXZpdHlSYW5nZUZhY3RvciA9XG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SO1xuICAgIHRoaXMuY29tcG91bmRHcmF2aXR5UmFuZ2VGYWN0b3IgPVxuICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUjtcbiAgfVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY3JlYXRlQmVuZHNBc05lZWRlZCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0NSRUFURV9CRU5EU19BU19ORUVERUQ7XG4gIGlmIChjcmVhdGVCZW5kc0FzTmVlZGVkKVxuICB7XG4gICAgdGhpcy5jcmVhdGVCZW5kcG9pbnRzKCk7XG4gICAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxFZGdlcygpO1xuICB9XG5cbiAgdGhpcy5sZXZlbCA9IDA7XG4gIHJldHVybiB0aGlzLmNsYXNzaWNMYXlvdXQoKTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmNsYXNzaWNMYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubm9kZXNXaXRoR3Jhdml0eSA9IHRoaXMuY2FsY3VsYXRlTm9kZXNUb0FwcGx5R3Jhdml0YXRpb25UbygpO1xuICB0aGlzLmdyYXBoTWFuYWdlci5zZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbih0aGlzLm5vZGVzV2l0aEdyYXZpdHkpO1xuICB0aGlzLmNhbGNOb09mQ2hpbGRyZW5Gb3JBbGxOb2RlcygpO1xuICB0aGlzLmdyYXBoTWFuYWdlci5jYWxjTG93ZXN0Q29tbW9uQW5jZXN0b3JzKCk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLmNhbGNJbmNsdXNpb25UcmVlRGVwdGhzKCk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5jYWxjRXN0aW1hdGVkU2l6ZSgpO1xuICB0aGlzLmNhbGNJZGVhbEVkZ2VMZW5ndGhzKCk7XG4gIFxuICBpZiAoIXRoaXMuaW5jcmVtZW50YWwpXG4gIHtcbiAgICB2YXIgZm9yZXN0ID0gdGhpcy5nZXRGbGF0Rm9yZXN0KCk7XG5cbiAgICAvLyBUaGUgZ3JhcGggYXNzb2NpYXRlZCB3aXRoIHRoaXMgbGF5b3V0IGlzIGZsYXQgYW5kIGEgZm9yZXN0XG4gICAgaWYgKGZvcmVzdC5sZW5ndGggPiAwKVxuICAgIHtcbiAgICAgIHRoaXMucG9zaXRpb25Ob2Rlc1JhZGlhbGx5KGZvcmVzdCk7XG4gICAgfVxuICAgIC8vIFRoZSBncmFwaCBhc3NvY2lhdGVkIHdpdGggdGhpcyBsYXlvdXQgaXMgbm90IGZsYXQgb3IgYSBmb3Jlc3RcbiAgICBlbHNlXG4gICAge1xuICAgICAgLy8gUmVkdWNlIHRoZSB0cmVlcyB3aGVuIGluY3JlbWVudGFsIG1vZGUgaXMgbm90IGVuYWJsZWQgYW5kIGdyYXBoIGlzIG5vdCBhIGZvcmVzdCBcbiAgICAgIHRoaXMucmVkdWNlVHJlZXMoKTtcbiAgICAgIC8vIFVwZGF0ZSBub2RlcyB0aGF0IGdyYXZpdHkgd2lsbCBiZSBhcHBsaWVkXG4gICAgICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uKCk7XG4gICAgICB2YXIgYWxsTm9kZXMgPSBuZXcgU2V0KHRoaXMuZ2V0QWxsTm9kZXMoKSk7XG4gICAgICB2YXIgaW50ZXJzZWN0aW9uID0gdGhpcy5ub2Rlc1dpdGhHcmF2aXR5LmZpbHRlcih4ID0+IGFsbE5vZGVzLmhhcyh4KSk7XG4gICAgICB0aGlzLmdyYXBoTWFuYWdlci5zZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbihpbnRlcnNlY3Rpb24pO1xuICAgICAgXG4gICAgICB0aGlzLnBvc2l0aW9uTm9kZXNSYW5kb21seSgpO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuaW5pdFNwcmluZ0VtYmVkZGVyKCk7XG4gIHRoaXMucnVuU3ByaW5nRW1iZWRkZXIoKTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy50b3RhbEl0ZXJhdGlvbnMrKztcbiAgXG4gIGlmICh0aGlzLnRvdGFsSXRlcmF0aW9ucyA9PT0gdGhpcy5tYXhJdGVyYXRpb25zICYmICF0aGlzLmlzVHJlZUdyb3dpbmcgJiYgIXRoaXMuaXNHcm93dGhGaW5pc2hlZCkge1xuICAgIGlmKHRoaXMucHJ1bmVkTm9kZXNBbGwubGVuZ3RoID4gMCl7XG4gICAgICB0aGlzLmlzVHJlZUdyb3dpbmcgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlOyAgXG4gICAgfVxuICB9XG4gIFxuICBpZiAodGhpcy50b3RhbEl0ZXJhdGlvbnMgJSBGRExheW91dENvbnN0YW50cy5DT05WRVJHRU5DRV9DSEVDS19QRVJJT0QgPT0gMCAgJiYgIXRoaXMuaXNUcmVlR3Jvd2luZyAmJiAhdGhpcy5pc0dyb3d0aEZpbmlzaGVkKVxuICB7XG4gICAgaWYgKHRoaXMuaXNDb252ZXJnZWQoKSlcbiAgICB7XG4gICAgICBpZih0aGlzLnBydW5lZE5vZGVzQWxsLmxlbmd0aCA+IDApe1xuICAgICAgICB0aGlzLmlzVHJlZUdyb3dpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlOyAgXG4gICAgICB9IFxuICAgIH1cblxuICAgIHRoaXMuY29vbGluZ0ZhY3RvciA9IHRoaXMuaW5pdGlhbENvb2xpbmdGYWN0b3IgKlxuICAgICAgICAgICAgKCh0aGlzLm1heEl0ZXJhdGlvbnMgLSB0aGlzLnRvdGFsSXRlcmF0aW9ucykgLyB0aGlzLm1heEl0ZXJhdGlvbnMpO1xuICAgIHRoaXMuYW5pbWF0aW9uUGVyaW9kID0gTWF0aC5jZWlsKHRoaXMuaW5pdGlhbEFuaW1hdGlvblBlcmlvZCAqIE1hdGguc3FydCh0aGlzLmNvb2xpbmdGYWN0b3IpKTtcbiAgfVxuICAvLyBPcGVyYXRpb25zIHdoaWxlIHRyZWUgaXMgZ3Jvd2luZyBhZ2FpbiBcbiAgaWYodGhpcy5pc1RyZWVHcm93aW5nKXtcbiAgICBpZih0aGlzLmdyb3dUcmVlSXRlcmF0aW9ucyAlIDEwID09IDApe1xuICAgICAgaWYodGhpcy5wcnVuZWROb2Rlc0FsbC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnVwZGF0ZUJvdW5kcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZUdyaWQoKTtcbiAgICAgICAgdGhpcy5ncm93VHJlZSh0aGlzLnBydW5lZE5vZGVzQWxsKTtcbiAgICAgICAgLy8gVXBkYXRlIG5vZGVzIHRoYXQgZ3Jhdml0eSB3aWxsIGJlIGFwcGxpZWRcbiAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbigpO1xuICAgICAgICB2YXIgYWxsTm9kZXMgPSBuZXcgU2V0KHRoaXMuZ2V0QWxsTm9kZXMoKSk7XG4gICAgICAgIHZhciBpbnRlcnNlY3Rpb24gPSB0aGlzLm5vZGVzV2l0aEdyYXZpdHkuZmlsdGVyKHggPT4gYWxsTm9kZXMuaGFzKHgpKTtcbiAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIuc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oaW50ZXJzZWN0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnVwZGF0ZUJvdW5kcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZUdyaWQoKTsgXG4gICAgICAgIHRoaXMuY29vbGluZ0ZhY3RvciA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUw7IFxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaXNUcmVlR3Jvd2luZyA9IGZhbHNlOyAgXG4gICAgICAgIHRoaXMuaXNHcm93dGhGaW5pc2hlZCA9IHRydWU7IFxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmdyb3dUcmVlSXRlcmF0aW9ucysrO1xuICB9XG4gIC8vIE9wZXJhdGlvbnMgYWZ0ZXIgZ3Jvd3RoIGlzIGZpbmlzaGVkXG4gIGlmKHRoaXMuaXNHcm93dGhGaW5pc2hlZCl7XG4gICAgaWYgKHRoaXMuaXNDb252ZXJnZWQoKSlcbiAgICB7XG4gICAgICByZXR1cm4gdHJ1ZTsgIFxuICAgIH1cbiAgICBpZih0aGlzLmFmdGVyR3Jvd3RoSXRlcmF0aW9ucyAlIDEwID09IDApe1xuICAgICAgdGhpcy5ncmFwaE1hbmFnZXIudXBkYXRlQm91bmRzKCk7XG4gICAgICB0aGlzLnVwZGF0ZUdyaWQoKTsgXG4gICAgfVxuICAgIHRoaXMuY29vbGluZ0ZhY3RvciA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUwgKiAoKDEwMCAtIHRoaXMuYWZ0ZXJHcm93dGhJdGVyYXRpb25zKSAvIDEwMCk7XG4gICAgdGhpcy5hZnRlckdyb3d0aEl0ZXJhdGlvbnMrKztcbiAgfVxuICBcbiAgdGhpcy50b3RhbERpc3BsYWNlbWVudCA9IDA7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLnVwZGF0ZUJvdW5kcygpO1xuICB0aGlzLmNhbGNTcHJpbmdGb3JjZXMoKTtcbiAgdGhpcy5jYWxjUmVwdWxzaW9uRm9yY2VzKCk7XG4gIHRoaXMuY2FsY0dyYXZpdGF0aW9uYWxGb3JjZXMoKTtcbiAgdGhpcy5tb3ZlTm9kZXMoKTtcbiAgdGhpcy5hbmltYXRlKCk7XG4gIFxuICByZXR1cm4gZmFsc2U7IC8vIExheW91dCBpcyBub3QgZW5kZWQgeWV0IHJldHVybiBmYWxzZVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuZ2V0UG9zaXRpb25zRGF0YSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgYWxsTm9kZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2RlcygpO1xuICB2YXIgcERhdGEgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciByZWN0ID0gYWxsTm9kZXNbaV0ucmVjdDtcbiAgICB2YXIgaWQgPSBhbGxOb2Rlc1tpXS5pZDtcbiAgICBwRGF0YVtpZF0gPSB7XG4gICAgICBpZDogaWQsXG4gICAgICB4OiByZWN0LmdldENlbnRlclgoKSxcbiAgICAgIHk6IHJlY3QuZ2V0Q2VudGVyWSgpLFxuICAgICAgdzogcmVjdC53aWR0aCxcbiAgICAgIGg6IHJlY3QuaGVpZ2h0XG4gICAgfTtcbiAgfVxuICBcbiAgcmV0dXJuIHBEYXRhO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUucnVuU3ByaW5nRW1iZWRkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuaW5pdGlhbEFuaW1hdGlvblBlcmlvZCA9IDI1O1xuICB0aGlzLmFuaW1hdGlvblBlcmlvZCA9IHRoaXMuaW5pdGlhbEFuaW1hdGlvblBlcmlvZDtcbiAgdmFyIGxheW91dEVuZGVkID0gZmFsc2U7XG4gIFxuICAvLyBJZiBhbWluYXRlIG9wdGlvbiBpcyAnZHVyaW5nJyBzaWduYWwgdGhhdCBsYXlvdXQgaXMgc3VwcG9zZWQgdG8gc3RhcnQgaXRlcmF0aW5nXG4gIGlmICggRkRMYXlvdXRDb25zdGFudHMuQU5JTUFURSA9PT0gJ2R1cmluZycgKSB7XG4gICAgdGhpcy5lbWl0KCdsYXlvdXRzdGFydGVkJyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gSWYgYW1pbmF0ZSBvcHRpb24gaXMgJ2R1cmluZycgdGljaygpIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIG9uIGluZGV4LmpzXG4gICAgd2hpbGUgKCFsYXlvdXRFbmRlZCkge1xuICAgICAgbGF5b3V0RW5kZWQgPSB0aGlzLnRpY2soKTtcbiAgICB9XG5cbiAgICB0aGlzLmdyYXBoTWFuYWdlci51cGRhdGVCb3VuZHMoKTtcbiAgfVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuY2FsY3VsYXRlTm9kZXNUb0FwcGx5R3Jhdml0YXRpb25UbyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG5vZGVMaXN0ID0gW107XG4gIHZhciBncmFwaDtcblxuICB2YXIgZ3JhcGhzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0R3JhcGhzKCk7XG4gIHZhciBzaXplID0gZ3JhcGhzLmxlbmd0aDtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBzaXplOyBpKyspXG4gIHtcbiAgICBncmFwaCA9IGdyYXBoc1tpXTtcblxuICAgIGdyYXBoLnVwZGF0ZUNvbm5lY3RlZCgpO1xuXG4gICAgaWYgKCFncmFwaC5pc0Nvbm5lY3RlZClcbiAgICB7XG4gICAgICBub2RlTGlzdCA9IG5vZGVMaXN0LmNvbmNhdChncmFwaC5nZXROb2RlcygpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9kZUxpc3Q7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5jYWxjTm9PZkNoaWxkcmVuRm9yQWxsTm9kZXMgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgbm9kZTtcbiAgdmFyIGFsbE5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXMoKTtcbiAgXG4gIGZvcih2YXIgaSA9IDA7IGkgPCBhbGxOb2Rlcy5sZW5ndGg7IGkrKylcbiAge1xuICAgICAgbm9kZSA9IGFsbE5vZGVzW2ldO1xuICAgICAgbm9kZS5ub09mQ2hpbGRyZW4gPSBub2RlLmdldE5vT2ZDaGlsZHJlbigpO1xuICB9XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5jcmVhdGVCZW5kcG9pbnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZWRnZXMgPSBbXTtcbiAgZWRnZXMgPSBlZGdlcy5jb25jYXQodGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsRWRnZXMoKSk7XG4gIHZhciB2aXNpdGVkID0gbmV3IEhhc2hTZXQoKTtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBlZGdlcy5sZW5ndGg7IGkrKylcbiAge1xuICAgIHZhciBlZGdlID0gZWRnZXNbaV07XG5cbiAgICBpZiAoIXZpc2l0ZWQuY29udGFpbnMoZWRnZSkpXG4gICAge1xuICAgICAgdmFyIHNvdXJjZSA9IGVkZ2UuZ2V0U291cmNlKCk7XG4gICAgICB2YXIgdGFyZ2V0ID0gZWRnZS5nZXRUYXJnZXQoKTtcblxuICAgICAgaWYgKHNvdXJjZSA9PSB0YXJnZXQpXG4gICAgICB7XG4gICAgICAgIGVkZ2UuZ2V0QmVuZHBvaW50cygpLnB1c2gobmV3IFBvaW50RCgpKTtcbiAgICAgICAgZWRnZS5nZXRCZW5kcG9pbnRzKCkucHVzaChuZXcgUG9pbnREKCkpO1xuICAgICAgICB0aGlzLmNyZWF0ZUR1bW15Tm9kZXNGb3JCZW5kcG9pbnRzKGVkZ2UpO1xuICAgICAgICB2aXNpdGVkLmFkZChlZGdlKTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgdmFyIGVkZ2VMaXN0ID0gW107XG5cbiAgICAgICAgZWRnZUxpc3QgPSBlZGdlTGlzdC5jb25jYXQoc291cmNlLmdldEVkZ2VMaXN0VG9Ob2RlKHRhcmdldCkpO1xuICAgICAgICBlZGdlTGlzdCA9IGVkZ2VMaXN0LmNvbmNhdCh0YXJnZXQuZ2V0RWRnZUxpc3RUb05vZGUoc291cmNlKSk7XG5cbiAgICAgICAgaWYgKCF2aXNpdGVkLmNvbnRhaW5zKGVkZ2VMaXN0WzBdKSlcbiAgICAgICAge1xuICAgICAgICAgIGlmIChlZGdlTGlzdC5sZW5ndGggPiAxKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBrO1xuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IGVkZ2VMaXN0Lmxlbmd0aDsgaysrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YXIgbXVsdGlFZGdlID0gZWRnZUxpc3Rba107XG4gICAgICAgICAgICAgIG11bHRpRWRnZS5nZXRCZW5kcG9pbnRzKCkucHVzaChuZXcgUG9pbnREKCkpO1xuICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUR1bW15Tm9kZXNGb3JCZW5kcG9pbnRzKG11bHRpRWRnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHZpc2l0ZWQuYWRkQWxsKGxpc3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZpc2l0ZWQuc2l6ZSgpID09IGVkZ2VzLmxlbmd0aClcbiAgICB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnBvc2l0aW9uTm9kZXNSYWRpYWxseSA9IGZ1bmN0aW9uIChmb3Jlc3QpIHtcbiAgLy8gV2UgdGlsZSB0aGUgdHJlZXMgdG8gYSBncmlkIHJvdyBieSByb3c7IGZpcnN0IHRyZWUgc3RhcnRzIGF0ICgwLDApXG4gIHZhciBjdXJyZW50U3RhcnRpbmdQb2ludCA9IG5ldyBQb2ludCgwLCAwKTtcbiAgdmFyIG51bWJlck9mQ29sdW1ucyA9IE1hdGguY2VpbChNYXRoLnNxcnQoZm9yZXN0Lmxlbmd0aCkpO1xuICB2YXIgaGVpZ2h0ID0gMDtcbiAgdmFyIGN1cnJlbnRZID0gMDtcbiAgdmFyIGN1cnJlbnRYID0gMDtcbiAgdmFyIHBvaW50ID0gbmV3IFBvaW50RCgwLCAwKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcmVzdC5sZW5ndGg7IGkrKylcbiAge1xuICAgIGlmIChpICUgbnVtYmVyT2ZDb2x1bW5zID09IDApXG4gICAge1xuICAgICAgLy8gU3RhcnQgb2YgYSBuZXcgcm93LCBtYWtlIHRoZSB4IGNvb3JkaW5hdGUgMCwgaW5jcmVtZW50IHRoZVxuICAgICAgLy8geSBjb29yZGluYXRlIHdpdGggdGhlIG1heCBoZWlnaHQgb2YgdGhlIHByZXZpb3VzIHJvd1xuICAgICAgY3VycmVudFggPSAwO1xuICAgICAgY3VycmVudFkgPSBoZWlnaHQ7XG5cbiAgICAgIGlmIChpICE9IDApXG4gICAgICB7XG4gICAgICAgIGN1cnJlbnRZICs9IENvU0VDb25zdGFudHMuREVGQVVMVF9DT01QT05FTlRfU0VQRVJBVElPTjtcbiAgICAgIH1cblxuICAgICAgaGVpZ2h0ID0gMDtcbiAgICB9XG5cbiAgICB2YXIgdHJlZSA9IGZvcmVzdFtpXTtcblxuICAgIC8vIEZpbmQgdGhlIGNlbnRlciBvZiB0aGUgdHJlZVxuICAgIHZhciBjZW50ZXJOb2RlID0gTGF5b3V0LmZpbmRDZW50ZXJPZlRyZWUodHJlZSk7XG5cbiAgICAvLyBTZXQgdGhlIHN0YXJpbmcgcG9pbnQgb2YgdGhlIG5leHQgdHJlZVxuICAgIGN1cnJlbnRTdGFydGluZ1BvaW50LnggPSBjdXJyZW50WDtcbiAgICBjdXJyZW50U3RhcnRpbmdQb2ludC55ID0gY3VycmVudFk7XG5cbiAgICAvLyBEbyBhIHJhZGlhbCBsYXlvdXQgc3RhcnRpbmcgd2l0aCB0aGUgY2VudGVyXG4gICAgcG9pbnQgPVxuICAgICAgICAgICAgQ29TRUxheW91dC5yYWRpYWxMYXlvdXQodHJlZSwgY2VudGVyTm9kZSwgY3VycmVudFN0YXJ0aW5nUG9pbnQpO1xuXG4gICAgaWYgKHBvaW50LnkgPiBoZWlnaHQpXG4gICAge1xuICAgICAgaGVpZ2h0ID0gTWF0aC5mbG9vcihwb2ludC55KTtcbiAgICB9XG5cbiAgICBjdXJyZW50WCA9IE1hdGguZmxvb3IocG9pbnQueCArIENvU0VDb25zdGFudHMuREVGQVVMVF9DT01QT05FTlRfU0VQRVJBVElPTik7XG4gIH1cblxuICB0aGlzLnRyYW5zZm9ybShcbiAgICAgICAgICBuZXcgUG9pbnREKExheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWCAtIHBvaW50LnggLyAyLFxuICAgICAgICAgICAgICAgICAgTGF5b3V0Q29uc3RhbnRzLldPUkxEX0NFTlRFUl9ZIC0gcG9pbnQueSAvIDIpKTtcbn07XG5cbkNvU0VMYXlvdXQucmFkaWFsTGF5b3V0ID0gZnVuY3Rpb24gKHRyZWUsIGNlbnRlck5vZGUsIHN0YXJ0aW5nUG9pbnQpIHtcbiAgdmFyIHJhZGlhbFNlcCA9IE1hdGgubWF4KHRoaXMubWF4RGlhZ29uYWxJblRyZWUodHJlZSksXG4gICAgICAgICAgQ29TRUNvbnN0YW50cy5ERUZBVUxUX1JBRElBTF9TRVBBUkFUSU9OKTtcbiAgQ29TRUxheW91dC5icmFuY2hSYWRpYWxMYXlvdXQoY2VudGVyTm9kZSwgbnVsbCwgMCwgMzU5LCAwLCByYWRpYWxTZXApO1xuICB2YXIgYm91bmRzID0gTEdyYXBoLmNhbGN1bGF0ZUJvdW5kcyh0cmVlKTtcblxuICB2YXIgdHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybSgpO1xuICB0cmFuc2Zvcm0uc2V0RGV2aWNlT3JnWChib3VuZHMuZ2V0TWluWCgpKTtcbiAgdHJhbnNmb3JtLnNldERldmljZU9yZ1koYm91bmRzLmdldE1pblkoKSk7XG4gIHRyYW5zZm9ybS5zZXRXb3JsZE9yZ1goc3RhcnRpbmdQb2ludC54KTtcbiAgdHJhbnNmb3JtLnNldFdvcmxkT3JnWShzdGFydGluZ1BvaW50LnkpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZS5sZW5ndGg7IGkrKylcbiAge1xuICAgIHZhciBub2RlID0gdHJlZVtpXTtcbiAgICBub2RlLnRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuICB9XG5cbiAgdmFyIGJvdHRvbVJpZ2h0ID1cbiAgICAgICAgICBuZXcgUG9pbnREKGJvdW5kcy5nZXRNYXhYKCksIGJvdW5kcy5nZXRNYXhZKCkpO1xuXG4gIHJldHVybiB0cmFuc2Zvcm0uaW52ZXJzZVRyYW5zZm9ybVBvaW50KGJvdHRvbVJpZ2h0KTtcbn07XG5cbkNvU0VMYXlvdXQuYnJhbmNoUmFkaWFsTGF5b3V0ID0gZnVuY3Rpb24gKG5vZGUsIHBhcmVudE9mTm9kZSwgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGRpc3RhbmNlLCByYWRpYWxTZXBhcmF0aW9uKSB7XG4gIC8vIEZpcnN0LCBwb3NpdGlvbiB0aGlzIG5vZGUgYnkgZmluZGluZyBpdHMgYW5nbGUuXG4gIHZhciBoYWxmSW50ZXJ2YWwgPSAoKGVuZEFuZ2xlIC0gc3RhcnRBbmdsZSkgKyAxKSAvIDI7XG5cbiAgaWYgKGhhbGZJbnRlcnZhbCA8IDApXG4gIHtcbiAgICBoYWxmSW50ZXJ2YWwgKz0gMTgwO1xuICB9XG5cbiAgdmFyIG5vZGVBbmdsZSA9IChoYWxmSW50ZXJ2YWwgKyBzdGFydEFuZ2xlKSAlIDM2MDtcbiAgdmFyIHRldGEgPSAobm9kZUFuZ2xlICogSUdlb21ldHJ5LlRXT19QSSkgLyAzNjA7XG5cbiAgLy8gTWFrZSBwb2xhciB0byBqYXZhIGNvcmRpbmF0ZSBjb252ZXJzaW9uLlxuICB2YXIgY29zX3RldGEgPSBNYXRoLmNvcyh0ZXRhKTtcbiAgdmFyIHhfID0gZGlzdGFuY2UgKiBNYXRoLmNvcyh0ZXRhKTtcbiAgdmFyIHlfID0gZGlzdGFuY2UgKiBNYXRoLnNpbih0ZXRhKTtcblxuICBub2RlLnNldENlbnRlcih4XywgeV8pO1xuXG4gIC8vIFRyYXZlcnNlIGFsbCBuZWlnaGJvcnMgb2YgdGhpcyBub2RlIGFuZCByZWN1cnNpdmVseSBjYWxsIHRoaXNcbiAgLy8gZnVuY3Rpb24uXG4gIHZhciBuZWlnaGJvckVkZ2VzID0gW107XG4gIG5laWdoYm9yRWRnZXMgPSBuZWlnaGJvckVkZ2VzLmNvbmNhdChub2RlLmdldEVkZ2VzKCkpO1xuICB2YXIgY2hpbGRDb3VudCA9IG5laWdoYm9yRWRnZXMubGVuZ3RoO1xuXG4gIGlmIChwYXJlbnRPZk5vZGUgIT0gbnVsbClcbiAge1xuICAgIGNoaWxkQ291bnQtLTtcbiAgfVxuXG4gIHZhciBicmFuY2hDb3VudCA9IDA7XG5cbiAgdmFyIGluY0VkZ2VzQ291bnQgPSBuZWlnaGJvckVkZ2VzLmxlbmd0aDtcbiAgdmFyIHN0YXJ0SW5kZXg7XG5cbiAgdmFyIGVkZ2VzID0gbm9kZS5nZXRFZGdlc0JldHdlZW4ocGFyZW50T2ZOb2RlKTtcblxuICAvLyBJZiB0aGVyZSBhcmUgbXVsdGlwbGUgZWRnZXMsIHBydW5lIHRoZW0gdW50aWwgdGhlcmUgcmVtYWlucyBvbmx5IG9uZVxuICAvLyBlZGdlLlxuICB3aGlsZSAoZWRnZXMubGVuZ3RoID4gMSlcbiAge1xuICAgIC8vbmVpZ2hib3JFZGdlcy5yZW1vdmUoZWRnZXMucmVtb3ZlKDApKTtcbiAgICB2YXIgdGVtcCA9IGVkZ2VzWzBdO1xuICAgIGVkZ2VzLnNwbGljZSgwLCAxKTtcbiAgICB2YXIgaW5kZXggPSBuZWlnaGJvckVkZ2VzLmluZGV4T2YodGVtcCk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIG5laWdoYm9yRWRnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgaW5jRWRnZXNDb3VudC0tO1xuICAgIGNoaWxkQ291bnQtLTtcbiAgfVxuXG4gIGlmIChwYXJlbnRPZk5vZGUgIT0gbnVsbClcbiAge1xuICAgIC8vYXNzZXJ0IGVkZ2VzLmxlbmd0aCA9PSAxO1xuICAgIHN0YXJ0SW5kZXggPSAobmVpZ2hib3JFZGdlcy5pbmRleE9mKGVkZ2VzWzBdKSArIDEpICUgaW5jRWRnZXNDb3VudDtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICBzdGFydEluZGV4ID0gMDtcbiAgfVxuXG4gIHZhciBzdGVwQW5nbGUgPSBNYXRoLmFicyhlbmRBbmdsZSAtIHN0YXJ0QW5nbGUpIC8gY2hpbGRDb3VudDtcblxuICBmb3IgKHZhciBpID0gc3RhcnRJbmRleDtcbiAgICAgICAgICBicmFuY2hDb3VudCAhPSBjaGlsZENvdW50O1xuICAgICAgICAgIGkgPSAoKytpKSAlIGluY0VkZ2VzQ291bnQpXG4gIHtcbiAgICB2YXIgY3VycmVudE5laWdoYm9yID1cbiAgICAgICAgICAgIG5laWdoYm9yRWRnZXNbaV0uZ2V0T3RoZXJFbmQobm9kZSk7XG5cbiAgICAvLyBEb24ndCBiYWNrIHRyYXZlcnNlIHRvIHJvb3Qgbm9kZSBpbiBjdXJyZW50IHRyZWUuXG4gICAgaWYgKGN1cnJlbnROZWlnaGJvciA9PSBwYXJlbnRPZk5vZGUpXG4gICAge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkU3RhcnRBbmdsZSA9XG4gICAgICAgICAgICAoc3RhcnRBbmdsZSArIGJyYW5jaENvdW50ICogc3RlcEFuZ2xlKSAlIDM2MDtcbiAgICB2YXIgY2hpbGRFbmRBbmdsZSA9IChjaGlsZFN0YXJ0QW5nbGUgKyBzdGVwQW5nbGUpICUgMzYwO1xuXG4gICAgQ29TRUxheW91dC5icmFuY2hSYWRpYWxMYXlvdXQoY3VycmVudE5laWdoYm9yLFxuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIGNoaWxkU3RhcnRBbmdsZSwgY2hpbGRFbmRBbmdsZSxcbiAgICAgICAgICAgIGRpc3RhbmNlICsgcmFkaWFsU2VwYXJhdGlvbiwgcmFkaWFsU2VwYXJhdGlvbik7XG5cbiAgICBicmFuY2hDb3VudCsrO1xuICB9XG59O1xuXG5Db1NFTGF5b3V0Lm1heERpYWdvbmFsSW5UcmVlID0gZnVuY3Rpb24gKHRyZWUpIHtcbiAgdmFyIG1heERpYWdvbmFsID0gSW50ZWdlci5NSU5fVkFMVUU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgdmFyIG5vZGUgPSB0cmVlW2ldO1xuICAgIHZhciBkaWFnb25hbCA9IG5vZGUuZ2V0RGlhZ29uYWwoKTtcblxuICAgIGlmIChkaWFnb25hbCA+IG1heERpYWdvbmFsKVxuICAgIHtcbiAgICAgIG1heERpYWdvbmFsID0gZGlhZ29uYWw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1heERpYWdvbmFsO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuY2FsY1JlcHVsc2lvblJhbmdlID0gZnVuY3Rpb24gKCkge1xuICAvLyBmb3JtdWxhIGlzIDIgeCAobGV2ZWwgKyAxKSB4IGlkZWFsRWRnZUxlbmd0aFxuICByZXR1cm4gKDIgKiAodGhpcy5sZXZlbCArIDEpICogdGhpcy5pZGVhbEVkZ2VMZW5ndGgpO1xufTtcblxuLy8gVGlsaW5nIG1ldGhvZHNcblxuLy8gR3JvdXAgemVybyBkZWdyZWUgbWVtYmVycyB3aG9zZSBwYXJlbnRzIGFyZSBub3QgdG8gYmUgdGlsZWQsIGNyZWF0ZSBkdW1teSBwYXJlbnRzIHdoZXJlIG5lZWRlZCBhbmQgZmlsbCBtZW1iZXJHcm91cHMgYnkgdGhlaXIgZHVtbXAgcGFyZW50IGlkJ3NcbkNvU0VMYXlvdXQucHJvdG90eXBlLmdyb3VwWmVyb0RlZ3JlZU1lbWJlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgLy8gYXJyYXkgb2YgW3BhcmVudF9pZCB4IG9uZURlZ3JlZU5vZGVfaWRdXG4gIHZhciB0ZW1wTWVtYmVyR3JvdXBzID0ge307IC8vIEEgdGVtcG9yYXJ5IG1hcCBvZiBwYXJlbnQgbm9kZSBhbmQgaXRzIHplcm8gZGVncmVlIG1lbWJlcnNcbiAgdGhpcy5tZW1iZXJHcm91cHMgPSB7fTsgLy8gQSBtYXAgb2YgZHVtbXkgcGFyZW50IG5vZGUgYW5kIGl0cyB6ZXJvIGRlZ3JlZSBtZW1iZXJzIHdob3NlIHBhcmVudHMgYXJlIG5vdCB0byBiZSB0aWxlZFxuICB0aGlzLmlkVG9EdW1teU5vZGUgPSB7fTsgLy8gQSBtYXAgb2YgaWQgdG8gZHVtbXkgbm9kZSBcbiAgXG4gIHZhciB6ZXJvRGVncmVlID0gW107IC8vIExpc3Qgb2YgemVybyBkZWdyZWUgbm9kZXMgd2hvc2UgcGFyZW50cyBhcmUgbm90IHRvIGJlIHRpbGVkXG4gIHZhciBhbGxOb2RlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzKCk7XG5cbiAgLy8gRmlsbCB6ZXJvIGRlZ3JlZSBsaXN0XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbm9kZSA9IGFsbE5vZGVzW2ldO1xuICAgIHZhciBwYXJlbnQgPSBub2RlLmdldFBhcmVudCgpO1xuICAgIC8vIElmIGEgbm9kZSBoYXMgemVybyBkZWdyZWUgYW5kIGl0cyBwYXJlbnQgaXMgbm90IHRvIGJlIHRpbGVkIGlmIGV4aXN0cyBhZGQgdGhhdCBub2RlIHRvIHplcm9EZWdyZXMgbGlzdFxuICAgIGlmICh0aGlzLmdldE5vZGVEZWdyZWVXaXRoQ2hpbGRyZW4obm9kZSkgPT09IDAgJiYgKCBwYXJlbnQuaWQgPT0gdW5kZWZpbmVkIHx8ICF0aGlzLmdldFRvQmVUaWxlZChwYXJlbnQpICkgKSB7XG4gICAgICB6ZXJvRGVncmVlLnB1c2gobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ3JlYXRlIGEgbWFwIG9mIHBhcmVudCBub2RlIGFuZCBpdHMgemVybyBkZWdyZWUgbWVtYmVyc1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHplcm9EZWdyZWUubGVuZ3RoOyBpKyspXG4gIHtcbiAgICB2YXIgbm9kZSA9IHplcm9EZWdyZWVbaV07IC8vIFplcm8gZGVncmVlIG5vZGUgaXRzZWxmXG4gICAgdmFyIHBfaWQgPSBub2RlLmdldFBhcmVudCgpLmlkOyAvLyBQYXJlbnQgaWRcblxuICAgIGlmICh0eXBlb2YgdGVtcE1lbWJlckdyb3Vwc1twX2lkXSA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgIHRlbXBNZW1iZXJHcm91cHNbcF9pZF0gPSBbXTtcblxuICAgIHRlbXBNZW1iZXJHcm91cHNbcF9pZF0gPSB0ZW1wTWVtYmVyR3JvdXBzW3BfaWRdLmNvbmNhdChub2RlKTsgLy8gUHVzaCBub2RlIHRvIHRoZSBsaXN0IGJlbG9uZ3MgdG8gaXRzIHBhcmVudCBpbiB0ZW1wTWVtYmVyR3JvdXBzXG4gIH1cblxuICAvLyBJZiB0aGVyZSBhcmUgYXQgbGVhc3QgdHdvIG5vZGVzIGF0IGEgbGV2ZWwsIGNyZWF0ZSBhIGR1bW15IGNvbXBvdW5kIGZvciB0aGVtXG4gIE9iamVjdC5rZXlzKHRlbXBNZW1iZXJHcm91cHMpLmZvckVhY2goZnVuY3Rpb24ocF9pZCkge1xuICAgIGlmICh0ZW1wTWVtYmVyR3JvdXBzW3BfaWRdLmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBkdW1teUNvbXBvdW5kSWQgPSBcIkR1bW15Q29tcG91bmRfXCIgKyBwX2lkOyAvLyBUaGUgaWQgb2YgZHVtbXkgY29tcG91bmQgd2hpY2ggd2lsbCBiZSBjcmVhdGVkIHNvb25cbiAgICAgIHNlbGYubWVtYmVyR3JvdXBzW2R1bW15Q29tcG91bmRJZF0gPSB0ZW1wTWVtYmVyR3JvdXBzW3BfaWRdOyAvLyBBZGQgZHVtbXkgY29tcG91bmQgdG8gbWVtYmVyR3JvdXBzXG5cbiAgICAgIHZhciBwYXJlbnQgPSB0ZW1wTWVtYmVyR3JvdXBzW3BfaWRdWzBdLmdldFBhcmVudCgpOyAvLyBUaGUgcGFyZW50IG9mIHplcm8gZGVncmVlIG5vZGVzIHdpbGwgYmUgdGhlIHBhcmVudCBvZiBuZXcgZHVtbXkgY29tcG91bmRcblxuICAgICAgLy8gQ3JlYXRlIGEgZHVtbXkgY29tcG91bmQgd2l0aCBjYWxjdWxhdGVkIGlkXG4gICAgICB2YXIgZHVtbXlDb21wb3VuZCA9IG5ldyBDb1NFTm9kZShzZWxmLmdyYXBoTWFuYWdlcik7XG4gICAgICBkdW1teUNvbXBvdW5kLmlkID0gZHVtbXlDb21wb3VuZElkO1xuICAgICAgZHVtbXlDb21wb3VuZC5wYWRkaW5nTGVmdCA9IHBhcmVudC5wYWRkaW5nTGVmdCB8fCAwO1xuICAgICAgZHVtbXlDb21wb3VuZC5wYWRkaW5nUmlnaHQgPSBwYXJlbnQucGFkZGluZ1JpZ2h0IHx8IDA7XG4gICAgICBkdW1teUNvbXBvdW5kLnBhZGRpbmdCb3R0b20gPSBwYXJlbnQucGFkZGluZ0JvdHRvbSB8fCAwO1xuICAgICAgZHVtbXlDb21wb3VuZC5wYWRkaW5nVG9wID0gcGFyZW50LnBhZGRpbmdUb3AgfHwgMDtcbiAgICAgIFxuICAgICAgc2VsZi5pZFRvRHVtbXlOb2RlW2R1bW15Q29tcG91bmRJZF0gPSBkdW1teUNvbXBvdW5kO1xuICAgICAgXG4gICAgICB2YXIgZHVtbXlQYXJlbnRHcmFwaCA9IHNlbGYuZ2V0R3JhcGhNYW5hZ2VyKCkuYWRkKHNlbGYubmV3R3JhcGgoKSwgZHVtbXlDb21wb3VuZCk7XG4gICAgICB2YXIgcGFyZW50R3JhcGggPSBwYXJlbnQuZ2V0Q2hpbGQoKTtcblxuICAgICAgLy8gQWRkIGR1bW15IGNvbXBvdW5kIHRvIHBhcmVudCB0aGUgZ3JhcGhcbiAgICAgIHBhcmVudEdyYXBoLmFkZChkdW1teUNvbXBvdW5kKTtcblxuICAgICAgLy8gRm9yIGVhY2ggemVybyBkZWdyZWUgbm9kZSBpbiB0aGlzIGxldmVsIHJlbW92ZSBpdCBmcm9tIGl0cyBwYXJlbnQgZ3JhcGggYW5kIGFkZCBpdCB0byB0aGUgZ3JhcGggb2YgZHVtbXkgcGFyZW50XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBNZW1iZXJHcm91cHNbcF9pZF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG5vZGUgPSB0ZW1wTWVtYmVyR3JvdXBzW3BfaWRdW2ldO1xuICAgICAgICBcbiAgICAgICAgcGFyZW50R3JhcGgucmVtb3ZlKG5vZGUpO1xuICAgICAgICBkdW1teVBhcmVudEdyYXBoLmFkZChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuY2xlYXJDb21wb3VuZHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjaGlsZEdyYXBoTWFwID0ge307XG4gIHZhciBpZFRvTm9kZSA9IHt9O1xuXG4gIC8vIEdldCBjb21wb3VuZCBvcmRlcmluZyBieSBmaW5kaW5nIHRoZSBpbm5lciBvbmUgZmlyc3RcbiAgdGhpcy5wZXJmb3JtREZTT25Db21wb3VuZHMoKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29tcG91bmRPcmRlci5sZW5ndGg7IGkrKykge1xuICAgIFxuICAgIGlkVG9Ob2RlW3RoaXMuY29tcG91bmRPcmRlcltpXS5pZF0gPSB0aGlzLmNvbXBvdW5kT3JkZXJbaV07XG4gICAgY2hpbGRHcmFwaE1hcFt0aGlzLmNvbXBvdW5kT3JkZXJbaV0uaWRdID0gW10uY29uY2F0KHRoaXMuY29tcG91bmRPcmRlcltpXS5nZXRDaGlsZCgpLmdldE5vZGVzKCkpO1xuXG4gICAgLy8gUmVtb3ZlIGNoaWxkcmVuIG9mIGNvbXBvdW5kc1xuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlbW92ZSh0aGlzLmNvbXBvdW5kT3JkZXJbaV0uZ2V0Q2hpbGQoKSk7XG4gICAgdGhpcy5jb21wb3VuZE9yZGVyW2ldLmNoaWxkID0gbnVsbDtcbiAgfVxuICBcbiAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxOb2RlcygpO1xuICBcbiAgLy8gVGlsZSB0aGUgcmVtb3ZlZCBjaGlsZHJlblxuICB0aGlzLnRpbGVDb21wb3VuZE1lbWJlcnMoY2hpbGRHcmFwaE1hcCwgaWRUb05vZGUpO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuY2xlYXJaZXJvRGVncmVlTWVtYmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgdGlsZWRaZXJvRGVncmVlUGFjayA9IHRoaXMudGlsZWRaZXJvRGVncmVlUGFjayA9IFtdO1xuXG4gIE9iamVjdC5rZXlzKHRoaXMubWVtYmVyR3JvdXBzKS5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XG4gICAgdmFyIGNvbXBvdW5kTm9kZSA9IHNlbGYuaWRUb0R1bW15Tm9kZVtpZF07IC8vIEdldCB0aGUgZHVtbXkgY29tcG91bmRcblxuICAgIHRpbGVkWmVyb0RlZ3JlZVBhY2tbaWRdID0gc2VsZi50aWxlTm9kZXMoc2VsZi5tZW1iZXJHcm91cHNbaWRdLCBjb21wb3VuZE5vZGUucGFkZGluZ0xlZnQgKyBjb21wb3VuZE5vZGUucGFkZGluZ1JpZ2h0KTtcblxuICAgIC8vIFNldCB0aGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgZHVtbXkgY29tcG91bmQgYXMgY2FsY3VsYXRlZFxuICAgIGNvbXBvdW5kTm9kZS5yZWN0LndpZHRoID0gdGlsZWRaZXJvRGVncmVlUGFja1tpZF0ud2lkdGg7XG4gICAgY29tcG91bmROb2RlLnJlY3QuaGVpZ2h0ID0gdGlsZWRaZXJvRGVncmVlUGFja1tpZF0uaGVpZ2h0O1xuICB9KTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnJlcG9wdWxhdGVDb21wb3VuZHMgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIGkgPSB0aGlzLmNvbXBvdW5kT3JkZXIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbENvbXBvdW5kTm9kZSA9IHRoaXMuY29tcG91bmRPcmRlcltpXTtcbiAgICB2YXIgaWQgPSBsQ29tcG91bmROb2RlLmlkO1xuICAgIHZhciBob3Jpem9udGFsTWFyZ2luID0gbENvbXBvdW5kTm9kZS5wYWRkaW5nTGVmdDtcbiAgICB2YXIgdmVydGljYWxNYXJnaW4gPSBsQ29tcG91bmROb2RlLnBhZGRpbmdUb3A7XG5cbiAgICB0aGlzLmFkanVzdExvY2F0aW9ucyh0aGlzLnRpbGVkTWVtYmVyUGFja1tpZF0sIGxDb21wb3VuZE5vZGUucmVjdC54LCBsQ29tcG91bmROb2RlLnJlY3QueSwgaG9yaXpvbnRhbE1hcmdpbiwgdmVydGljYWxNYXJnaW4pO1xuICB9XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5yZXBvcHVsYXRlWmVyb0RlZ3JlZU1lbWJlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHRpbGVkUGFjayA9IHRoaXMudGlsZWRaZXJvRGVncmVlUGFjaztcbiAgXG4gIE9iamVjdC5rZXlzKHRpbGVkUGFjaykuZm9yRWFjaChmdW5jdGlvbihpZCkge1xuICAgIHZhciBjb21wb3VuZE5vZGUgPSBzZWxmLmlkVG9EdW1teU5vZGVbaWRdOyAvLyBHZXQgdGhlIGR1bW15IGNvbXBvdW5kIGJ5IGl0cyBpZFxuICAgIHZhciBob3Jpem9udGFsTWFyZ2luID0gY29tcG91bmROb2RlLnBhZGRpbmdMZWZ0O1xuICAgIHZhciB2ZXJ0aWNhbE1hcmdpbiA9IGNvbXBvdW5kTm9kZS5wYWRkaW5nVG9wO1xuXG4gICAgLy8gQWRqdXN0IHRoZSBwb3NpdGlvbnMgb2Ygbm9kZXMgd3J0IGl0cyBjb21wb3VuZFxuICAgIHNlbGYuYWRqdXN0TG9jYXRpb25zKHRpbGVkUGFja1tpZF0sIGNvbXBvdW5kTm9kZS5yZWN0LngsIGNvbXBvdW5kTm9kZS5yZWN0LnksIGhvcml6b250YWxNYXJnaW4sIHZlcnRpY2FsTWFyZ2luKTtcbiAgfSk7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5nZXRUb0JlVGlsZWQgPSBmdW5jdGlvbiAobm9kZSkge1xuICB2YXIgaWQgPSBub2RlLmlkO1xuICAvL2ZpcnN0bHkgY2hlY2sgdGhlIHByZXZpb3VzIHJlc3VsdHNcbiAgaWYgKHRoaXMudG9CZVRpbGVkW2lkXSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMudG9CZVRpbGVkW2lkXTtcbiAgfVxuXG4gIC8vb25seSBjb21wb3VuZCBub2RlcyBhcmUgdG8gYmUgdGlsZWRcbiAgdmFyIGNoaWxkR3JhcGggPSBub2RlLmdldENoaWxkKCk7XG4gIGlmIChjaGlsZEdyYXBoID09IG51bGwpIHtcbiAgICB0aGlzLnRvQmVUaWxlZFtpZF0gPSBmYWxzZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgY2hpbGRyZW4gPSBjaGlsZEdyYXBoLmdldE5vZGVzKCk7IC8vIEdldCB0aGUgY2hpbGRyZW4gbm9kZXNcblxuICAvL2EgY29tcG91bmQgbm9kZSBpcyBub3QgdG8gYmUgdGlsZWQgaWYgYWxsIG9mIGl0cyBjb21wb3VuZCBjaGlsZHJlbiBhcmUgbm90IHRvIGJlIHRpbGVkXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdGhlQ2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgIGlmICh0aGlzLmdldE5vZGVEZWdyZWUodGhlQ2hpbGQpID4gMCkge1xuICAgICAgdGhpcy50b0JlVGlsZWRbaWRdID0gZmFsc2U7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy9wYXNzIHRoZSBjaGlsZHJlbiBub3QgaGF2aW5nIHRoZSBjb21wb3VuZCBzdHJ1Y3R1cmVcbiAgICBpZiAodGhlQ2hpbGQuZ2V0Q2hpbGQoKSA9PSBudWxsKSB7XG4gICAgICB0aGlzLnRvQmVUaWxlZFt0aGVDaGlsZC5pZF0gPSBmYWxzZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5nZXRUb0JlVGlsZWQodGhlQ2hpbGQpKSB7XG4gICAgICB0aGlzLnRvQmVUaWxlZFtpZF0gPSBmYWxzZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgdGhpcy50b0JlVGlsZWRbaWRdID0gdHJ1ZTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyBHZXQgZGVncmVlIG9mIGEgbm9kZSBkZXBlbmRpbmcgb2YgaXRzIGVkZ2VzIGFuZCBpbmRlcGVuZGVudCBvZiBpdHMgY2hpbGRyZW5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmdldE5vZGVEZWdyZWUgPSBmdW5jdGlvbiAobm9kZSkge1xuICB2YXIgaWQgPSBub2RlLmlkO1xuICB2YXIgZWRnZXMgPSBub2RlLmdldEVkZ2VzKCk7XG4gIHZhciBkZWdyZWUgPSAwO1xuICBcbiAgLy8gRm9yIHRoZSBlZGdlcyBjb25uZWN0ZWRcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlZGdlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBlZGdlID0gZWRnZXNbaV07XG4gICAgaWYgKGVkZ2UuZ2V0U291cmNlKCkuaWQgIT09IGVkZ2UuZ2V0VGFyZ2V0KCkuaWQpIHtcbiAgICAgIGRlZ3JlZSA9IGRlZ3JlZSArIDE7XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWdyZWU7XG59O1xuXG4vLyBHZXQgZGVncmVlIG9mIGEgbm9kZSB3aXRoIGl0cyBjaGlsZHJlblxuQ29TRUxheW91dC5wcm90b3R5cGUuZ2V0Tm9kZURlZ3JlZVdpdGhDaGlsZHJlbiA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciBkZWdyZWUgPSB0aGlzLmdldE5vZGVEZWdyZWUobm9kZSk7XG4gIGlmIChub2RlLmdldENoaWxkKCkgPT0gbnVsbCkge1xuICAgIHJldHVybiBkZWdyZWU7XG4gIH1cbiAgdmFyIGNoaWxkcmVuID0gbm9kZS5nZXRDaGlsZCgpLmdldE5vZGVzKCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICBkZWdyZWUgKz0gdGhpcy5nZXROb2RlRGVncmVlV2l0aENoaWxkcmVuKGNoaWxkKTtcbiAgfVxuICByZXR1cm4gZGVncmVlO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUucGVyZm9ybURGU09uQ29tcG91bmRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNvbXBvdW5kT3JkZXIgPSBbXTtcbiAgdGhpcy5maWxsQ29tcGV4T3JkZXJCeURGUyh0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0Tm9kZXMoKSk7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5maWxsQ29tcGV4T3JkZXJCeURGUyA9IGZ1bmN0aW9uIChjaGlsZHJlbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgaWYgKGNoaWxkLmdldENoaWxkKCkgIT0gbnVsbCkge1xuICAgICAgdGhpcy5maWxsQ29tcGV4T3JkZXJCeURGUyhjaGlsZC5nZXRDaGlsZCgpLmdldE5vZGVzKCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5nZXRUb0JlVGlsZWQoY2hpbGQpKSB7XG4gICAgICB0aGlzLmNvbXBvdW5kT3JkZXIucHVzaChjaGlsZCk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiogVGhpcyBtZXRob2QgcGxhY2VzIGVhY2ggemVybyBkZWdyZWUgbWVtYmVyIHdydCBnaXZlbiAoeCx5KSBjb29yZGluYXRlcyAodG9wIGxlZnQpLlxuKi9cbkNvU0VMYXlvdXQucHJvdG90eXBlLmFkanVzdExvY2F0aW9ucyA9IGZ1bmN0aW9uIChvcmdhbml6YXRpb24sIHgsIHksIGNvbXBvdW5kSG9yaXpvbnRhbE1hcmdpbiwgY29tcG91bmRWZXJ0aWNhbE1hcmdpbikge1xuICB4ICs9IGNvbXBvdW5kSG9yaXpvbnRhbE1hcmdpbjtcbiAgeSArPSBjb21wb3VuZFZlcnRpY2FsTWFyZ2luO1xuXG4gIHZhciBsZWZ0ID0geDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG9yZ2FuaXphdGlvbi5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHJvdyA9IG9yZ2FuaXphdGlvbi5yb3dzW2ldO1xuICAgIHggPSBsZWZ0O1xuICAgIHZhciBtYXhIZWlnaHQgPSAwO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCByb3cubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciBsbm9kZSA9IHJvd1tqXTtcblxuICAgICAgbG5vZGUucmVjdC54ID0geDsvLyArIGxub2RlLnJlY3Qud2lkdGggLyAyO1xuICAgICAgbG5vZGUucmVjdC55ID0geTsvLyArIGxub2RlLnJlY3QuaGVpZ2h0IC8gMjtcblxuICAgICAgeCArPSBsbm9kZS5yZWN0LndpZHRoICsgb3JnYW5pemF0aW9uLmhvcml6b250YWxQYWRkaW5nO1xuXG4gICAgICBpZiAobG5vZGUucmVjdC5oZWlnaHQgPiBtYXhIZWlnaHQpXG4gICAgICAgIG1heEhlaWdodCA9IGxub2RlLnJlY3QuaGVpZ2h0O1xuICAgIH1cblxuICAgIHkgKz0gbWF4SGVpZ2h0ICsgb3JnYW5pemF0aW9uLnZlcnRpY2FsUGFkZGluZztcbiAgfVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUudGlsZUNvbXBvdW5kTWVtYmVycyA9IGZ1bmN0aW9uIChjaGlsZEdyYXBoTWFwLCBpZFRvTm9kZSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMudGlsZWRNZW1iZXJQYWNrID0gW107XG5cbiAgT2JqZWN0LmtleXMoY2hpbGRHcmFwaE1hcCkuZm9yRWFjaChmdW5jdGlvbihpZCkge1xuICAgIC8vIEdldCB0aGUgY29tcG91bmQgbm9kZVxuICAgIHZhciBjb21wb3VuZE5vZGUgPSBpZFRvTm9kZVtpZF07XG5cbiAgICBzZWxmLnRpbGVkTWVtYmVyUGFja1tpZF0gPSBzZWxmLnRpbGVOb2RlcyhjaGlsZEdyYXBoTWFwW2lkXSwgY29tcG91bmROb2RlLnBhZGRpbmdMZWZ0ICsgY29tcG91bmROb2RlLnBhZGRpbmdSaWdodCk7XG5cbiAgICBjb21wb3VuZE5vZGUucmVjdC53aWR0aCA9IHNlbGYudGlsZWRNZW1iZXJQYWNrW2lkXS53aWR0aCArIDIwO1xuICAgIGNvbXBvdW5kTm9kZS5yZWN0LmhlaWdodCA9IHNlbGYudGlsZWRNZW1iZXJQYWNrW2lkXS5oZWlnaHQgKyAyMDtcbiAgfSk7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS50aWxlTm9kZXMgPSBmdW5jdGlvbiAobm9kZXMsIG1pbldpZHRoKSB7XG4gIHZhciB2ZXJ0aWNhbFBhZGRpbmcgPSBDb1NFQ29uc3RhbnRzLlRJTElOR19QQURESU5HX1ZFUlRJQ0FMO1xuICB2YXIgaG9yaXpvbnRhbFBhZGRpbmcgPSBDb1NFQ29uc3RhbnRzLlRJTElOR19QQURESU5HX0hPUklaT05UQUw7XG4gIHZhciBvcmdhbml6YXRpb24gPSB7XG4gICAgcm93czogW10sXG4gICAgcm93V2lkdGg6IFtdLFxuICAgIHJvd0hlaWdodDogW10sXG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMjAsXG4gICAgdmVydGljYWxQYWRkaW5nOiB2ZXJ0aWNhbFBhZGRpbmcsXG4gICAgaG9yaXpvbnRhbFBhZGRpbmc6IGhvcml6b250YWxQYWRkaW5nXG4gIH07XG5cbiAgLy8gU29ydCB0aGUgbm9kZXMgaW4gYXNjZW5kaW5nIG9yZGVyIG9mIHRoZWlyIGFyZWFzXG4gIG5vZGVzLnNvcnQoZnVuY3Rpb24gKG4xLCBuMikge1xuICAgIGlmIChuMS5yZWN0LndpZHRoICogbjEucmVjdC5oZWlnaHQgPiBuMi5yZWN0LndpZHRoICogbjIucmVjdC5oZWlnaHQpXG4gICAgICByZXR1cm4gLTE7XG4gICAgaWYgKG4xLnJlY3Qud2lkdGggKiBuMS5yZWN0LmhlaWdodCA8IG4yLnJlY3Qud2lkdGggKiBuMi5yZWN0LmhlaWdodClcbiAgICAgIHJldHVybiAxO1xuICAgIHJldHVybiAwO1xuICB9KTtcblxuICAvLyBDcmVhdGUgdGhlIG9yZ2FuaXphdGlvbiAtPiB0aWxlIG1lbWJlcnNcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xuICAgIFxuICAgIGlmIChvcmdhbml6YXRpb24ucm93cy5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5pbnNlcnROb2RlVG9Sb3cob3JnYW5pemF0aW9uLCBsTm9kZSwgMCwgbWluV2lkdGgpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmNhbkFkZEhvcml6b250YWwob3JnYW5pemF0aW9uLCBsTm9kZS5yZWN0LndpZHRoLCBsTm9kZS5yZWN0LmhlaWdodCkpIHtcbiAgICAgIHRoaXMuaW5zZXJ0Tm9kZVRvUm93KG9yZ2FuaXphdGlvbiwgbE5vZGUsIHRoaXMuZ2V0U2hvcnRlc3RSb3dJbmRleChvcmdhbml6YXRpb24pLCBtaW5XaWR0aCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pbnNlcnROb2RlVG9Sb3cob3JnYW5pemF0aW9uLCBsTm9kZSwgb3JnYW5pemF0aW9uLnJvd3MubGVuZ3RoLCBtaW5XaWR0aCk7XG4gICAgfVxuXG4gICAgdGhpcy5zaGlmdFRvTGFzdFJvdyhvcmdhbml6YXRpb24pO1xuICB9XG5cbiAgcmV0dXJuIG9yZ2FuaXphdGlvbjtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmluc2VydE5vZGVUb1JvdyA9IGZ1bmN0aW9uIChvcmdhbml6YXRpb24sIG5vZGUsIHJvd0luZGV4LCBtaW5XaWR0aCkge1xuICB2YXIgbWluQ29tcG91bmRTaXplID0gbWluV2lkdGg7XG5cbiAgLy8gQWRkIG5ldyByb3cgaWYgbmVlZGVkXG4gIGlmIChyb3dJbmRleCA9PSBvcmdhbml6YXRpb24ucm93cy5sZW5ndGgpIHtcbiAgICB2YXIgc2Vjb25kRGltZW5zaW9uID0gW107XG5cbiAgICBvcmdhbml6YXRpb24ucm93cy5wdXNoKHNlY29uZERpbWVuc2lvbik7XG4gICAgb3JnYW5pemF0aW9uLnJvd1dpZHRoLnB1c2gobWluQ29tcG91bmRTaXplKTtcbiAgICBvcmdhbml6YXRpb24ucm93SGVpZ2h0LnB1c2goMCk7XG4gIH1cblxuICAvLyBVcGRhdGUgcm93IHdpZHRoXG4gIHZhciB3ID0gb3JnYW5pemF0aW9uLnJvd1dpZHRoW3Jvd0luZGV4XSArIG5vZGUucmVjdC53aWR0aDtcblxuICBpZiAob3JnYW5pemF0aW9uLnJvd3Nbcm93SW5kZXhdLmxlbmd0aCA+IDApIHtcbiAgICB3ICs9IG9yZ2FuaXphdGlvbi5ob3Jpem9udGFsUGFkZGluZztcbiAgfVxuXG4gIG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtyb3dJbmRleF0gPSB3O1xuICAvLyBVcGRhdGUgY29tcG91bmQgd2lkdGhcbiAgaWYgKG9yZ2FuaXphdGlvbi53aWR0aCA8IHcpIHtcbiAgICBvcmdhbml6YXRpb24ud2lkdGggPSB3O1xuICB9XG5cbiAgLy8gVXBkYXRlIGhlaWdodFxuICB2YXIgaCA9IG5vZGUucmVjdC5oZWlnaHQ7XG4gIGlmIChyb3dJbmRleCA+IDApXG4gICAgaCArPSBvcmdhbml6YXRpb24udmVydGljYWxQYWRkaW5nO1xuXG4gIHZhciBleHRyYUhlaWdodCA9IDA7XG4gIGlmIChoID4gb3JnYW5pemF0aW9uLnJvd0hlaWdodFtyb3dJbmRleF0pIHtcbiAgICBleHRyYUhlaWdodCA9IG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbcm93SW5kZXhdO1xuICAgIG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbcm93SW5kZXhdID0gaDtcbiAgICBleHRyYUhlaWdodCA9IG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbcm93SW5kZXhdIC0gZXh0cmFIZWlnaHQ7XG4gIH1cblxuICBvcmdhbml6YXRpb24uaGVpZ2h0ICs9IGV4dHJhSGVpZ2h0O1xuXG4gIC8vIEluc2VydCBub2RlXG4gIG9yZ2FuaXphdGlvbi5yb3dzW3Jvd0luZGV4XS5wdXNoKG5vZGUpO1xufTtcblxuLy9TY2FucyB0aGUgcm93cyBvZiBhbiBvcmdhbml6YXRpb24gYW5kIHJldHVybnMgdGhlIG9uZSB3aXRoIHRoZSBtaW4gd2lkdGhcbkNvU0VMYXlvdXQucHJvdG90eXBlLmdldFNob3J0ZXN0Um93SW5kZXggPSBmdW5jdGlvbiAob3JnYW5pemF0aW9uKSB7XG4gIHZhciByID0gLTE7XG4gIHZhciBtaW4gPSBOdW1iZXIuTUFYX1ZBTFVFO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgb3JnYW5pemF0aW9uLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAob3JnYW5pemF0aW9uLnJvd1dpZHRoW2ldIDwgbWluKSB7XG4gICAgICByID0gaTtcbiAgICAgIG1pbiA9IG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG4vL1NjYW5zIHRoZSByb3dzIG9mIGFuIG9yZ2FuaXphdGlvbiBhbmQgcmV0dXJucyB0aGUgb25lIHdpdGggdGhlIG1heCB3aWR0aFxuQ29TRUxheW91dC5wcm90b3R5cGUuZ2V0TG9uZ2VzdFJvd0luZGV4ID0gZnVuY3Rpb24gKG9yZ2FuaXphdGlvbikge1xuICB2YXIgciA9IC0xO1xuICB2YXIgbWF4ID0gTnVtYmVyLk1JTl9WQUxVRTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG9yZ2FuaXphdGlvbi5yb3dzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICBpZiAob3JnYW5pemF0aW9uLnJvd1dpZHRoW2ldID4gbWF4KSB7XG4gICAgICByID0gaTtcbiAgICAgIG1heCA9IG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcjtcbn07XG5cbi8qKlxuKiBUaGlzIG1ldGhvZCBjaGVja3Mgd2hldGhlciBhZGRpbmcgZXh0cmEgd2lkdGggdG8gdGhlIG9yZ2FuaXphdGlvbiB2aW9sYXRlc1xuKiB0aGUgYXNwZWN0IHJhdGlvKDEpIG9yIG5vdC5cbiovXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5jYW5BZGRIb3Jpem9udGFsID0gZnVuY3Rpb24gKG9yZ2FuaXphdGlvbiwgZXh0cmFXaWR0aCwgZXh0cmFIZWlnaHQpIHtcblxuICB2YXIgc3JpID0gdGhpcy5nZXRTaG9ydGVzdFJvd0luZGV4KG9yZ2FuaXphdGlvbik7XG5cbiAgaWYgKHNyaSA8IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBtaW4gPSBvcmdhbml6YXRpb24ucm93V2lkdGhbc3JpXTtcblxuICBpZiAobWluICsgb3JnYW5pemF0aW9uLmhvcml6b250YWxQYWRkaW5nICsgZXh0cmFXaWR0aCA8PSBvcmdhbml6YXRpb24ud2lkdGgpXG4gICAgcmV0dXJuIHRydWU7XG5cbiAgdmFyIGhEaWZmID0gMDtcblxuICAvLyBBZGRpbmcgdG8gYW4gZXhpc3Rpbmcgcm93XG4gIGlmIChvcmdhbml6YXRpb24ucm93SGVpZ2h0W3NyaV0gPCBleHRyYUhlaWdodCkge1xuICAgIGlmIChzcmkgPiAwKVxuICAgICAgaERpZmYgPSBleHRyYUhlaWdodCArIG9yZ2FuaXphdGlvbi52ZXJ0aWNhbFBhZGRpbmcgLSBvcmdhbml6YXRpb24ucm93SGVpZ2h0W3NyaV07XG4gIH1cblxuICB2YXIgYWRkX3RvX3Jvd19yYXRpbztcbiAgaWYgKG9yZ2FuaXphdGlvbi53aWR0aCAtIG1pbiA+PSBleHRyYVdpZHRoICsgb3JnYW5pemF0aW9uLmhvcml6b250YWxQYWRkaW5nKSB7XG4gICAgYWRkX3RvX3Jvd19yYXRpbyA9IChvcmdhbml6YXRpb24uaGVpZ2h0ICsgaERpZmYpIC8gKG1pbiArIGV4dHJhV2lkdGggKyBvcmdhbml6YXRpb24uaG9yaXpvbnRhbFBhZGRpbmcpO1xuICB9IGVsc2Uge1xuICAgIGFkZF90b19yb3dfcmF0aW8gPSAob3JnYW5pemF0aW9uLmhlaWdodCArIGhEaWZmKSAvIG9yZ2FuaXphdGlvbi53aWR0aDtcbiAgfVxuXG4gIC8vIEFkZGluZyBhIG5ldyByb3cgZm9yIHRoaXMgbm9kZVxuICBoRGlmZiA9IGV4dHJhSGVpZ2h0ICsgb3JnYW5pemF0aW9uLnZlcnRpY2FsUGFkZGluZztcbiAgdmFyIGFkZF9uZXdfcm93X3JhdGlvO1xuICBpZiAob3JnYW5pemF0aW9uLndpZHRoIDwgZXh0cmFXaWR0aCkge1xuICAgIGFkZF9uZXdfcm93X3JhdGlvID0gKG9yZ2FuaXphdGlvbi5oZWlnaHQgKyBoRGlmZikgLyBleHRyYVdpZHRoO1xuICB9IGVsc2Uge1xuICAgIGFkZF9uZXdfcm93X3JhdGlvID0gKG9yZ2FuaXphdGlvbi5oZWlnaHQgKyBoRGlmZikgLyBvcmdhbml6YXRpb24ud2lkdGg7XG4gIH1cblxuICBpZiAoYWRkX25ld19yb3dfcmF0aW8gPCAxKVxuICAgIGFkZF9uZXdfcm93X3JhdGlvID0gMSAvIGFkZF9uZXdfcm93X3JhdGlvO1xuXG4gIGlmIChhZGRfdG9fcm93X3JhdGlvIDwgMSlcbiAgICBhZGRfdG9fcm93X3JhdGlvID0gMSAvIGFkZF90b19yb3dfcmF0aW87XG5cbiAgcmV0dXJuIGFkZF90b19yb3dfcmF0aW8gPCBhZGRfbmV3X3Jvd19yYXRpbztcbn07XG5cbi8vSWYgbW92aW5nIHRoZSBsYXN0IG5vZGUgZnJvbSB0aGUgbG9uZ2VzdCByb3cgYW5kIGFkZGluZyBpdCB0byB0aGUgbGFzdFxuLy9yb3cgbWFrZXMgdGhlIGJvdW5kaW5nIGJveCBzbWFsbGVyLCBkbyBpdC5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnNoaWZ0VG9MYXN0Um93ID0gZnVuY3Rpb24gKG9yZ2FuaXphdGlvbikge1xuICB2YXIgbG9uZ2VzdCA9IHRoaXMuZ2V0TG9uZ2VzdFJvd0luZGV4KG9yZ2FuaXphdGlvbik7XG4gIHZhciBsYXN0ID0gb3JnYW5pemF0aW9uLnJvd1dpZHRoLmxlbmd0aCAtIDE7XG4gIHZhciByb3cgPSBvcmdhbml6YXRpb24ucm93c1tsb25nZXN0XTtcbiAgdmFyIG5vZGUgPSByb3dbcm93Lmxlbmd0aCAtIDFdO1xuXG4gIHZhciBkaWZmID0gbm9kZS53aWR0aCArIG9yZ2FuaXphdGlvbi5ob3Jpem9udGFsUGFkZGluZztcblxuICAvLyBDaGVjayBpZiB0aGVyZSBpcyBlbm91Z2ggc3BhY2Ugb24gdGhlIGxhc3Qgcm93XG4gIGlmIChvcmdhbml6YXRpb24ud2lkdGggLSBvcmdhbml6YXRpb24ucm93V2lkdGhbbGFzdF0gPiBkaWZmICYmIGxvbmdlc3QgIT0gbGFzdCkge1xuICAgIC8vIFJlbW92ZSB0aGUgbGFzdCBlbGVtZW50IG9mIHRoZSBsb25nZXN0IHJvd1xuICAgIHJvdy5zcGxpY2UoLTEsIDEpO1xuXG4gICAgLy8gUHVzaCBpdCB0byB0aGUgbGFzdCByb3dcbiAgICBvcmdhbml6YXRpb24ucm93c1tsYXN0XS5wdXNoKG5vZGUpO1xuXG4gICAgb3JnYW5pemF0aW9uLnJvd1dpZHRoW2xvbmdlc3RdID0gb3JnYW5pemF0aW9uLnJvd1dpZHRoW2xvbmdlc3RdIC0gZGlmZjtcbiAgICBvcmdhbml6YXRpb24ucm93V2lkdGhbbGFzdF0gPSBvcmdhbml6YXRpb24ucm93V2lkdGhbbGFzdF0gKyBkaWZmO1xuICAgIG9yZ2FuaXphdGlvbi53aWR0aCA9IG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtpbnN0YW5jZS5nZXRMb25nZXN0Um93SW5kZXgob3JnYW5pemF0aW9uKV07XG5cbiAgICAvLyBVcGRhdGUgaGVpZ2h0cyBvZiB0aGUgb3JnYW5pemF0aW9uXG4gICAgdmFyIG1heEhlaWdodCA9IE51bWJlci5NSU5fVkFMVUU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyb3dbaV0uaGVpZ2h0ID4gbWF4SGVpZ2h0KVxuICAgICAgICBtYXhIZWlnaHQgPSByb3dbaV0uaGVpZ2h0O1xuICAgIH1cbiAgICBpZiAobG9uZ2VzdCA+IDApXG4gICAgICBtYXhIZWlnaHQgKz0gb3JnYW5pemF0aW9uLnZlcnRpY2FsUGFkZGluZztcblxuICAgIHZhciBwcmV2VG90YWwgPSBvcmdhbml6YXRpb24ucm93SGVpZ2h0W2xvbmdlc3RdICsgb3JnYW5pemF0aW9uLnJvd0hlaWdodFtsYXN0XTtcblxuICAgIG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbbG9uZ2VzdF0gPSBtYXhIZWlnaHQ7XG4gICAgaWYgKG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbbGFzdF0gPCBub2RlLmhlaWdodCArIG9yZ2FuaXphdGlvbi52ZXJ0aWNhbFBhZGRpbmcpXG4gICAgICBvcmdhbml6YXRpb24ucm93SGVpZ2h0W2xhc3RdID0gbm9kZS5oZWlnaHQgKyBvcmdhbml6YXRpb24udmVydGljYWxQYWRkaW5nO1xuXG4gICAgdmFyIGZpbmFsVG90YWwgPSBvcmdhbml6YXRpb24ucm93SGVpZ2h0W2xvbmdlc3RdICsgb3JnYW5pemF0aW9uLnJvd0hlaWdodFtsYXN0XTtcbiAgICBvcmdhbml6YXRpb24uaGVpZ2h0ICs9IChmaW5hbFRvdGFsIC0gcHJldlRvdGFsKTtcblxuICAgIHRoaXMuc2hpZnRUb0xhc3RSb3cob3JnYW5pemF0aW9uKTtcbiAgfVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUudGlsaW5nUHJlTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIGlmIChDb1NFQ29uc3RhbnRzLlRJTEUpIHtcbiAgICAvLyBGaW5kIHplcm8gZGVncmVlIG5vZGVzIGFuZCBjcmVhdGUgYSBjb21wb3VuZCBmb3IgZWFjaCBsZXZlbFxuICAgIHRoaXMuZ3JvdXBaZXJvRGVncmVlTWVtYmVycygpO1xuICAgIC8vIFRpbGUgYW5kIGNsZWFyIGNoaWxkcmVuIG9mIGVhY2ggY29tcG91bmRcbiAgICB0aGlzLmNsZWFyQ29tcG91bmRzKCk7XG4gICAgLy8gU2VwYXJhdGVseSB0aWxlIGFuZCBjbGVhciB6ZXJvIGRlZ3JlZSBub2RlcyBmb3IgZWFjaCBsZXZlbFxuICAgIHRoaXMuY2xlYXJaZXJvRGVncmVlTWVtYmVycygpO1xuICB9XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS50aWxpbmdQb3N0TGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIGlmIChDb1NFQ29uc3RhbnRzLlRJTEUpIHtcbiAgICB0aGlzLnJlcG9wdWxhdGVaZXJvRGVncmVlTWVtYmVycygpO1xuICAgIHRoaXMucmVwb3B1bGF0ZUNvbXBvdW5kcygpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvU0VMYXlvdXQ7XG4iLCJ2YXIgRkRMYXlvdXROb2RlID0gcmVxdWlyZSgnLi9GRExheW91dE5vZGUnKTtcbnZhciBJTWF0aCA9IHJlcXVpcmUoJy4vSU1hdGgnKTtcblxuZnVuY3Rpb24gQ29TRU5vZGUoZ20sIGxvYywgc2l6ZSwgdk5vZGUpIHtcbiAgRkRMYXlvdXROb2RlLmNhbGwodGhpcywgZ20sIGxvYywgc2l6ZSwgdk5vZGUpO1xufVxuXG5cbkNvU0VOb2RlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRkRMYXlvdXROb2RlLnByb3RvdHlwZSk7XG5mb3IgKHZhciBwcm9wIGluIEZETGF5b3V0Tm9kZSkge1xuICBDb1NFTm9kZVtwcm9wXSA9IEZETGF5b3V0Tm9kZVtwcm9wXTtcbn1cblxuQ29TRU5vZGUucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgbGF5b3V0ID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0TGF5b3V0KCk7XG4gIHRoaXMuZGlzcGxhY2VtZW50WCA9IGxheW91dC5jb29saW5nRmFjdG9yICpcbiAgICAgICAgICAodGhpcy5zcHJpbmdGb3JjZVggKyB0aGlzLnJlcHVsc2lvbkZvcmNlWCArIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVgpIC8gdGhpcy5ub09mQ2hpbGRyZW47XG4gIHRoaXMuZGlzcGxhY2VtZW50WSA9IGxheW91dC5jb29saW5nRmFjdG9yICpcbiAgICAgICAgICAodGhpcy5zcHJpbmdGb3JjZVkgKyB0aGlzLnJlcHVsc2lvbkZvcmNlWSArIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVkpIC8gdGhpcy5ub09mQ2hpbGRyZW47XG5cblxuICBpZiAoTWF0aC5hYnModGhpcy5kaXNwbGFjZW1lbnRYKSA+IGxheW91dC5jb29saW5nRmFjdG9yICogbGF5b3V0Lm1heE5vZGVEaXNwbGFjZW1lbnQpXG4gIHtcbiAgICB0aGlzLmRpc3BsYWNlbWVudFggPSBsYXlvdXQuY29vbGluZ0ZhY3RvciAqIGxheW91dC5tYXhOb2RlRGlzcGxhY2VtZW50ICpcbiAgICAgICAgICAgIElNYXRoLnNpZ24odGhpcy5kaXNwbGFjZW1lbnRYKTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyh0aGlzLmRpc3BsYWNlbWVudFkpID4gbGF5b3V0LmNvb2xpbmdGYWN0b3IgKiBsYXlvdXQubWF4Tm9kZURpc3BsYWNlbWVudClcbiAge1xuICAgIHRoaXMuZGlzcGxhY2VtZW50WSA9IGxheW91dC5jb29saW5nRmFjdG9yICogbGF5b3V0Lm1heE5vZGVEaXNwbGFjZW1lbnQgKlxuICAgICAgICAgICAgSU1hdGguc2lnbih0aGlzLmRpc3BsYWNlbWVudFkpO1xuICB9XG5cbiAgLy8gYSBzaW1wbGUgbm9kZSwganVzdCBtb3ZlIGl0XG4gIGlmICh0aGlzLmNoaWxkID09IG51bGwpXG4gIHtcbiAgICB0aGlzLm1vdmVCeSh0aGlzLmRpc3BsYWNlbWVudFgsIHRoaXMuZGlzcGxhY2VtZW50WSk7XG4gIH1cbiAgLy8gYW4gZW1wdHkgY29tcG91bmQgbm9kZSwgYWdhaW4ganVzdCBtb3ZlIGl0XG4gIGVsc2UgaWYgKHRoaXMuY2hpbGQuZ2V0Tm9kZXMoKS5sZW5ndGggPT0gMClcbiAge1xuICAgIHRoaXMubW92ZUJ5KHRoaXMuZGlzcGxhY2VtZW50WCwgdGhpcy5kaXNwbGFjZW1lbnRZKTtcbiAgfVxuICAvLyBub24tZW1wdHkgY29tcG91bmQgbm9kZSwgcHJvcG9nYXRlIG1vdmVtZW50IHRvIGNoaWxkcmVuIGFzIHdlbGxcbiAgZWxzZVxuICB7XG4gICAgdGhpcy5wcm9wb2dhdGVEaXNwbGFjZW1lbnRUb0NoaWxkcmVuKHRoaXMuZGlzcGxhY2VtZW50WCxcbiAgICAgICAgICAgIHRoaXMuZGlzcGxhY2VtZW50WSk7XG4gIH1cblxuICBsYXlvdXQudG90YWxEaXNwbGFjZW1lbnQgKz1cbiAgICAgICAgICBNYXRoLmFicyh0aGlzLmRpc3BsYWNlbWVudFgpICsgTWF0aC5hYnModGhpcy5kaXNwbGFjZW1lbnRZKTtcblxuICB0aGlzLnNwcmluZ0ZvcmNlWCA9IDA7XG4gIHRoaXMuc3ByaW5nRm9yY2VZID0gMDtcbiAgdGhpcy5yZXB1bHNpb25Gb3JjZVggPSAwO1xuICB0aGlzLnJlcHVsc2lvbkZvcmNlWSA9IDA7XG4gIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVggPSAwO1xuICB0aGlzLmdyYXZpdGF0aW9uRm9yY2VZID0gMDtcbiAgdGhpcy5kaXNwbGFjZW1lbnRYID0gMDtcbiAgdGhpcy5kaXNwbGFjZW1lbnRZID0gMDtcbn07XG5cbkNvU0VOb2RlLnByb3RvdHlwZS5wcm9wb2dhdGVEaXNwbGFjZW1lbnRUb0NoaWxkcmVuID0gZnVuY3Rpb24gKGRYLCBkWSlcbntcbiAgdmFyIG5vZGVzID0gdGhpcy5nZXRDaGlsZCgpLmdldE5vZGVzKCk7XG4gIHZhciBub2RlO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgbm9kZSA9IG5vZGVzW2ldO1xuICAgIGlmIChub2RlLmdldENoaWxkKCkgPT0gbnVsbClcbiAgICB7XG4gICAgICBub2RlLm1vdmVCeShkWCwgZFkpO1xuICAgICAgbm9kZS5kaXNwbGFjZW1lbnRYICs9IGRYO1xuICAgICAgbm9kZS5kaXNwbGFjZW1lbnRZICs9IGRZO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgbm9kZS5wcm9wb2dhdGVEaXNwbGFjZW1lbnRUb0NoaWxkcmVuKGRYLCBkWSk7XG4gICAgfVxuICB9XG59O1xuXG5Db1NFTm9kZS5wcm90b3R5cGUuc2V0UHJlZDEgPSBmdW5jdGlvbiAocHJlZDEpXG57XG4gIHRoaXMucHJlZDEgPSBwcmVkMTtcbn07XG5cbkNvU0VOb2RlLnByb3RvdHlwZS5nZXRQcmVkMSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiBwcmVkMTtcbn07XG5cbkNvU0VOb2RlLnByb3RvdHlwZS5nZXRQcmVkMiA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiBwcmVkMjtcbn07XG5cbkNvU0VOb2RlLnByb3RvdHlwZS5zZXROZXh0ID0gZnVuY3Rpb24gKG5leHQpXG57XG4gIHRoaXMubmV4dCA9IG5leHQ7XG59O1xuXG5Db1NFTm9kZS5wcm90b3R5cGUuZ2V0TmV4dCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiBuZXh0O1xufTtcblxuQ29TRU5vZGUucHJvdG90eXBlLnNldFByb2Nlc3NlZCA9IGZ1bmN0aW9uIChwcm9jZXNzZWQpXG57XG4gIHRoaXMucHJvY2Vzc2VkID0gcHJvY2Vzc2VkO1xufTtcblxuQ29TRU5vZGUucHJvdG90eXBlLmlzUHJvY2Vzc2VkID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHByb2Nlc3NlZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29TRU5vZGU7XG4iLCJmdW5jdGlvbiBEaW1lbnNpb25EKHdpZHRoLCBoZWlnaHQpIHtcbiAgdGhpcy53aWR0aCA9IDA7XG4gIHRoaXMuaGVpZ2h0ID0gMDtcbiAgaWYgKHdpZHRoICE9PSBudWxsICYmIGhlaWdodCAhPT0gbnVsbCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgfVxufVxuXG5EaW1lbnNpb25ELnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLndpZHRoO1xufTtcblxuRGltZW5zaW9uRC5wcm90b3R5cGUuc2V0V2lkdGggPSBmdW5jdGlvbiAod2lkdGgpXG57XG4gIHRoaXMud2lkdGggPSB3aWR0aDtcbn07XG5cbkRpbWVuc2lvbkQucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmhlaWdodDtcbn07XG5cbkRpbWVuc2lvbkQucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uIChoZWlnaHQpXG57XG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEaW1lbnNpb25EO1xuIiwiZnVuY3Rpb24gRW1pdHRlcigpe1xuICB0aGlzLmxpc3RlbmVycyA9IFtdO1xufVxuXG52YXIgcCA9IEVtaXR0ZXIucHJvdG90eXBlO1xuXG5wLmFkZExpc3RlbmVyID0gZnVuY3Rpb24oIGV2ZW50LCBjYWxsYmFjayApe1xuICB0aGlzLmxpc3RlbmVycy5wdXNoKHtcbiAgICBldmVudDogZXZlbnQsXG4gICAgY2FsbGJhY2s6IGNhbGxiYWNrXG4gIH0pO1xufTtcblxucC5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKCBldmVudCwgY2FsbGJhY2sgKXtcbiAgZm9yKCB2YXIgaSA9IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSA+PSAwOyBpLS0gKXtcbiAgICB2YXIgbCA9IHRoaXMubGlzdGVuZXJzW2ldO1xuXG4gICAgaWYoIGwuZXZlbnQgPT09IGV2ZW50ICYmIGwuY2FsbGJhY2sgPT09IGNhbGxiYWNrICl7XG4gICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoIGksIDEgKTtcbiAgICB9XG4gIH1cbn07XG5cbnAuZW1pdCA9IGZ1bmN0aW9uKCBldmVudCwgZGF0YSApe1xuICBmb3IoIHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrICl7XG4gICAgdmFyIGwgPSB0aGlzLmxpc3RlbmVyc1tpXTtcblxuICAgIGlmKCBldmVudCA9PT0gbC5ldmVudCApe1xuICAgICAgbC5jYWxsYmFjayggZGF0YSApO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xuIiwidmFyIExheW91dCA9IHJlcXVpcmUoJy4vTGF5b3V0Jyk7XG52YXIgRkRMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0ZETGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgTGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9MYXlvdXRDb25zdGFudHMnKTtcbnZhciBJR2VvbWV0cnkgPSByZXF1aXJlKCcuL0lHZW9tZXRyeScpO1xudmFyIElNYXRoID0gcmVxdWlyZSgnLi9JTWF0aCcpO1xudmFyIEludGVnZXIgPSByZXF1aXJlKCcuL0ludGVnZXInKTtcblxuZnVuY3Rpb24gRkRMYXlvdXQoKSB7XG4gIExheW91dC5jYWxsKHRoaXMpO1xuXG4gIHRoaXMudXNlU21hcnRJZGVhbEVkZ2VMZW5ndGhDYWxjdWxhdGlvbiA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVVNFX1NNQVJUX0lERUFMX0VER0VfTEVOR1RIX0NBTENVTEFUSU9OO1xuICB0aGlzLmlkZWFsRWRnZUxlbmd0aCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEg7XG4gIHRoaXMuc3ByaW5nQ29uc3RhbnQgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX1NQUklOR19TVFJFTkdUSDtcbiAgdGhpcy5yZXB1bHNpb25Db25zdGFudCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUkVQVUxTSU9OX1NUUkVOR1RIO1xuICB0aGlzLmdyYXZpdHlDb25zdGFudCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9TVFJFTkdUSDtcbiAgdGhpcy5jb21wb3VuZEdyYXZpdHlDb25zdGFudCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9TVFJFTkdUSDtcbiAgdGhpcy5ncmF2aXR5UmFuZ2VGYWN0b3IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SO1xuICB0aGlzLmNvbXBvdW5kR3Jhdml0eVJhbmdlRmFjdG9yID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUjtcbiAgdGhpcy5kaXNwbGFjZW1lbnRUaHJlc2hvbGRQZXJOb2RlID0gKDMuMCAqIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEgpIC8gMTAwO1xuICB0aGlzLmNvb2xpbmdGYWN0b3IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMO1xuICB0aGlzLmluaXRpYWxDb29saW5nRmFjdG9yID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTDtcbiAgdGhpcy50b3RhbERpc3BsYWNlbWVudCA9IDAuMDtcbiAgdGhpcy5vbGRUb3RhbERpc3BsYWNlbWVudCA9IDAuMDtcbiAgdGhpcy5tYXhJdGVyYXRpb25zID0gRkRMYXlvdXRDb25zdGFudHMuTUFYX0lURVJBVElPTlM7XG59XG5cbkZETGF5b3V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTGF5b3V0LnByb3RvdHlwZSk7XG5cbmZvciAodmFyIHByb3AgaW4gTGF5b3V0KSB7XG4gIEZETGF5b3V0W3Byb3BdID0gTGF5b3V0W3Byb3BdO1xufVxuXG5GRExheW91dC5wcm90b3R5cGUuaW5pdFBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIExheW91dC5wcm90b3R5cGUuaW5pdFBhcmFtZXRlcnMuY2FsbCh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIGlmICh0aGlzLmxheW91dFF1YWxpdHkgPT0gTGF5b3V0Q29uc3RhbnRzLkRSQUZUX1FVQUxJVFkpXG4gIHtcbiAgICB0aGlzLmRpc3BsYWNlbWVudFRocmVzaG9sZFBlck5vZGUgKz0gMC4zMDtcbiAgICB0aGlzLm1heEl0ZXJhdGlvbnMgKj0gMC44O1xuICB9XG4gIGVsc2UgaWYgKHRoaXMubGF5b3V0UXVhbGl0eSA9PSBMYXlvdXRDb25zdGFudHMuUFJPT0ZfUVVBTElUWSlcbiAge1xuICAgIHRoaXMuZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSAtPSAwLjMwO1xuICAgIHRoaXMubWF4SXRlcmF0aW9ucyAqPSAxLjI7XG4gIH1cblxuICB0aGlzLnRvdGFsSXRlcmF0aW9ucyA9IDA7XG4gIHRoaXMubm90QW5pbWF0ZWRJdGVyYXRpb25zID0gMDtcblxuICB0aGlzLnVzZUZSR3JpZFZhcmlhbnQgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX1VTRV9TTUFSVF9SRVBVTFNJT05fUkFOR0VfQ0FMQ1VMQVRJT047XG4gIFxuICB0aGlzLmdyaWQgPSBbXTtcbiAgLy8gdmFyaWFibGVzIGZvciB0cmVlIHJlZHVjdGlvbiBzdXBwb3J0XG4gIHRoaXMucHJ1bmVkTm9kZXNBbGwgPSBbXTtcbiAgdGhpcy5ncm93VHJlZUl0ZXJhdGlvbnMgPSAwO1xuICB0aGlzLmFmdGVyR3Jvd3RoSXRlcmF0aW9ucyA9IDA7XG4gIHRoaXMuaXNUcmVlR3Jvd2luZyA9IGZhbHNlO1xuICB0aGlzLmlzR3Jvd3RoRmluaXNoZWQgPSBmYWxzZTtcbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjSWRlYWxFZGdlTGVuZ3RocyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGVkZ2U7XG4gIHZhciBsY2FEZXB0aDtcbiAgdmFyIHNvdXJjZTtcbiAgdmFyIHRhcmdldDtcbiAgdmFyIHNpemVPZlNvdXJjZUluTGNhO1xuICB2YXIgc2l6ZU9mVGFyZ2V0SW5MY2E7XG5cbiAgdmFyIGFsbEVkZ2VzID0gdGhpcy5nZXRHcmFwaE1hbmFnZXIoKS5nZXRBbGxFZGdlcygpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbEVkZ2VzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgZWRnZSA9IGFsbEVkZ2VzW2ldO1xuXG4gICAgZWRnZS5pZGVhbExlbmd0aCA9IHRoaXMuaWRlYWxFZGdlTGVuZ3RoO1xuXG4gICAgaWYgKGVkZ2UuaXNJbnRlckdyYXBoKVxuICAgIHtcbiAgICAgIHNvdXJjZSA9IGVkZ2UuZ2V0U291cmNlKCk7XG4gICAgICB0YXJnZXQgPSBlZGdlLmdldFRhcmdldCgpO1xuXG4gICAgICBzaXplT2ZTb3VyY2VJbkxjYSA9IGVkZ2UuZ2V0U291cmNlSW5MY2EoKS5nZXRFc3RpbWF0ZWRTaXplKCk7XG4gICAgICBzaXplT2ZUYXJnZXRJbkxjYSA9IGVkZ2UuZ2V0VGFyZ2V0SW5MY2EoKS5nZXRFc3RpbWF0ZWRTaXplKCk7XG5cbiAgICAgIGlmICh0aGlzLnVzZVNtYXJ0SWRlYWxFZGdlTGVuZ3RoQ2FsY3VsYXRpb24pXG4gICAgICB7XG4gICAgICAgIGVkZ2UuaWRlYWxMZW5ndGggKz0gc2l6ZU9mU291cmNlSW5MY2EgKyBzaXplT2ZUYXJnZXRJbkxjYSAtXG4gICAgICAgICAgICAgICAgMiAqIExheW91dENvbnN0YW50cy5TSU1QTEVfTk9ERV9TSVpFO1xuICAgICAgfVxuXG4gICAgICBsY2FEZXB0aCA9IGVkZ2UuZ2V0TGNhKCkuZ2V0SW5jbHVzaW9uVHJlZURlcHRoKCk7XG5cbiAgICAgIGVkZ2UuaWRlYWxMZW5ndGggKz0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCAqXG4gICAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLlBFUl9MRVZFTF9JREVBTF9FREdFX0xFTkdUSF9GQUNUT1IgKlxuICAgICAgICAgICAgICAoc291cmNlLmdldEluY2x1c2lvblRyZWVEZXB0aCgpICtcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuZ2V0SW5jbHVzaW9uVHJlZURlcHRoKCkgLSAyICogbGNhRGVwdGgpO1xuICAgIH1cbiAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmluaXRTcHJpbmdFbWJlZGRlciA9IGZ1bmN0aW9uICgpIHtcblxuICBpZiAodGhpcy5pbmNyZW1lbnRhbClcbiAge1xuICAgIHRoaXMubWF4Tm9kZURpc3BsYWNlbWVudCA9XG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5NQVhfTk9ERV9ESVNQTEFDRU1FTlRfSU5DUkVNRU5UQUw7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgdGhpcy5jb29saW5nRmFjdG9yID0gMS4wO1xuICAgIHRoaXMuaW5pdGlhbENvb2xpbmdGYWN0b3IgPSAxLjA7XG4gICAgdGhpcy5tYXhOb2RlRGlzcGxhY2VtZW50ID1cbiAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLk1BWF9OT0RFX0RJU1BMQUNFTUVOVDtcbiAgfVxuXG4gIHRoaXMubWF4SXRlcmF0aW9ucyA9XG4gICAgICAgICAgTWF0aC5tYXgodGhpcy5nZXRBbGxOb2RlcygpLmxlbmd0aCAqIDUsIHRoaXMubWF4SXRlcmF0aW9ucyk7XG5cbiAgdGhpcy50b3RhbERpc3BsYWNlbWVudFRocmVzaG9sZCA9XG4gICAgICAgICAgdGhpcy5kaXNwbGFjZW1lbnRUaHJlc2hvbGRQZXJOb2RlICogdGhpcy5nZXRBbGxOb2RlcygpLmxlbmd0aDtcblxuICB0aGlzLnJlcHVsc2lvblJhbmdlID0gdGhpcy5jYWxjUmVwdWxzaW9uUmFuZ2UoKTtcbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjU3ByaW5nRm9yY2VzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbEVkZ2VzID0gdGhpcy5nZXRBbGxFZGdlcygpO1xuICB2YXIgZWRnZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxFZGdlcy5sZW5ndGg7IGkrKylcbiAge1xuICAgIGVkZ2UgPSBsRWRnZXNbaV07XG5cbiAgICB0aGlzLmNhbGNTcHJpbmdGb3JjZShlZGdlLCBlZGdlLmlkZWFsTGVuZ3RoKTtcbiAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNSZXB1bHNpb25Gb3JjZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpLCBqO1xuICB2YXIgbm9kZUEsIG5vZGVCO1xuICB2YXIgbE5vZGVzID0gdGhpcy5nZXRBbGxOb2RlcygpO1xuICB2YXIgcHJvY2Vzc2VkTm9kZVNldDtcblxuICBpZiAodGhpcy51c2VGUkdyaWRWYXJpYW50KVxuICB7ICAgICAgIFxuICAgIGlmICgodGhpcy50b3RhbEl0ZXJhdGlvbnMgJSBGRExheW91dENvbnN0YW50cy5HUklEX0NBTENVTEFUSU9OX0NIRUNLX1BFUklPRCA9PSAxICYmICF0aGlzLmlzVHJlZUdyb3dpbmcgJiYgIXRoaXMuaXNHcm93dGhGaW5pc2hlZCkpXG4gICAgeyAgICAgICBcbiAgICAgIHRoaXMudXBkYXRlR3JpZCgpOyAgXG4gICAgfVxuXG4gICAgcHJvY2Vzc2VkTm9kZVNldCA9IG5ldyBTZXQoKTtcbiAgICBcbiAgICAvLyBjYWxjdWxhdGUgcmVwdWxzaW9uIGZvcmNlcyBiZXR3ZWVuIGVhY2ggbm9kZXMgYW5kIGl0cyBzdXJyb3VuZGluZ1xuICAgIGZvciAoaSA9IDA7IGkgPCBsTm9kZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgbm9kZUEgPSBsTm9kZXNbaV07XG4gICAgICB0aGlzLmNhbGN1bGF0ZVJlcHVsc2lvbkZvcmNlT2ZBTm9kZShub2RlQSwgcHJvY2Vzc2VkTm9kZVNldCk7XG4gICAgICBwcm9jZXNzZWROb2RlU2V0LmFkZChub2RlQSk7XG4gICAgfVxuICB9XG4gIGVsc2VcbiAge1xuICAgIGZvciAoaSA9IDA7IGkgPCBsTm9kZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgbm9kZUEgPSBsTm9kZXNbaV07XG5cbiAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgbE5vZGVzLmxlbmd0aDsgaisrKVxuICAgICAge1xuICAgICAgICBub2RlQiA9IGxOb2Rlc1tqXTtcblxuICAgICAgICAvLyBJZiBib3RoIG5vZGVzIGFyZSBub3QgbWVtYmVycyBvZiB0aGUgc2FtZSBncmFwaCwgc2tpcC5cbiAgICAgICAgaWYgKG5vZGVBLmdldE93bmVyKCkgIT0gbm9kZUIuZ2V0T3duZXIoKSlcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWxjUmVwdWxzaW9uRm9yY2Uobm9kZUEsIG5vZGVCKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjR3Jhdml0YXRpb25hbEZvcmNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG5vZGU7XG4gIHZhciBsTm9kZXMgPSB0aGlzLmdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uKCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsTm9kZXMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICBub2RlID0gbE5vZGVzW2ldO1xuICAgIHRoaXMuY2FsY0dyYXZpdGF0aW9uYWxGb3JjZShub2RlKTtcbiAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLm1vdmVOb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxOb2RlcyA9IHRoaXMuZ2V0QWxsTm9kZXMoKTtcbiAgdmFyIG5vZGU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsTm9kZXMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICBub2RlID0gbE5vZGVzW2ldO1xuICAgIG5vZGUubW92ZSgpO1xuICB9XG59XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjU3ByaW5nRm9yY2UgPSBmdW5jdGlvbiAoZWRnZSwgaWRlYWxMZW5ndGgpIHtcbiAgdmFyIHNvdXJjZU5vZGUgPSBlZGdlLmdldFNvdXJjZSgpO1xuICB2YXIgdGFyZ2V0Tm9kZSA9IGVkZ2UuZ2V0VGFyZ2V0KCk7XG5cbiAgdmFyIGxlbmd0aDtcbiAgdmFyIHNwcmluZ0ZvcmNlO1xuICB2YXIgc3ByaW5nRm9yY2VYO1xuICB2YXIgc3ByaW5nRm9yY2VZO1xuXG4gIC8vIFVwZGF0ZSBlZGdlIGxlbmd0aFxuICBpZiAodGhpcy51bmlmb3JtTGVhZk5vZGVTaXplcyAmJlxuICAgICAgICAgIHNvdXJjZU5vZGUuZ2V0Q2hpbGQoKSA9PSBudWxsICYmIHRhcmdldE5vZGUuZ2V0Q2hpbGQoKSA9PSBudWxsKVxuICB7XG4gICAgZWRnZS51cGRhdGVMZW5ndGhTaW1wbGUoKTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICBlZGdlLnVwZGF0ZUxlbmd0aCgpO1xuXG4gICAgaWYgKGVkZ2UuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0KVxuICAgIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBsZW5ndGggPSBlZGdlLmdldExlbmd0aCgpO1xuXG4gIC8vIENhbGN1bGF0ZSBzcHJpbmcgZm9yY2VzXG4gIHNwcmluZ0ZvcmNlID0gdGhpcy5zcHJpbmdDb25zdGFudCAqIChsZW5ndGggLSBpZGVhbExlbmd0aCk7XG5cbiAgLy8gUHJvamVjdCBmb3JjZSBvbnRvIHggYW5kIHkgYXhlc1xuICBzcHJpbmdGb3JjZVggPSBzcHJpbmdGb3JjZSAqIChlZGdlLmxlbmd0aFggLyBsZW5ndGgpO1xuICBzcHJpbmdGb3JjZVkgPSBzcHJpbmdGb3JjZSAqIChlZGdlLmxlbmd0aFkgLyBsZW5ndGgpO1xuXG4gIC8vIEFwcGx5IGZvcmNlcyBvbiB0aGUgZW5kIG5vZGVzXG4gIHNvdXJjZU5vZGUuc3ByaW5nRm9yY2VYICs9IHNwcmluZ0ZvcmNlWDtcbiAgc291cmNlTm9kZS5zcHJpbmdGb3JjZVkgKz0gc3ByaW5nRm9yY2VZO1xuICB0YXJnZXROb2RlLnNwcmluZ0ZvcmNlWCAtPSBzcHJpbmdGb3JjZVg7XG4gIHRhcmdldE5vZGUuc3ByaW5nRm9yY2VZIC09IHNwcmluZ0ZvcmNlWTtcbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjUmVwdWxzaW9uRm9yY2UgPSBmdW5jdGlvbiAobm9kZUEsIG5vZGVCKSB7XG4gIHZhciByZWN0QSA9IG5vZGVBLmdldFJlY3QoKTtcbiAgdmFyIHJlY3RCID0gbm9kZUIuZ2V0UmVjdCgpO1xuICB2YXIgb3ZlcmxhcEFtb3VudCA9IG5ldyBBcnJheSgyKTtcbiAgdmFyIGNsaXBQb2ludHMgPSBuZXcgQXJyYXkoNCk7XG4gIHZhciBkaXN0YW5jZVg7XG4gIHZhciBkaXN0YW5jZVk7XG4gIHZhciBkaXN0YW5jZVNxdWFyZWQ7XG4gIHZhciBkaXN0YW5jZTtcbiAgdmFyIHJlcHVsc2lvbkZvcmNlO1xuICB2YXIgcmVwdWxzaW9uRm9yY2VYO1xuICB2YXIgcmVwdWxzaW9uRm9yY2VZO1xuXG4gIGlmIChyZWN0QS5pbnRlcnNlY3RzKHJlY3RCKSkvLyB0d28gbm9kZXMgb3ZlcmxhcFxuICB7XG4gICAgLy8gY2FsY3VsYXRlIHNlcGFyYXRpb24gYW1vdW50IGluIHggYW5kIHkgZGlyZWN0aW9uc1xuICAgIElHZW9tZXRyeS5jYWxjU2VwYXJhdGlvbkFtb3VudChyZWN0QSxcbiAgICAgICAgICAgIHJlY3RCLFxuICAgICAgICAgICAgb3ZlcmxhcEFtb3VudCxcbiAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggLyAyLjApO1xuXG4gICAgcmVwdWxzaW9uRm9yY2VYID0gMiAqIG92ZXJsYXBBbW91bnRbMF07XG4gICAgcmVwdWxzaW9uRm9yY2VZID0gMiAqIG92ZXJsYXBBbW91bnRbMV07XG4gICAgXG4gICAgdmFyIGNoaWxkcmVuQ29uc3RhbnQgPSBub2RlQS5ub09mQ2hpbGRyZW4gKiBub2RlQi5ub09mQ2hpbGRyZW4gLyAobm9kZUEubm9PZkNoaWxkcmVuICsgbm9kZUIubm9PZkNoaWxkcmVuKTtcbiAgICBcbiAgICAvLyBBcHBseSBmb3JjZXMgb24gdGhlIHR3byBub2Rlc1xuICAgIG5vZGVBLnJlcHVsc2lvbkZvcmNlWCAtPSBjaGlsZHJlbkNvbnN0YW50ICogcmVwdWxzaW9uRm9yY2VYO1xuICAgIG5vZGVBLnJlcHVsc2lvbkZvcmNlWSAtPSBjaGlsZHJlbkNvbnN0YW50ICogcmVwdWxzaW9uRm9yY2VZO1xuICAgIG5vZGVCLnJlcHVsc2lvbkZvcmNlWCArPSBjaGlsZHJlbkNvbnN0YW50ICogcmVwdWxzaW9uRm9yY2VYO1xuICAgIG5vZGVCLnJlcHVsc2lvbkZvcmNlWSArPSBjaGlsZHJlbkNvbnN0YW50ICogcmVwdWxzaW9uRm9yY2VZO1xuICB9XG4gIGVsc2UvLyBubyBvdmVybGFwXG4gIHtcbiAgICAvLyBjYWxjdWxhdGUgZGlzdGFuY2VcblxuICAgIGlmICh0aGlzLnVuaWZvcm1MZWFmTm9kZVNpemVzICYmXG4gICAgICAgICAgICBub2RlQS5nZXRDaGlsZCgpID09IG51bGwgJiYgbm9kZUIuZ2V0Q2hpbGQoKSA9PSBudWxsKS8vIHNpbXBseSBiYXNlIHJlcHVsc2lvbiBvbiBkaXN0YW5jZSBvZiBub2RlIGNlbnRlcnNcbiAgICB7XG4gICAgICBkaXN0YW5jZVggPSByZWN0Qi5nZXRDZW50ZXJYKCkgLSByZWN0QS5nZXRDZW50ZXJYKCk7XG4gICAgICBkaXN0YW5jZVkgPSByZWN0Qi5nZXRDZW50ZXJZKCkgLSByZWN0QS5nZXRDZW50ZXJZKCk7XG4gICAgfVxuICAgIGVsc2UvLyB1c2UgY2xpcHBpbmcgcG9pbnRzXG4gICAge1xuICAgICAgSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbihyZWN0QSwgcmVjdEIsIGNsaXBQb2ludHMpO1xuXG4gICAgICBkaXN0YW5jZVggPSBjbGlwUG9pbnRzWzJdIC0gY2xpcFBvaW50c1swXTtcbiAgICAgIGRpc3RhbmNlWSA9IGNsaXBQb2ludHNbM10gLSBjbGlwUG9pbnRzWzFdO1xuICAgIH1cblxuICAgIC8vIE5vIHJlcHVsc2lvbiByYW5nZS4gRlIgZ3JpZCB2YXJpYW50IHNob3VsZCB0YWtlIGNhcmUgb2YgdGhpcy5cbiAgICBpZiAoTWF0aC5hYnMoZGlzdGFuY2VYKSA8IEZETGF5b3V0Q29uc3RhbnRzLk1JTl9SRVBVTFNJT05fRElTVClcbiAgICB7XG4gICAgICBkaXN0YW5jZVggPSBJTWF0aC5zaWduKGRpc3RhbmNlWCkgKlxuICAgICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5NSU5fUkVQVUxTSU9OX0RJU1Q7XG4gICAgfVxuXG4gICAgaWYgKE1hdGguYWJzKGRpc3RhbmNlWSkgPCBGRExheW91dENvbnN0YW50cy5NSU5fUkVQVUxTSU9OX0RJU1QpXG4gICAge1xuICAgICAgZGlzdGFuY2VZID0gSU1hdGguc2lnbihkaXN0YW5jZVkpICpcbiAgICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuTUlOX1JFUFVMU0lPTl9ESVNUO1xuICAgIH1cblxuICAgIGRpc3RhbmNlU3F1YXJlZCA9IGRpc3RhbmNlWCAqIGRpc3RhbmNlWCArIGRpc3RhbmNlWSAqIGRpc3RhbmNlWTtcbiAgICBkaXN0YW5jZSA9IE1hdGguc3FydChkaXN0YW5jZVNxdWFyZWQpO1xuXG4gICAgcmVwdWxzaW9uRm9yY2UgPSB0aGlzLnJlcHVsc2lvbkNvbnN0YW50ICogbm9kZUEubm9PZkNoaWxkcmVuICogbm9kZUIubm9PZkNoaWxkcmVuIC8gZGlzdGFuY2VTcXVhcmVkO1xuXG4gICAgLy8gUHJvamVjdCBmb3JjZSBvbnRvIHggYW5kIHkgYXhlc1xuICAgIHJlcHVsc2lvbkZvcmNlWCA9IHJlcHVsc2lvbkZvcmNlICogZGlzdGFuY2VYIC8gZGlzdGFuY2U7XG4gICAgcmVwdWxzaW9uRm9yY2VZID0gcmVwdWxzaW9uRm9yY2UgKiBkaXN0YW5jZVkgLyBkaXN0YW5jZTtcbiAgICAgXG4gICAgLy8gQXBwbHkgZm9yY2VzIG9uIHRoZSB0d28gbm9kZXMgICAgXG4gICAgbm9kZUEucmVwdWxzaW9uRm9yY2VYIC09IHJlcHVsc2lvbkZvcmNlWDtcbiAgICBub2RlQS5yZXB1bHNpb25Gb3JjZVkgLT0gcmVwdWxzaW9uRm9yY2VZO1xuICAgIG5vZGVCLnJlcHVsc2lvbkZvcmNlWCArPSByZXB1bHNpb25Gb3JjZVg7XG4gICAgbm9kZUIucmVwdWxzaW9uRm9yY2VZICs9IHJlcHVsc2lvbkZvcmNlWTtcbiAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNHcmF2aXRhdGlvbmFsRm9yY2UgPSBmdW5jdGlvbiAobm9kZSkge1xuICB2YXIgb3duZXJHcmFwaDtcbiAgdmFyIG93bmVyQ2VudGVyWDtcbiAgdmFyIG93bmVyQ2VudGVyWTtcbiAgdmFyIGRpc3RhbmNlWDtcbiAgdmFyIGRpc3RhbmNlWTtcbiAgdmFyIGFic0Rpc3RhbmNlWDtcbiAgdmFyIGFic0Rpc3RhbmNlWTtcbiAgdmFyIGVzdGltYXRlZFNpemU7XG4gIG93bmVyR3JhcGggPSBub2RlLmdldE93bmVyKCk7XG5cbiAgb3duZXJDZW50ZXJYID0gKG93bmVyR3JhcGguZ2V0UmlnaHQoKSArIG93bmVyR3JhcGguZ2V0TGVmdCgpKSAvIDI7XG4gIG93bmVyQ2VudGVyWSA9IChvd25lckdyYXBoLmdldFRvcCgpICsgb3duZXJHcmFwaC5nZXRCb3R0b20oKSkgLyAyO1xuICBkaXN0YW5jZVggPSBub2RlLmdldENlbnRlclgoKSAtIG93bmVyQ2VudGVyWDtcbiAgZGlzdGFuY2VZID0gbm9kZS5nZXRDZW50ZXJZKCkgLSBvd25lckNlbnRlclk7XG4gIGFic0Rpc3RhbmNlWCA9IE1hdGguYWJzKGRpc3RhbmNlWCkgKyBub2RlLmdldFdpZHRoKCkgLyAyO1xuICBhYnNEaXN0YW5jZVkgPSBNYXRoLmFicyhkaXN0YW5jZVkpICsgbm9kZS5nZXRIZWlnaHQoKSAvIDI7XG5cbiAgaWYgKG5vZGUuZ2V0T3duZXIoKSA9PSB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkpLy8gaW4gdGhlIHJvb3QgZ3JhcGhcbiAge1xuICAgIGVzdGltYXRlZFNpemUgPSBvd25lckdyYXBoLmdldEVzdGltYXRlZFNpemUoKSAqIHRoaXMuZ3Jhdml0eVJhbmdlRmFjdG9yO1xuXG4gICAgaWYgKGFic0Rpc3RhbmNlWCA+IGVzdGltYXRlZFNpemUgfHwgYWJzRGlzdGFuY2VZID4gZXN0aW1hdGVkU2l6ZSlcbiAgICB7XG4gICAgICBub2RlLmdyYXZpdGF0aW9uRm9yY2VYID0gLXRoaXMuZ3Jhdml0eUNvbnN0YW50ICogZGlzdGFuY2VYO1xuICAgICAgbm9kZS5ncmF2aXRhdGlvbkZvcmNlWSA9IC10aGlzLmdyYXZpdHlDb25zdGFudCAqIGRpc3RhbmNlWTtcbiAgICB9XG4gIH1cbiAgZWxzZS8vIGluc2lkZSBhIGNvbXBvdW5kXG4gIHtcbiAgICBlc3RpbWF0ZWRTaXplID0gb3duZXJHcmFwaC5nZXRFc3RpbWF0ZWRTaXplKCkgKiB0aGlzLmNvbXBvdW5kR3Jhdml0eVJhbmdlRmFjdG9yO1xuXG4gICAgaWYgKGFic0Rpc3RhbmNlWCA+IGVzdGltYXRlZFNpemUgfHwgYWJzRGlzdGFuY2VZID4gZXN0aW1hdGVkU2l6ZSlcbiAgICB7XG4gICAgICBub2RlLmdyYXZpdGF0aW9uRm9yY2VYID0gLXRoaXMuZ3Jhdml0eUNvbnN0YW50ICogZGlzdGFuY2VYICpcbiAgICAgICAgICAgICAgdGhpcy5jb21wb3VuZEdyYXZpdHlDb25zdGFudDtcbiAgICAgIG5vZGUuZ3Jhdml0YXRpb25Gb3JjZVkgPSAtdGhpcy5ncmF2aXR5Q29uc3RhbnQgKiBkaXN0YW5jZVkgKlxuICAgICAgICAgICAgICB0aGlzLmNvbXBvdW5kR3Jhdml0eUNvbnN0YW50O1xuICAgIH1cbiAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmlzQ29udmVyZ2VkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY29udmVyZ2VkO1xuICB2YXIgb3NjaWxhdGluZyA9IGZhbHNlO1xuXG4gIGlmICh0aGlzLnRvdGFsSXRlcmF0aW9ucyA+IHRoaXMubWF4SXRlcmF0aW9ucyAvIDMpXG4gIHtcbiAgICBvc2NpbGF0aW5nID1cbiAgICAgICAgICAgIE1hdGguYWJzKHRoaXMudG90YWxEaXNwbGFjZW1lbnQgLSB0aGlzLm9sZFRvdGFsRGlzcGxhY2VtZW50KSA8IDI7XG4gIH1cblxuICBjb252ZXJnZWQgPSB0aGlzLnRvdGFsRGlzcGxhY2VtZW50IDwgdGhpcy50b3RhbERpc3BsYWNlbWVudFRocmVzaG9sZDtcblxuICB0aGlzLm9sZFRvdGFsRGlzcGxhY2VtZW50ID0gdGhpcy50b3RhbERpc3BsYWNlbWVudDtcblxuICByZXR1cm4gY29udmVyZ2VkIHx8IG9zY2lsYXRpbmc7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYW5pbWF0aW9uRHVyaW5nTGF5b3V0ICYmICF0aGlzLmlzU3ViTGF5b3V0KVxuICB7XG4gICAgaWYgKHRoaXMubm90QW5pbWF0ZWRJdGVyYXRpb25zID09IHRoaXMuYW5pbWF0aW9uUGVyaW9kKVxuICAgIHtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICB0aGlzLm5vdEFuaW1hdGVkSXRlcmF0aW9ucyA9IDA7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICB0aGlzLm5vdEFuaW1hdGVkSXRlcmF0aW9ucysrO1xuICAgIH1cbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IEZSLUdyaWQgVmFyaWFudCBSZXB1bHNpb24gRm9yY2UgQ2FsY3VsYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjR3JpZCA9IGZ1bmN0aW9uIChncmFwaCl7XG5cbiAgdmFyIHNpemVYID0gMDsgXG4gIHZhciBzaXplWSA9IDA7XG4gIFxuICBzaXplWCA9IHBhcnNlSW50KE1hdGguY2VpbCgoZ3JhcGguZ2V0UmlnaHQoKSAtIGdyYXBoLmdldExlZnQoKSkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSk7XG4gIHNpemVZID0gcGFyc2VJbnQoTWF0aC5jZWlsKChncmFwaC5nZXRCb3R0b20oKSAtIGdyYXBoLmdldFRvcCgpKSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgXG4gIHZhciBncmlkID0gbmV3IEFycmF5KHNpemVYKTtcbiAgXG4gIGZvcih2YXIgaSA9IDA7IGkgPCBzaXplWDsgaSsrKXtcbiAgICBncmlkW2ldID0gbmV3IEFycmF5KHNpemVZKTsgICAgXG4gIH1cbiAgXG4gIGZvcih2YXIgaSA9IDA7IGkgPCBzaXplWDsgaSsrKXtcbiAgICBmb3IodmFyIGogPSAwOyBqIDwgc2l6ZVk7IGorKyl7XG4gICAgICBncmlkW2ldW2pdID0gbmV3IEFycmF5KCk7ICAgIFxuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGdyaWQ7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuYWRkTm9kZVRvR3JpZCA9IGZ1bmN0aW9uICh2LCBsZWZ0LCB0b3Ape1xuICAgIFxuICB2YXIgc3RhcnRYID0gMDtcbiAgdmFyIGZpbmlzaFggPSAwO1xuICB2YXIgc3RhcnRZID0gMDtcbiAgdmFyIGZpbmlzaFkgPSAwO1xuICBcbiAgc3RhcnRYID0gcGFyc2VJbnQoTWF0aC5mbG9vcigodi5nZXRSZWN0KCkueCAtIGxlZnQpIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpO1xuICBmaW5pc2hYID0gcGFyc2VJbnQoTWF0aC5mbG9vcigodi5nZXRSZWN0KCkud2lkdGggKyB2LmdldFJlY3QoKS54IC0gbGVmdCkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSk7XG4gIHN0YXJ0WSA9IHBhcnNlSW50KE1hdGguZmxvb3IoKHYuZ2V0UmVjdCgpLnkgLSB0b3ApIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpO1xuICBmaW5pc2hZID0gcGFyc2VJbnQoTWF0aC5mbG9vcigodi5nZXRSZWN0KCkuaGVpZ2h0ICsgdi5nZXRSZWN0KCkueSAtIHRvcCkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSk7XG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0WDsgaSA8PSBmaW5pc2hYOyBpKyspXG4gIHtcbiAgICBmb3IgKHZhciBqID0gc3RhcnRZOyBqIDw9IGZpbmlzaFk7IGorKylcbiAgICB7XG4gICAgICB0aGlzLmdyaWRbaV1bal0ucHVzaCh2KTtcbiAgICAgIHYuc2V0R3JpZENvb3JkaW5hdGVzKHN0YXJ0WCwgZmluaXNoWCwgc3RhcnRZLCBmaW5pc2hZKTsgXG4gICAgfVxuICB9ICBcblxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLnVwZGF0ZUdyaWQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGk7XG4gIHZhciBub2RlQTtcbiAgdmFyIGxOb2RlcyA9IHRoaXMuZ2V0QWxsTm9kZXMoKTtcbiAgXG4gIHRoaXMuZ3JpZCA9IHRoaXMuY2FsY0dyaWQodGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpKTsgICBcblxuICAvLyBwdXQgYWxsIG5vZGVzIHRvIHByb3BlciBncmlkIGNlbGxzXG4gIGZvciAoaSA9IDA7IGkgPCBsTm9kZXMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICBub2RlQSA9IGxOb2Rlc1tpXTtcbiAgICB0aGlzLmFkZE5vZGVUb0dyaWQobm9kZUEsIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXRMZWZ0KCksIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXRUb3AoKSk7XG4gIH0gXG5cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjdWxhdGVSZXB1bHNpb25Gb3JjZU9mQU5vZGUgPSBmdW5jdGlvbiAobm9kZUEsIHByb2Nlc3NlZE5vZGVTZXQpe1xuICBcbiAgaWYgKCh0aGlzLnRvdGFsSXRlcmF0aW9ucyAlIEZETGF5b3V0Q29uc3RhbnRzLkdSSURfQ0FMQ1VMQVRJT05fQ0hFQ0tfUEVSSU9EID09IDEgJiYgIXRoaXMuaXNUcmVlR3Jvd2luZyAmJiAhdGhpcy5pc0dyb3d0aEZpbmlzaGVkKSB8fCAodGhpcy5ncm93VHJlZUl0ZXJhdGlvbnMgJSAxMCA9PSAxICYmIHRoaXMuaXNUcmVlR3Jvd2luZykgfHwgKHRoaXMuYWZ0ZXJHcm93dGhJdGVyYXRpb25zICUgMTAgPT0gMSAmJiB0aGlzLmlzR3Jvd3RoRmluaXNoZWQpKVxuICB7XG4gICAgdmFyIHN1cnJvdW5kaW5nID0gbmV3IFNldCgpO1xuICAgIG5vZGVBLnN1cnJvdW5kaW5nID0gbmV3IEFycmF5KCk7XG4gICAgdmFyIG5vZGVCO1xuICAgIHZhciBncmlkID0gdGhpcy5ncmlkO1xuICAgIFxuICAgIGZvciAodmFyIGkgPSAobm9kZUEuc3RhcnRYIC0gMSk7IGkgPCAobm9kZUEuZmluaXNoWCArIDIpOyBpKyspXG4gICAge1xuICAgICAgZm9yICh2YXIgaiA9IChub2RlQS5zdGFydFkgLSAxKTsgaiA8IChub2RlQS5maW5pc2hZICsgMik7IGorKylcbiAgICAgIHtcbiAgICAgICAgaWYgKCEoKGkgPCAwKSB8fCAoaiA8IDApIHx8IChpID49IGdyaWQubGVuZ3RoKSB8fCAoaiA+PSBncmlkWzBdLmxlbmd0aCkpKVxuICAgICAgICB7ICBcbiAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGdyaWRbaV1bal0ubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIG5vZGVCID0gZ3JpZFtpXVtqXVtrXTtcblxuICAgICAgICAgICAgLy8gSWYgYm90aCBub2RlcyBhcmUgbm90IG1lbWJlcnMgb2YgdGhlIHNhbWUgZ3JhcGgsIFxuICAgICAgICAgICAgLy8gb3IgYm90aCBub2RlcyBhcmUgdGhlIHNhbWUsIHNraXAuXG4gICAgICAgICAgICBpZiAoKG5vZGVBLmdldE93bmVyKCkgIT0gbm9kZUIuZ2V0T3duZXIoKSkgfHwgKG5vZGVBID09IG5vZGVCKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSByZXB1bHNpb24gZm9yY2UgYmV0d2VlblxuICAgICAgICAgICAgLy8gbm9kZUEgYW5kIG5vZGVCIGhhcyBhbHJlYWR5IGJlZW4gY2FsY3VsYXRlZFxuICAgICAgICAgICAgaWYgKCFwcm9jZXNzZWROb2RlU2V0Lmhhcyhub2RlQikgJiYgIXN1cnJvdW5kaW5nLmhhcyhub2RlQikpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhciBkaXN0YW5jZVggPSBNYXRoLmFicyhub2RlQS5nZXRDZW50ZXJYKCktbm9kZUIuZ2V0Q2VudGVyWCgpKSAtIFxuICAgICAgICAgICAgICAgICAgICAoKG5vZGVBLmdldFdpZHRoKCkvMikgKyAobm9kZUIuZ2V0V2lkdGgoKS8yKSk7XG4gICAgICAgICAgICAgIHZhciBkaXN0YW5jZVkgPSBNYXRoLmFicyhub2RlQS5nZXRDZW50ZXJZKCktbm9kZUIuZ2V0Q2VudGVyWSgpKSAtIFxuICAgICAgICAgICAgICAgICAgICAoKG5vZGVBLmdldEhlaWdodCgpLzIpICsgKG5vZGVCLmdldEhlaWdodCgpLzIpKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBpZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiBub2RlQSBhbmQgbm9kZUIgXG4gICAgICAgICAgICAgIC8vIGlzIGxlc3MgdGhlbiBjYWxjdWxhdGlvbiByYW5nZVxuICAgICAgICAgICAgICBpZiAoKGRpc3RhbmNlWCA8PSB0aGlzLnJlcHVsc2lvblJhbmdlKSAmJiAoZGlzdGFuY2VZIDw9IHRoaXMucmVwdWxzaW9uUmFuZ2UpKVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy90aGVuIGFkZCBub2RlQiB0byBzdXJyb3VuZGluZyBvZiBub2RlQVxuICAgICAgICAgICAgICAgIHN1cnJvdW5kaW5nLmFkZChub2RlQik7XG4gICAgICAgICAgICAgIH0gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICB9XG4gICAgICAgIH0gICAgICAgICAgXG4gICAgICB9XG4gICAgfVxuXG4gICAgbm9kZUEuc3Vycm91bmRpbmcgPSBbLi4uc3Vycm91bmRpbmddO1xuXHRcbiAgfVxuICBmb3IgKGkgPSAwOyBpIDwgbm9kZUEuc3Vycm91bmRpbmcubGVuZ3RoOyBpKyspXG4gIHtcbiAgICB0aGlzLmNhbGNSZXB1bHNpb25Gb3JjZShub2RlQSwgbm9kZUEuc3Vycm91bmRpbmdbaV0pO1xuICB9XHRcbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjUmVwdWxzaW9uUmFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAwLjA7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogVHJlZSBSZWR1Y3Rpb24gbWV0aG9kc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFJlZHVjZSB0cmVlcyBcbkZETGF5b3V0LnByb3RvdHlwZS5yZWR1Y2VUcmVlcyA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBwcnVuZWROb2Rlc0FsbCA9IFtdO1xuICB2YXIgY29udGFpbnNMZWFmID0gdHJ1ZTtcbiAgdmFyIG5vZGU7XG4gIFxuICB3aGlsZShjb250YWluc0xlYWYpIHtcbiAgICB2YXIgYWxsTm9kZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2RlcygpO1xuICAgIHZhciBwcnVuZWROb2Rlc0luU3RlcFRlbXAgPSBbXTtcbiAgICBjb250YWluc0xlYWYgPSBmYWxzZTtcbiAgICBcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBub2RlID0gYWxsTm9kZXNbaV07XG4gICAgICBpZihub2RlLmdldEVkZ2VzKCkubGVuZ3RoID09IDEgJiYgIW5vZGUuZ2V0RWRnZXMoKVswXS5pc0ludGVyR3JhcGggJiYgbm9kZS5nZXRDaGlsZCgpID09IG51bGwpe1xuICAgICAgICBwcnVuZWROb2Rlc0luU3RlcFRlbXAucHVzaChbbm9kZSwgbm9kZS5nZXRFZGdlcygpWzBdLCBub2RlLmdldE93bmVyKCldKTtcbiAgICAgICAgY29udGFpbnNMZWFmID0gdHJ1ZTtcbiAgICAgIH0gIFxuICAgIH1cbiAgICBpZihjb250YWluc0xlYWYgPT0gdHJ1ZSl7XG4gICAgICB2YXIgcHJ1bmVkTm9kZXNJblN0ZXAgPSBbXTtcbiAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBwcnVuZWROb2Rlc0luU3RlcFRlbXAubGVuZ3RoOyBqKyspe1xuICAgICAgICBpZihwcnVuZWROb2Rlc0luU3RlcFRlbXBbal1bMF0uZ2V0RWRnZXMoKS5sZW5ndGggPT0gMSl7XG4gICAgICAgICAgcHJ1bmVkTm9kZXNJblN0ZXAucHVzaChwcnVuZWROb2Rlc0luU3RlcFRlbXBbal0pOyAgXG4gICAgICAgICAgcHJ1bmVkTm9kZXNJblN0ZXBUZW1wW2pdWzBdLmdldE93bmVyKCkucmVtb3ZlKHBydW5lZE5vZGVzSW5TdGVwVGVtcFtqXVswXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHBydW5lZE5vZGVzQWxsLnB1c2gocHJ1bmVkTm9kZXNJblN0ZXApO1xuICAgICAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxOb2RlcygpO1xuICAgICAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxFZGdlcygpO1xuICAgIH1cbiAgfVxuICB0aGlzLnBydW5lZE5vZGVzQWxsID0gcHJ1bmVkTm9kZXNBbGw7XG59O1xuXG4vLyBHcm93IHRyZWUgb25lIHN0ZXAgXG5GRExheW91dC5wcm90b3R5cGUuZ3Jvd1RyZWUgPSBmdW5jdGlvbihwcnVuZWROb2Rlc0FsbClcbntcbiAgdmFyIGxlbmd0aE9mUHJ1bmVkTm9kZXNJblN0ZXAgPSBwcnVuZWROb2Rlc0FsbC5sZW5ndGg7IFxuICB2YXIgcHJ1bmVkTm9kZXNJblN0ZXAgPSBwcnVuZWROb2Rlc0FsbFtsZW5ndGhPZlBydW5lZE5vZGVzSW5TdGVwIC0gMV07ICBcblxuICB2YXIgbm9kZURhdGE7ICBcbiAgZm9yKHZhciBpID0gMDsgaSA8IHBydW5lZE5vZGVzSW5TdGVwLmxlbmd0aDsgaSsrKXtcbiAgICBub2RlRGF0YSA9IHBydW5lZE5vZGVzSW5TdGVwW2ldO1xuXG4gICAgdGhpcy5maW5kUGxhY2Vmb3JQcnVuZWROb2RlKG5vZGVEYXRhKTtcbiAgICBcbiAgICBub2RlRGF0YVsyXS5hZGQobm9kZURhdGFbMF0pO1xuICAgIG5vZGVEYXRhWzJdLmFkZChub2RlRGF0YVsxXSwgbm9kZURhdGFbMV0uc291cmNlLCBub2RlRGF0YVsxXS50YXJnZXQpO1xuICB9XG5cbiAgcHJ1bmVkTm9kZXNBbGwuc3BsaWNlKHBydW5lZE5vZGVzQWxsLmxlbmd0aC0xLCAxKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxOb2RlcygpO1xuICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbEVkZ2VzKCk7XG59O1xuXG4vLyBGaW5kIGFuIGFwcHJvcHJpYXRlIHBvc2l0aW9uIHRvIHJlcGxhY2UgcHJ1bmVkIG5vZGUsIHRoaXMgbWV0aG9kIGNhbiBiZSBpbXByb3ZlZFxuRkRMYXlvdXQucHJvdG90eXBlLmZpbmRQbGFjZWZvclBydW5lZE5vZGUgPSBmdW5jdGlvbihub2RlRGF0YSl7XG4gIFxuICB2YXIgZ3JpZEZvclBydW5lZE5vZGU7ICBcbiAgdmFyIG5vZGVUb0Nvbm5lY3Q7XG4gIHZhciBwcnVuZWROb2RlID0gbm9kZURhdGFbMF07XG4gIGlmKHBydW5lZE5vZGUgPT0gbm9kZURhdGFbMV0uc291cmNlKXtcbiAgICBub2RlVG9Db25uZWN0ID0gbm9kZURhdGFbMV0udGFyZ2V0O1xuICB9XG4gIGVsc2Uge1xuICAgIG5vZGVUb0Nvbm5lY3QgPSBub2RlRGF0YVsxXS5zb3VyY2U7ICBcbiAgfVxuICB2YXIgc3RhcnRHcmlkWCA9IG5vZGVUb0Nvbm5lY3Quc3RhcnRYO1xuICB2YXIgZmluaXNoR3JpZFggPSBub2RlVG9Db25uZWN0LmZpbmlzaFg7XG4gIHZhciBzdGFydEdyaWRZID0gbm9kZVRvQ29ubmVjdC5zdGFydFk7XG4gIHZhciBmaW5pc2hHcmlkWSA9IG5vZGVUb0Nvbm5lY3QuZmluaXNoWTsgXG4gIFxuICB2YXIgdXBOb2RlQ291bnQgPSAwO1xuICB2YXIgZG93bk5vZGVDb3VudCA9IDA7XG4gIHZhciByaWdodE5vZGVDb3VudCA9IDA7XG4gIHZhciBsZWZ0Tm9kZUNvdW50ID0gMDtcbiAgdmFyIGNvbnRyb2xSZWdpb25zID0gW3VwTm9kZUNvdW50LCByaWdodE5vZGVDb3VudCwgZG93bk5vZGVDb3VudCwgbGVmdE5vZGVDb3VudF1cbiAgXG4gIGlmKHN0YXJ0R3JpZFkgPiAwKXtcbiAgICBmb3IodmFyIGkgPSBzdGFydEdyaWRYOyBpIDw9IGZpbmlzaEdyaWRYOyBpKysgKXtcbiAgICAgIGNvbnRyb2xSZWdpb25zWzBdICs9ICh0aGlzLmdyaWRbaV1bc3RhcnRHcmlkWSAtIDFdLmxlbmd0aCArIHRoaXMuZ3JpZFtpXVtzdGFydEdyaWRZXS5sZW5ndGggLSAxKTsgICBcbiAgICB9XG4gIH1cbiAgaWYoZmluaXNoR3JpZFggPCB0aGlzLmdyaWQubGVuZ3RoIC0gMSl7XG4gICAgZm9yKHZhciBpID0gc3RhcnRHcmlkWTsgaSA8PSBmaW5pc2hHcmlkWTsgaSsrICl7XG4gICAgICBjb250cm9sUmVnaW9uc1sxXSArPSAodGhpcy5ncmlkW2ZpbmlzaEdyaWRYICsgMV1baV0ubGVuZ3RoICsgdGhpcy5ncmlkW2ZpbmlzaEdyaWRYXVtpXS5sZW5ndGggLSAxKTsgICBcbiAgICB9XG4gIH1cbiAgaWYoZmluaXNoR3JpZFkgPCB0aGlzLmdyaWRbMF0ubGVuZ3RoIC0gMSl7XG4gICAgZm9yKHZhciBpID0gc3RhcnRHcmlkWDsgaSA8PSBmaW5pc2hHcmlkWDsgaSsrICl7XG4gICAgICBjb250cm9sUmVnaW9uc1syXSArPSAodGhpcy5ncmlkW2ldW2ZpbmlzaEdyaWRZICsgMV0ubGVuZ3RoICsgdGhpcy5ncmlkW2ldW2ZpbmlzaEdyaWRZXS5sZW5ndGggLSAxKTsgICBcbiAgICB9XG4gIH1cbiAgaWYoc3RhcnRHcmlkWCA+IDApe1xuICAgIGZvcih2YXIgaSA9IHN0YXJ0R3JpZFk7IGkgPD0gZmluaXNoR3JpZFk7IGkrKyApe1xuICAgICAgY29udHJvbFJlZ2lvbnNbM10gKz0gKHRoaXMuZ3JpZFtzdGFydEdyaWRYIC0gMV1baV0ubGVuZ3RoICsgdGhpcy5ncmlkW3N0YXJ0R3JpZFhdW2ldLmxlbmd0aCAtIDEpOyAgIFxuICAgIH1cbiAgfVxuICB2YXIgbWluID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBtaW5Db3VudDtcbiAgdmFyIG1pbkluZGV4O1xuICBmb3IodmFyIGogPSAwOyBqIDwgY29udHJvbFJlZ2lvbnMubGVuZ3RoOyBqKyspe1xuICAgIGlmKGNvbnRyb2xSZWdpb25zW2pdIDwgbWluKXtcbiAgICAgIG1pbiA9IGNvbnRyb2xSZWdpb25zW2pdO1xuICAgICAgbWluQ291bnQgPSAxO1xuICAgICAgbWluSW5kZXggPSBqO1xuICAgIH0gIFxuICAgIGVsc2UgaWYoY29udHJvbFJlZ2lvbnNbal0gPT0gbWluKXtcbiAgICAgIG1pbkNvdW50Kys7ICBcbiAgICB9XG4gIH1cbiAgXG4gIGlmKG1pbkNvdW50ID09IDMgJiYgbWluID09IDApe1xuICAgIGlmKGNvbnRyb2xSZWdpb25zWzBdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbMV0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1syXSA9PSAwKXtcbiAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMTsgICAgXG4gICAgfVxuICAgIGVsc2UgaWYoY29udHJvbFJlZ2lvbnNbMF0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1sxXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzNdID09IDApe1xuICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAwOyAgXG4gICAgfVxuICAgIGVsc2UgaWYoY29udHJvbFJlZ2lvbnNbMF0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1syXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzNdID09IDApe1xuICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAzOyAgXG4gICAgfVxuICAgIGVsc2UgaWYoY29udHJvbFJlZ2lvbnNbMV0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1syXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzNdID09IDApe1xuICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAyOyAgXG4gICAgfVxuICB9XG4gIGVsc2UgaWYobWluQ291bnQgPT0gMiAmJiBtaW4gPT0gMCl7XG4gICAgdmFyIHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgIGlmKGNvbnRyb2xSZWdpb25zWzBdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbMV0gPT0gMCl7O1xuICAgICAgaWYocmFuZG9tID09IDApe1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDA7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDE7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYoY29udHJvbFJlZ2lvbnNbMF0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1syXSA9PSAwKXtcbiAgICAgIGlmKHJhbmRvbSA9PSAwKXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAwO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAyO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKGNvbnRyb2xSZWdpb25zWzBdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbM10gPT0gMCl7XG4gICAgICBpZihyYW5kb20gPT0gMCl7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMDtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMztcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZihjb250cm9sUmVnaW9uc1sxXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzJdID09IDApe1xuICAgICAgaWYocmFuZG9tID09IDApe1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDE7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDI7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYoY29udHJvbFJlZ2lvbnNbMV0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1szXSA9PSAwKXtcbiAgICAgIGlmKHJhbmRvbSA9PSAwKXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAxO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAzO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmKHJhbmRvbSA9PSAwKXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAyO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIGlmKG1pbkNvdW50ID09IDQgJiYgbWluID09IDApe1xuICAgIHZhciByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcbiAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IHJhbmRvbTsgIFxuICB9XG4gIGVsc2Uge1xuICAgIGdyaWRGb3JQcnVuZWROb2RlID0gbWluSW5kZXg7XG4gIH1cbiAgXG4gIGlmKGdyaWRGb3JQcnVuZWROb2RlID09IDApIHtcbiAgICBwcnVuZWROb2RlLnNldENlbnRlcihub2RlVG9Db25uZWN0LmdldENlbnRlclgoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBub2RlVG9Db25uZWN0LmdldENlbnRlclkoKSAtIG5vZGVUb0Nvbm5lY3QuZ2V0SGVpZ2h0KCkvMiAtIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggLSBwcnVuZWROb2RlLmdldEhlaWdodCgpLzIpOyAgXG4gIH1cbiAgZWxzZSBpZihncmlkRm9yUHJ1bmVkTm9kZSA9PSAxKSB7XG4gICAgcHJ1bmVkTm9kZS5zZXRDZW50ZXIobm9kZVRvQ29ubmVjdC5nZXRDZW50ZXJYKCkgKyBub2RlVG9Db25uZWN0LmdldFdpZHRoKCkvMiArIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggKyBwcnVuZWROb2RlLmdldFdpZHRoKCkvMixcbiAgICAgICAgICAgICAgICAgICAgICAgICBub2RlVG9Db25uZWN0LmdldENlbnRlclkoKSk7ICBcbiAgfVxuICBlbHNlIGlmKGdyaWRGb3JQcnVuZWROb2RlID09IDIpIHtcbiAgICBwcnVuZWROb2RlLnNldENlbnRlcihub2RlVG9Db25uZWN0LmdldENlbnRlclgoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBub2RlVG9Db25uZWN0LmdldENlbnRlclkoKSArIG5vZGVUb0Nvbm5lY3QuZ2V0SGVpZ2h0KCkvMiArIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggKyBwcnVuZWROb2RlLmdldEhlaWdodCgpLzIpOyAgXG4gIH1cbiAgZWxzZSB7IFxuICAgIHBydW5lZE5vZGUuc2V0Q2VudGVyKG5vZGVUb0Nvbm5lY3QuZ2V0Q2VudGVyWCgpIC0gbm9kZVRvQ29ubmVjdC5nZXRXaWR0aCgpLzIgLSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIIC0gcHJ1bmVkTm9kZS5nZXRXaWR0aCgpLzIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvQ29ubmVjdC5nZXRDZW50ZXJZKCkpOyAgXG4gIH1cbiAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZETGF5b3V0O1xuIiwidmFyIExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vTGF5b3V0Q29uc3RhbnRzJyk7XG5cbmZ1bmN0aW9uIEZETGF5b3V0Q29uc3RhbnRzKCkge1xufVxuXG4vL0ZETGF5b3V0Q29uc3RhbnRzIGluaGVyaXRzIHN0YXRpYyBwcm9wcyBpbiBMYXlvdXRDb25zdGFudHNcbmZvciAodmFyIHByb3AgaW4gTGF5b3V0Q29uc3RhbnRzKSB7XG4gIEZETGF5b3V0Q29uc3RhbnRzW3Byb3BdID0gTGF5b3V0Q29uc3RhbnRzW3Byb3BdO1xufVxuXG5GRExheW91dENvbnN0YW50cy5NQVhfSVRFUkFUSU9OUyA9IDI1MDA7XG5cbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggPSA1MDtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfU1BSSU5HX1NUUkVOR1RIID0gMC40NTtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUkVQVUxTSU9OX1NUUkVOR1RIID0gNDUwMC4wO1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1NUUkVOR1RIID0gMC40O1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1NUUkVOR1RIID0gMS4wO1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiA9IDMuODtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1IgPSAxLjU7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX1VTRV9TTUFSVF9JREVBTF9FREdFX0xFTkdUSF9DQUxDVUxBVElPTiA9IHRydWU7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX1VTRV9TTUFSVF9SRVBVTFNJT05fUkFOR0VfQ0FMQ1VMQVRJT04gPSB0cnVlO1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCA9IDAuNTtcbkZETGF5b3V0Q29uc3RhbnRzLk1BWF9OT0RFX0RJU1BMQUNFTUVOVF9JTkNSRU1FTlRBTCA9IDEwMC4wO1xuRkRMYXlvdXRDb25zdGFudHMuTUFYX05PREVfRElTUExBQ0VNRU5UID0gRkRMYXlvdXRDb25zdGFudHMuTUFYX05PREVfRElTUExBQ0VNRU5UX0lOQ1JFTUVOVEFMICogMztcbkZETGF5b3V0Q29uc3RhbnRzLk1JTl9SRVBVTFNJT05fRElTVCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggLyAxMC4wO1xuRkRMYXlvdXRDb25zdGFudHMuQ09OVkVSR0VOQ0VfQ0hFQ0tfUEVSSU9EID0gMTAwO1xuRkRMYXlvdXRDb25zdGFudHMuUEVSX0xFVkVMX0lERUFMX0VER0VfTEVOR1RIX0ZBQ1RPUiA9IDAuMTtcbkZETGF5b3V0Q29uc3RhbnRzLk1JTl9FREdFX0xFTkdUSCA9IDE7XG5GRExheW91dENvbnN0YW50cy5HUklEX0NBTENVTEFUSU9OX0NIRUNLX1BFUklPRCA9IDEwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZETGF5b3V0Q29uc3RhbnRzO1xuIiwidmFyIExFZGdlID0gcmVxdWlyZSgnLi9MRWRnZScpO1xudmFyIEZETGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9GRExheW91dENvbnN0YW50cycpO1xuXG5mdW5jdGlvbiBGRExheW91dEVkZ2Uoc291cmNlLCB0YXJnZXQsIHZFZGdlKSB7XG4gIExFZGdlLmNhbGwodGhpcywgc291cmNlLCB0YXJnZXQsIHZFZGdlKTtcbiAgdGhpcy5pZGVhbExlbmd0aCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEg7XG59XG5cbkZETGF5b3V0RWRnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExFZGdlLnByb3RvdHlwZSk7XG5cbmZvciAodmFyIHByb3AgaW4gTEVkZ2UpIHtcbiAgRkRMYXlvdXRFZGdlW3Byb3BdID0gTEVkZ2VbcHJvcF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRkRMYXlvdXRFZGdlO1xuIiwidmFyIExOb2RlID0gcmVxdWlyZSgnLi9MTm9kZScpO1xuXG5mdW5jdGlvbiBGRExheW91dE5vZGUoZ20sIGxvYywgc2l6ZSwgdk5vZGUpIHtcbiAgLy8gYWx0ZXJuYXRpdmUgY29uc3RydWN0b3IgaXMgaGFuZGxlZCBpbnNpZGUgTE5vZGVcbiAgTE5vZGUuY2FsbCh0aGlzLCBnbSwgbG9jLCBzaXplLCB2Tm9kZSk7XG4gIC8vU3ByaW5nLCByZXB1bHNpb24gYW5kIGdyYXZpdGF0aW9uYWwgZm9yY2VzIGFjdGluZyBvbiB0aGlzIG5vZGVcbiAgdGhpcy5zcHJpbmdGb3JjZVggPSAwO1xuICB0aGlzLnNwcmluZ0ZvcmNlWSA9IDA7XG4gIHRoaXMucmVwdWxzaW9uRm9yY2VYID0gMDtcbiAgdGhpcy5yZXB1bHNpb25Gb3JjZVkgPSAwO1xuICB0aGlzLmdyYXZpdGF0aW9uRm9yY2VYID0gMDtcbiAgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWSA9IDA7XG4gIC8vQW1vdW50IGJ5IHdoaWNoIHRoaXMgbm9kZSBpcyB0byBiZSBtb3ZlZCBpbiB0aGlzIGl0ZXJhdGlvblxuICB0aGlzLmRpc3BsYWNlbWVudFggPSAwO1xuICB0aGlzLmRpc3BsYWNlbWVudFkgPSAwO1xuXG4gIC8vU3RhcnQgYW5kIGZpbmlzaCBncmlkIGNvb3JkaW5hdGVzIHRoYXQgdGhpcyBub2RlIGlzIGZhbGxlbiBpbnRvXG4gIHRoaXMuc3RhcnRYID0gMDtcbiAgdGhpcy5maW5pc2hYID0gMDtcbiAgdGhpcy5zdGFydFkgPSAwO1xuICB0aGlzLmZpbmlzaFkgPSAwO1xuXG4gIC8vR2VvbWV0cmljIG5laWdoYm9ycyBvZiB0aGlzIG5vZGVcbiAgdGhpcy5zdXJyb3VuZGluZyA9IFtdO1xufVxuXG5GRExheW91dE5vZGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMTm9kZS5wcm90b3R5cGUpO1xuXG5mb3IgKHZhciBwcm9wIGluIExOb2RlKSB7XG4gIEZETGF5b3V0Tm9kZVtwcm9wXSA9IExOb2RlW3Byb3BdO1xufVxuXG5GRExheW91dE5vZGUucHJvdG90eXBlLnNldEdyaWRDb29yZGluYXRlcyA9IGZ1bmN0aW9uIChfc3RhcnRYLCBfZmluaXNoWCwgX3N0YXJ0WSwgX2ZpbmlzaFkpXG57XG4gIHRoaXMuc3RhcnRYID0gX3N0YXJ0WDtcbiAgdGhpcy5maW5pc2hYID0gX2ZpbmlzaFg7XG4gIHRoaXMuc3RhcnRZID0gX3N0YXJ0WTtcbiAgdGhpcy5maW5pc2hZID0gX2ZpbmlzaFk7XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRkRMYXlvdXROb2RlO1xuIiwidmFyIFVuaXF1ZUlER2VuZXJldG9yID0gcmVxdWlyZSgnLi9VbmlxdWVJREdlbmVyZXRvcicpO1xuXG5mdW5jdGlvbiBIYXNoTWFwKCkge1xuICB0aGlzLm1hcCA9IHt9O1xuICB0aGlzLmtleXMgPSBbXTtcbn1cblxuSGFzaE1hcC5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdmFyIHRoZUlkID0gVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQoa2V5KTtcbiAgaWYgKCF0aGlzLmNvbnRhaW5zKHRoZUlkKSkge1xuICAgIHRoaXMubWFwW3RoZUlkXSA9IHZhbHVlO1xuICAgIHRoaXMua2V5cy5wdXNoKGtleSk7XG4gIH1cbn07XG5cbkhhc2hNYXAucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKGtleSkge1xuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChrZXkpO1xuICByZXR1cm4gdGhpcy5tYXBba2V5XSAhPSBudWxsO1xufTtcblxuSGFzaE1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChrZXkpO1xuICByZXR1cm4gdGhpcy5tYXBbdGhlSWRdO1xufTtcblxuSGFzaE1hcC5wcm90b3R5cGUua2V5U2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5rZXlzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoTWFwO1xuIiwidmFyIFVuaXF1ZUlER2VuZXJldG9yID0gcmVxdWlyZSgnLi9VbmlxdWVJREdlbmVyZXRvcicpO1xuXG5mdW5jdGlvbiBIYXNoU2V0KCkge1xuICB0aGlzLnNldCA9IHt9O1xufVxuO1xuXG5IYXNoU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciB0aGVJZCA9IFVuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKG9iaik7XG4gIGlmICghdGhpcy5jb250YWlucyh0aGVJZCkpXG4gICAgdGhpcy5zZXRbdGhlSWRdID0gb2JqO1xufTtcblxuSGFzaFNldC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG9iaikge1xuICBkZWxldGUgdGhpcy5zZXRbVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQob2JqKV07XG59O1xuXG5IYXNoU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5zZXQgPSB7fTtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdGhpcy5zZXRbVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQob2JqKV0gPT0gb2JqO1xufTtcblxuSGFzaFNldC5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuc2l6ZSgpID09PSAwO1xufTtcblxuSGFzaFNldC5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc2V0KS5sZW5ndGg7XG59O1xuXG4vL2NvbmNhdHMgdGhpcy5zZXQgdG8gdGhlIGdpdmVuIGxpc3Rcbkhhc2hTZXQucHJvdG90eXBlLmFkZEFsbFRvID0gZnVuY3Rpb24gKGxpc3QpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnNldCk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGxpc3QucHVzaCh0aGlzLnNldFtrZXlzW2ldXSk7XG4gIH1cbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnNldCkubGVuZ3RoO1xufTtcblxuSGFzaFNldC5wcm90b3R5cGUuYWRkQWxsID0gZnVuY3Rpb24gKGxpc3QpIHtcbiAgdmFyIHMgPSBsaXN0Lmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspIHtcbiAgICB2YXIgdiA9IGxpc3RbaV07XG4gICAgdGhpcy5hZGQodik7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaFNldDtcbiIsImZ1bmN0aW9uIElHZW9tZXRyeSgpIHtcbn1cblxuSUdlb21ldHJ5LmNhbGNTZXBhcmF0aW9uQW1vdW50ID0gZnVuY3Rpb24gKHJlY3RBLCByZWN0Qiwgb3ZlcmxhcEFtb3VudCwgc2VwYXJhdGlvbkJ1ZmZlcilcbntcbiAgaWYgKCFyZWN0QS5pbnRlcnNlY3RzKHJlY3RCKSkge1xuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICB9XG4gIHZhciBkaXJlY3Rpb25zID0gbmV3IEFycmF5KDIpO1xuICBJR2VvbWV0cnkuZGVjaWRlRGlyZWN0aW9uc0Zvck92ZXJsYXBwaW5nTm9kZXMocmVjdEEsIHJlY3RCLCBkaXJlY3Rpb25zKTtcbiAgb3ZlcmxhcEFtb3VudFswXSA9IE1hdGgubWluKHJlY3RBLmdldFJpZ2h0KCksIHJlY3RCLmdldFJpZ2h0KCkpIC1cbiAgICAgICAgICBNYXRoLm1heChyZWN0QS54LCByZWN0Qi54KTtcbiAgb3ZlcmxhcEFtb3VudFsxXSA9IE1hdGgubWluKHJlY3RBLmdldEJvdHRvbSgpLCByZWN0Qi5nZXRCb3R0b20oKSkgLVxuICAgICAgICAgIE1hdGgubWF4KHJlY3RBLnksIHJlY3RCLnkpO1xuICAvLyB1cGRhdGUgdGhlIG92ZXJsYXBwaW5nIGFtb3VudHMgZm9yIHRoZSBmb2xsb3dpbmcgY2FzZXM6XG4gIGlmICgocmVjdEEuZ2V0WCgpIDw9IHJlY3RCLmdldFgoKSkgJiYgKHJlY3RBLmdldFJpZ2h0KCkgPj0gcmVjdEIuZ2V0UmlnaHQoKSkpXG4gIHtcbiAgICBvdmVybGFwQW1vdW50WzBdICs9IE1hdGgubWluKChyZWN0Qi5nZXRYKCkgLSByZWN0QS5nZXRYKCkpLFxuICAgICAgICAgICAgKHJlY3RBLmdldFJpZ2h0KCkgLSByZWN0Qi5nZXRSaWdodCgpKSk7XG4gIH1cbiAgZWxzZSBpZiAoKHJlY3RCLmdldFgoKSA8PSByZWN0QS5nZXRYKCkpICYmIChyZWN0Qi5nZXRSaWdodCgpID49IHJlY3RBLmdldFJpZ2h0KCkpKVxuICB7XG4gICAgb3ZlcmxhcEFtb3VudFswXSArPSBNYXRoLm1pbigocmVjdEEuZ2V0WCgpIC0gcmVjdEIuZ2V0WCgpKSxcbiAgICAgICAgICAgIChyZWN0Qi5nZXRSaWdodCgpIC0gcmVjdEEuZ2V0UmlnaHQoKSkpO1xuICB9XG4gIGlmICgocmVjdEEuZ2V0WSgpIDw9IHJlY3RCLmdldFkoKSkgJiYgKHJlY3RBLmdldEJvdHRvbSgpID49IHJlY3RCLmdldEJvdHRvbSgpKSlcbiAge1xuICAgIG92ZXJsYXBBbW91bnRbMV0gKz0gTWF0aC5taW4oKHJlY3RCLmdldFkoKSAtIHJlY3RBLmdldFkoKSksXG4gICAgICAgICAgICAocmVjdEEuZ2V0Qm90dG9tKCkgLSByZWN0Qi5nZXRCb3R0b20oKSkpO1xuICB9XG4gIGVsc2UgaWYgKChyZWN0Qi5nZXRZKCkgPD0gcmVjdEEuZ2V0WSgpKSAmJiAocmVjdEIuZ2V0Qm90dG9tKCkgPj0gcmVjdEEuZ2V0Qm90dG9tKCkpKVxuICB7XG4gICAgb3ZlcmxhcEFtb3VudFsxXSArPSBNYXRoLm1pbigocmVjdEEuZ2V0WSgpIC0gcmVjdEIuZ2V0WSgpKSxcbiAgICAgICAgICAgIChyZWN0Qi5nZXRCb3R0b20oKSAtIHJlY3RBLmdldEJvdHRvbSgpKSk7XG4gIH1cblxuICAvLyBmaW5kIHNsb3BlIG9mIHRoZSBsaW5lIHBhc3NlcyB0d28gY2VudGVyc1xuICB2YXIgc2xvcGUgPSBNYXRoLmFicygocmVjdEIuZ2V0Q2VudGVyWSgpIC0gcmVjdEEuZ2V0Q2VudGVyWSgpKSAvXG4gICAgICAgICAgKHJlY3RCLmdldENlbnRlclgoKSAtIHJlY3RBLmdldENlbnRlclgoKSkpO1xuICAvLyBpZiBjZW50ZXJzIGFyZSBvdmVybGFwcGVkXG4gIGlmICgocmVjdEIuZ2V0Q2VudGVyWSgpID09IHJlY3RBLmdldENlbnRlclkoKSkgJiZcbiAgICAgICAgICAocmVjdEIuZ2V0Q2VudGVyWCgpID09IHJlY3RBLmdldENlbnRlclgoKSkpXG4gIHtcbiAgICAvLyBhc3N1bWUgdGhlIHNsb3BlIGlzIDEgKDQ1IGRlZ3JlZSlcbiAgICBzbG9wZSA9IDEuMDtcbiAgfVxuXG4gIHZhciBtb3ZlQnlZID0gc2xvcGUgKiBvdmVybGFwQW1vdW50WzBdO1xuICB2YXIgbW92ZUJ5WCA9IG92ZXJsYXBBbW91bnRbMV0gLyBzbG9wZTtcbiAgaWYgKG92ZXJsYXBBbW91bnRbMF0gPCBtb3ZlQnlYKVxuICB7XG4gICAgbW92ZUJ5WCA9IG92ZXJsYXBBbW91bnRbMF07XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgbW92ZUJ5WSA9IG92ZXJsYXBBbW91bnRbMV07XG4gIH1cbiAgLy8gcmV0dXJuIGhhbGYgdGhlIGFtb3VudCBzbyB0aGF0IGlmIGVhY2ggcmVjdGFuZ2xlIGlzIG1vdmVkIGJ5IHRoZXNlXG4gIC8vIGFtb3VudHMgaW4gb3Bwb3NpdGUgZGlyZWN0aW9ucywgb3ZlcmxhcCB3aWxsIGJlIHJlc29sdmVkXG4gIG92ZXJsYXBBbW91bnRbMF0gPSAtMSAqIGRpcmVjdGlvbnNbMF0gKiAoKG1vdmVCeVggLyAyKSArIHNlcGFyYXRpb25CdWZmZXIpO1xuICBvdmVybGFwQW1vdW50WzFdID0gLTEgKiBkaXJlY3Rpb25zWzFdICogKChtb3ZlQnlZIC8gMikgKyBzZXBhcmF0aW9uQnVmZmVyKTtcbn1cblxuSUdlb21ldHJ5LmRlY2lkZURpcmVjdGlvbnNGb3JPdmVybGFwcGluZ05vZGVzID0gZnVuY3Rpb24gKHJlY3RBLCByZWN0QiwgZGlyZWN0aW9ucylcbntcbiAgaWYgKHJlY3RBLmdldENlbnRlclgoKSA8IHJlY3RCLmdldENlbnRlclgoKSlcbiAge1xuICAgIGRpcmVjdGlvbnNbMF0gPSAtMTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICBkaXJlY3Rpb25zWzBdID0gMTtcbiAgfVxuXG4gIGlmIChyZWN0QS5nZXRDZW50ZXJZKCkgPCByZWN0Qi5nZXRDZW50ZXJZKCkpXG4gIHtcbiAgICBkaXJlY3Rpb25zWzFdID0gLTE7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgZGlyZWN0aW9uc1sxXSA9IDE7XG4gIH1cbn1cblxuSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbjIgPSBmdW5jdGlvbiAocmVjdEEsIHJlY3RCLCByZXN1bHQpXG57XG4gIC8vcmVzdWx0WzAtMV0gd2lsbCBjb250YWluIGNsaXBQb2ludCBvZiByZWN0QSwgcmVzdWx0WzItM10gd2lsbCBjb250YWluIGNsaXBQb2ludCBvZiByZWN0QlxuICB2YXIgcDF4ID0gcmVjdEEuZ2V0Q2VudGVyWCgpO1xuICB2YXIgcDF5ID0gcmVjdEEuZ2V0Q2VudGVyWSgpO1xuICB2YXIgcDJ4ID0gcmVjdEIuZ2V0Q2VudGVyWCgpO1xuICB2YXIgcDJ5ID0gcmVjdEIuZ2V0Q2VudGVyWSgpO1xuXG4gIC8vaWYgdHdvIHJlY3RhbmdsZXMgaW50ZXJzZWN0LCB0aGVuIGNsaXBwaW5nIHBvaW50cyBhcmUgY2VudGVyc1xuICBpZiAocmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpXG4gIHtcbiAgICByZXN1bHRbMF0gPSBwMXg7XG4gICAgcmVzdWx0WzFdID0gcDF5O1xuICAgIHJlc3VsdFsyXSA9IHAyeDtcbiAgICByZXN1bHRbM10gPSBwMnk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy92YXJpYWJsZXMgZm9yIHJlY3RBXG4gIHZhciB0b3BMZWZ0QXggPSByZWN0QS5nZXRYKCk7XG4gIHZhciB0b3BMZWZ0QXkgPSByZWN0QS5nZXRZKCk7XG4gIHZhciB0b3BSaWdodEF4ID0gcmVjdEEuZ2V0UmlnaHQoKTtcbiAgdmFyIGJvdHRvbUxlZnRBeCA9IHJlY3RBLmdldFgoKTtcbiAgdmFyIGJvdHRvbUxlZnRBeSA9IHJlY3RBLmdldEJvdHRvbSgpO1xuICB2YXIgYm90dG9tUmlnaHRBeCA9IHJlY3RBLmdldFJpZ2h0KCk7XG4gIHZhciBoYWxmV2lkdGhBID0gcmVjdEEuZ2V0V2lkdGhIYWxmKCk7XG4gIHZhciBoYWxmSGVpZ2h0QSA9IHJlY3RBLmdldEhlaWdodEhhbGYoKTtcbiAgLy92YXJpYWJsZXMgZm9yIHJlY3RCXG4gIHZhciB0b3BMZWZ0QnggPSByZWN0Qi5nZXRYKCk7XG4gIHZhciB0b3BMZWZ0QnkgPSByZWN0Qi5nZXRZKCk7XG4gIHZhciB0b3BSaWdodEJ4ID0gcmVjdEIuZ2V0UmlnaHQoKTtcbiAgdmFyIGJvdHRvbUxlZnRCeCA9IHJlY3RCLmdldFgoKTtcbiAgdmFyIGJvdHRvbUxlZnRCeSA9IHJlY3RCLmdldEJvdHRvbSgpO1xuICB2YXIgYm90dG9tUmlnaHRCeCA9IHJlY3RCLmdldFJpZ2h0KCk7XG4gIHZhciBoYWxmV2lkdGhCID0gcmVjdEIuZ2V0V2lkdGhIYWxmKCk7XG4gIHZhciBoYWxmSGVpZ2h0QiA9IHJlY3RCLmdldEhlaWdodEhhbGYoKTtcbiAgLy9mbGFnIHdoZXRoZXIgY2xpcHBpbmcgcG9pbnRzIGFyZSBmb3VuZFxuICB2YXIgY2xpcFBvaW50QUZvdW5kID0gZmFsc2U7XG4gIHZhciBjbGlwUG9pbnRCRm91bmQgPSBmYWxzZTtcblxuICAvLyBsaW5lIGlzIHZlcnRpY2FsXG4gIGlmIChwMXggPT0gcDJ4KVxuICB7XG4gICAgaWYgKHAxeSA+IHAyeSlcbiAgICB7XG4gICAgICByZXN1bHRbMF0gPSBwMXg7XG4gICAgICByZXN1bHRbMV0gPSB0b3BMZWZ0QXk7XG4gICAgICByZXN1bHRbMl0gPSBwMng7XG4gICAgICByZXN1bHRbM10gPSBib3R0b21MZWZ0Qnk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKHAxeSA8IHAyeSlcbiAgICB7XG4gICAgICByZXN1bHRbMF0gPSBwMXg7XG4gICAgICByZXN1bHRbMV0gPSBib3R0b21MZWZ0QXk7XG4gICAgICByZXN1bHRbMl0gPSBwMng7XG4gICAgICByZXN1bHRbM10gPSB0b3BMZWZ0Qnk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAvL25vdCBsaW5lLCByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgLy8gbGluZSBpcyBob3Jpem9udGFsXG4gIGVsc2UgaWYgKHAxeSA9PSBwMnkpXG4gIHtcbiAgICBpZiAocDF4ID4gcDJ4KVxuICAgIHtcbiAgICAgIHJlc3VsdFswXSA9IHRvcExlZnRBeDtcbiAgICAgIHJlc3VsdFsxXSA9IHAxeTtcbiAgICAgIHJlc3VsdFsyXSA9IHRvcFJpZ2h0Qng7XG4gICAgICByZXN1bHRbM10gPSBwMnk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKHAxeCA8IHAyeClcbiAgICB7XG4gICAgICByZXN1bHRbMF0gPSB0b3BSaWdodEF4O1xuICAgICAgcmVzdWx0WzFdID0gcDF5O1xuICAgICAgcmVzdWx0WzJdID0gdG9wTGVmdEJ4O1xuICAgICAgcmVzdWx0WzNdID0gcDJ5O1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgLy9ub3QgdmFsaWQgbGluZSwgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIGVsc2VcbiAge1xuICAgIC8vc2xvcGVzIG9mIHJlY3RBJ3MgYW5kIHJlY3RCJ3MgZGlhZ29uYWxzXG4gICAgdmFyIHNsb3BlQSA9IHJlY3RBLmhlaWdodCAvIHJlY3RBLndpZHRoO1xuICAgIHZhciBzbG9wZUIgPSByZWN0Qi5oZWlnaHQgLyByZWN0Qi53aWR0aDtcblxuICAgIC8vc2xvcGUgb2YgbGluZSBiZXR3ZWVuIGNlbnRlciBvZiByZWN0QSBhbmQgY2VudGVyIG9mIHJlY3RCXG4gICAgdmFyIHNsb3BlUHJpbWUgPSAocDJ5IC0gcDF5KSAvIChwMnggLSBwMXgpO1xuICAgIHZhciBjYXJkaW5hbERpcmVjdGlvbkE7XG4gICAgdmFyIGNhcmRpbmFsRGlyZWN0aW9uQjtcbiAgICB2YXIgdGVtcFBvaW50QXg7XG4gICAgdmFyIHRlbXBQb2ludEF5O1xuICAgIHZhciB0ZW1wUG9pbnRCeDtcbiAgICB2YXIgdGVtcFBvaW50Qnk7XG5cbiAgICAvL2RldGVybWluZSB3aGV0aGVyIGNsaXBwaW5nIHBvaW50IGlzIHRoZSBjb3JuZXIgb2Ygbm9kZUFcbiAgICBpZiAoKC1zbG9wZUEpID09IHNsb3BlUHJpbWUpXG4gICAge1xuICAgICAgaWYgKHAxeCA+IHAyeClcbiAgICAgIHtcbiAgICAgICAgcmVzdWx0WzBdID0gYm90dG9tTGVmdEF4O1xuICAgICAgICByZXN1bHRbMV0gPSBib3R0b21MZWZ0QXk7XG4gICAgICAgIGNsaXBQb2ludEFGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIHJlc3VsdFswXSA9IHRvcFJpZ2h0QXg7XG4gICAgICAgIHJlc3VsdFsxXSA9IHRvcExlZnRBeTtcbiAgICAgICAgY2xpcFBvaW50QUZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoc2xvcGVBID09IHNsb3BlUHJpbWUpXG4gICAge1xuICAgICAgaWYgKHAxeCA+IHAyeClcbiAgICAgIHtcbiAgICAgICAgcmVzdWx0WzBdID0gdG9wTGVmdEF4O1xuICAgICAgICByZXN1bHRbMV0gPSB0b3BMZWZ0QXk7XG4gICAgICAgIGNsaXBQb2ludEFGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIHJlc3VsdFswXSA9IGJvdHRvbVJpZ2h0QXg7XG4gICAgICAgIHJlc3VsdFsxXSA9IGJvdHRvbUxlZnRBeTtcbiAgICAgICAgY2xpcFBvaW50QUZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL2RldGVybWluZSB3aGV0aGVyIGNsaXBwaW5nIHBvaW50IGlzIHRoZSBjb3JuZXIgb2Ygbm9kZUJcbiAgICBpZiAoKC1zbG9wZUIpID09IHNsb3BlUHJpbWUpXG4gICAge1xuICAgICAgaWYgKHAyeCA+IHAxeClcbiAgICAgIHtcbiAgICAgICAgcmVzdWx0WzJdID0gYm90dG9tTGVmdEJ4O1xuICAgICAgICByZXN1bHRbM10gPSBib3R0b21MZWZ0Qnk7XG4gICAgICAgIGNsaXBQb2ludEJGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIHJlc3VsdFsyXSA9IHRvcFJpZ2h0Qng7XG4gICAgICAgIHJlc3VsdFszXSA9IHRvcExlZnRCeTtcbiAgICAgICAgY2xpcFBvaW50QkZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoc2xvcGVCID09IHNsb3BlUHJpbWUpXG4gICAge1xuICAgICAgaWYgKHAyeCA+IHAxeClcbiAgICAgIHtcbiAgICAgICAgcmVzdWx0WzJdID0gdG9wTGVmdEJ4O1xuICAgICAgICByZXN1bHRbM10gPSB0b3BMZWZ0Qnk7XG4gICAgICAgIGNsaXBQb2ludEJGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIHJlc3VsdFsyXSA9IGJvdHRvbVJpZ2h0Qng7XG4gICAgICAgIHJlc3VsdFszXSA9IGJvdHRvbUxlZnRCeTtcbiAgICAgICAgY2xpcFBvaW50QkZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL2lmIGJvdGggY2xpcHBpbmcgcG9pbnRzIGFyZSBjb3JuZXJzXG4gICAgaWYgKGNsaXBQb2ludEFGb3VuZCAmJiBjbGlwUG9pbnRCRm91bmQpXG4gICAge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vZGV0ZXJtaW5lIENhcmRpbmFsIERpcmVjdGlvbiBvZiByZWN0YW5nbGVzXG4gICAgaWYgKHAxeCA+IHAyeClcbiAgICB7XG4gICAgICBpZiAocDF5ID4gcDJ5KVxuICAgICAge1xuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVBLCBzbG9wZVByaW1lLCA0KTtcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25CID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKHNsb3BlQiwgc2xvcGVQcmltZSwgMik7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQSA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbigtc2xvcGVBLCBzbG9wZVByaW1lLCAzKTtcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25CID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUIsIHNsb3BlUHJpbWUsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgaWYgKHAxeSA+IHAyeSlcbiAgICAgIHtcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25BID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUEsIHNsb3BlUHJpbWUsIDEpO1xuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkIgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLXNsb3BlQiwgc2xvcGVQcmltZSwgMyk7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQSA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbihzbG9wZUEsIHNsb3BlUHJpbWUsIDIpO1xuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkIgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVCLCBzbG9wZVByaW1lLCA0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy9jYWxjdWxhdGUgY2xpcHBpbmcgUG9pbnQgaWYgaXQgaXMgbm90IGZvdW5kIGJlZm9yZVxuICAgIGlmICghY2xpcFBvaW50QUZvdW5kKVxuICAgIHtcbiAgICAgIHN3aXRjaCAoY2FyZGluYWxEaXJlY3Rpb25BKVxuICAgICAge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdGVtcFBvaW50QXkgPSB0b3BMZWZ0QXk7XG4gICAgICAgICAgdGVtcFBvaW50QXggPSBwMXggKyAoLWhhbGZIZWlnaHRBKSAvIHNsb3BlUHJpbWU7XG4gICAgICAgICAgcmVzdWx0WzBdID0gdGVtcFBvaW50QXg7XG4gICAgICAgICAgcmVzdWx0WzFdID0gdGVtcFBvaW50QXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0ZW1wUG9pbnRBeCA9IGJvdHRvbVJpZ2h0QXg7XG4gICAgICAgICAgdGVtcFBvaW50QXkgPSBwMXkgKyBoYWxmV2lkdGhBICogc2xvcGVQcmltZTtcbiAgICAgICAgICByZXN1bHRbMF0gPSB0ZW1wUG9pbnRBeDtcbiAgICAgICAgICByZXN1bHRbMV0gPSB0ZW1wUG9pbnRBeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRlbXBQb2ludEF5ID0gYm90dG9tTGVmdEF5O1xuICAgICAgICAgIHRlbXBQb2ludEF4ID0gcDF4ICsgaGFsZkhlaWdodEEgLyBzbG9wZVByaW1lO1xuICAgICAgICAgIHJlc3VsdFswXSA9IHRlbXBQb2ludEF4O1xuICAgICAgICAgIHJlc3VsdFsxXSA9IHRlbXBQb2ludEF5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdGVtcFBvaW50QXggPSBib3R0b21MZWZ0QXg7XG4gICAgICAgICAgdGVtcFBvaW50QXkgPSBwMXkgKyAoLWhhbGZXaWR0aEEpICogc2xvcGVQcmltZTtcbiAgICAgICAgICByZXN1bHRbMF0gPSB0ZW1wUG9pbnRBeDtcbiAgICAgICAgICByZXN1bHRbMV0gPSB0ZW1wUG9pbnRBeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFjbGlwUG9pbnRCRm91bmQpXG4gICAge1xuICAgICAgc3dpdGNoIChjYXJkaW5hbERpcmVjdGlvbkIpXG4gICAgICB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0ZW1wUG9pbnRCeSA9IHRvcExlZnRCeTtcbiAgICAgICAgICB0ZW1wUG9pbnRCeCA9IHAyeCArICgtaGFsZkhlaWdodEIpIC8gc2xvcGVQcmltZTtcbiAgICAgICAgICByZXN1bHRbMl0gPSB0ZW1wUG9pbnRCeDtcbiAgICAgICAgICByZXN1bHRbM10gPSB0ZW1wUG9pbnRCeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRlbXBQb2ludEJ4ID0gYm90dG9tUmlnaHRCeDtcbiAgICAgICAgICB0ZW1wUG9pbnRCeSA9IHAyeSArIGhhbGZXaWR0aEIgKiBzbG9wZVByaW1lO1xuICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xuICAgICAgICAgIHJlc3VsdFszXSA9IHRlbXBQb2ludEJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdGVtcFBvaW50QnkgPSBib3R0b21MZWZ0Qnk7XG4gICAgICAgICAgdGVtcFBvaW50QnggPSBwMnggKyBoYWxmSGVpZ2h0QiAvIHNsb3BlUHJpbWU7XG4gICAgICAgICAgcmVzdWx0WzJdID0gdGVtcFBvaW50Qng7XG4gICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB0ZW1wUG9pbnRCeCA9IGJvdHRvbUxlZnRCeDtcbiAgICAgICAgICB0ZW1wUG9pbnRCeSA9IHAyeSArICgtaGFsZldpZHRoQikgKiBzbG9wZVByaW1lO1xuICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xuICAgICAgICAgIHJlc3VsdFszXSA9IHRlbXBQb2ludEJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbklHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbiA9IGZ1bmN0aW9uIChzbG9wZSwgc2xvcGVQcmltZSwgbGluZSlcbntcbiAgaWYgKHNsb3BlID4gc2xvcGVQcmltZSlcbiAge1xuICAgIHJldHVybiBsaW5lO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIHJldHVybiAxICsgbGluZSAlIDQ7XG4gIH1cbn1cblxuSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbiA9IGZ1bmN0aW9uIChzMSwgczIsIGYxLCBmMilcbntcbiAgaWYgKGYyID09IG51bGwpIHtcbiAgICByZXR1cm4gSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbjIoczEsIHMyLCBmMSk7XG4gIH1cbiAgdmFyIHgxID0gczEueDtcbiAgdmFyIHkxID0gczEueTtcbiAgdmFyIHgyID0gczIueDtcbiAgdmFyIHkyID0gczIueTtcbiAgdmFyIHgzID0gZjEueDtcbiAgdmFyIHkzID0gZjEueTtcbiAgdmFyIHg0ID0gZjIueDtcbiAgdmFyIHk0ID0gZjIueTtcbiAgdmFyIHgsIHk7IC8vIGludGVyc2VjdGlvbiBwb2ludFxuICB2YXIgYTEsIGEyLCBiMSwgYjIsIGMxLCBjMjsgLy8gY29lZmZpY2llbnRzIG9mIGxpbmUgZXFucy5cbiAgdmFyIGRlbm9tO1xuXG4gIGExID0geTIgLSB5MTtcbiAgYjEgPSB4MSAtIHgyO1xuICBjMSA9IHgyICogeTEgLSB4MSAqIHkyOyAgLy8geyBhMSp4ICsgYjEqeSArIGMxID0gMCBpcyBsaW5lIDEgfVxuXG4gIGEyID0geTQgLSB5MztcbiAgYjIgPSB4MyAtIHg0O1xuICBjMiA9IHg0ICogeTMgLSB4MyAqIHk0OyAgLy8geyBhMip4ICsgYjIqeSArIGMyID0gMCBpcyBsaW5lIDIgfVxuXG4gIGRlbm9tID0gYTEgKiBiMiAtIGEyICogYjE7XG5cbiAgaWYgKGRlbm9tID09IDApXG4gIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHggPSAoYjEgKiBjMiAtIGIyICogYzEpIC8gZGVub207XG4gIHkgPSAoYTIgKiBjMSAtIGExICogYzIpIC8gZGVub207XG5cbiAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IENsYXNzIENvbnN0YW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qKlxuICogU29tZSB1c2VmdWwgcHJlLWNhbGN1bGF0ZWQgY29uc3RhbnRzXG4gKi9cbklHZW9tZXRyeS5IQUxGX1BJID0gMC41ICogTWF0aC5QSTtcbklHZW9tZXRyeS5PTkVfQU5EX0hBTEZfUEkgPSAxLjUgKiBNYXRoLlBJO1xuSUdlb21ldHJ5LlRXT19QSSA9IDIuMCAqIE1hdGguUEk7XG5JR2VvbWV0cnkuVEhSRUVfUEkgPSAzLjAgKiBNYXRoLlBJO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElHZW9tZXRyeTtcbiIsImZ1bmN0aW9uIElNYXRoKCkge1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIHNpZ24gb2YgdGhlIGlucHV0IHZhbHVlLlxuICovXG5JTWF0aC5zaWduID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA+IDApXG4gIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBlbHNlIGlmICh2YWx1ZSA8IDApXG4gIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cblxuSU1hdGguZmxvb3IgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIDwgMCA/IE1hdGguY2VpbCh2YWx1ZSkgOiBNYXRoLmZsb29yKHZhbHVlKTtcbn1cblxuSU1hdGguY2VpbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPCAwID8gTWF0aC5mbG9vcih2YWx1ZSkgOiBNYXRoLmNlaWwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElNYXRoO1xuIiwiZnVuY3Rpb24gSW50ZWdlcigpIHtcbn1cblxuSW50ZWdlci5NQVhfVkFMVUUgPSAyMTQ3NDgzNjQ3O1xuSW50ZWdlci5NSU5fVkFMVUUgPSAtMjE0NzQ4MzY0ODtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlZ2VyO1xuIiwidmFyIExHcmFwaE9iamVjdCA9IHJlcXVpcmUoJy4vTEdyYXBoT2JqZWN0Jyk7XG52YXIgSUdlb21ldHJ5ID0gcmVxdWlyZSgnLi9JR2VvbWV0cnknKTtcbnZhciBJTWF0aCA9IHJlcXVpcmUoJy4vSU1hdGgnKTtcblxuZnVuY3Rpb24gTEVkZ2Uoc291cmNlLCB0YXJnZXQsIHZFZGdlKSB7XG4gIExHcmFwaE9iamVjdC5jYWxsKHRoaXMsIHZFZGdlKTtcblxuICB0aGlzLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCA9IGZhbHNlO1xuICB0aGlzLnZHcmFwaE9iamVjdCA9IHZFZGdlO1xuICB0aGlzLmJlbmRwb2ludHMgPSBbXTtcbiAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xufVxuXG5MRWRnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaE9iamVjdC5wcm90b3R5cGUpO1xuXG5mb3IgKHZhciBwcm9wIGluIExHcmFwaE9iamVjdCkge1xuICBMRWRnZVtwcm9wXSA9IExHcmFwaE9iamVjdFtwcm9wXTtcbn1cblxuTEVkZ2UucHJvdG90eXBlLmdldFNvdXJjZSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnNvdXJjZTtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRUYXJnZXQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy50YXJnZXQ7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuaXNJbnRlckdyYXBoID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuaXNJbnRlckdyYXBoO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldExlbmd0aCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmxlbmd0aDtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQ7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0QmVuZHBvaW50cyA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmJlbmRwb2ludHM7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0TGNhID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubGNhO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldFNvdXJjZUluTGNhID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuc291cmNlSW5MY2E7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0VGFyZ2V0SW5MY2EgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy50YXJnZXRJbkxjYTtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRPdGhlckVuZCA9IGZ1bmN0aW9uIChub2RlKVxue1xuICBpZiAodGhpcy5zb3VyY2UgPT09IG5vZGUpXG4gIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXQ7XG4gIH1cbiAgZWxzZSBpZiAodGhpcy50YXJnZXQgPT09IG5vZGUpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2U7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgdGhyb3cgXCJOb2RlIGlzIG5vdCBpbmNpZGVudCB3aXRoIHRoaXMgZWRnZVwiO1xuICB9XG59XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRPdGhlckVuZEluR3JhcGggPSBmdW5jdGlvbiAobm9kZSwgZ3JhcGgpXG57XG4gIHZhciBvdGhlckVuZCA9IHRoaXMuZ2V0T3RoZXJFbmQobm9kZSk7XG4gIHZhciByb290ID0gZ3JhcGguZ2V0R3JhcGhNYW5hZ2VyKCkuZ2V0Um9vdCgpO1xuXG4gIHdoaWxlICh0cnVlKVxuICB7XG4gICAgaWYgKG90aGVyRW5kLmdldE93bmVyKCkgPT0gZ3JhcGgpXG4gICAge1xuICAgICAgcmV0dXJuIG90aGVyRW5kO1xuICAgIH1cblxuICAgIGlmIChvdGhlckVuZC5nZXRPd25lcigpID09IHJvb3QpXG4gICAge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgb3RoZXJFbmQgPSBvdGhlckVuZC5nZXRPd25lcigpLmdldFBhcmVudCgpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUudXBkYXRlTGVuZ3RoID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIGNsaXBQb2ludENvb3JkaW5hdGVzID0gbmV3IEFycmF5KDQpO1xuXG4gIHRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0ID1cbiAgICAgICAgICBJR2VvbWV0cnkuZ2V0SW50ZXJzZWN0aW9uKHRoaXMudGFyZ2V0LmdldFJlY3QoKSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuc291cmNlLmdldFJlY3QoKSxcbiAgICAgICAgICAgICAgICAgIGNsaXBQb2ludENvb3JkaW5hdGVzKTtcblxuICBpZiAoIXRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0KVxuICB7XG4gICAgdGhpcy5sZW5ndGhYID0gY2xpcFBvaW50Q29vcmRpbmF0ZXNbMF0gLSBjbGlwUG9pbnRDb29yZGluYXRlc1syXTtcbiAgICB0aGlzLmxlbmd0aFkgPSBjbGlwUG9pbnRDb29yZGluYXRlc1sxXSAtIGNsaXBQb2ludENvb3JkaW5hdGVzWzNdO1xuXG4gICAgaWYgKE1hdGguYWJzKHRoaXMubGVuZ3RoWCkgPCAxLjApXG4gICAge1xuICAgICAgdGhpcy5sZW5ndGhYID0gSU1hdGguc2lnbih0aGlzLmxlbmd0aFgpO1xuICAgIH1cblxuICAgIGlmIChNYXRoLmFicyh0aGlzLmxlbmd0aFkpIDwgMS4wKVxuICAgIHtcbiAgICAgIHRoaXMubGVuZ3RoWSA9IElNYXRoLnNpZ24odGhpcy5sZW5ndGhZKTtcbiAgICB9XG5cbiAgICB0aGlzLmxlbmd0aCA9IE1hdGguc3FydChcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoWCAqIHRoaXMubGVuZ3RoWCArIHRoaXMubGVuZ3RoWSAqIHRoaXMubGVuZ3RoWSk7XG4gIH1cbn07XG5cbkxFZGdlLnByb3RvdHlwZS51cGRhdGVMZW5ndGhTaW1wbGUgPSBmdW5jdGlvbiAoKVxue1xuICB0aGlzLmxlbmd0aFggPSB0aGlzLnRhcmdldC5nZXRDZW50ZXJYKCkgLSB0aGlzLnNvdXJjZS5nZXRDZW50ZXJYKCk7XG4gIHRoaXMubGVuZ3RoWSA9IHRoaXMudGFyZ2V0LmdldENlbnRlclkoKSAtIHRoaXMuc291cmNlLmdldENlbnRlclkoKTtcblxuICBpZiAoTWF0aC5hYnModGhpcy5sZW5ndGhYKSA8IDEuMClcbiAge1xuICAgIHRoaXMubGVuZ3RoWCA9IElNYXRoLnNpZ24odGhpcy5sZW5ndGhYKTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyh0aGlzLmxlbmd0aFkpIDwgMS4wKVxuICB7XG4gICAgdGhpcy5sZW5ndGhZID0gSU1hdGguc2lnbih0aGlzLmxlbmd0aFkpO1xuICB9XG5cbiAgdGhpcy5sZW5ndGggPSBNYXRoLnNxcnQoXG4gICAgICAgICAgdGhpcy5sZW5ndGhYICogdGhpcy5sZW5ndGhYICsgdGhpcy5sZW5ndGhZICogdGhpcy5sZW5ndGhZKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMRWRnZTtcbiIsInZhciBMR3JhcGhPYmplY3QgPSByZXF1aXJlKCcuL0xHcmFwaE9iamVjdCcpO1xudmFyIEludGVnZXIgPSByZXF1aXJlKCcuL0ludGVnZXInKTtcbnZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0xheW91dENvbnN0YW50cycpO1xudmFyIExHcmFwaE1hbmFnZXIgPSByZXF1aXJlKCcuL0xHcmFwaE1hbmFnZXInKTtcbnZhciBMTm9kZSA9IHJlcXVpcmUoJy4vTE5vZGUnKTtcbnZhciBMRWRnZSA9IHJlcXVpcmUoJy4vTEVkZ2UnKTtcbnZhciBIYXNoU2V0ID0gcmVxdWlyZSgnLi9IYXNoU2V0Jyk7XG52YXIgUmVjdGFuZ2xlRCA9IHJlcXVpcmUoJy4vUmVjdGFuZ2xlRCcpO1xudmFyIFBvaW50ID0gcmVxdWlyZSgnLi9Qb2ludCcpO1xudmFyIExpbmtlZExpc3QgPSByZXF1aXJlKCcuL0xpbmtlZExpc3QnKTtcblxuZnVuY3Rpb24gTEdyYXBoKHBhcmVudCwgb2JqMiwgdkdyYXBoKSB7XG4gIExHcmFwaE9iamVjdC5jYWxsKHRoaXMsIHZHcmFwaCk7XG4gIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IEludGVnZXIuTUlOX1ZBTFVFO1xuICB0aGlzLm1hcmdpbiA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVBIX01BUkdJTjtcbiAgdGhpcy5lZGdlcyA9IFtdO1xuICB0aGlzLm5vZGVzID0gW107XG4gIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgaWYgKG9iajIgIT0gbnVsbCAmJiBvYmoyIGluc3RhbmNlb2YgTEdyYXBoTWFuYWdlcikge1xuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyID0gb2JqMjtcbiAgfVxuICBlbHNlIGlmIChvYmoyICE9IG51bGwgJiYgb2JqMiBpbnN0YW5jZW9mIExheW91dCkge1xuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyID0gb2JqMi5ncmFwaE1hbmFnZXI7XG4gIH1cbn1cblxuTEdyYXBoLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEdyYXBoT2JqZWN0LnByb3RvdHlwZSk7XG5mb3IgKHZhciBwcm9wIGluIExHcmFwaE9iamVjdCkge1xuICBMR3JhcGhbcHJvcF0gPSBMR3JhcGhPYmplY3RbcHJvcF07XG59XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0Tm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLm5vZGVzO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRFZGdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZWRnZXM7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldEdyYXBoTWFuYWdlciA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlcjtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0UGFyZW50ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucGFyZW50O1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRMZWZ0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubGVmdDtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0UmlnaHQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yaWdodDtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0VG9wID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMudG9wO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRCb3R0b20gPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5ib3R0b207XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmlzQ29ubmVjdGVkID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuaXNDb25uZWN0ZWQ7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChvYmoxLCBzb3VyY2VOb2RlLCB0YXJnZXROb2RlKSB7XG4gIGlmIChzb3VyY2VOb2RlID09IG51bGwgJiYgdGFyZ2V0Tm9kZSA9PSBudWxsKSB7XG4gICAgdmFyIG5ld05vZGUgPSBvYmoxO1xuICAgIGlmICh0aGlzLmdyYXBoTWFuYWdlciA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIkdyYXBoIGhhcyBubyBncmFwaCBtZ3IhXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmdldE5vZGVzKCkuaW5kZXhPZihuZXdOb2RlKSA+IC0xKSB7XG4gICAgICB0aHJvdyBcIk5vZGUgYWxyZWFkeSBpbiBncmFwaCFcIjtcbiAgICB9XG4gICAgbmV3Tm9kZS5vd25lciA9IHRoaXM7XG4gICAgdGhpcy5nZXROb2RlcygpLnB1c2gobmV3Tm9kZSk7XG5cbiAgICByZXR1cm4gbmV3Tm9kZTtcbiAgfVxuICBlbHNlIHtcbiAgICB2YXIgbmV3RWRnZSA9IG9iajE7XG4gICAgaWYgKCEodGhpcy5nZXROb2RlcygpLmluZGV4T2Yoc291cmNlTm9kZSkgPiAtMSAmJiAodGhpcy5nZXROb2RlcygpLmluZGV4T2YodGFyZ2V0Tm9kZSkpID4gLTEpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBvciB0YXJnZXQgbm90IGluIGdyYXBoIVwiO1xuICAgIH1cblxuICAgIGlmICghKHNvdXJjZU5vZGUub3duZXIgPT0gdGFyZ2V0Tm9kZS5vd25lciAmJiBzb3VyY2VOb2RlLm93bmVyID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIkJvdGggb3duZXJzIG11c3QgYmUgdGhpcyBncmFwaCFcIjtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlTm9kZS5vd25lciAhPSB0YXJnZXROb2RlLm93bmVyKVxuICAgIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIHNldCBzb3VyY2UgYW5kIHRhcmdldFxuICAgIG5ld0VkZ2Uuc291cmNlID0gc291cmNlTm9kZTtcbiAgICBuZXdFZGdlLnRhcmdldCA9IHRhcmdldE5vZGU7XG5cbiAgICAvLyBzZXQgYXMgaW50cmEtZ3JhcGggZWRnZVxuICAgIG5ld0VkZ2UuaXNJbnRlckdyYXBoID0gZmFsc2U7XG5cbiAgICAvLyBhZGQgdG8gZ3JhcGggZWRnZSBsaXN0XG4gICAgdGhpcy5nZXRFZGdlcygpLnB1c2gobmV3RWRnZSk7XG5cbiAgICAvLyBhZGQgdG8gaW5jaWRlbmN5IGxpc3RzXG4gICAgc291cmNlTm9kZS5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xuXG4gICAgaWYgKHRhcmdldE5vZGUgIT0gc291cmNlTm9kZSlcbiAgICB7XG4gICAgICB0YXJnZXROb2RlLmVkZ2VzLnB1c2gobmV3RWRnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0VkZ2U7XG4gIH1cbn07XG5cbkxHcmFwaC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG9iaikge1xuICB2YXIgbm9kZSA9IG9iajtcbiAgaWYgKG9iaiBpbnN0YW5jZW9mIExOb2RlKSB7XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJOb2RlIGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmICghKG5vZGUub3duZXIgIT0gbnVsbCAmJiBub2RlLm93bmVyID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIk93bmVyIGdyYXBoIGlzIGludmFsaWQhXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmdyYXBoTWFuYWdlciA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIk93bmVyIGdyYXBoIG1hbmFnZXIgaXMgaW52YWxpZCFcIjtcbiAgICB9XG4gICAgLy8gcmVtb3ZlIGluY2lkZW50IGVkZ2VzIGZpcnN0IChtYWtlIGEgY29weSB0byBkbyBpdCBzYWZlbHkpXG4gICAgdmFyIGVkZ2VzVG9CZVJlbW92ZWQgPSBub2RlLmVkZ2VzLnNsaWNlKCk7XG4gICAgdmFyIGVkZ2U7XG4gICAgdmFyIHMgPSBlZGdlc1RvQmVSZW1vdmVkLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAgICB7XG4gICAgICBlZGdlID0gZWRnZXNUb0JlUmVtb3ZlZFtpXTtcblxuICAgICAgaWYgKGVkZ2UuaXNJbnRlckdyYXBoKVxuICAgICAge1xuICAgICAgICB0aGlzLmdyYXBoTWFuYWdlci5yZW1vdmUoZWRnZSk7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIGVkZ2Uuc291cmNlLm93bmVyLnJlbW92ZShlZGdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBub3cgdGhlIG5vZGUgaXRzZWxmXG4gICAgdmFyIGluZGV4ID0gdGhpcy5ub2Rlcy5pbmRleE9mKG5vZGUpO1xuICAgIGlmIChpbmRleCA9PSAtMSkge1xuICAgICAgdGhyb3cgXCJOb2RlIG5vdCBpbiBvd25lciBub2RlIGxpc3QhXCI7XG4gICAgfVxuXG4gICAgdGhpcy5ub2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIExFZGdlKSB7XG4gICAgdmFyIGVkZ2UgPSBvYmo7XG4gICAgaWYgKGVkZ2UgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJFZGdlIGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmICghKGVkZ2Uuc291cmNlICE9IG51bGwgJiYgZWRnZS50YXJnZXQgIT0gbnVsbCkpIHtcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgaXMgbnVsbCFcIjtcbiAgICB9XG4gICAgaWYgKCEoZWRnZS5zb3VyY2Uub3duZXIgIT0gbnVsbCAmJiBlZGdlLnRhcmdldC5vd25lciAhPSBudWxsICYmXG4gICAgICAgICAgICBlZGdlLnNvdXJjZS5vd25lciA9PSB0aGlzICYmIGVkZ2UudGFyZ2V0Lm93bmVyID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IG93bmVyIGlzIGludmFsaWQhXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZGV4ID0gZWRnZS5zb3VyY2UuZWRnZXMuaW5kZXhPZihlZGdlKTtcbiAgICB2YXIgdGFyZ2V0SW5kZXggPSBlZGdlLnRhcmdldC5lZGdlcy5pbmRleE9mKGVkZ2UpO1xuICAgIGlmICghKHNvdXJjZUluZGV4ID4gLTEgJiYgdGFyZ2V0SW5kZXggPiAtMSkpIHtcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgZG9lc24ndCBrbm93IHRoaXMgZWRnZSFcIjtcbiAgICB9XG5cbiAgICBlZGdlLnNvdXJjZS5lZGdlcy5zcGxpY2Uoc291cmNlSW5kZXgsIDEpO1xuXG4gICAgaWYgKGVkZ2UudGFyZ2V0ICE9IGVkZ2Uuc291cmNlKVxuICAgIHtcbiAgICAgIGVkZ2UudGFyZ2V0LmVkZ2VzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gZWRnZS5zb3VyY2Uub3duZXIuZ2V0RWRnZXMoKS5pbmRleE9mKGVkZ2UpO1xuICAgIGlmIChpbmRleCA9PSAtMSkge1xuICAgICAgdGhyb3cgXCJOb3QgaW4gb3duZXIncyBlZGdlIGxpc3QhXCI7XG4gICAgfVxuXG4gICAgZWRnZS5zb3VyY2Uub3duZXIuZ2V0RWRnZXMoKS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLnVwZGF0ZUxlZnRUb3AgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgdG9wID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBsZWZ0ID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBub2RlVG9wO1xuICB2YXIgbm9kZUxlZnQ7XG4gIHZhciBtYXJnaW47XG5cbiAgdmFyIG5vZGVzID0gdGhpcy5nZXROb2RlcygpO1xuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAge1xuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xuICAgIG5vZGVUb3AgPSBsTm9kZS5nZXRUb3AoKTtcbiAgICBub2RlTGVmdCA9IGxOb2RlLmdldExlZnQoKTtcblxuICAgIGlmICh0b3AgPiBub2RlVG9wKVxuICAgIHtcbiAgICAgIHRvcCA9IG5vZGVUb3A7XG4gICAgfVxuXG4gICAgaWYgKGxlZnQgPiBub2RlTGVmdClcbiAgICB7XG4gICAgICBsZWZ0ID0gbm9kZUxlZnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gRG8gd2UgaGF2ZSBhbnkgbm9kZXMgaW4gdGhpcyBncmFwaD9cbiAgaWYgKHRvcCA9PSBJbnRlZ2VyLk1BWF9WQUxVRSlcbiAge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYobm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQgIT0gdW5kZWZpbmVkKXtcbiAgICBtYXJnaW4gPSBub2Rlc1swXS5nZXRQYXJlbnQoKS5wYWRkaW5nTGVmdDtcbiAgfVxuICBlbHNle1xuICAgIG1hcmdpbiA9IHRoaXMubWFyZ2luO1xuICB9XG5cbiAgdGhpcy5sZWZ0ID0gbGVmdCAtIG1hcmdpbjtcbiAgdGhpcy50b3AgPSB0b3AgLSBtYXJnaW47XG5cbiAgLy8gQXBwbHkgdGhlIG1hcmdpbnMgYW5kIHJldHVybiB0aGUgcmVzdWx0XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLnRvcCk7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLnVwZGF0ZUJvdW5kcyA9IGZ1bmN0aW9uIChyZWN1cnNpdmUpXG57XG4gIC8vIGNhbGN1bGF0ZSBib3VuZHNcbiAgdmFyIGxlZnQgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIHJpZ2h0ID0gLUludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgdG9wID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBib3R0b20gPSAtSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBub2RlTGVmdDtcbiAgdmFyIG5vZGVSaWdodDtcbiAgdmFyIG5vZGVUb3A7XG4gIHZhciBub2RlQm90dG9tO1xuICB2YXIgbWFyZ2luO1xuXG4gIHZhciBub2RlcyA9IHRoaXMubm9kZXM7XG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAge1xuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xuXG4gICAgaWYgKHJlY3Vyc2l2ZSAmJiBsTm9kZS5jaGlsZCAhPSBudWxsKVxuICAgIHtcbiAgICAgIGxOb2RlLnVwZGF0ZUJvdW5kcygpO1xuICAgIH1cbiAgICBub2RlTGVmdCA9IGxOb2RlLmdldExlZnQoKTtcbiAgICBub2RlUmlnaHQgPSBsTm9kZS5nZXRSaWdodCgpO1xuICAgIG5vZGVUb3AgPSBsTm9kZS5nZXRUb3AoKTtcbiAgICBub2RlQm90dG9tID0gbE5vZGUuZ2V0Qm90dG9tKCk7XG5cbiAgICBpZiAobGVmdCA+IG5vZGVMZWZ0KVxuICAgIHtcbiAgICAgIGxlZnQgPSBub2RlTGVmdDtcbiAgICB9XG5cbiAgICBpZiAocmlnaHQgPCBub2RlUmlnaHQpXG4gICAge1xuICAgICAgcmlnaHQgPSBub2RlUmlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKHRvcCA+IG5vZGVUb3ApXG4gICAge1xuICAgICAgdG9wID0gbm9kZVRvcDtcbiAgICB9XG5cbiAgICBpZiAoYm90dG9tIDwgbm9kZUJvdHRvbSlcbiAgICB7XG4gICAgICBib3R0b20gPSBub2RlQm90dG9tO1xuICAgIH1cbiAgfVxuXG4gIHZhciBib3VuZGluZ1JlY3QgPSBuZXcgUmVjdGFuZ2xlRChsZWZ0LCB0b3AsIHJpZ2h0IC0gbGVmdCwgYm90dG9tIC0gdG9wKTtcbiAgaWYgKGxlZnQgPT0gSW50ZWdlci5NQVhfVkFMVUUpXG4gIHtcbiAgICB0aGlzLmxlZnQgPSB0aGlzLnBhcmVudC5nZXRMZWZ0KCk7XG4gICAgdGhpcy5yaWdodCA9IHRoaXMucGFyZW50LmdldFJpZ2h0KCk7XG4gICAgdGhpcy50b3AgPSB0aGlzLnBhcmVudC5nZXRUb3AoKTtcbiAgICB0aGlzLmJvdHRvbSA9IHRoaXMucGFyZW50LmdldEJvdHRvbSgpO1xuICB9XG5cbiAgaWYobm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQgIT0gdW5kZWZpbmVkKXtcbiAgICBtYXJnaW4gPSBub2Rlc1swXS5nZXRQYXJlbnQoKS5wYWRkaW5nTGVmdDtcbiAgfVxuICBlbHNle1xuICAgIG1hcmdpbiA9IHRoaXMubWFyZ2luO1xuICB9XG5cbiAgdGhpcy5sZWZ0ID0gYm91bmRpbmdSZWN0LnggLSBtYXJnaW47XG4gIHRoaXMucmlnaHQgPSBib3VuZGluZ1JlY3QueCArIGJvdW5kaW5nUmVjdC53aWR0aCArIG1hcmdpbjtcbiAgdGhpcy50b3AgPSBib3VuZGluZ1JlY3QueSAtIG1hcmdpbjtcbiAgdGhpcy5ib3R0b20gPSBib3VuZGluZ1JlY3QueSArIGJvdW5kaW5nUmVjdC5oZWlnaHQgKyBtYXJnaW47XG59O1xuXG5MR3JhcGguY2FsY3VsYXRlQm91bmRzID0gZnVuY3Rpb24gKG5vZGVzKVxue1xuICB2YXIgbGVmdCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgcmlnaHQgPSAtSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciB0b3AgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIGJvdHRvbSA9IC1JbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIG5vZGVMZWZ0O1xuICB2YXIgbm9kZVJpZ2h0O1xuICB2YXIgbm9kZVRvcDtcbiAgdmFyIG5vZGVCb3R0b207XG5cbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gIHtcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcbiAgICBub2RlTGVmdCA9IGxOb2RlLmdldExlZnQoKTtcbiAgICBub2RlUmlnaHQgPSBsTm9kZS5nZXRSaWdodCgpO1xuICAgIG5vZGVUb3AgPSBsTm9kZS5nZXRUb3AoKTtcbiAgICBub2RlQm90dG9tID0gbE5vZGUuZ2V0Qm90dG9tKCk7XG5cbiAgICBpZiAobGVmdCA+IG5vZGVMZWZ0KVxuICAgIHtcbiAgICAgIGxlZnQgPSBub2RlTGVmdDtcbiAgICB9XG5cbiAgICBpZiAocmlnaHQgPCBub2RlUmlnaHQpXG4gICAge1xuICAgICAgcmlnaHQgPSBub2RlUmlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKHRvcCA+IG5vZGVUb3ApXG4gICAge1xuICAgICAgdG9wID0gbm9kZVRvcDtcbiAgICB9XG5cbiAgICBpZiAoYm90dG9tIDwgbm9kZUJvdHRvbSlcbiAgICB7XG4gICAgICBib3R0b20gPSBub2RlQm90dG9tO1xuICAgIH1cbiAgfVxuXG4gIHZhciBib3VuZGluZ1JlY3QgPSBuZXcgUmVjdGFuZ2xlRChsZWZ0LCB0b3AsIHJpZ2h0IC0gbGVmdCwgYm90dG9tIC0gdG9wKTtcblxuICByZXR1cm4gYm91bmRpbmdSZWN0O1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRJbmNsdXNpb25UcmVlRGVwdGggPSBmdW5jdGlvbiAoKVxue1xuICBpZiAodGhpcyA9PSB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkpXG4gIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0SW5jbHVzaW9uVHJlZURlcHRoKCk7XG4gIH1cbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0RXN0aW1hdGVkU2l6ZSA9IGZ1bmN0aW9uICgpXG57XG4gIGlmICh0aGlzLmVzdGltYXRlZFNpemUgPT0gSW50ZWdlci5NSU5fVkFMVUUpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5jYWxjRXN0aW1hdGVkU2l6ZSA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBzaXplID0gMDtcbiAgdmFyIG5vZGVzID0gdGhpcy5ub2RlcztcbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gIHtcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcbiAgICBzaXplICs9IGxOb2RlLmNhbGNFc3RpbWF0ZWRTaXplKCk7XG4gIH1cblxuICBpZiAoc2l6ZSA9PSAwKVxuICB7XG4gICAgdGhpcy5lc3RpbWF0ZWRTaXplID0gTGF5b3V0Q29uc3RhbnRzLkVNUFRZX0NPTVBPVU5EX05PREVfU0laRTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICB0aGlzLmVzdGltYXRlZFNpemUgPSBzaXplIC8gTWF0aC5zcXJ0KHRoaXMubm9kZXMubGVuZ3RoKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVzdGltYXRlZFNpemU7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLnVwZGF0ZUNvbm5lY3RlZCA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBzZWxmID0gdGhpcztcbiAgaWYgKHRoaXMubm9kZXMubGVuZ3RoID09IDApXG4gIHtcbiAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdG9CZVZpc2l0ZWQgPSBuZXcgTGlua2VkTGlzdCgpO1xuICB2YXIgdmlzaXRlZCA9IG5ldyBIYXNoU2V0KCk7XG4gIHZhciBjdXJyZW50Tm9kZSA9IHRoaXMubm9kZXNbMF07XG4gIHZhciBuZWlnaGJvckVkZ2VzO1xuICB2YXIgY3VycmVudE5laWdoYm9yO1xuICB2YXIgY2hpbGRyZW5PZk5vZGUgPSBjdXJyZW50Tm9kZS53aXRoQ2hpbGRyZW4oKTtcbiAgY2hpbGRyZW5PZk5vZGUuZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgdG9CZVZpc2l0ZWQucHVzaChub2RlKTtcbiAgfSk7XG5cbiAgd2hpbGUgKHRvQmVWaXNpdGVkLmxlbmd0aCAhPT0gMClcbiAge1xuICAgIGN1cnJlbnROb2RlID0gdG9CZVZpc2l0ZWQuc2hpZnQoKTtcbiAgICB2aXNpdGVkLmFkZChjdXJyZW50Tm9kZSk7XG5cbiAgICAvLyBUcmF2ZXJzZSBhbGwgbmVpZ2hib3JzIG9mIHRoaXMgbm9kZVxuICAgIG5laWdoYm9yRWRnZXMgPSBjdXJyZW50Tm9kZS5nZXRFZGdlcygpO1xuICAgIHZhciBzID0gbmVpZ2hib3JFZGdlcy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gICAge1xuICAgICAgdmFyIG5laWdoYm9yRWRnZSA9IG5laWdoYm9yRWRnZXNbaV07XG4gICAgICBjdXJyZW50TmVpZ2hib3IgPVxuICAgICAgICAgICAgICBuZWlnaGJvckVkZ2UuZ2V0T3RoZXJFbmRJbkdyYXBoKGN1cnJlbnROb2RlLCB0aGlzKTtcblxuICAgICAgLy8gQWRkIHVudmlzaXRlZCBuZWlnaGJvcnMgdG8gdGhlIGxpc3QgdG8gdmlzaXRcbiAgICAgIGlmIChjdXJyZW50TmVpZ2hib3IgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAhdmlzaXRlZC5jb250YWlucyhjdXJyZW50TmVpZ2hib3IpKVxuICAgICAge1xuICAgICAgICB2YXIgY2hpbGRyZW5PZk5laWdoYm9yID0gY3VycmVudE5laWdoYm9yLndpdGhDaGlsZHJlbigpO1xuXG4gICAgICAgIGNoaWxkcmVuT2ZOZWlnaGJvci5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICB0b0JlVmlzaXRlZC5wdXNoKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG5cbiAgaWYgKHZpc2l0ZWQuc2l6ZSgpID49IHRoaXMubm9kZXMubGVuZ3RoKVxuICB7XG4gICAgdmFyIG5vT2ZWaXNpdGVkSW5UaGlzR3JhcGggPSAwO1xuXG4gICAgdmFyIHMgPSB2aXNpdGVkLnNpemUoKTtcbiAgICAgT2JqZWN0LmtleXModmlzaXRlZC5zZXQpLmZvckVhY2goZnVuY3Rpb24odmlzaXRlZElkKSB7XG4gICAgICB2YXIgdmlzaXRlZE5vZGUgPSB2aXNpdGVkLnNldFt2aXNpdGVkSWRdO1xuICAgICAgaWYgKHZpc2l0ZWROb2RlLm93bmVyID09IHNlbGYpXG4gICAgICB7XG4gICAgICAgIG5vT2ZWaXNpdGVkSW5UaGlzR3JhcGgrKztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChub09mVmlzaXRlZEluVGhpc0dyYXBoID09IHRoaXMubm9kZXMubGVuZ3RoKVxuICAgIHtcbiAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMR3JhcGg7XG4iLCJ2YXIgTEdyYXBoO1xudmFyIExFZGdlID0gcmVxdWlyZSgnLi9MRWRnZScpO1xuXG5mdW5jdGlvbiBMR3JhcGhNYW5hZ2VyKGxheW91dCkge1xuICBMR3JhcGggPSByZXF1aXJlKCcuL0xHcmFwaCcpOyAvLyBJdCBtYXkgYmUgYmV0dGVyIHRvIGluaXRpbGl6ZSB0aGlzIG91dCBvZiB0aGlzIGZ1bmN0aW9uIGJ1dCBpdCBnaXZlcyBhbiBlcnJvciAoUmlnaHQtaGFuZCBzaWRlIG9mICdpbnN0YW5jZW9mJyBpcyBub3QgY2FsbGFibGUpIG5vdy5cbiAgdGhpcy5sYXlvdXQgPSBsYXlvdXQ7XG5cbiAgdGhpcy5ncmFwaHMgPSBbXTtcbiAgdGhpcy5lZGdlcyA9IFtdO1xufVxuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5hZGRSb290ID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIG5ncmFwaCA9IHRoaXMubGF5b3V0Lm5ld0dyYXBoKCk7XG4gIHZhciBubm9kZSA9IHRoaXMubGF5b3V0Lm5ld05vZGUobnVsbCk7XG4gIHZhciByb290ID0gdGhpcy5hZGQobmdyYXBoLCBubm9kZSk7XG4gIHRoaXMuc2V0Um9vdEdyYXBoKHJvb3QpO1xuICByZXR1cm4gdGhpcy5yb290R3JhcGg7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAobmV3R3JhcGgsIHBhcmVudE5vZGUsIG5ld0VkZ2UsIHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpXG57XG4gIC8vdGhlcmUgYXJlIGp1c3QgMiBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQgdGhlbiBpdCBhZGRzIGFuIExHcmFwaCBlbHNlIGl0IGFkZHMgYW4gTEVkZ2VcbiAgaWYgKG5ld0VkZ2UgPT0gbnVsbCAmJiBzb3VyY2VOb2RlID09IG51bGwgJiYgdGFyZ2V0Tm9kZSA9PSBudWxsKSB7XG4gICAgaWYgKG5ld0dyYXBoID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiR3JhcGggaXMgbnVsbCFcIjtcbiAgICB9XG4gICAgaWYgKHBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJQYXJlbnQgbm9kZSBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5ncmFwaHMuaW5kZXhPZihuZXdHcmFwaCkgPiAtMSkge1xuICAgICAgdGhyb3cgXCJHcmFwaCBhbHJlYWR5IGluIHRoaXMgZ3JhcGggbWdyIVwiO1xuICAgIH1cblxuICAgIHRoaXMuZ3JhcGhzLnB1c2gobmV3R3JhcGgpO1xuXG4gICAgaWYgKG5ld0dyYXBoLnBhcmVudCAhPSBudWxsKSB7XG4gICAgICB0aHJvdyBcIkFscmVhZHkgaGFzIGEgcGFyZW50IVwiO1xuICAgIH1cbiAgICBpZiAocGFyZW50Tm9kZS5jaGlsZCAhPSBudWxsKSB7XG4gICAgICB0aHJvdyAgXCJBbHJlYWR5IGhhcyBhIGNoaWxkIVwiO1xuICAgIH1cblxuICAgIG5ld0dyYXBoLnBhcmVudCA9IHBhcmVudE5vZGU7XG4gICAgcGFyZW50Tm9kZS5jaGlsZCA9IG5ld0dyYXBoO1xuXG4gICAgcmV0dXJuIG5ld0dyYXBoO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vY2hhbmdlIHRoZSBvcmRlciBvZiB0aGUgcGFyYW1ldGVyc1xuICAgIHRhcmdldE5vZGUgPSBuZXdFZGdlO1xuICAgIHNvdXJjZU5vZGUgPSBwYXJlbnROb2RlO1xuICAgIG5ld0VkZ2UgPSBuZXdHcmFwaDtcbiAgICB2YXIgc291cmNlR3JhcGggPSBzb3VyY2VOb2RlLmdldE93bmVyKCk7XG4gICAgdmFyIHRhcmdldEdyYXBoID0gdGFyZ2V0Tm9kZS5nZXRPd25lcigpO1xuXG4gICAgaWYgKCEoc291cmNlR3JhcGggIT0gbnVsbCAmJiBzb3VyY2VHcmFwaC5nZXRHcmFwaE1hbmFnZXIoKSA9PSB0aGlzKSkge1xuICAgICAgdGhyb3cgXCJTb3VyY2Ugbm90IGluIHRoaXMgZ3JhcGggbWdyIVwiO1xuICAgIH1cbiAgICBpZiAoISh0YXJnZXRHcmFwaCAhPSBudWxsICYmIHRhcmdldEdyYXBoLmdldEdyYXBoTWFuYWdlcigpID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIlRhcmdldCBub3QgaW4gdGhpcyBncmFwaCBtZ3IhXCI7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZUdyYXBoID09IHRhcmdldEdyYXBoKVxuICAgIHtcbiAgICAgIG5ld0VkZ2UuaXNJbnRlckdyYXBoID0gZmFsc2U7XG4gICAgICByZXR1cm4gc291cmNlR3JhcGguYWRkKG5ld0VkZ2UsIHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgbmV3RWRnZS5pc0ludGVyR3JhcGggPSB0cnVlO1xuXG4gICAgICAvLyBzZXQgc291cmNlIGFuZCB0YXJnZXRcbiAgICAgIG5ld0VkZ2Uuc291cmNlID0gc291cmNlTm9kZTtcbiAgICAgIG5ld0VkZ2UudGFyZ2V0ID0gdGFyZ2V0Tm9kZTtcblxuICAgICAgLy8gYWRkIGVkZ2UgdG8gaW50ZXItZ3JhcGggZWRnZSBsaXN0XG4gICAgICBpZiAodGhpcy5lZGdlcy5pbmRleE9mKG5ld0VkZ2UpID4gLTEpIHtcbiAgICAgICAgdGhyb3cgXCJFZGdlIGFscmVhZHkgaW4gaW50ZXItZ3JhcGggZWRnZSBsaXN0IVwiO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVkZ2VzLnB1c2gobmV3RWRnZSk7XG5cbiAgICAgIC8vIGFkZCBlZGdlIHRvIHNvdXJjZSBhbmQgdGFyZ2V0IGluY2lkZW5jeSBsaXN0c1xuICAgICAgaWYgKCEobmV3RWRnZS5zb3VyY2UgIT0gbnVsbCAmJiBuZXdFZGdlLnRhcmdldCAhPSBudWxsKSkge1xuICAgICAgICB0aHJvdyBcIkVkZ2Ugc291cmNlIGFuZC9vciB0YXJnZXQgaXMgbnVsbCFcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKCEobmV3RWRnZS5zb3VyY2UuZWRnZXMuaW5kZXhPZihuZXdFZGdlKSA9PSAtMSAmJiBuZXdFZGdlLnRhcmdldC5lZGdlcy5pbmRleE9mKG5ld0VkZ2UpID09IC0xKSkge1xuICAgICAgICB0aHJvdyBcIkVkZ2UgYWxyZWFkeSBpbiBzb3VyY2UgYW5kL29yIHRhcmdldCBpbmNpZGVuY3kgbGlzdCFcIjtcbiAgICAgIH1cblxuICAgICAgbmV3RWRnZS5zb3VyY2UuZWRnZXMucHVzaChuZXdFZGdlKTtcbiAgICAgIG5ld0VkZ2UudGFyZ2V0LmVkZ2VzLnB1c2gobmV3RWRnZSk7XG5cbiAgICAgIHJldHVybiBuZXdFZGdlO1xuICAgIH1cbiAgfVxufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGxPYmopIHtcbiAgaWYgKGxPYmogaW5zdGFuY2VvZiBMR3JhcGgpIHtcbiAgICB2YXIgZ3JhcGggPSBsT2JqO1xuICAgIGlmIChncmFwaC5nZXRHcmFwaE1hbmFnZXIoKSAhPSB0aGlzKSB7XG4gICAgICB0aHJvdyBcIkdyYXBoIG5vdCBpbiB0aGlzIGdyYXBoIG1nclwiO1xuICAgIH1cbiAgICBpZiAoIShncmFwaCA9PSB0aGlzLnJvb3RHcmFwaCB8fCAoZ3JhcGgucGFyZW50ICE9IG51bGwgJiYgZ3JhcGgucGFyZW50LmdyYXBoTWFuYWdlciA9PSB0aGlzKSkpIHtcbiAgICAgIHRocm93IFwiSW52YWxpZCBwYXJlbnQgbm9kZSFcIjtcbiAgICB9XG5cbiAgICAvLyBmaXJzdCB0aGUgZWRnZXMgKG1ha2UgYSBjb3B5IHRvIGRvIGl0IHNhZmVseSlcbiAgICB2YXIgZWRnZXNUb0JlUmVtb3ZlZCA9IFtdO1xuXG4gICAgZWRnZXNUb0JlUmVtb3ZlZCA9IGVkZ2VzVG9CZVJlbW92ZWQuY29uY2F0KGdyYXBoLmdldEVkZ2VzKCkpO1xuXG4gICAgdmFyIGVkZ2U7XG4gICAgdmFyIHMgPSBlZGdlc1RvQmVSZW1vdmVkLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAgICB7XG4gICAgICBlZGdlID0gZWRnZXNUb0JlUmVtb3ZlZFtpXTtcbiAgICAgIGdyYXBoLnJlbW92ZShlZGdlKTtcbiAgICB9XG5cbiAgICAvLyB0aGVuIHRoZSBub2RlcyAobWFrZSBhIGNvcHkgdG8gZG8gaXQgc2FmZWx5KVxuICAgIHZhciBub2Rlc1RvQmVSZW1vdmVkID0gW107XG5cbiAgICBub2Rlc1RvQmVSZW1vdmVkID0gbm9kZXNUb0JlUmVtb3ZlZC5jb25jYXQoZ3JhcGguZ2V0Tm9kZXMoKSk7XG5cbiAgICB2YXIgbm9kZTtcbiAgICBzID0gbm9kZXNUb0JlUmVtb3ZlZC5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gICAge1xuICAgICAgbm9kZSA9IG5vZGVzVG9CZVJlbW92ZWRbaV07XG4gICAgICBncmFwaC5yZW1vdmUobm9kZSk7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgZ3JhcGggaXMgdGhlIHJvb3RcbiAgICBpZiAoZ3JhcGggPT0gdGhpcy5yb290R3JhcGgpXG4gICAge1xuICAgICAgdGhpcy5zZXRSb290R3JhcGgobnVsbCk7XG4gICAgfVxuXG4gICAgLy8gbm93IHJlbW92ZSB0aGUgZ3JhcGggaXRzZWxmXG4gICAgdmFyIGluZGV4ID0gdGhpcy5ncmFwaHMuaW5kZXhPZihncmFwaCk7XG4gICAgdGhpcy5ncmFwaHMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIC8vIGFsc28gcmVzZXQgdGhlIHBhcmVudCBvZiB0aGUgZ3JhcGhcbiAgICBncmFwaC5wYXJlbnQgPSBudWxsO1xuICB9XG4gIGVsc2UgaWYgKGxPYmogaW5zdGFuY2VvZiBMRWRnZSkge1xuICAgIGVkZ2UgPSBsT2JqO1xuICAgIGlmIChlZGdlID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiRWRnZSBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAoIWVkZ2UuaXNJbnRlckdyYXBoKSB7XG4gICAgICB0aHJvdyBcIk5vdCBhbiBpbnRlci1ncmFwaCBlZGdlIVwiO1xuICAgIH1cbiAgICBpZiAoIShlZGdlLnNvdXJjZSAhPSBudWxsICYmIGVkZ2UudGFyZ2V0ICE9IG51bGwpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGlzIG51bGwhXCI7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIGVkZ2UgZnJvbSBzb3VyY2UgYW5kIHRhcmdldCBub2RlcycgaW5jaWRlbmN5IGxpc3RzXG5cbiAgICBpZiAoIShlZGdlLnNvdXJjZS5lZGdlcy5pbmRleE9mKGVkZ2UpICE9IC0xICYmIGVkZ2UudGFyZ2V0LmVkZ2VzLmluZGV4T2YoZWRnZSkgIT0gLTEpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGRvZXNuJ3Qga25vdyB0aGlzIGVkZ2UhXCI7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gZWRnZS5zb3VyY2UuZWRnZXMuaW5kZXhPZihlZGdlKTtcbiAgICBlZGdlLnNvdXJjZS5lZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGluZGV4ID0gZWRnZS50YXJnZXQuZWRnZXMuaW5kZXhPZihlZGdlKTtcbiAgICBlZGdlLnRhcmdldC5lZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgLy8gcmVtb3ZlIGVkZ2UgZnJvbSBvd25lciBncmFwaCBtYW5hZ2VyJ3MgaW50ZXItZ3JhcGggZWRnZSBsaXN0XG5cbiAgICBpZiAoIShlZGdlLnNvdXJjZS5vd25lciAhPSBudWxsICYmIGVkZ2Uuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpICE9IG51bGwpKSB7XG4gICAgICB0aHJvdyBcIkVkZ2Ugb3duZXIgZ3JhcGggb3Igb3duZXIgZ3JhcGggbWFuYWdlciBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAoZWRnZS5zb3VyY2Uub3duZXIuZ2V0R3JhcGhNYW5hZ2VyKCkuZWRnZXMuaW5kZXhPZihlZGdlKSA9PSAtMSkge1xuICAgICAgdGhyb3cgXCJOb3QgaW4gb3duZXIgZ3JhcGggbWFuYWdlcidzIGVkZ2UgbGlzdCFcIjtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBlZGdlLnNvdXJjZS5vd25lci5nZXRHcmFwaE1hbmFnZXIoKS5lZGdlcy5pbmRleE9mKGVkZ2UpO1xuICAgIGVkZ2Uuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpLmVkZ2VzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZUJvdW5kcyA9IGZ1bmN0aW9uICgpXG57XG4gIHRoaXMucm9vdEdyYXBoLnVwZGF0ZUJvdW5kcyh0cnVlKTtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldEdyYXBocyA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmdyYXBocztcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldEFsbE5vZGVzID0gZnVuY3Rpb24gKClcbntcbiAgaWYgKHRoaXMuYWxsTm9kZXMgPT0gbnVsbClcbiAge1xuICAgIHZhciBub2RlTGlzdCA9IFtdO1xuICAgIHZhciBncmFwaHMgPSB0aGlzLmdldEdyYXBocygpO1xuICAgIHZhciBzID0gZ3JhcGhzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAgICB7XG4gICAgICBub2RlTGlzdCA9IG5vZGVMaXN0LmNvbmNhdChncmFwaHNbaV0uZ2V0Tm9kZXMoKSk7XG4gICAgfVxuICAgIHRoaXMuYWxsTm9kZXMgPSBub2RlTGlzdDtcbiAgfVxuICByZXR1cm4gdGhpcy5hbGxOb2Rlcztcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnJlc2V0QWxsTm9kZXMgPSBmdW5jdGlvbiAoKVxue1xuICB0aGlzLmFsbE5vZGVzID0gbnVsbDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnJlc2V0QWxsRWRnZXMgPSBmdW5jdGlvbiAoKVxue1xuICB0aGlzLmFsbEVkZ2VzID0gbnVsbDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnJlc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbiAoKVxue1xuICB0aGlzLmFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gbnVsbDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldEFsbEVkZ2VzID0gZnVuY3Rpb24gKClcbntcbiAgaWYgKHRoaXMuYWxsRWRnZXMgPT0gbnVsbClcbiAge1xuICAgIHZhciBlZGdlTGlzdCA9IFtdO1xuICAgIHZhciBncmFwaHMgPSB0aGlzLmdldEdyYXBocygpO1xuICAgIHZhciBzID0gZ3JhcGhzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyYXBocy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBlZGdlTGlzdCA9IGVkZ2VMaXN0LmNvbmNhdChncmFwaHNbaV0uZ2V0RWRnZXMoKSk7XG4gICAgfVxuXG4gICAgZWRnZUxpc3QgPSBlZGdlTGlzdC5jb25jYXQodGhpcy5lZGdlcyk7XG5cbiAgICB0aGlzLmFsbEVkZ2VzID0gZWRnZUxpc3Q7XG4gIH1cbiAgcmV0dXJuIHRoaXMuYWxsRWRnZXM7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbiAobm9kZUxpc3QpXG57XG4gIGlmICh0aGlzLmFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uICE9IG51bGwpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuXG4gIHRoaXMuYWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBub2RlTGlzdDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldFJvb3QgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yb290R3JhcGg7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5zZXRSb290R3JhcGggPSBmdW5jdGlvbiAoZ3JhcGgpXG57XG4gIGlmIChncmFwaC5nZXRHcmFwaE1hbmFnZXIoKSAhPSB0aGlzKSB7XG4gICAgdGhyb3cgXCJSb290IG5vdCBpbiB0aGlzIGdyYXBoIG1nciFcIjtcbiAgfVxuXG4gIHRoaXMucm9vdEdyYXBoID0gZ3JhcGg7XG4gIC8vIHJvb3QgZ3JhcGggbXVzdCBoYXZlIGEgcm9vdCBub2RlIGFzc29jaWF0ZWQgd2l0aCBpdCBmb3IgY29udmVuaWVuY2VcbiAgaWYgKGdyYXBoLnBhcmVudCA9PSBudWxsKVxuICB7XG4gICAgZ3JhcGgucGFyZW50ID0gdGhpcy5sYXlvdXQubmV3Tm9kZShcIlJvb3Qgbm9kZVwiKTtcbiAgfVxufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0TGF5b3V0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubGF5b3V0O1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuaXNPbmVBbmNlc3Rvck9mT3RoZXIgPSBmdW5jdGlvbiAoZmlyc3ROb2RlLCBzZWNvbmROb2RlKVxue1xuICBpZiAoIShmaXJzdE5vZGUgIT0gbnVsbCAmJiBzZWNvbmROb2RlICE9IG51bGwpKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cblxuICBpZiAoZmlyc3ROb2RlID09IHNlY29uZE5vZGUpXG4gIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvLyBJcyBzZWNvbmQgbm9kZSBhbiBhbmNlc3RvciBvZiB0aGUgZmlyc3Qgb25lP1xuICB2YXIgb3duZXJHcmFwaCA9IGZpcnN0Tm9kZS5nZXRPd25lcigpO1xuICB2YXIgcGFyZW50Tm9kZTtcblxuICBkb1xuICB7XG4gICAgcGFyZW50Tm9kZSA9IG93bmVyR3JhcGguZ2V0UGFyZW50KCk7XG5cbiAgICBpZiAocGFyZW50Tm9kZSA9PSBudWxsKVxuICAgIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChwYXJlbnROb2RlID09IHNlY29uZE5vZGUpXG4gICAge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgb3duZXJHcmFwaCA9IHBhcmVudE5vZGUuZ2V0T3duZXIoKTtcbiAgICBpZiAob3duZXJHcmFwaCA9PSBudWxsKVxuICAgIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSB3aGlsZSAodHJ1ZSk7XG4gIC8vIElzIGZpcnN0IG5vZGUgYW4gYW5jZXN0b3Igb2YgdGhlIHNlY29uZCBvbmU/XG4gIG93bmVyR3JhcGggPSBzZWNvbmROb2RlLmdldE93bmVyKCk7XG5cbiAgZG9cbiAge1xuICAgIHBhcmVudE5vZGUgPSBvd25lckdyYXBoLmdldFBhcmVudCgpO1xuXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gbnVsbClcbiAgICB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAocGFyZW50Tm9kZSA9PSBmaXJzdE5vZGUpXG4gICAge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgb3duZXJHcmFwaCA9IHBhcmVudE5vZGUuZ2V0T3duZXIoKTtcbiAgICBpZiAob3duZXJHcmFwaCA9PSBudWxsKVxuICAgIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSB3aGlsZSAodHJ1ZSk7XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9ycyA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBlZGdlO1xuICB2YXIgc291cmNlTm9kZTtcbiAgdmFyIHRhcmdldE5vZGU7XG4gIHZhciBzb3VyY2VBbmNlc3RvckdyYXBoO1xuICB2YXIgdGFyZ2V0QW5jZXN0b3JHcmFwaDtcblxuICB2YXIgZWRnZXMgPSB0aGlzLmdldEFsbEVkZ2VzKCk7XG4gIHZhciBzID0gZWRnZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAge1xuICAgIGVkZ2UgPSBlZGdlc1tpXTtcblxuICAgIHNvdXJjZU5vZGUgPSBlZGdlLnNvdXJjZTtcbiAgICB0YXJnZXROb2RlID0gZWRnZS50YXJnZXQ7XG4gICAgZWRnZS5sY2EgPSBudWxsO1xuICAgIGVkZ2Uuc291cmNlSW5MY2EgPSBzb3VyY2VOb2RlO1xuICAgIGVkZ2UudGFyZ2V0SW5MY2EgPSB0YXJnZXROb2RlO1xuXG4gICAgaWYgKHNvdXJjZU5vZGUgPT0gdGFyZ2V0Tm9kZSlcbiAgICB7XG4gICAgICBlZGdlLmxjYSA9IHNvdXJjZU5vZGUuZ2V0T3duZXIoKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHNvdXJjZUFuY2VzdG9yR3JhcGggPSBzb3VyY2VOb2RlLmdldE93bmVyKCk7XG5cbiAgICB3aGlsZSAoZWRnZS5sY2EgPT0gbnVsbClcbiAgICB7XG4gICAgICBlZGdlLnRhcmdldEluTGNhID0gdGFyZ2V0Tm9kZTsgIFxuICAgICAgdGFyZ2V0QW5jZXN0b3JHcmFwaCA9IHRhcmdldE5vZGUuZ2V0T3duZXIoKTtcblxuICAgICAgd2hpbGUgKGVkZ2UubGNhID09IG51bGwpXG4gICAgICB7XG4gICAgICAgIGlmICh0YXJnZXRBbmNlc3RvckdyYXBoID09IHNvdXJjZUFuY2VzdG9yR3JhcGgpXG4gICAgICAgIHtcbiAgICAgICAgICBlZGdlLmxjYSA9IHRhcmdldEFuY2VzdG9yR3JhcGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0QW5jZXN0b3JHcmFwaCA9PSB0aGlzLnJvb3RHcmFwaClcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVkZ2UubGNhICE9IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgICAgICAgfVxuICAgICAgICBlZGdlLnRhcmdldEluTGNhID0gdGFyZ2V0QW5jZXN0b3JHcmFwaC5nZXRQYXJlbnQoKTtcbiAgICAgICAgdGFyZ2V0QW5jZXN0b3JHcmFwaCA9IGVkZ2UudGFyZ2V0SW5MY2EuZ2V0T3duZXIoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNvdXJjZUFuY2VzdG9yR3JhcGggPT0gdGhpcy5yb290R3JhcGgpXG4gICAgICB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWRnZS5sY2EgPT0gbnVsbClcbiAgICAgIHtcbiAgICAgICAgZWRnZS5zb3VyY2VJbkxjYSA9IHNvdXJjZUFuY2VzdG9yR3JhcGguZ2V0UGFyZW50KCk7XG4gICAgICAgIHNvdXJjZUFuY2VzdG9yR3JhcGggPSBlZGdlLnNvdXJjZUluTGNhLmdldE93bmVyKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVkZ2UubGNhID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICAgIH1cbiAgfVxufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9yID0gZnVuY3Rpb24gKGZpcnN0Tm9kZSwgc2Vjb25kTm9kZSlcbntcbiAgaWYgKGZpcnN0Tm9kZSA9PSBzZWNvbmROb2RlKVxuICB7XG4gICAgcmV0dXJuIGZpcnN0Tm9kZS5nZXRPd25lcigpO1xuICB9XG4gIHZhciBmaXJzdE93bmVyR3JhcGggPSBmaXJzdE5vZGUuZ2V0T3duZXIoKTtcblxuICBkb1xuICB7XG4gICAgaWYgKGZpcnN0T3duZXJHcmFwaCA9PSBudWxsKVxuICAgIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgc2Vjb25kT3duZXJHcmFwaCA9IHNlY29uZE5vZGUuZ2V0T3duZXIoKTtcblxuICAgIGRvXG4gICAge1xuICAgICAgaWYgKHNlY29uZE93bmVyR3JhcGggPT0gbnVsbClcbiAgICAgIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWNvbmRPd25lckdyYXBoID09IGZpcnN0T3duZXJHcmFwaClcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIHNlY29uZE93bmVyR3JhcGg7XG4gICAgICB9XG4gICAgICBzZWNvbmRPd25lckdyYXBoID0gc2Vjb25kT3duZXJHcmFwaC5nZXRQYXJlbnQoKS5nZXRPd25lcigpO1xuICAgIH0gd2hpbGUgKHRydWUpO1xuXG4gICAgZmlyc3RPd25lckdyYXBoID0gZmlyc3RPd25lckdyYXBoLmdldFBhcmVudCgpLmdldE93bmVyKCk7XG4gIH0gd2hpbGUgKHRydWUpO1xuXG4gIHJldHVybiBmaXJzdE93bmVyR3JhcGg7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5jYWxjSW5jbHVzaW9uVHJlZURlcHRocyA9IGZ1bmN0aW9uIChncmFwaCwgZGVwdGgpIHtcbiAgaWYgKGdyYXBoID09IG51bGwgJiYgZGVwdGggPT0gbnVsbCkge1xuICAgIGdyYXBoID0gdGhpcy5yb290R3JhcGg7XG4gICAgZGVwdGggPSAxO1xuICB9XG4gIHZhciBub2RlO1xuXG4gIHZhciBub2RlcyA9IGdyYXBoLmdldE5vZGVzKCk7XG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAge1xuICAgIG5vZGUgPSBub2Rlc1tpXTtcbiAgICBub2RlLmluY2x1c2lvblRyZWVEZXB0aCA9IGRlcHRoO1xuXG4gICAgaWYgKG5vZGUuY2hpbGQgIT0gbnVsbClcbiAgICB7XG4gICAgICB0aGlzLmNhbGNJbmNsdXNpb25UcmVlRGVwdGhzKG5vZGUuY2hpbGQsIGRlcHRoICsgMSk7XG4gICAgfVxuICB9XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5pbmNsdWRlc0ludmFsaWRFZGdlID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIGVkZ2U7XG5cbiAgdmFyIHMgPSB0aGlzLmVkZ2VzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gIHtcbiAgICBlZGdlID0gdGhpcy5lZGdlc1tpXTtcblxuICAgIGlmICh0aGlzLmlzT25lQW5jZXN0b3JPZk90aGVyKGVkZ2Uuc291cmNlLCBlZGdlLnRhcmdldCkpXG4gICAge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTEdyYXBoTWFuYWdlcjtcbiIsImZ1bmN0aW9uIExHcmFwaE9iamVjdCh2R3JhcGhPYmplY3QpIHtcbiAgdGhpcy52R3JhcGhPYmplY3QgPSB2R3JhcGhPYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTEdyYXBoT2JqZWN0O1xuIiwidmFyIExHcmFwaE9iamVjdCA9IHJlcXVpcmUoJy4vTEdyYXBoT2JqZWN0Jyk7XG52YXIgSW50ZWdlciA9IHJlcXVpcmUoJy4vSW50ZWdlcicpO1xudmFyIFJlY3RhbmdsZUQgPSByZXF1aXJlKCcuL1JlY3RhbmdsZUQnKTtcbnZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0xheW91dENvbnN0YW50cycpO1xudmFyIFJhbmRvbVNlZWQgPSByZXF1aXJlKCcuL1JhbmRvbVNlZWQnKTtcbnZhciBQb2ludEQgPSByZXF1aXJlKCcuL1BvaW50RCcpO1xudmFyIEhhc2hTZXQgPSByZXF1aXJlKCcuL0hhc2hTZXQnKTtcblxuZnVuY3Rpb24gTE5vZGUoZ20sIGxvYywgc2l6ZSwgdk5vZGUpIHtcbiAgLy9BbHRlcm5hdGl2ZSBjb25zdHJ1Y3RvciAxIDogTE5vZGUoTEdyYXBoTWFuYWdlciBnbSwgUG9pbnQgbG9jLCBEaW1lbnNpb24gc2l6ZSwgT2JqZWN0IHZOb2RlKVxuICBpZiAoc2l6ZSA9PSBudWxsICYmIHZOb2RlID09IG51bGwpIHtcbiAgICB2Tm9kZSA9IGxvYztcbiAgfVxuXG4gIExHcmFwaE9iamVjdC5jYWxsKHRoaXMsIHZOb2RlKTtcblxuICAvL0FsdGVybmF0aXZlIGNvbnN0cnVjdG9yIDIgOiBMTm9kZShMYXlvdXQgbGF5b3V0LCBPYmplY3Qgdk5vZGUpXG4gIGlmIChnbS5ncmFwaE1hbmFnZXIgIT0gbnVsbClcbiAgICBnbSA9IGdtLmdyYXBoTWFuYWdlcjtcblxuICB0aGlzLmVzdGltYXRlZFNpemUgPSBJbnRlZ2VyLk1JTl9WQUxVRTtcbiAgdGhpcy5pbmNsdXNpb25UcmVlRGVwdGggPSBJbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdGhpcy52R3JhcGhPYmplY3QgPSB2Tm9kZTtcbiAgdGhpcy5lZGdlcyA9IFtdO1xuICB0aGlzLmdyYXBoTWFuYWdlciA9IGdtO1xuXG4gIGlmIChzaXplICE9IG51bGwgJiYgbG9jICE9IG51bGwpXG4gICAgdGhpcy5yZWN0ID0gbmV3IFJlY3RhbmdsZUQobG9jLngsIGxvYy55LCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG4gIGVsc2VcbiAgICB0aGlzLnJlY3QgPSBuZXcgUmVjdGFuZ2xlRCgpO1xufVxuXG5MTm9kZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaE9iamVjdC5wcm90b3R5cGUpO1xuZm9yICh2YXIgcHJvcCBpbiBMR3JhcGhPYmplY3QpIHtcbiAgTE5vZGVbcHJvcF0gPSBMR3JhcGhPYmplY3RbcHJvcF07XG59XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRFZGdlcyA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmVkZ2VzO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldENoaWxkID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuY2hpbGQ7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0T3duZXIgPSBmdW5jdGlvbiAoKVxue1xuLy8gIGlmICh0aGlzLm93bmVyICE9IG51bGwpIHtcbi8vICAgIGlmICghKHRoaXMub3duZXIgPT0gbnVsbCB8fCB0aGlzLm93bmVyLmdldE5vZGVzKCkuaW5kZXhPZih0aGlzKSA+IC0xKSkge1xuLy8gICAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbi8vICAgIH1cbi8vICB9XG5cbiAgcmV0dXJuIHRoaXMub3duZXI7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yZWN0LndpZHRoO1xufTtcblxuTE5vZGUucHJvdG90eXBlLnNldFdpZHRoID0gZnVuY3Rpb24gKHdpZHRoKVxue1xuICB0aGlzLnJlY3Qud2lkdGggPSB3aWR0aDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yZWN0LmhlaWdodDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbiAoaGVpZ2h0KVxue1xuICB0aGlzLnJlY3QuaGVpZ2h0ID0gaGVpZ2h0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldENlbnRlclggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yZWN0LnggKyB0aGlzLnJlY3Qud2lkdGggLyAyO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldENlbnRlclkgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yZWN0LnkgKyB0aGlzLnJlY3QuaGVpZ2h0IC8gMjtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRDZW50ZXIgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gbmV3IFBvaW50RCh0aGlzLnJlY3QueCArIHRoaXMucmVjdC53aWR0aCAvIDIsXG4gICAgICAgICAgdGhpcy5yZWN0LnkgKyB0aGlzLnJlY3QuaGVpZ2h0IC8gMik7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gbmV3IFBvaW50RCh0aGlzLnJlY3QueCwgdGhpcy5yZWN0LnkpO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFJlY3QgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yZWN0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldERpYWdvbmFsID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnJlY3Qud2lkdGggKiB0aGlzLnJlY3Qud2lkdGggK1xuICAgICAgICAgIHRoaXMucmVjdC5oZWlnaHQgKiB0aGlzLnJlY3QuaGVpZ2h0KTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5zZXRSZWN0ID0gZnVuY3Rpb24gKHVwcGVyTGVmdCwgZGltZW5zaW9uKVxue1xuICB0aGlzLnJlY3QueCA9IHVwcGVyTGVmdC54O1xuICB0aGlzLnJlY3QueSA9IHVwcGVyTGVmdC55O1xuICB0aGlzLnJlY3Qud2lkdGggPSBkaW1lbnNpb24ud2lkdGg7XG4gIHRoaXMucmVjdC5oZWlnaHQgPSBkaW1lbnNpb24uaGVpZ2h0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLnNldENlbnRlciA9IGZ1bmN0aW9uIChjeCwgY3kpXG57XG4gIHRoaXMucmVjdC54ID0gY3ggLSB0aGlzLnJlY3Qud2lkdGggLyAyO1xuICB0aGlzLnJlY3QueSA9IGN5IC0gdGhpcy5yZWN0LmhlaWdodCAvIDI7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuc2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoeCwgeSlcbntcbiAgdGhpcy5yZWN0LnggPSB4O1xuICB0aGlzLnJlY3QueSA9IHk7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUubW92ZUJ5ID0gZnVuY3Rpb24gKGR4LCBkeSlcbntcbiAgdGhpcy5yZWN0LnggKz0gZHg7XG4gIHRoaXMucmVjdC55ICs9IGR5O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEVkZ2VMaXN0VG9Ob2RlID0gZnVuY3Rpb24gKHRvKVxue1xuICB2YXIgZWRnZUxpc3QgPSBbXTtcbiAgdmFyIGVkZ2U7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBzZWxmLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24oZWRnZSkge1xuICAgIFxuICAgIGlmIChlZGdlLnRhcmdldCA9PSB0bylcbiAgICB7XG4gICAgICBpZiAoZWRnZS5zb3VyY2UgIT0gc2VsZilcbiAgICAgICAgdGhyb3cgXCJJbmNvcnJlY3QgZWRnZSBzb3VyY2UhXCI7XG5cbiAgICAgIGVkZ2VMaXN0LnB1c2goZWRnZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWRnZUxpc3Q7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0RWRnZXNCZXR3ZWVuID0gZnVuY3Rpb24gKG90aGVyKVxue1xuICB2YXIgZWRnZUxpc3QgPSBbXTtcbiAgdmFyIGVkZ2U7XG4gIFxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYuZWRnZXMuZm9yRWFjaChmdW5jdGlvbihlZGdlKSB7XG5cbiAgICBpZiAoIShlZGdlLnNvdXJjZSA9PSBzZWxmIHx8IGVkZ2UudGFyZ2V0ID09IHNlbGYpKVxuICAgICAgdGhyb3cgXCJJbmNvcnJlY3QgZWRnZSBzb3VyY2UgYW5kL29yIHRhcmdldFwiO1xuXG4gICAgaWYgKChlZGdlLnRhcmdldCA9PSBvdGhlcikgfHwgKGVkZ2Uuc291cmNlID09IG90aGVyKSlcbiAgICB7XG4gICAgICBlZGdlTGlzdC5wdXNoKGVkZ2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VMaXN0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldE5laWdoYm9yc0xpc3QgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgbmVpZ2hib3JzID0gbmV3IEhhc2hTZXQoKTtcbiAgdmFyIGVkZ2U7XG4gIFxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYuZWRnZXMuZm9yRWFjaChmdW5jdGlvbihlZGdlKSB7XG5cbiAgICBpZiAoZWRnZS5zb3VyY2UgPT0gc2VsZilcbiAgICB7XG4gICAgICBuZWlnaGJvcnMuYWRkKGVkZ2UudGFyZ2V0KTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIGlmIChlZGdlLnRhcmdldCAhPSBzZWxmKSB7XG4gICAgICAgIHRocm93IFwiSW5jb3JyZWN0IGluY2lkZW5jeSFcIjtcbiAgICAgIH1cbiAgICBcbiAgICAgIG5laWdoYm9ycy5hZGQoZWRnZS5zb3VyY2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5laWdoYm9ycztcbn07XG5cbkxOb2RlLnByb3RvdHlwZS53aXRoQ2hpbGRyZW4gPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgd2l0aE5laWdoYm9yc0xpc3QgPSBuZXcgU2V0KCk7XG4gIHZhciBjaGlsZE5vZGU7XG4gIHZhciBjaGlsZHJlbjtcblxuICB3aXRoTmVpZ2hib3JzTGlzdC5hZGQodGhpcyk7XG5cbiAgaWYgKHRoaXMuY2hpbGQgIT0gbnVsbClcbiAge1xuICAgIHZhciBub2RlcyA9IHRoaXMuY2hpbGQuZ2V0Tm9kZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIGNoaWxkTm9kZSA9IG5vZGVzW2ldO1xuICAgICAgY2hpbGRyZW4gPSBjaGlsZE5vZGUud2l0aENoaWxkcmVuKCk7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgd2l0aE5laWdoYm9yc0xpc3QuYWRkKG5vZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHdpdGhOZWlnaGJvcnNMaXN0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldE5vT2ZDaGlsZHJlbiA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBub09mQ2hpbGRyZW4gPSAwO1xuICB2YXIgY2hpbGROb2RlO1xuXG4gIGlmKHRoaXMuY2hpbGQgPT0gbnVsbCl7XG4gICAgbm9PZkNoaWxkcmVuID0gMTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICB2YXIgbm9kZXMgPSB0aGlzLmNoaWxkLmdldE5vZGVzKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBjaGlsZE5vZGUgPSBub2Rlc1tpXTtcblxuICAgICAgbm9PZkNoaWxkcmVuICs9IGNoaWxkTm9kZS5nZXROb09mQ2hpbGRyZW4oKTtcbiAgICB9XG4gIH1cbiAgXG4gIGlmKG5vT2ZDaGlsZHJlbiA9PSAwKXtcbiAgICBub09mQ2hpbGRyZW4gPSAxO1xuICB9XG4gIHJldHVybiBub09mQ2hpbGRyZW47XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0RXN0aW1hdGVkU2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZXN0aW1hdGVkU2l6ZSA9PSBJbnRlZ2VyLk1JTl9WQUxVRSkge1xuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICB9XG4gIHJldHVybiB0aGlzLmVzdGltYXRlZFNpemU7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuY2FsY0VzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmNoaWxkID09IG51bGwpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplID0gKHRoaXMucmVjdC53aWR0aCArIHRoaXMucmVjdC5oZWlnaHQpIC8gMjtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICB0aGlzLmVzdGltYXRlZFNpemUgPSB0aGlzLmNoaWxkLmNhbGNFc3RpbWF0ZWRTaXplKCk7XG4gICAgdGhpcy5yZWN0LndpZHRoID0gdGhpcy5lc3RpbWF0ZWRTaXplO1xuICAgIHRoaXMucmVjdC5oZWlnaHQgPSB0aGlzLmVzdGltYXRlZFNpemU7XG5cbiAgICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplO1xuICB9XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuc2NhdHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJhbmRvbUNlbnRlclg7XG4gIHZhciByYW5kb21DZW50ZXJZO1xuXG4gIHZhciBtaW5YID0gLUxheW91dENvbnN0YW50cy5JTklUSUFMX1dPUkxEX0JPVU5EQVJZO1xuICB2YXIgbWF4WCA9IExheW91dENvbnN0YW50cy5JTklUSUFMX1dPUkxEX0JPVU5EQVJZO1xuICByYW5kb21DZW50ZXJYID0gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0NFTlRFUl9YICtcbiAgICAgICAgICAoUmFuZG9tU2VlZC5uZXh0RG91YmxlKCkgKiAobWF4WCAtIG1pblgpKSArIG1pblg7XG5cbiAgdmFyIG1pblkgPSAtTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlk7XG4gIHZhciBtYXhZID0gTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlk7XG4gIHJhbmRvbUNlbnRlclkgPSBMYXlvdXRDb25zdGFudHMuV09STERfQ0VOVEVSX1kgK1xuICAgICAgICAgIChSYW5kb21TZWVkLm5leHREb3VibGUoKSAqIChtYXhZIC0gbWluWSkpICsgbWluWTtcblxuICB0aGlzLnJlY3QueCA9IHJhbmRvbUNlbnRlclg7XG4gIHRoaXMucmVjdC55ID0gcmFuZG9tQ2VudGVyWVxufTtcblxuTE5vZGUucHJvdG90eXBlLnVwZGF0ZUJvdW5kcyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZ2V0Q2hpbGQoKSA9PSBudWxsKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cbiAgaWYgKHRoaXMuZ2V0Q2hpbGQoKS5nZXROb2RlcygpLmxlbmd0aCAhPSAwKVxuICB7XG4gICAgLy8gd3JhcCB0aGUgY2hpbGRyZW4gbm9kZXMgYnkgcmUtYXJyYW5naW5nIHRoZSBib3VuZGFyaWVzXG4gICAgdmFyIGNoaWxkR3JhcGggPSB0aGlzLmdldENoaWxkKCk7XG4gICAgY2hpbGRHcmFwaC51cGRhdGVCb3VuZHModHJ1ZSk7XG5cbiAgICB0aGlzLnJlY3QueCA9IGNoaWxkR3JhcGguZ2V0TGVmdCgpO1xuICAgIHRoaXMucmVjdC55ID0gY2hpbGRHcmFwaC5nZXRUb3AoKTtcblxuICAgIHRoaXMuc2V0V2lkdGgoY2hpbGRHcmFwaC5nZXRSaWdodCgpIC0gY2hpbGRHcmFwaC5nZXRMZWZ0KCkpO1xuICAgIHRoaXMuc2V0SGVpZ2h0KGNoaWxkR3JhcGguZ2V0Qm90dG9tKCkgLSBjaGlsZEdyYXBoLmdldFRvcCgpKTtcbiAgICBcbiAgICAvLyBVcGRhdGUgY29tcG91bmQgYm91bmRzIGNvbnNpZGVyaW5nIGl0cyBsYWJlbCBwcm9wZXJ0aWVzICAgIFxuICAgIGlmKExheW91dENvbnN0YW50cy5OT0RFX0RJTUVOU0lPTlNfSU5DTFVERV9MQUJFTFMpe1xuICAgICAgICBcbiAgICAgIHZhciB3aWR0aCA9IGNoaWxkR3JhcGguZ2V0UmlnaHQoKSAtIGNoaWxkR3JhcGguZ2V0TGVmdCgpO1xuICAgICAgdmFyIGhlaWdodCA9IGNoaWxkR3JhcGguZ2V0Qm90dG9tKCkgLSBjaGlsZEdyYXBoLmdldFRvcCgpO1xuXG4gICAgICBpZih0aGlzLmxhYmVsV2lkdGggPiB3aWR0aCl7XG4gICAgICAgIHRoaXMucmVjdC54IC09ICh0aGlzLmxhYmVsV2lkdGggLSB3aWR0aCkgLyAyO1xuICAgICAgICB0aGlzLnNldFdpZHRoKHRoaXMubGFiZWxXaWR0aCk7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMubGFiZWxIZWlnaHQgPiBoZWlnaHQpe1xuICAgICAgICBpZih0aGlzLmxhYmVsUG9zID09IFwiY2VudGVyXCIpe1xuICAgICAgICAgIHRoaXMucmVjdC55IC09ICh0aGlzLmxhYmVsSGVpZ2h0IC0gaGVpZ2h0KSAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLmxhYmVsUG9zID09IFwidG9wXCIpe1xuICAgICAgICAgIHRoaXMucmVjdC55IC09ICh0aGlzLmxhYmVsSGVpZ2h0IC0gaGVpZ2h0KTsgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRIZWlnaHQodGhpcy5sYWJlbEhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0SW5jbHVzaW9uVHJlZURlcHRoID0gZnVuY3Rpb24gKClcbntcbiAgaWYgKHRoaXMuaW5jbHVzaW9uVHJlZURlcHRoID09IEludGVnZXIuTUFYX1ZBTFVFKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cbiAgcmV0dXJuIHRoaXMuaW5jbHVzaW9uVHJlZURlcHRoO1xufTtcblxuTE5vZGUucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uICh0cmFucylcbntcbiAgdmFyIGxlZnQgPSB0aGlzLnJlY3QueDtcblxuICBpZiAobGVmdCA+IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSlcbiAge1xuICAgIGxlZnQgPSBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlk7XG4gIH1cbiAgZWxzZSBpZiAobGVmdCA8IC1MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkpXG4gIHtcbiAgICBsZWZ0ID0gLUxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWTtcbiAgfVxuXG4gIHZhciB0b3AgPSB0aGlzLnJlY3QueTtcblxuICBpZiAodG9wID4gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZKVxuICB7XG4gICAgdG9wID0gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZO1xuICB9XG4gIGVsc2UgaWYgKHRvcCA8IC1MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkpXG4gIHtcbiAgICB0b3AgPSAtTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZO1xuICB9XG5cbiAgdmFyIGxlZnRUb3AgPSBuZXcgUG9pbnREKGxlZnQsIHRvcCk7XG4gIHZhciB2TGVmdFRvcCA9IHRyYW5zLmludmVyc2VUcmFuc2Zvcm1Qb2ludChsZWZ0VG9wKTtcblxuICB0aGlzLnNldExvY2F0aW9uKHZMZWZ0VG9wLngsIHZMZWZ0VG9wLnkpO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yZWN0Lng7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0UmlnaHQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yZWN0LnggKyB0aGlzLnJlY3Qud2lkdGg7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0VG9wID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdC55O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEJvdHRvbSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnJlY3QueSArIHRoaXMucmVjdC5oZWlnaHQ7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0UGFyZW50ID0gZnVuY3Rpb24gKClcbntcbiAgaWYgKHRoaXMub3duZXIgPT0gbnVsbClcbiAge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMub3duZXIuZ2V0UGFyZW50KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExOb2RlO1xuIiwidmFyIExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vTGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgSGFzaE1hcCA9IHJlcXVpcmUoJy4vSGFzaE1hcCcpO1xudmFyIExHcmFwaE1hbmFnZXIgPSByZXF1aXJlKCcuL0xHcmFwaE1hbmFnZXInKTtcbnZhciBMTm9kZSA9IHJlcXVpcmUoJy4vTE5vZGUnKTtcbnZhciBMRWRnZSA9IHJlcXVpcmUoJy4vTEVkZ2UnKTtcbnZhciBMR3JhcGggPSByZXF1aXJlKCcuL0xHcmFwaCcpO1xudmFyIFBvaW50RCA9IHJlcXVpcmUoJy4vUG9pbnREJyk7XG52YXIgVHJhbnNmb3JtID0gcmVxdWlyZSgnLi9UcmFuc2Zvcm0nKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnLi9FbWl0dGVyJyk7XG52YXIgSGFzaFNldCA9IHJlcXVpcmUoJy4vSGFzaFNldCcpO1xuXG5mdW5jdGlvbiBMYXlvdXQoaXNSZW1vdGVVc2UpIHtcbiAgRW1pdHRlci5jYWxsKCB0aGlzICk7XG5cbiAgLy9MYXlvdXQgUXVhbGl0eTogMDpwcm9vZiwgMTpkZWZhdWx0LCAyOmRyYWZ0XG4gIHRoaXMubGF5b3V0UXVhbGl0eSA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX1FVQUxJVFk7XG4gIC8vV2hldGhlciBsYXlvdXQgc2hvdWxkIGNyZWF0ZSBiZW5kcG9pbnRzIGFzIG5lZWRlZCBvciBub3RcbiAgdGhpcy5jcmVhdGVCZW5kc0FzTmVlZGVkID1cbiAgICAgICAgICBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEO1xuICAvL1doZXRoZXIgbGF5b3V0IHNob3VsZCBiZSBpbmNyZW1lbnRhbCBvciBub3RcbiAgdGhpcy5pbmNyZW1lbnRhbCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMO1xuICAvL1doZXRoZXIgd2UgYW5pbWF0ZSBmcm9tIGJlZm9yZSB0byBhZnRlciBsYXlvdXQgbm9kZSBwb3NpdGlvbnNcbiAgdGhpcy5hbmltYXRpb25PbkxheW91dCA9XG4gICAgICAgICAgTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVDtcbiAgLy9XaGV0aGVyIHdlIGFuaW1hdGUgdGhlIGxheW91dCBwcm9jZXNzIG9yIG5vdFxuICB0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VUO1xuICAvL051bWJlciBpdGVyYXRpb25zIHRoYXQgc2hvdWxkIGJlIGRvbmUgYmV0d2VlbiB0d28gc3VjY2Vzc2l2ZSBhbmltYXRpb25zXG4gIHRoaXMuYW5pbWF0aW9uUGVyaW9kID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRDtcbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IGxlYWYgbm9kZXMgKG5vbi1jb21wb3VuZCBub2RlcykgYXJlIG9mIHVuaWZvcm0gc2l6ZXMuIFdoZW5cbiAgICogdGhleSBhcmUsIGJvdGggc3ByaW5nIGFuZCByZXB1bHNpb24gZm9yY2VzIGJldHdlZW4gdHdvIGxlYWYgbm9kZXMgY2FuIGJlXG4gICAqIGNhbGN1bGF0ZWQgd2l0aG91dCB0aGUgZXhwZW5zaXZlIGNsaXBwaW5nIHBvaW50IGNhbGN1bGF0aW9ucywgcmVzdWx0aW5nXG4gICAqIGluIG1ham9yIHNwZWVkLXVwLlxuICAgKi9cbiAgdGhpcy51bmlmb3JtTGVhZk5vZGVTaXplcyA9XG4gICAgICAgICAgTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVU5JRk9STV9MRUFGX05PREVfU0laRVM7XG4gIC8qKlxuICAgKiBUaGlzIGlzIHVzZWQgZm9yIGNyZWF0aW9uIG9mIGJlbmRwb2ludHMgYnkgdXNpbmcgZHVtbXkgbm9kZXMgYW5kIGVkZ2VzLlxuICAgKiBNYXBzIGFuIExFZGdlIHRvIGl0cyBkdW1teSBiZW5kcG9pbnQgcGF0aC5cbiAgICovXG4gIHRoaXMuZWRnZVRvRHVtbXlOb2RlcyA9IG5ldyBIYXNoTWFwKCk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyID0gbmV3IExHcmFwaE1hbmFnZXIodGhpcyk7XG4gIHRoaXMuaXNMYXlvdXRGaW5pc2hlZCA9IGZhbHNlO1xuICB0aGlzLmlzU3ViTGF5b3V0ID0gZmFsc2U7XG4gIHRoaXMuaXNSZW1vdGVVc2UgPSBmYWxzZTtcblxuICBpZiAoaXNSZW1vdGVVc2UgIT0gbnVsbCkge1xuICAgIHRoaXMuaXNSZW1vdGVVc2UgPSBpc1JlbW90ZVVzZTtcbiAgfVxufVxuXG5MYXlvdXQuUkFORE9NX1NFRUQgPSAxO1xuXG5MYXlvdXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRW1pdHRlci5wcm90b3R5cGUgKTtcblxuTGF5b3V0LnByb3RvdHlwZS5nZXRHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlcjtcbn07XG5cbkxheW91dC5wcm90b3R5cGUuZ2V0QWxsTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2RlcygpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5nZXRBbGxFZGdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbEVkZ2VzKCk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLmdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oKTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUubmV3R3JhcGhNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZ20gPSBuZXcgTEdyYXBoTWFuYWdlcih0aGlzKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcbiAgcmV0dXJuIGdtO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5uZXdHcmFwaCA9IGZ1bmN0aW9uICh2R3JhcGgpXG57XG4gIHJldHVybiBuZXcgTEdyYXBoKG51bGwsIHRoaXMuZ3JhcGhNYW5hZ2VyLCB2R3JhcGgpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5uZXdOb2RlID0gZnVuY3Rpb24gKHZOb2RlKVxue1xuICByZXR1cm4gbmV3IExOb2RlKHRoaXMuZ3JhcGhNYW5hZ2VyLCB2Tm9kZSk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLm5ld0VkZ2UgPSBmdW5jdGlvbiAodkVkZ2UpXG57XG4gIHJldHVybiBuZXcgTEVkZ2UobnVsbCwgbnVsbCwgdkVkZ2UpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5jaGVja0xheW91dFN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICh0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkgPT0gbnVsbClcbiAgICAgICAgICB8fCB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0Tm9kZXMoKS5sZW5ndGggPT0gMFxuICAgICAgICAgIHx8IHRoaXMuZ3JhcGhNYW5hZ2VyLmluY2x1ZGVzSW52YWxpZEVkZ2UoKTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUucnVuTGF5b3V0ID0gZnVuY3Rpb24gKClcbntcbiAgdGhpcy5pc0xheW91dEZpbmlzaGVkID0gZmFsc2U7XG4gIFxuICBpZiAodGhpcy50aWxpbmdQcmVMYXlvdXQpIHtcbiAgICB0aGlzLnRpbGluZ1ByZUxheW91dCgpO1xuICB9XG5cbiAgdGhpcy5pbml0UGFyYW1ldGVycygpO1xuICB2YXIgaXNMYXlvdXRTdWNjZXNzZnVsbDtcblxuICBpZiAodGhpcy5jaGVja0xheW91dFN1Y2Nlc3MoKSlcbiAge1xuICAgIGlzTGF5b3V0U3VjY2Vzc2Z1bGwgPSBmYWxzZTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICBpc0xheW91dFN1Y2Nlc3NmdWxsID0gdGhpcy5sYXlvdXQoKTtcbiAgfVxuICBcbiAgaWYgKExheW91dENvbnN0YW50cy5BTklNQVRFID09PSAnZHVyaW5nJykge1xuICAgIC8vIElmIHRoaXMgaXMgYSAnZHVyaW5nJyBsYXlvdXQgYW5pbWF0aW9uLiBMYXlvdXQgaXMgbm90IGZpbmlzaGVkIHlldC4gXG4gICAgLy8gV2UgbmVlZCB0byBwZXJmb3JtIHRoZXNlIGluIGluZGV4LmpzIHdoZW4gbGF5b3V0IGlzIHJlYWxseSBmaW5pc2hlZC5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIGlmIChpc0xheW91dFN1Y2Nlc3NmdWxsKVxuICB7XG4gICAgaWYgKCF0aGlzLmlzU3ViTGF5b3V0KVxuICAgIHtcbiAgICAgIHRoaXMuZG9Qb3N0TGF5b3V0KCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMudGlsaW5nUG9zdExheW91dCkge1xuICAgIHRoaXMudGlsaW5nUG9zdExheW91dCgpO1xuICB9XG5cbiAgdGhpcy5pc0xheW91dEZpbmlzaGVkID0gdHJ1ZTtcblxuICByZXR1cm4gaXNMYXlvdXRTdWNjZXNzZnVsbDtcbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcGVyZm9ybXMgdGhlIG9wZXJhdGlvbnMgcmVxdWlyZWQgYWZ0ZXIgbGF5b3V0LlxuICovXG5MYXlvdXQucHJvdG90eXBlLmRvUG9zdExheW91dCA9IGZ1bmN0aW9uICgpXG57XG4gIC8vYXNzZXJ0ICFpc1N1YkxheW91dCA6IFwiU2hvdWxkIG5vdCBiZSBjYWxsZWQgb24gc3ViLWxheW91dCFcIjtcbiAgLy8gUHJvcGFnYXRlIGdlb21ldHJpYyBjaGFuZ2VzIHRvIHYtbGV2ZWwgb2JqZWN0c1xuICBpZighdGhpcy5pbmNyZW1lbnRhbCl7XG4gICAgdGhpcy50cmFuc2Zvcm0oKTtcbiAgfVxuICB0aGlzLnVwZGF0ZSgpO1xufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCB1cGRhdGVzIHRoZSBnZW9tZXRyeSBvZiB0aGUgdGFyZ2V0IGdyYXBoIGFjY29yZGluZyB0b1xuICogY2FsY3VsYXRlZCBsYXlvdXQuXG4gKi9cbkxheW91dC5wcm90b3R5cGUudXBkYXRlMiA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gdXBkYXRlIGJlbmQgcG9pbnRzXG4gIGlmICh0aGlzLmNyZWF0ZUJlbmRzQXNOZWVkZWQpXG4gIHtcbiAgICB0aGlzLmNyZWF0ZUJlbmRwb2ludHNGcm9tRHVtbXlOb2RlcygpO1xuXG4gICAgLy8gcmVzZXQgYWxsIGVkZ2VzLCBzaW5jZSB0aGUgdG9wb2xvZ3kgaGFzIGNoYW5nZWRcbiAgICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbEVkZ2VzKCk7XG4gIH1cblxuICAvLyBwZXJmb3JtIGVkZ2UsIG5vZGUgYW5kIHJvb3QgdXBkYXRlcyBpZiBsYXlvdXQgaXMgbm90IGNhbGxlZFxuICAvLyByZW1vdGVseVxuICBpZiAoIXRoaXMuaXNSZW1vdGVVc2UpXG4gIHtcbiAgICAvLyB1cGRhdGUgYWxsIGVkZ2VzXG4gICAgdmFyIGVkZ2U7XG4gICAgdmFyIGFsbEVkZ2VzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsRWRnZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbEVkZ2VzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIGVkZ2UgPSBhbGxFZGdlc1tpXTtcbi8vICAgICAgdGhpcy51cGRhdGUoZWRnZSk7XG4gICAgfVxuXG4gICAgLy8gcmVjdXJzaXZlbHkgdXBkYXRlIG5vZGVzXG4gICAgdmFyIG5vZGU7XG4gICAgdmFyIG5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldE5vZGVzKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBub2RlID0gbm9kZXNbaV07XG4vLyAgICAgIHRoaXMudXBkYXRlKG5vZGUpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSByb290IGdyYXBoXG4gICAgdGhpcy51cGRhdGUodGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpKTtcbiAgfVxufTtcblxuTGF5b3V0LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmIChvYmogPT0gbnVsbCkge1xuICAgIHRoaXMudXBkYXRlMigpO1xuICB9XG4gIGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIExOb2RlKSB7XG4gICAgdmFyIG5vZGUgPSBvYmo7XG4gICAgaWYgKG5vZGUuZ2V0Q2hpbGQoKSAhPSBudWxsKVxuICAgIHtcbiAgICAgIC8vIHNpbmNlIG5vZGUgaXMgY29tcG91bmQsIHJlY3Vyc2l2ZWx5IHVwZGF0ZSBjaGlsZCBub2Rlc1xuICAgICAgdmFyIG5vZGVzID0gbm9kZS5nZXRDaGlsZCgpLmdldE5vZGVzKCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxuICAgICAge1xuICAgICAgICB1cGRhdGUobm9kZXNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBsLWxldmVsIG5vZGUgaXMgYXNzb2NpYXRlZCB3aXRoIGEgdi1sZXZlbCBncmFwaCBvYmplY3QsXG4gICAgLy8gdGhlbiBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHYtbGV2ZWwgbm9kZSBpbXBsZW1lbnRzIHRoZVxuICAgIC8vIGludGVyZmFjZSBVcGRhdGFibGUuXG4gICAgaWYgKG5vZGUudkdyYXBoT2JqZWN0ICE9IG51bGwpXG4gICAge1xuICAgICAgLy8gY2FzdCB0byBVcGRhdGFibGUgd2l0aG91dCBhbnkgdHlwZSBjaGVja1xuICAgICAgdmFyIHZOb2RlID0gbm9kZS52R3JhcGhPYmplY3Q7XG5cbiAgICAgIC8vIGNhbGwgdGhlIHVwZGF0ZSBtZXRob2Qgb2YgdGhlIGludGVyZmFjZVxuICAgICAgdk5vZGUudXBkYXRlKG5vZGUpO1xuICAgIH1cbiAgfVxuICBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMRWRnZSkge1xuICAgIHZhciBlZGdlID0gb2JqO1xuICAgIC8vIGlmIHRoZSBsLWxldmVsIGVkZ2UgaXMgYXNzb2NpYXRlZCB3aXRoIGEgdi1sZXZlbCBncmFwaCBvYmplY3QsXG4gICAgLy8gdGhlbiBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHYtbGV2ZWwgZWRnZSBpbXBsZW1lbnRzIHRoZVxuICAgIC8vIGludGVyZmFjZSBVcGRhdGFibGUuXG5cbiAgICBpZiAoZWRnZS52R3JhcGhPYmplY3QgIT0gbnVsbClcbiAgICB7XG4gICAgICAvLyBjYXN0IHRvIFVwZGF0YWJsZSB3aXRob3V0IGFueSB0eXBlIGNoZWNrXG4gICAgICB2YXIgdkVkZ2UgPSBlZGdlLnZHcmFwaE9iamVjdDtcblxuICAgICAgLy8gY2FsbCB0aGUgdXBkYXRlIG1ldGhvZCBvZiB0aGUgaW50ZXJmYWNlXG4gICAgICB2RWRnZS51cGRhdGUoZWRnZSk7XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIExHcmFwaCkge1xuICAgIHZhciBncmFwaCA9IG9iajtcbiAgICAvLyBpZiB0aGUgbC1sZXZlbCBncmFwaCBpcyBhc3NvY2lhdGVkIHdpdGggYSB2LWxldmVsIGdyYXBoIG9iamVjdCxcbiAgICAvLyB0aGVuIGl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgdi1sZXZlbCBvYmplY3QgaW1wbGVtZW50cyB0aGVcbiAgICAvLyBpbnRlcmZhY2UgVXBkYXRhYmxlLlxuXG4gICAgaWYgKGdyYXBoLnZHcmFwaE9iamVjdCAhPSBudWxsKVxuICAgIHtcbiAgICAgIC8vIGNhc3QgdG8gVXBkYXRhYmxlIHdpdGhvdXQgYW55IHR5cGUgY2hlY2tcbiAgICAgIHZhciB2R3JhcGggPSBncmFwaC52R3JhcGhPYmplY3Q7XG5cbiAgICAgIC8vIGNhbGwgdGhlIHVwZGF0ZSBtZXRob2Qgb2YgdGhlIGludGVyZmFjZVxuICAgICAgdkdyYXBoLnVwZGF0ZShncmFwaCk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gc2V0IGFsbCBsYXlvdXQgcGFyYW1ldGVycyB0byBkZWZhdWx0IHZhbHVlc1xuICogZGV0ZXJtaW5lZCBhdCBjb21waWxlIHRpbWUuXG4gKi9cbkxheW91dC5wcm90b3R5cGUuaW5pdFBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5pc1N1YkxheW91dClcbiAge1xuICAgIHRoaXMubGF5b3V0UXVhbGl0eSA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX1FVQUxJVFk7XG4gICAgdGhpcy5hbmltYXRpb25EdXJpbmdMYXlvdXQgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fRFVSSU5HX0xBWU9VVDtcbiAgICB0aGlzLmFuaW1hdGlvblBlcmlvZCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9QRVJJT0Q7XG4gICAgdGhpcy5hbmltYXRpb25PbkxheW91dCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9PTl9MQVlPVVQ7XG4gICAgdGhpcy5pbmNyZW1lbnRhbCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMO1xuICAgIHRoaXMuY3JlYXRlQmVuZHNBc05lZWRlZCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0NSRUFURV9CRU5EU19BU19ORUVERUQ7XG4gICAgdGhpcy51bmlmb3JtTGVhZk5vZGVTaXplcyA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX1VOSUZPUk1fTEVBRl9OT0RFX1NJWkVTO1xuICB9XG5cbiAgaWYgKHRoaXMuYW5pbWF0aW9uRHVyaW5nTGF5b3V0KVxuICB7XG4gICAgdGhpcy5hbmltYXRpb25PbkxheW91dCA9IGZhbHNlO1xuICB9XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIChuZXdMZWZ0VG9wKSB7XG4gIGlmIChuZXdMZWZ0VG9wID09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMudHJhbnNmb3JtKG5ldyBQb2ludEQoMCwgMCkpO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIGNyZWF0ZSBhIHRyYW5zZm9ybWF0aW9uIG9iamVjdCAoZnJvbSBFY2xpcHNlIHRvIGxheW91dCkuIFdoZW4gYW5cbiAgICAvLyBpbnZlcnNlIHRyYW5zZm9ybSBpcyBhcHBsaWVkLCB3ZSBnZXQgdXBwZXItbGVmdCBjb29yZGluYXRlIG9mIHRoZVxuICAgIC8vIGRyYXdpbmcgb3IgdGhlIHJvb3QgZ3JhcGggYXQgZ2l2ZW4gaW5wdXQgY29vcmRpbmF0ZSAoc29tZSBtYXJnaW5zXG4gICAgLy8gYWxyZWFkeSBpbmNsdWRlZCBpbiBjYWxjdWxhdGlvbiBvZiBsZWZ0LXRvcCkuXG5cbiAgICB2YXIgdHJhbnMgPSBuZXcgVHJhbnNmb3JtKCk7XG4gICAgdmFyIGxlZnRUb3AgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkudXBkYXRlTGVmdFRvcCgpO1xuXG4gICAgaWYgKGxlZnRUb3AgIT0gbnVsbClcbiAgICB7XG4gICAgICB0cmFucy5zZXRXb3JsZE9yZ1gobmV3TGVmdFRvcC54KTtcbiAgICAgIHRyYW5zLnNldFdvcmxkT3JnWShuZXdMZWZ0VG9wLnkpO1xuXG4gICAgICB0cmFucy5zZXREZXZpY2VPcmdYKGxlZnRUb3AueCk7XG4gICAgICB0cmFucy5zZXREZXZpY2VPcmdZKGxlZnRUb3AueSk7XG5cbiAgICAgIHZhciBub2RlcyA9IHRoaXMuZ2V0QWxsTm9kZXMoKTtcbiAgICAgIHZhciBub2RlO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxuICAgICAge1xuICAgICAgICBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIG5vZGUudHJhbnNmb3JtKHRyYW5zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbkxheW91dC5wcm90b3R5cGUucG9zaXRpb25Ob2Rlc1JhbmRvbWx5ID0gZnVuY3Rpb24gKGdyYXBoKSB7XG5cbiAgaWYgKGdyYXBoID09IHVuZGVmaW5lZCkge1xuICAgIC8vYXNzZXJ0ICF0aGlzLmluY3JlbWVudGFsO1xuICAgIHRoaXMucG9zaXRpb25Ob2Rlc1JhbmRvbWx5KHRoaXMuZ2V0R3JhcGhNYW5hZ2VyKCkuZ2V0Um9vdCgpKTtcbiAgICB0aGlzLmdldEdyYXBoTWFuYWdlcigpLmdldFJvb3QoKS51cGRhdGVCb3VuZHModHJ1ZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgdmFyIGxOb2RlO1xuICAgIHZhciBjaGlsZEdyYXBoO1xuXG4gICAgdmFyIG5vZGVzID0gZ3JhcGguZ2V0Tm9kZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIGxOb2RlID0gbm9kZXNbaV07XG4gICAgICBjaGlsZEdyYXBoID0gbE5vZGUuZ2V0Q2hpbGQoKTtcblxuICAgICAgaWYgKGNoaWxkR3JhcGggPT0gbnVsbClcbiAgICAgIHtcbiAgICAgICAgbE5vZGUuc2NhdHRlcigpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoY2hpbGRHcmFwaC5nZXROb2RlcygpLmxlbmd0aCA9PSAwKVxuICAgICAge1xuICAgICAgICBsTm9kZS5zY2F0dGVyKCk7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIHRoaXMucG9zaXRpb25Ob2Rlc1JhbmRvbWx5KGNoaWxkR3JhcGgpO1xuICAgICAgICBsTm9kZS51cGRhdGVCb3VuZHMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIGxpc3Qgb2YgdHJlZXMgd2hlcmUgZWFjaCB0cmVlIGlzIHJlcHJlc2VudGVkIGFzIGFcbiAqIGxpc3Qgb2YgbC1ub2Rlcy4gVGhlIG1ldGhvZCByZXR1cm5zIGEgbGlzdCBvZiBzaXplIDAgd2hlbjpcbiAqIC0gVGhlIGdyYXBoIGlzIG5vdCBmbGF0IG9yXG4gKiAtIE9uZSBvZiB0aGUgY29tcG9uZW50KHMpIG9mIHRoZSBncmFwaCBpcyBub3QgYSB0cmVlLlxuICovXG5MYXlvdXQucHJvdG90eXBlLmdldEZsYXRGb3Jlc3QgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgZmxhdEZvcmVzdCA9IFtdO1xuICB2YXIgaXNGb3Jlc3QgPSB0cnVlO1xuXG4gIC8vIFF1aWNrIHJlZmVyZW5jZSBmb3IgYWxsIG5vZGVzIGluIHRoZSBncmFwaCBtYW5hZ2VyIGFzc29jaWF0ZWQgd2l0aFxuICAvLyB0aGlzIGxheW91dC4gVGhlIGxpc3Qgc2hvdWxkIG5vdCBiZSBjaGFuZ2VkLlxuICB2YXIgYWxsTm9kZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0Tm9kZXMoKTtcblxuICAvLyBGaXJzdCBiZSBzdXJlIHRoYXQgdGhlIGdyYXBoIGlzIGZsYXRcbiAgdmFyIGlzRmxhdCA9IHRydWU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxOb2Rlcy5sZW5ndGg7IGkrKylcbiAge1xuICAgIGlmIChhbGxOb2Rlc1tpXS5nZXRDaGlsZCgpICE9IG51bGwpXG4gICAge1xuICAgICAgaXNGbGF0ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJuIGVtcHR5IGZvcmVzdCBpZiB0aGUgZ3JhcGggaXMgbm90IGZsYXQuXG4gIGlmICghaXNGbGF0KVxuICB7XG4gICAgcmV0dXJuIGZsYXRGb3Jlc3Q7XG4gIH1cblxuICAvLyBSdW4gQkZTIGZvciBlYWNoIGNvbXBvbmVudCBvZiB0aGUgZ3JhcGguXG5cbiAgdmFyIHZpc2l0ZWQgPSBuZXcgSGFzaFNldCgpO1xuICB2YXIgdG9CZVZpc2l0ZWQgPSBbXTtcbiAgdmFyIHBhcmVudHMgPSBuZXcgSGFzaE1hcCgpO1xuICB2YXIgdW5Qcm9jZXNzZWROb2RlcyA9IFtdO1xuXG4gIHVuUHJvY2Vzc2VkTm9kZXMgPSB1blByb2Nlc3NlZE5vZGVzLmNvbmNhdChhbGxOb2Rlcyk7XG5cbiAgLy8gRWFjaCBpdGVyYXRpb24gb2YgdGhpcyBsb29wIGZpbmRzIGEgY29tcG9uZW50IG9mIHRoZSBncmFwaCBhbmRcbiAgLy8gZGVjaWRlcyB3aGV0aGVyIGl0IGlzIGEgdHJlZSBvciBub3QuIElmIGl0IGlzIGEgdHJlZSwgYWRkcyBpdCB0byB0aGVcbiAgLy8gZm9yZXN0IGFuZCBjb250aW51ZWQgd2l0aCB0aGUgbmV4dCBjb21wb25lbnQuXG5cbiAgd2hpbGUgKHVuUHJvY2Vzc2VkTm9kZXMubGVuZ3RoID4gMCAmJiBpc0ZvcmVzdClcbiAge1xuICAgIHRvQmVWaXNpdGVkLnB1c2godW5Qcm9jZXNzZWROb2Rlc1swXSk7XG5cbiAgICAvLyBTdGFydCB0aGUgQkZTLiBFYWNoIGl0ZXJhdGlvbiBvZiB0aGlzIGxvb3AgdmlzaXRzIGEgbm9kZSBpbiBhXG4gICAgLy8gQkZTIG1hbm5lci5cbiAgICB3aGlsZSAodG9CZVZpc2l0ZWQubGVuZ3RoID4gMCAmJiBpc0ZvcmVzdClcbiAgICB7XG4gICAgICAvL3Bvb2wgb3BlcmF0aW9uXG4gICAgICB2YXIgY3VycmVudE5vZGUgPSB0b0JlVmlzaXRlZFswXTtcbiAgICAgIHRvQmVWaXNpdGVkLnNwbGljZSgwLCAxKTtcbiAgICAgIHZpc2l0ZWQuYWRkKGN1cnJlbnROb2RlKTtcblxuICAgICAgLy8gVHJhdmVyc2UgYWxsIG5laWdoYm9ycyBvZiB0aGlzIG5vZGVcbiAgICAgIHZhciBuZWlnaGJvckVkZ2VzID0gY3VycmVudE5vZGUuZ2V0RWRnZXMoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZWlnaGJvckVkZ2VzLmxlbmd0aDsgaSsrKVxuICAgICAge1xuICAgICAgICB2YXIgY3VycmVudE5laWdoYm9yID1cbiAgICAgICAgICAgICAgICBuZWlnaGJvckVkZ2VzW2ldLmdldE90aGVyRW5kKGN1cnJlbnROb2RlKTtcblxuICAgICAgICAvLyBJZiBCRlMgaXMgbm90IGdyb3dpbmcgZnJvbSB0aGlzIG5laWdoYm9yLlxuICAgICAgICBpZiAocGFyZW50cy5nZXQoY3VycmVudE5vZGUpICE9IGN1cnJlbnROZWlnaGJvcilcbiAgICAgICAge1xuICAgICAgICAgIC8vIFdlIGhhdmVuJ3QgcHJldmlvdXNseSB2aXNpdGVkIHRoaXMgbmVpZ2hib3IuXG4gICAgICAgICAgaWYgKCF2aXNpdGVkLmNvbnRhaW5zKGN1cnJlbnROZWlnaGJvcikpXG4gICAgICAgICAge1xuICAgICAgICAgICAgdG9CZVZpc2l0ZWQucHVzaChjdXJyZW50TmVpZ2hib3IpO1xuICAgICAgICAgICAgcGFyZW50cy5wdXQoY3VycmVudE5laWdoYm9yLCBjdXJyZW50Tm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFNpbmNlIHdlIGhhdmUgcHJldmlvdXNseSB2aXNpdGVkIHRoaXMgbmVpZ2hib3IgYW5kXG4gICAgICAgICAgLy8gdGhpcyBuZWlnaGJvciBpcyBub3QgcGFyZW50IG9mIGN1cnJlbnROb2RlLCBnaXZlblxuICAgICAgICAgIC8vIGdyYXBoIGNvbnRhaW5zIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHRyZWUsIGhlbmNlXG4gICAgICAgICAgLy8gaXQgaXMgbm90IGEgZm9yZXN0LlxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpc0ZvcmVzdCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhlIGdyYXBoIGNvbnRhaW5zIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IGEgdHJlZS4gRW1wdHlcbiAgICAvLyBwcmV2aW91c2x5IGZvdW5kIHRyZWVzLiBUaGUgbWV0aG9kIHdpbGwgZW5kLlxuICAgIGlmICghaXNGb3Jlc3QpXG4gICAge1xuICAgICAgZmxhdEZvcmVzdCA9IFtdO1xuICAgIH1cbiAgICAvLyBTYXZlIGN1cnJlbnRseSB2aXNpdGVkIG5vZGVzIGFzIGEgdHJlZSBpbiBvdXIgZm9yZXN0LiBSZXNldFxuICAgIC8vIHZpc2l0ZWQgYW5kIHBhcmVudHMgbGlzdHMuIENvbnRpbnVlIHdpdGggdGhlIG5leHQgY29tcG9uZW50IG9mXG4gICAgLy8gdGhlIGdyYXBoLCBpZiBhbnkuXG4gICAgZWxzZVxuICAgIHtcbiAgICAgIHZhciB0ZW1wID0gW107XG4gICAgICB2aXNpdGVkLmFkZEFsbFRvKHRlbXApO1xuICAgICAgZmxhdEZvcmVzdC5wdXNoKHRlbXApO1xuICAgICAgLy9mbGF0Rm9yZXN0ID0gZmxhdEZvcmVzdC5jb25jYXQodGVtcCk7XG4gICAgICAvL3VuUHJvY2Vzc2VkTm9kZXMucmVtb3ZlQWxsKHZpc2l0ZWQpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRlbXBbaV07XG4gICAgICAgIHZhciBpbmRleCA9IHVuUHJvY2Vzc2VkTm9kZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgdW5Qcm9jZXNzZWROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2aXNpdGVkID0gbmV3IEhhc2hTZXQoKTtcbiAgICAgIHBhcmVudHMgPSBuZXcgSGFzaE1hcCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmbGF0Rm9yZXN0O1xufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBjcmVhdGVzIGR1bW15IG5vZGVzIChhbiBsLWxldmVsIG5vZGUgd2l0aCBtaW5pbWFsIGRpbWVuc2lvbnMpXG4gKiBmb3IgdGhlIGdpdmVuIGVkZ2UgKG9uZSBwZXIgYmVuZHBvaW50KS4gVGhlIGV4aXN0aW5nIGwtbGV2ZWwgc3RydWN0dXJlXG4gKiBpcyB1cGRhdGVkIGFjY29yZGluZ2x5LlxuICovXG5MYXlvdXQucHJvdG90eXBlLmNyZWF0ZUR1bW15Tm9kZXNGb3JCZW5kcG9pbnRzID0gZnVuY3Rpb24gKGVkZ2UpXG57XG4gIHZhciBkdW1teU5vZGVzID0gW107XG4gIHZhciBwcmV2ID0gZWRnZS5zb3VyY2U7XG5cbiAgdmFyIGdyYXBoID0gdGhpcy5ncmFwaE1hbmFnZXIuY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9yKGVkZ2Uuc291cmNlLCBlZGdlLnRhcmdldCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlZGdlLmJlbmRwb2ludHMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICAvLyBjcmVhdGUgbmV3IGR1bW15IG5vZGVcbiAgICB2YXIgZHVtbXlOb2RlID0gdGhpcy5uZXdOb2RlKG51bGwpO1xuICAgIGR1bW15Tm9kZS5zZXRSZWN0KG5ldyBQb2ludCgwLCAwKSwgbmV3IERpbWVuc2lvbigxLCAxKSk7XG5cbiAgICBncmFwaC5hZGQoZHVtbXlOb2RlKTtcblxuICAgIC8vIGNyZWF0ZSBuZXcgZHVtbXkgZWRnZSBiZXR3ZWVuIHByZXYgYW5kIGR1bW15IG5vZGVcbiAgICB2YXIgZHVtbXlFZGdlID0gdGhpcy5uZXdFZGdlKG51bGwpO1xuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLmFkZChkdW1teUVkZ2UsIHByZXYsIGR1bW15Tm9kZSk7XG5cbiAgICBkdW1teU5vZGVzLmFkZChkdW1teU5vZGUpO1xuICAgIHByZXYgPSBkdW1teU5vZGU7XG4gIH1cblxuICB2YXIgZHVtbXlFZGdlID0gdGhpcy5uZXdFZGdlKG51bGwpO1xuICB0aGlzLmdyYXBoTWFuYWdlci5hZGQoZHVtbXlFZGdlLCBwcmV2LCBlZGdlLnRhcmdldCk7XG5cbiAgdGhpcy5lZGdlVG9EdW1teU5vZGVzLnB1dChlZGdlLCBkdW1teU5vZGVzKTtcblxuICAvLyByZW1vdmUgcmVhbCBlZGdlIGZyb20gZ3JhcGggbWFuYWdlciBpZiBpdCBpcyBpbnRlci1ncmFwaFxuICBpZiAoZWRnZS5pc0ludGVyR3JhcGgoKSlcbiAge1xuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlbW92ZShlZGdlKTtcbiAgfVxuICAvLyBlbHNlLCByZW1vdmUgdGhlIGVkZ2UgZnJvbSB0aGUgY3VycmVudCBncmFwaFxuICBlbHNlXG4gIHtcbiAgICBncmFwaC5yZW1vdmUoZWRnZSk7XG4gIH1cblxuICByZXR1cm4gZHVtbXlOb2Rlcztcbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgY3JlYXRlcyBiZW5kcG9pbnRzIGZvciBlZGdlcyBmcm9tIHRoZSBkdW1teSBub2Rlc1xuICogYXQgbC1sZXZlbC5cbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5jcmVhdGVCZW5kcG9pbnRzRnJvbUR1bW15Tm9kZXMgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgZWRnZXMgPSBbXTtcbiAgZWRnZXMgPSBlZGdlcy5jb25jYXQodGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsRWRnZXMoKSk7XG4gIGVkZ2VzID0gdGhpcy5lZGdlVG9EdW1teU5vZGVzLmtleVNldCgpLmNvbmNhdChlZGdlcyk7XG5cbiAgZm9yICh2YXIgayA9IDA7IGsgPCBlZGdlcy5sZW5ndGg7IGsrKylcbiAge1xuICAgIHZhciBsRWRnZSA9IGVkZ2VzW2tdO1xuXG4gICAgaWYgKGxFZGdlLmJlbmRwb2ludHMubGVuZ3RoID4gMClcbiAgICB7XG4gICAgICB2YXIgcGF0aCA9IHRoaXMuZWRnZVRvRHVtbXlOb2Rlcy5nZXQobEVkZ2UpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspXG4gICAgICB7XG4gICAgICAgIHZhciBkdW1teU5vZGUgPSBwYXRoW2ldO1xuICAgICAgICB2YXIgcCA9IG5ldyBQb2ludEQoZHVtbXlOb2RlLmdldENlbnRlclgoKSxcbiAgICAgICAgICAgICAgICBkdW1teU5vZGUuZ2V0Q2VudGVyWSgpKTtcblxuICAgICAgICAvLyB1cGRhdGUgYmVuZHBvaW50J3MgbG9jYXRpb24gYWNjb3JkaW5nIHRvIGR1bW15IG5vZGVcbiAgICAgICAgdmFyIGVicCA9IGxFZGdlLmJlbmRwb2ludHMuZ2V0KGkpO1xuICAgICAgICBlYnAueCA9IHAueDtcbiAgICAgICAgZWJwLnkgPSBwLnk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBkdW1teSBub2RlLCBkdW1teSBlZGdlcyBpbmNpZGVudCB3aXRoIHRoaXNcbiAgICAgICAgLy8gZHVtbXkgbm9kZSBpcyBhbHNvIHJlbW92ZWQgKHdpdGhpbiB0aGUgcmVtb3ZlIG1ldGhvZClcbiAgICAgICAgZHVtbXlOb2RlLmdldE93bmVyKCkucmVtb3ZlKGR1bW15Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGFkZCB0aGUgcmVhbCBlZGdlIHRvIGdyYXBoXG4gICAgICB0aGlzLmdyYXBoTWFuYWdlci5hZGQobEVkZ2UsIGxFZGdlLnNvdXJjZSwgbEVkZ2UudGFyZ2V0KTtcbiAgICB9XG4gIH1cbn07XG5cbkxheW91dC50cmFuc2Zvcm0gPSBmdW5jdGlvbiAoc2xpZGVyVmFsdWUsIGRlZmF1bHRWYWx1ZSwgbWluRGl2LCBtYXhNdWwpIHtcbiAgaWYgKG1pbkRpdiAhPSB1bmRlZmluZWQgJiYgbWF4TXVsICE9IHVuZGVmaW5lZCkge1xuICAgIHZhciB2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblxuICAgIGlmIChzbGlkZXJWYWx1ZSA8PSA1MClcbiAgICB7XG4gICAgICB2YXIgbWluVmFsdWUgPSBkZWZhdWx0VmFsdWUgLyBtaW5EaXY7XG4gICAgICB2YWx1ZSAtPSAoKGRlZmF1bHRWYWx1ZSAtIG1pblZhbHVlKSAvIDUwKSAqICg1MCAtIHNsaWRlclZhbHVlKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIHZhciBtYXhWYWx1ZSA9IGRlZmF1bHRWYWx1ZSAqIG1heE11bDtcbiAgICAgIHZhbHVlICs9ICgobWF4VmFsdWUgLSBkZWZhdWx0VmFsdWUpIC8gNTApICogKHNsaWRlclZhbHVlIC0gNTApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBlbHNlIHtcbiAgICB2YXIgYSwgYjtcblxuICAgIGlmIChzbGlkZXJWYWx1ZSA8PSA1MClcbiAgICB7XG4gICAgICBhID0gOS4wICogZGVmYXVsdFZhbHVlIC8gNTAwLjA7XG4gICAgICBiID0gZGVmYXVsdFZhbHVlIC8gMTAuMDtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIGEgPSA5LjAgKiBkZWZhdWx0VmFsdWUgLyA1MC4wO1xuICAgICAgYiA9IC04ICogZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiAoYSAqIHNsaWRlclZhbHVlICsgYik7XG4gIH1cbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgZmluZHMgYW5kIHJldHVybnMgdGhlIGNlbnRlciBvZiB0aGUgZ2l2ZW4gbm9kZXMsIGFzc3VtaW5nXG4gKiB0aGF0IHRoZSBnaXZlbiBub2RlcyBmb3JtIGEgdHJlZSBpbiB0aGVtc2VsdmVzLlxuICovXG5MYXlvdXQuZmluZENlbnRlck9mVHJlZSA9IGZ1bmN0aW9uIChub2RlcylcbntcbiAgdmFyIGxpc3QgPSBbXTtcbiAgbGlzdCA9IGxpc3QuY29uY2F0KG5vZGVzKTtcblxuICB2YXIgcmVtb3ZlZE5vZGVzID0gW107XG4gIHZhciByZW1haW5pbmdEZWdyZWVzID0gbmV3IEhhc2hNYXAoKTtcbiAgdmFyIGZvdW5kQ2VudGVyID0gZmFsc2U7XG4gIHZhciBjZW50ZXJOb2RlID0gbnVsbDtcblxuICBpZiAobGlzdC5sZW5ndGggPT0gMSB8fCBsaXN0Lmxlbmd0aCA9PSAyKVxuICB7XG4gICAgZm91bmRDZW50ZXIgPSB0cnVlO1xuICAgIGNlbnRlck5vZGUgPSBsaXN0WzBdO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKVxuICB7XG4gICAgdmFyIG5vZGUgPSBsaXN0W2ldO1xuICAgIHZhciBkZWdyZWUgPSBub2RlLmdldE5laWdoYm9yc0xpc3QoKS5zaXplKCk7XG4gICAgcmVtYWluaW5nRGVncmVlcy5wdXQobm9kZSwgbm9kZS5nZXROZWlnaGJvcnNMaXN0KCkuc2l6ZSgpKTtcblxuICAgIGlmIChkZWdyZWUgPT0gMSlcbiAgICB7XG4gICAgICByZW1vdmVkTm9kZXMucHVzaChub2RlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgdGVtcExpc3QgPSBbXTtcbiAgdGVtcExpc3QgPSB0ZW1wTGlzdC5jb25jYXQocmVtb3ZlZE5vZGVzKTtcblxuICB3aGlsZSAoIWZvdW5kQ2VudGVyKVxuICB7XG4gICAgdmFyIHRlbXBMaXN0MiA9IFtdO1xuICAgIHRlbXBMaXN0MiA9IHRlbXBMaXN0Mi5jb25jYXQodGVtcExpc3QpO1xuICAgIHRlbXBMaXN0ID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgdmFyIG5vZGUgPSBsaXN0W2ldO1xuXG4gICAgICB2YXIgaW5kZXggPSBsaXN0LmluZGV4T2Yobm9kZSk7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBuZWlnaGJvdXJzID0gbm9kZS5nZXROZWlnaGJvcnNMaXN0KCk7XG5cbiAgICAgIE9iamVjdC5rZXlzKG5laWdoYm91cnMuc2V0KS5mb3JFYWNoKGZ1bmN0aW9uKGopIHtcbiAgICAgICAgdmFyIG5laWdoYm91ciA9IG5laWdoYm91cnMuc2V0W2pdO1xuICAgICAgICBpZiAocmVtb3ZlZE5vZGVzLmluZGV4T2YobmVpZ2hib3VyKSA8IDApXG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgb3RoZXJEZWdyZWUgPSByZW1haW5pbmdEZWdyZWVzLmdldChuZWlnaGJvdXIpO1xuICAgICAgICAgIHZhciBuZXdEZWdyZWUgPSBvdGhlckRlZ3JlZSAtIDE7XG5cbiAgICAgICAgICBpZiAobmV3RGVncmVlID09IDEpXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGVtcExpc3QucHVzaChuZWlnaGJvdXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlbWFpbmluZ0RlZ3JlZXMucHV0KG5laWdoYm91ciwgbmV3RGVncmVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlZE5vZGVzID0gcmVtb3ZlZE5vZGVzLmNvbmNhdCh0ZW1wTGlzdCk7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT0gMSB8fCBsaXN0Lmxlbmd0aCA9PSAyKVxuICAgIHtcbiAgICAgIGZvdW5kQ2VudGVyID0gdHJ1ZTtcbiAgICAgIGNlbnRlck5vZGUgPSBsaXN0WzBdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjZW50ZXJOb2RlO1xufTtcblxuLyoqXG4gKiBEdXJpbmcgdGhlIGNvYXJzZW5pbmcgcHJvY2VzcywgdGhpcyBsYXlvdXQgbWF5IGJlIHJlZmVyZW5jZWQgYnkgdHdvIGdyYXBoIG1hbmFnZXJzXG4gKiB0aGlzIHNldHRlciBmdW5jdGlvbiBncmFudHMgYWNjZXNzIHRvIGNoYW5nZSB0aGUgY3VycmVudGx5IGJlaW5nIHVzZWQgZ3JhcGggbWFuYWdlclxuICovXG5MYXlvdXQucHJvdG90eXBlLnNldEdyYXBoTWFuYWdlciA9IGZ1bmN0aW9uIChnbSlcbntcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGF5b3V0O1xuIiwiZnVuY3Rpb24gTGF5b3V0Q29uc3RhbnRzKCkge1xufVxuXG4vKipcbiAqIExheW91dCBRdWFsaXR5XG4gKi9cbkxheW91dENvbnN0YW50cy5QUk9PRl9RVUFMSVRZID0gMDtcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX1FVQUxJVFkgPSAxO1xuTGF5b3V0Q29uc3RhbnRzLkRSQUZUX1FVQUxJVFkgPSAyO1xuXG4vKipcbiAqIERlZmF1bHQgcGFyYW1ldGVyc1xuICovXG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEID0gZmFsc2U7XG4vL0xheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMID0gdHJ1ZTtcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMID0gZmFsc2U7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fT05fTEFZT1VUID0gdHJ1ZTtcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VUID0gZmFsc2U7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fUEVSSU9EID0gNTA7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9VTklGT1JNX0xFQUZfTk9ERV9TSVpFUyA9IGZhbHNlO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogR2VuZXJhbCBvdGhlciBjb25zdGFudHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vKlxuICogTWFyZ2lucyBvZiBhIGdyYXBoIHRvIGJlIGFwcGxpZWQgb24gYm91ZGluZyByZWN0YW5nbGUgb2YgaXRzIGNvbnRlbnRzLiBXZVxuICogYXNzdW1lIG1hcmdpbnMgb24gYWxsIGZvdXIgc2lkZXMgdG8gYmUgdW5pZm9ybS5cbiAqL1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBUEhfTUFSR0lOID0gMTU7XG5cbi8qXG4gKiBXaGV0aGVyIHRvIGNvbnNpZGVyIGxhYmVscyBpbiBub2RlIGRpbWVuc2lvbnMgb3Igbm90XG4gKi9cbkxheW91dENvbnN0YW50cy5OT0RFX0RJTUVOU0lPTlNfSU5DTFVERV9MQUJFTFMgPSBmYWxzZTtcblxuLypcbiAqIERlZmF1bHQgZGltZW5zaW9uIG9mIGEgbm9uLWNvbXBvdW5kIG5vZGUuXG4gKi9cbkxheW91dENvbnN0YW50cy5TSU1QTEVfTk9ERV9TSVpFID0gNDA7XG5cbi8qXG4gKiBEZWZhdWx0IGRpbWVuc2lvbiBvZiBhIG5vbi1jb21wb3VuZCBub2RlLlxuICovXG5MYXlvdXRDb25zdGFudHMuU0lNUExFX05PREVfSEFMRl9TSVpFID0gTGF5b3V0Q29uc3RhbnRzLlNJTVBMRV9OT0RFX1NJWkUgLyAyO1xuXG4vKlxuICogRW1wdHkgY29tcG91bmQgbm9kZSBzaXplLiBXaGVuIGEgY29tcG91bmQgbm9kZSBpcyBlbXB0eSwgaXRzIGJvdGhcbiAqIGRpbWVuc2lvbnMgc2hvdWxkIGJlIG9mIHRoaXMgdmFsdWUuXG4gKi9cbkxheW91dENvbnN0YW50cy5FTVBUWV9DT01QT1VORF9OT0RFX1NJWkUgPSA0MDtcblxuLypcbiAqIE1pbmltdW0gbGVuZ3RoIHRoYXQgYW4gZWRnZSBzaG91bGQgdGFrZSBkdXJpbmcgbGF5b3V0XG4gKi9cbkxheW91dENvbnN0YW50cy5NSU5fRURHRV9MRU5HVEggPSAxO1xuXG4vKlxuICogV29ybGQgYm91bmRhcmllcyB0aGF0IGxheW91dCBvcGVyYXRlcyBvblxuICovXG5MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkgPSAxMDAwMDAwO1xuXG4vKlxuICogV29ybGQgYm91bmRhcmllcyB0aGF0IHJhbmRvbSBwb3NpdGlvbmluZyBjYW4gYmUgcGVyZm9ybWVkIHdpdGhcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlkgPSBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkgLyAxMDAwO1xuXG4vKlxuICogQ29vcmRpbmF0ZXMgb2YgdGhlIHdvcmxkIGNlbnRlclxuICovXG5MYXlvdXRDb25zdGFudHMuV09STERfQ0VOVEVSX1ggPSAxMjAwO1xuTGF5b3V0Q29uc3RhbnRzLldPUkxEX0NFTlRFUl9ZID0gOTAwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExheW91dENvbnN0YW50cztcbiIsImNvbnN0IG5vZGVGcm9tID0gdmFsdWUgPT4gKHsgdmFsdWUsIG5leHQ6IG51bGwsIHByZXY6IG51bGwgfSk7XG5cbmNvbnN0IGFkZCA9ICggcHJldiwgbm9kZSwgbmV4dCwgbGlzdCApID0+IHtcbiAgaWYoIHByZXYgIT09IG51bGwgKXtcbiAgICBwcmV2Lm5leHQgPSBub2RlO1xuICB9IGVsc2Uge1xuICAgIGxpc3QuaGVhZCA9IG5vZGU7XG4gIH1cblxuICBpZiggbmV4dCAhPT0gbnVsbCApe1xuICAgIG5leHQucHJldiA9IG5vZGU7XG4gIH0gZWxzZSB7XG4gICAgbGlzdC50YWlsID0gbm9kZTtcbiAgfVxuXG4gIG5vZGUucHJldiA9IHByZXY7XG4gIG5vZGUubmV4dCA9IG5leHQ7XG5cbiAgbGlzdC5sZW5ndGgrKztcblxuICByZXR1cm4gbm9kZTtcbn07XG5cbmNvbnN0IHJlbW92ZSA9ICggbm9kZSwgbGlzdCApID0+IHtcbiAgbGV0IHsgcHJldiwgbmV4dCB9ID0gbm9kZTtcblxuICBpZiggcHJldiAhPT0gbnVsbCApe1xuICAgIHByZXYubmV4dCA9IG5leHQ7XG4gIH0gZWxzZSB7XG4gICAgbGlzdC5oZWFkID0gbmV4dDtcbiAgfVxuXG4gIGlmKCBuZXh0ICE9PSBudWxsICl7XG4gICAgbmV4dC5wcmV2ID0gcHJldjtcbiAgfSBlbHNlIHtcbiAgICBsaXN0LnRhaWwgPSBwcmV2O1xuICB9XG5cbiAgbm9kZS5wcmV2ID0gbm9kZS5uZXh0ID0gbnVsbDtcblxuICBsaXN0Lmxlbmd0aC0tO1xuXG4gIHJldHVybiBub2RlO1xufTtcblxuY2xhc3MgTGlua2VkTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCB2YWxzICl7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuaGVhZCA9IG51bGw7XG4gICAgdGhpcy50YWlsID0gbnVsbDtcblxuICAgIGlmKCB2YWxzICE9IG51bGwgKXtcbiAgICAgIHZhbHMuZm9yRWFjaCggdiA9PiB0aGlzLnB1c2godikgKTtcbiAgICB9XG4gIH1cblxuICBzaXplKCl7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xuICB9XG5cbiAgaW5zZXJ0QmVmb3JlKCB2YWwsIG90aGVyTm9kZSApe1xuICAgIHJldHVybiBhZGQoIG90aGVyTm9kZS5wcmV2LCBub2RlRnJvbSh2YWwpLCBvdGhlck5vZGUsIHRoaXMgKTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKCB2YWwsIG90aGVyTm9kZSApe1xuICAgIHJldHVybiBhZGQoIG90aGVyTm9kZSwgbm9kZUZyb20odmFsKSwgb3RoZXJOb2RlLm5leHQsIHRoaXMgKTtcbiAgfVxuXG4gIGluc2VydE5vZGVCZWZvcmUoIG5ld05vZGUsIG90aGVyTm9kZSApe1xuICAgIHJldHVybiBhZGQoIG90aGVyTm9kZS5wcmV2LCBuZXdOb2RlLCBvdGhlck5vZGUsIHRoaXMgKTtcbiAgfVxuXG4gIGluc2VydE5vZGVBZnRlciggbmV3Tm9kZSwgb3RoZXJOb2RlICl7XG4gICAgcmV0dXJuIGFkZCggb3RoZXJOb2RlLCBuZXdOb2RlLCBvdGhlck5vZGUubmV4dCwgdGhpcyApO1xuICB9XG5cbiAgcHVzaCggdmFsICl7XG4gICAgcmV0dXJuIGFkZCggdGhpcy50YWlsLCBub2RlRnJvbSh2YWwpLCBudWxsLCB0aGlzICk7XG4gIH1cblxuICB1bnNoaWZ0KCB2YWwgKXtcbiAgICByZXR1cm4gYWRkKCBudWxsLCBub2RlRnJvbSh2YWwpLCB0aGlzLmhlYWQsIHRoaXMgKTtcbiAgfVxuXG4gIHJlbW92ZSggbm9kZSApe1xuICAgIHJldHVybiByZW1vdmUoIG5vZGUsIHRoaXMgKTtcbiAgfVxuXG4gIHBvcCgpe1xuICAgIHJldHVybiByZW1vdmUoIHRoaXMudGFpbCwgdGhpcyApLnZhbHVlO1xuICB9XG5cbiAgcG9wTm9kZSgpe1xuICAgICByZXR1cm4gcmVtb3ZlKCB0aGlzLnRhaWwsIHRoaXMgKTtcbiAgfVxuXG4gIHNoaWZ0KCl7XG4gICAgcmV0dXJuIHJlbW92ZSggdGhpcy5oZWFkLCB0aGlzICkudmFsdWU7XG4gIH1cblxuICBzaGlmdE5vZGUoKXtcbiAgICByZXR1cm4gcmVtb3ZlKCB0aGlzLmhlYWQsIHRoaXMgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmtlZExpc3Q7XG4iLCIvKlxuICpUaGlzIGNsYXNzIGlzIHRoZSBqYXZhc2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBQb2ludC5qYXZhIGNsYXNzIGluIGpka1xuICovXG5mdW5jdGlvbiBQb2ludCh4LCB5LCBwKSB7XG4gIHRoaXMueCA9IG51bGw7XG4gIHRoaXMueSA9IG51bGw7XG4gIGlmICh4ID09IG51bGwgJiYgeSA9PSBudWxsICYmIHAgPT0gbnVsbCkge1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgeCA9PSAnbnVtYmVyJyAmJiB0eXBlb2YgeSA9PSAnbnVtYmVyJyAmJiBwID09IG51bGwpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cbiAgZWxzZSBpZiAoeC5jb25zdHJ1Y3Rvci5uYW1lID09ICdQb2ludCcgJiYgeSA9PSBudWxsICYmIHAgPT0gbnVsbCkge1xuICAgIHAgPSB4O1xuICAgIHRoaXMueCA9IHAueDtcbiAgICB0aGlzLnkgPSBwLnk7XG4gIH1cbn1cblxuUG9pbnQucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLng7XG59XG5cblBvaW50LnByb3RvdHlwZS5nZXRZID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy55O1xufVxuXG5Qb2ludC5wcm90b3R5cGUuZ2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpO1xufVxuXG5Qb2ludC5wcm90b3R5cGUuc2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoeCwgeSwgcCkge1xuICBpZiAoeC5jb25zdHJ1Y3Rvci5uYW1lID09ICdQb2ludCcgJiYgeSA9PSBudWxsICYmIHAgPT0gbnVsbCkge1xuICAgIHAgPSB4O1xuICAgIHRoaXMuc2V0TG9jYXRpb24ocC54LCBwLnkpO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiB4ID09ICdudW1iZXInICYmIHR5cGVvZiB5ID09ICdudW1iZXInICYmIHAgPT0gbnVsbCkge1xuICAgIC8vaWYgYm90aCBwYXJhbWV0ZXJzIGFyZSBpbnRlZ2VyIGp1c3QgbW92ZSAoeCx5KSBsb2NhdGlvblxuICAgIGlmIChwYXJzZUludCh4KSA9PSB4ICYmIHBhcnNlSW50KHkpID09IHkpIHtcbiAgICAgIHRoaXMubW92ZSh4LCB5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnggPSBNYXRoLmZsb29yKHggKyAwLjUpO1xuICAgICAgdGhpcy55ID0gTWF0aC5mbG9vcih5ICsgMC41KTtcbiAgICB9XG4gIH1cbn1cblxuUG9pbnQucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoeCwgeSkge1xuICB0aGlzLnggPSB4O1xuICB0aGlzLnkgPSB5O1xufVxuXG5Qb2ludC5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKGR4LCBkeSkge1xuICB0aGlzLnggKz0gZHg7XG4gIHRoaXMueSArPSBkeTtcbn1cblxuUG9pbnQucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKG9iai5jb25zdHJ1Y3Rvci5uYW1lID09IFwiUG9pbnRcIikge1xuICAgIHZhciBwdCA9IG9iajtcbiAgICByZXR1cm4gKHRoaXMueCA9PSBwdC54KSAmJiAodGhpcy55ID09IHB0LnkpO1xuICB9XG4gIHJldHVybiB0aGlzID09IG9iajtcbn1cblxuUG9pbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IFBvaW50KCkuY29uc3RydWN0b3IubmFtZSArIFwiW3g9XCIgKyB0aGlzLnggKyBcIix5PVwiICsgdGhpcy55ICsgXCJdXCI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9pbnQ7XG4iLCJmdW5jdGlvbiBQb2ludEQoeCwgeSkge1xuICBpZiAoeCA9PSBudWxsICYmIHkgPT0gbnVsbCkge1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cbn1cblxuUG9pbnRELnByb3RvdHlwZS5nZXRYID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMueDtcbn07XG5cblBvaW50RC5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnk7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLnNldFggPSBmdW5jdGlvbiAoeClcbntcbiAgdGhpcy54ID0geDtcbn07XG5cblBvaW50RC5wcm90b3R5cGUuc2V0WSA9IGZ1bmN0aW9uICh5KVxue1xuICB0aGlzLnkgPSB5O1xufTtcblxuUG9pbnRELnByb3RvdHlwZS5nZXREaWZmZXJlbmNlID0gZnVuY3Rpb24gKHB0KVxue1xuICByZXR1cm4gbmV3IERpbWVuc2lvbkQodGhpcy54IC0gcHQueCwgdGhpcy55IC0gcHQueSk7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLmdldENvcHkgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gbmV3IFBvaW50RCh0aGlzLngsIHRoaXMueSk7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uIChkaW0pXG57XG4gIHRoaXMueCArPSBkaW0ud2lkdGg7XG4gIHRoaXMueSArPSBkaW0uaGVpZ2h0O1xuICByZXR1cm4gdGhpcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUG9pbnREO1xuIiwiZnVuY3Rpb24gUmFuZG9tU2VlZCgpIHtcbn1cblJhbmRvbVNlZWQuc2VlZCA9IDE7XG5SYW5kb21TZWVkLnggPSAwO1xuXG5SYW5kb21TZWVkLm5leHREb3VibGUgPSBmdW5jdGlvbiAoKSB7XG4gIFJhbmRvbVNlZWQueCA9IE1hdGguc2luKFJhbmRvbVNlZWQuc2VlZCsrKSAqIDEwMDAwO1xuICByZXR1cm4gUmFuZG9tU2VlZC54IC0gTWF0aC5mbG9vcihSYW5kb21TZWVkLngpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSYW5kb21TZWVkO1xuIiwiZnVuY3Rpb24gUmVjdGFuZ2xlRCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHRoaXMueCA9IDA7XG4gIHRoaXMueSA9IDA7XG4gIHRoaXMud2lkdGggPSAwO1xuICB0aGlzLmhlaWdodCA9IDA7XG5cbiAgaWYgKHggIT0gbnVsbCAmJiB5ICE9IG51bGwgJiYgd2lkdGggIT0gbnVsbCAmJiBoZWlnaHQgIT0gbnVsbCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cbn1cblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0WCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLng7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5zZXRYID0gZnVuY3Rpb24gKHgpXG57XG4gIHRoaXMueCA9IHg7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMueTtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLnNldFkgPSBmdW5jdGlvbiAoeSlcbntcbiAgdGhpcy55ID0geTtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMud2lkdGg7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5zZXRXaWR0aCA9IGZ1bmN0aW9uICh3aWR0aClcbntcbiAgdGhpcy53aWR0aCA9IHdpZHRoO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGhlaWdodClcbntcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRSaWdodCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0Qm90dG9tID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuaW50ZXJzZWN0cyA9IGZ1bmN0aW9uIChhKVxue1xuICBpZiAodGhpcy5nZXRSaWdodCgpIDwgYS54KVxuICB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRoaXMuZ2V0Qm90dG9tKCkgPCBhLnkpXG4gIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoYS5nZXRSaWdodCgpIDwgdGhpcy54KVxuICB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGEuZ2V0Qm90dG9tKCkgPCB0aGlzLnkpXG4gIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldENlbnRlclggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aCAvIDI7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRNaW5YID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuZ2V0WCgpO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0TWF4WCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmdldFgoKSArIHRoaXMud2lkdGg7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRDZW50ZXJZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMjtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldE1pblkgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5nZXRZKCk7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRNYXhZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuZ2V0WSgpICsgdGhpcy5oZWlnaHQ7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRXaWR0aEhhbGYgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy53aWR0aCAvIDI7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRIZWlnaHRIYWxmID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuaGVpZ2h0IC8gMjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVjdGFuZ2xlRDtcbiIsInZhciBQb2ludEQgPSByZXF1aXJlKCcuL1BvaW50RCcpO1xuXG5mdW5jdGlvbiBUcmFuc2Zvcm0oeCwgeSkge1xuICB0aGlzLmx3b3JsZE9yZ1ggPSAwLjA7XG4gIHRoaXMubHdvcmxkT3JnWSA9IDAuMDtcbiAgdGhpcy5sZGV2aWNlT3JnWCA9IDAuMDtcbiAgdGhpcy5sZGV2aWNlT3JnWSA9IDAuMDtcbiAgdGhpcy5sd29ybGRFeHRYID0gMS4wO1xuICB0aGlzLmx3b3JsZEV4dFkgPSAxLjA7XG4gIHRoaXMubGRldmljZUV4dFggPSAxLjA7XG4gIHRoaXMubGRldmljZUV4dFkgPSAxLjA7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRPcmdYID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubHdvcmxkT3JnWDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZE9yZ1ggPSBmdW5jdGlvbiAod294KVxue1xuICB0aGlzLmx3b3JsZE9yZ1ggPSB3b3g7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRPcmdZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubHdvcmxkT3JnWTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZE9yZ1kgPSBmdW5jdGlvbiAod295KVxue1xuICB0aGlzLmx3b3JsZE9yZ1kgPSB3b3k7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRFeHRYID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubHdvcmxkRXh0WDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZEV4dFggPSBmdW5jdGlvbiAod2V4KVxue1xuICB0aGlzLmx3b3JsZEV4dFggPSB3ZXg7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRFeHRZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubHdvcmxkRXh0WTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZEV4dFkgPSBmdW5jdGlvbiAod2V5KVxue1xuICB0aGlzLmx3b3JsZEV4dFkgPSB3ZXk7XG59XG5cbi8qIERldmljZSByZWxhdGVkICovXG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0RGV2aWNlT3JnWCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmxkZXZpY2VPcmdYO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZU9yZ1ggPSBmdW5jdGlvbiAoZG94KVxue1xuICB0aGlzLmxkZXZpY2VPcmdYID0gZG94O1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldERldmljZU9yZ1kgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sZGV2aWNlT3JnWTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXREZXZpY2VPcmdZID0gZnVuY3Rpb24gKGRveSlcbntcbiAgdGhpcy5sZGV2aWNlT3JnWSA9IGRveTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VFeHRYID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubGRldmljZUV4dFg7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0RGV2aWNlRXh0WCA9IGZ1bmN0aW9uIChkZXgpXG57XG4gIHRoaXMubGRldmljZUV4dFggPSBkZXg7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0RGV2aWNlRXh0WSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmxkZXZpY2VFeHRZO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZUV4dFkgPSBmdW5jdGlvbiAoZGV5KVxue1xuICB0aGlzLmxkZXZpY2VFeHRZID0gZGV5O1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnRyYW5zZm9ybVggPSBmdW5jdGlvbiAoeClcbntcbiAgdmFyIHhEZXZpY2UgPSAwLjA7XG4gIHZhciB3b3JsZEV4dFggPSB0aGlzLmx3b3JsZEV4dFg7XG4gIGlmICh3b3JsZEV4dFggIT0gMC4wKVxuICB7XG4gICAgeERldmljZSA9IHRoaXMubGRldmljZU9yZ1ggK1xuICAgICAgICAgICAgKCh4IC0gdGhpcy5sd29ybGRPcmdYKSAqIHRoaXMubGRldmljZUV4dFggLyB3b3JsZEV4dFgpO1xuICB9XG5cbiAgcmV0dXJuIHhEZXZpY2U7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUudHJhbnNmb3JtWSA9IGZ1bmN0aW9uICh5KVxue1xuICB2YXIgeURldmljZSA9IDAuMDtcbiAgdmFyIHdvcmxkRXh0WSA9IHRoaXMubHdvcmxkRXh0WTtcbiAgaWYgKHdvcmxkRXh0WSAhPSAwLjApXG4gIHtcbiAgICB5RGV2aWNlID0gdGhpcy5sZGV2aWNlT3JnWSArXG4gICAgICAgICAgICAoKHkgLSB0aGlzLmx3b3JsZE9yZ1kpICogdGhpcy5sZGV2aWNlRXh0WSAvIHdvcmxkRXh0WSk7XG4gIH1cblxuXG4gIHJldHVybiB5RGV2aWNlO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmludmVyc2VUcmFuc2Zvcm1YID0gZnVuY3Rpb24gKHgpXG57XG4gIHZhciB4V29ybGQgPSAwLjA7XG4gIHZhciBkZXZpY2VFeHRYID0gdGhpcy5sZGV2aWNlRXh0WDtcbiAgaWYgKGRldmljZUV4dFggIT0gMC4wKVxuICB7XG4gICAgeFdvcmxkID0gdGhpcy5sd29ybGRPcmdYICtcbiAgICAgICAgICAgICgoeCAtIHRoaXMubGRldmljZU9yZ1gpICogdGhpcy5sd29ybGRFeHRYIC8gZGV2aWNlRXh0WCk7XG4gIH1cblxuXG4gIHJldHVybiB4V29ybGQ7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuaW52ZXJzZVRyYW5zZm9ybVkgPSBmdW5jdGlvbiAoeSlcbntcbiAgdmFyIHlXb3JsZCA9IDAuMDtcbiAgdmFyIGRldmljZUV4dFkgPSB0aGlzLmxkZXZpY2VFeHRZO1xuICBpZiAoZGV2aWNlRXh0WSAhPSAwLjApXG4gIHtcbiAgICB5V29ybGQgPSB0aGlzLmx3b3JsZE9yZ1kgK1xuICAgICAgICAgICAgKCh5IC0gdGhpcy5sZGV2aWNlT3JnWSkgKiB0aGlzLmx3b3JsZEV4dFkgLyBkZXZpY2VFeHRZKTtcbiAgfVxuICByZXR1cm4geVdvcmxkO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmludmVyc2VUcmFuc2Zvcm1Qb2ludCA9IGZ1bmN0aW9uIChpblBvaW50KVxue1xuICB2YXIgb3V0UG9pbnQgPVxuICAgICAgICAgIG5ldyBQb2ludEQodGhpcy5pbnZlcnNlVHJhbnNmb3JtWChpblBvaW50LngpLFxuICAgICAgICAgICAgICAgICAgdGhpcy5pbnZlcnNlVHJhbnNmb3JtWShpblBvaW50LnkpKTtcbiAgcmV0dXJuIG91dFBvaW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zZm9ybTtcbiIsImZ1bmN0aW9uIFVuaXF1ZUlER2VuZXJldG9yKCkge1xufVxuXG5VbmlxdWVJREdlbmVyZXRvci5sYXN0SUQgPSAwO1xuXG5VbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKFVuaXF1ZUlER2VuZXJldG9yLmlzUHJpbWl0aXZlKG9iaikpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIGlmIChvYmoudW5pcXVlSUQgIT0gbnVsbCkge1xuICAgIHJldHVybiBvYmoudW5pcXVlSUQ7XG4gIH1cbiAgb2JqLnVuaXF1ZUlEID0gVW5pcXVlSURHZW5lcmV0b3IuZ2V0U3RyaW5nKCk7XG4gIFVuaXF1ZUlER2VuZXJldG9yLmxhc3RJRCsrO1xuICByZXR1cm4gb2JqLnVuaXF1ZUlEO1xufVxuXG5VbmlxdWVJREdlbmVyZXRvci5nZXRTdHJpbmcgPSBmdW5jdGlvbiAoaWQpIHtcbiAgaWYgKGlkID09IG51bGwpXG4gICAgaWQgPSBVbmlxdWVJREdlbmVyZXRvci5sYXN0SUQ7XG4gIHJldHVybiBcIk9iamVjdCNcIiArIGlkICsgXCJcIjtcbn1cblxuVW5pcXVlSURHZW5lcmV0b3IuaXNQcmltaXRpdmUgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGFyZztcbiAgcmV0dXJuIGFyZyA9PSBudWxsIHx8ICh0eXBlICE9IFwib2JqZWN0XCIgJiYgdHlwZSAhPSBcImZ1bmN0aW9uXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVuaXF1ZUlER2VuZXJldG9yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRGltZW5zaW9uRCA9IHJlcXVpcmUoJy4vRGltZW5zaW9uRCcpO1xudmFyIEhhc2hNYXAgPSByZXF1aXJlKCcuL0hhc2hNYXAnKTtcbnZhciBIYXNoU2V0ID0gcmVxdWlyZSgnLi9IYXNoU2V0Jyk7XG52YXIgSUdlb21ldHJ5ID0gcmVxdWlyZSgnLi9JR2VvbWV0cnknKTtcbnZhciBJTWF0aCA9IHJlcXVpcmUoJy4vSU1hdGgnKTtcbnZhciBJbnRlZ2VyID0gcmVxdWlyZSgnLi9JbnRlZ2VyJyk7XG52YXIgUG9pbnQgPSByZXF1aXJlKCcuL1BvaW50Jyk7XG52YXIgUG9pbnREID0gcmVxdWlyZSgnLi9Qb2ludEQnKTtcbnZhciBSYW5kb21TZWVkID0gcmVxdWlyZSgnLi9SYW5kb21TZWVkJyk7XG52YXIgUmVjdGFuZ2xlRCA9IHJlcXVpcmUoJy4vUmVjdGFuZ2xlRCcpO1xudmFyIFRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vVHJhbnNmb3JtJyk7XG52YXIgVW5pcXVlSURHZW5lcmV0b3IgPSByZXF1aXJlKCcuL1VuaXF1ZUlER2VuZXJldG9yJyk7XG52YXIgTEdyYXBoT2JqZWN0ID0gcmVxdWlyZSgnLi9MR3JhcGhPYmplY3QnKTtcbnZhciBMR3JhcGggPSByZXF1aXJlKCcuL0xHcmFwaCcpO1xudmFyIExFZGdlID0gcmVxdWlyZSgnLi9MRWRnZScpO1xudmFyIExHcmFwaE1hbmFnZXIgPSByZXF1aXJlKCcuL0xHcmFwaE1hbmFnZXInKTtcbnZhciBMTm9kZSA9IHJlcXVpcmUoJy4vTE5vZGUnKTtcbnZhciBMYXlvdXQgPSByZXF1aXJlKCcuL0xheW91dCcpO1xudmFyIExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vTGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgRkRMYXlvdXQgPSByZXF1aXJlKCcuL0ZETGF5b3V0Jyk7XG52YXIgRkRMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0ZETGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgRkRMYXlvdXRFZGdlID0gcmVxdWlyZSgnLi9GRExheW91dEVkZ2UnKTtcbnZhciBGRExheW91dE5vZGUgPSByZXF1aXJlKCcuL0ZETGF5b3V0Tm9kZScpO1xudmFyIENvU0VDb25zdGFudHMgPSByZXF1aXJlKCcuL0NvU0VDb25zdGFudHMnKTtcbnZhciBDb1NFRWRnZSA9IHJlcXVpcmUoJy4vQ29TRUVkZ2UnKTtcbnZhciBDb1NFR3JhcGggPSByZXF1aXJlKCcuL0NvU0VHcmFwaCcpO1xudmFyIENvU0VHcmFwaE1hbmFnZXIgPSByZXF1aXJlKCcuL0NvU0VHcmFwaE1hbmFnZXInKTtcbnZhciBDb1NFTGF5b3V0ID0gcmVxdWlyZSgnLi9Db1NFTGF5b3V0Jyk7XG52YXIgQ29TRU5vZGUgPSByZXF1aXJlKCcuL0NvU0VOb2RlJyk7XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgLy8gQ2FsbGVkIG9uIGBsYXlvdXRyZWFkeWBcbiAgcmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgfSxcbiAgLy8gQ2FsbGVkIG9uIGBsYXlvdXRzdG9wYFxuICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gIH0sXG4gIC8vIGluY2x1ZGUgbGFiZWxzIGluIG5vZGUgZGltZW5zaW9uc1xuICBub2RlRGltZW5zaW9uc0luY2x1ZGVMYWJlbHM6IGZhbHNlLFxuICAvLyBudW1iZXIgb2YgdGlja3MgcGVyIGZyYW1lOyBoaWdoZXIgaXMgZmFzdGVyIGJ1dCBtb3JlIGplcmt5XG4gIHJlZnJlc2g6IDMwLFxuICAvLyBXaGV0aGVyIHRvIGZpdCB0aGUgbmV0d29yayB2aWV3IGFmdGVyIHdoZW4gZG9uZVxuICBmaXQ6IHRydWUsXG4gIC8vIFBhZGRpbmcgb24gZml0XG4gIHBhZGRpbmc6IDEwLFxuICAvLyBXaGV0aGVyIHRvIGVuYWJsZSBpbmNyZW1lbnRhbCBtb2RlXG4gIHJhbmRvbWl6ZTogdHJ1ZSxcbiAgLy8gTm9kZSByZXB1bHNpb24gKG5vbiBvdmVybGFwcGluZykgbXVsdGlwbGllclxuICBub2RlUmVwdWxzaW9uOiA0NTAwLFxuICAvLyBJZGVhbCBlZGdlIChub24gbmVzdGVkKSBsZW5ndGhcbiAgaWRlYWxFZGdlTGVuZ3RoOiA1MCxcbiAgLy8gRGl2aXNvciB0byBjb21wdXRlIGVkZ2UgZm9yY2VzXG4gIGVkZ2VFbGFzdGljaXR5OiAwLjQ1LFxuICAvLyBOZXN0aW5nIGZhY3RvciAobXVsdGlwbGllcikgdG8gY29tcHV0ZSBpZGVhbCBlZGdlIGxlbmd0aCBmb3IgbmVzdGVkIGVkZ2VzXG4gIG5lc3RpbmdGYWN0b3I6IDAuMSxcbiAgLy8gR3Jhdml0eSBmb3JjZSAoY29uc3RhbnQpXG4gIGdyYXZpdHk6IDAuMjUsXG4gIC8vIE1heGltdW0gbnVtYmVyIG9mIGl0ZXJhdGlvbnMgdG8gcGVyZm9ybVxuICBudW1JdGVyOiAyNTAwLFxuICAvLyBGb3IgZW5hYmxpbmcgdGlsaW5nXG4gIHRpbGU6IHRydWUsXG4gIC8vIFR5cGUgb2YgbGF5b3V0IGFuaW1hdGlvbi4gVGhlIG9wdGlvbiBzZXQgaXMgeydkdXJpbmcnLCAnZW5kJywgZmFsc2V9XG4gIGFuaW1hdGU6ICdlbmQnLFxuICAvLyBEdXJhdGlvbiBmb3IgYW5pbWF0ZTplbmRcbiAgYW5pbWF0aW9uRHVyYXRpb246IDUwMCxcbiAgLy8gUmVwcmVzZW50cyB0aGUgYW1vdW50IG9mIHRoZSB2ZXJ0aWNhbCBzcGFjZSB0byBwdXQgYmV0d2VlbiB0aGUgemVybyBkZWdyZWUgbWVtYmVycyBkdXJpbmcgdGhlIHRpbGluZyBvcGVyYXRpb24oY2FuIGFsc28gYmUgYSBmdW5jdGlvbilcbiAgdGlsaW5nUGFkZGluZ1ZlcnRpY2FsOiAxMCxcbiAgLy8gUmVwcmVzZW50cyB0aGUgYW1vdW50IG9mIHRoZSBob3Jpem9udGFsIHNwYWNlIHRvIHB1dCBiZXR3ZWVuIHRoZSB6ZXJvIGRlZ3JlZSBtZW1iZXJzIGR1cmluZyB0aGUgdGlsaW5nIG9wZXJhdGlvbihjYW4gYWxzbyBiZSBhIGZ1bmN0aW9uKVxuICB0aWxpbmdQYWRkaW5nSG9yaXpvbnRhbDogMTAsXG4gIC8vIEdyYXZpdHkgcmFuZ2UgKGNvbnN0YW50KSBmb3IgY29tcG91bmRzXG4gIGdyYXZpdHlSYW5nZUNvbXBvdW5kOiAxLjUsXG4gIC8vIEdyYXZpdHkgZm9yY2UgKGNvbnN0YW50KSBmb3IgY29tcG91bmRzXG4gIGdyYXZpdHlDb21wb3VuZDogMS4wLFxuICAvLyBHcmF2aXR5IHJhbmdlIChjb25zdGFudClcbiAgZ3Jhdml0eVJhbmdlOiAzLjgsXG4gIC8vIEluaXRpYWwgY29vbGluZyBmYWN0b3IgZm9yIGluY3JlbWVudGFsIGxheW91dFxuICBpbml0aWFsRW5lcmd5T25JbmNyZW1lbnRhbDogMC41XG59O1xuXG5mdW5jdGlvbiBleHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpIHtcbiAgdmFyIG9iaiA9IHt9O1xuXG4gIGZvciAodmFyIGkgaW4gZGVmYXVsdHMpIHtcbiAgICBvYmpbaV0gPSBkZWZhdWx0c1tpXTtcbiAgfVxuXG4gIGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xuICAgIG9ialtpXSA9IG9wdGlvbnNbaV07XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuZnVuY3Rpb24gX0NvU0VMYXlvdXQoX29wdGlvbnMpIHtcbiAgdGhpcy5vcHRpb25zID0gZXh0ZW5kKGRlZmF1bHRzLCBfb3B0aW9ucyk7XG4gIGdldFVzZXJPcHRpb25zKHRoaXMub3B0aW9ucyk7XG59XG5cbnZhciBnZXRVc2VyT3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLm5vZGVSZXB1bHNpb24gIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfUkVQVUxTSU9OX1NUUkVOR1RIID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEggPSBvcHRpb25zLm5vZGVSZXB1bHNpb247XG4gIGlmIChvcHRpb25zLmlkZWFsRWRnZUxlbmd0aCAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggPSBvcHRpb25zLmlkZWFsRWRnZUxlbmd0aDtcbiAgaWYgKG9wdGlvbnMuZWRnZUVsYXN0aWNpdHkgIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfU1BSSU5HX1NUUkVOR1RIID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9TUFJJTkdfU1RSRU5HVEggPSBvcHRpb25zLmVkZ2VFbGFzdGljaXR5O1xuICBpZiAob3B0aW9ucy5uZXN0aW5nRmFjdG9yICE9IG51bGwpXG4gICAgQ29TRUNvbnN0YW50cy5QRVJfTEVWRUxfSURFQUxfRURHRV9MRU5HVEhfRkFDVE9SID0gRkRMYXlvdXRDb25zdGFudHMuUEVSX0xFVkVMX0lERUFMX0VER0VfTEVOR1RIX0ZBQ1RPUiA9IG9wdGlvbnMubmVzdGluZ0ZhY3RvcjtcbiAgaWYgKG9wdGlvbnMuZ3Jhdml0eSAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1NUUkVOR1RIID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1NUUkVOR1RIID0gb3B0aW9ucy5ncmF2aXR5O1xuICBpZiAob3B0aW9ucy5udW1JdGVyICE9IG51bGwpXG4gICAgQ29TRUNvbnN0YW50cy5NQVhfSVRFUkFUSU9OUyA9IEZETGF5b3V0Q29uc3RhbnRzLk1BWF9JVEVSQVRJT05TID0gb3B0aW9ucy5udW1JdGVyO1xuICBpZiAob3B0aW9ucy5ncmF2aXR5UmFuZ2UgIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9SQU5HRV9GQUNUT1IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SID0gb3B0aW9ucy5ncmF2aXR5UmFuZ2U7XG4gIGlmKG9wdGlvbnMuZ3Jhdml0eUNvbXBvdW5kICE9IG51bGwpXG4gICAgQ29TRUNvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfU1RSRU5HVEggPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfU1RSRU5HVEggPSBvcHRpb25zLmdyYXZpdHlDb21wb3VuZDtcbiAgaWYob3B0aW9ucy5ncmF2aXR5UmFuZ2VDb21wb3VuZCAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1IgPSBvcHRpb25zLmdyYXZpdHlSYW5nZUNvbXBvdW5kO1xuICBpZiAob3B0aW9ucy5pbml0aWFsRW5lcmd5T25JbmNyZW1lbnRhbCAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUwgPSBvcHRpb25zLmluaXRpYWxFbmVyZ3lPbkluY3JlbWVudGFsO1xuXG4gIENvU0VDb25zdGFudHMuTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTID0gRkRMYXlvdXRDb25zdGFudHMuTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTID0gTGF5b3V0Q29uc3RhbnRzLk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyA9IG9wdGlvbnMubm9kZURpbWVuc2lvbnNJbmNsdWRlTGFiZWxzO1xuICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUwgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUwgPVxuICAgICAgICAgICEob3B0aW9ucy5yYW5kb21pemUpO1xuICBDb1NFQ29uc3RhbnRzLkFOSU1BVEUgPSBGRExheW91dENvbnN0YW50cy5BTklNQVRFID0gTGF5b3V0Q29uc3RhbnRzLkFOSU1BVEUgPSBvcHRpb25zLmFuaW1hdGU7XG4gIENvU0VDb25zdGFudHMuVElMRSA9IG9wdGlvbnMudGlsZTtcbiAgQ29TRUNvbnN0YW50cy5USUxJTkdfUEFERElOR19WRVJUSUNBTCA9IFxuICAgICAgICAgIHR5cGVvZiBvcHRpb25zLnRpbGluZ1BhZGRpbmdWZXJ0aWNhbCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMudGlsaW5nUGFkZGluZ1ZlcnRpY2FsLmNhbGwoKSA6IG9wdGlvbnMudGlsaW5nUGFkZGluZ1ZlcnRpY2FsO1xuICBDb1NFQ29uc3RhbnRzLlRJTElOR19QQURESU5HX0hPUklaT05UQUwgPSBcbiAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy50aWxpbmdQYWRkaW5nSG9yaXpvbnRhbCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMudGlsaW5nUGFkZGluZ0hvcml6b250YWwuY2FsbCgpIDogb3B0aW9ucy50aWxpbmdQYWRkaW5nSG9yaXpvbnRhbDtcbn07XG5cbl9Db1NFTGF5b3V0LnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciByZWFkeTtcbiAgdmFyIGZyYW1lSWQ7XG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICB2YXIgaWRUb0xOb2RlID0gdGhpcy5pZFRvTE5vZGUgPSB7fTtcbiAgdmFyIGxheW91dCA9IHRoaXMubGF5b3V0ID0gbmV3IENvU0VMYXlvdXQoKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBcbiAgc2VsZi5zdG9wcGVkID0gZmFsc2U7XG5cbiAgdGhpcy5jeSA9IHRoaXMub3B0aW9ucy5jeTtcblxuICB0aGlzLmN5LnRyaWdnZXIoeyB0eXBlOiAnbGF5b3V0c3RhcnQnLCBsYXlvdXQ6IHRoaXMgfSk7XG5cbiAgdmFyIGdtID0gbGF5b3V0Lm5ld0dyYXBoTWFuYWdlcigpO1xuICB0aGlzLmdtID0gZ207XG5cbiAgdmFyIG5vZGVzID0gdGhpcy5vcHRpb25zLmVsZXMubm9kZXMoKTtcbiAgdmFyIGVkZ2VzID0gdGhpcy5vcHRpb25zLmVsZXMuZWRnZXMoKTtcblxuICB0aGlzLnJvb3QgPSBnbS5hZGRSb290KCk7XG4gIHRoaXMucHJvY2Vzc0NoaWxkcmVuTGlzdCh0aGlzLnJvb3QsIHRoaXMuZ2V0VG9wTW9zdE5vZGVzKG5vZGVzKSwgbGF5b3V0KTtcblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWRnZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZWRnZSA9IGVkZ2VzW2ldO1xuICAgIHZhciBzb3VyY2VOb2RlID0gdGhpcy5pZFRvTE5vZGVbZWRnZS5kYXRhKFwic291cmNlXCIpXTtcbiAgICB2YXIgdGFyZ2V0Tm9kZSA9IHRoaXMuaWRUb0xOb2RlW2VkZ2UuZGF0YShcInRhcmdldFwiKV07XG4gICAgaWYoc291cmNlTm9kZS5nZXRFZGdlc0JldHdlZW4odGFyZ2V0Tm9kZSkubGVuZ3RoID09IDApe1xuICAgICAgdmFyIGUxID0gZ20uYWRkKGxheW91dC5uZXdFZGdlKCksIHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpO1xuICAgICAgZTEuaWQgPSBlZGdlLmlkKCk7XG4gICAgfVxuICB9XG4gIFxuICAgdmFyIGdldFBvc2l0aW9ucyA9IGZ1bmN0aW9uKGVsZSwgaSl7XG4gICAgaWYodHlwZW9mIGVsZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgZWxlID0gaTtcbiAgICB9XG4gICAgdmFyIHRoZUlkID0gZWxlLmRhdGEoJ2lkJyk7XG4gICAgdmFyIGxOb2RlID0gc2VsZi5pZFRvTE5vZGVbdGhlSWRdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGxOb2RlLmdldFJlY3QoKS5nZXRDZW50ZXJYKCksXG4gICAgICB5OiBsTm9kZS5nZXRSZWN0KCkuZ2V0Q2VudGVyWSgpXG4gICAgfTtcbiAgfTtcbiAgXG4gIC8qXG4gICAqIFJlcG9zaXRpb24gbm9kZXMgaW4gaXRlcmF0aW9ucyBhbmltYXRlZGx5XG4gICAqL1xuICB2YXIgaXRlcmF0ZUFuaW1hdGVkID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRoaWdzIHRvIHBlcmZvcm0gYWZ0ZXIgbm9kZXMgYXJlIHJlcG9zaXRpb25lZCBvbiBzY3JlZW5cbiAgICB2YXIgYWZ0ZXJSZXBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAob3B0aW9ucy5maXQpIHtcbiAgICAgICAgb3B0aW9ucy5jeS5maXQob3B0aW9ucy5lbGVzLm5vZGVzKCksIG9wdGlvbnMucGFkZGluZyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghcmVhZHkpIHtcbiAgICAgICAgcmVhZHkgPSB0cnVlO1xuICAgICAgICBzZWxmLmN5Lm9uZSgnbGF5b3V0cmVhZHknLCBvcHRpb25zLnJlYWR5KTtcbiAgICAgICAgc2VsZi5jeS50cmlnZ2VyKHt0eXBlOiAnbGF5b3V0cmVhZHknLCBsYXlvdXQ6IHNlbGZ9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIHZhciB0aWNrc1BlckZyYW1lID0gc2VsZi5vcHRpb25zLnJlZnJlc2g7XG4gICAgdmFyIGlzRG9uZTtcblxuICAgIGZvciggdmFyIGkgPSAwOyBpIDwgdGlja3NQZXJGcmFtZSAmJiAhaXNEb25lOyBpKysgKXtcbiAgICAgIGlzRG9uZSA9IHNlbGYuc3RvcHBlZCB8fCBzZWxmLmxheW91dC50aWNrKCk7XG4gICAgfVxuICAgIFxuICAgIC8vIElmIGxheW91dCBpcyBkb25lXG4gICAgaWYgKGlzRG9uZSkge1xuICAgICAgLy8gSWYgdGhlIGxheW91dCBpcyBub3QgYSBzdWJsYXlvdXQgYW5kIGl0IGlzIHN1Y2Nlc3NmdWwgcGVyZm9ybSBwb3N0IGxheW91dC5cbiAgICAgIGlmIChsYXlvdXQuY2hlY2tMYXlvdXRTdWNjZXNzKCkgJiYgIWxheW91dC5pc1N1YkxheW91dCkge1xuICAgICAgICBsYXlvdXQuZG9Qb3N0TGF5b3V0KCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIElmIGxheW91dCBoYXMgYSB0aWxpbmdQb3N0TGF5b3V0IGZ1bmN0aW9uIHByb3BlcnR5IGNhbGwgaXQuXG4gICAgICBpZiAobGF5b3V0LnRpbGluZ1Bvc3RMYXlvdXQpIHtcbiAgICAgICAgbGF5b3V0LnRpbGluZ1Bvc3RMYXlvdXQoKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgbGF5b3V0LmlzTGF5b3V0RmluaXNoZWQgPSB0cnVlO1xuICAgICAgXG4gICAgICBzZWxmLm9wdGlvbnMuZWxlcy5ub2RlcygpLnBvc2l0aW9ucyhnZXRQb3NpdGlvbnMpO1xuICAgICAgXG4gICAgICBhZnRlclJlcG9zaXRpb24oKTtcbiAgICAgIFxuICAgICAgLy8gdHJpZ2dlciBsYXlvdXRzdG9wIHdoZW4gdGhlIGxheW91dCBzdG9wcyAoZS5nLiBmaW5pc2hlcylcbiAgICAgIHNlbGYuY3kub25lKCdsYXlvdXRzdG9wJywgc2VsZi5vcHRpb25zLnN0b3ApO1xuICAgICAgc2VsZi5jeS50cmlnZ2VyKHsgdHlwZTogJ2xheW91dHN0b3AnLCBsYXlvdXQ6IHNlbGYgfSk7XG5cbiAgICAgIGlmIChmcmFtZUlkKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lSWQpO1xuICAgICAgfVxuICAgICAgXG4gICAgICByZWFkeSA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB2YXIgYW5pbWF0aW9uRGF0YSA9IHNlbGYubGF5b3V0LmdldFBvc2l0aW9uc0RhdGEoKTsgLy8gR2V0IHBvc2l0aW9ucyBvZiBsYXlvdXQgbm9kZXMgbm90ZSB0aGF0IGFsbCBub2RlcyBtYXkgbm90IGJlIGxheW91dCBub2RlcyBiZWNhdXNlIG9mIHRpbGluZ1xuICAgIFxuICAgIC8vIFBvc2l0aW9uIG5vZGVzLCBmb3IgdGhlIG5vZGVzIHdob3NlIGlkIGRvZXMgbm90IGluY2x1ZGVkIGluIGRhdGEgKGJlY2F1c2UgdGhleSBhcmUgcmVtb3ZlZCBmcm9tIHRoZWlyIHBhcmVudHMgYW5kIGluY2x1ZGVkIGluIGR1bW15IGNvbXBvdW5kcylcbiAgICAvLyB1c2UgcG9zaXRpb24gb2YgdGhlaXIgYW5jZXN0b3JzIG9yIGR1bW15IGFuY2VzdG9yc1xuICAgIG9wdGlvbnMuZWxlcy5ub2RlcygpLnBvc2l0aW9ucyhmdW5jdGlvbiAoZWxlLCBpKSB7XG4gICAgICBpZiAodHlwZW9mIGVsZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBlbGUgPSBpO1xuICAgICAgfVxuICAgICAgdmFyIHRoZUlkID0gZWxlLmlkKCk7XG4gICAgICB2YXIgcE5vZGUgPSBhbmltYXRpb25EYXRhW3RoZUlkXTtcbiAgICAgIHZhciB0ZW1wID0gZWxlO1xuICAgICAgLy8gSWYgcE5vZGUgaXMgdW5kZWZpbmVkIHNlYXJjaCB1bnRpbCBmaW5kaW5nIHBvc2l0aW9uIGRhdGEgb2YgaXRzIGZpcnN0IGFuY2VzdG9yIChJdCBtYXkgYmUgZHVtbXkgYXMgd2VsbClcbiAgICAgIHdoaWxlIChwTm9kZSA9PSBudWxsKSB7XG4gICAgICAgIHBOb2RlID0gYW5pbWF0aW9uRGF0YVt0ZW1wLmRhdGEoJ3BhcmVudCcpXSB8fCBhbmltYXRpb25EYXRhWydEdW1teUNvbXBvdW5kXycgKyB0ZW1wLmRhdGEoJ3BhcmVudCcpXTtcbiAgICAgICAgYW5pbWF0aW9uRGF0YVt0aGVJZF0gPSBwTm9kZTtcbiAgICAgICAgdGVtcCA9IHRlbXAucGFyZW50KClbMF07XG4gICAgICAgIGlmKHRlbXAgPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYocE5vZGUgIT0gbnVsbCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeDogcE5vZGUueCxcbiAgICAgICAgICB5OiBwTm9kZS55XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IGVsZS54LFxuICAgICAgICAgIHk6IGVsZS55XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBhZnRlclJlcG9zaXRpb24oKTtcblxuICAgIGZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaXRlcmF0ZUFuaW1hdGVkKTtcbiAgfTtcbiAgXG4gIC8qXG4gICogTGlzdGVuICdsYXlvdXRzdGFydGVkJyBldmVudCBhbmQgc3RhcnQgYW5pbWF0ZWQgaXRlcmF0aW9uIGlmIGFuaW1hdGUgb3B0aW9uIGlzICdkdXJpbmcnXG4gICovXG4gIGxheW91dC5hZGRMaXN0ZW5lcignbGF5b3V0c3RhcnRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2VsZi5vcHRpb25zLmFuaW1hdGUgPT09ICdkdXJpbmcnKSB7XG4gICAgICBmcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGl0ZXJhdGVBbmltYXRlZCk7XG4gICAgfVxuICB9KTtcbiAgXG4gIGxheW91dC5ydW5MYXlvdXQoKTsgLy8gUnVuIGNvc2UgbGF5b3V0XG4gIFxuICAvKlxuICAgKiBJZiBhbmltYXRlIG9wdGlvbiBpcyBub3QgJ2R1cmluZycgKCdlbmQnIG9yIGZhbHNlKSBwZXJmb3JtIHRoZXNlIGhlcmUgKElmIGl0IGlzICdkdXJpbmcnIHNpbWlsYXIgdGhpbmdzIGFyZSBhbHJlYWR5IHBlcmZvcm1lZClcbiAgICovXG4gIGlmKHRoaXMub3B0aW9ucy5hbmltYXRlICE9PSBcImR1cmluZ1wiKXtcbiAgICBzZWxmLm9wdGlvbnMuZWxlcy5ub2RlcygpLm5vdChcIjpwYXJlbnRcIikubGF5b3V0UG9zaXRpb25zKHNlbGYsIHNlbGYub3B0aW9ucywgZ2V0UG9zaXRpb25zKTsgLy8gVXNlIGxheW91dCBwb3NpdGlvbnMgdG8gcmVwb3NpdGlvbiB0aGUgbm9kZXMgaXQgY29uc2lkZXJzIHRoZSBvcHRpb25zIHBhcmFtZXRlclxuICAgIHJlYWR5ID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpczsgLy8gY2hhaW5pbmdcbn07XG5cbi8vR2V0IHRoZSB0b3AgbW9zdCBvbmVzIG9mIGEgbGlzdCBvZiBub2Rlc1xuX0NvU0VMYXlvdXQucHJvdG90eXBlLmdldFRvcE1vc3ROb2RlcyA9IGZ1bmN0aW9uKG5vZGVzKSB7XG4gIHZhciBub2Rlc01hcCA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBub2Rlc01hcFtub2Rlc1tpXS5pZCgpXSA9IHRydWU7XG4gIH1cbiAgdmFyIHJvb3RzID0gbm9kZXMuZmlsdGVyKGZ1bmN0aW9uIChlbGUsIGkpIHtcbiAgICAgIGlmKHR5cGVvZiBlbGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgZWxlID0gaTtcbiAgICAgIH1cbiAgICAgIHZhciBwYXJlbnQgPSBlbGUucGFyZW50KClbMF07XG4gICAgICB3aGlsZShwYXJlbnQgIT0gbnVsbCl7XG4gICAgICAgIGlmKG5vZGVzTWFwW3BhcmVudC5pZCgpXSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQoKVswXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gcm9vdHM7XG59O1xuXG5fQ29TRUxheW91dC5wcm90b3R5cGUucHJvY2Vzc0NoaWxkcmVuTGlzdCA9IGZ1bmN0aW9uIChwYXJlbnQsIGNoaWxkcmVuLCBsYXlvdXQpIHtcbiAgdmFyIHNpemUgPSBjaGlsZHJlbi5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgdmFyIHRoZUNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgdmFyIGNoaWxkcmVuX29mX2NoaWxkcmVuID0gdGhlQ2hpbGQuY2hpbGRyZW4oKTtcbiAgICB2YXIgdGhlTm9kZTsgICAgXG5cbiAgICB2YXIgZGltZW5zaW9ucyA9IHRoZUNoaWxkLmxheW91dERpbWVuc2lvbnMoe1xuICAgICAgbm9kZURpbWVuc2lvbnNJbmNsdWRlTGFiZWxzOiB0aGlzLm9wdGlvbnMubm9kZURpbWVuc2lvbnNJbmNsdWRlTGFiZWxzXG4gICAgfSk7XG5cbiAgICBpZiAodGhlQ2hpbGQub3V0ZXJXaWR0aCgpICE9IG51bGxcbiAgICAgICAgICAgICYmIHRoZUNoaWxkLm91dGVySGVpZ2h0KCkgIT0gbnVsbCkge1xuICAgICAgdGhlTm9kZSA9IHBhcmVudC5hZGQobmV3IENvU0VOb2RlKGxheW91dC5ncmFwaE1hbmFnZXIsXG4gICAgICAgICAgICAgIG5ldyBQb2ludEQodGhlQ2hpbGQucG9zaXRpb24oJ3gnKSAtIGRpbWVuc2lvbnMudyAvIDIsIHRoZUNoaWxkLnBvc2l0aW9uKCd5JykgLSBkaW1lbnNpb25zLmggLyAyKSxcbiAgICAgICAgICAgICAgbmV3IERpbWVuc2lvbkQocGFyc2VGbG9hdChkaW1lbnNpb25zLncpLCBwYXJzZUZsb2F0KGRpbWVuc2lvbnMuaCkpKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhlTm9kZSA9IHBhcmVudC5hZGQobmV3IENvU0VOb2RlKHRoaXMuZ3JhcGhNYW5hZ2VyKSk7XG4gICAgfVxuICAgIC8vIEF0dGFjaCBpZCB0byB0aGUgbGF5b3V0IG5vZGVcbiAgICB0aGVOb2RlLmlkID0gdGhlQ2hpbGQuZGF0YShcImlkXCIpO1xuICAgIC8vIEF0dGFjaCB0aGUgcGFkZGluZ3Mgb2YgY3kgbm9kZSB0byBsYXlvdXQgbm9kZVxuICAgIHRoZU5vZGUucGFkZGluZ0xlZnQgPSBwYXJzZUludCggdGhlQ2hpbGQuY3NzKCdwYWRkaW5nJykgKTtcbiAgICB0aGVOb2RlLnBhZGRpbmdUb3AgPSBwYXJzZUludCggdGhlQ2hpbGQuY3NzKCdwYWRkaW5nJykgKTtcbiAgICB0aGVOb2RlLnBhZGRpbmdSaWdodCA9IHBhcnNlSW50KCB0aGVDaGlsZC5jc3MoJ3BhZGRpbmcnKSApO1xuICAgIHRoZU5vZGUucGFkZGluZ0JvdHRvbSA9IHBhcnNlSW50KCB0aGVDaGlsZC5jc3MoJ3BhZGRpbmcnKSApO1xuICAgIFxuICAgIC8vQXR0YWNoIHRoZSBsYWJlbCBwcm9wZXJ0aWVzIHRvIGNvbXBvdW5kIGlmIGxhYmVscyB3aWxsIGJlIGluY2x1ZGVkIGluIG5vZGUgZGltZW5zaW9ucyAgXG4gICAgaWYodGhpcy5vcHRpb25zLm5vZGVEaW1lbnNpb25zSW5jbHVkZUxhYmVscyl7XG4gICAgICBpZih0aGVDaGlsZC5pc1BhcmVudCgpKXtcbiAgICAgICAgICB2YXIgbGFiZWxXaWR0aCA9IHRoZUNoaWxkLmJvdW5kaW5nQm94KHsgaW5jbHVkZUxhYmVsczogdHJ1ZSwgaW5jbHVkZU5vZGVzOiBmYWxzZSB9KS53OyAgICAgICAgICBcbiAgICAgICAgICB2YXIgbGFiZWxIZWlnaHQgPSB0aGVDaGlsZC5ib3VuZGluZ0JveCh7IGluY2x1ZGVMYWJlbHM6IHRydWUsIGluY2x1ZGVOb2RlczogZmFsc2UgfSkuaDtcbiAgICAgICAgICB2YXIgbGFiZWxQb3MgPSB0aGVDaGlsZC5jc3MoXCJ0ZXh0LWhhbGlnblwiKTtcbiAgICAgICAgICB0aGVOb2RlLmxhYmVsV2lkdGggPSBsYWJlbFdpZHRoO1xuICAgICAgICAgIHRoZU5vZGUubGFiZWxIZWlnaHQgPSBsYWJlbEhlaWdodDtcbiAgICAgICAgICB0aGVOb2RlLmxhYmVsUG9zID0gbGFiZWxQb3M7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIE1hcCB0aGUgbGF5b3V0IG5vZGVcbiAgICB0aGlzLmlkVG9MTm9kZVt0aGVDaGlsZC5kYXRhKFwiaWRcIildID0gdGhlTm9kZTtcblxuICAgIGlmIChpc05hTih0aGVOb2RlLnJlY3QueCkpIHtcbiAgICAgIHRoZU5vZGUucmVjdC54ID0gMDtcbiAgICB9XG5cbiAgICBpZiAoaXNOYU4odGhlTm9kZS5yZWN0LnkpKSB7XG4gICAgICB0aGVOb2RlLnJlY3QueSA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkcmVuX29mX2NoaWxkcmVuICE9IG51bGwgJiYgY2hpbGRyZW5fb2ZfY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIHRoZU5ld0dyYXBoO1xuICAgICAgdGhlTmV3R3JhcGggPSBsYXlvdXQuZ2V0R3JhcGhNYW5hZ2VyKCkuYWRkKGxheW91dC5uZXdHcmFwaCgpLCB0aGVOb2RlKTtcbiAgICAgIHRoaXMucHJvY2Vzc0NoaWxkcmVuTGlzdCh0aGVOZXdHcmFwaCwgY2hpbGRyZW5fb2ZfY2hpbGRyZW4sIGxheW91dCk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEBicmllZiA6IGNhbGxlZCBvbiBjb250aW51b3VzIGxheW91dHMgdG8gc3RvcCB0aGVtIGJlZm9yZSB0aGV5IGZpbmlzaFxuICovXG5fQ29TRUxheW91dC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5zdG9wcGVkID0gdHJ1ZTtcblxuICByZXR1cm4gdGhpczsgLy8gY2hhaW5pbmdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0KGN5dG9zY2FwZSkge1xuICByZXR1cm4gX0NvU0VMYXlvdXQ7XG59O1xuIiwidmFyIENvU0VOb2RlID0gcmVxdWlyZSgnLi4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvQ29TRU5vZGUnKTtcbnZhciBGRExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0ZETGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgSU1hdGggPSByZXF1aXJlKCcuLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9JTWF0aCcpO1xuXG5Db1NFTm9kZS5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBsYXlvdXQgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRMYXlvdXQoKTtcbiAgdGhpcy5kaXNwbGFjZW1lbnRYID0gbGF5b3V0LmNvb2xpbmdGYWN0b3IgKlxuICAgICAgICAgICh0aGlzLnNwcmluZ0ZvcmNlWCArIHRoaXMucmVwdWxzaW9uRm9yY2VYICsgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWCkgLyB0aGlzLm5vT2ZDaGlsZHJlbjtcbiAgdGhpcy5kaXNwbGFjZW1lbnRZID0gbGF5b3V0LmNvb2xpbmdGYWN0b3IgKlxuICAgICAgICAgICh0aGlzLnNwcmluZ0ZvcmNlWSArIHRoaXMucmVwdWxzaW9uRm9yY2VZICsgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWSkgLyB0aGlzLm5vT2ZDaGlsZHJlbjtcblxuXG4gIGlmIChNYXRoLmFicyh0aGlzLmRpc3BsYWNlbWVudFgpID4gbGF5b3V0LmNvb2xpbmdGYWN0b3IgKiBsYXlvdXQubWF4Tm9kZURpc3BsYWNlbWVudClcbiAge1xuICAgIHRoaXMuZGlzcGxhY2VtZW50WCA9IGxheW91dC5jb29saW5nRmFjdG9yICogbGF5b3V0Lm1heE5vZGVEaXNwbGFjZW1lbnQgKlxuICAgICAgICAgICAgSU1hdGguc2lnbih0aGlzLmRpc3BsYWNlbWVudFgpO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKHRoaXMuZGlzcGxhY2VtZW50WSkgPiBsYXlvdXQuY29vbGluZ0ZhY3RvciAqIGxheW91dC5tYXhOb2RlRGlzcGxhY2VtZW50KVxuICB7XG4gICAgdGhpcy5kaXNwbGFjZW1lbnRZID0gbGF5b3V0LmNvb2xpbmdGYWN0b3IgKiBsYXlvdXQubWF4Tm9kZURpc3BsYWNlbWVudCAqXG4gICAgICAgICAgICBJTWF0aC5zaWduKHRoaXMuZGlzcGxhY2VtZW50WSk7XG4gIH1cblxuICBpZiAoRkRMYXlvdXRDb25zdGFudHMuRVhDTFVERURfTk9ERVNbdGhpcy5pZF0pIHtcbiAgICB0aGlzLmRpc3BsYWNlbWVudFggKj0gRkRMYXlvdXRDb25zdGFudHMuZXhjbHVkZWROb2RlTW92ZUZhY3RvcjtcbiAgICB0aGlzLmRpc3BsYWNlbWVudFkgKj0gRkRMYXlvdXRDb25zdGFudHMuZXhjbHVkZWROb2RlTW92ZUZhY3RvcjtcbiAgfVxuXG4gIC8vIGEgc2ltcGxlIG5vZGUsIGp1c3QgbW92ZSBpdFxuICBpZiAodGhpcy5jaGlsZCA9PSBudWxsKVxuICB7XG4gICAgdGhpcy5tb3ZlQnkodGhpcy5kaXNwbGFjZW1lbnRYLCB0aGlzLmRpc3BsYWNlbWVudFkpO1xuICB9XG4gIC8vIGFuIGVtcHR5IGNvbXBvdW5kIG5vZGUsIGFnYWluIGp1c3QgbW92ZSBpdFxuICBlbHNlIGlmICh0aGlzLmNoaWxkLmdldE5vZGVzKCkubGVuZ3RoID09IDApXG4gIHtcbiAgICB0aGlzLm1vdmVCeSh0aGlzLmRpc3BsYWNlbWVudFgsIHRoaXMuZGlzcGxhY2VtZW50WSk7XG4gIH1cbiAgLy8gbm9uLWVtcHR5IGNvbXBvdW5kIG5vZGUsIHByb3BvZ2F0ZSBtb3ZlbWVudCB0byBjaGlsZHJlbiBhcyB3ZWxsXG4gIGVsc2VcbiAge1xuICAgIHRoaXMucHJvcG9nYXRlRGlzcGxhY2VtZW50VG9DaGlsZHJlbih0aGlzLmRpc3BsYWNlbWVudFgsXG4gICAgICAgICAgICB0aGlzLmRpc3BsYWNlbWVudFkpO1xuICB9XG5cbiAgbGF5b3V0LnRvdGFsRGlzcGxhY2VtZW50ICs9XG4gICAgICAgICAgTWF0aC5hYnModGhpcy5kaXNwbGFjZW1lbnRYKSArIE1hdGguYWJzKHRoaXMuZGlzcGxhY2VtZW50WSk7XG5cbiAgdGhpcy5zcHJpbmdGb3JjZVggPSAwO1xuICB0aGlzLnNwcmluZ0ZvcmNlWSA9IDA7XG4gIHRoaXMucmVwdWxzaW9uRm9yY2VYID0gMDtcbiAgdGhpcy5yZXB1bHNpb25Gb3JjZVkgPSAwO1xuICB0aGlzLmdyYXZpdGF0aW9uRm9yY2VYID0gMDtcbiAgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWSA9IDA7XG4gIHRoaXMuZGlzcGxhY2VtZW50WCA9IDA7XG4gIHRoaXMuZGlzcGxhY2VtZW50WSA9IDA7XG59O1xuIiwiaW1wb3J0ICcuL2Nvc2UtYmlsa2VudC1tb2RpZmljYXRpb24uanMnO1xuaW1wb3J0IHtjcmVhdGVIZWFkbGVzc0luc3RhbmNlLCBhcHBseU1lcmdlZExheW91dCwgYXBwbHlJbnRlckxheWVkTGF5b3V0LCBhcHBseUV4dGVuZGVkSW50ZXJMYXllZExheW91dH0gZnJvbSAnLi9sYXlvdXRzLmpzJztcbmNvbnN0IGdldExheW91dCA9IHJlcXVpcmUoJy4uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0Jyk7XG52YXIgRkRMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9GRExheW91dENvbnN0YW50cycpO1xuXG4vLyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBvbiBhIGN5dG9zY2FwZSBsaWIgcmVmXG5sZXQgcmVnaXN0ZXIgPSBmdW5jdGlvbiggY3l0b3NjYXBlICl7XG5cdGlmKCAhY3l0b3NjYXBlICl7IHJldHVybjsgfSAvLyBjYW4ndCByZWdpc3RlciBpZiBjeXRvc2NhcGUgdW5zcGVjaWZpZWRcblxuXHRjcmVhdGVIZWFkbGVzc0luc3RhbmNlKGN5dG9zY2FwZSk7XG5cblx0bGV0IExheW91dCA9IGdldExheW91dChjeXRvc2NhcGUpO1xuXHRsZXQgb3JnUHJvdG90eXBlID0gTGF5b3V0LnByb3RvdHlwZTtcblxuXHRsZXQgZGVmYXVsdHMgPSBuZXcgTGF5b3V0KHt9KS5vcHRpb25zO1xuXG5cdGZ1bmN0aW9uIGV4dGVuZChkZWZhdWx0cywgb3B0aW9ucykge1xuXHRcdHZhciBvYmogPSB7fTtcblxuXHRcdGZvciAodmFyIGkgaW4gZGVmYXVsdHMpIHtcblx0XHRcdG9ialtpXSA9IGRlZmF1bHRzW2ldO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xuXHRcdFx0b2JqW2ldID0gb3B0aW9uc1tpXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb2JqO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIF9Db1NFTGF5b3V0KF9vcHRpb25zKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gZXh0ZW5kKGRlZmF1bHRzLCBfb3B0aW9ucyk7XG5cdFx0bmV3IExheW91dChfb3B0aW9ucyk7XG5cdFx0RkRMYXlvdXRDb25zdGFudHMuZXhjbHVkZWROb2RlTW92ZUZhY3RvciA9IF9vcHRpb25zLmV4Y2x1ZGVkTm9kZU1vdmVGYWN0b3IgfHwgMDtcblxuXHRcdGlmIChfb3B0aW9ucy5leGNsdWRlZE5vZGVzKSB7XG5cdFx0XHRGRExheW91dENvbnN0YW50cy5FWENMVURFRF9OT0RFUyA9IF9vcHRpb25zLmV4Y2x1ZGVkTm9kZXM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdEZETGF5b3V0Q29uc3RhbnRzLkVYQ0xVREVEX05PREVTID0ge307XG5cdFx0fVxuXG5cdH07XG5cblx0X0NvU0VMYXlvdXQucHJvdG90eXBlID0gTGF5b3V0LnByb3RvdHlwZTtcblxuXHRjeXRvc2NhcGUoICdsYXlvdXQnLCAnY3l0b3NjYXBlLmpzLXN5bmNoZWQnLCBfQ29TRUxheW91dCk7IC8vIHJlZ2lzdGVyIHdpdGggY3l0b3NjYXBlLmpzXG5cdGN5dG9zY2FwZSgnY29yZScsICdzeW5jaGVkTGF5b3V0JywgZnVuY3Rpb24gKG9wdHMpIHtcblx0XHRsZXQgYXBpID0ge307XG5cdFx0YXBpLmFwcGx5TWVyZ2VkTGF5b3V0ID0gYXBwbHlNZXJnZWRMYXlvdXQ7XG5cdFx0YXBpLmFwcGx5SW50ZXJMYXllZExheW91dCA9IGFwcGx5SW50ZXJMYXllZExheW91dDtcblx0XHRhcGkuYXBwbHlFeHRlbmRlZEludGVyTGF5ZWRMYXlvdXQgPSBhcHBseUV4dGVuZGVkSW50ZXJMYXllZExheW91dDtcblxuXHRcdHJldHVybiBhcGk7XG5cdH0pO1xufTtcblxuaWYoIHR5cGVvZiBjeXRvc2NhcGUgIT09ICd1bmRlZmluZWQnICl7IC8vIGV4cG9zZSB0byBnbG9iYWwgY3l0b3NjYXBlIChpLmUuIHdpbmRvdy5jeXRvc2NhcGUpXG5cdHJlZ2lzdGVyKCBjeXRvc2NhcGUgKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWdpc3RlcjtcbiIsInZhciBjeV9oZWFkbGVzczsgXG5cbnZhciBjcmVhdGVIZWFkbGVzc0luc3RhbmNlID0gZnVuY3Rpb24oY3l0b3NjYXBlKSB7XG5cdGN5X2hlYWRsZXNzID0gY3l0b3NjYXBlKHtcblx0XHRoZWFkbGVzczogdHJ1ZSxcblx0XHRzdHlsZUVuYWJsZWQ6IHRydWUsXG5cdH0pO1xufTtcblxudmFyIGFwcGx5TWVyZ2VkTGF5b3V0ID0gZnVuY3Rpb24gKGN5LCBvdGhlckN5KSB7XG5cdGxldCBlbGVzID0gY3kuZWxlbWVudHMoKTtcblx0bGV0IG90aGVyRWxlcyA9IG90aGVyQ3kuZWxlbWVudHMoKTtcblx0bGV0IGFsbF9lbGVzID0gZWxlcy51bmlvbihvdGhlckVsZXMpO1xuXHRsZXQgb3B0aW9ucyA9IHtuYW1lOiAnY3l0b3NjYXBlLmpzLXN5bmNoZWQnfTtcblx0XG5cdGN5X2hlYWRsZXNzLmVsZW1lbnRzKCkucmVtb3ZlKCk7XG5cdGN5X2hlYWRsZXNzLmFkZChhbGxfZWxlcyk7XG5cdGN5X2hlYWRsZXNzLmxheW91dChvcHRpb25zKS5ydW4oKTtcblxuXHRjeV9oZWFkbGVzcy5vbmUoXCJsYXlvdXRzdG9wXCIsIGZ1bmN0aW9uKCl7XG5cdFx0bGV0IHBvcyA9IHt9O1xuXHRcdGN5X2hlYWRsZXNzLm5vZGVzKCkuZm9yRWFjaChmdW5jdGlvbihlbGUsIGkpIHtcblx0XHRcdHBvc1tlbGUuaWQoKV0gPSB7eDplbGUucG9zaXRpb24oXCJ4XCIpLCB5OiBlbGUucG9zaXRpb24oXCJ5XCIpfTtcblx0XHR9KVxuXG5cdFx0Y3kubm9kZXMoKS5wb3NpdGlvbnMoZnVuY3Rpb24oZWxlLCBpKSB7XG5cdFx0XHRyZXR1cm4ge3g6IHBvc1tlbGUuaWQoKV0ueCwgeTogcG9zW2VsZS5pZCgpXS55fVxuXHRcdH0pO1xuXG5cdFx0b3RoZXJDeS5ub2RlcygpLnBvc2l0aW9ucyhmdW5jdGlvbihlbGUsIGkpIHtcblx0XHRcdHJldHVybiB7eDogcG9zW2VsZS5pZCgpXS54LCB5OiBwb3NbZWxlLmlkKCldLnl9XG5cdFx0fSk7XG5cblx0XHRjeS50cmlnZ2VyKFwic3luY2hlZExheW91dFN0b3BwZWRcIik7XG5cdFx0b3RoZXJDeS50cmlnZ2VyKFwic3luY2hlZExheW91dFN0b3BwZWRcIik7XG5cblx0fSk7XG59O1xuXG5sZXQgYXBwbHlJbnRlckxheWVkTGF5b3V0ID0gZnVuY3Rpb24oY3ksIG90aGVyQ3ksIGV4Y2x1ZGVkTm9kZU1vdmVGYWN0b3IpIHtcblx0bGV0IGVsZXMgPSBjeS5lbGVtZW50cygpO1xuXHRsZXQgb3RoZXJFbGVzID0gb3RoZXJDeS5lbGVtZW50cygpO1xuXHRsZXQgY29tbW9uRWxlcyA9IGVsZXMuaW50ZXJzZWN0aW9uKG90aGVyRWxlcyk7XG5cblx0bGV0IGNvbW1vbl9pZCA9IHt9O1xuXG5cdGNvbW1vbkVsZXMuZm9yRWFjaChmdW5jdGlvbihlbGUsIGkpIHtcblx0XHRjb21tb25faWRbZWxlLmlkKCldID0gdHJ1ZTtcblx0fSk7XG5cblx0Y3lfaGVhZGxlc3MuZWxlbWVudHMoKS5yZW1vdmUoKTtcblx0Y3lfaGVhZGxlc3MuYWRkKGNvbW1vbkVsZXMpO1xuXHRjeV9oZWFkbGVzcy5sYXlvdXQoe25hbWU6IFwiY3l0b3NjYXBlLmpzLXN5bmNoZWRcIiwgZXhjbHVkZWROb2Rlczoge319KS5ydW4oKTtcblxuXHRjeV9oZWFkbGVzcy5vbmUoXCJsYXlvdXRzdG9wXCIsIGZ1bmN0aW9uKCl7XG5cdFx0bGV0IHBvcyA9IHt9O1xuXHRcdGN5X2hlYWRsZXNzLm5vZGVzKCkuZm9yRWFjaChmdW5jdGlvbihlbGUsIGkpIHtcblx0XHRcdHBvc1tlbGUuaWQoKV0gPSB7eDogZWxlLnBvc2l0aW9uKFwieFwiKSwgeTogZWxlLnBvc2l0aW9uKFwieVwiKX07XG5cdFx0fSlcblxuXHRcdGN5Lm5vZGVzKCkucG9zaXRpb25zKGZ1bmN0aW9uKGVsZSwgaSl7XG5cdFx0XHRpZiAocG9zW2VsZS5pZCgpXSkge1xuXHRcdFx0XHRyZXR1cm4ge3g6IHBvc1tlbGUuaWQoKV0ueCwgeTogcG9zW2VsZS5pZCgpXS55fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBlbGUucG9zaXRpb24oKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdG90aGVyQ3kubm9kZXMoKS5wb3NpdGlvbnMoZnVuY3Rpb24oZWxlLCBpKXtcblx0XHRcdGlmIChwb3NbZWxlLmlkKCldKSB7XG5cdFx0XHRcdHJldHVybiB7eDogcG9zW2VsZS5pZCgpXS54LCB5OiBwb3NbZWxlLmlkKCldLnl9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGVsZS5wb3NpdGlvbigpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Y3kubGF5b3V0KHtuYW1lOiBcImN5dG9zY2FwZS5qcy1zeW5jaGVkXCIsICByYW5kb21pemU6IGZhbHNlLCBleGNsdWRlZE5vZGVzOiBwb3MsIGV4Y2x1ZGVkTm9kZU1vdmVGYWN0b3I6IGV4Y2x1ZGVkTm9kZU1vdmVGYWN0b3J9KS5ydW4oKTtcblx0XHRvdGhlckN5LmxheW91dCh7bmFtZTogXCJjeXRvc2NhcGUuanMtc3luY2hlZFwiLCAgcmFuZG9taXplOiBmYWxzZSwgZXhjbHVkZWROb2RlczogcG9zLCBleGNsdWRlZE5vZGVNb3ZlRmFjdG9yOiBleGNsdWRlZE5vZGVNb3ZlRmFjdG9yfSkucnVuKCk7XG5cblx0XHRsZXQgaXNMYXlvdXRTdG9wcGVkID0gZmFsc2UsIGlzT3RoZXJMYXlvdXRTdG9wcGVkID0gZmFsc2U7XG5cblx0XHRjeS5vbmUoXCJsYXlvdXRzdG9wXCIsIGZ1bmN0aW9uKCl7XG5cdFx0XHRpc0xheW91dFN0b3BwZWQgPSB0cnVlO1xuXHRcdFx0aWYgKGlzT3RoZXJMYXlvdXRTdG9wcGVkKSB7XG5cdFx0XHRcdGN5LnRyaWdnZXIoXCJzeW5jaGVkTGF5b3V0U3RvcHBlZFwiKTtcblx0XHRcdFx0b3RoZXJDeS50cmlnZ2VyKFwic3luY2hlZExheW91dFN0b3BwZWRcIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRvdGhlckN5Lm9uZShcImxheW91dHN0b3BcIiwgZnVuY3Rpb24oKXtcblx0XHRcdGlzT3RoZXJMYXlvdXRTdG9wcGVkID0gdHJ1ZTtcblx0XHRcdGlmIChpc0xheW91dFN0b3BwZWQpIHtcblx0XHRcdFx0Y3kudHJpZ2dlcihcInN5bmNoZWRMYXlvdXRTdG9wcGVkXCIpO1xuXHRcdFx0XHRvdGhlckN5LnRyaWdnZXIoXCJzeW5jaGVkTGF5b3V0U3RvcHBlZFwiKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHR9KTtcbn07XG5cbmxldCBhcHBseUV4dGVuZGVkSW50ZXJMYXllZExheW91dCA9IGZ1bmN0aW9uKGN5LCBvdGhlckN5LCBleGNsdWRlZE5vZGVNb3ZlRmFjdG9yKSB7XG5cdGxldCBlbGVzID0gY3kuZWxlbWVudHMoKTtcblx0bGV0IG90aGVyRWxlcyA9IG90aGVyQ3kuZWxlbWVudHMoKTtcblx0bGV0IGNvbW1vbkVsZXMgPSBlbGVzLmludGVyc2VjdGlvbihvdGhlckVsZXMpO1xuXG5cdGxldCBjb21tb25faWQgPSB7fTtcblxuXHRjb21tb25FbGVzLmZvckVhY2goZnVuY3Rpb24oZWxlLCBpKSB7XG5cdFx0Y29tbW9uX2lkW2VsZS5pZCgpXSA9IHRydWU7XG5cdH0pO1xuXG5cblx0bGV0IGNvbGxlY3Rpb24gPSBjeS5jb2xsZWN0aW9uKCk7XG5cdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLmFkZChjb21tb25FbGVzKTtcblx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24uYWRkKGNvbW1vbkVsZXMubmVpZ2hib3Job29kKCkpO1xuXG5cdGN5X2hlYWRsZXNzLmVsZW1lbnRzKCkucmVtb3ZlKCk7XG5cdGN5X2hlYWRsZXNzLmFkZChjb2xsZWN0aW9uKTtcblx0Y3lfaGVhZGxlc3MubGF5b3V0KHtuYW1lOiBcImN5dG9zY2FwZS5qcy1zeW5jaGVkXCIsIGV4Y2x1ZGVkTm9kZXM6IHt9fSkucnVuKCk7XG5cblx0Y3lfaGVhZGxlc3Mub25lKFwibGF5b3V0c3RvcFwiLCBmdW5jdGlvbigpe1xuXHRcdGxldCBwb3MgPSB7fTtcblx0XHRjeV9oZWFkbGVzcy5ub2RlcygpLmZvckVhY2goZnVuY3Rpb24oZWxlLCBpKSB7XG5cdFx0XHRwb3NbZWxlLmlkKCldID0ge3g6IGVsZS5wb3NpdGlvbihcInhcIiksIHk6IGVsZS5wb3NpdGlvbihcInlcIil9O1xuXHRcdH0pXG5cblx0XHRjeS5ub2RlcygpLnBvc2l0aW9ucyhmdW5jdGlvbihlbGUsIGkpe1xuXHRcdFx0aWYgKHBvc1tlbGUuaWQoKV0pIHtcblx0XHRcdFx0cmV0dXJuIHt4OiBwb3NbZWxlLmlkKCldLngsIHk6IHBvc1tlbGUuaWQoKV0ueX07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gZWxlLnBvc2l0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRvdGhlckN5Lm5vZGVzKCkucG9zaXRpb25zKGZ1bmN0aW9uKGVsZSwgaSl7XG5cdFx0XHRpZiAocG9zW2VsZS5pZCgpXSkge1xuXHRcdFx0XHRyZXR1cm4ge3g6IHBvc1tlbGUuaWQoKV0ueCwgeTogcG9zW2VsZS5pZCgpXS55fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBlbGUucG9zaXRpb24oKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGN5LmxheW91dCh7bmFtZTogXCJjeXRvc2NhcGUuanMtc3luY2hlZFwiLCAgcmFuZG9taXplOiBmYWxzZSwgZXhjbHVkZWROb2RlczogcG9zLCBleGNsdWRlZE5vZGVNb3ZlRmFjdG9yOiBleGNsdWRlZE5vZGVNb3ZlRmFjdG9yfSkucnVuKCk7XG5cdFx0b3RoZXJDeS5sYXlvdXQoe25hbWU6IFwiY3l0b3NjYXBlLmpzLXN5bmNoZWRcIiwgIHJhbmRvbWl6ZTogZmFsc2UsIGV4Y2x1ZGVkTm9kZXM6IHBvcywgZXhjbHVkZWROb2RlTW92ZUZhY3RvcjogZXhjbHVkZWROb2RlTW92ZUZhY3Rvcn0pLnJ1bigpO1xuXG5cdFx0bGV0IGlzTGF5b3V0U3RvcHBlZCA9IGZhbHNlLCBpc090aGVyTGF5b3V0U3RvcHBlZCA9IGZhbHNlO1xuXG5cdFx0Y3kub25lKFwibGF5b3V0c3RvcFwiLCBmdW5jdGlvbigpe1xuXHRcdFx0aXNMYXlvdXRTdG9wcGVkID0gdHJ1ZTtcblx0XHRcdGlmIChpc090aGVyTGF5b3V0U3RvcHBlZCkge1xuXHRcdFx0XHRjeS50cmlnZ2VyKFwic3luY2hlZExheW91dFN0b3BwZWRcIik7XG5cdFx0XHRcdG90aGVyQ3kudHJpZ2dlcihcInN5bmNoZWRMYXlvdXRTdG9wcGVkXCIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0b3RoZXJDeS5vbmUoXCJsYXlvdXRzdG9wXCIsIGZ1bmN0aW9uKCl7XG5cdFx0XHRpc090aGVyTGF5b3V0U3RvcHBlZCA9IHRydWU7XG5cdFx0XHRpZiAoaXNMYXlvdXRTdG9wcGVkKSB7XG5cdFx0XHRcdGN5LnRyaWdnZXIoXCJzeW5jaGVkTGF5b3V0U3RvcHBlZFwiKTtcblx0XHRcdFx0b3RoZXJDeS50cmlnZ2VyKFwic3luY2hlZExheW91dFN0b3BwZWRcIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0fSk7XG59O1xuZXhwb3J0IHtjcmVhdGVIZWFkbGVzc0luc3RhbmNlLCBhcHBseU1lcmdlZExheW91dCwgYXBwbHlJbnRlckxheWVkTGF5b3V0LCBhcHBseUV4dGVuZGVkSW50ZXJMYXllZExheW91dH07XG4iXSwic291cmNlUm9vdCI6IiJ9