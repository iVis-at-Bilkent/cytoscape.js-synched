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

var applyUnnamedLayout = function applyUnnamedLayout(cy, otherCy, excludedNodeMoveFactor) {
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

exports.createHeadlessInstance = createHeadlessInstance;
exports.applyMergedLayout = applyMergedLayout;
exports.applyUnnamedLayout = applyUnnamedLayout;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFQ29uc3RhbnRzLmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFRWRnZS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvQ29TRUdyYXBoLmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFR3JhcGhNYW5hZ2VyLmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFTGF5b3V0LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFTm9kZS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvRGltZW5zaW9uRC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvRW1pdHRlci5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvRkRMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0ZETGF5b3V0Q29uc3RhbnRzLmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9GRExheW91dEVkZ2UuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0ZETGF5b3V0Tm9kZS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvSGFzaE1hcC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvSGFzaFNldC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvSUdlb21ldHJ5LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9JTWF0aC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvSW50ZWdlci5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvTEVkZ2UuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0xHcmFwaC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvTEdyYXBoTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvTEdyYXBoT2JqZWN0LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9MTm9kZS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9MYXlvdXRDb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0xpbmtlZExpc3QuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L1BvaW50LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Qb2ludEQuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L1JhbmRvbVNlZWQuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L1JlY3RhbmdsZUQuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvVW5pcXVlSURHZW5lcmV0b3IuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9zcmMvY29zZS1iaWxrZW50LW1vZGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9zcmMvbGF5b3V0cy5qcyJdLCJuYW1lcyI6WyJGRExheW91dENvbnN0YW50cyIsInJlcXVpcmUiLCJDb1NFQ29uc3RhbnRzIiwicHJvcCIsIkRFRkFVTFRfVVNFX01VTFRJX0xFVkVMX1NDQUxJTkciLCJERUZBVUxUX1JBRElBTF9TRVBBUkFUSU9OIiwiREVGQVVMVF9FREdFX0xFTkdUSCIsIkRFRkFVTFRfQ09NUE9ORU5UX1NFUEVSQVRJT04iLCJUSUxFIiwiVElMSU5HX1BBRERJTkdfVkVSVElDQUwiLCJUSUxJTkdfUEFERElOR19IT1JJWk9OVEFMIiwibW9kdWxlIiwiZXhwb3J0cyIsIkZETGF5b3V0RWRnZSIsIkNvU0VFZGdlIiwic291cmNlIiwidGFyZ2V0IiwidkVkZ2UiLCJjYWxsIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiTEdyYXBoIiwiQ29TRUdyYXBoIiwicGFyZW50IiwiZ3JhcGhNZ3IiLCJ2R3JhcGgiLCJMR3JhcGhNYW5hZ2VyIiwiQ29TRUdyYXBoTWFuYWdlciIsImxheW91dCIsIkZETGF5b3V0IiwiQ29TRU5vZGUiLCJMYXlvdXRDb25zdGFudHMiLCJQb2ludCIsIlBvaW50RCIsIkxheW91dCIsIkludGVnZXIiLCJJR2VvbWV0cnkiLCJUcmFuc2Zvcm0iLCJDb1NFTGF5b3V0IiwidG9CZVRpbGVkIiwibmV3R3JhcGhNYW5hZ2VyIiwiZ20iLCJncmFwaE1hbmFnZXIiLCJuZXdHcmFwaCIsIm5ld05vZGUiLCJ2Tm9kZSIsIm5ld0VkZ2UiLCJpbml0UGFyYW1ldGVycyIsImFyZ3VtZW50cyIsImlzU3ViTGF5b3V0IiwiaWRlYWxFZGdlTGVuZ3RoIiwidXNlU21hcnRJZGVhbEVkZ2VMZW5ndGhDYWxjdWxhdGlvbiIsIkRFRkFVTFRfVVNFX1NNQVJUX0lERUFMX0VER0VfTEVOR1RIX0NBTENVTEFUSU9OIiwic3ByaW5nQ29uc3RhbnQiLCJERUZBVUxUX1NQUklOR19TVFJFTkdUSCIsInJlcHVsc2lvbkNvbnN0YW50IiwiREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEgiLCJncmF2aXR5Q29uc3RhbnQiLCJERUZBVUxUX0dSQVZJVFlfU1RSRU5HVEgiLCJjb21wb3VuZEdyYXZpdHlDb25zdGFudCIsIkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9TVFJFTkdUSCIsImdyYXZpdHlSYW5nZUZhY3RvciIsIkRFRkFVTFRfR1JBVklUWV9SQU5HRV9GQUNUT1IiLCJjb21wb3VuZEdyYXZpdHlSYW5nZUZhY3RvciIsIkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1IiLCJjcmVhdGVCZW5kc0FzTmVlZGVkIiwiREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEIiwiY3JlYXRlQmVuZHBvaW50cyIsInJlc2V0QWxsRWRnZXMiLCJsZXZlbCIsImNsYXNzaWNMYXlvdXQiLCJub2Rlc1dpdGhHcmF2aXR5IiwiY2FsY3VsYXRlTm9kZXNUb0FwcGx5R3Jhdml0YXRpb25UbyIsInNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uIiwiY2FsY05vT2ZDaGlsZHJlbkZvckFsbE5vZGVzIiwiY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9ycyIsImNhbGNJbmNsdXNpb25UcmVlRGVwdGhzIiwiZ2V0Um9vdCIsImNhbGNFc3RpbWF0ZWRTaXplIiwiY2FsY0lkZWFsRWRnZUxlbmd0aHMiLCJpbmNyZW1lbnRhbCIsImZvcmVzdCIsImdldEZsYXRGb3Jlc3QiLCJsZW5ndGgiLCJwb3NpdGlvbk5vZGVzUmFkaWFsbHkiLCJyZWR1Y2VUcmVlcyIsInJlc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24iLCJhbGxOb2RlcyIsIlNldCIsImdldEFsbE5vZGVzIiwiaW50ZXJzZWN0aW9uIiwiZmlsdGVyIiwiaGFzIiwieCIsInBvc2l0aW9uTm9kZXNSYW5kb21seSIsImluaXRTcHJpbmdFbWJlZGRlciIsInJ1blNwcmluZ0VtYmVkZGVyIiwidGljayIsInRvdGFsSXRlcmF0aW9ucyIsIm1heEl0ZXJhdGlvbnMiLCJpc1RyZWVHcm93aW5nIiwiaXNHcm93dGhGaW5pc2hlZCIsInBydW5lZE5vZGVzQWxsIiwiQ09OVkVSR0VOQ0VfQ0hFQ0tfUEVSSU9EIiwiaXNDb252ZXJnZWQiLCJjb29saW5nRmFjdG9yIiwiaW5pdGlhbENvb2xpbmdGYWN0b3IiLCJhbmltYXRpb25QZXJpb2QiLCJNYXRoIiwiY2VpbCIsImluaXRpYWxBbmltYXRpb25QZXJpb2QiLCJzcXJ0IiwiZ3Jvd1RyZWVJdGVyYXRpb25zIiwidXBkYXRlQm91bmRzIiwidXBkYXRlR3JpZCIsImdyb3dUcmVlIiwiREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCIsImFmdGVyR3Jvd3RoSXRlcmF0aW9ucyIsInRvdGFsRGlzcGxhY2VtZW50IiwiY2FsY1NwcmluZ0ZvcmNlcyIsImNhbGNSZXB1bHNpb25Gb3JjZXMiLCJjYWxjR3Jhdml0YXRpb25hbEZvcmNlcyIsIm1vdmVOb2RlcyIsImFuaW1hdGUiLCJnZXRQb3NpdGlvbnNEYXRhIiwicERhdGEiLCJpIiwicmVjdCIsImlkIiwiZ2V0Q2VudGVyWCIsInkiLCJnZXRDZW50ZXJZIiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsImxheW91dEVuZGVkIiwiQU5JTUFURSIsImVtaXQiLCJub2RlTGlzdCIsImdyYXBoIiwiZ3JhcGhzIiwiZ2V0R3JhcGhzIiwic2l6ZSIsInVwZGF0ZUNvbm5lY3RlZCIsImlzQ29ubmVjdGVkIiwiY29uY2F0IiwiZ2V0Tm9kZXMiLCJub2RlIiwibm9PZkNoaWxkcmVuIiwiZ2V0Tm9PZkNoaWxkcmVuIiwiZWRnZXMiLCJnZXRBbGxFZGdlcyIsInZpc2l0ZWQiLCJIYXNoU2V0IiwiZWRnZSIsImNvbnRhaW5zIiwiZ2V0U291cmNlIiwiZ2V0VGFyZ2V0IiwiZ2V0QmVuZHBvaW50cyIsInB1c2giLCJjcmVhdGVEdW1teU5vZGVzRm9yQmVuZHBvaW50cyIsImFkZCIsImVkZ2VMaXN0IiwiZ2V0RWRnZUxpc3RUb05vZGUiLCJrIiwibXVsdGlFZGdlIiwiYWRkQWxsIiwibGlzdCIsImN1cnJlbnRTdGFydGluZ1BvaW50IiwibnVtYmVyT2ZDb2x1bW5zIiwiY3VycmVudFkiLCJjdXJyZW50WCIsInBvaW50IiwidHJlZSIsImNlbnRlck5vZGUiLCJmaW5kQ2VudGVyT2ZUcmVlIiwicmFkaWFsTGF5b3V0IiwiZmxvb3IiLCJ0cmFuc2Zvcm0iLCJXT1JMRF9DRU5URVJfWCIsIldPUkxEX0NFTlRFUl9ZIiwic3RhcnRpbmdQb2ludCIsInJhZGlhbFNlcCIsIm1heCIsIm1heERpYWdvbmFsSW5UcmVlIiwiYnJhbmNoUmFkaWFsTGF5b3V0IiwiYm91bmRzIiwiY2FsY3VsYXRlQm91bmRzIiwic2V0RGV2aWNlT3JnWCIsImdldE1pblgiLCJzZXREZXZpY2VPcmdZIiwiZ2V0TWluWSIsInNldFdvcmxkT3JnWCIsInNldFdvcmxkT3JnWSIsImJvdHRvbVJpZ2h0IiwiZ2V0TWF4WCIsImdldE1heFkiLCJpbnZlcnNlVHJhbnNmb3JtUG9pbnQiLCJwYXJlbnRPZk5vZGUiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJkaXN0YW5jZSIsInJhZGlhbFNlcGFyYXRpb24iLCJoYWxmSW50ZXJ2YWwiLCJub2RlQW5nbGUiLCJ0ZXRhIiwiVFdPX1BJIiwiY29zX3RldGEiLCJjb3MiLCJ4XyIsInlfIiwic2luIiwic2V0Q2VudGVyIiwibmVpZ2hib3JFZGdlcyIsImdldEVkZ2VzIiwiY2hpbGRDb3VudCIsImJyYW5jaENvdW50IiwiaW5jRWRnZXNDb3VudCIsInN0YXJ0SW5kZXgiLCJnZXRFZGdlc0JldHdlZW4iLCJ0ZW1wIiwic3BsaWNlIiwiaW5kZXgiLCJpbmRleE9mIiwic3RlcEFuZ2xlIiwiYWJzIiwiY3VycmVudE5laWdoYm9yIiwiZ2V0T3RoZXJFbmQiLCJjaGlsZFN0YXJ0QW5nbGUiLCJjaGlsZEVuZEFuZ2xlIiwibWF4RGlhZ29uYWwiLCJNSU5fVkFMVUUiLCJkaWFnb25hbCIsImdldERpYWdvbmFsIiwiY2FsY1JlcHVsc2lvblJhbmdlIiwiZ3JvdXBaZXJvRGVncmVlTWVtYmVycyIsInNlbGYiLCJ0ZW1wTWVtYmVyR3JvdXBzIiwibWVtYmVyR3JvdXBzIiwiaWRUb0R1bW15Tm9kZSIsInplcm9EZWdyZWUiLCJnZXRQYXJlbnQiLCJnZXROb2RlRGVncmVlV2l0aENoaWxkcmVuIiwidW5kZWZpbmVkIiwiZ2V0VG9CZVRpbGVkIiwicF9pZCIsImtleXMiLCJmb3JFYWNoIiwiZHVtbXlDb21wb3VuZElkIiwiZHVtbXlDb21wb3VuZCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJkdW1teVBhcmVudEdyYXBoIiwiZ2V0R3JhcGhNYW5hZ2VyIiwicGFyZW50R3JhcGgiLCJnZXRDaGlsZCIsInJlbW92ZSIsImNsZWFyQ29tcG91bmRzIiwiY2hpbGRHcmFwaE1hcCIsImlkVG9Ob2RlIiwicGVyZm9ybURGU09uQ29tcG91bmRzIiwiY29tcG91bmRPcmRlciIsImNoaWxkIiwicmVzZXRBbGxOb2RlcyIsInRpbGVDb21wb3VuZE1lbWJlcnMiLCJjbGVhclplcm9EZWdyZWVNZW1iZXJzIiwidGlsZWRaZXJvRGVncmVlUGFjayIsImNvbXBvdW5kTm9kZSIsInRpbGVOb2RlcyIsInJlcG9wdWxhdGVDb21wb3VuZHMiLCJsQ29tcG91bmROb2RlIiwiaG9yaXpvbnRhbE1hcmdpbiIsInZlcnRpY2FsTWFyZ2luIiwiYWRqdXN0TG9jYXRpb25zIiwidGlsZWRNZW1iZXJQYWNrIiwicmVwb3B1bGF0ZVplcm9EZWdyZWVNZW1iZXJzIiwidGlsZWRQYWNrIiwiY2hpbGRHcmFwaCIsImNoaWxkcmVuIiwidGhlQ2hpbGQiLCJnZXROb2RlRGVncmVlIiwiZGVncmVlIiwiZmlsbENvbXBleE9yZGVyQnlERlMiLCJvcmdhbml6YXRpb24iLCJjb21wb3VuZEhvcml6b250YWxNYXJnaW4iLCJjb21wb3VuZFZlcnRpY2FsTWFyZ2luIiwibGVmdCIsInJvd3MiLCJyb3ciLCJtYXhIZWlnaHQiLCJqIiwibG5vZGUiLCJob3Jpem9udGFsUGFkZGluZyIsInZlcnRpY2FsUGFkZGluZyIsIm5vZGVzIiwibWluV2lkdGgiLCJyb3dXaWR0aCIsInJvd0hlaWdodCIsInNvcnQiLCJuMSIsIm4yIiwibE5vZGUiLCJpbnNlcnROb2RlVG9Sb3ciLCJjYW5BZGRIb3Jpem9udGFsIiwiZ2V0U2hvcnRlc3RSb3dJbmRleCIsInNoaWZ0VG9MYXN0Um93Iiwicm93SW5kZXgiLCJtaW5Db21wb3VuZFNpemUiLCJzZWNvbmREaW1lbnNpb24iLCJleHRyYUhlaWdodCIsInIiLCJtaW4iLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJnZXRMb25nZXN0Um93SW5kZXgiLCJleHRyYVdpZHRoIiwic3JpIiwiaERpZmYiLCJhZGRfdG9fcm93X3JhdGlvIiwiYWRkX25ld19yb3dfcmF0aW8iLCJsb25nZXN0IiwibGFzdCIsImRpZmYiLCJpbnN0YW5jZSIsInByZXZUb3RhbCIsImZpbmFsVG90YWwiLCJ0aWxpbmdQcmVMYXlvdXQiLCJ0aWxpbmdQb3N0TGF5b3V0IiwiRkRMYXlvdXROb2RlIiwiSU1hdGgiLCJsb2MiLCJtb3ZlIiwiZ2V0TGF5b3V0IiwiZGlzcGxhY2VtZW50WCIsInNwcmluZ0ZvcmNlWCIsInJlcHVsc2lvbkZvcmNlWCIsImdyYXZpdGF0aW9uRm9yY2VYIiwiZGlzcGxhY2VtZW50WSIsInNwcmluZ0ZvcmNlWSIsInJlcHVsc2lvbkZvcmNlWSIsImdyYXZpdGF0aW9uRm9yY2VZIiwibWF4Tm9kZURpc3BsYWNlbWVudCIsInNpZ24iLCJtb3ZlQnkiLCJwcm9wb2dhdGVEaXNwbGFjZW1lbnRUb0NoaWxkcmVuIiwiZFgiLCJkWSIsInNldFByZWQxIiwicHJlZDEiLCJnZXRQcmVkMSIsImdldFByZWQyIiwicHJlZDIiLCJzZXROZXh0IiwibmV4dCIsImdldE5leHQiLCJzZXRQcm9jZXNzZWQiLCJwcm9jZXNzZWQiLCJpc1Byb2Nlc3NlZCIsIkRpbWVuc2lvbkQiLCJnZXRXaWR0aCIsInNldFdpZHRoIiwiZ2V0SGVpZ2h0Iiwic2V0SGVpZ2h0IiwiRW1pdHRlciIsImxpc3RlbmVycyIsInAiLCJhZGRMaXN0ZW5lciIsImV2ZW50IiwiY2FsbGJhY2siLCJyZW1vdmVMaXN0ZW5lciIsImwiLCJkYXRhIiwiZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSIsIm9sZFRvdGFsRGlzcGxhY2VtZW50IiwiTUFYX0lURVJBVElPTlMiLCJsYXlvdXRRdWFsaXR5IiwiRFJBRlRfUVVBTElUWSIsIlBST09GX1FVQUxJVFkiLCJub3RBbmltYXRlZEl0ZXJhdGlvbnMiLCJ1c2VGUkdyaWRWYXJpYW50IiwiREVGQVVMVF9VU0VfU01BUlRfUkVQVUxTSU9OX1JBTkdFX0NBTENVTEFUSU9OIiwiZ3JpZCIsImxjYURlcHRoIiwic2l6ZU9mU291cmNlSW5MY2EiLCJzaXplT2ZUYXJnZXRJbkxjYSIsImFsbEVkZ2VzIiwiaWRlYWxMZW5ndGgiLCJpc0ludGVyR3JhcGgiLCJnZXRTb3VyY2VJbkxjYSIsImdldEVzdGltYXRlZFNpemUiLCJnZXRUYXJnZXRJbkxjYSIsIlNJTVBMRV9OT0RFX1NJWkUiLCJnZXRMY2EiLCJnZXRJbmNsdXNpb25UcmVlRGVwdGgiLCJQRVJfTEVWRUxfSURFQUxfRURHRV9MRU5HVEhfRkFDVE9SIiwiTUFYX05PREVfRElTUExBQ0VNRU5UX0lOQ1JFTUVOVEFMIiwiTUFYX05PREVfRElTUExBQ0VNRU5UIiwidG90YWxEaXNwbGFjZW1lbnRUaHJlc2hvbGQiLCJyZXB1bHNpb25SYW5nZSIsImxFZGdlcyIsImNhbGNTcHJpbmdGb3JjZSIsIm5vZGVBIiwibm9kZUIiLCJsTm9kZXMiLCJwcm9jZXNzZWROb2RlU2V0IiwiR1JJRF9DQUxDVUxBVElPTl9DSEVDS19QRVJJT0QiLCJjYWxjdWxhdGVSZXB1bHNpb25Gb3JjZU9mQU5vZGUiLCJnZXRPd25lciIsImNhbGNSZXB1bHNpb25Gb3JjZSIsImdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uIiwiY2FsY0dyYXZpdGF0aW9uYWxGb3JjZSIsInNvdXJjZU5vZGUiLCJ0YXJnZXROb2RlIiwic3ByaW5nRm9yY2UiLCJ1bmlmb3JtTGVhZk5vZGVTaXplcyIsInVwZGF0ZUxlbmd0aFNpbXBsZSIsInVwZGF0ZUxlbmd0aCIsImlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCIsImdldExlbmd0aCIsImxlbmd0aFgiLCJsZW5ndGhZIiwicmVjdEEiLCJnZXRSZWN0IiwicmVjdEIiLCJvdmVybGFwQW1vdW50IiwiQXJyYXkiLCJjbGlwUG9pbnRzIiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwiZGlzdGFuY2VTcXVhcmVkIiwicmVwdWxzaW9uRm9yY2UiLCJpbnRlcnNlY3RzIiwiY2FsY1NlcGFyYXRpb25BbW91bnQiLCJjaGlsZHJlbkNvbnN0YW50IiwiZ2V0SW50ZXJzZWN0aW9uIiwiTUlOX1JFUFVMU0lPTl9ESVNUIiwib3duZXJHcmFwaCIsIm93bmVyQ2VudGVyWCIsIm93bmVyQ2VudGVyWSIsImFic0Rpc3RhbmNlWCIsImFic0Rpc3RhbmNlWSIsImVzdGltYXRlZFNpemUiLCJnZXRSaWdodCIsImdldExlZnQiLCJnZXRUb3AiLCJnZXRCb3R0b20iLCJjb252ZXJnZWQiLCJvc2NpbGF0aW5nIiwiYW5pbWF0aW9uRHVyaW5nTGF5b3V0IiwidXBkYXRlIiwiY2FsY0dyaWQiLCJzaXplWCIsInNpemVZIiwicGFyc2VJbnQiLCJhZGROb2RlVG9HcmlkIiwidiIsInRvcCIsInN0YXJ0WCIsImZpbmlzaFgiLCJzdGFydFkiLCJmaW5pc2hZIiwic2V0R3JpZENvb3JkaW5hdGVzIiwic3Vycm91bmRpbmciLCJjb250YWluc0xlYWYiLCJwcnVuZWROb2Rlc0luU3RlcFRlbXAiLCJwcnVuZWROb2Rlc0luU3RlcCIsImxlbmd0aE9mUHJ1bmVkTm9kZXNJblN0ZXAiLCJub2RlRGF0YSIsImZpbmRQbGFjZWZvclBydW5lZE5vZGUiLCJncmlkRm9yUHJ1bmVkTm9kZSIsIm5vZGVUb0Nvbm5lY3QiLCJwcnVuZWROb2RlIiwic3RhcnRHcmlkWCIsImZpbmlzaEdyaWRYIiwic3RhcnRHcmlkWSIsImZpbmlzaEdyaWRZIiwidXBOb2RlQ291bnQiLCJkb3duTm9kZUNvdW50IiwicmlnaHROb2RlQ291bnQiLCJsZWZ0Tm9kZUNvdW50IiwiY29udHJvbFJlZ2lvbnMiLCJtaW5Db3VudCIsIm1pbkluZGV4IiwicmFuZG9tIiwiTUlOX0VER0VfTEVOR1RIIiwiTEVkZ2UiLCJMTm9kZSIsIl9zdGFydFgiLCJfZmluaXNoWCIsIl9zdGFydFkiLCJfZmluaXNoWSIsIlVuaXF1ZUlER2VuZXJldG9yIiwiSGFzaE1hcCIsIm1hcCIsInB1dCIsImtleSIsInZhbHVlIiwidGhlSWQiLCJjcmVhdGVJRCIsImdldCIsImtleVNldCIsInNldCIsIm9iaiIsImNsZWFyIiwiaXNFbXB0eSIsImFkZEFsbFRvIiwicyIsInNlcGFyYXRpb25CdWZmZXIiLCJkaXJlY3Rpb25zIiwiZGVjaWRlRGlyZWN0aW9uc0Zvck92ZXJsYXBwaW5nTm9kZXMiLCJnZXRYIiwiZ2V0WSIsInNsb3BlIiwibW92ZUJ5WSIsIm1vdmVCeVgiLCJnZXRJbnRlcnNlY3Rpb24yIiwicmVzdWx0IiwicDF4IiwicDF5IiwicDJ4IiwicDJ5IiwidG9wTGVmdEF4IiwidG9wTGVmdEF5IiwidG9wUmlnaHRBeCIsImJvdHRvbUxlZnRBeCIsImJvdHRvbUxlZnRBeSIsImJvdHRvbVJpZ2h0QXgiLCJoYWxmV2lkdGhBIiwiZ2V0V2lkdGhIYWxmIiwiaGFsZkhlaWdodEEiLCJnZXRIZWlnaHRIYWxmIiwidG9wTGVmdEJ4IiwidG9wTGVmdEJ5IiwidG9wUmlnaHRCeCIsImJvdHRvbUxlZnRCeCIsImJvdHRvbUxlZnRCeSIsImJvdHRvbVJpZ2h0QngiLCJoYWxmV2lkdGhCIiwiaGFsZkhlaWdodEIiLCJjbGlwUG9pbnRBRm91bmQiLCJjbGlwUG9pbnRCRm91bmQiLCJzbG9wZUEiLCJzbG9wZUIiLCJzbG9wZVByaW1lIiwiY2FyZGluYWxEaXJlY3Rpb25BIiwiY2FyZGluYWxEaXJlY3Rpb25CIiwidGVtcFBvaW50QXgiLCJ0ZW1wUG9pbnRBeSIsInRlbXBQb2ludEJ4IiwidGVtcFBvaW50QnkiLCJnZXRDYXJkaW5hbERpcmVjdGlvbiIsImxpbmUiLCJzMSIsInMyIiwiZjEiLCJmMiIsIngxIiwieTEiLCJ4MiIsInkyIiwieDMiLCJ5MyIsIng0IiwieTQiLCJhMSIsImEyIiwiYjEiLCJiMiIsImMxIiwiYzIiLCJkZW5vbSIsIkhBTEZfUEkiLCJQSSIsIk9ORV9BTkRfSEFMRl9QSSIsIlRIUkVFX1BJIiwiTEdyYXBoT2JqZWN0IiwidkdyYXBoT2JqZWN0IiwiYmVuZHBvaW50cyIsImxjYSIsInNvdXJjZUluTGNhIiwidGFyZ2V0SW5MY2EiLCJnZXRPdGhlckVuZEluR3JhcGgiLCJvdGhlckVuZCIsInJvb3QiLCJjbGlwUG9pbnRDb29yZGluYXRlcyIsIlJlY3RhbmdsZUQiLCJMaW5rZWRMaXN0Iiwib2JqMiIsIm1hcmdpbiIsIkRFRkFVTFRfR1JBUEhfTUFSR0lOIiwicmlnaHQiLCJib3R0b20iLCJvYmoxIiwib3duZXIiLCJlZGdlc1RvQmVSZW1vdmVkIiwic2xpY2UiLCJzb3VyY2VJbmRleCIsInRhcmdldEluZGV4IiwidXBkYXRlTGVmdFRvcCIsIm5vZGVUb3AiLCJub2RlTGVmdCIsInJlY3Vyc2l2ZSIsIm5vZGVSaWdodCIsIm5vZGVCb3R0b20iLCJib3VuZGluZ1JlY3QiLCJFTVBUWV9DT01QT1VORF9OT0RFX1NJWkUiLCJ0b0JlVmlzaXRlZCIsImN1cnJlbnROb2RlIiwiY2hpbGRyZW5PZk5vZGUiLCJ3aXRoQ2hpbGRyZW4iLCJzaGlmdCIsIm5laWdoYm9yRWRnZSIsImNoaWxkcmVuT2ZOZWlnaGJvciIsIm5vT2ZWaXNpdGVkSW5UaGlzR3JhcGgiLCJ2aXNpdGVkSWQiLCJ2aXNpdGVkTm9kZSIsImFkZFJvb3QiLCJuZ3JhcGgiLCJubm9kZSIsInNldFJvb3RHcmFwaCIsInJvb3RHcmFwaCIsInBhcmVudE5vZGUiLCJzb3VyY2VHcmFwaCIsInRhcmdldEdyYXBoIiwibE9iaiIsIm5vZGVzVG9CZVJlbW92ZWQiLCJhbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiIsImlzT25lQW5jZXN0b3JPZk90aGVyIiwiZmlyc3ROb2RlIiwic2Vjb25kTm9kZSIsInNvdXJjZUFuY2VzdG9yR3JhcGgiLCJ0YXJnZXRBbmNlc3RvckdyYXBoIiwiY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9yIiwiZmlyc3RPd25lckdyYXBoIiwic2Vjb25kT3duZXJHcmFwaCIsImRlcHRoIiwiaW5jbHVzaW9uVHJlZURlcHRoIiwiaW5jbHVkZXNJbnZhbGlkRWRnZSIsIlJhbmRvbVNlZWQiLCJnZXRDZW50ZXIiLCJnZXRMb2NhdGlvbiIsInNldFJlY3QiLCJ1cHBlckxlZnQiLCJkaW1lbnNpb24iLCJjeCIsImN5Iiwic2V0TG9jYXRpb24iLCJkeCIsImR5IiwidG8iLCJvdGhlciIsImdldE5laWdoYm9yc0xpc3QiLCJuZWlnaGJvcnMiLCJ3aXRoTmVpZ2hib3JzTGlzdCIsImNoaWxkTm9kZSIsInNjYXR0ZXIiLCJyYW5kb21DZW50ZXJYIiwicmFuZG9tQ2VudGVyWSIsIm1pblgiLCJJTklUSUFMX1dPUkxEX0JPVU5EQVJZIiwibWF4WCIsIm5leHREb3VibGUiLCJtaW5ZIiwibWF4WSIsIk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyIsImxhYmVsV2lkdGgiLCJsYWJlbEhlaWdodCIsImxhYmVsUG9zIiwidHJhbnMiLCJXT1JMRF9CT1VOREFSWSIsImxlZnRUb3AiLCJ2TGVmdFRvcCIsImlzUmVtb3RlVXNlIiwiREVGQVVMVF9RVUFMSVRZIiwiREVGQVVMVF9JTkNSRU1FTlRBTCIsImFuaW1hdGlvbk9uTGF5b3V0IiwiREVGQVVMVF9BTklNQVRJT05fT05fTEFZT1VUIiwiREVGQVVMVF9BTklNQVRJT05fRFVSSU5HX0xBWU9VVCIsIkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRCIsIkRFRkFVTFRfVU5JRk9STV9MRUFGX05PREVfU0laRVMiLCJlZGdlVG9EdW1teU5vZGVzIiwiaXNMYXlvdXRGaW5pc2hlZCIsIlJBTkRPTV9TRUVEIiwiY2hlY2tMYXlvdXRTdWNjZXNzIiwicnVuTGF5b3V0IiwiaXNMYXlvdXRTdWNjZXNzZnVsbCIsImRvUG9zdExheW91dCIsInVwZGF0ZTIiLCJjcmVhdGVCZW5kcG9pbnRzRnJvbUR1bW15Tm9kZXMiLCJuZXdMZWZ0VG9wIiwiZmxhdEZvcmVzdCIsImlzRm9yZXN0IiwiaXNGbGF0IiwicGFyZW50cyIsInVuUHJvY2Vzc2VkTm9kZXMiLCJkdW1teU5vZGVzIiwicHJldiIsImR1bW15Tm9kZSIsIkRpbWVuc2lvbiIsImR1bW15RWRnZSIsImxFZGdlIiwicGF0aCIsImVicCIsInNsaWRlclZhbHVlIiwiZGVmYXVsdFZhbHVlIiwibWluRGl2IiwibWF4TXVsIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsImEiLCJiIiwicmVtb3ZlZE5vZGVzIiwicmVtYWluaW5nRGVncmVlcyIsImZvdW5kQ2VudGVyIiwidGVtcExpc3QiLCJ0ZW1wTGlzdDIiLCJuZWlnaGJvdXJzIiwibmVpZ2hib3VyIiwib3RoZXJEZWdyZWUiLCJuZXdEZWdyZWUiLCJzZXRHcmFwaE1hbmFnZXIiLCJTSU1QTEVfTk9ERV9IQUxGX1NJWkUiLCJub2RlRnJvbSIsImhlYWQiLCJ0YWlsIiwidmFscyIsInZhbCIsIm90aGVyTm9kZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRyYW5zbGF0ZSIsImVxdWFscyIsInB0IiwidG9TdHJpbmciLCJzZXRYIiwic2V0WSIsImdldERpZmZlcmVuY2UiLCJnZXRDb3B5IiwiZGltIiwic2VlZCIsImx3b3JsZE9yZ1giLCJsd29ybGRPcmdZIiwibGRldmljZU9yZ1giLCJsZGV2aWNlT3JnWSIsImx3b3JsZEV4dFgiLCJsd29ybGRFeHRZIiwibGRldmljZUV4dFgiLCJsZGV2aWNlRXh0WSIsImdldFdvcmxkT3JnWCIsIndveCIsImdldFdvcmxkT3JnWSIsIndveSIsImdldFdvcmxkRXh0WCIsInNldFdvcmxkRXh0WCIsIndleCIsImdldFdvcmxkRXh0WSIsInNldFdvcmxkRXh0WSIsIndleSIsImdldERldmljZU9yZ1giLCJkb3giLCJnZXREZXZpY2VPcmdZIiwiZG95IiwiZ2V0RGV2aWNlRXh0WCIsInNldERldmljZUV4dFgiLCJkZXgiLCJnZXREZXZpY2VFeHRZIiwic2V0RGV2aWNlRXh0WSIsImRleSIsInRyYW5zZm9ybVgiLCJ4RGV2aWNlIiwid29ybGRFeHRYIiwidHJhbnNmb3JtWSIsInlEZXZpY2UiLCJ3b3JsZEV4dFkiLCJpbnZlcnNlVHJhbnNmb3JtWCIsInhXb3JsZCIsImRldmljZUV4dFgiLCJpbnZlcnNlVHJhbnNmb3JtWSIsInlXb3JsZCIsImRldmljZUV4dFkiLCJpblBvaW50Iiwib3V0UG9pbnQiLCJsYXN0SUQiLCJpc1ByaW1pdGl2ZSIsInVuaXF1ZUlEIiwiZ2V0U3RyaW5nIiwiYXJnIiwidHlwZSIsImRlZmF1bHRzIiwicmVhZHkiLCJzdG9wIiwibm9kZURpbWVuc2lvbnNJbmNsdWRlTGFiZWxzIiwicmVmcmVzaCIsImZpdCIsInBhZGRpbmciLCJyYW5kb21pemUiLCJub2RlUmVwdWxzaW9uIiwiZWRnZUVsYXN0aWNpdHkiLCJuZXN0aW5nRmFjdG9yIiwiZ3Jhdml0eSIsIm51bUl0ZXIiLCJ0aWxlIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJ0aWxpbmdQYWRkaW5nVmVydGljYWwiLCJ0aWxpbmdQYWRkaW5nSG9yaXpvbnRhbCIsImdyYXZpdHlSYW5nZUNvbXBvdW5kIiwiZ3Jhdml0eUNvbXBvdW5kIiwiZ3Jhdml0eVJhbmdlIiwiaW5pdGlhbEVuZXJneU9uSW5jcmVtZW50YWwiLCJleHRlbmQiLCJvcHRpb25zIiwiX0NvU0VMYXlvdXQiLCJfb3B0aW9ucyIsImdldFVzZXJPcHRpb25zIiwicnVuIiwiZnJhbWVJZCIsImlkVG9MTm9kZSIsInN0b3BwZWQiLCJ0cmlnZ2VyIiwiZWxlcyIsInByb2Nlc3NDaGlsZHJlbkxpc3QiLCJnZXRUb3BNb3N0Tm9kZXMiLCJlMSIsImdldFBvc2l0aW9ucyIsImVsZSIsIml0ZXJhdGVBbmltYXRlZCIsImFmdGVyUmVwb3NpdGlvbiIsIm9uZSIsInRpY2tzUGVyRnJhbWUiLCJpc0RvbmUiLCJwb3NpdGlvbnMiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImFuaW1hdGlvbkRhdGEiLCJwTm9kZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm5vdCIsImxheW91dFBvc2l0aW9ucyIsIm5vZGVzTWFwIiwicm9vdHMiLCJjaGlsZHJlbl9vZl9jaGlsZHJlbiIsInRoZU5vZGUiLCJkaW1lbnNpb25zIiwibGF5b3V0RGltZW5zaW9ucyIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsInBvc2l0aW9uIiwicGFyc2VGbG9hdCIsImNzcyIsImlzUGFyZW50IiwiYm91bmRpbmdCb3giLCJpbmNsdWRlTGFiZWxzIiwiaW5jbHVkZU5vZGVzIiwiaXNOYU4iLCJ0aGVOZXdHcmFwaCIsImN5dG9zY2FwZSIsIkVYQ0xVREVEX05PREVTIiwiZXhjbHVkZWROb2RlTW92ZUZhY3RvciIsInJlZ2lzdGVyIiwib3JnUHJvdG90eXBlIiwiZXhjbHVkZWROb2RlcyIsIm9wdHMiLCJhcGkiLCJhcHBseU1lcmdlZExheW91dCIsImFwcGx5VW5uYW1lZExheW91dCIsImN5X2hlYWRsZXNzIiwiY3JlYXRlSGVhZGxlc3NJbnN0YW5jZSIsImhlYWRsZXNzIiwic3R5bGVFbmFibGVkIiwib3RoZXJDeSIsImVsZW1lbnRzIiwib3RoZXJFbGVzIiwiYWxsX2VsZXMiLCJ1bmlvbiIsInBvcyIsImNvbW1vbkVsZXMiLCJjb21tb25faWQiLCJpc0xheW91dFN0b3BwZWQiLCJpc090aGVyTGF5b3V0U3RvcHBlZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuRUEsSUFBSUEsb0JBQW9CLG1CQUFBQyxDQUFRLDJFQUFSLENBQXhCOztBQUVBLFNBQVNDLGFBQVQsR0FBeUIsQ0FDeEI7O0FBRUQ7QUFDQSxLQUFLLElBQUlDLElBQVQsSUFBaUJILGlCQUFqQixFQUFvQztBQUNsQ0UsZ0JBQWNDLElBQWQsSUFBc0JILGtC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SUMsb0JBQUosRUFBMEI7QUFDekJ4TyxPQUFHNkssT0FBSCxDQUFXLHNCQUFYO0FBQ0FrRCxZQUFRbEQsT0FBUixDQUFnQixzQkFBaEI7QUFDQTtBQUNELEdBTkQ7O0FBUUFrRCxVQUFRekMsR0FBUixDQUFZLFlBQVosRUFBMEIsWUFBVTtBQUNuQ2tELDBCQUF1QixJQUF2QjtBQUNBLE9BQUlELGVBQUosRUFBcUI7QUFDcEJ2TyxPQUFHNkssT0FBSCxDQUFXLHNCQUFYO0FBQ0FrRCxZQUFRbEQsT0FBUixDQUFnQixzQkFBaEI7QUFDQTtBQUNELEdBTkQ7QUFRQSxFQTNDRDtBQTRDQSxDQTNERDs7UUE2RFErQyxzQixHQUFBQSxzQjtRQUF3QkgsaUIsR0FBQUEsaUI7UUFBbUJDLGtCLEdBQUFBLGtCIiwiZmlsZSI6ImN5dG9zY2FwZS1zeW5jaGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY3l0b3NjYXBlU3luY2hlZFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjeXRvc2NhcGVTeW5jaGVkXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgRkRMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0ZETGF5b3V0Q29uc3RhbnRzJyk7XG5cbmZ1bmN0aW9uIENvU0VDb25zdGFudHMoKSB7XG59XG5cbi8vQ29TRUNvbnN0YW50cyBpbmhlcml0cyBzdGF0aWMgcHJvcHMgaW4gRkRMYXlvdXRDb25zdGFudHNcbmZvciAodmFyIHByb3AgaW4gRkRMYXlvdXRDb25zdGFudHMpIHtcbiAgQ29TRUNvbnN0YW50c1twcm9wXSA9IEZETGF5b3V0Q29uc3RhbnRzW3Byb3BdO1xufVxuXG5Db1NFQ29uc3RhbnRzLkRFRkFVTFRfVVNFX01VTFRJX0xFVkVMX1NDQUxJTkcgPSBmYWxzZTtcbkNvU0VDb25zdGFudHMuREVGQVVMVF9SQURJQUxfU0VQQVJBVElPTiA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEg7XG5Db1NFQ29uc3RhbnRzLkRFRkFVTFRfQ09NUE9ORU5UX1NFUEVSQVRJT04gPSA2MDtcbkNvU0VDb25zdGFudHMuVElMRSA9IHRydWU7XG5Db1NFQ29uc3RhbnRzLlRJTElOR19QQURESU5HX1ZFUlRJQ0FMID0gMTA7XG5Db1NFQ29uc3RhbnRzLlRJTElOR19QQURESU5HX0hPUklaT05UQUwgPSAxMDtcblxubW9kdWxlLmV4cG9ydHMgPSBDb1NFQ29uc3RhbnRzO1xuIiwidmFyIEZETGF5b3V0RWRnZSA9IHJlcXVpcmUoJy4vRkRMYXlvdXRFZGdlJyk7XG5cbmZ1bmN0aW9uIENvU0VFZGdlKHNvdXJjZSwgdGFyZ2V0LCB2RWRnZSkge1xuICBGRExheW91dEVkZ2UuY2FsbCh0aGlzLCBzb3VyY2UsIHRhcmdldCwgdkVkZ2UpO1xufVxuXG5Db1NFRWRnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEZETGF5b3V0RWRnZS5wcm90b3R5cGUpO1xuZm9yICh2YXIgcHJvcCBpbiBGRExheW91dEVkZ2UpIHtcbiAgQ29TRUVkZ2VbcHJvcF0gPSBGRExheW91dEVkZ2VbcHJvcF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29TRUVkZ2VcbiIsInZhciBMR3JhcGggPSByZXF1aXJlKCcuL0xHcmFwaCcpO1xuXG5mdW5jdGlvbiBDb1NFR3JhcGgocGFyZW50LCBncmFwaE1nciwgdkdyYXBoKSB7XG4gIExHcmFwaC5jYWxsKHRoaXMsIHBhcmVudCwgZ3JhcGhNZ3IsIHZHcmFwaCk7XG59XG5cbkNvU0VHcmFwaC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaC5wcm90b3R5cGUpO1xuZm9yICh2YXIgcHJvcCBpbiBMR3JhcGgpIHtcbiAgQ29TRUdyYXBoW3Byb3BdID0gTEdyYXBoW3Byb3BdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvU0VHcmFwaDtcbiIsInZhciBMR3JhcGhNYW5hZ2VyID0gcmVxdWlyZSgnLi9MR3JhcGhNYW5hZ2VyJyk7XG5cbmZ1bmN0aW9uIENvU0VHcmFwaE1hbmFnZXIobGF5b3V0KSB7XG4gIExHcmFwaE1hbmFnZXIuY2FsbCh0aGlzLCBsYXlvdXQpO1xufVxuXG5Db1NFR3JhcGhNYW5hZ2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEdyYXBoTWFuYWdlci5wcm90b3R5cGUpO1xuZm9yICh2YXIgcHJvcCBpbiBMR3JhcGhNYW5hZ2VyKSB7XG4gIENvU0VHcmFwaE1hbmFnZXJbcHJvcF0gPSBMR3JhcGhNYW5hZ2VyW3Byb3BdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvU0VHcmFwaE1hbmFnZXI7XG4iLCJ2YXIgRkRMYXlvdXQgPSByZXF1aXJlKCcuL0ZETGF5b3V0Jyk7XG52YXIgQ29TRUdyYXBoTWFuYWdlciA9IHJlcXVpcmUoJy4vQ29TRUdyYXBoTWFuYWdlcicpO1xudmFyIENvU0VHcmFwaCA9IHJlcXVpcmUoJy4vQ29TRUdyYXBoJyk7XG52YXIgQ29TRU5vZGUgPSByZXF1aXJlKCcuL0NvU0VOb2RlJyk7XG52YXIgQ29TRUVkZ2UgPSByZXF1aXJlKCcuL0NvU0VFZGdlJyk7XG52YXIgQ29TRUNvbnN0YW50cyA9IHJlcXVpcmUoJy4vQ29TRUNvbnN0YW50cycpO1xudmFyIEZETGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9GRExheW91dENvbnN0YW50cycpO1xudmFyIExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vTGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgUG9pbnQgPSByZXF1aXJlKCcuL1BvaW50Jyk7XG52YXIgUG9pbnREID0gcmVxdWlyZSgnLi9Qb2ludEQnKTtcbnZhciBMYXlvdXQgPSByZXF1aXJlKCcuL0xheW91dCcpO1xudmFyIEludGVnZXIgPSByZXF1aXJlKCcuL0ludGVnZXInKTtcbnZhciBJR2VvbWV0cnkgPSByZXF1aXJlKCcuL0lHZW9tZXRyeScpO1xudmFyIExHcmFwaCA9IHJlcXVpcmUoJy4vTEdyYXBoJyk7XG52YXIgVHJhbnNmb3JtID0gcmVxdWlyZSgnLi9UcmFuc2Zvcm0nKTtcblxuZnVuY3Rpb24gQ29TRUxheW91dCgpIHtcbiAgRkRMYXlvdXQuY2FsbCh0aGlzKTtcbiAgXG4gIHRoaXMudG9CZVRpbGVkID0ge307IC8vIE1lbW9yaXplIGlmIGEgbm9kZSBpcyB0byBiZSB0aWxlZCBvciBpcyB0aWxlZFxufVxuXG5Db1NFTGF5b3V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRkRMYXlvdXQucHJvdG90eXBlKTtcblxuZm9yICh2YXIgcHJvcCBpbiBGRExheW91dCkge1xuICBDb1NFTGF5b3V0W3Byb3BdID0gRkRMYXlvdXRbcHJvcF07XG59XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLm5ld0dyYXBoTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGdtID0gbmV3IENvU0VHcmFwaE1hbmFnZXIodGhpcyk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyID0gZ207XG4gIHJldHVybiBnbTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLm5ld0dyYXBoID0gZnVuY3Rpb24gKHZHcmFwaCkge1xuICByZXR1cm4gbmV3IENvU0VHcmFwaChudWxsLCB0aGlzLmdyYXBoTWFuYWdlciwgdkdyYXBoKTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLm5ld05vZGUgPSBmdW5jdGlvbiAodk5vZGUpIHtcbiAgcmV0dXJuIG5ldyBDb1NFTm9kZSh0aGlzLmdyYXBoTWFuYWdlciwgdk5vZGUpO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUubmV3RWRnZSA9IGZ1bmN0aW9uICh2RWRnZSkge1xuICByZXR1cm4gbmV3IENvU0VFZGdlKG51bGwsIG51bGwsIHZFZGdlKTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmluaXRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkge1xuICBGRExheW91dC5wcm90b3R5cGUuaW5pdFBhcmFtZXRlcnMuY2FsbCh0aGlzLCBhcmd1bWVudHMpO1xuICBpZiAoIXRoaXMuaXNTdWJMYXlvdXQpIHtcbiAgICBpZiAoQ29TRUNvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIIDwgMTApXG4gICAge1xuICAgICAgdGhpcy5pZGVhbEVkZ2VMZW5ndGggPSAxMDtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIHRoaXMuaWRlYWxFZGdlTGVuZ3RoID0gQ29TRUNvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIO1xuICAgIH1cblxuICAgIHRoaXMudXNlU21hcnRJZGVhbEVkZ2VMZW5ndGhDYWxjdWxhdGlvbiA9XG4gICAgICAgICAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfVVNFX1NNQVJUX0lERUFMX0VER0VfTEVOR1RIX0NBTENVTEFUSU9OO1xuICAgIHRoaXMuc3ByaW5nQ29uc3RhbnQgPVxuICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9TUFJJTkdfU1RSRU5HVEg7XG4gICAgdGhpcy5yZXB1bHNpb25Db25zdGFudCA9XG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX1JFUFVMU0lPTl9TVFJFTkdUSDtcbiAgICB0aGlzLmdyYXZpdHlDb25zdGFudCA9XG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfU1RSRU5HVEg7XG4gICAgdGhpcy5jb21wb3VuZEdyYXZpdHlDb25zdGFudCA9XG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfU1RSRU5HVEg7XG4gICAgdGhpcy5ncmF2aXR5UmFuZ2VGYWN0b3IgPVxuICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUjtcbiAgICB0aGlzLmNvbXBvdW5kR3Jhdml0eVJhbmdlRmFjdG9yID1cbiAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1I7XG4gIH1cbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNyZWF0ZUJlbmRzQXNOZWVkZWQgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEO1xuICBpZiAoY3JlYXRlQmVuZHNBc05lZWRlZClcbiAge1xuICAgIHRoaXMuY3JlYXRlQmVuZHBvaW50cygpO1xuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsRWRnZXMoKTtcbiAgfVxuXG4gIHRoaXMubGV2ZWwgPSAwO1xuICByZXR1cm4gdGhpcy5jbGFzc2ljTGF5b3V0KCk7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5jbGFzc2ljTGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm5vZGVzV2l0aEdyYXZpdHkgPSB0aGlzLmNhbGN1bGF0ZU5vZGVzVG9BcHBseUdyYXZpdGF0aW9uVG8oKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIuc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24odGhpcy5ub2Rlc1dpdGhHcmF2aXR5KTtcbiAgdGhpcy5jYWxjTm9PZkNoaWxkcmVuRm9yQWxsTm9kZXMoKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIuY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9ycygpO1xuICB0aGlzLmdyYXBoTWFuYWdlci5jYWxjSW5jbHVzaW9uVHJlZURlcHRocygpO1xuICB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuY2FsY0VzdGltYXRlZFNpemUoKTtcbiAgdGhpcy5jYWxjSWRlYWxFZGdlTGVuZ3RocygpO1xuICBcbiAgaWYgKCF0aGlzLmluY3JlbWVudGFsKVxuICB7XG4gICAgdmFyIGZvcmVzdCA9IHRoaXMuZ2V0RmxhdEZvcmVzdCgpO1xuXG4gICAgLy8gVGhlIGdyYXBoIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGxheW91dCBpcyBmbGF0IGFuZCBhIGZvcmVzdFxuICAgIGlmIChmb3Jlc3QubGVuZ3RoID4gMClcbiAgICB7XG4gICAgICB0aGlzLnBvc2l0aW9uTm9kZXNSYWRpYWxseShmb3Jlc3QpO1xuICAgIH1cbiAgICAvLyBUaGUgZ3JhcGggYXNzb2NpYXRlZCB3aXRoIHRoaXMgbGF5b3V0IGlzIG5vdCBmbGF0IG9yIGEgZm9yZXN0XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIC8vIFJlZHVjZSB0aGUgdHJlZXMgd2hlbiBpbmNyZW1lbnRhbCBtb2RlIGlzIG5vdCBlbmFibGVkIGFuZCBncmFwaCBpcyBub3QgYSBmb3Jlc3QgXG4gICAgICB0aGlzLnJlZHVjZVRyZWVzKCk7XG4gICAgICAvLyBVcGRhdGUgbm9kZXMgdGhhdCBncmF2aXR5IHdpbGwgYmUgYXBwbGllZFxuICAgICAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbigpO1xuICAgICAgdmFyIGFsbE5vZGVzID0gbmV3IFNldCh0aGlzLmdldEFsbE5vZGVzKCkpO1xuICAgICAgdmFyIGludGVyc2VjdGlvbiA9IHRoaXMubm9kZXNXaXRoR3Jhdml0eS5maWx0ZXIoeCA9PiBhbGxOb2Rlcy5oYXMoeCkpO1xuICAgICAgdGhpcy5ncmFwaE1hbmFnZXIuc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oaW50ZXJzZWN0aW9uKTtcbiAgICAgIFxuICAgICAgdGhpcy5wb3NpdGlvbk5vZGVzUmFuZG9tbHkoKTtcbiAgICB9XG4gIH1cblxuICB0aGlzLmluaXRTcHJpbmdFbWJlZGRlcigpO1xuICB0aGlzLnJ1blNwcmluZ0VtYmVkZGVyKCk7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudG90YWxJdGVyYXRpb25zKys7XG4gIFxuICBpZiAodGhpcy50b3RhbEl0ZXJhdGlvbnMgPT09IHRoaXMubWF4SXRlcmF0aW9ucyAmJiAhdGhpcy5pc1RyZWVHcm93aW5nICYmICF0aGlzLmlzR3Jvd3RoRmluaXNoZWQpIHtcbiAgICBpZih0aGlzLnBydW5lZE5vZGVzQWxsLmxlbmd0aCA+IDApe1xuICAgICAgdGhpcy5pc1RyZWVHcm93aW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTsgIFxuICAgIH1cbiAgfVxuICBcbiAgaWYgKHRoaXMudG90YWxJdGVyYXRpb25zICUgRkRMYXlvdXRDb25zdGFudHMuQ09OVkVSR0VOQ0VfQ0hFQ0tfUEVSSU9EID09IDAgICYmICF0aGlzLmlzVHJlZUdyb3dpbmcgJiYgIXRoaXMuaXNHcm93dGhGaW5pc2hlZClcbiAge1xuICAgIGlmICh0aGlzLmlzQ29udmVyZ2VkKCkpXG4gICAge1xuICAgICAgaWYodGhpcy5wcnVuZWROb2Rlc0FsbC5sZW5ndGggPiAwKXtcbiAgICAgICAgdGhpcy5pc1RyZWVHcm93aW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTsgIFxuICAgICAgfSBcbiAgICB9XG5cbiAgICB0aGlzLmNvb2xpbmdGYWN0b3IgPSB0aGlzLmluaXRpYWxDb29saW5nRmFjdG9yICpcbiAgICAgICAgICAgICgodGhpcy5tYXhJdGVyYXRpb25zIC0gdGhpcy50b3RhbEl0ZXJhdGlvbnMpIC8gdGhpcy5tYXhJdGVyYXRpb25zKTtcbiAgICB0aGlzLmFuaW1hdGlvblBlcmlvZCA9IE1hdGguY2VpbCh0aGlzLmluaXRpYWxBbmltYXRpb25QZXJpb2QgKiBNYXRoLnNxcnQodGhpcy5jb29saW5nRmFjdG9yKSk7XG4gIH1cbiAgLy8gT3BlcmF0aW9ucyB3aGlsZSB0cmVlIGlzIGdyb3dpbmcgYWdhaW4gXG4gIGlmKHRoaXMuaXNUcmVlR3Jvd2luZyl7XG4gICAgaWYodGhpcy5ncm93VHJlZUl0ZXJhdGlvbnMgJSAxMCA9PSAwKXtcbiAgICAgIGlmKHRoaXMucHJ1bmVkTm9kZXNBbGwubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmdyYXBoTWFuYWdlci51cGRhdGVCb3VuZHMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVHcmlkKCk7XG4gICAgICAgIHRoaXMuZ3Jvd1RyZWUodGhpcy5wcnVuZWROb2Rlc0FsbCk7XG4gICAgICAgIC8vIFVwZGF0ZSBub2RlcyB0aGF0IGdyYXZpdHkgd2lsbCBiZSBhcHBsaWVkXG4gICAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oKTtcbiAgICAgICAgdmFyIGFsbE5vZGVzID0gbmV3IFNldCh0aGlzLmdldEFsbE5vZGVzKCkpO1xuICAgICAgICB2YXIgaW50ZXJzZWN0aW9uID0gdGhpcy5ub2Rlc1dpdGhHcmF2aXR5LmZpbHRlcih4ID0+IGFsbE5vZGVzLmhhcyh4KSk7XG4gICAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uKGludGVyc2VjdGlvbik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmdyYXBoTWFuYWdlci51cGRhdGVCb3VuZHMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVHcmlkKCk7IFxuICAgICAgICB0aGlzLmNvb2xpbmdGYWN0b3IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMOyBcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmlzVHJlZUdyb3dpbmcgPSBmYWxzZTsgIFxuICAgICAgICB0aGlzLmlzR3Jvd3RoRmluaXNoZWQgPSB0cnVlOyBcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5ncm93VHJlZUl0ZXJhdGlvbnMrKztcbiAgfVxuICAvLyBPcGVyYXRpb25zIGFmdGVyIGdyb3d0aCBpcyBmaW5pc2hlZFxuICBpZih0aGlzLmlzR3Jvd3RoRmluaXNoZWQpe1xuICAgIGlmICh0aGlzLmlzQ29udmVyZ2VkKCkpXG4gICAge1xuICAgICAgcmV0dXJuIHRydWU7ICBcbiAgICB9XG4gICAgaWYodGhpcy5hZnRlckdyb3d0aEl0ZXJhdGlvbnMgJSAxMCA9PSAwKXtcbiAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnVwZGF0ZUJvdW5kcygpO1xuICAgICAgdGhpcy51cGRhdGVHcmlkKCk7IFxuICAgIH1cbiAgICB0aGlzLmNvb2xpbmdGYWN0b3IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMICogKCgxMDAgLSB0aGlzLmFmdGVyR3Jvd3RoSXRlcmF0aW9ucykgLyAxMDApO1xuICAgIHRoaXMuYWZ0ZXJHcm93dGhJdGVyYXRpb25zKys7XG4gIH1cbiAgXG4gIHRoaXMudG90YWxEaXNwbGFjZW1lbnQgPSAwO1xuICB0aGlzLmdyYXBoTWFuYWdlci51cGRhdGVCb3VuZHMoKTtcbiAgdGhpcy5jYWxjU3ByaW5nRm9yY2VzKCk7XG4gIHRoaXMuY2FsY1JlcHVsc2lvbkZvcmNlcygpO1xuICB0aGlzLmNhbGNHcmF2aXRhdGlvbmFsRm9yY2VzKCk7XG4gIHRoaXMubW92ZU5vZGVzKCk7XG4gIHRoaXMuYW5pbWF0ZSgpO1xuICBcbiAgcmV0dXJuIGZhbHNlOyAvLyBMYXlvdXQgaXMgbm90IGVuZGVkIHlldCByZXR1cm4gZmFsc2Vcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmdldFBvc2l0aW9uc0RhdGEgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGFsbE5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXMoKTtcbiAgdmFyIHBEYXRhID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcmVjdCA9IGFsbE5vZGVzW2ldLnJlY3Q7XG4gICAgdmFyIGlkID0gYWxsTm9kZXNbaV0uaWQ7XG4gICAgcERhdGFbaWRdID0ge1xuICAgICAgaWQ6IGlkLFxuICAgICAgeDogcmVjdC5nZXRDZW50ZXJYKCksXG4gICAgICB5OiByZWN0LmdldENlbnRlclkoKSxcbiAgICAgIHc6IHJlY3Qud2lkdGgsXG4gICAgICBoOiByZWN0LmhlaWdodFxuICAgIH07XG4gIH1cbiAgXG4gIHJldHVybiBwRGF0YTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnJ1blNwcmluZ0VtYmVkZGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmluaXRpYWxBbmltYXRpb25QZXJpb2QgPSAyNTtcbiAgdGhpcy5hbmltYXRpb25QZXJpb2QgPSB0aGlzLmluaXRpYWxBbmltYXRpb25QZXJpb2Q7XG4gIHZhciBsYXlvdXRFbmRlZCA9IGZhbHNlO1xuICBcbiAgLy8gSWYgYW1pbmF0ZSBvcHRpb24gaXMgJ2R1cmluZycgc2lnbmFsIHRoYXQgbGF5b3V0IGlzIHN1cHBvc2VkIHRvIHN0YXJ0IGl0ZXJhdGluZ1xuICBpZiAoIEZETGF5b3V0Q29uc3RhbnRzLkFOSU1BVEUgPT09ICdkdXJpbmcnICkge1xuICAgIHRoaXMuZW1pdCgnbGF5b3V0c3RhcnRlZCcpO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIElmIGFtaW5hdGUgb3B0aW9uIGlzICdkdXJpbmcnIHRpY2soKSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBvbiBpbmRleC5qc1xuICAgIHdoaWxlICghbGF5b3V0RW5kZWQpIHtcbiAgICAgIGxheW91dEVuZGVkID0gdGhpcy50aWNrKCk7XG4gICAgfVxuXG4gICAgdGhpcy5ncmFwaE1hbmFnZXIudXBkYXRlQm91bmRzKCk7XG4gIH1cbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmNhbGN1bGF0ZU5vZGVzVG9BcHBseUdyYXZpdGF0aW9uVG8gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBub2RlTGlzdCA9IFtdO1xuICB2YXIgZ3JhcGg7XG5cbiAgdmFyIGdyYXBocyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEdyYXBocygpO1xuICB2YXIgc2l6ZSA9IGdyYXBocy5sZW5ndGg7XG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKVxuICB7XG4gICAgZ3JhcGggPSBncmFwaHNbaV07XG5cbiAgICBncmFwaC51cGRhdGVDb25uZWN0ZWQoKTtcblxuICAgIGlmICghZ3JhcGguaXNDb25uZWN0ZWQpXG4gICAge1xuICAgICAgbm9kZUxpc3QgPSBub2RlTGlzdC5jb25jYXQoZ3JhcGguZ2V0Tm9kZXMoKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGVMaXN0O1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuY2FsY05vT2ZDaGlsZHJlbkZvckFsbE5vZGVzID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIG5vZGU7XG4gIHZhciBhbGxOb2RlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzKCk7XG4gIFxuICBmb3IodmFyIGkgPSAwOyBpIDwgYWxsTm9kZXMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICAgIG5vZGUgPSBhbGxOb2Rlc1tpXTtcbiAgICAgIG5vZGUubm9PZkNoaWxkcmVuID0gbm9kZS5nZXROb09mQ2hpbGRyZW4oKTtcbiAgfVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuY3JlYXRlQmVuZHBvaW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGVkZ2VzID0gW107XG4gIGVkZ2VzID0gZWRnZXMuY29uY2F0KHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbEVkZ2VzKCkpO1xuICB2YXIgdmlzaXRlZCA9IG5ldyBIYXNoU2V0KCk7XG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgZWRnZXMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICB2YXIgZWRnZSA9IGVkZ2VzW2ldO1xuXG4gICAgaWYgKCF2aXNpdGVkLmNvbnRhaW5zKGVkZ2UpKVxuICAgIHtcbiAgICAgIHZhciBzb3VyY2UgPSBlZGdlLmdldFNvdXJjZSgpO1xuICAgICAgdmFyIHRhcmdldCA9IGVkZ2UuZ2V0VGFyZ2V0KCk7XG5cbiAgICAgIGlmIChzb3VyY2UgPT0gdGFyZ2V0KVxuICAgICAge1xuICAgICAgICBlZGdlLmdldEJlbmRwb2ludHMoKS5wdXNoKG5ldyBQb2ludEQoKSk7XG4gICAgICAgIGVkZ2UuZ2V0QmVuZHBvaW50cygpLnB1c2gobmV3IFBvaW50RCgpKTtcbiAgICAgICAgdGhpcy5jcmVhdGVEdW1teU5vZGVzRm9yQmVuZHBvaW50cyhlZGdlKTtcbiAgICAgICAgdmlzaXRlZC5hZGQoZWRnZSk7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIHZhciBlZGdlTGlzdCA9IFtdO1xuXG4gICAgICAgIGVkZ2VMaXN0ID0gZWRnZUxpc3QuY29uY2F0KHNvdXJjZS5nZXRFZGdlTGlzdFRvTm9kZSh0YXJnZXQpKTtcbiAgICAgICAgZWRnZUxpc3QgPSBlZGdlTGlzdC5jb25jYXQodGFyZ2V0LmdldEVkZ2VMaXN0VG9Ob2RlKHNvdXJjZSkpO1xuXG4gICAgICAgIGlmICghdmlzaXRlZC5jb250YWlucyhlZGdlTGlzdFswXSkpXG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoZWRnZUxpc3QubGVuZ3RoID4gMSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgaztcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBlZGdlTGlzdC5sZW5ndGg7IGsrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFyIG11bHRpRWRnZSA9IGVkZ2VMaXN0W2tdO1xuICAgICAgICAgICAgICBtdWx0aUVkZ2UuZ2V0QmVuZHBvaW50cygpLnB1c2gobmV3IFBvaW50RCgpKTtcbiAgICAgICAgICAgICAgdGhpcy5jcmVhdGVEdW1teU5vZGVzRm9yQmVuZHBvaW50cyhtdWx0aUVkZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB2aXNpdGVkLmFkZEFsbChsaXN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2aXNpdGVkLnNpemUoKSA9PSBlZGdlcy5sZW5ndGgpXG4gICAge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5wb3NpdGlvbk5vZGVzUmFkaWFsbHkgPSBmdW5jdGlvbiAoZm9yZXN0KSB7XG4gIC8vIFdlIHRpbGUgdGhlIHRyZWVzIHRvIGEgZ3JpZCByb3cgYnkgcm93OyBmaXJzdCB0cmVlIHN0YXJ0cyBhdCAoMCwwKVxuICB2YXIgY3VycmVudFN0YXJ0aW5nUG9pbnQgPSBuZXcgUG9pbnQoMCwgMCk7XG4gIHZhciBudW1iZXJPZkNvbHVtbnMgPSBNYXRoLmNlaWwoTWF0aC5zcXJ0KGZvcmVzdC5sZW5ndGgpKTtcbiAgdmFyIGhlaWdodCA9IDA7XG4gIHZhciBjdXJyZW50WSA9IDA7XG4gIHZhciBjdXJyZW50WCA9IDA7XG4gIHZhciBwb2ludCA9IG5ldyBQb2ludEQoMCwgMCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3Jlc3QubGVuZ3RoOyBpKyspXG4gIHtcbiAgICBpZiAoaSAlIG51bWJlck9mQ29sdW1ucyA9PSAwKVxuICAgIHtcbiAgICAgIC8vIFN0YXJ0IG9mIGEgbmV3IHJvdywgbWFrZSB0aGUgeCBjb29yZGluYXRlIDAsIGluY3JlbWVudCB0aGVcbiAgICAgIC8vIHkgY29vcmRpbmF0ZSB3aXRoIHRoZSBtYXggaGVpZ2h0IG9mIHRoZSBwcmV2aW91cyByb3dcbiAgICAgIGN1cnJlbnRYID0gMDtcbiAgICAgIGN1cnJlbnRZID0gaGVpZ2h0O1xuXG4gICAgICBpZiAoaSAhPSAwKVxuICAgICAge1xuICAgICAgICBjdXJyZW50WSArPSBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfQ09NUE9ORU5UX1NFUEVSQVRJT047XG4gICAgICB9XG5cbiAgICAgIGhlaWdodCA9IDA7XG4gICAgfVxuXG4gICAgdmFyIHRyZWUgPSBmb3Jlc3RbaV07XG5cbiAgICAvLyBGaW5kIHRoZSBjZW50ZXIgb2YgdGhlIHRyZWVcbiAgICB2YXIgY2VudGVyTm9kZSA9IExheW91dC5maW5kQ2VudGVyT2ZUcmVlKHRyZWUpO1xuXG4gICAgLy8gU2V0IHRoZSBzdGFyaW5nIHBvaW50IG9mIHRoZSBuZXh0IHRyZWVcbiAgICBjdXJyZW50U3RhcnRpbmdQb2ludC54ID0gY3VycmVudFg7XG4gICAgY3VycmVudFN0YXJ0aW5nUG9pbnQueSA9IGN1cnJlbnRZO1xuXG4gICAgLy8gRG8gYSByYWRpYWwgbGF5b3V0IHN0YXJ0aW5nIHdpdGggdGhlIGNlbnRlclxuICAgIHBvaW50ID1cbiAgICAgICAgICAgIENvU0VMYXlvdXQucmFkaWFsTGF5b3V0KHRyZWUsIGNlbnRlck5vZGUsIGN1cnJlbnRTdGFydGluZ1BvaW50KTtcblxuICAgIGlmIChwb2ludC55ID4gaGVpZ2h0KVxuICAgIHtcbiAgICAgIGhlaWdodCA9IE1hdGguZmxvb3IocG9pbnQueSk7XG4gICAgfVxuXG4gICAgY3VycmVudFggPSBNYXRoLmZsb29yKHBvaW50LnggKyBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfQ09NUE9ORU5UX1NFUEVSQVRJT04pO1xuICB9XG5cbiAgdGhpcy50cmFuc2Zvcm0oXG4gICAgICAgICAgbmV3IFBvaW50RChMYXlvdXRDb25zdGFudHMuV09STERfQ0VOVEVSX1ggLSBwb2ludC54IC8gMixcbiAgICAgICAgICAgICAgICAgIExheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWSAtIHBvaW50LnkgLyAyKSk7XG59O1xuXG5Db1NFTGF5b3V0LnJhZGlhbExheW91dCA9IGZ1bmN0aW9uICh0cmVlLCBjZW50ZXJOb2RlLCBzdGFydGluZ1BvaW50KSB7XG4gIHZhciByYWRpYWxTZXAgPSBNYXRoLm1heCh0aGlzLm1heERpYWdvbmFsSW5UcmVlKHRyZWUpLFxuICAgICAgICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9SQURJQUxfU0VQQVJBVElPTik7XG4gIENvU0VMYXlvdXQuYnJhbmNoUmFkaWFsTGF5b3V0KGNlbnRlck5vZGUsIG51bGwsIDAsIDM1OSwgMCwgcmFkaWFsU2VwKTtcbiAgdmFyIGJvdW5kcyA9IExHcmFwaC5jYWxjdWxhdGVCb3VuZHModHJlZSk7XG5cbiAgdmFyIHRyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm0oKTtcbiAgdHJhbnNmb3JtLnNldERldmljZU9yZ1goYm91bmRzLmdldE1pblgoKSk7XG4gIHRyYW5zZm9ybS5zZXREZXZpY2VPcmdZKGJvdW5kcy5nZXRNaW5ZKCkpO1xuICB0cmFuc2Zvcm0uc2V0V29ybGRPcmdYKHN0YXJ0aW5nUG9pbnQueCk7XG4gIHRyYW5zZm9ybS5zZXRXb3JsZE9yZ1koc3RhcnRpbmdQb2ludC55KTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspXG4gIHtcbiAgICB2YXIgbm9kZSA9IHRyZWVbaV07XG4gICAgbm9kZS50cmFuc2Zvcm0odHJhbnNmb3JtKTtcbiAgfVxuXG4gIHZhciBib3R0b21SaWdodCA9XG4gICAgICAgICAgbmV3IFBvaW50RChib3VuZHMuZ2V0TWF4WCgpLCBib3VuZHMuZ2V0TWF4WSgpKTtcblxuICByZXR1cm4gdHJhbnNmb3JtLmludmVyc2VUcmFuc2Zvcm1Qb2ludChib3R0b21SaWdodCk7XG59O1xuXG5Db1NFTGF5b3V0LmJyYW5jaFJhZGlhbExheW91dCA9IGZ1bmN0aW9uIChub2RlLCBwYXJlbnRPZk5vZGUsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBkaXN0YW5jZSwgcmFkaWFsU2VwYXJhdGlvbikge1xuICAvLyBGaXJzdCwgcG9zaXRpb24gdGhpcyBub2RlIGJ5IGZpbmRpbmcgaXRzIGFuZ2xlLlxuICB2YXIgaGFsZkludGVydmFsID0gKChlbmRBbmdsZSAtIHN0YXJ0QW5nbGUpICsgMSkgLyAyO1xuXG4gIGlmIChoYWxmSW50ZXJ2YWwgPCAwKVxuICB7XG4gICAgaGFsZkludGVydmFsICs9IDE4MDtcbiAgfVxuXG4gIHZhciBub2RlQW5nbGUgPSAoaGFsZkludGVydmFsICsgc3RhcnRBbmdsZSkgJSAzNjA7XG4gIHZhciB0ZXRhID0gKG5vZGVBbmdsZSAqIElHZW9tZXRyeS5UV09fUEkpIC8gMzYwO1xuXG4gIC8vIE1ha2UgcG9sYXIgdG8gamF2YSBjb3JkaW5hdGUgY29udmVyc2lvbi5cbiAgdmFyIGNvc190ZXRhID0gTWF0aC5jb3ModGV0YSk7XG4gIHZhciB4XyA9IGRpc3RhbmNlICogTWF0aC5jb3ModGV0YSk7XG4gIHZhciB5XyA9IGRpc3RhbmNlICogTWF0aC5zaW4odGV0YSk7XG5cbiAgbm9kZS5zZXRDZW50ZXIoeF8sIHlfKTtcblxuICAvLyBUcmF2ZXJzZSBhbGwgbmVpZ2hib3JzIG9mIHRoaXMgbm9kZSBhbmQgcmVjdXJzaXZlbHkgY2FsbCB0aGlzXG4gIC8vIGZ1bmN0aW9uLlxuICB2YXIgbmVpZ2hib3JFZGdlcyA9IFtdO1xuICBuZWlnaGJvckVkZ2VzID0gbmVpZ2hib3JFZGdlcy5jb25jYXQobm9kZS5nZXRFZGdlcygpKTtcbiAgdmFyIGNoaWxkQ291bnQgPSBuZWlnaGJvckVkZ2VzLmxlbmd0aDtcblxuICBpZiAocGFyZW50T2ZOb2RlICE9IG51bGwpXG4gIHtcbiAgICBjaGlsZENvdW50LS07XG4gIH1cblxuICB2YXIgYnJhbmNoQ291bnQgPSAwO1xuXG4gIHZhciBpbmNFZGdlc0NvdW50ID0gbmVpZ2hib3JFZGdlcy5sZW5ndGg7XG4gIHZhciBzdGFydEluZGV4O1xuXG4gIHZhciBlZGdlcyA9IG5vZGUuZ2V0RWRnZXNCZXR3ZWVuKHBhcmVudE9mTm9kZSk7XG5cbiAgLy8gSWYgdGhlcmUgYXJlIG11bHRpcGxlIGVkZ2VzLCBwcnVuZSB0aGVtIHVudGlsIHRoZXJlIHJlbWFpbnMgb25seSBvbmVcbiAgLy8gZWRnZS5cbiAgd2hpbGUgKGVkZ2VzLmxlbmd0aCA+IDEpXG4gIHtcbiAgICAvL25laWdoYm9yRWRnZXMucmVtb3ZlKGVkZ2VzLnJlbW92ZSgwKSk7XG4gICAgdmFyIHRlbXAgPSBlZGdlc1swXTtcbiAgICBlZGdlcy5zcGxpY2UoMCwgMSk7XG4gICAgdmFyIGluZGV4ID0gbmVpZ2hib3JFZGdlcy5pbmRleE9mKHRlbXApO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICBuZWlnaGJvckVkZ2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIGluY0VkZ2VzQ291bnQtLTtcbiAgICBjaGlsZENvdW50LS07XG4gIH1cblxuICBpZiAocGFyZW50T2ZOb2RlICE9IG51bGwpXG4gIHtcbiAgICAvL2Fzc2VydCBlZGdlcy5sZW5ndGggPT0gMTtcbiAgICBzdGFydEluZGV4ID0gKG5laWdoYm9yRWRnZXMuaW5kZXhPZihlZGdlc1swXSkgKyAxKSAlIGluY0VkZ2VzQ291bnQ7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgc3RhcnRJbmRleCA9IDA7XG4gIH1cblxuICB2YXIgc3RlcEFuZ2xlID0gTWF0aC5hYnMoZW5kQW5nbGUgLSBzdGFydEFuZ2xlKSAvIGNoaWxkQ291bnQ7XG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0SW5kZXg7XG4gICAgICAgICAgYnJhbmNoQ291bnQgIT0gY2hpbGRDb3VudDtcbiAgICAgICAgICBpID0gKCsraSkgJSBpbmNFZGdlc0NvdW50KVxuICB7XG4gICAgdmFyIGN1cnJlbnROZWlnaGJvciA9XG4gICAgICAgICAgICBuZWlnaGJvckVkZ2VzW2ldLmdldE90aGVyRW5kKG5vZGUpO1xuXG4gICAgLy8gRG9uJ3QgYmFjayB0cmF2ZXJzZSB0byByb290IG5vZGUgaW4gY3VycmVudCB0cmVlLlxuICAgIGlmIChjdXJyZW50TmVpZ2hib3IgPT0gcGFyZW50T2ZOb2RlKVxuICAgIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBjaGlsZFN0YXJ0QW5nbGUgPVxuICAgICAgICAgICAgKHN0YXJ0QW5nbGUgKyBicmFuY2hDb3VudCAqIHN0ZXBBbmdsZSkgJSAzNjA7XG4gICAgdmFyIGNoaWxkRW5kQW5nbGUgPSAoY2hpbGRTdGFydEFuZ2xlICsgc3RlcEFuZ2xlKSAlIDM2MDtcblxuICAgIENvU0VMYXlvdXQuYnJhbmNoUmFkaWFsTGF5b3V0KGN1cnJlbnROZWlnaGJvcixcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICBjaGlsZFN0YXJ0QW5nbGUsIGNoaWxkRW5kQW5nbGUsXG4gICAgICAgICAgICBkaXN0YW5jZSArIHJhZGlhbFNlcGFyYXRpb24sIHJhZGlhbFNlcGFyYXRpb24pO1xuXG4gICAgYnJhbmNoQ291bnQrKztcbiAgfVxufTtcblxuQ29TRUxheW91dC5tYXhEaWFnb25hbEluVHJlZSA9IGZ1bmN0aW9uICh0cmVlKSB7XG4gIHZhciBtYXhEaWFnb25hbCA9IEludGVnZXIuTUlOX1ZBTFVFO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZS5sZW5ndGg7IGkrKylcbiAge1xuICAgIHZhciBub2RlID0gdHJlZVtpXTtcbiAgICB2YXIgZGlhZ29uYWwgPSBub2RlLmdldERpYWdvbmFsKCk7XG5cbiAgICBpZiAoZGlhZ29uYWwgPiBtYXhEaWFnb25hbClcbiAgICB7XG4gICAgICBtYXhEaWFnb25hbCA9IGRpYWdvbmFsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYXhEaWFnb25hbDtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmNhbGNSZXB1bHNpb25SYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gZm9ybXVsYSBpcyAyIHggKGxldmVsICsgMSkgeCBpZGVhbEVkZ2VMZW5ndGhcbiAgcmV0dXJuICgyICogKHRoaXMubGV2ZWwgKyAxKSAqIHRoaXMuaWRlYWxFZGdlTGVuZ3RoKTtcbn07XG5cbi8vIFRpbGluZyBtZXRob2RzXG5cbi8vIEdyb3VwIHplcm8gZGVncmVlIG1lbWJlcnMgd2hvc2UgcGFyZW50cyBhcmUgbm90IHRvIGJlIHRpbGVkLCBjcmVhdGUgZHVtbXkgcGFyZW50cyB3aGVyZSBuZWVkZWQgYW5kIGZpbGwgbWVtYmVyR3JvdXBzIGJ5IHRoZWlyIGR1bW1wIHBhcmVudCBpZCdzXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5ncm91cFplcm9EZWdyZWVNZW1iZXJzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIC8vIGFycmF5IG9mIFtwYXJlbnRfaWQgeCBvbmVEZWdyZWVOb2RlX2lkXVxuICB2YXIgdGVtcE1lbWJlckdyb3VwcyA9IHt9OyAvLyBBIHRlbXBvcmFyeSBtYXAgb2YgcGFyZW50IG5vZGUgYW5kIGl0cyB6ZXJvIGRlZ3JlZSBtZW1iZXJzXG4gIHRoaXMubWVtYmVyR3JvdXBzID0ge307IC8vIEEgbWFwIG9mIGR1bW15IHBhcmVudCBub2RlIGFuZCBpdHMgemVybyBkZWdyZWUgbWVtYmVycyB3aG9zZSBwYXJlbnRzIGFyZSBub3QgdG8gYmUgdGlsZWRcbiAgdGhpcy5pZFRvRHVtbXlOb2RlID0ge307IC8vIEEgbWFwIG9mIGlkIHRvIGR1bW15IG5vZGUgXG4gIFxuICB2YXIgemVyb0RlZ3JlZSA9IFtdOyAvLyBMaXN0IG9mIHplcm8gZGVncmVlIG5vZGVzIHdob3NlIHBhcmVudHMgYXJlIG5vdCB0byBiZSB0aWxlZFxuICB2YXIgYWxsTm9kZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2RlcygpO1xuXG4gIC8vIEZpbGwgemVybyBkZWdyZWUgbGlzdFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG5vZGUgPSBhbGxOb2Rlc1tpXTtcbiAgICB2YXIgcGFyZW50ID0gbm9kZS5nZXRQYXJlbnQoKTtcbiAgICAvLyBJZiBhIG5vZGUgaGFzIHplcm8gZGVncmVlIGFuZCBpdHMgcGFyZW50IGlzIG5vdCB0byBiZSB0aWxlZCBpZiBleGlzdHMgYWRkIHRoYXQgbm9kZSB0byB6ZXJvRGVncmVzIGxpc3RcbiAgICBpZiAodGhpcy5nZXROb2RlRGVncmVlV2l0aENoaWxkcmVuKG5vZGUpID09PSAwICYmICggcGFyZW50LmlkID09IHVuZGVmaW5lZCB8fCAhdGhpcy5nZXRUb0JlVGlsZWQocGFyZW50KSApICkge1xuICAgICAgemVyb0RlZ3JlZS5wdXNoKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENyZWF0ZSBhIG1hcCBvZiBwYXJlbnQgbm9kZSBhbmQgaXRzIHplcm8gZGVncmVlIG1lbWJlcnNcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB6ZXJvRGVncmVlLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgdmFyIG5vZGUgPSB6ZXJvRGVncmVlW2ldOyAvLyBaZXJvIGRlZ3JlZSBub2RlIGl0c2VsZlxuICAgIHZhciBwX2lkID0gbm9kZS5nZXRQYXJlbnQoKS5pZDsgLy8gUGFyZW50IGlkXG5cbiAgICBpZiAodHlwZW9mIHRlbXBNZW1iZXJHcm91cHNbcF9pZF0gPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICB0ZW1wTWVtYmVyR3JvdXBzW3BfaWRdID0gW107XG5cbiAgICB0ZW1wTWVtYmVyR3JvdXBzW3BfaWRdID0gdGVtcE1lbWJlckdyb3Vwc1twX2lkXS5jb25jYXQobm9kZSk7IC8vIFB1c2ggbm9kZSB0byB0aGUgbGlzdCBiZWxvbmdzIHRvIGl0cyBwYXJlbnQgaW4gdGVtcE1lbWJlckdyb3Vwc1xuICB9XG5cbiAgLy8gSWYgdGhlcmUgYXJlIGF0IGxlYXN0IHR3byBub2RlcyBhdCBhIGxldmVsLCBjcmVhdGUgYSBkdW1teSBjb21wb3VuZCBmb3IgdGhlbVxuICBPYmplY3Qua2V5cyh0ZW1wTWVtYmVyR3JvdXBzKS5mb3JFYWNoKGZ1bmN0aW9uKHBfaWQpIHtcbiAgICBpZiAodGVtcE1lbWJlckdyb3Vwc1twX2lkXS5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgZHVtbXlDb21wb3VuZElkID0gXCJEdW1teUNvbXBvdW5kX1wiICsgcF9pZDsgLy8gVGhlIGlkIG9mIGR1bW15IGNvbXBvdW5kIHdoaWNoIHdpbGwgYmUgY3JlYXRlZCBzb29uXG4gICAgICBzZWxmLm1lbWJlckdyb3Vwc1tkdW1teUNvbXBvdW5kSWRdID0gdGVtcE1lbWJlckdyb3Vwc1twX2lkXTsgLy8gQWRkIGR1bW15IGNvbXBvdW5kIHRvIG1lbWJlckdyb3Vwc1xuXG4gICAgICB2YXIgcGFyZW50ID0gdGVtcE1lbWJlckdyb3Vwc1twX2lkXVswXS5nZXRQYXJlbnQoKTsgLy8gVGhlIHBhcmVudCBvZiB6ZXJvIGRlZ3JlZSBub2RlcyB3aWxsIGJlIHRoZSBwYXJlbnQgb2YgbmV3IGR1bW15IGNvbXBvdW5kXG5cbiAgICAgIC8vIENyZWF0ZSBhIGR1bW15IGNvbXBvdW5kIHdpdGggY2FsY3VsYXRlZCBpZFxuICAgICAgdmFyIGR1bW15Q29tcG91bmQgPSBuZXcgQ29TRU5vZGUoc2VsZi5ncmFwaE1hbmFnZXIpO1xuICAgICAgZHVtbXlDb21wb3VuZC5pZCA9IGR1bW15Q29tcG91bmRJZDtcbiAgICAgIGR1bW15Q29tcG91bmQucGFkZGluZ0xlZnQgPSBwYXJlbnQucGFkZGluZ0xlZnQgfHwgMDtcbiAgICAgIGR1bW15Q29tcG91bmQucGFkZGluZ1JpZ2h0ID0gcGFyZW50LnBhZGRpbmdSaWdodCB8fCAwO1xuICAgICAgZHVtbXlDb21wb3VuZC5wYWRkaW5nQm90dG9tID0gcGFyZW50LnBhZGRpbmdCb3R0b20gfHwgMDtcbiAgICAgIGR1bW15Q29tcG91bmQucGFkZGluZ1RvcCA9IHBhcmVudC5wYWRkaW5nVG9wIHx8IDA7XG4gICAgICBcbiAgICAgIHNlbGYuaWRUb0R1bW15Tm9kZVtkdW1teUNvbXBvdW5kSWRdID0gZHVtbXlDb21wb3VuZDtcbiAgICAgIFxuICAgICAgdmFyIGR1bW15UGFyZW50R3JhcGggPSBzZWxmLmdldEdyYXBoTWFuYWdlcigpLmFkZChzZWxmLm5ld0dyYXBoKCksIGR1bW15Q29tcG91bmQpO1xuICAgICAgdmFyIHBhcmVudEdyYXBoID0gcGFyZW50LmdldENoaWxkKCk7XG5cbiAgICAgIC8vIEFkZCBkdW1teSBjb21wb3VuZCB0byBwYXJlbnQgdGhlIGdyYXBoXG4gICAgICBwYXJlbnRHcmFwaC5hZGQoZHVtbXlDb21wb3VuZCk7XG5cbiAgICAgIC8vIEZvciBlYWNoIHplcm8gZGVncmVlIG5vZGUgaW4gdGhpcyBsZXZlbCByZW1vdmUgaXQgZnJvbSBpdHMgcGFyZW50IGdyYXBoIGFuZCBhZGQgaXQgdG8gdGhlIGdyYXBoIG9mIGR1bW15IHBhcmVudFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wTWVtYmVyR3JvdXBzW3BfaWRdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBub2RlID0gdGVtcE1lbWJlckdyb3Vwc1twX2lkXVtpXTtcbiAgICAgICAgXG4gICAgICAgIHBhcmVudEdyYXBoLnJlbW92ZShub2RlKTtcbiAgICAgICAgZHVtbXlQYXJlbnRHcmFwaC5hZGQobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmNsZWFyQ29tcG91bmRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY2hpbGRHcmFwaE1hcCA9IHt9O1xuICB2YXIgaWRUb05vZGUgPSB7fTtcblxuICAvLyBHZXQgY29tcG91bmQgb3JkZXJpbmcgYnkgZmluZGluZyB0aGUgaW5uZXIgb25lIGZpcnN0XG4gIHRoaXMucGVyZm9ybURGU09uQ29tcG91bmRzKCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbXBvdW5kT3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICBcbiAgICBpZFRvTm9kZVt0aGlzLmNvbXBvdW5kT3JkZXJbaV0uaWRdID0gdGhpcy5jb21wb3VuZE9yZGVyW2ldO1xuICAgIGNoaWxkR3JhcGhNYXBbdGhpcy5jb21wb3VuZE9yZGVyW2ldLmlkXSA9IFtdLmNvbmNhdCh0aGlzLmNvbXBvdW5kT3JkZXJbaV0uZ2V0Q2hpbGQoKS5nZXROb2RlcygpKTtcblxuICAgIC8vIFJlbW92ZSBjaGlsZHJlbiBvZiBjb21wb3VuZHNcbiAgICB0aGlzLmdyYXBoTWFuYWdlci5yZW1vdmUodGhpcy5jb21wb3VuZE9yZGVyW2ldLmdldENoaWxkKCkpO1xuICAgIHRoaXMuY29tcG91bmRPcmRlcltpXS5jaGlsZCA9IG51bGw7XG4gIH1cbiAgXG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsTm9kZXMoKTtcbiAgXG4gIC8vIFRpbGUgdGhlIHJlbW92ZWQgY2hpbGRyZW5cbiAgdGhpcy50aWxlQ29tcG91bmRNZW1iZXJzKGNoaWxkR3JhcGhNYXAsIGlkVG9Ob2RlKTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmNsZWFyWmVyb0RlZ3JlZU1lbWJlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHRpbGVkWmVyb0RlZ3JlZVBhY2sgPSB0aGlzLnRpbGVkWmVyb0RlZ3JlZVBhY2sgPSBbXTtcblxuICBPYmplY3Qua2V5cyh0aGlzLm1lbWJlckdyb3VwcykuZm9yRWFjaChmdW5jdGlvbihpZCkge1xuICAgIHZhciBjb21wb3VuZE5vZGUgPSBzZWxmLmlkVG9EdW1teU5vZGVbaWRdOyAvLyBHZXQgdGhlIGR1bW15IGNvbXBvdW5kXG5cbiAgICB0aWxlZFplcm9EZWdyZWVQYWNrW2lkXSA9IHNlbGYudGlsZU5vZGVzKHNlbGYubWVtYmVyR3JvdXBzW2lkXSwgY29tcG91bmROb2RlLnBhZGRpbmdMZWZ0ICsgY29tcG91bmROb2RlLnBhZGRpbmdSaWdodCk7XG5cbiAgICAvLyBTZXQgdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIGR1bW15IGNvbXBvdW5kIGFzIGNhbGN1bGF0ZWRcbiAgICBjb21wb3VuZE5vZGUucmVjdC53aWR0aCA9IHRpbGVkWmVyb0RlZ3JlZVBhY2tbaWRdLndpZHRoO1xuICAgIGNvbXBvdW5kTm9kZS5yZWN0LmhlaWdodCA9IHRpbGVkWmVyb0RlZ3JlZVBhY2tbaWRdLmhlaWdodDtcbiAgfSk7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5yZXBvcHVsYXRlQ29tcG91bmRzID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBpID0gdGhpcy5jb21wb3VuZE9yZGVyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxDb21wb3VuZE5vZGUgPSB0aGlzLmNvbXBvdW5kT3JkZXJbaV07XG4gICAgdmFyIGlkID0gbENvbXBvdW5kTm9kZS5pZDtcbiAgICB2YXIgaG9yaXpvbnRhbE1hcmdpbiA9IGxDb21wb3VuZE5vZGUucGFkZGluZ0xlZnQ7XG4gICAgdmFyIHZlcnRpY2FsTWFyZ2luID0gbENvbXBvdW5kTm9kZS5wYWRkaW5nVG9wO1xuXG4gICAgdGhpcy5hZGp1c3RMb2NhdGlvbnModGhpcy50aWxlZE1lbWJlclBhY2tbaWRdLCBsQ29tcG91bmROb2RlLnJlY3QueCwgbENvbXBvdW5kTm9kZS5yZWN0LnksIGhvcml6b250YWxNYXJnaW4sIHZlcnRpY2FsTWFyZ2luKTtcbiAgfVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUucmVwb3B1bGF0ZVplcm9EZWdyZWVNZW1iZXJzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciB0aWxlZFBhY2sgPSB0aGlzLnRpbGVkWmVyb0RlZ3JlZVBhY2s7XG4gIFxuICBPYmplY3Qua2V5cyh0aWxlZFBhY2spLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICB2YXIgY29tcG91bmROb2RlID0gc2VsZi5pZFRvRHVtbXlOb2RlW2lkXTsgLy8gR2V0IHRoZSBkdW1teSBjb21wb3VuZCBieSBpdHMgaWRcbiAgICB2YXIgaG9yaXpvbnRhbE1hcmdpbiA9IGNvbXBvdW5kTm9kZS5wYWRkaW5nTGVmdDtcbiAgICB2YXIgdmVydGljYWxNYXJnaW4gPSBjb21wb3VuZE5vZGUucGFkZGluZ1RvcDtcblxuICAgIC8vIEFkanVzdCB0aGUgcG9zaXRpb25zIG9mIG5vZGVzIHdydCBpdHMgY29tcG91bmRcbiAgICBzZWxmLmFkanVzdExvY2F0aW9ucyh0aWxlZFBhY2tbaWRdLCBjb21wb3VuZE5vZGUucmVjdC54LCBjb21wb3VuZE5vZGUucmVjdC55LCBob3Jpem9udGFsTWFyZ2luLCB2ZXJ0aWNhbE1hcmdpbik7XG4gIH0pO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuZ2V0VG9CZVRpbGVkID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIGlkID0gbm9kZS5pZDtcbiAgLy9maXJzdGx5IGNoZWNrIHRoZSBwcmV2aW91cyByZXN1bHRzXG4gIGlmICh0aGlzLnRvQmVUaWxlZFtpZF0gIT0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLnRvQmVUaWxlZFtpZF07XG4gIH1cblxuICAvL29ubHkgY29tcG91bmQgbm9kZXMgYXJlIHRvIGJlIHRpbGVkXG4gIHZhciBjaGlsZEdyYXBoID0gbm9kZS5nZXRDaGlsZCgpO1xuICBpZiAoY2hpbGRHcmFwaCA9PSBudWxsKSB7XG4gICAgdGhpcy50b0JlVGlsZWRbaWRdID0gZmFsc2U7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGNoaWxkcmVuID0gY2hpbGRHcmFwaC5nZXROb2RlcygpOyAvLyBHZXQgdGhlIGNoaWxkcmVuIG5vZGVzXG5cbiAgLy9hIGNvbXBvdW5kIG5vZGUgaXMgbm90IHRvIGJlIHRpbGVkIGlmIGFsbCBvZiBpdHMgY29tcG91bmQgY2hpbGRyZW4gYXJlIG5vdCB0byBiZSB0aWxlZFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRoZUNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICBpZiAodGhpcy5nZXROb2RlRGVncmVlKHRoZUNoaWxkKSA+IDApIHtcbiAgICAgIHRoaXMudG9CZVRpbGVkW2lkXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vcGFzcyB0aGUgY2hpbGRyZW4gbm90IGhhdmluZyB0aGUgY29tcG91bmQgc3RydWN0dXJlXG4gICAgaWYgKHRoZUNoaWxkLmdldENoaWxkKCkgPT0gbnVsbCkge1xuICAgICAgdGhpcy50b0JlVGlsZWRbdGhlQ2hpbGQuaWRdID0gZmFsc2U7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZ2V0VG9CZVRpbGVkKHRoZUNoaWxkKSkge1xuICAgICAgdGhpcy50b0JlVGlsZWRbaWRdID0gZmFsc2U7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHRoaXMudG9CZVRpbGVkW2lkXSA9IHRydWU7XG4gIHJldHVybiB0cnVlO1xufTtcblxuLy8gR2V0IGRlZ3JlZSBvZiBhIG5vZGUgZGVwZW5kaW5nIG9mIGl0cyBlZGdlcyBhbmQgaW5kZXBlbmRlbnQgb2YgaXRzIGNoaWxkcmVuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5nZXROb2RlRGVncmVlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIGlkID0gbm9kZS5pZDtcbiAgdmFyIGVkZ2VzID0gbm9kZS5nZXRFZGdlcygpO1xuICB2YXIgZGVncmVlID0gMDtcbiAgXG4gIC8vIEZvciB0aGUgZWRnZXMgY29ubmVjdGVkXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWRnZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZWRnZSA9IGVkZ2VzW2ldO1xuICAgIGlmIChlZGdlLmdldFNvdXJjZSgpLmlkICE9PSBlZGdlLmdldFRhcmdldCgpLmlkKSB7XG4gICAgICBkZWdyZWUgPSBkZWdyZWUgKyAxO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVncmVlO1xufTtcblxuLy8gR2V0IGRlZ3JlZSBvZiBhIG5vZGUgd2l0aCBpdHMgY2hpbGRyZW5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmdldE5vZGVEZWdyZWVXaXRoQ2hpbGRyZW4gPSBmdW5jdGlvbiAobm9kZSkge1xuICB2YXIgZGVncmVlID0gdGhpcy5nZXROb2RlRGVncmVlKG5vZGUpO1xuICBpZiAobm9kZS5nZXRDaGlsZCgpID09IG51bGwpIHtcbiAgICByZXR1cm4gZGVncmVlO1xuICB9XG4gIHZhciBjaGlsZHJlbiA9IG5vZGUuZ2V0Q2hpbGQoKS5nZXROb2RlcygpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgZGVncmVlICs9IHRoaXMuZ2V0Tm9kZURlZ3JlZVdpdGhDaGlsZHJlbihjaGlsZCk7XG4gIH1cbiAgcmV0dXJuIGRlZ3JlZTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnBlcmZvcm1ERlNPbkNvbXBvdW5kcyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jb21wb3VuZE9yZGVyID0gW107XG4gIHRoaXMuZmlsbENvbXBleE9yZGVyQnlERlModGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldE5vZGVzKCkpO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuZmlsbENvbXBleE9yZGVyQnlERlMgPSBmdW5jdGlvbiAoY2hpbGRyZW4pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgIGlmIChjaGlsZC5nZXRDaGlsZCgpICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZmlsbENvbXBleE9yZGVyQnlERlMoY2hpbGQuZ2V0Q2hpbGQoKS5nZXROb2RlcygpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2V0VG9CZVRpbGVkKGNoaWxkKSkge1xuICAgICAgdGhpcy5jb21wb3VuZE9yZGVyLnB1c2goY2hpbGQpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4qIFRoaXMgbWV0aG9kIHBsYWNlcyBlYWNoIHplcm8gZGVncmVlIG1lbWJlciB3cnQgZ2l2ZW4gKHgseSkgY29vcmRpbmF0ZXMgKHRvcCBsZWZ0KS5cbiovXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5hZGp1c3RMb2NhdGlvbnMgPSBmdW5jdGlvbiAob3JnYW5pemF0aW9uLCB4LCB5LCBjb21wb3VuZEhvcml6b250YWxNYXJnaW4sIGNvbXBvdW5kVmVydGljYWxNYXJnaW4pIHtcbiAgeCArPSBjb21wb3VuZEhvcml6b250YWxNYXJnaW47XG4gIHkgKz0gY29tcG91bmRWZXJ0aWNhbE1hcmdpbjtcblxuICB2YXIgbGVmdCA9IHg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcmdhbml6YXRpb24ucm93cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciByb3cgPSBvcmdhbml6YXRpb24ucm93c1tpXTtcbiAgICB4ID0gbGVmdDtcbiAgICB2YXIgbWF4SGVpZ2h0ID0gMDtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcm93Lmxlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgbG5vZGUgPSByb3dbal07XG5cbiAgICAgIGxub2RlLnJlY3QueCA9IHg7Ly8gKyBsbm9kZS5yZWN0LndpZHRoIC8gMjtcbiAgICAgIGxub2RlLnJlY3QueSA9IHk7Ly8gKyBsbm9kZS5yZWN0LmhlaWdodCAvIDI7XG5cbiAgICAgIHggKz0gbG5vZGUucmVjdC53aWR0aCArIG9yZ2FuaXphdGlvbi5ob3Jpem9udGFsUGFkZGluZztcblxuICAgICAgaWYgKGxub2RlLnJlY3QuaGVpZ2h0ID4gbWF4SGVpZ2h0KVxuICAgICAgICBtYXhIZWlnaHQgPSBsbm9kZS5yZWN0LmhlaWdodDtcbiAgICB9XG5cbiAgICB5ICs9IG1heEhlaWdodCArIG9yZ2FuaXphdGlvbi52ZXJ0aWNhbFBhZGRpbmc7XG4gIH1cbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnRpbGVDb21wb3VuZE1lbWJlcnMgPSBmdW5jdGlvbiAoY2hpbGRHcmFwaE1hcCwgaWRUb05vZGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLnRpbGVkTWVtYmVyUGFjayA9IFtdO1xuXG4gIE9iamVjdC5rZXlzKGNoaWxkR3JhcGhNYXApLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICAvLyBHZXQgdGhlIGNvbXBvdW5kIG5vZGVcbiAgICB2YXIgY29tcG91bmROb2RlID0gaWRUb05vZGVbaWRdO1xuXG4gICAgc2VsZi50aWxlZE1lbWJlclBhY2tbaWRdID0gc2VsZi50aWxlTm9kZXMoY2hpbGRHcmFwaE1hcFtpZF0sIGNvbXBvdW5kTm9kZS5wYWRkaW5nTGVmdCArIGNvbXBvdW5kTm9kZS5wYWRkaW5nUmlnaHQpO1xuXG4gICAgY29tcG91bmROb2RlLnJlY3Qud2lkdGggPSBzZWxmLnRpbGVkTWVtYmVyUGFja1tpZF0ud2lkdGggKyAyMDtcbiAgICBjb21wb3VuZE5vZGUucmVjdC5oZWlnaHQgPSBzZWxmLnRpbGVkTWVtYmVyUGFja1tpZF0uaGVpZ2h0ICsgMjA7XG4gIH0pO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUudGlsZU5vZGVzID0gZnVuY3Rpb24gKG5vZGVzLCBtaW5XaWR0aCkge1xuICB2YXIgdmVydGljYWxQYWRkaW5nID0gQ29TRUNvbnN0YW50cy5USUxJTkdfUEFERElOR19WRVJUSUNBTDtcbiAgdmFyIGhvcml6b250YWxQYWRkaW5nID0gQ29TRUNvbnN0YW50cy5USUxJTkdfUEFERElOR19IT1JJWk9OVEFMO1xuICB2YXIgb3JnYW5pemF0aW9uID0ge1xuICAgIHJvd3M6IFtdLFxuICAgIHJvd1dpZHRoOiBbXSxcbiAgICByb3dIZWlnaHQ6IFtdLFxuICAgIHdpZHRoOiAyMCxcbiAgICBoZWlnaHQ6IDIwLFxuICAgIHZlcnRpY2FsUGFkZGluZzogdmVydGljYWxQYWRkaW5nLFxuICAgIGhvcml6b250YWxQYWRkaW5nOiBob3Jpem9udGFsUGFkZGluZ1xuICB9O1xuXG4gIC8vIFNvcnQgdGhlIG5vZGVzIGluIGFzY2VuZGluZyBvcmRlciBvZiB0aGVpciBhcmVhc1xuICBub2Rlcy5zb3J0KGZ1bmN0aW9uIChuMSwgbjIpIHtcbiAgICBpZiAobjEucmVjdC53aWR0aCAqIG4xLnJlY3QuaGVpZ2h0ID4gbjIucmVjdC53aWR0aCAqIG4yLnJlY3QuaGVpZ2h0KVxuICAgICAgcmV0dXJuIC0xO1xuICAgIGlmIChuMS5yZWN0LndpZHRoICogbjEucmVjdC5oZWlnaHQgPCBuMi5yZWN0LndpZHRoICogbjIucmVjdC5oZWlnaHQpXG4gICAgICByZXR1cm4gMTtcbiAgICByZXR1cm4gMDtcbiAgfSk7XG5cbiAgLy8gQ3JlYXRlIHRoZSBvcmdhbml6YXRpb24gLT4gdGlsZSBtZW1iZXJzXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcbiAgICBcbiAgICBpZiAob3JnYW5pemF0aW9uLnJvd3MubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuaW5zZXJ0Tm9kZVRvUm93KG9yZ2FuaXphdGlvbiwgbE5vZGUsIDAsIG1pbldpZHRoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5jYW5BZGRIb3Jpem9udGFsKG9yZ2FuaXphdGlvbiwgbE5vZGUucmVjdC53aWR0aCwgbE5vZGUucmVjdC5oZWlnaHQpKSB7XG4gICAgICB0aGlzLmluc2VydE5vZGVUb1Jvdyhvcmdhbml6YXRpb24sIGxOb2RlLCB0aGlzLmdldFNob3J0ZXN0Um93SW5kZXgob3JnYW5pemF0aW9uKSwgbWluV2lkdGgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaW5zZXJ0Tm9kZVRvUm93KG9yZ2FuaXphdGlvbiwgbE5vZGUsIG9yZ2FuaXphdGlvbi5yb3dzLmxlbmd0aCwgbWluV2lkdGgpO1xuICAgIH1cblxuICAgIHRoaXMuc2hpZnRUb0xhc3RSb3cob3JnYW5pemF0aW9uKTtcbiAgfVxuXG4gIHJldHVybiBvcmdhbml6YXRpb247XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5pbnNlcnROb2RlVG9Sb3cgPSBmdW5jdGlvbiAob3JnYW5pemF0aW9uLCBub2RlLCByb3dJbmRleCwgbWluV2lkdGgpIHtcbiAgdmFyIG1pbkNvbXBvdW5kU2l6ZSA9IG1pbldpZHRoO1xuXG4gIC8vIEFkZCBuZXcgcm93IGlmIG5lZWRlZFxuICBpZiAocm93SW5kZXggPT0gb3JnYW5pemF0aW9uLnJvd3MubGVuZ3RoKSB7XG4gICAgdmFyIHNlY29uZERpbWVuc2lvbiA9IFtdO1xuXG4gICAgb3JnYW5pemF0aW9uLnJvd3MucHVzaChzZWNvbmREaW1lbnNpb24pO1xuICAgIG9yZ2FuaXphdGlvbi5yb3dXaWR0aC5wdXNoKG1pbkNvbXBvdW5kU2l6ZSk7XG4gICAgb3JnYW5pemF0aW9uLnJvd0hlaWdodC5wdXNoKDApO1xuICB9XG5cbiAgLy8gVXBkYXRlIHJvdyB3aWR0aFxuICB2YXIgdyA9IG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtyb3dJbmRleF0gKyBub2RlLnJlY3Qud2lkdGg7XG5cbiAgaWYgKG9yZ2FuaXphdGlvbi5yb3dzW3Jvd0luZGV4XS5sZW5ndGggPiAwKSB7XG4gICAgdyArPSBvcmdhbml6YXRpb24uaG9yaXpvbnRhbFBhZGRpbmc7XG4gIH1cblxuICBvcmdhbml6YXRpb24ucm93V2lkdGhbcm93SW5kZXhdID0gdztcbiAgLy8gVXBkYXRlIGNvbXBvdW5kIHdpZHRoXG4gIGlmIChvcmdhbml6YXRpb24ud2lkdGggPCB3KSB7XG4gICAgb3JnYW5pemF0aW9uLndpZHRoID0gdztcbiAgfVxuXG4gIC8vIFVwZGF0ZSBoZWlnaHRcbiAgdmFyIGggPSBub2RlLnJlY3QuaGVpZ2h0O1xuICBpZiAocm93SW5kZXggPiAwKVxuICAgIGggKz0gb3JnYW5pemF0aW9uLnZlcnRpY2FsUGFkZGluZztcblxuICB2YXIgZXh0cmFIZWlnaHQgPSAwO1xuICBpZiAoaCA+IG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbcm93SW5kZXhdKSB7XG4gICAgZXh0cmFIZWlnaHQgPSBvcmdhbml6YXRpb24ucm93SGVpZ2h0W3Jvd0luZGV4XTtcbiAgICBvcmdhbml6YXRpb24ucm93SGVpZ2h0W3Jvd0luZGV4XSA9IGg7XG4gICAgZXh0cmFIZWlnaHQgPSBvcmdhbml6YXRpb24ucm93SGVpZ2h0W3Jvd0luZGV4XSAtIGV4dHJhSGVpZ2h0O1xuICB9XG5cbiAgb3JnYW5pemF0aW9uLmhlaWdodCArPSBleHRyYUhlaWdodDtcblxuICAvLyBJbnNlcnQgbm9kZVxuICBvcmdhbml6YXRpb24ucm93c1tyb3dJbmRleF0ucHVzaChub2RlKTtcbn07XG5cbi8vU2NhbnMgdGhlIHJvd3Mgb2YgYW4gb3JnYW5pemF0aW9uIGFuZCByZXR1cm5zIHRoZSBvbmUgd2l0aCB0aGUgbWluIHdpZHRoXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5nZXRTaG9ydGVzdFJvd0luZGV4ID0gZnVuY3Rpb24gKG9yZ2FuaXphdGlvbikge1xuICB2YXIgciA9IC0xO1xuICB2YXIgbWluID0gTnVtYmVyLk1BWF9WQUxVRTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG9yZ2FuaXphdGlvbi5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtpXSA8IG1pbikge1xuICAgICAgciA9IGk7XG4gICAgICBtaW4gPSBvcmdhbml6YXRpb24ucm93V2lkdGhbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiByO1xufTtcblxuLy9TY2FucyB0aGUgcm93cyBvZiBhbiBvcmdhbml6YXRpb24gYW5kIHJldHVybnMgdGhlIG9uZSB3aXRoIHRoZSBtYXggd2lkdGhcbkNvU0VMYXlvdXQucHJvdG90eXBlLmdldExvbmdlc3RSb3dJbmRleCA9IGZ1bmN0aW9uIChvcmdhbml6YXRpb24pIHtcbiAgdmFyIHIgPSAtMTtcbiAgdmFyIG1heCA9IE51bWJlci5NSU5fVkFMVUU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcmdhbml6YXRpb24ucm93cy5sZW5ndGg7IGkrKykge1xuXG4gICAgaWYgKG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtpXSA+IG1heCkge1xuICAgICAgciA9IGk7XG4gICAgICBtYXggPSBvcmdhbml6YXRpb24ucm93V2lkdGhbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHI7XG59O1xuXG4vKipcbiogVGhpcyBtZXRob2QgY2hlY2tzIHdoZXRoZXIgYWRkaW5nIGV4dHJhIHdpZHRoIHRvIHRoZSBvcmdhbml6YXRpb24gdmlvbGF0ZXNcbiogdGhlIGFzcGVjdCByYXRpbygxKSBvciBub3QuXG4qL1xuQ29TRUxheW91dC5wcm90b3R5cGUuY2FuQWRkSG9yaXpvbnRhbCA9IGZ1bmN0aW9uIChvcmdhbml6YXRpb24sIGV4dHJhV2lkdGgsIGV4dHJhSGVpZ2h0KSB7XG5cbiAgdmFyIHNyaSA9IHRoaXMuZ2V0U2hvcnRlc3RSb3dJbmRleChvcmdhbml6YXRpb24pO1xuXG4gIGlmIChzcmkgPCAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgbWluID0gb3JnYW5pemF0aW9uLnJvd1dpZHRoW3NyaV07XG5cbiAgaWYgKG1pbiArIG9yZ2FuaXphdGlvbi5ob3Jpem9udGFsUGFkZGluZyArIGV4dHJhV2lkdGggPD0gb3JnYW5pemF0aW9uLndpZHRoKVxuICAgIHJldHVybiB0cnVlO1xuXG4gIHZhciBoRGlmZiA9IDA7XG5cbiAgLy8gQWRkaW5nIHRvIGFuIGV4aXN0aW5nIHJvd1xuICBpZiAob3JnYW5pemF0aW9uLnJvd0hlaWdodFtzcmldIDwgZXh0cmFIZWlnaHQpIHtcbiAgICBpZiAoc3JpID4gMClcbiAgICAgIGhEaWZmID0gZXh0cmFIZWlnaHQgKyBvcmdhbml6YXRpb24udmVydGljYWxQYWRkaW5nIC0gb3JnYW5pemF0aW9uLnJvd0hlaWdodFtzcmldO1xuICB9XG5cbiAgdmFyIGFkZF90b19yb3dfcmF0aW87XG4gIGlmIChvcmdhbml6YXRpb24ud2lkdGggLSBtaW4gPj0gZXh0cmFXaWR0aCArIG9yZ2FuaXphdGlvbi5ob3Jpem9udGFsUGFkZGluZykge1xuICAgIGFkZF90b19yb3dfcmF0aW8gPSAob3JnYW5pemF0aW9uLmhlaWdodCArIGhEaWZmKSAvIChtaW4gKyBleHRyYVdpZHRoICsgb3JnYW5pemF0aW9uLmhvcml6b250YWxQYWRkaW5nKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRfdG9fcm93X3JhdGlvID0gKG9yZ2FuaXphdGlvbi5oZWlnaHQgKyBoRGlmZikgLyBvcmdhbml6YXRpb24ud2lkdGg7XG4gIH1cblxuICAvLyBBZGRpbmcgYSBuZXcgcm93IGZvciB0aGlzIG5vZGVcbiAgaERpZmYgPSBleHRyYUhlaWdodCArIG9yZ2FuaXphdGlvbi52ZXJ0aWNhbFBhZGRpbmc7XG4gIHZhciBhZGRfbmV3X3Jvd19yYXRpbztcbiAgaWYgKG9yZ2FuaXphdGlvbi53aWR0aCA8IGV4dHJhV2lkdGgpIHtcbiAgICBhZGRfbmV3X3Jvd19yYXRpbyA9IChvcmdhbml6YXRpb24uaGVpZ2h0ICsgaERpZmYpIC8gZXh0cmFXaWR0aDtcbiAgfSBlbHNlIHtcbiAgICBhZGRfbmV3X3Jvd19yYXRpbyA9IChvcmdhbml6YXRpb24uaGVpZ2h0ICsgaERpZmYpIC8gb3JnYW5pemF0aW9uLndpZHRoO1xuICB9XG5cbiAgaWYgKGFkZF9uZXdfcm93X3JhdGlvIDwgMSlcbiAgICBhZGRfbmV3X3Jvd19yYXRpbyA9IDEgLyBhZGRfbmV3X3Jvd19yYXRpbztcblxuICBpZiAoYWRkX3RvX3Jvd19yYXRpbyA8IDEpXG4gICAgYWRkX3RvX3Jvd19yYXRpbyA9IDEgLyBhZGRfdG9fcm93X3JhdGlvO1xuXG4gIHJldHVybiBhZGRfdG9fcm93X3JhdGlvIDwgYWRkX25ld19yb3dfcmF0aW87XG59O1xuXG4vL0lmIG1vdmluZyB0aGUgbGFzdCBub2RlIGZyb20gdGhlIGxvbmdlc3Qgcm93IGFuZCBhZGRpbmcgaXQgdG8gdGhlIGxhc3Rcbi8vcm93IG1ha2VzIHRoZSBib3VuZGluZyBib3ggc21hbGxlciwgZG8gaXQuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5zaGlmdFRvTGFzdFJvdyA9IGZ1bmN0aW9uIChvcmdhbml6YXRpb24pIHtcbiAgdmFyIGxvbmdlc3QgPSB0aGlzLmdldExvbmdlc3RSb3dJbmRleChvcmdhbml6YXRpb24pO1xuICB2YXIgbGFzdCA9IG9yZ2FuaXphdGlvbi5yb3dXaWR0aC5sZW5ndGggLSAxO1xuICB2YXIgcm93ID0gb3JnYW5pemF0aW9uLnJvd3NbbG9uZ2VzdF07XG4gIHZhciBub2RlID0gcm93W3Jvdy5sZW5ndGggLSAxXTtcblxuICB2YXIgZGlmZiA9IG5vZGUud2lkdGggKyBvcmdhbml6YXRpb24uaG9yaXpvbnRhbFBhZGRpbmc7XG5cbiAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgZW5vdWdoIHNwYWNlIG9uIHRoZSBsYXN0IHJvd1xuICBpZiAob3JnYW5pemF0aW9uLndpZHRoIC0gb3JnYW5pemF0aW9uLnJvd1dpZHRoW2xhc3RdID4gZGlmZiAmJiBsb25nZXN0ICE9IGxhc3QpIHtcbiAgICAvLyBSZW1vdmUgdGhlIGxhc3QgZWxlbWVudCBvZiB0aGUgbG9uZ2VzdCByb3dcbiAgICByb3cuc3BsaWNlKC0xLCAxKTtcblxuICAgIC8vIFB1c2ggaXQgdG8gdGhlIGxhc3Qgcm93XG4gICAgb3JnYW5pemF0aW9uLnJvd3NbbGFzdF0ucHVzaChub2RlKTtcblxuICAgIG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtsb25nZXN0XSA9IG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtsb25nZXN0XSAtIGRpZmY7XG4gICAgb3JnYW5pemF0aW9uLnJvd1dpZHRoW2xhc3RdID0gb3JnYW5pemF0aW9uLnJvd1dpZHRoW2xhc3RdICsgZGlmZjtcbiAgICBvcmdhbml6YXRpb24ud2lkdGggPSBvcmdhbml6YXRpb24ucm93V2lkdGhbaW5zdGFuY2UuZ2V0TG9uZ2VzdFJvd0luZGV4KG9yZ2FuaXphdGlvbildO1xuXG4gICAgLy8gVXBkYXRlIGhlaWdodHMgb2YgdGhlIG9yZ2FuaXphdGlvblxuICAgIHZhciBtYXhIZWlnaHQgPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocm93W2ldLmhlaWdodCA+IG1heEhlaWdodClcbiAgICAgICAgbWF4SGVpZ2h0ID0gcm93W2ldLmhlaWdodDtcbiAgICB9XG4gICAgaWYgKGxvbmdlc3QgPiAwKVxuICAgICAgbWF4SGVpZ2h0ICs9IG9yZ2FuaXphdGlvbi52ZXJ0aWNhbFBhZGRpbmc7XG5cbiAgICB2YXIgcHJldlRvdGFsID0gb3JnYW5pemF0aW9uLnJvd0hlaWdodFtsb25nZXN0XSArIG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbbGFzdF07XG5cbiAgICBvcmdhbml6YXRpb24ucm93SGVpZ2h0W2xvbmdlc3RdID0gbWF4SGVpZ2h0O1xuICAgIGlmIChvcmdhbml6YXRpb24ucm93SGVpZ2h0W2xhc3RdIDwgbm9kZS5oZWlnaHQgKyBvcmdhbml6YXRpb24udmVydGljYWxQYWRkaW5nKVxuICAgICAgb3JnYW5pemF0aW9uLnJvd0hlaWdodFtsYXN0XSA9IG5vZGUuaGVpZ2h0ICsgb3JnYW5pemF0aW9uLnZlcnRpY2FsUGFkZGluZztcblxuICAgIHZhciBmaW5hbFRvdGFsID0gb3JnYW5pemF0aW9uLnJvd0hlaWdodFtsb25nZXN0XSArIG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbbGFzdF07XG4gICAgb3JnYW5pemF0aW9uLmhlaWdodCArPSAoZmluYWxUb3RhbCAtIHByZXZUb3RhbCk7XG5cbiAgICB0aGlzLnNoaWZ0VG9MYXN0Um93KG9yZ2FuaXphdGlvbik7XG4gIH1cbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnRpbGluZ1ByZUxheW91dCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoQ29TRUNvbnN0YW50cy5USUxFKSB7XG4gICAgLy8gRmluZCB6ZXJvIGRlZ3JlZSBub2RlcyBhbmQgY3JlYXRlIGEgY29tcG91bmQgZm9yIGVhY2ggbGV2ZWxcbiAgICB0aGlzLmdyb3VwWmVyb0RlZ3JlZU1lbWJlcnMoKTtcbiAgICAvLyBUaWxlIGFuZCBjbGVhciBjaGlsZHJlbiBvZiBlYWNoIGNvbXBvdW5kXG4gICAgdGhpcy5jbGVhckNvbXBvdW5kcygpO1xuICAgIC8vIFNlcGFyYXRlbHkgdGlsZSBhbmQgY2xlYXIgemVybyBkZWdyZWUgbm9kZXMgZm9yIGVhY2ggbGV2ZWxcbiAgICB0aGlzLmNsZWFyWmVyb0RlZ3JlZU1lbWJlcnMoKTtcbiAgfVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUudGlsaW5nUG9zdExheW91dCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoQ29TRUNvbnN0YW50cy5USUxFKSB7XG4gICAgdGhpcy5yZXBvcHVsYXRlWmVyb0RlZ3JlZU1lbWJlcnMoKTtcbiAgICB0aGlzLnJlcG9wdWxhdGVDb21wb3VuZHMoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb1NFTGF5b3V0O1xuIiwidmFyIEZETGF5b3V0Tm9kZSA9IHJlcXVpcmUoJy4vRkRMYXlvdXROb2RlJyk7XG52YXIgSU1hdGggPSByZXF1aXJlKCcuL0lNYXRoJyk7XG5cbmZ1bmN0aW9uIENvU0VOb2RlKGdtLCBsb2MsIHNpemUsIHZOb2RlKSB7XG4gIEZETGF5b3V0Tm9kZS5jYWxsKHRoaXMsIGdtLCBsb2MsIHNpemUsIHZOb2RlKTtcbn1cblxuXG5Db1NFTm9kZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEZETGF5b3V0Tm9kZS5wcm90b3R5cGUpO1xuZm9yICh2YXIgcHJvcCBpbiBGRExheW91dE5vZGUpIHtcbiAgQ29TRU5vZGVbcHJvcF0gPSBGRExheW91dE5vZGVbcHJvcF07XG59XG5cbkNvU0VOb2RlLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIGxheW91dCA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldExheW91dCgpO1xuICB0aGlzLmRpc3BsYWNlbWVudFggPSBsYXlvdXQuY29vbGluZ0ZhY3RvciAqXG4gICAgICAgICAgKHRoaXMuc3ByaW5nRm9yY2VYICsgdGhpcy5yZXB1bHNpb25Gb3JjZVggKyB0aGlzLmdyYXZpdGF0aW9uRm9yY2VYKSAvIHRoaXMubm9PZkNoaWxkcmVuO1xuICB0aGlzLmRpc3BsYWNlbWVudFkgPSBsYXlvdXQuY29vbGluZ0ZhY3RvciAqXG4gICAgICAgICAgKHRoaXMuc3ByaW5nRm9yY2VZICsgdGhpcy5yZXB1bHNpb25Gb3JjZVkgKyB0aGlzLmdyYXZpdGF0aW9uRm9yY2VZKSAvIHRoaXMubm9PZkNoaWxkcmVuO1xuXG5cbiAgaWYgKE1hdGguYWJzKHRoaXMuZGlzcGxhY2VtZW50WCkgPiBsYXlvdXQuY29vbGluZ0ZhY3RvciAqIGxheW91dC5tYXhOb2RlRGlzcGxhY2VtZW50KVxuICB7XG4gICAgdGhpcy5kaXNwbGFjZW1lbnRYID0gbGF5b3V0LmNvb2xpbmdGYWN0b3IgKiBsYXlvdXQubWF4Tm9kZURpc3BsYWNlbWVudCAqXG4gICAgICAgICAgICBJTWF0aC5zaWduKHRoaXMuZGlzcGxhY2VtZW50WCk7XG4gIH1cblxuICBpZiAoTWF0aC5hYnModGhpcy5kaXNwbGFjZW1lbnRZKSA+IGxheW91dC5jb29saW5nRmFjdG9yICogbGF5b3V0Lm1heE5vZGVEaXNwbGFjZW1lbnQpXG4gIHtcbiAgICB0aGlzLmRpc3BsYWNlbWVudFkgPSBsYXlvdXQuY29vbGluZ0ZhY3RvciAqIGxheW91dC5tYXhOb2RlRGlzcGxhY2VtZW50ICpcbiAgICAgICAgICAgIElNYXRoLnNpZ24odGhpcy5kaXNwbGFjZW1lbnRZKTtcbiAgfVxuXG4gIC8vIGEgc2ltcGxlIG5vZGUsIGp1c3QgbW92ZSBpdFxuICBpZiAodGhpcy5jaGlsZCA9PSBudWxsKVxuICB7XG4gICAgdGhpcy5tb3ZlQnkodGhpcy5kaXNwbGFjZW1lbnRYLCB0aGlzLmRpc3BsYWNlbWVudFkpO1xuICB9XG4gIC8vIGFuIGVtcHR5IGNvbXBvdW5kIG5vZGUsIGFnYWluIGp1c3QgbW92ZSBpdFxuICBlbHNlIGlmICh0aGlzLmNoaWxkLmdldE5vZGVzKCkubGVuZ3RoID09IDApXG4gIHtcbiAgICB0aGlzLm1vdmVCeSh0aGlzLmRpc3BsYWNlbWVudFgsIHRoaXMuZGlzcGxhY2VtZW50WSk7XG4gIH1cbiAgLy8gbm9uLWVtcHR5IGNvbXBvdW5kIG5vZGUsIHByb3BvZ2F0ZSBtb3ZlbWVudCB0byBjaGlsZHJlbiBhcyB3ZWxsXG4gIGVsc2VcbiAge1xuICAgIHRoaXMucHJvcG9nYXRlRGlzcGxhY2VtZW50VG9DaGlsZHJlbih0aGlzLmRpc3BsYWNlbWVudFgsXG4gICAgICAgICAgICB0aGlzLmRpc3BsYWNlbWVudFkpO1xuICB9XG5cbiAgbGF5b3V0LnRvdGFsRGlzcGxhY2VtZW50ICs9XG4gICAgICAgICAgTWF0aC5hYnModGhpcy5kaXNwbGFjZW1lbnRYKSArIE1hdGguYWJzKHRoaXMuZGlzcGxhY2VtZW50WSk7XG5cbiAgdGhpcy5zcHJpbmdGb3JjZVggPSAwO1xuICB0aGlzLnNwcmluZ0ZvcmNlWSA9IDA7XG4gIHRoaXMucmVwdWxzaW9uRm9yY2VYID0gMDtcbiAgdGhpcy5yZXB1bHNpb25Gb3JjZVkgPSAwO1xuICB0aGlzLmdyYXZpdGF0aW9uRm9yY2VYID0gMDtcbiAgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWSA9IDA7XG4gIHRoaXMuZGlzcGxhY2VtZW50WCA9IDA7XG4gIHRoaXMuZGlzcGxhY2VtZW50WSA9IDA7XG59O1xuXG5Db1NFTm9kZS5wcm90b3R5cGUucHJvcG9nYXRlRGlzcGxhY2VtZW50VG9DaGlsZHJlbiA9IGZ1bmN0aW9uIChkWCwgZFkpXG57XG4gIHZhciBub2RlcyA9IHRoaXMuZ2V0Q2hpbGQoKS5nZXROb2RlcygpO1xuICB2YXIgbm9kZTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKylcbiAge1xuICAgIG5vZGUgPSBub2Rlc1tpXTtcbiAgICBpZiAobm9kZS5nZXRDaGlsZCgpID09IG51bGwpXG4gICAge1xuICAgICAgbm9kZS5tb3ZlQnkoZFgsIGRZKTtcbiAgICAgIG5vZGUuZGlzcGxhY2VtZW50WCArPSBkWDtcbiAgICAgIG5vZGUuZGlzcGxhY2VtZW50WSArPSBkWTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIG5vZGUucHJvcG9nYXRlRGlzcGxhY2VtZW50VG9DaGlsZHJlbihkWCwgZFkpO1xuICAgIH1cbiAgfVxufTtcblxuQ29TRU5vZGUucHJvdG90eXBlLnNldFByZWQxID0gZnVuY3Rpb24gKHByZWQxKVxue1xuICB0aGlzLnByZWQxID0gcHJlZDE7XG59O1xuXG5Db1NFTm9kZS5wcm90b3R5cGUuZ2V0UHJlZDEgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gcHJlZDE7XG59O1xuXG5Db1NFTm9kZS5wcm90b3R5cGUuZ2V0UHJlZDIgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gcHJlZDI7XG59O1xuXG5Db1NFTm9kZS5wcm90b3R5cGUuc2V0TmV4dCA9IGZ1bmN0aW9uIChuZXh0KVxue1xuICB0aGlzLm5leHQgPSBuZXh0O1xufTtcblxuQ29TRU5vZGUucHJvdG90eXBlLmdldE5leHQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gbmV4dDtcbn07XG5cbkNvU0VOb2RlLnByb3RvdHlwZS5zZXRQcm9jZXNzZWQgPSBmdW5jdGlvbiAocHJvY2Vzc2VkKVxue1xuICB0aGlzLnByb2Nlc3NlZCA9IHByb2Nlc3NlZDtcbn07XG5cbkNvU0VOb2RlLnByb3RvdHlwZS5pc1Byb2Nlc3NlZCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiBwcm9jZXNzZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvU0VOb2RlO1xuIiwiZnVuY3Rpb24gRGltZW5zaW9uRCh3aWR0aCwgaGVpZ2h0KSB7XG4gIHRoaXMud2lkdGggPSAwO1xuICB0aGlzLmhlaWdodCA9IDA7XG4gIGlmICh3aWR0aCAhPT0gbnVsbCAmJiBoZWlnaHQgIT09IG51bGwpIHtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gIH1cbn1cblxuRGltZW5zaW9uRC5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy53aWR0aDtcbn07XG5cbkRpbWVuc2lvbkQucHJvdG90eXBlLnNldFdpZHRoID0gZnVuY3Rpb24gKHdpZHRoKVxue1xuICB0aGlzLndpZHRoID0gd2lkdGg7XG59O1xuXG5EaW1lbnNpb25ELnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5oZWlnaHQ7XG59O1xuXG5EaW1lbnNpb25ELnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbiAoaGVpZ2h0KVxue1xuICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRGltZW5zaW9uRDtcbiIsImZ1bmN0aW9uIEVtaXR0ZXIoKXtcbiAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbn1cblxudmFyIHAgPSBFbWl0dGVyLnByb3RvdHlwZTtcblxucC5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKCBldmVudCwgY2FsbGJhY2sgKXtcbiAgdGhpcy5saXN0ZW5lcnMucHVzaCh7XG4gICAgZXZlbnQ6IGV2ZW50LFxuICAgIGNhbGxiYWNrOiBjYWxsYmFja1xuICB9KTtcbn07XG5cbnAucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiggZXZlbnQsIGNhbGxiYWNrICl7XG4gIGZvciggdmFyIGkgPSB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkgPj0gMDsgaS0tICl7XG4gICAgdmFyIGwgPSB0aGlzLmxpc3RlbmVyc1tpXTtcblxuICAgIGlmKCBsLmV2ZW50ID09PSBldmVudCAmJiBsLmNhbGxiYWNrID09PSBjYWxsYmFjayApe1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKCBpLCAxICk7XG4gICAgfVxuICB9XG59O1xuXG5wLmVtaXQgPSBmdW5jdGlvbiggZXZlbnQsIGRhdGEgKXtcbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKyApe1xuICAgIHZhciBsID0gdGhpcy5saXN0ZW5lcnNbaV07XG5cbiAgICBpZiggZXZlbnQgPT09IGwuZXZlbnQgKXtcbiAgICAgIGwuY2FsbGJhY2soIGRhdGEgKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcbiIsInZhciBMYXlvdXQgPSByZXF1aXJlKCcuL0xheW91dCcpO1xudmFyIEZETGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9GRExheW91dENvbnN0YW50cycpO1xudmFyIExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vTGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgSUdlb21ldHJ5ID0gcmVxdWlyZSgnLi9JR2VvbWV0cnknKTtcbnZhciBJTWF0aCA9IHJlcXVpcmUoJy4vSU1hdGgnKTtcbnZhciBJbnRlZ2VyID0gcmVxdWlyZSgnLi9JbnRlZ2VyJyk7XG5cbmZ1bmN0aW9uIEZETGF5b3V0KCkge1xuICBMYXlvdXQuY2FsbCh0aGlzKTtcblxuICB0aGlzLnVzZVNtYXJ0SWRlYWxFZGdlTGVuZ3RoQ2FsY3VsYXRpb24gPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX1VTRV9TTUFSVF9JREVBTF9FREdFX0xFTkdUSF9DQUxDVUxBVElPTjtcbiAgdGhpcy5pZGVhbEVkZ2VMZW5ndGggPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIO1xuICB0aGlzLnNwcmluZ0NvbnN0YW50ID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9TUFJJTkdfU1RSRU5HVEg7XG4gIHRoaXMucmVwdWxzaW9uQ29uc3RhbnQgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX1JFUFVMU0lPTl9TVFJFTkdUSDtcbiAgdGhpcy5ncmF2aXR5Q29uc3RhbnQgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfU1RSRU5HVEg7XG4gIHRoaXMuY29tcG91bmRHcmF2aXR5Q29uc3RhbnQgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfU1RSRU5HVEg7XG4gIHRoaXMuZ3Jhdml0eVJhbmdlRmFjdG9yID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUjtcbiAgdGhpcy5jb21wb3VuZEdyYXZpdHlSYW5nZUZhY3RvciA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1I7XG4gIHRoaXMuZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSA9ICgzLjAgKiBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIKSAvIDEwMDtcbiAgdGhpcy5jb29saW5nRmFjdG9yID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTDtcbiAgdGhpcy5pbml0aWFsQ29vbGluZ0ZhY3RvciA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUw7XG4gIHRoaXMudG90YWxEaXNwbGFjZW1lbnQgPSAwLjA7XG4gIHRoaXMub2xkVG90YWxEaXNwbGFjZW1lbnQgPSAwLjA7XG4gIHRoaXMubWF4SXRlcmF0aW9ucyA9IEZETGF5b3V0Q29uc3RhbnRzLk1BWF9JVEVSQVRJT05TO1xufVxuXG5GRExheW91dC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExheW91dC5wcm90b3R5cGUpO1xuXG5mb3IgKHZhciBwcm9wIGluIExheW91dCkge1xuICBGRExheW91dFtwcm9wXSA9IExheW91dFtwcm9wXTtcbn1cblxuRkRMYXlvdXQucHJvdG90eXBlLmluaXRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkge1xuICBMYXlvdXQucHJvdG90eXBlLmluaXRQYXJhbWV0ZXJzLmNhbGwodGhpcywgYXJndW1lbnRzKTtcblxuICBpZiAodGhpcy5sYXlvdXRRdWFsaXR5ID09IExheW91dENvbnN0YW50cy5EUkFGVF9RVUFMSVRZKVxuICB7XG4gICAgdGhpcy5kaXNwbGFjZW1lbnRUaHJlc2hvbGRQZXJOb2RlICs9IDAuMzA7XG4gICAgdGhpcy5tYXhJdGVyYXRpb25zICo9IDAuODtcbiAgfVxuICBlbHNlIGlmICh0aGlzLmxheW91dFF1YWxpdHkgPT0gTGF5b3V0Q29uc3RhbnRzLlBST09GX1FVQUxJVFkpXG4gIHtcbiAgICB0aGlzLmRpc3BsYWNlbWVudFRocmVzaG9sZFBlck5vZGUgLT0gMC4zMDtcbiAgICB0aGlzLm1heEl0ZXJhdGlvbnMgKj0gMS4yO1xuICB9XG5cbiAgdGhpcy50b3RhbEl0ZXJhdGlvbnMgPSAwO1xuICB0aGlzLm5vdEFuaW1hdGVkSXRlcmF0aW9ucyA9IDA7XG5cbiAgdGhpcy51c2VGUkdyaWRWYXJpYW50ID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VU0VfU01BUlRfUkVQVUxTSU9OX1JBTkdFX0NBTENVTEFUSU9OO1xuICBcbiAgdGhpcy5ncmlkID0gW107XG4gIC8vIHZhcmlhYmxlcyBmb3IgdHJlZSByZWR1Y3Rpb24gc3VwcG9ydFxuICB0aGlzLnBydW5lZE5vZGVzQWxsID0gW107XG4gIHRoaXMuZ3Jvd1RyZWVJdGVyYXRpb25zID0gMDtcbiAgdGhpcy5hZnRlckdyb3d0aEl0ZXJhdGlvbnMgPSAwO1xuICB0aGlzLmlzVHJlZUdyb3dpbmcgPSBmYWxzZTtcbiAgdGhpcy5pc0dyb3d0aEZpbmlzaGVkID0gZmFsc2U7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY0lkZWFsRWRnZUxlbmd0aHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlZGdlO1xuICB2YXIgbGNhRGVwdGg7XG4gIHZhciBzb3VyY2U7XG4gIHZhciB0YXJnZXQ7XG4gIHZhciBzaXplT2ZTb3VyY2VJbkxjYTtcbiAgdmFyIHNpemVPZlRhcmdldEluTGNhO1xuXG4gIHZhciBhbGxFZGdlcyA9IHRoaXMuZ2V0R3JhcGhNYW5hZ2VyKCkuZ2V0QWxsRWRnZXMoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxFZGdlcy5sZW5ndGg7IGkrKylcbiAge1xuICAgIGVkZ2UgPSBhbGxFZGdlc1tpXTtcblxuICAgIGVkZ2UuaWRlYWxMZW5ndGggPSB0aGlzLmlkZWFsRWRnZUxlbmd0aDtcblxuICAgIGlmIChlZGdlLmlzSW50ZXJHcmFwaClcbiAgICB7XG4gICAgICBzb3VyY2UgPSBlZGdlLmdldFNvdXJjZSgpO1xuICAgICAgdGFyZ2V0ID0gZWRnZS5nZXRUYXJnZXQoKTtcblxuICAgICAgc2l6ZU9mU291cmNlSW5MY2EgPSBlZGdlLmdldFNvdXJjZUluTGNhKCkuZ2V0RXN0aW1hdGVkU2l6ZSgpO1xuICAgICAgc2l6ZU9mVGFyZ2V0SW5MY2EgPSBlZGdlLmdldFRhcmdldEluTGNhKCkuZ2V0RXN0aW1hdGVkU2l6ZSgpO1xuXG4gICAgICBpZiAodGhpcy51c2VTbWFydElkZWFsRWRnZUxlbmd0aENhbGN1bGF0aW9uKVxuICAgICAge1xuICAgICAgICBlZGdlLmlkZWFsTGVuZ3RoICs9IHNpemVPZlNvdXJjZUluTGNhICsgc2l6ZU9mVGFyZ2V0SW5MY2EgLVxuICAgICAgICAgICAgICAgIDIgKiBMYXlvdXRDb25zdGFudHMuU0lNUExFX05PREVfU0laRTtcbiAgICAgIH1cblxuICAgICAgbGNhRGVwdGggPSBlZGdlLmdldExjYSgpLmdldEluY2x1c2lvblRyZWVEZXB0aCgpO1xuXG4gICAgICBlZGdlLmlkZWFsTGVuZ3RoICs9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggKlxuICAgICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5QRVJfTEVWRUxfSURFQUxfRURHRV9MRU5HVEhfRkFDVE9SICpcbiAgICAgICAgICAgICAgKHNvdXJjZS5nZXRJbmNsdXNpb25UcmVlRGVwdGgoKSArXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmdldEluY2x1c2lvblRyZWVEZXB0aCgpIC0gMiAqIGxjYURlcHRoKTtcbiAgICB9XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5pbml0U3ByaW5nRW1iZWRkZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgaWYgKHRoaXMuaW5jcmVtZW50YWwpXG4gIHtcbiAgICB0aGlzLm1heE5vZGVEaXNwbGFjZW1lbnQgPVxuICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuTUFYX05PREVfRElTUExBQ0VNRU5UX0lOQ1JFTUVOVEFMO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIHRoaXMuY29vbGluZ0ZhY3RvciA9IDEuMDtcbiAgICB0aGlzLmluaXRpYWxDb29saW5nRmFjdG9yID0gMS4wO1xuICAgIHRoaXMubWF4Tm9kZURpc3BsYWNlbWVudCA9XG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5NQVhfTk9ERV9ESVNQTEFDRU1FTlQ7XG4gIH1cblxuICB0aGlzLm1heEl0ZXJhdGlvbnMgPVxuICAgICAgICAgIE1hdGgubWF4KHRoaXMuZ2V0QWxsTm9kZXMoKS5sZW5ndGggKiA1LCB0aGlzLm1heEl0ZXJhdGlvbnMpO1xuXG4gIHRoaXMudG90YWxEaXNwbGFjZW1lbnRUaHJlc2hvbGQgPVxuICAgICAgICAgIHRoaXMuZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSAqIHRoaXMuZ2V0QWxsTm9kZXMoKS5sZW5ndGg7XG5cbiAgdGhpcy5yZXB1bHNpb25SYW5nZSA9IHRoaXMuY2FsY1JlcHVsc2lvblJhbmdlKCk7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1NwcmluZ0ZvcmNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxFZGdlcyA9IHRoaXMuZ2V0QWxsRWRnZXMoKTtcbiAgdmFyIGVkZ2U7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsRWRnZXMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICBlZGdlID0gbEVkZ2VzW2ldO1xuXG4gICAgdGhpcy5jYWxjU3ByaW5nRm9yY2UoZWRnZSwgZWRnZS5pZGVhbExlbmd0aCk7XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjUmVwdWxzaW9uRm9yY2VzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaSwgajtcbiAgdmFyIG5vZGVBLCBub2RlQjtcbiAgdmFyIGxOb2RlcyA9IHRoaXMuZ2V0QWxsTm9kZXMoKTtcbiAgdmFyIHByb2Nlc3NlZE5vZGVTZXQ7XG5cbiAgaWYgKHRoaXMudXNlRlJHcmlkVmFyaWFudClcbiAgeyAgICAgICBcbiAgICBpZiAoKHRoaXMudG90YWxJdGVyYXRpb25zICUgRkRMYXlvdXRDb25zdGFudHMuR1JJRF9DQUxDVUxBVElPTl9DSEVDS19QRVJJT0QgPT0gMSAmJiAhdGhpcy5pc1RyZWVHcm93aW5nICYmICF0aGlzLmlzR3Jvd3RoRmluaXNoZWQpKVxuICAgIHsgICAgICAgXG4gICAgICB0aGlzLnVwZGF0ZUdyaWQoKTsgIFxuICAgIH1cblxuICAgIHByb2Nlc3NlZE5vZGVTZXQgPSBuZXcgU2V0KCk7XG4gICAgXG4gICAgLy8gY2FsY3VsYXRlIHJlcHVsc2lvbiBmb3JjZXMgYmV0d2VlbiBlYWNoIG5vZGVzIGFuZCBpdHMgc3Vycm91bmRpbmdcbiAgICBmb3IgKGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIG5vZGVBID0gbE5vZGVzW2ldO1xuICAgICAgdGhpcy5jYWxjdWxhdGVSZXB1bHNpb25Gb3JjZU9mQU5vZGUobm9kZUEsIHByb2Nlc3NlZE5vZGVTZXQpO1xuICAgICAgcHJvY2Vzc2VkTm9kZVNldC5hZGQobm9kZUEpO1xuICAgIH1cbiAgfVxuICBlbHNlXG4gIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIG5vZGVBID0gbE5vZGVzW2ldO1xuXG4gICAgICBmb3IgKGogPSBpICsgMTsgaiA8IGxOb2Rlcy5sZW5ndGg7IGorKylcbiAgICAgIHtcbiAgICAgICAgbm9kZUIgPSBsTm9kZXNbal07XG5cbiAgICAgICAgLy8gSWYgYm90aCBub2RlcyBhcmUgbm90IG1lbWJlcnMgb2YgdGhlIHNhbWUgZ3JhcGgsIHNraXAuXG4gICAgICAgIGlmIChub2RlQS5nZXRPd25lcigpICE9IG5vZGVCLmdldE93bmVyKCkpXG4gICAgICAgIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FsY1JlcHVsc2lvbkZvcmNlKG5vZGVBLCBub2RlQik7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY0dyYXZpdGF0aW9uYWxGb3JjZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBub2RlO1xuICB2YXIgbE5vZGVzID0gdGhpcy5nZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbigpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgbm9kZSA9IGxOb2Rlc1tpXTtcbiAgICB0aGlzLmNhbGNHcmF2aXRhdGlvbmFsRm9yY2Uobm9kZSk7XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5tb3ZlTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsTm9kZXMgPSB0aGlzLmdldEFsbE5vZGVzKCk7XG4gIHZhciBub2RlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgbm9kZSA9IGxOb2Rlc1tpXTtcbiAgICBub2RlLm1vdmUoKTtcbiAgfVxufVxuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1NwcmluZ0ZvcmNlID0gZnVuY3Rpb24gKGVkZ2UsIGlkZWFsTGVuZ3RoKSB7XG4gIHZhciBzb3VyY2VOb2RlID0gZWRnZS5nZXRTb3VyY2UoKTtcbiAgdmFyIHRhcmdldE5vZGUgPSBlZGdlLmdldFRhcmdldCgpO1xuXG4gIHZhciBsZW5ndGg7XG4gIHZhciBzcHJpbmdGb3JjZTtcbiAgdmFyIHNwcmluZ0ZvcmNlWDtcbiAgdmFyIHNwcmluZ0ZvcmNlWTtcblxuICAvLyBVcGRhdGUgZWRnZSBsZW5ndGhcbiAgaWYgKHRoaXMudW5pZm9ybUxlYWZOb2RlU2l6ZXMgJiZcbiAgICAgICAgICBzb3VyY2VOb2RlLmdldENoaWxkKCkgPT0gbnVsbCAmJiB0YXJnZXROb2RlLmdldENoaWxkKCkgPT0gbnVsbClcbiAge1xuICAgIGVkZ2UudXBkYXRlTGVuZ3RoU2ltcGxlKCk7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgZWRnZS51cGRhdGVMZW5ndGgoKTtcblxuICAgIGlmIChlZGdlLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldClcbiAgICB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgbGVuZ3RoID0gZWRnZS5nZXRMZW5ndGgoKTtcblxuICAvLyBDYWxjdWxhdGUgc3ByaW5nIGZvcmNlc1xuICBzcHJpbmdGb3JjZSA9IHRoaXMuc3ByaW5nQ29uc3RhbnQgKiAobGVuZ3RoIC0gaWRlYWxMZW5ndGgpO1xuXG4gIC8vIFByb2plY3QgZm9yY2Ugb250byB4IGFuZCB5IGF4ZXNcbiAgc3ByaW5nRm9yY2VYID0gc3ByaW5nRm9yY2UgKiAoZWRnZS5sZW5ndGhYIC8gbGVuZ3RoKTtcbiAgc3ByaW5nRm9yY2VZID0gc3ByaW5nRm9yY2UgKiAoZWRnZS5sZW5ndGhZIC8gbGVuZ3RoKTtcblxuICAvLyBBcHBseSBmb3JjZXMgb24gdGhlIGVuZCBub2Rlc1xuICBzb3VyY2VOb2RlLnNwcmluZ0ZvcmNlWCArPSBzcHJpbmdGb3JjZVg7XG4gIHNvdXJjZU5vZGUuc3ByaW5nRm9yY2VZICs9IHNwcmluZ0ZvcmNlWTtcbiAgdGFyZ2V0Tm9kZS5zcHJpbmdGb3JjZVggLT0gc3ByaW5nRm9yY2VYO1xuICB0YXJnZXROb2RlLnNwcmluZ0ZvcmNlWSAtPSBzcHJpbmdGb3JjZVk7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1JlcHVsc2lvbkZvcmNlID0gZnVuY3Rpb24gKG5vZGVBLCBub2RlQikge1xuICB2YXIgcmVjdEEgPSBub2RlQS5nZXRSZWN0KCk7XG4gIHZhciByZWN0QiA9IG5vZGVCLmdldFJlY3QoKTtcbiAgdmFyIG92ZXJsYXBBbW91bnQgPSBuZXcgQXJyYXkoMik7XG4gIHZhciBjbGlwUG9pbnRzID0gbmV3IEFycmF5KDQpO1xuICB2YXIgZGlzdGFuY2VYO1xuICB2YXIgZGlzdGFuY2VZO1xuICB2YXIgZGlzdGFuY2VTcXVhcmVkO1xuICB2YXIgZGlzdGFuY2U7XG4gIHZhciByZXB1bHNpb25Gb3JjZTtcbiAgdmFyIHJlcHVsc2lvbkZvcmNlWDtcbiAgdmFyIHJlcHVsc2lvbkZvcmNlWTtcblxuICBpZiAocmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpLy8gdHdvIG5vZGVzIG92ZXJsYXBcbiAge1xuICAgIC8vIGNhbGN1bGF0ZSBzZXBhcmF0aW9uIGFtb3VudCBpbiB4IGFuZCB5IGRpcmVjdGlvbnNcbiAgICBJR2VvbWV0cnkuY2FsY1NlcGFyYXRpb25BbW91bnQocmVjdEEsXG4gICAgICAgICAgICByZWN0QixcbiAgICAgICAgICAgIG92ZXJsYXBBbW91bnQsXG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIIC8gMi4wKTtcblxuICAgIHJlcHVsc2lvbkZvcmNlWCA9IDIgKiBvdmVybGFwQW1vdW50WzBdO1xuICAgIHJlcHVsc2lvbkZvcmNlWSA9IDIgKiBvdmVybGFwQW1vdW50WzFdO1xuICAgIFxuICAgIHZhciBjaGlsZHJlbkNvbnN0YW50ID0gbm9kZUEubm9PZkNoaWxkcmVuICogbm9kZUIubm9PZkNoaWxkcmVuIC8gKG5vZGVBLm5vT2ZDaGlsZHJlbiArIG5vZGVCLm5vT2ZDaGlsZHJlbik7XG4gICAgXG4gICAgLy8gQXBwbHkgZm9yY2VzIG9uIHRoZSB0d28gbm9kZXNcbiAgICBub2RlQS5yZXB1bHNpb25Gb3JjZVggLT0gY2hpbGRyZW5Db25zdGFudCAqIHJlcHVsc2lvbkZvcmNlWDtcbiAgICBub2RlQS5yZXB1bHNpb25Gb3JjZVkgLT0gY2hpbGRyZW5Db25zdGFudCAqIHJlcHVsc2lvbkZvcmNlWTtcbiAgICBub2RlQi5yZXB1bHNpb25Gb3JjZVggKz0gY2hpbGRyZW5Db25zdGFudCAqIHJlcHVsc2lvbkZvcmNlWDtcbiAgICBub2RlQi5yZXB1bHNpb25Gb3JjZVkgKz0gY2hpbGRyZW5Db25zdGFudCAqIHJlcHVsc2lvbkZvcmNlWTtcbiAgfVxuICBlbHNlLy8gbm8gb3ZlcmxhcFxuICB7XG4gICAgLy8gY2FsY3VsYXRlIGRpc3RhbmNlXG5cbiAgICBpZiAodGhpcy51bmlmb3JtTGVhZk5vZGVTaXplcyAmJlxuICAgICAgICAgICAgbm9kZUEuZ2V0Q2hpbGQoKSA9PSBudWxsICYmIG5vZGVCLmdldENoaWxkKCkgPT0gbnVsbCkvLyBzaW1wbHkgYmFzZSByZXB1bHNpb24gb24gZGlzdGFuY2Ugb2Ygbm9kZSBjZW50ZXJzXG4gICAge1xuICAgICAgZGlzdGFuY2VYID0gcmVjdEIuZ2V0Q2VudGVyWCgpIC0gcmVjdEEuZ2V0Q2VudGVyWCgpO1xuICAgICAgZGlzdGFuY2VZID0gcmVjdEIuZ2V0Q2VudGVyWSgpIC0gcmVjdEEuZ2V0Q2VudGVyWSgpO1xuICAgIH1cbiAgICBlbHNlLy8gdXNlIGNsaXBwaW5nIHBvaW50c1xuICAgIHtcbiAgICAgIElHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24ocmVjdEEsIHJlY3RCLCBjbGlwUG9pbnRzKTtcblxuICAgICAgZGlzdGFuY2VYID0gY2xpcFBvaW50c1syXSAtIGNsaXBQb2ludHNbMF07XG4gICAgICBkaXN0YW5jZVkgPSBjbGlwUG9pbnRzWzNdIC0gY2xpcFBvaW50c1sxXTtcbiAgICB9XG5cbiAgICAvLyBObyByZXB1bHNpb24gcmFuZ2UuIEZSIGdyaWQgdmFyaWFudCBzaG91bGQgdGFrZSBjYXJlIG9mIHRoaXMuXG4gICAgaWYgKE1hdGguYWJzKGRpc3RhbmNlWCkgPCBGRExheW91dENvbnN0YW50cy5NSU5fUkVQVUxTSU9OX0RJU1QpXG4gICAge1xuICAgICAgZGlzdGFuY2VYID0gSU1hdGguc2lnbihkaXN0YW5jZVgpICpcbiAgICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuTUlOX1JFUFVMU0lPTl9ESVNUO1xuICAgIH1cblxuICAgIGlmIChNYXRoLmFicyhkaXN0YW5jZVkpIDwgRkRMYXlvdXRDb25zdGFudHMuTUlOX1JFUFVMU0lPTl9ESVNUKVxuICAgIHtcbiAgICAgIGRpc3RhbmNlWSA9IElNYXRoLnNpZ24oZGlzdGFuY2VZKSAqXG4gICAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLk1JTl9SRVBVTFNJT05fRElTVDtcbiAgICB9XG5cbiAgICBkaXN0YW5jZVNxdWFyZWQgPSBkaXN0YW5jZVggKiBkaXN0YW5jZVggKyBkaXN0YW5jZVkgKiBkaXN0YW5jZVk7XG4gICAgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZGlzdGFuY2VTcXVhcmVkKTtcblxuICAgIHJlcHVsc2lvbkZvcmNlID0gdGhpcy5yZXB1bHNpb25Db25zdGFudCAqIG5vZGVBLm5vT2ZDaGlsZHJlbiAqIG5vZGVCLm5vT2ZDaGlsZHJlbiAvIGRpc3RhbmNlU3F1YXJlZDtcblxuICAgIC8vIFByb2plY3QgZm9yY2Ugb250byB4IGFuZCB5IGF4ZXNcbiAgICByZXB1bHNpb25Gb3JjZVggPSByZXB1bHNpb25Gb3JjZSAqIGRpc3RhbmNlWCAvIGRpc3RhbmNlO1xuICAgIHJlcHVsc2lvbkZvcmNlWSA9IHJlcHVsc2lvbkZvcmNlICogZGlzdGFuY2VZIC8gZGlzdGFuY2U7XG4gICAgIFxuICAgIC8vIEFwcGx5IGZvcmNlcyBvbiB0aGUgdHdvIG5vZGVzICAgIFxuICAgIG5vZGVBLnJlcHVsc2lvbkZvcmNlWCAtPSByZXB1bHNpb25Gb3JjZVg7XG4gICAgbm9kZUEucmVwdWxzaW9uRm9yY2VZIC09IHJlcHVsc2lvbkZvcmNlWTtcbiAgICBub2RlQi5yZXB1bHNpb25Gb3JjZVggKz0gcmVwdWxzaW9uRm9yY2VYO1xuICAgIG5vZGVCLnJlcHVsc2lvbkZvcmNlWSArPSByZXB1bHNpb25Gb3JjZVk7XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjR3Jhdml0YXRpb25hbEZvcmNlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIG93bmVyR3JhcGg7XG4gIHZhciBvd25lckNlbnRlclg7XG4gIHZhciBvd25lckNlbnRlclk7XG4gIHZhciBkaXN0YW5jZVg7XG4gIHZhciBkaXN0YW5jZVk7XG4gIHZhciBhYnNEaXN0YW5jZVg7XG4gIHZhciBhYnNEaXN0YW5jZVk7XG4gIHZhciBlc3RpbWF0ZWRTaXplO1xuICBvd25lckdyYXBoID0gbm9kZS5nZXRPd25lcigpO1xuXG4gIG93bmVyQ2VudGVyWCA9IChvd25lckdyYXBoLmdldFJpZ2h0KCkgKyBvd25lckdyYXBoLmdldExlZnQoKSkgLyAyO1xuICBvd25lckNlbnRlclkgPSAob3duZXJHcmFwaC5nZXRUb3AoKSArIG93bmVyR3JhcGguZ2V0Qm90dG9tKCkpIC8gMjtcbiAgZGlzdGFuY2VYID0gbm9kZS5nZXRDZW50ZXJYKCkgLSBvd25lckNlbnRlclg7XG4gIGRpc3RhbmNlWSA9IG5vZGUuZ2V0Q2VudGVyWSgpIC0gb3duZXJDZW50ZXJZO1xuICBhYnNEaXN0YW5jZVggPSBNYXRoLmFicyhkaXN0YW5jZVgpICsgbm9kZS5nZXRXaWR0aCgpIC8gMjtcbiAgYWJzRGlzdGFuY2VZID0gTWF0aC5hYnMoZGlzdGFuY2VZKSArIG5vZGUuZ2V0SGVpZ2h0KCkgLyAyO1xuXG4gIGlmIChub2RlLmdldE93bmVyKCkgPT0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpKS8vIGluIHRoZSByb290IGdyYXBoXG4gIHtcbiAgICBlc3RpbWF0ZWRTaXplID0gb3duZXJHcmFwaC5nZXRFc3RpbWF0ZWRTaXplKCkgKiB0aGlzLmdyYXZpdHlSYW5nZUZhY3RvcjtcblxuICAgIGlmIChhYnNEaXN0YW5jZVggPiBlc3RpbWF0ZWRTaXplIHx8IGFic0Rpc3RhbmNlWSA+IGVzdGltYXRlZFNpemUpXG4gICAge1xuICAgICAgbm9kZS5ncmF2aXRhdGlvbkZvcmNlWCA9IC10aGlzLmdyYXZpdHlDb25zdGFudCAqIGRpc3RhbmNlWDtcbiAgICAgIG5vZGUuZ3Jhdml0YXRpb25Gb3JjZVkgPSAtdGhpcy5ncmF2aXR5Q29uc3RhbnQgKiBkaXN0YW5jZVk7XG4gICAgfVxuICB9XG4gIGVsc2UvLyBpbnNpZGUgYSBjb21wb3VuZFxuICB7XG4gICAgZXN0aW1hdGVkU2l6ZSA9IG93bmVyR3JhcGguZ2V0RXN0aW1hdGVkU2l6ZSgpICogdGhpcy5jb21wb3VuZEdyYXZpdHlSYW5nZUZhY3RvcjtcblxuICAgIGlmIChhYnNEaXN0YW5jZVggPiBlc3RpbWF0ZWRTaXplIHx8IGFic0Rpc3RhbmNlWSA+IGVzdGltYXRlZFNpemUpXG4gICAge1xuICAgICAgbm9kZS5ncmF2aXRhdGlvbkZvcmNlWCA9IC10aGlzLmdyYXZpdHlDb25zdGFudCAqIGRpc3RhbmNlWCAqXG4gICAgICAgICAgICAgIHRoaXMuY29tcG91bmRHcmF2aXR5Q29uc3RhbnQ7XG4gICAgICBub2RlLmdyYXZpdGF0aW9uRm9yY2VZID0gLXRoaXMuZ3Jhdml0eUNvbnN0YW50ICogZGlzdGFuY2VZICpcbiAgICAgICAgICAgICAgdGhpcy5jb21wb3VuZEdyYXZpdHlDb25zdGFudDtcbiAgICB9XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5pc0NvbnZlcmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvbnZlcmdlZDtcbiAgdmFyIG9zY2lsYXRpbmcgPSBmYWxzZTtcblxuICBpZiAodGhpcy50b3RhbEl0ZXJhdGlvbnMgPiB0aGlzLm1heEl0ZXJhdGlvbnMgLyAzKVxuICB7XG4gICAgb3NjaWxhdGluZyA9XG4gICAgICAgICAgICBNYXRoLmFicyh0aGlzLnRvdGFsRGlzcGxhY2VtZW50IC0gdGhpcy5vbGRUb3RhbERpc3BsYWNlbWVudCkgPCAyO1xuICB9XG5cbiAgY29udmVyZ2VkID0gdGhpcy50b3RhbERpc3BsYWNlbWVudCA8IHRoaXMudG90YWxEaXNwbGFjZW1lbnRUaHJlc2hvbGQ7XG5cbiAgdGhpcy5vbGRUb3RhbERpc3BsYWNlbWVudCA9IHRoaXMudG90YWxEaXNwbGFjZW1lbnQ7XG5cbiAgcmV0dXJuIGNvbnZlcmdlZCB8fCBvc2NpbGF0aW5nO1xufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dCAmJiAhdGhpcy5pc1N1YkxheW91dClcbiAge1xuICAgIGlmICh0aGlzLm5vdEFuaW1hdGVkSXRlcmF0aW9ucyA9PSB0aGlzLmFuaW1hdGlvblBlcmlvZClcbiAgICB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgdGhpcy5ub3RBbmltYXRlZEl0ZXJhdGlvbnMgPSAwO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgdGhpcy5ub3RBbmltYXRlZEl0ZXJhdGlvbnMrKztcbiAgICB9XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBGUi1HcmlkIFZhcmlhbnQgUmVwdWxzaW9uIEZvcmNlIENhbGN1bGF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY0dyaWQgPSBmdW5jdGlvbiAoZ3JhcGgpe1xuXG4gIHZhciBzaXplWCA9IDA7IFxuICB2YXIgc2l6ZVkgPSAwO1xuICBcbiAgc2l6ZVggPSBwYXJzZUludChNYXRoLmNlaWwoKGdyYXBoLmdldFJpZ2h0KCkgLSBncmFwaC5nZXRMZWZ0KCkpIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpO1xuICBzaXplWSA9IHBhcnNlSW50KE1hdGguY2VpbCgoZ3JhcGguZ2V0Qm90dG9tKCkgLSBncmFwaC5nZXRUb3AoKSkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSk7XG4gIFxuICB2YXIgZ3JpZCA9IG5ldyBBcnJheShzaXplWCk7XG4gIFxuICBmb3IodmFyIGkgPSAwOyBpIDwgc2l6ZVg7IGkrKyl7XG4gICAgZ3JpZFtpXSA9IG5ldyBBcnJheShzaXplWSk7ICAgIFxuICB9XG4gIFxuICBmb3IodmFyIGkgPSAwOyBpIDwgc2l6ZVg7IGkrKyl7XG4gICAgZm9yKHZhciBqID0gMDsgaiA8IHNpemVZOyBqKyspe1xuICAgICAgZ3JpZFtpXVtqXSA9IG5ldyBBcnJheSgpOyAgICBcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBncmlkO1xufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmFkZE5vZGVUb0dyaWQgPSBmdW5jdGlvbiAodiwgbGVmdCwgdG9wKXtcbiAgICBcbiAgdmFyIHN0YXJ0WCA9IDA7XG4gIHZhciBmaW5pc2hYID0gMDtcbiAgdmFyIHN0YXJ0WSA9IDA7XG4gIHZhciBmaW5pc2hZID0gMDtcbiAgXG4gIHN0YXJ0WCA9IHBhcnNlSW50KE1hdGguZmxvb3IoKHYuZ2V0UmVjdCgpLnggLSBsZWZ0KSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgZmluaXNoWCA9IHBhcnNlSW50KE1hdGguZmxvb3IoKHYuZ2V0UmVjdCgpLndpZHRoICsgdi5nZXRSZWN0KCkueCAtIGxlZnQpIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpO1xuICBzdGFydFkgPSBwYXJzZUludChNYXRoLmZsb29yKCh2LmdldFJlY3QoKS55IC0gdG9wKSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgZmluaXNoWSA9IHBhcnNlSW50KE1hdGguZmxvb3IoKHYuZ2V0UmVjdCgpLmhlaWdodCArIHYuZ2V0UmVjdCgpLnkgLSB0b3ApIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpO1xuXG4gIGZvciAodmFyIGkgPSBzdGFydFg7IGkgPD0gZmluaXNoWDsgaSsrKVxuICB7XG4gICAgZm9yICh2YXIgaiA9IHN0YXJ0WTsgaiA8PSBmaW5pc2hZOyBqKyspXG4gICAge1xuICAgICAgdGhpcy5ncmlkW2ldW2pdLnB1c2godik7XG4gICAgICB2LnNldEdyaWRDb29yZGluYXRlcyhzdGFydFgsIGZpbmlzaFgsIHN0YXJ0WSwgZmluaXNoWSk7IFxuICAgIH1cbiAgfSAgXG5cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS51cGRhdGVHcmlkID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpO1xuICB2YXIgbm9kZUE7XG4gIHZhciBsTm9kZXMgPSB0aGlzLmdldEFsbE5vZGVzKCk7XG4gIFxuICB0aGlzLmdyaWQgPSB0aGlzLmNhbGNHcmlkKHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSk7ICAgXG5cbiAgLy8gcHV0IGFsbCBub2RlcyB0byBwcm9wZXIgZ3JpZCBjZWxsc1xuICBmb3IgKGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgbm9kZUEgPSBsTm9kZXNbaV07XG4gICAgdGhpcy5hZGROb2RlVG9HcmlkKG5vZGVBLCB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0TGVmdCgpLCB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0VG9wKCkpO1xuICB9IFxuXG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY3VsYXRlUmVwdWxzaW9uRm9yY2VPZkFOb2RlID0gZnVuY3Rpb24gKG5vZGVBLCBwcm9jZXNzZWROb2RlU2V0KXtcbiAgXG4gIGlmICgodGhpcy50b3RhbEl0ZXJhdGlvbnMgJSBGRExheW91dENvbnN0YW50cy5HUklEX0NBTENVTEFUSU9OX0NIRUNLX1BFUklPRCA9PSAxICYmICF0aGlzLmlzVHJlZUdyb3dpbmcgJiYgIXRoaXMuaXNHcm93dGhGaW5pc2hlZCkgfHwgKHRoaXMuZ3Jvd1RyZWVJdGVyYXRpb25zICUgMTAgPT0gMSAmJiB0aGlzLmlzVHJlZUdyb3dpbmcpIHx8ICh0aGlzLmFmdGVyR3Jvd3RoSXRlcmF0aW9ucyAlIDEwID09IDEgJiYgdGhpcy5pc0dyb3d0aEZpbmlzaGVkKSlcbiAge1xuICAgIHZhciBzdXJyb3VuZGluZyA9IG5ldyBTZXQoKTtcbiAgICBub2RlQS5zdXJyb3VuZGluZyA9IG5ldyBBcnJheSgpO1xuICAgIHZhciBub2RlQjtcbiAgICB2YXIgZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICBcbiAgICBmb3IgKHZhciBpID0gKG5vZGVBLnN0YXJ0WCAtIDEpOyBpIDwgKG5vZGVBLmZpbmlzaFggKyAyKTsgaSsrKVxuICAgIHtcbiAgICAgIGZvciAodmFyIGogPSAobm9kZUEuc3RhcnRZIC0gMSk7IGogPCAobm9kZUEuZmluaXNoWSArIDIpOyBqKyspXG4gICAgICB7XG4gICAgICAgIGlmICghKChpIDwgMCkgfHwgKGogPCAwKSB8fCAoaSA+PSBncmlkLmxlbmd0aCkgfHwgKGogPj0gZ3JpZFswXS5sZW5ndGgpKSlcbiAgICAgICAgeyAgXG4gICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBncmlkW2ldW2pdLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBub2RlQiA9IGdyaWRbaV1bal1ba107XG5cbiAgICAgICAgICAgIC8vIElmIGJvdGggbm9kZXMgYXJlIG5vdCBtZW1iZXJzIG9mIHRoZSBzYW1lIGdyYXBoLCBcbiAgICAgICAgICAgIC8vIG9yIGJvdGggbm9kZXMgYXJlIHRoZSBzYW1lLCBza2lwLlxuICAgICAgICAgICAgaWYgKChub2RlQS5nZXRPd25lcigpICE9IG5vZGVCLmdldE93bmVyKCkpIHx8IChub2RlQSA9PSBub2RlQikpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgcmVwdWxzaW9uIGZvcmNlIGJldHdlZW5cbiAgICAgICAgICAgIC8vIG5vZGVBIGFuZCBub2RlQiBoYXMgYWxyZWFkeSBiZWVuIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgIGlmICghcHJvY2Vzc2VkTm9kZVNldC5oYXMobm9kZUIpICYmICFzdXJyb3VuZGluZy5oYXMobm9kZUIpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VYID0gTWF0aC5hYnMobm9kZUEuZ2V0Q2VudGVyWCgpLW5vZGVCLmdldENlbnRlclgoKSkgLSBcbiAgICAgICAgICAgICAgICAgICAgKChub2RlQS5nZXRXaWR0aCgpLzIpICsgKG5vZGVCLmdldFdpZHRoKCkvMikpO1xuICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VZID0gTWF0aC5hYnMobm9kZUEuZ2V0Q2VudGVyWSgpLW5vZGVCLmdldENlbnRlclkoKSkgLSBcbiAgICAgICAgICAgICAgICAgICAgKChub2RlQS5nZXRIZWlnaHQoKS8yKSArIChub2RlQi5nZXRIZWlnaHQoKS8yKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gaWYgdGhlIGRpc3RhbmNlIGJldHdlZW4gbm9kZUEgYW5kIG5vZGVCIFxuICAgICAgICAgICAgICAvLyBpcyBsZXNzIHRoZW4gY2FsY3VsYXRpb24gcmFuZ2VcbiAgICAgICAgICAgICAgaWYgKChkaXN0YW5jZVggPD0gdGhpcy5yZXB1bHNpb25SYW5nZSkgJiYgKGRpc3RhbmNlWSA8PSB0aGlzLnJlcHVsc2lvblJhbmdlKSlcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vdGhlbiBhZGQgbm9kZUIgdG8gc3Vycm91bmRpbmcgb2Ygbm9kZUFcbiAgICAgICAgICAgICAgICBzdXJyb3VuZGluZy5hZGQobm9kZUIpO1xuICAgICAgICAgICAgICB9ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgfVxuICAgICAgICB9ICAgICAgICAgIFxuICAgICAgfVxuICAgIH1cblxuICAgIG5vZGVBLnN1cnJvdW5kaW5nID0gWy4uLnN1cnJvdW5kaW5nXTtcblx0XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IG5vZGVBLnN1cnJvdW5kaW5nLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgdGhpcy5jYWxjUmVwdWxzaW9uRm9yY2Uobm9kZUEsIG5vZGVBLnN1cnJvdW5kaW5nW2ldKTtcbiAgfVx0XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1JlcHVsc2lvblJhbmdlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gMC4wO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IFRyZWUgUmVkdWN0aW9uIG1ldGhvZHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBSZWR1Y2UgdHJlZXMgXG5GRExheW91dC5wcm90b3R5cGUucmVkdWNlVHJlZXMgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgcHJ1bmVkTm9kZXNBbGwgPSBbXTtcbiAgdmFyIGNvbnRhaW5zTGVhZiA9IHRydWU7XG4gIHZhciBub2RlO1xuICBcbiAgd2hpbGUoY29udGFpbnNMZWFmKSB7XG4gICAgdmFyIGFsbE5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXMoKTtcbiAgICB2YXIgcHJ1bmVkTm9kZXNJblN0ZXBUZW1wID0gW107XG4gICAgY29udGFpbnNMZWFmID0gZmFsc2U7XG4gICAgXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbm9kZSA9IGFsbE5vZGVzW2ldO1xuICAgICAgaWYobm9kZS5nZXRFZGdlcygpLmxlbmd0aCA9PSAxICYmICFub2RlLmdldEVkZ2VzKClbMF0uaXNJbnRlckdyYXBoICYmIG5vZGUuZ2V0Q2hpbGQoKSA9PSBudWxsKXtcbiAgICAgICAgcHJ1bmVkTm9kZXNJblN0ZXBUZW1wLnB1c2goW25vZGUsIG5vZGUuZ2V0RWRnZXMoKVswXSwgbm9kZS5nZXRPd25lcigpXSk7XG4gICAgICAgIGNvbnRhaW5zTGVhZiA9IHRydWU7XG4gICAgICB9ICBcbiAgICB9XG4gICAgaWYoY29udGFpbnNMZWFmID09IHRydWUpe1xuICAgICAgdmFyIHBydW5lZE5vZGVzSW5TdGVwID0gW107XG4gICAgICBmb3IodmFyIGogPSAwOyBqIDwgcHJ1bmVkTm9kZXNJblN0ZXBUZW1wLmxlbmd0aDsgaisrKXtcbiAgICAgICAgaWYocHJ1bmVkTm9kZXNJblN0ZXBUZW1wW2pdWzBdLmdldEVkZ2VzKCkubGVuZ3RoID09IDEpe1xuICAgICAgICAgIHBydW5lZE5vZGVzSW5TdGVwLnB1c2gocHJ1bmVkTm9kZXNJblN0ZXBUZW1wW2pdKTsgIFxuICAgICAgICAgIHBydW5lZE5vZGVzSW5TdGVwVGVtcFtqXVswXS5nZXRPd25lcigpLnJlbW92ZShwcnVuZWROb2Rlc0luU3RlcFRlbXBbal1bMF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwcnVuZWROb2Rlc0FsbC5wdXNoKHBydW5lZE5vZGVzSW5TdGVwKTtcbiAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsTm9kZXMoKTtcbiAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsRWRnZXMoKTtcbiAgICB9XG4gIH1cbiAgdGhpcy5wcnVuZWROb2Rlc0FsbCA9IHBydW5lZE5vZGVzQWxsO1xufTtcblxuLy8gR3JvdyB0cmVlIG9uZSBzdGVwIFxuRkRMYXlvdXQucHJvdG90eXBlLmdyb3dUcmVlID0gZnVuY3Rpb24ocHJ1bmVkTm9kZXNBbGwpXG57XG4gIHZhciBsZW5ndGhPZlBydW5lZE5vZGVzSW5TdGVwID0gcHJ1bmVkTm9kZXNBbGwubGVuZ3RoOyBcbiAgdmFyIHBydW5lZE5vZGVzSW5TdGVwID0gcHJ1bmVkTm9kZXNBbGxbbGVuZ3RoT2ZQcnVuZWROb2Rlc0luU3RlcCAtIDFdOyAgXG5cbiAgdmFyIG5vZGVEYXRhOyAgXG4gIGZvcih2YXIgaSA9IDA7IGkgPCBwcnVuZWROb2Rlc0luU3RlcC5sZW5ndGg7IGkrKyl7XG4gICAgbm9kZURhdGEgPSBwcnVuZWROb2Rlc0luU3RlcFtpXTtcblxuICAgIHRoaXMuZmluZFBsYWNlZm9yUHJ1bmVkTm9kZShub2RlRGF0YSk7XG4gICAgXG4gICAgbm9kZURhdGFbMl0uYWRkKG5vZGVEYXRhWzBdKTtcbiAgICBub2RlRGF0YVsyXS5hZGQobm9kZURhdGFbMV0sIG5vZGVEYXRhWzFdLnNvdXJjZSwgbm9kZURhdGFbMV0udGFyZ2V0KTtcbiAgfVxuXG4gIHBydW5lZE5vZGVzQWxsLnNwbGljZShwcnVuZWROb2Rlc0FsbC5sZW5ndGgtMSwgMSk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsTm9kZXMoKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxFZGdlcygpO1xufTtcblxuLy8gRmluZCBhbiBhcHByb3ByaWF0ZSBwb3NpdGlvbiB0byByZXBsYWNlIHBydW5lZCBub2RlLCB0aGlzIG1ldGhvZCBjYW4gYmUgaW1wcm92ZWRcbkZETGF5b3V0LnByb3RvdHlwZS5maW5kUGxhY2Vmb3JQcnVuZWROb2RlID0gZnVuY3Rpb24obm9kZURhdGEpe1xuICBcbiAgdmFyIGdyaWRGb3JQcnVuZWROb2RlOyAgXG4gIHZhciBub2RlVG9Db25uZWN0O1xuICB2YXIgcHJ1bmVkTm9kZSA9IG5vZGVEYXRhWzBdO1xuICBpZihwcnVuZWROb2RlID09IG5vZGVEYXRhWzFdLnNvdXJjZSl7XG4gICAgbm9kZVRvQ29ubmVjdCA9IG5vZGVEYXRhWzFdLnRhcmdldDtcbiAgfVxuICBlbHNlIHtcbiAgICBub2RlVG9Db25uZWN0ID0gbm9kZURhdGFbMV0uc291cmNlOyAgXG4gIH1cbiAgdmFyIHN0YXJ0R3JpZFggPSBub2RlVG9Db25uZWN0LnN0YXJ0WDtcbiAgdmFyIGZpbmlzaEdyaWRYID0gbm9kZVRvQ29ubmVjdC5maW5pc2hYO1xuICB2YXIgc3RhcnRHcmlkWSA9IG5vZGVUb0Nvbm5lY3Quc3RhcnRZO1xuICB2YXIgZmluaXNoR3JpZFkgPSBub2RlVG9Db25uZWN0LmZpbmlzaFk7IFxuICBcbiAgdmFyIHVwTm9kZUNvdW50ID0gMDtcbiAgdmFyIGRvd25Ob2RlQ291bnQgPSAwO1xuICB2YXIgcmlnaHROb2RlQ291bnQgPSAwO1xuICB2YXIgbGVmdE5vZGVDb3VudCA9IDA7XG4gIHZhciBjb250cm9sUmVnaW9ucyA9IFt1cE5vZGVDb3VudCwgcmlnaHROb2RlQ291bnQsIGRvd25Ob2RlQ291bnQsIGxlZnROb2RlQ291bnRdXG4gIFxuICBpZihzdGFydEdyaWRZID4gMCl7XG4gICAgZm9yKHZhciBpID0gc3RhcnRHcmlkWDsgaSA8PSBmaW5pc2hHcmlkWDsgaSsrICl7XG4gICAgICBjb250cm9sUmVnaW9uc1swXSArPSAodGhpcy5ncmlkW2ldW3N0YXJ0R3JpZFkgLSAxXS5sZW5ndGggKyB0aGlzLmdyaWRbaV1bc3RhcnRHcmlkWV0ubGVuZ3RoIC0gMSk7ICAgXG4gICAgfVxuICB9XG4gIGlmKGZpbmlzaEdyaWRYIDwgdGhpcy5ncmlkLmxlbmd0aCAtIDEpe1xuICAgIGZvcih2YXIgaSA9IHN0YXJ0R3JpZFk7IGkgPD0gZmluaXNoR3JpZFk7IGkrKyApe1xuICAgICAgY29udHJvbFJlZ2lvbnNbMV0gKz0gKHRoaXMuZ3JpZFtmaW5pc2hHcmlkWCArIDFdW2ldLmxlbmd0aCArIHRoaXMuZ3JpZFtmaW5pc2hHcmlkWF1baV0ubGVuZ3RoIC0gMSk7ICAgXG4gICAgfVxuICB9XG4gIGlmKGZpbmlzaEdyaWRZIDwgdGhpcy5ncmlkWzBdLmxlbmd0aCAtIDEpe1xuICAgIGZvcih2YXIgaSA9IHN0YXJ0R3JpZFg7IGkgPD0gZmluaXNoR3JpZFg7IGkrKyApe1xuICAgICAgY29udHJvbFJlZ2lvbnNbMl0gKz0gKHRoaXMuZ3JpZFtpXVtmaW5pc2hHcmlkWSArIDFdLmxlbmd0aCArIHRoaXMuZ3JpZFtpXVtmaW5pc2hHcmlkWV0ubGVuZ3RoIC0gMSk7ICAgXG4gICAgfVxuICB9XG4gIGlmKHN0YXJ0R3JpZFggPiAwKXtcbiAgICBmb3IodmFyIGkgPSBzdGFydEdyaWRZOyBpIDw9IGZpbmlzaEdyaWRZOyBpKysgKXtcbiAgICAgIGNvbnRyb2xSZWdpb25zWzNdICs9ICh0aGlzLmdyaWRbc3RhcnRHcmlkWCAtIDFdW2ldLmxlbmd0aCArIHRoaXMuZ3JpZFtzdGFydEdyaWRYXVtpXS5sZW5ndGggLSAxKTsgICBcbiAgICB9XG4gIH1cbiAgdmFyIG1pbiA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgbWluQ291bnQ7XG4gIHZhciBtaW5JbmRleDtcbiAgZm9yKHZhciBqID0gMDsgaiA8IGNvbnRyb2xSZWdpb25zLmxlbmd0aDsgaisrKXtcbiAgICBpZihjb250cm9sUmVnaW9uc1tqXSA8IG1pbil7XG4gICAgICBtaW4gPSBjb250cm9sUmVnaW9uc1tqXTtcbiAgICAgIG1pbkNvdW50ID0gMTtcbiAgICAgIG1pbkluZGV4ID0gajtcbiAgICB9ICBcbiAgICBlbHNlIGlmKGNvbnRyb2xSZWdpb25zW2pdID09IG1pbil7XG4gICAgICBtaW5Db3VudCsrOyAgXG4gICAgfVxuICB9XG4gIFxuICBpZihtaW5Db3VudCA9PSAzICYmIG1pbiA9PSAwKXtcbiAgICBpZihjb250cm9sUmVnaW9uc1swXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzFdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbMl0gPT0gMCl7XG4gICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDE7ICAgIFxuICAgIH1cbiAgICBlbHNlIGlmKGNvbnRyb2xSZWdpb25zWzBdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbMV0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1szXSA9PSAwKXtcbiAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMDsgIFxuICAgIH1cbiAgICBlbHNlIGlmKGNvbnRyb2xSZWdpb25zWzBdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbMl0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1szXSA9PSAwKXtcbiAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMzsgIFxuICAgIH1cbiAgICBlbHNlIGlmKGNvbnRyb2xSZWdpb25zWzFdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbMl0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1szXSA9PSAwKXtcbiAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMjsgIFxuICAgIH1cbiAgfVxuICBlbHNlIGlmKG1pbkNvdW50ID09IDIgJiYgbWluID09IDApe1xuICAgIHZhciByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICBpZihjb250cm9sUmVnaW9uc1swXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzFdID09IDApeztcbiAgICAgIGlmKHJhbmRvbSA9PSAwKXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAwO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKGNvbnRyb2xSZWdpb25zWzBdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbMl0gPT0gMCl7XG4gICAgICBpZihyYW5kb20gPT0gMCl7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMDtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMjtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZihjb250cm9sUmVnaW9uc1swXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzNdID09IDApe1xuICAgICAgaWYocmFuZG9tID09IDApe1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDA7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDM7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYoY29udHJvbFJlZ2lvbnNbMV0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1syXSA9PSAwKXtcbiAgICAgIGlmKHJhbmRvbSA9PSAwKXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAxO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAyO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKGNvbnRyb2xSZWdpb25zWzFdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbM10gPT0gMCl7XG4gICAgICBpZihyYW5kb20gPT0gMCl7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMztcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZihyYW5kb20gPT0gMCl7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMjtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSBpZihtaW5Db3VudCA9PSA0ICYmIG1pbiA9PSAwKXtcbiAgICB2YXIgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XG4gICAgZ3JpZEZvclBydW5lZE5vZGUgPSByYW5kb207ICBcbiAgfVxuICBlbHNlIHtcbiAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IG1pbkluZGV4O1xuICB9XG4gIFxuICBpZihncmlkRm9yUHJ1bmVkTm9kZSA9PSAwKSB7XG4gICAgcHJ1bmVkTm9kZS5zZXRDZW50ZXIobm9kZVRvQ29ubmVjdC5nZXRDZW50ZXJYKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvQ29ubmVjdC5nZXRDZW50ZXJZKCkgLSBub2RlVG9Db25uZWN0LmdldEhlaWdodCgpLzIgLSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIIC0gcHJ1bmVkTm9kZS5nZXRIZWlnaHQoKS8yKTsgIFxuICB9XG4gIGVsc2UgaWYoZ3JpZEZvclBydW5lZE5vZGUgPT0gMSkge1xuICAgIHBydW5lZE5vZGUuc2V0Q2VudGVyKG5vZGVUb0Nvbm5lY3QuZ2V0Q2VudGVyWCgpICsgbm9kZVRvQ29ubmVjdC5nZXRXaWR0aCgpLzIgKyBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIICsgcHJ1bmVkTm9kZS5nZXRXaWR0aCgpLzIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvQ29ubmVjdC5nZXRDZW50ZXJZKCkpOyAgXG4gIH1cbiAgZWxzZSBpZihncmlkRm9yUHJ1bmVkTm9kZSA9PSAyKSB7XG4gICAgcHJ1bmVkTm9kZS5zZXRDZW50ZXIobm9kZVRvQ29ubmVjdC5nZXRDZW50ZXJYKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvQ29ubmVjdC5nZXRDZW50ZXJZKCkgKyBub2RlVG9Db25uZWN0LmdldEhlaWdodCgpLzIgKyBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIICsgcHJ1bmVkTm9kZS5nZXRIZWlnaHQoKS8yKTsgIFxuICB9XG4gIGVsc2UgeyBcbiAgICBwcnVuZWROb2RlLnNldENlbnRlcihub2RlVG9Db25uZWN0LmdldENlbnRlclgoKSAtIG5vZGVUb0Nvbm5lY3QuZ2V0V2lkdGgoKS8yIC0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCAtIHBydW5lZE5vZGUuZ2V0V2lkdGgoKS8yLFxuICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUb0Nvbm5lY3QuZ2V0Q2VudGVyWSgpKTsgIFxuICB9XG4gIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGRExheW91dDtcbiIsInZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0xheW91dENvbnN0YW50cycpO1xuXG5mdW5jdGlvbiBGRExheW91dENvbnN0YW50cygpIHtcbn1cblxuLy9GRExheW91dENvbnN0YW50cyBpbmhlcml0cyBzdGF0aWMgcHJvcHMgaW4gTGF5b3V0Q29uc3RhbnRzXG5mb3IgKHZhciBwcm9wIGluIExheW91dENvbnN0YW50cykge1xuICBGRExheW91dENvbnN0YW50c1twcm9wXSA9IExheW91dENvbnN0YW50c1twcm9wXTtcbn1cblxuRkRMYXlvdXRDb25zdGFudHMuTUFYX0lURVJBVElPTlMgPSAyNTAwO1xuXG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIID0gNTA7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX1NQUklOR19TVFJFTkdUSCA9IDAuNDU7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX1JFUFVMU0lPTl9TVFJFTkdUSCA9IDQ1MDAuMDtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9TVFJFTkdUSCA9IDAuNDtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9TVFJFTkdUSCA9IDEuMDtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9SQU5HRV9GQUNUT1IgPSAzLjg7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfUkFOR0VfRkFDVE9SID0gMS41O1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VU0VfU01BUlRfSURFQUxfRURHRV9MRU5HVEhfQ0FMQ1VMQVRJT04gPSB0cnVlO1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VU0VfU01BUlRfUkVQVUxTSU9OX1JBTkdFX0NBTENVTEFUSU9OID0gdHJ1ZTtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUwgPSAwLjU7XG5GRExheW91dENvbnN0YW50cy5NQVhfTk9ERV9ESVNQTEFDRU1FTlRfSU5DUkVNRU5UQUwgPSAxMDAuMDtcbkZETGF5b3V0Q29uc3RhbnRzLk1BWF9OT0RFX0RJU1BMQUNFTUVOVCA9IEZETGF5b3V0Q29uc3RhbnRzLk1BWF9OT0RFX0RJU1BMQUNFTUVOVF9JTkNSRU1FTlRBTCAqIDM7XG5GRExheW91dENvbnN0YW50cy5NSU5fUkVQVUxTSU9OX0RJU1QgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIIC8gMTAuMDtcbkZETGF5b3V0Q29uc3RhbnRzLkNPTlZFUkdFTkNFX0NIRUNLX1BFUklPRCA9IDEwMDtcbkZETGF5b3V0Q29uc3RhbnRzLlBFUl9MRVZFTF9JREVBTF9FREdFX0xFTkdUSF9GQUNUT1IgPSAwLjE7XG5GRExheW91dENvbnN0YW50cy5NSU5fRURHRV9MRU5HVEggPSAxO1xuRkRMYXlvdXRDb25zdGFudHMuR1JJRF9DQUxDVUxBVElPTl9DSEVDS19QRVJJT0QgPSAxMDtcblxubW9kdWxlLmV4cG9ydHMgPSBGRExheW91dENvbnN0YW50cztcbiIsInZhciBMRWRnZSA9IHJlcXVpcmUoJy4vTEVkZ2UnKTtcbnZhciBGRExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vRkRMYXlvdXRDb25zdGFudHMnKTtcblxuZnVuY3Rpb24gRkRMYXlvdXRFZGdlKHNvdXJjZSwgdGFyZ2V0LCB2RWRnZSkge1xuICBMRWRnZS5jYWxsKHRoaXMsIHNvdXJjZSwgdGFyZ2V0LCB2RWRnZSk7XG4gIHRoaXMuaWRlYWxMZW5ndGggPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIO1xufVxuXG5GRExheW91dEVkZ2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMRWRnZS5wcm90b3R5cGUpO1xuXG5mb3IgKHZhciBwcm9wIGluIExFZGdlKSB7XG4gIEZETGF5b3V0RWRnZVtwcm9wXSA9IExFZGdlW3Byb3BdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZETGF5b3V0RWRnZTtcbiIsInZhciBMTm9kZSA9IHJlcXVpcmUoJy4vTE5vZGUnKTtcblxuZnVuY3Rpb24gRkRMYXlvdXROb2RlKGdtLCBsb2MsIHNpemUsIHZOb2RlKSB7XG4gIC8vIGFsdGVybmF0aXZlIGNvbnN0cnVjdG9yIGlzIGhhbmRsZWQgaW5zaWRlIExOb2RlXG4gIExOb2RlLmNhbGwodGhpcywgZ20sIGxvYywgc2l6ZSwgdk5vZGUpO1xuICAvL1NwcmluZywgcmVwdWxzaW9uIGFuZCBncmF2aXRhdGlvbmFsIGZvcmNlcyBhY3Rpbmcgb24gdGhpcyBub2RlXG4gIHRoaXMuc3ByaW5nRm9yY2VYID0gMDtcbiAgdGhpcy5zcHJpbmdGb3JjZVkgPSAwO1xuICB0aGlzLnJlcHVsc2lvbkZvcmNlWCA9IDA7XG4gIHRoaXMucmVwdWxzaW9uRm9yY2VZID0gMDtcbiAgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWCA9IDA7XG4gIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVkgPSAwO1xuICAvL0Ftb3VudCBieSB3aGljaCB0aGlzIG5vZGUgaXMgdG8gYmUgbW92ZWQgaW4gdGhpcyBpdGVyYXRpb25cbiAgdGhpcy5kaXNwbGFjZW1lbnRYID0gMDtcbiAgdGhpcy5kaXNwbGFjZW1lbnRZID0gMDtcblxuICAvL1N0YXJ0IGFuZCBmaW5pc2ggZ3JpZCBjb29yZGluYXRlcyB0aGF0IHRoaXMgbm9kZSBpcyBmYWxsZW4gaW50b1xuICB0aGlzLnN0YXJ0WCA9IDA7XG4gIHRoaXMuZmluaXNoWCA9IDA7XG4gIHRoaXMuc3RhcnRZID0gMDtcbiAgdGhpcy5maW5pc2hZID0gMDtcblxuICAvL0dlb21ldHJpYyBuZWlnaGJvcnMgb2YgdGhpcyBub2RlXG4gIHRoaXMuc3Vycm91bmRpbmcgPSBbXTtcbn1cblxuRkRMYXlvdXROb2RlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTE5vZGUucHJvdG90eXBlKTtcblxuZm9yICh2YXIgcHJvcCBpbiBMTm9kZSkge1xuICBGRExheW91dE5vZGVbcHJvcF0gPSBMTm9kZVtwcm9wXTtcbn1cblxuRkRMYXlvdXROb2RlLnByb3RvdHlwZS5zZXRHcmlkQ29vcmRpbmF0ZXMgPSBmdW5jdGlvbiAoX3N0YXJ0WCwgX2ZpbmlzaFgsIF9zdGFydFksIF9maW5pc2hZKVxue1xuICB0aGlzLnN0YXJ0WCA9IF9zdGFydFg7XG4gIHRoaXMuZmluaXNoWCA9IF9maW5pc2hYO1xuICB0aGlzLnN0YXJ0WSA9IF9zdGFydFk7XG4gIHRoaXMuZmluaXNoWSA9IF9maW5pc2hZO1xuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZETGF5b3V0Tm9kZTtcbiIsInZhciBVbmlxdWVJREdlbmVyZXRvciA9IHJlcXVpcmUoJy4vVW5pcXVlSURHZW5lcmV0b3InKTtcblxuZnVuY3Rpb24gSGFzaE1hcCgpIHtcbiAgdGhpcy5tYXAgPSB7fTtcbiAgdGhpcy5rZXlzID0gW107XG59XG5cbkhhc2hNYXAucHJvdG90eXBlLnB1dCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHZhciB0aGVJZCA9IFVuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKGtleSk7XG4gIGlmICghdGhpcy5jb250YWlucyh0aGVJZCkpIHtcbiAgICB0aGlzLm1hcFt0aGVJZF0gPSB2YWx1ZTtcbiAgICB0aGlzLmtleXMucHVzaChrZXkpO1xuICB9XG59O1xuXG5IYXNoTWFwLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdmFyIHRoZUlkID0gVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQoa2V5KTtcbiAgcmV0dXJuIHRoaXMubWFwW2tleV0gIT0gbnVsbDtcbn07XG5cbkhhc2hNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdmFyIHRoZUlkID0gVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQoa2V5KTtcbiAgcmV0dXJuIHRoaXMubWFwW3RoZUlkXTtcbn07XG5cbkhhc2hNYXAucHJvdG90eXBlLmtleVNldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMua2V5cztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaE1hcDtcbiIsInZhciBVbmlxdWVJREdlbmVyZXRvciA9IHJlcXVpcmUoJy4vVW5pcXVlSURHZW5lcmV0b3InKTtcblxuZnVuY3Rpb24gSGFzaFNldCgpIHtcbiAgdGhpcy5zZXQgPSB7fTtcbn1cbjtcblxuSGFzaFNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKG9iaikge1xuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChvYmopO1xuICBpZiAoIXRoaXMuY29udGFpbnModGhlSWQpKVxuICAgIHRoaXMuc2V0W3RoZUlkXSA9IG9iajtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgZGVsZXRlIHRoaXMuc2V0W1VuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKG9iaildO1xufTtcblxuSGFzaFNldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuc2V0ID0ge307XG59O1xuXG5IYXNoU2V0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRoaXMuc2V0W1VuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKG9iaildID09IG9iajtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnNpemUoKSA9PT0gMDtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnNldCkubGVuZ3RoO1xufTtcblxuLy9jb25jYXRzIHRoaXMuc2V0IHRvIHRoZSBnaXZlbiBsaXN0XG5IYXNoU2V0LnByb3RvdHlwZS5hZGRBbGxUbyA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zZXQpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBsaXN0LnB1c2godGhpcy5zZXRba2V5c1tpXV0pO1xuICB9XG59O1xuXG5IYXNoU2V0LnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zZXQpLmxlbmd0aDtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLmFkZEFsbCA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gIHZhciBzID0gbGlzdC5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XG4gICAgdmFyIHYgPSBsaXN0W2ldO1xuICAgIHRoaXMuYWRkKHYpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2hTZXQ7XG4iLCJmdW5jdGlvbiBJR2VvbWV0cnkoKSB7XG59XG5cbklHZW9tZXRyeS5jYWxjU2VwYXJhdGlvbkFtb3VudCA9IGZ1bmN0aW9uIChyZWN0QSwgcmVjdEIsIG92ZXJsYXBBbW91bnQsIHNlcGFyYXRpb25CdWZmZXIpXG57XG4gIGlmICghcmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuICB2YXIgZGlyZWN0aW9ucyA9IG5ldyBBcnJheSgyKTtcbiAgSUdlb21ldHJ5LmRlY2lkZURpcmVjdGlvbnNGb3JPdmVybGFwcGluZ05vZGVzKHJlY3RBLCByZWN0QiwgZGlyZWN0aW9ucyk7XG4gIG92ZXJsYXBBbW91bnRbMF0gPSBNYXRoLm1pbihyZWN0QS5nZXRSaWdodCgpLCByZWN0Qi5nZXRSaWdodCgpKSAtXG4gICAgICAgICAgTWF0aC5tYXgocmVjdEEueCwgcmVjdEIueCk7XG4gIG92ZXJsYXBBbW91bnRbMV0gPSBNYXRoLm1pbihyZWN0QS5nZXRCb3R0b20oKSwgcmVjdEIuZ2V0Qm90dG9tKCkpIC1cbiAgICAgICAgICBNYXRoLm1heChyZWN0QS55LCByZWN0Qi55KTtcbiAgLy8gdXBkYXRlIHRoZSBvdmVybGFwcGluZyBhbW91bnRzIGZvciB0aGUgZm9sbG93aW5nIGNhc2VzOlxuICBpZiAoKHJlY3RBLmdldFgoKSA8PSByZWN0Qi5nZXRYKCkpICYmIChyZWN0QS5nZXRSaWdodCgpID49IHJlY3RCLmdldFJpZ2h0KCkpKVxuICB7XG4gICAgb3ZlcmxhcEFtb3VudFswXSArPSBNYXRoLm1pbigocmVjdEIuZ2V0WCgpIC0gcmVjdEEuZ2V0WCgpKSxcbiAgICAgICAgICAgIChyZWN0QS5nZXRSaWdodCgpIC0gcmVjdEIuZ2V0UmlnaHQoKSkpO1xuICB9XG4gIGVsc2UgaWYgKChyZWN0Qi5nZXRYKCkgPD0gcmVjdEEuZ2V0WCgpKSAmJiAocmVjdEIuZ2V0UmlnaHQoKSA+PSByZWN0QS5nZXRSaWdodCgpKSlcbiAge1xuICAgIG92ZXJsYXBBbW91bnRbMF0gKz0gTWF0aC5taW4oKHJlY3RBLmdldFgoKSAtIHJlY3RCLmdldFgoKSksXG4gICAgICAgICAgICAocmVjdEIuZ2V0UmlnaHQoKSAtIHJlY3RBLmdldFJpZ2h0KCkpKTtcbiAgfVxuICBpZiAoKHJlY3RBLmdldFkoKSA8PSByZWN0Qi5nZXRZKCkpICYmIChyZWN0QS5nZXRCb3R0b20oKSA+PSByZWN0Qi5nZXRCb3R0b20oKSkpXG4gIHtcbiAgICBvdmVybGFwQW1vdW50WzFdICs9IE1hdGgubWluKChyZWN0Qi5nZXRZKCkgLSByZWN0QS5nZXRZKCkpLFxuICAgICAgICAgICAgKHJlY3RBLmdldEJvdHRvbSgpIC0gcmVjdEIuZ2V0Qm90dG9tKCkpKTtcbiAgfVxuICBlbHNlIGlmICgocmVjdEIuZ2V0WSgpIDw9IHJlY3RBLmdldFkoKSkgJiYgKHJlY3RCLmdldEJvdHRvbSgpID49IHJlY3RBLmdldEJvdHRvbSgpKSlcbiAge1xuICAgIG92ZXJsYXBBbW91bnRbMV0gKz0gTWF0aC5taW4oKHJlY3RBLmdldFkoKSAtIHJlY3RCLmdldFkoKSksXG4gICAgICAgICAgICAocmVjdEIuZ2V0Qm90dG9tKCkgLSByZWN0QS5nZXRCb3R0b20oKSkpO1xuICB9XG5cbiAgLy8gZmluZCBzbG9wZSBvZiB0aGUgbGluZSBwYXNzZXMgdHdvIGNlbnRlcnNcbiAgdmFyIHNsb3BlID0gTWF0aC5hYnMoKHJlY3RCLmdldENlbnRlclkoKSAtIHJlY3RBLmdldENlbnRlclkoKSkgL1xuICAgICAgICAgIChyZWN0Qi5nZXRDZW50ZXJYKCkgLSByZWN0QS5nZXRDZW50ZXJYKCkpKTtcbiAgLy8gaWYgY2VudGVycyBhcmUgb3ZlcmxhcHBlZFxuICBpZiAoKHJlY3RCLmdldENlbnRlclkoKSA9PSByZWN0QS5nZXRDZW50ZXJZKCkpICYmXG4gICAgICAgICAgKHJlY3RCLmdldENlbnRlclgoKSA9PSByZWN0QS5nZXRDZW50ZXJYKCkpKVxuICB7XG4gICAgLy8gYXNzdW1lIHRoZSBzbG9wZSBpcyAxICg0NSBkZWdyZWUpXG4gICAgc2xvcGUgPSAxLjA7XG4gIH1cblxuICB2YXIgbW92ZUJ5WSA9IHNsb3BlICogb3ZlcmxhcEFtb3VudFswXTtcbiAgdmFyIG1vdmVCeVggPSBvdmVybGFwQW1vdW50WzFdIC8gc2xvcGU7XG4gIGlmIChvdmVybGFwQW1vdW50WzBdIDwgbW92ZUJ5WClcbiAge1xuICAgIG1vdmVCeVggPSBvdmVybGFwQW1vdW50WzBdO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIG1vdmVCeVkgPSBvdmVybGFwQW1vdW50WzFdO1xuICB9XG4gIC8vIHJldHVybiBoYWxmIHRoZSBhbW91bnQgc28gdGhhdCBpZiBlYWNoIHJlY3RhbmdsZSBpcyBtb3ZlZCBieSB0aGVzZVxuICAvLyBhbW91bnRzIGluIG9wcG9zaXRlIGRpcmVjdGlvbnMsIG92ZXJsYXAgd2lsbCBiZSByZXNvbHZlZFxuICBvdmVybGFwQW1vdW50WzBdID0gLTEgKiBkaXJlY3Rpb25zWzBdICogKChtb3ZlQnlYIC8gMikgKyBzZXBhcmF0aW9uQnVmZmVyKTtcbiAgb3ZlcmxhcEFtb3VudFsxXSA9IC0xICogZGlyZWN0aW9uc1sxXSAqICgobW92ZUJ5WSAvIDIpICsgc2VwYXJhdGlvbkJ1ZmZlcik7XG59XG5cbklHZW9tZXRyeS5kZWNpZGVEaXJlY3Rpb25zRm9yT3ZlcmxhcHBpbmdOb2RlcyA9IGZ1bmN0aW9uIChyZWN0QSwgcmVjdEIsIGRpcmVjdGlvbnMpXG57XG4gIGlmIChyZWN0QS5nZXRDZW50ZXJYKCkgPCByZWN0Qi5nZXRDZW50ZXJYKCkpXG4gIHtcbiAgICBkaXJlY3Rpb25zWzBdID0gLTE7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgZGlyZWN0aW9uc1swXSA9IDE7XG4gIH1cblxuICBpZiAocmVjdEEuZ2V0Q2VudGVyWSgpIDwgcmVjdEIuZ2V0Q2VudGVyWSgpKVxuICB7XG4gICAgZGlyZWN0aW9uc1sxXSA9IC0xO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIGRpcmVjdGlvbnNbMV0gPSAxO1xuICB9XG59XG5cbklHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24yID0gZnVuY3Rpb24gKHJlY3RBLCByZWN0QiwgcmVzdWx0KVxue1xuICAvL3Jlc3VsdFswLTFdIHdpbGwgY29udGFpbiBjbGlwUG9pbnQgb2YgcmVjdEEsIHJlc3VsdFsyLTNdIHdpbGwgY29udGFpbiBjbGlwUG9pbnQgb2YgcmVjdEJcbiAgdmFyIHAxeCA9IHJlY3RBLmdldENlbnRlclgoKTtcbiAgdmFyIHAxeSA9IHJlY3RBLmdldENlbnRlclkoKTtcbiAgdmFyIHAyeCA9IHJlY3RCLmdldENlbnRlclgoKTtcbiAgdmFyIHAyeSA9IHJlY3RCLmdldENlbnRlclkoKTtcblxuICAvL2lmIHR3byByZWN0YW5nbGVzIGludGVyc2VjdCwgdGhlbiBjbGlwcGluZyBwb2ludHMgYXJlIGNlbnRlcnNcbiAgaWYgKHJlY3RBLmludGVyc2VjdHMocmVjdEIpKVxuICB7XG4gICAgcmVzdWx0WzBdID0gcDF4O1xuICAgIHJlc3VsdFsxXSA9IHAxeTtcbiAgICByZXN1bHRbMl0gPSBwMng7XG4gICAgcmVzdWx0WzNdID0gcDJ5O1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8vdmFyaWFibGVzIGZvciByZWN0QVxuICB2YXIgdG9wTGVmdEF4ID0gcmVjdEEuZ2V0WCgpO1xuICB2YXIgdG9wTGVmdEF5ID0gcmVjdEEuZ2V0WSgpO1xuICB2YXIgdG9wUmlnaHRBeCA9IHJlY3RBLmdldFJpZ2h0KCk7XG4gIHZhciBib3R0b21MZWZ0QXggPSByZWN0QS5nZXRYKCk7XG4gIHZhciBib3R0b21MZWZ0QXkgPSByZWN0QS5nZXRCb3R0b20oKTtcbiAgdmFyIGJvdHRvbVJpZ2h0QXggPSByZWN0QS5nZXRSaWdodCgpO1xuICB2YXIgaGFsZldpZHRoQSA9IHJlY3RBLmdldFdpZHRoSGFsZigpO1xuICB2YXIgaGFsZkhlaWdodEEgPSByZWN0QS5nZXRIZWlnaHRIYWxmKCk7XG4gIC8vdmFyaWFibGVzIGZvciByZWN0QlxuICB2YXIgdG9wTGVmdEJ4ID0gcmVjdEIuZ2V0WCgpO1xuICB2YXIgdG9wTGVmdEJ5ID0gcmVjdEIuZ2V0WSgpO1xuICB2YXIgdG9wUmlnaHRCeCA9IHJlY3RCLmdldFJpZ2h0KCk7XG4gIHZhciBib3R0b21MZWZ0QnggPSByZWN0Qi5nZXRYKCk7XG4gIHZhciBib3R0b21MZWZ0QnkgPSByZWN0Qi5nZXRCb3R0b20oKTtcbiAgdmFyIGJvdHRvbVJpZ2h0QnggPSByZWN0Qi5nZXRSaWdodCgpO1xuICB2YXIgaGFsZldpZHRoQiA9IHJlY3RCLmdldFdpZHRoSGFsZigpO1xuICB2YXIgaGFsZkhlaWdodEIgPSByZWN0Qi5nZXRIZWlnaHRIYWxmKCk7XG4gIC8vZmxhZyB3aGV0aGVyIGNsaXBwaW5nIHBvaW50cyBhcmUgZm91bmRcbiAgdmFyIGNsaXBQb2ludEFGb3VuZCA9IGZhbHNlO1xuICB2YXIgY2xpcFBvaW50QkZvdW5kID0gZmFsc2U7XG5cbiAgLy8gbGluZSBpcyB2ZXJ0aWNhbFxuICBpZiAocDF4ID09IHAyeClcbiAge1xuICAgIGlmIChwMXkgPiBwMnkpXG4gICAge1xuICAgICAgcmVzdWx0WzBdID0gcDF4O1xuICAgICAgcmVzdWx0WzFdID0gdG9wTGVmdEF5O1xuICAgICAgcmVzdWx0WzJdID0gcDJ4O1xuICAgICAgcmVzdWx0WzNdID0gYm90dG9tTGVmdEJ5O1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChwMXkgPCBwMnkpXG4gICAge1xuICAgICAgcmVzdWx0WzBdID0gcDF4O1xuICAgICAgcmVzdWx0WzFdID0gYm90dG9tTGVmdEF5O1xuICAgICAgcmVzdWx0WzJdID0gcDJ4O1xuICAgICAgcmVzdWx0WzNdID0gdG9wTGVmdEJ5O1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgLy9ub3QgbGluZSwgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIC8vIGxpbmUgaXMgaG9yaXpvbnRhbFxuICBlbHNlIGlmIChwMXkgPT0gcDJ5KVxuICB7XG4gICAgaWYgKHAxeCA+IHAyeClcbiAgICB7XG4gICAgICByZXN1bHRbMF0gPSB0b3BMZWZ0QXg7XG4gICAgICByZXN1bHRbMV0gPSBwMXk7XG4gICAgICByZXN1bHRbMl0gPSB0b3BSaWdodEJ4O1xuICAgICAgcmVzdWx0WzNdID0gcDJ5O1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChwMXggPCBwMngpXG4gICAge1xuICAgICAgcmVzdWx0WzBdID0gdG9wUmlnaHRBeDtcbiAgICAgIHJlc3VsdFsxXSA9IHAxeTtcbiAgICAgIHJlc3VsdFsyXSA9IHRvcExlZnRCeDtcbiAgICAgIHJlc3VsdFszXSA9IHAyeTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIC8vbm90IHZhbGlkIGxpbmUsIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICBlbHNlXG4gIHtcbiAgICAvL3Nsb3BlcyBvZiByZWN0QSdzIGFuZCByZWN0QidzIGRpYWdvbmFsc1xuICAgIHZhciBzbG9wZUEgPSByZWN0QS5oZWlnaHQgLyByZWN0QS53aWR0aDtcbiAgICB2YXIgc2xvcGVCID0gcmVjdEIuaGVpZ2h0IC8gcmVjdEIud2lkdGg7XG5cbiAgICAvL3Nsb3BlIG9mIGxpbmUgYmV0d2VlbiBjZW50ZXIgb2YgcmVjdEEgYW5kIGNlbnRlciBvZiByZWN0QlxuICAgIHZhciBzbG9wZVByaW1lID0gKHAyeSAtIHAxeSkgLyAocDJ4IC0gcDF4KTtcbiAgICB2YXIgY2FyZGluYWxEaXJlY3Rpb25BO1xuICAgIHZhciBjYXJkaW5hbERpcmVjdGlvbkI7XG4gICAgdmFyIHRlbXBQb2ludEF4O1xuICAgIHZhciB0ZW1wUG9pbnRBeTtcbiAgICB2YXIgdGVtcFBvaW50Qng7XG4gICAgdmFyIHRlbXBQb2ludEJ5O1xuXG4gICAgLy9kZXRlcm1pbmUgd2hldGhlciBjbGlwcGluZyBwb2ludCBpcyB0aGUgY29ybmVyIG9mIG5vZGVBXG4gICAgaWYgKCgtc2xvcGVBKSA9PSBzbG9wZVByaW1lKVxuICAgIHtcbiAgICAgIGlmIChwMXggPiBwMngpXG4gICAgICB7XG4gICAgICAgIHJlc3VsdFswXSA9IGJvdHRvbUxlZnRBeDtcbiAgICAgICAgcmVzdWx0WzFdID0gYm90dG9tTGVmdEF5O1xuICAgICAgICBjbGlwUG9pbnRBRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICByZXN1bHRbMF0gPSB0b3BSaWdodEF4O1xuICAgICAgICByZXN1bHRbMV0gPSB0b3BMZWZ0QXk7XG4gICAgICAgIGNsaXBQb2ludEFGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHNsb3BlQSA9PSBzbG9wZVByaW1lKVxuICAgIHtcbiAgICAgIGlmIChwMXggPiBwMngpXG4gICAgICB7XG4gICAgICAgIHJlc3VsdFswXSA9IHRvcExlZnRBeDtcbiAgICAgICAgcmVzdWx0WzFdID0gdG9wTGVmdEF5O1xuICAgICAgICBjbGlwUG9pbnRBRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICByZXN1bHRbMF0gPSBib3R0b21SaWdodEF4O1xuICAgICAgICByZXN1bHRbMV0gPSBib3R0b21MZWZ0QXk7XG4gICAgICAgIGNsaXBQb2ludEFGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9kZXRlcm1pbmUgd2hldGhlciBjbGlwcGluZyBwb2ludCBpcyB0aGUgY29ybmVyIG9mIG5vZGVCXG4gICAgaWYgKCgtc2xvcGVCKSA9PSBzbG9wZVByaW1lKVxuICAgIHtcbiAgICAgIGlmIChwMnggPiBwMXgpXG4gICAgICB7XG4gICAgICAgIHJlc3VsdFsyXSA9IGJvdHRvbUxlZnRCeDtcbiAgICAgICAgcmVzdWx0WzNdID0gYm90dG9tTGVmdEJ5O1xuICAgICAgICBjbGlwUG9pbnRCRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICByZXN1bHRbMl0gPSB0b3BSaWdodEJ4O1xuICAgICAgICByZXN1bHRbM10gPSB0b3BMZWZ0Qnk7XG4gICAgICAgIGNsaXBQb2ludEJGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHNsb3BlQiA9PSBzbG9wZVByaW1lKVxuICAgIHtcbiAgICAgIGlmIChwMnggPiBwMXgpXG4gICAgICB7XG4gICAgICAgIHJlc3VsdFsyXSA9IHRvcExlZnRCeDtcbiAgICAgICAgcmVzdWx0WzNdID0gdG9wTGVmdEJ5O1xuICAgICAgICBjbGlwUG9pbnRCRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICByZXN1bHRbMl0gPSBib3R0b21SaWdodEJ4O1xuICAgICAgICByZXN1bHRbM10gPSBib3R0b21MZWZ0Qnk7XG4gICAgICAgIGNsaXBQb2ludEJGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9pZiBib3RoIGNsaXBwaW5nIHBvaW50cyBhcmUgY29ybmVyc1xuICAgIGlmIChjbGlwUG9pbnRBRm91bmQgJiYgY2xpcFBvaW50QkZvdW5kKVxuICAgIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvL2RldGVybWluZSBDYXJkaW5hbCBEaXJlY3Rpb24gb2YgcmVjdGFuZ2xlc1xuICAgIGlmIChwMXggPiBwMngpXG4gICAge1xuICAgICAgaWYgKHAxeSA+IHAyeSlcbiAgICAgIHtcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25BID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKHNsb3BlQSwgc2xvcGVQcmltZSwgNCk7XG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQiA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbihzbG9wZUIsIHNsb3BlUHJpbWUsIDIpO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLXNsb3BlQSwgc2xvcGVQcmltZSwgMyk7XG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQiA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbigtc2xvcGVCLCBzbG9wZVByaW1lLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIGlmIChwMXkgPiBwMnkpXG4gICAgICB7XG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQSA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbigtc2xvcGVBLCBzbG9wZVByaW1lLCAxKTtcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25CID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUIsIHNsb3BlUHJpbWUsIDMpO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVBLCBzbG9wZVByaW1lLCAyKTtcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25CID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKHNsb3BlQiwgc2xvcGVQcmltZSwgNCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vY2FsY3VsYXRlIGNsaXBwaW5nIFBvaW50IGlmIGl0IGlzIG5vdCBmb3VuZCBiZWZvcmVcbiAgICBpZiAoIWNsaXBQb2ludEFGb3VuZClcbiAgICB7XG4gICAgICBzd2l0Y2ggKGNhcmRpbmFsRGlyZWN0aW9uQSlcbiAgICAgIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRlbXBQb2ludEF5ID0gdG9wTGVmdEF5O1xuICAgICAgICAgIHRlbXBQb2ludEF4ID0gcDF4ICsgKC1oYWxmSGVpZ2h0QSkgLyBzbG9wZVByaW1lO1xuICAgICAgICAgIHJlc3VsdFswXSA9IHRlbXBQb2ludEF4O1xuICAgICAgICAgIHJlc3VsdFsxXSA9IHRlbXBQb2ludEF5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGVtcFBvaW50QXggPSBib3R0b21SaWdodEF4O1xuICAgICAgICAgIHRlbXBQb2ludEF5ID0gcDF5ICsgaGFsZldpZHRoQSAqIHNsb3BlUHJpbWU7XG4gICAgICAgICAgcmVzdWx0WzBdID0gdGVtcFBvaW50QXg7XG4gICAgICAgICAgcmVzdWx0WzFdID0gdGVtcFBvaW50QXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICB0ZW1wUG9pbnRBeSA9IGJvdHRvbUxlZnRBeTtcbiAgICAgICAgICB0ZW1wUG9pbnRBeCA9IHAxeCArIGhhbGZIZWlnaHRBIC8gc2xvcGVQcmltZTtcbiAgICAgICAgICByZXN1bHRbMF0gPSB0ZW1wUG9pbnRBeDtcbiAgICAgICAgICByZXN1bHRbMV0gPSB0ZW1wUG9pbnRBeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHRlbXBQb2ludEF4ID0gYm90dG9tTGVmdEF4O1xuICAgICAgICAgIHRlbXBQb2ludEF5ID0gcDF5ICsgKC1oYWxmV2lkdGhBKSAqIHNsb3BlUHJpbWU7XG4gICAgICAgICAgcmVzdWx0WzBdID0gdGVtcFBvaW50QXg7XG4gICAgICAgICAgcmVzdWx0WzFdID0gdGVtcFBvaW50QXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghY2xpcFBvaW50QkZvdW5kKVxuICAgIHtcbiAgICAgIHN3aXRjaCAoY2FyZGluYWxEaXJlY3Rpb25CKVxuICAgICAge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdGVtcFBvaW50QnkgPSB0b3BMZWZ0Qnk7XG4gICAgICAgICAgdGVtcFBvaW50QnggPSBwMnggKyAoLWhhbGZIZWlnaHRCKSAvIHNsb3BlUHJpbWU7XG4gICAgICAgICAgcmVzdWx0WzJdID0gdGVtcFBvaW50Qng7XG4gICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0ZW1wUG9pbnRCeCA9IGJvdHRvbVJpZ2h0Qng7XG4gICAgICAgICAgdGVtcFBvaW50QnkgPSBwMnkgKyBoYWxmV2lkdGhCICogc2xvcGVQcmltZTtcbiAgICAgICAgICByZXN1bHRbMl0gPSB0ZW1wUG9pbnRCeDtcbiAgICAgICAgICByZXN1bHRbM10gPSB0ZW1wUG9pbnRCeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRlbXBQb2ludEJ5ID0gYm90dG9tTGVmdEJ5O1xuICAgICAgICAgIHRlbXBQb2ludEJ4ID0gcDJ4ICsgaGFsZkhlaWdodEIgLyBzbG9wZVByaW1lO1xuICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xuICAgICAgICAgIHJlc3VsdFszXSA9IHRlbXBQb2ludEJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdGVtcFBvaW50QnggPSBib3R0b21MZWZ0Qng7XG4gICAgICAgICAgdGVtcFBvaW50QnkgPSBwMnkgKyAoLWhhbGZXaWR0aEIpICogc2xvcGVQcmltZTtcbiAgICAgICAgICByZXN1bHRbMl0gPSB0ZW1wUG9pbnRCeDtcbiAgICAgICAgICByZXN1bHRbM10gPSB0ZW1wUG9pbnRCeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5JR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24gPSBmdW5jdGlvbiAoc2xvcGUsIHNsb3BlUHJpbWUsIGxpbmUpXG57XG4gIGlmIChzbG9wZSA+IHNsb3BlUHJpbWUpXG4gIHtcbiAgICByZXR1cm4gbGluZTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICByZXR1cm4gMSArIGxpbmUgJSA0O1xuICB9XG59XG5cbklHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24gPSBmdW5jdGlvbiAoczEsIHMyLCBmMSwgZjIpXG57XG4gIGlmIChmMiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIElHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24yKHMxLCBzMiwgZjEpO1xuICB9XG4gIHZhciB4MSA9IHMxLng7XG4gIHZhciB5MSA9IHMxLnk7XG4gIHZhciB4MiA9IHMyLng7XG4gIHZhciB5MiA9IHMyLnk7XG4gIHZhciB4MyA9IGYxLng7XG4gIHZhciB5MyA9IGYxLnk7XG4gIHZhciB4NCA9IGYyLng7XG4gIHZhciB5NCA9IGYyLnk7XG4gIHZhciB4LCB5OyAvLyBpbnRlcnNlY3Rpb24gcG9pbnRcbiAgdmFyIGExLCBhMiwgYjEsIGIyLCBjMSwgYzI7IC8vIGNvZWZmaWNpZW50cyBvZiBsaW5lIGVxbnMuXG4gIHZhciBkZW5vbTtcblxuICBhMSA9IHkyIC0geTE7XG4gIGIxID0geDEgLSB4MjtcbiAgYzEgPSB4MiAqIHkxIC0geDEgKiB5MjsgIC8vIHsgYTEqeCArIGIxKnkgKyBjMSA9IDAgaXMgbGluZSAxIH1cblxuICBhMiA9IHk0IC0geTM7XG4gIGIyID0geDMgLSB4NDtcbiAgYzIgPSB4NCAqIHkzIC0geDMgKiB5NDsgIC8vIHsgYTIqeCArIGIyKnkgKyBjMiA9IDAgaXMgbGluZSAyIH1cblxuICBkZW5vbSA9IGExICogYjIgLSBhMiAqIGIxO1xuXG4gIGlmIChkZW5vbSA9PSAwKVxuICB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB4ID0gKGIxICogYzIgLSBiMiAqIGMxKSAvIGRlbm9tO1xuICB5ID0gKGEyICogYzEgLSBhMSAqIGMyKSAvIGRlbm9tO1xuXG4gIHJldHVybiBuZXcgUG9pbnQoeCwgeSk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBDbGFzcyBDb25zdGFudHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vKipcbiAqIFNvbWUgdXNlZnVsIHByZS1jYWxjdWxhdGVkIGNvbnN0YW50c1xuICovXG5JR2VvbWV0cnkuSEFMRl9QSSA9IDAuNSAqIE1hdGguUEk7XG5JR2VvbWV0cnkuT05FX0FORF9IQUxGX1BJID0gMS41ICogTWF0aC5QSTtcbklHZW9tZXRyeS5UV09fUEkgPSAyLjAgKiBNYXRoLlBJO1xuSUdlb21ldHJ5LlRIUkVFX1BJID0gMy4wICogTWF0aC5QSTtcblxubW9kdWxlLmV4cG9ydHMgPSBJR2VvbWV0cnk7XG4iLCJmdW5jdGlvbiBJTWF0aCgpIHtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBzaWduIG9mIHRoZSBpbnB1dCB2YWx1ZS5cbiAqL1xuSU1hdGguc2lnbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodmFsdWUgPiAwKVxuICB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgZWxzZSBpZiAodmFsdWUgPCAwKVxuICB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbklNYXRoLmZsb29yID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA8IDAgPyBNYXRoLmNlaWwodmFsdWUpIDogTWF0aC5mbG9vcih2YWx1ZSk7XG59XG5cbklNYXRoLmNlaWwgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIDwgMCA/IE1hdGguZmxvb3IodmFsdWUpIDogTWF0aC5jZWlsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJTWF0aDtcbiIsImZ1bmN0aW9uIEludGVnZXIoKSB7XG59XG5cbkludGVnZXIuTUFYX1ZBTFVFID0gMjE0NzQ4MzY0NztcbkludGVnZXIuTUlOX1ZBTFVFID0gLTIxNDc0ODM2NDg7XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZWdlcjtcbiIsInZhciBMR3JhcGhPYmplY3QgPSByZXF1aXJlKCcuL0xHcmFwaE9iamVjdCcpO1xudmFyIElHZW9tZXRyeSA9IHJlcXVpcmUoJy4vSUdlb21ldHJ5Jyk7XG52YXIgSU1hdGggPSByZXF1aXJlKCcuL0lNYXRoJyk7XG5cbmZ1bmN0aW9uIExFZGdlKHNvdXJjZSwgdGFyZ2V0LCB2RWRnZSkge1xuICBMR3JhcGhPYmplY3QuY2FsbCh0aGlzLCB2RWRnZSk7XG5cbiAgdGhpcy5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQgPSBmYWxzZTtcbiAgdGhpcy52R3JhcGhPYmplY3QgPSB2RWRnZTtcbiAgdGhpcy5iZW5kcG9pbnRzID0gW107XG4gIHRoaXMuc291cmNlID0gc291cmNlO1xuICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbn1cblxuTEVkZ2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMR3JhcGhPYmplY3QucHJvdG90eXBlKTtcblxuZm9yICh2YXIgcHJvcCBpbiBMR3JhcGhPYmplY3QpIHtcbiAgTEVkZ2VbcHJvcF0gPSBMR3JhcGhPYmplY3RbcHJvcF07XG59XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRTb3VyY2UgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5zb3VyY2U7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMudGFyZ2V0O1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmlzSW50ZXJHcmFwaCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmlzSW50ZXJHcmFwaDtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sZW5ndGg7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0O1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldEJlbmRwb2ludHMgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5iZW5kcG9pbnRzO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldExjYSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmxjYTtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRTb3VyY2VJbkxjYSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnNvdXJjZUluTGNhO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldFRhcmdldEluTGNhID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMudGFyZ2V0SW5MY2E7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0T3RoZXJFbmQgPSBmdW5jdGlvbiAobm9kZSlcbntcbiAgaWYgKHRoaXMuc291cmNlID09PSBub2RlKVxuICB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0O1xuICB9XG4gIGVsc2UgaWYgKHRoaXMudGFyZ2V0ID09PSBub2RlKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIHRocm93IFwiTm9kZSBpcyBub3QgaW5jaWRlbnQgd2l0aCB0aGlzIGVkZ2VcIjtcbiAgfVxufVxuXG5MRWRnZS5wcm90b3R5cGUuZ2V0T3RoZXJFbmRJbkdyYXBoID0gZnVuY3Rpb24gKG5vZGUsIGdyYXBoKVxue1xuICB2YXIgb3RoZXJFbmQgPSB0aGlzLmdldE90aGVyRW5kKG5vZGUpO1xuICB2YXIgcm9vdCA9IGdyYXBoLmdldEdyYXBoTWFuYWdlcigpLmdldFJvb3QoKTtcblxuICB3aGlsZSAodHJ1ZSlcbiAge1xuICAgIGlmIChvdGhlckVuZC5nZXRPd25lcigpID09IGdyYXBoKVxuICAgIHtcbiAgICAgIHJldHVybiBvdGhlckVuZDtcbiAgICB9XG5cbiAgICBpZiAob3RoZXJFbmQuZ2V0T3duZXIoKSA9PSByb290KVxuICAgIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIG90aGVyRW5kID0gb3RoZXJFbmQuZ2V0T3duZXIoKS5nZXRQYXJlbnQoKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLnVwZGF0ZUxlbmd0aCA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBjbGlwUG9pbnRDb29yZGluYXRlcyA9IG5ldyBBcnJheSg0KTtcblxuICB0aGlzLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCA9XG4gICAgICAgICAgSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbih0aGlzLnRhcmdldC5nZXRSZWN0KCksXG4gICAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRSZWN0KCksXG4gICAgICAgICAgICAgICAgICBjbGlwUG9pbnRDb29yZGluYXRlcyk7XG5cbiAgaWYgKCF0aGlzLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldClcbiAge1xuICAgIHRoaXMubGVuZ3RoWCA9IGNsaXBQb2ludENvb3JkaW5hdGVzWzBdIC0gY2xpcFBvaW50Q29vcmRpbmF0ZXNbMl07XG4gICAgdGhpcy5sZW5ndGhZID0gY2xpcFBvaW50Q29vcmRpbmF0ZXNbMV0gLSBjbGlwUG9pbnRDb29yZGluYXRlc1szXTtcblxuICAgIGlmIChNYXRoLmFicyh0aGlzLmxlbmd0aFgpIDwgMS4wKVxuICAgIHtcbiAgICAgIHRoaXMubGVuZ3RoWCA9IElNYXRoLnNpZ24odGhpcy5sZW5ndGhYKTtcbiAgICB9XG5cbiAgICBpZiAoTWF0aC5hYnModGhpcy5sZW5ndGhZKSA8IDEuMClcbiAgICB7XG4gICAgICB0aGlzLmxlbmd0aFkgPSBJTWF0aC5zaWduKHRoaXMubGVuZ3RoWSk7XG4gICAgfVxuXG4gICAgdGhpcy5sZW5ndGggPSBNYXRoLnNxcnQoXG4gICAgICAgICAgICB0aGlzLmxlbmd0aFggKiB0aGlzLmxlbmd0aFggKyB0aGlzLmxlbmd0aFkgKiB0aGlzLmxlbmd0aFkpO1xuICB9XG59O1xuXG5MRWRnZS5wcm90b3R5cGUudXBkYXRlTGVuZ3RoU2ltcGxlID0gZnVuY3Rpb24gKClcbntcbiAgdGhpcy5sZW5ndGhYID0gdGhpcy50YXJnZXQuZ2V0Q2VudGVyWCgpIC0gdGhpcy5zb3VyY2UuZ2V0Q2VudGVyWCgpO1xuICB0aGlzLmxlbmd0aFkgPSB0aGlzLnRhcmdldC5nZXRDZW50ZXJZKCkgLSB0aGlzLnNvdXJjZS5nZXRDZW50ZXJZKCk7XG5cbiAgaWYgKE1hdGguYWJzKHRoaXMubGVuZ3RoWCkgPCAxLjApXG4gIHtcbiAgICB0aGlzLmxlbmd0aFggPSBJTWF0aC5zaWduKHRoaXMubGVuZ3RoWCk7XG4gIH1cblxuICBpZiAoTWF0aC5hYnModGhpcy5sZW5ndGhZKSA8IDEuMClcbiAge1xuICAgIHRoaXMubGVuZ3RoWSA9IElNYXRoLnNpZ24odGhpcy5sZW5ndGhZKTtcbiAgfVxuXG4gIHRoaXMubGVuZ3RoID0gTWF0aC5zcXJ0KFxuICAgICAgICAgIHRoaXMubGVuZ3RoWCAqIHRoaXMubGVuZ3RoWCArIHRoaXMubGVuZ3RoWSAqIHRoaXMubGVuZ3RoWSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTEVkZ2U7XG4iLCJ2YXIgTEdyYXBoT2JqZWN0ID0gcmVxdWlyZSgnLi9MR3JhcGhPYmplY3QnKTtcbnZhciBJbnRlZ2VyID0gcmVxdWlyZSgnLi9JbnRlZ2VyJyk7XG52YXIgTGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9MYXlvdXRDb25zdGFudHMnKTtcbnZhciBMR3JhcGhNYW5hZ2VyID0gcmVxdWlyZSgnLi9MR3JhcGhNYW5hZ2VyJyk7XG52YXIgTE5vZGUgPSByZXF1aXJlKCcuL0xOb2RlJyk7XG52YXIgTEVkZ2UgPSByZXF1aXJlKCcuL0xFZGdlJyk7XG52YXIgSGFzaFNldCA9IHJlcXVpcmUoJy4vSGFzaFNldCcpO1xudmFyIFJlY3RhbmdsZUQgPSByZXF1aXJlKCcuL1JlY3RhbmdsZUQnKTtcbnZhciBQb2ludCA9IHJlcXVpcmUoJy4vUG9pbnQnKTtcbnZhciBMaW5rZWRMaXN0ID0gcmVxdWlyZSgnLi9MaW5rZWRMaXN0Jyk7XG5cbmZ1bmN0aW9uIExHcmFwaChwYXJlbnQsIG9iajIsIHZHcmFwaCkge1xuICBMR3JhcGhPYmplY3QuY2FsbCh0aGlzLCB2R3JhcGgpO1xuICB0aGlzLmVzdGltYXRlZFNpemUgPSBJbnRlZ2VyLk1JTl9WQUxVRTtcbiAgdGhpcy5tYXJnaW4gPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFQSF9NQVJHSU47XG4gIHRoaXMuZWRnZXMgPSBbXTtcbiAgdGhpcy5ub2RlcyA9IFtdO1xuICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gIGlmIChvYmoyICE9IG51bGwgJiYgb2JqMiBpbnN0YW5jZW9mIExHcmFwaE1hbmFnZXIpIHtcbiAgICB0aGlzLmdyYXBoTWFuYWdlciA9IG9iajI7XG4gIH1cbiAgZWxzZSBpZiAob2JqMiAhPSBudWxsICYmIG9iajIgaW5zdGFuY2VvZiBMYXlvdXQpIHtcbiAgICB0aGlzLmdyYXBoTWFuYWdlciA9IG9iajIuZ3JhcGhNYW5hZ2VyO1xuICB9XG59XG5cbkxHcmFwaC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaE9iamVjdC5wcm90b3R5cGUpO1xuZm9yICh2YXIgcHJvcCBpbiBMR3JhcGhPYmplY3QpIHtcbiAgTEdyYXBoW3Byb3BdID0gTEdyYXBoT2JqZWN0W3Byb3BdO1xufVxuXG5MR3JhcGgucHJvdG90eXBlLmdldE5vZGVzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ub2Rlcztcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0RWRnZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmVkZ2VzO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXI7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldFBhcmVudCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnBhcmVudDtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmxlZnQ7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldFJpZ2h0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmlnaHQ7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldFRvcCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnRvcDtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0Qm90dG9tID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuYm90dG9tO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5pc0Nvbm5lY3RlZCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmlzQ29ubmVjdGVkO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAob2JqMSwgc291cmNlTm9kZSwgdGFyZ2V0Tm9kZSkge1xuICBpZiAoc291cmNlTm9kZSA9PSBudWxsICYmIHRhcmdldE5vZGUgPT0gbnVsbCkge1xuICAgIHZhciBuZXdOb2RlID0gb2JqMTtcbiAgICBpZiAodGhpcy5ncmFwaE1hbmFnZXIgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJHcmFwaCBoYXMgbm8gZ3JhcGggbWdyIVwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5nZXROb2RlcygpLmluZGV4T2YobmV3Tm9kZSkgPiAtMSkge1xuICAgICAgdGhyb3cgXCJOb2RlIGFscmVhZHkgaW4gZ3JhcGghXCI7XG4gICAgfVxuICAgIG5ld05vZGUub3duZXIgPSB0aGlzO1xuICAgIHRoaXMuZ2V0Tm9kZXMoKS5wdXNoKG5ld05vZGUpO1xuXG4gICAgcmV0dXJuIG5ld05vZGU7XG4gIH1cbiAgZWxzZSB7XG4gICAgdmFyIG5ld0VkZ2UgPSBvYmoxO1xuICAgIGlmICghKHRoaXMuZ2V0Tm9kZXMoKS5pbmRleE9mKHNvdXJjZU5vZGUpID4gLTEgJiYgKHRoaXMuZ2V0Tm9kZXMoKS5pbmRleE9mKHRhcmdldE5vZGUpKSA+IC0xKSkge1xuICAgICAgdGhyb3cgXCJTb3VyY2Ugb3IgdGFyZ2V0IG5vdCBpbiBncmFwaCFcIjtcbiAgICB9XG5cbiAgICBpZiAoIShzb3VyY2VOb2RlLm93bmVyID09IHRhcmdldE5vZGUub3duZXIgJiYgc291cmNlTm9kZS5vd25lciA9PSB0aGlzKSkge1xuICAgICAgdGhyb3cgXCJCb3RoIG93bmVycyBtdXN0IGJlIHRoaXMgZ3JhcGghXCI7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZU5vZGUub3duZXIgIT0gdGFyZ2V0Tm9kZS5vd25lcilcbiAgICB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBzZXQgc291cmNlIGFuZCB0YXJnZXRcbiAgICBuZXdFZGdlLnNvdXJjZSA9IHNvdXJjZU5vZGU7XG4gICAgbmV3RWRnZS50YXJnZXQgPSB0YXJnZXROb2RlO1xuXG4gICAgLy8gc2V0IGFzIGludHJhLWdyYXBoIGVkZ2VcbiAgICBuZXdFZGdlLmlzSW50ZXJHcmFwaCA9IGZhbHNlO1xuXG4gICAgLy8gYWRkIHRvIGdyYXBoIGVkZ2UgbGlzdFxuICAgIHRoaXMuZ2V0RWRnZXMoKS5wdXNoKG5ld0VkZ2UpO1xuXG4gICAgLy8gYWRkIHRvIGluY2lkZW5jeSBsaXN0c1xuICAgIHNvdXJjZU5vZGUuZWRnZXMucHVzaChuZXdFZGdlKTtcblxuICAgIGlmICh0YXJnZXROb2RlICE9IHNvdXJjZU5vZGUpXG4gICAge1xuICAgICAgdGFyZ2V0Tm9kZS5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdFZGdlO1xuICB9XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIG5vZGUgPSBvYmo7XG4gIGlmIChvYmogaW5zdGFuY2VvZiBMTm9kZSkge1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiTm9kZSBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAoIShub2RlLm93bmVyICE9IG51bGwgJiYgbm9kZS5vd25lciA9PSB0aGlzKSkge1xuICAgICAgdGhyb3cgXCJPd25lciBncmFwaCBpcyBpbnZhbGlkIVwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5ncmFwaE1hbmFnZXIgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJPd25lciBncmFwaCBtYW5hZ2VyIGlzIGludmFsaWQhXCI7XG4gICAgfVxuICAgIC8vIHJlbW92ZSBpbmNpZGVudCBlZGdlcyBmaXJzdCAobWFrZSBhIGNvcHkgdG8gZG8gaXQgc2FmZWx5KVxuICAgIHZhciBlZGdlc1RvQmVSZW1vdmVkID0gbm9kZS5lZGdlcy5zbGljZSgpO1xuICAgIHZhciBlZGdlO1xuICAgIHZhciBzID0gZWRnZXNUb0JlUmVtb3ZlZC5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gICAge1xuICAgICAgZWRnZSA9IGVkZ2VzVG9CZVJlbW92ZWRbaV07XG5cbiAgICAgIGlmIChlZGdlLmlzSW50ZXJHcmFwaClcbiAgICAgIHtcbiAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIucmVtb3ZlKGVkZ2UpO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICBlZGdlLnNvdXJjZS5vd25lci5yZW1vdmUoZWRnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbm93IHRoZSBub2RlIGl0c2VsZlxuICAgIHZhciBpbmRleCA9IHRoaXMubm9kZXMuaW5kZXhPZihub2RlKTtcbiAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgIHRocm93IFwiTm9kZSBub3QgaW4gb3duZXIgbm9kZSBsaXN0IVwiO1xuICAgIH1cblxuICAgIHRoaXMubm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMRWRnZSkge1xuICAgIHZhciBlZGdlID0gb2JqO1xuICAgIGlmIChlZGdlID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiRWRnZSBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAoIShlZGdlLnNvdXJjZSAhPSBudWxsICYmIGVkZ2UudGFyZ2V0ICE9IG51bGwpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmICghKGVkZ2Uuc291cmNlLm93bmVyICE9IG51bGwgJiYgZWRnZS50YXJnZXQub3duZXIgIT0gbnVsbCAmJlxuICAgICAgICAgICAgZWRnZS5zb3VyY2Uub3duZXIgPT0gdGhpcyAmJiBlZGdlLnRhcmdldC5vd25lciA9PSB0aGlzKSkge1xuICAgICAgdGhyb3cgXCJTb3VyY2UgYW5kL29yIHRhcmdldCBvd25lciBpcyBpbnZhbGlkIVwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmRleCA9IGVkZ2Uuc291cmNlLmVkZ2VzLmluZGV4T2YoZWRnZSk7XG4gICAgdmFyIHRhcmdldEluZGV4ID0gZWRnZS50YXJnZXQuZWRnZXMuaW5kZXhPZihlZGdlKTtcbiAgICBpZiAoIShzb3VyY2VJbmRleCA+IC0xICYmIHRhcmdldEluZGV4ID4gLTEpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGRvZXNuJ3Qga25vdyB0aGlzIGVkZ2UhXCI7XG4gICAgfVxuXG4gICAgZWRnZS5zb3VyY2UuZWRnZXMuc3BsaWNlKHNvdXJjZUluZGV4LCAxKTtcblxuICAgIGlmIChlZGdlLnRhcmdldCAhPSBlZGdlLnNvdXJjZSlcbiAgICB7XG4gICAgICBlZGdlLnRhcmdldC5lZGdlcy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGVkZ2Uuc291cmNlLm93bmVyLmdldEVkZ2VzKCkuaW5kZXhPZihlZGdlKTtcbiAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgIHRocm93IFwiTm90IGluIG93bmVyJ3MgZWRnZSBsaXN0IVwiO1xuICAgIH1cblxuICAgIGVkZ2Uuc291cmNlLm93bmVyLmdldEVkZ2VzKCkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufTtcblxuTEdyYXBoLnByb3RvdHlwZS51cGRhdGVMZWZ0VG9wID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIHRvcCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgbGVmdCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgbm9kZVRvcDtcbiAgdmFyIG5vZGVMZWZ0O1xuICB2YXIgbWFyZ2luO1xuXG4gIHZhciBub2RlcyA9IHRoaXMuZ2V0Tm9kZXMoKTtcbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gIHtcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcbiAgICBub2RlVG9wID0gbE5vZGUuZ2V0VG9wKCk7XG4gICAgbm9kZUxlZnQgPSBsTm9kZS5nZXRMZWZ0KCk7XG5cbiAgICBpZiAodG9wID4gbm9kZVRvcClcbiAgICB7XG4gICAgICB0b3AgPSBub2RlVG9wO1xuICAgIH1cblxuICAgIGlmIChsZWZ0ID4gbm9kZUxlZnQpXG4gICAge1xuICAgICAgbGVmdCA9IG5vZGVMZWZ0O1xuICAgIH1cbiAgfVxuXG4gIC8vIERvIHdlIGhhdmUgYW55IG5vZGVzIGluIHRoaXMgZ3JhcGg/XG4gIGlmICh0b3AgPT0gSW50ZWdlci5NQVhfVkFMVUUpXG4gIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmKG5vZGVzWzBdLmdldFBhcmVudCgpLnBhZGRpbmdMZWZ0ICE9IHVuZGVmaW5lZCl7XG4gICAgbWFyZ2luID0gbm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQ7XG4gIH1cbiAgZWxzZXtcbiAgICBtYXJnaW4gPSB0aGlzLm1hcmdpbjtcbiAgfVxuXG4gIHRoaXMubGVmdCA9IGxlZnQgLSBtYXJnaW47XG4gIHRoaXMudG9wID0gdG9wIC0gbWFyZ2luO1xuXG4gIC8vIEFwcGx5IHRoZSBtYXJnaW5zIGFuZCByZXR1cm4gdGhlIHJlc3VsdFxuICByZXR1cm4gbmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy50b3ApO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS51cGRhdGVCb3VuZHMgPSBmdW5jdGlvbiAocmVjdXJzaXZlKVxue1xuICAvLyBjYWxjdWxhdGUgYm91bmRzXG4gIHZhciBsZWZ0ID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciByaWdodCA9IC1JbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIHRvcCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgYm90dG9tID0gLUludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgbm9kZUxlZnQ7XG4gIHZhciBub2RlUmlnaHQ7XG4gIHZhciBub2RlVG9wO1xuICB2YXIgbm9kZUJvdHRvbTtcbiAgdmFyIG1hcmdpbjtcblxuICB2YXIgbm9kZXMgPSB0aGlzLm5vZGVzO1xuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gIHtcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcblxuICAgIGlmIChyZWN1cnNpdmUgJiYgbE5vZGUuY2hpbGQgIT0gbnVsbClcbiAgICB7XG4gICAgICBsTm9kZS51cGRhdGVCb3VuZHMoKTtcbiAgICB9XG4gICAgbm9kZUxlZnQgPSBsTm9kZS5nZXRMZWZ0KCk7XG4gICAgbm9kZVJpZ2h0ID0gbE5vZGUuZ2V0UmlnaHQoKTtcbiAgICBub2RlVG9wID0gbE5vZGUuZ2V0VG9wKCk7XG4gICAgbm9kZUJvdHRvbSA9IGxOb2RlLmdldEJvdHRvbSgpO1xuXG4gICAgaWYgKGxlZnQgPiBub2RlTGVmdClcbiAgICB7XG4gICAgICBsZWZ0ID0gbm9kZUxlZnQ7XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0IDwgbm9kZVJpZ2h0KVxuICAgIHtcbiAgICAgIHJpZ2h0ID0gbm9kZVJpZ2h0O1xuICAgIH1cblxuICAgIGlmICh0b3AgPiBub2RlVG9wKVxuICAgIHtcbiAgICAgIHRvcCA9IG5vZGVUb3A7XG4gICAgfVxuXG4gICAgaWYgKGJvdHRvbSA8IG5vZGVCb3R0b20pXG4gICAge1xuICAgICAgYm90dG9tID0gbm9kZUJvdHRvbTtcbiAgICB9XG4gIH1cblxuICB2YXIgYm91bmRpbmdSZWN0ID0gbmV3IFJlY3RhbmdsZUQobGVmdCwgdG9wLCByaWdodCAtIGxlZnQsIGJvdHRvbSAtIHRvcCk7XG4gIGlmIChsZWZ0ID09IEludGVnZXIuTUFYX1ZBTFVFKVxuICB7XG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5wYXJlbnQuZ2V0TGVmdCgpO1xuICAgIHRoaXMucmlnaHQgPSB0aGlzLnBhcmVudC5nZXRSaWdodCgpO1xuICAgIHRoaXMudG9wID0gdGhpcy5wYXJlbnQuZ2V0VG9wKCk7XG4gICAgdGhpcy5ib3R0b20gPSB0aGlzLnBhcmVudC5nZXRCb3R0b20oKTtcbiAgfVxuXG4gIGlmKG5vZGVzWzBdLmdldFBhcmVudCgpLnBhZGRpbmdMZWZ0ICE9IHVuZGVmaW5lZCl7XG4gICAgbWFyZ2luID0gbm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQ7XG4gIH1cbiAgZWxzZXtcbiAgICBtYXJnaW4gPSB0aGlzLm1hcmdpbjtcbiAgfVxuXG4gIHRoaXMubGVmdCA9IGJvdW5kaW5nUmVjdC54IC0gbWFyZ2luO1xuICB0aGlzLnJpZ2h0ID0gYm91bmRpbmdSZWN0LnggKyBib3VuZGluZ1JlY3Qud2lkdGggKyBtYXJnaW47XG4gIHRoaXMudG9wID0gYm91bmRpbmdSZWN0LnkgLSBtYXJnaW47XG4gIHRoaXMuYm90dG9tID0gYm91bmRpbmdSZWN0LnkgKyBib3VuZGluZ1JlY3QuaGVpZ2h0ICsgbWFyZ2luO1xufTtcblxuTEdyYXBoLmNhbGN1bGF0ZUJvdW5kcyA9IGZ1bmN0aW9uIChub2RlcylcbntcbiAgdmFyIGxlZnQgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIHJpZ2h0ID0gLUludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgdG9wID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBib3R0b20gPSAtSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBub2RlTGVmdDtcbiAgdmFyIG5vZGVSaWdodDtcbiAgdmFyIG5vZGVUb3A7XG4gIHZhciBub2RlQm90dG9tO1xuXG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICB7XG4gICAgdmFyIGxOb2RlID0gbm9kZXNbaV07XG4gICAgbm9kZUxlZnQgPSBsTm9kZS5nZXRMZWZ0KCk7XG4gICAgbm9kZVJpZ2h0ID0gbE5vZGUuZ2V0UmlnaHQoKTtcbiAgICBub2RlVG9wID0gbE5vZGUuZ2V0VG9wKCk7XG4gICAgbm9kZUJvdHRvbSA9IGxOb2RlLmdldEJvdHRvbSgpO1xuXG4gICAgaWYgKGxlZnQgPiBub2RlTGVmdClcbiAgICB7XG4gICAgICBsZWZ0ID0gbm9kZUxlZnQ7XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0IDwgbm9kZVJpZ2h0KVxuICAgIHtcbiAgICAgIHJpZ2h0ID0gbm9kZVJpZ2h0O1xuICAgIH1cblxuICAgIGlmICh0b3AgPiBub2RlVG9wKVxuICAgIHtcbiAgICAgIHRvcCA9IG5vZGVUb3A7XG4gICAgfVxuXG4gICAgaWYgKGJvdHRvbSA8IG5vZGVCb3R0b20pXG4gICAge1xuICAgICAgYm90dG9tID0gbm9kZUJvdHRvbTtcbiAgICB9XG4gIH1cblxuICB2YXIgYm91bmRpbmdSZWN0ID0gbmV3IFJlY3RhbmdsZUQobGVmdCwgdG9wLCByaWdodCAtIGxlZnQsIGJvdHRvbSAtIHRvcCk7XG5cbiAgcmV0dXJuIGJvdW5kaW5nUmVjdDtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0SW5jbHVzaW9uVHJlZURlcHRoID0gZnVuY3Rpb24gKClcbntcbiAgaWYgKHRoaXMgPT0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpKVxuICB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50LmdldEluY2x1c2lvblRyZWVEZXB0aCgpO1xuICB9XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldEVzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKVxue1xuICBpZiAodGhpcy5lc3RpbWF0ZWRTaXplID09IEludGVnZXIuTUlOX1ZBTFVFKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cbiAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuY2FsY0VzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgc2l6ZSA9IDA7XG4gIHZhciBub2RlcyA9IHRoaXMubm9kZXM7XG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICB7XG4gICAgdmFyIGxOb2RlID0gbm9kZXNbaV07XG4gICAgc2l6ZSArPSBsTm9kZS5jYWxjRXN0aW1hdGVkU2l6ZSgpO1xuICB9XG5cbiAgaWYgKHNpemUgPT0gMClcbiAge1xuICAgIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IExheW91dENvbnN0YW50cy5FTVBUWV9DT01QT1VORF9OT0RFX1NJWkU7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgdGhpcy5lc3RpbWF0ZWRTaXplID0gc2l6ZSAvIE1hdGguc3FydCh0aGlzLm5vZGVzLmxlbmd0aCk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS51cGRhdGVDb25uZWN0ZWQgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmICh0aGlzLm5vZGVzLmxlbmd0aCA9PSAwKVxuICB7XG4gICAgdGhpcy5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHRvQmVWaXNpdGVkID0gbmV3IExpbmtlZExpc3QoKTtcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgSGFzaFNldCgpO1xuICB2YXIgY3VycmVudE5vZGUgPSB0aGlzLm5vZGVzWzBdO1xuICB2YXIgbmVpZ2hib3JFZGdlcztcbiAgdmFyIGN1cnJlbnROZWlnaGJvcjtcbiAgdmFyIGNoaWxkcmVuT2ZOb2RlID0gY3VycmVudE5vZGUud2l0aENoaWxkcmVuKCk7XG4gIGNoaWxkcmVuT2ZOb2RlLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xuICAgIHRvQmVWaXNpdGVkLnB1c2gobm9kZSk7XG4gIH0pO1xuXG4gIHdoaWxlICh0b0JlVmlzaXRlZC5sZW5ndGggIT09IDApXG4gIHtcbiAgICBjdXJyZW50Tm9kZSA9IHRvQmVWaXNpdGVkLnNoaWZ0KCk7XG4gICAgdmlzaXRlZC5hZGQoY3VycmVudE5vZGUpO1xuXG4gICAgLy8gVHJhdmVyc2UgYWxsIG5laWdoYm9ycyBvZiB0aGlzIG5vZGVcbiAgICBuZWlnaGJvckVkZ2VzID0gY3VycmVudE5vZGUuZ2V0RWRnZXMoKTtcbiAgICB2YXIgcyA9IG5laWdoYm9yRWRnZXMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICAgIHtcbiAgICAgIHZhciBuZWlnaGJvckVkZ2UgPSBuZWlnaGJvckVkZ2VzW2ldO1xuICAgICAgY3VycmVudE5laWdoYm9yID1cbiAgICAgICAgICAgICAgbmVpZ2hib3JFZGdlLmdldE90aGVyRW5kSW5HcmFwaChjdXJyZW50Tm9kZSwgdGhpcyk7XG5cbiAgICAgIC8vIEFkZCB1bnZpc2l0ZWQgbmVpZ2hib3JzIHRvIHRoZSBsaXN0IHRvIHZpc2l0XG4gICAgICBpZiAoY3VycmVudE5laWdoYm9yICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgIXZpc2l0ZWQuY29udGFpbnMoY3VycmVudE5laWdoYm9yKSlcbiAgICAgIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuT2ZOZWlnaGJvciA9IGN1cnJlbnROZWlnaGJvci53aXRoQ2hpbGRyZW4oKTtcblxuICAgICAgICBjaGlsZHJlbk9mTmVpZ2hib3IuZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgdG9CZVZpc2l0ZWQucHVzaChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuXG4gIGlmICh2aXNpdGVkLnNpemUoKSA+PSB0aGlzLm5vZGVzLmxlbmd0aClcbiAge1xuICAgIHZhciBub09mVmlzaXRlZEluVGhpc0dyYXBoID0gMDtcblxuICAgIHZhciBzID0gdmlzaXRlZC5zaXplKCk7XG4gICAgIE9iamVjdC5rZXlzKHZpc2l0ZWQuc2V0KS5mb3JFYWNoKGZ1bmN0aW9uKHZpc2l0ZWRJZCkge1xuICAgICAgdmFyIHZpc2l0ZWROb2RlID0gdmlzaXRlZC5zZXRbdmlzaXRlZElkXTtcbiAgICAgIGlmICh2aXNpdGVkTm9kZS5vd25lciA9PSBzZWxmKVxuICAgICAge1xuICAgICAgICBub09mVmlzaXRlZEluVGhpc0dyYXBoKys7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobm9PZlZpc2l0ZWRJblRoaXNHcmFwaCA9PSB0aGlzLm5vZGVzLmxlbmd0aClcbiAgICB7XG4gICAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTEdyYXBoO1xuIiwidmFyIExHcmFwaDtcbnZhciBMRWRnZSA9IHJlcXVpcmUoJy4vTEVkZ2UnKTtcblxuZnVuY3Rpb24gTEdyYXBoTWFuYWdlcihsYXlvdXQpIHtcbiAgTEdyYXBoID0gcmVxdWlyZSgnLi9MR3JhcGgnKTsgLy8gSXQgbWF5IGJlIGJldHRlciB0byBpbml0aWxpemUgdGhpcyBvdXQgb2YgdGhpcyBmdW5jdGlvbiBidXQgaXQgZ2l2ZXMgYW4gZXJyb3IgKFJpZ2h0LWhhbmQgc2lkZSBvZiAnaW5zdGFuY2VvZicgaXMgbm90IGNhbGxhYmxlKSBub3cuXG4gIHRoaXMubGF5b3V0ID0gbGF5b3V0O1xuXG4gIHRoaXMuZ3JhcGhzID0gW107XG4gIHRoaXMuZWRnZXMgPSBbXTtcbn1cblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuYWRkUm9vdCA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBuZ3JhcGggPSB0aGlzLmxheW91dC5uZXdHcmFwaCgpO1xuICB2YXIgbm5vZGUgPSB0aGlzLmxheW91dC5uZXdOb2RlKG51bGwpO1xuICB2YXIgcm9vdCA9IHRoaXMuYWRkKG5ncmFwaCwgbm5vZGUpO1xuICB0aGlzLnNldFJvb3RHcmFwaChyb290KTtcbiAgcmV0dXJuIHRoaXMucm9vdEdyYXBoO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKG5ld0dyYXBoLCBwYXJlbnROb2RlLCBuZXdFZGdlLCBzb3VyY2VOb2RlLCB0YXJnZXROb2RlKVxue1xuICAvL3RoZXJlIGFyZSBqdXN0IDIgcGFyYW1ldGVycyBhcmUgcGFzc2VkIHRoZW4gaXQgYWRkcyBhbiBMR3JhcGggZWxzZSBpdCBhZGRzIGFuIExFZGdlXG4gIGlmIChuZXdFZGdlID09IG51bGwgJiYgc291cmNlTm9kZSA9PSBudWxsICYmIHRhcmdldE5vZGUgPT0gbnVsbCkge1xuICAgIGlmIChuZXdHcmFwaCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIkdyYXBoIGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmIChwYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiUGFyZW50IG5vZGUgaXMgbnVsbCFcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ3JhcGhzLmluZGV4T2YobmV3R3JhcGgpID4gLTEpIHtcbiAgICAgIHRocm93IFwiR3JhcGggYWxyZWFkeSBpbiB0aGlzIGdyYXBoIG1nciFcIjtcbiAgICB9XG5cbiAgICB0aGlzLmdyYXBocy5wdXNoKG5ld0dyYXBoKTtcblxuICAgIGlmIChuZXdHcmFwaC5wYXJlbnQgIT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJBbHJlYWR5IGhhcyBhIHBhcmVudCFcIjtcbiAgICB9XG4gICAgaWYgKHBhcmVudE5vZGUuY2hpbGQgIT0gbnVsbCkge1xuICAgICAgdGhyb3cgIFwiQWxyZWFkeSBoYXMgYSBjaGlsZCFcIjtcbiAgICB9XG5cbiAgICBuZXdHcmFwaC5wYXJlbnQgPSBwYXJlbnROb2RlO1xuICAgIHBhcmVudE5vZGUuY2hpbGQgPSBuZXdHcmFwaDtcblxuICAgIHJldHVybiBuZXdHcmFwaDtcbiAgfVxuICBlbHNlIHtcbiAgICAvL2NoYW5nZSB0aGUgb3JkZXIgb2YgdGhlIHBhcmFtZXRlcnNcbiAgICB0YXJnZXROb2RlID0gbmV3RWRnZTtcbiAgICBzb3VyY2VOb2RlID0gcGFyZW50Tm9kZTtcbiAgICBuZXdFZGdlID0gbmV3R3JhcGg7XG4gICAgdmFyIHNvdXJjZUdyYXBoID0gc291cmNlTm9kZS5nZXRPd25lcigpO1xuICAgIHZhciB0YXJnZXRHcmFwaCA9IHRhcmdldE5vZGUuZ2V0T3duZXIoKTtcblxuICAgIGlmICghKHNvdXJjZUdyYXBoICE9IG51bGwgJiYgc291cmNlR3JhcGguZ2V0R3JhcGhNYW5hZ2VyKCkgPT0gdGhpcykpIHtcbiAgICAgIHRocm93IFwiU291cmNlIG5vdCBpbiB0aGlzIGdyYXBoIG1nciFcIjtcbiAgICB9XG4gICAgaWYgKCEodGFyZ2V0R3JhcGggIT0gbnVsbCAmJiB0YXJnZXRHcmFwaC5nZXRHcmFwaE1hbmFnZXIoKSA9PSB0aGlzKSkge1xuICAgICAgdGhyb3cgXCJUYXJnZXQgbm90IGluIHRoaXMgZ3JhcGggbWdyIVwiO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2VHcmFwaCA9PSB0YXJnZXRHcmFwaClcbiAgICB7XG4gICAgICBuZXdFZGdlLmlzSW50ZXJHcmFwaCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHNvdXJjZUdyYXBoLmFkZChuZXdFZGdlLCBzb3VyY2VOb2RlLCB0YXJnZXROb2RlKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIG5ld0VkZ2UuaXNJbnRlckdyYXBoID0gdHJ1ZTtcblxuICAgICAgLy8gc2V0IHNvdXJjZSBhbmQgdGFyZ2V0XG4gICAgICBuZXdFZGdlLnNvdXJjZSA9IHNvdXJjZU5vZGU7XG4gICAgICBuZXdFZGdlLnRhcmdldCA9IHRhcmdldE5vZGU7XG5cbiAgICAgIC8vIGFkZCBlZGdlIHRvIGludGVyLWdyYXBoIGVkZ2UgbGlzdFxuICAgICAgaWYgKHRoaXMuZWRnZXMuaW5kZXhPZihuZXdFZGdlKSA+IC0xKSB7XG4gICAgICAgIHRocm93IFwiRWRnZSBhbHJlYWR5IGluIGludGVyLWdyYXBoIGVkZ2UgbGlzdCFcIjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xuXG4gICAgICAvLyBhZGQgZWRnZSB0byBzb3VyY2UgYW5kIHRhcmdldCBpbmNpZGVuY3kgbGlzdHNcbiAgICAgIGlmICghKG5ld0VkZ2Uuc291cmNlICE9IG51bGwgJiYgbmV3RWRnZS50YXJnZXQgIT0gbnVsbCkpIHtcbiAgICAgICAgdGhyb3cgXCJFZGdlIHNvdXJjZSBhbmQvb3IgdGFyZ2V0IGlzIG51bGwhXCI7XG4gICAgICB9XG5cbiAgICAgIGlmICghKG5ld0VkZ2Uuc291cmNlLmVkZ2VzLmluZGV4T2YobmV3RWRnZSkgPT0gLTEgJiYgbmV3RWRnZS50YXJnZXQuZWRnZXMuaW5kZXhPZihuZXdFZGdlKSA9PSAtMSkpIHtcbiAgICAgICAgdGhyb3cgXCJFZGdlIGFscmVhZHkgaW4gc291cmNlIGFuZC9vciB0YXJnZXQgaW5jaWRlbmN5IGxpc3QhXCI7XG4gICAgICB9XG5cbiAgICAgIG5ld0VkZ2Uuc291cmNlLmVkZ2VzLnB1c2gobmV3RWRnZSk7XG4gICAgICBuZXdFZGdlLnRhcmdldC5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xuXG4gICAgICByZXR1cm4gbmV3RWRnZTtcbiAgICB9XG4gIH1cbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChsT2JqKSB7XG4gIGlmIChsT2JqIGluc3RhbmNlb2YgTEdyYXBoKSB7XG4gICAgdmFyIGdyYXBoID0gbE9iajtcbiAgICBpZiAoZ3JhcGguZ2V0R3JhcGhNYW5hZ2VyKCkgIT0gdGhpcykge1xuICAgICAgdGhyb3cgXCJHcmFwaCBub3QgaW4gdGhpcyBncmFwaCBtZ3JcIjtcbiAgICB9XG4gICAgaWYgKCEoZ3JhcGggPT0gdGhpcy5yb290R3JhcGggfHwgKGdyYXBoLnBhcmVudCAhPSBudWxsICYmIGdyYXBoLnBhcmVudC5ncmFwaE1hbmFnZXIgPT0gdGhpcykpKSB7XG4gICAgICB0aHJvdyBcIkludmFsaWQgcGFyZW50IG5vZGUhXCI7XG4gICAgfVxuXG4gICAgLy8gZmlyc3QgdGhlIGVkZ2VzIChtYWtlIGEgY29weSB0byBkbyBpdCBzYWZlbHkpXG4gICAgdmFyIGVkZ2VzVG9CZVJlbW92ZWQgPSBbXTtcblxuICAgIGVkZ2VzVG9CZVJlbW92ZWQgPSBlZGdlc1RvQmVSZW1vdmVkLmNvbmNhdChncmFwaC5nZXRFZGdlcygpKTtcblxuICAgIHZhciBlZGdlO1xuICAgIHZhciBzID0gZWRnZXNUb0JlUmVtb3ZlZC5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gICAge1xuICAgICAgZWRnZSA9IGVkZ2VzVG9CZVJlbW92ZWRbaV07XG4gICAgICBncmFwaC5yZW1vdmUoZWRnZSk7XG4gICAgfVxuXG4gICAgLy8gdGhlbiB0aGUgbm9kZXMgKG1ha2UgYSBjb3B5IHRvIGRvIGl0IHNhZmVseSlcbiAgICB2YXIgbm9kZXNUb0JlUmVtb3ZlZCA9IFtdO1xuXG4gICAgbm9kZXNUb0JlUmVtb3ZlZCA9IG5vZGVzVG9CZVJlbW92ZWQuY29uY2F0KGdyYXBoLmdldE5vZGVzKCkpO1xuXG4gICAgdmFyIG5vZGU7XG4gICAgcyA9IG5vZGVzVG9CZVJlbW92ZWQubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICAgIHtcbiAgICAgIG5vZGUgPSBub2Rlc1RvQmVSZW1vdmVkW2ldO1xuICAgICAgZ3JhcGgucmVtb3ZlKG5vZGUpO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIGdyYXBoIGlzIHRoZSByb290XG4gICAgaWYgKGdyYXBoID09IHRoaXMucm9vdEdyYXBoKVxuICAgIHtcbiAgICAgIHRoaXMuc2V0Um9vdEdyYXBoKG51bGwpO1xuICAgIH1cblxuICAgIC8vIG5vdyByZW1vdmUgdGhlIGdyYXBoIGl0c2VsZlxuICAgIHZhciBpbmRleCA9IHRoaXMuZ3JhcGhzLmluZGV4T2YoZ3JhcGgpO1xuICAgIHRoaXMuZ3JhcGhzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAvLyBhbHNvIHJlc2V0IHRoZSBwYXJlbnQgb2YgdGhlIGdyYXBoXG4gICAgZ3JhcGgucGFyZW50ID0gbnVsbDtcbiAgfVxuICBlbHNlIGlmIChsT2JqIGluc3RhbmNlb2YgTEVkZ2UpIHtcbiAgICBlZGdlID0gbE9iajtcbiAgICBpZiAoZWRnZSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIkVkZ2UgaXMgbnVsbCFcIjtcbiAgICB9XG4gICAgaWYgKCFlZGdlLmlzSW50ZXJHcmFwaCkge1xuICAgICAgdGhyb3cgXCJOb3QgYW4gaW50ZXItZ3JhcGggZWRnZSFcIjtcbiAgICB9XG4gICAgaWYgKCEoZWRnZS5zb3VyY2UgIT0gbnVsbCAmJiBlZGdlLnRhcmdldCAhPSBudWxsKSkge1xuICAgICAgdGhyb3cgXCJTb3VyY2UgYW5kL29yIHRhcmdldCBpcyBudWxsIVwiO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZSBlZGdlIGZyb20gc291cmNlIGFuZCB0YXJnZXQgbm9kZXMnIGluY2lkZW5jeSBsaXN0c1xuXG4gICAgaWYgKCEoZWRnZS5zb3VyY2UuZWRnZXMuaW5kZXhPZihlZGdlKSAhPSAtMSAmJiBlZGdlLnRhcmdldC5lZGdlcy5pbmRleE9mKGVkZ2UpICE9IC0xKSkge1xuICAgICAgdGhyb3cgXCJTb3VyY2UgYW5kL29yIHRhcmdldCBkb2Vzbid0IGtub3cgdGhpcyBlZGdlIVwiO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGVkZ2Uuc291cmNlLmVkZ2VzLmluZGV4T2YoZWRnZSk7XG4gICAgZWRnZS5zb3VyY2UuZWRnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBpbmRleCA9IGVkZ2UudGFyZ2V0LmVkZ2VzLmluZGV4T2YoZWRnZSk7XG4gICAgZWRnZS50YXJnZXQuZWRnZXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIC8vIHJlbW92ZSBlZGdlIGZyb20gb3duZXIgZ3JhcGggbWFuYWdlcidzIGludGVyLWdyYXBoIGVkZ2UgbGlzdFxuXG4gICAgaWYgKCEoZWRnZS5zb3VyY2Uub3duZXIgIT0gbnVsbCAmJiBlZGdlLnNvdXJjZS5vd25lci5nZXRHcmFwaE1hbmFnZXIoKSAhPSBudWxsKSkge1xuICAgICAgdGhyb3cgXCJFZGdlIG93bmVyIGdyYXBoIG9yIG93bmVyIGdyYXBoIG1hbmFnZXIgaXMgbnVsbCFcIjtcbiAgICB9XG4gICAgaWYgKGVkZ2Uuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpLmVkZ2VzLmluZGV4T2YoZWRnZSkgPT0gLTEpIHtcbiAgICAgIHRocm93IFwiTm90IGluIG93bmVyIGdyYXBoIG1hbmFnZXIncyBlZGdlIGxpc3QhXCI7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gZWRnZS5zb3VyY2Uub3duZXIuZ2V0R3JhcGhNYW5hZ2VyKCkuZWRnZXMuaW5kZXhPZihlZGdlKTtcbiAgICBlZGdlLnNvdXJjZS5vd25lci5nZXRHcmFwaE1hbmFnZXIoKS5lZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVCb3VuZHMgPSBmdW5jdGlvbiAoKVxue1xuICB0aGlzLnJvb3RHcmFwaC51cGRhdGVCb3VuZHModHJ1ZSk7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRHcmFwaHMgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5ncmFwaHM7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRBbGxOb2RlcyA9IGZ1bmN0aW9uICgpXG57XG4gIGlmICh0aGlzLmFsbE5vZGVzID09IG51bGwpXG4gIHtcbiAgICB2YXIgbm9kZUxpc3QgPSBbXTtcbiAgICB2YXIgZ3JhcGhzID0gdGhpcy5nZXRHcmFwaHMoKTtcbiAgICB2YXIgcyA9IGdyYXBocy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gICAge1xuICAgICAgbm9kZUxpc3QgPSBub2RlTGlzdC5jb25jYXQoZ3JhcGhzW2ldLmdldE5vZGVzKCkpO1xuICAgIH1cbiAgICB0aGlzLmFsbE5vZGVzID0gbm9kZUxpc3Q7XG4gIH1cbiAgcmV0dXJuIHRoaXMuYWxsTm9kZXM7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5yZXNldEFsbE5vZGVzID0gZnVuY3Rpb24gKClcbntcbiAgdGhpcy5hbGxOb2RlcyA9IG51bGw7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5yZXNldEFsbEVkZ2VzID0gZnVuY3Rpb24gKClcbntcbiAgdGhpcy5hbGxFZGdlcyA9IG51bGw7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5yZXNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gZnVuY3Rpb24gKClcbntcbiAgdGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IG51bGw7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRBbGxFZGdlcyA9IGZ1bmN0aW9uICgpXG57XG4gIGlmICh0aGlzLmFsbEVkZ2VzID09IG51bGwpXG4gIHtcbiAgICB2YXIgZWRnZUxpc3QgPSBbXTtcbiAgICB2YXIgZ3JhcGhzID0gdGhpcy5nZXRHcmFwaHMoKTtcbiAgICB2YXIgcyA9IGdyYXBocy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncmFwaHMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgZWRnZUxpc3QgPSBlZGdlTGlzdC5jb25jYXQoZ3JhcGhzW2ldLmdldEVkZ2VzKCkpO1xuICAgIH1cblxuICAgIGVkZ2VMaXN0ID0gZWRnZUxpc3QuY29uY2F0KHRoaXMuZWRnZXMpO1xuXG4gICAgdGhpcy5hbGxFZGdlcyA9IGVkZ2VMaXN0O1xuICB9XG4gIHJldHVybiB0aGlzLmFsbEVkZ2VzO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbjtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gZnVuY3Rpb24gKG5vZGVMaXN0KVxue1xuICBpZiAodGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiAhPSBudWxsKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cblxuICB0aGlzLmFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gbm9kZUxpc3Q7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRSb290ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucm9vdEdyYXBoO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuc2V0Um9vdEdyYXBoID0gZnVuY3Rpb24gKGdyYXBoKVxue1xuICBpZiAoZ3JhcGguZ2V0R3JhcGhNYW5hZ2VyKCkgIT0gdGhpcykge1xuICAgIHRocm93IFwiUm9vdCBub3QgaW4gdGhpcyBncmFwaCBtZ3IhXCI7XG4gIH1cblxuICB0aGlzLnJvb3RHcmFwaCA9IGdyYXBoO1xuICAvLyByb290IGdyYXBoIG11c3QgaGF2ZSBhIHJvb3Qgbm9kZSBhc3NvY2lhdGVkIHdpdGggaXQgZm9yIGNvbnZlbmllbmNlXG4gIGlmIChncmFwaC5wYXJlbnQgPT0gbnVsbClcbiAge1xuICAgIGdyYXBoLnBhcmVudCA9IHRoaXMubGF5b3V0Lm5ld05vZGUoXCJSb290IG5vZGVcIik7XG4gIH1cbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldExheW91dCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmxheW91dDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmlzT25lQW5jZXN0b3JPZk90aGVyID0gZnVuY3Rpb24gKGZpcnN0Tm9kZSwgc2Vjb25kTm9kZSlcbntcbiAgaWYgKCEoZmlyc3ROb2RlICE9IG51bGwgJiYgc2Vjb25kTm9kZSAhPSBudWxsKSkge1xuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICB9XG5cbiAgaWYgKGZpcnN0Tm9kZSA9PSBzZWNvbmROb2RlKVxuICB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy8gSXMgc2Vjb25kIG5vZGUgYW4gYW5jZXN0b3Igb2YgdGhlIGZpcnN0IG9uZT9cbiAgdmFyIG93bmVyR3JhcGggPSBmaXJzdE5vZGUuZ2V0T3duZXIoKTtcbiAgdmFyIHBhcmVudE5vZGU7XG5cbiAgZG9cbiAge1xuICAgIHBhcmVudE5vZGUgPSBvd25lckdyYXBoLmdldFBhcmVudCgpO1xuXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gbnVsbClcbiAgICB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAocGFyZW50Tm9kZSA9PSBzZWNvbmROb2RlKVxuICAgIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIG93bmVyR3JhcGggPSBwYXJlbnROb2RlLmdldE93bmVyKCk7XG4gICAgaWYgKG93bmVyR3JhcGggPT0gbnVsbClcbiAgICB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH0gd2hpbGUgKHRydWUpO1xuICAvLyBJcyBmaXJzdCBub2RlIGFuIGFuY2VzdG9yIG9mIHRoZSBzZWNvbmQgb25lP1xuICBvd25lckdyYXBoID0gc2Vjb25kTm9kZS5nZXRPd25lcigpO1xuXG4gIGRvXG4gIHtcbiAgICBwYXJlbnROb2RlID0gb3duZXJHcmFwaC5nZXRQYXJlbnQoKTtcblxuICAgIGlmIChwYXJlbnROb2RlID09IG51bGwpXG4gICAge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gZmlyc3ROb2RlKVxuICAgIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIG93bmVyR3JhcGggPSBwYXJlbnROb2RlLmdldE93bmVyKCk7XG4gICAgaWYgKG93bmVyR3JhcGggPT0gbnVsbClcbiAgICB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH0gd2hpbGUgKHRydWUpO1xuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmNhbGNMb3dlc3RDb21tb25BbmNlc3RvcnMgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgZWRnZTtcbiAgdmFyIHNvdXJjZU5vZGU7XG4gIHZhciB0YXJnZXROb2RlO1xuICB2YXIgc291cmNlQW5jZXN0b3JHcmFwaDtcbiAgdmFyIHRhcmdldEFuY2VzdG9yR3JhcGg7XG5cbiAgdmFyIGVkZ2VzID0gdGhpcy5nZXRBbGxFZGdlcygpO1xuICB2YXIgcyA9IGVkZ2VzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gIHtcbiAgICBlZGdlID0gZWRnZXNbaV07XG5cbiAgICBzb3VyY2VOb2RlID0gZWRnZS5zb3VyY2U7XG4gICAgdGFyZ2V0Tm9kZSA9IGVkZ2UudGFyZ2V0O1xuICAgIGVkZ2UubGNhID0gbnVsbDtcbiAgICBlZGdlLnNvdXJjZUluTGNhID0gc291cmNlTm9kZTtcbiAgICBlZGdlLnRhcmdldEluTGNhID0gdGFyZ2V0Tm9kZTtcblxuICAgIGlmIChzb3VyY2VOb2RlID09IHRhcmdldE5vZGUpXG4gICAge1xuICAgICAgZWRnZS5sY2EgPSBzb3VyY2VOb2RlLmdldE93bmVyKCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBzb3VyY2VBbmNlc3RvckdyYXBoID0gc291cmNlTm9kZS5nZXRPd25lcigpO1xuXG4gICAgd2hpbGUgKGVkZ2UubGNhID09IG51bGwpXG4gICAge1xuICAgICAgZWRnZS50YXJnZXRJbkxjYSA9IHRhcmdldE5vZGU7ICBcbiAgICAgIHRhcmdldEFuY2VzdG9yR3JhcGggPSB0YXJnZXROb2RlLmdldE93bmVyKCk7XG5cbiAgICAgIHdoaWxlIChlZGdlLmxjYSA9PSBudWxsKVxuICAgICAge1xuICAgICAgICBpZiAodGFyZ2V0QW5jZXN0b3JHcmFwaCA9PSBzb3VyY2VBbmNlc3RvckdyYXBoKVxuICAgICAgICB7XG4gICAgICAgICAgZWRnZS5sY2EgPSB0YXJnZXRBbmNlc3RvckdyYXBoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldEFuY2VzdG9yR3JhcGggPT0gdGhpcy5yb290R3JhcGgpXG4gICAgICAgIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlZGdlLmxjYSAhPSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWRnZS50YXJnZXRJbkxjYSA9IHRhcmdldEFuY2VzdG9yR3JhcGguZ2V0UGFyZW50KCk7XG4gICAgICAgIHRhcmdldEFuY2VzdG9yR3JhcGggPSBlZGdlLnRhcmdldEluTGNhLmdldE93bmVyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzb3VyY2VBbmNlc3RvckdyYXBoID09IHRoaXMucm9vdEdyYXBoKVxuICAgICAge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGVkZ2UubGNhID09IG51bGwpXG4gICAgICB7XG4gICAgICAgIGVkZ2Uuc291cmNlSW5MY2EgPSBzb3VyY2VBbmNlc3RvckdyYXBoLmdldFBhcmVudCgpO1xuICAgICAgICBzb3VyY2VBbmNlc3RvckdyYXBoID0gZWRnZS5zb3VyY2VJbkxjYS5nZXRPd25lcigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlZGdlLmxjYSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgICB9XG4gIH1cbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmNhbGNMb3dlc3RDb21tb25BbmNlc3RvciA9IGZ1bmN0aW9uIChmaXJzdE5vZGUsIHNlY29uZE5vZGUpXG57XG4gIGlmIChmaXJzdE5vZGUgPT0gc2Vjb25kTm9kZSlcbiAge1xuICAgIHJldHVybiBmaXJzdE5vZGUuZ2V0T3duZXIoKTtcbiAgfVxuICB2YXIgZmlyc3RPd25lckdyYXBoID0gZmlyc3ROb2RlLmdldE93bmVyKCk7XG5cbiAgZG9cbiAge1xuICAgIGlmIChmaXJzdE93bmVyR3JhcGggPT0gbnVsbClcbiAgICB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdmFyIHNlY29uZE93bmVyR3JhcGggPSBzZWNvbmROb2RlLmdldE93bmVyKCk7XG5cbiAgICBkb1xuICAgIHtcbiAgICAgIGlmIChzZWNvbmRPd25lckdyYXBoID09IG51bGwpXG4gICAgICB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2Vjb25kT3duZXJHcmFwaCA9PSBmaXJzdE93bmVyR3JhcGgpXG4gICAgICB7XG4gICAgICAgIHJldHVybiBzZWNvbmRPd25lckdyYXBoO1xuICAgICAgfVxuICAgICAgc2Vjb25kT3duZXJHcmFwaCA9IHNlY29uZE93bmVyR3JhcGguZ2V0UGFyZW50KCkuZ2V0T3duZXIoKTtcbiAgICB9IHdoaWxlICh0cnVlKTtcblxuICAgIGZpcnN0T3duZXJHcmFwaCA9IGZpcnN0T3duZXJHcmFwaC5nZXRQYXJlbnQoKS5nZXRPd25lcigpO1xuICB9IHdoaWxlICh0cnVlKTtcblxuICByZXR1cm4gZmlyc3RPd25lckdyYXBoO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuY2FsY0luY2x1c2lvblRyZWVEZXB0aHMgPSBmdW5jdGlvbiAoZ3JhcGgsIGRlcHRoKSB7XG4gIGlmIChncmFwaCA9PSBudWxsICYmIGRlcHRoID09IG51bGwpIHtcbiAgICBncmFwaCA9IHRoaXMucm9vdEdyYXBoO1xuICAgIGRlcHRoID0gMTtcbiAgfVxuICB2YXIgbm9kZTtcblxuICB2YXIgbm9kZXMgPSBncmFwaC5nZXROb2RlcygpO1xuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gIHtcbiAgICBub2RlID0gbm9kZXNbaV07XG4gICAgbm9kZS5pbmNsdXNpb25UcmVlRGVwdGggPSBkZXB0aDtcblxuICAgIGlmIChub2RlLmNoaWxkICE9IG51bGwpXG4gICAge1xuICAgICAgdGhpcy5jYWxjSW5jbHVzaW9uVHJlZURlcHRocyhub2RlLmNoaWxkLCBkZXB0aCArIDEpO1xuICAgIH1cbiAgfVxufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuaW5jbHVkZXNJbnZhbGlkRWRnZSA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBlZGdlO1xuXG4gIHZhciBzID0gdGhpcy5lZGdlcy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICB7XG4gICAgZWRnZSA9IHRoaXMuZWRnZXNbaV07XG5cbiAgICBpZiAodGhpcy5pc09uZUFuY2VzdG9yT2ZPdGhlcihlZGdlLnNvdXJjZSwgZWRnZS50YXJnZXQpKVxuICAgIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExHcmFwaE1hbmFnZXI7XG4iLCJmdW5jdGlvbiBMR3JhcGhPYmplY3QodkdyYXBoT2JqZWN0KSB7XG4gIHRoaXMudkdyYXBoT2JqZWN0ID0gdkdyYXBoT2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExHcmFwaE9iamVjdDtcbiIsInZhciBMR3JhcGhPYmplY3QgPSByZXF1aXJlKCcuL0xHcmFwaE9iamVjdCcpO1xudmFyIEludGVnZXIgPSByZXF1aXJlKCcuL0ludGVnZXInKTtcbnZhciBSZWN0YW5nbGVEID0gcmVxdWlyZSgnLi9SZWN0YW5nbGVEJyk7XG52YXIgTGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9MYXlvdXRDb25zdGFudHMnKTtcbnZhciBSYW5kb21TZWVkID0gcmVxdWlyZSgnLi9SYW5kb21TZWVkJyk7XG52YXIgUG9pbnREID0gcmVxdWlyZSgnLi9Qb2ludEQnKTtcbnZhciBIYXNoU2V0ID0gcmVxdWlyZSgnLi9IYXNoU2V0Jyk7XG5cbmZ1bmN0aW9uIExOb2RlKGdtLCBsb2MsIHNpemUsIHZOb2RlKSB7XG4gIC8vQWx0ZXJuYXRpdmUgY29uc3RydWN0b3IgMSA6IExOb2RlKExHcmFwaE1hbmFnZXIgZ20sIFBvaW50IGxvYywgRGltZW5zaW9uIHNpemUsIE9iamVjdCB2Tm9kZSlcbiAgaWYgKHNpemUgPT0gbnVsbCAmJiB2Tm9kZSA9PSBudWxsKSB7XG4gICAgdk5vZGUgPSBsb2M7XG4gIH1cblxuICBMR3JhcGhPYmplY3QuY2FsbCh0aGlzLCB2Tm9kZSk7XG5cbiAgLy9BbHRlcm5hdGl2ZSBjb25zdHJ1Y3RvciAyIDogTE5vZGUoTGF5b3V0IGxheW91dCwgT2JqZWN0IHZOb2RlKVxuICBpZiAoZ20uZ3JhcGhNYW5hZ2VyICE9IG51bGwpXG4gICAgZ20gPSBnbS5ncmFwaE1hbmFnZXI7XG5cbiAgdGhpcy5lc3RpbWF0ZWRTaXplID0gSW50ZWdlci5NSU5fVkFMVUU7XG4gIHRoaXMuaW5jbHVzaW9uVHJlZURlcHRoID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHRoaXMudkdyYXBoT2JqZWN0ID0gdk5vZGU7XG4gIHRoaXMuZWRnZXMgPSBbXTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcblxuICBpZiAoc2l6ZSAhPSBudWxsICYmIGxvYyAhPSBudWxsKVxuICAgIHRoaXMucmVjdCA9IG5ldyBSZWN0YW5nbGVEKGxvYy54LCBsb2MueSwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xuICBlbHNlXG4gICAgdGhpcy5yZWN0ID0gbmV3IFJlY3RhbmdsZUQoKTtcbn1cblxuTE5vZGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMR3JhcGhPYmplY3QucHJvdG90eXBlKTtcbmZvciAodmFyIHByb3AgaW4gTEdyYXBoT2JqZWN0KSB7XG4gIExOb2RlW3Byb3BdID0gTEdyYXBoT2JqZWN0W3Byb3BdO1xufVxuXG5MTm9kZS5wcm90b3R5cGUuZ2V0RWRnZXMgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5lZGdlcztcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRDaGlsZCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmNoaWxkO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldE93bmVyID0gZnVuY3Rpb24gKClcbntcbi8vICBpZiAodGhpcy5vd25lciAhPSBudWxsKSB7XG4vLyAgICBpZiAoISh0aGlzLm93bmVyID09IG51bGwgfHwgdGhpcy5vd25lci5nZXROb2RlcygpLmluZGV4T2YodGhpcykgPiAtMSkpIHtcbi8vICAgICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4vLyAgICB9XG4vLyAgfVxuXG4gIHJldHVybiB0aGlzLm93bmVyO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdC53aWR0aDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5zZXRXaWR0aCA9IGZ1bmN0aW9uICh3aWR0aClcbntcbiAgdGhpcy5yZWN0LndpZHRoID0gd2lkdGg7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdC5oZWlnaHQ7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGhlaWdodClcbntcbiAgdGhpcy5yZWN0LmhlaWdodCA9IGhlaWdodDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRDZW50ZXJYID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdC54ICsgdGhpcy5yZWN0LndpZHRoIC8gMjtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRDZW50ZXJZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdC55ICsgdGhpcy5yZWN0LmhlaWdodCAvIDI7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2VudGVyID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIG5ldyBQb2ludEQodGhpcy5yZWN0LnggKyB0aGlzLnJlY3Qud2lkdGggLyAyLFxuICAgICAgICAgIHRoaXMucmVjdC55ICsgdGhpcy5yZWN0LmhlaWdodCAvIDIpO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldExvY2F0aW9uID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIG5ldyBQb2ludEQodGhpcy5yZWN0LngsIHRoaXMucmVjdC55KTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRSZWN0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXREaWFnb25hbCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiBNYXRoLnNxcnQodGhpcy5yZWN0LndpZHRoICogdGhpcy5yZWN0LndpZHRoICtcbiAgICAgICAgICB0aGlzLnJlY3QuaGVpZ2h0ICogdGhpcy5yZWN0LmhlaWdodCk7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuc2V0UmVjdCA9IGZ1bmN0aW9uICh1cHBlckxlZnQsIGRpbWVuc2lvbilcbntcbiAgdGhpcy5yZWN0LnggPSB1cHBlckxlZnQueDtcbiAgdGhpcy5yZWN0LnkgPSB1cHBlckxlZnQueTtcbiAgdGhpcy5yZWN0LndpZHRoID0gZGltZW5zaW9uLndpZHRoO1xuICB0aGlzLnJlY3QuaGVpZ2h0ID0gZGltZW5zaW9uLmhlaWdodDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5zZXRDZW50ZXIgPSBmdW5jdGlvbiAoY3gsIGN5KVxue1xuICB0aGlzLnJlY3QueCA9IGN4IC0gdGhpcy5yZWN0LndpZHRoIC8gMjtcbiAgdGhpcy5yZWN0LnkgPSBjeSAtIHRoaXMucmVjdC5oZWlnaHQgLyAyO1xufTtcblxuTE5vZGUucHJvdG90eXBlLnNldExvY2F0aW9uID0gZnVuY3Rpb24gKHgsIHkpXG57XG4gIHRoaXMucmVjdC54ID0geDtcbiAgdGhpcy5yZWN0LnkgPSB5O1xufTtcblxuTE5vZGUucHJvdG90eXBlLm1vdmVCeSA9IGZ1bmN0aW9uIChkeCwgZHkpXG57XG4gIHRoaXMucmVjdC54ICs9IGR4O1xuICB0aGlzLnJlY3QueSArPSBkeTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRFZGdlTGlzdFRvTm9kZSA9IGZ1bmN0aW9uICh0bylcbntcbiAgdmFyIGVkZ2VMaXN0ID0gW107XG4gIHZhciBlZGdlO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgc2VsZi5lZGdlcy5mb3JFYWNoKGZ1bmN0aW9uKGVkZ2UpIHtcbiAgICBcbiAgICBpZiAoZWRnZS50YXJnZXQgPT0gdG8pXG4gICAge1xuICAgICAgaWYgKGVkZ2Uuc291cmNlICE9IHNlbGYpXG4gICAgICAgIHRocm93IFwiSW5jb3JyZWN0IGVkZ2Ugc291cmNlIVwiO1xuXG4gICAgICBlZGdlTGlzdC5wdXNoKGVkZ2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VMaXN0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEVkZ2VzQmV0d2VlbiA9IGZ1bmN0aW9uIChvdGhlcilcbntcbiAgdmFyIGVkZ2VMaXN0ID0gW107XG4gIHZhciBlZGdlO1xuICBcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24oZWRnZSkge1xuXG4gICAgaWYgKCEoZWRnZS5zb3VyY2UgPT0gc2VsZiB8fCBlZGdlLnRhcmdldCA9PSBzZWxmKSlcbiAgICAgIHRocm93IFwiSW5jb3JyZWN0IGVkZ2Ugc291cmNlIGFuZC9vciB0YXJnZXRcIjtcblxuICAgIGlmICgoZWRnZS50YXJnZXQgPT0gb3RoZXIpIHx8IChlZGdlLnNvdXJjZSA9PSBvdGhlcikpXG4gICAge1xuICAgICAgZWRnZUxpc3QucHVzaChlZGdlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlTGlzdDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXROZWlnaGJvcnNMaXN0ID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIG5laWdoYm9ycyA9IG5ldyBIYXNoU2V0KCk7XG4gIHZhciBlZGdlO1xuICBcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24oZWRnZSkge1xuXG4gICAgaWYgKGVkZ2Uuc291cmNlID09IHNlbGYpXG4gICAge1xuICAgICAgbmVpZ2hib3JzLmFkZChlZGdlLnRhcmdldCk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICBpZiAoZWRnZS50YXJnZXQgIT0gc2VsZikge1xuICAgICAgICB0aHJvdyBcIkluY29ycmVjdCBpbmNpZGVuY3khXCI7XG4gICAgICB9XG4gICAgXG4gICAgICBuZWlnaGJvcnMuYWRkKGVkZ2Uuc291cmNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBuZWlnaGJvcnM7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUud2l0aENoaWxkcmVuID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIHdpdGhOZWlnaGJvcnNMaXN0ID0gbmV3IFNldCgpO1xuICB2YXIgY2hpbGROb2RlO1xuICB2YXIgY2hpbGRyZW47XG5cbiAgd2l0aE5laWdoYm9yc0xpc3QuYWRkKHRoaXMpO1xuXG4gIGlmICh0aGlzLmNoaWxkICE9IG51bGwpXG4gIHtcbiAgICB2YXIgbm9kZXMgPSB0aGlzLmNoaWxkLmdldE5vZGVzKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBjaGlsZE5vZGUgPSBub2Rlc1tpXTtcbiAgICAgIGNoaWxkcmVuID0gY2hpbGROb2RlLndpdGhDaGlsZHJlbigpO1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIHdpdGhOZWlnaGJvcnNMaXN0LmFkZChub2RlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB3aXRoTmVpZ2hib3JzTGlzdDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXROb09mQ2hpbGRyZW4gPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgbm9PZkNoaWxkcmVuID0gMDtcbiAgdmFyIGNoaWxkTm9kZTtcblxuICBpZih0aGlzLmNoaWxkID09IG51bGwpe1xuICAgIG5vT2ZDaGlsZHJlbiA9IDE7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgdmFyIG5vZGVzID0gdGhpcy5jaGlsZC5nZXROb2RlcygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgY2hpbGROb2RlID0gbm9kZXNbaV07XG5cbiAgICAgIG5vT2ZDaGlsZHJlbiArPSBjaGlsZE5vZGUuZ2V0Tm9PZkNoaWxkcmVuKCk7XG4gICAgfVxuICB9XG4gIFxuICBpZihub09mQ2hpbGRyZW4gPT0gMCl7XG4gICAgbm9PZkNoaWxkcmVuID0gMTtcbiAgfVxuICByZXR1cm4gbm9PZkNoaWxkcmVuO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEVzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmVzdGltYXRlZFNpemUgPT0gSW50ZWdlci5NSU5fVkFMVUUpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmNhbGNFc3RpbWF0ZWRTaXplID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5jaGlsZCA9PSBudWxsKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZSA9ICh0aGlzLnJlY3Qud2lkdGggKyB0aGlzLnJlY3QuaGVpZ2h0KSAvIDI7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgdGhpcy5lc3RpbWF0ZWRTaXplID0gdGhpcy5jaGlsZC5jYWxjRXN0aW1hdGVkU2l6ZSgpO1xuICAgIHRoaXMucmVjdC53aWR0aCA9IHRoaXMuZXN0aW1hdGVkU2l6ZTtcbiAgICB0aGlzLnJlY3QuaGVpZ2h0ID0gdGhpcy5lc3RpbWF0ZWRTaXplO1xuXG4gICAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcbiAgfVxufTtcblxuTE5vZGUucHJvdG90eXBlLnNjYXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciByYW5kb21DZW50ZXJYO1xuICB2YXIgcmFuZG9tQ2VudGVyWTtcblxuICB2YXIgbWluWCA9IC1MYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcbiAgdmFyIG1heFggPSBMYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcbiAgcmFuZG9tQ2VudGVyWCA9IExheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWCArXG4gICAgICAgICAgKFJhbmRvbVNlZWQubmV4dERvdWJsZSgpICogKG1heFggLSBtaW5YKSkgKyBtaW5YO1xuXG4gIHZhciBtaW5ZID0gLUxheW91dENvbnN0YW50cy5JTklUSUFMX1dPUkxEX0JPVU5EQVJZO1xuICB2YXIgbWF4WSA9IExheW91dENvbnN0YW50cy5JTklUSUFMX1dPUkxEX0JPVU5EQVJZO1xuICByYW5kb21DZW50ZXJZID0gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0NFTlRFUl9ZICtcbiAgICAgICAgICAoUmFuZG9tU2VlZC5uZXh0RG91YmxlKCkgKiAobWF4WSAtIG1pblkpKSArIG1pblk7XG5cbiAgdGhpcy5yZWN0LnggPSByYW5kb21DZW50ZXJYO1xuICB0aGlzLnJlY3QueSA9IHJhbmRvbUNlbnRlcllcbn07XG5cbkxOb2RlLnByb3RvdHlwZS51cGRhdGVCb3VuZHMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmdldENoaWxkKCkgPT0gbnVsbCkge1xuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICB9XG4gIGlmICh0aGlzLmdldENoaWxkKCkuZ2V0Tm9kZXMoKS5sZW5ndGggIT0gMClcbiAge1xuICAgIC8vIHdyYXAgdGhlIGNoaWxkcmVuIG5vZGVzIGJ5IHJlLWFycmFuZ2luZyB0aGUgYm91bmRhcmllc1xuICAgIHZhciBjaGlsZEdyYXBoID0gdGhpcy5nZXRDaGlsZCgpO1xuICAgIGNoaWxkR3JhcGgudXBkYXRlQm91bmRzKHRydWUpO1xuXG4gICAgdGhpcy5yZWN0LnggPSBjaGlsZEdyYXBoLmdldExlZnQoKTtcbiAgICB0aGlzLnJlY3QueSA9IGNoaWxkR3JhcGguZ2V0VG9wKCk7XG5cbiAgICB0aGlzLnNldFdpZHRoKGNoaWxkR3JhcGguZ2V0UmlnaHQoKSAtIGNoaWxkR3JhcGguZ2V0TGVmdCgpKTtcbiAgICB0aGlzLnNldEhlaWdodChjaGlsZEdyYXBoLmdldEJvdHRvbSgpIC0gY2hpbGRHcmFwaC5nZXRUb3AoKSk7XG4gICAgXG4gICAgLy8gVXBkYXRlIGNvbXBvdW5kIGJvdW5kcyBjb25zaWRlcmluZyBpdHMgbGFiZWwgcHJvcGVydGllcyAgICBcbiAgICBpZihMYXlvdXRDb25zdGFudHMuTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTKXtcbiAgICAgICAgXG4gICAgICB2YXIgd2lkdGggPSBjaGlsZEdyYXBoLmdldFJpZ2h0KCkgLSBjaGlsZEdyYXBoLmdldExlZnQoKTtcbiAgICAgIHZhciBoZWlnaHQgPSBjaGlsZEdyYXBoLmdldEJvdHRvbSgpIC0gY2hpbGRHcmFwaC5nZXRUb3AoKTtcblxuICAgICAgaWYodGhpcy5sYWJlbFdpZHRoID4gd2lkdGgpe1xuICAgICAgICB0aGlzLnJlY3QueCAtPSAodGhpcy5sYWJlbFdpZHRoIC0gd2lkdGgpIC8gMjtcbiAgICAgICAgdGhpcy5zZXRXaWR0aCh0aGlzLmxhYmVsV2lkdGgpO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmxhYmVsSGVpZ2h0ID4gaGVpZ2h0KXtcbiAgICAgICAgaWYodGhpcy5sYWJlbFBvcyA9PSBcImNlbnRlclwiKXtcbiAgICAgICAgICB0aGlzLnJlY3QueSAtPSAodGhpcy5sYWJlbEhlaWdodCAtIGhlaWdodCkgLyAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5sYWJlbFBvcyA9PSBcInRvcFwiKXtcbiAgICAgICAgICB0aGlzLnJlY3QueSAtPSAodGhpcy5sYWJlbEhlaWdodCAtIGhlaWdodCk7IFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SGVpZ2h0KHRoaXMubGFiZWxIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEluY2x1c2lvblRyZWVEZXB0aCA9IGZ1bmN0aW9uICgpXG57XG4gIGlmICh0aGlzLmluY2x1c2lvblRyZWVEZXB0aCA9PSBJbnRlZ2VyLk1BWF9WQUxVRSkge1xuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICB9XG4gIHJldHVybiB0aGlzLmluY2x1c2lvblRyZWVEZXB0aDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS50cmFuc2Zvcm0gPSBmdW5jdGlvbiAodHJhbnMpXG57XG4gIHZhciBsZWZ0ID0gdGhpcy5yZWN0Lng7XG5cbiAgaWYgKGxlZnQgPiBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkpXG4gIHtcbiAgICBsZWZ0ID0gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZO1xuICB9XG4gIGVsc2UgaWYgKGxlZnQgPCAtTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZKVxuICB7XG4gICAgbGVmdCA9IC1MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlk7XG4gIH1cblxuICB2YXIgdG9wID0gdGhpcy5yZWN0Lnk7XG5cbiAgaWYgKHRvcCA+IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSlcbiAge1xuICAgIHRvcCA9IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWTtcbiAgfVxuICBlbHNlIGlmICh0b3AgPCAtTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZKVxuICB7XG4gICAgdG9wID0gLUxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWTtcbiAgfVxuXG4gIHZhciBsZWZ0VG9wID0gbmV3IFBvaW50RChsZWZ0LCB0b3ApO1xuICB2YXIgdkxlZnRUb3AgPSB0cmFucy5pbnZlcnNlVHJhbnNmb3JtUG9pbnQobGVmdFRvcCk7XG5cbiAgdGhpcy5zZXRMb2NhdGlvbih2TGVmdFRvcC54LCB2TGVmdFRvcC55KTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRMZWZ0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdC54O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFJpZ2h0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdC54ICsgdGhpcy5yZWN0LndpZHRoO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFRvcCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnJlY3QueTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRCb3R0b20gPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yZWN0LnkgKyB0aGlzLnJlY3QuaGVpZ2h0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFBhcmVudCA9IGZ1bmN0aW9uICgpXG57XG4gIGlmICh0aGlzLm93bmVyID09IG51bGwpXG4gIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB0aGlzLm93bmVyLmdldFBhcmVudCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMTm9kZTtcbiIsInZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0xheW91dENvbnN0YW50cycpO1xudmFyIEhhc2hNYXAgPSByZXF1aXJlKCcuL0hhc2hNYXAnKTtcbnZhciBMR3JhcGhNYW5hZ2VyID0gcmVxdWlyZSgnLi9MR3JhcGhNYW5hZ2VyJyk7XG52YXIgTE5vZGUgPSByZXF1aXJlKCcuL0xOb2RlJyk7XG52YXIgTEVkZ2UgPSByZXF1aXJlKCcuL0xFZGdlJyk7XG52YXIgTEdyYXBoID0gcmVxdWlyZSgnLi9MR3JhcGgnKTtcbnZhciBQb2ludEQgPSByZXF1aXJlKCcuL1BvaW50RCcpO1xudmFyIFRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vVHJhbnNmb3JtJyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJy4vRW1pdHRlcicpO1xudmFyIEhhc2hTZXQgPSByZXF1aXJlKCcuL0hhc2hTZXQnKTtcblxuZnVuY3Rpb24gTGF5b3V0KGlzUmVtb3RlVXNlKSB7XG4gIEVtaXR0ZXIuY2FsbCggdGhpcyApO1xuXG4gIC8vTGF5b3V0IFF1YWxpdHk6IDA6cHJvb2YsIDE6ZGVmYXVsdCwgMjpkcmFmdFxuICB0aGlzLmxheW91dFF1YWxpdHkgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9RVUFMSVRZO1xuICAvL1doZXRoZXIgbGF5b3V0IHNob3VsZCBjcmVhdGUgYmVuZHBvaW50cyBhcyBuZWVkZWQgb3Igbm90XG4gIHRoaXMuY3JlYXRlQmVuZHNBc05lZWRlZCA9XG4gICAgICAgICAgTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ1JFQVRFX0JFTkRTX0FTX05FRURFRDtcbiAgLy9XaGV0aGVyIGxheW91dCBzaG91bGQgYmUgaW5jcmVtZW50YWwgb3Igbm90XG4gIHRoaXMuaW5jcmVtZW50YWwgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9JTkNSRU1FTlRBTDtcbiAgLy9XaGV0aGVyIHdlIGFuaW1hdGUgZnJvbSBiZWZvcmUgdG8gYWZ0ZXIgbGF5b3V0IG5vZGUgcG9zaXRpb25zXG4gIHRoaXMuYW5pbWF0aW9uT25MYXlvdXQgPVxuICAgICAgICAgIExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9PTl9MQVlPVVQ7XG4gIC8vV2hldGhlciB3ZSBhbmltYXRlIHRoZSBsYXlvdXQgcHJvY2VzcyBvciBub3RcbiAgdGhpcy5hbmltYXRpb25EdXJpbmdMYXlvdXQgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fRFVSSU5HX0xBWU9VVDtcbiAgLy9OdW1iZXIgaXRlcmF0aW9ucyB0aGF0IHNob3VsZCBiZSBkb25lIGJldHdlZW4gdHdvIHN1Y2Nlc3NpdmUgYW5pbWF0aW9uc1xuICB0aGlzLmFuaW1hdGlvblBlcmlvZCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9QRVJJT0Q7XG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCBsZWFmIG5vZGVzIChub24tY29tcG91bmQgbm9kZXMpIGFyZSBvZiB1bmlmb3JtIHNpemVzLiBXaGVuXG4gICAqIHRoZXkgYXJlLCBib3RoIHNwcmluZyBhbmQgcmVwdWxzaW9uIGZvcmNlcyBiZXR3ZWVuIHR3byBsZWFmIG5vZGVzIGNhbiBiZVxuICAgKiBjYWxjdWxhdGVkIHdpdGhvdXQgdGhlIGV4cGVuc2l2ZSBjbGlwcGluZyBwb2ludCBjYWxjdWxhdGlvbnMsIHJlc3VsdGluZ1xuICAgKiBpbiBtYWpvciBzcGVlZC11cC5cbiAgICovXG4gIHRoaXMudW5pZm9ybUxlYWZOb2RlU2l6ZXMgPVxuICAgICAgICAgIExheW91dENvbnN0YW50cy5ERUZBVUxUX1VOSUZPUk1fTEVBRl9OT0RFX1NJWkVTO1xuICAvKipcbiAgICogVGhpcyBpcyB1c2VkIGZvciBjcmVhdGlvbiBvZiBiZW5kcG9pbnRzIGJ5IHVzaW5nIGR1bW15IG5vZGVzIGFuZCBlZGdlcy5cbiAgICogTWFwcyBhbiBMRWRnZSB0byBpdHMgZHVtbXkgYmVuZHBvaW50IHBhdGguXG4gICAqL1xuICB0aGlzLmVkZ2VUb0R1bW15Tm9kZXMgPSBuZXcgSGFzaE1hcCgpO1xuICB0aGlzLmdyYXBoTWFuYWdlciA9IG5ldyBMR3JhcGhNYW5hZ2VyKHRoaXMpO1xuICB0aGlzLmlzTGF5b3V0RmluaXNoZWQgPSBmYWxzZTtcbiAgdGhpcy5pc1N1YkxheW91dCA9IGZhbHNlO1xuICB0aGlzLmlzUmVtb3RlVXNlID0gZmFsc2U7XG5cbiAgaWYgKGlzUmVtb3RlVXNlICE9IG51bGwpIHtcbiAgICB0aGlzLmlzUmVtb3RlVXNlID0gaXNSZW1vdGVVc2U7XG4gIH1cbn1cblxuTGF5b3V0LlJBTkRPTV9TRUVEID0gMTtcblxuTGF5b3V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEVtaXR0ZXIucHJvdG90eXBlICk7XG5cbkxheW91dC5wcm90b3R5cGUuZ2V0R3JhcGhNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXI7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLmdldEFsbE5vZGVzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXMoKTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUuZ2V0QWxsRWRnZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxFZGdlcygpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5nZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uKCk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLm5ld0dyYXBoTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGdtID0gbmV3IExHcmFwaE1hbmFnZXIodGhpcyk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyID0gZ207XG4gIHJldHVybiBnbTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUubmV3R3JhcGggPSBmdW5jdGlvbiAodkdyYXBoKVxue1xuICByZXR1cm4gbmV3IExHcmFwaChudWxsLCB0aGlzLmdyYXBoTWFuYWdlciwgdkdyYXBoKTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUubmV3Tm9kZSA9IGZ1bmN0aW9uICh2Tm9kZSlcbntcbiAgcmV0dXJuIG5ldyBMTm9kZSh0aGlzLmdyYXBoTWFuYWdlciwgdk5vZGUpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5uZXdFZGdlID0gZnVuY3Rpb24gKHZFZGdlKVxue1xuICByZXR1cm4gbmV3IExFZGdlKG51bGwsIG51bGwsIHZFZGdlKTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUuY2hlY2tMYXlvdXRTdWNjZXNzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAodGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpID09IG51bGwpXG4gICAgICAgICAgfHwgdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldE5vZGVzKCkubGVuZ3RoID09IDBcbiAgICAgICAgICB8fCB0aGlzLmdyYXBoTWFuYWdlci5pbmNsdWRlc0ludmFsaWRFZGdlKCk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLnJ1bkxheW91dCA9IGZ1bmN0aW9uICgpXG57XG4gIHRoaXMuaXNMYXlvdXRGaW5pc2hlZCA9IGZhbHNlO1xuICBcbiAgaWYgKHRoaXMudGlsaW5nUHJlTGF5b3V0KSB7XG4gICAgdGhpcy50aWxpbmdQcmVMYXlvdXQoKTtcbiAgfVxuXG4gIHRoaXMuaW5pdFBhcmFtZXRlcnMoKTtcbiAgdmFyIGlzTGF5b3V0U3VjY2Vzc2Z1bGw7XG5cbiAgaWYgKHRoaXMuY2hlY2tMYXlvdXRTdWNjZXNzKCkpXG4gIHtcbiAgICBpc0xheW91dFN1Y2Nlc3NmdWxsID0gZmFsc2U7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgaXNMYXlvdXRTdWNjZXNzZnVsbCA9IHRoaXMubGF5b3V0KCk7XG4gIH1cbiAgXG4gIGlmIChMYXlvdXRDb25zdGFudHMuQU5JTUFURSA9PT0gJ2R1cmluZycpIHtcbiAgICAvLyBJZiB0aGlzIGlzIGEgJ2R1cmluZycgbGF5b3V0IGFuaW1hdGlvbi4gTGF5b3V0IGlzIG5vdCBmaW5pc2hlZCB5ZXQuIFxuICAgIC8vIFdlIG5lZWQgdG8gcGVyZm9ybSB0aGVzZSBpbiBpbmRleC5qcyB3aGVuIGxheW91dCBpcyByZWFsbHkgZmluaXNoZWQuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICBpZiAoaXNMYXlvdXRTdWNjZXNzZnVsbClcbiAge1xuICAgIGlmICghdGhpcy5pc1N1YkxheW91dClcbiAgICB7XG4gICAgICB0aGlzLmRvUG9zdExheW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aGlzLnRpbGluZ1Bvc3RMYXlvdXQpIHtcbiAgICB0aGlzLnRpbGluZ1Bvc3RMYXlvdXQoKTtcbiAgfVxuXG4gIHRoaXMuaXNMYXlvdXRGaW5pc2hlZCA9IHRydWU7XG5cbiAgcmV0dXJuIGlzTGF5b3V0U3VjY2Vzc2Z1bGw7XG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHBlcmZvcm1zIHRoZSBvcGVyYXRpb25zIHJlcXVpcmVkIGFmdGVyIGxheW91dC5cbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5kb1Bvc3RMYXlvdXQgPSBmdW5jdGlvbiAoKVxue1xuICAvL2Fzc2VydCAhaXNTdWJMYXlvdXQgOiBcIlNob3VsZCBub3QgYmUgY2FsbGVkIG9uIHN1Yi1sYXlvdXQhXCI7XG4gIC8vIFByb3BhZ2F0ZSBnZW9tZXRyaWMgY2hhbmdlcyB0byB2LWxldmVsIG9iamVjdHNcbiAgaWYoIXRoaXMuaW5jcmVtZW50YWwpe1xuICAgIHRoaXMudHJhbnNmb3JtKCk7XG4gIH1cbiAgdGhpcy51cGRhdGUoKTtcbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgdXBkYXRlcyB0aGUgZ2VvbWV0cnkgb2YgdGhlIHRhcmdldCBncmFwaCBhY2NvcmRpbmcgdG9cbiAqIGNhbGN1bGF0ZWQgbGF5b3V0LlxuICovXG5MYXlvdXQucHJvdG90eXBlLnVwZGF0ZTIgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIHVwZGF0ZSBiZW5kIHBvaW50c1xuICBpZiAodGhpcy5jcmVhdGVCZW5kc0FzTmVlZGVkKVxuICB7XG4gICAgdGhpcy5jcmVhdGVCZW5kcG9pbnRzRnJvbUR1bW15Tm9kZXMoKTtcblxuICAgIC8vIHJlc2V0IGFsbCBlZGdlcywgc2luY2UgdGhlIHRvcG9sb2d5IGhhcyBjaGFuZ2VkXG4gICAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxFZGdlcygpO1xuICB9XG5cbiAgLy8gcGVyZm9ybSBlZGdlLCBub2RlIGFuZCByb290IHVwZGF0ZXMgaWYgbGF5b3V0IGlzIG5vdCBjYWxsZWRcbiAgLy8gcmVtb3RlbHlcbiAgaWYgKCF0aGlzLmlzUmVtb3RlVXNlKVxuICB7XG4gICAgLy8gdXBkYXRlIGFsbCBlZGdlc1xuICAgIHZhciBlZGdlO1xuICAgIHZhciBhbGxFZGdlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbEVkZ2VzKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxFZGdlcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBlZGdlID0gYWxsRWRnZXNbaV07XG4vLyAgICAgIHRoaXMudXBkYXRlKGVkZ2UpO1xuICAgIH1cblxuICAgIC8vIHJlY3Vyc2l2ZWx5IHVwZGF0ZSBub2Rlc1xuICAgIHZhciBub2RlO1xuICAgIHZhciBub2RlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXROb2RlcygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgbm9kZSA9IG5vZGVzW2ldO1xuLy8gICAgICB0aGlzLnVwZGF0ZShub2RlKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgcm9vdCBncmFwaFxuICAgIHRoaXMudXBkYXRlKHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSk7XG4gIH1cbn07XG5cbkxheW91dC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAob2JqID09IG51bGwpIHtcbiAgICB0aGlzLnVwZGF0ZTIoKTtcbiAgfVxuICBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMTm9kZSkge1xuICAgIHZhciBub2RlID0gb2JqO1xuICAgIGlmIChub2RlLmdldENoaWxkKCkgIT0gbnVsbClcbiAgICB7XG4gICAgICAvLyBzaW5jZSBub2RlIGlzIGNvbXBvdW5kLCByZWN1cnNpdmVseSB1cGRhdGUgY2hpbGQgbm9kZXNcbiAgICAgIHZhciBub2RlcyA9IG5vZGUuZ2V0Q2hpbGQoKS5nZXROb2RlcygpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKylcbiAgICAgIHtcbiAgICAgICAgdXBkYXRlKG5vZGVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgbC1sZXZlbCBub2RlIGlzIGFzc29jaWF0ZWQgd2l0aCBhIHYtbGV2ZWwgZ3JhcGggb2JqZWN0LFxuICAgIC8vIHRoZW4gaXQgaXMgYXNzdW1lZCB0aGF0IHRoZSB2LWxldmVsIG5vZGUgaW1wbGVtZW50cyB0aGVcbiAgICAvLyBpbnRlcmZhY2UgVXBkYXRhYmxlLlxuICAgIGlmIChub2RlLnZHcmFwaE9iamVjdCAhPSBudWxsKVxuICAgIHtcbiAgICAgIC8vIGNhc3QgdG8gVXBkYXRhYmxlIHdpdGhvdXQgYW55IHR5cGUgY2hlY2tcbiAgICAgIHZhciB2Tm9kZSA9IG5vZGUudkdyYXBoT2JqZWN0O1xuXG4gICAgICAvLyBjYWxsIHRoZSB1cGRhdGUgbWV0aG9kIG9mIHRoZSBpbnRlcmZhY2VcbiAgICAgIHZOb2RlLnVwZGF0ZShub2RlKTtcbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgTEVkZ2UpIHtcbiAgICB2YXIgZWRnZSA9IG9iajtcbiAgICAvLyBpZiB0aGUgbC1sZXZlbCBlZGdlIGlzIGFzc29jaWF0ZWQgd2l0aCBhIHYtbGV2ZWwgZ3JhcGggb2JqZWN0LFxuICAgIC8vIHRoZW4gaXQgaXMgYXNzdW1lZCB0aGF0IHRoZSB2LWxldmVsIGVkZ2UgaW1wbGVtZW50cyB0aGVcbiAgICAvLyBpbnRlcmZhY2UgVXBkYXRhYmxlLlxuXG4gICAgaWYgKGVkZ2UudkdyYXBoT2JqZWN0ICE9IG51bGwpXG4gICAge1xuICAgICAgLy8gY2FzdCB0byBVcGRhdGFibGUgd2l0aG91dCBhbnkgdHlwZSBjaGVja1xuICAgICAgdmFyIHZFZGdlID0gZWRnZS52R3JhcGhPYmplY3Q7XG5cbiAgICAgIC8vIGNhbGwgdGhlIHVwZGF0ZSBtZXRob2Qgb2YgdGhlIGludGVyZmFjZVxuICAgICAgdkVkZ2UudXBkYXRlKGVkZ2UpO1xuICAgIH1cbiAgfVxuICBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMR3JhcGgpIHtcbiAgICB2YXIgZ3JhcGggPSBvYmo7XG4gICAgLy8gaWYgdGhlIGwtbGV2ZWwgZ3JhcGggaXMgYXNzb2NpYXRlZCB3aXRoIGEgdi1sZXZlbCBncmFwaCBvYmplY3QsXG4gICAgLy8gdGhlbiBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHYtbGV2ZWwgb2JqZWN0IGltcGxlbWVudHMgdGhlXG4gICAgLy8gaW50ZXJmYWNlIFVwZGF0YWJsZS5cblxuICAgIGlmIChncmFwaC52R3JhcGhPYmplY3QgIT0gbnVsbClcbiAgICB7XG4gICAgICAvLyBjYXN0IHRvIFVwZGF0YWJsZSB3aXRob3V0IGFueSB0eXBlIGNoZWNrXG4gICAgICB2YXIgdkdyYXBoID0gZ3JhcGgudkdyYXBoT2JqZWN0O1xuXG4gICAgICAvLyBjYWxsIHRoZSB1cGRhdGUgbWV0aG9kIG9mIHRoZSBpbnRlcmZhY2VcbiAgICAgIHZHcmFwaC51cGRhdGUoZ3JhcGgpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIHNldCBhbGwgbGF5b3V0IHBhcmFtZXRlcnMgdG8gZGVmYXVsdCB2YWx1ZXNcbiAqIGRldGVybWluZWQgYXQgY29tcGlsZSB0aW1lLlxuICovXG5MYXlvdXQucHJvdG90eXBlLmluaXRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuaXNTdWJMYXlvdXQpXG4gIHtcbiAgICB0aGlzLmxheW91dFF1YWxpdHkgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9RVUFMSVRZO1xuICAgIHRoaXMuYW5pbWF0aW9uRHVyaW5nTGF5b3V0ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX0RVUklOR19MQVlPVVQ7XG4gICAgdGhpcy5hbmltYXRpb25QZXJpb2QgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fUEVSSU9EO1xuICAgIHRoaXMuYW5pbWF0aW9uT25MYXlvdXQgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fT05fTEFZT1VUO1xuICAgIHRoaXMuaW5jcmVtZW50YWwgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9JTkNSRU1FTlRBTDtcbiAgICB0aGlzLmNyZWF0ZUJlbmRzQXNOZWVkZWQgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEO1xuICAgIHRoaXMudW5pZm9ybUxlYWZOb2RlU2l6ZXMgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VTklGT1JNX0xFQUZfTk9ERV9TSVpFUztcbiAgfVxuXG4gIGlmICh0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dClcbiAge1xuICAgIHRoaXMuYW5pbWF0aW9uT25MYXlvdXQgPSBmYWxzZTtcbiAgfVxufTtcblxuTGF5b3V0LnByb3RvdHlwZS50cmFuc2Zvcm0gPSBmdW5jdGlvbiAobmV3TGVmdFRvcCkge1xuICBpZiAobmV3TGVmdFRvcCA9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnRyYW5zZm9ybShuZXcgUG9pbnREKDAsIDApKTtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBjcmVhdGUgYSB0cmFuc2Zvcm1hdGlvbiBvYmplY3QgKGZyb20gRWNsaXBzZSB0byBsYXlvdXQpLiBXaGVuIGFuXG4gICAgLy8gaW52ZXJzZSB0cmFuc2Zvcm0gaXMgYXBwbGllZCwgd2UgZ2V0IHVwcGVyLWxlZnQgY29vcmRpbmF0ZSBvZiB0aGVcbiAgICAvLyBkcmF3aW5nIG9yIHRoZSByb290IGdyYXBoIGF0IGdpdmVuIGlucHV0IGNvb3JkaW5hdGUgKHNvbWUgbWFyZ2luc1xuICAgIC8vIGFscmVhZHkgaW5jbHVkZWQgaW4gY2FsY3VsYXRpb24gb2YgbGVmdC10b3ApLlxuXG4gICAgdmFyIHRyYW5zID0gbmV3IFRyYW5zZm9ybSgpO1xuICAgIHZhciBsZWZ0VG9wID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLnVwZGF0ZUxlZnRUb3AoKTtcblxuICAgIGlmIChsZWZ0VG9wICE9IG51bGwpXG4gICAge1xuICAgICAgdHJhbnMuc2V0V29ybGRPcmdYKG5ld0xlZnRUb3AueCk7XG4gICAgICB0cmFucy5zZXRXb3JsZE9yZ1kobmV3TGVmdFRvcC55KTtcblxuICAgICAgdHJhbnMuc2V0RGV2aWNlT3JnWChsZWZ0VG9wLngpO1xuICAgICAgdHJhbnMuc2V0RGV2aWNlT3JnWShsZWZ0VG9wLnkpO1xuXG4gICAgICB2YXIgbm9kZXMgPSB0aGlzLmdldEFsbE5vZGVzKCk7XG4gICAgICB2YXIgbm9kZTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKylcbiAgICAgIHtcbiAgICAgICAgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBub2RlLnRyYW5zZm9ybSh0cmFucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLnBvc2l0aW9uTm9kZXNSYW5kb21seSA9IGZ1bmN0aW9uIChncmFwaCkge1xuXG4gIGlmIChncmFwaCA9PSB1bmRlZmluZWQpIHtcbiAgICAvL2Fzc2VydCAhdGhpcy5pbmNyZW1lbnRhbDtcbiAgICB0aGlzLnBvc2l0aW9uTm9kZXNSYW5kb21seSh0aGlzLmdldEdyYXBoTWFuYWdlcigpLmdldFJvb3QoKSk7XG4gICAgdGhpcy5nZXRHcmFwaE1hbmFnZXIoKS5nZXRSb290KCkudXBkYXRlQm91bmRzKHRydWUpO1xuICB9XG4gIGVsc2Uge1xuICAgIHZhciBsTm9kZTtcbiAgICB2YXIgY2hpbGRHcmFwaDtcblxuICAgIHZhciBub2RlcyA9IGdyYXBoLmdldE5vZGVzKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBsTm9kZSA9IG5vZGVzW2ldO1xuICAgICAgY2hpbGRHcmFwaCA9IGxOb2RlLmdldENoaWxkKCk7XG5cbiAgICAgIGlmIChjaGlsZEdyYXBoID09IG51bGwpXG4gICAgICB7XG4gICAgICAgIGxOb2RlLnNjYXR0ZXIoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGNoaWxkR3JhcGguZ2V0Tm9kZXMoKS5sZW5ndGggPT0gMClcbiAgICAgIHtcbiAgICAgICAgbE5vZGUuc2NhdHRlcigpO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICB0aGlzLnBvc2l0aW9uTm9kZXNSYW5kb21seShjaGlsZEdyYXBoKTtcbiAgICAgICAgbE5vZGUudXBkYXRlQm91bmRzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBsaXN0IG9mIHRyZWVzIHdoZXJlIGVhY2ggdHJlZSBpcyByZXByZXNlbnRlZCBhcyBhXG4gKiBsaXN0IG9mIGwtbm9kZXMuIFRoZSBtZXRob2QgcmV0dXJucyBhIGxpc3Qgb2Ygc2l6ZSAwIHdoZW46XG4gKiAtIFRoZSBncmFwaCBpcyBub3QgZmxhdCBvclxuICogLSBPbmUgb2YgdGhlIGNvbXBvbmVudChzKSBvZiB0aGUgZ3JhcGggaXMgbm90IGEgdHJlZS5cbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5nZXRGbGF0Rm9yZXN0ID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIGZsYXRGb3Jlc3QgPSBbXTtcbiAgdmFyIGlzRm9yZXN0ID0gdHJ1ZTtcblxuICAvLyBRdWljayByZWZlcmVuY2UgZm9yIGFsbCBub2RlcyBpbiB0aGUgZ3JhcGggbWFuYWdlciBhc3NvY2lhdGVkIHdpdGhcbiAgLy8gdGhpcyBsYXlvdXQuIFRoZSBsaXN0IHNob3VsZCBub3QgYmUgY2hhbmdlZC5cbiAgdmFyIGFsbE5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldE5vZGVzKCk7XG5cbiAgLy8gRmlyc3QgYmUgc3VyZSB0aGF0IHRoZSBncmFwaCBpcyBmbGF0XG4gIHZhciBpc0ZsYXQgPSB0cnVlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTm9kZXMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICBpZiAoYWxsTm9kZXNbaV0uZ2V0Q2hpbGQoKSAhPSBudWxsKVxuICAgIHtcbiAgICAgIGlzRmxhdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybiBlbXB0eSBmb3Jlc3QgaWYgdGhlIGdyYXBoIGlzIG5vdCBmbGF0LlxuICBpZiAoIWlzRmxhdClcbiAge1xuICAgIHJldHVybiBmbGF0Rm9yZXN0O1xuICB9XG5cbiAgLy8gUnVuIEJGUyBmb3IgZWFjaCBjb21wb25lbnQgb2YgdGhlIGdyYXBoLlxuXG4gIHZhciB2aXNpdGVkID0gbmV3IEhhc2hTZXQoKTtcbiAgdmFyIHRvQmVWaXNpdGVkID0gW107XG4gIHZhciBwYXJlbnRzID0gbmV3IEhhc2hNYXAoKTtcbiAgdmFyIHVuUHJvY2Vzc2VkTm9kZXMgPSBbXTtcblxuICB1blByb2Nlc3NlZE5vZGVzID0gdW5Qcm9jZXNzZWROb2Rlcy5jb25jYXQoYWxsTm9kZXMpO1xuXG4gIC8vIEVhY2ggaXRlcmF0aW9uIG9mIHRoaXMgbG9vcCBmaW5kcyBhIGNvbXBvbmVudCBvZiB0aGUgZ3JhcGggYW5kXG4gIC8vIGRlY2lkZXMgd2hldGhlciBpdCBpcyBhIHRyZWUgb3Igbm90LiBJZiBpdCBpcyBhIHRyZWUsIGFkZHMgaXQgdG8gdGhlXG4gIC8vIGZvcmVzdCBhbmQgY29udGludWVkIHdpdGggdGhlIG5leHQgY29tcG9uZW50LlxuXG4gIHdoaWxlICh1blByb2Nlc3NlZE5vZGVzLmxlbmd0aCA+IDAgJiYgaXNGb3Jlc3QpXG4gIHtcbiAgICB0b0JlVmlzaXRlZC5wdXNoKHVuUHJvY2Vzc2VkTm9kZXNbMF0pO1xuXG4gICAgLy8gU3RhcnQgdGhlIEJGUy4gRWFjaCBpdGVyYXRpb24gb2YgdGhpcyBsb29wIHZpc2l0cyBhIG5vZGUgaW4gYVxuICAgIC8vIEJGUyBtYW5uZXIuXG4gICAgd2hpbGUgKHRvQmVWaXNpdGVkLmxlbmd0aCA+IDAgJiYgaXNGb3Jlc3QpXG4gICAge1xuICAgICAgLy9wb29sIG9wZXJhdGlvblxuICAgICAgdmFyIGN1cnJlbnROb2RlID0gdG9CZVZpc2l0ZWRbMF07XG4gICAgICB0b0JlVmlzaXRlZC5zcGxpY2UoMCwgMSk7XG4gICAgICB2aXNpdGVkLmFkZChjdXJyZW50Tm9kZSk7XG5cbiAgICAgIC8vIFRyYXZlcnNlIGFsbCBuZWlnaGJvcnMgb2YgdGhpcyBub2RlXG4gICAgICB2YXIgbmVpZ2hib3JFZGdlcyA9IGN1cnJlbnROb2RlLmdldEVkZ2VzKCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmVpZ2hib3JFZGdlcy5sZW5ndGg7IGkrKylcbiAgICAgIHtcbiAgICAgICAgdmFyIGN1cnJlbnROZWlnaGJvciA9XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JFZGdlc1tpXS5nZXRPdGhlckVuZChjdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgLy8gSWYgQkZTIGlzIG5vdCBncm93aW5nIGZyb20gdGhpcyBuZWlnaGJvci5cbiAgICAgICAgaWYgKHBhcmVudHMuZ2V0KGN1cnJlbnROb2RlKSAhPSBjdXJyZW50TmVpZ2hib3IpXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBXZSBoYXZlbid0IHByZXZpb3VzbHkgdmlzaXRlZCB0aGlzIG5laWdoYm9yLlxuICAgICAgICAgIGlmICghdmlzaXRlZC5jb250YWlucyhjdXJyZW50TmVpZ2hib3IpKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRvQmVWaXNpdGVkLnB1c2goY3VycmVudE5laWdoYm9yKTtcbiAgICAgICAgICAgIHBhcmVudHMucHV0KGN1cnJlbnROZWlnaGJvciwgY3VycmVudE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBTaW5jZSB3ZSBoYXZlIHByZXZpb3VzbHkgdmlzaXRlZCB0aGlzIG5laWdoYm9yIGFuZFxuICAgICAgICAgIC8vIHRoaXMgbmVpZ2hib3IgaXMgbm90IHBhcmVudCBvZiBjdXJyZW50Tm9kZSwgZ2l2ZW5cbiAgICAgICAgICAvLyBncmFwaCBjb250YWlucyBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB0cmVlLCBoZW5jZVxuICAgICAgICAgIC8vIGl0IGlzIG5vdCBhIGZvcmVzdC5cbiAgICAgICAgICBlbHNlXG4gICAgICAgICAge1xuICAgICAgICAgICAgaXNGb3Jlc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZSBncmFwaCBjb250YWlucyBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCBhIHRyZWUuIEVtcHR5XG4gICAgLy8gcHJldmlvdXNseSBmb3VuZCB0cmVlcy4gVGhlIG1ldGhvZCB3aWxsIGVuZC5cbiAgICBpZiAoIWlzRm9yZXN0KVxuICAgIHtcbiAgICAgIGZsYXRGb3Jlc3QgPSBbXTtcbiAgICB9XG4gICAgLy8gU2F2ZSBjdXJyZW50bHkgdmlzaXRlZCBub2RlcyBhcyBhIHRyZWUgaW4gb3VyIGZvcmVzdC4gUmVzZXRcbiAgICAvLyB2aXNpdGVkIGFuZCBwYXJlbnRzIGxpc3RzLiBDb250aW51ZSB3aXRoIHRoZSBuZXh0IGNvbXBvbmVudCBvZlxuICAgIC8vIHRoZSBncmFwaCwgaWYgYW55LlxuICAgIGVsc2VcbiAgICB7XG4gICAgICB2YXIgdGVtcCA9IFtdO1xuICAgICAgdmlzaXRlZC5hZGRBbGxUbyh0ZW1wKTtcbiAgICAgIGZsYXRGb3Jlc3QucHVzaCh0ZW1wKTtcbiAgICAgIC8vZmxhdEZvcmVzdCA9IGZsYXRGb3Jlc3QuY29uY2F0KHRlbXApO1xuICAgICAgLy91blByb2Nlc3NlZE5vZGVzLnJlbW92ZUFsbCh2aXNpdGVkKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdmFsdWUgPSB0ZW1wW2ldO1xuICAgICAgICB2YXIgaW5kZXggPSB1blByb2Nlc3NlZE5vZGVzLmluZGV4T2YodmFsdWUpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgIHVuUHJvY2Vzc2VkTm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmlzaXRlZCA9IG5ldyBIYXNoU2V0KCk7XG4gICAgICBwYXJlbnRzID0gbmV3IEhhc2hNYXAoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmxhdEZvcmVzdDtcbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgY3JlYXRlcyBkdW1teSBub2RlcyAoYW4gbC1sZXZlbCBub2RlIHdpdGggbWluaW1hbCBkaW1lbnNpb25zKVxuICogZm9yIHRoZSBnaXZlbiBlZGdlIChvbmUgcGVyIGJlbmRwb2ludCkuIFRoZSBleGlzdGluZyBsLWxldmVsIHN0cnVjdHVyZVxuICogaXMgdXBkYXRlZCBhY2NvcmRpbmdseS5cbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5jcmVhdGVEdW1teU5vZGVzRm9yQmVuZHBvaW50cyA9IGZ1bmN0aW9uIChlZGdlKVxue1xuICB2YXIgZHVtbXlOb2RlcyA9IFtdO1xuICB2YXIgcHJldiA9IGVkZ2Uuc291cmNlO1xuXG4gIHZhciBncmFwaCA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmNhbGNMb3dlc3RDb21tb25BbmNlc3RvcihlZGdlLnNvdXJjZSwgZWRnZS50YXJnZXQpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWRnZS5iZW5kcG9pbnRzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgLy8gY3JlYXRlIG5ldyBkdW1teSBub2RlXG4gICAgdmFyIGR1bW15Tm9kZSA9IHRoaXMubmV3Tm9kZShudWxsKTtcbiAgICBkdW1teU5vZGUuc2V0UmVjdChuZXcgUG9pbnQoMCwgMCksIG5ldyBEaW1lbnNpb24oMSwgMSkpO1xuXG4gICAgZ3JhcGguYWRkKGR1bW15Tm9kZSk7XG5cbiAgICAvLyBjcmVhdGUgbmV3IGR1bW15IGVkZ2UgYmV0d2VlbiBwcmV2IGFuZCBkdW1teSBub2RlXG4gICAgdmFyIGR1bW15RWRnZSA9IHRoaXMubmV3RWRnZShudWxsKTtcbiAgICB0aGlzLmdyYXBoTWFuYWdlci5hZGQoZHVtbXlFZGdlLCBwcmV2LCBkdW1teU5vZGUpO1xuXG4gICAgZHVtbXlOb2Rlcy5hZGQoZHVtbXlOb2RlKTtcbiAgICBwcmV2ID0gZHVtbXlOb2RlO1xuICB9XG5cbiAgdmFyIGR1bW15RWRnZSA9IHRoaXMubmV3RWRnZShudWxsKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIuYWRkKGR1bW15RWRnZSwgcHJldiwgZWRnZS50YXJnZXQpO1xuXG4gIHRoaXMuZWRnZVRvRHVtbXlOb2Rlcy5wdXQoZWRnZSwgZHVtbXlOb2Rlcyk7XG5cbiAgLy8gcmVtb3ZlIHJlYWwgZWRnZSBmcm9tIGdyYXBoIG1hbmFnZXIgaWYgaXQgaXMgaW50ZXItZ3JhcGhcbiAgaWYgKGVkZ2UuaXNJbnRlckdyYXBoKCkpXG4gIHtcbiAgICB0aGlzLmdyYXBoTWFuYWdlci5yZW1vdmUoZWRnZSk7XG4gIH1cbiAgLy8gZWxzZSwgcmVtb3ZlIHRoZSBlZGdlIGZyb20gdGhlIGN1cnJlbnQgZ3JhcGhcbiAgZWxzZVxuICB7XG4gICAgZ3JhcGgucmVtb3ZlKGVkZ2UpO1xuICB9XG5cbiAgcmV0dXJuIGR1bW15Tm9kZXM7XG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGNyZWF0ZXMgYmVuZHBvaW50cyBmb3IgZWRnZXMgZnJvbSB0aGUgZHVtbXkgbm9kZXNcbiAqIGF0IGwtbGV2ZWwuXG4gKi9cbkxheW91dC5wcm90b3R5cGUuY3JlYXRlQmVuZHBvaW50c0Zyb21EdW1teU5vZGVzID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIGVkZ2VzID0gW107XG4gIGVkZ2VzID0gZWRnZXMuY29uY2F0KHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbEVkZ2VzKCkpO1xuICBlZGdlcyA9IHRoaXMuZWRnZVRvRHVtbXlOb2Rlcy5rZXlTZXQoKS5jb25jYXQoZWRnZXMpO1xuXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgZWRnZXMubGVuZ3RoOyBrKyspXG4gIHtcbiAgICB2YXIgbEVkZ2UgPSBlZGdlc1trXTtcblxuICAgIGlmIChsRWRnZS5iZW5kcG9pbnRzLmxlbmd0aCA+IDApXG4gICAge1xuICAgICAgdmFyIHBhdGggPSB0aGlzLmVkZ2VUb0R1bW15Tm9kZXMuZ2V0KGxFZGdlKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKVxuICAgICAge1xuICAgICAgICB2YXIgZHVtbXlOb2RlID0gcGF0aFtpXTtcbiAgICAgICAgdmFyIHAgPSBuZXcgUG9pbnREKGR1bW15Tm9kZS5nZXRDZW50ZXJYKCksXG4gICAgICAgICAgICAgICAgZHVtbXlOb2RlLmdldENlbnRlclkoKSk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGJlbmRwb2ludCdzIGxvY2F0aW9uIGFjY29yZGluZyB0byBkdW1teSBub2RlXG4gICAgICAgIHZhciBlYnAgPSBsRWRnZS5iZW5kcG9pbnRzLmdldChpKTtcbiAgICAgICAgZWJwLnggPSBwLng7XG4gICAgICAgIGVicC55ID0gcC55O1xuXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgZHVtbXkgbm9kZSwgZHVtbXkgZWRnZXMgaW5jaWRlbnQgd2l0aCB0aGlzXG4gICAgICAgIC8vIGR1bW15IG5vZGUgaXMgYWxzbyByZW1vdmVkICh3aXRoaW4gdGhlIHJlbW92ZSBtZXRob2QpXG4gICAgICAgIGR1bW15Tm9kZS5nZXRPd25lcigpLnJlbW92ZShkdW1teU5vZGUpO1xuICAgICAgfVxuXG4gICAgICAvLyBhZGQgdGhlIHJlYWwgZWRnZSB0byBncmFwaFxuICAgICAgdGhpcy5ncmFwaE1hbmFnZXIuYWRkKGxFZGdlLCBsRWRnZS5zb3VyY2UsIGxFZGdlLnRhcmdldCk7XG4gICAgfVxuICB9XG59O1xuXG5MYXlvdXQudHJhbnNmb3JtID0gZnVuY3Rpb24gKHNsaWRlclZhbHVlLCBkZWZhdWx0VmFsdWUsIG1pbkRpdiwgbWF4TXVsKSB7XG4gIGlmIChtaW5EaXYgIT0gdW5kZWZpbmVkICYmIG1heE11bCAhPSB1bmRlZmluZWQpIHtcbiAgICB2YXIgdmFsdWUgPSBkZWZhdWx0VmFsdWU7XG5cbiAgICBpZiAoc2xpZGVyVmFsdWUgPD0gNTApXG4gICAge1xuICAgICAgdmFyIG1pblZhbHVlID0gZGVmYXVsdFZhbHVlIC8gbWluRGl2O1xuICAgICAgdmFsdWUgLT0gKChkZWZhdWx0VmFsdWUgLSBtaW5WYWx1ZSkgLyA1MCkgKiAoNTAgLSBzbGlkZXJWYWx1ZSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICB2YXIgbWF4VmFsdWUgPSBkZWZhdWx0VmFsdWUgKiBtYXhNdWw7XG4gICAgICB2YWx1ZSArPSAoKG1heFZhbHVlIC0gZGVmYXVsdFZhbHVlKSAvIDUwKSAqIChzbGlkZXJWYWx1ZSAtIDUwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgZWxzZSB7XG4gICAgdmFyIGEsIGI7XG5cbiAgICBpZiAoc2xpZGVyVmFsdWUgPD0gNTApXG4gICAge1xuICAgICAgYSA9IDkuMCAqIGRlZmF1bHRWYWx1ZSAvIDUwMC4wO1xuICAgICAgYiA9IGRlZmF1bHRWYWx1ZSAvIDEwLjA7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICBhID0gOS4wICogZGVmYXVsdFZhbHVlIC8gNTAuMDtcbiAgICAgIGIgPSAtOCAqIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKGEgKiBzbGlkZXJWYWx1ZSArIGIpO1xuICB9XG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGZpbmRzIGFuZCByZXR1cm5zIHRoZSBjZW50ZXIgb2YgdGhlIGdpdmVuIG5vZGVzLCBhc3N1bWluZ1xuICogdGhhdCB0aGUgZ2l2ZW4gbm9kZXMgZm9ybSBhIHRyZWUgaW4gdGhlbXNlbHZlcy5cbiAqL1xuTGF5b3V0LmZpbmRDZW50ZXJPZlRyZWUgPSBmdW5jdGlvbiAobm9kZXMpXG57XG4gIHZhciBsaXN0ID0gW107XG4gIGxpc3QgPSBsaXN0LmNvbmNhdChub2Rlcyk7XG5cbiAgdmFyIHJlbW92ZWROb2RlcyA9IFtdO1xuICB2YXIgcmVtYWluaW5nRGVncmVlcyA9IG5ldyBIYXNoTWFwKCk7XG4gIHZhciBmb3VuZENlbnRlciA9IGZhbHNlO1xuICB2YXIgY2VudGVyTm9kZSA9IG51bGw7XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09IDEgfHwgbGlzdC5sZW5ndGggPT0gMilcbiAge1xuICAgIGZvdW5kQ2VudGVyID0gdHJ1ZTtcbiAgICBjZW50ZXJOb2RlID0gbGlzdFswXTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKylcbiAge1xuICAgIHZhciBub2RlID0gbGlzdFtpXTtcbiAgICB2YXIgZGVncmVlID0gbm9kZS5nZXROZWlnaGJvcnNMaXN0KCkuc2l6ZSgpO1xuICAgIHJlbWFpbmluZ0RlZ3JlZXMucHV0KG5vZGUsIG5vZGUuZ2V0TmVpZ2hib3JzTGlzdCgpLnNpemUoKSk7XG5cbiAgICBpZiAoZGVncmVlID09IDEpXG4gICAge1xuICAgICAgcmVtb3ZlZE5vZGVzLnB1c2gobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHRlbXBMaXN0ID0gW107XG4gIHRlbXBMaXN0ID0gdGVtcExpc3QuY29uY2F0KHJlbW92ZWROb2Rlcyk7XG5cbiAgd2hpbGUgKCFmb3VuZENlbnRlcilcbiAge1xuICAgIHZhciB0ZW1wTGlzdDIgPSBbXTtcbiAgICB0ZW1wTGlzdDIgPSB0ZW1wTGlzdDIuY29uY2F0KHRlbXBMaXN0KTtcbiAgICB0ZW1wTGlzdCA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIHZhciBub2RlID0gbGlzdFtpXTtcblxuICAgICAgdmFyIGluZGV4ID0gbGlzdC5pbmRleE9mKG5vZGUpO1xuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmVpZ2hib3VycyA9IG5vZGUuZ2V0TmVpZ2hib3JzTGlzdCgpO1xuXG4gICAgICBPYmplY3Qua2V5cyhuZWlnaGJvdXJzLnNldCkuZm9yRWFjaChmdW5jdGlvbihqKSB7XG4gICAgICAgIHZhciBuZWlnaGJvdXIgPSBuZWlnaGJvdXJzLnNldFtqXTtcbiAgICAgICAgaWYgKHJlbW92ZWROb2Rlcy5pbmRleE9mKG5laWdoYm91cikgPCAwKVxuICAgICAgICB7XG4gICAgICAgICAgdmFyIG90aGVyRGVncmVlID0gcmVtYWluaW5nRGVncmVlcy5nZXQobmVpZ2hib3VyKTtcbiAgICAgICAgICB2YXIgbmV3RGVncmVlID0gb3RoZXJEZWdyZWUgLSAxO1xuXG4gICAgICAgICAgaWYgKG5ld0RlZ3JlZSA9PSAxKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRlbXBMaXN0LnB1c2gobmVpZ2hib3VyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZW1haW5pbmdEZWdyZWVzLnB1dChuZWlnaGJvdXIsIG5ld0RlZ3JlZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbW92ZWROb2RlcyA9IHJlbW92ZWROb2Rlcy5jb25jYXQodGVtcExpc3QpO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09IDEgfHwgbGlzdC5sZW5ndGggPT0gMilcbiAgICB7XG4gICAgICBmb3VuZENlbnRlciA9IHRydWU7XG4gICAgICBjZW50ZXJOb2RlID0gbGlzdFswXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2VudGVyTm9kZTtcbn07XG5cbi8qKlxuICogRHVyaW5nIHRoZSBjb2Fyc2VuaW5nIHByb2Nlc3MsIHRoaXMgbGF5b3V0IG1heSBiZSByZWZlcmVuY2VkIGJ5IHR3byBncmFwaCBtYW5hZ2Vyc1xuICogdGhpcyBzZXR0ZXIgZnVuY3Rpb24gZ3JhbnRzIGFjY2VzcyB0byBjaGFuZ2UgdGhlIGN1cnJlbnRseSBiZWluZyB1c2VkIGdyYXBoIG1hbmFnZXJcbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5zZXRHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoZ20pXG57XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyID0gZ207XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExheW91dDtcbiIsImZ1bmN0aW9uIExheW91dENvbnN0YW50cygpIHtcbn1cblxuLyoqXG4gKiBMYXlvdXQgUXVhbGl0eVxuICovXG5MYXlvdXRDb25zdGFudHMuUFJPT0ZfUVVBTElUWSA9IDA7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9RVUFMSVRZID0gMTtcbkxheW91dENvbnN0YW50cy5EUkFGVF9RVUFMSVRZID0gMjtcblxuLyoqXG4gKiBEZWZhdWx0IHBhcmFtZXRlcnNcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ1JFQVRFX0JFTkRTX0FTX05FRURFRCA9IGZhbHNlO1xuLy9MYXlvdXRDb25zdGFudHMuREVGQVVMVF9JTkNSRU1FTlRBTCA9IHRydWU7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9JTkNSRU1FTlRBTCA9IGZhbHNlO1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVCA9IHRydWU7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fRFVSSU5HX0xBWU9VVCA9IGZhbHNlO1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRCA9IDUwO1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVU5JRk9STV9MRUFGX05PREVfU0laRVMgPSBmYWxzZTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IEdlbmVyYWwgb3RoZXIgY29uc3RhbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLypcbiAqIE1hcmdpbnMgb2YgYSBncmFwaCB0byBiZSBhcHBsaWVkIG9uIGJvdWRpbmcgcmVjdGFuZ2xlIG9mIGl0cyBjb250ZW50cy4gV2VcbiAqIGFzc3VtZSBtYXJnaW5zIG9uIGFsbCBmb3VyIHNpZGVzIHRvIGJlIHVuaWZvcm0uXG4gKi9cbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVBIX01BUkdJTiA9IDE1O1xuXG4vKlxuICogV2hldGhlciB0byBjb25zaWRlciBsYWJlbHMgaW4gbm9kZSBkaW1lbnNpb25zIG9yIG5vdFxuICovXG5MYXlvdXRDb25zdGFudHMuTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTID0gZmFsc2U7XG5cbi8qXG4gKiBEZWZhdWx0IGRpbWVuc2lvbiBvZiBhIG5vbi1jb21wb3VuZCBub2RlLlxuICovXG5MYXlvdXRDb25zdGFudHMuU0lNUExFX05PREVfU0laRSA9IDQwO1xuXG4vKlxuICogRGVmYXVsdCBkaW1lbnNpb24gb2YgYSBub24tY29tcG91bmQgbm9kZS5cbiAqL1xuTGF5b3V0Q29uc3RhbnRzLlNJTVBMRV9OT0RFX0hBTEZfU0laRSA9IExheW91dENvbnN0YW50cy5TSU1QTEVfTk9ERV9TSVpFIC8gMjtcblxuLypcbiAqIEVtcHR5IGNvbXBvdW5kIG5vZGUgc2l6ZS4gV2hlbiBhIGNvbXBvdW5kIG5vZGUgaXMgZW1wdHksIGl0cyBib3RoXG4gKiBkaW1lbnNpb25zIHNob3VsZCBiZSBvZiB0aGlzIHZhbHVlLlxuICovXG5MYXlvdXRDb25zdGFudHMuRU1QVFlfQ09NUE9VTkRfTk9ERV9TSVpFID0gNDA7XG5cbi8qXG4gKiBNaW5pbXVtIGxlbmd0aCB0aGF0IGFuIGVkZ2Ugc2hvdWxkIHRha2UgZHVyaW5nIGxheW91dFxuICovXG5MYXlvdXRDb25zdGFudHMuTUlOX0VER0VfTEVOR1RIID0gMTtcblxuLypcbiAqIFdvcmxkIGJvdW5kYXJpZXMgdGhhdCBsYXlvdXQgb3BlcmF0ZXMgb25cbiAqL1xuTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZID0gMTAwMDAwMDtcblxuLypcbiAqIFdvcmxkIGJvdW5kYXJpZXMgdGhhdCByYW5kb20gcG9zaXRpb25pbmcgY2FuIGJlIHBlcmZvcm1lZCB3aXRoXG4gKi9cbkxheW91dENvbnN0YW50cy5JTklUSUFMX1dPUkxEX0JPVU5EQVJZID0gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZIC8gMTAwMDtcblxuLypcbiAqIENvb3JkaW5hdGVzIG9mIHRoZSB3b3JsZCBjZW50ZXJcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLldPUkxEX0NFTlRFUl9YID0gMTIwMDtcbkxheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWSA9IDkwMDtcblxubW9kdWxlLmV4cG9ydHMgPSBMYXlvdXRDb25zdGFudHM7XG4iLCJjb25zdCBub2RlRnJvbSA9IHZhbHVlID0+ICh7IHZhbHVlLCBuZXh0OiBudWxsLCBwcmV2OiBudWxsIH0pO1xuXG5jb25zdCBhZGQgPSAoIHByZXYsIG5vZGUsIG5leHQsIGxpc3QgKSA9PiB7XG4gIGlmKCBwcmV2ICE9PSBudWxsICl7XG4gICAgcHJldi5uZXh0ID0gbm9kZTtcbiAgfSBlbHNlIHtcbiAgICBsaXN0LmhlYWQgPSBub2RlO1xuICB9XG5cbiAgaWYoIG5leHQgIT09IG51bGwgKXtcbiAgICBuZXh0LnByZXYgPSBub2RlO1xuICB9IGVsc2Uge1xuICAgIGxpc3QudGFpbCA9IG5vZGU7XG4gIH1cblxuICBub2RlLnByZXYgPSBwcmV2O1xuICBub2RlLm5leHQgPSBuZXh0O1xuXG4gIGxpc3QubGVuZ3RoKys7XG5cbiAgcmV0dXJuIG5vZGU7XG59O1xuXG5jb25zdCByZW1vdmUgPSAoIG5vZGUsIGxpc3QgKSA9PiB7XG4gIGxldCB7IHByZXYsIG5leHQgfSA9IG5vZGU7XG5cbiAgaWYoIHByZXYgIT09IG51bGwgKXtcbiAgICBwcmV2Lm5leHQgPSBuZXh0O1xuICB9IGVsc2Uge1xuICAgIGxpc3QuaGVhZCA9IG5leHQ7XG4gIH1cblxuICBpZiggbmV4dCAhPT0gbnVsbCApe1xuICAgIG5leHQucHJldiA9IHByZXY7XG4gIH0gZWxzZSB7XG4gICAgbGlzdC50YWlsID0gcHJldjtcbiAgfVxuXG4gIG5vZGUucHJldiA9IG5vZGUubmV4dCA9IG51bGw7XG5cbiAgbGlzdC5sZW5ndGgtLTtcblxuICByZXR1cm4gbm9kZTtcbn07XG5cbmNsYXNzIExpbmtlZExpc3Qge1xuICBjb25zdHJ1Y3RvciggdmFscyApe1xuICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmhlYWQgPSBudWxsO1xuICAgIHRoaXMudGFpbCA9IG51bGw7XG5cbiAgICBpZiggdmFscyAhPSBudWxsICl7XG4gICAgICB2YWxzLmZvckVhY2goIHYgPT4gdGhpcy5wdXNoKHYpICk7XG4gICAgfVxuICB9XG5cbiAgc2l6ZSgpe1xuICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgfVxuXG4gIGluc2VydEJlZm9yZSggdmFsLCBvdGhlck5vZGUgKXtcbiAgICByZXR1cm4gYWRkKCBvdGhlck5vZGUucHJldiwgbm9kZUZyb20odmFsKSwgb3RoZXJOb2RlLCB0aGlzICk7XG4gIH1cblxuICBpbnNlcnRBZnRlciggdmFsLCBvdGhlck5vZGUgKXtcbiAgICByZXR1cm4gYWRkKCBvdGhlck5vZGUsIG5vZGVGcm9tKHZhbCksIG90aGVyTm9kZS5uZXh0LCB0aGlzICk7XG4gIH1cblxuICBpbnNlcnROb2RlQmVmb3JlKCBuZXdOb2RlLCBvdGhlck5vZGUgKXtcbiAgICByZXR1cm4gYWRkKCBvdGhlck5vZGUucHJldiwgbmV3Tm9kZSwgb3RoZXJOb2RlLCB0aGlzICk7XG4gIH1cblxuICBpbnNlcnROb2RlQWZ0ZXIoIG5ld05vZGUsIG90aGVyTm9kZSApe1xuICAgIHJldHVybiBhZGQoIG90aGVyTm9kZSwgbmV3Tm9kZSwgb3RoZXJOb2RlLm5leHQsIHRoaXMgKTtcbiAgfVxuXG4gIHB1c2goIHZhbCApe1xuICAgIHJldHVybiBhZGQoIHRoaXMudGFpbCwgbm9kZUZyb20odmFsKSwgbnVsbCwgdGhpcyApO1xuICB9XG5cbiAgdW5zaGlmdCggdmFsICl7XG4gICAgcmV0dXJuIGFkZCggbnVsbCwgbm9kZUZyb20odmFsKSwgdGhpcy5oZWFkLCB0aGlzICk7XG4gIH1cblxuICByZW1vdmUoIG5vZGUgKXtcbiAgICByZXR1cm4gcmVtb3ZlKCBub2RlLCB0aGlzICk7XG4gIH1cblxuICBwb3AoKXtcbiAgICByZXR1cm4gcmVtb3ZlKCB0aGlzLnRhaWwsIHRoaXMgKS52YWx1ZTtcbiAgfVxuXG4gIHBvcE5vZGUoKXtcbiAgICAgcmV0dXJuIHJlbW92ZSggdGhpcy50YWlsLCB0aGlzICk7XG4gIH1cblxuICBzaGlmdCgpe1xuICAgIHJldHVybiByZW1vdmUoIHRoaXMuaGVhZCwgdGhpcyApLnZhbHVlO1xuICB9XG5cbiAgc2hpZnROb2RlKCl7XG4gICAgcmV0dXJuIHJlbW92ZSggdGhpcy5oZWFkLCB0aGlzICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rZWRMaXN0O1xuIiwiLypcbiAqVGhpcyBjbGFzcyBpcyB0aGUgamF2YXNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUG9pbnQuamF2YSBjbGFzcyBpbiBqZGtcbiAqL1xuZnVuY3Rpb24gUG9pbnQoeCwgeSwgcCkge1xuICB0aGlzLnggPSBudWxsO1xuICB0aGlzLnkgPSBudWxsO1xuICBpZiAoeCA9PSBudWxsICYmIHkgPT0gbnVsbCAmJiBwID09IG51bGwpIHtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIHggPT0gJ251bWJlcicgJiYgdHlwZW9mIHkgPT0gJ251bWJlcicgJiYgcCA9PSBudWxsKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG4gIGVsc2UgaWYgKHguY29uc3RydWN0b3IubmFtZSA9PSAnUG9pbnQnICYmIHkgPT0gbnVsbCAmJiBwID09IG51bGwpIHtcbiAgICBwID0geDtcbiAgICB0aGlzLnggPSBwLng7XG4gICAgdGhpcy55ID0gcC55O1xuICB9XG59XG5cblBvaW50LnByb3RvdHlwZS5nZXRYID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy54O1xufVxuXG5Qb2ludC5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMueTtcbn1cblxuUG9pbnQucHJvdG90eXBlLmdldExvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTtcbn1cblxuUG9pbnQucHJvdG90eXBlLnNldExvY2F0aW9uID0gZnVuY3Rpb24gKHgsIHksIHApIHtcbiAgaWYgKHguY29uc3RydWN0b3IubmFtZSA9PSAnUG9pbnQnICYmIHkgPT0gbnVsbCAmJiBwID09IG51bGwpIHtcbiAgICBwID0geDtcbiAgICB0aGlzLnNldExvY2F0aW9uKHAueCwgcC55KTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgeCA9PSAnbnVtYmVyJyAmJiB0eXBlb2YgeSA9PSAnbnVtYmVyJyAmJiBwID09IG51bGwpIHtcbiAgICAvL2lmIGJvdGggcGFyYW1ldGVycyBhcmUgaW50ZWdlciBqdXN0IG1vdmUgKHgseSkgbG9jYXRpb25cbiAgICBpZiAocGFyc2VJbnQoeCkgPT0geCAmJiBwYXJzZUludCh5KSA9PSB5KSB7XG4gICAgICB0aGlzLm1vdmUoeCwgeSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcih4ICsgMC41KTtcbiAgICAgIHRoaXMueSA9IE1hdGguZmxvb3IoeSArIDAuNSk7XG4gICAgfVxuICB9XG59XG5cblBvaW50LnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgdGhpcy54ID0geDtcbiAgdGhpcy55ID0geTtcbn1cblxuUG9pbnQucHJvdG90eXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uIChkeCwgZHkpIHtcbiAgdGhpcy54ICs9IGR4O1xuICB0aGlzLnkgKz0gZHk7XG59XG5cblBvaW50LnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmIChvYmouY29uc3RydWN0b3IubmFtZSA9PSBcIlBvaW50XCIpIHtcbiAgICB2YXIgcHQgPSBvYmo7XG4gICAgcmV0dXJuICh0aGlzLnggPT0gcHQueCkgJiYgKHRoaXMueSA9PSBwdC55KTtcbiAgfVxuICByZXR1cm4gdGhpcyA9PSBvYmo7XG59XG5cblBvaW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCgpLmNvbnN0cnVjdG9yLm5hbWUgKyBcIlt4PVwiICsgdGhpcy54ICsgXCIseT1cIiArIHRoaXMueSArIFwiXVwiO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50O1xuIiwiZnVuY3Rpb24gUG9pbnREKHgsIHkpIHtcbiAgaWYgKHggPT0gbnVsbCAmJiB5ID09IG51bGwpIHtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG59XG5cblBvaW50RC5wcm90b3R5cGUuZ2V0WCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLng7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLmdldFkgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy55O1xufTtcblxuUG9pbnRELnByb3RvdHlwZS5zZXRYID0gZnVuY3Rpb24gKHgpXG57XG4gIHRoaXMueCA9IHg7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLnNldFkgPSBmdW5jdGlvbiAoeSlcbntcbiAgdGhpcy55ID0geTtcbn07XG5cblBvaW50RC5wcm90b3R5cGUuZ2V0RGlmZmVyZW5jZSA9IGZ1bmN0aW9uIChwdClcbntcbiAgcmV0dXJuIG5ldyBEaW1lbnNpb25EKHRoaXMueCAtIHB0LngsIHRoaXMueSAtIHB0LnkpO1xufTtcblxuUG9pbnRELnByb3RvdHlwZS5nZXRDb3B5ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIG5ldyBQb2ludEQodGhpcy54LCB0aGlzLnkpO1xufTtcblxuUG9pbnRELnByb3RvdHlwZS50cmFuc2xhdGUgPSBmdW5jdGlvbiAoZGltKVxue1xuICB0aGlzLnggKz0gZGltLndpZHRoO1xuICB0aGlzLnkgKz0gZGltLmhlaWdodDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50RDtcbiIsImZ1bmN0aW9uIFJhbmRvbVNlZWQoKSB7XG59XG5SYW5kb21TZWVkLnNlZWQgPSAxO1xuUmFuZG9tU2VlZC54ID0gMDtcblxuUmFuZG9tU2VlZC5uZXh0RG91YmxlID0gZnVuY3Rpb24gKCkge1xuICBSYW5kb21TZWVkLnggPSBNYXRoLnNpbihSYW5kb21TZWVkLnNlZWQrKykgKiAxMDAwMDtcbiAgcmV0dXJuIFJhbmRvbVNlZWQueCAtIE1hdGguZmxvb3IoUmFuZG9tU2VlZC54KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmFuZG9tU2VlZDtcbiIsImZ1bmN0aW9uIFJlY3RhbmdsZUQoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICB0aGlzLnggPSAwO1xuICB0aGlzLnkgPSAwO1xuICB0aGlzLndpZHRoID0gMDtcbiAgdGhpcy5oZWlnaHQgPSAwO1xuXG4gIGlmICh4ICE9IG51bGwgJiYgeSAhPSBudWxsICYmIHdpZHRoICE9IG51bGwgJiYgaGVpZ2h0ICE9IG51bGwpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG59XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy54O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0WCA9IGZ1bmN0aW9uICh4KVxue1xuICB0aGlzLnggPSB4O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnk7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5zZXRZID0gZnVuY3Rpb24gKHkpXG57XG4gIHRoaXMueSA9IHk7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLndpZHRoO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0V2lkdGggPSBmdW5jdGlvbiAod2lkdGgpXG57XG4gIHRoaXMud2lkdGggPSB3aWR0aDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmhlaWdodDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uIChoZWlnaHQpXG57XG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0UmlnaHQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldEJvdHRvbSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmludGVyc2VjdHMgPSBmdW5jdGlvbiAoYSlcbntcbiAgaWYgKHRoaXMuZ2V0UmlnaHQoKSA8IGEueClcbiAge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0aGlzLmdldEJvdHRvbSgpIDwgYS55KVxuICB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGEuZ2V0UmlnaHQoKSA8IHRoaXMueClcbiAge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChhLmdldEJvdHRvbSgpIDwgdGhpcy55KVxuICB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRDZW50ZXJYID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGggLyAyO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0TWluWCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmdldFgoKTtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldE1heFggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5nZXRYKCkgKyB0aGlzLndpZHRoO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0Q2VudGVyWSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodCAvIDI7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRNaW5ZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuZ2V0WSgpO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0TWF4WSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmdldFkoKSArIHRoaXMuaGVpZ2h0O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0V2lkdGhIYWxmID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMud2lkdGggLyAyO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0SGVpZ2h0SGFsZiA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmhlaWdodCAvIDI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlY3RhbmdsZUQ7XG4iLCJ2YXIgUG9pbnREID0gcmVxdWlyZSgnLi9Qb2ludEQnKTtcblxuZnVuY3Rpb24gVHJhbnNmb3JtKHgsIHkpIHtcbiAgdGhpcy5sd29ybGRPcmdYID0gMC4wO1xuICB0aGlzLmx3b3JsZE9yZ1kgPSAwLjA7XG4gIHRoaXMubGRldmljZU9yZ1ggPSAwLjA7XG4gIHRoaXMubGRldmljZU9yZ1kgPSAwLjA7XG4gIHRoaXMubHdvcmxkRXh0WCA9IDEuMDtcbiAgdGhpcy5sd29ybGRFeHRZID0gMS4wO1xuICB0aGlzLmxkZXZpY2VFeHRYID0gMS4wO1xuICB0aGlzLmxkZXZpY2VFeHRZID0gMS4wO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldFdvcmxkT3JnWCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmx3b3JsZE9yZ1g7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0V29ybGRPcmdYID0gZnVuY3Rpb24gKHdveClcbntcbiAgdGhpcy5sd29ybGRPcmdYID0gd294O1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldFdvcmxkT3JnWSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmx3b3JsZE9yZ1k7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0V29ybGRPcmdZID0gZnVuY3Rpb24gKHdveSlcbntcbiAgdGhpcy5sd29ybGRPcmdZID0gd295O1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldFdvcmxkRXh0WCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmx3b3JsZEV4dFg7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0V29ybGRFeHRYID0gZnVuY3Rpb24gKHdleClcbntcbiAgdGhpcy5sd29ybGRFeHRYID0gd2V4O1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldFdvcmxkRXh0WSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmx3b3JsZEV4dFk7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0V29ybGRFeHRZID0gZnVuY3Rpb24gKHdleSlcbntcbiAgdGhpcy5sd29ybGRFeHRZID0gd2V5O1xufVxuXG4vKiBEZXZpY2UgcmVsYXRlZCAqL1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldERldmljZU9yZ1ggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sZGV2aWNlT3JnWDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXREZXZpY2VPcmdYID0gZnVuY3Rpb24gKGRveClcbntcbiAgdGhpcy5sZGV2aWNlT3JnWCA9IGRveDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VPcmdZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubGRldmljZU9yZ1k7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0RGV2aWNlT3JnWSA9IGZ1bmN0aW9uIChkb3kpXG57XG4gIHRoaXMubGRldmljZU9yZ1kgPSBkb3k7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0RGV2aWNlRXh0WCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmxkZXZpY2VFeHRYO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZUV4dFggPSBmdW5jdGlvbiAoZGV4KVxue1xuICB0aGlzLmxkZXZpY2VFeHRYID0gZGV4O1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldERldmljZUV4dFkgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sZGV2aWNlRXh0WTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXREZXZpY2VFeHRZID0gZnVuY3Rpb24gKGRleSlcbntcbiAgdGhpcy5sZGV2aWNlRXh0WSA9IGRleTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS50cmFuc2Zvcm1YID0gZnVuY3Rpb24gKHgpXG57XG4gIHZhciB4RGV2aWNlID0gMC4wO1xuICB2YXIgd29ybGRFeHRYID0gdGhpcy5sd29ybGRFeHRYO1xuICBpZiAod29ybGRFeHRYICE9IDAuMClcbiAge1xuICAgIHhEZXZpY2UgPSB0aGlzLmxkZXZpY2VPcmdYICtcbiAgICAgICAgICAgICgoeCAtIHRoaXMubHdvcmxkT3JnWCkgKiB0aGlzLmxkZXZpY2VFeHRYIC8gd29ybGRFeHRYKTtcbiAgfVxuXG4gIHJldHVybiB4RGV2aWNlO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnRyYW5zZm9ybVkgPSBmdW5jdGlvbiAoeSlcbntcbiAgdmFyIHlEZXZpY2UgPSAwLjA7XG4gIHZhciB3b3JsZEV4dFkgPSB0aGlzLmx3b3JsZEV4dFk7XG4gIGlmICh3b3JsZEV4dFkgIT0gMC4wKVxuICB7XG4gICAgeURldmljZSA9IHRoaXMubGRldmljZU9yZ1kgK1xuICAgICAgICAgICAgKCh5IC0gdGhpcy5sd29ybGRPcmdZKSAqIHRoaXMubGRldmljZUV4dFkgLyB3b3JsZEV4dFkpO1xuICB9XG5cblxuICByZXR1cm4geURldmljZTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtWCA9IGZ1bmN0aW9uICh4KVxue1xuICB2YXIgeFdvcmxkID0gMC4wO1xuICB2YXIgZGV2aWNlRXh0WCA9IHRoaXMubGRldmljZUV4dFg7XG4gIGlmIChkZXZpY2VFeHRYICE9IDAuMClcbiAge1xuICAgIHhXb3JsZCA9IHRoaXMubHdvcmxkT3JnWCArXG4gICAgICAgICAgICAoKHggLSB0aGlzLmxkZXZpY2VPcmdYKSAqIHRoaXMubHdvcmxkRXh0WCAvIGRldmljZUV4dFgpO1xuICB9XG5cblxuICByZXR1cm4geFdvcmxkO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmludmVyc2VUcmFuc2Zvcm1ZID0gZnVuY3Rpb24gKHkpXG57XG4gIHZhciB5V29ybGQgPSAwLjA7XG4gIHZhciBkZXZpY2VFeHRZID0gdGhpcy5sZGV2aWNlRXh0WTtcbiAgaWYgKGRldmljZUV4dFkgIT0gMC4wKVxuICB7XG4gICAgeVdvcmxkID0gdGhpcy5sd29ybGRPcmdZICtcbiAgICAgICAgICAgICgoeSAtIHRoaXMubGRldmljZU9yZ1kpICogdGhpcy5sd29ybGRFeHRZIC8gZGV2aWNlRXh0WSk7XG4gIH1cbiAgcmV0dXJuIHlXb3JsZDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtUG9pbnQgPSBmdW5jdGlvbiAoaW5Qb2ludClcbntcbiAgdmFyIG91dFBvaW50ID1cbiAgICAgICAgICBuZXcgUG9pbnREKHRoaXMuaW52ZXJzZVRyYW5zZm9ybVgoaW5Qb2ludC54KSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuaW52ZXJzZVRyYW5zZm9ybVkoaW5Qb2ludC55KSk7XG4gIHJldHVybiBvdXRQb2ludDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc2Zvcm07XG4iLCJmdW5jdGlvbiBVbmlxdWVJREdlbmVyZXRvcigpIHtcbn1cblxuVW5pcXVlSURHZW5lcmV0b3IubGFzdElEID0gMDtcblxuVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmIChVbmlxdWVJREdlbmVyZXRvci5pc1ByaW1pdGl2ZShvYmopKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICBpZiAob2JqLnVuaXF1ZUlEICE9IG51bGwpIHtcbiAgICByZXR1cm4gb2JqLnVuaXF1ZUlEO1xuICB9XG4gIG9iai51bmlxdWVJRCA9IFVuaXF1ZUlER2VuZXJldG9yLmdldFN0cmluZygpO1xuICBVbmlxdWVJREdlbmVyZXRvci5sYXN0SUQrKztcbiAgcmV0dXJuIG9iai51bmlxdWVJRDtcbn1cblxuVW5pcXVlSURHZW5lcmV0b3IuZ2V0U3RyaW5nID0gZnVuY3Rpb24gKGlkKSB7XG4gIGlmIChpZCA9PSBudWxsKVxuICAgIGlkID0gVW5pcXVlSURHZW5lcmV0b3IubGFzdElEO1xuICByZXR1cm4gXCJPYmplY3QjXCIgKyBpZCArIFwiXCI7XG59XG5cblVuaXF1ZUlER2VuZXJldG9yLmlzUHJpbWl0aXZlID0gZnVuY3Rpb24gKGFyZykge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBhcmc7XG4gIHJldHVybiBhcmcgPT0gbnVsbCB8fCAodHlwZSAhPSBcIm9iamVjdFwiICYmIHR5cGUgIT0gXCJmdW5jdGlvblwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbmlxdWVJREdlbmVyZXRvcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIERpbWVuc2lvbkQgPSByZXF1aXJlKCcuL0RpbWVuc2lvbkQnKTtcbnZhciBIYXNoTWFwID0gcmVxdWlyZSgnLi9IYXNoTWFwJyk7XG52YXIgSGFzaFNldCA9IHJlcXVpcmUoJy4vSGFzaFNldCcpO1xudmFyIElHZW9tZXRyeSA9IHJlcXVpcmUoJy4vSUdlb21ldHJ5Jyk7XG52YXIgSU1hdGggPSByZXF1aXJlKCcuL0lNYXRoJyk7XG52YXIgSW50ZWdlciA9IHJlcXVpcmUoJy4vSW50ZWdlcicpO1xudmFyIFBvaW50ID0gcmVxdWlyZSgnLi9Qb2ludCcpO1xudmFyIFBvaW50RCA9IHJlcXVpcmUoJy4vUG9pbnREJyk7XG52YXIgUmFuZG9tU2VlZCA9IHJlcXVpcmUoJy4vUmFuZG9tU2VlZCcpO1xudmFyIFJlY3RhbmdsZUQgPSByZXF1aXJlKCcuL1JlY3RhbmdsZUQnKTtcbnZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL1RyYW5zZm9ybScpO1xudmFyIFVuaXF1ZUlER2VuZXJldG9yID0gcmVxdWlyZSgnLi9VbmlxdWVJREdlbmVyZXRvcicpO1xudmFyIExHcmFwaE9iamVjdCA9IHJlcXVpcmUoJy4vTEdyYXBoT2JqZWN0Jyk7XG52YXIgTEdyYXBoID0gcmVxdWlyZSgnLi9MR3JhcGgnKTtcbnZhciBMRWRnZSA9IHJlcXVpcmUoJy4vTEVkZ2UnKTtcbnZhciBMR3JhcGhNYW5hZ2VyID0gcmVxdWlyZSgnLi9MR3JhcGhNYW5hZ2VyJyk7XG52YXIgTE5vZGUgPSByZXF1aXJlKCcuL0xOb2RlJyk7XG52YXIgTGF5b3V0ID0gcmVxdWlyZSgnLi9MYXlvdXQnKTtcbnZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0xheW91dENvbnN0YW50cycpO1xudmFyIEZETGF5b3V0ID0gcmVxdWlyZSgnLi9GRExheW91dCcpO1xudmFyIEZETGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9GRExheW91dENvbnN0YW50cycpO1xudmFyIEZETGF5b3V0RWRnZSA9IHJlcXVpcmUoJy4vRkRMYXlvdXRFZGdlJyk7XG52YXIgRkRMYXlvdXROb2RlID0gcmVxdWlyZSgnLi9GRExheW91dE5vZGUnKTtcbnZhciBDb1NFQ29uc3RhbnRzID0gcmVxdWlyZSgnLi9Db1NFQ29uc3RhbnRzJyk7XG52YXIgQ29TRUVkZ2UgPSByZXF1aXJlKCcuL0NvU0VFZGdlJyk7XG52YXIgQ29TRUdyYXBoID0gcmVxdWlyZSgnLi9Db1NFR3JhcGgnKTtcbnZhciBDb1NFR3JhcGhNYW5hZ2VyID0gcmVxdWlyZSgnLi9Db1NFR3JhcGhNYW5hZ2VyJyk7XG52YXIgQ29TRUxheW91dCA9IHJlcXVpcmUoJy4vQ29TRUxheW91dCcpO1xudmFyIENvU0VOb2RlID0gcmVxdWlyZSgnLi9Db1NFTm9kZScpO1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gIC8vIENhbGxlZCBvbiBgbGF5b3V0cmVhZHlgXG4gIHJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gIH0sXG4gIC8vIENhbGxlZCBvbiBgbGF5b3V0c3RvcGBcbiAgc3RvcDogZnVuY3Rpb24gKCkge1xuICB9LFxuICAvLyBpbmNsdWRlIGxhYmVscyBpbiBub2RlIGRpbWVuc2lvbnNcbiAgbm9kZURpbWVuc2lvbnNJbmNsdWRlTGFiZWxzOiBmYWxzZSxcbiAgLy8gbnVtYmVyIG9mIHRpY2tzIHBlciBmcmFtZTsgaGlnaGVyIGlzIGZhc3RlciBidXQgbW9yZSBqZXJreVxuICByZWZyZXNoOiAzMCxcbiAgLy8gV2hldGhlciB0byBmaXQgdGhlIG5ldHdvcmsgdmlldyBhZnRlciB3aGVuIGRvbmVcbiAgZml0OiB0cnVlLFxuICAvLyBQYWRkaW5nIG9uIGZpdFxuICBwYWRkaW5nOiAxMCxcbiAgLy8gV2hldGhlciB0byBlbmFibGUgaW5jcmVtZW50YWwgbW9kZVxuICByYW5kb21pemU6IHRydWUsXG4gIC8vIE5vZGUgcmVwdWxzaW9uIChub24gb3ZlcmxhcHBpbmcpIG11bHRpcGxpZXJcbiAgbm9kZVJlcHVsc2lvbjogNDUwMCxcbiAgLy8gSWRlYWwgZWRnZSAobm9uIG5lc3RlZCkgbGVuZ3RoXG4gIGlkZWFsRWRnZUxlbmd0aDogNTAsXG4gIC8vIERpdmlzb3IgdG8gY29tcHV0ZSBlZGdlIGZvcmNlc1xuICBlZGdlRWxhc3RpY2l0eTogMC40NSxcbiAgLy8gTmVzdGluZyBmYWN0b3IgKG11bHRpcGxpZXIpIHRvIGNvbXB1dGUgaWRlYWwgZWRnZSBsZW5ndGggZm9yIG5lc3RlZCBlZGdlc1xuICBuZXN0aW5nRmFjdG9yOiAwLjEsXG4gIC8vIEdyYXZpdHkgZm9yY2UgKGNvbnN0YW50KVxuICBncmF2aXR5OiAwLjI1LFxuICAvLyBNYXhpbXVtIG51bWJlciBvZiBpdGVyYXRpb25zIHRvIHBlcmZvcm1cbiAgbnVtSXRlcjogMjUwMCxcbiAgLy8gRm9yIGVuYWJsaW5nIHRpbGluZ1xuICB0aWxlOiB0cnVlLFxuICAvLyBUeXBlIG9mIGxheW91dCBhbmltYXRpb24uIFRoZSBvcHRpb24gc2V0IGlzIHsnZHVyaW5nJywgJ2VuZCcsIGZhbHNlfVxuICBhbmltYXRlOiAnZW5kJyxcbiAgLy8gRHVyYXRpb24gZm9yIGFuaW1hdGU6ZW5kXG4gIGFuaW1hdGlvbkR1cmF0aW9uOiA1MDAsXG4gIC8vIFJlcHJlc2VudHMgdGhlIGFtb3VudCBvZiB0aGUgdmVydGljYWwgc3BhY2UgdG8gcHV0IGJldHdlZW4gdGhlIHplcm8gZGVncmVlIG1lbWJlcnMgZHVyaW5nIHRoZSB0aWxpbmcgb3BlcmF0aW9uKGNhbiBhbHNvIGJlIGEgZnVuY3Rpb24pXG4gIHRpbGluZ1BhZGRpbmdWZXJ0aWNhbDogMTAsXG4gIC8vIFJlcHJlc2VudHMgdGhlIGFtb3VudCBvZiB0aGUgaG9yaXpvbnRhbCBzcGFjZSB0byBwdXQgYmV0d2VlbiB0aGUgemVybyBkZWdyZWUgbWVtYmVycyBkdXJpbmcgdGhlIHRpbGluZyBvcGVyYXRpb24oY2FuIGFsc28gYmUgYSBmdW5jdGlvbilcbiAgdGlsaW5nUGFkZGluZ0hvcml6b250YWw6IDEwLFxuICAvLyBHcmF2aXR5IHJhbmdlIChjb25zdGFudCkgZm9yIGNvbXBvdW5kc1xuICBncmF2aXR5UmFuZ2VDb21wb3VuZDogMS41LFxuICAvLyBHcmF2aXR5IGZvcmNlIChjb25zdGFudCkgZm9yIGNvbXBvdW5kc1xuICBncmF2aXR5Q29tcG91bmQ6IDEuMCxcbiAgLy8gR3Jhdml0eSByYW5nZSAoY29uc3RhbnQpXG4gIGdyYXZpdHlSYW5nZTogMy44LFxuICAvLyBJbml0aWFsIGNvb2xpbmcgZmFjdG9yIGZvciBpbmNyZW1lbnRhbCBsYXlvdXRcbiAgaW5pdGlhbEVuZXJneU9uSW5jcmVtZW50YWw6IDAuNVxufTtcblxuZnVuY3Rpb24gZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKSB7XG4gIHZhciBvYmogPSB7fTtcblxuICBmb3IgKHZhciBpIGluIGRlZmF1bHRzKSB7XG4gICAgb2JqW2ldID0gZGVmYXVsdHNbaV07XG4gIH1cblxuICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICBvYmpbaV0gPSBvcHRpb25zW2ldO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbmZ1bmN0aW9uIF9Db1NFTGF5b3V0KF9vcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IGV4dGVuZChkZWZhdWx0cywgX29wdGlvbnMpO1xuICBnZXRVc2VyT3B0aW9ucyh0aGlzLm9wdGlvbnMpO1xufVxuXG52YXIgZ2V0VXNlck9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5ub2RlUmVwdWxzaW9uICE9IG51bGwpXG4gICAgQ29TRUNvbnN0YW50cy5ERUZBVUxUX1JFUFVMU0lPTl9TVFJFTkdUSCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUkVQVUxTSU9OX1NUUkVOR1RIID0gb3B0aW9ucy5ub2RlUmVwdWxzaW9uO1xuICBpZiAob3B0aW9ucy5pZGVhbEVkZ2VMZW5ndGggIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIID0gb3B0aW9ucy5pZGVhbEVkZ2VMZW5ndGg7XG4gIGlmIChvcHRpb25zLmVkZ2VFbGFzdGljaXR5ICE9IG51bGwpXG4gICAgQ29TRUNvbnN0YW50cy5ERUZBVUxUX1NQUklOR19TVFJFTkdUSCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfU1BSSU5HX1NUUkVOR1RIID0gb3B0aW9ucy5lZGdlRWxhc3RpY2l0eTtcbiAgaWYgKG9wdGlvbnMubmVzdGluZ0ZhY3RvciAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuUEVSX0xFVkVMX0lERUFMX0VER0VfTEVOR1RIX0ZBQ1RPUiA9IEZETGF5b3V0Q29uc3RhbnRzLlBFUl9MRVZFTF9JREVBTF9FREdFX0xFTkdUSF9GQUNUT1IgPSBvcHRpb25zLm5lc3RpbmdGYWN0b3I7XG4gIGlmIChvcHRpb25zLmdyYXZpdHkgIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9TVFJFTkdUSCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9TVFJFTkdUSCA9IG9wdGlvbnMuZ3Jhdml0eTtcbiAgaWYgKG9wdGlvbnMubnVtSXRlciAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuTUFYX0lURVJBVElPTlMgPSBGRExheW91dENvbnN0YW50cy5NQVhfSVRFUkFUSU9OUyA9IG9wdGlvbnMubnVtSXRlcjtcbiAgaWYgKG9wdGlvbnMuZ3Jhdml0eVJhbmdlICE9IG51bGwpXG4gICAgQ29TRUNvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiA9IG9wdGlvbnMuZ3Jhdml0eVJhbmdlO1xuICBpZihvcHRpb25zLmdyYXZpdHlDb21wb3VuZCAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1NUUkVOR1RIID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1NUUkVOR1RIID0gb3B0aW9ucy5ncmF2aXR5Q29tcG91bmQ7XG4gIGlmKG9wdGlvbnMuZ3Jhdml0eVJhbmdlQ29tcG91bmQgIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfUkFOR0VfRkFDVE9SID0gb3B0aW9ucy5ncmF2aXR5UmFuZ2VDb21wb3VuZDtcbiAgaWYgKG9wdGlvbnMuaW5pdGlhbEVuZXJneU9uSW5jcmVtZW50YWwgIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUwgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMID0gb3B0aW9ucy5pbml0aWFsRW5lcmd5T25JbmNyZW1lbnRhbDtcblxuICBDb1NFQ29uc3RhbnRzLk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyA9IEZETGF5b3V0Q29uc3RhbnRzLk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyA9IExheW91dENvbnN0YW50cy5OT0RFX0RJTUVOU0lPTlNfSU5DTFVERV9MQUJFTFMgPSBvcHRpb25zLm5vZGVEaW1lbnNpb25zSW5jbHVkZUxhYmVscztcbiAgQ29TRUNvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9JTkNSRU1FTlRBTCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMID1cbiAgICAgICAgICAhKG9wdGlvbnMucmFuZG9taXplKTtcbiAgQ29TRUNvbnN0YW50cy5BTklNQVRFID0gRkRMYXlvdXRDb25zdGFudHMuQU5JTUFURSA9IExheW91dENvbnN0YW50cy5BTklNQVRFID0gb3B0aW9ucy5hbmltYXRlO1xuICBDb1NFQ29uc3RhbnRzLlRJTEUgPSBvcHRpb25zLnRpbGU7XG4gIENvU0VDb25zdGFudHMuVElMSU5HX1BBRERJTkdfVkVSVElDQUwgPSBcbiAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy50aWxpbmdQYWRkaW5nVmVydGljYWwgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnRpbGluZ1BhZGRpbmdWZXJ0aWNhbC5jYWxsKCkgOiBvcHRpb25zLnRpbGluZ1BhZGRpbmdWZXJ0aWNhbDtcbiAgQ29TRUNvbnN0YW50cy5USUxJTkdfUEFERElOR19IT1JJWk9OVEFMID0gXG4gICAgICAgICAgdHlwZW9mIG9wdGlvbnMudGlsaW5nUGFkZGluZ0hvcml6b250YWwgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnRpbGluZ1BhZGRpbmdIb3Jpem9udGFsLmNhbGwoKSA6IG9wdGlvbnMudGlsaW5nUGFkZGluZ0hvcml6b250YWw7XG59O1xuXG5fQ29TRUxheW91dC5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcmVhZHk7XG4gIHZhciBmcmFtZUlkO1xuICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgdmFyIGlkVG9MTm9kZSA9IHRoaXMuaWRUb0xOb2RlID0ge307XG4gIHZhciBsYXlvdXQgPSB0aGlzLmxheW91dCA9IG5ldyBDb1NFTGF5b3V0KCk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgXG4gIHNlbGYuc3RvcHBlZCA9IGZhbHNlO1xuXG4gIHRoaXMuY3kgPSB0aGlzLm9wdGlvbnMuY3k7XG5cbiAgdGhpcy5jeS50cmlnZ2VyKHsgdHlwZTogJ2xheW91dHN0YXJ0JywgbGF5b3V0OiB0aGlzIH0pO1xuXG4gIHZhciBnbSA9IGxheW91dC5uZXdHcmFwaE1hbmFnZXIoKTtcbiAgdGhpcy5nbSA9IGdtO1xuXG4gIHZhciBub2RlcyA9IHRoaXMub3B0aW9ucy5lbGVzLm5vZGVzKCk7XG4gIHZhciBlZGdlcyA9IHRoaXMub3B0aW9ucy5lbGVzLmVkZ2VzKCk7XG5cbiAgdGhpcy5yb290ID0gZ20uYWRkUm9vdCgpO1xuICB0aGlzLnByb2Nlc3NDaGlsZHJlbkxpc3QodGhpcy5yb290LCB0aGlzLmdldFRvcE1vc3ROb2Rlcyhub2RlcyksIGxheW91dCk7XG5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVkZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGVkZ2UgPSBlZGdlc1tpXTtcbiAgICB2YXIgc291cmNlTm9kZSA9IHRoaXMuaWRUb0xOb2RlW2VkZ2UuZGF0YShcInNvdXJjZVwiKV07XG4gICAgdmFyIHRhcmdldE5vZGUgPSB0aGlzLmlkVG9MTm9kZVtlZGdlLmRhdGEoXCJ0YXJnZXRcIildO1xuICAgIGlmKHNvdXJjZU5vZGUuZ2V0RWRnZXNCZXR3ZWVuKHRhcmdldE5vZGUpLmxlbmd0aCA9PSAwKXtcbiAgICAgIHZhciBlMSA9IGdtLmFkZChsYXlvdXQubmV3RWRnZSgpLCBzb3VyY2VOb2RlLCB0YXJnZXROb2RlKTtcbiAgICAgIGUxLmlkID0gZWRnZS5pZCgpO1xuICAgIH1cbiAgfVxuICBcbiAgIHZhciBnZXRQb3NpdGlvbnMgPSBmdW5jdGlvbihlbGUsIGkpe1xuICAgIGlmKHR5cGVvZiBlbGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGVsZSA9IGk7XG4gICAgfVxuICAgIHZhciB0aGVJZCA9IGVsZS5kYXRhKCdpZCcpO1xuICAgIHZhciBsTm9kZSA9IHNlbGYuaWRUb0xOb2RlW3RoZUlkXTtcblxuICAgIHJldHVybiB7XG4gICAgICB4OiBsTm9kZS5nZXRSZWN0KCkuZ2V0Q2VudGVyWCgpLFxuICAgICAgeTogbE5vZGUuZ2V0UmVjdCgpLmdldENlbnRlclkoKVxuICAgIH07XG4gIH07XG4gIFxuICAvKlxuICAgKiBSZXBvc2l0aW9uIG5vZGVzIGluIGl0ZXJhdGlvbnMgYW5pbWF0ZWRseVxuICAgKi9cbiAgdmFyIGl0ZXJhdGVBbmltYXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUaGlncyB0byBwZXJmb3JtIGFmdGVyIG5vZGVzIGFyZSByZXBvc2l0aW9uZWQgb24gc2NyZWVuXG4gICAgdmFyIGFmdGVyUmVwb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKG9wdGlvbnMuZml0KSB7XG4gICAgICAgIG9wdGlvbnMuY3kuZml0KG9wdGlvbnMuZWxlcy5ub2RlcygpLCBvcHRpb25zLnBhZGRpbmcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXJlYWR5KSB7XG4gICAgICAgIHJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgc2VsZi5jeS5vbmUoJ2xheW91dHJlYWR5Jywgb3B0aW9ucy5yZWFkeSk7XG4gICAgICAgIHNlbGYuY3kudHJpZ2dlcih7dHlwZTogJ2xheW91dHJlYWR5JywgbGF5b3V0OiBzZWxmfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICB2YXIgdGlja3NQZXJGcmFtZSA9IHNlbGYub3B0aW9ucy5yZWZyZXNoO1xuICAgIHZhciBpc0RvbmU7XG5cbiAgICBmb3IoIHZhciBpID0gMDsgaSA8IHRpY2tzUGVyRnJhbWUgJiYgIWlzRG9uZTsgaSsrICl7XG4gICAgICBpc0RvbmUgPSBzZWxmLnN0b3BwZWQgfHwgc2VsZi5sYXlvdXQudGljaygpO1xuICAgIH1cbiAgICBcbiAgICAvLyBJZiBsYXlvdXQgaXMgZG9uZVxuICAgIGlmIChpc0RvbmUpIHtcbiAgICAgIC8vIElmIHRoZSBsYXlvdXQgaXMgbm90IGEgc3VibGF5b3V0IGFuZCBpdCBpcyBzdWNjZXNzZnVsIHBlcmZvcm0gcG9zdCBsYXlvdXQuXG4gICAgICBpZiAobGF5b3V0LmNoZWNrTGF5b3V0U3VjY2VzcygpICYmICFsYXlvdXQuaXNTdWJMYXlvdXQpIHtcbiAgICAgICAgbGF5b3V0LmRvUG9zdExheW91dCgpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBJZiBsYXlvdXQgaGFzIGEgdGlsaW5nUG9zdExheW91dCBmdW5jdGlvbiBwcm9wZXJ0eSBjYWxsIGl0LlxuICAgICAgaWYgKGxheW91dC50aWxpbmdQb3N0TGF5b3V0KSB7XG4gICAgICAgIGxheW91dC50aWxpbmdQb3N0TGF5b3V0KCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGxheW91dC5pc0xheW91dEZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgIFxuICAgICAgc2VsZi5vcHRpb25zLmVsZXMubm9kZXMoKS5wb3NpdGlvbnMoZ2V0UG9zaXRpb25zKTtcbiAgICAgIFxuICAgICAgYWZ0ZXJSZXBvc2l0aW9uKCk7XG4gICAgICBcbiAgICAgIC8vIHRyaWdnZXIgbGF5b3V0c3RvcCB3aGVuIHRoZSBsYXlvdXQgc3RvcHMgKGUuZy4gZmluaXNoZXMpXG4gICAgICBzZWxmLmN5Lm9uZSgnbGF5b3V0c3RvcCcsIHNlbGYub3B0aW9ucy5zdG9wKTtcbiAgICAgIHNlbGYuY3kudHJpZ2dlcih7IHR5cGU6ICdsYXlvdXRzdG9wJywgbGF5b3V0OiBzZWxmIH0pO1xuXG4gICAgICBpZiAoZnJhbWVJZCkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZUlkKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcmVhZHkgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdmFyIGFuaW1hdGlvbkRhdGEgPSBzZWxmLmxheW91dC5nZXRQb3NpdGlvbnNEYXRhKCk7IC8vIEdldCBwb3NpdGlvbnMgb2YgbGF5b3V0IG5vZGVzIG5vdGUgdGhhdCBhbGwgbm9kZXMgbWF5IG5vdCBiZSBsYXlvdXQgbm9kZXMgYmVjYXVzZSBvZiB0aWxpbmdcbiAgICBcbiAgICAvLyBQb3NpdGlvbiBub2RlcywgZm9yIHRoZSBub2RlcyB3aG9zZSBpZCBkb2VzIG5vdCBpbmNsdWRlZCBpbiBkYXRhIChiZWNhdXNlIHRoZXkgYXJlIHJlbW92ZWQgZnJvbSB0aGVpciBwYXJlbnRzIGFuZCBpbmNsdWRlZCBpbiBkdW1teSBjb21wb3VuZHMpXG4gICAgLy8gdXNlIHBvc2l0aW9uIG9mIHRoZWlyIGFuY2VzdG9ycyBvciBkdW1teSBhbmNlc3RvcnNcbiAgICBvcHRpb25zLmVsZXMubm9kZXMoKS5wb3NpdGlvbnMoZnVuY3Rpb24gKGVsZSwgaSkge1xuICAgICAgaWYgKHR5cGVvZiBlbGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgZWxlID0gaTtcbiAgICAgIH1cbiAgICAgIHZhciB0aGVJZCA9IGVsZS5pZCgpO1xuICAgICAgdmFyIHBOb2RlID0gYW5pbWF0aW9uRGF0YVt0aGVJZF07XG4gICAgICB2YXIgdGVtcCA9IGVsZTtcbiAgICAgIC8vIElmIHBOb2RlIGlzIHVuZGVmaW5lZCBzZWFyY2ggdW50aWwgZmluZGluZyBwb3NpdGlvbiBkYXRhIG9mIGl0cyBmaXJzdCBhbmNlc3RvciAoSXQgbWF5IGJlIGR1bW15IGFzIHdlbGwpXG4gICAgICB3aGlsZSAocE5vZGUgPT0gbnVsbCkge1xuICAgICAgICBwTm9kZSA9IGFuaW1hdGlvbkRhdGFbdGVtcC5kYXRhKCdwYXJlbnQnKV0gfHwgYW5pbWF0aW9uRGF0YVsnRHVtbXlDb21wb3VuZF8nICsgdGVtcC5kYXRhKCdwYXJlbnQnKV07XG4gICAgICAgIGFuaW1hdGlvbkRhdGFbdGhlSWRdID0gcE5vZGU7XG4gICAgICAgIHRlbXAgPSB0ZW1wLnBhcmVudCgpWzBdO1xuICAgICAgICBpZih0ZW1wID09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHBOb2RlICE9IG51bGwpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IHBOb2RlLngsXG4gICAgICAgICAgeTogcE5vZGUueVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB4OiBlbGUueCxcbiAgICAgICAgICB5OiBlbGUueVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYWZ0ZXJSZXBvc2l0aW9uKCk7XG5cbiAgICBmcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGl0ZXJhdGVBbmltYXRlZCk7XG4gIH07XG4gIFxuICAvKlxuICAqIExpc3RlbiAnbGF5b3V0c3RhcnRlZCcgZXZlbnQgYW5kIHN0YXJ0IGFuaW1hdGVkIGl0ZXJhdGlvbiBpZiBhbmltYXRlIG9wdGlvbiBpcyAnZHVyaW5nJ1xuICAqL1xuICBsYXlvdXQuYWRkTGlzdGVuZXIoJ2xheW91dHN0YXJ0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNlbGYub3B0aW9ucy5hbmltYXRlID09PSAnZHVyaW5nJykge1xuICAgICAgZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShpdGVyYXRlQW5pbWF0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFxuICBsYXlvdXQucnVuTGF5b3V0KCk7IC8vIFJ1biBjb3NlIGxheW91dFxuICBcbiAgLypcbiAgICogSWYgYW5pbWF0ZSBvcHRpb24gaXMgbm90ICdkdXJpbmcnICgnZW5kJyBvciBmYWxzZSkgcGVyZm9ybSB0aGVzZSBoZXJlIChJZiBpdCBpcyAnZHVyaW5nJyBzaW1pbGFyIHRoaW5ncyBhcmUgYWxyZWFkeSBwZXJmb3JtZWQpXG4gICAqL1xuICBpZih0aGlzLm9wdGlvbnMuYW5pbWF0ZSAhPT0gXCJkdXJpbmdcIil7XG4gICAgc2VsZi5vcHRpb25zLmVsZXMubm9kZXMoKS5ub3QoXCI6cGFyZW50XCIpLmxheW91dFBvc2l0aW9ucyhzZWxmLCBzZWxmLm9wdGlvbnMsIGdldFBvc2l0aW9ucyk7IC8vIFVzZSBsYXlvdXQgcG9zaXRpb25zIHRvIHJlcG9zaXRpb24gdGhlIG5vZGVzIGl0IGNvbnNpZGVycyB0aGUgb3B0aW9ucyBwYXJhbWV0ZXJcbiAgICByZWFkeSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7IC8vIGNoYWluaW5nXG59O1xuXG4vL0dldCB0aGUgdG9wIG1vc3Qgb25lcyBvZiBhIGxpc3Qgb2Ygbm9kZXNcbl9Db1NFTGF5b3V0LnByb3RvdHlwZS5nZXRUb3BNb3N0Tm9kZXMgPSBmdW5jdGlvbihub2Rlcykge1xuICB2YXIgbm9kZXNNYXAgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbm9kZXNNYXBbbm9kZXNbaV0uaWQoKV0gPSB0cnVlO1xuICB9XG4gIHZhciByb290cyA9IG5vZGVzLmZpbHRlcihmdW5jdGlvbiAoZWxlLCBpKSB7XG4gICAgICBpZih0eXBlb2YgZWxlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGVsZSA9IGk7XG4gICAgICB9XG4gICAgICB2YXIgcGFyZW50ID0gZWxlLnBhcmVudCgpWzBdO1xuICAgICAgd2hpbGUocGFyZW50ICE9IG51bGwpe1xuICAgICAgICBpZihub2Rlc01hcFtwYXJlbnQuaWQoKV0pe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50KClbMF07XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJvb3RzO1xufTtcblxuX0NvU0VMYXlvdXQucHJvdG90eXBlLnByb2Nlc3NDaGlsZHJlbkxpc3QgPSBmdW5jdGlvbiAocGFyZW50LCBjaGlsZHJlbiwgbGF5b3V0KSB7XG4gIHZhciBzaXplID0gY2hpbGRyZW4ubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgIHZhciB0aGVDaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgIHZhciBjaGlsZHJlbl9vZl9jaGlsZHJlbiA9IHRoZUNoaWxkLmNoaWxkcmVuKCk7XG4gICAgdmFyIHRoZU5vZGU7ICAgIFxuXG4gICAgdmFyIGRpbWVuc2lvbnMgPSB0aGVDaGlsZC5sYXlvdXREaW1lbnNpb25zKHtcbiAgICAgIG5vZGVEaW1lbnNpb25zSW5jbHVkZUxhYmVsczogdGhpcy5vcHRpb25zLm5vZGVEaW1lbnNpb25zSW5jbHVkZUxhYmVsc1xuICAgIH0pO1xuXG4gICAgaWYgKHRoZUNoaWxkLm91dGVyV2lkdGgoKSAhPSBudWxsXG4gICAgICAgICAgICAmJiB0aGVDaGlsZC5vdXRlckhlaWdodCgpICE9IG51bGwpIHtcbiAgICAgIHRoZU5vZGUgPSBwYXJlbnQuYWRkKG5ldyBDb1NFTm9kZShsYXlvdXQuZ3JhcGhNYW5hZ2VyLFxuICAgICAgICAgICAgICBuZXcgUG9pbnREKHRoZUNoaWxkLnBvc2l0aW9uKCd4JykgLSBkaW1lbnNpb25zLncgLyAyLCB0aGVDaGlsZC5wb3NpdGlvbigneScpIC0gZGltZW5zaW9ucy5oIC8gMiksXG4gICAgICAgICAgICAgIG5ldyBEaW1lbnNpb25EKHBhcnNlRmxvYXQoZGltZW5zaW9ucy53KSwgcGFyc2VGbG9hdChkaW1lbnNpb25zLmgpKSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoZU5vZGUgPSBwYXJlbnQuYWRkKG5ldyBDb1NFTm9kZSh0aGlzLmdyYXBoTWFuYWdlcikpO1xuICAgIH1cbiAgICAvLyBBdHRhY2ggaWQgdG8gdGhlIGxheW91dCBub2RlXG4gICAgdGhlTm9kZS5pZCA9IHRoZUNoaWxkLmRhdGEoXCJpZFwiKTtcbiAgICAvLyBBdHRhY2ggdGhlIHBhZGRpbmdzIG9mIGN5IG5vZGUgdG8gbGF5b3V0IG5vZGVcbiAgICB0aGVOb2RlLnBhZGRpbmdMZWZ0ID0gcGFyc2VJbnQoIHRoZUNoaWxkLmNzcygncGFkZGluZycpICk7XG4gICAgdGhlTm9kZS5wYWRkaW5nVG9wID0gcGFyc2VJbnQoIHRoZUNoaWxkLmNzcygncGFkZGluZycpICk7XG4gICAgdGhlTm9kZS5wYWRkaW5nUmlnaHQgPSBwYXJzZUludCggdGhlQ2hpbGQuY3NzKCdwYWRkaW5nJykgKTtcbiAgICB0aGVOb2RlLnBhZGRpbmdCb3R0b20gPSBwYXJzZUludCggdGhlQ2hpbGQuY3NzKCdwYWRkaW5nJykgKTtcbiAgICBcbiAgICAvL0F0dGFjaCB0aGUgbGFiZWwgcHJvcGVydGllcyB0byBjb21wb3VuZCBpZiBsYWJlbHMgd2lsbCBiZSBpbmNsdWRlZCBpbiBub2RlIGRpbWVuc2lvbnMgIFxuICAgIGlmKHRoaXMub3B0aW9ucy5ub2RlRGltZW5zaW9uc0luY2x1ZGVMYWJlbHMpe1xuICAgICAgaWYodGhlQ2hpbGQuaXNQYXJlbnQoKSl7XG4gICAgICAgICAgdmFyIGxhYmVsV2lkdGggPSB0aGVDaGlsZC5ib3VuZGluZ0JveCh7IGluY2x1ZGVMYWJlbHM6IHRydWUsIGluY2x1ZGVOb2RlczogZmFsc2UgfSkudzsgICAgICAgICAgXG4gICAgICAgICAgdmFyIGxhYmVsSGVpZ2h0ID0gdGhlQ2hpbGQuYm91bmRpbmdCb3goeyBpbmNsdWRlTGFiZWxzOiB0cnVlLCBpbmNsdWRlTm9kZXM6IGZhbHNlIH0pLmg7XG4gICAgICAgICAgdmFyIGxhYmVsUG9zID0gdGhlQ2hpbGQuY3NzKFwidGV4dC1oYWxpZ25cIik7XG4gICAgICAgICAgdGhlTm9kZS5sYWJlbFdpZHRoID0gbGFiZWxXaWR0aDtcbiAgICAgICAgICB0aGVOb2RlLmxhYmVsSGVpZ2h0ID0gbGFiZWxIZWlnaHQ7XG4gICAgICAgICAgdGhlTm9kZS5sYWJlbFBvcyA9IGxhYmVsUG9zO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBNYXAgdGhlIGxheW91dCBub2RlXG4gICAgdGhpcy5pZFRvTE5vZGVbdGhlQ2hpbGQuZGF0YShcImlkXCIpXSA9IHRoZU5vZGU7XG5cbiAgICBpZiAoaXNOYU4odGhlTm9kZS5yZWN0LngpKSB7XG4gICAgICB0aGVOb2RlLnJlY3QueCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGlzTmFOKHRoZU5vZGUucmVjdC55KSkge1xuICAgICAgdGhlTm9kZS5yZWN0LnkgPSAwO1xuICAgIH1cblxuICAgIGlmIChjaGlsZHJlbl9vZl9jaGlsZHJlbiAhPSBudWxsICYmIGNoaWxkcmVuX29mX2NoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciB0aGVOZXdHcmFwaDtcbiAgICAgIHRoZU5ld0dyYXBoID0gbGF5b3V0LmdldEdyYXBoTWFuYWdlcigpLmFkZChsYXlvdXQubmV3R3JhcGgoKSwgdGhlTm9kZSk7XG4gICAgICB0aGlzLnByb2Nlc3NDaGlsZHJlbkxpc3QodGhlTmV3R3JhcGgsIGNoaWxkcmVuX29mX2NoaWxkcmVuLCBsYXlvdXQpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBAYnJpZWYgOiBjYWxsZWQgb24gY29udGludW91cyBsYXlvdXRzIHRvIHN0b3AgdGhlbSBiZWZvcmUgdGhleSBmaW5pc2hcbiAqL1xuX0NvU0VMYXlvdXQucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuc3RvcHBlZCA9IHRydWU7XG5cbiAgcmV0dXJuIHRoaXM7IC8vIGNoYWluaW5nXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldChjeXRvc2NhcGUpIHtcbiAgcmV0dXJuIF9Db1NFTGF5b3V0O1xufTtcbiIsInZhciBDb1NFTm9kZSA9IHJlcXVpcmUoJy4uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0NvU0VOb2RlJyk7XG52YXIgRkRMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9GRExheW91dENvbnN0YW50cycpO1xudmFyIElNYXRoID0gcmVxdWlyZSgnLi4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvSU1hdGgnKTtcblxuQ29TRU5vZGUucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgbGF5b3V0ID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0TGF5b3V0KCk7XG4gIHRoaXMuZGlzcGxhY2VtZW50WCA9IGxheW91dC5jb29saW5nRmFjdG9yICpcbiAgICAgICAgICAodGhpcy5zcHJpbmdGb3JjZVggKyB0aGlzLnJlcHVsc2lvbkZvcmNlWCArIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVgpIC8gdGhpcy5ub09mQ2hpbGRyZW47XG4gIHRoaXMuZGlzcGxhY2VtZW50WSA9IGxheW91dC5jb29saW5nRmFjdG9yICpcbiAgICAgICAgICAodGhpcy5zcHJpbmdGb3JjZVkgKyB0aGlzLnJlcHVsc2lvbkZvcmNlWSArIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVkpIC8gdGhpcy5ub09mQ2hpbGRyZW47XG5cblxuICBpZiAoTWF0aC5hYnModGhpcy5kaXNwbGFjZW1lbnRYKSA+IGxheW91dC5jb29saW5nRmFjdG9yICogbGF5b3V0Lm1heE5vZGVEaXNwbGFjZW1lbnQpXG4gIHtcbiAgICB0aGlzLmRpc3BsYWNlbWVudFggPSBsYXlvdXQuY29vbGluZ0ZhY3RvciAqIGxheW91dC5tYXhOb2RlRGlzcGxhY2VtZW50ICpcbiAgICAgICAgICAgIElNYXRoLnNpZ24odGhpcy5kaXNwbGFjZW1lbnRYKTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyh0aGlzLmRpc3BsYWNlbWVudFkpID4gbGF5b3V0LmNvb2xpbmdGYWN0b3IgKiBsYXlvdXQubWF4Tm9kZURpc3BsYWNlbWVudClcbiAge1xuICAgIHRoaXMuZGlzcGxhY2VtZW50WSA9IGxheW91dC5jb29saW5nRmFjdG9yICogbGF5b3V0Lm1heE5vZGVEaXNwbGFjZW1lbnQgKlxuICAgICAgICAgICAgSU1hdGguc2lnbih0aGlzLmRpc3BsYWNlbWVudFkpO1xuICB9XG5cbiAgaWYgKEZETGF5b3V0Q29uc3RhbnRzLkVYQ0xVREVEX05PREVTW3RoaXMuaWRdKSB7XG4gICAgdGhpcy5kaXNwbGFjZW1lbnRYICo9IEZETGF5b3V0Q29uc3RhbnRzLmV4Y2x1ZGVkTm9kZU1vdmVGYWN0b3I7XG4gICAgdGhpcy5kaXNwbGFjZW1lbnRZICo9IEZETGF5b3V0Q29uc3RhbnRzLmV4Y2x1ZGVkTm9kZU1vdmVGYWN0b3I7XG4gIH1cblxuICAvLyBhIHNpbXBsZSBub2RlLCBqdXN0IG1vdmUgaXRcbiAgaWYgKHRoaXMuY2hpbGQgPT0gbnVsbClcbiAge1xuICAgIHRoaXMubW92ZUJ5KHRoaXMuZGlzcGxhY2VtZW50WCwgdGhpcy5kaXNwbGFjZW1lbnRZKTtcbiAgfVxuICAvLyBhbiBlbXB0eSBjb21wb3VuZCBub2RlLCBhZ2FpbiBqdXN0IG1vdmUgaXRcbiAgZWxzZSBpZiAodGhpcy5jaGlsZC5nZXROb2RlcygpLmxlbmd0aCA9PSAwKVxuICB7XG4gICAgdGhpcy5tb3ZlQnkodGhpcy5kaXNwbGFjZW1lbnRYLCB0aGlzLmRpc3BsYWNlbWVudFkpO1xuICB9XG4gIC8vIG5vbi1lbXB0eSBjb21wb3VuZCBub2RlLCBwcm9wb2dhdGUgbW92ZW1lbnQgdG8gY2hpbGRyZW4gYXMgd2VsbFxuICBlbHNlXG4gIHtcbiAgICB0aGlzLnByb3BvZ2F0ZURpc3BsYWNlbWVudFRvQ2hpbGRyZW4odGhpcy5kaXNwbGFjZW1lbnRYLFxuICAgICAgICAgICAgdGhpcy5kaXNwbGFjZW1lbnRZKTtcbiAgfVxuXG4gIGxheW91dC50b3RhbERpc3BsYWNlbWVudCArPVxuICAgICAgICAgIE1hdGguYWJzKHRoaXMuZGlzcGxhY2VtZW50WCkgKyBNYXRoLmFicyh0aGlzLmRpc3BsYWNlbWVudFkpO1xuXG4gIHRoaXMuc3ByaW5nRm9yY2VYID0gMDtcbiAgdGhpcy5zcHJpbmdGb3JjZVkgPSAwO1xuICB0aGlzLnJlcHVsc2lvbkZvcmNlWCA9IDA7XG4gIHRoaXMucmVwdWxzaW9uRm9yY2VZID0gMDtcbiAgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWCA9IDA7XG4gIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVkgPSAwO1xuICB0aGlzLmRpc3BsYWNlbWVudFggPSAwO1xuICB0aGlzLmRpc3BsYWNlbWVudFkgPSAwO1xufTtcbiIsImltcG9ydCAnLi9jb3NlLWJpbGtlbnQtbW9kaWZpY2F0aW9uLmpzJztcbmltcG9ydCB7Y3JlYXRlSGVhZGxlc3NJbnN0YW5jZSwgYXBwbHlNZXJnZWRMYXlvdXQsIGFwcGx5VW5uYW1lZExheW91dH0gZnJvbSAnLi9sYXlvdXRzLmpzJztcbmNvbnN0IGdldExheW91dCA9IHJlcXVpcmUoJy4uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0Jyk7XG52YXIgRkRMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9GRExheW91dENvbnN0YW50cycpO1xuXG4vLyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBvbiBhIGN5dG9zY2FwZSBsaWIgcmVmXG5sZXQgcmVnaXN0ZXIgPSBmdW5jdGlvbiggY3l0b3NjYXBlICl7XG5cdGlmKCAhY3l0b3NjYXBlICl7IHJldHVybjsgfSAvLyBjYW4ndCByZWdpc3RlciBpZiBjeXRvc2NhcGUgdW5zcGVjaWZpZWRcblxuXHRjcmVhdGVIZWFkbGVzc0luc3RhbmNlKGN5dG9zY2FwZSk7XG5cblx0bGV0IExheW91dCA9IGdldExheW91dChjeXRvc2NhcGUpO1xuXHRsZXQgb3JnUHJvdG90eXBlID0gTGF5b3V0LnByb3RvdHlwZTtcblxuXHRsZXQgZGVmYXVsdHMgPSBuZXcgTGF5b3V0KHt9KS5vcHRpb25zO1xuXG5cdGZ1bmN0aW9uIGV4dGVuZChkZWZhdWx0cywgb3B0aW9ucykge1xuXHRcdHZhciBvYmogPSB7fTtcblxuXHRcdGZvciAodmFyIGkgaW4gZGVmYXVsdHMpIHtcblx0XHRcdG9ialtpXSA9IGRlZmF1bHRzW2ldO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xuXHRcdFx0b2JqW2ldID0gb3B0aW9uc1tpXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb2JqO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIF9Db1NFTGF5b3V0KF9vcHRpb25zKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gZXh0ZW5kKGRlZmF1bHRzLCBfb3B0aW9ucyk7XG5cdFx0bmV3IExheW91dChfb3B0aW9ucyk7XG5cdFx0RkRMYXlvdXRDb25zdGFudHMuZXhjbHVkZWROb2RlTW92ZUZhY3RvciA9IF9vcHRpb25zLmV4Y2x1ZGVkTm9kZU1vdmVGYWN0b3IgfHwgMDtcblxuXHRcdGlmIChfb3B0aW9ucy5leGNsdWRlZE5vZGVzKSB7XG5cdFx0XHRGRExheW91dENvbnN0YW50cy5FWENMVURFRF9OT0RFUyA9IF9vcHRpb25zLmV4Y2x1ZGVkTm9kZXM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdEZETGF5b3V0Q29uc3RhbnRzLkVYQ0xVREVEX05PREVTID0ge307XG5cdFx0fVxuXG5cdH07XG5cblx0X0NvU0VMYXlvdXQucHJvdG90eXBlID0gTGF5b3V0LnByb3RvdHlwZTtcblxuXHRjeXRvc2NhcGUoICdsYXlvdXQnLCAnY3l0b3NjYXBlLmpzLXN5bmNoZWQnLCBfQ29TRUxheW91dCk7IC8vIHJlZ2lzdGVyIHdpdGggY3l0b3NjYXBlLmpzXG5cdGN5dG9zY2FwZSgnY29yZScsICdzeW5jaGVkTGF5b3V0JywgZnVuY3Rpb24gKG9wdHMpIHtcblx0XHRsZXQgYXBpID0ge307XG5cdFx0YXBpLmFwcGx5TWVyZ2VkTGF5b3V0ID0gYXBwbHlNZXJnZWRMYXlvdXQ7XG5cdFx0YXBpLmFwcGx5VW5uYW1lZExheW91dCA9IGFwcGx5VW5uYW1lZExheW91dDtcblxuXHRcdHJldHVybiBhcGk7XG5cdH0pO1xufTtcblxuaWYoIHR5cGVvZiBjeXRvc2NhcGUgIT09ICd1bmRlZmluZWQnICl7IC8vIGV4cG9zZSB0byBnbG9iYWwgY3l0b3NjYXBlIChpLmUuIHdpbmRvdy5jeXRvc2NhcGUpXG5cdHJlZ2lzdGVyKCBjeXRvc2NhcGUgKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWdpc3RlcjtcbiIsInZhciBjeV9oZWFkbGVzczsgXG5cbnZhciBjcmVhdGVIZWFkbGVzc0luc3RhbmNlID0gZnVuY3Rpb24oY3l0b3NjYXBlKSB7XG5cdGN5X2hlYWRsZXNzID0gY3l0b3NjYXBlKHtcblx0XHRoZWFkbGVzczogdHJ1ZSxcblx0XHRzdHlsZUVuYWJsZWQ6IHRydWUsXG5cdH0pO1xufTtcblxudmFyIGFwcGx5TWVyZ2VkTGF5b3V0ID0gZnVuY3Rpb24gKGN5LCBvdGhlckN5KSB7XG5cdGxldCBlbGVzID0gY3kuZWxlbWVudHMoKTtcblx0bGV0IG90aGVyRWxlcyA9IG90aGVyQ3kuZWxlbWVudHMoKTtcblx0bGV0IGFsbF9lbGVzID0gZWxlcy51bmlvbihvdGhlckVsZXMpO1xuXHRsZXQgb3B0aW9ucyA9IHtuYW1lOiAnY3l0b3NjYXBlLmpzLXN5bmNoZWQnfTtcblx0XG5cdGN5X2hlYWRsZXNzLmVsZW1lbnRzKCkucmVtb3ZlKCk7XG5cdGN5X2hlYWRsZXNzLmFkZChhbGxfZWxlcyk7XG5cdGN5X2hlYWRsZXNzLmxheW91dChvcHRpb25zKS5ydW4oKTtcblxuXHRjeV9oZWFkbGVzcy5vbmUoXCJsYXlvdXRzdG9wXCIsIGZ1bmN0aW9uKCl7XG5cdFx0bGV0IHBvcyA9IHt9O1xuXHRcdGN5X2hlYWRsZXNzLm5vZGVzKCkuZm9yRWFjaChmdW5jdGlvbihlbGUsIGkpIHtcblx0XHRcdHBvc1tlbGUuaWQoKV0gPSB7eDplbGUucG9zaXRpb24oXCJ4XCIpLCB5OiBlbGUucG9zaXRpb24oXCJ5XCIpfTtcblx0XHR9KVxuXG5cdFx0Y3kubm9kZXMoKS5wb3NpdGlvbnMoZnVuY3Rpb24oZWxlLCBpKSB7XG5cdFx0XHRyZXR1cm4ge3g6IHBvc1tlbGUuaWQoKV0ueCwgeTogcG9zW2VsZS5pZCgpXS55fVxuXHRcdH0pO1xuXG5cdFx0b3RoZXJDeS5ub2RlcygpLnBvc2l0aW9ucyhmdW5jdGlvbihlbGUsIGkpIHtcblx0XHRcdHJldHVybiB7eDogcG9zW2VsZS5pZCgpXS54LCB5OiBwb3NbZWxlLmlkKCldLnl9XG5cdFx0fSk7XG5cblx0XHRjeS50cmlnZ2VyKFwic3luY2hlZExheW91dFN0b3BwZWRcIik7XG5cdFx0b3RoZXJDeS50cmlnZ2VyKFwic3luY2hlZExheW91dFN0b3BwZWRcIik7XG5cblx0fSk7XG59O1xuXG5sZXQgYXBwbHlVbm5hbWVkTGF5b3V0ID0gZnVuY3Rpb24oY3ksIG90aGVyQ3ksIGV4Y2x1ZGVkTm9kZU1vdmVGYWN0b3IpIHtcblx0bGV0IGVsZXMgPSBjeS5lbGVtZW50cygpO1xuXHRsZXQgb3RoZXJFbGVzID0gb3RoZXJDeS5lbGVtZW50cygpO1xuXHRsZXQgY29tbW9uRWxlcyA9IGVsZXMuaW50ZXJzZWN0aW9uKG90aGVyRWxlcyk7XG5cblx0bGV0IGNvbW1vbl9pZCA9IHt9O1xuXG5cdGNvbW1vbkVsZXMuZm9yRWFjaChmdW5jdGlvbihlbGUsIGkpIHtcblx0XHRjb21tb25faWRbZWxlLmlkKCldID0gdHJ1ZTtcblx0fSk7XG5cblx0Y3lfaGVhZGxlc3MuZWxlbWVudHMoKS5yZW1vdmUoKTtcblx0Y3lfaGVhZGxlc3MuYWRkKGNvbW1vbkVsZXMpO1xuXHRjeV9oZWFkbGVzcy5sYXlvdXQoe25hbWU6IFwiY3l0b3NjYXBlLmpzLXN5bmNoZWRcIiwgZXhjbHVkZWROb2Rlczoge319KS5ydW4oKTtcblxuXHRjeV9oZWFkbGVzcy5vbmUoXCJsYXlvdXRzdG9wXCIsIGZ1bmN0aW9uKCl7XG5cdFx0bGV0IHBvcyA9IHt9O1xuXHRcdGN5X2hlYWRsZXNzLm5vZGVzKCkuZm9yRWFjaChmdW5jdGlvbihlbGUsIGkpIHtcblx0XHRcdHBvc1tlbGUuaWQoKV0gPSB7eDogZWxlLnBvc2l0aW9uKFwieFwiKSwgeTogZWxlLnBvc2l0aW9uKFwieVwiKX07XG5cdFx0fSlcblxuXHRcdGN5Lm5vZGVzKCkucG9zaXRpb25zKGZ1bmN0aW9uKGVsZSwgaSl7XG5cdFx0XHRpZiAocG9zW2VsZS5pZCgpXSkge1xuXHRcdFx0XHRyZXR1cm4ge3g6IHBvc1tlbGUuaWQoKV0ueCwgeTogcG9zW2VsZS5pZCgpXS55fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBlbGUucG9zaXRpb24oKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdG90aGVyQ3kubm9kZXMoKS5wb3NpdGlvbnMoZnVuY3Rpb24oZWxlLCBpKXtcblx0XHRcdGlmIChwb3NbZWxlLmlkKCldKSB7XG5cdFx0XHRcdHJldHVybiB7eDogcG9zW2VsZS5pZCgpXS54LCB5OiBwb3NbZWxlLmlkKCldLnl9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGVsZS5wb3NpdGlvbigpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Y3kubGF5b3V0KHtuYW1lOiBcImN5dG9zY2FwZS5qcy1zeW5jaGVkXCIsICByYW5kb21pemU6IGZhbHNlLCBleGNsdWRlZE5vZGVzOiBwb3MsIGV4Y2x1ZGVkTm9kZU1vdmVGYWN0b3I6IGV4Y2x1ZGVkTm9kZU1vdmVGYWN0b3J9KS5ydW4oKTtcblx0XHRvdGhlckN5LmxheW91dCh7bmFtZTogXCJjeXRvc2NhcGUuanMtc3luY2hlZFwiLCAgcmFuZG9taXplOiBmYWxzZSwgZXhjbHVkZWROb2RlczogcG9zLCBleGNsdWRlZE5vZGVNb3ZlRmFjdG9yOiBleGNsdWRlZE5vZGVNb3ZlRmFjdG9yfSkucnVuKCk7XG5cblx0XHRsZXQgaXNMYXlvdXRTdG9wcGVkID0gZmFsc2UsIGlzT3RoZXJMYXlvdXRTdG9wcGVkID0gZmFsc2U7XG5cblx0XHRjeS5vbmUoXCJsYXlvdXRzdG9wXCIsIGZ1bmN0aW9uKCl7XG5cdFx0XHRpc0xheW91dFN0b3BwZWQgPSB0cnVlO1xuXHRcdFx0aWYgKGlzT3RoZXJMYXlvdXRTdG9wcGVkKSB7XG5cdFx0XHRcdGN5LnRyaWdnZXIoXCJzeW5jaGVkTGF5b3V0U3RvcHBlZFwiKTtcblx0XHRcdFx0b3RoZXJDeS50cmlnZ2VyKFwic3luY2hlZExheW91dFN0b3BwZWRcIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRvdGhlckN5Lm9uZShcImxheW91dHN0b3BcIiwgZnVuY3Rpb24oKXtcblx0XHRcdGlzT3RoZXJMYXlvdXRTdG9wcGVkID0gdHJ1ZTtcblx0XHRcdGlmIChpc0xheW91dFN0b3BwZWQpIHtcblx0XHRcdFx0Y3kudHJpZ2dlcihcInN5bmNoZWRMYXlvdXRTdG9wcGVkXCIpO1xuXHRcdFx0XHRvdGhlckN5LnRyaWdnZXIoXCJzeW5jaGVkTGF5b3V0U3RvcHBlZFwiKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHR9KTtcbn07XG5cbmV4cG9ydCB7Y3JlYXRlSGVhZGxlc3NJbnN0YW5jZSwgYXBwbHlNZXJnZWRMYXlvdXQsIGFwcGx5VW5uYW1lZExheW91dH07XG4iXSwic291cmNlUm9vdCI6IiJ9