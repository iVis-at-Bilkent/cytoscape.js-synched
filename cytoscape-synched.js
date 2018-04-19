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

		cy.fit(50);otherCy.fit(50);

		if (cy.zoom() > otherCy.zoom()) {
			cy.zoom(otherCy.zoom());cy.pan(otherCy.pan());
		} else {
			otherCy.zoom(cy.zoom());otherCy.pan(cy.pan());
		}
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
	});
};

exports.createHeadlessInstance = createHeadlessInstance;
exports.applyMergedLayout = applyMergedLayout;
exports.applyUnnamedLayout = applyUnnamedLayout;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFQ29uc3RhbnRzLmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFRWRnZS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvQ29TRUdyYXBoLmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFR3JhcGhNYW5hZ2VyLmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFTGF5b3V0LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFTm9kZS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvRGltZW5zaW9uRC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvRW1pdHRlci5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvRkRMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0ZETGF5b3V0Q29uc3RhbnRzLmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9GRExheW91dEVkZ2UuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0ZETGF5b3V0Tm9kZS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvSGFzaE1hcC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvSGFzaFNldC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvSUdlb21ldHJ5LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9JTWF0aC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvSW50ZWdlci5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvTEVkZ2UuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0xHcmFwaC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvTEdyYXBoTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvTEdyYXBoT2JqZWN0LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9MTm9kZS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9MYXlvdXRDb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0xpbmtlZExpc3QuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L1BvaW50LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Qb2ludEQuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L1JhbmRvbVNlZWQuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L1JlY3RhbmdsZUQuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvVW5pcXVlSURHZW5lcmV0b3IuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9zcmMvY29zZS1iaWxrZW50LW1vZGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9zcmMvbGF5b3V0cy5qcyJdLCJuYW1lcyI6WyJGRExheW91dENvbnN0YW50cyIsInJlcXVpcmUiLCJDb1NFQ29uc3RhbnRzIiwicHJvcCIsIkRFRkFVTFRfVVNFX01VTFRJX0xFVkVMX1NDQUxJTkciLCJERUZBVUxUX1JBRElBTF9TRVBBUkFUSU9OIiwiREVGQVVMVF9FREdFX0xFTkdUSCIsIkRFRkFVTFRfQ09NUE9ORU5UX1NFUEVSQVRJT04iLCJUSUxFIiwiVElMSU5HX1BBRERJTkdfVkVSVElDQUwiLCJUSUxJTkdfUEFERElOR19IT1JJWk9OVEFMIiwibW9kdWxlIiwiZXhwb3J0cyIsIkZETGF5b3V0RWRnZSIsIkNvU0VFZGdlIiwic291cmNlIiwidGFyZ2V0IiwidkVkZ2UiLCJjYWxsIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiTEdyYXBoIiwiQ29TRUdyYXBoIiwicGFyZW50IiwiZ3JhcGhNZ3IiLCJ2R3JhcGgiLCJMR3JhcGhNYW5hZ2VyIiwiQ29TRUdyYXBoTWFuYWdlciIsImxheW91dCIsIkZETGF5b3V0IiwiQ29TRU5vZGUiLCJMYXlvdXRDb25zdGFudHMiLCJQb2ludCIsIlBvaW50RCIsIkxheW91dCIsIkludGVnZXIiLCJJR2VvbWV0cnkiLCJUcmFuc2Zvcm0iLCJDb1NFTGF5b3V0IiwidG9CZVRpbGVkIiwibmV3R3JhcGhNYW5hZ2VyIiwiZ20iLCJncmFwaE1hbmFnZXIiLCJuZXdHcmFwaCIsIm5ld05vZGUiLCJ2Tm9kZSIsIm5ld0VkZ2UiLCJpbml0UGFyYW1ldGVycyIsImFyZ3VtZW50cyIsImlzU3ViTGF5b3V0IiwiaWRlYWxFZGdlTGVuZ3RoIiwidXNlU21hcnRJZGVhbEVkZ2VMZW5ndGhDYWxjdWxhdGlvbiIsIkRFRkFVTFRfVVNFX1NNQVJUX0lERUFMX0VER0VfTEVOR1RIX0NBTENVTEFUSU9OIiwic3ByaW5nQ29uc3RhbnQiLCJERUZBVUxUX1NQUklOR19TVFJFTkdUSCIsInJlcHVsc2lvbkNvbnN0YW50IiwiREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEgiLCJncmF2aXR5Q29uc3RhbnQiLCJERUZBVUxUX0dSQVZJVFlfU1RSRU5HVEgiLCJjb21wb3VuZEdyYXZpdHlDb25zdGFudCIsIkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9TVFJFTkdUSCIsImdyYXZpdHlSYW5nZUZhY3RvciIsIkRFRkFVTFRfR1JBVklUWV9SQU5HRV9GQUNUT1IiLCJjb21wb3VuZEdyYXZpdHlSYW5nZUZhY3RvciIsIkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1IiLCJjcmVhdGVCZW5kc0FzTmVlZGVkIiwiREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEIiwiY3JlYXRlQmVuZHBvaW50cyIsInJlc2V0QWxsRWRnZXMiLCJsZXZlbCIsImNsYXNzaWNMYXlvdXQiLCJub2Rlc1dpdGhHcmF2aXR5IiwiY2FsY3VsYXRlTm9kZXNUb0FwcGx5R3Jhdml0YXRpb25UbyIsInNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uIiwiY2FsY05vT2ZDaGlsZHJlbkZvckFsbE5vZGVzIiwiY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9ycyIsImNhbGNJbmNsdXNpb25UcmVlRGVwdGhzIiwiZ2V0Um9vdCIsImNhbGNFc3RpbWF0ZWRTaXplIiwiY2FsY0lkZWFsRWRnZUxlbmd0aHMiLCJpbmNyZW1lbnRhbCIsImZvcmVzdCIsImdldEZsYXRGb3Jlc3QiLCJsZW5ndGgiLCJwb3NpdGlvbk5vZGVzUmFkaWFsbHkiLCJyZWR1Y2VUcmVlcyIsInJlc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24iLCJhbGxOb2RlcyIsIlNldCIsImdldEFsbE5vZGVzIiwiaW50ZXJzZWN0aW9uIiwiZmlsdGVyIiwiaGFzIiwieCIsInBvc2l0aW9uTm9kZXNSYW5kb21seSIsImluaXRTcHJpbmdFbWJlZGRlciIsInJ1blNwcmluZ0VtYmVkZGVyIiwidGljayIsInRvdGFsSXRlcmF0aW9ucyIsIm1heEl0ZXJhdGlvbnMiLCJpc1RyZWVHcm93aW5nIiwiaXNHcm93dGhGaW5pc2hlZCIsInBydW5lZE5vZGVzQWxsIiwiQ09OVkVSR0VOQ0VfQ0hFQ0tfUEVSSU9EIiwiaXNDb252ZXJnZWQiLCJjb29saW5nRmFjdG9yIiwiaW5pdGlhbENvb2xpbmdGYWN0b3IiLCJhbmltYXRpb25QZXJpb2QiLCJNYXRoIiwiY2VpbCIsImluaXRpYWxBbmltYXRpb25QZXJpb2QiLCJzcXJ0IiwiZ3Jvd1RyZWVJdGVyYXRpb25zIiwidXBkYXRlQm91bmRzIiwidXBkYXRlR3JpZCIsImdyb3dUcmVlIiwiREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCIsImFmdGVyR3Jvd3RoSXRlcmF0aW9ucyIsInRvdGFsRGlzcGxhY2VtZW50IiwiY2FsY1NwcmluZ0ZvcmNlcyIsImNhbGNSZXB1bHNpb25Gb3JjZXMiLCJjYWxjR3Jhdml0YXRpb25hbEZvcmNlcyIsIm1vdmVOb2RlcyIsImFuaW1hdGUiLCJnZXRQb3NpdGlvbnNEYXRhIiwicERhdGEiLCJpIiwicmVjdCIsImlkIiwiZ2V0Q2VudGVyWCIsInkiLCJnZXRDZW50ZXJZIiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsImxheW91dEVuZGVkIiwiQU5JTUFURSIsImVtaXQiLCJub2RlTGlzdCIsImdyYXBoIiwiZ3JhcGhzIiwiZ2V0R3JhcGhzIiwic2l6ZSIsInVwZGF0ZUNvbm5lY3RlZCIsImlzQ29ubmVjdGVkIiwiY29uY2F0IiwiZ2V0Tm9kZXMiLCJub2RlIiwibm9PZkNoaWxkcmVuIiwiZ2V0Tm9PZkNoaWxkcmVuIiwiZWRnZXMiLCJnZXRBbGxFZGdlcyIsInZpc2l0ZWQiLCJIYXNoU2V0IiwiZWRnZSIsImNvbnRhaW5zIiwiZ2V0U291cmNlIiwiZ2V0VGFyZ2V0IiwiZ2V0QmVuZHBvaW50cyIsInB1c2giLCJjcmVhdGVEdW1teU5vZGVzRm9yQmVuZHBvaW50cyIsImFkZCIsImVkZ2VMaXN0IiwiZ2V0RWRnZUxpc3RUb05vZGUiLCJrIiwibXVsdGlFZGdlIiwiYWRkQWxsIiwibGlzdCIsImN1cnJlbnRTdGFydGluZ1BvaW50IiwibnVtYmVyT2ZDb2x1bW5zIiwiY3VycmVudFkiLCJjdXJyZW50WCIsInBvaW50IiwidHJlZSIsImNlbnRlck5vZGUiLCJmaW5kQ2VudGVyT2ZUcmVlIiwicmFkaWFsTGF5b3V0IiwiZmxvb3IiLCJ0cmFuc2Zvcm0iLCJXT1JMRF9DRU5URVJfWCIsIldPUkxEX0NFTlRFUl9ZIiwic3RhcnRpbmdQb2ludCIsInJhZGlhbFNlcCIsIm1heCIsIm1heERpYWdvbmFsSW5UcmVlIiwiYnJhbmNoUmFkaWFsTGF5b3V0IiwiYm91bmRzIiwiY2FsY3VsYXRlQm91bmRzIiwic2V0RGV2aWNlT3JnWCIsImdldE1pblgiLCJzZXREZXZpY2VPcmdZIiwiZ2V0TWluWSIsInNldFdvcmxkT3JnWCIsInNldFdvcmxkT3JnWSIsImJvdHRvbVJpZ2h0IiwiZ2V0TWF4WCIsImdldE1heFkiLCJpbnZlcnNlVHJhbnNmb3JtUG9pbnQiLCJwYXJlbnRPZk5vZGUiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJkaXN0YW5jZSIsInJhZGlhbFNlcGFyYXRpb24iLCJoYWxmSW50ZXJ2YWwiLCJub2RlQW5nbGUiLCJ0ZXRhIiwiVFdPX1BJIiwiY29zX3RldGEiLCJjb3MiLCJ4XyIsInlfIiwic2luIiwic2V0Q2VudGVyIiwibmVpZ2hib3JFZGdlcyIsImdldEVkZ2VzIiwiY2hpbGRDb3VudCIsImJyYW5jaENvdW50IiwiaW5jRWRnZXNDb3VudCIsInN0YXJ0SW5kZXgiLCJnZXRFZGdlc0JldHdlZW4iLCJ0ZW1wIiwic3BsaWNlIiwiaW5kZXgiLCJpbmRleE9mIiwic3RlcEFuZ2xlIiwiYWJzIiwiY3VycmVudE5laWdoYm9yIiwiZ2V0T3RoZXJFbmQiLCJjaGlsZFN0YXJ0QW5nbGUiLCJjaGlsZEVuZEFuZ2xlIiwibWF4RGlhZ29uYWwiLCJNSU5fVkFMVUUiLCJkaWFnb25hbCIsImdldERpYWdvbmFsIiwiY2FsY1JlcHVsc2lvblJhbmdlIiwiZ3JvdXBaZXJvRGVncmVlTWVtYmVycyIsInNlbGYiLCJ0ZW1wTWVtYmVyR3JvdXBzIiwibWVtYmVyR3JvdXBzIiwiaWRUb0R1bW15Tm9kZSIsInplcm9EZWdyZWUiLCJnZXRQYXJlbnQiLCJnZXROb2RlRGVncmVlV2l0aENoaWxkcmVuIiwidW5kZWZpbmVkIiwiZ2V0VG9CZVRpbGVkIiwicF9pZCIsImtleXMiLCJmb3JFYWNoIiwiZHVtbXlDb21wb3VuZElkIiwiZHVtbXlDb21wb3VuZCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJkdW1teVBhcmVudEdyYXBoIiwiZ2V0R3JhcGhNYW5hZ2VyIiwicGFyZW50R3JhcGgiLCJnZXRDaGlsZCIsInJlbW92ZSIsImNsZWFyQ29tcG91bmRzIiwiY2hpbGRHcmFwaE1hcCIsImlkVG9Ob2RlIiwicGVyZm9ybURGU09uQ29tcG91bmRzIiwiY29tcG91bmRPcmRlciIsImNoaWxkIiwicmVzZXRBbGxOb2RlcyIsInRpbGVDb21wb3VuZE1lbWJlcnMiLCJjbGVhclplcm9EZWdyZWVNZW1iZXJzIiwidGlsZWRaZXJvRGVncmVlUGFjayIsImNvbXBvdW5kTm9kZSIsInRpbGVOb2RlcyIsInJlcG9wdWxhdGVDb21wb3VuZHMiLCJsQ29tcG91bmROb2RlIiwiaG9yaXpvbnRhbE1hcmdpbiIsInZlcnRpY2FsTWFyZ2luIiwiYWRqdXN0TG9jYXRpb25zIiwidGlsZWRNZW1iZXJQYWNrIiwicmVwb3B1bGF0ZVplcm9EZWdyZWVNZW1iZXJzIiwidGlsZWRQYWNrIiwiY2hpbGRHcmFwaCIsImNoaWxkcmVuIiwidGhlQ2hpbGQiLCJnZXROb2RlRGVncmVlIiwiZGVncmVlIiwiZmlsbENvbXBleE9yZGVyQnlERlMiLCJvcmdhbml6YXRpb24iLCJjb21wb3VuZEhvcml6b250YWxNYXJnaW4iLCJjb21wb3VuZFZlcnRpY2FsTWFyZ2luIiwibGVmdCIsInJvd3MiLCJyb3ciLCJtYXhIZWlnaHQiLCJqIiwibG5vZGUiLCJob3Jpem9udGFsUGFkZGluZyIsInZlcnRpY2FsUGFkZGluZyIsIm5vZGVzIiwibWluV2lkdGgiLCJyb3dXaWR0aCIsInJvd0hlaWdodCIsInNvcnQiLCJuMSIsIm4yIiwibE5vZGUiLCJpbnNlcnROb2RlVG9Sb3ciLCJjYW5BZGRIb3Jpem9udGFsIiwiZ2V0U2hvcnRlc3RSb3dJbmRleCIsInNoaWZ0VG9MYXN0Um93Iiwicm93SW5kZXgiLCJtaW5Db21wb3VuZFNpemUiLCJzZWNvbmREaW1lbnNpb24iLCJleHRyYUhlaWdodCIsInIiLCJtaW4iLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJnZXRMb25nZXN0Um93SW5kZXgiLCJleHRyYVdpZHRoIiwic3JpIiwiaERpZmYiLCJhZGRfdG9fcm93X3JhdGlvIiwiYWRkX25ld19yb3dfcmF0aW8iLCJsb25nZXN0IiwibGFzdCIsImRpZmYiLCJpbnN0YW5jZSIsInByZXZUb3RhbCIsImZpbmFsVG90YWwiLCJ0aWxpbmdQcmVMYXlvdXQiLCJ0aWxpbmdQb3N0TGF5b3V0IiwiRkRMYXlvdXROb2RlIiwiSU1hdGgiLCJsb2MiLCJtb3ZlIiwiZ2V0TGF5b3V0IiwiZGlzcGxhY2VtZW50WCIsInNwcmluZ0ZvcmNlWCIsInJlcHVsc2lvbkZvcmNlWCIsImdyYXZpdGF0aW9uRm9yY2VYIiwiZGlzcGxhY2VtZW50WSIsInNwcmluZ0ZvcmNlWSIsInJlcHVsc2lvbkZvcmNlWSIsImdyYXZpdGF0aW9uRm9yY2VZIiwibWF4Tm9kZURpc3BsYWNlbWVudCIsInNpZ24iLCJtb3ZlQnkiLCJwcm9wb2dhdGVEaXNwbGFjZW1lbnRUb0NoaWxkcmVuIiwiZFgiLCJkWSIsInNldFByZWQxIiwicHJlZDEiLCJnZXRQcmVkMSIsImdldFByZWQyIiwicHJlZDIiLCJzZXROZXh0IiwibmV4dCIsImdldE5leHQiLCJzZXRQcm9jZXNzZWQiLCJwcm9jZXNzZWQiLCJpc1Byb2Nlc3NlZCIsIkRpbWVuc2lvbkQiLCJnZXRXaWR0aCIsInNldFdpZHRoIiwiZ2V0SGVpZ2h0Iiwic2V0SGVpZ2h0IiwiRW1pdHRlciIsImxpc3RlbmVycyIsInAiLCJhZGRMaXN0ZW5lciIsImV2ZW50IiwiY2FsbGJhY2siLCJyZW1vdmVMaXN0ZW5lciIsImwiLCJkYXRhIiwiZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSIsIm9sZFRvdGFsRGlzcGxhY2VtZW50IiwiTUFYX0lURVJBVElPTlMiLCJsYXlvdXRRdWFsaXR5IiwiRFJBRlRfUVVBTElUWSIsIlBST09GX1FVQUxJVFkiLCJub3RBbmltYXRlZEl0ZXJhdGlvbnMiLCJ1c2VGUkdyaWRWYXJpYW50IiwiREVGQVVMVF9VU0VfU01BUlRfUkVQVUxTSU9OX1JBTkdFX0NBTENVTEFUSU9OIiwiZ3JpZCIsImxjYURlcHRoIiwic2l6ZU9mU291cmNlSW5MY2EiLCJzaXplT2ZUYXJnZXRJbkxjYSIsImFsbEVkZ2VzIiwiaWRlYWxMZW5ndGgiLCJpc0ludGVyR3JhcGgiLCJnZXRTb3VyY2VJbkxjYSIsImdldEVzdGltYXRlZFNpemUiLCJnZXRUYXJnZXRJbkxjYSIsIlNJTVBMRV9OT0RFX1NJWkUiLCJnZXRMY2EiLCJnZXRJbmNsdXNpb25UcmVlRGVwdGgiLCJQRVJfTEVWRUxfSURFQUxfRURHRV9MRU5HVEhfRkFDVE9SIiwiTUFYX05PREVfRElTUExBQ0VNRU5UX0lOQ1JFTUVOVEFMIiwiTUFYX05PREVfRElTUExBQ0VNRU5UIiwidG90YWxEaXNwbGFjZW1lbnRUaHJlc2hvbGQiLCJyZXB1bHNpb25SYW5nZSIsImxFZGdlcyIsImNhbGNTcHJpbmdGb3JjZSIsIm5vZGVBIiwibm9kZUIiLCJsTm9kZXMiLCJwcm9jZXNzZWROb2RlU2V0IiwiR1JJRF9DQUxDVUxBVElPTl9DSEVDS19QRVJJT0QiLCJjYWxjdWxhdGVSZXB1bHNpb25Gb3JjZU9mQU5vZGUiLCJnZXRPd25lciIsImNhbGNSZXB1bHNpb25Gb3JjZSIsImdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uIiwiY2FsY0dyYXZpdGF0aW9uYWxGb3JjZSIsInNvdXJjZU5vZGUiLCJ0YXJnZXROb2RlIiwic3ByaW5nRm9yY2UiLCJ1bmlmb3JtTGVhZk5vZGVTaXplcyIsInVwZGF0ZUxlbmd0aFNpbXBsZSIsInVwZGF0ZUxlbmd0aCIsImlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCIsImdldExlbmd0aCIsImxlbmd0aFgiLCJsZW5ndGhZIiwicmVjdEEiLCJnZXRSZWN0IiwicmVjdEIiLCJvdmVybGFwQW1vdW50IiwiQXJyYXkiLCJjbGlwUG9pbnRzIiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwiZGlzdGFuY2VTcXVhcmVkIiwicmVwdWxzaW9uRm9yY2UiLCJpbnRlcnNlY3RzIiwiY2FsY1NlcGFyYXRpb25BbW91bnQiLCJjaGlsZHJlbkNvbnN0YW50IiwiZ2V0SW50ZXJzZWN0aW9uIiwiTUlOX1JFUFVMU0lPTl9ESVNUIiwib3duZXJHcmFwaCIsIm93bmVyQ2VudGVyWCIsIm93bmVyQ2VudGVyWSIsImFic0Rpc3RhbmNlWCIsImFic0Rpc3RhbmNlWSIsImVzdGltYXRlZFNpemUiLCJnZXRSaWdodCIsImdldExlZnQiLCJnZXRUb3AiLCJnZXRCb3R0b20iLCJjb252ZXJnZWQiLCJvc2NpbGF0aW5nIiwiYW5pbWF0aW9uRHVyaW5nTGF5b3V0IiwidXBkYXRlIiwiY2FsY0dyaWQiLCJzaXplWCIsInNpemVZIiwicGFyc2VJbnQiLCJhZGROb2RlVG9HcmlkIiwidiIsInRvcCIsInN0YXJ0WCIsImZpbmlzaFgiLCJzdGFydFkiLCJmaW5pc2hZIiwic2V0R3JpZENvb3JkaW5hdGVzIiwic3Vycm91bmRpbmciLCJjb250YWluc0xlYWYiLCJwcnVuZWROb2Rlc0luU3RlcFRlbXAiLCJwcnVuZWROb2Rlc0luU3RlcCIsImxlbmd0aE9mUHJ1bmVkTm9kZXNJblN0ZXAiLCJub2RlRGF0YSIsImZpbmRQbGFjZWZvclBydW5lZE5vZGUiLCJncmlkRm9yUHJ1bmVkTm9kZSIsIm5vZGVUb0Nvbm5lY3QiLCJwcnVuZWROb2RlIiwic3RhcnRHcmlkWCIsImZpbmlzaEdyaWRYIiwic3RhcnRHcmlkWSIsImZpbmlzaEdyaWRZIiwidXBOb2RlQ291bnQiLCJkb3duTm9kZUNvdW50IiwicmlnaHROb2RlQ291bnQiLCJsZWZ0Tm9kZUNvdW50IiwiY29udHJvbFJlZ2lvbnMiLCJtaW5Db3VudCIsIm1pbkluZGV4IiwicmFuZG9tIiwiTUlOX0VER0VfTEVOR1RIIiwiTEVkZ2UiLCJMTm9kZSIsIl9zdGFydFgiLCJfZmluaXNoWCIsIl9zdGFydFkiLCJfZmluaXNoWSIsIlVuaXF1ZUlER2VuZXJldG9yIiwiSGFzaE1hcCIsIm1hcCIsInB1dCIsImtleSIsInZhbHVlIiwidGhlSWQiLCJjcmVhdGVJRCIsImdldCIsImtleVNldCIsInNldCIsIm9iaiIsImNsZWFyIiwiaXNFbXB0eSIsImFkZEFsbFRvIiwicyIsInNlcGFyYXRpb25CdWZmZXIiLCJkaXJlY3Rpb25zIiwiZGVjaWRlRGlyZWN0aW9uc0Zvck92ZXJsYXBwaW5nTm9kZXMiLCJnZXRYIiwiZ2V0WSIsInNsb3BlIiwibW92ZUJ5WSIsIm1vdmVCeVgiLCJnZXRJbnRlcnNlY3Rpb24yIiwicmVzdWx0IiwicDF4IiwicDF5IiwicDJ4IiwicDJ5IiwidG9wTGVmdEF4IiwidG9wTGVmdEF5IiwidG9wUmlnaHRBeCIsImJvdHRvbUxlZnRBeCIsImJvdHRvbUxlZnRBeSIsImJvdHRvbVJpZ2h0QXgiLCJoYWxmV2lkdGhBIiwiZ2V0V2lkdGhIYWxmIiwiaGFsZkhlaWdodEEiLCJnZXRIZWlnaHRIYWxmIiwidG9wTGVmdEJ4IiwidG9wTGVmdEJ5IiwidG9wUmlnaHRCeCIsImJvdHRvbUxlZnRCeCIsImJvdHRvbUxlZnRCeSIsImJvdHRvbVJpZ2h0QngiLCJoYWxmV2lkdGhCIiwiaGFsZkhlaWdodEIiLCJjbGlwUG9pbnRBRm91bmQiLCJjbGlwUG9pbnRCRm91bmQiLCJzbG9wZUEiLCJzbG9wZUIiLCJzbG9wZVByaW1lIiwiY2FyZGluYWxEaXJlY3Rpb25BIiwiY2FyZGluYWxEaXJlY3Rpb25CIiwidGVtcFBvaW50QXgiLCJ0ZW1wUG9pbnRBeSIsInRlbXBQb2ludEJ4IiwidGVtcFBvaW50QnkiLCJnZXRDYXJkaW5hbERpcmVjdGlvbiIsImxpbmUiLCJzMSIsInMyIiwiZjEiLCJmMiIsIngxIiwieTEiLCJ4MiIsInkyIiwieDMiLCJ5MyIsIng0IiwieTQiLCJhMSIsImEyIiwiYjEiLCJiMiIsImMxIiwiYzIiLCJkZW5vbSIsIkhBTEZfUEkiLCJQSSIsIk9ORV9BTkRfSEFMRl9QSSIsIlRIUkVFX1BJIiwiTEdyYXBoT2JqZWN0IiwidkdyYXBoT2JqZWN0IiwiYmVuZHBvaW50cyIsImxjYSIsInNvdXJjZUluTGNhIiwidGFyZ2V0SW5MY2EiLCJnZXRPdGhlckVuZEluR3JhcGgiLCJvdGhlckVuZCIsInJvb3QiLCJjbGlwUG9pbnRDb29yZGluYXRlcyIsIlJlY3RhbmdsZUQiLCJMaW5rZWRMaXN0Iiwib2JqMiIsIm1hcmdpbiIsIkRFRkFVTFRfR1JBUEhfTUFSR0lOIiwicmlnaHQiLCJib3R0b20iLCJvYmoxIiwib3duZXIiLCJlZGdlc1RvQmVSZW1vdmVkIiwic2xpY2UiLCJzb3VyY2VJbmRleCIsInRhcmdldEluZGV4IiwidXBkYXRlTGVmdFRvcCIsIm5vZGVUb3AiLCJub2RlTGVmdCIsInJlY3Vyc2l2ZSIsIm5vZGVSaWdodCIsIm5vZGVCb3R0b20iLCJib3VuZGluZ1JlY3QiLCJFTVBUWV9DT01QT1VORF9OT0RFX1NJWkUiLCJ0b0JlVmlzaXRlZCIsImN1cnJlbnROb2RlIiwiY2hpbGRyZW5PZk5vZGUiLCJ3aXRoQ2hpbGRyZW4iLCJzaGlmdCIsIm5laWdoYm9yRWRnZSIsImNoaWxkcmVuT2ZOZWlnaGJvciIsIm5vT2ZWaXNpdGVkSW5UaGlzR3JhcGgiLCJ2aXNpdGVkSWQiLCJ2aXNpdGVkTm9kZSIsImFkZFJvb3QiLCJuZ3JhcGgiLCJubm9kZSIsInNldFJvb3RHcmFwaCIsInJvb3RHcmFwaCIsInBhcmVudE5vZGUiLCJzb3VyY2VHcmFwaCIsInRhcmdldEdyYXBoIiwibE9iaiIsIm5vZGVzVG9CZVJlbW92ZWQiLCJhbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiIsImlzT25lQW5jZXN0b3JPZk90aGVyIiwiZmlyc3ROb2RlIiwic2Vjb25kTm9kZSIsInNvdXJjZUFuY2VzdG9yR3JhcGgiLCJ0YXJnZXRBbmNlc3RvckdyYXBoIiwiY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9yIiwiZmlyc3RPd25lckdyYXBoIiwic2Vjb25kT3duZXJHcmFwaCIsImRlcHRoIiwiaW5jbHVzaW9uVHJlZURlcHRoIiwiaW5jbHVkZXNJbnZhbGlkRWRnZSIsIlJhbmRvbVNlZWQiLCJnZXRDZW50ZXIiLCJnZXRMb2NhdGlvbiIsInNldFJlY3QiLCJ1cHBlckxlZnQiLCJkaW1lbnNpb24iLCJjeCIsImN5Iiwic2V0TG9jYXRpb24iLCJkeCIsImR5IiwidG8iLCJvdGhlciIsImdldE5laWdoYm9yc0xpc3QiLCJuZWlnaGJvcnMiLCJ3aXRoTmVpZ2hib3JzTGlzdCIsImNoaWxkTm9kZSIsInNjYXR0ZXIiLCJyYW5kb21DZW50ZXJYIiwicmFuZG9tQ2VudGVyWSIsIm1pblgiLCJJTklUSUFMX1dPUkxEX0JPVU5EQVJZIiwibWF4WCIsIm5leHREb3VibGUiLCJtaW5ZIiwibWF4WSIsIk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyIsImxhYmVsV2lkdGgiLCJsYWJlbEhlaWdodCIsImxhYmVsUG9zIiwidHJhbnMiLCJXT1JMRF9CT1VOREFSWSIsImxlZnRUb3AiLCJ2TGVmdFRvcCIsImlzUmVtb3RlVXNlIiwiREVGQVVMVF9RVUFMSVRZIiwiREVGQVVMVF9JTkNSRU1FTlRBTCIsImFuaW1hdGlvbk9uTGF5b3V0IiwiREVGQVVMVF9BTklNQVRJT05fT05fTEFZT1VUIiwiREVGQVVMVF9BTklNQVRJT05fRFVSSU5HX0xBWU9VVCIsIkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRCIsIkRFRkFVTFRfVU5JRk9STV9MRUFGX05PREVfU0laRVMiLCJlZGdlVG9EdW1teU5vZGVzIiwiaXNMYXlvdXRGaW5pc2hlZCIsIlJBTkRPTV9TRUVEIiwiY2hlY2tMYXlvdXRTdWNjZXNzIiwicnVuTGF5b3V0IiwiaXNMYXlvdXRTdWNjZXNzZnVsbCIsImRvUG9zdExheW91dCIsInVwZGF0ZTIiLCJjcmVhdGVCZW5kcG9pbnRzRnJvbUR1bW15Tm9kZXMiLCJuZXdMZWZ0VG9wIiwiZmxhdEZvcmVzdCIsImlzRm9yZXN0IiwiaXNGbGF0IiwicGFyZW50cyIsInVuUHJvY2Vzc2VkTm9kZXMiLCJkdW1teU5vZGVzIiwicHJldiIsImR1bW15Tm9kZSIsIkRpbWVuc2lvbiIsImR1bW15RWRnZSIsImxFZGdlIiwicGF0aCIsImVicCIsInNsaWRlclZhbHVlIiwiZGVmYXVsdFZhbHVlIiwibWluRGl2IiwibWF4TXVsIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsImEiLCJiIiwicmVtb3ZlZE5vZGVzIiwicmVtYWluaW5nRGVncmVlcyIsImZvdW5kQ2VudGVyIiwidGVtcExpc3QiLCJ0ZW1wTGlzdDIiLCJuZWlnaGJvdXJzIiwibmVpZ2hib3VyIiwib3RoZXJEZWdyZWUiLCJuZXdEZWdyZWUiLCJzZXRHcmFwaE1hbmFnZXIiLCJTSU1QTEVfTk9ERV9IQUxGX1NJWkUiLCJub2RlRnJvbSIsImhlYWQiLCJ0YWlsIiwidmFscyIsInZhbCIsIm90aGVyTm9kZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRyYW5zbGF0ZSIsImVxdWFscyIsInB0IiwidG9TdHJpbmciLCJzZXRYIiwic2V0WSIsImdldERpZmZlcmVuY2UiLCJnZXRDb3B5IiwiZGltIiwic2VlZCIsImx3b3JsZE9yZ1giLCJsd29ybGRPcmdZIiwibGRldmljZU9yZ1giLCJsZGV2aWNlT3JnWSIsImx3b3JsZEV4dFgiLCJsd29ybGRFeHRZIiwibGRldmljZUV4dFgiLCJsZGV2aWNlRXh0WSIsImdldFdvcmxkT3JnWCIsIndveCIsImdldFdvcmxkT3JnWSIsIndveSIsImdldFdvcmxkRXh0WCIsInNldFdvcmxkRXh0WCIsIndleCIsImdldFdvcmxkRXh0WSIsInNldFdvcmxkRXh0WSIsIndleSIsImdldERldmljZU9yZ1giLCJkb3giLCJnZXREZXZpY2VPcmdZIiwiZG95IiwiZ2V0RGV2aWNlRXh0WCIsInNldERldmljZUV4dFgiLCJkZXgiLCJnZXREZXZpY2VFeHRZIiwic2V0RGV2aWNlRXh0WSIsImRleSIsInRyYW5zZm9ybVgiLCJ4RGV2aWNlIiwid29ybGRFeHRYIiwidHJhbnNmb3JtWSIsInlEZXZpY2UiLCJ3b3JsZEV4dFkiLCJpbnZlcnNlVHJhbnNmb3JtWCIsInhXb3JsZCIsImRldmljZUV4dFgiLCJpbnZlcnNlVHJhbnNmb3JtWSIsInlXb3JsZCIsImRldmljZUV4dFkiLCJpblBvaW50Iiwib3V0UG9pbnQiLCJsYXN0SUQiLCJpc1ByaW1pdGl2ZSIsInVuaXF1ZUlEIiwiZ2V0U3RyaW5nIiwiYXJnIiwidHlwZSIsImRlZmF1bHRzIiwicmVhZHkiLCJzdG9wIiwibm9kZURpbWVuc2lvbnNJbmNsdWRlTGFiZWxzIiwicmVmcmVzaCIsImZpdCIsInBhZGRpbmciLCJyYW5kb21pemUiLCJub2RlUmVwdWxzaW9uIiwiZWRnZUVsYXN0aWNpdHkiLCJuZXN0aW5nRmFjdG9yIiwiZ3Jhdml0eSIsIm51bUl0ZXIiLCJ0aWxlIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJ0aWxpbmdQYWRkaW5nVmVydGljYWwiLCJ0aWxpbmdQYWRkaW5nSG9yaXpvbnRhbCIsImdyYXZpdHlSYW5nZUNvbXBvdW5kIiwiZ3Jhdml0eUNvbXBvdW5kIiwiZ3Jhdml0eVJhbmdlIiwiaW5pdGlhbEVuZXJneU9uSW5jcmVtZW50YWwiLCJleHRlbmQiLCJvcHRpb25zIiwiX0NvU0VMYXlvdXQiLCJfb3B0aW9ucyIsImdldFVzZXJPcHRpb25zIiwicnVuIiwiZnJhbWVJZCIsImlkVG9MTm9kZSIsInN0b3BwZWQiLCJ0cmlnZ2VyIiwiZWxlcyIsInByb2Nlc3NDaGlsZHJlbkxpc3QiLCJnZXRUb3BNb3N0Tm9kZXMiLCJlMSIsImdldFBvc2l0aW9ucyIsImVsZSIsIml0ZXJhdGVBbmltYXRlZCIsImFmdGVyUmVwb3NpdGlvbiIsIm9uZSIsInRpY2tzUGVyRnJhbWUiLCJpc0RvbmUiLCJwb3NpdGlvbnMiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImFuaW1hdGlvbkRhdGEiLCJwTm9kZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm5vdCIsImxheW91dFBvc2l0aW9ucyIsIm5vZGVzTWFwIiwicm9vdHMiLCJjaGlsZHJlbl9vZl9jaGlsZHJlbiIsInRoZU5vZGUiLCJkaW1lbnNpb25zIiwibGF5b3V0RGltZW5zaW9ucyIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsInBvc2l0aW9uIiwicGFyc2VGbG9hdCIsImNzcyIsImlzUGFyZW50IiwiYm91bmRpbmdCb3giLCJpbmNsdWRlTGFiZWxzIiwiaW5jbHVkZU5vZGVzIiwiaXNOYU4iLCJ0aGVOZXdHcmFwaCIsImN5dG9zY2FwZSIsIkVYQ0xVREVEX05PREVTIiwicmVnaXN0ZXIiLCJvcmdQcm90b3R5cGUiLCJleGNsdWRlZE5vZGVzIiwib3B0cyIsImFwaSIsImFwcGx5TWVyZ2VkTGF5b3V0IiwiYXBwbHlVbm5hbWVkTGF5b3V0IiwiY3lfaGVhZGxlc3MiLCJjcmVhdGVIZWFkbGVzc0luc3RhbmNlIiwiaGVhZGxlc3MiLCJzdHlsZUVuYWJsZWQiLCJvdGhlckN5IiwiZWxlbWVudHMiLCJvdGhlckVsZXMiLCJhbGxfZWxlcyIsInVuaW9uIiwicG9zIiwiem9vbSIsInBhbiIsImNvbW1vbkVsZXMiLCJjb21tb25faWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBLElBQUlBLG9CQUFvQixtQkFBQUMsQ0FBUSwyRUFBUixDQUF4Qjs7QUFFQSxTQUFTQyxhQUFULEdBQXlCLENBQ3hCOztBQUVEO0FBQ0EsS0FBSyxJQUFJQyxJQUFULElBQWlCSCxpQkFBakIsRUFBb0M7QUFDbENFLGdCQUFjQyxJQUFkLElBQXNCSCxrQkFBa0JHLElBQWxCLENBQXRCO0FBQ0Q7O0FBRURELGNBQWNFLCtCQUFkLEdBQWdELEtBQWhE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a1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjeXRvc2NhcGVTeW5jaGVkXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImN5dG9zY2FwZVN5bmNoZWRcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBGRExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vRkRMYXlvdXRDb25zdGFudHMnKTtcblxuZnVuY3Rpb24gQ29TRUNvbnN0YW50cygpIHtcbn1cblxuLy9Db1NFQ29uc3RhbnRzIGluaGVyaXRzIHN0YXRpYyBwcm9wcyBpbiBGRExheW91dENvbnN0YW50c1xuZm9yICh2YXIgcHJvcCBpbiBGRExheW91dENvbnN0YW50cykge1xuICBDb1NFQ29uc3RhbnRzW3Byb3BdID0gRkRMYXlvdXRDb25zdGFudHNbcHJvcF07XG59XG5cbkNvU0VDb25zdGFudHMuREVGQVVMVF9VU0VfTVVMVElfTEVWRUxfU0NBTElORyA9IGZhbHNlO1xuQ29TRUNvbnN0YW50cy5ERUZBVUxUX1JBRElBTF9TRVBBUkFUSU9OID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSDtcbkNvU0VDb25zdGFudHMuREVGQVVMVF9DT01QT05FTlRfU0VQRVJBVElPTiA9IDYwO1xuQ29TRUNvbnN0YW50cy5USUxFID0gdHJ1ZTtcbkNvU0VDb25zdGFudHMuVElMSU5HX1BBRERJTkdfVkVSVElDQUwgPSAxMDtcbkNvU0VDb25zdGFudHMuVElMSU5HX1BBRERJTkdfSE9SSVpPTlRBTCA9IDEwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvU0VDb25zdGFudHM7XG4iLCJ2YXIgRkRMYXlvdXRFZGdlID0gcmVxdWlyZSgnLi9GRExheW91dEVkZ2UnKTtcblxuZnVuY3Rpb24gQ29TRUVkZ2Uoc291cmNlLCB0YXJnZXQsIHZFZGdlKSB7XG4gIEZETGF5b3V0RWRnZS5jYWxsKHRoaXMsIHNvdXJjZSwgdGFyZ2V0LCB2RWRnZSk7XG59XG5cbkNvU0VFZGdlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRkRMYXlvdXRFZGdlLnByb3RvdHlwZSk7XG5mb3IgKHZhciBwcm9wIGluIEZETGF5b3V0RWRnZSkge1xuICBDb1NFRWRnZVtwcm9wXSA9IEZETGF5b3V0RWRnZVtwcm9wXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb1NFRWRnZVxuIiwidmFyIExHcmFwaCA9IHJlcXVpcmUoJy4vTEdyYXBoJyk7XG5cbmZ1bmN0aW9uIENvU0VHcmFwaChwYXJlbnQsIGdyYXBoTWdyLCB2R3JhcGgpIHtcbiAgTEdyYXBoLmNhbGwodGhpcywgcGFyZW50LCBncmFwaE1nciwgdkdyYXBoKTtcbn1cblxuQ29TRUdyYXBoLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEdyYXBoLnByb3RvdHlwZSk7XG5mb3IgKHZhciBwcm9wIGluIExHcmFwaCkge1xuICBDb1NFR3JhcGhbcHJvcF0gPSBMR3JhcGhbcHJvcF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29TRUdyYXBoO1xuIiwidmFyIExHcmFwaE1hbmFnZXIgPSByZXF1aXJlKCcuL0xHcmFwaE1hbmFnZXInKTtcblxuZnVuY3Rpb24gQ29TRUdyYXBoTWFuYWdlcihsYXlvdXQpIHtcbiAgTEdyYXBoTWFuYWdlci5jYWxsKHRoaXMsIGxheW91dCk7XG59XG5cbkNvU0VHcmFwaE1hbmFnZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMR3JhcGhNYW5hZ2VyLnByb3RvdHlwZSk7XG5mb3IgKHZhciBwcm9wIGluIExHcmFwaE1hbmFnZXIpIHtcbiAgQ29TRUdyYXBoTWFuYWdlcltwcm9wXSA9IExHcmFwaE1hbmFnZXJbcHJvcF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29TRUdyYXBoTWFuYWdlcjtcbiIsInZhciBGRExheW91dCA9IHJlcXVpcmUoJy4vRkRMYXlvdXQnKTtcbnZhciBDb1NFR3JhcGhNYW5hZ2VyID0gcmVxdWlyZSgnLi9Db1NFR3JhcGhNYW5hZ2VyJyk7XG52YXIgQ29TRUdyYXBoID0gcmVxdWlyZSgnLi9Db1NFR3JhcGgnKTtcbnZhciBDb1NFTm9kZSA9IHJlcXVpcmUoJy4vQ29TRU5vZGUnKTtcbnZhciBDb1NFRWRnZSA9IHJlcXVpcmUoJy4vQ29TRUVkZ2UnKTtcbnZhciBDb1NFQ29uc3RhbnRzID0gcmVxdWlyZSgnLi9Db1NFQ29uc3RhbnRzJyk7XG52YXIgRkRMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0ZETGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgTGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9MYXlvdXRDb25zdGFudHMnKTtcbnZhciBQb2ludCA9IHJlcXVpcmUoJy4vUG9pbnQnKTtcbnZhciBQb2ludEQgPSByZXF1aXJlKCcuL1BvaW50RCcpO1xudmFyIExheW91dCA9IHJlcXVpcmUoJy4vTGF5b3V0Jyk7XG52YXIgSW50ZWdlciA9IHJlcXVpcmUoJy4vSW50ZWdlcicpO1xudmFyIElHZW9tZXRyeSA9IHJlcXVpcmUoJy4vSUdlb21ldHJ5Jyk7XG52YXIgTEdyYXBoID0gcmVxdWlyZSgnLi9MR3JhcGgnKTtcbnZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL1RyYW5zZm9ybScpO1xuXG5mdW5jdGlvbiBDb1NFTGF5b3V0KCkge1xuICBGRExheW91dC5jYWxsKHRoaXMpO1xuICBcbiAgdGhpcy50b0JlVGlsZWQgPSB7fTsgLy8gTWVtb3JpemUgaWYgYSBub2RlIGlzIHRvIGJlIHRpbGVkIG9yIGlzIHRpbGVkXG59XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShGRExheW91dC5wcm90b3R5cGUpO1xuXG5mb3IgKHZhciBwcm9wIGluIEZETGF5b3V0KSB7XG4gIENvU0VMYXlvdXRbcHJvcF0gPSBGRExheW91dFtwcm9wXTtcbn1cblxuQ29TRUxheW91dC5wcm90b3R5cGUubmV3R3JhcGhNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZ20gPSBuZXcgQ29TRUdyYXBoTWFuYWdlcih0aGlzKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcbiAgcmV0dXJuIGdtO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUubmV3R3JhcGggPSBmdW5jdGlvbiAodkdyYXBoKSB7XG4gIHJldHVybiBuZXcgQ29TRUdyYXBoKG51bGwsIHRoaXMuZ3JhcGhNYW5hZ2VyLCB2R3JhcGgpO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUubmV3Tm9kZSA9IGZ1bmN0aW9uICh2Tm9kZSkge1xuICByZXR1cm4gbmV3IENvU0VOb2RlKHRoaXMuZ3JhcGhNYW5hZ2VyLCB2Tm9kZSk7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5uZXdFZGdlID0gZnVuY3Rpb24gKHZFZGdlKSB7XG4gIHJldHVybiBuZXcgQ29TRUVkZ2UobnVsbCwgbnVsbCwgdkVkZ2UpO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuaW5pdFBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIEZETGF5b3V0LnByb3RvdHlwZS5pbml0UGFyYW1ldGVycy5jYWxsKHRoaXMsIGFyZ3VtZW50cyk7XG4gIGlmICghdGhpcy5pc1N1YkxheW91dCkge1xuICAgIGlmIChDb1NFQ29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggPCAxMClcbiAgICB7XG4gICAgICB0aGlzLmlkZWFsRWRnZUxlbmd0aCA9IDEwO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgdGhpcy5pZGVhbEVkZ2VMZW5ndGggPSBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEg7XG4gICAgfVxuXG4gICAgdGhpcy51c2VTbWFydElkZWFsRWRnZUxlbmd0aENhbGN1bGF0aW9uID1cbiAgICAgICAgICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9VU0VfU01BUlRfSURFQUxfRURHRV9MRU5HVEhfQ0FMQ1VMQVRJT047XG4gICAgdGhpcy5zcHJpbmdDb25zdGFudCA9XG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX1NQUklOR19TVFJFTkdUSDtcbiAgICB0aGlzLnJlcHVsc2lvbkNvbnN0YW50ID1cbiAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUkVQVUxTSU9OX1NUUkVOR1RIO1xuICAgIHRoaXMuZ3Jhdml0eUNvbnN0YW50ID1cbiAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9TVFJFTkdUSDtcbiAgICB0aGlzLmNvbXBvdW5kR3Jhdml0eUNvbnN0YW50ID1cbiAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9TVFJFTkdUSDtcbiAgICB0aGlzLmdyYXZpdHlSYW5nZUZhY3RvciA9XG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SO1xuICAgIHRoaXMuY29tcG91bmRHcmF2aXR5UmFuZ2VGYWN0b3IgPVxuICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUjtcbiAgfVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY3JlYXRlQmVuZHNBc05lZWRlZCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0NSRUFURV9CRU5EU19BU19ORUVERUQ7XG4gIGlmIChjcmVhdGVCZW5kc0FzTmVlZGVkKVxuICB7XG4gICAgdGhpcy5jcmVhdGVCZW5kcG9pbnRzKCk7XG4gICAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxFZGdlcygpO1xuICB9XG5cbiAgdGhpcy5sZXZlbCA9IDA7XG4gIHJldHVybiB0aGlzLmNsYXNzaWNMYXlvdXQoKTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmNsYXNzaWNMYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubm9kZXNXaXRoR3Jhdml0eSA9IHRoaXMuY2FsY3VsYXRlTm9kZXNUb0FwcGx5R3Jhdml0YXRpb25UbygpO1xuICB0aGlzLmdyYXBoTWFuYWdlci5zZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbih0aGlzLm5vZGVzV2l0aEdyYXZpdHkpO1xuICB0aGlzLmNhbGNOb09mQ2hpbGRyZW5Gb3JBbGxOb2RlcygpO1xuICB0aGlzLmdyYXBoTWFuYWdlci5jYWxjTG93ZXN0Q29tbW9uQW5jZXN0b3JzKCk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLmNhbGNJbmNsdXNpb25UcmVlRGVwdGhzKCk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5jYWxjRXN0aW1hdGVkU2l6ZSgpO1xuICB0aGlzLmNhbGNJZGVhbEVkZ2VMZW5ndGhzKCk7XG4gIFxuICBpZiAoIXRoaXMuaW5jcmVtZW50YWwpXG4gIHtcbiAgICB2YXIgZm9yZXN0ID0gdGhpcy5nZXRGbGF0Rm9yZXN0KCk7XG5cbiAgICAvLyBUaGUgZ3JhcGggYXNzb2NpYXRlZCB3aXRoIHRoaXMgbGF5b3V0IGlzIGZsYXQgYW5kIGEgZm9yZXN0XG4gICAgaWYgKGZvcmVzdC5sZW5ndGggPiAwKVxuICAgIHtcbiAgICAgIHRoaXMucG9zaXRpb25Ob2Rlc1JhZGlhbGx5KGZvcmVzdCk7XG4gICAgfVxuICAgIC8vIFRoZSBncmFwaCBhc3NvY2lhdGVkIHdpdGggdGhpcyBsYXlvdXQgaXMgbm90IGZsYXQgb3IgYSBmb3Jlc3RcbiAgICBlbHNlXG4gICAge1xuICAgICAgLy8gUmVkdWNlIHRoZSB0cmVlcyB3aGVuIGluY3JlbWVudGFsIG1vZGUgaXMgbm90IGVuYWJsZWQgYW5kIGdyYXBoIGlzIG5vdCBhIGZvcmVzdCBcbiAgICAgIHRoaXMucmVkdWNlVHJlZXMoKTtcbiAgICAgIC8vIFVwZGF0ZSBub2RlcyB0aGF0IGdyYXZpdHkgd2lsbCBiZSBhcHBsaWVkXG4gICAgICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uKCk7XG4gICAgICB2YXIgYWxsTm9kZXMgPSBuZXcgU2V0KHRoaXMuZ2V0QWxsTm9kZXMoKSk7XG4gICAgICB2YXIgaW50ZXJzZWN0aW9uID0gdGhpcy5ub2Rlc1dpdGhHcmF2aXR5LmZpbHRlcih4ID0+IGFsbE5vZGVzLmhhcyh4KSk7XG4gICAgICB0aGlzLmdyYXBoTWFuYWdlci5zZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbihpbnRlcnNlY3Rpb24pO1xuICAgICAgXG4gICAgICB0aGlzLnBvc2l0aW9uTm9kZXNSYW5kb21seSgpO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuaW5pdFNwcmluZ0VtYmVkZGVyKCk7XG4gIHRoaXMucnVuU3ByaW5nRW1iZWRkZXIoKTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy50b3RhbEl0ZXJhdGlvbnMrKztcbiAgXG4gIGlmICh0aGlzLnRvdGFsSXRlcmF0aW9ucyA9PT0gdGhpcy5tYXhJdGVyYXRpb25zICYmICF0aGlzLmlzVHJlZUdyb3dpbmcgJiYgIXRoaXMuaXNHcm93dGhGaW5pc2hlZCkge1xuICAgIGlmKHRoaXMucHJ1bmVkTm9kZXNBbGwubGVuZ3RoID4gMCl7XG4gICAgICB0aGlzLmlzVHJlZUdyb3dpbmcgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlOyAgXG4gICAgfVxuICB9XG4gIFxuICBpZiAodGhpcy50b3RhbEl0ZXJhdGlvbnMgJSBGRExheW91dENvbnN0YW50cy5DT05WRVJHRU5DRV9DSEVDS19QRVJJT0QgPT0gMCAgJiYgIXRoaXMuaXNUcmVlR3Jvd2luZyAmJiAhdGhpcy5pc0dyb3d0aEZpbmlzaGVkKVxuICB7XG4gICAgaWYgKHRoaXMuaXNDb252ZXJnZWQoKSlcbiAgICB7XG4gICAgICBpZih0aGlzLnBydW5lZE5vZGVzQWxsLmxlbmd0aCA+IDApe1xuICAgICAgICB0aGlzLmlzVHJlZUdyb3dpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlOyAgXG4gICAgICB9IFxuICAgIH1cblxuICAgIHRoaXMuY29vbGluZ0ZhY3RvciA9IHRoaXMuaW5pdGlhbENvb2xpbmdGYWN0b3IgKlxuICAgICAgICAgICAgKCh0aGlzLm1heEl0ZXJhdGlvbnMgLSB0aGlzLnRvdGFsSXRlcmF0aW9ucykgLyB0aGlzLm1heEl0ZXJhdGlvbnMpO1xuICAgIHRoaXMuYW5pbWF0aW9uUGVyaW9kID0gTWF0aC5jZWlsKHRoaXMuaW5pdGlhbEFuaW1hdGlvblBlcmlvZCAqIE1hdGguc3FydCh0aGlzLmNvb2xpbmdGYWN0b3IpKTtcbiAgfVxuICAvLyBPcGVyYXRpb25zIHdoaWxlIHRyZWUgaXMgZ3Jvd2luZyBhZ2FpbiBcbiAgaWYodGhpcy5pc1RyZWVHcm93aW5nKXtcbiAgICBpZih0aGlzLmdyb3dUcmVlSXRlcmF0aW9ucyAlIDEwID09IDApe1xuICAgICAgaWYodGhpcy5wcnVuZWROb2Rlc0FsbC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnVwZGF0ZUJvdW5kcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZUdyaWQoKTtcbiAgICAgICAgdGhpcy5ncm93VHJlZSh0aGlzLnBydW5lZE5vZGVzQWxsKTtcbiAgICAgICAgLy8gVXBkYXRlIG5vZGVzIHRoYXQgZ3Jhdml0eSB3aWxsIGJlIGFwcGxpZWRcbiAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbigpO1xuICAgICAgICB2YXIgYWxsTm9kZXMgPSBuZXcgU2V0KHRoaXMuZ2V0QWxsTm9kZXMoKSk7XG4gICAgICAgIHZhciBpbnRlcnNlY3Rpb24gPSB0aGlzLm5vZGVzV2l0aEdyYXZpdHkuZmlsdGVyKHggPT4gYWxsTm9kZXMuaGFzKHgpKTtcbiAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIuc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oaW50ZXJzZWN0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnVwZGF0ZUJvdW5kcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZUdyaWQoKTsgXG4gICAgICAgIHRoaXMuY29vbGluZ0ZhY3RvciA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUw7IFxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaXNUcmVlR3Jvd2luZyA9IGZhbHNlOyAgXG4gICAgICAgIHRoaXMuaXNHcm93dGhGaW5pc2hlZCA9IHRydWU7IFxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmdyb3dUcmVlSXRlcmF0aW9ucysrO1xuICB9XG4gIC8vIE9wZXJhdGlvbnMgYWZ0ZXIgZ3Jvd3RoIGlzIGZpbmlzaGVkXG4gIGlmKHRoaXMuaXNHcm93dGhGaW5pc2hlZCl7XG4gICAgaWYgKHRoaXMuaXNDb252ZXJnZWQoKSlcbiAgICB7XG4gICAgICByZXR1cm4gdHJ1ZTsgIFxuICAgIH1cbiAgICBpZih0aGlzLmFmdGVyR3Jvd3RoSXRlcmF0aW9ucyAlIDEwID09IDApe1xuICAgICAgdGhpcy5ncmFwaE1hbmFnZXIudXBkYXRlQm91bmRzKCk7XG4gICAgICB0aGlzLnVwZGF0ZUdyaWQoKTsgXG4gICAgfVxuICAgIHRoaXMuY29vbGluZ0ZhY3RvciA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUwgKiAoKDEwMCAtIHRoaXMuYWZ0ZXJHcm93dGhJdGVyYXRpb25zKSAvIDEwMCk7XG4gICAgdGhpcy5hZnRlckdyb3d0aEl0ZXJhdGlvbnMrKztcbiAgfVxuICBcbiAgdGhpcy50b3RhbERpc3BsYWNlbWVudCA9IDA7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLnVwZGF0ZUJvdW5kcygpO1xuICB0aGlzLmNhbGNTcHJpbmdGb3JjZXMoKTtcbiAgdGhpcy5jYWxjUmVwdWxzaW9uRm9yY2VzKCk7XG4gIHRoaXMuY2FsY0dyYXZpdGF0aW9uYWxGb3JjZXMoKTtcbiAgdGhpcy5tb3ZlTm9kZXMoKTtcbiAgdGhpcy5hbmltYXRlKCk7XG4gIFxuICByZXR1cm4gZmFsc2U7IC8vIExheW91dCBpcyBub3QgZW5kZWQgeWV0IHJldHVybiBmYWxzZVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuZ2V0UG9zaXRpb25zRGF0YSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgYWxsTm9kZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2RlcygpO1xuICB2YXIgcERhdGEgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciByZWN0ID0gYWxsTm9kZXNbaV0ucmVjdDtcbiAgICB2YXIgaWQgPSBhbGxOb2Rlc1tpXS5pZDtcbiAgICBwRGF0YVtpZF0gPSB7XG4gICAgICBpZDogaWQsXG4gICAgICB4OiByZWN0LmdldENlbnRlclgoKSxcbiAgICAgIHk6IHJlY3QuZ2V0Q2VudGVyWSgpLFxuICAgICAgdzogcmVjdC53aWR0aCxcbiAgICAgIGg6IHJlY3QuaGVpZ2h0XG4gICAgfTtcbiAgfVxuICBcbiAgcmV0dXJuIHBEYXRhO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUucnVuU3ByaW5nRW1iZWRkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuaW5pdGlhbEFuaW1hdGlvblBlcmlvZCA9IDI1O1xuICB0aGlzLmFuaW1hdGlvblBlcmlvZCA9IHRoaXMuaW5pdGlhbEFuaW1hdGlvblBlcmlvZDtcbiAgdmFyIGxheW91dEVuZGVkID0gZmFsc2U7XG4gIFxuICAvLyBJZiBhbWluYXRlIG9wdGlvbiBpcyAnZHVyaW5nJyBzaWduYWwgdGhhdCBsYXlvdXQgaXMgc3VwcG9zZWQgdG8gc3RhcnQgaXRlcmF0aW5nXG4gIGlmICggRkRMYXlvdXRDb25zdGFudHMuQU5JTUFURSA9PT0gJ2R1cmluZycgKSB7XG4gICAgdGhpcy5lbWl0KCdsYXlvdXRzdGFydGVkJyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gSWYgYW1pbmF0ZSBvcHRpb24gaXMgJ2R1cmluZycgdGljaygpIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIG9uIGluZGV4LmpzXG4gICAgd2hpbGUgKCFsYXlvdXRFbmRlZCkge1xuICAgICAgbGF5b3V0RW5kZWQgPSB0aGlzLnRpY2soKTtcbiAgICB9XG5cbiAgICB0aGlzLmdyYXBoTWFuYWdlci51cGRhdGVCb3VuZHMoKTtcbiAgfVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuY2FsY3VsYXRlTm9kZXNUb0FwcGx5R3Jhdml0YXRpb25UbyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG5vZGVMaXN0ID0gW107XG4gIHZhciBncmFwaDtcblxuICB2YXIgZ3JhcGhzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0R3JhcGhzKCk7XG4gIHZhciBzaXplID0gZ3JhcGhzLmxlbmd0aDtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBzaXplOyBpKyspXG4gIHtcbiAgICBncmFwaCA9IGdyYXBoc1tpXTtcblxuICAgIGdyYXBoLnVwZGF0ZUNvbm5lY3RlZCgpO1xuXG4gICAgaWYgKCFncmFwaC5pc0Nvbm5lY3RlZClcbiAgICB7XG4gICAgICBub2RlTGlzdCA9IG5vZGVMaXN0LmNvbmNhdChncmFwaC5nZXROb2RlcygpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9kZUxpc3Q7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5jYWxjTm9PZkNoaWxkcmVuRm9yQWxsTm9kZXMgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgbm9kZTtcbiAgdmFyIGFsbE5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXMoKTtcbiAgXG4gIGZvcih2YXIgaSA9IDA7IGkgPCBhbGxOb2Rlcy5sZW5ndGg7IGkrKylcbiAge1xuICAgICAgbm9kZSA9IGFsbE5vZGVzW2ldO1xuICAgICAgbm9kZS5ub09mQ2hpbGRyZW4gPSBub2RlLmdldE5vT2ZDaGlsZHJlbigpO1xuICB9XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5jcmVhdGVCZW5kcG9pbnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZWRnZXMgPSBbXTtcbiAgZWRnZXMgPSBlZGdlcy5jb25jYXQodGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsRWRnZXMoKSk7XG4gIHZhciB2aXNpdGVkID0gbmV3IEhhc2hTZXQoKTtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBlZGdlcy5sZW5ndGg7IGkrKylcbiAge1xuICAgIHZhciBlZGdlID0gZWRnZXNbaV07XG5cbiAgICBpZiAoIXZpc2l0ZWQuY29udGFpbnMoZWRnZSkpXG4gICAge1xuICAgICAgdmFyIHNvdXJjZSA9IGVkZ2UuZ2V0U291cmNlKCk7XG4gICAgICB2YXIgdGFyZ2V0ID0gZWRnZS5nZXRUYXJnZXQoKTtcblxuICAgICAgaWYgKHNvdXJjZSA9PSB0YXJnZXQpXG4gICAgICB7XG4gICAgICAgIGVkZ2UuZ2V0QmVuZHBvaW50cygpLnB1c2gobmV3IFBvaW50RCgpKTtcbiAgICAgICAgZWRnZS5nZXRCZW5kcG9pbnRzKCkucHVzaChuZXcgUG9pbnREKCkpO1xuICAgICAgICB0aGlzLmNyZWF0ZUR1bW15Tm9kZXNGb3JCZW5kcG9pbnRzKGVkZ2UpO1xuICAgICAgICB2aXNpdGVkLmFkZChlZGdlKTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgdmFyIGVkZ2VMaXN0ID0gW107XG5cbiAgICAgICAgZWRnZUxpc3QgPSBlZGdlTGlzdC5jb25jYXQoc291cmNlLmdldEVkZ2VMaXN0VG9Ob2RlKHRhcmdldCkpO1xuICAgICAgICBlZGdlTGlzdCA9IGVkZ2VMaXN0LmNvbmNhdCh0YXJnZXQuZ2V0RWRnZUxpc3RUb05vZGUoc291cmNlKSk7XG5cbiAgICAgICAgaWYgKCF2aXNpdGVkLmNvbnRhaW5zKGVkZ2VMaXN0WzBdKSlcbiAgICAgICAge1xuICAgICAgICAgIGlmIChlZGdlTGlzdC5sZW5ndGggPiAxKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBrO1xuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IGVkZ2VMaXN0Lmxlbmd0aDsgaysrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YXIgbXVsdGlFZGdlID0gZWRnZUxpc3Rba107XG4gICAgICAgICAgICAgIG11bHRpRWRnZS5nZXRCZW5kcG9pbnRzKCkucHVzaChuZXcgUG9pbnREKCkpO1xuICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUR1bW15Tm9kZXNGb3JCZW5kcG9pbnRzKG11bHRpRWRnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHZpc2l0ZWQuYWRkQWxsKGxpc3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZpc2l0ZWQuc2l6ZSgpID09IGVkZ2VzLmxlbmd0aClcbiAgICB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnBvc2l0aW9uTm9kZXNSYWRpYWxseSA9IGZ1bmN0aW9uIChmb3Jlc3QpIHtcbiAgLy8gV2UgdGlsZSB0aGUgdHJlZXMgdG8gYSBncmlkIHJvdyBieSByb3c7IGZpcnN0IHRyZWUgc3RhcnRzIGF0ICgwLDApXG4gIHZhciBjdXJyZW50U3RhcnRpbmdQb2ludCA9IG5ldyBQb2ludCgwLCAwKTtcbiAgdmFyIG51bWJlck9mQ29sdW1ucyA9IE1hdGguY2VpbChNYXRoLnNxcnQoZm9yZXN0Lmxlbmd0aCkpO1xuICB2YXIgaGVpZ2h0ID0gMDtcbiAgdmFyIGN1cnJlbnRZID0gMDtcbiAgdmFyIGN1cnJlbnRYID0gMDtcbiAgdmFyIHBvaW50ID0gbmV3IFBvaW50RCgwLCAwKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcmVzdC5sZW5ndGg7IGkrKylcbiAge1xuICAgIGlmIChpICUgbnVtYmVyT2ZDb2x1bW5zID09IDApXG4gICAge1xuICAgICAgLy8gU3RhcnQgb2YgYSBuZXcgcm93LCBtYWtlIHRoZSB4IGNvb3JkaW5hdGUgMCwgaW5jcmVtZW50IHRoZVxuICAgICAgLy8geSBjb29yZGluYXRlIHdpdGggdGhlIG1heCBoZWlnaHQgb2YgdGhlIHByZXZpb3VzIHJvd1xuICAgICAgY3VycmVudFggPSAwO1xuICAgICAgY3VycmVudFkgPSBoZWlnaHQ7XG5cbiAgICAgIGlmIChpICE9IDApXG4gICAgICB7XG4gICAgICAgIGN1cnJlbnRZICs9IENvU0VDb25zdGFudHMuREVGQVVMVF9DT01QT05FTlRfU0VQRVJBVElPTjtcbiAgICAgIH1cblxuICAgICAgaGVpZ2h0ID0gMDtcbiAgICB9XG5cbiAgICB2YXIgdHJlZSA9IGZvcmVzdFtpXTtcblxuICAgIC8vIEZpbmQgdGhlIGNlbnRlciBvZiB0aGUgdHJlZVxuICAgIHZhciBjZW50ZXJOb2RlID0gTGF5b3V0LmZpbmRDZW50ZXJPZlRyZWUodHJlZSk7XG5cbiAgICAvLyBTZXQgdGhlIHN0YXJpbmcgcG9pbnQgb2YgdGhlIG5leHQgdHJlZVxuICAgIGN1cnJlbnRTdGFydGluZ1BvaW50LnggPSBjdXJyZW50WDtcbiAgICBjdXJyZW50U3RhcnRpbmdQb2ludC55ID0gY3VycmVudFk7XG5cbiAgICAvLyBEbyBhIHJhZGlhbCBsYXlvdXQgc3RhcnRpbmcgd2l0aCB0aGUgY2VudGVyXG4gICAgcG9pbnQgPVxuICAgICAgICAgICAgQ29TRUxheW91dC5yYWRpYWxMYXlvdXQodHJlZSwgY2VudGVyTm9kZSwgY3VycmVudFN0YXJ0aW5nUG9pbnQpO1xuXG4gICAgaWYgKHBvaW50LnkgPiBoZWlnaHQpXG4gICAge1xuICAgICAgaGVpZ2h0ID0gTWF0aC5mbG9vcihwb2ludC55KTtcbiAgICB9XG5cbiAgICBjdXJyZW50WCA9IE1hdGguZmxvb3IocG9pbnQueCArIENvU0VDb25zdGFudHMuREVGQVVMVF9DT01QT05FTlRfU0VQRVJBVElPTik7XG4gIH1cblxuICB0aGlzLnRyYW5zZm9ybShcbiAgICAgICAgICBuZXcgUG9pbnREKExheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWCAtIHBvaW50LnggLyAyLFxuICAgICAgICAgICAgICAgICAgTGF5b3V0Q29uc3RhbnRzLldPUkxEX0NFTlRFUl9ZIC0gcG9pbnQueSAvIDIpKTtcbn07XG5cbkNvU0VMYXlvdXQucmFkaWFsTGF5b3V0ID0gZnVuY3Rpb24gKHRyZWUsIGNlbnRlck5vZGUsIHN0YXJ0aW5nUG9pbnQpIHtcbiAgdmFyIHJhZGlhbFNlcCA9IE1hdGgubWF4KHRoaXMubWF4RGlhZ29uYWxJblRyZWUodHJlZSksXG4gICAgICAgICAgQ29TRUNvbnN0YW50cy5ERUZBVUxUX1JBRElBTF9TRVBBUkFUSU9OKTtcbiAgQ29TRUxheW91dC5icmFuY2hSYWRpYWxMYXlvdXQoY2VudGVyTm9kZSwgbnVsbCwgMCwgMzU5LCAwLCByYWRpYWxTZXApO1xuICB2YXIgYm91bmRzID0gTEdyYXBoLmNhbGN1bGF0ZUJvdW5kcyh0cmVlKTtcblxuICB2YXIgdHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybSgpO1xuICB0cmFuc2Zvcm0uc2V0RGV2aWNlT3JnWChib3VuZHMuZ2V0TWluWCgpKTtcbiAgdHJhbnNmb3JtLnNldERldmljZU9yZ1koYm91bmRzLmdldE1pblkoKSk7XG4gIHRyYW5zZm9ybS5zZXRXb3JsZE9yZ1goc3RhcnRpbmdQb2ludC54KTtcbiAgdHJhbnNmb3JtLnNldFdvcmxkT3JnWShzdGFydGluZ1BvaW50LnkpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZS5sZW5ndGg7IGkrKylcbiAge1xuICAgIHZhciBub2RlID0gdHJlZVtpXTtcbiAgICBub2RlLnRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuICB9XG5cbiAgdmFyIGJvdHRvbVJpZ2h0ID1cbiAgICAgICAgICBuZXcgUG9pbnREKGJvdW5kcy5nZXRNYXhYKCksIGJvdW5kcy5nZXRNYXhZKCkpO1xuXG4gIHJldHVybiB0cmFuc2Zvcm0uaW52ZXJzZVRyYW5zZm9ybVBvaW50KGJvdHRvbVJpZ2h0KTtcbn07XG5cbkNvU0VMYXlvdXQuYnJhbmNoUmFkaWFsTGF5b3V0ID0gZnVuY3Rpb24gKG5vZGUsIHBhcmVudE9mTm9kZSwgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGRpc3RhbmNlLCByYWRpYWxTZXBhcmF0aW9uKSB7XG4gIC8vIEZpcnN0LCBwb3NpdGlvbiB0aGlzIG5vZGUgYnkgZmluZGluZyBpdHMgYW5nbGUuXG4gIHZhciBoYWxmSW50ZXJ2YWwgPSAoKGVuZEFuZ2xlIC0gc3RhcnRBbmdsZSkgKyAxKSAvIDI7XG5cbiAgaWYgKGhhbGZJbnRlcnZhbCA8IDApXG4gIHtcbiAgICBoYWxmSW50ZXJ2YWwgKz0gMTgwO1xuICB9XG5cbiAgdmFyIG5vZGVBbmdsZSA9IChoYWxmSW50ZXJ2YWwgKyBzdGFydEFuZ2xlKSAlIDM2MDtcbiAgdmFyIHRldGEgPSAobm9kZUFuZ2xlICogSUdlb21ldHJ5LlRXT19QSSkgLyAzNjA7XG5cbiAgLy8gTWFrZSBwb2xhciB0byBqYXZhIGNvcmRpbmF0ZSBjb252ZXJzaW9uLlxuICB2YXIgY29zX3RldGEgPSBNYXRoLmNvcyh0ZXRhKTtcbiAgdmFyIHhfID0gZGlzdGFuY2UgKiBNYXRoLmNvcyh0ZXRhKTtcbiAgdmFyIHlfID0gZGlzdGFuY2UgKiBNYXRoLnNpbih0ZXRhKTtcblxuICBub2RlLnNldENlbnRlcih4XywgeV8pO1xuXG4gIC8vIFRyYXZlcnNlIGFsbCBuZWlnaGJvcnMgb2YgdGhpcyBub2RlIGFuZCByZWN1cnNpdmVseSBjYWxsIHRoaXNcbiAgLy8gZnVuY3Rpb24uXG4gIHZhciBuZWlnaGJvckVkZ2VzID0gW107XG4gIG5laWdoYm9yRWRnZXMgPSBuZWlnaGJvckVkZ2VzLmNvbmNhdChub2RlLmdldEVkZ2VzKCkpO1xuICB2YXIgY2hpbGRDb3VudCA9IG5laWdoYm9yRWRnZXMubGVuZ3RoO1xuXG4gIGlmIChwYXJlbnRPZk5vZGUgIT0gbnVsbClcbiAge1xuICAgIGNoaWxkQ291bnQtLTtcbiAgfVxuXG4gIHZhciBicmFuY2hDb3VudCA9IDA7XG5cbiAgdmFyIGluY0VkZ2VzQ291bnQgPSBuZWlnaGJvckVkZ2VzLmxlbmd0aDtcbiAgdmFyIHN0YXJ0SW5kZXg7XG5cbiAgdmFyIGVkZ2VzID0gbm9kZS5nZXRFZGdlc0JldHdlZW4ocGFyZW50T2ZOb2RlKTtcblxuICAvLyBJZiB0aGVyZSBhcmUgbXVsdGlwbGUgZWRnZXMsIHBydW5lIHRoZW0gdW50aWwgdGhlcmUgcmVtYWlucyBvbmx5IG9uZVxuICAvLyBlZGdlLlxuICB3aGlsZSAoZWRnZXMubGVuZ3RoID4gMSlcbiAge1xuICAgIC8vbmVpZ2hib3JFZGdlcy5yZW1vdmUoZWRnZXMucmVtb3ZlKDApKTtcbiAgICB2YXIgdGVtcCA9IGVkZ2VzWzBdO1xuICAgIGVkZ2VzLnNwbGljZSgwLCAxKTtcbiAgICB2YXIgaW5kZXggPSBuZWlnaGJvckVkZ2VzLmluZGV4T2YodGVtcCk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIG5laWdoYm9yRWRnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgaW5jRWRnZXNDb3VudC0tO1xuICAgIGNoaWxkQ291bnQtLTtcbiAgfVxuXG4gIGlmIChwYXJlbnRPZk5vZGUgIT0gbnVsbClcbiAge1xuICAgIC8vYXNzZXJ0IGVkZ2VzLmxlbmd0aCA9PSAxO1xuICAgIHN0YXJ0SW5kZXggPSAobmVpZ2hib3JFZGdlcy5pbmRleE9mKGVkZ2VzWzBdKSArIDEpICUgaW5jRWRnZXNDb3VudDtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICBzdGFydEluZGV4ID0gMDtcbiAgfVxuXG4gIHZhciBzdGVwQW5nbGUgPSBNYXRoLmFicyhlbmRBbmdsZSAtIHN0YXJ0QW5nbGUpIC8gY2hpbGRDb3VudDtcblxuICBmb3IgKHZhciBpID0gc3RhcnRJbmRleDtcbiAgICAgICAgICBicmFuY2hDb3VudCAhPSBjaGlsZENvdW50O1xuICAgICAgICAgIGkgPSAoKytpKSAlIGluY0VkZ2VzQ291bnQpXG4gIHtcbiAgICB2YXIgY3VycmVudE5laWdoYm9yID1cbiAgICAgICAgICAgIG5laWdoYm9yRWRnZXNbaV0uZ2V0T3RoZXJFbmQobm9kZSk7XG5cbiAgICAvLyBEb24ndCBiYWNrIHRyYXZlcnNlIHRvIHJvb3Qgbm9kZSBpbiBjdXJyZW50IHRyZWUuXG4gICAgaWYgKGN1cnJlbnROZWlnaGJvciA9PSBwYXJlbnRPZk5vZGUpXG4gICAge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkU3RhcnRBbmdsZSA9XG4gICAgICAgICAgICAoc3RhcnRBbmdsZSArIGJyYW5jaENvdW50ICogc3RlcEFuZ2xlKSAlIDM2MDtcbiAgICB2YXIgY2hpbGRFbmRBbmdsZSA9IChjaGlsZFN0YXJ0QW5nbGUgKyBzdGVwQW5nbGUpICUgMzYwO1xuXG4gICAgQ29TRUxheW91dC5icmFuY2hSYWRpYWxMYXlvdXQoY3VycmVudE5laWdoYm9yLFxuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIGNoaWxkU3RhcnRBbmdsZSwgY2hpbGRFbmRBbmdsZSxcbiAgICAgICAgICAgIGRpc3RhbmNlICsgcmFkaWFsU2VwYXJhdGlvbiwgcmFkaWFsU2VwYXJhdGlvbik7XG5cbiAgICBicmFuY2hDb3VudCsrO1xuICB9XG59O1xuXG5Db1NFTGF5b3V0Lm1heERpYWdvbmFsSW5UcmVlID0gZnVuY3Rpb24gKHRyZWUpIHtcbiAgdmFyIG1heERpYWdvbmFsID0gSW50ZWdlci5NSU5fVkFMVUU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgdmFyIG5vZGUgPSB0cmVlW2ldO1xuICAgIHZhciBkaWFnb25hbCA9IG5vZGUuZ2V0RGlhZ29uYWwoKTtcblxuICAgIGlmIChkaWFnb25hbCA+IG1heERpYWdvbmFsKVxuICAgIHtcbiAgICAgIG1heERpYWdvbmFsID0gZGlhZ29uYWw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1heERpYWdvbmFsO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuY2FsY1JlcHVsc2lvblJhbmdlID0gZnVuY3Rpb24gKCkge1xuICAvLyBmb3JtdWxhIGlzIDIgeCAobGV2ZWwgKyAxKSB4IGlkZWFsRWRnZUxlbmd0aFxuICByZXR1cm4gKDIgKiAodGhpcy5sZXZlbCArIDEpICogdGhpcy5pZGVhbEVkZ2VMZW5ndGgpO1xufTtcblxuLy8gVGlsaW5nIG1ldGhvZHNcblxuLy8gR3JvdXAgemVybyBkZWdyZWUgbWVtYmVycyB3aG9zZSBwYXJlbnRzIGFyZSBub3QgdG8gYmUgdGlsZWQsIGNyZWF0ZSBkdW1teSBwYXJlbnRzIHdoZXJlIG5lZWRlZCBhbmQgZmlsbCBtZW1iZXJHcm91cHMgYnkgdGhlaXIgZHVtbXAgcGFyZW50IGlkJ3NcbkNvU0VMYXlvdXQucHJvdG90eXBlLmdyb3VwWmVyb0RlZ3JlZU1lbWJlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgLy8gYXJyYXkgb2YgW3BhcmVudF9pZCB4IG9uZURlZ3JlZU5vZGVfaWRdXG4gIHZhciB0ZW1wTWVtYmVyR3JvdXBzID0ge307IC8vIEEgdGVtcG9yYXJ5IG1hcCBvZiBwYXJlbnQgbm9kZSBhbmQgaXRzIHplcm8gZGVncmVlIG1lbWJlcnNcbiAgdGhpcy5tZW1iZXJHcm91cHMgPSB7fTsgLy8gQSBtYXAgb2YgZHVtbXkgcGFyZW50IG5vZGUgYW5kIGl0cyB6ZXJvIGRlZ3JlZSBtZW1iZXJzIHdob3NlIHBhcmVudHMgYXJlIG5vdCB0byBiZSB0aWxlZFxuICB0aGlzLmlkVG9EdW1teU5vZGUgPSB7fTsgLy8gQSBtYXAgb2YgaWQgdG8gZHVtbXkgbm9kZSBcbiAgXG4gIHZhciB6ZXJvRGVncmVlID0gW107IC8vIExpc3Qgb2YgemVybyBkZWdyZWUgbm9kZXMgd2hvc2UgcGFyZW50cyBhcmUgbm90IHRvIGJlIHRpbGVkXG4gIHZhciBhbGxOb2RlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzKCk7XG5cbiAgLy8gRmlsbCB6ZXJvIGRlZ3JlZSBsaXN0XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbm9kZSA9IGFsbE5vZGVzW2ldO1xuICAgIHZhciBwYXJlbnQgPSBub2RlLmdldFBhcmVudCgpO1xuICAgIC8vIElmIGEgbm9kZSBoYXMgemVybyBkZWdyZWUgYW5kIGl0cyBwYXJlbnQgaXMgbm90IHRvIGJlIHRpbGVkIGlmIGV4aXN0cyBhZGQgdGhhdCBub2RlIHRvIHplcm9EZWdyZXMgbGlzdFxuICAgIGlmICh0aGlzLmdldE5vZGVEZWdyZWVXaXRoQ2hpbGRyZW4obm9kZSkgPT09IDAgJiYgKCBwYXJlbnQuaWQgPT0gdW5kZWZpbmVkIHx8ICF0aGlzLmdldFRvQmVUaWxlZChwYXJlbnQpICkgKSB7XG4gICAgICB6ZXJvRGVncmVlLnB1c2gobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ3JlYXRlIGEgbWFwIG9mIHBhcmVudCBub2RlIGFuZCBpdHMgemVybyBkZWdyZWUgbWVtYmVyc1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHplcm9EZWdyZWUubGVuZ3RoOyBpKyspXG4gIHtcbiAgICB2YXIgbm9kZSA9IHplcm9EZWdyZWVbaV07IC8vIFplcm8gZGVncmVlIG5vZGUgaXRzZWxmXG4gICAgdmFyIHBfaWQgPSBub2RlLmdldFBhcmVudCgpLmlkOyAvLyBQYXJlbnQgaWRcblxuICAgIGlmICh0eXBlb2YgdGVtcE1lbWJlckdyb3Vwc1twX2lkXSA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgIHRlbXBNZW1iZXJHcm91cHNbcF9pZF0gPSBbXTtcblxuICAgIHRlbXBNZW1iZXJHcm91cHNbcF9pZF0gPSB0ZW1wTWVtYmVyR3JvdXBzW3BfaWRdLmNvbmNhdChub2RlKTsgLy8gUHVzaCBub2RlIHRvIHRoZSBsaXN0IGJlbG9uZ3MgdG8gaXRzIHBhcmVudCBpbiB0ZW1wTWVtYmVyR3JvdXBzXG4gIH1cblxuICAvLyBJZiB0aGVyZSBhcmUgYXQgbGVhc3QgdHdvIG5vZGVzIGF0IGEgbGV2ZWwsIGNyZWF0ZSBhIGR1bW15IGNvbXBvdW5kIGZvciB0aGVtXG4gIE9iamVjdC5rZXlzKHRlbXBNZW1iZXJHcm91cHMpLmZvckVhY2goZnVuY3Rpb24ocF9pZCkge1xuICAgIGlmICh0ZW1wTWVtYmVyR3JvdXBzW3BfaWRdLmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBkdW1teUNvbXBvdW5kSWQgPSBcIkR1bW15Q29tcG91bmRfXCIgKyBwX2lkOyAvLyBUaGUgaWQgb2YgZHVtbXkgY29tcG91bmQgd2hpY2ggd2lsbCBiZSBjcmVhdGVkIHNvb25cbiAgICAgIHNlbGYubWVtYmVyR3JvdXBzW2R1bW15Q29tcG91bmRJZF0gPSB0ZW1wTWVtYmVyR3JvdXBzW3BfaWRdOyAvLyBBZGQgZHVtbXkgY29tcG91bmQgdG8gbWVtYmVyR3JvdXBzXG5cbiAgICAgIHZhciBwYXJlbnQgPSB0ZW1wTWVtYmVyR3JvdXBzW3BfaWRdWzBdLmdldFBhcmVudCgpOyAvLyBUaGUgcGFyZW50IG9mIHplcm8gZGVncmVlIG5vZGVzIHdpbGwgYmUgdGhlIHBhcmVudCBvZiBuZXcgZHVtbXkgY29tcG91bmRcblxuICAgICAgLy8gQ3JlYXRlIGEgZHVtbXkgY29tcG91bmQgd2l0aCBjYWxjdWxhdGVkIGlkXG4gICAgICB2YXIgZHVtbXlDb21wb3VuZCA9IG5ldyBDb1NFTm9kZShzZWxmLmdyYXBoTWFuYWdlcik7XG4gICAgICBkdW1teUNvbXBvdW5kLmlkID0gZHVtbXlDb21wb3VuZElkO1xuICAgICAgZHVtbXlDb21wb3VuZC5wYWRkaW5nTGVmdCA9IHBhcmVudC5wYWRkaW5nTGVmdCB8fCAwO1xuICAgICAgZHVtbXlDb21wb3VuZC5wYWRkaW5nUmlnaHQgPSBwYXJlbnQucGFkZGluZ1JpZ2h0IHx8IDA7XG4gICAgICBkdW1teUNvbXBvdW5kLnBhZGRpbmdCb3R0b20gPSBwYXJlbnQucGFkZGluZ0JvdHRvbSB8fCAwO1xuICAgICAgZHVtbXlDb21wb3VuZC5wYWRkaW5nVG9wID0gcGFyZW50LnBhZGRpbmdUb3AgfHwgMDtcbiAgICAgIFxuICAgICAgc2VsZi5pZFRvRHVtbXlOb2RlW2R1bW15Q29tcG91bmRJZF0gPSBkdW1teUNvbXBvdW5kO1xuICAgICAgXG4gICAgICB2YXIgZHVtbXlQYXJlbnRHcmFwaCA9IHNlbGYuZ2V0R3JhcGhNYW5hZ2VyKCkuYWRkKHNlbGYubmV3R3JhcGgoKSwgZHVtbXlDb21wb3VuZCk7XG4gICAgICB2YXIgcGFyZW50R3JhcGggPSBwYXJlbnQuZ2V0Q2hpbGQoKTtcblxuICAgICAgLy8gQWRkIGR1bW15IGNvbXBvdW5kIHRvIHBhcmVudCB0aGUgZ3JhcGhcbiAgICAgIHBhcmVudEdyYXBoLmFkZChkdW1teUNvbXBvdW5kKTtcblxuICAgICAgLy8gRm9yIGVhY2ggemVybyBkZWdyZWUgbm9kZSBpbiB0aGlzIGxldmVsIHJlbW92ZSBpdCBmcm9tIGl0cyBwYXJlbnQgZ3JhcGggYW5kIGFkZCBpdCB0byB0aGUgZ3JhcGggb2YgZHVtbXkgcGFyZW50XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBNZW1iZXJHcm91cHNbcF9pZF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG5vZGUgPSB0ZW1wTWVtYmVyR3JvdXBzW3BfaWRdW2ldO1xuICAgICAgICBcbiAgICAgICAgcGFyZW50R3JhcGgucmVtb3ZlKG5vZGUpO1xuICAgICAgICBkdW1teVBhcmVudEdyYXBoLmFkZChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuY2xlYXJDb21wb3VuZHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjaGlsZEdyYXBoTWFwID0ge307XG4gIHZhciBpZFRvTm9kZSA9IHt9O1xuXG4gIC8vIEdldCBjb21wb3VuZCBvcmRlcmluZyBieSBmaW5kaW5nIHRoZSBpbm5lciBvbmUgZmlyc3RcbiAgdGhpcy5wZXJmb3JtREZTT25Db21wb3VuZHMoKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29tcG91bmRPcmRlci5sZW5ndGg7IGkrKykge1xuICAgIFxuICAgIGlkVG9Ob2RlW3RoaXMuY29tcG91bmRPcmRlcltpXS5pZF0gPSB0aGlzLmNvbXBvdW5kT3JkZXJbaV07XG4gICAgY2hpbGRHcmFwaE1hcFt0aGlzLmNvbXBvdW5kT3JkZXJbaV0uaWRdID0gW10uY29uY2F0KHRoaXMuY29tcG91bmRPcmRlcltpXS5nZXRDaGlsZCgpLmdldE5vZGVzKCkpO1xuXG4gICAgLy8gUmVtb3ZlIGNoaWxkcmVuIG9mIGNvbXBvdW5kc1xuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlbW92ZSh0aGlzLmNvbXBvdW5kT3JkZXJbaV0uZ2V0Q2hpbGQoKSk7XG4gICAgdGhpcy5jb21wb3VuZE9yZGVyW2ldLmNoaWxkID0gbnVsbDtcbiAgfVxuICBcbiAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxOb2RlcygpO1xuICBcbiAgLy8gVGlsZSB0aGUgcmVtb3ZlZCBjaGlsZHJlblxuICB0aGlzLnRpbGVDb21wb3VuZE1lbWJlcnMoY2hpbGRHcmFwaE1hcCwgaWRUb05vZGUpO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuY2xlYXJaZXJvRGVncmVlTWVtYmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgdGlsZWRaZXJvRGVncmVlUGFjayA9IHRoaXMudGlsZWRaZXJvRGVncmVlUGFjayA9IFtdO1xuXG4gIE9iamVjdC5rZXlzKHRoaXMubWVtYmVyR3JvdXBzKS5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XG4gICAgdmFyIGNvbXBvdW5kTm9kZSA9IHNlbGYuaWRUb0R1bW15Tm9kZVtpZF07IC8vIEdldCB0aGUgZHVtbXkgY29tcG91bmRcblxuICAgIHRpbGVkWmVyb0RlZ3JlZVBhY2tbaWRdID0gc2VsZi50aWxlTm9kZXMoc2VsZi5tZW1iZXJHcm91cHNbaWRdLCBjb21wb3VuZE5vZGUucGFkZGluZ0xlZnQgKyBjb21wb3VuZE5vZGUucGFkZGluZ1JpZ2h0KTtcblxuICAgIC8vIFNldCB0aGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgZHVtbXkgY29tcG91bmQgYXMgY2FsY3VsYXRlZFxuICAgIGNvbXBvdW5kTm9kZS5yZWN0LndpZHRoID0gdGlsZWRaZXJvRGVncmVlUGFja1tpZF0ud2lkdGg7XG4gICAgY29tcG91bmROb2RlLnJlY3QuaGVpZ2h0ID0gdGlsZWRaZXJvRGVncmVlUGFja1tpZF0uaGVpZ2h0O1xuICB9KTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnJlcG9wdWxhdGVDb21wb3VuZHMgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIGkgPSB0aGlzLmNvbXBvdW5kT3JkZXIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbENvbXBvdW5kTm9kZSA9IHRoaXMuY29tcG91bmRPcmRlcltpXTtcbiAgICB2YXIgaWQgPSBsQ29tcG91bmROb2RlLmlkO1xuICAgIHZhciBob3Jpem9udGFsTWFyZ2luID0gbENvbXBvdW5kTm9kZS5wYWRkaW5nTGVmdDtcbiAgICB2YXIgdmVydGljYWxNYXJnaW4gPSBsQ29tcG91bmROb2RlLnBhZGRpbmdUb3A7XG5cbiAgICB0aGlzLmFkanVzdExvY2F0aW9ucyh0aGlzLnRpbGVkTWVtYmVyUGFja1tpZF0sIGxDb21wb3VuZE5vZGUucmVjdC54LCBsQ29tcG91bmROb2RlLnJlY3QueSwgaG9yaXpvbnRhbE1hcmdpbiwgdmVydGljYWxNYXJnaW4pO1xuICB9XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5yZXBvcHVsYXRlWmVyb0RlZ3JlZU1lbWJlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHRpbGVkUGFjayA9IHRoaXMudGlsZWRaZXJvRGVncmVlUGFjaztcbiAgXG4gIE9iamVjdC5rZXlzKHRpbGVkUGFjaykuZm9yRWFjaChmdW5jdGlvbihpZCkge1xuICAgIHZhciBjb21wb3VuZE5vZGUgPSBzZWxmLmlkVG9EdW1teU5vZGVbaWRdOyAvLyBHZXQgdGhlIGR1bW15IGNvbXBvdW5kIGJ5IGl0cyBpZFxuICAgIHZhciBob3Jpem9udGFsTWFyZ2luID0gY29tcG91bmROb2RlLnBhZGRpbmdMZWZ0O1xuICAgIHZhciB2ZXJ0aWNhbE1hcmdpbiA9IGNvbXBvdW5kTm9kZS5wYWRkaW5nVG9wO1xuXG4gICAgLy8gQWRqdXN0IHRoZSBwb3NpdGlvbnMgb2Ygbm9kZXMgd3J0IGl0cyBjb21wb3VuZFxuICAgIHNlbGYuYWRqdXN0TG9jYXRpb25zKHRpbGVkUGFja1tpZF0sIGNvbXBvdW5kTm9kZS5yZWN0LngsIGNvbXBvdW5kTm9kZS5yZWN0LnksIGhvcml6b250YWxNYXJnaW4sIHZlcnRpY2FsTWFyZ2luKTtcbiAgfSk7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5nZXRUb0JlVGlsZWQgPSBmdW5jdGlvbiAobm9kZSkge1xuICB2YXIgaWQgPSBub2RlLmlkO1xuICAvL2ZpcnN0bHkgY2hlY2sgdGhlIHByZXZpb3VzIHJlc3VsdHNcbiAgaWYgKHRoaXMudG9CZVRpbGVkW2lkXSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMudG9CZVRpbGVkW2lkXTtcbiAgfVxuXG4gIC8vb25seSBjb21wb3VuZCBub2RlcyBhcmUgdG8gYmUgdGlsZWRcbiAgdmFyIGNoaWxkR3JhcGggPSBub2RlLmdldENoaWxkKCk7XG4gIGlmIChjaGlsZEdyYXBoID09IG51bGwpIHtcbiAgICB0aGlzLnRvQmVUaWxlZFtpZF0gPSBmYWxzZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgY2hpbGRyZW4gPSBjaGlsZEdyYXBoLmdldE5vZGVzKCk7IC8vIEdldCB0aGUgY2hpbGRyZW4gbm9kZXNcblxuICAvL2EgY29tcG91bmQgbm9kZSBpcyBub3QgdG8gYmUgdGlsZWQgaWYgYWxsIG9mIGl0cyBjb21wb3VuZCBjaGlsZHJlbiBhcmUgbm90IHRvIGJlIHRpbGVkXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdGhlQ2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgIGlmICh0aGlzLmdldE5vZGVEZWdyZWUodGhlQ2hpbGQpID4gMCkge1xuICAgICAgdGhpcy50b0JlVGlsZWRbaWRdID0gZmFsc2U7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy9wYXNzIHRoZSBjaGlsZHJlbiBub3QgaGF2aW5nIHRoZSBjb21wb3VuZCBzdHJ1Y3R1cmVcbiAgICBpZiAodGhlQ2hpbGQuZ2V0Q2hpbGQoKSA9PSBudWxsKSB7XG4gICAgICB0aGlzLnRvQmVUaWxlZFt0aGVDaGlsZC5pZF0gPSBmYWxzZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5nZXRUb0JlVGlsZWQodGhlQ2hpbGQpKSB7XG4gICAgICB0aGlzLnRvQmVUaWxlZFtpZF0gPSBmYWxzZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgdGhpcy50b0JlVGlsZWRbaWRdID0gdHJ1ZTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyBHZXQgZGVncmVlIG9mIGEgbm9kZSBkZXBlbmRpbmcgb2YgaXRzIGVkZ2VzIGFuZCBpbmRlcGVuZGVudCBvZiBpdHMgY2hpbGRyZW5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmdldE5vZGVEZWdyZWUgPSBmdW5jdGlvbiAobm9kZSkge1xuICB2YXIgaWQgPSBub2RlLmlkO1xuICB2YXIgZWRnZXMgPSBub2RlLmdldEVkZ2VzKCk7XG4gIHZhciBkZWdyZWUgPSAwO1xuICBcbiAgLy8gRm9yIHRoZSBlZGdlcyBjb25uZWN0ZWRcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlZGdlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBlZGdlID0gZWRnZXNbaV07XG4gICAgaWYgKGVkZ2UuZ2V0U291cmNlKCkuaWQgIT09IGVkZ2UuZ2V0VGFyZ2V0KCkuaWQpIHtcbiAgICAgIGRlZ3JlZSA9IGRlZ3JlZSArIDE7XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWdyZWU7XG59O1xuXG4vLyBHZXQgZGVncmVlIG9mIGEgbm9kZSB3aXRoIGl0cyBjaGlsZHJlblxuQ29TRUxheW91dC5wcm90b3R5cGUuZ2V0Tm9kZURlZ3JlZVdpdGhDaGlsZHJlbiA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciBkZWdyZWUgPSB0aGlzLmdldE5vZGVEZWdyZWUobm9kZSk7XG4gIGlmIChub2RlLmdldENoaWxkKCkgPT0gbnVsbCkge1xuICAgIHJldHVybiBkZWdyZWU7XG4gIH1cbiAgdmFyIGNoaWxkcmVuID0gbm9kZS5nZXRDaGlsZCgpLmdldE5vZGVzKCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICBkZWdyZWUgKz0gdGhpcy5nZXROb2RlRGVncmVlV2l0aENoaWxkcmVuKGNoaWxkKTtcbiAgfVxuICByZXR1cm4gZGVncmVlO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUucGVyZm9ybURGU09uQ29tcG91bmRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNvbXBvdW5kT3JkZXIgPSBbXTtcbiAgdGhpcy5maWxsQ29tcGV4T3JkZXJCeURGUyh0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0Tm9kZXMoKSk7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5maWxsQ29tcGV4T3JkZXJCeURGUyA9IGZ1bmN0aW9uIChjaGlsZHJlbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgaWYgKGNoaWxkLmdldENoaWxkKCkgIT0gbnVsbCkge1xuICAgICAgdGhpcy5maWxsQ29tcGV4T3JkZXJCeURGUyhjaGlsZC5nZXRDaGlsZCgpLmdldE5vZGVzKCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5nZXRUb0JlVGlsZWQoY2hpbGQpKSB7XG4gICAgICB0aGlzLmNvbXBvdW5kT3JkZXIucHVzaChjaGlsZCk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiogVGhpcyBtZXRob2QgcGxhY2VzIGVhY2ggemVybyBkZWdyZWUgbWVtYmVyIHdydCBnaXZlbiAoeCx5KSBjb29yZGluYXRlcyAodG9wIGxlZnQpLlxuKi9cbkNvU0VMYXlvdXQucHJvdG90eXBlLmFkanVzdExvY2F0aW9ucyA9IGZ1bmN0aW9uIChvcmdhbml6YXRpb24sIHgsIHksIGNvbXBvdW5kSG9yaXpvbnRhbE1hcmdpbiwgY29tcG91bmRWZXJ0aWNhbE1hcmdpbikge1xuICB4ICs9IGNvbXBvdW5kSG9yaXpvbnRhbE1hcmdpbjtcbiAgeSArPSBjb21wb3VuZFZlcnRpY2FsTWFyZ2luO1xuXG4gIHZhciBsZWZ0ID0geDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG9yZ2FuaXphdGlvbi5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHJvdyA9IG9yZ2FuaXphdGlvbi5yb3dzW2ldO1xuICAgIHggPSBsZWZ0O1xuICAgIHZhciBtYXhIZWlnaHQgPSAwO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCByb3cubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciBsbm9kZSA9IHJvd1tqXTtcblxuICAgICAgbG5vZGUucmVjdC54ID0geDsvLyArIGxub2RlLnJlY3Qud2lkdGggLyAyO1xuICAgICAgbG5vZGUucmVjdC55ID0geTsvLyArIGxub2RlLnJlY3QuaGVpZ2h0IC8gMjtcblxuICAgICAgeCArPSBsbm9kZS5yZWN0LndpZHRoICsgb3JnYW5pemF0aW9uLmhvcml6b250YWxQYWRkaW5nO1xuXG4gICAgICBpZiAobG5vZGUucmVjdC5oZWlnaHQgPiBtYXhIZWlnaHQpXG4gICAgICAgIG1heEhlaWdodCA9IGxub2RlLnJlY3QuaGVpZ2h0O1xuICAgIH1cblxuICAgIHkgKz0gbWF4SGVpZ2h0ICsgb3JnYW5pemF0aW9uLnZlcnRpY2FsUGFkZGluZztcbiAgfVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUudGlsZUNvbXBvdW5kTWVtYmVycyA9IGZ1bmN0aW9uIChjaGlsZEdyYXBoTWFwLCBpZFRvTm9kZSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMudGlsZWRNZW1iZXJQYWNrID0gW107XG5cbiAgT2JqZWN0LmtleXMoY2hpbGRHcmFwaE1hcCkuZm9yRWFjaChmdW5jdGlvbihpZCkge1xuICAgIC8vIEdldCB0aGUgY29tcG91bmQgbm9kZVxuICAgIHZhciBjb21wb3VuZE5vZGUgPSBpZFRvTm9kZVtpZF07XG5cbiAgICBzZWxmLnRpbGVkTWVtYmVyUGFja1tpZF0gPSBzZWxmLnRpbGVOb2RlcyhjaGlsZEdyYXBoTWFwW2lkXSwgY29tcG91bmROb2RlLnBhZGRpbmdMZWZ0ICsgY29tcG91bmROb2RlLnBhZGRpbmdSaWdodCk7XG5cbiAgICBjb21wb3VuZE5vZGUucmVjdC53aWR0aCA9IHNlbGYudGlsZWRNZW1iZXJQYWNrW2lkXS53aWR0aCArIDIwO1xuICAgIGNvbXBvdW5kTm9kZS5yZWN0LmhlaWdodCA9IHNlbGYudGlsZWRNZW1iZXJQYWNrW2lkXS5oZWlnaHQgKyAyMDtcbiAgfSk7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS50aWxlTm9kZXMgPSBmdW5jdGlvbiAobm9kZXMsIG1pbldpZHRoKSB7XG4gIHZhciB2ZXJ0aWNhbFBhZGRpbmcgPSBDb1NFQ29uc3RhbnRzLlRJTElOR19QQURESU5HX1ZFUlRJQ0FMO1xuICB2YXIgaG9yaXpvbnRhbFBhZGRpbmcgPSBDb1NFQ29uc3RhbnRzLlRJTElOR19QQURESU5HX0hPUklaT05UQUw7XG4gIHZhciBvcmdhbml6YXRpb24gPSB7XG4gICAgcm93czogW10sXG4gICAgcm93V2lkdGg6IFtdLFxuICAgIHJvd0hlaWdodDogW10sXG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMjAsXG4gICAgdmVydGljYWxQYWRkaW5nOiB2ZXJ0aWNhbFBhZGRpbmcsXG4gICAgaG9yaXpvbnRhbFBhZGRpbmc6IGhvcml6b250YWxQYWRkaW5nXG4gIH07XG5cbiAgLy8gU29ydCB0aGUgbm9kZXMgaW4gYXNjZW5kaW5nIG9yZGVyIG9mIHRoZWlyIGFyZWFzXG4gIG5vZGVzLnNvcnQoZnVuY3Rpb24gKG4xLCBuMikge1xuICAgIGlmIChuMS5yZWN0LndpZHRoICogbjEucmVjdC5oZWlnaHQgPiBuMi5yZWN0LndpZHRoICogbjIucmVjdC5oZWlnaHQpXG4gICAgICByZXR1cm4gLTE7XG4gICAgaWYgKG4xLnJlY3Qud2lkdGggKiBuMS5yZWN0LmhlaWdodCA8IG4yLnJlY3Qud2lkdGggKiBuMi5yZWN0LmhlaWdodClcbiAgICAgIHJldHVybiAxO1xuICAgIHJldHVybiAwO1xuICB9KTtcblxuICAvLyBDcmVhdGUgdGhlIG9yZ2FuaXphdGlvbiAtPiB0aWxlIG1lbWJlcnNcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xuICAgIFxuICAgIGlmIChvcmdhbml6YXRpb24ucm93cy5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5pbnNlcnROb2RlVG9Sb3cob3JnYW5pemF0aW9uLCBsTm9kZSwgMCwgbWluV2lkdGgpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmNhbkFkZEhvcml6b250YWwob3JnYW5pemF0aW9uLCBsTm9kZS5yZWN0LndpZHRoLCBsTm9kZS5yZWN0LmhlaWdodCkpIHtcbiAgICAgIHRoaXMuaW5zZXJ0Tm9kZVRvUm93KG9yZ2FuaXphdGlvbiwgbE5vZGUsIHRoaXMuZ2V0U2hvcnRlc3RSb3dJbmRleChvcmdhbml6YXRpb24pLCBtaW5XaWR0aCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pbnNlcnROb2RlVG9Sb3cob3JnYW5pemF0aW9uLCBsTm9kZSwgb3JnYW5pemF0aW9uLnJvd3MubGVuZ3RoLCBtaW5XaWR0aCk7XG4gICAgfVxuXG4gICAgdGhpcy5zaGlmdFRvTGFzdFJvdyhvcmdhbml6YXRpb24pO1xuICB9XG5cbiAgcmV0dXJuIG9yZ2FuaXphdGlvbjtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmluc2VydE5vZGVUb1JvdyA9IGZ1bmN0aW9uIChvcmdhbml6YXRpb24sIG5vZGUsIHJvd0luZGV4LCBtaW5XaWR0aCkge1xuICB2YXIgbWluQ29tcG91bmRTaXplID0gbWluV2lkdGg7XG5cbiAgLy8gQWRkIG5ldyByb3cgaWYgbmVlZGVkXG4gIGlmIChyb3dJbmRleCA9PSBvcmdhbml6YXRpb24ucm93cy5sZW5ndGgpIHtcbiAgICB2YXIgc2Vjb25kRGltZW5zaW9uID0gW107XG5cbiAgICBvcmdhbml6YXRpb24ucm93cy5wdXNoKHNlY29uZERpbWVuc2lvbik7XG4gICAgb3JnYW5pemF0aW9uLnJvd1dpZHRoLnB1c2gobWluQ29tcG91bmRTaXplKTtcbiAgICBvcmdhbml6YXRpb24ucm93SGVpZ2h0LnB1c2goMCk7XG4gIH1cblxuICAvLyBVcGRhdGUgcm93IHdpZHRoXG4gIHZhciB3ID0gb3JnYW5pemF0aW9uLnJvd1dpZHRoW3Jvd0luZGV4XSArIG5vZGUucmVjdC53aWR0aDtcblxuICBpZiAob3JnYW5pemF0aW9uLnJvd3Nbcm93SW5kZXhdLmxlbmd0aCA+IDApIHtcbiAgICB3ICs9IG9yZ2FuaXphdGlvbi5ob3Jpem9udGFsUGFkZGluZztcbiAgfVxuXG4gIG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtyb3dJbmRleF0gPSB3O1xuICAvLyBVcGRhdGUgY29tcG91bmQgd2lkdGhcbiAgaWYgKG9yZ2FuaXphdGlvbi53aWR0aCA8IHcpIHtcbiAgICBvcmdhbml6YXRpb24ud2lkdGggPSB3O1xuICB9XG5cbiAgLy8gVXBkYXRlIGhlaWdodFxuICB2YXIgaCA9IG5vZGUucmVjdC5oZWlnaHQ7XG4gIGlmIChyb3dJbmRleCA+IDApXG4gICAgaCArPSBvcmdhbml6YXRpb24udmVydGljYWxQYWRkaW5nO1xuXG4gIHZhciBleHRyYUhlaWdodCA9IDA7XG4gIGlmIChoID4gb3JnYW5pemF0aW9uLnJvd0hlaWdodFtyb3dJbmRleF0pIHtcbiAgICBleHRyYUhlaWdodCA9IG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbcm93SW5kZXhdO1xuICAgIG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbcm93SW5kZXhdID0gaDtcbiAgICBleHRyYUhlaWdodCA9IG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbcm93SW5kZXhdIC0gZXh0cmFIZWlnaHQ7XG4gIH1cblxuICBvcmdhbml6YXRpb24uaGVpZ2h0ICs9IGV4dHJhSGVpZ2h0O1xuXG4gIC8vIEluc2VydCBub2RlXG4gIG9yZ2FuaXphdGlvbi5yb3dzW3Jvd0luZGV4XS5wdXNoKG5vZGUpO1xufTtcblxuLy9TY2FucyB0aGUgcm93cyBvZiBhbiBvcmdhbml6YXRpb24gYW5kIHJldHVybnMgdGhlIG9uZSB3aXRoIHRoZSBtaW4gd2lkdGhcbkNvU0VMYXlvdXQucHJvdG90eXBlLmdldFNob3J0ZXN0Um93SW5kZXggPSBmdW5jdGlvbiAob3JnYW5pemF0aW9uKSB7XG4gIHZhciByID0gLTE7XG4gIHZhciBtaW4gPSBOdW1iZXIuTUFYX1ZBTFVFO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgb3JnYW5pemF0aW9uLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAob3JnYW5pemF0aW9uLnJvd1dpZHRoW2ldIDwgbWluKSB7XG4gICAgICByID0gaTtcbiAgICAgIG1pbiA9IG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG4vL1NjYW5zIHRoZSByb3dzIG9mIGFuIG9yZ2FuaXphdGlvbiBhbmQgcmV0dXJucyB0aGUgb25lIHdpdGggdGhlIG1heCB3aWR0aFxuQ29TRUxheW91dC5wcm90b3R5cGUuZ2V0TG9uZ2VzdFJvd0luZGV4ID0gZnVuY3Rpb24gKG9yZ2FuaXphdGlvbikge1xuICB2YXIgciA9IC0xO1xuICB2YXIgbWF4ID0gTnVtYmVyLk1JTl9WQUxVRTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG9yZ2FuaXphdGlvbi5yb3dzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICBpZiAob3JnYW5pemF0aW9uLnJvd1dpZHRoW2ldID4gbWF4KSB7XG4gICAgICByID0gaTtcbiAgICAgIG1heCA9IG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcjtcbn07XG5cbi8qKlxuKiBUaGlzIG1ldGhvZCBjaGVja3Mgd2hldGhlciBhZGRpbmcgZXh0cmEgd2lkdGggdG8gdGhlIG9yZ2FuaXphdGlvbiB2aW9sYXRlc1xuKiB0aGUgYXNwZWN0IHJhdGlvKDEpIG9yIG5vdC5cbiovXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5jYW5BZGRIb3Jpem9udGFsID0gZnVuY3Rpb24gKG9yZ2FuaXphdGlvbiwgZXh0cmFXaWR0aCwgZXh0cmFIZWlnaHQpIHtcblxuICB2YXIgc3JpID0gdGhpcy5nZXRTaG9ydGVzdFJvd0luZGV4KG9yZ2FuaXphdGlvbik7XG5cbiAgaWYgKHNyaSA8IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBtaW4gPSBvcmdhbml6YXRpb24ucm93V2lkdGhbc3JpXTtcblxuICBpZiAobWluICsgb3JnYW5pemF0aW9uLmhvcml6b250YWxQYWRkaW5nICsgZXh0cmFXaWR0aCA8PSBvcmdhbml6YXRpb24ud2lkdGgpXG4gICAgcmV0dXJuIHRydWU7XG5cbiAgdmFyIGhEaWZmID0gMDtcblxuICAvLyBBZGRpbmcgdG8gYW4gZXhpc3Rpbmcgcm93XG4gIGlmIChvcmdhbml6YXRpb24ucm93SGVpZ2h0W3NyaV0gPCBleHRyYUhlaWdodCkge1xuICAgIGlmIChzcmkgPiAwKVxuICAgICAgaERpZmYgPSBleHRyYUhlaWdodCArIG9yZ2FuaXphdGlvbi52ZXJ0aWNhbFBhZGRpbmcgLSBvcmdhbml6YXRpb24ucm93SGVpZ2h0W3NyaV07XG4gIH1cblxuICB2YXIgYWRkX3RvX3Jvd19yYXRpbztcbiAgaWYgKG9yZ2FuaXphdGlvbi53aWR0aCAtIG1pbiA+PSBleHRyYVdpZHRoICsgb3JnYW5pemF0aW9uLmhvcml6b250YWxQYWRkaW5nKSB7XG4gICAgYWRkX3RvX3Jvd19yYXRpbyA9IChvcmdhbml6YXRpb24uaGVpZ2h0ICsgaERpZmYpIC8gKG1pbiArIGV4dHJhV2lkdGggKyBvcmdhbml6YXRpb24uaG9yaXpvbnRhbFBhZGRpbmcpO1xuICB9IGVsc2Uge1xuICAgIGFkZF90b19yb3dfcmF0aW8gPSAob3JnYW5pemF0aW9uLmhlaWdodCArIGhEaWZmKSAvIG9yZ2FuaXphdGlvbi53aWR0aDtcbiAgfVxuXG4gIC8vIEFkZGluZyBhIG5ldyByb3cgZm9yIHRoaXMgbm9kZVxuICBoRGlmZiA9IGV4dHJhSGVpZ2h0ICsgb3JnYW5pemF0aW9uLnZlcnRpY2FsUGFkZGluZztcbiAgdmFyIGFkZF9uZXdfcm93X3JhdGlvO1xuICBpZiAob3JnYW5pemF0aW9uLndpZHRoIDwgZXh0cmFXaWR0aCkge1xuICAgIGFkZF9uZXdfcm93X3JhdGlvID0gKG9yZ2FuaXphdGlvbi5oZWlnaHQgKyBoRGlmZikgLyBleHRyYVdpZHRoO1xuICB9IGVsc2Uge1xuICAgIGFkZF9uZXdfcm93X3JhdGlvID0gKG9yZ2FuaXphdGlvbi5oZWlnaHQgKyBoRGlmZikgLyBvcmdhbml6YXRpb24ud2lkdGg7XG4gIH1cblxuICBpZiAoYWRkX25ld19yb3dfcmF0aW8gPCAxKVxuICAgIGFkZF9uZXdfcm93X3JhdGlvID0gMSAvIGFkZF9uZXdfcm93X3JhdGlvO1xuXG4gIGlmIChhZGRfdG9fcm93X3JhdGlvIDwgMSlcbiAgICBhZGRfdG9fcm93X3JhdGlvID0gMSAvIGFkZF90b19yb3dfcmF0aW87XG5cbiAgcmV0dXJuIGFkZF90b19yb3dfcmF0aW8gPCBhZGRfbmV3X3Jvd19yYXRpbztcbn07XG5cbi8vSWYgbW92aW5nIHRoZSBsYXN0IG5vZGUgZnJvbSB0aGUgbG9uZ2VzdCByb3cgYW5kIGFkZGluZyBpdCB0byB0aGUgbGFzdFxuLy9yb3cgbWFrZXMgdGhlIGJvdW5kaW5nIGJveCBzbWFsbGVyLCBkbyBpdC5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnNoaWZ0VG9MYXN0Um93ID0gZnVuY3Rpb24gKG9yZ2FuaXphdGlvbikge1xuICB2YXIgbG9uZ2VzdCA9IHRoaXMuZ2V0TG9uZ2VzdFJvd0luZGV4KG9yZ2FuaXphdGlvbik7XG4gIHZhciBsYXN0ID0gb3JnYW5pemF0aW9uLnJvd1dpZHRoLmxlbmd0aCAtIDE7XG4gIHZhciByb3cgPSBvcmdhbml6YXRpb24ucm93c1tsb25nZXN0XTtcbiAgdmFyIG5vZGUgPSByb3dbcm93Lmxlbmd0aCAtIDFdO1xuXG4gIHZhciBkaWZmID0gbm9kZS53aWR0aCArIG9yZ2FuaXphdGlvbi5ob3Jpem9udGFsUGFkZGluZztcblxuICAvLyBDaGVjayBpZiB0aGVyZSBpcyBlbm91Z2ggc3BhY2Ugb24gdGhlIGxhc3Qgcm93XG4gIGlmIChvcmdhbml6YXRpb24ud2lkdGggLSBvcmdhbml6YXRpb24ucm93V2lkdGhbbGFzdF0gPiBkaWZmICYmIGxvbmdlc3QgIT0gbGFzdCkge1xuICAgIC8vIFJlbW92ZSB0aGUgbGFzdCBlbGVtZW50IG9mIHRoZSBsb25nZXN0IHJvd1xuICAgIHJvdy5zcGxpY2UoLTEsIDEpO1xuXG4gICAgLy8gUHVzaCBpdCB0byB0aGUgbGFzdCByb3dcbiAgICBvcmdhbml6YXRpb24ucm93c1tsYXN0XS5wdXNoKG5vZGUpO1xuXG4gICAgb3JnYW5pemF0aW9uLnJvd1dpZHRoW2xvbmdlc3RdID0gb3JnYW5pemF0aW9uLnJvd1dpZHRoW2xvbmdlc3RdIC0gZGlmZjtcbiAgICBvcmdhbml6YXRpb24ucm93V2lkdGhbbGFzdF0gPSBvcmdhbml6YXRpb24ucm93V2lkdGhbbGFzdF0gKyBkaWZmO1xuICAgIG9yZ2FuaXphdGlvbi53aWR0aCA9IG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtpbnN0YW5jZS5nZXRMb25nZXN0Um93SW5kZXgob3JnYW5pemF0aW9uKV07XG5cbiAgICAvLyBVcGRhdGUgaGVpZ2h0cyBvZiB0aGUgb3JnYW5pemF0aW9uXG4gICAgdmFyIG1heEhlaWdodCA9IE51bWJlci5NSU5fVkFMVUU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyb3dbaV0uaGVpZ2h0ID4gbWF4SGVpZ2h0KVxuICAgICAgICBtYXhIZWlnaHQgPSByb3dbaV0uaGVpZ2h0O1xuICAgIH1cbiAgICBpZiAobG9uZ2VzdCA+IDApXG4gICAgICBtYXhIZWlnaHQgKz0gb3JnYW5pemF0aW9uLnZlcnRpY2FsUGFkZGluZztcblxuICAgIHZhciBwcmV2VG90YWwgPSBvcmdhbml6YXRpb24ucm93SGVpZ2h0W2xvbmdlc3RdICsgb3JnYW5pemF0aW9uLnJvd0hlaWdodFtsYXN0XTtcblxuICAgIG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbbG9uZ2VzdF0gPSBtYXhIZWlnaHQ7XG4gICAgaWYgKG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbbGFzdF0gPCBub2RlLmhlaWdodCArIG9yZ2FuaXphdGlvbi52ZXJ0aWNhbFBhZGRpbmcpXG4gICAgICBvcmdhbml6YXRpb24ucm93SGVpZ2h0W2xhc3RdID0gbm9kZS5oZWlnaHQgKyBvcmdhbml6YXRpb24udmVydGljYWxQYWRkaW5nO1xuXG4gICAgdmFyIGZpbmFsVG90YWwgPSBvcmdhbml6YXRpb24ucm93SGVpZ2h0W2xvbmdlc3RdICsgb3JnYW5pemF0aW9uLnJvd0hlaWdodFtsYXN0XTtcbiAgICBvcmdhbml6YXRpb24uaGVpZ2h0ICs9IChmaW5hbFRvdGFsIC0gcHJldlRvdGFsKTtcblxuICAgIHRoaXMuc2hpZnRUb0xhc3RSb3cob3JnYW5pemF0aW9uKTtcbiAgfVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUudGlsaW5nUHJlTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIGlmIChDb1NFQ29uc3RhbnRzLlRJTEUpIHtcbiAgICAvLyBGaW5kIHplcm8gZGVncmVlIG5vZGVzIGFuZCBjcmVhdGUgYSBjb21wb3VuZCBmb3IgZWFjaCBsZXZlbFxuICAgIHRoaXMuZ3JvdXBaZXJvRGVncmVlTWVtYmVycygpO1xuICAgIC8vIFRpbGUgYW5kIGNsZWFyIGNoaWxkcmVuIG9mIGVhY2ggY29tcG91bmRcbiAgICB0aGlzLmNsZWFyQ29tcG91bmRzKCk7XG4gICAgLy8gU2VwYXJhdGVseSB0aWxlIGFuZCBjbGVhciB6ZXJvIGRlZ3JlZSBub2RlcyBmb3IgZWFjaCBsZXZlbFxuICAgIHRoaXMuY2xlYXJaZXJvRGVncmVlTWVtYmVycygpO1xuICB9XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS50aWxpbmdQb3N0TGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIGlmIChDb1NFQ29uc3RhbnRzLlRJTEUpIHtcbiAgICB0aGlzLnJlcG9wdWxhdGVaZXJvRGVncmVlTWVtYmVycygpO1xuICAgIHRoaXMucmVwb3B1bGF0ZUNvbXBvdW5kcygpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvU0VMYXlvdXQ7XG4iLCJ2YXIgRkRMYXlvdXROb2RlID0gcmVxdWlyZSgnLi9GRExheW91dE5vZGUnKTtcbnZhciBJTWF0aCA9IHJlcXVpcmUoJy4vSU1hdGgnKTtcblxuZnVuY3Rpb24gQ29TRU5vZGUoZ20sIGxvYywgc2l6ZSwgdk5vZGUpIHtcbiAgRkRMYXlvdXROb2RlLmNhbGwodGhpcywgZ20sIGxvYywgc2l6ZSwgdk5vZGUpO1xufVxuXG5cbkNvU0VOb2RlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRkRMYXlvdXROb2RlLnByb3RvdHlwZSk7XG5mb3IgKHZhciBwcm9wIGluIEZETGF5b3V0Tm9kZSkge1xuICBDb1NFTm9kZVtwcm9wXSA9IEZETGF5b3V0Tm9kZVtwcm9wXTtcbn1cblxuQ29TRU5vZGUucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgbGF5b3V0ID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0TGF5b3V0KCk7XG4gIHRoaXMuZGlzcGxhY2VtZW50WCA9IGxheW91dC5jb29saW5nRmFjdG9yICpcbiAgICAgICAgICAodGhpcy5zcHJpbmdGb3JjZVggKyB0aGlzLnJlcHVsc2lvbkZvcmNlWCArIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVgpIC8gdGhpcy5ub09mQ2hpbGRyZW47XG4gIHRoaXMuZGlzcGxhY2VtZW50WSA9IGxheW91dC5jb29saW5nRmFjdG9yICpcbiAgICAgICAgICAodGhpcy5zcHJpbmdGb3JjZVkgKyB0aGlzLnJlcHVsc2lvbkZvcmNlWSArIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVkpIC8gdGhpcy5ub09mQ2hpbGRyZW47XG5cblxuICBpZiAoTWF0aC5hYnModGhpcy5kaXNwbGFjZW1lbnRYKSA+IGxheW91dC5jb29saW5nRmFjdG9yICogbGF5b3V0Lm1heE5vZGVEaXNwbGFjZW1lbnQpXG4gIHtcbiAgICB0aGlzLmRpc3BsYWNlbWVudFggPSBsYXlvdXQuY29vbGluZ0ZhY3RvciAqIGxheW91dC5tYXhOb2RlRGlzcGxhY2VtZW50ICpcbiAgICAgICAgICAgIElNYXRoLnNpZ24odGhpcy5kaXNwbGFjZW1lbnRYKTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyh0aGlzLmRpc3BsYWNlbWVudFkpID4gbGF5b3V0LmNvb2xpbmdGYWN0b3IgKiBsYXlvdXQubWF4Tm9kZURpc3BsYWNlbWVudClcbiAge1xuICAgIHRoaXMuZGlzcGxhY2VtZW50WSA9IGxheW91dC5jb29saW5nRmFjdG9yICogbGF5b3V0Lm1heE5vZGVEaXNwbGFjZW1lbnQgKlxuICAgICAgICAgICAgSU1hdGguc2lnbih0aGlzLmRpc3BsYWNlbWVudFkpO1xuICB9XG5cbiAgLy8gYSBzaW1wbGUgbm9kZSwganVzdCBtb3ZlIGl0XG4gIGlmICh0aGlzLmNoaWxkID09IG51bGwpXG4gIHtcbiAgICB0aGlzLm1vdmVCeSh0aGlzLmRpc3BsYWNlbWVudFgsIHRoaXMuZGlzcGxhY2VtZW50WSk7XG4gIH1cbiAgLy8gYW4gZW1wdHkgY29tcG91bmQgbm9kZSwgYWdhaW4ganVzdCBtb3ZlIGl0XG4gIGVsc2UgaWYgKHRoaXMuY2hpbGQuZ2V0Tm9kZXMoKS5sZW5ndGggPT0gMClcbiAge1xuICAgIHRoaXMubW92ZUJ5KHRoaXMuZGlzcGxhY2VtZW50WCwgdGhpcy5kaXNwbGFjZW1lbnRZKTtcbiAgfVxuICAvLyBub24tZW1wdHkgY29tcG91bmQgbm9kZSwgcHJvcG9nYXRlIG1vdmVtZW50IHRvIGNoaWxkcmVuIGFzIHdlbGxcbiAgZWxzZVxuICB7XG4gICAgdGhpcy5wcm9wb2dhdGVEaXNwbGFjZW1lbnRUb0NoaWxkcmVuKHRoaXMuZGlzcGxhY2VtZW50WCxcbiAgICAgICAgICAgIHRoaXMuZGlzcGxhY2VtZW50WSk7XG4gIH1cblxuICBsYXlvdXQudG90YWxEaXNwbGFjZW1lbnQgKz1cbiAgICAgICAgICBNYXRoLmFicyh0aGlzLmRpc3BsYWNlbWVudFgpICsgTWF0aC5hYnModGhpcy5kaXNwbGFjZW1lbnRZKTtcblxuICB0aGlzLnNwcmluZ0ZvcmNlWCA9IDA7XG4gIHRoaXMuc3ByaW5nRm9yY2VZID0gMDtcbiAgdGhpcy5yZXB1bHNpb25Gb3JjZVggPSAwO1xuICB0aGlzLnJlcHVsc2lvbkZvcmNlWSA9IDA7XG4gIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVggPSAwO1xuICB0aGlzLmdyYXZpdGF0aW9uRm9yY2VZID0gMDtcbiAgdGhpcy5kaXNwbGFjZW1lbnRYID0gMDtcbiAgdGhpcy5kaXNwbGFjZW1lbnRZID0gMDtcbn07XG5cbkNvU0VOb2RlLnByb3RvdHlwZS5wcm9wb2dhdGVEaXNwbGFjZW1lbnRUb0NoaWxkcmVuID0gZnVuY3Rpb24gKGRYLCBkWSlcbntcbiAgdmFyIG5vZGVzID0gdGhpcy5nZXRDaGlsZCgpLmdldE5vZGVzKCk7XG4gIHZhciBub2RlO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgbm9kZSA9IG5vZGVzW2ldO1xuICAgIGlmIChub2RlLmdldENoaWxkKCkgPT0gbnVsbClcbiAgICB7XG4gICAgICBub2RlLm1vdmVCeShkWCwgZFkpO1xuICAgICAgbm9kZS5kaXNwbGFjZW1lbnRYICs9IGRYO1xuICAgICAgbm9kZS5kaXNwbGFjZW1lbnRZICs9IGRZO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgbm9kZS5wcm9wb2dhdGVEaXNwbGFjZW1lbnRUb0NoaWxkcmVuKGRYLCBkWSk7XG4gICAgfVxuICB9XG59O1xuXG5Db1NFTm9kZS5wcm90b3R5cGUuc2V0UHJlZDEgPSBmdW5jdGlvbiAocHJlZDEpXG57XG4gIHRoaXMucHJlZDEgPSBwcmVkMTtcbn07XG5cbkNvU0VOb2RlLnByb3RvdHlwZS5nZXRQcmVkMSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiBwcmVkMTtcbn07XG5cbkNvU0VOb2RlLnByb3RvdHlwZS5nZXRQcmVkMiA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiBwcmVkMjtcbn07XG5cbkNvU0VOb2RlLnByb3RvdHlwZS5zZXROZXh0ID0gZnVuY3Rpb24gKG5leHQpXG57XG4gIHRoaXMubmV4dCA9IG5leHQ7XG59O1xuXG5Db1NFTm9kZS5wcm90b3R5cGUuZ2V0TmV4dCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiBuZXh0O1xufTtcblxuQ29TRU5vZGUucHJvdG90eXBlLnNldFByb2Nlc3NlZCA9IGZ1bmN0aW9uIChwcm9jZXNzZWQpXG57XG4gIHRoaXMucHJvY2Vzc2VkID0gcHJvY2Vzc2VkO1xufTtcblxuQ29TRU5vZGUucHJvdG90eXBlLmlzUHJvY2Vzc2VkID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHByb2Nlc3NlZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29TRU5vZGU7XG4iLCJmdW5jdGlvbiBEaW1lbnNpb25EKHdpZHRoLCBoZWlnaHQpIHtcbiAgdGhpcy53aWR0aCA9IDA7XG4gIHRoaXMuaGVpZ2h0ID0gMDtcbiAgaWYgKHdpZHRoICE9PSBudWxsICYmIGhlaWdodCAhPT0gbnVsbCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgfVxufVxuXG5EaW1lbnNpb25ELnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLndpZHRoO1xufTtcblxuRGltZW5zaW9uRC5wcm90b3R5cGUuc2V0V2lkdGggPSBmdW5jdGlvbiAod2lkdGgpXG57XG4gIHRoaXMud2lkdGggPSB3aWR0aDtcbn07XG5cbkRpbWVuc2lvbkQucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmhlaWdodDtcbn07XG5cbkRpbWVuc2lvbkQucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uIChoZWlnaHQpXG57XG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEaW1lbnNpb25EO1xuIiwiZnVuY3Rpb24gRW1pdHRlcigpe1xuICB0aGlzLmxpc3RlbmVycyA9IFtdO1xufVxuXG52YXIgcCA9IEVtaXR0ZXIucHJvdG90eXBlO1xuXG5wLmFkZExpc3RlbmVyID0gZnVuY3Rpb24oIGV2ZW50LCBjYWxsYmFjayApe1xuICB0aGlzLmxpc3RlbmVycy5wdXNoKHtcbiAgICBldmVudDogZXZlbnQsXG4gICAgY2FsbGJhY2s6IGNhbGxiYWNrXG4gIH0pO1xufTtcblxucC5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKCBldmVudCwgY2FsbGJhY2sgKXtcbiAgZm9yKCB2YXIgaSA9IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSA+PSAwOyBpLS0gKXtcbiAgICB2YXIgbCA9IHRoaXMubGlzdGVuZXJzW2ldO1xuXG4gICAgaWYoIGwuZXZlbnQgPT09IGV2ZW50ICYmIGwuY2FsbGJhY2sgPT09IGNhbGxiYWNrICl7XG4gICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoIGksIDEgKTtcbiAgICB9XG4gIH1cbn07XG5cbnAuZW1pdCA9IGZ1bmN0aW9uKCBldmVudCwgZGF0YSApe1xuICBmb3IoIHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrICl7XG4gICAgdmFyIGwgPSB0aGlzLmxpc3RlbmVyc1tpXTtcblxuICAgIGlmKCBldmVudCA9PT0gbC5ldmVudCApe1xuICAgICAgbC5jYWxsYmFjayggZGF0YSApO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xuIiwidmFyIExheW91dCA9IHJlcXVpcmUoJy4vTGF5b3V0Jyk7XG52YXIgRkRMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0ZETGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgTGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9MYXlvdXRDb25zdGFudHMnKTtcbnZhciBJR2VvbWV0cnkgPSByZXF1aXJlKCcuL0lHZW9tZXRyeScpO1xudmFyIElNYXRoID0gcmVxdWlyZSgnLi9JTWF0aCcpO1xudmFyIEludGVnZXIgPSByZXF1aXJlKCcuL0ludGVnZXInKTtcblxuZnVuY3Rpb24gRkRMYXlvdXQoKSB7XG4gIExheW91dC5jYWxsKHRoaXMpO1xuXG4gIHRoaXMudXNlU21hcnRJZGVhbEVkZ2VMZW5ndGhDYWxjdWxhdGlvbiA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVVNFX1NNQVJUX0lERUFMX0VER0VfTEVOR1RIX0NBTENVTEFUSU9OO1xuICB0aGlzLmlkZWFsRWRnZUxlbmd0aCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEg7XG4gIHRoaXMuc3ByaW5nQ29uc3RhbnQgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX1NQUklOR19TVFJFTkdUSDtcbiAgdGhpcy5yZXB1bHNpb25Db25zdGFudCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUkVQVUxTSU9OX1NUUkVOR1RIO1xuICB0aGlzLmdyYXZpdHlDb25zdGFudCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9TVFJFTkdUSDtcbiAgdGhpcy5jb21wb3VuZEdyYXZpdHlDb25zdGFudCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9TVFJFTkdUSDtcbiAgdGhpcy5ncmF2aXR5UmFuZ2VGYWN0b3IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SO1xuICB0aGlzLmNvbXBvdW5kR3Jhdml0eVJhbmdlRmFjdG9yID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUjtcbiAgdGhpcy5kaXNwbGFjZW1lbnRUaHJlc2hvbGRQZXJOb2RlID0gKDMuMCAqIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEgpIC8gMTAwO1xuICB0aGlzLmNvb2xpbmdGYWN0b3IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMO1xuICB0aGlzLmluaXRpYWxDb29saW5nRmFjdG9yID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTDtcbiAgdGhpcy50b3RhbERpc3BsYWNlbWVudCA9IDAuMDtcbiAgdGhpcy5vbGRUb3RhbERpc3BsYWNlbWVudCA9IDAuMDtcbiAgdGhpcy5tYXhJdGVyYXRpb25zID0gRkRMYXlvdXRDb25zdGFudHMuTUFYX0lURVJBVElPTlM7XG59XG5cbkZETGF5b3V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTGF5b3V0LnByb3RvdHlwZSk7XG5cbmZvciAodmFyIHByb3AgaW4gTGF5b3V0KSB7XG4gIEZETGF5b3V0W3Byb3BdID0gTGF5b3V0W3Byb3BdO1xufVxuXG5GRExheW91dC5wcm90b3R5cGUuaW5pdFBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIExheW91dC5wcm90b3R5cGUuaW5pdFBhcmFtZXRlcnMuY2FsbCh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIGlmICh0aGlzLmxheW91dFF1YWxpdHkgPT0gTGF5b3V0Q29uc3RhbnRzLkRSQUZUX1FVQUxJVFkpXG4gIHtcbiAgICB0aGlzLmRpc3BsYWNlbWVudFRocmVzaG9sZFBlck5vZGUgKz0gMC4zMDtcbiAgICB0aGlzLm1heEl0ZXJhdGlvbnMgKj0gMC44O1xuICB9XG4gIGVsc2UgaWYgKHRoaXMubGF5b3V0UXVhbGl0eSA9PSBMYXlvdXRDb25zdGFudHMuUFJPT0ZfUVVBTElUWSlcbiAge1xuICAgIHRoaXMuZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSAtPSAwLjMwO1xuICAgIHRoaXMubWF4SXRlcmF0aW9ucyAqPSAxLjI7XG4gIH1cblxuICB0aGlzLnRvdGFsSXRlcmF0aW9ucyA9IDA7XG4gIHRoaXMubm90QW5pbWF0ZWRJdGVyYXRpb25zID0gMDtcblxuICB0aGlzLnVzZUZSR3JpZFZhcmlhbnQgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX1VTRV9TTUFSVF9SRVBVTFNJT05fUkFOR0VfQ0FMQ1VMQVRJT047XG4gIFxuICB0aGlzLmdyaWQgPSBbXTtcbiAgLy8gdmFyaWFibGVzIGZvciB0cmVlIHJlZHVjdGlvbiBzdXBwb3J0XG4gIHRoaXMucHJ1bmVkTm9kZXNBbGwgPSBbXTtcbiAgdGhpcy5ncm93VHJlZUl0ZXJhdGlvbnMgPSAwO1xuICB0aGlzLmFmdGVyR3Jvd3RoSXRlcmF0aW9ucyA9IDA7XG4gIHRoaXMuaXNUcmVlR3Jvd2luZyA9IGZhbHNlO1xuICB0aGlzLmlzR3Jvd3RoRmluaXNoZWQgPSBmYWxzZTtcbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjSWRlYWxFZGdlTGVuZ3RocyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGVkZ2U7XG4gIHZhciBsY2FEZXB0aDtcbiAgdmFyIHNvdXJjZTtcbiAgdmFyIHRhcmdldDtcbiAgdmFyIHNpemVPZlNvdXJjZUluTGNhO1xuICB2YXIgc2l6ZU9mVGFyZ2V0SW5MY2E7XG5cbiAgdmFyIGFsbEVkZ2VzID0gdGhpcy5nZXRHcmFwaE1hbmFnZXIoKS5nZXRBbGxFZGdlcygpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbEVkZ2VzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgZWRnZSA9IGFsbEVkZ2VzW2ldO1xuXG4gICAgZWRnZS5pZGVhbExlbmd0aCA9IHRoaXMuaWRlYWxFZGdlTGVuZ3RoO1xuXG4gICAgaWYgKGVkZ2UuaXNJbnRlckdyYXBoKVxuICAgIHtcbiAgICAgIHNvdXJjZSA9IGVkZ2UuZ2V0U291cmNlKCk7XG4gICAgICB0YXJnZXQgPSBlZGdlLmdldFRhcmdldCgpO1xuXG4gICAgICBzaXplT2ZTb3VyY2VJbkxjYSA9IGVkZ2UuZ2V0U291cmNlSW5MY2EoKS5nZXRFc3RpbWF0ZWRTaXplKCk7XG4gICAgICBzaXplT2ZUYXJnZXRJbkxjYSA9IGVkZ2UuZ2V0VGFyZ2V0SW5MY2EoKS5nZXRFc3RpbWF0ZWRTaXplKCk7XG5cbiAgICAgIGlmICh0aGlzLnVzZVNtYXJ0SWRlYWxFZGdlTGVuZ3RoQ2FsY3VsYXRpb24pXG4gICAgICB7XG4gICAgICAgIGVkZ2UuaWRlYWxMZW5ndGggKz0gc2l6ZU9mU291cmNlSW5MY2EgKyBzaXplT2ZUYXJnZXRJbkxjYSAtXG4gICAgICAgICAgICAgICAgMiAqIExheW91dENvbnN0YW50cy5TSU1QTEVfTk9ERV9TSVpFO1xuICAgICAgfVxuXG4gICAgICBsY2FEZXB0aCA9IGVkZ2UuZ2V0TGNhKCkuZ2V0SW5jbHVzaW9uVHJlZURlcHRoKCk7XG5cbiAgICAgIGVkZ2UuaWRlYWxMZW5ndGggKz0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCAqXG4gICAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLlBFUl9MRVZFTF9JREVBTF9FREdFX0xFTkdUSF9GQUNUT1IgKlxuICAgICAgICAgICAgICAoc291cmNlLmdldEluY2x1c2lvblRyZWVEZXB0aCgpICtcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuZ2V0SW5jbHVzaW9uVHJlZURlcHRoKCkgLSAyICogbGNhRGVwdGgpO1xuICAgIH1cbiAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmluaXRTcHJpbmdFbWJlZGRlciA9IGZ1bmN0aW9uICgpIHtcblxuICBpZiAodGhpcy5pbmNyZW1lbnRhbClcbiAge1xuICAgIHRoaXMubWF4Tm9kZURpc3BsYWNlbWVudCA9XG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5NQVhfTk9ERV9ESVNQTEFDRU1FTlRfSU5DUkVNRU5UQUw7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgdGhpcy5jb29saW5nRmFjdG9yID0gMS4wO1xuICAgIHRoaXMuaW5pdGlhbENvb2xpbmdGYWN0b3IgPSAxLjA7XG4gICAgdGhpcy5tYXhOb2RlRGlzcGxhY2VtZW50ID1cbiAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLk1BWF9OT0RFX0RJU1BMQUNFTUVOVDtcbiAgfVxuXG4gIHRoaXMubWF4SXRlcmF0aW9ucyA9XG4gICAgICAgICAgTWF0aC5tYXgodGhpcy5nZXRBbGxOb2RlcygpLmxlbmd0aCAqIDUsIHRoaXMubWF4SXRlcmF0aW9ucyk7XG5cbiAgdGhpcy50b3RhbERpc3BsYWNlbWVudFRocmVzaG9sZCA9XG4gICAgICAgICAgdGhpcy5kaXNwbGFjZW1lbnRUaHJlc2hvbGRQZXJOb2RlICogdGhpcy5nZXRBbGxOb2RlcygpLmxlbmd0aDtcblxuICB0aGlzLnJlcHVsc2lvblJhbmdlID0gdGhpcy5jYWxjUmVwdWxzaW9uUmFuZ2UoKTtcbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjU3ByaW5nRm9yY2VzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbEVkZ2VzID0gdGhpcy5nZXRBbGxFZGdlcygpO1xuICB2YXIgZWRnZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxFZGdlcy5sZW5ndGg7IGkrKylcbiAge1xuICAgIGVkZ2UgPSBsRWRnZXNbaV07XG5cbiAgICB0aGlzLmNhbGNTcHJpbmdGb3JjZShlZGdlLCBlZGdlLmlkZWFsTGVuZ3RoKTtcbiAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNSZXB1bHNpb25Gb3JjZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpLCBqO1xuICB2YXIgbm9kZUEsIG5vZGVCO1xuICB2YXIgbE5vZGVzID0gdGhpcy5nZXRBbGxOb2RlcygpO1xuICB2YXIgcHJvY2Vzc2VkTm9kZVNldDtcblxuICBpZiAodGhpcy51c2VGUkdyaWRWYXJpYW50KVxuICB7ICAgICAgIFxuICAgIGlmICgodGhpcy50b3RhbEl0ZXJhdGlvbnMgJSBGRExheW91dENvbnN0YW50cy5HUklEX0NBTENVTEFUSU9OX0NIRUNLX1BFUklPRCA9PSAxICYmICF0aGlzLmlzVHJlZUdyb3dpbmcgJiYgIXRoaXMuaXNHcm93dGhGaW5pc2hlZCkpXG4gICAgeyAgICAgICBcbiAgICAgIHRoaXMudXBkYXRlR3JpZCgpOyAgXG4gICAgfVxuXG4gICAgcHJvY2Vzc2VkTm9kZVNldCA9IG5ldyBTZXQoKTtcbiAgICBcbiAgICAvLyBjYWxjdWxhdGUgcmVwdWxzaW9uIGZvcmNlcyBiZXR3ZWVuIGVhY2ggbm9kZXMgYW5kIGl0cyBzdXJyb3VuZGluZ1xuICAgIGZvciAoaSA9IDA7IGkgPCBsTm9kZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgbm9kZUEgPSBsTm9kZXNbaV07XG4gICAgICB0aGlzLmNhbGN1bGF0ZVJlcHVsc2lvbkZvcmNlT2ZBTm9kZShub2RlQSwgcHJvY2Vzc2VkTm9kZVNldCk7XG4gICAgICBwcm9jZXNzZWROb2RlU2V0LmFkZChub2RlQSk7XG4gICAgfVxuICB9XG4gIGVsc2VcbiAge1xuICAgIGZvciAoaSA9IDA7IGkgPCBsTm9kZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgbm9kZUEgPSBsTm9kZXNbaV07XG5cbiAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgbE5vZGVzLmxlbmd0aDsgaisrKVxuICAgICAge1xuICAgICAgICBub2RlQiA9IGxOb2Rlc1tqXTtcblxuICAgICAgICAvLyBJZiBib3RoIG5vZGVzIGFyZSBub3QgbWVtYmVycyBvZiB0aGUgc2FtZSBncmFwaCwgc2tpcC5cbiAgICAgICAgaWYgKG5vZGVBLmdldE93bmVyKCkgIT0gbm9kZUIuZ2V0T3duZXIoKSlcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWxjUmVwdWxzaW9uRm9yY2Uobm9kZUEsIG5vZGVCKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjR3Jhdml0YXRpb25hbEZvcmNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG5vZGU7XG4gIHZhciBsTm9kZXMgPSB0aGlzLmdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uKCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsTm9kZXMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICBub2RlID0gbE5vZGVzW2ldO1xuICAgIHRoaXMuY2FsY0dyYXZpdGF0aW9uYWxGb3JjZShub2RlKTtcbiAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLm1vdmVOb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxOb2RlcyA9IHRoaXMuZ2V0QWxsTm9kZXMoKTtcbiAgdmFyIG5vZGU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsTm9kZXMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICBub2RlID0gbE5vZGVzW2ldO1xuICAgIG5vZGUubW92ZSgpO1xuICB9XG59XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjU3ByaW5nRm9yY2UgPSBmdW5jdGlvbiAoZWRnZSwgaWRlYWxMZW5ndGgpIHtcbiAgdmFyIHNvdXJjZU5vZGUgPSBlZGdlLmdldFNvdXJjZSgpO1xuICB2YXIgdGFyZ2V0Tm9kZSA9IGVkZ2UuZ2V0VGFyZ2V0KCk7XG5cbiAgdmFyIGxlbmd0aDtcbiAgdmFyIHNwcmluZ0ZvcmNlO1xuICB2YXIgc3ByaW5nRm9yY2VYO1xuICB2YXIgc3ByaW5nRm9yY2VZO1xuXG4gIC8vIFVwZGF0ZSBlZGdlIGxlbmd0aFxuICBpZiAodGhpcy51bmlmb3JtTGVhZk5vZGVTaXplcyAmJlxuICAgICAgICAgIHNvdXJjZU5vZGUuZ2V0Q2hpbGQoKSA9PSBudWxsICYmIHRhcmdldE5vZGUuZ2V0Q2hpbGQoKSA9PSBudWxsKVxuICB7XG4gICAgZWRnZS51cGRhdGVMZW5ndGhTaW1wbGUoKTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICBlZGdlLnVwZGF0ZUxlbmd0aCgpO1xuXG4gICAgaWYgKGVkZ2UuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0KVxuICAgIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBsZW5ndGggPSBlZGdlLmdldExlbmd0aCgpO1xuXG4gIC8vIENhbGN1bGF0ZSBzcHJpbmcgZm9yY2VzXG4gIHNwcmluZ0ZvcmNlID0gdGhpcy5zcHJpbmdDb25zdGFudCAqIChsZW5ndGggLSBpZGVhbExlbmd0aCk7XG5cbiAgLy8gUHJvamVjdCBmb3JjZSBvbnRvIHggYW5kIHkgYXhlc1xuICBzcHJpbmdGb3JjZVggPSBzcHJpbmdGb3JjZSAqIChlZGdlLmxlbmd0aFggLyBsZW5ndGgpO1xuICBzcHJpbmdGb3JjZVkgPSBzcHJpbmdGb3JjZSAqIChlZGdlLmxlbmd0aFkgLyBsZW5ndGgpO1xuXG4gIC8vIEFwcGx5IGZvcmNlcyBvbiB0aGUgZW5kIG5vZGVzXG4gIHNvdXJjZU5vZGUuc3ByaW5nRm9yY2VYICs9IHNwcmluZ0ZvcmNlWDtcbiAgc291cmNlTm9kZS5zcHJpbmdGb3JjZVkgKz0gc3ByaW5nRm9yY2VZO1xuICB0YXJnZXROb2RlLnNwcmluZ0ZvcmNlWCAtPSBzcHJpbmdGb3JjZVg7XG4gIHRhcmdldE5vZGUuc3ByaW5nRm9yY2VZIC09IHNwcmluZ0ZvcmNlWTtcbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjUmVwdWxzaW9uRm9yY2UgPSBmdW5jdGlvbiAobm9kZUEsIG5vZGVCKSB7XG4gIHZhciByZWN0QSA9IG5vZGVBLmdldFJlY3QoKTtcbiAgdmFyIHJlY3RCID0gbm9kZUIuZ2V0UmVjdCgpO1xuICB2YXIgb3ZlcmxhcEFtb3VudCA9IG5ldyBBcnJheSgyKTtcbiAgdmFyIGNsaXBQb2ludHMgPSBuZXcgQXJyYXkoNCk7XG4gIHZhciBkaXN0YW5jZVg7XG4gIHZhciBkaXN0YW5jZVk7XG4gIHZhciBkaXN0YW5jZVNxdWFyZWQ7XG4gIHZhciBkaXN0YW5jZTtcbiAgdmFyIHJlcHVsc2lvbkZvcmNlO1xuICB2YXIgcmVwdWxzaW9uRm9yY2VYO1xuICB2YXIgcmVwdWxzaW9uRm9yY2VZO1xuXG4gIGlmIChyZWN0QS5pbnRlcnNlY3RzKHJlY3RCKSkvLyB0d28gbm9kZXMgb3ZlcmxhcFxuICB7XG4gICAgLy8gY2FsY3VsYXRlIHNlcGFyYXRpb24gYW1vdW50IGluIHggYW5kIHkgZGlyZWN0aW9uc1xuICAgIElHZW9tZXRyeS5jYWxjU2VwYXJhdGlvbkFtb3VudChyZWN0QSxcbiAgICAgICAgICAgIHJlY3RCLFxuICAgICAgICAgICAgb3ZlcmxhcEFtb3VudCxcbiAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggLyAyLjApO1xuXG4gICAgcmVwdWxzaW9uRm9yY2VYID0gMiAqIG92ZXJsYXBBbW91bnRbMF07XG4gICAgcmVwdWxzaW9uRm9yY2VZID0gMiAqIG92ZXJsYXBBbW91bnRbMV07XG4gICAgXG4gICAgdmFyIGNoaWxkcmVuQ29uc3RhbnQgPSBub2RlQS5ub09mQ2hpbGRyZW4gKiBub2RlQi5ub09mQ2hpbGRyZW4gLyAobm9kZUEubm9PZkNoaWxkcmVuICsgbm9kZUIubm9PZkNoaWxkcmVuKTtcbiAgICBcbiAgICAvLyBBcHBseSBmb3JjZXMgb24gdGhlIHR3byBub2Rlc1xuICAgIG5vZGVBLnJlcHVsc2lvbkZvcmNlWCAtPSBjaGlsZHJlbkNvbnN0YW50ICogcmVwdWxzaW9uRm9yY2VYO1xuICAgIG5vZGVBLnJlcHVsc2lvbkZvcmNlWSAtPSBjaGlsZHJlbkNvbnN0YW50ICogcmVwdWxzaW9uRm9yY2VZO1xuICAgIG5vZGVCLnJlcHVsc2lvbkZvcmNlWCArPSBjaGlsZHJlbkNvbnN0YW50ICogcmVwdWxzaW9uRm9yY2VYO1xuICAgIG5vZGVCLnJlcHVsc2lvbkZvcmNlWSArPSBjaGlsZHJlbkNvbnN0YW50ICogcmVwdWxzaW9uRm9yY2VZO1xuICB9XG4gIGVsc2UvLyBubyBvdmVybGFwXG4gIHtcbiAgICAvLyBjYWxjdWxhdGUgZGlzdGFuY2VcblxuICAgIGlmICh0aGlzLnVuaWZvcm1MZWFmTm9kZVNpemVzICYmXG4gICAgICAgICAgICBub2RlQS5nZXRDaGlsZCgpID09IG51bGwgJiYgbm9kZUIuZ2V0Q2hpbGQoKSA9PSBudWxsKS8vIHNpbXBseSBiYXNlIHJlcHVsc2lvbiBvbiBkaXN0YW5jZSBvZiBub2RlIGNlbnRlcnNcbiAgICB7XG4gICAgICBkaXN0YW5jZVggPSByZWN0Qi5nZXRDZW50ZXJYKCkgLSByZWN0QS5nZXRDZW50ZXJYKCk7XG4gICAgICBkaXN0YW5jZVkgPSByZWN0Qi5nZXRDZW50ZXJZKCkgLSByZWN0QS5nZXRDZW50ZXJZKCk7XG4gICAgfVxuICAgIGVsc2UvLyB1c2UgY2xpcHBpbmcgcG9pbnRzXG4gICAge1xuICAgICAgSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbihyZWN0QSwgcmVjdEIsIGNsaXBQb2ludHMpO1xuXG4gICAgICBkaXN0YW5jZVggPSBjbGlwUG9pbnRzWzJdIC0gY2xpcFBvaW50c1swXTtcbiAgICAgIGRpc3RhbmNlWSA9IGNsaXBQb2ludHNbM10gLSBjbGlwUG9pbnRzWzFdO1xuICAgIH1cblxuICAgIC8vIE5vIHJlcHVsc2lvbiByYW5nZS4gRlIgZ3JpZCB2YXJpYW50IHNob3VsZCB0YWtlIGNhcmUgb2YgdGhpcy5cbiAgICBpZiAoTWF0aC5hYnMoZGlzdGFuY2VYKSA8IEZETGF5b3V0Q29uc3RhbnRzLk1JTl9SRVBVTFNJT05fRElTVClcbiAgICB7XG4gICAgICBkaXN0YW5jZVggPSBJTWF0aC5zaWduKGRpc3RhbmNlWCkgKlxuICAgICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5NSU5fUkVQVUxTSU9OX0RJU1Q7XG4gICAgfVxuXG4gICAgaWYgKE1hdGguYWJzKGRpc3RhbmNlWSkgPCBGRExheW91dENvbnN0YW50cy5NSU5fUkVQVUxTSU9OX0RJU1QpXG4gICAge1xuICAgICAgZGlzdGFuY2VZID0gSU1hdGguc2lnbihkaXN0YW5jZVkpICpcbiAgICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuTUlOX1JFUFVMU0lPTl9ESVNUO1xuICAgIH1cblxuICAgIGRpc3RhbmNlU3F1YXJlZCA9IGRpc3RhbmNlWCAqIGRpc3RhbmNlWCArIGRpc3RhbmNlWSAqIGRpc3RhbmNlWTtcbiAgICBkaXN0YW5jZSA9IE1hdGguc3FydChkaXN0YW5jZVNxdWFyZWQpO1xuXG4gICAgcmVwdWxzaW9uRm9yY2UgPSB0aGlzLnJlcHVsc2lvbkNvbnN0YW50ICogbm9kZUEubm9PZkNoaWxkcmVuICogbm9kZUIubm9PZkNoaWxkcmVuIC8gZGlzdGFuY2VTcXVhcmVkO1xuXG4gICAgLy8gUHJvamVjdCBmb3JjZSBvbnRvIHggYW5kIHkgYXhlc1xuICAgIHJlcHVsc2lvbkZvcmNlWCA9IHJlcHVsc2lvbkZvcmNlICogZGlzdGFuY2VYIC8gZGlzdGFuY2U7XG4gICAgcmVwdWxzaW9uRm9yY2VZID0gcmVwdWxzaW9uRm9yY2UgKiBkaXN0YW5jZVkgLyBkaXN0YW5jZTtcbiAgICAgXG4gICAgLy8gQXBwbHkgZm9yY2VzIG9uIHRoZSB0d28gbm9kZXMgICAgXG4gICAgbm9kZUEucmVwdWxzaW9uRm9yY2VYIC09IHJlcHVsc2lvbkZvcmNlWDtcbiAgICBub2RlQS5yZXB1bHNpb25Gb3JjZVkgLT0gcmVwdWxzaW9uRm9yY2VZO1xuICAgIG5vZGVCLnJlcHVsc2lvbkZvcmNlWCArPSByZXB1bHNpb25Gb3JjZVg7XG4gICAgbm9kZUIucmVwdWxzaW9uRm9yY2VZICs9IHJlcHVsc2lvbkZvcmNlWTtcbiAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNHcmF2aXRhdGlvbmFsRm9yY2UgPSBmdW5jdGlvbiAobm9kZSkge1xuICB2YXIgb3duZXJHcmFwaDtcbiAgdmFyIG93bmVyQ2VudGVyWDtcbiAgdmFyIG93bmVyQ2VudGVyWTtcbiAgdmFyIGRpc3RhbmNlWDtcbiAgdmFyIGRpc3RhbmNlWTtcbiAgdmFyIGFic0Rpc3RhbmNlWDtcbiAgdmFyIGFic0Rpc3RhbmNlWTtcbiAgdmFyIGVzdGltYXRlZFNpemU7XG4gIG93bmVyR3JhcGggPSBub2RlLmdldE93bmVyKCk7XG5cbiAgb3duZXJDZW50ZXJYID0gKG93bmVyR3JhcGguZ2V0UmlnaHQoKSArIG93bmVyR3JhcGguZ2V0TGVmdCgpKSAvIDI7XG4gIG93bmVyQ2VudGVyWSA9IChvd25lckdyYXBoLmdldFRvcCgpICsgb3duZXJHcmFwaC5nZXRCb3R0b20oKSkgLyAyO1xuICBkaXN0YW5jZVggPSBub2RlLmdldENlbnRlclgoKSAtIG93bmVyQ2VudGVyWDtcbiAgZGlzdGFuY2VZID0gbm9kZS5nZXRDZW50ZXJZKCkgLSBvd25lckNlbnRlclk7XG4gIGFic0Rpc3RhbmNlWCA9IE1hdGguYWJzKGRpc3RhbmNlWCkgKyBub2RlLmdldFdpZHRoKCkgLyAyO1xuICBhYnNEaXN0YW5jZVkgPSBNYXRoLmFicyhkaXN0YW5jZVkpICsgbm9kZS5nZXRIZWlnaHQoKSAvIDI7XG5cbiAgaWYgKG5vZGUuZ2V0T3duZXIoKSA9PSB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkpLy8gaW4gdGhlIHJvb3QgZ3JhcGhcbiAge1xuICAgIGVzdGltYXRlZFNpemUgPSBvd25lckdyYXBoLmdldEVzdGltYXRlZFNpemUoKSAqIHRoaXMuZ3Jhdml0eVJhbmdlRmFjdG9yO1xuXG4gICAgaWYgKGFic0Rpc3RhbmNlWCA+IGVzdGltYXRlZFNpemUgfHwgYWJzRGlzdGFuY2VZID4gZXN0aW1hdGVkU2l6ZSlcbiAgICB7XG4gICAgICBub2RlLmdyYXZpdGF0aW9uRm9yY2VYID0gLXRoaXMuZ3Jhdml0eUNvbnN0YW50ICogZGlzdGFuY2VYO1xuICAgICAgbm9kZS5ncmF2aXRhdGlvbkZvcmNlWSA9IC10aGlzLmdyYXZpdHlDb25zdGFudCAqIGRpc3RhbmNlWTtcbiAgICB9XG4gIH1cbiAgZWxzZS8vIGluc2lkZSBhIGNvbXBvdW5kXG4gIHtcbiAgICBlc3RpbWF0ZWRTaXplID0gb3duZXJHcmFwaC5nZXRFc3RpbWF0ZWRTaXplKCkgKiB0aGlzLmNvbXBvdW5kR3Jhdml0eVJhbmdlRmFjdG9yO1xuXG4gICAgaWYgKGFic0Rpc3RhbmNlWCA+IGVzdGltYXRlZFNpemUgfHwgYWJzRGlzdGFuY2VZID4gZXN0aW1hdGVkU2l6ZSlcbiAgICB7XG4gICAgICBub2RlLmdyYXZpdGF0aW9uRm9yY2VYID0gLXRoaXMuZ3Jhdml0eUNvbnN0YW50ICogZGlzdGFuY2VYICpcbiAgICAgICAgICAgICAgdGhpcy5jb21wb3VuZEdyYXZpdHlDb25zdGFudDtcbiAgICAgIG5vZGUuZ3Jhdml0YXRpb25Gb3JjZVkgPSAtdGhpcy5ncmF2aXR5Q29uc3RhbnQgKiBkaXN0YW5jZVkgKlxuICAgICAgICAgICAgICB0aGlzLmNvbXBvdW5kR3Jhdml0eUNvbnN0YW50O1xuICAgIH1cbiAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmlzQ29udmVyZ2VkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY29udmVyZ2VkO1xuICB2YXIgb3NjaWxhdGluZyA9IGZhbHNlO1xuXG4gIGlmICh0aGlzLnRvdGFsSXRlcmF0aW9ucyA+IHRoaXMubWF4SXRlcmF0aW9ucyAvIDMpXG4gIHtcbiAgICBvc2NpbGF0aW5nID1cbiAgICAgICAgICAgIE1hdGguYWJzKHRoaXMudG90YWxEaXNwbGFjZW1lbnQgLSB0aGlzLm9sZFRvdGFsRGlzcGxhY2VtZW50KSA8IDI7XG4gIH1cblxuICBjb252ZXJnZWQgPSB0aGlzLnRvdGFsRGlzcGxhY2VtZW50IDwgdGhpcy50b3RhbERpc3BsYWNlbWVudFRocmVzaG9sZDtcblxuICB0aGlzLm9sZFRvdGFsRGlzcGxhY2VtZW50ID0gdGhpcy50b3RhbERpc3BsYWNlbWVudDtcblxuICByZXR1cm4gY29udmVyZ2VkIHx8IG9zY2lsYXRpbmc7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYW5pbWF0aW9uRHVyaW5nTGF5b3V0ICYmICF0aGlzLmlzU3ViTGF5b3V0KVxuICB7XG4gICAgaWYgKHRoaXMubm90QW5pbWF0ZWRJdGVyYXRpb25zID09IHRoaXMuYW5pbWF0aW9uUGVyaW9kKVxuICAgIHtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICB0aGlzLm5vdEFuaW1hdGVkSXRlcmF0aW9ucyA9IDA7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICB0aGlzLm5vdEFuaW1hdGVkSXRlcmF0aW9ucysrO1xuICAgIH1cbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IEZSLUdyaWQgVmFyaWFudCBSZXB1bHNpb24gRm9yY2UgQ2FsY3VsYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjR3JpZCA9IGZ1bmN0aW9uIChncmFwaCl7XG5cbiAgdmFyIHNpemVYID0gMDsgXG4gIHZhciBzaXplWSA9IDA7XG4gIFxuICBzaXplWCA9IHBhcnNlSW50KE1hdGguY2VpbCgoZ3JhcGguZ2V0UmlnaHQoKSAtIGdyYXBoLmdldExlZnQoKSkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSk7XG4gIHNpemVZID0gcGFyc2VJbnQoTWF0aC5jZWlsKChncmFwaC5nZXRCb3R0b20oKSAtIGdyYXBoLmdldFRvcCgpKSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgXG4gIHZhciBncmlkID0gbmV3IEFycmF5KHNpemVYKTtcbiAgXG4gIGZvcih2YXIgaSA9IDA7IGkgPCBzaXplWDsgaSsrKXtcbiAgICBncmlkW2ldID0gbmV3IEFycmF5KHNpemVZKTsgICAgXG4gIH1cbiAgXG4gIGZvcih2YXIgaSA9IDA7IGkgPCBzaXplWDsgaSsrKXtcbiAgICBmb3IodmFyIGogPSAwOyBqIDwgc2l6ZVk7IGorKyl7XG4gICAgICBncmlkW2ldW2pdID0gbmV3IEFycmF5KCk7ICAgIFxuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGdyaWQ7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuYWRkTm9kZVRvR3JpZCA9IGZ1bmN0aW9uICh2LCBsZWZ0LCB0b3Ape1xuICAgIFxuICB2YXIgc3RhcnRYID0gMDtcbiAgdmFyIGZpbmlzaFggPSAwO1xuICB2YXIgc3RhcnRZID0gMDtcbiAgdmFyIGZpbmlzaFkgPSAwO1xuICBcbiAgc3RhcnRYID0gcGFyc2VJbnQoTWF0aC5mbG9vcigodi5nZXRSZWN0KCkueCAtIGxlZnQpIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpO1xuICBmaW5pc2hYID0gcGFyc2VJbnQoTWF0aC5mbG9vcigodi5nZXRSZWN0KCkud2lkdGggKyB2LmdldFJlY3QoKS54IC0gbGVmdCkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSk7XG4gIHN0YXJ0WSA9IHBhcnNlSW50KE1hdGguZmxvb3IoKHYuZ2V0UmVjdCgpLnkgLSB0b3ApIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpO1xuICBmaW5pc2hZID0gcGFyc2VJbnQoTWF0aC5mbG9vcigodi5nZXRSZWN0KCkuaGVpZ2h0ICsgdi5nZXRSZWN0KCkueSAtIHRvcCkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSk7XG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0WDsgaSA8PSBmaW5pc2hYOyBpKyspXG4gIHtcbiAgICBmb3IgKHZhciBqID0gc3RhcnRZOyBqIDw9IGZpbmlzaFk7IGorKylcbiAgICB7XG4gICAgICB0aGlzLmdyaWRbaV1bal0ucHVzaCh2KTtcbiAgICAgIHYuc2V0R3JpZENvb3JkaW5hdGVzKHN0YXJ0WCwgZmluaXNoWCwgc3RhcnRZLCBmaW5pc2hZKTsgXG4gICAgfVxuICB9ICBcblxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLnVwZGF0ZUdyaWQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGk7XG4gIHZhciBub2RlQTtcbiAgdmFyIGxOb2RlcyA9IHRoaXMuZ2V0QWxsTm9kZXMoKTtcbiAgXG4gIHRoaXMuZ3JpZCA9IHRoaXMuY2FsY0dyaWQodGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpKTsgICBcblxuICAvLyBwdXQgYWxsIG5vZGVzIHRvIHByb3BlciBncmlkIGNlbGxzXG4gIGZvciAoaSA9IDA7IGkgPCBsTm9kZXMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICBub2RlQSA9IGxOb2Rlc1tpXTtcbiAgICB0aGlzLmFkZE5vZGVUb0dyaWQobm9kZUEsIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXRMZWZ0KCksIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXRUb3AoKSk7XG4gIH0gXG5cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjdWxhdGVSZXB1bHNpb25Gb3JjZU9mQU5vZGUgPSBmdW5jdGlvbiAobm9kZUEsIHByb2Nlc3NlZE5vZGVTZXQpe1xuICBcbiAgaWYgKCh0aGlzLnRvdGFsSXRlcmF0aW9ucyAlIEZETGF5b3V0Q29uc3RhbnRzLkdSSURfQ0FMQ1VMQVRJT05fQ0hFQ0tfUEVSSU9EID09IDEgJiYgIXRoaXMuaXNUcmVlR3Jvd2luZyAmJiAhdGhpcy5pc0dyb3d0aEZpbmlzaGVkKSB8fCAodGhpcy5ncm93VHJlZUl0ZXJhdGlvbnMgJSAxMCA9PSAxICYmIHRoaXMuaXNUcmVlR3Jvd2luZykgfHwgKHRoaXMuYWZ0ZXJHcm93dGhJdGVyYXRpb25zICUgMTAgPT0gMSAmJiB0aGlzLmlzR3Jvd3RoRmluaXNoZWQpKVxuICB7XG4gICAgdmFyIHN1cnJvdW5kaW5nID0gbmV3IFNldCgpO1xuICAgIG5vZGVBLnN1cnJvdW5kaW5nID0gbmV3IEFycmF5KCk7XG4gICAgdmFyIG5vZGVCO1xuICAgIHZhciBncmlkID0gdGhpcy5ncmlkO1xuICAgIFxuICAgIGZvciAodmFyIGkgPSAobm9kZUEuc3RhcnRYIC0gMSk7IGkgPCAobm9kZUEuZmluaXNoWCArIDIpOyBpKyspXG4gICAge1xuICAgICAgZm9yICh2YXIgaiA9IChub2RlQS5zdGFydFkgLSAxKTsgaiA8IChub2RlQS5maW5pc2hZICsgMik7IGorKylcbiAgICAgIHtcbiAgICAgICAgaWYgKCEoKGkgPCAwKSB8fCAoaiA8IDApIHx8IChpID49IGdyaWQubGVuZ3RoKSB8fCAoaiA+PSBncmlkWzBdLmxlbmd0aCkpKVxuICAgICAgICB7ICBcbiAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGdyaWRbaV1bal0ubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIG5vZGVCID0gZ3JpZFtpXVtqXVtrXTtcblxuICAgICAgICAgICAgLy8gSWYgYm90aCBub2RlcyBhcmUgbm90IG1lbWJlcnMgb2YgdGhlIHNhbWUgZ3JhcGgsIFxuICAgICAgICAgICAgLy8gb3IgYm90aCBub2RlcyBhcmUgdGhlIHNhbWUsIHNraXAuXG4gICAgICAgICAgICBpZiAoKG5vZGVBLmdldE93bmVyKCkgIT0gbm9kZUIuZ2V0T3duZXIoKSkgfHwgKG5vZGVBID09IG5vZGVCKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSByZXB1bHNpb24gZm9yY2UgYmV0d2VlblxuICAgICAgICAgICAgLy8gbm9kZUEgYW5kIG5vZGVCIGhhcyBhbHJlYWR5IGJlZW4gY2FsY3VsYXRlZFxuICAgICAgICAgICAgaWYgKCFwcm9jZXNzZWROb2RlU2V0Lmhhcyhub2RlQikgJiYgIXN1cnJvdW5kaW5nLmhhcyhub2RlQikpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhciBkaXN0YW5jZVggPSBNYXRoLmFicyhub2RlQS5nZXRDZW50ZXJYKCktbm9kZUIuZ2V0Q2VudGVyWCgpKSAtIFxuICAgICAgICAgICAgICAgICAgICAoKG5vZGVBLmdldFdpZHRoKCkvMikgKyAobm9kZUIuZ2V0V2lkdGgoKS8yKSk7XG4gICAgICAgICAgICAgIHZhciBkaXN0YW5jZVkgPSBNYXRoLmFicyhub2RlQS5nZXRDZW50ZXJZKCktbm9kZUIuZ2V0Q2VudGVyWSgpKSAtIFxuICAgICAgICAgICAgICAgICAgICAoKG5vZGVBLmdldEhlaWdodCgpLzIpICsgKG5vZGVCLmdldEhlaWdodCgpLzIpKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBpZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiBub2RlQSBhbmQgbm9kZUIgXG4gICAgICAgICAgICAgIC8vIGlzIGxlc3MgdGhlbiBjYWxjdWxhdGlvbiByYW5nZVxuICAgICAgICAgICAgICBpZiAoKGRpc3RhbmNlWCA8PSB0aGlzLnJlcHVsc2lvblJhbmdlKSAmJiAoZGlzdGFuY2VZIDw9IHRoaXMucmVwdWxzaW9uUmFuZ2UpKVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy90aGVuIGFkZCBub2RlQiB0byBzdXJyb3VuZGluZyBvZiBub2RlQVxuICAgICAgICAgICAgICAgIHN1cnJvdW5kaW5nLmFkZChub2RlQik7XG4gICAgICAgICAgICAgIH0gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICB9XG4gICAgICAgIH0gICAgICAgICAgXG4gICAgICB9XG4gICAgfVxuXG4gICAgbm9kZUEuc3Vycm91bmRpbmcgPSBbLi4uc3Vycm91bmRpbmddO1xuXHRcbiAgfVxuICBmb3IgKGkgPSAwOyBpIDwgbm9kZUEuc3Vycm91bmRpbmcubGVuZ3RoOyBpKyspXG4gIHtcbiAgICB0aGlzLmNhbGNSZXB1bHNpb25Gb3JjZShub2RlQSwgbm9kZUEuc3Vycm91bmRpbmdbaV0pO1xuICB9XHRcbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjUmVwdWxzaW9uUmFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAwLjA7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogVHJlZSBSZWR1Y3Rpb24gbWV0aG9kc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFJlZHVjZSB0cmVlcyBcbkZETGF5b3V0LnByb3RvdHlwZS5yZWR1Y2VUcmVlcyA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBwcnVuZWROb2Rlc0FsbCA9IFtdO1xuICB2YXIgY29udGFpbnNMZWFmID0gdHJ1ZTtcbiAgdmFyIG5vZGU7XG4gIFxuICB3aGlsZShjb250YWluc0xlYWYpIHtcbiAgICB2YXIgYWxsTm9kZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2RlcygpO1xuICAgIHZhciBwcnVuZWROb2Rlc0luU3RlcFRlbXAgPSBbXTtcbiAgICBjb250YWluc0xlYWYgPSBmYWxzZTtcbiAgICBcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBub2RlID0gYWxsTm9kZXNbaV07XG4gICAgICBpZihub2RlLmdldEVkZ2VzKCkubGVuZ3RoID09IDEgJiYgIW5vZGUuZ2V0RWRnZXMoKVswXS5pc0ludGVyR3JhcGggJiYgbm9kZS5nZXRDaGlsZCgpID09IG51bGwpe1xuICAgICAgICBwcnVuZWROb2Rlc0luU3RlcFRlbXAucHVzaChbbm9kZSwgbm9kZS5nZXRFZGdlcygpWzBdLCBub2RlLmdldE93bmVyKCldKTtcbiAgICAgICAgY29udGFpbnNMZWFmID0gdHJ1ZTtcbiAgICAgIH0gIFxuICAgIH1cbiAgICBpZihjb250YWluc0xlYWYgPT0gdHJ1ZSl7XG4gICAgICB2YXIgcHJ1bmVkTm9kZXNJblN0ZXAgPSBbXTtcbiAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBwcnVuZWROb2Rlc0luU3RlcFRlbXAubGVuZ3RoOyBqKyspe1xuICAgICAgICBpZihwcnVuZWROb2Rlc0luU3RlcFRlbXBbal1bMF0uZ2V0RWRnZXMoKS5sZW5ndGggPT0gMSl7XG4gICAgICAgICAgcHJ1bmVkTm9kZXNJblN0ZXAucHVzaChwcnVuZWROb2Rlc0luU3RlcFRlbXBbal0pOyAgXG4gICAgICAgICAgcHJ1bmVkTm9kZXNJblN0ZXBUZW1wW2pdWzBdLmdldE93bmVyKCkucmVtb3ZlKHBydW5lZE5vZGVzSW5TdGVwVGVtcFtqXVswXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHBydW5lZE5vZGVzQWxsLnB1c2gocHJ1bmVkTm9kZXNJblN0ZXApO1xuICAgICAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxOb2RlcygpO1xuICAgICAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxFZGdlcygpO1xuICAgIH1cbiAgfVxuICB0aGlzLnBydW5lZE5vZGVzQWxsID0gcHJ1bmVkTm9kZXNBbGw7XG59O1xuXG4vLyBHcm93IHRyZWUgb25lIHN0ZXAgXG5GRExheW91dC5wcm90b3R5cGUuZ3Jvd1RyZWUgPSBmdW5jdGlvbihwcnVuZWROb2Rlc0FsbClcbntcbiAgdmFyIGxlbmd0aE9mUHJ1bmVkTm9kZXNJblN0ZXAgPSBwcnVuZWROb2Rlc0FsbC5sZW5ndGg7IFxuICB2YXIgcHJ1bmVkTm9kZXNJblN0ZXAgPSBwcnVuZWROb2Rlc0FsbFtsZW5ndGhPZlBydW5lZE5vZGVzSW5TdGVwIC0gMV07ICBcblxuICB2YXIgbm9kZURhdGE7ICBcbiAgZm9yKHZhciBpID0gMDsgaSA8IHBydW5lZE5vZGVzSW5TdGVwLmxlbmd0aDsgaSsrKXtcbiAgICBub2RlRGF0YSA9IHBydW5lZE5vZGVzSW5TdGVwW2ldO1xuXG4gICAgdGhpcy5maW5kUGxhY2Vmb3JQcnVuZWROb2RlKG5vZGVEYXRhKTtcbiAgICBcbiAgICBub2RlRGF0YVsyXS5hZGQobm9kZURhdGFbMF0pO1xuICAgIG5vZGVEYXRhWzJdLmFkZChub2RlRGF0YVsxXSwgbm9kZURhdGFbMV0uc291cmNlLCBub2RlRGF0YVsxXS50YXJnZXQpO1xuICB9XG5cbiAgcHJ1bmVkTm9kZXNBbGwuc3BsaWNlKHBydW5lZE5vZGVzQWxsLmxlbmd0aC0xLCAxKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxOb2RlcygpO1xuICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbEVkZ2VzKCk7XG59O1xuXG4vLyBGaW5kIGFuIGFwcHJvcHJpYXRlIHBvc2l0aW9uIHRvIHJlcGxhY2UgcHJ1bmVkIG5vZGUsIHRoaXMgbWV0aG9kIGNhbiBiZSBpbXByb3ZlZFxuRkRMYXlvdXQucHJvdG90eXBlLmZpbmRQbGFjZWZvclBydW5lZE5vZGUgPSBmdW5jdGlvbihub2RlRGF0YSl7XG4gIFxuICB2YXIgZ3JpZEZvclBydW5lZE5vZGU7ICBcbiAgdmFyIG5vZGVUb0Nvbm5lY3Q7XG4gIHZhciBwcnVuZWROb2RlID0gbm9kZURhdGFbMF07XG4gIGlmKHBydW5lZE5vZGUgPT0gbm9kZURhdGFbMV0uc291cmNlKXtcbiAgICBub2RlVG9Db25uZWN0ID0gbm9kZURhdGFbMV0udGFyZ2V0O1xuICB9XG4gIGVsc2Uge1xuICAgIG5vZGVUb0Nvbm5lY3QgPSBub2RlRGF0YVsxXS5zb3VyY2U7ICBcbiAgfVxuICB2YXIgc3RhcnRHcmlkWCA9IG5vZGVUb0Nvbm5lY3Quc3RhcnRYO1xuICB2YXIgZmluaXNoR3JpZFggPSBub2RlVG9Db25uZWN0LmZpbmlzaFg7XG4gIHZhciBzdGFydEdyaWRZID0gbm9kZVRvQ29ubmVjdC5zdGFydFk7XG4gIHZhciBmaW5pc2hHcmlkWSA9IG5vZGVUb0Nvbm5lY3QuZmluaXNoWTsgXG4gIFxuICB2YXIgdXBOb2RlQ291bnQgPSAwO1xuICB2YXIgZG93bk5vZGVDb3VudCA9IDA7XG4gIHZhciByaWdodE5vZGVDb3VudCA9IDA7XG4gIHZhciBsZWZ0Tm9kZUNvdW50ID0gMDtcbiAgdmFyIGNvbnRyb2xSZWdpb25zID0gW3VwTm9kZUNvdW50LCByaWdodE5vZGVDb3VudCwgZG93bk5vZGVDb3VudCwgbGVmdE5vZGVDb3VudF1cbiAgXG4gIGlmKHN0YXJ0R3JpZFkgPiAwKXtcbiAgICBmb3IodmFyIGkgPSBzdGFydEdyaWRYOyBpIDw9IGZpbmlzaEdyaWRYOyBpKysgKXtcbiAgICAgIGNvbnRyb2xSZWdpb25zWzBdICs9ICh0aGlzLmdyaWRbaV1bc3RhcnRHcmlkWSAtIDFdLmxlbmd0aCArIHRoaXMuZ3JpZFtpXVtzdGFydEdyaWRZXS5sZW5ndGggLSAxKTsgICBcbiAgICB9XG4gIH1cbiAgaWYoZmluaXNoR3JpZFggPCB0aGlzLmdyaWQubGVuZ3RoIC0gMSl7XG4gICAgZm9yKHZhciBpID0gc3RhcnRHcmlkWTsgaSA8PSBmaW5pc2hHcmlkWTsgaSsrICl7XG4gICAgICBjb250cm9sUmVnaW9uc1sxXSArPSAodGhpcy5ncmlkW2ZpbmlzaEdyaWRYICsgMV1baV0ubGVuZ3RoICsgdGhpcy5ncmlkW2ZpbmlzaEdyaWRYXVtpXS5sZW5ndGggLSAxKTsgICBcbiAgICB9XG4gIH1cbiAgaWYoZmluaXNoR3JpZFkgPCB0aGlzLmdyaWRbMF0ubGVuZ3RoIC0gMSl7XG4gICAgZm9yKHZhciBpID0gc3RhcnRHcmlkWDsgaSA8PSBmaW5pc2hHcmlkWDsgaSsrICl7XG4gICAgICBjb250cm9sUmVnaW9uc1syXSArPSAodGhpcy5ncmlkW2ldW2ZpbmlzaEdyaWRZICsgMV0ubGVuZ3RoICsgdGhpcy5ncmlkW2ldW2ZpbmlzaEdyaWRZXS5sZW5ndGggLSAxKTsgICBcbiAgICB9XG4gIH1cbiAgaWYoc3RhcnRHcmlkWCA+IDApe1xuICAgIGZvcih2YXIgaSA9IHN0YXJ0R3JpZFk7IGkgPD0gZmluaXNoR3JpZFk7IGkrKyApe1xuICAgICAgY29udHJvbFJlZ2lvbnNbM10gKz0gKHRoaXMuZ3JpZFtzdGFydEdyaWRYIC0gMV1baV0ubGVuZ3RoICsgdGhpcy5ncmlkW3N0YXJ0R3JpZFhdW2ldLmxlbmd0aCAtIDEpOyAgIFxuICAgIH1cbiAgfVxuICB2YXIgbWluID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBtaW5Db3VudDtcbiAgdmFyIG1pbkluZGV4O1xuICBmb3IodmFyIGogPSAwOyBqIDwgY29udHJvbFJlZ2lvbnMubGVuZ3RoOyBqKyspe1xuICAgIGlmKGNvbnRyb2xSZWdpb25zW2pdIDwgbWluKXtcbiAgICAgIG1pbiA9IGNvbnRyb2xSZWdpb25zW2pdO1xuICAgICAgbWluQ291bnQgPSAxO1xuICAgICAgbWluSW5kZXggPSBqO1xuICAgIH0gIFxuICAgIGVsc2UgaWYoY29udHJvbFJlZ2lvbnNbal0gPT0gbWluKXtcbiAgICAgIG1pbkNvdW50Kys7ICBcbiAgICB9XG4gIH1cbiAgXG4gIGlmKG1pbkNvdW50ID09IDMgJiYgbWluID09IDApe1xuICAgIGlmKGNvbnRyb2xSZWdpb25zWzBdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbMV0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1syXSA9PSAwKXtcbiAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMTsgICAgXG4gICAgfVxuICAgIGVsc2UgaWYoY29udHJvbFJlZ2lvbnNbMF0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1sxXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzNdID09IDApe1xuICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAwOyAgXG4gICAgfVxuICAgIGVsc2UgaWYoY29udHJvbFJlZ2lvbnNbMF0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1syXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzNdID09IDApe1xuICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAzOyAgXG4gICAgfVxuICAgIGVsc2UgaWYoY29udHJvbFJlZ2lvbnNbMV0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1syXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzNdID09IDApe1xuICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAyOyAgXG4gICAgfVxuICB9XG4gIGVsc2UgaWYobWluQ291bnQgPT0gMiAmJiBtaW4gPT0gMCl7XG4gICAgdmFyIHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgIGlmKGNvbnRyb2xSZWdpb25zWzBdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbMV0gPT0gMCl7O1xuICAgICAgaWYocmFuZG9tID09IDApe1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDA7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDE7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYoY29udHJvbFJlZ2lvbnNbMF0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1syXSA9PSAwKXtcbiAgICAgIGlmKHJhbmRvbSA9PSAwKXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAwO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAyO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKGNvbnRyb2xSZWdpb25zWzBdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbM10gPT0gMCl7XG4gICAgICBpZihyYW5kb20gPT0gMCl7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMDtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMztcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZihjb250cm9sUmVnaW9uc1sxXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzJdID09IDApe1xuICAgICAgaWYocmFuZG9tID09IDApe1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDE7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDI7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYoY29udHJvbFJlZ2lvbnNbMV0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1szXSA9PSAwKXtcbiAgICAgIGlmKHJhbmRvbSA9PSAwKXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAxO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAzO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmKHJhbmRvbSA9PSAwKXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAyO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIGlmKG1pbkNvdW50ID09IDQgJiYgbWluID09IDApe1xuICAgIHZhciByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcbiAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IHJhbmRvbTsgIFxuICB9XG4gIGVsc2Uge1xuICAgIGdyaWRGb3JQcnVuZWROb2RlID0gbWluSW5kZXg7XG4gIH1cbiAgXG4gIGlmKGdyaWRGb3JQcnVuZWROb2RlID09IDApIHtcbiAgICBwcnVuZWROb2RlLnNldENlbnRlcihub2RlVG9Db25uZWN0LmdldENlbnRlclgoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBub2RlVG9Db25uZWN0LmdldENlbnRlclkoKSAtIG5vZGVUb0Nvbm5lY3QuZ2V0SGVpZ2h0KCkvMiAtIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggLSBwcnVuZWROb2RlLmdldEhlaWdodCgpLzIpOyAgXG4gIH1cbiAgZWxzZSBpZihncmlkRm9yUHJ1bmVkTm9kZSA9PSAxKSB7XG4gICAgcHJ1bmVkTm9kZS5zZXRDZW50ZXIobm9kZVRvQ29ubmVjdC5nZXRDZW50ZXJYKCkgKyBub2RlVG9Db25uZWN0LmdldFdpZHRoKCkvMiArIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggKyBwcnVuZWROb2RlLmdldFdpZHRoKCkvMixcbiAgICAgICAgICAgICAgICAgICAgICAgICBub2RlVG9Db25uZWN0LmdldENlbnRlclkoKSk7ICBcbiAgfVxuICBlbHNlIGlmKGdyaWRGb3JQcnVuZWROb2RlID09IDIpIHtcbiAgICBwcnVuZWROb2RlLnNldENlbnRlcihub2RlVG9Db25uZWN0LmdldENlbnRlclgoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBub2RlVG9Db25uZWN0LmdldENlbnRlclkoKSArIG5vZGVUb0Nvbm5lY3QuZ2V0SGVpZ2h0KCkvMiArIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggKyBwcnVuZWROb2RlLmdldEhlaWdodCgpLzIpOyAgXG4gIH1cbiAgZWxzZSB7IFxuICAgIHBydW5lZE5vZGUuc2V0Q2VudGVyKG5vZGVUb0Nvbm5lY3QuZ2V0Q2VudGVyWCgpIC0gbm9kZVRvQ29ubmVjdC5nZXRXaWR0aCgpLzIgLSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIIC0gcHJ1bmVkTm9kZS5nZXRXaWR0aCgpLzIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvQ29ubmVjdC5nZXRDZW50ZXJZKCkpOyAgXG4gIH1cbiAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZETGF5b3V0O1xuIiwidmFyIExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vTGF5b3V0Q29uc3RhbnRzJyk7XG5cbmZ1bmN0aW9uIEZETGF5b3V0Q29uc3RhbnRzKCkge1xufVxuXG4vL0ZETGF5b3V0Q29uc3RhbnRzIGluaGVyaXRzIHN0YXRpYyBwcm9wcyBpbiBMYXlvdXRDb25zdGFudHNcbmZvciAodmFyIHByb3AgaW4gTGF5b3V0Q29uc3RhbnRzKSB7XG4gIEZETGF5b3V0Q29uc3RhbnRzW3Byb3BdID0gTGF5b3V0Q29uc3RhbnRzW3Byb3BdO1xufVxuXG5GRExheW91dENvbnN0YW50cy5NQVhfSVRFUkFUSU9OUyA9IDI1MDA7XG5cbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggPSA1MDtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfU1BSSU5HX1NUUkVOR1RIID0gMC40NTtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUkVQVUxTSU9OX1NUUkVOR1RIID0gNDUwMC4wO1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1NUUkVOR1RIID0gMC40O1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1NUUkVOR1RIID0gMS4wO1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiA9IDMuODtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1IgPSAxLjU7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX1VTRV9TTUFSVF9JREVBTF9FREdFX0xFTkdUSF9DQUxDVUxBVElPTiA9IHRydWU7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX1VTRV9TTUFSVF9SRVBVTFNJT05fUkFOR0VfQ0FMQ1VMQVRJT04gPSB0cnVlO1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCA9IDAuNTtcbkZETGF5b3V0Q29uc3RhbnRzLk1BWF9OT0RFX0RJU1BMQUNFTUVOVF9JTkNSRU1FTlRBTCA9IDEwMC4wO1xuRkRMYXlvdXRDb25zdGFudHMuTUFYX05PREVfRElTUExBQ0VNRU5UID0gRkRMYXlvdXRDb25zdGFudHMuTUFYX05PREVfRElTUExBQ0VNRU5UX0lOQ1JFTUVOVEFMICogMztcbkZETGF5b3V0Q29uc3RhbnRzLk1JTl9SRVBVTFNJT05fRElTVCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggLyAxMC4wO1xuRkRMYXlvdXRDb25zdGFudHMuQ09OVkVSR0VOQ0VfQ0hFQ0tfUEVSSU9EID0gMTAwO1xuRkRMYXlvdXRDb25zdGFudHMuUEVSX0xFVkVMX0lERUFMX0VER0VfTEVOR1RIX0ZBQ1RPUiA9IDAuMTtcbkZETGF5b3V0Q29uc3RhbnRzLk1JTl9FREdFX0xFTkdUSCA9IDE7XG5GRExheW91dENvbnN0YW50cy5HUklEX0NBTENVTEFUSU9OX0NIRUNLX1BFUklPRCA9IDEwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZETGF5b3V0Q29uc3RhbnRzO1xuIiwidmFyIExFZGdlID0gcmVxdWlyZSgnLi9MRWRnZScpO1xudmFyIEZETGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9GRExheW91dENvbnN0YW50cycpO1xuXG5mdW5jdGlvbiBGRExheW91dEVkZ2Uoc291cmNlLCB0YXJnZXQsIHZFZGdlKSB7XG4gIExFZGdlLmNhbGwodGhpcywgc291cmNlLCB0YXJnZXQsIHZFZGdlKTtcbiAgdGhpcy5pZGVhbExlbmd0aCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEg7XG59XG5cbkZETGF5b3V0RWRnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExFZGdlLnByb3RvdHlwZSk7XG5cbmZvciAodmFyIHByb3AgaW4gTEVkZ2UpIHtcbiAgRkRMYXlvdXRFZGdlW3Byb3BdID0gTEVkZ2VbcHJvcF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRkRMYXlvdXRFZGdlO1xuIiwidmFyIExOb2RlID0gcmVxdWlyZSgnLi9MTm9kZScpO1xuXG5mdW5jdGlvbiBGRExheW91dE5vZGUoZ20sIGxvYywgc2l6ZSwgdk5vZGUpIHtcbiAgLy8gYWx0ZXJuYXRpdmUgY29uc3RydWN0b3IgaXMgaGFuZGxlZCBpbnNpZGUgTE5vZGVcbiAgTE5vZGUuY2FsbCh0aGlzLCBnbSwgbG9jLCBzaXplLCB2Tm9kZSk7XG4gIC8vU3ByaW5nLCByZXB1bHNpb24gYW5kIGdyYXZpdGF0aW9uYWwgZm9yY2VzIGFjdGluZyBvbiB0aGlzIG5vZGVcbiAgdGhpcy5zcHJpbmdGb3JjZVggPSAwO1xuICB0aGlzLnNwcmluZ0ZvcmNlWSA9IDA7XG4gIHRoaXMucmVwdWxzaW9uRm9yY2VYID0gMDtcbiAgdGhpcy5yZXB1bHNpb25Gb3JjZVkgPSAwO1xuICB0aGlzLmdyYXZpdGF0aW9uRm9yY2VYID0gMDtcbiAgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWSA9IDA7XG4gIC8vQW1vdW50IGJ5IHdoaWNoIHRoaXMgbm9kZSBpcyB0byBiZSBtb3ZlZCBpbiB0aGlzIGl0ZXJhdGlvblxuICB0aGlzLmRpc3BsYWNlbWVudFggPSAwO1xuICB0aGlzLmRpc3BsYWNlbWVudFkgPSAwO1xuXG4gIC8vU3RhcnQgYW5kIGZpbmlzaCBncmlkIGNvb3JkaW5hdGVzIHRoYXQgdGhpcyBub2RlIGlzIGZhbGxlbiBpbnRvXG4gIHRoaXMuc3RhcnRYID0gMDtcbiAgdGhpcy5maW5pc2hYID0gMDtcbiAgdGhpcy5zdGFydFkgPSAwO1xuICB0aGlzLmZpbmlzaFkgPSAwO1xuXG4gIC8vR2VvbWV0cmljIG5laWdoYm9ycyBvZiB0aGlzIG5vZGVcbiAgdGhpcy5zdXJyb3VuZGluZyA9IFtdO1xufVxuXG5GRExheW91dE5vZGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMTm9kZS5wcm90b3R5cGUpO1xuXG5mb3IgKHZhciBwcm9wIGluIExOb2RlKSB7XG4gIEZETGF5b3V0Tm9kZVtwcm9wXSA9IExOb2RlW3Byb3BdO1xufVxuXG5GRExheW91dE5vZGUucHJvdG90eXBlLnNldEdyaWRDb29yZGluYXRlcyA9IGZ1bmN0aW9uIChfc3RhcnRYLCBfZmluaXNoWCwgX3N0YXJ0WSwgX2ZpbmlzaFkpXG57XG4gIHRoaXMuc3RhcnRYID0gX3N0YXJ0WDtcbiAgdGhpcy5maW5pc2hYID0gX2ZpbmlzaFg7XG4gIHRoaXMuc3RhcnRZID0gX3N0YXJ0WTtcbiAgdGhpcy5maW5pc2hZID0gX2ZpbmlzaFk7XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRkRMYXlvdXROb2RlO1xuIiwidmFyIFVuaXF1ZUlER2VuZXJldG9yID0gcmVxdWlyZSgnLi9VbmlxdWVJREdlbmVyZXRvcicpO1xuXG5mdW5jdGlvbiBIYXNoTWFwKCkge1xuICB0aGlzLm1hcCA9IHt9O1xuICB0aGlzLmtleXMgPSBbXTtcbn1cblxuSGFzaE1hcC5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdmFyIHRoZUlkID0gVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQoa2V5KTtcbiAgaWYgKCF0aGlzLmNvbnRhaW5zKHRoZUlkKSkge1xuICAgIHRoaXMubWFwW3RoZUlkXSA9IHZhbHVlO1xuICAgIHRoaXMua2V5cy5wdXNoKGtleSk7XG4gIH1cbn07XG5cbkhhc2hNYXAucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKGtleSkge1xuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChrZXkpO1xuICByZXR1cm4gdGhpcy5tYXBba2V5XSAhPSBudWxsO1xufTtcblxuSGFzaE1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChrZXkpO1xuICByZXR1cm4gdGhpcy5tYXBbdGhlSWRdO1xufTtcblxuSGFzaE1hcC5wcm90b3R5cGUua2V5U2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5rZXlzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoTWFwO1xuIiwidmFyIFVuaXF1ZUlER2VuZXJldG9yID0gcmVxdWlyZSgnLi9VbmlxdWVJREdlbmVyZXRvcicpO1xuXG5mdW5jdGlvbiBIYXNoU2V0KCkge1xuICB0aGlzLnNldCA9IHt9O1xufVxuO1xuXG5IYXNoU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciB0aGVJZCA9IFVuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKG9iaik7XG4gIGlmICghdGhpcy5jb250YWlucyh0aGVJZCkpXG4gICAgdGhpcy5zZXRbdGhlSWRdID0gb2JqO1xufTtcblxuSGFzaFNldC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG9iaikge1xuICBkZWxldGUgdGhpcy5zZXRbVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQob2JqKV07XG59O1xuXG5IYXNoU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5zZXQgPSB7fTtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdGhpcy5zZXRbVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQob2JqKV0gPT0gb2JqO1xufTtcblxuSGFzaFNldC5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuc2l6ZSgpID09PSAwO1xufTtcblxuSGFzaFNldC5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc2V0KS5sZW5ndGg7XG59O1xuXG4vL2NvbmNhdHMgdGhpcy5zZXQgdG8gdGhlIGdpdmVuIGxpc3Rcbkhhc2hTZXQucHJvdG90eXBlLmFkZEFsbFRvID0gZnVuY3Rpb24gKGxpc3QpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnNldCk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGxpc3QucHVzaCh0aGlzLnNldFtrZXlzW2ldXSk7XG4gIH1cbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnNldCkubGVuZ3RoO1xufTtcblxuSGFzaFNldC5wcm90b3R5cGUuYWRkQWxsID0gZnVuY3Rpb24gKGxpc3QpIHtcbiAgdmFyIHMgPSBsaXN0Lmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspIHtcbiAgICB2YXIgdiA9IGxpc3RbaV07XG4gICAgdGhpcy5hZGQodik7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaFNldDtcbiIsImZ1bmN0aW9uIElHZW9tZXRyeSgpIHtcbn1cblxuSUdlb21ldHJ5LmNhbGNTZXBhcmF0aW9uQW1vdW50ID0gZnVuY3Rpb24gKHJlY3RBLCByZWN0Qiwgb3ZlcmxhcEFtb3VudCwgc2VwYXJhdGlvbkJ1ZmZlcilcbntcbiAgaWYgKCFyZWN0QS5pbnRlcnNlY3RzKHJlY3RCKSkge1xuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICB9XG4gIHZhciBkaXJlY3Rpb25zID0gbmV3IEFycmF5KDIpO1xuICBJR2VvbWV0cnkuZGVjaWRlRGlyZWN0aW9uc0Zvck92ZXJsYXBwaW5nTm9kZXMocmVjdEEsIHJlY3RCLCBkaXJlY3Rpb25zKTtcbiAgb3ZlcmxhcEFtb3VudFswXSA9IE1hdGgubWluKHJlY3RBLmdldFJpZ2h0KCksIHJlY3RCLmdldFJpZ2h0KCkpIC1cbiAgICAgICAgICBNYXRoLm1heChyZWN0QS54LCByZWN0Qi54KTtcbiAgb3ZlcmxhcEFtb3VudFsxXSA9IE1hdGgubWluKHJlY3RBLmdldEJvdHRvbSgpLCByZWN0Qi5nZXRCb3R0b20oKSkgLVxuICAgICAgICAgIE1hdGgubWF4KHJlY3RBLnksIHJlY3RCLnkpO1xuICAvLyB1cGRhdGUgdGhlIG92ZXJsYXBwaW5nIGFtb3VudHMgZm9yIHRoZSBmb2xsb3dpbmcgY2FzZXM6XG4gIGlmICgocmVjdEEuZ2V0WCgpIDw9IHJlY3RCLmdldFgoKSkgJiYgKHJlY3RBLmdldFJpZ2h0KCkgPj0gcmVjdEIuZ2V0UmlnaHQoKSkpXG4gIHtcbiAgICBvdmVybGFwQW1vdW50WzBdICs9IE1hdGgubWluKChyZWN0Qi5nZXRYKCkgLSByZWN0QS5nZXRYKCkpLFxuICAgICAgICAgICAgKHJlY3RBLmdldFJpZ2h0KCkgLSByZWN0Qi5nZXRSaWdodCgpKSk7XG4gIH1cbiAgZWxzZSBpZiAoKHJlY3RCLmdldFgoKSA8PSByZWN0QS5nZXRYKCkpICYmIChyZWN0Qi5nZXRSaWdodCgpID49IHJlY3RBLmdldFJpZ2h0KCkpKVxuICB7XG4gICAgb3ZlcmxhcEFtb3VudFswXSArPSBNYXRoLm1pbigocmVjdEEuZ2V0WCgpIC0gcmVjdEIuZ2V0WCgpKSxcbiAgICAgICAgICAgIChyZWN0Qi5nZXRSaWdodCgpIC0gcmVjdEEuZ2V0UmlnaHQoKSkpO1xuICB9XG4gIGlmICgocmVjdEEuZ2V0WSgpIDw9IHJlY3RCLmdldFkoKSkgJiYgKHJlY3RBLmdldEJvdHRvbSgpID49IHJlY3RCLmdldEJvdHRvbSgpKSlcbiAge1xuICAgIG92ZXJsYXBBbW91bnRbMV0gKz0gTWF0aC5taW4oKHJlY3RCLmdldFkoKSAtIHJlY3RBLmdldFkoKSksXG4gICAgICAgICAgICAocmVjdEEuZ2V0Qm90dG9tKCkgLSByZWN0Qi5nZXRCb3R0b20oKSkpO1xuICB9XG4gIGVsc2UgaWYgKChyZWN0Qi5nZXRZKCkgPD0gcmVjdEEuZ2V0WSgpKSAmJiAocmVjdEIuZ2V0Qm90dG9tKCkgPj0gcmVjdEEuZ2V0Qm90dG9tKCkpKVxuICB7XG4gICAgb3ZlcmxhcEFtb3VudFsxXSArPSBNYXRoLm1pbigocmVjdEEuZ2V0WSgpIC0gcmVjdEIuZ2V0WSgpKSxcbiAgICAgICAgICAgIChyZWN0Qi5nZXRCb3R0b20oKSAtIHJlY3RBLmdldEJvdHRvbSgpKSk7XG4gIH1cblxuICAvLyBmaW5kIHNsb3BlIG9mIHRoZSBsaW5lIHBhc3NlcyB0d28gY2VudGVyc1xuICB2YXIgc2xvcGUgPSBNYXRoLmFicygocmVjdEIuZ2V0Q2VudGVyWSgpIC0gcmVjdEEuZ2V0Q2VudGVyWSgpKSAvXG4gICAgICAgICAgKHJlY3RCLmdldENlbnRlclgoKSAtIHJlY3RBLmdldENlbnRlclgoKSkpO1xuICAvLyBpZiBjZW50ZXJzIGFyZSBvdmVybGFwcGVkXG4gIGlmICgocmVjdEIuZ2V0Q2VudGVyWSgpID09IHJlY3RBLmdldENlbnRlclkoKSkgJiZcbiAgICAgICAgICAocmVjdEIuZ2V0Q2VudGVyWCgpID09IHJlY3RBLmdldENlbnRlclgoKSkpXG4gIHtcbiAgICAvLyBhc3N1bWUgdGhlIHNsb3BlIGlzIDEgKDQ1IGRlZ3JlZSlcbiAgICBzbG9wZSA9IDEuMDtcbiAgfVxuXG4gIHZhciBtb3ZlQnlZID0gc2xvcGUgKiBvdmVybGFwQW1vdW50WzBdO1xuICB2YXIgbW92ZUJ5WCA9IG92ZXJsYXBBbW91bnRbMV0gLyBzbG9wZTtcbiAgaWYgKG92ZXJsYXBBbW91bnRbMF0gPCBtb3ZlQnlYKVxuICB7XG4gICAgbW92ZUJ5WCA9IG92ZXJsYXBBbW91bnRbMF07XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgbW92ZUJ5WSA9IG92ZXJsYXBBbW91bnRbMV07XG4gIH1cbiAgLy8gcmV0dXJuIGhhbGYgdGhlIGFtb3VudCBzbyB0aGF0IGlmIGVhY2ggcmVjdGFuZ2xlIGlzIG1vdmVkIGJ5IHRoZXNlXG4gIC8vIGFtb3VudHMgaW4gb3Bwb3NpdGUgZGlyZWN0aW9ucywgb3ZlcmxhcCB3aWxsIGJlIHJlc29sdmVkXG4gIG92ZXJsYXBBbW91bnRbMF0gPSAtMSAqIGRpcmVjdGlvbnNbMF0gKiAoKG1vdmVCeVggLyAyKSArIHNlcGFyYXRpb25CdWZmZXIpO1xuICBvdmVybGFwQW1vdW50WzFdID0gLTEgKiBkaXJlY3Rpb25zWzFdICogKChtb3ZlQnlZIC8gMikgKyBzZXBhcmF0aW9uQnVmZmVyKTtcbn1cblxuSUdlb21ldHJ5LmRlY2lkZURpcmVjdGlvbnNGb3JPdmVybGFwcGluZ05vZGVzID0gZnVuY3Rpb24gKHJlY3RBLCByZWN0QiwgZGlyZWN0aW9ucylcbntcbiAgaWYgKHJlY3RBLmdldENlbnRlclgoKSA8IHJlY3RCLmdldENlbnRlclgoKSlcbiAge1xuICAgIGRpcmVjdGlvbnNbMF0gPSAtMTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICBkaXJlY3Rpb25zWzBdID0gMTtcbiAgfVxuXG4gIGlmIChyZWN0QS5nZXRDZW50ZXJZKCkgPCByZWN0Qi5nZXRDZW50ZXJZKCkpXG4gIHtcbiAgICBkaXJlY3Rpb25zWzFdID0gLTE7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgZGlyZWN0aW9uc1sxXSA9IDE7XG4gIH1cbn1cblxuSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbjIgPSBmdW5jdGlvbiAocmVjdEEsIHJlY3RCLCByZXN1bHQpXG57XG4gIC8vcmVzdWx0WzAtMV0gd2lsbCBjb250YWluIGNsaXBQb2ludCBvZiByZWN0QSwgcmVzdWx0WzItM10gd2lsbCBjb250YWluIGNsaXBQb2ludCBvZiByZWN0QlxuICB2YXIgcDF4ID0gcmVjdEEuZ2V0Q2VudGVyWCgpO1xuICB2YXIgcDF5ID0gcmVjdEEuZ2V0Q2VudGVyWSgpO1xuICB2YXIgcDJ4ID0gcmVjdEIuZ2V0Q2VudGVyWCgpO1xuICB2YXIgcDJ5ID0gcmVjdEIuZ2V0Q2VudGVyWSgpO1xuXG4gIC8vaWYgdHdvIHJlY3RhbmdsZXMgaW50ZXJzZWN0LCB0aGVuIGNsaXBwaW5nIHBvaW50cyBhcmUgY2VudGVyc1xuICBpZiAocmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpXG4gIHtcbiAgICByZXN1bHRbMF0gPSBwMXg7XG4gICAgcmVzdWx0WzFdID0gcDF5O1xuICAgIHJlc3VsdFsyXSA9IHAyeDtcbiAgICByZXN1bHRbM10gPSBwMnk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy92YXJpYWJsZXMgZm9yIHJlY3RBXG4gIHZhciB0b3BMZWZ0QXggPSByZWN0QS5nZXRYKCk7XG4gIHZhciB0b3BMZWZ0QXkgPSByZWN0QS5nZXRZKCk7XG4gIHZhciB0b3BSaWdodEF4ID0gcmVjdEEuZ2V0UmlnaHQoKTtcbiAgdmFyIGJvdHRvbUxlZnRBeCA9IHJlY3RBLmdldFgoKTtcbiAgdmFyIGJvdHRvbUxlZnRBeSA9IHJlY3RBLmdldEJvdHRvbSgpO1xuICB2YXIgYm90dG9tUmlnaHRBeCA9IHJlY3RBLmdldFJpZ2h0KCk7XG4gIHZhciBoYWxmV2lkdGhBID0gcmVjdEEuZ2V0V2lkdGhIYWxmKCk7XG4gIHZhciBoYWxmSGVpZ2h0QSA9IHJlY3RBLmdldEhlaWdodEhhbGYoKTtcbiAgLy92YXJpYWJsZXMgZm9yIHJlY3RCXG4gIHZhciB0b3BMZWZ0QnggPSByZWN0Qi5nZXRYKCk7XG4gIHZhciB0b3BMZWZ0QnkgPSByZWN0Qi5nZXRZKCk7XG4gIHZhciB0b3BSaWdodEJ4ID0gcmVjdEIuZ2V0UmlnaHQoKTtcbiAgdmFyIGJvdHRvbUxlZnRCeCA9IHJlY3RCLmdldFgoKTtcbiAgdmFyIGJvdHRvbUxlZnRCeSA9IHJlY3RCLmdldEJvdHRvbSgpO1xuICB2YXIgYm90dG9tUmlnaHRCeCA9IHJlY3RCLmdldFJpZ2h0KCk7XG4gIHZhciBoYWxmV2lkdGhCID0gcmVjdEIuZ2V0V2lkdGhIYWxmKCk7XG4gIHZhciBoYWxmSGVpZ2h0QiA9IHJlY3RCLmdldEhlaWdodEhhbGYoKTtcbiAgLy9mbGFnIHdoZXRoZXIgY2xpcHBpbmcgcG9pbnRzIGFyZSBmb3VuZFxuICB2YXIgY2xpcFBvaW50QUZvdW5kID0gZmFsc2U7XG4gIHZhciBjbGlwUG9pbnRCRm91bmQgPSBmYWxzZTtcblxuICAvLyBsaW5lIGlzIHZlcnRpY2FsXG4gIGlmIChwMXggPT0gcDJ4KVxuICB7XG4gICAgaWYgKHAxeSA+IHAyeSlcbiAgICB7XG4gICAgICByZXN1bHRbMF0gPSBwMXg7XG4gICAgICByZXN1bHRbMV0gPSB0b3BMZWZ0QXk7XG4gICAgICByZXN1bHRbMl0gPSBwMng7XG4gICAgICByZXN1bHRbM10gPSBib3R0b21MZWZ0Qnk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKHAxeSA8IHAyeSlcbiAgICB7XG4gICAgICByZXN1bHRbMF0gPSBwMXg7XG4gICAgICByZXN1bHRbMV0gPSBib3R0b21MZWZ0QXk7XG4gICAgICByZXN1bHRbMl0gPSBwMng7XG4gICAgICByZXN1bHRbM10gPSB0b3BMZWZ0Qnk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAvL25vdCBsaW5lLCByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgLy8gbGluZSBpcyBob3Jpem9udGFsXG4gIGVsc2UgaWYgKHAxeSA9PSBwMnkpXG4gIHtcbiAgICBpZiAocDF4ID4gcDJ4KVxuICAgIHtcbiAgICAgIHJlc3VsdFswXSA9IHRvcExlZnRBeDtcbiAgICAgIHJlc3VsdFsxXSA9IHAxeTtcbiAgICAgIHJlc3VsdFsyXSA9IHRvcFJpZ2h0Qng7XG4gICAgICByZXN1bHRbM10gPSBwMnk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKHAxeCA8IHAyeClcbiAgICB7XG4gICAgICByZXN1bHRbMF0gPSB0b3BSaWdodEF4O1xuICAgICAgcmVzdWx0WzFdID0gcDF5O1xuICAgICAgcmVzdWx0WzJdID0gdG9wTGVmdEJ4O1xuICAgICAgcmVzdWx0WzNdID0gcDJ5O1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgLy9ub3QgdmFsaWQgbGluZSwgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIGVsc2VcbiAge1xuICAgIC8vc2xvcGVzIG9mIHJlY3RBJ3MgYW5kIHJlY3RCJ3MgZGlhZ29uYWxzXG4gICAgdmFyIHNsb3BlQSA9IHJlY3RBLmhlaWdodCAvIHJlY3RBLndpZHRoO1xuICAgIHZhciBzbG9wZUIgPSByZWN0Qi5oZWlnaHQgLyByZWN0Qi53aWR0aDtcblxuICAgIC8vc2xvcGUgb2YgbGluZSBiZXR3ZWVuIGNlbnRlciBvZiByZWN0QSBhbmQgY2VudGVyIG9mIHJlY3RCXG4gICAgdmFyIHNsb3BlUHJpbWUgPSAocDJ5IC0gcDF5KSAvIChwMnggLSBwMXgpO1xuICAgIHZhciBjYXJkaW5hbERpcmVjdGlvbkE7XG4gICAgdmFyIGNhcmRpbmFsRGlyZWN0aW9uQjtcbiAgICB2YXIgdGVtcFBvaW50QXg7XG4gICAgdmFyIHRlbXBQb2ludEF5O1xuICAgIHZhciB0ZW1wUG9pbnRCeDtcbiAgICB2YXIgdGVtcFBvaW50Qnk7XG5cbiAgICAvL2RldGVybWluZSB3aGV0aGVyIGNsaXBwaW5nIHBvaW50IGlzIHRoZSBjb3JuZXIgb2Ygbm9kZUFcbiAgICBpZiAoKC1zbG9wZUEpID09IHNsb3BlUHJpbWUpXG4gICAge1xuICAgICAgaWYgKHAxeCA+IHAyeClcbiAgICAgIHtcbiAgICAgICAgcmVzdWx0WzBdID0gYm90dG9tTGVmdEF4O1xuICAgICAgICByZXN1bHRbMV0gPSBib3R0b21MZWZ0QXk7XG4gICAgICAgIGNsaXBQb2ludEFGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIHJlc3VsdFswXSA9IHRvcFJpZ2h0QXg7XG4gICAgICAgIHJlc3VsdFsxXSA9IHRvcExlZnRBeTtcbiAgICAgICAgY2xpcFBvaW50QUZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoc2xvcGVBID09IHNsb3BlUHJpbWUpXG4gICAge1xuICAgICAgaWYgKHAxeCA+IHAyeClcbiAgICAgIHtcbiAgICAgICAgcmVzdWx0WzBdID0gdG9wTGVmdEF4O1xuICAgICAgICByZXN1bHRbMV0gPSB0b3BMZWZ0QXk7XG4gICAgICAgIGNsaXBQb2ludEFGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIHJlc3VsdFswXSA9IGJvdHRvbVJpZ2h0QXg7XG4gICAgICAgIHJlc3VsdFsxXSA9IGJvdHRvbUxlZnRBeTtcbiAgICAgICAgY2xpcFBvaW50QUZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL2RldGVybWluZSB3aGV0aGVyIGNsaXBwaW5nIHBvaW50IGlzIHRoZSBjb3JuZXIgb2Ygbm9kZUJcbiAgICBpZiAoKC1zbG9wZUIpID09IHNsb3BlUHJpbWUpXG4gICAge1xuICAgICAgaWYgKHAyeCA+IHAxeClcbiAgICAgIHtcbiAgICAgICAgcmVzdWx0WzJdID0gYm90dG9tTGVmdEJ4O1xuICAgICAgICByZXN1bHRbM10gPSBib3R0b21MZWZ0Qnk7XG4gICAgICAgIGNsaXBQb2ludEJGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIHJlc3VsdFsyXSA9IHRvcFJpZ2h0Qng7XG4gICAgICAgIHJlc3VsdFszXSA9IHRvcExlZnRCeTtcbiAgICAgICAgY2xpcFBvaW50QkZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoc2xvcGVCID09IHNsb3BlUHJpbWUpXG4gICAge1xuICAgICAgaWYgKHAyeCA+IHAxeClcbiAgICAgIHtcbiAgICAgICAgcmVzdWx0WzJdID0gdG9wTGVmdEJ4O1xuICAgICAgICByZXN1bHRbM10gPSB0b3BMZWZ0Qnk7XG4gICAgICAgIGNsaXBQb2ludEJGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIHJlc3VsdFsyXSA9IGJvdHRvbVJpZ2h0Qng7XG4gICAgICAgIHJlc3VsdFszXSA9IGJvdHRvbUxlZnRCeTtcbiAgICAgICAgY2xpcFBvaW50QkZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL2lmIGJvdGggY2xpcHBpbmcgcG9pbnRzIGFyZSBjb3JuZXJzXG4gICAgaWYgKGNsaXBQb2ludEFGb3VuZCAmJiBjbGlwUG9pbnRCRm91bmQpXG4gICAge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vZGV0ZXJtaW5lIENhcmRpbmFsIERpcmVjdGlvbiBvZiByZWN0YW5nbGVzXG4gICAgaWYgKHAxeCA+IHAyeClcbiAgICB7XG4gICAgICBpZiAocDF5ID4gcDJ5KVxuICAgICAge1xuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVBLCBzbG9wZVByaW1lLCA0KTtcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25CID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKHNsb3BlQiwgc2xvcGVQcmltZSwgMik7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQSA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbigtc2xvcGVBLCBzbG9wZVByaW1lLCAzKTtcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25CID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUIsIHNsb3BlUHJpbWUsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgaWYgKHAxeSA+IHAyeSlcbiAgICAgIHtcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25BID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUEsIHNsb3BlUHJpbWUsIDEpO1xuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkIgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLXNsb3BlQiwgc2xvcGVQcmltZSwgMyk7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQSA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbihzbG9wZUEsIHNsb3BlUHJpbWUsIDIpO1xuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkIgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVCLCBzbG9wZVByaW1lLCA0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy9jYWxjdWxhdGUgY2xpcHBpbmcgUG9pbnQgaWYgaXQgaXMgbm90IGZvdW5kIGJlZm9yZVxuICAgIGlmICghY2xpcFBvaW50QUZvdW5kKVxuICAgIHtcbiAgICAgIHN3aXRjaCAoY2FyZGluYWxEaXJlY3Rpb25BKVxuICAgICAge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdGVtcFBvaW50QXkgPSB0b3BMZWZ0QXk7XG4gICAgICAgICAgdGVtcFBvaW50QXggPSBwMXggKyAoLWhhbGZIZWlnaHRBKSAvIHNsb3BlUHJpbWU7XG4gICAgICAgICAgcmVzdWx0WzBdID0gdGVtcFBvaW50QXg7XG4gICAgICAgICAgcmVzdWx0WzFdID0gdGVtcFBvaW50QXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0ZW1wUG9pbnRBeCA9IGJvdHRvbVJpZ2h0QXg7XG4gICAgICAgICAgdGVtcFBvaW50QXkgPSBwMXkgKyBoYWxmV2lkdGhBICogc2xvcGVQcmltZTtcbiAgICAgICAgICByZXN1bHRbMF0gPSB0ZW1wUG9pbnRBeDtcbiAgICAgICAgICByZXN1bHRbMV0gPSB0ZW1wUG9pbnRBeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRlbXBQb2ludEF5ID0gYm90dG9tTGVmdEF5O1xuICAgICAgICAgIHRlbXBQb2ludEF4ID0gcDF4ICsgaGFsZkhlaWdodEEgLyBzbG9wZVByaW1lO1xuICAgICAgICAgIHJlc3VsdFswXSA9IHRlbXBQb2ludEF4O1xuICAgICAgICAgIHJlc3VsdFsxXSA9IHRlbXBQb2ludEF5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdGVtcFBvaW50QXggPSBib3R0b21MZWZ0QXg7XG4gICAgICAgICAgdGVtcFBvaW50QXkgPSBwMXkgKyAoLWhhbGZXaWR0aEEpICogc2xvcGVQcmltZTtcbiAgICAgICAgICByZXN1bHRbMF0gPSB0ZW1wUG9pbnRBeDtcbiAgICAgICAgICByZXN1bHRbMV0gPSB0ZW1wUG9pbnRBeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFjbGlwUG9pbnRCRm91bmQpXG4gICAge1xuICAgICAgc3dpdGNoIChjYXJkaW5hbERpcmVjdGlvbkIpXG4gICAgICB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0ZW1wUG9pbnRCeSA9IHRvcExlZnRCeTtcbiAgICAgICAgICB0ZW1wUG9pbnRCeCA9IHAyeCArICgtaGFsZkhlaWdodEIpIC8gc2xvcGVQcmltZTtcbiAgICAgICAgICByZXN1bHRbMl0gPSB0ZW1wUG9pbnRCeDtcbiAgICAgICAgICByZXN1bHRbM10gPSB0ZW1wUG9pbnRCeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRlbXBQb2ludEJ4ID0gYm90dG9tUmlnaHRCeDtcbiAgICAgICAgICB0ZW1wUG9pbnRCeSA9IHAyeSArIGhhbGZXaWR0aEIgKiBzbG9wZVByaW1lO1xuICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xuICAgICAgICAgIHJlc3VsdFszXSA9IHRlbXBQb2ludEJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdGVtcFBvaW50QnkgPSBib3R0b21MZWZ0Qnk7XG4gICAgICAgICAgdGVtcFBvaW50QnggPSBwMnggKyBoYWxmSGVpZ2h0QiAvIHNsb3BlUHJpbWU7XG4gICAgICAgICAgcmVzdWx0WzJdID0gdGVtcFBvaW50Qng7XG4gICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB0ZW1wUG9pbnRCeCA9IGJvdHRvbUxlZnRCeDtcbiAgICAgICAgICB0ZW1wUG9pbnRCeSA9IHAyeSArICgtaGFsZldpZHRoQikgKiBzbG9wZVByaW1lO1xuICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xuICAgICAgICAgIHJlc3VsdFszXSA9IHRlbXBQb2ludEJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbklHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbiA9IGZ1bmN0aW9uIChzbG9wZSwgc2xvcGVQcmltZSwgbGluZSlcbntcbiAgaWYgKHNsb3BlID4gc2xvcGVQcmltZSlcbiAge1xuICAgIHJldHVybiBsaW5lO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIHJldHVybiAxICsgbGluZSAlIDQ7XG4gIH1cbn1cblxuSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbiA9IGZ1bmN0aW9uIChzMSwgczIsIGYxLCBmMilcbntcbiAgaWYgKGYyID09IG51bGwpIHtcbiAgICByZXR1cm4gSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbjIoczEsIHMyLCBmMSk7XG4gIH1cbiAgdmFyIHgxID0gczEueDtcbiAgdmFyIHkxID0gczEueTtcbiAgdmFyIHgyID0gczIueDtcbiAgdmFyIHkyID0gczIueTtcbiAgdmFyIHgzID0gZjEueDtcbiAgdmFyIHkzID0gZjEueTtcbiAgdmFyIHg0ID0gZjIueDtcbiAgdmFyIHk0ID0gZjIueTtcbiAgdmFyIHgsIHk7IC8vIGludGVyc2VjdGlvbiBwb2ludFxuICB2YXIgYTEsIGEyLCBiMSwgYjIsIGMxLCBjMjsgLy8gY29lZmZpY2llbnRzIG9mIGxpbmUgZXFucy5cbiAgdmFyIGRlbm9tO1xuXG4gIGExID0geTIgLSB5MTtcbiAgYjEgPSB4MSAtIHgyO1xuICBjMSA9IHgyICogeTEgLSB4MSAqIHkyOyAgLy8geyBhMSp4ICsgYjEqeSArIGMxID0gMCBpcyBsaW5lIDEgfVxuXG4gIGEyID0geTQgLSB5MztcbiAgYjIgPSB4MyAtIHg0O1xuICBjMiA9IHg0ICogeTMgLSB4MyAqIHk0OyAgLy8geyBhMip4ICsgYjIqeSArIGMyID0gMCBpcyBsaW5lIDIgfVxuXG4gIGRlbm9tID0gYTEgKiBiMiAtIGEyICogYjE7XG5cbiAgaWYgKGRlbm9tID09IDApXG4gIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHggPSAoYjEgKiBjMiAtIGIyICogYzEpIC8gZGVub207XG4gIHkgPSAoYTIgKiBjMSAtIGExICogYzIpIC8gZGVub207XG5cbiAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IENsYXNzIENvbnN0YW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qKlxuICogU29tZSB1c2VmdWwgcHJlLWNhbGN1bGF0ZWQgY29uc3RhbnRzXG4gKi9cbklHZW9tZXRyeS5IQUxGX1BJID0gMC41ICogTWF0aC5QSTtcbklHZW9tZXRyeS5PTkVfQU5EX0hBTEZfUEkgPSAxLjUgKiBNYXRoLlBJO1xuSUdlb21ldHJ5LlRXT19QSSA9IDIuMCAqIE1hdGguUEk7XG5JR2VvbWV0cnkuVEhSRUVfUEkgPSAzLjAgKiBNYXRoLlBJO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElHZW9tZXRyeTtcbiIsImZ1bmN0aW9uIElNYXRoKCkge1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIHNpZ24gb2YgdGhlIGlucHV0IHZhbHVlLlxuICovXG5JTWF0aC5zaWduID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA+IDApXG4gIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBlbHNlIGlmICh2YWx1ZSA8IDApXG4gIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cblxuSU1hdGguZmxvb3IgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIDwgMCA/IE1hdGguY2VpbCh2YWx1ZSkgOiBNYXRoLmZsb29yKHZhbHVlKTtcbn1cblxuSU1hdGguY2VpbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPCAwID8gTWF0aC5mbG9vcih2YWx1ZSkgOiBNYXRoLmNlaWwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElNYXRoO1xuIiwiZnVuY3Rpb24gSW50ZWdlcigpIHtcbn1cblxuSW50ZWdlci5NQVhfVkFMVUUgPSAyMTQ3NDgzNjQ3O1xuSW50ZWdlci5NSU5fVkFMVUUgPSAtMjE0NzQ4MzY0ODtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlZ2VyO1xuIiwidmFyIExHcmFwaE9iamVjdCA9IHJlcXVpcmUoJy4vTEdyYXBoT2JqZWN0Jyk7XG52YXIgSUdlb21ldHJ5ID0gcmVxdWlyZSgnLi9JR2VvbWV0cnknKTtcbnZhciBJTWF0aCA9IHJlcXVpcmUoJy4vSU1hdGgnKTtcblxuZnVuY3Rpb24gTEVkZ2Uoc291cmNlLCB0YXJnZXQsIHZFZGdlKSB7XG4gIExHcmFwaE9iamVjdC5jYWxsKHRoaXMsIHZFZGdlKTtcblxuICB0aGlzLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCA9IGZhbHNlO1xuICB0aGlzLnZHcmFwaE9iamVjdCA9IHZFZGdlO1xuICB0aGlzLmJlbmRwb2ludHMgPSBbXTtcbiAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xufVxuXG5MRWRnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaE9iamVjdC5wcm90b3R5cGUpO1xuXG5mb3IgKHZhciBwcm9wIGluIExHcmFwaE9iamVjdCkge1xuICBMRWRnZVtwcm9wXSA9IExHcmFwaE9iamVjdFtwcm9wXTtcbn1cblxuTEVkZ2UucHJvdG90eXBlLmdldFNvdXJjZSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnNvdXJjZTtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRUYXJnZXQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy50YXJnZXQ7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuaXNJbnRlckdyYXBoID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuaXNJbnRlckdyYXBoO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldExlbmd0aCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmxlbmd0aDtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQ7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0QmVuZHBvaW50cyA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmJlbmRwb2ludHM7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0TGNhID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubGNhO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldFNvdXJjZUluTGNhID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuc291cmNlSW5MY2E7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0VGFyZ2V0SW5MY2EgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy50YXJnZXRJbkxjYTtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRPdGhlckVuZCA9IGZ1bmN0aW9uIChub2RlKVxue1xuICBpZiAodGhpcy5zb3VyY2UgPT09IG5vZGUpXG4gIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXQ7XG4gIH1cbiAgZWxzZSBpZiAodGhpcy50YXJnZXQgPT09IG5vZGUpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2U7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgdGhyb3cgXCJOb2RlIGlzIG5vdCBpbmNpZGVudCB3aXRoIHRoaXMgZWRnZVwiO1xuICB9XG59XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRPdGhlckVuZEluR3JhcGggPSBmdW5jdGlvbiAobm9kZSwgZ3JhcGgpXG57XG4gIHZhciBvdGhlckVuZCA9IHRoaXMuZ2V0T3RoZXJFbmQobm9kZSk7XG4gIHZhciByb290ID0gZ3JhcGguZ2V0R3JhcGhNYW5hZ2VyKCkuZ2V0Um9vdCgpO1xuXG4gIHdoaWxlICh0cnVlKVxuICB7XG4gICAgaWYgKG90aGVyRW5kLmdldE93bmVyKCkgPT0gZ3JhcGgpXG4gICAge1xuICAgICAgcmV0dXJuIG90aGVyRW5kO1xuICAgIH1cblxuICAgIGlmIChvdGhlckVuZC5nZXRPd25lcigpID09IHJvb3QpXG4gICAge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgb3RoZXJFbmQgPSBvdGhlckVuZC5nZXRPd25lcigpLmdldFBhcmVudCgpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUudXBkYXRlTGVuZ3RoID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIGNsaXBQb2ludENvb3JkaW5hdGVzID0gbmV3IEFycmF5KDQpO1xuXG4gIHRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0ID1cbiAgICAgICAgICBJR2VvbWV0cnkuZ2V0SW50ZXJzZWN0aW9uKHRoaXMudGFyZ2V0LmdldFJlY3QoKSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuc291cmNlLmdldFJlY3QoKSxcbiAgICAgICAgICAgICAgICAgIGNsaXBQb2ludENvb3JkaW5hdGVzKTtcblxuICBpZiAoIXRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0KVxuICB7XG4gICAgdGhpcy5sZW5ndGhYID0gY2xpcFBvaW50Q29vcmRpbmF0ZXNbMF0gLSBjbGlwUG9pbnRDb29yZGluYXRlc1syXTtcbiAgICB0aGlzLmxlbmd0aFkgPSBjbGlwUG9pbnRDb29yZGluYXRlc1sxXSAtIGNsaXBQb2ludENvb3JkaW5hdGVzWzNdO1xuXG4gICAgaWYgKE1hdGguYWJzKHRoaXMubGVuZ3RoWCkgPCAxLjApXG4gICAge1xuICAgICAgdGhpcy5sZW5ndGhYID0gSU1hdGguc2lnbih0aGlzLmxlbmd0aFgpO1xuICAgIH1cblxuICAgIGlmIChNYXRoLmFicyh0aGlzLmxlbmd0aFkpIDwgMS4wKVxuICAgIHtcbiAgICAgIHRoaXMubGVuZ3RoWSA9IElNYXRoLnNpZ24odGhpcy5sZW5ndGhZKTtcbiAgICB9XG5cbiAgICB0aGlzLmxlbmd0aCA9IE1hdGguc3FydChcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoWCAqIHRoaXMubGVuZ3RoWCArIHRoaXMubGVuZ3RoWSAqIHRoaXMubGVuZ3RoWSk7XG4gIH1cbn07XG5cbkxFZGdlLnByb3RvdHlwZS51cGRhdGVMZW5ndGhTaW1wbGUgPSBmdW5jdGlvbiAoKVxue1xuICB0aGlzLmxlbmd0aFggPSB0aGlzLnRhcmdldC5nZXRDZW50ZXJYKCkgLSB0aGlzLnNvdXJjZS5nZXRDZW50ZXJYKCk7XG4gIHRoaXMubGVuZ3RoWSA9IHRoaXMudGFyZ2V0LmdldENlbnRlclkoKSAtIHRoaXMuc291cmNlLmdldENlbnRlclkoKTtcblxuICBpZiAoTWF0aC5hYnModGhpcy5sZW5ndGhYKSA8IDEuMClcbiAge1xuICAgIHRoaXMubGVuZ3RoWCA9IElNYXRoLnNpZ24odGhpcy5sZW5ndGhYKTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyh0aGlzLmxlbmd0aFkpIDwgMS4wKVxuICB7XG4gICAgdGhpcy5sZW5ndGhZID0gSU1hdGguc2lnbih0aGlzLmxlbmd0aFkpO1xuICB9XG5cbiAgdGhpcy5sZW5ndGggPSBNYXRoLnNxcnQoXG4gICAgICAgICAgdGhpcy5sZW5ndGhYICogdGhpcy5sZW5ndGhYICsgdGhpcy5sZW5ndGhZICogdGhpcy5sZW5ndGhZKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMRWRnZTtcbiIsInZhciBMR3JhcGhPYmplY3QgPSByZXF1aXJlKCcuL0xHcmFwaE9iamVjdCcpO1xudmFyIEludGVnZXIgPSByZXF1aXJlKCcuL0ludGVnZXInKTtcbnZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0xheW91dENvbnN0YW50cycpO1xudmFyIExHcmFwaE1hbmFnZXIgPSByZXF1aXJlKCcuL0xHcmFwaE1hbmFnZXInKTtcbnZhciBMTm9kZSA9IHJlcXVpcmUoJy4vTE5vZGUnKTtcbnZhciBMRWRnZSA9IHJlcXVpcmUoJy4vTEVkZ2UnKTtcbnZhciBIYXNoU2V0ID0gcmVxdWlyZSgnLi9IYXNoU2V0Jyk7XG52YXIgUmVjdGFuZ2xlRCA9IHJlcXVpcmUoJy4vUmVjdGFuZ2xlRCcpO1xudmFyIFBvaW50ID0gcmVxdWlyZSgnLi9Qb2ludCcpO1xudmFyIExpbmtlZExpc3QgPSByZXF1aXJlKCcuL0xpbmtlZExpc3QnKTtcblxuZnVuY3Rpb24gTEdyYXBoKHBhcmVudCwgb2JqMiwgdkdyYXBoKSB7XG4gIExHcmFwaE9iamVjdC5jYWxsKHRoaXMsIHZHcmFwaCk7XG4gIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IEludGVnZXIuTUlOX1ZBTFVFO1xuICB0aGlzLm1hcmdpbiA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVBIX01BUkdJTjtcbiAgdGhpcy5lZGdlcyA9IFtdO1xuICB0aGlzLm5vZGVzID0gW107XG4gIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgaWYgKG9iajIgIT0gbnVsbCAmJiBvYmoyIGluc3RhbmNlb2YgTEdyYXBoTWFuYWdlcikge1xuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyID0gb2JqMjtcbiAgfVxuICBlbHNlIGlmIChvYmoyICE9IG51bGwgJiYgb2JqMiBpbnN0YW5jZW9mIExheW91dCkge1xuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyID0gb2JqMi5ncmFwaE1hbmFnZXI7XG4gIH1cbn1cblxuTEdyYXBoLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEdyYXBoT2JqZWN0LnByb3RvdHlwZSk7XG5mb3IgKHZhciBwcm9wIGluIExHcmFwaE9iamVjdCkge1xuICBMR3JhcGhbcHJvcF0gPSBMR3JhcGhPYmplY3RbcHJvcF07XG59XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0Tm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLm5vZGVzO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRFZGdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZWRnZXM7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldEdyYXBoTWFuYWdlciA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlcjtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0UGFyZW50ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucGFyZW50O1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRMZWZ0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubGVmdDtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0UmlnaHQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yaWdodDtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0VG9wID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMudG9wO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRCb3R0b20gPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5ib3R0b207XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmlzQ29ubmVjdGVkID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuaXNDb25uZWN0ZWQ7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChvYmoxLCBzb3VyY2VOb2RlLCB0YXJnZXROb2RlKSB7XG4gIGlmIChzb3VyY2VOb2RlID09IG51bGwgJiYgdGFyZ2V0Tm9kZSA9PSBudWxsKSB7XG4gICAgdmFyIG5ld05vZGUgPSBvYmoxO1xuICAgIGlmICh0aGlzLmdyYXBoTWFuYWdlciA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIkdyYXBoIGhhcyBubyBncmFwaCBtZ3IhXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmdldE5vZGVzKCkuaW5kZXhPZihuZXdOb2RlKSA+IC0xKSB7XG4gICAgICB0aHJvdyBcIk5vZGUgYWxyZWFkeSBpbiBncmFwaCFcIjtcbiAgICB9XG4gICAgbmV3Tm9kZS5vd25lciA9IHRoaXM7XG4gICAgdGhpcy5nZXROb2RlcygpLnB1c2gobmV3Tm9kZSk7XG5cbiAgICByZXR1cm4gbmV3Tm9kZTtcbiAgfVxuICBlbHNlIHtcbiAgICB2YXIgbmV3RWRnZSA9IG9iajE7XG4gICAgaWYgKCEodGhpcy5nZXROb2RlcygpLmluZGV4T2Yoc291cmNlTm9kZSkgPiAtMSAmJiAodGhpcy5nZXROb2RlcygpLmluZGV4T2YodGFyZ2V0Tm9kZSkpID4gLTEpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBvciB0YXJnZXQgbm90IGluIGdyYXBoIVwiO1xuICAgIH1cblxuICAgIGlmICghKHNvdXJjZU5vZGUub3duZXIgPT0gdGFyZ2V0Tm9kZS5vd25lciAmJiBzb3VyY2VOb2RlLm93bmVyID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIkJvdGggb3duZXJzIG11c3QgYmUgdGhpcyBncmFwaCFcIjtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlTm9kZS5vd25lciAhPSB0YXJnZXROb2RlLm93bmVyKVxuICAgIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIHNldCBzb3VyY2UgYW5kIHRhcmdldFxuICAgIG5ld0VkZ2Uuc291cmNlID0gc291cmNlTm9kZTtcbiAgICBuZXdFZGdlLnRhcmdldCA9IHRhcmdldE5vZGU7XG5cbiAgICAvLyBzZXQgYXMgaW50cmEtZ3JhcGggZWRnZVxuICAgIG5ld0VkZ2UuaXNJbnRlckdyYXBoID0gZmFsc2U7XG5cbiAgICAvLyBhZGQgdG8gZ3JhcGggZWRnZSBsaXN0XG4gICAgdGhpcy5nZXRFZGdlcygpLnB1c2gobmV3RWRnZSk7XG5cbiAgICAvLyBhZGQgdG8gaW5jaWRlbmN5IGxpc3RzXG4gICAgc291cmNlTm9kZS5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xuXG4gICAgaWYgKHRhcmdldE5vZGUgIT0gc291cmNlTm9kZSlcbiAgICB7XG4gICAgICB0YXJnZXROb2RlLmVkZ2VzLnB1c2gobmV3RWRnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0VkZ2U7XG4gIH1cbn07XG5cbkxHcmFwaC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG9iaikge1xuICB2YXIgbm9kZSA9IG9iajtcbiAgaWYgKG9iaiBpbnN0YW5jZW9mIExOb2RlKSB7XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJOb2RlIGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmICghKG5vZGUub3duZXIgIT0gbnVsbCAmJiBub2RlLm93bmVyID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIk93bmVyIGdyYXBoIGlzIGludmFsaWQhXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmdyYXBoTWFuYWdlciA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIk93bmVyIGdyYXBoIG1hbmFnZXIgaXMgaW52YWxpZCFcIjtcbiAgICB9XG4gICAgLy8gcmVtb3ZlIGluY2lkZW50IGVkZ2VzIGZpcnN0IChtYWtlIGEgY29weSB0byBkbyBpdCBzYWZlbHkpXG4gICAgdmFyIGVkZ2VzVG9CZVJlbW92ZWQgPSBub2RlLmVkZ2VzLnNsaWNlKCk7XG4gICAgdmFyIGVkZ2U7XG4gICAgdmFyIHMgPSBlZGdlc1RvQmVSZW1vdmVkLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAgICB7XG4gICAgICBlZGdlID0gZWRnZXNUb0JlUmVtb3ZlZFtpXTtcblxuICAgICAgaWYgKGVkZ2UuaXNJbnRlckdyYXBoKVxuICAgICAge1xuICAgICAgICB0aGlzLmdyYXBoTWFuYWdlci5yZW1vdmUoZWRnZSk7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIGVkZ2Uuc291cmNlLm93bmVyLnJlbW92ZShlZGdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBub3cgdGhlIG5vZGUgaXRzZWxmXG4gICAgdmFyIGluZGV4ID0gdGhpcy5ub2Rlcy5pbmRleE9mKG5vZGUpO1xuICAgIGlmIChpbmRleCA9PSAtMSkge1xuICAgICAgdGhyb3cgXCJOb2RlIG5vdCBpbiBvd25lciBub2RlIGxpc3QhXCI7XG4gICAgfVxuXG4gICAgdGhpcy5ub2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIExFZGdlKSB7XG4gICAgdmFyIGVkZ2UgPSBvYmo7XG4gICAgaWYgKGVkZ2UgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJFZGdlIGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmICghKGVkZ2Uuc291cmNlICE9IG51bGwgJiYgZWRnZS50YXJnZXQgIT0gbnVsbCkpIHtcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgaXMgbnVsbCFcIjtcbiAgICB9XG4gICAgaWYgKCEoZWRnZS5zb3VyY2Uub3duZXIgIT0gbnVsbCAmJiBlZGdlLnRhcmdldC5vd25lciAhPSBudWxsICYmXG4gICAgICAgICAgICBlZGdlLnNvdXJjZS5vd25lciA9PSB0aGlzICYmIGVkZ2UudGFyZ2V0Lm93bmVyID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IG93bmVyIGlzIGludmFsaWQhXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZGV4ID0gZWRnZS5zb3VyY2UuZWRnZXMuaW5kZXhPZihlZGdlKTtcbiAgICB2YXIgdGFyZ2V0SW5kZXggPSBlZGdlLnRhcmdldC5lZGdlcy5pbmRleE9mKGVkZ2UpO1xuICAgIGlmICghKHNvdXJjZUluZGV4ID4gLTEgJiYgdGFyZ2V0SW5kZXggPiAtMSkpIHtcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgZG9lc24ndCBrbm93IHRoaXMgZWRnZSFcIjtcbiAgICB9XG5cbiAgICBlZGdlLnNvdXJjZS5lZGdlcy5zcGxpY2Uoc291cmNlSW5kZXgsIDEpO1xuXG4gICAgaWYgKGVkZ2UudGFyZ2V0ICE9IGVkZ2Uuc291cmNlKVxuICAgIHtcbiAgICAgIGVkZ2UudGFyZ2V0LmVkZ2VzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gZWRnZS5zb3VyY2Uub3duZXIuZ2V0RWRnZXMoKS5pbmRleE9mKGVkZ2UpO1xuICAgIGlmIChpbmRleCA9PSAtMSkge1xuICAgICAgdGhyb3cgXCJOb3QgaW4gb3duZXIncyBlZGdlIGxpc3QhXCI7XG4gICAgfVxuXG4gICAgZWRnZS5zb3VyY2Uub3duZXIuZ2V0RWRnZXMoKS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLnVwZGF0ZUxlZnRUb3AgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgdG9wID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBsZWZ0ID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBub2RlVG9wO1xuICB2YXIgbm9kZUxlZnQ7XG4gIHZhciBtYXJnaW47XG5cbiAgdmFyIG5vZGVzID0gdGhpcy5nZXROb2RlcygpO1xuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAge1xuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xuICAgIG5vZGVUb3AgPSBsTm9kZS5nZXRUb3AoKTtcbiAgICBub2RlTGVmdCA9IGxOb2RlLmdldExlZnQoKTtcblxuICAgIGlmICh0b3AgPiBub2RlVG9wKVxuICAgIHtcbiAgICAgIHRvcCA9IG5vZGVUb3A7XG4gICAgfVxuXG4gICAgaWYgKGxlZnQgPiBub2RlTGVmdClcbiAgICB7XG4gICAgICBsZWZ0ID0gbm9kZUxlZnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gRG8gd2UgaGF2ZSBhbnkgbm9kZXMgaW4gdGhpcyBncmFwaD9cbiAgaWYgKHRvcCA9PSBJbnRlZ2VyLk1BWF9WQUxVRSlcbiAge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYobm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQgIT0gdW5kZWZpbmVkKXtcbiAgICBtYXJnaW4gPSBub2Rlc1swXS5nZXRQYXJlbnQoKS5wYWRkaW5nTGVmdDtcbiAgfVxuICBlbHNle1xuICAgIG1hcmdpbiA9IHRoaXMubWFyZ2luO1xuICB9XG5cbiAgdGhpcy5sZWZ0ID0gbGVmdCAtIG1hcmdpbjtcbiAgdGhpcy50b3AgPSB0b3AgLSBtYXJnaW47XG5cbiAgLy8gQXBwbHkgdGhlIG1hcmdpbnMgYW5kIHJldHVybiB0aGUgcmVzdWx0XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLnRvcCk7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLnVwZGF0ZUJvdW5kcyA9IGZ1bmN0aW9uIChyZWN1cnNpdmUpXG57XG4gIC8vIGNhbGN1bGF0ZSBib3VuZHNcbiAgdmFyIGxlZnQgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIHJpZ2h0ID0gLUludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgdG9wID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBib3R0b20gPSAtSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBub2RlTGVmdDtcbiAgdmFyIG5vZGVSaWdodDtcbiAgdmFyIG5vZGVUb3A7XG4gIHZhciBub2RlQm90dG9tO1xuICB2YXIgbWFyZ2luO1xuXG4gIHZhciBub2RlcyA9IHRoaXMubm9kZXM7XG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAge1xuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xuXG4gICAgaWYgKHJlY3Vyc2l2ZSAmJiBsTm9kZS5jaGlsZCAhPSBudWxsKVxuICAgIHtcbiAgICAgIGxOb2RlLnVwZGF0ZUJvdW5kcygpO1xuICAgIH1cbiAgICBub2RlTGVmdCA9IGxOb2RlLmdldExlZnQoKTtcbiAgICBub2RlUmlnaHQgPSBsTm9kZS5nZXRSaWdodCgpO1xuICAgIG5vZGVUb3AgPSBsTm9kZS5nZXRUb3AoKTtcbiAgICBub2RlQm90dG9tID0gbE5vZGUuZ2V0Qm90dG9tKCk7XG5cbiAgICBpZiAobGVmdCA+IG5vZGVMZWZ0KVxuICAgIHtcbiAgICAgIGxlZnQgPSBub2RlTGVmdDtcbiAgICB9XG5cbiAgICBpZiAocmlnaHQgPCBub2RlUmlnaHQpXG4gICAge1xuICAgICAgcmlnaHQgPSBub2RlUmlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKHRvcCA+IG5vZGVUb3ApXG4gICAge1xuICAgICAgdG9wID0gbm9kZVRvcDtcbiAgICB9XG5cbiAgICBpZiAoYm90dG9tIDwgbm9kZUJvdHRvbSlcbiAgICB7XG4gICAgICBib3R0b20gPSBub2RlQm90dG9tO1xuICAgIH1cbiAgfVxuXG4gIHZhciBib3VuZGluZ1JlY3QgPSBuZXcgUmVjdGFuZ2xlRChsZWZ0LCB0b3AsIHJpZ2h0IC0gbGVmdCwgYm90dG9tIC0gdG9wKTtcbiAgaWYgKGxlZnQgPT0gSW50ZWdlci5NQVhfVkFMVUUpXG4gIHtcbiAgICB0aGlzLmxlZnQgPSB0aGlzLnBhcmVudC5nZXRMZWZ0KCk7XG4gICAgdGhpcy5yaWdodCA9IHRoaXMucGFyZW50LmdldFJpZ2h0KCk7XG4gICAgdGhpcy50b3AgPSB0aGlzLnBhcmVudC5nZXRUb3AoKTtcbiAgICB0aGlzLmJvdHRvbSA9IHRoaXMucGFyZW50LmdldEJvdHRvbSgpO1xuICB9XG5cbiAgaWYobm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQgIT0gdW5kZWZpbmVkKXtcbiAgICBtYXJnaW4gPSBub2Rlc1swXS5nZXRQYXJlbnQoKS5wYWRkaW5nTGVmdDtcbiAgfVxuICBlbHNle1xuICAgIG1hcmdpbiA9IHRoaXMubWFyZ2luO1xuICB9XG5cbiAgdGhpcy5sZWZ0ID0gYm91bmRpbmdSZWN0LnggLSBtYXJnaW47XG4gIHRoaXMucmlnaHQgPSBib3VuZGluZ1JlY3QueCArIGJvdW5kaW5nUmVjdC53aWR0aCArIG1hcmdpbjtcbiAgdGhpcy50b3AgPSBib3VuZGluZ1JlY3QueSAtIG1hcmdpbjtcbiAgdGhpcy5ib3R0b20gPSBib3VuZGluZ1JlY3QueSArIGJvdW5kaW5nUmVjdC5oZWlnaHQgKyBtYXJnaW47XG59O1xuXG5MR3JhcGguY2FsY3VsYXRlQm91bmRzID0gZnVuY3Rpb24gKG5vZGVzKVxue1xuICB2YXIgbGVmdCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgcmlnaHQgPSAtSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciB0b3AgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIGJvdHRvbSA9IC1JbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIG5vZGVMZWZ0O1xuICB2YXIgbm9kZVJpZ2h0O1xuICB2YXIgbm9kZVRvcDtcbiAgdmFyIG5vZGVCb3R0b207XG5cbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gIHtcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcbiAgICBub2RlTGVmdCA9IGxOb2RlLmdldExlZnQoKTtcbiAgICBub2RlUmlnaHQgPSBsTm9kZS5nZXRSaWdodCgpO1xuICAgIG5vZGVUb3AgPSBsTm9kZS5nZXRUb3AoKTtcbiAgICBub2RlQm90dG9tID0gbE5vZGUuZ2V0Qm90dG9tKCk7XG5cbiAgICBpZiAobGVmdCA+IG5vZGVMZWZ0KVxuICAgIHtcbiAgICAgIGxlZnQgPSBub2RlTGVmdDtcbiAgICB9XG5cbiAgICBpZiAocmlnaHQgPCBub2RlUmlnaHQpXG4gICAge1xuICAgICAgcmlnaHQgPSBub2RlUmlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKHRvcCA+IG5vZGVUb3ApXG4gICAge1xuICAgICAgdG9wID0gbm9kZVRvcDtcbiAgICB9XG5cbiAgICBpZiAoYm90dG9tIDwgbm9kZUJvdHRvbSlcbiAgICB7XG4gICAgICBib3R0b20gPSBub2RlQm90dG9tO1xuICAgIH1cbiAgfVxuXG4gIHZhciBib3VuZGluZ1JlY3QgPSBuZXcgUmVjdGFuZ2xlRChsZWZ0LCB0b3AsIHJpZ2h0IC0gbGVmdCwgYm90dG9tIC0gdG9wKTtcblxuICByZXR1cm4gYm91bmRpbmdSZWN0O1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRJbmNsdXNpb25UcmVlRGVwdGggPSBmdW5jdGlvbiAoKVxue1xuICBpZiAodGhpcyA9PSB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkpXG4gIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0SW5jbHVzaW9uVHJlZURlcHRoKCk7XG4gIH1cbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0RXN0aW1hdGVkU2l6ZSA9IGZ1bmN0aW9uICgpXG57XG4gIGlmICh0aGlzLmVzdGltYXRlZFNpemUgPT0gSW50ZWdlci5NSU5fVkFMVUUpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5jYWxjRXN0aW1hdGVkU2l6ZSA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBzaXplID0gMDtcbiAgdmFyIG5vZGVzID0gdGhpcy5ub2RlcztcbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gIHtcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcbiAgICBzaXplICs9IGxOb2RlLmNhbGNFc3RpbWF0ZWRTaXplKCk7XG4gIH1cblxuICBpZiAoc2l6ZSA9PSAwKVxuICB7XG4gICAgdGhpcy5lc3RpbWF0ZWRTaXplID0gTGF5b3V0Q29uc3RhbnRzLkVNUFRZX0NPTVBPVU5EX05PREVfU0laRTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICB0aGlzLmVzdGltYXRlZFNpemUgPSBzaXplIC8gTWF0aC5zcXJ0KHRoaXMubm9kZXMubGVuZ3RoKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVzdGltYXRlZFNpemU7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLnVwZGF0ZUNvbm5lY3RlZCA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBzZWxmID0gdGhpcztcbiAgaWYgKHRoaXMubm9kZXMubGVuZ3RoID09IDApXG4gIHtcbiAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdG9CZVZpc2l0ZWQgPSBuZXcgTGlua2VkTGlzdCgpO1xuICB2YXIgdmlzaXRlZCA9IG5ldyBIYXNoU2V0KCk7XG4gIHZhciBjdXJyZW50Tm9kZSA9IHRoaXMubm9kZXNbMF07XG4gIHZhciBuZWlnaGJvckVkZ2VzO1xuICB2YXIgY3VycmVudE5laWdoYm9yO1xuICB2YXIgY2hpbGRyZW5PZk5vZGUgPSBjdXJyZW50Tm9kZS53aXRoQ2hpbGRyZW4oKTtcbiAgY2hpbGRyZW5PZk5vZGUuZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgdG9CZVZpc2l0ZWQucHVzaChub2RlKTtcbiAgfSk7XG5cbiAgd2hpbGUgKHRvQmVWaXNpdGVkLmxlbmd0aCAhPT0gMClcbiAge1xuICAgIGN1cnJlbnROb2RlID0gdG9CZVZpc2l0ZWQuc2hpZnQoKTtcbiAgICB2aXNpdGVkLmFkZChjdXJyZW50Tm9kZSk7XG5cbiAgICAvLyBUcmF2ZXJzZSBhbGwgbmVpZ2hib3JzIG9mIHRoaXMgbm9kZVxuICAgIG5laWdoYm9yRWRnZXMgPSBjdXJyZW50Tm9kZS5nZXRFZGdlcygpO1xuICAgIHZhciBzID0gbmVpZ2hib3JFZGdlcy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gICAge1xuICAgICAgdmFyIG5laWdoYm9yRWRnZSA9IG5laWdoYm9yRWRnZXNbaV07XG4gICAgICBjdXJyZW50TmVpZ2hib3IgPVxuICAgICAgICAgICAgICBuZWlnaGJvckVkZ2UuZ2V0T3RoZXJFbmRJbkdyYXBoKGN1cnJlbnROb2RlLCB0aGlzKTtcblxuICAgICAgLy8gQWRkIHVudmlzaXRlZCBuZWlnaGJvcnMgdG8gdGhlIGxpc3QgdG8gdmlzaXRcbiAgICAgIGlmIChjdXJyZW50TmVpZ2hib3IgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAhdmlzaXRlZC5jb250YWlucyhjdXJyZW50TmVpZ2hib3IpKVxuICAgICAge1xuICAgICAgICB2YXIgY2hpbGRyZW5PZk5laWdoYm9yID0gY3VycmVudE5laWdoYm9yLndpdGhDaGlsZHJlbigpO1xuXG4gICAgICAgIGNoaWxkcmVuT2ZOZWlnaGJvci5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICB0b0JlVmlzaXRlZC5wdXNoKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG5cbiAgaWYgKHZpc2l0ZWQuc2l6ZSgpID49IHRoaXMubm9kZXMubGVuZ3RoKVxuICB7XG4gICAgdmFyIG5vT2ZWaXNpdGVkSW5UaGlzR3JhcGggPSAwO1xuXG4gICAgdmFyIHMgPSB2aXNpdGVkLnNpemUoKTtcbiAgICAgT2JqZWN0LmtleXModmlzaXRlZC5zZXQpLmZvckVhY2goZnVuY3Rpb24odmlzaXRlZElkKSB7XG4gICAgICB2YXIgdmlzaXRlZE5vZGUgPSB2aXNpdGVkLnNldFt2aXNpdGVkSWRdO1xuICAgICAgaWYgKHZpc2l0ZWROb2RlLm93bmVyID09IHNlbGYpXG4gICAgICB7XG4gICAgICAgIG5vT2ZWaXNpdGVkSW5UaGlzR3JhcGgrKztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChub09mVmlzaXRlZEluVGhpc0dyYXBoID09IHRoaXMubm9kZXMubGVuZ3RoKVxuICAgIHtcbiAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMR3JhcGg7XG4iLCJ2YXIgTEdyYXBoO1xudmFyIExFZGdlID0gcmVxdWlyZSgnLi9MRWRnZScpO1xuXG5mdW5jdGlvbiBMR3JhcGhNYW5hZ2VyKGxheW91dCkge1xuICBMR3JhcGggPSByZXF1aXJlKCcuL0xHcmFwaCcpOyAvLyBJdCBtYXkgYmUgYmV0dGVyIHRvIGluaXRpbGl6ZSB0aGlzIG91dCBvZiB0aGlzIGZ1bmN0aW9uIGJ1dCBpdCBnaXZlcyBhbiBlcnJvciAoUmlnaHQtaGFuZCBzaWRlIG9mICdpbnN0YW5jZW9mJyBpcyBub3QgY2FsbGFibGUpIG5vdy5cbiAgdGhpcy5sYXlvdXQgPSBsYXlvdXQ7XG5cbiAgdGhpcy5ncmFwaHMgPSBbXTtcbiAgdGhpcy5lZGdlcyA9IFtdO1xufVxuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5hZGRSb290ID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIG5ncmFwaCA9IHRoaXMubGF5b3V0Lm5ld0dyYXBoKCk7XG4gIHZhciBubm9kZSA9IHRoaXMubGF5b3V0Lm5ld05vZGUobnVsbCk7XG4gIHZhciByb290ID0gdGhpcy5hZGQobmdyYXBoLCBubm9kZSk7XG4gIHRoaXMuc2V0Um9vdEdyYXBoKHJvb3QpO1xuICByZXR1cm4gdGhpcy5yb290R3JhcGg7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAobmV3R3JhcGgsIHBhcmVudE5vZGUsIG5ld0VkZ2UsIHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpXG57XG4gIC8vdGhlcmUgYXJlIGp1c3QgMiBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQgdGhlbiBpdCBhZGRzIGFuIExHcmFwaCBlbHNlIGl0IGFkZHMgYW4gTEVkZ2VcbiAgaWYgKG5ld0VkZ2UgPT0gbnVsbCAmJiBzb3VyY2VOb2RlID09IG51bGwgJiYgdGFyZ2V0Tm9kZSA9PSBudWxsKSB7XG4gICAgaWYgKG5ld0dyYXBoID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiR3JhcGggaXMgbnVsbCFcIjtcbiAgICB9XG4gICAgaWYgKHBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJQYXJlbnQgbm9kZSBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5ncmFwaHMuaW5kZXhPZihuZXdHcmFwaCkgPiAtMSkge1xuICAgICAgdGhyb3cgXCJHcmFwaCBhbHJlYWR5IGluIHRoaXMgZ3JhcGggbWdyIVwiO1xuICAgIH1cblxuICAgIHRoaXMuZ3JhcGhzLnB1c2gobmV3R3JhcGgpO1xuXG4gICAgaWYgKG5ld0dyYXBoLnBhcmVudCAhPSBudWxsKSB7XG4gICAgICB0aHJvdyBcIkFscmVhZHkgaGFzIGEgcGFyZW50IVwiO1xuICAgIH1cbiAgICBpZiAocGFyZW50Tm9kZS5jaGlsZCAhPSBudWxsKSB7XG4gICAgICB0aHJvdyAgXCJBbHJlYWR5IGhhcyBhIGNoaWxkIVwiO1xuICAgIH1cblxuICAgIG5ld0dyYXBoLnBhcmVudCA9IHBhcmVudE5vZGU7XG4gICAgcGFyZW50Tm9kZS5jaGlsZCA9IG5ld0dyYXBoO1xuXG4gICAgcmV0dXJuIG5ld0dyYXBoO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vY2hhbmdlIHRoZSBvcmRlciBvZiB0aGUgcGFyYW1ldGVyc1xuICAgIHRhcmdldE5vZGUgPSBuZXdFZGdlO1xuICAgIHNvdXJjZU5vZGUgPSBwYXJlbnROb2RlO1xuICAgIG5ld0VkZ2UgPSBuZXdHcmFwaDtcbiAgICB2YXIgc291cmNlR3JhcGggPSBzb3VyY2VOb2RlLmdldE93bmVyKCk7XG4gICAgdmFyIHRhcmdldEdyYXBoID0gdGFyZ2V0Tm9kZS5nZXRPd25lcigpO1xuXG4gICAgaWYgKCEoc291cmNlR3JhcGggIT0gbnVsbCAmJiBzb3VyY2VHcmFwaC5nZXRHcmFwaE1hbmFnZXIoKSA9PSB0aGlzKSkge1xuICAgICAgdGhyb3cgXCJTb3VyY2Ugbm90IGluIHRoaXMgZ3JhcGggbWdyIVwiO1xuICAgIH1cbiAgICBpZiAoISh0YXJnZXRHcmFwaCAhPSBudWxsICYmIHRhcmdldEdyYXBoLmdldEdyYXBoTWFuYWdlcigpID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIlRhcmdldCBub3QgaW4gdGhpcyBncmFwaCBtZ3IhXCI7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZUdyYXBoID09IHRhcmdldEdyYXBoKVxuICAgIHtcbiAgICAgIG5ld0VkZ2UuaXNJbnRlckdyYXBoID0gZmFsc2U7XG4gICAgICByZXR1cm4gc291cmNlR3JhcGguYWRkKG5ld0VkZ2UsIHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgbmV3RWRnZS5pc0ludGVyR3JhcGggPSB0cnVlO1xuXG4gICAgICAvLyBzZXQgc291cmNlIGFuZCB0YXJnZXRcbiAgICAgIG5ld0VkZ2Uuc291cmNlID0gc291cmNlTm9kZTtcbiAgICAgIG5ld0VkZ2UudGFyZ2V0ID0gdGFyZ2V0Tm9kZTtcblxuICAgICAgLy8gYWRkIGVkZ2UgdG8gaW50ZXItZ3JhcGggZWRnZSBsaXN0XG4gICAgICBpZiAodGhpcy5lZGdlcy5pbmRleE9mKG5ld0VkZ2UpID4gLTEpIHtcbiAgICAgICAgdGhyb3cgXCJFZGdlIGFscmVhZHkgaW4gaW50ZXItZ3JhcGggZWRnZSBsaXN0IVwiO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVkZ2VzLnB1c2gobmV3RWRnZSk7XG5cbiAgICAgIC8vIGFkZCBlZGdlIHRvIHNvdXJjZSBhbmQgdGFyZ2V0IGluY2lkZW5jeSBsaXN0c1xuICAgICAgaWYgKCEobmV3RWRnZS5zb3VyY2UgIT0gbnVsbCAmJiBuZXdFZGdlLnRhcmdldCAhPSBudWxsKSkge1xuICAgICAgICB0aHJvdyBcIkVkZ2Ugc291cmNlIGFuZC9vciB0YXJnZXQgaXMgbnVsbCFcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKCEobmV3RWRnZS5zb3VyY2UuZWRnZXMuaW5kZXhPZihuZXdFZGdlKSA9PSAtMSAmJiBuZXdFZGdlLnRhcmdldC5lZGdlcy5pbmRleE9mKG5ld0VkZ2UpID09IC0xKSkge1xuICAgICAgICB0aHJvdyBcIkVkZ2UgYWxyZWFkeSBpbiBzb3VyY2UgYW5kL29yIHRhcmdldCBpbmNpZGVuY3kgbGlzdCFcIjtcbiAgICAgIH1cblxuICAgICAgbmV3RWRnZS5zb3VyY2UuZWRnZXMucHVzaChuZXdFZGdlKTtcbiAgICAgIG5ld0VkZ2UudGFyZ2V0LmVkZ2VzLnB1c2gobmV3RWRnZSk7XG5cbiAgICAgIHJldHVybiBuZXdFZGdlO1xuICAgIH1cbiAgfVxufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGxPYmopIHtcbiAgaWYgKGxPYmogaW5zdGFuY2VvZiBMR3JhcGgpIHtcbiAgICB2YXIgZ3JhcGggPSBsT2JqO1xuICAgIGlmIChncmFwaC5nZXRHcmFwaE1hbmFnZXIoKSAhPSB0aGlzKSB7XG4gICAgICB0aHJvdyBcIkdyYXBoIG5vdCBpbiB0aGlzIGdyYXBoIG1nclwiO1xuICAgIH1cbiAgICBpZiAoIShncmFwaCA9PSB0aGlzLnJvb3RHcmFwaCB8fCAoZ3JhcGgucGFyZW50ICE9IG51bGwgJiYgZ3JhcGgucGFyZW50LmdyYXBoTWFuYWdlciA9PSB0aGlzKSkpIHtcbiAgICAgIHRocm93IFwiSW52YWxpZCBwYXJlbnQgbm9kZSFcIjtcbiAgICB9XG5cbiAgICAvLyBmaXJzdCB0aGUgZWRnZXMgKG1ha2UgYSBjb3B5IHRvIGRvIGl0IHNhZmVseSlcbiAgICB2YXIgZWRnZXNUb0JlUmVtb3ZlZCA9IFtdO1xuXG4gICAgZWRnZXNUb0JlUmVtb3ZlZCA9IGVkZ2VzVG9CZVJlbW92ZWQuY29uY2F0KGdyYXBoLmdldEVkZ2VzKCkpO1xuXG4gICAgdmFyIGVkZ2U7XG4gICAgdmFyIHMgPSBlZGdlc1RvQmVSZW1vdmVkLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAgICB7XG4gICAgICBlZGdlID0gZWRnZXNUb0JlUmVtb3ZlZFtpXTtcbiAgICAgIGdyYXBoLnJlbW92ZShlZGdlKTtcbiAgICB9XG5cbiAgICAvLyB0aGVuIHRoZSBub2RlcyAobWFrZSBhIGNvcHkgdG8gZG8gaXQgc2FmZWx5KVxuICAgIHZhciBub2Rlc1RvQmVSZW1vdmVkID0gW107XG5cbiAgICBub2Rlc1RvQmVSZW1vdmVkID0gbm9kZXNUb0JlUmVtb3ZlZC5jb25jYXQoZ3JhcGguZ2V0Tm9kZXMoKSk7XG5cbiAgICB2YXIgbm9kZTtcbiAgICBzID0gbm9kZXNUb0JlUmVtb3ZlZC5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gICAge1xuICAgICAgbm9kZSA9IG5vZGVzVG9CZVJlbW92ZWRbaV07XG4gICAgICBncmFwaC5yZW1vdmUobm9kZSk7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgZ3JhcGggaXMgdGhlIHJvb3RcbiAgICBpZiAoZ3JhcGggPT0gdGhpcy5yb290R3JhcGgpXG4gICAge1xuICAgICAgdGhpcy5zZXRSb290R3JhcGgobnVsbCk7XG4gICAgfVxuXG4gICAgLy8gbm93IHJlbW92ZSB0aGUgZ3JhcGggaXRzZWxmXG4gICAgdmFyIGluZGV4ID0gdGhpcy5ncmFwaHMuaW5kZXhPZihncmFwaCk7XG4gICAgdGhpcy5ncmFwaHMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIC8vIGFsc28gcmVzZXQgdGhlIHBhcmVudCBvZiB0aGUgZ3JhcGhcbiAgICBncmFwaC5wYXJlbnQgPSBudWxsO1xuICB9XG4gIGVsc2UgaWYgKGxPYmogaW5zdGFuY2VvZiBMRWRnZSkge1xuICAgIGVkZ2UgPSBsT2JqO1xuICAgIGlmIChlZGdlID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiRWRnZSBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAoIWVkZ2UuaXNJbnRlckdyYXBoKSB7XG4gICAgICB0aHJvdyBcIk5vdCBhbiBpbnRlci1ncmFwaCBlZGdlIVwiO1xuICAgIH1cbiAgICBpZiAoIShlZGdlLnNvdXJjZSAhPSBudWxsICYmIGVkZ2UudGFyZ2V0ICE9IG51bGwpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGlzIG51bGwhXCI7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIGVkZ2UgZnJvbSBzb3VyY2UgYW5kIHRhcmdldCBub2RlcycgaW5jaWRlbmN5IGxpc3RzXG5cbiAgICBpZiAoIShlZGdlLnNvdXJjZS5lZGdlcy5pbmRleE9mKGVkZ2UpICE9IC0xICYmIGVkZ2UudGFyZ2V0LmVkZ2VzLmluZGV4T2YoZWRnZSkgIT0gLTEpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGRvZXNuJ3Qga25vdyB0aGlzIGVkZ2UhXCI7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gZWRnZS5zb3VyY2UuZWRnZXMuaW5kZXhPZihlZGdlKTtcbiAgICBlZGdlLnNvdXJjZS5lZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGluZGV4ID0gZWRnZS50YXJnZXQuZWRnZXMuaW5kZXhPZihlZGdlKTtcbiAgICBlZGdlLnRhcmdldC5lZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgLy8gcmVtb3ZlIGVkZ2UgZnJvbSBvd25lciBncmFwaCBtYW5hZ2VyJ3MgaW50ZXItZ3JhcGggZWRnZSBsaXN0XG5cbiAgICBpZiAoIShlZGdlLnNvdXJjZS5vd25lciAhPSBudWxsICYmIGVkZ2Uuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpICE9IG51bGwpKSB7XG4gICAgICB0aHJvdyBcIkVkZ2Ugb3duZXIgZ3JhcGggb3Igb3duZXIgZ3JhcGggbWFuYWdlciBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAoZWRnZS5zb3VyY2Uub3duZXIuZ2V0R3JhcGhNYW5hZ2VyKCkuZWRnZXMuaW5kZXhPZihlZGdlKSA9PSAtMSkge1xuICAgICAgdGhyb3cgXCJOb3QgaW4gb3duZXIgZ3JhcGggbWFuYWdlcidzIGVkZ2UgbGlzdCFcIjtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBlZGdlLnNvdXJjZS5vd25lci5nZXRHcmFwaE1hbmFnZXIoKS5lZGdlcy5pbmRleE9mKGVkZ2UpO1xuICAgIGVkZ2Uuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpLmVkZ2VzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZUJvdW5kcyA9IGZ1bmN0aW9uICgpXG57XG4gIHRoaXMucm9vdEdyYXBoLnVwZGF0ZUJvdW5kcyh0cnVlKTtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldEdyYXBocyA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmdyYXBocztcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldEFsbE5vZGVzID0gZnVuY3Rpb24gKClcbntcbiAgaWYgKHRoaXMuYWxsTm9kZXMgPT0gbnVsbClcbiAge1xuICAgIHZhciBub2RlTGlzdCA9IFtdO1xuICAgIHZhciBncmFwaHMgPSB0aGlzLmdldEdyYXBocygpO1xuICAgIHZhciBzID0gZ3JhcGhzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAgICB7XG4gICAgICBub2RlTGlzdCA9IG5vZGVMaXN0LmNvbmNhdChncmFwaHNbaV0uZ2V0Tm9kZXMoKSk7XG4gICAgfVxuICAgIHRoaXMuYWxsTm9kZXMgPSBub2RlTGlzdDtcbiAgfVxuICByZXR1cm4gdGhpcy5hbGxOb2Rlcztcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnJlc2V0QWxsTm9kZXMgPSBmdW5jdGlvbiAoKVxue1xuICB0aGlzLmFsbE5vZGVzID0gbnVsbDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnJlc2V0QWxsRWRnZXMgPSBmdW5jdGlvbiAoKVxue1xuICB0aGlzLmFsbEVkZ2VzID0gbnVsbDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnJlc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbiAoKVxue1xuICB0aGlzLmFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gbnVsbDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldEFsbEVkZ2VzID0gZnVuY3Rpb24gKClcbntcbiAgaWYgKHRoaXMuYWxsRWRnZXMgPT0gbnVsbClcbiAge1xuICAgIHZhciBlZGdlTGlzdCA9IFtdO1xuICAgIHZhciBncmFwaHMgPSB0aGlzLmdldEdyYXBocygpO1xuICAgIHZhciBzID0gZ3JhcGhzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyYXBocy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBlZGdlTGlzdCA9IGVkZ2VMaXN0LmNvbmNhdChncmFwaHNbaV0uZ2V0RWRnZXMoKSk7XG4gICAgfVxuXG4gICAgZWRnZUxpc3QgPSBlZGdlTGlzdC5jb25jYXQodGhpcy5lZGdlcyk7XG5cbiAgICB0aGlzLmFsbEVkZ2VzID0gZWRnZUxpc3Q7XG4gIH1cbiAgcmV0dXJuIHRoaXMuYWxsRWRnZXM7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbiAobm9kZUxpc3QpXG57XG4gIGlmICh0aGlzLmFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uICE9IG51bGwpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuXG4gIHRoaXMuYWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBub2RlTGlzdDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldFJvb3QgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yb290R3JhcGg7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5zZXRSb290R3JhcGggPSBmdW5jdGlvbiAoZ3JhcGgpXG57XG4gIGlmIChncmFwaC5nZXRHcmFwaE1hbmFnZXIoKSAhPSB0aGlzKSB7XG4gICAgdGhyb3cgXCJSb290IG5vdCBpbiB0aGlzIGdyYXBoIG1nciFcIjtcbiAgfVxuXG4gIHRoaXMucm9vdEdyYXBoID0gZ3JhcGg7XG4gIC8vIHJvb3QgZ3JhcGggbXVzdCBoYXZlIGEgcm9vdCBub2RlIGFzc29jaWF0ZWQgd2l0aCBpdCBmb3IgY29udmVuaWVuY2VcbiAgaWYgKGdyYXBoLnBhcmVudCA9PSBudWxsKVxuICB7XG4gICAgZ3JhcGgucGFyZW50ID0gdGhpcy5sYXlvdXQubmV3Tm9kZShcIlJvb3Qgbm9kZVwiKTtcbiAgfVxufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0TGF5b3V0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubGF5b3V0O1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuaXNPbmVBbmNlc3Rvck9mT3RoZXIgPSBmdW5jdGlvbiAoZmlyc3ROb2RlLCBzZWNvbmROb2RlKVxue1xuICBpZiAoIShmaXJzdE5vZGUgIT0gbnVsbCAmJiBzZWNvbmROb2RlICE9IG51bGwpKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cblxuICBpZiAoZmlyc3ROb2RlID09IHNlY29uZE5vZGUpXG4gIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvLyBJcyBzZWNvbmQgbm9kZSBhbiBhbmNlc3RvciBvZiB0aGUgZmlyc3Qgb25lP1xuICB2YXIgb3duZXJHcmFwaCA9IGZpcnN0Tm9kZS5nZXRPd25lcigpO1xuICB2YXIgcGFyZW50Tm9kZTtcblxuICBkb1xuICB7XG4gICAgcGFyZW50Tm9kZSA9IG93bmVyR3JhcGguZ2V0UGFyZW50KCk7XG5cbiAgICBpZiAocGFyZW50Tm9kZSA9PSBudWxsKVxuICAgIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChwYXJlbnROb2RlID09IHNlY29uZE5vZGUpXG4gICAge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgb3duZXJHcmFwaCA9IHBhcmVudE5vZGUuZ2V0T3duZXIoKTtcbiAgICBpZiAob3duZXJHcmFwaCA9PSBudWxsKVxuICAgIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSB3aGlsZSAodHJ1ZSk7XG4gIC8vIElzIGZpcnN0IG5vZGUgYW4gYW5jZXN0b3Igb2YgdGhlIHNlY29uZCBvbmU/XG4gIG93bmVyR3JhcGggPSBzZWNvbmROb2RlLmdldE93bmVyKCk7XG5cbiAgZG9cbiAge1xuICAgIHBhcmVudE5vZGUgPSBvd25lckdyYXBoLmdldFBhcmVudCgpO1xuXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gbnVsbClcbiAgICB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAocGFyZW50Tm9kZSA9PSBmaXJzdE5vZGUpXG4gICAge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgb3duZXJHcmFwaCA9IHBhcmVudE5vZGUuZ2V0T3duZXIoKTtcbiAgICBpZiAob3duZXJHcmFwaCA9PSBudWxsKVxuICAgIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSB3aGlsZSAodHJ1ZSk7XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9ycyA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBlZGdlO1xuICB2YXIgc291cmNlTm9kZTtcbiAgdmFyIHRhcmdldE5vZGU7XG4gIHZhciBzb3VyY2VBbmNlc3RvckdyYXBoO1xuICB2YXIgdGFyZ2V0QW5jZXN0b3JHcmFwaDtcblxuICB2YXIgZWRnZXMgPSB0aGlzLmdldEFsbEVkZ2VzKCk7XG4gIHZhciBzID0gZWRnZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAge1xuICAgIGVkZ2UgPSBlZGdlc1tpXTtcblxuICAgIHNvdXJjZU5vZGUgPSBlZGdlLnNvdXJjZTtcbiAgICB0YXJnZXROb2RlID0gZWRnZS50YXJnZXQ7XG4gICAgZWRnZS5sY2EgPSBudWxsO1xuICAgIGVkZ2Uuc291cmNlSW5MY2EgPSBzb3VyY2VOb2RlO1xuICAgIGVkZ2UudGFyZ2V0SW5MY2EgPSB0YXJnZXROb2RlO1xuXG4gICAgaWYgKHNvdXJjZU5vZGUgPT0gdGFyZ2V0Tm9kZSlcbiAgICB7XG4gICAgICBlZGdlLmxjYSA9IHNvdXJjZU5vZGUuZ2V0T3duZXIoKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHNvdXJjZUFuY2VzdG9yR3JhcGggPSBzb3VyY2VOb2RlLmdldE93bmVyKCk7XG5cbiAgICB3aGlsZSAoZWRnZS5sY2EgPT0gbnVsbClcbiAgICB7XG4gICAgICBlZGdlLnRhcmdldEluTGNhID0gdGFyZ2V0Tm9kZTsgIFxuICAgICAgdGFyZ2V0QW5jZXN0b3JHcmFwaCA9IHRhcmdldE5vZGUuZ2V0T3duZXIoKTtcblxuICAgICAgd2hpbGUgKGVkZ2UubGNhID09IG51bGwpXG4gICAgICB7XG4gICAgICAgIGlmICh0YXJnZXRBbmNlc3RvckdyYXBoID09IHNvdXJjZUFuY2VzdG9yR3JhcGgpXG4gICAgICAgIHtcbiAgICAgICAgICBlZGdlLmxjYSA9IHRhcmdldEFuY2VzdG9yR3JhcGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0QW5jZXN0b3JHcmFwaCA9PSB0aGlzLnJvb3RHcmFwaClcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVkZ2UubGNhICE9IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgICAgICAgfVxuICAgICAgICBlZGdlLnRhcmdldEluTGNhID0gdGFyZ2V0QW5jZXN0b3JHcmFwaC5nZXRQYXJlbnQoKTtcbiAgICAgICAgdGFyZ2V0QW5jZXN0b3JHcmFwaCA9IGVkZ2UudGFyZ2V0SW5MY2EuZ2V0T3duZXIoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNvdXJjZUFuY2VzdG9yR3JhcGggPT0gdGhpcy5yb290R3JhcGgpXG4gICAgICB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWRnZS5sY2EgPT0gbnVsbClcbiAgICAgIHtcbiAgICAgICAgZWRnZS5zb3VyY2VJbkxjYSA9IHNvdXJjZUFuY2VzdG9yR3JhcGguZ2V0UGFyZW50KCk7XG4gICAgICAgIHNvdXJjZUFuY2VzdG9yR3JhcGggPSBlZGdlLnNvdXJjZUluTGNhLmdldE93bmVyKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVkZ2UubGNhID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICAgIH1cbiAgfVxufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9yID0gZnVuY3Rpb24gKGZpcnN0Tm9kZSwgc2Vjb25kTm9kZSlcbntcbiAgaWYgKGZpcnN0Tm9kZSA9PSBzZWNvbmROb2RlKVxuICB7XG4gICAgcmV0dXJuIGZpcnN0Tm9kZS5nZXRPd25lcigpO1xuICB9XG4gIHZhciBmaXJzdE93bmVyR3JhcGggPSBmaXJzdE5vZGUuZ2V0T3duZXIoKTtcblxuICBkb1xuICB7XG4gICAgaWYgKGZpcnN0T3duZXJHcmFwaCA9PSBudWxsKVxuICAgIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgc2Vjb25kT3duZXJHcmFwaCA9IHNlY29uZE5vZGUuZ2V0T3duZXIoKTtcblxuICAgIGRvXG4gICAge1xuICAgICAgaWYgKHNlY29uZE93bmVyR3JhcGggPT0gbnVsbClcbiAgICAgIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWNvbmRPd25lckdyYXBoID09IGZpcnN0T3duZXJHcmFwaClcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIHNlY29uZE93bmVyR3JhcGg7XG4gICAgICB9XG4gICAgICBzZWNvbmRPd25lckdyYXBoID0gc2Vjb25kT3duZXJHcmFwaC5nZXRQYXJlbnQoKS5nZXRPd25lcigpO1xuICAgIH0gd2hpbGUgKHRydWUpO1xuXG4gICAgZmlyc3RPd25lckdyYXBoID0gZmlyc3RPd25lckdyYXBoLmdldFBhcmVudCgpLmdldE93bmVyKCk7XG4gIH0gd2hpbGUgKHRydWUpO1xuXG4gIHJldHVybiBmaXJzdE93bmVyR3JhcGg7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5jYWxjSW5jbHVzaW9uVHJlZURlcHRocyA9IGZ1bmN0aW9uIChncmFwaCwgZGVwdGgpIHtcbiAgaWYgKGdyYXBoID09IG51bGwgJiYgZGVwdGggPT0gbnVsbCkge1xuICAgIGdyYXBoID0gdGhpcy5yb290R3JhcGg7XG4gICAgZGVwdGggPSAxO1xuICB9XG4gIHZhciBub2RlO1xuXG4gIHZhciBub2RlcyA9IGdyYXBoLmdldE5vZGVzKCk7XG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAge1xuICAgIG5vZGUgPSBub2Rlc1tpXTtcbiAgICBub2RlLmluY2x1c2lvblRyZWVEZXB0aCA9IGRlcHRoO1xuXG4gICAgaWYgKG5vZGUuY2hpbGQgIT0gbnVsbClcbiAgICB7XG4gICAgICB0aGlzLmNhbGNJbmNsdXNpb25UcmVlRGVwdGhzKG5vZGUuY2hpbGQsIGRlcHRoICsgMSk7XG4gICAgfVxuICB9XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5pbmNsdWRlc0ludmFsaWRFZGdlID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIGVkZ2U7XG5cbiAgdmFyIHMgPSB0aGlzLmVkZ2VzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gIHtcbiAgICBlZGdlID0gdGhpcy5lZGdlc1tpXTtcblxuICAgIGlmICh0aGlzLmlzT25lQW5jZXN0b3JPZk90aGVyKGVkZ2Uuc291cmNlLCBlZGdlLnRhcmdldCkpXG4gICAge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTEdyYXBoTWFuYWdlcjtcbiIsImZ1bmN0aW9uIExHcmFwaE9iamVjdCh2R3JhcGhPYmplY3QpIHtcbiAgdGhpcy52R3JhcGhPYmplY3QgPSB2R3JhcGhPYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTEdyYXBoT2JqZWN0O1xuIiwidmFyIExHcmFwaE9iamVjdCA9IHJlcXVpcmUoJy4vTEdyYXBoT2JqZWN0Jyk7XG52YXIgSW50ZWdlciA9IHJlcXVpcmUoJy4vSW50ZWdlcicpO1xudmFyIFJlY3RhbmdsZUQgPSByZXF1aXJlKCcuL1JlY3RhbmdsZUQnKTtcbnZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0xheW91dENvbnN0YW50cycpO1xudmFyIFJhbmRvbVNlZWQgPSByZXF1aXJlKCcuL1JhbmRvbVNlZWQnKTtcbnZhciBQb2ludEQgPSByZXF1aXJlKCcuL1BvaW50RCcpO1xudmFyIEhhc2hTZXQgPSByZXF1aXJlKCcuL0hhc2hTZXQnKTtcblxuZnVuY3Rpb24gTE5vZGUoZ20sIGxvYywgc2l6ZSwgdk5vZGUpIHtcbiAgLy9BbHRlcm5hdGl2ZSBjb25zdHJ1Y3RvciAxIDogTE5vZGUoTEdyYXBoTWFuYWdlciBnbSwgUG9pbnQgbG9jLCBEaW1lbnNpb24gc2l6ZSwgT2JqZWN0IHZOb2RlKVxuICBpZiAoc2l6ZSA9PSBudWxsICYmIHZOb2RlID09IG51bGwpIHtcbiAgICB2Tm9kZSA9IGxvYztcbiAgfVxuXG4gIExHcmFwaE9iamVjdC5jYWxsKHRoaXMsIHZOb2RlKTtcblxuICAvL0FsdGVybmF0aXZlIGNvbnN0cnVjdG9yIDIgOiBMTm9kZShMYXlvdXQgbGF5b3V0LCBPYmplY3Qgdk5vZGUpXG4gIGlmIChnbS5ncmFwaE1hbmFnZXIgIT0gbnVsbClcbiAgICBnbSA9IGdtLmdyYXBoTWFuYWdlcjtcblxuICB0aGlzLmVzdGltYXRlZFNpemUgPSBJbnRlZ2VyLk1JTl9WQUxVRTtcbiAgdGhpcy5pbmNsdXNpb25UcmVlRGVwdGggPSBJbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdGhpcy52R3JhcGhPYmplY3QgPSB2Tm9kZTtcbiAgdGhpcy5lZGdlcyA9IFtdO1xuICB0aGlzLmdyYXBoTWFuYWdlciA9IGdtO1xuXG4gIGlmIChzaXplICE9IG51bGwgJiYgbG9jICE9IG51bGwpXG4gICAgdGhpcy5yZWN0ID0gbmV3IFJlY3RhbmdsZUQobG9jLngsIGxvYy55LCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG4gIGVsc2VcbiAgICB0aGlzLnJlY3QgPSBuZXcgUmVjdGFuZ2xlRCgpO1xufVxuXG5MTm9kZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaE9iamVjdC5wcm90b3R5cGUpO1xuZm9yICh2YXIgcHJvcCBpbiBMR3JhcGhPYmplY3QpIHtcbiAgTE5vZGVbcHJvcF0gPSBMR3JhcGhPYmplY3RbcHJvcF07XG59XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRFZGdlcyA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmVkZ2VzO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldENoaWxkID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuY2hpbGQ7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0T3duZXIgPSBmdW5jdGlvbiAoKVxue1xuLy8gIGlmICh0aGlzLm93bmVyICE9IG51bGwpIHtcbi8vICAgIGlmICghKHRoaXMub3duZXIgPT0gbnVsbCB8fCB0aGlzLm93bmVyLmdldE5vZGVzKCkuaW5kZXhPZih0aGlzKSA+IC0xKSkge1xuLy8gICAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbi8vICAgIH1cbi8vICB9XG5cbiAgcmV0dXJuIHRoaXMub3duZXI7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yZWN0LndpZHRoO1xufTtcblxuTE5vZGUucHJvdG90eXBlLnNldFdpZHRoID0gZnVuY3Rpb24gKHdpZHRoKVxue1xuICB0aGlzLnJlY3Qud2lkdGggPSB3aWR0aDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yZWN0LmhlaWdodDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbiAoaGVpZ2h0KVxue1xuICB0aGlzLnJlY3QuaGVpZ2h0ID0gaGVpZ2h0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldENlbnRlclggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yZWN0LnggKyB0aGlzLnJlY3Qud2lkdGggLyAyO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldENlbnRlclkgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yZWN0LnkgKyB0aGlzLnJlY3QuaGVpZ2h0IC8gMjtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRDZW50ZXIgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gbmV3IFBvaW50RCh0aGlzLnJlY3QueCArIHRoaXMucmVjdC53aWR0aCAvIDIsXG4gICAgICAgICAgdGhpcy5yZWN0LnkgKyB0aGlzLnJlY3QuaGVpZ2h0IC8gMik7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gbmV3IFBvaW50RCh0aGlzLnJlY3QueCwgdGhpcy5yZWN0LnkpO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFJlY3QgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yZWN0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldERpYWdvbmFsID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnJlY3Qud2lkdGggKiB0aGlzLnJlY3Qud2lkdGggK1xuICAgICAgICAgIHRoaXMucmVjdC5oZWlnaHQgKiB0aGlzLnJlY3QuaGVpZ2h0KTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5zZXRSZWN0ID0gZnVuY3Rpb24gKHVwcGVyTGVmdCwgZGltZW5zaW9uKVxue1xuICB0aGlzLnJlY3QueCA9IHVwcGVyTGVmdC54O1xuICB0aGlzLnJlY3QueSA9IHVwcGVyTGVmdC55O1xuICB0aGlzLnJlY3Qud2lkdGggPSBkaW1lbnNpb24ud2lkdGg7XG4gIHRoaXMucmVjdC5oZWlnaHQgPSBkaW1lbnNpb24uaGVpZ2h0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLnNldENlbnRlciA9IGZ1bmN0aW9uIChjeCwgY3kpXG57XG4gIHRoaXMucmVjdC54ID0gY3ggLSB0aGlzLnJlY3Qud2lkdGggLyAyO1xuICB0aGlzLnJlY3QueSA9IGN5IC0gdGhpcy5yZWN0LmhlaWdodCAvIDI7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuc2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoeCwgeSlcbntcbiAgdGhpcy5yZWN0LnggPSB4O1xuICB0aGlzLnJlY3QueSA9IHk7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUubW92ZUJ5ID0gZnVuY3Rpb24gKGR4LCBkeSlcbntcbiAgdGhpcy5yZWN0LnggKz0gZHg7XG4gIHRoaXMucmVjdC55ICs9IGR5O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEVkZ2VMaXN0VG9Ob2RlID0gZnVuY3Rpb24gKHRvKVxue1xuICB2YXIgZWRnZUxpc3QgPSBbXTtcbiAgdmFyIGVkZ2U7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBzZWxmLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24oZWRnZSkge1xuICAgIFxuICAgIGlmIChlZGdlLnRhcmdldCA9PSB0bylcbiAgICB7XG4gICAgICBpZiAoZWRnZS5zb3VyY2UgIT0gc2VsZilcbiAgICAgICAgdGhyb3cgXCJJbmNvcnJlY3QgZWRnZSBzb3VyY2UhXCI7XG5cbiAgICAgIGVkZ2VMaXN0LnB1c2goZWRnZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWRnZUxpc3Q7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0RWRnZXNCZXR3ZWVuID0gZnVuY3Rpb24gKG90aGVyKVxue1xuICB2YXIgZWRnZUxpc3QgPSBbXTtcbiAgdmFyIGVkZ2U7XG4gIFxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYuZWRnZXMuZm9yRWFjaChmdW5jdGlvbihlZGdlKSB7XG5cbiAgICBpZiAoIShlZGdlLnNvdXJjZSA9PSBzZWxmIHx8IGVkZ2UudGFyZ2V0ID09IHNlbGYpKVxuICAgICAgdGhyb3cgXCJJbmNvcnJlY3QgZWRnZSBzb3VyY2UgYW5kL29yIHRhcmdldFwiO1xuXG4gICAgaWYgKChlZGdlLnRhcmdldCA9PSBvdGhlcikgfHwgKGVkZ2Uuc291cmNlID09IG90aGVyKSlcbiAgICB7XG4gICAgICBlZGdlTGlzdC5wdXNoKGVkZ2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VMaXN0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldE5laWdoYm9yc0xpc3QgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgbmVpZ2hib3JzID0gbmV3IEhhc2hTZXQoKTtcbiAgdmFyIGVkZ2U7XG4gIFxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYuZWRnZXMuZm9yRWFjaChmdW5jdGlvbihlZGdlKSB7XG5cbiAgICBpZiAoZWRnZS5zb3VyY2UgPT0gc2VsZilcbiAgICB7XG4gICAgICBuZWlnaGJvcnMuYWRkKGVkZ2UudGFyZ2V0KTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIGlmIChlZGdlLnRhcmdldCAhPSBzZWxmKSB7XG4gICAgICAgIHRocm93IFwiSW5jb3JyZWN0IGluY2lkZW5jeSFcIjtcbiAgICAgIH1cbiAgICBcbiAgICAgIG5laWdoYm9ycy5hZGQoZWRnZS5zb3VyY2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5laWdoYm9ycztcbn07XG5cbkxOb2RlLnByb3RvdHlwZS53aXRoQ2hpbGRyZW4gPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgd2l0aE5laWdoYm9yc0xpc3QgPSBuZXcgU2V0KCk7XG4gIHZhciBjaGlsZE5vZGU7XG4gIHZhciBjaGlsZHJlbjtcblxuICB3aXRoTmVpZ2hib3JzTGlzdC5hZGQodGhpcyk7XG5cbiAgaWYgKHRoaXMuY2hpbGQgIT0gbnVsbClcbiAge1xuICAgIHZhciBub2RlcyA9IHRoaXMuY2hpbGQuZ2V0Tm9kZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIGNoaWxkTm9kZSA9IG5vZGVzW2ldO1xuICAgICAgY2hpbGRyZW4gPSBjaGlsZE5vZGUud2l0aENoaWxkcmVuKCk7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgd2l0aE5laWdoYm9yc0xpc3QuYWRkKG5vZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHdpdGhOZWlnaGJvcnNMaXN0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldE5vT2ZDaGlsZHJlbiA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBub09mQ2hpbGRyZW4gPSAwO1xuICB2YXIgY2hpbGROb2RlO1xuXG4gIGlmKHRoaXMuY2hpbGQgPT0gbnVsbCl7XG4gICAgbm9PZkNoaWxkcmVuID0gMTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICB2YXIgbm9kZXMgPSB0aGlzLmNoaWxkLmdldE5vZGVzKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBjaGlsZE5vZGUgPSBub2Rlc1tpXTtcblxuICAgICAgbm9PZkNoaWxkcmVuICs9IGNoaWxkTm9kZS5nZXROb09mQ2hpbGRyZW4oKTtcbiAgICB9XG4gIH1cbiAgXG4gIGlmKG5vT2ZDaGlsZHJlbiA9PSAwKXtcbiAgICBub09mQ2hpbGRyZW4gPSAxO1xuICB9XG4gIHJldHVybiBub09mQ2hpbGRyZW47XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0RXN0aW1hdGVkU2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZXN0aW1hdGVkU2l6ZSA9PSBJbnRlZ2VyLk1JTl9WQUxVRSkge1xuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICB9XG4gIHJldHVybiB0aGlzLmVzdGltYXRlZFNpemU7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuY2FsY0VzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmNoaWxkID09IG51bGwpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplID0gKHRoaXMucmVjdC53aWR0aCArIHRoaXMucmVjdC5oZWlnaHQpIC8gMjtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICB0aGlzLmVzdGltYXRlZFNpemUgPSB0aGlzLmNoaWxkLmNhbGNFc3RpbWF0ZWRTaXplKCk7XG4gICAgdGhpcy5yZWN0LndpZHRoID0gdGhpcy5lc3RpbWF0ZWRTaXplO1xuICAgIHRoaXMucmVjdC5oZWlnaHQgPSB0aGlzLmVzdGltYXRlZFNpemU7XG5cbiAgICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplO1xuICB9XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuc2NhdHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJhbmRvbUNlbnRlclg7XG4gIHZhciByYW5kb21DZW50ZXJZO1xuXG4gIHZhciBtaW5YID0gLUxheW91dENvbnN0YW50cy5JTklUSUFMX1dPUkxEX0JPVU5EQVJZO1xuICB2YXIgbWF4WCA9IExheW91dENvbnN0YW50cy5JTklUSUFMX1dPUkxEX0JPVU5EQVJZO1xuICByYW5kb21DZW50ZXJYID0gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0NFTlRFUl9YICtcbiAgICAgICAgICAoUmFuZG9tU2VlZC5uZXh0RG91YmxlKCkgKiAobWF4WCAtIG1pblgpKSArIG1pblg7XG5cbiAgdmFyIG1pblkgPSAtTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlk7XG4gIHZhciBtYXhZID0gTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlk7XG4gIHJhbmRvbUNlbnRlclkgPSBMYXlvdXRDb25zdGFudHMuV09STERfQ0VOVEVSX1kgK1xuICAgICAgICAgIChSYW5kb21TZWVkLm5leHREb3VibGUoKSAqIChtYXhZIC0gbWluWSkpICsgbWluWTtcblxuICB0aGlzLnJlY3QueCA9IHJhbmRvbUNlbnRlclg7XG4gIHRoaXMucmVjdC55ID0gcmFuZG9tQ2VudGVyWVxufTtcblxuTE5vZGUucHJvdG90eXBlLnVwZGF0ZUJvdW5kcyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZ2V0Q2hpbGQoKSA9PSBudWxsKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cbiAgaWYgKHRoaXMuZ2V0Q2hpbGQoKS5nZXROb2RlcygpLmxlbmd0aCAhPSAwKVxuICB7XG4gICAgLy8gd3JhcCB0aGUgY2hpbGRyZW4gbm9kZXMgYnkgcmUtYXJyYW5naW5nIHRoZSBib3VuZGFyaWVzXG4gICAgdmFyIGNoaWxkR3JhcGggPSB0aGlzLmdldENoaWxkKCk7XG4gICAgY2hpbGRHcmFwaC51cGRhdGVCb3VuZHModHJ1ZSk7XG5cbiAgICB0aGlzLnJlY3QueCA9IGNoaWxkR3JhcGguZ2V0TGVmdCgpO1xuICAgIHRoaXMucmVjdC55ID0gY2hpbGRHcmFwaC5nZXRUb3AoKTtcblxuICAgIHRoaXMuc2V0V2lkdGgoY2hpbGRHcmFwaC5nZXRSaWdodCgpIC0gY2hpbGRHcmFwaC5nZXRMZWZ0KCkpO1xuICAgIHRoaXMuc2V0SGVpZ2h0KGNoaWxkR3JhcGguZ2V0Qm90dG9tKCkgLSBjaGlsZEdyYXBoLmdldFRvcCgpKTtcbiAgICBcbiAgICAvLyBVcGRhdGUgY29tcG91bmQgYm91bmRzIGNvbnNpZGVyaW5nIGl0cyBsYWJlbCBwcm9wZXJ0aWVzICAgIFxuICAgIGlmKExheW91dENvbnN0YW50cy5OT0RFX0RJTUVOU0lPTlNfSU5DTFVERV9MQUJFTFMpe1xuICAgICAgICBcbiAgICAgIHZhciB3aWR0aCA9IGNoaWxkR3JhcGguZ2V0UmlnaHQoKSAtIGNoaWxkR3JhcGguZ2V0TGVmdCgpO1xuICAgICAgdmFyIGhlaWdodCA9IGNoaWxkR3JhcGguZ2V0Qm90dG9tKCkgLSBjaGlsZEdyYXBoLmdldFRvcCgpO1xuXG4gICAgICBpZih0aGlzLmxhYmVsV2lkdGggPiB3aWR0aCl7XG4gICAgICAgIHRoaXMucmVjdC54IC09ICh0aGlzLmxhYmVsV2lkdGggLSB3aWR0aCkgLyAyO1xuICAgICAgICB0aGlzLnNldFdpZHRoKHRoaXMubGFiZWxXaWR0aCk7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMubGFiZWxIZWlnaHQgPiBoZWlnaHQpe1xuICAgICAgICBpZih0aGlzLmxhYmVsUG9zID09IFwiY2VudGVyXCIpe1xuICAgICAgICAgIHRoaXMucmVjdC55IC09ICh0aGlzLmxhYmVsSGVpZ2h0IC0gaGVpZ2h0KSAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLmxhYmVsUG9zID09IFwidG9wXCIpe1xuICAgICAgICAgIHRoaXMucmVjdC55IC09ICh0aGlzLmxhYmVsSGVpZ2h0IC0gaGVpZ2h0KTsgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRIZWlnaHQodGhpcy5sYWJlbEhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0SW5jbHVzaW9uVHJlZURlcHRoID0gZnVuY3Rpb24gKClcbntcbiAgaWYgKHRoaXMuaW5jbHVzaW9uVHJlZURlcHRoID09IEludGVnZXIuTUFYX1ZBTFVFKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cbiAgcmV0dXJuIHRoaXMuaW5jbHVzaW9uVHJlZURlcHRoO1xufTtcblxuTE5vZGUucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uICh0cmFucylcbntcbiAgdmFyIGxlZnQgPSB0aGlzLnJlY3QueDtcblxuICBpZiAobGVmdCA+IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSlcbiAge1xuICAgIGxlZnQgPSBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlk7XG4gIH1cbiAgZWxzZSBpZiAobGVmdCA8IC1MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkpXG4gIHtcbiAgICBsZWZ0ID0gLUxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWTtcbiAgfVxuXG4gIHZhciB0b3AgPSB0aGlzLnJlY3QueTtcblxuICBpZiAodG9wID4gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZKVxuICB7XG4gICAgdG9wID0gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZO1xuICB9XG4gIGVsc2UgaWYgKHRvcCA8IC1MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkpXG4gIHtcbiAgICB0b3AgPSAtTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZO1xuICB9XG5cbiAgdmFyIGxlZnRUb3AgPSBuZXcgUG9pbnREKGxlZnQsIHRvcCk7XG4gIHZhciB2TGVmdFRvcCA9IHRyYW5zLmludmVyc2VUcmFuc2Zvcm1Qb2ludChsZWZ0VG9wKTtcblxuICB0aGlzLnNldExvY2F0aW9uKHZMZWZ0VG9wLngsIHZMZWZ0VG9wLnkpO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yZWN0Lng7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0UmlnaHQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yZWN0LnggKyB0aGlzLnJlY3Qud2lkdGg7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0VG9wID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdC55O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEJvdHRvbSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnJlY3QueSArIHRoaXMucmVjdC5oZWlnaHQ7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0UGFyZW50ID0gZnVuY3Rpb24gKClcbntcbiAgaWYgKHRoaXMub3duZXIgPT0gbnVsbClcbiAge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMub3duZXIuZ2V0UGFyZW50KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExOb2RlO1xuIiwidmFyIExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vTGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgSGFzaE1hcCA9IHJlcXVpcmUoJy4vSGFzaE1hcCcpO1xudmFyIExHcmFwaE1hbmFnZXIgPSByZXF1aXJlKCcuL0xHcmFwaE1hbmFnZXInKTtcbnZhciBMTm9kZSA9IHJlcXVpcmUoJy4vTE5vZGUnKTtcbnZhciBMRWRnZSA9IHJlcXVpcmUoJy4vTEVkZ2UnKTtcbnZhciBMR3JhcGggPSByZXF1aXJlKCcuL0xHcmFwaCcpO1xudmFyIFBvaW50RCA9IHJlcXVpcmUoJy4vUG9pbnREJyk7XG52YXIgVHJhbnNmb3JtID0gcmVxdWlyZSgnLi9UcmFuc2Zvcm0nKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnLi9FbWl0dGVyJyk7XG52YXIgSGFzaFNldCA9IHJlcXVpcmUoJy4vSGFzaFNldCcpO1xuXG5mdW5jdGlvbiBMYXlvdXQoaXNSZW1vdGVVc2UpIHtcbiAgRW1pdHRlci5jYWxsKCB0aGlzICk7XG5cbiAgLy9MYXlvdXQgUXVhbGl0eTogMDpwcm9vZiwgMTpkZWZhdWx0LCAyOmRyYWZ0XG4gIHRoaXMubGF5b3V0UXVhbGl0eSA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX1FVQUxJVFk7XG4gIC8vV2hldGhlciBsYXlvdXQgc2hvdWxkIGNyZWF0ZSBiZW5kcG9pbnRzIGFzIG5lZWRlZCBvciBub3RcbiAgdGhpcy5jcmVhdGVCZW5kc0FzTmVlZGVkID1cbiAgICAgICAgICBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEO1xuICAvL1doZXRoZXIgbGF5b3V0IHNob3VsZCBiZSBpbmNyZW1lbnRhbCBvciBub3RcbiAgdGhpcy5pbmNyZW1lbnRhbCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMO1xuICAvL1doZXRoZXIgd2UgYW5pbWF0ZSBmcm9tIGJlZm9yZSB0byBhZnRlciBsYXlvdXQgbm9kZSBwb3NpdGlvbnNcbiAgdGhpcy5hbmltYXRpb25PbkxheW91dCA9XG4gICAgICAgICAgTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVDtcbiAgLy9XaGV0aGVyIHdlIGFuaW1hdGUgdGhlIGxheW91dCBwcm9jZXNzIG9yIG5vdFxuICB0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VUO1xuICAvL051bWJlciBpdGVyYXRpb25zIHRoYXQgc2hvdWxkIGJlIGRvbmUgYmV0d2VlbiB0d28gc3VjY2Vzc2l2ZSBhbmltYXRpb25zXG4gIHRoaXMuYW5pbWF0aW9uUGVyaW9kID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRDtcbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IGxlYWYgbm9kZXMgKG5vbi1jb21wb3VuZCBub2RlcykgYXJlIG9mIHVuaWZvcm0gc2l6ZXMuIFdoZW5cbiAgICogdGhleSBhcmUsIGJvdGggc3ByaW5nIGFuZCByZXB1bHNpb24gZm9yY2VzIGJldHdlZW4gdHdvIGxlYWYgbm9kZXMgY2FuIGJlXG4gICAqIGNhbGN1bGF0ZWQgd2l0aG91dCB0aGUgZXhwZW5zaXZlIGNsaXBwaW5nIHBvaW50IGNhbGN1bGF0aW9ucywgcmVzdWx0aW5nXG4gICAqIGluIG1ham9yIHNwZWVkLXVwLlxuICAgKi9cbiAgdGhpcy51bmlmb3JtTGVhZk5vZGVTaXplcyA9XG4gICAgICAgICAgTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVU5JRk9STV9MRUFGX05PREVfU0laRVM7XG4gIC8qKlxuICAgKiBUaGlzIGlzIHVzZWQgZm9yIGNyZWF0aW9uIG9mIGJlbmRwb2ludHMgYnkgdXNpbmcgZHVtbXkgbm9kZXMgYW5kIGVkZ2VzLlxuICAgKiBNYXBzIGFuIExFZGdlIHRvIGl0cyBkdW1teSBiZW5kcG9pbnQgcGF0aC5cbiAgICovXG4gIHRoaXMuZWRnZVRvRHVtbXlOb2RlcyA9IG5ldyBIYXNoTWFwKCk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyID0gbmV3IExHcmFwaE1hbmFnZXIodGhpcyk7XG4gIHRoaXMuaXNMYXlvdXRGaW5pc2hlZCA9IGZhbHNlO1xuICB0aGlzLmlzU3ViTGF5b3V0ID0gZmFsc2U7XG4gIHRoaXMuaXNSZW1vdGVVc2UgPSBmYWxzZTtcblxuICBpZiAoaXNSZW1vdGVVc2UgIT0gbnVsbCkge1xuICAgIHRoaXMuaXNSZW1vdGVVc2UgPSBpc1JlbW90ZVVzZTtcbiAgfVxufVxuXG5MYXlvdXQuUkFORE9NX1NFRUQgPSAxO1xuXG5MYXlvdXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRW1pdHRlci5wcm90b3R5cGUgKTtcblxuTGF5b3V0LnByb3RvdHlwZS5nZXRHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlcjtcbn07XG5cbkxheW91dC5wcm90b3R5cGUuZ2V0QWxsTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2RlcygpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5nZXRBbGxFZGdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbEVkZ2VzKCk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLmdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oKTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUubmV3R3JhcGhNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZ20gPSBuZXcgTEdyYXBoTWFuYWdlcih0aGlzKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcbiAgcmV0dXJuIGdtO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5uZXdHcmFwaCA9IGZ1bmN0aW9uICh2R3JhcGgpXG57XG4gIHJldHVybiBuZXcgTEdyYXBoKG51bGwsIHRoaXMuZ3JhcGhNYW5hZ2VyLCB2R3JhcGgpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5uZXdOb2RlID0gZnVuY3Rpb24gKHZOb2RlKVxue1xuICByZXR1cm4gbmV3IExOb2RlKHRoaXMuZ3JhcGhNYW5hZ2VyLCB2Tm9kZSk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLm5ld0VkZ2UgPSBmdW5jdGlvbiAodkVkZ2UpXG57XG4gIHJldHVybiBuZXcgTEVkZ2UobnVsbCwgbnVsbCwgdkVkZ2UpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5jaGVja0xheW91dFN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICh0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkgPT0gbnVsbClcbiAgICAgICAgICB8fCB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0Tm9kZXMoKS5sZW5ndGggPT0gMFxuICAgICAgICAgIHx8IHRoaXMuZ3JhcGhNYW5hZ2VyLmluY2x1ZGVzSW52YWxpZEVkZ2UoKTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUucnVuTGF5b3V0ID0gZnVuY3Rpb24gKClcbntcbiAgdGhpcy5pc0xheW91dEZpbmlzaGVkID0gZmFsc2U7XG4gIFxuICBpZiAodGhpcy50aWxpbmdQcmVMYXlvdXQpIHtcbiAgICB0aGlzLnRpbGluZ1ByZUxheW91dCgpO1xuICB9XG5cbiAgdGhpcy5pbml0UGFyYW1ldGVycygpO1xuICB2YXIgaXNMYXlvdXRTdWNjZXNzZnVsbDtcblxuICBpZiAodGhpcy5jaGVja0xheW91dFN1Y2Nlc3MoKSlcbiAge1xuICAgIGlzTGF5b3V0U3VjY2Vzc2Z1bGwgPSBmYWxzZTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICBpc0xheW91dFN1Y2Nlc3NmdWxsID0gdGhpcy5sYXlvdXQoKTtcbiAgfVxuICBcbiAgaWYgKExheW91dENvbnN0YW50cy5BTklNQVRFID09PSAnZHVyaW5nJykge1xuICAgIC8vIElmIHRoaXMgaXMgYSAnZHVyaW5nJyBsYXlvdXQgYW5pbWF0aW9uLiBMYXlvdXQgaXMgbm90IGZpbmlzaGVkIHlldC4gXG4gICAgLy8gV2UgbmVlZCB0byBwZXJmb3JtIHRoZXNlIGluIGluZGV4LmpzIHdoZW4gbGF5b3V0IGlzIHJlYWxseSBmaW5pc2hlZC5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIGlmIChpc0xheW91dFN1Y2Nlc3NmdWxsKVxuICB7XG4gICAgaWYgKCF0aGlzLmlzU3ViTGF5b3V0KVxuICAgIHtcbiAgICAgIHRoaXMuZG9Qb3N0TGF5b3V0KCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMudGlsaW5nUG9zdExheW91dCkge1xuICAgIHRoaXMudGlsaW5nUG9zdExheW91dCgpO1xuICB9XG5cbiAgdGhpcy5pc0xheW91dEZpbmlzaGVkID0gdHJ1ZTtcblxuICByZXR1cm4gaXNMYXlvdXRTdWNjZXNzZnVsbDtcbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcGVyZm9ybXMgdGhlIG9wZXJhdGlvbnMgcmVxdWlyZWQgYWZ0ZXIgbGF5b3V0LlxuICovXG5MYXlvdXQucHJvdG90eXBlLmRvUG9zdExheW91dCA9IGZ1bmN0aW9uICgpXG57XG4gIC8vYXNzZXJ0ICFpc1N1YkxheW91dCA6IFwiU2hvdWxkIG5vdCBiZSBjYWxsZWQgb24gc3ViLWxheW91dCFcIjtcbiAgLy8gUHJvcGFnYXRlIGdlb21ldHJpYyBjaGFuZ2VzIHRvIHYtbGV2ZWwgb2JqZWN0c1xuICBpZighdGhpcy5pbmNyZW1lbnRhbCl7XG4gICAgdGhpcy50cmFuc2Zvcm0oKTtcbiAgfVxuICB0aGlzLnVwZGF0ZSgpO1xufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCB1cGRhdGVzIHRoZSBnZW9tZXRyeSBvZiB0aGUgdGFyZ2V0IGdyYXBoIGFjY29yZGluZyB0b1xuICogY2FsY3VsYXRlZCBsYXlvdXQuXG4gKi9cbkxheW91dC5wcm90b3R5cGUudXBkYXRlMiA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gdXBkYXRlIGJlbmQgcG9pbnRzXG4gIGlmICh0aGlzLmNyZWF0ZUJlbmRzQXNOZWVkZWQpXG4gIHtcbiAgICB0aGlzLmNyZWF0ZUJlbmRwb2ludHNGcm9tRHVtbXlOb2RlcygpO1xuXG4gICAgLy8gcmVzZXQgYWxsIGVkZ2VzLCBzaW5jZSB0aGUgdG9wb2xvZ3kgaGFzIGNoYW5nZWRcbiAgICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbEVkZ2VzKCk7XG4gIH1cblxuICAvLyBwZXJmb3JtIGVkZ2UsIG5vZGUgYW5kIHJvb3QgdXBkYXRlcyBpZiBsYXlvdXQgaXMgbm90IGNhbGxlZFxuICAvLyByZW1vdGVseVxuICBpZiAoIXRoaXMuaXNSZW1vdGVVc2UpXG4gIHtcbiAgICAvLyB1cGRhdGUgYWxsIGVkZ2VzXG4gICAgdmFyIGVkZ2U7XG4gICAgdmFyIGFsbEVkZ2VzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsRWRnZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbEVkZ2VzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIGVkZ2UgPSBhbGxFZGdlc1tpXTtcbi8vICAgICAgdGhpcy51cGRhdGUoZWRnZSk7XG4gICAgfVxuXG4gICAgLy8gcmVjdXJzaXZlbHkgdXBkYXRlIG5vZGVzXG4gICAgdmFyIG5vZGU7XG4gICAgdmFyIG5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldE5vZGVzKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBub2RlID0gbm9kZXNbaV07XG4vLyAgICAgIHRoaXMudXBkYXRlKG5vZGUpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSByb290IGdyYXBoXG4gICAgdGhpcy51cGRhdGUodGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpKTtcbiAgfVxufTtcblxuTGF5b3V0LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmIChvYmogPT0gbnVsbCkge1xuICAgIHRoaXMudXBkYXRlMigpO1xuICB9XG4gIGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIExOb2RlKSB7XG4gICAgdmFyIG5vZGUgPSBvYmo7XG4gICAgaWYgKG5vZGUuZ2V0Q2hpbGQoKSAhPSBudWxsKVxuICAgIHtcbiAgICAgIC8vIHNpbmNlIG5vZGUgaXMgY29tcG91bmQsIHJlY3Vyc2l2ZWx5IHVwZGF0ZSBjaGlsZCBub2Rlc1xuICAgICAgdmFyIG5vZGVzID0gbm9kZS5nZXRDaGlsZCgpLmdldE5vZGVzKCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxuICAgICAge1xuICAgICAgICB1cGRhdGUobm9kZXNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBsLWxldmVsIG5vZGUgaXMgYXNzb2NpYXRlZCB3aXRoIGEgdi1sZXZlbCBncmFwaCBvYmplY3QsXG4gICAgLy8gdGhlbiBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHYtbGV2ZWwgbm9kZSBpbXBsZW1lbnRzIHRoZVxuICAgIC8vIGludGVyZmFjZSBVcGRhdGFibGUuXG4gICAgaWYgKG5vZGUudkdyYXBoT2JqZWN0ICE9IG51bGwpXG4gICAge1xuICAgICAgLy8gY2FzdCB0byBVcGRhdGFibGUgd2l0aG91dCBhbnkgdHlwZSBjaGVja1xuICAgICAgdmFyIHZOb2RlID0gbm9kZS52R3JhcGhPYmplY3Q7XG5cbiAgICAgIC8vIGNhbGwgdGhlIHVwZGF0ZSBtZXRob2Qgb2YgdGhlIGludGVyZmFjZVxuICAgICAgdk5vZGUudXBkYXRlKG5vZGUpO1xuICAgIH1cbiAgfVxuICBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMRWRnZSkge1xuICAgIHZhciBlZGdlID0gb2JqO1xuICAgIC8vIGlmIHRoZSBsLWxldmVsIGVkZ2UgaXMgYXNzb2NpYXRlZCB3aXRoIGEgdi1sZXZlbCBncmFwaCBvYmplY3QsXG4gICAgLy8gdGhlbiBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHYtbGV2ZWwgZWRnZSBpbXBsZW1lbnRzIHRoZVxuICAgIC8vIGludGVyZmFjZSBVcGRhdGFibGUuXG5cbiAgICBpZiAoZWRnZS52R3JhcGhPYmplY3QgIT0gbnVsbClcbiAgICB7XG4gICAgICAvLyBjYXN0IHRvIFVwZGF0YWJsZSB3aXRob3V0IGFueSB0eXBlIGNoZWNrXG4gICAgICB2YXIgdkVkZ2UgPSBlZGdlLnZHcmFwaE9iamVjdDtcblxuICAgICAgLy8gY2FsbCB0aGUgdXBkYXRlIG1ldGhvZCBvZiB0aGUgaW50ZXJmYWNlXG4gICAgICB2RWRnZS51cGRhdGUoZWRnZSk7XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIExHcmFwaCkge1xuICAgIHZhciBncmFwaCA9IG9iajtcbiAgICAvLyBpZiB0aGUgbC1sZXZlbCBncmFwaCBpcyBhc3NvY2lhdGVkIHdpdGggYSB2LWxldmVsIGdyYXBoIG9iamVjdCxcbiAgICAvLyB0aGVuIGl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgdi1sZXZlbCBvYmplY3QgaW1wbGVtZW50cyB0aGVcbiAgICAvLyBpbnRlcmZhY2UgVXBkYXRhYmxlLlxuXG4gICAgaWYgKGdyYXBoLnZHcmFwaE9iamVjdCAhPSBudWxsKVxuICAgIHtcbiAgICAgIC8vIGNhc3QgdG8gVXBkYXRhYmxlIHdpdGhvdXQgYW55IHR5cGUgY2hlY2tcbiAgICAgIHZhciB2R3JhcGggPSBncmFwaC52R3JhcGhPYmplY3Q7XG5cbiAgICAgIC8vIGNhbGwgdGhlIHVwZGF0ZSBtZXRob2Qgb2YgdGhlIGludGVyZmFjZVxuICAgICAgdkdyYXBoLnVwZGF0ZShncmFwaCk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gc2V0IGFsbCBsYXlvdXQgcGFyYW1ldGVycyB0byBkZWZhdWx0IHZhbHVlc1xuICogZGV0ZXJtaW5lZCBhdCBjb21waWxlIHRpbWUuXG4gKi9cbkxheW91dC5wcm90b3R5cGUuaW5pdFBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5pc1N1YkxheW91dClcbiAge1xuICAgIHRoaXMubGF5b3V0UXVhbGl0eSA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX1FVQUxJVFk7XG4gICAgdGhpcy5hbmltYXRpb25EdXJpbmdMYXlvdXQgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fRFVSSU5HX0xBWU9VVDtcbiAgICB0aGlzLmFuaW1hdGlvblBlcmlvZCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9QRVJJT0Q7XG4gICAgdGhpcy5hbmltYXRpb25PbkxheW91dCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9PTl9MQVlPVVQ7XG4gICAgdGhpcy5pbmNyZW1lbnRhbCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMO1xuICAgIHRoaXMuY3JlYXRlQmVuZHNBc05lZWRlZCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0NSRUFURV9CRU5EU19BU19ORUVERUQ7XG4gICAgdGhpcy51bmlmb3JtTGVhZk5vZGVTaXplcyA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX1VOSUZPUk1fTEVBRl9OT0RFX1NJWkVTO1xuICB9XG5cbiAgaWYgKHRoaXMuYW5pbWF0aW9uRHVyaW5nTGF5b3V0KVxuICB7XG4gICAgdGhpcy5hbmltYXRpb25PbkxheW91dCA9IGZhbHNlO1xuICB9XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIChuZXdMZWZ0VG9wKSB7XG4gIGlmIChuZXdMZWZ0VG9wID09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMudHJhbnNmb3JtKG5ldyBQb2ludEQoMCwgMCkpO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIGNyZWF0ZSBhIHRyYW5zZm9ybWF0aW9uIG9iamVjdCAoZnJvbSBFY2xpcHNlIHRvIGxheW91dCkuIFdoZW4gYW5cbiAgICAvLyBpbnZlcnNlIHRyYW5zZm9ybSBpcyBhcHBsaWVkLCB3ZSBnZXQgdXBwZXItbGVmdCBjb29yZGluYXRlIG9mIHRoZVxuICAgIC8vIGRyYXdpbmcgb3IgdGhlIHJvb3QgZ3JhcGggYXQgZ2l2ZW4gaW5wdXQgY29vcmRpbmF0ZSAoc29tZSBtYXJnaW5zXG4gICAgLy8gYWxyZWFkeSBpbmNsdWRlZCBpbiBjYWxjdWxhdGlvbiBvZiBsZWZ0LXRvcCkuXG5cbiAgICB2YXIgdHJhbnMgPSBuZXcgVHJhbnNmb3JtKCk7XG4gICAgdmFyIGxlZnRUb3AgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkudXBkYXRlTGVmdFRvcCgpO1xuXG4gICAgaWYgKGxlZnRUb3AgIT0gbnVsbClcbiAgICB7XG4gICAgICB0cmFucy5zZXRXb3JsZE9yZ1gobmV3TGVmdFRvcC54KTtcbiAgICAgIHRyYW5zLnNldFdvcmxkT3JnWShuZXdMZWZ0VG9wLnkpO1xuXG4gICAgICB0cmFucy5zZXREZXZpY2VPcmdYKGxlZnRUb3AueCk7XG4gICAgICB0cmFucy5zZXREZXZpY2VPcmdZKGxlZnRUb3AueSk7XG5cbiAgICAgIHZhciBub2RlcyA9IHRoaXMuZ2V0QWxsTm9kZXMoKTtcbiAgICAgIHZhciBub2RlO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxuICAgICAge1xuICAgICAgICBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIG5vZGUudHJhbnNmb3JtKHRyYW5zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbkxheW91dC5wcm90b3R5cGUucG9zaXRpb25Ob2Rlc1JhbmRvbWx5ID0gZnVuY3Rpb24gKGdyYXBoKSB7XG5cbiAgaWYgKGdyYXBoID09IHVuZGVmaW5lZCkge1xuICAgIC8vYXNzZXJ0ICF0aGlzLmluY3JlbWVudGFsO1xuICAgIHRoaXMucG9zaXRpb25Ob2Rlc1JhbmRvbWx5KHRoaXMuZ2V0R3JhcGhNYW5hZ2VyKCkuZ2V0Um9vdCgpKTtcbiAgICB0aGlzLmdldEdyYXBoTWFuYWdlcigpLmdldFJvb3QoKS51cGRhdGVCb3VuZHModHJ1ZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgdmFyIGxOb2RlO1xuICAgIHZhciBjaGlsZEdyYXBoO1xuXG4gICAgdmFyIG5vZGVzID0gZ3JhcGguZ2V0Tm9kZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIGxOb2RlID0gbm9kZXNbaV07XG4gICAgICBjaGlsZEdyYXBoID0gbE5vZGUuZ2V0Q2hpbGQoKTtcblxuICAgICAgaWYgKGNoaWxkR3JhcGggPT0gbnVsbClcbiAgICAgIHtcbiAgICAgICAgbE5vZGUuc2NhdHRlcigpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoY2hpbGRHcmFwaC5nZXROb2RlcygpLmxlbmd0aCA9PSAwKVxuICAgICAge1xuICAgICAgICBsTm9kZS5zY2F0dGVyKCk7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIHRoaXMucG9zaXRpb25Ob2Rlc1JhbmRvbWx5KGNoaWxkR3JhcGgpO1xuICAgICAgICBsTm9kZS51cGRhdGVCb3VuZHMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIGxpc3Qgb2YgdHJlZXMgd2hlcmUgZWFjaCB0cmVlIGlzIHJlcHJlc2VudGVkIGFzIGFcbiAqIGxpc3Qgb2YgbC1ub2Rlcy4gVGhlIG1ldGhvZCByZXR1cm5zIGEgbGlzdCBvZiBzaXplIDAgd2hlbjpcbiAqIC0gVGhlIGdyYXBoIGlzIG5vdCBmbGF0IG9yXG4gKiAtIE9uZSBvZiB0aGUgY29tcG9uZW50KHMpIG9mIHRoZSBncmFwaCBpcyBub3QgYSB0cmVlLlxuICovXG5MYXlvdXQucHJvdG90eXBlLmdldEZsYXRGb3Jlc3QgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgZmxhdEZvcmVzdCA9IFtdO1xuICB2YXIgaXNGb3Jlc3QgPSB0cnVlO1xuXG4gIC8vIFF1aWNrIHJlZmVyZW5jZSBmb3IgYWxsIG5vZGVzIGluIHRoZSBncmFwaCBtYW5hZ2VyIGFzc29jaWF0ZWQgd2l0aFxuICAvLyB0aGlzIGxheW91dC4gVGhlIGxpc3Qgc2hvdWxkIG5vdCBiZSBjaGFuZ2VkLlxuICB2YXIgYWxsTm9kZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0Tm9kZXMoKTtcblxuICAvLyBGaXJzdCBiZSBzdXJlIHRoYXQgdGhlIGdyYXBoIGlzIGZsYXRcbiAgdmFyIGlzRmxhdCA9IHRydWU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxOb2Rlcy5sZW5ndGg7IGkrKylcbiAge1xuICAgIGlmIChhbGxOb2Rlc1tpXS5nZXRDaGlsZCgpICE9IG51bGwpXG4gICAge1xuICAgICAgaXNGbGF0ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJuIGVtcHR5IGZvcmVzdCBpZiB0aGUgZ3JhcGggaXMgbm90IGZsYXQuXG4gIGlmICghaXNGbGF0KVxuICB7XG4gICAgcmV0dXJuIGZsYXRGb3Jlc3Q7XG4gIH1cblxuICAvLyBSdW4gQkZTIGZvciBlYWNoIGNvbXBvbmVudCBvZiB0aGUgZ3JhcGguXG5cbiAgdmFyIHZpc2l0ZWQgPSBuZXcgSGFzaFNldCgpO1xuICB2YXIgdG9CZVZpc2l0ZWQgPSBbXTtcbiAgdmFyIHBhcmVudHMgPSBuZXcgSGFzaE1hcCgpO1xuICB2YXIgdW5Qcm9jZXNzZWROb2RlcyA9IFtdO1xuXG4gIHVuUHJvY2Vzc2VkTm9kZXMgPSB1blByb2Nlc3NlZE5vZGVzLmNvbmNhdChhbGxOb2Rlcyk7XG5cbiAgLy8gRWFjaCBpdGVyYXRpb24gb2YgdGhpcyBsb29wIGZpbmRzIGEgY29tcG9uZW50IG9mIHRoZSBncmFwaCBhbmRcbiAgLy8gZGVjaWRlcyB3aGV0aGVyIGl0IGlzIGEgdHJlZSBvciBub3QuIElmIGl0IGlzIGEgdHJlZSwgYWRkcyBpdCB0byB0aGVcbiAgLy8gZm9yZXN0IGFuZCBjb250aW51ZWQgd2l0aCB0aGUgbmV4dCBjb21wb25lbnQuXG5cbiAgd2hpbGUgKHVuUHJvY2Vzc2VkTm9kZXMubGVuZ3RoID4gMCAmJiBpc0ZvcmVzdClcbiAge1xuICAgIHRvQmVWaXNpdGVkLnB1c2godW5Qcm9jZXNzZWROb2Rlc1swXSk7XG5cbiAgICAvLyBTdGFydCB0aGUgQkZTLiBFYWNoIGl0ZXJhdGlvbiBvZiB0aGlzIGxvb3AgdmlzaXRzIGEgbm9kZSBpbiBhXG4gICAgLy8gQkZTIG1hbm5lci5cbiAgICB3aGlsZSAodG9CZVZpc2l0ZWQubGVuZ3RoID4gMCAmJiBpc0ZvcmVzdClcbiAgICB7XG4gICAgICAvL3Bvb2wgb3BlcmF0aW9uXG4gICAgICB2YXIgY3VycmVudE5vZGUgPSB0b0JlVmlzaXRlZFswXTtcbiAgICAgIHRvQmVWaXNpdGVkLnNwbGljZSgwLCAxKTtcbiAgICAgIHZpc2l0ZWQuYWRkKGN1cnJlbnROb2RlKTtcblxuICAgICAgLy8gVHJhdmVyc2UgYWxsIG5laWdoYm9ycyBvZiB0aGlzIG5vZGVcbiAgICAgIHZhciBuZWlnaGJvckVkZ2VzID0gY3VycmVudE5vZGUuZ2V0RWRnZXMoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZWlnaGJvckVkZ2VzLmxlbmd0aDsgaSsrKVxuICAgICAge1xuICAgICAgICB2YXIgY3VycmVudE5laWdoYm9yID1cbiAgICAgICAgICAgICAgICBuZWlnaGJvckVkZ2VzW2ldLmdldE90aGVyRW5kKGN1cnJlbnROb2RlKTtcblxuICAgICAgICAvLyBJZiBCRlMgaXMgbm90IGdyb3dpbmcgZnJvbSB0aGlzIG5laWdoYm9yLlxuICAgICAgICBpZiAocGFyZW50cy5nZXQoY3VycmVudE5vZGUpICE9IGN1cnJlbnROZWlnaGJvcilcbiAgICAgICAge1xuICAgICAgICAgIC8vIFdlIGhhdmVuJ3QgcHJldmlvdXNseSB2aXNpdGVkIHRoaXMgbmVpZ2hib3IuXG4gICAgICAgICAgaWYgKCF2aXNpdGVkLmNvbnRhaW5zKGN1cnJlbnROZWlnaGJvcikpXG4gICAgICAgICAge1xuICAgICAgICAgICAgdG9CZVZpc2l0ZWQucHVzaChjdXJyZW50TmVpZ2hib3IpO1xuICAgICAgICAgICAgcGFyZW50cy5wdXQoY3VycmVudE5laWdoYm9yLCBjdXJyZW50Tm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFNpbmNlIHdlIGhhdmUgcHJldmlvdXNseSB2aXNpdGVkIHRoaXMgbmVpZ2hib3IgYW5kXG4gICAgICAgICAgLy8gdGhpcyBuZWlnaGJvciBpcyBub3QgcGFyZW50IG9mIGN1cnJlbnROb2RlLCBnaXZlblxuICAgICAgICAgIC8vIGdyYXBoIGNvbnRhaW5zIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHRyZWUsIGhlbmNlXG4gICAgICAgICAgLy8gaXQgaXMgbm90IGEgZm9yZXN0LlxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpc0ZvcmVzdCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhlIGdyYXBoIGNvbnRhaW5zIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IGEgdHJlZS4gRW1wdHlcbiAgICAvLyBwcmV2aW91c2x5IGZvdW5kIHRyZWVzLiBUaGUgbWV0aG9kIHdpbGwgZW5kLlxuICAgIGlmICghaXNGb3Jlc3QpXG4gICAge1xuICAgICAgZmxhdEZvcmVzdCA9IFtdO1xuICAgIH1cbiAgICAvLyBTYXZlIGN1cnJlbnRseSB2aXNpdGVkIG5vZGVzIGFzIGEgdHJlZSBpbiBvdXIgZm9yZXN0LiBSZXNldFxuICAgIC8vIHZpc2l0ZWQgYW5kIHBhcmVudHMgbGlzdHMuIENvbnRpbnVlIHdpdGggdGhlIG5leHQgY29tcG9uZW50IG9mXG4gICAgLy8gdGhlIGdyYXBoLCBpZiBhbnkuXG4gICAgZWxzZVxuICAgIHtcbiAgICAgIHZhciB0ZW1wID0gW107XG4gICAgICB2aXNpdGVkLmFkZEFsbFRvKHRlbXApO1xuICAgICAgZmxhdEZvcmVzdC5wdXNoKHRlbXApO1xuICAgICAgLy9mbGF0Rm9yZXN0ID0gZmxhdEZvcmVzdC5jb25jYXQodGVtcCk7XG4gICAgICAvL3VuUHJvY2Vzc2VkTm9kZXMucmVtb3ZlQWxsKHZpc2l0ZWQpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRlbXBbaV07XG4gICAgICAgIHZhciBpbmRleCA9IHVuUHJvY2Vzc2VkTm9kZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgdW5Qcm9jZXNzZWROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2aXNpdGVkID0gbmV3IEhhc2hTZXQoKTtcbiAgICAgIHBhcmVudHMgPSBuZXcgSGFzaE1hcCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmbGF0Rm9yZXN0O1xufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBjcmVhdGVzIGR1bW15IG5vZGVzIChhbiBsLWxldmVsIG5vZGUgd2l0aCBtaW5pbWFsIGRpbWVuc2lvbnMpXG4gKiBmb3IgdGhlIGdpdmVuIGVkZ2UgKG9uZSBwZXIgYmVuZHBvaW50KS4gVGhlIGV4aXN0aW5nIGwtbGV2ZWwgc3RydWN0dXJlXG4gKiBpcyB1cGRhdGVkIGFjY29yZGluZ2x5LlxuICovXG5MYXlvdXQucHJvdG90eXBlLmNyZWF0ZUR1bW15Tm9kZXNGb3JCZW5kcG9pbnRzID0gZnVuY3Rpb24gKGVkZ2UpXG57XG4gIHZhciBkdW1teU5vZGVzID0gW107XG4gIHZhciBwcmV2ID0gZWRnZS5zb3VyY2U7XG5cbiAgdmFyIGdyYXBoID0gdGhpcy5ncmFwaE1hbmFnZXIuY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9yKGVkZ2Uuc291cmNlLCBlZGdlLnRhcmdldCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlZGdlLmJlbmRwb2ludHMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICAvLyBjcmVhdGUgbmV3IGR1bW15IG5vZGVcbiAgICB2YXIgZHVtbXlOb2RlID0gdGhpcy5uZXdOb2RlKG51bGwpO1xuICAgIGR1bW15Tm9kZS5zZXRSZWN0KG5ldyBQb2ludCgwLCAwKSwgbmV3IERpbWVuc2lvbigxLCAxKSk7XG5cbiAgICBncmFwaC5hZGQoZHVtbXlOb2RlKTtcblxuICAgIC8vIGNyZWF0ZSBuZXcgZHVtbXkgZWRnZSBiZXR3ZWVuIHByZXYgYW5kIGR1bW15IG5vZGVcbiAgICB2YXIgZHVtbXlFZGdlID0gdGhpcy5uZXdFZGdlKG51bGwpO1xuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLmFkZChkdW1teUVkZ2UsIHByZXYsIGR1bW15Tm9kZSk7XG5cbiAgICBkdW1teU5vZGVzLmFkZChkdW1teU5vZGUpO1xuICAgIHByZXYgPSBkdW1teU5vZGU7XG4gIH1cblxuICB2YXIgZHVtbXlFZGdlID0gdGhpcy5uZXdFZGdlKG51bGwpO1xuICB0aGlzLmdyYXBoTWFuYWdlci5hZGQoZHVtbXlFZGdlLCBwcmV2LCBlZGdlLnRhcmdldCk7XG5cbiAgdGhpcy5lZGdlVG9EdW1teU5vZGVzLnB1dChlZGdlLCBkdW1teU5vZGVzKTtcblxuICAvLyByZW1vdmUgcmVhbCBlZGdlIGZyb20gZ3JhcGggbWFuYWdlciBpZiBpdCBpcyBpbnRlci1ncmFwaFxuICBpZiAoZWRnZS5pc0ludGVyR3JhcGgoKSlcbiAge1xuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlbW92ZShlZGdlKTtcbiAgfVxuICAvLyBlbHNlLCByZW1vdmUgdGhlIGVkZ2UgZnJvbSB0aGUgY3VycmVudCBncmFwaFxuICBlbHNlXG4gIHtcbiAgICBncmFwaC5yZW1vdmUoZWRnZSk7XG4gIH1cblxuICByZXR1cm4gZHVtbXlOb2Rlcztcbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgY3JlYXRlcyBiZW5kcG9pbnRzIGZvciBlZGdlcyBmcm9tIHRoZSBkdW1teSBub2Rlc1xuICogYXQgbC1sZXZlbC5cbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5jcmVhdGVCZW5kcG9pbnRzRnJvbUR1bW15Tm9kZXMgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgZWRnZXMgPSBbXTtcbiAgZWRnZXMgPSBlZGdlcy5jb25jYXQodGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsRWRnZXMoKSk7XG4gIGVkZ2VzID0gdGhpcy5lZGdlVG9EdW1teU5vZGVzLmtleVNldCgpLmNvbmNhdChlZGdlcyk7XG5cbiAgZm9yICh2YXIgayA9IDA7IGsgPCBlZGdlcy5sZW5ndGg7IGsrKylcbiAge1xuICAgIHZhciBsRWRnZSA9IGVkZ2VzW2tdO1xuXG4gICAgaWYgKGxFZGdlLmJlbmRwb2ludHMubGVuZ3RoID4gMClcbiAgICB7XG4gICAgICB2YXIgcGF0aCA9IHRoaXMuZWRnZVRvRHVtbXlOb2Rlcy5nZXQobEVkZ2UpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspXG4gICAgICB7XG4gICAgICAgIHZhciBkdW1teU5vZGUgPSBwYXRoW2ldO1xuICAgICAgICB2YXIgcCA9IG5ldyBQb2ludEQoZHVtbXlOb2RlLmdldENlbnRlclgoKSxcbiAgICAgICAgICAgICAgICBkdW1teU5vZGUuZ2V0Q2VudGVyWSgpKTtcblxuICAgICAgICAvLyB1cGRhdGUgYmVuZHBvaW50J3MgbG9jYXRpb24gYWNjb3JkaW5nIHRvIGR1bW15IG5vZGVcbiAgICAgICAgdmFyIGVicCA9IGxFZGdlLmJlbmRwb2ludHMuZ2V0KGkpO1xuICAgICAgICBlYnAueCA9IHAueDtcbiAgICAgICAgZWJwLnkgPSBwLnk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBkdW1teSBub2RlLCBkdW1teSBlZGdlcyBpbmNpZGVudCB3aXRoIHRoaXNcbiAgICAgICAgLy8gZHVtbXkgbm9kZSBpcyBhbHNvIHJlbW92ZWQgKHdpdGhpbiB0aGUgcmVtb3ZlIG1ldGhvZClcbiAgICAgICAgZHVtbXlOb2RlLmdldE93bmVyKCkucmVtb3ZlKGR1bW15Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGFkZCB0aGUgcmVhbCBlZGdlIHRvIGdyYXBoXG4gICAgICB0aGlzLmdyYXBoTWFuYWdlci5hZGQobEVkZ2UsIGxFZGdlLnNvdXJjZSwgbEVkZ2UudGFyZ2V0KTtcbiAgICB9XG4gIH1cbn07XG5cbkxheW91dC50cmFuc2Zvcm0gPSBmdW5jdGlvbiAoc2xpZGVyVmFsdWUsIGRlZmF1bHRWYWx1ZSwgbWluRGl2LCBtYXhNdWwpIHtcbiAgaWYgKG1pbkRpdiAhPSB1bmRlZmluZWQgJiYgbWF4TXVsICE9IHVuZGVmaW5lZCkge1xuICAgIHZhciB2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblxuICAgIGlmIChzbGlkZXJWYWx1ZSA8PSA1MClcbiAgICB7XG4gICAgICB2YXIgbWluVmFsdWUgPSBkZWZhdWx0VmFsdWUgLyBtaW5EaXY7XG4gICAgICB2YWx1ZSAtPSAoKGRlZmF1bHRWYWx1ZSAtIG1pblZhbHVlKSAvIDUwKSAqICg1MCAtIHNsaWRlclZhbHVlKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIHZhciBtYXhWYWx1ZSA9IGRlZmF1bHRWYWx1ZSAqIG1heE11bDtcbiAgICAgIHZhbHVlICs9ICgobWF4VmFsdWUgLSBkZWZhdWx0VmFsdWUpIC8gNTApICogKHNsaWRlclZhbHVlIC0gNTApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBlbHNlIHtcbiAgICB2YXIgYSwgYjtcblxuICAgIGlmIChzbGlkZXJWYWx1ZSA8PSA1MClcbiAgICB7XG4gICAgICBhID0gOS4wICogZGVmYXVsdFZhbHVlIC8gNTAwLjA7XG4gICAgICBiID0gZGVmYXVsdFZhbHVlIC8gMTAuMDtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIGEgPSA5LjAgKiBkZWZhdWx0VmFsdWUgLyA1MC4wO1xuICAgICAgYiA9IC04ICogZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiAoYSAqIHNsaWRlclZhbHVlICsgYik7XG4gIH1cbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgZmluZHMgYW5kIHJldHVybnMgdGhlIGNlbnRlciBvZiB0aGUgZ2l2ZW4gbm9kZXMsIGFzc3VtaW5nXG4gKiB0aGF0IHRoZSBnaXZlbiBub2RlcyBmb3JtIGEgdHJlZSBpbiB0aGVtc2VsdmVzLlxuICovXG5MYXlvdXQuZmluZENlbnRlck9mVHJlZSA9IGZ1bmN0aW9uIChub2RlcylcbntcbiAgdmFyIGxpc3QgPSBbXTtcbiAgbGlzdCA9IGxpc3QuY29uY2F0KG5vZGVzKTtcblxuICB2YXIgcmVtb3ZlZE5vZGVzID0gW107XG4gIHZhciByZW1haW5pbmdEZWdyZWVzID0gbmV3IEhhc2hNYXAoKTtcbiAgdmFyIGZvdW5kQ2VudGVyID0gZmFsc2U7XG4gIHZhciBjZW50ZXJOb2RlID0gbnVsbDtcblxuICBpZiAobGlzdC5sZW5ndGggPT0gMSB8fCBsaXN0Lmxlbmd0aCA9PSAyKVxuICB7XG4gICAgZm91bmRDZW50ZXIgPSB0cnVlO1xuICAgIGNlbnRlck5vZGUgPSBsaXN0WzBdO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKVxuICB7XG4gICAgdmFyIG5vZGUgPSBsaXN0W2ldO1xuICAgIHZhciBkZWdyZWUgPSBub2RlLmdldE5laWdoYm9yc0xpc3QoKS5zaXplKCk7XG4gICAgcmVtYWluaW5nRGVncmVlcy5wdXQobm9kZSwgbm9kZS5nZXROZWlnaGJvcnNMaXN0KCkuc2l6ZSgpKTtcblxuICAgIGlmIChkZWdyZWUgPT0gMSlcbiAgICB7XG4gICAgICByZW1vdmVkTm9kZXMucHVzaChub2RlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgdGVtcExpc3QgPSBbXTtcbiAgdGVtcExpc3QgPSB0ZW1wTGlzdC5jb25jYXQocmVtb3ZlZE5vZGVzKTtcblxuICB3aGlsZSAoIWZvdW5kQ2VudGVyKVxuICB7XG4gICAgdmFyIHRlbXBMaXN0MiA9IFtdO1xuICAgIHRlbXBMaXN0MiA9IHRlbXBMaXN0Mi5jb25jYXQodGVtcExpc3QpO1xuICAgIHRlbXBMaXN0ID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgdmFyIG5vZGUgPSBsaXN0W2ldO1xuXG4gICAgICB2YXIgaW5kZXggPSBsaXN0LmluZGV4T2Yobm9kZSk7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBuZWlnaGJvdXJzID0gbm9kZS5nZXROZWlnaGJvcnNMaXN0KCk7XG5cbiAgICAgIE9iamVjdC5rZXlzKG5laWdoYm91cnMuc2V0KS5mb3JFYWNoKGZ1bmN0aW9uKGopIHtcbiAgICAgICAgdmFyIG5laWdoYm91ciA9IG5laWdoYm91cnMuc2V0W2pdO1xuICAgICAgICBpZiAocmVtb3ZlZE5vZGVzLmluZGV4T2YobmVpZ2hib3VyKSA8IDApXG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgb3RoZXJEZWdyZWUgPSByZW1haW5pbmdEZWdyZWVzLmdldChuZWlnaGJvdXIpO1xuICAgICAgICAgIHZhciBuZXdEZWdyZWUgPSBvdGhlckRlZ3JlZSAtIDE7XG5cbiAgICAgICAgICBpZiAobmV3RGVncmVlID09IDEpXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGVtcExpc3QucHVzaChuZWlnaGJvdXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlbWFpbmluZ0RlZ3JlZXMucHV0KG5laWdoYm91ciwgbmV3RGVncmVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlZE5vZGVzID0gcmVtb3ZlZE5vZGVzLmNvbmNhdCh0ZW1wTGlzdCk7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT0gMSB8fCBsaXN0Lmxlbmd0aCA9PSAyKVxuICAgIHtcbiAgICAgIGZvdW5kQ2VudGVyID0gdHJ1ZTtcbiAgICAgIGNlbnRlck5vZGUgPSBsaXN0WzBdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjZW50ZXJOb2RlO1xufTtcblxuLyoqXG4gKiBEdXJpbmcgdGhlIGNvYXJzZW5pbmcgcHJvY2VzcywgdGhpcyBsYXlvdXQgbWF5IGJlIHJlZmVyZW5jZWQgYnkgdHdvIGdyYXBoIG1hbmFnZXJzXG4gKiB0aGlzIHNldHRlciBmdW5jdGlvbiBncmFudHMgYWNjZXNzIHRvIGNoYW5nZSB0aGUgY3VycmVudGx5IGJlaW5nIHVzZWQgZ3JhcGggbWFuYWdlclxuICovXG5MYXlvdXQucHJvdG90eXBlLnNldEdyYXBoTWFuYWdlciA9IGZ1bmN0aW9uIChnbSlcbntcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGF5b3V0O1xuIiwiZnVuY3Rpb24gTGF5b3V0Q29uc3RhbnRzKCkge1xufVxuXG4vKipcbiAqIExheW91dCBRdWFsaXR5XG4gKi9cbkxheW91dENvbnN0YW50cy5QUk9PRl9RVUFMSVRZID0gMDtcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX1FVQUxJVFkgPSAxO1xuTGF5b3V0Q29uc3RhbnRzLkRSQUZUX1FVQUxJVFkgPSAyO1xuXG4vKipcbiAqIERlZmF1bHQgcGFyYW1ldGVyc1xuICovXG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEID0gZmFsc2U7XG4vL0xheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMID0gdHJ1ZTtcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMID0gZmFsc2U7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fT05fTEFZT1VUID0gdHJ1ZTtcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VUID0gZmFsc2U7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fUEVSSU9EID0gNTA7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9VTklGT1JNX0xFQUZfTk9ERV9TSVpFUyA9IGZhbHNlO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogR2VuZXJhbCBvdGhlciBjb25zdGFudHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vKlxuICogTWFyZ2lucyBvZiBhIGdyYXBoIHRvIGJlIGFwcGxpZWQgb24gYm91ZGluZyByZWN0YW5nbGUgb2YgaXRzIGNvbnRlbnRzLiBXZVxuICogYXNzdW1lIG1hcmdpbnMgb24gYWxsIGZvdXIgc2lkZXMgdG8gYmUgdW5pZm9ybS5cbiAqL1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBUEhfTUFSR0lOID0gMTU7XG5cbi8qXG4gKiBXaGV0aGVyIHRvIGNvbnNpZGVyIGxhYmVscyBpbiBub2RlIGRpbWVuc2lvbnMgb3Igbm90XG4gKi9cbkxheW91dENvbnN0YW50cy5OT0RFX0RJTUVOU0lPTlNfSU5DTFVERV9MQUJFTFMgPSBmYWxzZTtcblxuLypcbiAqIERlZmF1bHQgZGltZW5zaW9uIG9mIGEgbm9uLWNvbXBvdW5kIG5vZGUuXG4gKi9cbkxheW91dENvbnN0YW50cy5TSU1QTEVfTk9ERV9TSVpFID0gNDA7XG5cbi8qXG4gKiBEZWZhdWx0IGRpbWVuc2lvbiBvZiBhIG5vbi1jb21wb3VuZCBub2RlLlxuICovXG5MYXlvdXRDb25zdGFudHMuU0lNUExFX05PREVfSEFMRl9TSVpFID0gTGF5b3V0Q29uc3RhbnRzLlNJTVBMRV9OT0RFX1NJWkUgLyAyO1xuXG4vKlxuICogRW1wdHkgY29tcG91bmQgbm9kZSBzaXplLiBXaGVuIGEgY29tcG91bmQgbm9kZSBpcyBlbXB0eSwgaXRzIGJvdGhcbiAqIGRpbWVuc2lvbnMgc2hvdWxkIGJlIG9mIHRoaXMgdmFsdWUuXG4gKi9cbkxheW91dENvbnN0YW50cy5FTVBUWV9DT01QT1VORF9OT0RFX1NJWkUgPSA0MDtcblxuLypcbiAqIE1pbmltdW0gbGVuZ3RoIHRoYXQgYW4gZWRnZSBzaG91bGQgdGFrZSBkdXJpbmcgbGF5b3V0XG4gKi9cbkxheW91dENvbnN0YW50cy5NSU5fRURHRV9MRU5HVEggPSAxO1xuXG4vKlxuICogV29ybGQgYm91bmRhcmllcyB0aGF0IGxheW91dCBvcGVyYXRlcyBvblxuICovXG5MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkgPSAxMDAwMDAwO1xuXG4vKlxuICogV29ybGQgYm91bmRhcmllcyB0aGF0IHJhbmRvbSBwb3NpdGlvbmluZyBjYW4gYmUgcGVyZm9ybWVkIHdpdGhcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlkgPSBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkgLyAxMDAwO1xuXG4vKlxuICogQ29vcmRpbmF0ZXMgb2YgdGhlIHdvcmxkIGNlbnRlclxuICovXG5MYXlvdXRDb25zdGFudHMuV09STERfQ0VOVEVSX1ggPSAxMjAwO1xuTGF5b3V0Q29uc3RhbnRzLldPUkxEX0NFTlRFUl9ZID0gOTAwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExheW91dENvbnN0YW50cztcbiIsImNvbnN0IG5vZGVGcm9tID0gdmFsdWUgPT4gKHsgdmFsdWUsIG5leHQ6IG51bGwsIHByZXY6IG51bGwgfSk7XG5cbmNvbnN0IGFkZCA9ICggcHJldiwgbm9kZSwgbmV4dCwgbGlzdCApID0+IHtcbiAgaWYoIHByZXYgIT09IG51bGwgKXtcbiAgICBwcmV2Lm5leHQgPSBub2RlO1xuICB9IGVsc2Uge1xuICAgIGxpc3QuaGVhZCA9IG5vZGU7XG4gIH1cblxuICBpZiggbmV4dCAhPT0gbnVsbCApe1xuICAgIG5leHQucHJldiA9IG5vZGU7XG4gIH0gZWxzZSB7XG4gICAgbGlzdC50YWlsID0gbm9kZTtcbiAgfVxuXG4gIG5vZGUucHJldiA9IHByZXY7XG4gIG5vZGUubmV4dCA9IG5leHQ7XG5cbiAgbGlzdC5sZW5ndGgrKztcblxuICByZXR1cm4gbm9kZTtcbn07XG5cbmNvbnN0IHJlbW92ZSA9ICggbm9kZSwgbGlzdCApID0+IHtcbiAgbGV0IHsgcHJldiwgbmV4dCB9ID0gbm9kZTtcblxuICBpZiggcHJldiAhPT0gbnVsbCApe1xuICAgIHByZXYubmV4dCA9IG5leHQ7XG4gIH0gZWxzZSB7XG4gICAgbGlzdC5oZWFkID0gbmV4dDtcbiAgfVxuXG4gIGlmKCBuZXh0ICE9PSBudWxsICl7XG4gICAgbmV4dC5wcmV2ID0gcHJldjtcbiAgfSBlbHNlIHtcbiAgICBsaXN0LnRhaWwgPSBwcmV2O1xuICB9XG5cbiAgbm9kZS5wcmV2ID0gbm9kZS5uZXh0ID0gbnVsbDtcblxuICBsaXN0Lmxlbmd0aC0tO1xuXG4gIHJldHVybiBub2RlO1xufTtcblxuY2xhc3MgTGlua2VkTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCB2YWxzICl7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuaGVhZCA9IG51bGw7XG4gICAgdGhpcy50YWlsID0gbnVsbDtcblxuICAgIGlmKCB2YWxzICE9IG51bGwgKXtcbiAgICAgIHZhbHMuZm9yRWFjaCggdiA9PiB0aGlzLnB1c2godikgKTtcbiAgICB9XG4gIH1cblxuICBzaXplKCl7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xuICB9XG5cbiAgaW5zZXJ0QmVmb3JlKCB2YWwsIG90aGVyTm9kZSApe1xuICAgIHJldHVybiBhZGQoIG90aGVyTm9kZS5wcmV2LCBub2RlRnJvbSh2YWwpLCBvdGhlck5vZGUsIHRoaXMgKTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKCB2YWwsIG90aGVyTm9kZSApe1xuICAgIHJldHVybiBhZGQoIG90aGVyTm9kZSwgbm9kZUZyb20odmFsKSwgb3RoZXJOb2RlLm5leHQsIHRoaXMgKTtcbiAgfVxuXG4gIGluc2VydE5vZGVCZWZvcmUoIG5ld05vZGUsIG90aGVyTm9kZSApe1xuICAgIHJldHVybiBhZGQoIG90aGVyTm9kZS5wcmV2LCBuZXdOb2RlLCBvdGhlck5vZGUsIHRoaXMgKTtcbiAgfVxuXG4gIGluc2VydE5vZGVBZnRlciggbmV3Tm9kZSwgb3RoZXJOb2RlICl7XG4gICAgcmV0dXJuIGFkZCggb3RoZXJOb2RlLCBuZXdOb2RlLCBvdGhlck5vZGUubmV4dCwgdGhpcyApO1xuICB9XG5cbiAgcHVzaCggdmFsICl7XG4gICAgcmV0dXJuIGFkZCggdGhpcy50YWlsLCBub2RlRnJvbSh2YWwpLCBudWxsLCB0aGlzICk7XG4gIH1cblxuICB1bnNoaWZ0KCB2YWwgKXtcbiAgICByZXR1cm4gYWRkKCBudWxsLCBub2RlRnJvbSh2YWwpLCB0aGlzLmhlYWQsIHRoaXMgKTtcbiAgfVxuXG4gIHJlbW92ZSggbm9kZSApe1xuICAgIHJldHVybiByZW1vdmUoIG5vZGUsIHRoaXMgKTtcbiAgfVxuXG4gIHBvcCgpe1xuICAgIHJldHVybiByZW1vdmUoIHRoaXMudGFpbCwgdGhpcyApLnZhbHVlO1xuICB9XG5cbiAgcG9wTm9kZSgpe1xuICAgICByZXR1cm4gcmVtb3ZlKCB0aGlzLnRhaWwsIHRoaXMgKTtcbiAgfVxuXG4gIHNoaWZ0KCl7XG4gICAgcmV0dXJuIHJlbW92ZSggdGhpcy5oZWFkLCB0aGlzICkudmFsdWU7XG4gIH1cblxuICBzaGlmdE5vZGUoKXtcbiAgICByZXR1cm4gcmVtb3ZlKCB0aGlzLmhlYWQsIHRoaXMgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmtlZExpc3Q7XG4iLCIvKlxuICpUaGlzIGNsYXNzIGlzIHRoZSBqYXZhc2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBQb2ludC5qYXZhIGNsYXNzIGluIGpka1xuICovXG5mdW5jdGlvbiBQb2ludCh4LCB5LCBwKSB7XG4gIHRoaXMueCA9IG51bGw7XG4gIHRoaXMueSA9IG51bGw7XG4gIGlmICh4ID09IG51bGwgJiYgeSA9PSBudWxsICYmIHAgPT0gbnVsbCkge1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgeCA9PSAnbnVtYmVyJyAmJiB0eXBlb2YgeSA9PSAnbnVtYmVyJyAmJiBwID09IG51bGwpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cbiAgZWxzZSBpZiAoeC5jb25zdHJ1Y3Rvci5uYW1lID09ICdQb2ludCcgJiYgeSA9PSBudWxsICYmIHAgPT0gbnVsbCkge1xuICAgIHAgPSB4O1xuICAgIHRoaXMueCA9IHAueDtcbiAgICB0aGlzLnkgPSBwLnk7XG4gIH1cbn1cblxuUG9pbnQucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLng7XG59XG5cblBvaW50LnByb3RvdHlwZS5nZXRZID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy55O1xufVxuXG5Qb2ludC5wcm90b3R5cGUuZ2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpO1xufVxuXG5Qb2ludC5wcm90b3R5cGUuc2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoeCwgeSwgcCkge1xuICBpZiAoeC5jb25zdHJ1Y3Rvci5uYW1lID09ICdQb2ludCcgJiYgeSA9PSBudWxsICYmIHAgPT0gbnVsbCkge1xuICAgIHAgPSB4O1xuICAgIHRoaXMuc2V0TG9jYXRpb24ocC54LCBwLnkpO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiB4ID09ICdudW1iZXInICYmIHR5cGVvZiB5ID09ICdudW1iZXInICYmIHAgPT0gbnVsbCkge1xuICAgIC8vaWYgYm90aCBwYXJhbWV0ZXJzIGFyZSBpbnRlZ2VyIGp1c3QgbW92ZSAoeCx5KSBsb2NhdGlvblxuICAgIGlmIChwYXJzZUludCh4KSA9PSB4ICYmIHBhcnNlSW50KHkpID09IHkpIHtcbiAgICAgIHRoaXMubW92ZSh4LCB5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnggPSBNYXRoLmZsb29yKHggKyAwLjUpO1xuICAgICAgdGhpcy55ID0gTWF0aC5mbG9vcih5ICsgMC41KTtcbiAgICB9XG4gIH1cbn1cblxuUG9pbnQucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoeCwgeSkge1xuICB0aGlzLnggPSB4O1xuICB0aGlzLnkgPSB5O1xufVxuXG5Qb2ludC5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKGR4LCBkeSkge1xuICB0aGlzLnggKz0gZHg7XG4gIHRoaXMueSArPSBkeTtcbn1cblxuUG9pbnQucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKG9iai5jb25zdHJ1Y3Rvci5uYW1lID09IFwiUG9pbnRcIikge1xuICAgIHZhciBwdCA9IG9iajtcbiAgICByZXR1cm4gKHRoaXMueCA9PSBwdC54KSAmJiAodGhpcy55ID09IHB0LnkpO1xuICB9XG4gIHJldHVybiB0aGlzID09IG9iajtcbn1cblxuUG9pbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IFBvaW50KCkuY29uc3RydWN0b3IubmFtZSArIFwiW3g9XCIgKyB0aGlzLnggKyBcIix5PVwiICsgdGhpcy55ICsgXCJdXCI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9pbnQ7XG4iLCJmdW5jdGlvbiBQb2ludEQoeCwgeSkge1xuICBpZiAoeCA9PSBudWxsICYmIHkgPT0gbnVsbCkge1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cbn1cblxuUG9pbnRELnByb3RvdHlwZS5nZXRYID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMueDtcbn07XG5cblBvaW50RC5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnk7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLnNldFggPSBmdW5jdGlvbiAoeClcbntcbiAgdGhpcy54ID0geDtcbn07XG5cblBvaW50RC5wcm90b3R5cGUuc2V0WSA9IGZ1bmN0aW9uICh5KVxue1xuICB0aGlzLnkgPSB5O1xufTtcblxuUG9pbnRELnByb3RvdHlwZS5nZXREaWZmZXJlbmNlID0gZnVuY3Rpb24gKHB0KVxue1xuICByZXR1cm4gbmV3IERpbWVuc2lvbkQodGhpcy54IC0gcHQueCwgdGhpcy55IC0gcHQueSk7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLmdldENvcHkgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gbmV3IFBvaW50RCh0aGlzLngsIHRoaXMueSk7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uIChkaW0pXG57XG4gIHRoaXMueCArPSBkaW0ud2lkdGg7XG4gIHRoaXMueSArPSBkaW0uaGVpZ2h0O1xuICByZXR1cm4gdGhpcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUG9pbnREO1xuIiwiZnVuY3Rpb24gUmFuZG9tU2VlZCgpIHtcbn1cblJhbmRvbVNlZWQuc2VlZCA9IDE7XG5SYW5kb21TZWVkLnggPSAwO1xuXG5SYW5kb21TZWVkLm5leHREb3VibGUgPSBmdW5jdGlvbiAoKSB7XG4gIFJhbmRvbVNlZWQueCA9IE1hdGguc2luKFJhbmRvbVNlZWQuc2VlZCsrKSAqIDEwMDAwO1xuICByZXR1cm4gUmFuZG9tU2VlZC54IC0gTWF0aC5mbG9vcihSYW5kb21TZWVkLngpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSYW5kb21TZWVkO1xuIiwiZnVuY3Rpb24gUmVjdGFuZ2xlRCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHRoaXMueCA9IDA7XG4gIHRoaXMueSA9IDA7XG4gIHRoaXMud2lkdGggPSAwO1xuICB0aGlzLmhlaWdodCA9IDA7XG5cbiAgaWYgKHggIT0gbnVsbCAmJiB5ICE9IG51bGwgJiYgd2lkdGggIT0gbnVsbCAmJiBoZWlnaHQgIT0gbnVsbCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cbn1cblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0WCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLng7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5zZXRYID0gZnVuY3Rpb24gKHgpXG57XG4gIHRoaXMueCA9IHg7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMueTtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLnNldFkgPSBmdW5jdGlvbiAoeSlcbntcbiAgdGhpcy55ID0geTtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMud2lkdGg7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5zZXRXaWR0aCA9IGZ1bmN0aW9uICh3aWR0aClcbntcbiAgdGhpcy53aWR0aCA9IHdpZHRoO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGhlaWdodClcbntcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRSaWdodCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0Qm90dG9tID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuaW50ZXJzZWN0cyA9IGZ1bmN0aW9uIChhKVxue1xuICBpZiAodGhpcy5nZXRSaWdodCgpIDwgYS54KVxuICB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRoaXMuZ2V0Qm90dG9tKCkgPCBhLnkpXG4gIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoYS5nZXRSaWdodCgpIDwgdGhpcy54KVxuICB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGEuZ2V0Qm90dG9tKCkgPCB0aGlzLnkpXG4gIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldENlbnRlclggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aCAvIDI7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRNaW5YID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuZ2V0WCgpO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0TWF4WCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmdldFgoKSArIHRoaXMud2lkdGg7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRDZW50ZXJZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMjtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldE1pblkgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5nZXRZKCk7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRNYXhZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuZ2V0WSgpICsgdGhpcy5oZWlnaHQ7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRXaWR0aEhhbGYgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy53aWR0aCAvIDI7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRIZWlnaHRIYWxmID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuaGVpZ2h0IC8gMjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVjdGFuZ2xlRDtcbiIsInZhciBQb2ludEQgPSByZXF1aXJlKCcuL1BvaW50RCcpO1xuXG5mdW5jdGlvbiBUcmFuc2Zvcm0oeCwgeSkge1xuICB0aGlzLmx3b3JsZE9yZ1ggPSAwLjA7XG4gIHRoaXMubHdvcmxkT3JnWSA9IDAuMDtcbiAgdGhpcy5sZGV2aWNlT3JnWCA9IDAuMDtcbiAgdGhpcy5sZGV2aWNlT3JnWSA9IDAuMDtcbiAgdGhpcy5sd29ybGRFeHRYID0gMS4wO1xuICB0aGlzLmx3b3JsZEV4dFkgPSAxLjA7XG4gIHRoaXMubGRldmljZUV4dFggPSAxLjA7XG4gIHRoaXMubGRldmljZUV4dFkgPSAxLjA7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRPcmdYID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubHdvcmxkT3JnWDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZE9yZ1ggPSBmdW5jdGlvbiAod294KVxue1xuICB0aGlzLmx3b3JsZE9yZ1ggPSB3b3g7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRPcmdZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubHdvcmxkT3JnWTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZE9yZ1kgPSBmdW5jdGlvbiAod295KVxue1xuICB0aGlzLmx3b3JsZE9yZ1kgPSB3b3k7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRFeHRYID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubHdvcmxkRXh0WDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZEV4dFggPSBmdW5jdGlvbiAod2V4KVxue1xuICB0aGlzLmx3b3JsZEV4dFggPSB3ZXg7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRFeHRZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubHdvcmxkRXh0WTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZEV4dFkgPSBmdW5jdGlvbiAod2V5KVxue1xuICB0aGlzLmx3b3JsZEV4dFkgPSB3ZXk7XG59XG5cbi8qIERldmljZSByZWxhdGVkICovXG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0RGV2aWNlT3JnWCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmxkZXZpY2VPcmdYO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZU9yZ1ggPSBmdW5jdGlvbiAoZG94KVxue1xuICB0aGlzLmxkZXZpY2VPcmdYID0gZG94O1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldERldmljZU9yZ1kgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sZGV2aWNlT3JnWTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXREZXZpY2VPcmdZID0gZnVuY3Rpb24gKGRveSlcbntcbiAgdGhpcy5sZGV2aWNlT3JnWSA9IGRveTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VFeHRYID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubGRldmljZUV4dFg7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0RGV2aWNlRXh0WCA9IGZ1bmN0aW9uIChkZXgpXG57XG4gIHRoaXMubGRldmljZUV4dFggPSBkZXg7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0RGV2aWNlRXh0WSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmxkZXZpY2VFeHRZO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZUV4dFkgPSBmdW5jdGlvbiAoZGV5KVxue1xuICB0aGlzLmxkZXZpY2VFeHRZID0gZGV5O1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnRyYW5zZm9ybVggPSBmdW5jdGlvbiAoeClcbntcbiAgdmFyIHhEZXZpY2UgPSAwLjA7XG4gIHZhciB3b3JsZEV4dFggPSB0aGlzLmx3b3JsZEV4dFg7XG4gIGlmICh3b3JsZEV4dFggIT0gMC4wKVxuICB7XG4gICAgeERldmljZSA9IHRoaXMubGRldmljZU9yZ1ggK1xuICAgICAgICAgICAgKCh4IC0gdGhpcy5sd29ybGRPcmdYKSAqIHRoaXMubGRldmljZUV4dFggLyB3b3JsZEV4dFgpO1xuICB9XG5cbiAgcmV0dXJuIHhEZXZpY2U7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUudHJhbnNmb3JtWSA9IGZ1bmN0aW9uICh5KVxue1xuICB2YXIgeURldmljZSA9IDAuMDtcbiAgdmFyIHdvcmxkRXh0WSA9IHRoaXMubHdvcmxkRXh0WTtcbiAgaWYgKHdvcmxkRXh0WSAhPSAwLjApXG4gIHtcbiAgICB5RGV2aWNlID0gdGhpcy5sZGV2aWNlT3JnWSArXG4gICAgICAgICAgICAoKHkgLSB0aGlzLmx3b3JsZE9yZ1kpICogdGhpcy5sZGV2aWNlRXh0WSAvIHdvcmxkRXh0WSk7XG4gIH1cblxuXG4gIHJldHVybiB5RGV2aWNlO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmludmVyc2VUcmFuc2Zvcm1YID0gZnVuY3Rpb24gKHgpXG57XG4gIHZhciB4V29ybGQgPSAwLjA7XG4gIHZhciBkZXZpY2VFeHRYID0gdGhpcy5sZGV2aWNlRXh0WDtcbiAgaWYgKGRldmljZUV4dFggIT0gMC4wKVxuICB7XG4gICAgeFdvcmxkID0gdGhpcy5sd29ybGRPcmdYICtcbiAgICAgICAgICAgICgoeCAtIHRoaXMubGRldmljZU9yZ1gpICogdGhpcy5sd29ybGRFeHRYIC8gZGV2aWNlRXh0WCk7XG4gIH1cblxuXG4gIHJldHVybiB4V29ybGQ7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuaW52ZXJzZVRyYW5zZm9ybVkgPSBmdW5jdGlvbiAoeSlcbntcbiAgdmFyIHlXb3JsZCA9IDAuMDtcbiAgdmFyIGRldmljZUV4dFkgPSB0aGlzLmxkZXZpY2VFeHRZO1xuICBpZiAoZGV2aWNlRXh0WSAhPSAwLjApXG4gIHtcbiAgICB5V29ybGQgPSB0aGlzLmx3b3JsZE9yZ1kgK1xuICAgICAgICAgICAgKCh5IC0gdGhpcy5sZGV2aWNlT3JnWSkgKiB0aGlzLmx3b3JsZEV4dFkgLyBkZXZpY2VFeHRZKTtcbiAgfVxuICByZXR1cm4geVdvcmxkO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmludmVyc2VUcmFuc2Zvcm1Qb2ludCA9IGZ1bmN0aW9uIChpblBvaW50KVxue1xuICB2YXIgb3V0UG9pbnQgPVxuICAgICAgICAgIG5ldyBQb2ludEQodGhpcy5pbnZlcnNlVHJhbnNmb3JtWChpblBvaW50LngpLFxuICAgICAgICAgICAgICAgICAgdGhpcy5pbnZlcnNlVHJhbnNmb3JtWShpblBvaW50LnkpKTtcbiAgcmV0dXJuIG91dFBvaW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zZm9ybTtcbiIsImZ1bmN0aW9uIFVuaXF1ZUlER2VuZXJldG9yKCkge1xufVxuXG5VbmlxdWVJREdlbmVyZXRvci5sYXN0SUQgPSAwO1xuXG5VbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKFVuaXF1ZUlER2VuZXJldG9yLmlzUHJpbWl0aXZlKG9iaikpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIGlmIChvYmoudW5pcXVlSUQgIT0gbnVsbCkge1xuICAgIHJldHVybiBvYmoudW5pcXVlSUQ7XG4gIH1cbiAgb2JqLnVuaXF1ZUlEID0gVW5pcXVlSURHZW5lcmV0b3IuZ2V0U3RyaW5nKCk7XG4gIFVuaXF1ZUlER2VuZXJldG9yLmxhc3RJRCsrO1xuICByZXR1cm4gb2JqLnVuaXF1ZUlEO1xufVxuXG5VbmlxdWVJREdlbmVyZXRvci5nZXRTdHJpbmcgPSBmdW5jdGlvbiAoaWQpIHtcbiAgaWYgKGlkID09IG51bGwpXG4gICAgaWQgPSBVbmlxdWVJREdlbmVyZXRvci5sYXN0SUQ7XG4gIHJldHVybiBcIk9iamVjdCNcIiArIGlkICsgXCJcIjtcbn1cblxuVW5pcXVlSURHZW5lcmV0b3IuaXNQcmltaXRpdmUgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGFyZztcbiAgcmV0dXJuIGFyZyA9PSBudWxsIHx8ICh0eXBlICE9IFwib2JqZWN0XCIgJiYgdHlwZSAhPSBcImZ1bmN0aW9uXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVuaXF1ZUlER2VuZXJldG9yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRGltZW5zaW9uRCA9IHJlcXVpcmUoJy4vRGltZW5zaW9uRCcpO1xudmFyIEhhc2hNYXAgPSByZXF1aXJlKCcuL0hhc2hNYXAnKTtcbnZhciBIYXNoU2V0ID0gcmVxdWlyZSgnLi9IYXNoU2V0Jyk7XG52YXIgSUdlb21ldHJ5ID0gcmVxdWlyZSgnLi9JR2VvbWV0cnknKTtcbnZhciBJTWF0aCA9IHJlcXVpcmUoJy4vSU1hdGgnKTtcbnZhciBJbnRlZ2VyID0gcmVxdWlyZSgnLi9JbnRlZ2VyJyk7XG52YXIgUG9pbnQgPSByZXF1aXJlKCcuL1BvaW50Jyk7XG52YXIgUG9pbnREID0gcmVxdWlyZSgnLi9Qb2ludEQnKTtcbnZhciBSYW5kb21TZWVkID0gcmVxdWlyZSgnLi9SYW5kb21TZWVkJyk7XG52YXIgUmVjdGFuZ2xlRCA9IHJlcXVpcmUoJy4vUmVjdGFuZ2xlRCcpO1xudmFyIFRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vVHJhbnNmb3JtJyk7XG52YXIgVW5pcXVlSURHZW5lcmV0b3IgPSByZXF1aXJlKCcuL1VuaXF1ZUlER2VuZXJldG9yJyk7XG52YXIgTEdyYXBoT2JqZWN0ID0gcmVxdWlyZSgnLi9MR3JhcGhPYmplY3QnKTtcbnZhciBMR3JhcGggPSByZXF1aXJlKCcuL0xHcmFwaCcpO1xudmFyIExFZGdlID0gcmVxdWlyZSgnLi9MRWRnZScpO1xudmFyIExHcmFwaE1hbmFnZXIgPSByZXF1aXJlKCcuL0xHcmFwaE1hbmFnZXInKTtcbnZhciBMTm9kZSA9IHJlcXVpcmUoJy4vTE5vZGUnKTtcbnZhciBMYXlvdXQgPSByZXF1aXJlKCcuL0xheW91dCcpO1xudmFyIExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vTGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgRkRMYXlvdXQgPSByZXF1aXJlKCcuL0ZETGF5b3V0Jyk7XG52YXIgRkRMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0ZETGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgRkRMYXlvdXRFZGdlID0gcmVxdWlyZSgnLi9GRExheW91dEVkZ2UnKTtcbnZhciBGRExheW91dE5vZGUgPSByZXF1aXJlKCcuL0ZETGF5b3V0Tm9kZScpO1xudmFyIENvU0VDb25zdGFudHMgPSByZXF1aXJlKCcuL0NvU0VDb25zdGFudHMnKTtcbnZhciBDb1NFRWRnZSA9IHJlcXVpcmUoJy4vQ29TRUVkZ2UnKTtcbnZhciBDb1NFR3JhcGggPSByZXF1aXJlKCcuL0NvU0VHcmFwaCcpO1xudmFyIENvU0VHcmFwaE1hbmFnZXIgPSByZXF1aXJlKCcuL0NvU0VHcmFwaE1hbmFnZXInKTtcbnZhciBDb1NFTGF5b3V0ID0gcmVxdWlyZSgnLi9Db1NFTGF5b3V0Jyk7XG52YXIgQ29TRU5vZGUgPSByZXF1aXJlKCcuL0NvU0VOb2RlJyk7XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgLy8gQ2FsbGVkIG9uIGBsYXlvdXRyZWFkeWBcbiAgcmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgfSxcbiAgLy8gQ2FsbGVkIG9uIGBsYXlvdXRzdG9wYFxuICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gIH0sXG4gIC8vIGluY2x1ZGUgbGFiZWxzIGluIG5vZGUgZGltZW5zaW9uc1xuICBub2RlRGltZW5zaW9uc0luY2x1ZGVMYWJlbHM6IGZhbHNlLFxuICAvLyBudW1iZXIgb2YgdGlja3MgcGVyIGZyYW1lOyBoaWdoZXIgaXMgZmFzdGVyIGJ1dCBtb3JlIGplcmt5XG4gIHJlZnJlc2g6IDMwLFxuICAvLyBXaGV0aGVyIHRvIGZpdCB0aGUgbmV0d29yayB2aWV3IGFmdGVyIHdoZW4gZG9uZVxuICBmaXQ6IHRydWUsXG4gIC8vIFBhZGRpbmcgb24gZml0XG4gIHBhZGRpbmc6IDEwLFxuICAvLyBXaGV0aGVyIHRvIGVuYWJsZSBpbmNyZW1lbnRhbCBtb2RlXG4gIHJhbmRvbWl6ZTogdHJ1ZSxcbiAgLy8gTm9kZSByZXB1bHNpb24gKG5vbiBvdmVybGFwcGluZykgbXVsdGlwbGllclxuICBub2RlUmVwdWxzaW9uOiA0NTAwLFxuICAvLyBJZGVhbCBlZGdlIChub24gbmVzdGVkKSBsZW5ndGhcbiAgaWRlYWxFZGdlTGVuZ3RoOiA1MCxcbiAgLy8gRGl2aXNvciB0byBjb21wdXRlIGVkZ2UgZm9yY2VzXG4gIGVkZ2VFbGFzdGljaXR5OiAwLjQ1LFxuICAvLyBOZXN0aW5nIGZhY3RvciAobXVsdGlwbGllcikgdG8gY29tcHV0ZSBpZGVhbCBlZGdlIGxlbmd0aCBmb3IgbmVzdGVkIGVkZ2VzXG4gIG5lc3RpbmdGYWN0b3I6IDAuMSxcbiAgLy8gR3Jhdml0eSBmb3JjZSAoY29uc3RhbnQpXG4gIGdyYXZpdHk6IDAuMjUsXG4gIC8vIE1heGltdW0gbnVtYmVyIG9mIGl0ZXJhdGlvbnMgdG8gcGVyZm9ybVxuICBudW1JdGVyOiAyNTAwLFxuICAvLyBGb3IgZW5hYmxpbmcgdGlsaW5nXG4gIHRpbGU6IHRydWUsXG4gIC8vIFR5cGUgb2YgbGF5b3V0IGFuaW1hdGlvbi4gVGhlIG9wdGlvbiBzZXQgaXMgeydkdXJpbmcnLCAnZW5kJywgZmFsc2V9XG4gIGFuaW1hdGU6ICdlbmQnLFxuICAvLyBEdXJhdGlvbiBmb3IgYW5pbWF0ZTplbmRcbiAgYW5pbWF0aW9uRHVyYXRpb246IDUwMCxcbiAgLy8gUmVwcmVzZW50cyB0aGUgYW1vdW50IG9mIHRoZSB2ZXJ0aWNhbCBzcGFjZSB0byBwdXQgYmV0d2VlbiB0aGUgemVybyBkZWdyZWUgbWVtYmVycyBkdXJpbmcgdGhlIHRpbGluZyBvcGVyYXRpb24oY2FuIGFsc28gYmUgYSBmdW5jdGlvbilcbiAgdGlsaW5nUGFkZGluZ1ZlcnRpY2FsOiAxMCxcbiAgLy8gUmVwcmVzZW50cyB0aGUgYW1vdW50IG9mIHRoZSBob3Jpem9udGFsIHNwYWNlIHRvIHB1dCBiZXR3ZWVuIHRoZSB6ZXJvIGRlZ3JlZSBtZW1iZXJzIGR1cmluZyB0aGUgdGlsaW5nIG9wZXJhdGlvbihjYW4gYWxzbyBiZSBhIGZ1bmN0aW9uKVxuICB0aWxpbmdQYWRkaW5nSG9yaXpvbnRhbDogMTAsXG4gIC8vIEdyYXZpdHkgcmFuZ2UgKGNvbnN0YW50KSBmb3IgY29tcG91bmRzXG4gIGdyYXZpdHlSYW5nZUNvbXBvdW5kOiAxLjUsXG4gIC8vIEdyYXZpdHkgZm9yY2UgKGNvbnN0YW50KSBmb3IgY29tcG91bmRzXG4gIGdyYXZpdHlDb21wb3VuZDogMS4wLFxuICAvLyBHcmF2aXR5IHJhbmdlIChjb25zdGFudClcbiAgZ3Jhdml0eVJhbmdlOiAzLjgsXG4gIC8vIEluaXRpYWwgY29vbGluZyBmYWN0b3IgZm9yIGluY3JlbWVudGFsIGxheW91dFxuICBpbml0aWFsRW5lcmd5T25JbmNyZW1lbnRhbDogMC41XG59O1xuXG5mdW5jdGlvbiBleHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpIHtcbiAgdmFyIG9iaiA9IHt9O1xuXG4gIGZvciAodmFyIGkgaW4gZGVmYXVsdHMpIHtcbiAgICBvYmpbaV0gPSBkZWZhdWx0c1tpXTtcbiAgfVxuXG4gIGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xuICAgIG9ialtpXSA9IG9wdGlvbnNbaV07XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuZnVuY3Rpb24gX0NvU0VMYXlvdXQoX29wdGlvbnMpIHtcbiAgdGhpcy5vcHRpb25zID0gZXh0ZW5kKGRlZmF1bHRzLCBfb3B0aW9ucyk7XG4gIGdldFVzZXJPcHRpb25zKHRoaXMub3B0aW9ucyk7XG59XG5cbnZhciBnZXRVc2VyT3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLm5vZGVSZXB1bHNpb24gIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfUkVQVUxTSU9OX1NUUkVOR1RIID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEggPSBvcHRpb25zLm5vZGVSZXB1bHNpb247XG4gIGlmIChvcHRpb25zLmlkZWFsRWRnZUxlbmd0aCAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggPSBvcHRpb25zLmlkZWFsRWRnZUxlbmd0aDtcbiAgaWYgKG9wdGlvbnMuZWRnZUVsYXN0aWNpdHkgIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfU1BSSU5HX1NUUkVOR1RIID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9TUFJJTkdfU1RSRU5HVEggPSBvcHRpb25zLmVkZ2VFbGFzdGljaXR5O1xuICBpZiAob3B0aW9ucy5uZXN0aW5nRmFjdG9yICE9IG51bGwpXG4gICAgQ29TRUNvbnN0YW50cy5QRVJfTEVWRUxfSURFQUxfRURHRV9MRU5HVEhfRkFDVE9SID0gRkRMYXlvdXRDb25zdGFudHMuUEVSX0xFVkVMX0lERUFMX0VER0VfTEVOR1RIX0ZBQ1RPUiA9IG9wdGlvbnMubmVzdGluZ0ZhY3RvcjtcbiAgaWYgKG9wdGlvbnMuZ3Jhdml0eSAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1NUUkVOR1RIID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1NUUkVOR1RIID0gb3B0aW9ucy5ncmF2aXR5O1xuICBpZiAob3B0aW9ucy5udW1JdGVyICE9IG51bGwpXG4gICAgQ29TRUNvbnN0YW50cy5NQVhfSVRFUkFUSU9OUyA9IEZETGF5b3V0Q29uc3RhbnRzLk1BWF9JVEVSQVRJT05TID0gb3B0aW9ucy5udW1JdGVyO1xuICBpZiAob3B0aW9ucy5ncmF2aXR5UmFuZ2UgIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9SQU5HRV9GQUNUT1IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SID0gb3B0aW9ucy5ncmF2aXR5UmFuZ2U7XG4gIGlmKG9wdGlvbnMuZ3Jhdml0eUNvbXBvdW5kICE9IG51bGwpXG4gICAgQ29TRUNvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfU1RSRU5HVEggPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfU1RSRU5HVEggPSBvcHRpb25zLmdyYXZpdHlDb21wb3VuZDtcbiAgaWYob3B0aW9ucy5ncmF2aXR5UmFuZ2VDb21wb3VuZCAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1IgPSBvcHRpb25zLmdyYXZpdHlSYW5nZUNvbXBvdW5kO1xuICBpZiAob3B0aW9ucy5pbml0aWFsRW5lcmd5T25JbmNyZW1lbnRhbCAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUwgPSBvcHRpb25zLmluaXRpYWxFbmVyZ3lPbkluY3JlbWVudGFsO1xuXG4gIENvU0VDb25zdGFudHMuTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTID0gRkRMYXlvdXRDb25zdGFudHMuTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTID0gTGF5b3V0Q29uc3RhbnRzLk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyA9IG9wdGlvbnMubm9kZURpbWVuc2lvbnNJbmNsdWRlTGFiZWxzO1xuICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUwgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUwgPVxuICAgICAgICAgICEob3B0aW9ucy5yYW5kb21pemUpO1xuICBDb1NFQ29uc3RhbnRzLkFOSU1BVEUgPSBGRExheW91dENvbnN0YW50cy5BTklNQVRFID0gTGF5b3V0Q29uc3RhbnRzLkFOSU1BVEUgPSBvcHRpb25zLmFuaW1hdGU7XG4gIENvU0VDb25zdGFudHMuVElMRSA9IG9wdGlvbnMudGlsZTtcbiAgQ29TRUNvbnN0YW50cy5USUxJTkdfUEFERElOR19WRVJUSUNBTCA9IFxuICAgICAgICAgIHR5cGVvZiBvcHRpb25zLnRpbGluZ1BhZGRpbmdWZXJ0aWNhbCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMudGlsaW5nUGFkZGluZ1ZlcnRpY2FsLmNhbGwoKSA6IG9wdGlvbnMudGlsaW5nUGFkZGluZ1ZlcnRpY2FsO1xuICBDb1NFQ29uc3RhbnRzLlRJTElOR19QQURESU5HX0hPUklaT05UQUwgPSBcbiAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy50aWxpbmdQYWRkaW5nSG9yaXpvbnRhbCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMudGlsaW5nUGFkZGluZ0hvcml6b250YWwuY2FsbCgpIDogb3B0aW9ucy50aWxpbmdQYWRkaW5nSG9yaXpvbnRhbDtcbn07XG5cbl9Db1NFTGF5b3V0LnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciByZWFkeTtcbiAgdmFyIGZyYW1lSWQ7XG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICB2YXIgaWRUb0xOb2RlID0gdGhpcy5pZFRvTE5vZGUgPSB7fTtcbiAgdmFyIGxheW91dCA9IHRoaXMubGF5b3V0ID0gbmV3IENvU0VMYXlvdXQoKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBcbiAgc2VsZi5zdG9wcGVkID0gZmFsc2U7XG5cbiAgdGhpcy5jeSA9IHRoaXMub3B0aW9ucy5jeTtcblxuICB0aGlzLmN5LnRyaWdnZXIoeyB0eXBlOiAnbGF5b3V0c3RhcnQnLCBsYXlvdXQ6IHRoaXMgfSk7XG5cbiAgdmFyIGdtID0gbGF5b3V0Lm5ld0dyYXBoTWFuYWdlcigpO1xuICB0aGlzLmdtID0gZ207XG5cbiAgdmFyIG5vZGVzID0gdGhpcy5vcHRpb25zLmVsZXMubm9kZXMoKTtcbiAgdmFyIGVkZ2VzID0gdGhpcy5vcHRpb25zLmVsZXMuZWRnZXMoKTtcblxuICB0aGlzLnJvb3QgPSBnbS5hZGRSb290KCk7XG4gIHRoaXMucHJvY2Vzc0NoaWxkcmVuTGlzdCh0aGlzLnJvb3QsIHRoaXMuZ2V0VG9wTW9zdE5vZGVzKG5vZGVzKSwgbGF5b3V0KTtcblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWRnZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZWRnZSA9IGVkZ2VzW2ldO1xuICAgIHZhciBzb3VyY2VOb2RlID0gdGhpcy5pZFRvTE5vZGVbZWRnZS5kYXRhKFwic291cmNlXCIpXTtcbiAgICB2YXIgdGFyZ2V0Tm9kZSA9IHRoaXMuaWRUb0xOb2RlW2VkZ2UuZGF0YShcInRhcmdldFwiKV07XG4gICAgaWYoc291cmNlTm9kZS5nZXRFZGdlc0JldHdlZW4odGFyZ2V0Tm9kZSkubGVuZ3RoID09IDApe1xuICAgICAgdmFyIGUxID0gZ20uYWRkKGxheW91dC5uZXdFZGdlKCksIHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpO1xuICAgICAgZTEuaWQgPSBlZGdlLmlkKCk7XG4gICAgfVxuICB9XG4gIFxuICAgdmFyIGdldFBvc2l0aW9ucyA9IGZ1bmN0aW9uKGVsZSwgaSl7XG4gICAgaWYodHlwZW9mIGVsZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgZWxlID0gaTtcbiAgICB9XG4gICAgdmFyIHRoZUlkID0gZWxlLmRhdGEoJ2lkJyk7XG4gICAgdmFyIGxOb2RlID0gc2VsZi5pZFRvTE5vZGVbdGhlSWRdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGxOb2RlLmdldFJlY3QoKS5nZXRDZW50ZXJYKCksXG4gICAgICB5OiBsTm9kZS5nZXRSZWN0KCkuZ2V0Q2VudGVyWSgpXG4gICAgfTtcbiAgfTtcbiAgXG4gIC8qXG4gICAqIFJlcG9zaXRpb24gbm9kZXMgaW4gaXRlcmF0aW9ucyBhbmltYXRlZGx5XG4gICAqL1xuICB2YXIgaXRlcmF0ZUFuaW1hdGVkID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRoaWdzIHRvIHBlcmZvcm0gYWZ0ZXIgbm9kZXMgYXJlIHJlcG9zaXRpb25lZCBvbiBzY3JlZW5cbiAgICB2YXIgYWZ0ZXJSZXBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAob3B0aW9ucy5maXQpIHtcbiAgICAgICAgb3B0aW9ucy5jeS5maXQob3B0aW9ucy5lbGVzLm5vZGVzKCksIG9wdGlvbnMucGFkZGluZyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghcmVhZHkpIHtcbiAgICAgICAgcmVhZHkgPSB0cnVlO1xuICAgICAgICBzZWxmLmN5Lm9uZSgnbGF5b3V0cmVhZHknLCBvcHRpb25zLnJlYWR5KTtcbiAgICAgICAgc2VsZi5jeS50cmlnZ2VyKHt0eXBlOiAnbGF5b3V0cmVhZHknLCBsYXlvdXQ6IHNlbGZ9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIHZhciB0aWNrc1BlckZyYW1lID0gc2VsZi5vcHRpb25zLnJlZnJlc2g7XG4gICAgdmFyIGlzRG9uZTtcblxuICAgIGZvciggdmFyIGkgPSAwOyBpIDwgdGlja3NQZXJGcmFtZSAmJiAhaXNEb25lOyBpKysgKXtcbiAgICAgIGlzRG9uZSA9IHNlbGYuc3RvcHBlZCB8fCBzZWxmLmxheW91dC50aWNrKCk7XG4gICAgfVxuICAgIFxuICAgIC8vIElmIGxheW91dCBpcyBkb25lXG4gICAgaWYgKGlzRG9uZSkge1xuICAgICAgLy8gSWYgdGhlIGxheW91dCBpcyBub3QgYSBzdWJsYXlvdXQgYW5kIGl0IGlzIHN1Y2Nlc3NmdWwgcGVyZm9ybSBwb3N0IGxheW91dC5cbiAgICAgIGlmIChsYXlvdXQuY2hlY2tMYXlvdXRTdWNjZXNzKCkgJiYgIWxheW91dC5pc1N1YkxheW91dCkge1xuICAgICAgICBsYXlvdXQuZG9Qb3N0TGF5b3V0KCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIElmIGxheW91dCBoYXMgYSB0aWxpbmdQb3N0TGF5b3V0IGZ1bmN0aW9uIHByb3BlcnR5IGNhbGwgaXQuXG4gICAgICBpZiAobGF5b3V0LnRpbGluZ1Bvc3RMYXlvdXQpIHtcbiAgICAgICAgbGF5b3V0LnRpbGluZ1Bvc3RMYXlvdXQoKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgbGF5b3V0LmlzTGF5b3V0RmluaXNoZWQgPSB0cnVlO1xuICAgICAgXG4gICAgICBzZWxmLm9wdGlvbnMuZWxlcy5ub2RlcygpLnBvc2l0aW9ucyhnZXRQb3NpdGlvbnMpO1xuICAgICAgXG4gICAgICBhZnRlclJlcG9zaXRpb24oKTtcbiAgICAgIFxuICAgICAgLy8gdHJpZ2dlciBsYXlvdXRzdG9wIHdoZW4gdGhlIGxheW91dCBzdG9wcyAoZS5nLiBmaW5pc2hlcylcbiAgICAgIHNlbGYuY3kub25lKCdsYXlvdXRzdG9wJywgc2VsZi5vcHRpb25zLnN0b3ApO1xuICAgICAgc2VsZi5jeS50cmlnZ2VyKHsgdHlwZTogJ2xheW91dHN0b3AnLCBsYXlvdXQ6IHNlbGYgfSk7XG5cbiAgICAgIGlmIChmcmFtZUlkKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lSWQpO1xuICAgICAgfVxuICAgICAgXG4gICAgICByZWFkeSA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB2YXIgYW5pbWF0aW9uRGF0YSA9IHNlbGYubGF5b3V0LmdldFBvc2l0aW9uc0RhdGEoKTsgLy8gR2V0IHBvc2l0aW9ucyBvZiBsYXlvdXQgbm9kZXMgbm90ZSB0aGF0IGFsbCBub2RlcyBtYXkgbm90IGJlIGxheW91dCBub2RlcyBiZWNhdXNlIG9mIHRpbGluZ1xuICAgIFxuICAgIC8vIFBvc2l0aW9uIG5vZGVzLCBmb3IgdGhlIG5vZGVzIHdob3NlIGlkIGRvZXMgbm90IGluY2x1ZGVkIGluIGRhdGEgKGJlY2F1c2UgdGhleSBhcmUgcmVtb3ZlZCBmcm9tIHRoZWlyIHBhcmVudHMgYW5kIGluY2x1ZGVkIGluIGR1bW15IGNvbXBvdW5kcylcbiAgICAvLyB1c2UgcG9zaXRpb24gb2YgdGhlaXIgYW5jZXN0b3JzIG9yIGR1bW15IGFuY2VzdG9yc1xuICAgIG9wdGlvbnMuZWxlcy5ub2RlcygpLnBvc2l0aW9ucyhmdW5jdGlvbiAoZWxlLCBpKSB7XG4gICAgICBpZiAodHlwZW9mIGVsZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBlbGUgPSBpO1xuICAgICAgfVxuICAgICAgdmFyIHRoZUlkID0gZWxlLmlkKCk7XG4gICAgICB2YXIgcE5vZGUgPSBhbmltYXRpb25EYXRhW3RoZUlkXTtcbiAgICAgIHZhciB0ZW1wID0gZWxlO1xuICAgICAgLy8gSWYgcE5vZGUgaXMgdW5kZWZpbmVkIHNlYXJjaCB1bnRpbCBmaW5kaW5nIHBvc2l0aW9uIGRhdGEgb2YgaXRzIGZpcnN0IGFuY2VzdG9yIChJdCBtYXkgYmUgZHVtbXkgYXMgd2VsbClcbiAgICAgIHdoaWxlIChwTm9kZSA9PSBudWxsKSB7XG4gICAgICAgIHBOb2RlID0gYW5pbWF0aW9uRGF0YVt0ZW1wLmRhdGEoJ3BhcmVudCcpXSB8fCBhbmltYXRpb25EYXRhWydEdW1teUNvbXBvdW5kXycgKyB0ZW1wLmRhdGEoJ3BhcmVudCcpXTtcbiAgICAgICAgYW5pbWF0aW9uRGF0YVt0aGVJZF0gPSBwTm9kZTtcbiAgICAgICAgdGVtcCA9IHRlbXAucGFyZW50KClbMF07XG4gICAgICAgIGlmKHRlbXAgPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYocE5vZGUgIT0gbnVsbCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeDogcE5vZGUueCxcbiAgICAgICAgICB5OiBwTm9kZS55XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IGVsZS54LFxuICAgICAgICAgIHk6IGVsZS55XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBhZnRlclJlcG9zaXRpb24oKTtcblxuICAgIGZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaXRlcmF0ZUFuaW1hdGVkKTtcbiAgfTtcbiAgXG4gIC8qXG4gICogTGlzdGVuICdsYXlvdXRzdGFydGVkJyBldmVudCBhbmQgc3RhcnQgYW5pbWF0ZWQgaXRlcmF0aW9uIGlmIGFuaW1hdGUgb3B0aW9uIGlzICdkdXJpbmcnXG4gICovXG4gIGxheW91dC5hZGRMaXN0ZW5lcignbGF5b3V0c3RhcnRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2VsZi5vcHRpb25zLmFuaW1hdGUgPT09ICdkdXJpbmcnKSB7XG4gICAgICBmcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGl0ZXJhdGVBbmltYXRlZCk7XG4gICAgfVxuICB9KTtcbiAgXG4gIGxheW91dC5ydW5MYXlvdXQoKTsgLy8gUnVuIGNvc2UgbGF5b3V0XG4gIFxuICAvKlxuICAgKiBJZiBhbmltYXRlIG9wdGlvbiBpcyBub3QgJ2R1cmluZycgKCdlbmQnIG9yIGZhbHNlKSBwZXJmb3JtIHRoZXNlIGhlcmUgKElmIGl0IGlzICdkdXJpbmcnIHNpbWlsYXIgdGhpbmdzIGFyZSBhbHJlYWR5IHBlcmZvcm1lZClcbiAgICovXG4gIGlmKHRoaXMub3B0aW9ucy5hbmltYXRlICE9PSBcImR1cmluZ1wiKXtcbiAgICBzZWxmLm9wdGlvbnMuZWxlcy5ub2RlcygpLm5vdChcIjpwYXJlbnRcIikubGF5b3V0UG9zaXRpb25zKHNlbGYsIHNlbGYub3B0aW9ucywgZ2V0UG9zaXRpb25zKTsgLy8gVXNlIGxheW91dCBwb3NpdGlvbnMgdG8gcmVwb3NpdGlvbiB0aGUgbm9kZXMgaXQgY29uc2lkZXJzIHRoZSBvcHRpb25zIHBhcmFtZXRlclxuICAgIHJlYWR5ID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpczsgLy8gY2hhaW5pbmdcbn07XG5cbi8vR2V0IHRoZSB0b3AgbW9zdCBvbmVzIG9mIGEgbGlzdCBvZiBub2Rlc1xuX0NvU0VMYXlvdXQucHJvdG90eXBlLmdldFRvcE1vc3ROb2RlcyA9IGZ1bmN0aW9uKG5vZGVzKSB7XG4gIHZhciBub2Rlc01hcCA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBub2Rlc01hcFtub2Rlc1tpXS5pZCgpXSA9IHRydWU7XG4gIH1cbiAgdmFyIHJvb3RzID0gbm9kZXMuZmlsdGVyKGZ1bmN0aW9uIChlbGUsIGkpIHtcbiAgICAgIGlmKHR5cGVvZiBlbGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgZWxlID0gaTtcbiAgICAgIH1cbiAgICAgIHZhciBwYXJlbnQgPSBlbGUucGFyZW50KClbMF07XG4gICAgICB3aGlsZShwYXJlbnQgIT0gbnVsbCl7XG4gICAgICAgIGlmKG5vZGVzTWFwW3BhcmVudC5pZCgpXSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQoKVswXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gcm9vdHM7XG59O1xuXG5fQ29TRUxheW91dC5wcm90b3R5cGUucHJvY2Vzc0NoaWxkcmVuTGlzdCA9IGZ1bmN0aW9uIChwYXJlbnQsIGNoaWxkcmVuLCBsYXlvdXQpIHtcbiAgdmFyIHNpemUgPSBjaGlsZHJlbi5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgdmFyIHRoZUNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgdmFyIGNoaWxkcmVuX29mX2NoaWxkcmVuID0gdGhlQ2hpbGQuY2hpbGRyZW4oKTtcbiAgICB2YXIgdGhlTm9kZTsgICAgXG5cbiAgICB2YXIgZGltZW5zaW9ucyA9IHRoZUNoaWxkLmxheW91dERpbWVuc2lvbnMoe1xuICAgICAgbm9kZURpbWVuc2lvbnNJbmNsdWRlTGFiZWxzOiB0aGlzLm9wdGlvbnMubm9kZURpbWVuc2lvbnNJbmNsdWRlTGFiZWxzXG4gICAgfSk7XG5cbiAgICBpZiAodGhlQ2hpbGQub3V0ZXJXaWR0aCgpICE9IG51bGxcbiAgICAgICAgICAgICYmIHRoZUNoaWxkLm91dGVySGVpZ2h0KCkgIT0gbnVsbCkge1xuICAgICAgdGhlTm9kZSA9IHBhcmVudC5hZGQobmV3IENvU0VOb2RlKGxheW91dC5ncmFwaE1hbmFnZXIsXG4gICAgICAgICAgICAgIG5ldyBQb2ludEQodGhlQ2hpbGQucG9zaXRpb24oJ3gnKSAtIGRpbWVuc2lvbnMudyAvIDIsIHRoZUNoaWxkLnBvc2l0aW9uKCd5JykgLSBkaW1lbnNpb25zLmggLyAyKSxcbiAgICAgICAgICAgICAgbmV3IERpbWVuc2lvbkQocGFyc2VGbG9hdChkaW1lbnNpb25zLncpLCBwYXJzZUZsb2F0KGRpbWVuc2lvbnMuaCkpKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhlTm9kZSA9IHBhcmVudC5hZGQobmV3IENvU0VOb2RlKHRoaXMuZ3JhcGhNYW5hZ2VyKSk7XG4gICAgfVxuICAgIC8vIEF0dGFjaCBpZCB0byB0aGUgbGF5b3V0IG5vZGVcbiAgICB0aGVOb2RlLmlkID0gdGhlQ2hpbGQuZGF0YShcImlkXCIpO1xuICAgIC8vIEF0dGFjaCB0aGUgcGFkZGluZ3Mgb2YgY3kgbm9kZSB0byBsYXlvdXQgbm9kZVxuICAgIHRoZU5vZGUucGFkZGluZ0xlZnQgPSBwYXJzZUludCggdGhlQ2hpbGQuY3NzKCdwYWRkaW5nJykgKTtcbiAgICB0aGVOb2RlLnBhZGRpbmdUb3AgPSBwYXJzZUludCggdGhlQ2hpbGQuY3NzKCdwYWRkaW5nJykgKTtcbiAgICB0aGVOb2RlLnBhZGRpbmdSaWdodCA9IHBhcnNlSW50KCB0aGVDaGlsZC5jc3MoJ3BhZGRpbmcnKSApO1xuICAgIHRoZU5vZGUucGFkZGluZ0JvdHRvbSA9IHBhcnNlSW50KCB0aGVDaGlsZC5jc3MoJ3BhZGRpbmcnKSApO1xuICAgIFxuICAgIC8vQXR0YWNoIHRoZSBsYWJlbCBwcm9wZXJ0aWVzIHRvIGNvbXBvdW5kIGlmIGxhYmVscyB3aWxsIGJlIGluY2x1ZGVkIGluIG5vZGUgZGltZW5zaW9ucyAgXG4gICAgaWYodGhpcy5vcHRpb25zLm5vZGVEaW1lbnNpb25zSW5jbHVkZUxhYmVscyl7XG4gICAgICBpZih0aGVDaGlsZC5pc1BhcmVudCgpKXtcbiAgICAgICAgICB2YXIgbGFiZWxXaWR0aCA9IHRoZUNoaWxkLmJvdW5kaW5nQm94KHsgaW5jbHVkZUxhYmVsczogdHJ1ZSwgaW5jbHVkZU5vZGVzOiBmYWxzZSB9KS53OyAgICAgICAgICBcbiAgICAgICAgICB2YXIgbGFiZWxIZWlnaHQgPSB0aGVDaGlsZC5ib3VuZGluZ0JveCh7IGluY2x1ZGVMYWJlbHM6IHRydWUsIGluY2x1ZGVOb2RlczogZmFsc2UgfSkuaDtcbiAgICAgICAgICB2YXIgbGFiZWxQb3MgPSB0aGVDaGlsZC5jc3MoXCJ0ZXh0LWhhbGlnblwiKTtcbiAgICAgICAgICB0aGVOb2RlLmxhYmVsV2lkdGggPSBsYWJlbFdpZHRoO1xuICAgICAgICAgIHRoZU5vZGUubGFiZWxIZWlnaHQgPSBsYWJlbEhlaWdodDtcbiAgICAgICAgICB0aGVOb2RlLmxhYmVsUG9zID0gbGFiZWxQb3M7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIE1hcCB0aGUgbGF5b3V0IG5vZGVcbiAgICB0aGlzLmlkVG9MTm9kZVt0aGVDaGlsZC5kYXRhKFwiaWRcIildID0gdGhlTm9kZTtcblxuICAgIGlmIChpc05hTih0aGVOb2RlLnJlY3QueCkpIHtcbiAgICAgIHRoZU5vZGUucmVjdC54ID0gMDtcbiAgICB9XG5cbiAgICBpZiAoaXNOYU4odGhlTm9kZS5yZWN0LnkpKSB7XG4gICAgICB0aGVOb2RlLnJlY3QueSA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkcmVuX29mX2NoaWxkcmVuICE9IG51bGwgJiYgY2hpbGRyZW5fb2ZfY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIHRoZU5ld0dyYXBoO1xuICAgICAgdGhlTmV3R3JhcGggPSBsYXlvdXQuZ2V0R3JhcGhNYW5hZ2VyKCkuYWRkKGxheW91dC5uZXdHcmFwaCgpLCB0aGVOb2RlKTtcbiAgICAgIHRoaXMucHJvY2Vzc0NoaWxkcmVuTGlzdCh0aGVOZXdHcmFwaCwgY2hpbGRyZW5fb2ZfY2hpbGRyZW4sIGxheW91dCk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEBicmllZiA6IGNhbGxlZCBvbiBjb250aW51b3VzIGxheW91dHMgdG8gc3RvcCB0aGVtIGJlZm9yZSB0aGV5IGZpbmlzaFxuICovXG5fQ29TRUxheW91dC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5zdG9wcGVkID0gdHJ1ZTtcblxuICByZXR1cm4gdGhpczsgLy8gY2hhaW5pbmdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0KGN5dG9zY2FwZSkge1xuICByZXR1cm4gX0NvU0VMYXlvdXQ7XG59O1xuIiwidmFyIENvU0VOb2RlID0gcmVxdWlyZSgnLi4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvQ29TRU5vZGUnKTtcbnZhciBGRExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0ZETGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgSU1hdGggPSByZXF1aXJlKCcuLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9JTWF0aCcpO1xuXG5Db1NFTm9kZS5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uICgpXG57XG4gIGlmIChGRExheW91dENvbnN0YW50cy5FWENMVURFRF9OT0RFU1t0aGlzLmlkXSlcbiAgICByZXR1cm47XG5cbiAgdmFyIGxheW91dCA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldExheW91dCgpO1xuICB0aGlzLmRpc3BsYWNlbWVudFggPSBsYXlvdXQuY29vbGluZ0ZhY3RvciAqXG4gICAgICAgICAgKHRoaXMuc3ByaW5nRm9yY2VYICsgdGhpcy5yZXB1bHNpb25Gb3JjZVggKyB0aGlzLmdyYXZpdGF0aW9uRm9yY2VYKSAvIHRoaXMubm9PZkNoaWxkcmVuO1xuICB0aGlzLmRpc3BsYWNlbWVudFkgPSBsYXlvdXQuY29vbGluZ0ZhY3RvciAqXG4gICAgICAgICAgKHRoaXMuc3ByaW5nRm9yY2VZICsgdGhpcy5yZXB1bHNpb25Gb3JjZVkgKyB0aGlzLmdyYXZpdGF0aW9uRm9yY2VZKSAvIHRoaXMubm9PZkNoaWxkcmVuO1xuXG5cbiAgaWYgKE1hdGguYWJzKHRoaXMuZGlzcGxhY2VtZW50WCkgPiBsYXlvdXQuY29vbGluZ0ZhY3RvciAqIGxheW91dC5tYXhOb2RlRGlzcGxhY2VtZW50KVxuICB7XG4gICAgdGhpcy5kaXNwbGFjZW1lbnRYID0gbGF5b3V0LmNvb2xpbmdGYWN0b3IgKiBsYXlvdXQubWF4Tm9kZURpc3BsYWNlbWVudCAqXG4gICAgICAgICAgICBJTWF0aC5zaWduKHRoaXMuZGlzcGxhY2VtZW50WCk7XG4gIH1cblxuICBpZiAoTWF0aC5hYnModGhpcy5kaXNwbGFjZW1lbnRZKSA+IGxheW91dC5jb29saW5nRmFjdG9yICogbGF5b3V0Lm1heE5vZGVEaXNwbGFjZW1lbnQpXG4gIHtcbiAgICB0aGlzLmRpc3BsYWNlbWVudFkgPSBsYXlvdXQuY29vbGluZ0ZhY3RvciAqIGxheW91dC5tYXhOb2RlRGlzcGxhY2VtZW50ICpcbiAgICAgICAgICAgIElNYXRoLnNpZ24odGhpcy5kaXNwbGFjZW1lbnRZKTtcbiAgfVxuXG4gIC8vIGEgc2ltcGxlIG5vZGUsIGp1c3QgbW92ZSBpdFxuICBpZiAodGhpcy5jaGlsZCA9PSBudWxsKVxuICB7XG4gICAgdGhpcy5tb3ZlQnkodGhpcy5kaXNwbGFjZW1lbnRYLCB0aGlzLmRpc3BsYWNlbWVudFkpO1xuICB9XG4gIC8vIGFuIGVtcHR5IGNvbXBvdW5kIG5vZGUsIGFnYWluIGp1c3QgbW92ZSBpdFxuICBlbHNlIGlmICh0aGlzLmNoaWxkLmdldE5vZGVzKCkubGVuZ3RoID09IDApXG4gIHtcbiAgICB0aGlzLm1vdmVCeSh0aGlzLmRpc3BsYWNlbWVudFgsIHRoaXMuZGlzcGxhY2VtZW50WSk7XG4gIH1cbiAgLy8gbm9uLWVtcHR5IGNvbXBvdW5kIG5vZGUsIHByb3BvZ2F0ZSBtb3ZlbWVudCB0byBjaGlsZHJlbiBhcyB3ZWxsXG4gIGVsc2VcbiAge1xuICAgIHRoaXMucHJvcG9nYXRlRGlzcGxhY2VtZW50VG9DaGlsZHJlbih0aGlzLmRpc3BsYWNlbWVudFgsXG4gICAgICAgICAgICB0aGlzLmRpc3BsYWNlbWVudFkpO1xuICB9XG5cbiAgbGF5b3V0LnRvdGFsRGlzcGxhY2VtZW50ICs9XG4gICAgICAgICAgTWF0aC5hYnModGhpcy5kaXNwbGFjZW1lbnRYKSArIE1hdGguYWJzKHRoaXMuZGlzcGxhY2VtZW50WSk7XG5cbiAgdGhpcy5zcHJpbmdGb3JjZVggPSAwO1xuICB0aGlzLnNwcmluZ0ZvcmNlWSA9IDA7XG4gIHRoaXMucmVwdWxzaW9uRm9yY2VYID0gMDtcbiAgdGhpcy5yZXB1bHNpb25Gb3JjZVkgPSAwO1xuICB0aGlzLmdyYXZpdGF0aW9uRm9yY2VYID0gMDtcbiAgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWSA9IDA7XG4gIHRoaXMuZGlzcGxhY2VtZW50WCA9IDA7XG4gIHRoaXMuZGlzcGxhY2VtZW50WSA9IDA7XG59O1xuIiwiaW1wb3J0ICcuL2Nvc2UtYmlsa2VudC1tb2RpZmljYXRpb24uanMnO1xuaW1wb3J0IHtjcmVhdGVIZWFkbGVzc0luc3RhbmNlLCBhcHBseU1lcmdlZExheW91dCwgYXBwbHlVbm5hbWVkTGF5b3V0fSBmcm9tICcuL2xheW91dHMuanMnO1xuY29uc3QgZ2V0TGF5b3V0ID0gcmVxdWlyZSgnLi4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQnKTtcbnZhciBGRExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0ZETGF5b3V0Q29uc3RhbnRzJyk7XG5cbi8vIHJlZ2lzdGVycyB0aGUgZXh0ZW5zaW9uIG9uIGEgY3l0b3NjYXBlIGxpYiByZWZcbmxldCByZWdpc3RlciA9IGZ1bmN0aW9uKCBjeXRvc2NhcGUgKXtcblx0aWYoICFjeXRvc2NhcGUgKXsgcmV0dXJuOyB9IC8vIGNhbid0IHJlZ2lzdGVyIGlmIGN5dG9zY2FwZSB1bnNwZWNpZmllZFxuXG5cdGNyZWF0ZUhlYWRsZXNzSW5zdGFuY2UoY3l0b3NjYXBlKTtcblxuXHRsZXQgTGF5b3V0ID0gZ2V0TGF5b3V0KGN5dG9zY2FwZSk7XG5cdGxldCBvcmdQcm90b3R5cGUgPSBMYXlvdXQucHJvdG90eXBlO1xuXG5cdGxldCBkZWZhdWx0cyA9IG5ldyBMYXlvdXQoe30pLm9wdGlvbnM7XG5cblx0ZnVuY3Rpb24gZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKSB7XG5cdFx0dmFyIG9iaiA9IHt9O1xuXG5cdFx0Zm9yICh2YXIgaSBpbiBkZWZhdWx0cykge1xuXHRcdFx0b2JqW2ldID0gZGVmYXVsdHNbaV07XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG5cdFx0XHRvYmpbaV0gPSBvcHRpb25zW2ldO1xuXHRcdH1cblxuXHRcdHJldHVybiBvYmo7XG5cdH07XG5cblx0ZnVuY3Rpb24gX0NvU0VMYXlvdXQoX29wdGlvbnMpIHtcblx0XHR0aGlzLm9wdGlvbnMgPSBleHRlbmQoZGVmYXVsdHMsIF9vcHRpb25zKTtcblx0XHRuZXcgTGF5b3V0KF9vcHRpb25zKTtcblxuXHRcdGlmIChfb3B0aW9ucy5leGNsdWRlZE5vZGVzKSB7XG5cdFx0XHRGRExheW91dENvbnN0YW50cy5FWENMVURFRF9OT0RFUyA9IF9vcHRpb25zLmV4Y2x1ZGVkTm9kZXM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdEZETGF5b3V0Q29uc3RhbnRzLkVYQ0xVREVEX05PREVTID0ge307XG5cdFx0fVxuXG5cdH07XG5cblx0X0NvU0VMYXlvdXQucHJvdG90eXBlID0gTGF5b3V0LnByb3RvdHlwZTtcblxuXHRjeXRvc2NhcGUoICdsYXlvdXQnLCAnY3l0b3NjYXBlLmpzLXN5bmNoZWQnLCBfQ29TRUxheW91dCk7IC8vIHJlZ2lzdGVyIHdpdGggY3l0b3NjYXBlLmpzXG5cdGN5dG9zY2FwZSgnY29yZScsICdzeW5jaGVkTGF5b3V0JywgZnVuY3Rpb24gKG9wdHMpIHtcblx0XHRsZXQgYXBpID0ge307XG5cdFx0YXBpLmFwcGx5TWVyZ2VkTGF5b3V0ID0gYXBwbHlNZXJnZWRMYXlvdXQ7XG5cdFx0YXBpLmFwcGx5VW5uYW1lZExheW91dCA9IGFwcGx5VW5uYW1lZExheW91dDtcblxuXHRcdHJldHVybiBhcGk7XG5cdH0pO1xufTtcblxuaWYoIHR5cGVvZiBjeXRvc2NhcGUgIT09ICd1bmRlZmluZWQnICl7IC8vIGV4cG9zZSB0byBnbG9iYWwgY3l0b3NjYXBlIChpLmUuIHdpbmRvdy5jeXRvc2NhcGUpXG5cdHJlZ2lzdGVyKCBjeXRvc2NhcGUgKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWdpc3RlcjtcbiIsInZhciBjeV9oZWFkbGVzczsgXG5cbnZhciBjcmVhdGVIZWFkbGVzc0luc3RhbmNlID0gZnVuY3Rpb24oY3l0b3NjYXBlKSB7XG5cdGN5X2hlYWRsZXNzID0gY3l0b3NjYXBlKHtcblx0XHRoZWFkbGVzczogdHJ1ZSxcblx0XHRzdHlsZUVuYWJsZWQ6IHRydWUsXG5cdH0pO1xufTtcblxudmFyIGFwcGx5TWVyZ2VkTGF5b3V0ID0gZnVuY3Rpb24gKGN5LCBvdGhlckN5KSB7XG5cdGxldCBlbGVzID0gY3kuZWxlbWVudHMoKTtcblx0bGV0IG90aGVyRWxlcyA9IG90aGVyQ3kuZWxlbWVudHMoKTtcblx0bGV0IGFsbF9lbGVzID0gZWxlcy51bmlvbihvdGhlckVsZXMpO1xuXHRsZXQgb3B0aW9ucyA9IHtuYW1lOiAnY3l0b3NjYXBlLmpzLXN5bmNoZWQnfTtcblx0XG5cdGN5X2hlYWRsZXNzLmVsZW1lbnRzKCkucmVtb3ZlKCk7XG5cdGN5X2hlYWRsZXNzLmFkZChhbGxfZWxlcyk7XG5cdGN5X2hlYWRsZXNzLmxheW91dChvcHRpb25zKS5ydW4oKTtcblxuXHRjeV9oZWFkbGVzcy5vbmUoXCJsYXlvdXRzdG9wXCIsIGZ1bmN0aW9uKCl7XG5cdFx0bGV0IHBvcyA9IHt9O1xuXHRcdGN5X2hlYWRsZXNzLm5vZGVzKCkuZm9yRWFjaChmdW5jdGlvbihlbGUsIGkpIHtcblx0XHRcdHBvc1tlbGUuaWQoKV0gPSB7eDplbGUucG9zaXRpb24oXCJ4XCIpLCB5OiBlbGUucG9zaXRpb24oXCJ5XCIpfTtcblx0XHR9KVxuXG5cdFx0Y3kubm9kZXMoKS5wb3NpdGlvbnMoZnVuY3Rpb24oZWxlLCBpKSB7XG5cdFx0XHRyZXR1cm4ge3g6IHBvc1tlbGUuaWQoKV0ueCwgeTogcG9zW2VsZS5pZCgpXS55fVxuXHRcdH0pO1xuXG5cdFx0b3RoZXJDeS5ub2RlcygpLnBvc2l0aW9ucyhmdW5jdGlvbihlbGUsIGkpIHtcblx0XHRcdHJldHVybiB7eDogcG9zW2VsZS5pZCgpXS54LCB5OiBwb3NbZWxlLmlkKCldLnl9XG5cdFx0fSk7XG5cblx0XHRjeS5maXQoNTApOyBvdGhlckN5LmZpdCg1MCk7XG5cblx0XHRpZiAoY3kuem9vbSgpID4gb3RoZXJDeS56b29tKCkpe1xuXHRcdFx0Y3kuem9vbShvdGhlckN5Lnpvb20oKSk7IGN5LnBhbihvdGhlckN5LnBhbigpKTtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdG90aGVyQ3kuem9vbShjeS56b29tKCkpOyBvdGhlckN5LnBhbihjeS5wYW4oKSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmxldCBhcHBseVVubmFtZWRMYXlvdXQgPSBmdW5jdGlvbihjeSwgb3RoZXJDeSkge1xuXHRsZXQgZWxlcyA9IGN5LmVsZW1lbnRzKCk7XG5cdGxldCBvdGhlckVsZXMgPSBvdGhlckN5LmVsZW1lbnRzKCk7XG5cdGxldCBjb21tb25FbGVzID0gZWxlcy5pbnRlcnNlY3Rpb24ob3RoZXJFbGVzKTtcblxuXHRsZXQgY29tbW9uX2lkID0ge307XG5cblx0Y29tbW9uRWxlcy5mb3JFYWNoKGZ1bmN0aW9uKGVsZSwgaSkge1xuXHRcdGNvbW1vbl9pZFtlbGUuaWQoKV0gPSB0cnVlO1xuXHR9KTtcblxuXHRjeV9oZWFkbGVzcy5lbGVtZW50cygpLnJlbW92ZSgpO1xuXHRjeV9oZWFkbGVzcy5hZGQoY29tbW9uRWxlcyk7XG5cdGN5X2hlYWRsZXNzLmxheW91dCh7bmFtZTogXCJjeXRvc2NhcGUuanMtc3luY2hlZFwiLCBleGNsdWRlZE5vZGVzOiB7fX0pLnJ1bigpO1xuXG5cdGN5X2hlYWRsZXNzLm9uZShcImxheW91dHN0b3BcIiwgZnVuY3Rpb24oKXtcblx0XHRsZXQgcG9zID0ge307XG5cdFx0Y3lfaGVhZGxlc3Mubm9kZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKGVsZSwgaSkge1xuXHRcdFx0cG9zW2VsZS5pZCgpXSA9IHt4OiBlbGUucG9zaXRpb24oXCJ4XCIpLCB5OiBlbGUucG9zaXRpb24oXCJ5XCIpfTtcblx0XHR9KVxuXG5cdFx0Y3kubm9kZXMoKS5wb3NpdGlvbnMoZnVuY3Rpb24oZWxlLCBpKXtcblx0XHRcdGlmIChwb3NbZWxlLmlkKCldKSB7XG5cdFx0XHRcdHJldHVybiB7eDogcG9zW2VsZS5pZCgpXS54LCB5OiBwb3NbZWxlLmlkKCldLnl9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGVsZS5wb3NpdGlvbigpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0b3RoZXJDeS5ub2RlcygpLnBvc2l0aW9ucyhmdW5jdGlvbihlbGUsIGkpe1xuXHRcdFx0aWYgKHBvc1tlbGUuaWQoKV0pIHtcblx0XHRcdFx0cmV0dXJuIHt4OiBwb3NbZWxlLmlkKCldLngsIHk6IHBvc1tlbGUuaWQoKV0ueX07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gZWxlLnBvc2l0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRjeS5sYXlvdXQoe25hbWU6IFwiY3l0b3NjYXBlLmpzLXN5bmNoZWRcIiwgIHJhbmRvbWl6ZTogZmFsc2UsIGV4Y2x1ZGVkTm9kZXM6IHBvc30pLnJ1bigpO1xuXHRcdG90aGVyQ3kubGF5b3V0KHtuYW1lOiBcImN5dG9zY2FwZS5qcy1zeW5jaGVkXCIsICByYW5kb21pemU6IGZhbHNlLCBleGNsdWRlZE5vZGVzOiBwb3N9KS5ydW4oKTtcblxuXHR9KTtcbn07XG5cbmV4cG9ydCB7Y3JlYXRlSGVhZGxlc3NJbnN0YW5jZSwgYXBwbHlNZXJnZWRMYXlvdXQsIGFwcGx5VW5uYW1lZExheW91dH07XG4iXSwic291cmNlUm9vdCI6IiJ9