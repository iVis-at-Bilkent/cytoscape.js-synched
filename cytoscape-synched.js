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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
		api.applyAggregatedLayout = _layouts.applyAggregatedLayout;
		api.applyInterLayedLayout = _layouts.applyInterLayedLayout;
		api.applyExtendedInterLayedLayout = _layouts.applyExtendedInterLayedLayout;
		api.applyIterativeLayout = _layouts.applyIterativeLayout;

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

var applyAggregatedLayout = function applyAggregatedLayout(cy, otherCy) {
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

		cy.layout({ name: "cytoscape.js-synched", tile: false, randomize: false, excludedNodes: pos, excludedNodeMoveFactor: excludedNodeMoveFactor }).run();
		otherCy.layout({ name: "cytoscape.js-synched", tile: false, randomize: false, excludedNodes: pos, excludedNodeMoveFactor: excludedNodeMoveFactor }).run();

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

	commonEles.forEach(function (ele) {
		collection = collection.add(cy.getElementById(ele.id()).neighborhood());
		collection = collection.add(otherCy.getElementById(ele.id()).neighborhood());
	});

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

		cy.layout({ name: "cytoscape.js-synched", tile: false, randomize: false, excludedNodes: pos, excludedNodeMoveFactor: excludedNodeMoveFactor }).run();
		otherCy.layout({ name: "cytoscape.js-synched", tile: false, randomize: false, excludedNodes: pos, excludedNodeMoveFactor: excludedNodeMoveFactor }).run();

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

var applyIterativeLayout = function applyIterativeLayout(cy, otherCy, maxIter) {
	var counter = 0;
	maxIter = 2 * maxIter;

	otherCy.on('layoutstop', function () {
		if (counter < maxIter) {
			cy.nodes().positions(function (node) {
				var otherNode = otherCy.getElementById(node.id());

				if (otherNode.length > 0) {
					return otherNode.position();
				} else {
					return node.position();
				}
			});

			cy.layout({ name: "cytoscape.js-synched", tile: false, randomize: false, numIter: 1 }).run();
			counter++;
		}
	});

	cy.on('layoutstop', function () {
		if (counter < maxIter) {
			otherCy.nodes().positions(function (node) {
				var otherNode = cy.getElementById(node.id());

				if (otherNode.length > 0) {
					return otherNode.position();
				} else {
					return node.position();
				}
			});

			otherCy.layout({ name: "cytoscape.js-synched", tile: false, randomize: false, numIter: 1 }).run();
			counter++;
		}
	});

	cy.layout({ name: 'random' }).run();
};

exports.createHeadlessInstance = createHeadlessInstance;
exports.applyAggregatedLayout = applyAggregatedLayout;
exports.applyInterLayedLayout = applyInterLayedLayout;
exports.applyExtendedInterLayedLayout = applyExtendedInterLayedLayout;
exports.applyIterativeLayout = applyIterativeLayout;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFQ29uc3RhbnRzLmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFRWRnZS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvQ29TRUdyYXBoLmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFR3JhcGhNYW5hZ2VyLmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFTGF5b3V0LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFTm9kZS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvRGltZW5zaW9uRC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvRW1pdHRlci5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvRkRMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0ZETGF5b3V0Q29uc3RhbnRzLmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9GRExheW91dEVkZ2UuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0ZETGF5b3V0Tm9kZS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvSGFzaE1hcC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvSGFzaFNldC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvSUdlb21ldHJ5LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9JTWF0aC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvSW50ZWdlci5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvTEVkZ2UuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0xHcmFwaC5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvTEdyYXBoTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvTEdyYXBoT2JqZWN0LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9MTm9kZS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9MYXlvdXRDb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0xpbmtlZExpc3QuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L1BvaW50LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Qb2ludEQuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L1JhbmRvbVNlZWQuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L1JlY3RhbmdsZUQuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvVW5pcXVlSURHZW5lcmV0b3IuanMiLCJ3ZWJwYWNrOi8vY3l0b3NjYXBlU3luY2hlZC8uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9zcmMvY29zZS1iaWxrZW50LW1vZGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9jeXRvc2NhcGVTeW5jaGVkLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2N5dG9zY2FwZVN5bmNoZWQvLi9zcmMvbGF5b3V0cy5qcyJdLCJuYW1lcyI6WyJGRExheW91dENvbnN0YW50cyIsInJlcXVpcmUiLCJDb1NFQ29uc3RhbnRzIiwicHJvcCIsIkRFRkFVTFRfVVNFX01VTFRJX0xFVkVMX1NDQUxJTkciLCJERUZBVUxUX1JBRElBTF9TRVBBUkFUSU9OIiwiREVGQVVMVF9FREdFX0xFTkdUSCIsIkRFRkFVTFRfQ09NUE9ORU5UX1NFUEVSQVRJT04iLCJUSUxFIiwiVElMSU5HX1BBRERJTkdfVkVSVElDQUwiLCJUSUxJTkdfUEFERElOR19IT1JJWk9OVEFMIiwibW9kdWxlIiwiZXhwb3J0cyIsIkZETGF5b3V0RWRnZSIsIkNvU0VFZGdlIiwic291cmNlIiwidGFyZ2V0IiwidkVkZ2UiLCJjYWxsIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiTEdyYXBoIiwiQ29TRUdyYXBoIiwicGFyZW50IiwiZ3JhcGhNZ3IiLCJ2R3JhcGgiLCJMR3JhcGhNYW5hZ2VyIiwiQ29TRUdyYXBoTWFuYWdlciIsImxheW91dCIsIkZETGF5b3V0IiwiQ29TRU5vZGUiLCJMYXlvdXRDb25zdGFudHMiLCJQb2ludCIsIlBvaW50RCIsIkxheW91dCIsIkludGVnZXIiLCJJR2VvbWV0cnkiLCJUcmFuc2Zvcm0iLCJDb1NFTGF5b3V0IiwidG9CZVRpbGVkIiwibmV3R3JhcGhNYW5hZ2VyIiwiZ20iLCJncmFwaE1hbmFnZXIiLCJuZXdHcmFwaCIsIm5ld05vZGUiLCJ2Tm9kZSIsIm5ld0VkZ2UiLCJpbml0UGFyYW1ldGVycyIsImFyZ3VtZW50cyIsImlzU3ViTGF5b3V0IiwiaWRlYWxFZGdlTGVuZ3RoIiwidXNlU21hcnRJZGVhbEVkZ2VMZW5ndGhDYWxjdWxhdGlvbiIsIkRFRkFVTFRfVVNFX1NNQVJUX0lERUFMX0VER0VfTEVOR1RIX0NBTENVTEFUSU9OIiwic3ByaW5nQ29uc3RhbnQiLCJERUZBVUxUX1NQUklOR19TVFJFTkdUSCIsInJlcHVsc2lvbkNvbnN0YW50IiwiREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEgiLCJncmF2aXR5Q29uc3RhbnQiLCJERUZBVUxUX0dSQVZJVFlfU1RSRU5HVEgiLCJjb21wb3VuZEdyYXZpdHlDb25zdGFudCIsIkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9TVFJFTkdUSCIsImdyYXZpdHlSYW5nZUZhY3RvciIsIkRFRkFVTFRfR1JBVklUWV9SQU5HRV9GQUNUT1IiLCJjb21wb3VuZEdyYXZpdHlSYW5nZUZhY3RvciIsIkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1IiLCJjcmVhdGVCZW5kc0FzTmVlZGVkIiwiREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEIiwiY3JlYXRlQmVuZHBvaW50cyIsInJlc2V0QWxsRWRnZXMiLCJsZXZlbCIsImNsYXNzaWNMYXlvdXQiLCJub2Rlc1dpdGhHcmF2aXR5IiwiY2FsY3VsYXRlTm9kZXNUb0FwcGx5R3Jhdml0YXRpb25UbyIsInNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uIiwiY2FsY05vT2ZDaGlsZHJlbkZvckFsbE5vZGVzIiwiY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9ycyIsImNhbGNJbmNsdXNpb25UcmVlRGVwdGhzIiwiZ2V0Um9vdCIsImNhbGNFc3RpbWF0ZWRTaXplIiwiY2FsY0lkZWFsRWRnZUxlbmd0aHMiLCJpbmNyZW1lbnRhbCIsImZvcmVzdCIsImdldEZsYXRGb3Jlc3QiLCJsZW5ndGgiLCJwb3NpdGlvbk5vZGVzUmFkaWFsbHkiLCJyZWR1Y2VUcmVlcyIsInJlc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24iLCJhbGxOb2RlcyIsIlNldCIsImdldEFsbE5vZGVzIiwiaW50ZXJzZWN0aW9uIiwiZmlsdGVyIiwiaGFzIiwieCIsInBvc2l0aW9uTm9kZXNSYW5kb21seSIsImluaXRTcHJpbmdFbWJlZGRlciIsInJ1blNwcmluZ0VtYmVkZGVyIiwidGljayIsInRvdGFsSXRlcmF0aW9ucyIsIm1heEl0ZXJhdGlvbnMiLCJpc1RyZWVHcm93aW5nIiwiaXNHcm93dGhGaW5pc2hlZCIsInBydW5lZE5vZGVzQWxsIiwiQ09OVkVSR0VOQ0VfQ0hFQ0tfUEVSSU9EIiwiaXNDb252ZXJnZWQiLCJjb29saW5nRmFjdG9yIiwiaW5pdGlhbENvb2xpbmdGYWN0b3IiLCJhbmltYXRpb25QZXJpb2QiLCJNYXRoIiwiY2VpbCIsImluaXRpYWxBbmltYXRpb25QZXJpb2QiLCJzcXJ0IiwiZ3Jvd1RyZWVJdGVyYXRpb25zIiwidXBkYXRlQm91bmRzIiwidXBkYXRlR3JpZCIsImdyb3dUcmVlIiwiREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCIsImFmdGVyR3Jvd3RoSXRlcmF0aW9ucyIsInRvdGFsRGlzcGxhY2VtZW50IiwiY2FsY1NwcmluZ0ZvcmNlcyIsImNhbGNSZXB1bHNpb25Gb3JjZXMiLCJjYWxjR3Jhdml0YXRpb25hbEZvcmNlcyIsIm1vdmVOb2RlcyIsImFuaW1hdGUiLCJnZXRQb3NpdGlvbnNEYXRhIiwicERhdGEiLCJpIiwicmVjdCIsImlkIiwiZ2V0Q2VudGVyWCIsInkiLCJnZXRDZW50ZXJZIiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsImxheW91dEVuZGVkIiwiQU5JTUFURSIsImVtaXQiLCJub2RlTGlzdCIsImdyYXBoIiwiZ3JhcGhzIiwiZ2V0R3JhcGhzIiwic2l6ZSIsInVwZGF0ZUNvbm5lY3RlZCIsImlzQ29ubmVjdGVkIiwiY29uY2F0IiwiZ2V0Tm9kZXMiLCJub2RlIiwibm9PZkNoaWxkcmVuIiwiZ2V0Tm9PZkNoaWxkcmVuIiwiZWRnZXMiLCJnZXRBbGxFZGdlcyIsInZpc2l0ZWQiLCJIYXNoU2V0IiwiZWRnZSIsImNvbnRhaW5zIiwiZ2V0U291cmNlIiwiZ2V0VGFyZ2V0IiwiZ2V0QmVuZHBvaW50cyIsInB1c2giLCJjcmVhdGVEdW1teU5vZGVzRm9yQmVuZHBvaW50cyIsImFkZCIsImVkZ2VMaXN0IiwiZ2V0RWRnZUxpc3RUb05vZGUiLCJrIiwibXVsdGlFZGdlIiwiYWRkQWxsIiwibGlzdCIsImN1cnJlbnRTdGFydGluZ1BvaW50IiwibnVtYmVyT2ZDb2x1bW5zIiwiY3VycmVudFkiLCJjdXJyZW50WCIsInBvaW50IiwidHJlZSIsImNlbnRlck5vZGUiLCJmaW5kQ2VudGVyT2ZUcmVlIiwicmFkaWFsTGF5b3V0IiwiZmxvb3IiLCJ0cmFuc2Zvcm0iLCJXT1JMRF9DRU5URVJfWCIsIldPUkxEX0NFTlRFUl9ZIiwic3RhcnRpbmdQb2ludCIsInJhZGlhbFNlcCIsIm1heCIsIm1heERpYWdvbmFsSW5UcmVlIiwiYnJhbmNoUmFkaWFsTGF5b3V0IiwiYm91bmRzIiwiY2FsY3VsYXRlQm91bmRzIiwic2V0RGV2aWNlT3JnWCIsImdldE1pblgiLCJzZXREZXZpY2VPcmdZIiwiZ2V0TWluWSIsInNldFdvcmxkT3JnWCIsInNldFdvcmxkT3JnWSIsImJvdHRvbVJpZ2h0IiwiZ2V0TWF4WCIsImdldE1heFkiLCJpbnZlcnNlVHJhbnNmb3JtUG9pbnQiLCJwYXJlbnRPZk5vZGUiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJkaXN0YW5jZSIsInJhZGlhbFNlcGFyYXRpb24iLCJoYWxmSW50ZXJ2YWwiLCJub2RlQW5nbGUiLCJ0ZXRhIiwiVFdPX1BJIiwiY29zX3RldGEiLCJjb3MiLCJ4XyIsInlfIiwic2luIiwic2V0Q2VudGVyIiwibmVpZ2hib3JFZGdlcyIsImdldEVkZ2VzIiwiY2hpbGRDb3VudCIsImJyYW5jaENvdW50IiwiaW5jRWRnZXNDb3VudCIsInN0YXJ0SW5kZXgiLCJnZXRFZGdlc0JldHdlZW4iLCJ0ZW1wIiwic3BsaWNlIiwiaW5kZXgiLCJpbmRleE9mIiwic3RlcEFuZ2xlIiwiYWJzIiwiY3VycmVudE5laWdoYm9yIiwiZ2V0T3RoZXJFbmQiLCJjaGlsZFN0YXJ0QW5nbGUiLCJjaGlsZEVuZEFuZ2xlIiwibWF4RGlhZ29uYWwiLCJNSU5fVkFMVUUiLCJkaWFnb25hbCIsImdldERpYWdvbmFsIiwiY2FsY1JlcHVsc2lvblJhbmdlIiwiZ3JvdXBaZXJvRGVncmVlTWVtYmVycyIsInNlbGYiLCJ0ZW1wTWVtYmVyR3JvdXBzIiwibWVtYmVyR3JvdXBzIiwiaWRUb0R1bW15Tm9kZSIsInplcm9EZWdyZWUiLCJnZXRQYXJlbnQiLCJnZXROb2RlRGVncmVlV2l0aENoaWxkcmVuIiwidW5kZWZpbmVkIiwiZ2V0VG9CZVRpbGVkIiwicF9pZCIsImtleXMiLCJmb3JFYWNoIiwiZHVtbXlDb21wb3VuZElkIiwiZHVtbXlDb21wb3VuZCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJkdW1teVBhcmVudEdyYXBoIiwiZ2V0R3JhcGhNYW5hZ2VyIiwicGFyZW50R3JhcGgiLCJnZXRDaGlsZCIsInJlbW92ZSIsImNsZWFyQ29tcG91bmRzIiwiY2hpbGRHcmFwaE1hcCIsImlkVG9Ob2RlIiwicGVyZm9ybURGU09uQ29tcG91bmRzIiwiY29tcG91bmRPcmRlciIsImNoaWxkIiwicmVzZXRBbGxOb2RlcyIsInRpbGVDb21wb3VuZE1lbWJlcnMiLCJjbGVhclplcm9EZWdyZWVNZW1iZXJzIiwidGlsZWRaZXJvRGVncmVlUGFjayIsImNvbXBvdW5kTm9kZSIsInRpbGVOb2RlcyIsInJlcG9wdWxhdGVDb21wb3VuZHMiLCJsQ29tcG91bmROb2RlIiwiaG9yaXpvbnRhbE1hcmdpbiIsInZlcnRpY2FsTWFyZ2luIiwiYWRqdXN0TG9jYXRpb25zIiwidGlsZWRNZW1iZXJQYWNrIiwicmVwb3B1bGF0ZVplcm9EZWdyZWVNZW1iZXJzIiwidGlsZWRQYWNrIiwiY2hpbGRHcmFwaCIsImNoaWxkcmVuIiwidGhlQ2hpbGQiLCJnZXROb2RlRGVncmVlIiwiZGVncmVlIiwiZmlsbENvbXBleE9yZGVyQnlERlMiLCJvcmdhbml6YXRpb24iLCJjb21wb3VuZEhvcml6b250YWxNYXJnaW4iLCJjb21wb3VuZFZlcnRpY2FsTWFyZ2luIiwibGVmdCIsInJvd3MiLCJyb3ciLCJtYXhIZWlnaHQiLCJqIiwibG5vZGUiLCJob3Jpem9udGFsUGFkZGluZyIsInZlcnRpY2FsUGFkZGluZyIsIm5vZGVzIiwibWluV2lkdGgiLCJyb3dXaWR0aCIsInJvd0hlaWdodCIsInNvcnQiLCJuMSIsIm4yIiwibE5vZGUiLCJpbnNlcnROb2RlVG9Sb3ciLCJjYW5BZGRIb3Jpem9udGFsIiwiZ2V0U2hvcnRlc3RSb3dJbmRleCIsInNoaWZ0VG9MYXN0Um93Iiwicm93SW5kZXgiLCJtaW5Db21wb3VuZFNpemUiLCJzZWNvbmREaW1lbnNpb24iLCJleHRyYUhlaWdodCIsInIiLCJtaW4iLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJnZXRMb25nZXN0Um93SW5kZXgiLCJleHRyYVdpZHRoIiwic3JpIiwiaERpZmYiLCJhZGRfdG9fcm93X3JhdGlvIiwiYWRkX25ld19yb3dfcmF0aW8iLCJsb25nZXN0IiwibGFzdCIsImRpZmYiLCJpbnN0YW5jZSIsInByZXZUb3RhbCIsImZpbmFsVG90YWwiLCJ0aWxpbmdQcmVMYXlvdXQiLCJ0aWxpbmdQb3N0TGF5b3V0IiwiRkRMYXlvdXROb2RlIiwiSU1hdGgiLCJsb2MiLCJtb3ZlIiwiZ2V0TGF5b3V0IiwiZGlzcGxhY2VtZW50WCIsInNwcmluZ0ZvcmNlWCIsInJlcHVsc2lvbkZvcmNlWCIsImdyYXZpdGF0aW9uRm9yY2VYIiwiZGlzcGxhY2VtZW50WSIsInNwcmluZ0ZvcmNlWSIsInJlcHVsc2lvbkZvcmNlWSIsImdyYXZpdGF0aW9uRm9yY2VZIiwibWF4Tm9kZURpc3BsYWNlbWVudCIsInNpZ24iLCJtb3ZlQnkiLCJwcm9wb2dhdGVEaXNwbGFjZW1lbnRUb0NoaWxkcmVuIiwiZFgiLCJkWSIsInNldFByZWQxIiwicHJlZDEiLCJnZXRQcmVkMSIsImdldFByZWQyIiwicHJlZDIiLCJzZXROZXh0IiwibmV4dCIsImdldE5leHQiLCJzZXRQcm9jZXNzZWQiLCJwcm9jZXNzZWQiLCJpc1Byb2Nlc3NlZCIsIkRpbWVuc2lvbkQiLCJnZXRXaWR0aCIsInNldFdpZHRoIiwiZ2V0SGVpZ2h0Iiwic2V0SGVpZ2h0IiwiRW1pdHRlciIsImxpc3RlbmVycyIsInAiLCJhZGRMaXN0ZW5lciIsImV2ZW50IiwiY2FsbGJhY2siLCJyZW1vdmVMaXN0ZW5lciIsImwiLCJkYXRhIiwiZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSIsIm9sZFRvdGFsRGlzcGxhY2VtZW50IiwiTUFYX0lURVJBVElPTlMiLCJsYXlvdXRRdWFsaXR5IiwiRFJBRlRfUVVBTElUWSIsIlBST09GX1FVQUxJVFkiLCJub3RBbmltYXRlZEl0ZXJhdGlvbnMiLCJ1c2VGUkdyaWRWYXJpYW50IiwiREVGQVVMVF9VU0VfU01BUlRfUkVQVUxTSU9OX1JBTkdFX0NBTENVTEFUSU9OIiwiZ3JpZCIsImxjYURlcHRoIiwic2l6ZU9mU291cmNlSW5MY2EiLCJzaXplT2ZUYXJnZXRJbkxjYSIsImFsbEVkZ2VzIiwiaWRlYWxMZW5ndGgiLCJpc0ludGVyR3JhcGgiLCJnZXRTb3VyY2VJbkxjYSIsImdldEVzdGltYXRlZFNpemUiLCJnZXRUYXJnZXRJbkxjYSIsIlNJTVBMRV9OT0RFX1NJWkUiLCJnZXRMY2EiLCJnZXRJbmNsdXNpb25UcmVlRGVwdGgiLCJQRVJfTEVWRUxfSURFQUxfRURHRV9MRU5HVEhfRkFDVE9SIiwiTUFYX05PREVfRElTUExBQ0VNRU5UX0lOQ1JFTUVOVEFMIiwiTUFYX05PREVfRElTUExBQ0VNRU5UIiwidG90YWxEaXNwbGFjZW1lbnRUaHJlc2hvbGQiLCJyZXB1bHNpb25SYW5nZSIsImxFZGdlcyIsImNhbGNTcHJpbmdGb3JjZSIsIm5vZGVBIiwibm9kZUIiLCJsTm9kZXMiLCJwcm9jZXNzZWROb2RlU2V0IiwiR1JJRF9DQUxDVUxBVElPTl9DSEVDS19QRVJJT0QiLCJjYWxjdWxhdGVSZXB1bHNpb25Gb3JjZU9mQU5vZGUiLCJnZXRPd25lciIsImNhbGNSZXB1bHNpb25Gb3JjZSIsImdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uIiwiY2FsY0dyYXZpdGF0aW9uYWxGb3JjZSIsInNvdXJjZU5vZGUiLCJ0YXJnZXROb2RlIiwic3ByaW5nRm9yY2UiLCJ1bmlmb3JtTGVhZk5vZGVTaXplcyIsInVwZGF0ZUxlbmd0aFNpbXBsZSIsInVwZGF0ZUxlbmd0aCIsImlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCIsImdldExlbmd0aCIsImxlbmd0aFgiLCJsZW5ndGhZIiwicmVjdEEiLCJnZXRSZWN0IiwicmVjdEIiLCJvdmVybGFwQW1vdW50IiwiQXJyYXkiLCJjbGlwUG9pbnRzIiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwiZGlzdGFuY2VTcXVhcmVkIiwicmVwdWxzaW9uRm9yY2UiLCJpbnRlcnNlY3RzIiwiY2FsY1NlcGFyYXRpb25BbW91bnQiLCJjaGlsZHJlbkNvbnN0YW50IiwiZ2V0SW50ZXJzZWN0aW9uIiwiTUlOX1JFUFVMU0lPTl9ESVNUIiwib3duZXJHcmFwaCIsIm93bmVyQ2VudGVyWCIsIm93bmVyQ2VudGVyWSIsImFic0Rpc3RhbmNlWCIsImFic0Rpc3RhbmNlWSIsImVzdGltYXRlZFNpemUiLCJnZXRSaWdodCIsImdldExlZnQiLCJnZXRUb3AiLCJnZXRCb3R0b20iLCJjb252ZXJnZWQiLCJvc2NpbGF0aW5nIiwiYW5pbWF0aW9uRHVyaW5nTGF5b3V0IiwidXBkYXRlIiwiY2FsY0dyaWQiLCJzaXplWCIsInNpemVZIiwicGFyc2VJbnQiLCJhZGROb2RlVG9HcmlkIiwidiIsInRvcCIsInN0YXJ0WCIsImZpbmlzaFgiLCJzdGFydFkiLCJmaW5pc2hZIiwic2V0R3JpZENvb3JkaW5hdGVzIiwic3Vycm91bmRpbmciLCJjb250YWluc0xlYWYiLCJwcnVuZWROb2Rlc0luU3RlcFRlbXAiLCJwcnVuZWROb2Rlc0luU3RlcCIsImxlbmd0aE9mUHJ1bmVkTm9kZXNJblN0ZXAiLCJub2RlRGF0YSIsImZpbmRQbGFjZWZvclBydW5lZE5vZGUiLCJncmlkRm9yUHJ1bmVkTm9kZSIsIm5vZGVUb0Nvbm5lY3QiLCJwcnVuZWROb2RlIiwic3RhcnRHcmlkWCIsImZpbmlzaEdyaWRYIiwic3RhcnRHcmlkWSIsImZpbmlzaEdyaWRZIiwidXBOb2RlQ291bnQiLCJkb3duTm9kZUNvdW50IiwicmlnaHROb2RlQ291bnQiLCJsZWZ0Tm9kZUNvdW50IiwiY29udHJvbFJlZ2lvbnMiLCJtaW5Db3VudCIsIm1pbkluZGV4IiwicmFuZG9tIiwiTUlOX0VER0VfTEVOR1RIIiwiTEVkZ2UiLCJMTm9kZSIsIl9zdGFydFgiLCJfZmluaXNoWCIsIl9zdGFydFkiLCJfZmluaXNoWSIsIlVuaXF1ZUlER2VuZXJldG9yIiwiSGFzaE1hcCIsIm1hcCIsInB1dCIsImtleSIsInZhbHVlIiwidGhlSWQiLCJjcmVhdGVJRCIsImdldCIsImtleVNldCIsInNldCIsIm9iaiIsImNsZWFyIiwiaXNFbXB0eSIsImFkZEFsbFRvIiwicyIsInNlcGFyYXRpb25CdWZmZXIiLCJkaXJlY3Rpb25zIiwiZGVjaWRlRGlyZWN0aW9uc0Zvck92ZXJsYXBwaW5nTm9kZXMiLCJnZXRYIiwiZ2V0WSIsInNsb3BlIiwibW92ZUJ5WSIsIm1vdmVCeVgiLCJnZXRJbnRlcnNlY3Rpb24yIiwicmVzdWx0IiwicDF4IiwicDF5IiwicDJ4IiwicDJ5IiwidG9wTGVmdEF4IiwidG9wTGVmdEF5IiwidG9wUmlnaHRBeCIsImJvdHRvbUxlZnRBeCIsImJvdHRvbUxlZnRBeSIsImJvdHRvbVJpZ2h0QXgiLCJoYWxmV2lkdGhBIiwiZ2V0V2lkdGhIYWxmIiwiaGFsZkhlaWdodEEiLCJnZXRIZWlnaHRIYWxmIiwidG9wTGVmdEJ4IiwidG9wTGVmdEJ5IiwidG9wUmlnaHRCeCIsImJvdHRvbUxlZnRCeCIsImJvdHRvbUxlZnRCeSIsImJvdHRvbVJpZ2h0QngiLCJoYWxmV2lkdGhCIiwiaGFsZkhlaWdodEIiLCJjbGlwUG9pbnRBRm91bmQiLCJjbGlwUG9pbnRCRm91bmQiLCJzbG9wZUEiLCJzbG9wZUIiLCJzbG9wZVByaW1lIiwiY2FyZGluYWxEaXJlY3Rpb25BIiwiY2FyZGluYWxEaXJlY3Rpb25CIiwidGVtcFBvaW50QXgiLCJ0ZW1wUG9pbnRBeSIsInRlbXBQb2ludEJ4IiwidGVtcFBvaW50QnkiLCJnZXRDYXJkaW5hbERpcmVjdGlvbiIsImxpbmUiLCJzMSIsInMyIiwiZjEiLCJmMiIsIngxIiwieTEiLCJ4MiIsInkyIiwieDMiLCJ5MyIsIng0IiwieTQiLCJhMSIsImEyIiwiYjEiLCJiMiIsImMxIiwiYzIiLCJkZW5vbSIsIkhBTEZfUEkiLCJQSSIsIk9ORV9BTkRfSEFMRl9QSSIsIlRIUkVFX1BJIiwiTEdyYXBoT2JqZWN0IiwidkdyYXBoT2JqZWN0IiwiYmVuZHBvaW50cyIsImxjYSIsInNvdXJjZUluTGNhIiwidGFyZ2V0SW5MY2EiLCJnZXRPdGhlckVuZEluR3JhcGgiLCJvdGhlckVuZCIsInJvb3QiLCJjbGlwUG9pbnRDb29yZGluYXRlcyIsIlJlY3RhbmdsZUQiLCJMaW5rZWRMaXN0Iiwib2JqMiIsIm1hcmdpbiIsIkRFRkFVTFRfR1JBUEhfTUFSR0lOIiwicmlnaHQiLCJib3R0b20iLCJvYmoxIiwib3duZXIiLCJlZGdlc1RvQmVSZW1vdmVkIiwic2xpY2UiLCJzb3VyY2VJbmRleCIsInRhcmdldEluZGV4IiwidXBkYXRlTGVmdFRvcCIsIm5vZGVUb3AiLCJub2RlTGVmdCIsInJlY3Vyc2l2ZSIsIm5vZGVSaWdodCIsIm5vZGVCb3R0b20iLCJib3VuZGluZ1JlY3QiLCJFTVBUWV9DT01QT1VORF9OT0RFX1NJWkUiLCJ0b0JlVmlzaXRlZCIsImN1cnJlbnROb2RlIiwiY2hpbGRyZW5PZk5vZGUiLCJ3aXRoQ2hpbGRyZW4iLCJzaGlmdCIsIm5laWdoYm9yRWRnZSIsImNoaWxkcmVuT2ZOZWlnaGJvciIsIm5vT2ZWaXNpdGVkSW5UaGlzR3JhcGgiLCJ2aXNpdGVkSWQiLCJ2aXNpdGVkTm9kZSIsImFkZFJvb3QiLCJuZ3JhcGgiLCJubm9kZSIsInNldFJvb3RHcmFwaCIsInJvb3RHcmFwaCIsInBhcmVudE5vZGUiLCJzb3VyY2VHcmFwaCIsInRhcmdldEdyYXBoIiwibE9iaiIsIm5vZGVzVG9CZVJlbW92ZWQiLCJhbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiIsImlzT25lQW5jZXN0b3JPZk90aGVyIiwiZmlyc3ROb2RlIiwic2Vjb25kTm9kZSIsInNvdXJjZUFuY2VzdG9yR3JhcGgiLCJ0YXJnZXRBbmNlc3RvckdyYXBoIiwiY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9yIiwiZmlyc3RPd25lckdyYXBoIiwic2Vjb25kT3duZXJHcmFwaCIsImRlcHRoIiwiaW5jbHVzaW9uVHJlZURlcHRoIiwiaW5jbHVkZXNJbnZhbGlkRWRnZSIsIlJhbmRvbVNlZWQiLCJnZXRDZW50ZXIiLCJnZXRMb2NhdGlvbiIsInNldFJlY3QiLCJ1cHBlckxlZnQiLCJkaW1lbnNpb24iLCJjeCIsImN5Iiwic2V0TG9jYXRpb24iLCJkeCIsImR5IiwidG8iLCJvdGhlciIsImdldE5laWdoYm9yc0xpc3QiLCJuZWlnaGJvcnMiLCJ3aXRoTmVpZ2hib3JzTGlzdCIsImNoaWxkTm9kZSIsInNjYXR0ZXIiLCJyYW5kb21DZW50ZXJYIiwicmFuZG9tQ2VudGVyWSIsIm1pblgiLCJJTklUSUFMX1dPUkxEX0JPVU5EQVJZIiwibWF4WCIsIm5leHREb3VibGUiLCJtaW5ZIiwibWF4WSIsIk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyIsImxhYmVsV2lkdGgiLCJsYWJlbEhlaWdodCIsImxhYmVsUG9zIiwidHJhbnMiLCJXT1JMRF9CT1VOREFSWSIsImxlZnRUb3AiLCJ2TGVmdFRvcCIsImlzUmVtb3RlVXNlIiwiREVGQVVMVF9RVUFMSVRZIiwiREVGQVVMVF9JTkNSRU1FTlRBTCIsImFuaW1hdGlvbk9uTGF5b3V0IiwiREVGQVVMVF9BTklNQVRJT05fT05fTEFZT1VUIiwiREVGQVVMVF9BTklNQVRJT05fRFVSSU5HX0xBWU9VVCIsIkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRCIsIkRFRkFVTFRfVU5JRk9STV9MRUFGX05PREVfU0laRVMiLCJlZGdlVG9EdW1teU5vZGVzIiwiaXNMYXlvdXRGaW5pc2hlZCIsIlJBTkRPTV9TRUVEIiwiY2hlY2tMYXlvdXRTdWNjZXNzIiwicnVuTGF5b3V0IiwiaXNMYXlvdXRTdWNjZXNzZnVsbCIsImRvUG9zdExheW91dCIsInVwZGF0ZTIiLCJjcmVhdGVCZW5kcG9pbnRzRnJvbUR1bW15Tm9kZXMiLCJuZXdMZWZ0VG9wIiwiZmxhdEZvcmVzdCIsImlzRm9yZXN0IiwiaXNGbGF0IiwicGFyZW50cyIsInVuUHJvY2Vzc2VkTm9kZXMiLCJkdW1teU5vZGVzIiwicHJldiIsImR1bW15Tm9kZSIsIkRpbWVuc2lvbiIsImR1bW15RWRnZSIsImxFZGdlIiwicGF0aCIsImVicCIsInNsaWRlclZhbHVlIiwiZGVmYXVsdFZhbHVlIiwibWluRGl2IiwibWF4TXVsIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsImEiLCJiIiwicmVtb3ZlZE5vZGVzIiwicmVtYWluaW5nRGVncmVlcyIsImZvdW5kQ2VudGVyIiwidGVtcExpc3QiLCJ0ZW1wTGlzdDIiLCJuZWlnaGJvdXJzIiwibmVpZ2hib3VyIiwib3RoZXJEZWdyZWUiLCJuZXdEZWdyZWUiLCJzZXRHcmFwaE1hbmFnZXIiLCJTSU1QTEVfTk9ERV9IQUxGX1NJWkUiLCJub2RlRnJvbSIsImhlYWQiLCJ0YWlsIiwidmFscyIsInZhbCIsIm90aGVyTm9kZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRyYW5zbGF0ZSIsImVxdWFscyIsInB0IiwidG9TdHJpbmciLCJzZXRYIiwic2V0WSIsImdldERpZmZlcmVuY2UiLCJnZXRDb3B5IiwiZGltIiwic2VlZCIsImx3b3JsZE9yZ1giLCJsd29ybGRPcmdZIiwibGRldmljZU9yZ1giLCJsZGV2aWNlT3JnWSIsImx3b3JsZEV4dFgiLCJsd29ybGRFeHRZIiwibGRldmljZUV4dFgiLCJsZGV2aWNlRXh0WSIsImdldFdvcmxkT3JnWCIsIndveCIsImdldFdvcmxkT3JnWSIsIndveSIsImdldFdvcmxkRXh0WCIsInNldFdvcmxkRXh0WCIsIndleCIsImdldFdvcmxkRXh0WSIsInNldFdvcmxkRXh0WSIsIndleSIsImdldERldmljZU9yZ1giLCJkb3giLCJnZXREZXZpY2VPcmdZIiwiZG95IiwiZ2V0RGV2aWNlRXh0WCIsInNldERldmljZUV4dFgiLCJkZXgiLCJnZXREZXZpY2VFeHRZIiwic2V0RGV2aWNlRXh0WSIsImRleSIsInRyYW5zZm9ybVgiLCJ4RGV2aWNlIiwid29ybGRFeHRYIiwidHJhbnNmb3JtWSIsInlEZXZpY2UiLCJ3b3JsZEV4dFkiLCJpbnZlcnNlVHJhbnNmb3JtWCIsInhXb3JsZCIsImRldmljZUV4dFgiLCJpbnZlcnNlVHJhbnNmb3JtWSIsInlXb3JsZCIsImRldmljZUV4dFkiLCJpblBvaW50Iiwib3V0UG9pbnQiLCJsYXN0SUQiLCJpc1ByaW1pdGl2ZSIsInVuaXF1ZUlEIiwiZ2V0U3RyaW5nIiwiYXJnIiwidHlwZSIsImRlZmF1bHRzIiwicmVhZHkiLCJzdG9wIiwibm9kZURpbWVuc2lvbnNJbmNsdWRlTGFiZWxzIiwicmVmcmVzaCIsImZpdCIsInBhZGRpbmciLCJyYW5kb21pemUiLCJub2RlUmVwdWxzaW9uIiwiZWRnZUVsYXN0aWNpdHkiLCJuZXN0aW5nRmFjdG9yIiwiZ3Jhdml0eSIsIm51bUl0ZXIiLCJ0aWxlIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJ0aWxpbmdQYWRkaW5nVmVydGljYWwiLCJ0aWxpbmdQYWRkaW5nSG9yaXpvbnRhbCIsImdyYXZpdHlSYW5nZUNvbXBvdW5kIiwiZ3Jhdml0eUNvbXBvdW5kIiwiZ3Jhdml0eVJhbmdlIiwiaW5pdGlhbEVuZXJneU9uSW5jcmVtZW50YWwiLCJleHRlbmQiLCJvcHRpb25zIiwiX0NvU0VMYXlvdXQiLCJfb3B0aW9ucyIsImdldFVzZXJPcHRpb25zIiwicnVuIiwiZnJhbWVJZCIsImlkVG9MTm9kZSIsInN0b3BwZWQiLCJ0cmlnZ2VyIiwiZWxlcyIsInByb2Nlc3NDaGlsZHJlbkxpc3QiLCJnZXRUb3BNb3N0Tm9kZXMiLCJlMSIsImdldFBvc2l0aW9ucyIsImVsZSIsIml0ZXJhdGVBbmltYXRlZCIsImFmdGVyUmVwb3NpdGlvbiIsIm9uZSIsInRpY2tzUGVyRnJhbWUiLCJpc0RvbmUiLCJwb3NpdGlvbnMiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImFuaW1hdGlvbkRhdGEiLCJwTm9kZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm5vdCIsImxheW91dFBvc2l0aW9ucyIsIm5vZGVzTWFwIiwicm9vdHMiLCJjaGlsZHJlbl9vZl9jaGlsZHJlbiIsInRoZU5vZGUiLCJkaW1lbnNpb25zIiwibGF5b3V0RGltZW5zaW9ucyIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsInBvc2l0aW9uIiwicGFyc2VGbG9hdCIsImNzcyIsImlzUGFyZW50IiwiYm91bmRpbmdCb3giLCJpbmNsdWRlTGFiZWxzIiwiaW5jbHVkZU5vZGVzIiwiaXNOYU4iLCJ0aGVOZXdHcmFwaCIsImN5dG9zY2FwZSIsIkVYQ0xVREVEX05PREVTIiwiZXhjbHVkZWROb2RlTW92ZUZhY3RvciIsInJlZ2lzdGVyIiwib3JnUHJvdG90eXBlIiwiZXhjbHVkZWROb2RlcyIsIm9wdHMiLCJhcGkiLCJhcHBseUFnZ3JlZ2F0ZWRMYXlvdXQiLCJhcHBseUludGVyTGF5ZWRMYXlvdXQiLCJhcHBseUV4dGVuZGVkSW50ZXJMYXllZExheW91dCIsImFwcGx5SXRlcmF0aXZlTGF5b3V0IiwiY3lfaGVhZGxlc3MiLCJjcmVhdGVIZWFkbGVzc0luc3RhbmNlIiwiaGVhZGxlc3MiLCJzdHlsZUVuYWJsZWQiLCJvdGhlckN5IiwiZWxlbWVudHMiLCJvdGhlckVsZXMiLCJhbGxfZWxlcyIsInVuaW9uIiwicG9zIiwiY29tbW9uRWxlcyIsImNvbW1vbl9pZCIsImlzTGF5b3V0U3RvcHBlZCIsImlzT3RoZXJMYXlvdXRTdG9wcGVkIiwiY29sbGVjdGlvbiIsImdldEVsZW1lbnRCeUlkIiwibmVpZ2hib3Job29kIiwibWF4SXRlciIsImNvdW50ZXIiLCJvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Es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RDs7QUFVQXhNLE1BQUc1bUIsTUFBSCxDQUFVLEVBQUNnc0IsTUFBTSxzQkFBUCxFQUFnQ3dFLE1BQU0sS0FBdEMsRUFBOENOLFdBQVcsS0FBekQsRUFBZ0VLLFNBQVMsQ0FBekUsRUFBVixFQUF1RmMsR0FBdkY7QUFDQXNFO0FBQ0E7QUFDRCxFQWZEOztBQWlCQS9PLElBQUdnUCxFQUFILENBQU0sWUFBTixFQUFvQixZQUFXO0FBQzlCLE1BQUlELFVBQVVELE9BQWQsRUFBdUI7QUFDdEJiLFdBQVFoa0IsS0FBUixHQUFnQndoQixTQUFoQixDQUEwQixnQkFBUTtBQUNqQyxRQUFJdkcsWUFBWWxGLEdBQUc0TyxjQUFILENBQWtCaHVCLEtBQUtwQixFQUFMLEVBQWxCLENBQWhCOztBQUVBLFFBQUkwbEIsVUFBVXZvQixNQUFWLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3pCLFlBQU91b0IsVUFBVXNILFFBQVYsRUFBUDtBQUNBLEtBRkQsTUFFTztBQUNOLFlBQU81ckIsS0FBSzRyQixRQUFMLEVBQVA7QUFDQTtBQUNELElBUkQ7O0FBVUF5QixXQUFRNzBCLE1BQVIsQ0FBZSxFQUFDZ3NCLE1BQU0sc0JBQVAsRUFBZ0N3RSxNQUFNLEtBQXRDLEVBQThDTixXQUFXLEtBQXpELEVBQWdFSyxTQUFTLENBQXpFLEVBQWYsRUFBNEZjLEdBQTVGO0FBQ0FzRTtBQUNBO0FBQ0QsRUFmRDs7QUFpQkEvTyxJQUFHNW1CLE1BQUgsQ0FBVSxFQUFDZ3NCLE1BQU0sUUFBUCxFQUFWLEVBQTRCcUYsR0FBNUI7QUFDQSxDQXZDRDs7UUF5Q1FxRCxzQixHQUFBQSxzQjtRQUF3QkwscUIsR0FBQUEscUI7UUFBdUJDLHFCLEdBQUFBLHFCO1FBQXVCQyw2QixHQUFBQSw2QjtRQUErQkMsb0IsR0FBQUEsb0IiLCJmaWxlIjoiY3l0b3NjYXBlLXN5bmNoZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjeXRvc2NhcGVTeW5jaGVkXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImN5dG9zY2FwZVN5bmNoZWRcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIEZETGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9GRExheW91dENvbnN0YW50cycpO1xuXG5mdW5jdGlvbiBDb1NFQ29uc3RhbnRzKCkge1xufVxuXG4vL0NvU0VDb25zdGFudHMgaW5oZXJpdHMgc3RhdGljIHByb3BzIGluIEZETGF5b3V0Q29uc3RhbnRzXG5mb3IgKHZhciBwcm9wIGluIEZETGF5b3V0Q29uc3RhbnRzKSB7XG4gIENvU0VDb25zdGFudHNbcHJvcF0gPSBGRExheW91dENvbnN0YW50c1twcm9wXTtcbn1cblxuQ29TRUNvbnN0YW50cy5ERUZBVUxUX1VTRV9NVUxUSV9MRVZFTF9TQ0FMSU5HID0gZmFsc2U7XG5Db1NFQ29uc3RhbnRzLkRFRkFVTFRfUkFESUFMX1NFUEFSQVRJT04gPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIO1xuQ29TRUNvbnN0YW50cy5ERUZBVUxUX0NPTVBPTkVOVF9TRVBFUkFUSU9OID0gNjA7XG5Db1NFQ29uc3RhbnRzLlRJTEUgPSB0cnVlO1xuQ29TRUNvbnN0YW50cy5USUxJTkdfUEFERElOR19WRVJUSUNBTCA9IDEwO1xuQ29TRUNvbnN0YW50cy5USUxJTkdfUEFERElOR19IT1JJWk9OVEFMID0gMTA7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29TRUNvbnN0YW50cztcbiIsInZhciBGRExheW91dEVkZ2UgPSByZXF1aXJlKCcuL0ZETGF5b3V0RWRnZScpO1xuXG5mdW5jdGlvbiBDb1NFRWRnZShzb3VyY2UsIHRhcmdldCwgdkVkZ2UpIHtcbiAgRkRMYXlvdXRFZGdlLmNhbGwodGhpcywgc291cmNlLCB0YXJnZXQsIHZFZGdlKTtcbn1cblxuQ29TRUVkZ2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShGRExheW91dEVkZ2UucHJvdG90eXBlKTtcbmZvciAodmFyIHByb3AgaW4gRkRMYXlvdXRFZGdlKSB7XG4gIENvU0VFZGdlW3Byb3BdID0gRkRMYXlvdXRFZGdlW3Byb3BdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvU0VFZGdlXG4iLCJ2YXIgTEdyYXBoID0gcmVxdWlyZSgnLi9MR3JhcGgnKTtcblxuZnVuY3Rpb24gQ29TRUdyYXBoKHBhcmVudCwgZ3JhcGhNZ3IsIHZHcmFwaCkge1xuICBMR3JhcGguY2FsbCh0aGlzLCBwYXJlbnQsIGdyYXBoTWdyLCB2R3JhcGgpO1xufVxuXG5Db1NFR3JhcGgucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMR3JhcGgucHJvdG90eXBlKTtcbmZvciAodmFyIHByb3AgaW4gTEdyYXBoKSB7XG4gIENvU0VHcmFwaFtwcm9wXSA9IExHcmFwaFtwcm9wXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb1NFR3JhcGg7XG4iLCJ2YXIgTEdyYXBoTWFuYWdlciA9IHJlcXVpcmUoJy4vTEdyYXBoTWFuYWdlcicpO1xuXG5mdW5jdGlvbiBDb1NFR3JhcGhNYW5hZ2VyKGxheW91dCkge1xuICBMR3JhcGhNYW5hZ2VyLmNhbGwodGhpcywgbGF5b3V0KTtcbn1cblxuQ29TRUdyYXBoTWFuYWdlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaE1hbmFnZXIucHJvdG90eXBlKTtcbmZvciAodmFyIHByb3AgaW4gTEdyYXBoTWFuYWdlcikge1xuICBDb1NFR3JhcGhNYW5hZ2VyW3Byb3BdID0gTEdyYXBoTWFuYWdlcltwcm9wXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb1NFR3JhcGhNYW5hZ2VyO1xuIiwidmFyIEZETGF5b3V0ID0gcmVxdWlyZSgnLi9GRExheW91dCcpO1xudmFyIENvU0VHcmFwaE1hbmFnZXIgPSByZXF1aXJlKCcuL0NvU0VHcmFwaE1hbmFnZXInKTtcbnZhciBDb1NFR3JhcGggPSByZXF1aXJlKCcuL0NvU0VHcmFwaCcpO1xudmFyIENvU0VOb2RlID0gcmVxdWlyZSgnLi9Db1NFTm9kZScpO1xudmFyIENvU0VFZGdlID0gcmVxdWlyZSgnLi9Db1NFRWRnZScpO1xudmFyIENvU0VDb25zdGFudHMgPSByZXF1aXJlKCcuL0NvU0VDb25zdGFudHMnKTtcbnZhciBGRExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vRkRMYXlvdXRDb25zdGFudHMnKTtcbnZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0xheW91dENvbnN0YW50cycpO1xudmFyIFBvaW50ID0gcmVxdWlyZSgnLi9Qb2ludCcpO1xudmFyIFBvaW50RCA9IHJlcXVpcmUoJy4vUG9pbnREJyk7XG52YXIgTGF5b3V0ID0gcmVxdWlyZSgnLi9MYXlvdXQnKTtcbnZhciBJbnRlZ2VyID0gcmVxdWlyZSgnLi9JbnRlZ2VyJyk7XG52YXIgSUdlb21ldHJ5ID0gcmVxdWlyZSgnLi9JR2VvbWV0cnknKTtcbnZhciBMR3JhcGggPSByZXF1aXJlKCcuL0xHcmFwaCcpO1xudmFyIFRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vVHJhbnNmb3JtJyk7XG5cbmZ1bmN0aW9uIENvU0VMYXlvdXQoKSB7XG4gIEZETGF5b3V0LmNhbGwodGhpcyk7XG4gIFxuICB0aGlzLnRvQmVUaWxlZCA9IHt9OyAvLyBNZW1vcml6ZSBpZiBhIG5vZGUgaXMgdG8gYmUgdGlsZWQgb3IgaXMgdGlsZWRcbn1cblxuQ29TRUxheW91dC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEZETGF5b3V0LnByb3RvdHlwZSk7XG5cbmZvciAodmFyIHByb3AgaW4gRkRMYXlvdXQpIHtcbiAgQ29TRUxheW91dFtwcm9wXSA9IEZETGF5b3V0W3Byb3BdO1xufVxuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5uZXdHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBnbSA9IG5ldyBDb1NFR3JhcGhNYW5hZ2VyKHRoaXMpO1xuICB0aGlzLmdyYXBoTWFuYWdlciA9IGdtO1xuICByZXR1cm4gZ207XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5uZXdHcmFwaCA9IGZ1bmN0aW9uICh2R3JhcGgpIHtcbiAgcmV0dXJuIG5ldyBDb1NFR3JhcGgobnVsbCwgdGhpcy5ncmFwaE1hbmFnZXIsIHZHcmFwaCk7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5uZXdOb2RlID0gZnVuY3Rpb24gKHZOb2RlKSB7XG4gIHJldHVybiBuZXcgQ29TRU5vZGUodGhpcy5ncmFwaE1hbmFnZXIsIHZOb2RlKTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLm5ld0VkZ2UgPSBmdW5jdGlvbiAodkVkZ2UpIHtcbiAgcmV0dXJuIG5ldyBDb1NFRWRnZShudWxsLCBudWxsLCB2RWRnZSk7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5pbml0UGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgRkRMYXlvdXQucHJvdG90eXBlLmluaXRQYXJhbWV0ZXJzLmNhbGwodGhpcywgYXJndW1lbnRzKTtcbiAgaWYgKCF0aGlzLmlzU3ViTGF5b3V0KSB7XG4gICAgaWYgKENvU0VDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCA8IDEwKVxuICAgIHtcbiAgICAgIHRoaXMuaWRlYWxFZGdlTGVuZ3RoID0gMTA7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICB0aGlzLmlkZWFsRWRnZUxlbmd0aCA9IENvU0VDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSDtcbiAgICB9XG5cbiAgICB0aGlzLnVzZVNtYXJ0SWRlYWxFZGdlTGVuZ3RoQ2FsY3VsYXRpb24gPVxuICAgICAgICAgICAgQ29TRUNvbnN0YW50cy5ERUZBVUxUX1VTRV9TTUFSVF9JREVBTF9FREdFX0xFTkdUSF9DQUxDVUxBVElPTjtcbiAgICB0aGlzLnNwcmluZ0NvbnN0YW50ID1cbiAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfU1BSSU5HX1NUUkVOR1RIO1xuICAgIHRoaXMucmVwdWxzaW9uQ29uc3RhbnQgPVxuICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEg7XG4gICAgdGhpcy5ncmF2aXR5Q29uc3RhbnQgPVxuICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1NUUkVOR1RIO1xuICAgIHRoaXMuY29tcG91bmRHcmF2aXR5Q29uc3RhbnQgPVxuICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1NUUkVOR1RIO1xuICAgIHRoaXMuZ3Jhdml0eVJhbmdlRmFjdG9yID1cbiAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9SQU5HRV9GQUNUT1I7XG4gICAgdGhpcy5jb21wb3VuZEdyYXZpdHlSYW5nZUZhY3RvciA9XG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfUkFOR0VfRkFDVE9SO1xuICB9XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjcmVhdGVCZW5kc0FzTmVlZGVkID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ1JFQVRFX0JFTkRTX0FTX05FRURFRDtcbiAgaWYgKGNyZWF0ZUJlbmRzQXNOZWVkZWQpXG4gIHtcbiAgICB0aGlzLmNyZWF0ZUJlbmRwb2ludHMoKTtcbiAgICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbEVkZ2VzKCk7XG4gIH1cblxuICB0aGlzLmxldmVsID0gMDtcbiAgcmV0dXJuIHRoaXMuY2xhc3NpY0xheW91dCgpO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuY2xhc3NpY0xheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5ub2Rlc1dpdGhHcmF2aXR5ID0gdGhpcy5jYWxjdWxhdGVOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvblRvKCk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLnNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uKHRoaXMubm9kZXNXaXRoR3Jhdml0eSk7XG4gIHRoaXMuY2FsY05vT2ZDaGlsZHJlbkZvckFsbE5vZGVzKCk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLmNhbGNMb3dlc3RDb21tb25BbmNlc3RvcnMoKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIuY2FsY0luY2x1c2lvblRyZWVEZXB0aHMoKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmNhbGNFc3RpbWF0ZWRTaXplKCk7XG4gIHRoaXMuY2FsY0lkZWFsRWRnZUxlbmd0aHMoKTtcbiAgXG4gIGlmICghdGhpcy5pbmNyZW1lbnRhbClcbiAge1xuICAgIHZhciBmb3Jlc3QgPSB0aGlzLmdldEZsYXRGb3Jlc3QoKTtcblxuICAgIC8vIFRoZSBncmFwaCBhc3NvY2lhdGVkIHdpdGggdGhpcyBsYXlvdXQgaXMgZmxhdCBhbmQgYSBmb3Jlc3RcbiAgICBpZiAoZm9yZXN0Lmxlbmd0aCA+IDApXG4gICAge1xuICAgICAgdGhpcy5wb3NpdGlvbk5vZGVzUmFkaWFsbHkoZm9yZXN0KTtcbiAgICB9XG4gICAgLy8gVGhlIGdyYXBoIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGxheW91dCBpcyBub3QgZmxhdCBvciBhIGZvcmVzdFxuICAgIGVsc2VcbiAgICB7XG4gICAgICAvLyBSZWR1Y2UgdGhlIHRyZWVzIHdoZW4gaW5jcmVtZW50YWwgbW9kZSBpcyBub3QgZW5hYmxlZCBhbmQgZ3JhcGggaXMgbm90IGEgZm9yZXN0IFxuICAgICAgdGhpcy5yZWR1Y2VUcmVlcygpO1xuICAgICAgLy8gVXBkYXRlIG5vZGVzIHRoYXQgZ3Jhdml0eSB3aWxsIGJlIGFwcGxpZWRcbiAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oKTtcbiAgICAgIHZhciBhbGxOb2RlcyA9IG5ldyBTZXQodGhpcy5nZXRBbGxOb2RlcygpKTtcbiAgICAgIHZhciBpbnRlcnNlY3Rpb24gPSB0aGlzLm5vZGVzV2l0aEdyYXZpdHkuZmlsdGVyKHggPT4gYWxsTm9kZXMuaGFzKHgpKTtcbiAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uKGludGVyc2VjdGlvbik7XG4gICAgICBcbiAgICAgIHRoaXMucG9zaXRpb25Ob2Rlc1JhbmRvbWx5KCk7XG4gICAgfVxuICB9XG5cbiAgdGhpcy5pbml0U3ByaW5nRW1iZWRkZXIoKTtcbiAgdGhpcy5ydW5TcHJpbmdFbWJlZGRlcigpO1xuXG4gIHJldHVybiB0cnVlO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnRvdGFsSXRlcmF0aW9ucysrO1xuICBcbiAgaWYgKHRoaXMudG90YWxJdGVyYXRpb25zID09PSB0aGlzLm1heEl0ZXJhdGlvbnMgJiYgIXRoaXMuaXNUcmVlR3Jvd2luZyAmJiAhdGhpcy5pc0dyb3d0aEZpbmlzaGVkKSB7XG4gICAgaWYodGhpcy5wcnVuZWROb2Rlc0FsbC5sZW5ndGggPiAwKXtcbiAgICAgIHRoaXMuaXNUcmVlR3Jvd2luZyA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7ICBcbiAgICB9XG4gIH1cbiAgXG4gIGlmICh0aGlzLnRvdGFsSXRlcmF0aW9ucyAlIEZETGF5b3V0Q29uc3RhbnRzLkNPTlZFUkdFTkNFX0NIRUNLX1BFUklPRCA9PSAwICAmJiAhdGhpcy5pc1RyZWVHcm93aW5nICYmICF0aGlzLmlzR3Jvd3RoRmluaXNoZWQpXG4gIHtcbiAgICBpZiAodGhpcy5pc0NvbnZlcmdlZCgpKVxuICAgIHtcbiAgICAgIGlmKHRoaXMucHJ1bmVkTm9kZXNBbGwubGVuZ3RoID4gMCl7XG4gICAgICAgIHRoaXMuaXNUcmVlR3Jvd2luZyA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7ICBcbiAgICAgIH0gXG4gICAgfVxuXG4gICAgdGhpcy5jb29saW5nRmFjdG9yID0gdGhpcy5pbml0aWFsQ29vbGluZ0ZhY3RvciAqXG4gICAgICAgICAgICAoKHRoaXMubWF4SXRlcmF0aW9ucyAtIHRoaXMudG90YWxJdGVyYXRpb25zKSAvIHRoaXMubWF4SXRlcmF0aW9ucyk7XG4gICAgdGhpcy5hbmltYXRpb25QZXJpb2QgPSBNYXRoLmNlaWwodGhpcy5pbml0aWFsQW5pbWF0aW9uUGVyaW9kICogTWF0aC5zcXJ0KHRoaXMuY29vbGluZ0ZhY3RvcikpO1xuICB9XG4gIC8vIE9wZXJhdGlvbnMgd2hpbGUgdHJlZSBpcyBncm93aW5nIGFnYWluIFxuICBpZih0aGlzLmlzVHJlZUdyb3dpbmcpe1xuICAgIGlmKHRoaXMuZ3Jvd1RyZWVJdGVyYXRpb25zICUgMTAgPT0gMCl7XG4gICAgICBpZih0aGlzLnBydW5lZE5vZGVzQWxsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIudXBkYXRlQm91bmRzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlR3JpZCgpO1xuICAgICAgICB0aGlzLmdyb3dUcmVlKHRoaXMucHJ1bmVkTm9kZXNBbGwpO1xuICAgICAgICAvLyBVcGRhdGUgbm9kZXMgdGhhdCBncmF2aXR5IHdpbGwgYmUgYXBwbGllZFxuICAgICAgICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uKCk7XG4gICAgICAgIHZhciBhbGxOb2RlcyA9IG5ldyBTZXQodGhpcy5nZXRBbGxOb2RlcygpKTtcbiAgICAgICAgdmFyIGludGVyc2VjdGlvbiA9IHRoaXMubm9kZXNXaXRoR3Jhdml0eS5maWx0ZXIoeCA9PiBhbGxOb2Rlcy5oYXMoeCkpO1xuICAgICAgICB0aGlzLmdyYXBoTWFuYWdlci5zZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbihpbnRlcnNlY3Rpb24pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIudXBkYXRlQm91bmRzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlR3JpZCgpOyBcbiAgICAgICAgdGhpcy5jb29saW5nRmFjdG9yID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTDsgXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5pc1RyZWVHcm93aW5nID0gZmFsc2U7ICBcbiAgICAgICAgdGhpcy5pc0dyb3d0aEZpbmlzaGVkID0gdHJ1ZTsgXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZ3Jvd1RyZWVJdGVyYXRpb25zKys7XG4gIH1cbiAgLy8gT3BlcmF0aW9ucyBhZnRlciBncm93dGggaXMgZmluaXNoZWRcbiAgaWYodGhpcy5pc0dyb3d0aEZpbmlzaGVkKXtcbiAgICBpZiAodGhpcy5pc0NvbnZlcmdlZCgpKVxuICAgIHtcbiAgICAgIHJldHVybiB0cnVlOyAgXG4gICAgfVxuICAgIGlmKHRoaXMuYWZ0ZXJHcm93dGhJdGVyYXRpb25zICUgMTAgPT0gMCl7XG4gICAgICB0aGlzLmdyYXBoTWFuYWdlci51cGRhdGVCb3VuZHMoKTtcbiAgICAgIHRoaXMudXBkYXRlR3JpZCgpOyBcbiAgICB9XG4gICAgdGhpcy5jb29saW5nRmFjdG9yID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCAqICgoMTAwIC0gdGhpcy5hZnRlckdyb3d0aEl0ZXJhdGlvbnMpIC8gMTAwKTtcbiAgICB0aGlzLmFmdGVyR3Jvd3RoSXRlcmF0aW9ucysrO1xuICB9XG4gIFxuICB0aGlzLnRvdGFsRGlzcGxhY2VtZW50ID0gMDtcbiAgdGhpcy5ncmFwaE1hbmFnZXIudXBkYXRlQm91bmRzKCk7XG4gIHRoaXMuY2FsY1NwcmluZ0ZvcmNlcygpO1xuICB0aGlzLmNhbGNSZXB1bHNpb25Gb3JjZXMoKTtcbiAgdGhpcy5jYWxjR3Jhdml0YXRpb25hbEZvcmNlcygpO1xuICB0aGlzLm1vdmVOb2RlcygpO1xuICB0aGlzLmFuaW1hdGUoKTtcbiAgXG4gIHJldHVybiBmYWxzZTsgLy8gTGF5b3V0IGlzIG5vdCBlbmRlZCB5ZXQgcmV0dXJuIGZhbHNlXG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5nZXRQb3NpdGlvbnNEYXRhID0gZnVuY3Rpb24oKSB7XG4gIHZhciBhbGxOb2RlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzKCk7XG4gIHZhciBwRGF0YSA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHJlY3QgPSBhbGxOb2Rlc1tpXS5yZWN0O1xuICAgIHZhciBpZCA9IGFsbE5vZGVzW2ldLmlkO1xuICAgIHBEYXRhW2lkXSA9IHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIHg6IHJlY3QuZ2V0Q2VudGVyWCgpLFxuICAgICAgeTogcmVjdC5nZXRDZW50ZXJZKCksXG4gICAgICB3OiByZWN0LndpZHRoLFxuICAgICAgaDogcmVjdC5oZWlnaHRcbiAgICB9O1xuICB9XG4gIFxuICByZXR1cm4gcERhdGE7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5ydW5TcHJpbmdFbWJlZGRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5pbml0aWFsQW5pbWF0aW9uUGVyaW9kID0gMjU7XG4gIHRoaXMuYW5pbWF0aW9uUGVyaW9kID0gdGhpcy5pbml0aWFsQW5pbWF0aW9uUGVyaW9kO1xuICB2YXIgbGF5b3V0RW5kZWQgPSBmYWxzZTtcbiAgXG4gIC8vIElmIGFtaW5hdGUgb3B0aW9uIGlzICdkdXJpbmcnIHNpZ25hbCB0aGF0IGxheW91dCBpcyBzdXBwb3NlZCB0byBzdGFydCBpdGVyYXRpbmdcbiAgaWYgKCBGRExheW91dENvbnN0YW50cy5BTklNQVRFID09PSAnZHVyaW5nJyApIHtcbiAgICB0aGlzLmVtaXQoJ2xheW91dHN0YXJ0ZWQnKTtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBJZiBhbWluYXRlIG9wdGlvbiBpcyAnZHVyaW5nJyB0aWNrKCkgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgb24gaW5kZXguanNcbiAgICB3aGlsZSAoIWxheW91dEVuZGVkKSB7XG4gICAgICBsYXlvdXRFbmRlZCA9IHRoaXMudGljaygpO1xuICAgIH1cblxuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnVwZGF0ZUJvdW5kcygpO1xuICB9XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5jYWxjdWxhdGVOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvblRvID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbm9kZUxpc3QgPSBbXTtcbiAgdmFyIGdyYXBoO1xuXG4gIHZhciBncmFwaHMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRHcmFwaHMoKTtcbiAgdmFyIHNpemUgPSBncmFwaHMubGVuZ3RoO1xuICB2YXIgaTtcbiAgZm9yIChpID0gMDsgaSA8IHNpemU7IGkrKylcbiAge1xuICAgIGdyYXBoID0gZ3JhcGhzW2ldO1xuXG4gICAgZ3JhcGgudXBkYXRlQ29ubmVjdGVkKCk7XG5cbiAgICBpZiAoIWdyYXBoLmlzQ29ubmVjdGVkKVxuICAgIHtcbiAgICAgIG5vZGVMaXN0ID0gbm9kZUxpc3QuY29uY2F0KGdyYXBoLmdldE5vZGVzKCkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub2RlTGlzdDtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmNhbGNOb09mQ2hpbGRyZW5Gb3JBbGxOb2RlcyA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBub2RlO1xuICB2YXIgYWxsTm9kZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2RlcygpO1xuICBcbiAgZm9yKHZhciBpID0gMDsgaSA8IGFsbE5vZGVzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgICBub2RlID0gYWxsTm9kZXNbaV07XG4gICAgICBub2RlLm5vT2ZDaGlsZHJlbiA9IG5vZGUuZ2V0Tm9PZkNoaWxkcmVuKCk7XG4gIH1cbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmNyZWF0ZUJlbmRwb2ludHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlZGdlcyA9IFtdO1xuICBlZGdlcyA9IGVkZ2VzLmNvbmNhdCh0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxFZGdlcygpKTtcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgSGFzaFNldCgpO1xuICB2YXIgaTtcbiAgZm9yIChpID0gMDsgaSA8IGVkZ2VzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgdmFyIGVkZ2UgPSBlZGdlc1tpXTtcblxuICAgIGlmICghdmlzaXRlZC5jb250YWlucyhlZGdlKSlcbiAgICB7XG4gICAgICB2YXIgc291cmNlID0gZWRnZS5nZXRTb3VyY2UoKTtcbiAgICAgIHZhciB0YXJnZXQgPSBlZGdlLmdldFRhcmdldCgpO1xuXG4gICAgICBpZiAoc291cmNlID09IHRhcmdldClcbiAgICAgIHtcbiAgICAgICAgZWRnZS5nZXRCZW5kcG9pbnRzKCkucHVzaChuZXcgUG9pbnREKCkpO1xuICAgICAgICBlZGdlLmdldEJlbmRwb2ludHMoKS5wdXNoKG5ldyBQb2ludEQoKSk7XG4gICAgICAgIHRoaXMuY3JlYXRlRHVtbXlOb2Rlc0ZvckJlbmRwb2ludHMoZWRnZSk7XG4gICAgICAgIHZpc2l0ZWQuYWRkKGVkZ2UpO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICB2YXIgZWRnZUxpc3QgPSBbXTtcblxuICAgICAgICBlZGdlTGlzdCA9IGVkZ2VMaXN0LmNvbmNhdChzb3VyY2UuZ2V0RWRnZUxpc3RUb05vZGUodGFyZ2V0KSk7XG4gICAgICAgIGVkZ2VMaXN0ID0gZWRnZUxpc3QuY29uY2F0KHRhcmdldC5nZXRFZGdlTGlzdFRvTm9kZShzb3VyY2UpKTtcblxuICAgICAgICBpZiAoIXZpc2l0ZWQuY29udGFpbnMoZWRnZUxpc3RbMF0pKVxuICAgICAgICB7XG4gICAgICAgICAgaWYgKGVkZ2VMaXN0Lmxlbmd0aCA+IDEpXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIGs7XG4gICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgZWRnZUxpc3QubGVuZ3RoOyBrKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhciBtdWx0aUVkZ2UgPSBlZGdlTGlzdFtrXTtcbiAgICAgICAgICAgICAgbXVsdGlFZGdlLmdldEJlbmRwb2ludHMoKS5wdXNoKG5ldyBQb2ludEQoKSk7XG4gICAgICAgICAgICAgIHRoaXMuY3JlYXRlRHVtbXlOb2Rlc0ZvckJlbmRwb2ludHMobXVsdGlFZGdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdmlzaXRlZC5hZGRBbGwobGlzdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmlzaXRlZC5zaXplKCkgPT0gZWRnZXMubGVuZ3RoKVxuICAgIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUucG9zaXRpb25Ob2Rlc1JhZGlhbGx5ID0gZnVuY3Rpb24gKGZvcmVzdCkge1xuICAvLyBXZSB0aWxlIHRoZSB0cmVlcyB0byBhIGdyaWQgcm93IGJ5IHJvdzsgZmlyc3QgdHJlZSBzdGFydHMgYXQgKDAsMClcbiAgdmFyIGN1cnJlbnRTdGFydGluZ1BvaW50ID0gbmV3IFBvaW50KDAsIDApO1xuICB2YXIgbnVtYmVyT2ZDb2x1bW5zID0gTWF0aC5jZWlsKE1hdGguc3FydChmb3Jlc3QubGVuZ3RoKSk7XG4gIHZhciBoZWlnaHQgPSAwO1xuICB2YXIgY3VycmVudFkgPSAwO1xuICB2YXIgY3VycmVudFggPSAwO1xuICB2YXIgcG9pbnQgPSBuZXcgUG9pbnREKDAsIDApO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZm9yZXN0Lmxlbmd0aDsgaSsrKVxuICB7XG4gICAgaWYgKGkgJSBudW1iZXJPZkNvbHVtbnMgPT0gMClcbiAgICB7XG4gICAgICAvLyBTdGFydCBvZiBhIG5ldyByb3csIG1ha2UgdGhlIHggY29vcmRpbmF0ZSAwLCBpbmNyZW1lbnQgdGhlXG4gICAgICAvLyB5IGNvb3JkaW5hdGUgd2l0aCB0aGUgbWF4IGhlaWdodCBvZiB0aGUgcHJldmlvdXMgcm93XG4gICAgICBjdXJyZW50WCA9IDA7XG4gICAgICBjdXJyZW50WSA9IGhlaWdodDtcblxuICAgICAgaWYgKGkgIT0gMClcbiAgICAgIHtcbiAgICAgICAgY3VycmVudFkgKz0gQ29TRUNvbnN0YW50cy5ERUZBVUxUX0NPTVBPTkVOVF9TRVBFUkFUSU9OO1xuICAgICAgfVxuXG4gICAgICBoZWlnaHQgPSAwO1xuICAgIH1cblxuICAgIHZhciB0cmVlID0gZm9yZXN0W2ldO1xuXG4gICAgLy8gRmluZCB0aGUgY2VudGVyIG9mIHRoZSB0cmVlXG4gICAgdmFyIGNlbnRlck5vZGUgPSBMYXlvdXQuZmluZENlbnRlck9mVHJlZSh0cmVlKTtcblxuICAgIC8vIFNldCB0aGUgc3RhcmluZyBwb2ludCBvZiB0aGUgbmV4dCB0cmVlXG4gICAgY3VycmVudFN0YXJ0aW5nUG9pbnQueCA9IGN1cnJlbnRYO1xuICAgIGN1cnJlbnRTdGFydGluZ1BvaW50LnkgPSBjdXJyZW50WTtcblxuICAgIC8vIERvIGEgcmFkaWFsIGxheW91dCBzdGFydGluZyB3aXRoIHRoZSBjZW50ZXJcbiAgICBwb2ludCA9XG4gICAgICAgICAgICBDb1NFTGF5b3V0LnJhZGlhbExheW91dCh0cmVlLCBjZW50ZXJOb2RlLCBjdXJyZW50U3RhcnRpbmdQb2ludCk7XG5cbiAgICBpZiAocG9pbnQueSA+IGhlaWdodClcbiAgICB7XG4gICAgICBoZWlnaHQgPSBNYXRoLmZsb29yKHBvaW50LnkpO1xuICAgIH1cblxuICAgIGN1cnJlbnRYID0gTWF0aC5mbG9vcihwb2ludC54ICsgQ29TRUNvbnN0YW50cy5ERUZBVUxUX0NPTVBPTkVOVF9TRVBFUkFUSU9OKTtcbiAgfVxuXG4gIHRoaXMudHJhbnNmb3JtKFxuICAgICAgICAgIG5ldyBQb2ludEQoTGF5b3V0Q29uc3RhbnRzLldPUkxEX0NFTlRFUl9YIC0gcG9pbnQueCAvIDIsXG4gICAgICAgICAgICAgICAgICBMYXlvdXRDb25zdGFudHMuV09STERfQ0VOVEVSX1kgLSBwb2ludC55IC8gMikpO1xufTtcblxuQ29TRUxheW91dC5yYWRpYWxMYXlvdXQgPSBmdW5jdGlvbiAodHJlZSwgY2VudGVyTm9kZSwgc3RhcnRpbmdQb2ludCkge1xuICB2YXIgcmFkaWFsU2VwID0gTWF0aC5tYXgodGhpcy5tYXhEaWFnb25hbEluVHJlZSh0cmVlKSxcbiAgICAgICAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfUkFESUFMX1NFUEFSQVRJT04pO1xuICBDb1NFTGF5b3V0LmJyYW5jaFJhZGlhbExheW91dChjZW50ZXJOb2RlLCBudWxsLCAwLCAzNTksIDAsIHJhZGlhbFNlcCk7XG4gIHZhciBib3VuZHMgPSBMR3JhcGguY2FsY3VsYXRlQm91bmRzKHRyZWUpO1xuXG4gIHZhciB0cmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKCk7XG4gIHRyYW5zZm9ybS5zZXREZXZpY2VPcmdYKGJvdW5kcy5nZXRNaW5YKCkpO1xuICB0cmFuc2Zvcm0uc2V0RGV2aWNlT3JnWShib3VuZHMuZ2V0TWluWSgpKTtcbiAgdHJhbnNmb3JtLnNldFdvcmxkT3JnWChzdGFydGluZ1BvaW50LngpO1xuICB0cmFuc2Zvcm0uc2V0V29ybGRPcmdZKHN0YXJ0aW5nUG9pbnQueSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgdmFyIG5vZGUgPSB0cmVlW2ldO1xuICAgIG5vZGUudHJhbnNmb3JtKHRyYW5zZm9ybSk7XG4gIH1cblxuICB2YXIgYm90dG9tUmlnaHQgPVxuICAgICAgICAgIG5ldyBQb2ludEQoYm91bmRzLmdldE1heFgoKSwgYm91bmRzLmdldE1heFkoKSk7XG5cbiAgcmV0dXJuIHRyYW5zZm9ybS5pbnZlcnNlVHJhbnNmb3JtUG9pbnQoYm90dG9tUmlnaHQpO1xufTtcblxuQ29TRUxheW91dC5icmFuY2hSYWRpYWxMYXlvdXQgPSBmdW5jdGlvbiAobm9kZSwgcGFyZW50T2ZOb2RlLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgZGlzdGFuY2UsIHJhZGlhbFNlcGFyYXRpb24pIHtcbiAgLy8gRmlyc3QsIHBvc2l0aW9uIHRoaXMgbm9kZSBieSBmaW5kaW5nIGl0cyBhbmdsZS5cbiAgdmFyIGhhbGZJbnRlcnZhbCA9ICgoZW5kQW5nbGUgLSBzdGFydEFuZ2xlKSArIDEpIC8gMjtcblxuICBpZiAoaGFsZkludGVydmFsIDwgMClcbiAge1xuICAgIGhhbGZJbnRlcnZhbCArPSAxODA7XG4gIH1cblxuICB2YXIgbm9kZUFuZ2xlID0gKGhhbGZJbnRlcnZhbCArIHN0YXJ0QW5nbGUpICUgMzYwO1xuICB2YXIgdGV0YSA9IChub2RlQW5nbGUgKiBJR2VvbWV0cnkuVFdPX1BJKSAvIDM2MDtcblxuICAvLyBNYWtlIHBvbGFyIHRvIGphdmEgY29yZGluYXRlIGNvbnZlcnNpb24uXG4gIHZhciBjb3NfdGV0YSA9IE1hdGguY29zKHRldGEpO1xuICB2YXIgeF8gPSBkaXN0YW5jZSAqIE1hdGguY29zKHRldGEpO1xuICB2YXIgeV8gPSBkaXN0YW5jZSAqIE1hdGguc2luKHRldGEpO1xuXG4gIG5vZGUuc2V0Q2VudGVyKHhfLCB5Xyk7XG5cbiAgLy8gVHJhdmVyc2UgYWxsIG5laWdoYm9ycyBvZiB0aGlzIG5vZGUgYW5kIHJlY3Vyc2l2ZWx5IGNhbGwgdGhpc1xuICAvLyBmdW5jdGlvbi5cbiAgdmFyIG5laWdoYm9yRWRnZXMgPSBbXTtcbiAgbmVpZ2hib3JFZGdlcyA9IG5laWdoYm9yRWRnZXMuY29uY2F0KG5vZGUuZ2V0RWRnZXMoKSk7XG4gIHZhciBjaGlsZENvdW50ID0gbmVpZ2hib3JFZGdlcy5sZW5ndGg7XG5cbiAgaWYgKHBhcmVudE9mTm9kZSAhPSBudWxsKVxuICB7XG4gICAgY2hpbGRDb3VudC0tO1xuICB9XG5cbiAgdmFyIGJyYW5jaENvdW50ID0gMDtcblxuICB2YXIgaW5jRWRnZXNDb3VudCA9IG5laWdoYm9yRWRnZXMubGVuZ3RoO1xuICB2YXIgc3RhcnRJbmRleDtcblxuICB2YXIgZWRnZXMgPSBub2RlLmdldEVkZ2VzQmV0d2VlbihwYXJlbnRPZk5vZGUpO1xuXG4gIC8vIElmIHRoZXJlIGFyZSBtdWx0aXBsZSBlZGdlcywgcHJ1bmUgdGhlbSB1bnRpbCB0aGVyZSByZW1haW5zIG9ubHkgb25lXG4gIC8vIGVkZ2UuXG4gIHdoaWxlIChlZGdlcy5sZW5ndGggPiAxKVxuICB7XG4gICAgLy9uZWlnaGJvckVkZ2VzLnJlbW92ZShlZGdlcy5yZW1vdmUoMCkpO1xuICAgIHZhciB0ZW1wID0gZWRnZXNbMF07XG4gICAgZWRnZXMuc3BsaWNlKDAsIDEpO1xuICAgIHZhciBpbmRleCA9IG5laWdoYm9yRWRnZXMuaW5kZXhPZih0ZW1wKTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgbmVpZ2hib3JFZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBpbmNFZGdlc0NvdW50LS07XG4gICAgY2hpbGRDb3VudC0tO1xuICB9XG5cbiAgaWYgKHBhcmVudE9mTm9kZSAhPSBudWxsKVxuICB7XG4gICAgLy9hc3NlcnQgZWRnZXMubGVuZ3RoID09IDE7XG4gICAgc3RhcnRJbmRleCA9IChuZWlnaGJvckVkZ2VzLmluZGV4T2YoZWRnZXNbMF0pICsgMSkgJSBpbmNFZGdlc0NvdW50O1xuICB9XG4gIGVsc2VcbiAge1xuICAgIHN0YXJ0SW5kZXggPSAwO1xuICB9XG5cbiAgdmFyIHN0ZXBBbmdsZSA9IE1hdGguYWJzKGVuZEFuZ2xlIC0gc3RhcnRBbmdsZSkgLyBjaGlsZENvdW50O1xuXG4gIGZvciAodmFyIGkgPSBzdGFydEluZGV4O1xuICAgICAgICAgIGJyYW5jaENvdW50ICE9IGNoaWxkQ291bnQ7XG4gICAgICAgICAgaSA9ICgrK2kpICUgaW5jRWRnZXNDb3VudClcbiAge1xuICAgIHZhciBjdXJyZW50TmVpZ2hib3IgPVxuICAgICAgICAgICAgbmVpZ2hib3JFZGdlc1tpXS5nZXRPdGhlckVuZChub2RlKTtcblxuICAgIC8vIERvbid0IGJhY2sgdHJhdmVyc2UgdG8gcm9vdCBub2RlIGluIGN1cnJlbnQgdHJlZS5cbiAgICBpZiAoY3VycmVudE5laWdoYm9yID09IHBhcmVudE9mTm9kZSlcbiAgICB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRTdGFydEFuZ2xlID1cbiAgICAgICAgICAgIChzdGFydEFuZ2xlICsgYnJhbmNoQ291bnQgKiBzdGVwQW5nbGUpICUgMzYwO1xuICAgIHZhciBjaGlsZEVuZEFuZ2xlID0gKGNoaWxkU3RhcnRBbmdsZSArIHN0ZXBBbmdsZSkgJSAzNjA7XG5cbiAgICBDb1NFTGF5b3V0LmJyYW5jaFJhZGlhbExheW91dChjdXJyZW50TmVpZ2hib3IsXG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgY2hpbGRTdGFydEFuZ2xlLCBjaGlsZEVuZEFuZ2xlLFxuICAgICAgICAgICAgZGlzdGFuY2UgKyByYWRpYWxTZXBhcmF0aW9uLCByYWRpYWxTZXBhcmF0aW9uKTtcblxuICAgIGJyYW5jaENvdW50Kys7XG4gIH1cbn07XG5cbkNvU0VMYXlvdXQubWF4RGlhZ29uYWxJblRyZWUgPSBmdW5jdGlvbiAodHJlZSkge1xuICB2YXIgbWF4RGlhZ29uYWwgPSBJbnRlZ2VyLk1JTl9WQUxVRTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspXG4gIHtcbiAgICB2YXIgbm9kZSA9IHRyZWVbaV07XG4gICAgdmFyIGRpYWdvbmFsID0gbm9kZS5nZXREaWFnb25hbCgpO1xuXG4gICAgaWYgKGRpYWdvbmFsID4gbWF4RGlhZ29uYWwpXG4gICAge1xuICAgICAgbWF4RGlhZ29uYWwgPSBkaWFnb25hbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF4RGlhZ29uYWw7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5jYWxjUmVwdWxzaW9uUmFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIGZvcm11bGEgaXMgMiB4IChsZXZlbCArIDEpIHggaWRlYWxFZGdlTGVuZ3RoXG4gIHJldHVybiAoMiAqICh0aGlzLmxldmVsICsgMSkgKiB0aGlzLmlkZWFsRWRnZUxlbmd0aCk7XG59O1xuXG4vLyBUaWxpbmcgbWV0aG9kc1xuXG4vLyBHcm91cCB6ZXJvIGRlZ3JlZSBtZW1iZXJzIHdob3NlIHBhcmVudHMgYXJlIG5vdCB0byBiZSB0aWxlZCwgY3JlYXRlIGR1bW15IHBhcmVudHMgd2hlcmUgbmVlZGVkIGFuZCBmaWxsIG1lbWJlckdyb3VwcyBieSB0aGVpciBkdW1tcCBwYXJlbnQgaWQnc1xuQ29TRUxheW91dC5wcm90b3R5cGUuZ3JvdXBaZXJvRGVncmVlTWVtYmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICAvLyBhcnJheSBvZiBbcGFyZW50X2lkIHggb25lRGVncmVlTm9kZV9pZF1cbiAgdmFyIHRlbXBNZW1iZXJHcm91cHMgPSB7fTsgLy8gQSB0ZW1wb3JhcnkgbWFwIG9mIHBhcmVudCBub2RlIGFuZCBpdHMgemVybyBkZWdyZWUgbWVtYmVyc1xuICB0aGlzLm1lbWJlckdyb3VwcyA9IHt9OyAvLyBBIG1hcCBvZiBkdW1teSBwYXJlbnQgbm9kZSBhbmQgaXRzIHplcm8gZGVncmVlIG1lbWJlcnMgd2hvc2UgcGFyZW50cyBhcmUgbm90IHRvIGJlIHRpbGVkXG4gIHRoaXMuaWRUb0R1bW15Tm9kZSA9IHt9OyAvLyBBIG1hcCBvZiBpZCB0byBkdW1teSBub2RlIFxuICBcbiAgdmFyIHplcm9EZWdyZWUgPSBbXTsgLy8gTGlzdCBvZiB6ZXJvIGRlZ3JlZSBub2RlcyB3aG9zZSBwYXJlbnRzIGFyZSBub3QgdG8gYmUgdGlsZWRcbiAgdmFyIGFsbE5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXMoKTtcblxuICAvLyBGaWxsIHplcm8gZGVncmVlIGxpc3RcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBub2RlID0gYWxsTm9kZXNbaV07XG4gICAgdmFyIHBhcmVudCA9IG5vZGUuZ2V0UGFyZW50KCk7XG4gICAgLy8gSWYgYSBub2RlIGhhcyB6ZXJvIGRlZ3JlZSBhbmQgaXRzIHBhcmVudCBpcyBub3QgdG8gYmUgdGlsZWQgaWYgZXhpc3RzIGFkZCB0aGF0IG5vZGUgdG8gemVyb0RlZ3JlcyBsaXN0XG4gICAgaWYgKHRoaXMuZ2V0Tm9kZURlZ3JlZVdpdGhDaGlsZHJlbihub2RlKSA9PT0gMCAmJiAoIHBhcmVudC5pZCA9PSB1bmRlZmluZWQgfHwgIXRoaXMuZ2V0VG9CZVRpbGVkKHBhcmVudCkgKSApIHtcbiAgICAgIHplcm9EZWdyZWUucHVzaChub2RlKTtcbiAgICB9XG4gIH1cblxuICAvLyBDcmVhdGUgYSBtYXAgb2YgcGFyZW50IG5vZGUgYW5kIGl0cyB6ZXJvIGRlZ3JlZSBtZW1iZXJzXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgemVyb0RlZ3JlZS5sZW5ndGg7IGkrKylcbiAge1xuICAgIHZhciBub2RlID0gemVyb0RlZ3JlZVtpXTsgLy8gWmVybyBkZWdyZWUgbm9kZSBpdHNlbGZcbiAgICB2YXIgcF9pZCA9IG5vZGUuZ2V0UGFyZW50KCkuaWQ7IC8vIFBhcmVudCBpZFxuXG4gICAgaWYgKHR5cGVvZiB0ZW1wTWVtYmVyR3JvdXBzW3BfaWRdID09PSBcInVuZGVmaW5lZFwiKVxuICAgICAgdGVtcE1lbWJlckdyb3Vwc1twX2lkXSA9IFtdO1xuXG4gICAgdGVtcE1lbWJlckdyb3Vwc1twX2lkXSA9IHRlbXBNZW1iZXJHcm91cHNbcF9pZF0uY29uY2F0KG5vZGUpOyAvLyBQdXNoIG5vZGUgdG8gdGhlIGxpc3QgYmVsb25ncyB0byBpdHMgcGFyZW50IGluIHRlbXBNZW1iZXJHcm91cHNcbiAgfVxuXG4gIC8vIElmIHRoZXJlIGFyZSBhdCBsZWFzdCB0d28gbm9kZXMgYXQgYSBsZXZlbCwgY3JlYXRlIGEgZHVtbXkgY29tcG91bmQgZm9yIHRoZW1cbiAgT2JqZWN0LmtleXModGVtcE1lbWJlckdyb3VwcykuZm9yRWFjaChmdW5jdGlvbihwX2lkKSB7XG4gICAgaWYgKHRlbXBNZW1iZXJHcm91cHNbcF9pZF0ubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIGR1bW15Q29tcG91bmRJZCA9IFwiRHVtbXlDb21wb3VuZF9cIiArIHBfaWQ7IC8vIFRoZSBpZCBvZiBkdW1teSBjb21wb3VuZCB3aGljaCB3aWxsIGJlIGNyZWF0ZWQgc29vblxuICAgICAgc2VsZi5tZW1iZXJHcm91cHNbZHVtbXlDb21wb3VuZElkXSA9IHRlbXBNZW1iZXJHcm91cHNbcF9pZF07IC8vIEFkZCBkdW1teSBjb21wb3VuZCB0byBtZW1iZXJHcm91cHNcblxuICAgICAgdmFyIHBhcmVudCA9IHRlbXBNZW1iZXJHcm91cHNbcF9pZF1bMF0uZ2V0UGFyZW50KCk7IC8vIFRoZSBwYXJlbnQgb2YgemVybyBkZWdyZWUgbm9kZXMgd2lsbCBiZSB0aGUgcGFyZW50IG9mIG5ldyBkdW1teSBjb21wb3VuZFxuXG4gICAgICAvLyBDcmVhdGUgYSBkdW1teSBjb21wb3VuZCB3aXRoIGNhbGN1bGF0ZWQgaWRcbiAgICAgIHZhciBkdW1teUNvbXBvdW5kID0gbmV3IENvU0VOb2RlKHNlbGYuZ3JhcGhNYW5hZ2VyKTtcbiAgICAgIGR1bW15Q29tcG91bmQuaWQgPSBkdW1teUNvbXBvdW5kSWQ7XG4gICAgICBkdW1teUNvbXBvdW5kLnBhZGRpbmdMZWZ0ID0gcGFyZW50LnBhZGRpbmdMZWZ0IHx8IDA7XG4gICAgICBkdW1teUNvbXBvdW5kLnBhZGRpbmdSaWdodCA9IHBhcmVudC5wYWRkaW5nUmlnaHQgfHwgMDtcbiAgICAgIGR1bW15Q29tcG91bmQucGFkZGluZ0JvdHRvbSA9IHBhcmVudC5wYWRkaW5nQm90dG9tIHx8IDA7XG4gICAgICBkdW1teUNvbXBvdW5kLnBhZGRpbmdUb3AgPSBwYXJlbnQucGFkZGluZ1RvcCB8fCAwO1xuICAgICAgXG4gICAgICBzZWxmLmlkVG9EdW1teU5vZGVbZHVtbXlDb21wb3VuZElkXSA9IGR1bW15Q29tcG91bmQ7XG4gICAgICBcbiAgICAgIHZhciBkdW1teVBhcmVudEdyYXBoID0gc2VsZi5nZXRHcmFwaE1hbmFnZXIoKS5hZGQoc2VsZi5uZXdHcmFwaCgpLCBkdW1teUNvbXBvdW5kKTtcbiAgICAgIHZhciBwYXJlbnRHcmFwaCA9IHBhcmVudC5nZXRDaGlsZCgpO1xuXG4gICAgICAvLyBBZGQgZHVtbXkgY29tcG91bmQgdG8gcGFyZW50IHRoZSBncmFwaFxuICAgICAgcGFyZW50R3JhcGguYWRkKGR1bW15Q29tcG91bmQpO1xuXG4gICAgICAvLyBGb3IgZWFjaCB6ZXJvIGRlZ3JlZSBub2RlIGluIHRoaXMgbGV2ZWwgcmVtb3ZlIGl0IGZyb20gaXRzIHBhcmVudCBncmFwaCBhbmQgYWRkIGl0IHRvIHRoZSBncmFwaCBvZiBkdW1teSBwYXJlbnRcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcE1lbWJlckdyb3Vwc1twX2lkXS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbm9kZSA9IHRlbXBNZW1iZXJHcm91cHNbcF9pZF1baV07XG4gICAgICAgIFxuICAgICAgICBwYXJlbnRHcmFwaC5yZW1vdmUobm9kZSk7XG4gICAgICAgIGR1bW15UGFyZW50R3JhcGguYWRkKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5jbGVhckNvbXBvdW5kcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNoaWxkR3JhcGhNYXAgPSB7fTtcbiAgdmFyIGlkVG9Ob2RlID0ge307XG5cbiAgLy8gR2V0IGNvbXBvdW5kIG9yZGVyaW5nIGJ5IGZpbmRpbmcgdGhlIGlubmVyIG9uZSBmaXJzdFxuICB0aGlzLnBlcmZvcm1ERlNPbkNvbXBvdW5kcygpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb21wb3VuZE9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgXG4gICAgaWRUb05vZGVbdGhpcy5jb21wb3VuZE9yZGVyW2ldLmlkXSA9IHRoaXMuY29tcG91bmRPcmRlcltpXTtcbiAgICBjaGlsZEdyYXBoTWFwW3RoaXMuY29tcG91bmRPcmRlcltpXS5pZF0gPSBbXS5jb25jYXQodGhpcy5jb21wb3VuZE9yZGVyW2ldLmdldENoaWxkKCkuZ2V0Tm9kZXMoKSk7XG5cbiAgICAvLyBSZW1vdmUgY2hpbGRyZW4gb2YgY29tcG91bmRzXG4gICAgdGhpcy5ncmFwaE1hbmFnZXIucmVtb3ZlKHRoaXMuY29tcG91bmRPcmRlcltpXS5nZXRDaGlsZCgpKTtcbiAgICB0aGlzLmNvbXBvdW5kT3JkZXJbaV0uY2hpbGQgPSBudWxsO1xuICB9XG4gIFxuICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbE5vZGVzKCk7XG4gIFxuICAvLyBUaWxlIHRoZSByZW1vdmVkIGNoaWxkcmVuXG4gIHRoaXMudGlsZUNvbXBvdW5kTWVtYmVycyhjaGlsZEdyYXBoTWFwLCBpZFRvTm9kZSk7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5jbGVhclplcm9EZWdyZWVNZW1iZXJzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciB0aWxlZFplcm9EZWdyZWVQYWNrID0gdGhpcy50aWxlZFplcm9EZWdyZWVQYWNrID0gW107XG5cbiAgT2JqZWN0LmtleXModGhpcy5tZW1iZXJHcm91cHMpLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICB2YXIgY29tcG91bmROb2RlID0gc2VsZi5pZFRvRHVtbXlOb2RlW2lkXTsgLy8gR2V0IHRoZSBkdW1teSBjb21wb3VuZFxuXG4gICAgdGlsZWRaZXJvRGVncmVlUGFja1tpZF0gPSBzZWxmLnRpbGVOb2RlcyhzZWxmLm1lbWJlckdyb3Vwc1tpZF0sIGNvbXBvdW5kTm9kZS5wYWRkaW5nTGVmdCArIGNvbXBvdW5kTm9kZS5wYWRkaW5nUmlnaHQpO1xuXG4gICAgLy8gU2V0IHRoZSB3aWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSBkdW1teSBjb21wb3VuZCBhcyBjYWxjdWxhdGVkXG4gICAgY29tcG91bmROb2RlLnJlY3Qud2lkdGggPSB0aWxlZFplcm9EZWdyZWVQYWNrW2lkXS53aWR0aDtcbiAgICBjb21wb3VuZE5vZGUucmVjdC5oZWlnaHQgPSB0aWxlZFplcm9EZWdyZWVQYWNrW2lkXS5oZWlnaHQ7XG4gIH0pO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUucmVwb3B1bGF0ZUNvbXBvdW5kcyA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgaSA9IHRoaXMuY29tcG91bmRPcmRlci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsQ29tcG91bmROb2RlID0gdGhpcy5jb21wb3VuZE9yZGVyW2ldO1xuICAgIHZhciBpZCA9IGxDb21wb3VuZE5vZGUuaWQ7XG4gICAgdmFyIGhvcml6b250YWxNYXJnaW4gPSBsQ29tcG91bmROb2RlLnBhZGRpbmdMZWZ0O1xuICAgIHZhciB2ZXJ0aWNhbE1hcmdpbiA9IGxDb21wb3VuZE5vZGUucGFkZGluZ1RvcDtcblxuICAgIHRoaXMuYWRqdXN0TG9jYXRpb25zKHRoaXMudGlsZWRNZW1iZXJQYWNrW2lkXSwgbENvbXBvdW5kTm9kZS5yZWN0LngsIGxDb21wb3VuZE5vZGUucmVjdC55LCBob3Jpem9udGFsTWFyZ2luLCB2ZXJ0aWNhbE1hcmdpbik7XG4gIH1cbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnJlcG9wdWxhdGVaZXJvRGVncmVlTWVtYmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgdGlsZWRQYWNrID0gdGhpcy50aWxlZFplcm9EZWdyZWVQYWNrO1xuICBcbiAgT2JqZWN0LmtleXModGlsZWRQYWNrKS5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XG4gICAgdmFyIGNvbXBvdW5kTm9kZSA9IHNlbGYuaWRUb0R1bW15Tm9kZVtpZF07IC8vIEdldCB0aGUgZHVtbXkgY29tcG91bmQgYnkgaXRzIGlkXG4gICAgdmFyIGhvcml6b250YWxNYXJnaW4gPSBjb21wb3VuZE5vZGUucGFkZGluZ0xlZnQ7XG4gICAgdmFyIHZlcnRpY2FsTWFyZ2luID0gY29tcG91bmROb2RlLnBhZGRpbmdUb3A7XG5cbiAgICAvLyBBZGp1c3QgdGhlIHBvc2l0aW9ucyBvZiBub2RlcyB3cnQgaXRzIGNvbXBvdW5kXG4gICAgc2VsZi5hZGp1c3RMb2NhdGlvbnModGlsZWRQYWNrW2lkXSwgY29tcG91bmROb2RlLnJlY3QueCwgY29tcG91bmROb2RlLnJlY3QueSwgaG9yaXpvbnRhbE1hcmdpbiwgdmVydGljYWxNYXJnaW4pO1xuICB9KTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmdldFRvQmVUaWxlZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciBpZCA9IG5vZGUuaWQ7XG4gIC8vZmlyc3RseSBjaGVjayB0aGUgcHJldmlvdXMgcmVzdWx0c1xuICBpZiAodGhpcy50b0JlVGlsZWRbaWRdICE9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy50b0JlVGlsZWRbaWRdO1xuICB9XG5cbiAgLy9vbmx5IGNvbXBvdW5kIG5vZGVzIGFyZSB0byBiZSB0aWxlZFxuICB2YXIgY2hpbGRHcmFwaCA9IG5vZGUuZ2V0Q2hpbGQoKTtcbiAgaWYgKGNoaWxkR3JhcGggPT0gbnVsbCkge1xuICAgIHRoaXMudG9CZVRpbGVkW2lkXSA9IGZhbHNlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBjaGlsZHJlbiA9IGNoaWxkR3JhcGguZ2V0Tm9kZXMoKTsgLy8gR2V0IHRoZSBjaGlsZHJlbiBub2Rlc1xuXG4gIC8vYSBjb21wb3VuZCBub2RlIGlzIG5vdCB0byBiZSB0aWxlZCBpZiBhbGwgb2YgaXRzIGNvbXBvdW5kIGNoaWxkcmVuIGFyZSBub3QgdG8gYmUgdGlsZWRcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0aGVDaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgaWYgKHRoaXMuZ2V0Tm9kZURlZ3JlZSh0aGVDaGlsZCkgPiAwKSB7XG4gICAgICB0aGlzLnRvQmVUaWxlZFtpZF0gPSBmYWxzZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvL3Bhc3MgdGhlIGNoaWxkcmVuIG5vdCBoYXZpbmcgdGhlIGNvbXBvdW5kIHN0cnVjdHVyZVxuICAgIGlmICh0aGVDaGlsZC5nZXRDaGlsZCgpID09IG51bGwpIHtcbiAgICAgIHRoaXMudG9CZVRpbGVkW3RoZUNoaWxkLmlkXSA9IGZhbHNlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmdldFRvQmVUaWxlZCh0aGVDaGlsZCkpIHtcbiAgICAgIHRoaXMudG9CZVRpbGVkW2lkXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICB0aGlzLnRvQmVUaWxlZFtpZF0gPSB0cnVlO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIEdldCBkZWdyZWUgb2YgYSBub2RlIGRlcGVuZGluZyBvZiBpdHMgZWRnZXMgYW5kIGluZGVwZW5kZW50IG9mIGl0cyBjaGlsZHJlblxuQ29TRUxheW91dC5wcm90b3R5cGUuZ2V0Tm9kZURlZ3JlZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciBpZCA9IG5vZGUuaWQ7XG4gIHZhciBlZGdlcyA9IG5vZGUuZ2V0RWRnZXMoKTtcbiAgdmFyIGRlZ3JlZSA9IDA7XG4gIFxuICAvLyBGb3IgdGhlIGVkZ2VzIGNvbm5lY3RlZFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVkZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGVkZ2UgPSBlZGdlc1tpXTtcbiAgICBpZiAoZWRnZS5nZXRTb3VyY2UoKS5pZCAhPT0gZWRnZS5nZXRUYXJnZXQoKS5pZCkge1xuICAgICAgZGVncmVlID0gZGVncmVlICsgMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlZ3JlZTtcbn07XG5cbi8vIEdldCBkZWdyZWUgb2YgYSBub2RlIHdpdGggaXRzIGNoaWxkcmVuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5nZXROb2RlRGVncmVlV2l0aENoaWxkcmVuID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIGRlZ3JlZSA9IHRoaXMuZ2V0Tm9kZURlZ3JlZShub2RlKTtcbiAgaWYgKG5vZGUuZ2V0Q2hpbGQoKSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGRlZ3JlZTtcbiAgfVxuICB2YXIgY2hpbGRyZW4gPSBub2RlLmdldENoaWxkKCkuZ2V0Tm9kZXMoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgIGRlZ3JlZSArPSB0aGlzLmdldE5vZGVEZWdyZWVXaXRoQ2hpbGRyZW4oY2hpbGQpO1xuICB9XG4gIHJldHVybiBkZWdyZWU7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5wZXJmb3JtREZTT25Db21wb3VuZHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY29tcG91bmRPcmRlciA9IFtdO1xuICB0aGlzLmZpbGxDb21wZXhPcmRlckJ5REZTKHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXROb2RlcygpKTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmZpbGxDb21wZXhPcmRlckJ5REZTID0gZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICBpZiAoY2hpbGQuZ2V0Q2hpbGQoKSAhPSBudWxsKSB7XG4gICAgICB0aGlzLmZpbGxDb21wZXhPcmRlckJ5REZTKGNoaWxkLmdldENoaWxkKCkuZ2V0Tm9kZXMoKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmdldFRvQmVUaWxlZChjaGlsZCkpIHtcbiAgICAgIHRoaXMuY29tcG91bmRPcmRlci5wdXNoKGNoaWxkKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuKiBUaGlzIG1ldGhvZCBwbGFjZXMgZWFjaCB6ZXJvIGRlZ3JlZSBtZW1iZXIgd3J0IGdpdmVuICh4LHkpIGNvb3JkaW5hdGVzICh0b3AgbGVmdCkuXG4qL1xuQ29TRUxheW91dC5wcm90b3R5cGUuYWRqdXN0TG9jYXRpb25zID0gZnVuY3Rpb24gKG9yZ2FuaXphdGlvbiwgeCwgeSwgY29tcG91bmRIb3Jpem9udGFsTWFyZ2luLCBjb21wb3VuZFZlcnRpY2FsTWFyZ2luKSB7XG4gIHggKz0gY29tcG91bmRIb3Jpem9udGFsTWFyZ2luO1xuICB5ICs9IGNvbXBvdW5kVmVydGljYWxNYXJnaW47XG5cbiAgdmFyIGxlZnQgPSB4O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgb3JnYW5pemF0aW9uLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcm93ID0gb3JnYW5pemF0aW9uLnJvd3NbaV07XG4gICAgeCA9IGxlZnQ7XG4gICAgdmFyIG1heEhlaWdodCA9IDA7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJvdy5sZW5ndGg7IGorKykge1xuICAgICAgdmFyIGxub2RlID0gcm93W2pdO1xuXG4gICAgICBsbm9kZS5yZWN0LnggPSB4Oy8vICsgbG5vZGUucmVjdC53aWR0aCAvIDI7XG4gICAgICBsbm9kZS5yZWN0LnkgPSB5Oy8vICsgbG5vZGUucmVjdC5oZWlnaHQgLyAyO1xuXG4gICAgICB4ICs9IGxub2RlLnJlY3Qud2lkdGggKyBvcmdhbml6YXRpb24uaG9yaXpvbnRhbFBhZGRpbmc7XG5cbiAgICAgIGlmIChsbm9kZS5yZWN0LmhlaWdodCA+IG1heEhlaWdodClcbiAgICAgICAgbWF4SGVpZ2h0ID0gbG5vZGUucmVjdC5oZWlnaHQ7XG4gICAgfVxuXG4gICAgeSArPSBtYXhIZWlnaHQgKyBvcmdhbml6YXRpb24udmVydGljYWxQYWRkaW5nO1xuICB9XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS50aWxlQ29tcG91bmRNZW1iZXJzID0gZnVuY3Rpb24gKGNoaWxkR3JhcGhNYXAsIGlkVG9Ob2RlKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy50aWxlZE1lbWJlclBhY2sgPSBbXTtcblxuICBPYmplY3Qua2V5cyhjaGlsZEdyYXBoTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XG4gICAgLy8gR2V0IHRoZSBjb21wb3VuZCBub2RlXG4gICAgdmFyIGNvbXBvdW5kTm9kZSA9IGlkVG9Ob2RlW2lkXTtcblxuICAgIHNlbGYudGlsZWRNZW1iZXJQYWNrW2lkXSA9IHNlbGYudGlsZU5vZGVzKGNoaWxkR3JhcGhNYXBbaWRdLCBjb21wb3VuZE5vZGUucGFkZGluZ0xlZnQgKyBjb21wb3VuZE5vZGUucGFkZGluZ1JpZ2h0KTtcblxuICAgIGNvbXBvdW5kTm9kZS5yZWN0LndpZHRoID0gc2VsZi50aWxlZE1lbWJlclBhY2tbaWRdLndpZHRoICsgMjA7XG4gICAgY29tcG91bmROb2RlLnJlY3QuaGVpZ2h0ID0gc2VsZi50aWxlZE1lbWJlclBhY2tbaWRdLmhlaWdodCArIDIwO1xuICB9KTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnRpbGVOb2RlcyA9IGZ1bmN0aW9uIChub2RlcywgbWluV2lkdGgpIHtcbiAgdmFyIHZlcnRpY2FsUGFkZGluZyA9IENvU0VDb25zdGFudHMuVElMSU5HX1BBRERJTkdfVkVSVElDQUw7XG4gIHZhciBob3Jpem9udGFsUGFkZGluZyA9IENvU0VDb25zdGFudHMuVElMSU5HX1BBRERJTkdfSE9SSVpPTlRBTDtcbiAgdmFyIG9yZ2FuaXphdGlvbiA9IHtcbiAgICByb3dzOiBbXSxcbiAgICByb3dXaWR0aDogW10sXG4gICAgcm93SGVpZ2h0OiBbXSxcbiAgICB3aWR0aDogMjAsXG4gICAgaGVpZ2h0OiAyMCxcbiAgICB2ZXJ0aWNhbFBhZGRpbmc6IHZlcnRpY2FsUGFkZGluZyxcbiAgICBob3Jpem9udGFsUGFkZGluZzogaG9yaXpvbnRhbFBhZGRpbmdcbiAgfTtcblxuICAvLyBTb3J0IHRoZSBub2RlcyBpbiBhc2NlbmRpbmcgb3JkZXIgb2YgdGhlaXIgYXJlYXNcbiAgbm9kZXMuc29ydChmdW5jdGlvbiAobjEsIG4yKSB7XG4gICAgaWYgKG4xLnJlY3Qud2lkdGggKiBuMS5yZWN0LmhlaWdodCA+IG4yLnJlY3Qud2lkdGggKiBuMi5yZWN0LmhlaWdodClcbiAgICAgIHJldHVybiAtMTtcbiAgICBpZiAobjEucmVjdC53aWR0aCAqIG4xLnJlY3QuaGVpZ2h0IDwgbjIucmVjdC53aWR0aCAqIG4yLnJlY3QuaGVpZ2h0KVxuICAgICAgcmV0dXJuIDE7XG4gICAgcmV0dXJuIDA7XG4gIH0pO1xuXG4gIC8vIENyZWF0ZSB0aGUgb3JnYW5pemF0aW9uIC0+IHRpbGUgbWVtYmVyc1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGxOb2RlID0gbm9kZXNbaV07XG4gICAgXG4gICAgaWYgKG9yZ2FuaXphdGlvbi5yb3dzLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLmluc2VydE5vZGVUb1Jvdyhvcmdhbml6YXRpb24sIGxOb2RlLCAwLCBtaW5XaWR0aCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuY2FuQWRkSG9yaXpvbnRhbChvcmdhbml6YXRpb24sIGxOb2RlLnJlY3Qud2lkdGgsIGxOb2RlLnJlY3QuaGVpZ2h0KSkge1xuICAgICAgdGhpcy5pbnNlcnROb2RlVG9Sb3cob3JnYW5pemF0aW9uLCBsTm9kZSwgdGhpcy5nZXRTaG9ydGVzdFJvd0luZGV4KG9yZ2FuaXphdGlvbiksIG1pbldpZHRoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmluc2VydE5vZGVUb1Jvdyhvcmdhbml6YXRpb24sIGxOb2RlLCBvcmdhbml6YXRpb24ucm93cy5sZW5ndGgsIG1pbldpZHRoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNoaWZ0VG9MYXN0Um93KG9yZ2FuaXphdGlvbik7XG4gIH1cblxuICByZXR1cm4gb3JnYW5pemF0aW9uO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuaW5zZXJ0Tm9kZVRvUm93ID0gZnVuY3Rpb24gKG9yZ2FuaXphdGlvbiwgbm9kZSwgcm93SW5kZXgsIG1pbldpZHRoKSB7XG4gIHZhciBtaW5Db21wb3VuZFNpemUgPSBtaW5XaWR0aDtcblxuICAvLyBBZGQgbmV3IHJvdyBpZiBuZWVkZWRcbiAgaWYgKHJvd0luZGV4ID09IG9yZ2FuaXphdGlvbi5yb3dzLmxlbmd0aCkge1xuICAgIHZhciBzZWNvbmREaW1lbnNpb24gPSBbXTtcblxuICAgIG9yZ2FuaXphdGlvbi5yb3dzLnB1c2goc2Vjb25kRGltZW5zaW9uKTtcbiAgICBvcmdhbml6YXRpb24ucm93V2lkdGgucHVzaChtaW5Db21wb3VuZFNpemUpO1xuICAgIG9yZ2FuaXphdGlvbi5yb3dIZWlnaHQucHVzaCgwKTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSByb3cgd2lkdGhcbiAgdmFyIHcgPSBvcmdhbml6YXRpb24ucm93V2lkdGhbcm93SW5kZXhdICsgbm9kZS5yZWN0LndpZHRoO1xuXG4gIGlmIChvcmdhbml6YXRpb24ucm93c1tyb3dJbmRleF0ubGVuZ3RoID4gMCkge1xuICAgIHcgKz0gb3JnYW5pemF0aW9uLmhvcml6b250YWxQYWRkaW5nO1xuICB9XG5cbiAgb3JnYW5pemF0aW9uLnJvd1dpZHRoW3Jvd0luZGV4XSA9IHc7XG4gIC8vIFVwZGF0ZSBjb21wb3VuZCB3aWR0aFxuICBpZiAob3JnYW5pemF0aW9uLndpZHRoIDwgdykge1xuICAgIG9yZ2FuaXphdGlvbi53aWR0aCA9IHc7XG4gIH1cblxuICAvLyBVcGRhdGUgaGVpZ2h0XG4gIHZhciBoID0gbm9kZS5yZWN0LmhlaWdodDtcbiAgaWYgKHJvd0luZGV4ID4gMClcbiAgICBoICs9IG9yZ2FuaXphdGlvbi52ZXJ0aWNhbFBhZGRpbmc7XG5cbiAgdmFyIGV4dHJhSGVpZ2h0ID0gMDtcbiAgaWYgKGggPiBvcmdhbml6YXRpb24ucm93SGVpZ2h0W3Jvd0luZGV4XSkge1xuICAgIGV4dHJhSGVpZ2h0ID0gb3JnYW5pemF0aW9uLnJvd0hlaWdodFtyb3dJbmRleF07XG4gICAgb3JnYW5pemF0aW9uLnJvd0hlaWdodFtyb3dJbmRleF0gPSBoO1xuICAgIGV4dHJhSGVpZ2h0ID0gb3JnYW5pemF0aW9uLnJvd0hlaWdodFtyb3dJbmRleF0gLSBleHRyYUhlaWdodDtcbiAgfVxuXG4gIG9yZ2FuaXphdGlvbi5oZWlnaHQgKz0gZXh0cmFIZWlnaHQ7XG5cbiAgLy8gSW5zZXJ0IG5vZGVcbiAgb3JnYW5pemF0aW9uLnJvd3Nbcm93SW5kZXhdLnB1c2gobm9kZSk7XG59O1xuXG4vL1NjYW5zIHRoZSByb3dzIG9mIGFuIG9yZ2FuaXphdGlvbiBhbmQgcmV0dXJucyB0aGUgb25lIHdpdGggdGhlIG1pbiB3aWR0aFxuQ29TRUxheW91dC5wcm90b3R5cGUuZ2V0U2hvcnRlc3RSb3dJbmRleCA9IGZ1bmN0aW9uIChvcmdhbml6YXRpb24pIHtcbiAgdmFyIHIgPSAtMTtcbiAgdmFyIG1pbiA9IE51bWJlci5NQVhfVkFMVUU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcmdhbml6YXRpb24ucm93cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChvcmdhbml6YXRpb24ucm93V2lkdGhbaV0gPCBtaW4pIHtcbiAgICAgIHIgPSBpO1xuICAgICAgbWluID0gb3JnYW5pemF0aW9uLnJvd1dpZHRoW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8vU2NhbnMgdGhlIHJvd3Mgb2YgYW4gb3JnYW5pemF0aW9uIGFuZCByZXR1cm5zIHRoZSBvbmUgd2l0aCB0aGUgbWF4IHdpZHRoXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5nZXRMb25nZXN0Um93SW5kZXggPSBmdW5jdGlvbiAob3JnYW5pemF0aW9uKSB7XG4gIHZhciByID0gLTE7XG4gIHZhciBtYXggPSBOdW1iZXIuTUlOX1ZBTFVFO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgb3JnYW5pemF0aW9uLnJvd3MubGVuZ3RoOyBpKyspIHtcblxuICAgIGlmIChvcmdhbml6YXRpb24ucm93V2lkdGhbaV0gPiBtYXgpIHtcbiAgICAgIHIgPSBpO1xuICAgICAgbWF4ID0gb3JnYW5pemF0aW9uLnJvd1dpZHRoW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByO1xufTtcblxuLyoqXG4qIFRoaXMgbWV0aG9kIGNoZWNrcyB3aGV0aGVyIGFkZGluZyBleHRyYSB3aWR0aCB0byB0aGUgb3JnYW5pemF0aW9uIHZpb2xhdGVzXG4qIHRoZSBhc3BlY3QgcmF0aW8oMSkgb3Igbm90LlxuKi9cbkNvU0VMYXlvdXQucHJvdG90eXBlLmNhbkFkZEhvcml6b250YWwgPSBmdW5jdGlvbiAob3JnYW5pemF0aW9uLCBleHRyYVdpZHRoLCBleHRyYUhlaWdodCkge1xuXG4gIHZhciBzcmkgPSB0aGlzLmdldFNob3J0ZXN0Um93SW5kZXgob3JnYW5pemF0aW9uKTtcblxuICBpZiAoc3JpIDwgMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIG1pbiA9IG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtzcmldO1xuXG4gIGlmIChtaW4gKyBvcmdhbml6YXRpb24uaG9yaXpvbnRhbFBhZGRpbmcgKyBleHRyYVdpZHRoIDw9IG9yZ2FuaXphdGlvbi53aWR0aClcbiAgICByZXR1cm4gdHJ1ZTtcblxuICB2YXIgaERpZmYgPSAwO1xuXG4gIC8vIEFkZGluZyB0byBhbiBleGlzdGluZyByb3dcbiAgaWYgKG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbc3JpXSA8IGV4dHJhSGVpZ2h0KSB7XG4gICAgaWYgKHNyaSA+IDApXG4gICAgICBoRGlmZiA9IGV4dHJhSGVpZ2h0ICsgb3JnYW5pemF0aW9uLnZlcnRpY2FsUGFkZGluZyAtIG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbc3JpXTtcbiAgfVxuXG4gIHZhciBhZGRfdG9fcm93X3JhdGlvO1xuICBpZiAob3JnYW5pemF0aW9uLndpZHRoIC0gbWluID49IGV4dHJhV2lkdGggKyBvcmdhbml6YXRpb24uaG9yaXpvbnRhbFBhZGRpbmcpIHtcbiAgICBhZGRfdG9fcm93X3JhdGlvID0gKG9yZ2FuaXphdGlvbi5oZWlnaHQgKyBoRGlmZikgLyAobWluICsgZXh0cmFXaWR0aCArIG9yZ2FuaXphdGlvbi5ob3Jpem9udGFsUGFkZGluZyk7XG4gIH0gZWxzZSB7XG4gICAgYWRkX3RvX3Jvd19yYXRpbyA9IChvcmdhbml6YXRpb24uaGVpZ2h0ICsgaERpZmYpIC8gb3JnYW5pemF0aW9uLndpZHRoO1xuICB9XG5cbiAgLy8gQWRkaW5nIGEgbmV3IHJvdyBmb3IgdGhpcyBub2RlXG4gIGhEaWZmID0gZXh0cmFIZWlnaHQgKyBvcmdhbml6YXRpb24udmVydGljYWxQYWRkaW5nO1xuICB2YXIgYWRkX25ld19yb3dfcmF0aW87XG4gIGlmIChvcmdhbml6YXRpb24ud2lkdGggPCBleHRyYVdpZHRoKSB7XG4gICAgYWRkX25ld19yb3dfcmF0aW8gPSAob3JnYW5pemF0aW9uLmhlaWdodCArIGhEaWZmKSAvIGV4dHJhV2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgYWRkX25ld19yb3dfcmF0aW8gPSAob3JnYW5pemF0aW9uLmhlaWdodCArIGhEaWZmKSAvIG9yZ2FuaXphdGlvbi53aWR0aDtcbiAgfVxuXG4gIGlmIChhZGRfbmV3X3Jvd19yYXRpbyA8IDEpXG4gICAgYWRkX25ld19yb3dfcmF0aW8gPSAxIC8gYWRkX25ld19yb3dfcmF0aW87XG5cbiAgaWYgKGFkZF90b19yb3dfcmF0aW8gPCAxKVxuICAgIGFkZF90b19yb3dfcmF0aW8gPSAxIC8gYWRkX3RvX3Jvd19yYXRpbztcblxuICByZXR1cm4gYWRkX3RvX3Jvd19yYXRpbyA8IGFkZF9uZXdfcm93X3JhdGlvO1xufTtcblxuLy9JZiBtb3ZpbmcgdGhlIGxhc3Qgbm9kZSBmcm9tIHRoZSBsb25nZXN0IHJvdyBhbmQgYWRkaW5nIGl0IHRvIHRoZSBsYXN0XG4vL3JvdyBtYWtlcyB0aGUgYm91bmRpbmcgYm94IHNtYWxsZXIsIGRvIGl0LlxuQ29TRUxheW91dC5wcm90b3R5cGUuc2hpZnRUb0xhc3RSb3cgPSBmdW5jdGlvbiAob3JnYW5pemF0aW9uKSB7XG4gIHZhciBsb25nZXN0ID0gdGhpcy5nZXRMb25nZXN0Um93SW5kZXgob3JnYW5pemF0aW9uKTtcbiAgdmFyIGxhc3QgPSBvcmdhbml6YXRpb24ucm93V2lkdGgubGVuZ3RoIC0gMTtcbiAgdmFyIHJvdyA9IG9yZ2FuaXphdGlvbi5yb3dzW2xvbmdlc3RdO1xuICB2YXIgbm9kZSA9IHJvd1tyb3cubGVuZ3RoIC0gMV07XG5cbiAgdmFyIGRpZmYgPSBub2RlLndpZHRoICsgb3JnYW5pemF0aW9uLmhvcml6b250YWxQYWRkaW5nO1xuXG4gIC8vIENoZWNrIGlmIHRoZXJlIGlzIGVub3VnaCBzcGFjZSBvbiB0aGUgbGFzdCByb3dcbiAgaWYgKG9yZ2FuaXphdGlvbi53aWR0aCAtIG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtsYXN0XSA+IGRpZmYgJiYgbG9uZ2VzdCAhPSBsYXN0KSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBsYXN0IGVsZW1lbnQgb2YgdGhlIGxvbmdlc3Qgcm93XG4gICAgcm93LnNwbGljZSgtMSwgMSk7XG5cbiAgICAvLyBQdXNoIGl0IHRvIHRoZSBsYXN0IHJvd1xuICAgIG9yZ2FuaXphdGlvbi5yb3dzW2xhc3RdLnB1c2gobm9kZSk7XG5cbiAgICBvcmdhbml6YXRpb24ucm93V2lkdGhbbG9uZ2VzdF0gPSBvcmdhbml6YXRpb24ucm93V2lkdGhbbG9uZ2VzdF0gLSBkaWZmO1xuICAgIG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtsYXN0XSA9IG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtsYXN0XSArIGRpZmY7XG4gICAgb3JnYW5pemF0aW9uLndpZHRoID0gb3JnYW5pemF0aW9uLnJvd1dpZHRoW2luc3RhbmNlLmdldExvbmdlc3RSb3dJbmRleChvcmdhbml6YXRpb24pXTtcblxuICAgIC8vIFVwZGF0ZSBoZWlnaHRzIG9mIHRoZSBvcmdhbml6YXRpb25cbiAgICB2YXIgbWF4SGVpZ2h0ID0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvdy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJvd1tpXS5oZWlnaHQgPiBtYXhIZWlnaHQpXG4gICAgICAgIG1heEhlaWdodCA9IHJvd1tpXS5oZWlnaHQ7XG4gICAgfVxuICAgIGlmIChsb25nZXN0ID4gMClcbiAgICAgIG1heEhlaWdodCArPSBvcmdhbml6YXRpb24udmVydGljYWxQYWRkaW5nO1xuXG4gICAgdmFyIHByZXZUb3RhbCA9IG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbbG9uZ2VzdF0gKyBvcmdhbml6YXRpb24ucm93SGVpZ2h0W2xhc3RdO1xuXG4gICAgb3JnYW5pemF0aW9uLnJvd0hlaWdodFtsb25nZXN0XSA9IG1heEhlaWdodDtcbiAgICBpZiAob3JnYW5pemF0aW9uLnJvd0hlaWdodFtsYXN0XSA8IG5vZGUuaGVpZ2h0ICsgb3JnYW5pemF0aW9uLnZlcnRpY2FsUGFkZGluZylcbiAgICAgIG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbbGFzdF0gPSBub2RlLmhlaWdodCArIG9yZ2FuaXphdGlvbi52ZXJ0aWNhbFBhZGRpbmc7XG5cbiAgICB2YXIgZmluYWxUb3RhbCA9IG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbbG9uZ2VzdF0gKyBvcmdhbml6YXRpb24ucm93SGVpZ2h0W2xhc3RdO1xuICAgIG9yZ2FuaXphdGlvbi5oZWlnaHQgKz0gKGZpbmFsVG90YWwgLSBwcmV2VG90YWwpO1xuXG4gICAgdGhpcy5zaGlmdFRvTGFzdFJvdyhvcmdhbml6YXRpb24pO1xuICB9XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS50aWxpbmdQcmVMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKENvU0VDb25zdGFudHMuVElMRSkge1xuICAgIC8vIEZpbmQgemVybyBkZWdyZWUgbm9kZXMgYW5kIGNyZWF0ZSBhIGNvbXBvdW5kIGZvciBlYWNoIGxldmVsXG4gICAgdGhpcy5ncm91cFplcm9EZWdyZWVNZW1iZXJzKCk7XG4gICAgLy8gVGlsZSBhbmQgY2xlYXIgY2hpbGRyZW4gb2YgZWFjaCBjb21wb3VuZFxuICAgIHRoaXMuY2xlYXJDb21wb3VuZHMoKTtcbiAgICAvLyBTZXBhcmF0ZWx5IHRpbGUgYW5kIGNsZWFyIHplcm8gZGVncmVlIG5vZGVzIGZvciBlYWNoIGxldmVsXG4gICAgdGhpcy5jbGVhclplcm9EZWdyZWVNZW1iZXJzKCk7XG4gIH1cbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnRpbGluZ1Bvc3RMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKENvU0VDb25zdGFudHMuVElMRSkge1xuICAgIHRoaXMucmVwb3B1bGF0ZVplcm9EZWdyZWVNZW1iZXJzKCk7XG4gICAgdGhpcy5yZXBvcHVsYXRlQ29tcG91bmRzKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29TRUxheW91dDtcbiIsInZhciBGRExheW91dE5vZGUgPSByZXF1aXJlKCcuL0ZETGF5b3V0Tm9kZScpO1xudmFyIElNYXRoID0gcmVxdWlyZSgnLi9JTWF0aCcpO1xuXG5mdW5jdGlvbiBDb1NFTm9kZShnbSwgbG9jLCBzaXplLCB2Tm9kZSkge1xuICBGRExheW91dE5vZGUuY2FsbCh0aGlzLCBnbSwgbG9jLCBzaXplLCB2Tm9kZSk7XG59XG5cblxuQ29TRU5vZGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShGRExheW91dE5vZGUucHJvdG90eXBlKTtcbmZvciAodmFyIHByb3AgaW4gRkRMYXlvdXROb2RlKSB7XG4gIENvU0VOb2RlW3Byb3BdID0gRkRMYXlvdXROb2RlW3Byb3BdO1xufVxuXG5Db1NFTm9kZS5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBsYXlvdXQgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRMYXlvdXQoKTtcbiAgdGhpcy5kaXNwbGFjZW1lbnRYID0gbGF5b3V0LmNvb2xpbmdGYWN0b3IgKlxuICAgICAgICAgICh0aGlzLnNwcmluZ0ZvcmNlWCArIHRoaXMucmVwdWxzaW9uRm9yY2VYICsgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWCkgLyB0aGlzLm5vT2ZDaGlsZHJlbjtcbiAgdGhpcy5kaXNwbGFjZW1lbnRZID0gbGF5b3V0LmNvb2xpbmdGYWN0b3IgKlxuICAgICAgICAgICh0aGlzLnNwcmluZ0ZvcmNlWSArIHRoaXMucmVwdWxzaW9uRm9yY2VZICsgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWSkgLyB0aGlzLm5vT2ZDaGlsZHJlbjtcblxuXG4gIGlmIChNYXRoLmFicyh0aGlzLmRpc3BsYWNlbWVudFgpID4gbGF5b3V0LmNvb2xpbmdGYWN0b3IgKiBsYXlvdXQubWF4Tm9kZURpc3BsYWNlbWVudClcbiAge1xuICAgIHRoaXMuZGlzcGxhY2VtZW50WCA9IGxheW91dC5jb29saW5nRmFjdG9yICogbGF5b3V0Lm1heE5vZGVEaXNwbGFjZW1lbnQgKlxuICAgICAgICAgICAgSU1hdGguc2lnbih0aGlzLmRpc3BsYWNlbWVudFgpO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKHRoaXMuZGlzcGxhY2VtZW50WSkgPiBsYXlvdXQuY29vbGluZ0ZhY3RvciAqIGxheW91dC5tYXhOb2RlRGlzcGxhY2VtZW50KVxuICB7XG4gICAgdGhpcy5kaXNwbGFjZW1lbnRZID0gbGF5b3V0LmNvb2xpbmdGYWN0b3IgKiBsYXlvdXQubWF4Tm9kZURpc3BsYWNlbWVudCAqXG4gICAgICAgICAgICBJTWF0aC5zaWduKHRoaXMuZGlzcGxhY2VtZW50WSk7XG4gIH1cblxuICAvLyBhIHNpbXBsZSBub2RlLCBqdXN0IG1vdmUgaXRcbiAgaWYgKHRoaXMuY2hpbGQgPT0gbnVsbClcbiAge1xuICAgIHRoaXMubW92ZUJ5KHRoaXMuZGlzcGxhY2VtZW50WCwgdGhpcy5kaXNwbGFjZW1lbnRZKTtcbiAgfVxuICAvLyBhbiBlbXB0eSBjb21wb3VuZCBub2RlLCBhZ2FpbiBqdXN0IG1vdmUgaXRcbiAgZWxzZSBpZiAodGhpcy5jaGlsZC5nZXROb2RlcygpLmxlbmd0aCA9PSAwKVxuICB7XG4gICAgdGhpcy5tb3ZlQnkodGhpcy5kaXNwbGFjZW1lbnRYLCB0aGlzLmRpc3BsYWNlbWVudFkpO1xuICB9XG4gIC8vIG5vbi1lbXB0eSBjb21wb3VuZCBub2RlLCBwcm9wb2dhdGUgbW92ZW1lbnQgdG8gY2hpbGRyZW4gYXMgd2VsbFxuICBlbHNlXG4gIHtcbiAgICB0aGlzLnByb3BvZ2F0ZURpc3BsYWNlbWVudFRvQ2hpbGRyZW4odGhpcy5kaXNwbGFjZW1lbnRYLFxuICAgICAgICAgICAgdGhpcy5kaXNwbGFjZW1lbnRZKTtcbiAgfVxuXG4gIGxheW91dC50b3RhbERpc3BsYWNlbWVudCArPVxuICAgICAgICAgIE1hdGguYWJzKHRoaXMuZGlzcGxhY2VtZW50WCkgKyBNYXRoLmFicyh0aGlzLmRpc3BsYWNlbWVudFkpO1xuXG4gIHRoaXMuc3ByaW5nRm9yY2VYID0gMDtcbiAgdGhpcy5zcHJpbmdGb3JjZVkgPSAwO1xuICB0aGlzLnJlcHVsc2lvbkZvcmNlWCA9IDA7XG4gIHRoaXMucmVwdWxzaW9uRm9yY2VZID0gMDtcbiAgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWCA9IDA7XG4gIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVkgPSAwO1xuICB0aGlzLmRpc3BsYWNlbWVudFggPSAwO1xuICB0aGlzLmRpc3BsYWNlbWVudFkgPSAwO1xufTtcblxuQ29TRU5vZGUucHJvdG90eXBlLnByb3BvZ2F0ZURpc3BsYWNlbWVudFRvQ2hpbGRyZW4gPSBmdW5jdGlvbiAoZFgsIGRZKVxue1xuICB2YXIgbm9kZXMgPSB0aGlzLmdldENoaWxkKCkuZ2V0Tm9kZXMoKTtcbiAgdmFyIG5vZGU7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICBub2RlID0gbm9kZXNbaV07XG4gICAgaWYgKG5vZGUuZ2V0Q2hpbGQoKSA9PSBudWxsKVxuICAgIHtcbiAgICAgIG5vZGUubW92ZUJ5KGRYLCBkWSk7XG4gICAgICBub2RlLmRpc3BsYWNlbWVudFggKz0gZFg7XG4gICAgICBub2RlLmRpc3BsYWNlbWVudFkgKz0gZFk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICBub2RlLnByb3BvZ2F0ZURpc3BsYWNlbWVudFRvQ2hpbGRyZW4oZFgsIGRZKTtcbiAgICB9XG4gIH1cbn07XG5cbkNvU0VOb2RlLnByb3RvdHlwZS5zZXRQcmVkMSA9IGZ1bmN0aW9uIChwcmVkMSlcbntcbiAgdGhpcy5wcmVkMSA9IHByZWQxO1xufTtcblxuQ29TRU5vZGUucHJvdG90eXBlLmdldFByZWQxID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHByZWQxO1xufTtcblxuQ29TRU5vZGUucHJvdG90eXBlLmdldFByZWQyID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHByZWQyO1xufTtcblxuQ29TRU5vZGUucHJvdG90eXBlLnNldE5leHQgPSBmdW5jdGlvbiAobmV4dClcbntcbiAgdGhpcy5uZXh0ID0gbmV4dDtcbn07XG5cbkNvU0VOb2RlLnByb3RvdHlwZS5nZXROZXh0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIG5leHQ7XG59O1xuXG5Db1NFTm9kZS5wcm90b3R5cGUuc2V0UHJvY2Vzc2VkID0gZnVuY3Rpb24gKHByb2Nlc3NlZClcbntcbiAgdGhpcy5wcm9jZXNzZWQgPSBwcm9jZXNzZWQ7XG59O1xuXG5Db1NFTm9kZS5wcm90b3R5cGUuaXNQcm9jZXNzZWQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gcHJvY2Vzc2VkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb1NFTm9kZTtcbiIsImZ1bmN0aW9uIERpbWVuc2lvbkQod2lkdGgsIGhlaWdodCkge1xuICB0aGlzLndpZHRoID0gMDtcbiAgdGhpcy5oZWlnaHQgPSAwO1xuICBpZiAod2lkdGggIT09IG51bGwgJiYgaGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICB9XG59XG5cbkRpbWVuc2lvbkQucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMud2lkdGg7XG59O1xuXG5EaW1lbnNpb25ELnByb3RvdHlwZS5zZXRXaWR0aCA9IGZ1bmN0aW9uICh3aWR0aClcbntcbiAgdGhpcy53aWR0aCA9IHdpZHRoO1xufTtcblxuRGltZW5zaW9uRC5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xufTtcblxuRGltZW5zaW9uRC5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGhlaWdodClcbntcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERpbWVuc2lvbkQ7XG4iLCJmdW5jdGlvbiBFbWl0dGVyKCl7XG4gIHRoaXMubGlzdGVuZXJzID0gW107XG59XG5cbnZhciBwID0gRW1pdHRlci5wcm90b3R5cGU7XG5cbnAuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiggZXZlbnQsIGNhbGxiYWNrICl7XG4gIHRoaXMubGlzdGVuZXJzLnB1c2goe1xuICAgIGV2ZW50OiBldmVudCxcbiAgICBjYWxsYmFjazogY2FsbGJhY2tcbiAgfSk7XG59O1xuXG5wLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24oIGV2ZW50LCBjYWxsYmFjayApe1xuICBmb3IoIHZhciBpID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpID49IDA7IGktLSApe1xuICAgIHZhciBsID0gdGhpcy5saXN0ZW5lcnNbaV07XG5cbiAgICBpZiggbC5ldmVudCA9PT0gZXZlbnQgJiYgbC5jYWxsYmFjayA9PT0gY2FsbGJhY2sgKXtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZSggaSwgMSApO1xuICAgIH1cbiAgfVxufTtcblxucC5lbWl0ID0gZnVuY3Rpb24oIGV2ZW50LCBkYXRhICl7XG4gIGZvciggdmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKysgKXtcbiAgICB2YXIgbCA9IHRoaXMubGlzdGVuZXJzW2ldO1xuXG4gICAgaWYoIGV2ZW50ID09PSBsLmV2ZW50ICl7XG4gICAgICBsLmNhbGxiYWNrKCBkYXRhICk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XG4iLCJ2YXIgTGF5b3V0ID0gcmVxdWlyZSgnLi9MYXlvdXQnKTtcbnZhciBGRExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vRkRMYXlvdXRDb25zdGFudHMnKTtcbnZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0xheW91dENvbnN0YW50cycpO1xudmFyIElHZW9tZXRyeSA9IHJlcXVpcmUoJy4vSUdlb21ldHJ5Jyk7XG52YXIgSU1hdGggPSByZXF1aXJlKCcuL0lNYXRoJyk7XG52YXIgSW50ZWdlciA9IHJlcXVpcmUoJy4vSW50ZWdlcicpO1xuXG5mdW5jdGlvbiBGRExheW91dCgpIHtcbiAgTGF5b3V0LmNhbGwodGhpcyk7XG5cbiAgdGhpcy51c2VTbWFydElkZWFsRWRnZUxlbmd0aENhbGN1bGF0aW9uID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VU0VfU01BUlRfSURFQUxfRURHRV9MRU5HVEhfQ0FMQ1VMQVRJT047XG4gIHRoaXMuaWRlYWxFZGdlTGVuZ3RoID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSDtcbiAgdGhpcy5zcHJpbmdDb25zdGFudCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfU1BSSU5HX1NUUkVOR1RIO1xuICB0aGlzLnJlcHVsc2lvbkNvbnN0YW50ID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEg7XG4gIHRoaXMuZ3Jhdml0eUNvbnN0YW50ID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1NUUkVOR1RIO1xuICB0aGlzLmNvbXBvdW5kR3Jhdml0eUNvbnN0YW50ID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1NUUkVOR1RIO1xuICB0aGlzLmdyYXZpdHlSYW5nZUZhY3RvciA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9SQU5HRV9GQUNUT1I7XG4gIHRoaXMuY29tcG91bmRHcmF2aXR5UmFuZ2VGYWN0b3IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfUkFOR0VfRkFDVE9SO1xuICB0aGlzLmRpc3BsYWNlbWVudFRocmVzaG9sZFBlck5vZGUgPSAoMy4wICogRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCkgLyAxMDA7XG4gIHRoaXMuY29vbGluZ0ZhY3RvciA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUw7XG4gIHRoaXMuaW5pdGlhbENvb2xpbmdGYWN0b3IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMO1xuICB0aGlzLnRvdGFsRGlzcGxhY2VtZW50ID0gMC4wO1xuICB0aGlzLm9sZFRvdGFsRGlzcGxhY2VtZW50ID0gMC4wO1xuICB0aGlzLm1heEl0ZXJhdGlvbnMgPSBGRExheW91dENvbnN0YW50cy5NQVhfSVRFUkFUSU9OUztcbn1cblxuRkRMYXlvdXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMYXlvdXQucHJvdG90eXBlKTtcblxuZm9yICh2YXIgcHJvcCBpbiBMYXlvdXQpIHtcbiAgRkRMYXlvdXRbcHJvcF0gPSBMYXlvdXRbcHJvcF07XG59XG5cbkZETGF5b3V0LnByb3RvdHlwZS5pbml0UGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgTGF5b3V0LnByb3RvdHlwZS5pbml0UGFyYW1ldGVycy5jYWxsKHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgaWYgKHRoaXMubGF5b3V0UXVhbGl0eSA9PSBMYXlvdXRDb25zdGFudHMuRFJBRlRfUVVBTElUWSlcbiAge1xuICAgIHRoaXMuZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSArPSAwLjMwO1xuICAgIHRoaXMubWF4SXRlcmF0aW9ucyAqPSAwLjg7XG4gIH1cbiAgZWxzZSBpZiAodGhpcy5sYXlvdXRRdWFsaXR5ID09IExheW91dENvbnN0YW50cy5QUk9PRl9RVUFMSVRZKVxuICB7XG4gICAgdGhpcy5kaXNwbGFjZW1lbnRUaHJlc2hvbGRQZXJOb2RlIC09IDAuMzA7XG4gICAgdGhpcy5tYXhJdGVyYXRpb25zICo9IDEuMjtcbiAgfVxuXG4gIHRoaXMudG90YWxJdGVyYXRpb25zID0gMDtcbiAgdGhpcy5ub3RBbmltYXRlZEl0ZXJhdGlvbnMgPSAwO1xuXG4gIHRoaXMudXNlRlJHcmlkVmFyaWFudCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVVNFX1NNQVJUX1JFUFVMU0lPTl9SQU5HRV9DQUxDVUxBVElPTjtcbiAgXG4gIHRoaXMuZ3JpZCA9IFtdO1xuICAvLyB2YXJpYWJsZXMgZm9yIHRyZWUgcmVkdWN0aW9uIHN1cHBvcnRcbiAgdGhpcy5wcnVuZWROb2Rlc0FsbCA9IFtdO1xuICB0aGlzLmdyb3dUcmVlSXRlcmF0aW9ucyA9IDA7XG4gIHRoaXMuYWZ0ZXJHcm93dGhJdGVyYXRpb25zID0gMDtcbiAgdGhpcy5pc1RyZWVHcm93aW5nID0gZmFsc2U7XG4gIHRoaXMuaXNHcm93dGhGaW5pc2hlZCA9IGZhbHNlO1xufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNJZGVhbEVkZ2VMZW5ndGhzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZWRnZTtcbiAgdmFyIGxjYURlcHRoO1xuICB2YXIgc291cmNlO1xuICB2YXIgdGFyZ2V0O1xuICB2YXIgc2l6ZU9mU291cmNlSW5MY2E7XG4gIHZhciBzaXplT2ZUYXJnZXRJbkxjYTtcblxuICB2YXIgYWxsRWRnZXMgPSB0aGlzLmdldEdyYXBoTWFuYWdlcigpLmdldEFsbEVkZ2VzKCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsRWRnZXMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICBlZGdlID0gYWxsRWRnZXNbaV07XG5cbiAgICBlZGdlLmlkZWFsTGVuZ3RoID0gdGhpcy5pZGVhbEVkZ2VMZW5ndGg7XG5cbiAgICBpZiAoZWRnZS5pc0ludGVyR3JhcGgpXG4gICAge1xuICAgICAgc291cmNlID0gZWRnZS5nZXRTb3VyY2UoKTtcbiAgICAgIHRhcmdldCA9IGVkZ2UuZ2V0VGFyZ2V0KCk7XG5cbiAgICAgIHNpemVPZlNvdXJjZUluTGNhID0gZWRnZS5nZXRTb3VyY2VJbkxjYSgpLmdldEVzdGltYXRlZFNpemUoKTtcbiAgICAgIHNpemVPZlRhcmdldEluTGNhID0gZWRnZS5nZXRUYXJnZXRJbkxjYSgpLmdldEVzdGltYXRlZFNpemUoKTtcblxuICAgICAgaWYgKHRoaXMudXNlU21hcnRJZGVhbEVkZ2VMZW5ndGhDYWxjdWxhdGlvbilcbiAgICAgIHtcbiAgICAgICAgZWRnZS5pZGVhbExlbmd0aCArPSBzaXplT2ZTb3VyY2VJbkxjYSArIHNpemVPZlRhcmdldEluTGNhIC1cbiAgICAgICAgICAgICAgICAyICogTGF5b3V0Q29uc3RhbnRzLlNJTVBMRV9OT0RFX1NJWkU7XG4gICAgICB9XG5cbiAgICAgIGxjYURlcHRoID0gZWRnZS5nZXRMY2EoKS5nZXRJbmNsdXNpb25UcmVlRGVwdGgoKTtcblxuICAgICAgZWRnZS5pZGVhbExlbmd0aCArPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIICpcbiAgICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuUEVSX0xFVkVMX0lERUFMX0VER0VfTEVOR1RIX0ZBQ1RPUiAqXG4gICAgICAgICAgICAgIChzb3VyY2UuZ2V0SW5jbHVzaW9uVHJlZURlcHRoKCkgK1xuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5nZXRJbmNsdXNpb25UcmVlRGVwdGgoKSAtIDIgKiBsY2FEZXB0aCk7XG4gICAgfVxuICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuaW5pdFNwcmluZ0VtYmVkZGVyID0gZnVuY3Rpb24gKCkge1xuXG4gIGlmICh0aGlzLmluY3JlbWVudGFsKVxuICB7XG4gICAgdGhpcy5tYXhOb2RlRGlzcGxhY2VtZW50ID1cbiAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLk1BWF9OT0RFX0RJU1BMQUNFTUVOVF9JTkNSRU1FTlRBTDtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICB0aGlzLmNvb2xpbmdGYWN0b3IgPSAxLjA7XG4gICAgdGhpcy5pbml0aWFsQ29vbGluZ0ZhY3RvciA9IDEuMDtcbiAgICB0aGlzLm1heE5vZGVEaXNwbGFjZW1lbnQgPVxuICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuTUFYX05PREVfRElTUExBQ0VNRU5UO1xuICB9XG5cbiAgdGhpcy5tYXhJdGVyYXRpb25zID1cbiAgICAgICAgICBNYXRoLm1heCh0aGlzLmdldEFsbE5vZGVzKCkubGVuZ3RoICogNSwgdGhpcy5tYXhJdGVyYXRpb25zKTtcblxuICB0aGlzLnRvdGFsRGlzcGxhY2VtZW50VGhyZXNob2xkID1cbiAgICAgICAgICB0aGlzLmRpc3BsYWNlbWVudFRocmVzaG9sZFBlck5vZGUgKiB0aGlzLmdldEFsbE5vZGVzKCkubGVuZ3RoO1xuXG4gIHRoaXMucmVwdWxzaW9uUmFuZ2UgPSB0aGlzLmNhbGNSZXB1bHNpb25SYW5nZSgpO1xufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNTcHJpbmdGb3JjZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsRWRnZXMgPSB0aGlzLmdldEFsbEVkZ2VzKCk7XG4gIHZhciBlZGdlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbEVkZ2VzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgZWRnZSA9IGxFZGdlc1tpXTtcblxuICAgIHRoaXMuY2FsY1NwcmluZ0ZvcmNlKGVkZ2UsIGVkZ2UuaWRlYWxMZW5ndGgpO1xuICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1JlcHVsc2lvbkZvcmNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGksIGo7XG4gIHZhciBub2RlQSwgbm9kZUI7XG4gIHZhciBsTm9kZXMgPSB0aGlzLmdldEFsbE5vZGVzKCk7XG4gIHZhciBwcm9jZXNzZWROb2RlU2V0O1xuXG4gIGlmICh0aGlzLnVzZUZSR3JpZFZhcmlhbnQpXG4gIHsgICAgICAgXG4gICAgaWYgKCh0aGlzLnRvdGFsSXRlcmF0aW9ucyAlIEZETGF5b3V0Q29uc3RhbnRzLkdSSURfQ0FMQ1VMQVRJT05fQ0hFQ0tfUEVSSU9EID09IDEgJiYgIXRoaXMuaXNUcmVlR3Jvd2luZyAmJiAhdGhpcy5pc0dyb3d0aEZpbmlzaGVkKSlcbiAgICB7ICAgICAgIFxuICAgICAgdGhpcy51cGRhdGVHcmlkKCk7ICBcbiAgICB9XG5cbiAgICBwcm9jZXNzZWROb2RlU2V0ID0gbmV3IFNldCgpO1xuICAgIFxuICAgIC8vIGNhbGN1bGF0ZSByZXB1bHNpb24gZm9yY2VzIGJldHdlZW4gZWFjaCBub2RlcyBhbmQgaXRzIHN1cnJvdW5kaW5nXG4gICAgZm9yIChpID0gMDsgaSA8IGxOb2Rlcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBub2RlQSA9IGxOb2Rlc1tpXTtcbiAgICAgIHRoaXMuY2FsY3VsYXRlUmVwdWxzaW9uRm9yY2VPZkFOb2RlKG5vZGVBLCBwcm9jZXNzZWROb2RlU2V0KTtcbiAgICAgIHByb2Nlc3NlZE5vZGVTZXQuYWRkKG5vZGVBKTtcbiAgICB9XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgZm9yIChpID0gMDsgaSA8IGxOb2Rlcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBub2RlQSA9IGxOb2Rlc1tpXTtcblxuICAgICAgZm9yIChqID0gaSArIDE7IGogPCBsTm9kZXMubGVuZ3RoOyBqKyspXG4gICAgICB7XG4gICAgICAgIG5vZGVCID0gbE5vZGVzW2pdO1xuXG4gICAgICAgIC8vIElmIGJvdGggbm9kZXMgYXJlIG5vdCBtZW1iZXJzIG9mIHRoZSBzYW1lIGdyYXBoLCBza2lwLlxuICAgICAgICBpZiAobm9kZUEuZ2V0T3duZXIoKSAhPSBub2RlQi5nZXRPd25lcigpKVxuICAgICAgICB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhbGNSZXB1bHNpb25Gb3JjZShub2RlQSwgbm9kZUIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNHcmF2aXRhdGlvbmFsRm9yY2VzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbm9kZTtcbiAgdmFyIGxOb2RlcyA9IHRoaXMuZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxOb2Rlcy5sZW5ndGg7IGkrKylcbiAge1xuICAgIG5vZGUgPSBsTm9kZXNbaV07XG4gICAgdGhpcy5jYWxjR3Jhdml0YXRpb25hbEZvcmNlKG5vZGUpO1xuICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUubW92ZU5vZGVzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbE5vZGVzID0gdGhpcy5nZXRBbGxOb2RlcygpO1xuICB2YXIgbm9kZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxOb2Rlcy5sZW5ndGg7IGkrKylcbiAge1xuICAgIG5vZGUgPSBsTm9kZXNbaV07XG4gICAgbm9kZS5tb3ZlKCk7XG4gIH1cbn1cblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNTcHJpbmdGb3JjZSA9IGZ1bmN0aW9uIChlZGdlLCBpZGVhbExlbmd0aCkge1xuICB2YXIgc291cmNlTm9kZSA9IGVkZ2UuZ2V0U291cmNlKCk7XG4gIHZhciB0YXJnZXROb2RlID0gZWRnZS5nZXRUYXJnZXQoKTtcblxuICB2YXIgbGVuZ3RoO1xuICB2YXIgc3ByaW5nRm9yY2U7XG4gIHZhciBzcHJpbmdGb3JjZVg7XG4gIHZhciBzcHJpbmdGb3JjZVk7XG5cbiAgLy8gVXBkYXRlIGVkZ2UgbGVuZ3RoXG4gIGlmICh0aGlzLnVuaWZvcm1MZWFmTm9kZVNpemVzICYmXG4gICAgICAgICAgc291cmNlTm9kZS5nZXRDaGlsZCgpID09IG51bGwgJiYgdGFyZ2V0Tm9kZS5nZXRDaGlsZCgpID09IG51bGwpXG4gIHtcbiAgICBlZGdlLnVwZGF0ZUxlbmd0aFNpbXBsZSgpO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIGVkZ2UudXBkYXRlTGVuZ3RoKCk7XG5cbiAgICBpZiAoZWRnZS5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQpXG4gICAge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGxlbmd0aCA9IGVkZ2UuZ2V0TGVuZ3RoKCk7XG5cbiAgLy8gQ2FsY3VsYXRlIHNwcmluZyBmb3JjZXNcbiAgc3ByaW5nRm9yY2UgPSB0aGlzLnNwcmluZ0NvbnN0YW50ICogKGxlbmd0aCAtIGlkZWFsTGVuZ3RoKTtcblxuICAvLyBQcm9qZWN0IGZvcmNlIG9udG8geCBhbmQgeSBheGVzXG4gIHNwcmluZ0ZvcmNlWCA9IHNwcmluZ0ZvcmNlICogKGVkZ2UubGVuZ3RoWCAvIGxlbmd0aCk7XG4gIHNwcmluZ0ZvcmNlWSA9IHNwcmluZ0ZvcmNlICogKGVkZ2UubGVuZ3RoWSAvIGxlbmd0aCk7XG5cbiAgLy8gQXBwbHkgZm9yY2VzIG9uIHRoZSBlbmQgbm9kZXNcbiAgc291cmNlTm9kZS5zcHJpbmdGb3JjZVggKz0gc3ByaW5nRm9yY2VYO1xuICBzb3VyY2VOb2RlLnNwcmluZ0ZvcmNlWSArPSBzcHJpbmdGb3JjZVk7XG4gIHRhcmdldE5vZGUuc3ByaW5nRm9yY2VYIC09IHNwcmluZ0ZvcmNlWDtcbiAgdGFyZ2V0Tm9kZS5zcHJpbmdGb3JjZVkgLT0gc3ByaW5nRm9yY2VZO1xufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNSZXB1bHNpb25Gb3JjZSA9IGZ1bmN0aW9uIChub2RlQSwgbm9kZUIpIHtcbiAgdmFyIHJlY3RBID0gbm9kZUEuZ2V0UmVjdCgpO1xuICB2YXIgcmVjdEIgPSBub2RlQi5nZXRSZWN0KCk7XG4gIHZhciBvdmVybGFwQW1vdW50ID0gbmV3IEFycmF5KDIpO1xuICB2YXIgY2xpcFBvaW50cyA9IG5ldyBBcnJheSg0KTtcbiAgdmFyIGRpc3RhbmNlWDtcbiAgdmFyIGRpc3RhbmNlWTtcbiAgdmFyIGRpc3RhbmNlU3F1YXJlZDtcbiAgdmFyIGRpc3RhbmNlO1xuICB2YXIgcmVwdWxzaW9uRm9yY2U7XG4gIHZhciByZXB1bHNpb25Gb3JjZVg7XG4gIHZhciByZXB1bHNpb25Gb3JjZVk7XG5cbiAgaWYgKHJlY3RBLmludGVyc2VjdHMocmVjdEIpKS8vIHR3byBub2RlcyBvdmVybGFwXG4gIHtcbiAgICAvLyBjYWxjdWxhdGUgc2VwYXJhdGlvbiBhbW91bnQgaW4geCBhbmQgeSBkaXJlY3Rpb25zXG4gICAgSUdlb21ldHJ5LmNhbGNTZXBhcmF0aW9uQW1vdW50KHJlY3RBLFxuICAgICAgICAgICAgcmVjdEIsXG4gICAgICAgICAgICBvdmVybGFwQW1vdW50LFxuICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCAvIDIuMCk7XG5cbiAgICByZXB1bHNpb25Gb3JjZVggPSAyICogb3ZlcmxhcEFtb3VudFswXTtcbiAgICByZXB1bHNpb25Gb3JjZVkgPSAyICogb3ZlcmxhcEFtb3VudFsxXTtcbiAgICBcbiAgICB2YXIgY2hpbGRyZW5Db25zdGFudCA9IG5vZGVBLm5vT2ZDaGlsZHJlbiAqIG5vZGVCLm5vT2ZDaGlsZHJlbiAvIChub2RlQS5ub09mQ2hpbGRyZW4gKyBub2RlQi5ub09mQ2hpbGRyZW4pO1xuICAgIFxuICAgIC8vIEFwcGx5IGZvcmNlcyBvbiB0aGUgdHdvIG5vZGVzXG4gICAgbm9kZUEucmVwdWxzaW9uRm9yY2VYIC09IGNoaWxkcmVuQ29uc3RhbnQgKiByZXB1bHNpb25Gb3JjZVg7XG4gICAgbm9kZUEucmVwdWxzaW9uRm9yY2VZIC09IGNoaWxkcmVuQ29uc3RhbnQgKiByZXB1bHNpb25Gb3JjZVk7XG4gICAgbm9kZUIucmVwdWxzaW9uRm9yY2VYICs9IGNoaWxkcmVuQ29uc3RhbnQgKiByZXB1bHNpb25Gb3JjZVg7XG4gICAgbm9kZUIucmVwdWxzaW9uRm9yY2VZICs9IGNoaWxkcmVuQ29uc3RhbnQgKiByZXB1bHNpb25Gb3JjZVk7XG4gIH1cbiAgZWxzZS8vIG5vIG92ZXJsYXBcbiAge1xuICAgIC8vIGNhbGN1bGF0ZSBkaXN0YW5jZVxuXG4gICAgaWYgKHRoaXMudW5pZm9ybUxlYWZOb2RlU2l6ZXMgJiZcbiAgICAgICAgICAgIG5vZGVBLmdldENoaWxkKCkgPT0gbnVsbCAmJiBub2RlQi5nZXRDaGlsZCgpID09IG51bGwpLy8gc2ltcGx5IGJhc2UgcmVwdWxzaW9uIG9uIGRpc3RhbmNlIG9mIG5vZGUgY2VudGVyc1xuICAgIHtcbiAgICAgIGRpc3RhbmNlWCA9IHJlY3RCLmdldENlbnRlclgoKSAtIHJlY3RBLmdldENlbnRlclgoKTtcbiAgICAgIGRpc3RhbmNlWSA9IHJlY3RCLmdldENlbnRlclkoKSAtIHJlY3RBLmdldENlbnRlclkoKTtcbiAgICB9XG4gICAgZWxzZS8vIHVzZSBjbGlwcGluZyBwb2ludHNcbiAgICB7XG4gICAgICBJR2VvbWV0cnkuZ2V0SW50ZXJzZWN0aW9uKHJlY3RBLCByZWN0QiwgY2xpcFBvaW50cyk7XG5cbiAgICAgIGRpc3RhbmNlWCA9IGNsaXBQb2ludHNbMl0gLSBjbGlwUG9pbnRzWzBdO1xuICAgICAgZGlzdGFuY2VZID0gY2xpcFBvaW50c1szXSAtIGNsaXBQb2ludHNbMV07XG4gICAgfVxuXG4gICAgLy8gTm8gcmVwdWxzaW9uIHJhbmdlLiBGUiBncmlkIHZhcmlhbnQgc2hvdWxkIHRha2UgY2FyZSBvZiB0aGlzLlxuICAgIGlmIChNYXRoLmFicyhkaXN0YW5jZVgpIDwgRkRMYXlvdXRDb25zdGFudHMuTUlOX1JFUFVMU0lPTl9ESVNUKVxuICAgIHtcbiAgICAgIGRpc3RhbmNlWCA9IElNYXRoLnNpZ24oZGlzdGFuY2VYKSAqXG4gICAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLk1JTl9SRVBVTFNJT05fRElTVDtcbiAgICB9XG5cbiAgICBpZiAoTWF0aC5hYnMoZGlzdGFuY2VZKSA8IEZETGF5b3V0Q29uc3RhbnRzLk1JTl9SRVBVTFNJT05fRElTVClcbiAgICB7XG4gICAgICBkaXN0YW5jZVkgPSBJTWF0aC5zaWduKGRpc3RhbmNlWSkgKlxuICAgICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5NSU5fUkVQVUxTSU9OX0RJU1Q7XG4gICAgfVxuXG4gICAgZGlzdGFuY2VTcXVhcmVkID0gZGlzdGFuY2VYICogZGlzdGFuY2VYICsgZGlzdGFuY2VZICogZGlzdGFuY2VZO1xuICAgIGRpc3RhbmNlID0gTWF0aC5zcXJ0KGRpc3RhbmNlU3F1YXJlZCk7XG5cbiAgICByZXB1bHNpb25Gb3JjZSA9IHRoaXMucmVwdWxzaW9uQ29uc3RhbnQgKiBub2RlQS5ub09mQ2hpbGRyZW4gKiBub2RlQi5ub09mQ2hpbGRyZW4gLyBkaXN0YW5jZVNxdWFyZWQ7XG5cbiAgICAvLyBQcm9qZWN0IGZvcmNlIG9udG8geCBhbmQgeSBheGVzXG4gICAgcmVwdWxzaW9uRm9yY2VYID0gcmVwdWxzaW9uRm9yY2UgKiBkaXN0YW5jZVggLyBkaXN0YW5jZTtcbiAgICByZXB1bHNpb25Gb3JjZVkgPSByZXB1bHNpb25Gb3JjZSAqIGRpc3RhbmNlWSAvIGRpc3RhbmNlO1xuICAgICBcbiAgICAvLyBBcHBseSBmb3JjZXMgb24gdGhlIHR3byBub2RlcyAgICBcbiAgICBub2RlQS5yZXB1bHNpb25Gb3JjZVggLT0gcmVwdWxzaW9uRm9yY2VYO1xuICAgIG5vZGVBLnJlcHVsc2lvbkZvcmNlWSAtPSByZXB1bHNpb25Gb3JjZVk7XG4gICAgbm9kZUIucmVwdWxzaW9uRm9yY2VYICs9IHJlcHVsc2lvbkZvcmNlWDtcbiAgICBub2RlQi5yZXB1bHNpb25Gb3JjZVkgKz0gcmVwdWxzaW9uRm9yY2VZO1xuICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY0dyYXZpdGF0aW9uYWxGb3JjZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciBvd25lckdyYXBoO1xuICB2YXIgb3duZXJDZW50ZXJYO1xuICB2YXIgb3duZXJDZW50ZXJZO1xuICB2YXIgZGlzdGFuY2VYO1xuICB2YXIgZGlzdGFuY2VZO1xuICB2YXIgYWJzRGlzdGFuY2VYO1xuICB2YXIgYWJzRGlzdGFuY2VZO1xuICB2YXIgZXN0aW1hdGVkU2l6ZTtcbiAgb3duZXJHcmFwaCA9IG5vZGUuZ2V0T3duZXIoKTtcblxuICBvd25lckNlbnRlclggPSAob3duZXJHcmFwaC5nZXRSaWdodCgpICsgb3duZXJHcmFwaC5nZXRMZWZ0KCkpIC8gMjtcbiAgb3duZXJDZW50ZXJZID0gKG93bmVyR3JhcGguZ2V0VG9wKCkgKyBvd25lckdyYXBoLmdldEJvdHRvbSgpKSAvIDI7XG4gIGRpc3RhbmNlWCA9IG5vZGUuZ2V0Q2VudGVyWCgpIC0gb3duZXJDZW50ZXJYO1xuICBkaXN0YW5jZVkgPSBub2RlLmdldENlbnRlclkoKSAtIG93bmVyQ2VudGVyWTtcbiAgYWJzRGlzdGFuY2VYID0gTWF0aC5hYnMoZGlzdGFuY2VYKSArIG5vZGUuZ2V0V2lkdGgoKSAvIDI7XG4gIGFic0Rpc3RhbmNlWSA9IE1hdGguYWJzKGRpc3RhbmNlWSkgKyBub2RlLmdldEhlaWdodCgpIC8gMjtcblxuICBpZiAobm9kZS5nZXRPd25lcigpID09IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSkvLyBpbiB0aGUgcm9vdCBncmFwaFxuICB7XG4gICAgZXN0aW1hdGVkU2l6ZSA9IG93bmVyR3JhcGguZ2V0RXN0aW1hdGVkU2l6ZSgpICogdGhpcy5ncmF2aXR5UmFuZ2VGYWN0b3I7XG5cbiAgICBpZiAoYWJzRGlzdGFuY2VYID4gZXN0aW1hdGVkU2l6ZSB8fCBhYnNEaXN0YW5jZVkgPiBlc3RpbWF0ZWRTaXplKVxuICAgIHtcbiAgICAgIG5vZGUuZ3Jhdml0YXRpb25Gb3JjZVggPSAtdGhpcy5ncmF2aXR5Q29uc3RhbnQgKiBkaXN0YW5jZVg7XG4gICAgICBub2RlLmdyYXZpdGF0aW9uRm9yY2VZID0gLXRoaXMuZ3Jhdml0eUNvbnN0YW50ICogZGlzdGFuY2VZO1xuICAgIH1cbiAgfVxuICBlbHNlLy8gaW5zaWRlIGEgY29tcG91bmRcbiAge1xuICAgIGVzdGltYXRlZFNpemUgPSBvd25lckdyYXBoLmdldEVzdGltYXRlZFNpemUoKSAqIHRoaXMuY29tcG91bmRHcmF2aXR5UmFuZ2VGYWN0b3I7XG5cbiAgICBpZiAoYWJzRGlzdGFuY2VYID4gZXN0aW1hdGVkU2l6ZSB8fCBhYnNEaXN0YW5jZVkgPiBlc3RpbWF0ZWRTaXplKVxuICAgIHtcbiAgICAgIG5vZGUuZ3Jhdml0YXRpb25Gb3JjZVggPSAtdGhpcy5ncmF2aXR5Q29uc3RhbnQgKiBkaXN0YW5jZVggKlxuICAgICAgICAgICAgICB0aGlzLmNvbXBvdW5kR3Jhdml0eUNvbnN0YW50O1xuICAgICAgbm9kZS5ncmF2aXRhdGlvbkZvcmNlWSA9IC10aGlzLmdyYXZpdHlDb25zdGFudCAqIGRpc3RhbmNlWSAqXG4gICAgICAgICAgICAgIHRoaXMuY29tcG91bmRHcmF2aXR5Q29uc3RhbnQ7XG4gICAgfVxuICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuaXNDb252ZXJnZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjb252ZXJnZWQ7XG4gIHZhciBvc2NpbGF0aW5nID0gZmFsc2U7XG5cbiAgaWYgKHRoaXMudG90YWxJdGVyYXRpb25zID4gdGhpcy5tYXhJdGVyYXRpb25zIC8gMylcbiAge1xuICAgIG9zY2lsYXRpbmcgPVxuICAgICAgICAgICAgTWF0aC5hYnModGhpcy50b3RhbERpc3BsYWNlbWVudCAtIHRoaXMub2xkVG90YWxEaXNwbGFjZW1lbnQpIDwgMjtcbiAgfVxuXG4gIGNvbnZlcmdlZCA9IHRoaXMudG90YWxEaXNwbGFjZW1lbnQgPCB0aGlzLnRvdGFsRGlzcGxhY2VtZW50VGhyZXNob2xkO1xuXG4gIHRoaXMub2xkVG90YWxEaXNwbGFjZW1lbnQgPSB0aGlzLnRvdGFsRGlzcGxhY2VtZW50O1xuXG4gIHJldHVybiBjb252ZXJnZWQgfHwgb3NjaWxhdGluZztcbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5hbmltYXRlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5hbmltYXRpb25EdXJpbmdMYXlvdXQgJiYgIXRoaXMuaXNTdWJMYXlvdXQpXG4gIHtcbiAgICBpZiAodGhpcy5ub3RBbmltYXRlZEl0ZXJhdGlvbnMgPT0gdGhpcy5hbmltYXRpb25QZXJpb2QpXG4gICAge1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgIHRoaXMubm90QW5pbWF0ZWRJdGVyYXRpb25zID0gMDtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIHRoaXMubm90QW5pbWF0ZWRJdGVyYXRpb25zKys7XG4gICAgfVxuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogRlItR3JpZCBWYXJpYW50IFJlcHVsc2lvbiBGb3JjZSBDYWxjdWxhdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNHcmlkID0gZnVuY3Rpb24gKGdyYXBoKXtcblxuICB2YXIgc2l6ZVggPSAwOyBcbiAgdmFyIHNpemVZID0gMDtcbiAgXG4gIHNpemVYID0gcGFyc2VJbnQoTWF0aC5jZWlsKChncmFwaC5nZXRSaWdodCgpIC0gZ3JhcGguZ2V0TGVmdCgpKSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgc2l6ZVkgPSBwYXJzZUludChNYXRoLmNlaWwoKGdyYXBoLmdldEJvdHRvbSgpIC0gZ3JhcGguZ2V0VG9wKCkpIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpO1xuICBcbiAgdmFyIGdyaWQgPSBuZXcgQXJyYXkoc2l6ZVgpO1xuICBcbiAgZm9yKHZhciBpID0gMDsgaSA8IHNpemVYOyBpKyspe1xuICAgIGdyaWRbaV0gPSBuZXcgQXJyYXkoc2l6ZVkpOyAgICBcbiAgfVxuICBcbiAgZm9yKHZhciBpID0gMDsgaSA8IHNpemVYOyBpKyspe1xuICAgIGZvcih2YXIgaiA9IDA7IGogPCBzaXplWTsgaisrKXtcbiAgICAgIGdyaWRbaV1bal0gPSBuZXcgQXJyYXkoKTsgICAgXG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gZ3JpZDtcbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5hZGROb2RlVG9HcmlkID0gZnVuY3Rpb24gKHYsIGxlZnQsIHRvcCl7XG4gICAgXG4gIHZhciBzdGFydFggPSAwO1xuICB2YXIgZmluaXNoWCA9IDA7XG4gIHZhciBzdGFydFkgPSAwO1xuICB2YXIgZmluaXNoWSA9IDA7XG4gIFxuICBzdGFydFggPSBwYXJzZUludChNYXRoLmZsb29yKCh2LmdldFJlY3QoKS54IC0gbGVmdCkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSk7XG4gIGZpbmlzaFggPSBwYXJzZUludChNYXRoLmZsb29yKCh2LmdldFJlY3QoKS53aWR0aCArIHYuZ2V0UmVjdCgpLnggLSBsZWZ0KSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgc3RhcnRZID0gcGFyc2VJbnQoTWF0aC5mbG9vcigodi5nZXRSZWN0KCkueSAtIHRvcCkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSk7XG4gIGZpbmlzaFkgPSBwYXJzZUludChNYXRoLmZsb29yKCh2LmdldFJlY3QoKS5oZWlnaHQgKyB2LmdldFJlY3QoKS55IC0gdG9wKSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcblxuICBmb3IgKHZhciBpID0gc3RhcnRYOyBpIDw9IGZpbmlzaFg7IGkrKylcbiAge1xuICAgIGZvciAodmFyIGogPSBzdGFydFk7IGogPD0gZmluaXNoWTsgaisrKVxuICAgIHtcbiAgICAgIHRoaXMuZ3JpZFtpXVtqXS5wdXNoKHYpO1xuICAgICAgdi5zZXRHcmlkQ29vcmRpbmF0ZXMoc3RhcnRYLCBmaW5pc2hYLCBzdGFydFksIGZpbmlzaFkpOyBcbiAgICB9XG4gIH0gIFxuXG59O1xuXG5GRExheW91dC5wcm90b3R5cGUudXBkYXRlR3JpZCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaTtcbiAgdmFyIG5vZGVBO1xuICB2YXIgbE5vZGVzID0gdGhpcy5nZXRBbGxOb2RlcygpO1xuICBcbiAgdGhpcy5ncmlkID0gdGhpcy5jYWxjR3JpZCh0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkpOyAgIFxuXG4gIC8vIHB1dCBhbGwgbm9kZXMgdG8gcHJvcGVyIGdyaWQgY2VsbHNcbiAgZm9yIChpID0gMDsgaSA8IGxOb2Rlcy5sZW5ndGg7IGkrKylcbiAge1xuICAgIG5vZGVBID0gbE5vZGVzW2ldO1xuICAgIHRoaXMuYWRkTm9kZVRvR3JpZChub2RlQSwgdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldExlZnQoKSwgdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldFRvcCgpKTtcbiAgfSBcblxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGN1bGF0ZVJlcHVsc2lvbkZvcmNlT2ZBTm9kZSA9IGZ1bmN0aW9uIChub2RlQSwgcHJvY2Vzc2VkTm9kZVNldCl7XG4gIFxuICBpZiAoKHRoaXMudG90YWxJdGVyYXRpb25zICUgRkRMYXlvdXRDb25zdGFudHMuR1JJRF9DQUxDVUxBVElPTl9DSEVDS19QRVJJT0QgPT0gMSAmJiAhdGhpcy5pc1RyZWVHcm93aW5nICYmICF0aGlzLmlzR3Jvd3RoRmluaXNoZWQpIHx8ICh0aGlzLmdyb3dUcmVlSXRlcmF0aW9ucyAlIDEwID09IDEgJiYgdGhpcy5pc1RyZWVHcm93aW5nKSB8fCAodGhpcy5hZnRlckdyb3d0aEl0ZXJhdGlvbnMgJSAxMCA9PSAxICYmIHRoaXMuaXNHcm93dGhGaW5pc2hlZCkpXG4gIHtcbiAgICB2YXIgc3Vycm91bmRpbmcgPSBuZXcgU2V0KCk7XG4gICAgbm9kZUEuc3Vycm91bmRpbmcgPSBuZXcgQXJyYXkoKTtcbiAgICB2YXIgbm9kZUI7XG4gICAgdmFyIGdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgXG4gICAgZm9yICh2YXIgaSA9IChub2RlQS5zdGFydFggLSAxKTsgaSA8IChub2RlQS5maW5pc2hYICsgMik7IGkrKylcbiAgICB7XG4gICAgICBmb3IgKHZhciBqID0gKG5vZGVBLnN0YXJ0WSAtIDEpOyBqIDwgKG5vZGVBLmZpbmlzaFkgKyAyKTsgaisrKVxuICAgICAge1xuICAgICAgICBpZiAoISgoaSA8IDApIHx8IChqIDwgMCkgfHwgKGkgPj0gZ3JpZC5sZW5ndGgpIHx8IChqID49IGdyaWRbMF0ubGVuZ3RoKSkpXG4gICAgICAgIHsgIFxuICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgZ3JpZFtpXVtqXS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgbm9kZUIgPSBncmlkW2ldW2pdW2tdO1xuXG4gICAgICAgICAgICAvLyBJZiBib3RoIG5vZGVzIGFyZSBub3QgbWVtYmVycyBvZiB0aGUgc2FtZSBncmFwaCwgXG4gICAgICAgICAgICAvLyBvciBib3RoIG5vZGVzIGFyZSB0aGUgc2FtZSwgc2tpcC5cbiAgICAgICAgICAgIGlmICgobm9kZUEuZ2V0T3duZXIoKSAhPSBub2RlQi5nZXRPd25lcigpKSB8fCAobm9kZUEgPT0gbm9kZUIpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHJlcHVsc2lvbiBmb3JjZSBiZXR3ZWVuXG4gICAgICAgICAgICAvLyBub2RlQSBhbmQgbm9kZUIgaGFzIGFscmVhZHkgYmVlbiBjYWxjdWxhdGVkXG4gICAgICAgICAgICBpZiAoIXByb2Nlc3NlZE5vZGVTZXQuaGFzKG5vZGVCKSAmJiAhc3Vycm91bmRpbmcuaGFzKG5vZGVCKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlWCA9IE1hdGguYWJzKG5vZGVBLmdldENlbnRlclgoKS1ub2RlQi5nZXRDZW50ZXJYKCkpIC0gXG4gICAgICAgICAgICAgICAgICAgICgobm9kZUEuZ2V0V2lkdGgoKS8yKSArIChub2RlQi5nZXRXaWR0aCgpLzIpKTtcbiAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlWSA9IE1hdGguYWJzKG5vZGVBLmdldENlbnRlclkoKS1ub2RlQi5nZXRDZW50ZXJZKCkpIC0gXG4gICAgICAgICAgICAgICAgICAgICgobm9kZUEuZ2V0SGVpZ2h0KCkvMikgKyAobm9kZUIuZ2V0SGVpZ2h0KCkvMikpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIGlmIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIG5vZGVBIGFuZCBub2RlQiBcbiAgICAgICAgICAgICAgLy8gaXMgbGVzcyB0aGVuIGNhbGN1bGF0aW9uIHJhbmdlXG4gICAgICAgICAgICAgIGlmICgoZGlzdGFuY2VYIDw9IHRoaXMucmVwdWxzaW9uUmFuZ2UpICYmIChkaXN0YW5jZVkgPD0gdGhpcy5yZXB1bHNpb25SYW5nZSkpXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvL3RoZW4gYWRkIG5vZGVCIHRvIHN1cnJvdW5kaW5nIG9mIG5vZGVBXG4gICAgICAgICAgICAgICAgc3Vycm91bmRpbmcuYWRkKG5vZGVCKTtcbiAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgICAgICBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBub2RlQS5zdXJyb3VuZGluZyA9IFsuLi5zdXJyb3VuZGluZ107XG5cdFxuICB9XG4gIGZvciAoaSA9IDA7IGkgPCBub2RlQS5zdXJyb3VuZGluZy5sZW5ndGg7IGkrKylcbiAge1xuICAgIHRoaXMuY2FsY1JlcHVsc2lvbkZvcmNlKG5vZGVBLCBub2RlQS5zdXJyb3VuZGluZ1tpXSk7XG4gIH1cdFxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNSZXB1bHNpb25SYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIDAuMDtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBUcmVlIFJlZHVjdGlvbiBtZXRob2RzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUmVkdWNlIHRyZWVzIFxuRkRMYXlvdXQucHJvdG90eXBlLnJlZHVjZVRyZWVzID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIHBydW5lZE5vZGVzQWxsID0gW107XG4gIHZhciBjb250YWluc0xlYWYgPSB0cnVlO1xuICB2YXIgbm9kZTtcbiAgXG4gIHdoaWxlKGNvbnRhaW5zTGVhZikge1xuICAgIHZhciBhbGxOb2RlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzKCk7XG4gICAgdmFyIHBydW5lZE5vZGVzSW5TdGVwVGVtcCA9IFtdO1xuICAgIGNvbnRhaW5zTGVhZiA9IGZhbHNlO1xuICAgIFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5vZGUgPSBhbGxOb2Rlc1tpXTtcbiAgICAgIGlmKG5vZGUuZ2V0RWRnZXMoKS5sZW5ndGggPT0gMSAmJiAhbm9kZS5nZXRFZGdlcygpWzBdLmlzSW50ZXJHcmFwaCAmJiBub2RlLmdldENoaWxkKCkgPT0gbnVsbCl7XG4gICAgICAgIHBydW5lZE5vZGVzSW5TdGVwVGVtcC5wdXNoKFtub2RlLCBub2RlLmdldEVkZ2VzKClbMF0sIG5vZGUuZ2V0T3duZXIoKV0pO1xuICAgICAgICBjb250YWluc0xlYWYgPSB0cnVlO1xuICAgICAgfSAgXG4gICAgfVxuICAgIGlmKGNvbnRhaW5zTGVhZiA9PSB0cnVlKXtcbiAgICAgIHZhciBwcnVuZWROb2Rlc0luU3RlcCA9IFtdO1xuICAgICAgZm9yKHZhciBqID0gMDsgaiA8IHBydW5lZE5vZGVzSW5TdGVwVGVtcC5sZW5ndGg7IGorKyl7XG4gICAgICAgIGlmKHBydW5lZE5vZGVzSW5TdGVwVGVtcFtqXVswXS5nZXRFZGdlcygpLmxlbmd0aCA9PSAxKXtcbiAgICAgICAgICBwcnVuZWROb2Rlc0luU3RlcC5wdXNoKHBydW5lZE5vZGVzSW5TdGVwVGVtcFtqXSk7ICBcbiAgICAgICAgICBwcnVuZWROb2Rlc0luU3RlcFRlbXBbal1bMF0uZ2V0T3duZXIoKS5yZW1vdmUocHJ1bmVkTm9kZXNJblN0ZXBUZW1wW2pdWzBdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcHJ1bmVkTm9kZXNBbGwucHVzaChwcnVuZWROb2Rlc0luU3RlcCk7XG4gICAgICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbE5vZGVzKCk7XG4gICAgICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbEVkZ2VzKCk7XG4gICAgfVxuICB9XG4gIHRoaXMucHJ1bmVkTm9kZXNBbGwgPSBwcnVuZWROb2Rlc0FsbDtcbn07XG5cbi8vIEdyb3cgdHJlZSBvbmUgc3RlcCBcbkZETGF5b3V0LnByb3RvdHlwZS5ncm93VHJlZSA9IGZ1bmN0aW9uKHBydW5lZE5vZGVzQWxsKVxue1xuICB2YXIgbGVuZ3RoT2ZQcnVuZWROb2Rlc0luU3RlcCA9IHBydW5lZE5vZGVzQWxsLmxlbmd0aDsgXG4gIHZhciBwcnVuZWROb2Rlc0luU3RlcCA9IHBydW5lZE5vZGVzQWxsW2xlbmd0aE9mUHJ1bmVkTm9kZXNJblN0ZXAgLSAxXTsgIFxuXG4gIHZhciBub2RlRGF0YTsgIFxuICBmb3IodmFyIGkgPSAwOyBpIDwgcHJ1bmVkTm9kZXNJblN0ZXAubGVuZ3RoOyBpKyspe1xuICAgIG5vZGVEYXRhID0gcHJ1bmVkTm9kZXNJblN0ZXBbaV07XG5cbiAgICB0aGlzLmZpbmRQbGFjZWZvclBydW5lZE5vZGUobm9kZURhdGEpO1xuICAgIFxuICAgIG5vZGVEYXRhWzJdLmFkZChub2RlRGF0YVswXSk7XG4gICAgbm9kZURhdGFbMl0uYWRkKG5vZGVEYXRhWzFdLCBub2RlRGF0YVsxXS5zb3VyY2UsIG5vZGVEYXRhWzFdLnRhcmdldCk7XG4gIH1cblxuICBwcnVuZWROb2Rlc0FsbC5zcGxpY2UocHJ1bmVkTm9kZXNBbGwubGVuZ3RoLTEsIDEpO1xuICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbE5vZGVzKCk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsRWRnZXMoKTtcbn07XG5cbi8vIEZpbmQgYW4gYXBwcm9wcmlhdGUgcG9zaXRpb24gdG8gcmVwbGFjZSBwcnVuZWQgbm9kZSwgdGhpcyBtZXRob2QgY2FuIGJlIGltcHJvdmVkXG5GRExheW91dC5wcm90b3R5cGUuZmluZFBsYWNlZm9yUHJ1bmVkTm9kZSA9IGZ1bmN0aW9uKG5vZGVEYXRhKXtcbiAgXG4gIHZhciBncmlkRm9yUHJ1bmVkTm9kZTsgIFxuICB2YXIgbm9kZVRvQ29ubmVjdDtcbiAgdmFyIHBydW5lZE5vZGUgPSBub2RlRGF0YVswXTtcbiAgaWYocHJ1bmVkTm9kZSA9PSBub2RlRGF0YVsxXS5zb3VyY2Upe1xuICAgIG5vZGVUb0Nvbm5lY3QgPSBub2RlRGF0YVsxXS50YXJnZXQ7XG4gIH1cbiAgZWxzZSB7XG4gICAgbm9kZVRvQ29ubmVjdCA9IG5vZGVEYXRhWzFdLnNvdXJjZTsgIFxuICB9XG4gIHZhciBzdGFydEdyaWRYID0gbm9kZVRvQ29ubmVjdC5zdGFydFg7XG4gIHZhciBmaW5pc2hHcmlkWCA9IG5vZGVUb0Nvbm5lY3QuZmluaXNoWDtcbiAgdmFyIHN0YXJ0R3JpZFkgPSBub2RlVG9Db25uZWN0LnN0YXJ0WTtcbiAgdmFyIGZpbmlzaEdyaWRZID0gbm9kZVRvQ29ubmVjdC5maW5pc2hZOyBcbiAgXG4gIHZhciB1cE5vZGVDb3VudCA9IDA7XG4gIHZhciBkb3duTm9kZUNvdW50ID0gMDtcbiAgdmFyIHJpZ2h0Tm9kZUNvdW50ID0gMDtcbiAgdmFyIGxlZnROb2RlQ291bnQgPSAwO1xuICB2YXIgY29udHJvbFJlZ2lvbnMgPSBbdXBOb2RlQ291bnQsIHJpZ2h0Tm9kZUNvdW50LCBkb3duTm9kZUNvdW50LCBsZWZ0Tm9kZUNvdW50XVxuICBcbiAgaWYoc3RhcnRHcmlkWSA+IDApe1xuICAgIGZvcih2YXIgaSA9IHN0YXJ0R3JpZFg7IGkgPD0gZmluaXNoR3JpZFg7IGkrKyApe1xuICAgICAgY29udHJvbFJlZ2lvbnNbMF0gKz0gKHRoaXMuZ3JpZFtpXVtzdGFydEdyaWRZIC0gMV0ubGVuZ3RoICsgdGhpcy5ncmlkW2ldW3N0YXJ0R3JpZFldLmxlbmd0aCAtIDEpOyAgIFxuICAgIH1cbiAgfVxuICBpZihmaW5pc2hHcmlkWCA8IHRoaXMuZ3JpZC5sZW5ndGggLSAxKXtcbiAgICBmb3IodmFyIGkgPSBzdGFydEdyaWRZOyBpIDw9IGZpbmlzaEdyaWRZOyBpKysgKXtcbiAgICAgIGNvbnRyb2xSZWdpb25zWzFdICs9ICh0aGlzLmdyaWRbZmluaXNoR3JpZFggKyAxXVtpXS5sZW5ndGggKyB0aGlzLmdyaWRbZmluaXNoR3JpZFhdW2ldLmxlbmd0aCAtIDEpOyAgIFxuICAgIH1cbiAgfVxuICBpZihmaW5pc2hHcmlkWSA8IHRoaXMuZ3JpZFswXS5sZW5ndGggLSAxKXtcbiAgICBmb3IodmFyIGkgPSBzdGFydEdyaWRYOyBpIDw9IGZpbmlzaEdyaWRYOyBpKysgKXtcbiAgICAgIGNvbnRyb2xSZWdpb25zWzJdICs9ICh0aGlzLmdyaWRbaV1bZmluaXNoR3JpZFkgKyAxXS5sZW5ndGggKyB0aGlzLmdyaWRbaV1bZmluaXNoR3JpZFldLmxlbmd0aCAtIDEpOyAgIFxuICAgIH1cbiAgfVxuICBpZihzdGFydEdyaWRYID4gMCl7XG4gICAgZm9yKHZhciBpID0gc3RhcnRHcmlkWTsgaSA8PSBmaW5pc2hHcmlkWTsgaSsrICl7XG4gICAgICBjb250cm9sUmVnaW9uc1szXSArPSAodGhpcy5ncmlkW3N0YXJ0R3JpZFggLSAxXVtpXS5sZW5ndGggKyB0aGlzLmdyaWRbc3RhcnRHcmlkWF1baV0ubGVuZ3RoIC0gMSk7ICAgXG4gICAgfVxuICB9XG4gIHZhciBtaW4gPSBJbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIG1pbkNvdW50O1xuICB2YXIgbWluSW5kZXg7XG4gIGZvcih2YXIgaiA9IDA7IGogPCBjb250cm9sUmVnaW9ucy5sZW5ndGg7IGorKyl7XG4gICAgaWYoY29udHJvbFJlZ2lvbnNbal0gPCBtaW4pe1xuICAgICAgbWluID0gY29udHJvbFJlZ2lvbnNbal07XG4gICAgICBtaW5Db3VudCA9IDE7XG4gICAgICBtaW5JbmRleCA9IGo7XG4gICAgfSAgXG4gICAgZWxzZSBpZihjb250cm9sUmVnaW9uc1tqXSA9PSBtaW4pe1xuICAgICAgbWluQ291bnQrKzsgIFxuICAgIH1cbiAgfVxuICBcbiAgaWYobWluQ291bnQgPT0gMyAmJiBtaW4gPT0gMCl7XG4gICAgaWYoY29udHJvbFJlZ2lvbnNbMF0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1sxXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzJdID09IDApe1xuICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAxOyAgICBcbiAgICB9XG4gICAgZWxzZSBpZihjb250cm9sUmVnaW9uc1swXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzFdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbM10gPT0gMCl7XG4gICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDA7ICBcbiAgICB9XG4gICAgZWxzZSBpZihjb250cm9sUmVnaW9uc1swXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzJdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbM10gPT0gMCl7XG4gICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDM7ICBcbiAgICB9XG4gICAgZWxzZSBpZihjb250cm9sUmVnaW9uc1sxXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzJdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbM10gPT0gMCl7XG4gICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDI7ICBcbiAgICB9XG4gIH1cbiAgZWxzZSBpZihtaW5Db3VudCA9PSAyICYmIG1pbiA9PSAwKXtcbiAgICB2YXIgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgaWYoY29udHJvbFJlZ2lvbnNbMF0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1sxXSA9PSAwKXs7XG4gICAgICBpZihyYW5kb20gPT0gMCl7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMDtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZihjb250cm9sUmVnaW9uc1swXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzJdID09IDApe1xuICAgICAgaWYocmFuZG9tID09IDApe1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDA7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDI7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYoY29udHJvbFJlZ2lvbnNbMF0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1szXSA9PSAwKXtcbiAgICAgIGlmKHJhbmRvbSA9PSAwKXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAwO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAzO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKGNvbnRyb2xSZWdpb25zWzFdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbMl0gPT0gMCl7XG4gICAgICBpZihyYW5kb20gPT0gMCl7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMjtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZihjb250cm9sUmVnaW9uc1sxXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzNdID09IDApe1xuICAgICAgaWYocmFuZG9tID09IDApe1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDE7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDM7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYocmFuZG9tID09IDApe1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDI7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDM7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2UgaWYobWluQ291bnQgPT0gNCAmJiBtaW4gPT0gMCl7XG4gICAgdmFyIHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuICAgIGdyaWRGb3JQcnVuZWROb2RlID0gcmFuZG9tOyAgXG4gIH1cbiAgZWxzZSB7XG4gICAgZ3JpZEZvclBydW5lZE5vZGUgPSBtaW5JbmRleDtcbiAgfVxuICBcbiAgaWYoZ3JpZEZvclBydW5lZE5vZGUgPT0gMCkge1xuICAgIHBydW5lZE5vZGUuc2V0Q2VudGVyKG5vZGVUb0Nvbm5lY3QuZ2V0Q2VudGVyWCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUb0Nvbm5lY3QuZ2V0Q2VudGVyWSgpIC0gbm9kZVRvQ29ubmVjdC5nZXRIZWlnaHQoKS8yIC0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCAtIHBydW5lZE5vZGUuZ2V0SGVpZ2h0KCkvMik7ICBcbiAgfVxuICBlbHNlIGlmKGdyaWRGb3JQcnVuZWROb2RlID09IDEpIHtcbiAgICBwcnVuZWROb2RlLnNldENlbnRlcihub2RlVG9Db25uZWN0LmdldENlbnRlclgoKSArIG5vZGVUb0Nvbm5lY3QuZ2V0V2lkdGgoKS8yICsgRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCArIHBydW5lZE5vZGUuZ2V0V2lkdGgoKS8yLFxuICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUb0Nvbm5lY3QuZ2V0Q2VudGVyWSgpKTsgIFxuICB9XG4gIGVsc2UgaWYoZ3JpZEZvclBydW5lZE5vZGUgPT0gMikge1xuICAgIHBydW5lZE5vZGUuc2V0Q2VudGVyKG5vZGVUb0Nvbm5lY3QuZ2V0Q2VudGVyWCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUb0Nvbm5lY3QuZ2V0Q2VudGVyWSgpICsgbm9kZVRvQ29ubmVjdC5nZXRIZWlnaHQoKS8yICsgRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCArIHBydW5lZE5vZGUuZ2V0SGVpZ2h0KCkvMik7ICBcbiAgfVxuICBlbHNlIHsgXG4gICAgcHJ1bmVkTm9kZS5zZXRDZW50ZXIobm9kZVRvQ29ubmVjdC5nZXRDZW50ZXJYKCkgLSBub2RlVG9Db25uZWN0LmdldFdpZHRoKCkvMiAtIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggLSBwcnVuZWROb2RlLmdldFdpZHRoKCkvMixcbiAgICAgICAgICAgICAgICAgICAgICAgICBub2RlVG9Db25uZWN0LmdldENlbnRlclkoKSk7ICBcbiAgfVxuICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRkRMYXlvdXQ7XG4iLCJ2YXIgTGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9MYXlvdXRDb25zdGFudHMnKTtcblxuZnVuY3Rpb24gRkRMYXlvdXRDb25zdGFudHMoKSB7XG59XG5cbi8vRkRMYXlvdXRDb25zdGFudHMgaW5oZXJpdHMgc3RhdGljIHByb3BzIGluIExheW91dENvbnN0YW50c1xuZm9yICh2YXIgcHJvcCBpbiBMYXlvdXRDb25zdGFudHMpIHtcbiAgRkRMYXlvdXRDb25zdGFudHNbcHJvcF0gPSBMYXlvdXRDb25zdGFudHNbcHJvcF07XG59XG5cbkZETGF5b3V0Q29uc3RhbnRzLk1BWF9JVEVSQVRJT05TID0gMjUwMDtcblxuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCA9IDUwO1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9TUFJJTkdfU1RSRU5HVEggPSAwLjQ1O1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEggPSA0NTAwLjA7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfU1RSRU5HVEggPSAwLjQ7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfU1RSRU5HVEggPSAxLjA7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SID0gMy44O1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiA9IDEuNTtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVVNFX1NNQVJUX0lERUFMX0VER0VfTEVOR1RIX0NBTENVTEFUSU9OID0gdHJ1ZTtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVVNFX1NNQVJUX1JFUFVMU0lPTl9SQU5HRV9DQUxDVUxBVElPTiA9IHRydWU7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMID0gMC41O1xuRkRMYXlvdXRDb25zdGFudHMuTUFYX05PREVfRElTUExBQ0VNRU5UX0lOQ1JFTUVOVEFMID0gMTAwLjA7XG5GRExheW91dENvbnN0YW50cy5NQVhfTk9ERV9ESVNQTEFDRU1FTlQgPSBGRExheW91dENvbnN0YW50cy5NQVhfTk9ERV9ESVNQTEFDRU1FTlRfSU5DUkVNRU5UQUwgKiAzO1xuRkRMYXlvdXRDb25zdGFudHMuTUlOX1JFUFVMU0lPTl9ESVNUID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCAvIDEwLjA7XG5GRExheW91dENvbnN0YW50cy5DT05WRVJHRU5DRV9DSEVDS19QRVJJT0QgPSAxMDA7XG5GRExheW91dENvbnN0YW50cy5QRVJfTEVWRUxfSURFQUxfRURHRV9MRU5HVEhfRkFDVE9SID0gMC4xO1xuRkRMYXlvdXRDb25zdGFudHMuTUlOX0VER0VfTEVOR1RIID0gMTtcbkZETGF5b3V0Q29uc3RhbnRzLkdSSURfQ0FMQ1VMQVRJT05fQ0hFQ0tfUEVSSU9EID0gMTA7XG5cbm1vZHVsZS5leHBvcnRzID0gRkRMYXlvdXRDb25zdGFudHM7XG4iLCJ2YXIgTEVkZ2UgPSByZXF1aXJlKCcuL0xFZGdlJyk7XG52YXIgRkRMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0ZETGF5b3V0Q29uc3RhbnRzJyk7XG5cbmZ1bmN0aW9uIEZETGF5b3V0RWRnZShzb3VyY2UsIHRhcmdldCwgdkVkZ2UpIHtcbiAgTEVkZ2UuY2FsbCh0aGlzLCBzb3VyY2UsIHRhcmdldCwgdkVkZ2UpO1xuICB0aGlzLmlkZWFsTGVuZ3RoID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSDtcbn1cblxuRkRMYXlvdXRFZGdlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEVkZ2UucHJvdG90eXBlKTtcblxuZm9yICh2YXIgcHJvcCBpbiBMRWRnZSkge1xuICBGRExheW91dEVkZ2VbcHJvcF0gPSBMRWRnZVtwcm9wXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGRExheW91dEVkZ2U7XG4iLCJ2YXIgTE5vZGUgPSByZXF1aXJlKCcuL0xOb2RlJyk7XG5cbmZ1bmN0aW9uIEZETGF5b3V0Tm9kZShnbSwgbG9jLCBzaXplLCB2Tm9kZSkge1xuICAvLyBhbHRlcm5hdGl2ZSBjb25zdHJ1Y3RvciBpcyBoYW5kbGVkIGluc2lkZSBMTm9kZVxuICBMTm9kZS5jYWxsKHRoaXMsIGdtLCBsb2MsIHNpemUsIHZOb2RlKTtcbiAgLy9TcHJpbmcsIHJlcHVsc2lvbiBhbmQgZ3Jhdml0YXRpb25hbCBmb3JjZXMgYWN0aW5nIG9uIHRoaXMgbm9kZVxuICB0aGlzLnNwcmluZ0ZvcmNlWCA9IDA7XG4gIHRoaXMuc3ByaW5nRm9yY2VZID0gMDtcbiAgdGhpcy5yZXB1bHNpb25Gb3JjZVggPSAwO1xuICB0aGlzLnJlcHVsc2lvbkZvcmNlWSA9IDA7XG4gIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVggPSAwO1xuICB0aGlzLmdyYXZpdGF0aW9uRm9yY2VZID0gMDtcbiAgLy9BbW91bnQgYnkgd2hpY2ggdGhpcyBub2RlIGlzIHRvIGJlIG1vdmVkIGluIHRoaXMgaXRlcmF0aW9uXG4gIHRoaXMuZGlzcGxhY2VtZW50WCA9IDA7XG4gIHRoaXMuZGlzcGxhY2VtZW50WSA9IDA7XG5cbiAgLy9TdGFydCBhbmQgZmluaXNoIGdyaWQgY29vcmRpbmF0ZXMgdGhhdCB0aGlzIG5vZGUgaXMgZmFsbGVuIGludG9cbiAgdGhpcy5zdGFydFggPSAwO1xuICB0aGlzLmZpbmlzaFggPSAwO1xuICB0aGlzLnN0YXJ0WSA9IDA7XG4gIHRoaXMuZmluaXNoWSA9IDA7XG5cbiAgLy9HZW9tZXRyaWMgbmVpZ2hib3JzIG9mIHRoaXMgbm9kZVxuICB0aGlzLnN1cnJvdW5kaW5nID0gW107XG59XG5cbkZETGF5b3V0Tm9kZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExOb2RlLnByb3RvdHlwZSk7XG5cbmZvciAodmFyIHByb3AgaW4gTE5vZGUpIHtcbiAgRkRMYXlvdXROb2RlW3Byb3BdID0gTE5vZGVbcHJvcF07XG59XG5cbkZETGF5b3V0Tm9kZS5wcm90b3R5cGUuc2V0R3JpZENvb3JkaW5hdGVzID0gZnVuY3Rpb24gKF9zdGFydFgsIF9maW5pc2hYLCBfc3RhcnRZLCBfZmluaXNoWSlcbntcbiAgdGhpcy5zdGFydFggPSBfc3RhcnRYO1xuICB0aGlzLmZpbmlzaFggPSBfZmluaXNoWDtcbiAgdGhpcy5zdGFydFkgPSBfc3RhcnRZO1xuICB0aGlzLmZpbmlzaFkgPSBfZmluaXNoWTtcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGRExheW91dE5vZGU7XG4iLCJ2YXIgVW5pcXVlSURHZW5lcmV0b3IgPSByZXF1aXJlKCcuL1VuaXF1ZUlER2VuZXJldG9yJyk7XG5cbmZ1bmN0aW9uIEhhc2hNYXAoKSB7XG4gIHRoaXMubWFwID0ge307XG4gIHRoaXMua2V5cyA9IFtdO1xufVxuXG5IYXNoTWFwLnByb3RvdHlwZS5wdXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChrZXkpO1xuICBpZiAoIXRoaXMuY29udGFpbnModGhlSWQpKSB7XG4gICAgdGhpcy5tYXBbdGhlSWRdID0gdmFsdWU7XG4gICAgdGhpcy5rZXlzLnB1c2goa2V5KTtcbiAgfVxufTtcblxuSGFzaE1hcC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHZhciB0aGVJZCA9IFVuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKGtleSk7XG4gIHJldHVybiB0aGlzLm1hcFtrZXldICE9IG51bGw7XG59O1xuXG5IYXNoTWFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHZhciB0aGVJZCA9IFVuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKGtleSk7XG4gIHJldHVybiB0aGlzLm1hcFt0aGVJZF07XG59O1xuXG5IYXNoTWFwLnByb3RvdHlwZS5rZXlTZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmtleXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2hNYXA7XG4iLCJ2YXIgVW5pcXVlSURHZW5lcmV0b3IgPSByZXF1aXJlKCcuL1VuaXF1ZUlER2VuZXJldG9yJyk7XG5cbmZ1bmN0aW9uIEhhc2hTZXQoKSB7XG4gIHRoaXMuc2V0ID0ge307XG59XG47XG5cbkhhc2hTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIHRoZUlkID0gVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQob2JqKTtcbiAgaWYgKCF0aGlzLmNvbnRhaW5zKHRoZUlkKSlcbiAgICB0aGlzLnNldFt0aGVJZF0gPSBvYmo7XG59O1xuXG5IYXNoU2V0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGRlbGV0ZSB0aGlzLnNldFtVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChvYmopXTtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnNldCA9IHt9O1xufTtcblxuSGFzaFNldC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0aGlzLnNldFtVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChvYmopXSA9PSBvYmo7XG59O1xuXG5IYXNoU2V0LnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5zaXplKCkgPT09IDA7XG59O1xuXG5IYXNoU2V0LnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zZXQpLmxlbmd0aDtcbn07XG5cbi8vY29uY2F0cyB0aGlzLnNldCB0byB0aGUgZ2l2ZW4gbGlzdFxuSGFzaFNldC5wcm90b3R5cGUuYWRkQWxsVG8gPSBmdW5jdGlvbiAobGlzdCkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2V0KTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgbGlzdC5wdXNoKHRoaXMuc2V0W2tleXNbaV1dKTtcbiAgfVxufTtcblxuSGFzaFNldC5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc2V0KS5sZW5ndGg7XG59O1xuXG5IYXNoU2V0LnByb3RvdHlwZS5hZGRBbGwgPSBmdW5jdGlvbiAobGlzdCkge1xuICB2YXIgcyA9IGxpc3QubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgIHZhciB2ID0gbGlzdFtpXTtcbiAgICB0aGlzLmFkZCh2KTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoU2V0O1xuIiwiZnVuY3Rpb24gSUdlb21ldHJ5KCkge1xufVxuXG5JR2VvbWV0cnkuY2FsY1NlcGFyYXRpb25BbW91bnQgPSBmdW5jdGlvbiAocmVjdEEsIHJlY3RCLCBvdmVybGFwQW1vdW50LCBzZXBhcmF0aW9uQnVmZmVyKVxue1xuICBpZiAoIXJlY3RBLmludGVyc2VjdHMocmVjdEIpKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cbiAgdmFyIGRpcmVjdGlvbnMgPSBuZXcgQXJyYXkoMik7XG4gIElHZW9tZXRyeS5kZWNpZGVEaXJlY3Rpb25zRm9yT3ZlcmxhcHBpbmdOb2RlcyhyZWN0QSwgcmVjdEIsIGRpcmVjdGlvbnMpO1xuICBvdmVybGFwQW1vdW50WzBdID0gTWF0aC5taW4ocmVjdEEuZ2V0UmlnaHQoKSwgcmVjdEIuZ2V0UmlnaHQoKSkgLVxuICAgICAgICAgIE1hdGgubWF4KHJlY3RBLngsIHJlY3RCLngpO1xuICBvdmVybGFwQW1vdW50WzFdID0gTWF0aC5taW4ocmVjdEEuZ2V0Qm90dG9tKCksIHJlY3RCLmdldEJvdHRvbSgpKSAtXG4gICAgICAgICAgTWF0aC5tYXgocmVjdEEueSwgcmVjdEIueSk7XG4gIC8vIHVwZGF0ZSB0aGUgb3ZlcmxhcHBpbmcgYW1vdW50cyBmb3IgdGhlIGZvbGxvd2luZyBjYXNlczpcbiAgaWYgKChyZWN0QS5nZXRYKCkgPD0gcmVjdEIuZ2V0WCgpKSAmJiAocmVjdEEuZ2V0UmlnaHQoKSA+PSByZWN0Qi5nZXRSaWdodCgpKSlcbiAge1xuICAgIG92ZXJsYXBBbW91bnRbMF0gKz0gTWF0aC5taW4oKHJlY3RCLmdldFgoKSAtIHJlY3RBLmdldFgoKSksXG4gICAgICAgICAgICAocmVjdEEuZ2V0UmlnaHQoKSAtIHJlY3RCLmdldFJpZ2h0KCkpKTtcbiAgfVxuICBlbHNlIGlmICgocmVjdEIuZ2V0WCgpIDw9IHJlY3RBLmdldFgoKSkgJiYgKHJlY3RCLmdldFJpZ2h0KCkgPj0gcmVjdEEuZ2V0UmlnaHQoKSkpXG4gIHtcbiAgICBvdmVybGFwQW1vdW50WzBdICs9IE1hdGgubWluKChyZWN0QS5nZXRYKCkgLSByZWN0Qi5nZXRYKCkpLFxuICAgICAgICAgICAgKHJlY3RCLmdldFJpZ2h0KCkgLSByZWN0QS5nZXRSaWdodCgpKSk7XG4gIH1cbiAgaWYgKChyZWN0QS5nZXRZKCkgPD0gcmVjdEIuZ2V0WSgpKSAmJiAocmVjdEEuZ2V0Qm90dG9tKCkgPj0gcmVjdEIuZ2V0Qm90dG9tKCkpKVxuICB7XG4gICAgb3ZlcmxhcEFtb3VudFsxXSArPSBNYXRoLm1pbigocmVjdEIuZ2V0WSgpIC0gcmVjdEEuZ2V0WSgpKSxcbiAgICAgICAgICAgIChyZWN0QS5nZXRCb3R0b20oKSAtIHJlY3RCLmdldEJvdHRvbSgpKSk7XG4gIH1cbiAgZWxzZSBpZiAoKHJlY3RCLmdldFkoKSA8PSByZWN0QS5nZXRZKCkpICYmIChyZWN0Qi5nZXRCb3R0b20oKSA+PSByZWN0QS5nZXRCb3R0b20oKSkpXG4gIHtcbiAgICBvdmVybGFwQW1vdW50WzFdICs9IE1hdGgubWluKChyZWN0QS5nZXRZKCkgLSByZWN0Qi5nZXRZKCkpLFxuICAgICAgICAgICAgKHJlY3RCLmdldEJvdHRvbSgpIC0gcmVjdEEuZ2V0Qm90dG9tKCkpKTtcbiAgfVxuXG4gIC8vIGZpbmQgc2xvcGUgb2YgdGhlIGxpbmUgcGFzc2VzIHR3byBjZW50ZXJzXG4gIHZhciBzbG9wZSA9IE1hdGguYWJzKChyZWN0Qi5nZXRDZW50ZXJZKCkgLSByZWN0QS5nZXRDZW50ZXJZKCkpIC9cbiAgICAgICAgICAocmVjdEIuZ2V0Q2VudGVyWCgpIC0gcmVjdEEuZ2V0Q2VudGVyWCgpKSk7XG4gIC8vIGlmIGNlbnRlcnMgYXJlIG92ZXJsYXBwZWRcbiAgaWYgKChyZWN0Qi5nZXRDZW50ZXJZKCkgPT0gcmVjdEEuZ2V0Q2VudGVyWSgpKSAmJlxuICAgICAgICAgIChyZWN0Qi5nZXRDZW50ZXJYKCkgPT0gcmVjdEEuZ2V0Q2VudGVyWCgpKSlcbiAge1xuICAgIC8vIGFzc3VtZSB0aGUgc2xvcGUgaXMgMSAoNDUgZGVncmVlKVxuICAgIHNsb3BlID0gMS4wO1xuICB9XG5cbiAgdmFyIG1vdmVCeVkgPSBzbG9wZSAqIG92ZXJsYXBBbW91bnRbMF07XG4gIHZhciBtb3ZlQnlYID0gb3ZlcmxhcEFtb3VudFsxXSAvIHNsb3BlO1xuICBpZiAob3ZlcmxhcEFtb3VudFswXSA8IG1vdmVCeVgpXG4gIHtcbiAgICBtb3ZlQnlYID0gb3ZlcmxhcEFtb3VudFswXTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICBtb3ZlQnlZID0gb3ZlcmxhcEFtb3VudFsxXTtcbiAgfVxuICAvLyByZXR1cm4gaGFsZiB0aGUgYW1vdW50IHNvIHRoYXQgaWYgZWFjaCByZWN0YW5nbGUgaXMgbW92ZWQgYnkgdGhlc2VcbiAgLy8gYW1vdW50cyBpbiBvcHBvc2l0ZSBkaXJlY3Rpb25zLCBvdmVybGFwIHdpbGwgYmUgcmVzb2x2ZWRcbiAgb3ZlcmxhcEFtb3VudFswXSA9IC0xICogZGlyZWN0aW9uc1swXSAqICgobW92ZUJ5WCAvIDIpICsgc2VwYXJhdGlvbkJ1ZmZlcik7XG4gIG92ZXJsYXBBbW91bnRbMV0gPSAtMSAqIGRpcmVjdGlvbnNbMV0gKiAoKG1vdmVCeVkgLyAyKSArIHNlcGFyYXRpb25CdWZmZXIpO1xufVxuXG5JR2VvbWV0cnkuZGVjaWRlRGlyZWN0aW9uc0Zvck92ZXJsYXBwaW5nTm9kZXMgPSBmdW5jdGlvbiAocmVjdEEsIHJlY3RCLCBkaXJlY3Rpb25zKVxue1xuICBpZiAocmVjdEEuZ2V0Q2VudGVyWCgpIDwgcmVjdEIuZ2V0Q2VudGVyWCgpKVxuICB7XG4gICAgZGlyZWN0aW9uc1swXSA9IC0xO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIGRpcmVjdGlvbnNbMF0gPSAxO1xuICB9XG5cbiAgaWYgKHJlY3RBLmdldENlbnRlclkoKSA8IHJlY3RCLmdldENlbnRlclkoKSlcbiAge1xuICAgIGRpcmVjdGlvbnNbMV0gPSAtMTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICBkaXJlY3Rpb25zWzFdID0gMTtcbiAgfVxufVxuXG5JR2VvbWV0cnkuZ2V0SW50ZXJzZWN0aW9uMiA9IGZ1bmN0aW9uIChyZWN0QSwgcmVjdEIsIHJlc3VsdClcbntcbiAgLy9yZXN1bHRbMC0xXSB3aWxsIGNvbnRhaW4gY2xpcFBvaW50IG9mIHJlY3RBLCByZXN1bHRbMi0zXSB3aWxsIGNvbnRhaW4gY2xpcFBvaW50IG9mIHJlY3RCXG4gIHZhciBwMXggPSByZWN0QS5nZXRDZW50ZXJYKCk7XG4gIHZhciBwMXkgPSByZWN0QS5nZXRDZW50ZXJZKCk7XG4gIHZhciBwMnggPSByZWN0Qi5nZXRDZW50ZXJYKCk7XG4gIHZhciBwMnkgPSByZWN0Qi5nZXRDZW50ZXJZKCk7XG5cbiAgLy9pZiB0d28gcmVjdGFuZ2xlcyBpbnRlcnNlY3QsIHRoZW4gY2xpcHBpbmcgcG9pbnRzIGFyZSBjZW50ZXJzXG4gIGlmIChyZWN0QS5pbnRlcnNlY3RzKHJlY3RCKSlcbiAge1xuICAgIHJlc3VsdFswXSA9IHAxeDtcbiAgICByZXN1bHRbMV0gPSBwMXk7XG4gICAgcmVzdWx0WzJdID0gcDJ4O1xuICAgIHJlc3VsdFszXSA9IHAyeTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvL3ZhcmlhYmxlcyBmb3IgcmVjdEFcbiAgdmFyIHRvcExlZnRBeCA9IHJlY3RBLmdldFgoKTtcbiAgdmFyIHRvcExlZnRBeSA9IHJlY3RBLmdldFkoKTtcbiAgdmFyIHRvcFJpZ2h0QXggPSByZWN0QS5nZXRSaWdodCgpO1xuICB2YXIgYm90dG9tTGVmdEF4ID0gcmVjdEEuZ2V0WCgpO1xuICB2YXIgYm90dG9tTGVmdEF5ID0gcmVjdEEuZ2V0Qm90dG9tKCk7XG4gIHZhciBib3R0b21SaWdodEF4ID0gcmVjdEEuZ2V0UmlnaHQoKTtcbiAgdmFyIGhhbGZXaWR0aEEgPSByZWN0QS5nZXRXaWR0aEhhbGYoKTtcbiAgdmFyIGhhbGZIZWlnaHRBID0gcmVjdEEuZ2V0SGVpZ2h0SGFsZigpO1xuICAvL3ZhcmlhYmxlcyBmb3IgcmVjdEJcbiAgdmFyIHRvcExlZnRCeCA9IHJlY3RCLmdldFgoKTtcbiAgdmFyIHRvcExlZnRCeSA9IHJlY3RCLmdldFkoKTtcbiAgdmFyIHRvcFJpZ2h0QnggPSByZWN0Qi5nZXRSaWdodCgpO1xuICB2YXIgYm90dG9tTGVmdEJ4ID0gcmVjdEIuZ2V0WCgpO1xuICB2YXIgYm90dG9tTGVmdEJ5ID0gcmVjdEIuZ2V0Qm90dG9tKCk7XG4gIHZhciBib3R0b21SaWdodEJ4ID0gcmVjdEIuZ2V0UmlnaHQoKTtcbiAgdmFyIGhhbGZXaWR0aEIgPSByZWN0Qi5nZXRXaWR0aEhhbGYoKTtcbiAgdmFyIGhhbGZIZWlnaHRCID0gcmVjdEIuZ2V0SGVpZ2h0SGFsZigpO1xuICAvL2ZsYWcgd2hldGhlciBjbGlwcGluZyBwb2ludHMgYXJlIGZvdW5kXG4gIHZhciBjbGlwUG9pbnRBRm91bmQgPSBmYWxzZTtcbiAgdmFyIGNsaXBQb2ludEJGb3VuZCA9IGZhbHNlO1xuXG4gIC8vIGxpbmUgaXMgdmVydGljYWxcbiAgaWYgKHAxeCA9PSBwMngpXG4gIHtcbiAgICBpZiAocDF5ID4gcDJ5KVxuICAgIHtcbiAgICAgIHJlc3VsdFswXSA9IHAxeDtcbiAgICAgIHJlc3VsdFsxXSA9IHRvcExlZnRBeTtcbiAgICAgIHJlc3VsdFsyXSA9IHAyeDtcbiAgICAgIHJlc3VsdFszXSA9IGJvdHRvbUxlZnRCeTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAocDF5IDwgcDJ5KVxuICAgIHtcbiAgICAgIHJlc3VsdFswXSA9IHAxeDtcbiAgICAgIHJlc3VsdFsxXSA9IGJvdHRvbUxlZnRBeTtcbiAgICAgIHJlc3VsdFsyXSA9IHAyeDtcbiAgICAgIHJlc3VsdFszXSA9IHRvcExlZnRCeTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIC8vbm90IGxpbmUsIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICAvLyBsaW5lIGlzIGhvcml6b250YWxcbiAgZWxzZSBpZiAocDF5ID09IHAyeSlcbiAge1xuICAgIGlmIChwMXggPiBwMngpXG4gICAge1xuICAgICAgcmVzdWx0WzBdID0gdG9wTGVmdEF4O1xuICAgICAgcmVzdWx0WzFdID0gcDF5O1xuICAgICAgcmVzdWx0WzJdID0gdG9wUmlnaHRCeDtcbiAgICAgIHJlc3VsdFszXSA9IHAyeTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAocDF4IDwgcDJ4KVxuICAgIHtcbiAgICAgIHJlc3VsdFswXSA9IHRvcFJpZ2h0QXg7XG4gICAgICByZXN1bHRbMV0gPSBwMXk7XG4gICAgICByZXN1bHRbMl0gPSB0b3BMZWZ0Qng7XG4gICAgICByZXN1bHRbM10gPSBwMnk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAvL25vdCB2YWxpZCBsaW5lLCByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgLy9zbG9wZXMgb2YgcmVjdEEncyBhbmQgcmVjdEIncyBkaWFnb25hbHNcbiAgICB2YXIgc2xvcGVBID0gcmVjdEEuaGVpZ2h0IC8gcmVjdEEud2lkdGg7XG4gICAgdmFyIHNsb3BlQiA9IHJlY3RCLmhlaWdodCAvIHJlY3RCLndpZHRoO1xuXG4gICAgLy9zbG9wZSBvZiBsaW5lIGJldHdlZW4gY2VudGVyIG9mIHJlY3RBIGFuZCBjZW50ZXIgb2YgcmVjdEJcbiAgICB2YXIgc2xvcGVQcmltZSA9IChwMnkgLSBwMXkpIC8gKHAyeCAtIHAxeCk7XG4gICAgdmFyIGNhcmRpbmFsRGlyZWN0aW9uQTtcbiAgICB2YXIgY2FyZGluYWxEaXJlY3Rpb25CO1xuICAgIHZhciB0ZW1wUG9pbnRBeDtcbiAgICB2YXIgdGVtcFBvaW50QXk7XG4gICAgdmFyIHRlbXBQb2ludEJ4O1xuICAgIHZhciB0ZW1wUG9pbnRCeTtcblxuICAgIC8vZGV0ZXJtaW5lIHdoZXRoZXIgY2xpcHBpbmcgcG9pbnQgaXMgdGhlIGNvcm5lciBvZiBub2RlQVxuICAgIGlmICgoLXNsb3BlQSkgPT0gc2xvcGVQcmltZSlcbiAgICB7XG4gICAgICBpZiAocDF4ID4gcDJ4KVxuICAgICAge1xuICAgICAgICByZXN1bHRbMF0gPSBib3R0b21MZWZ0QXg7XG4gICAgICAgIHJlc3VsdFsxXSA9IGJvdHRvbUxlZnRBeTtcbiAgICAgICAgY2xpcFBvaW50QUZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgcmVzdWx0WzBdID0gdG9wUmlnaHRBeDtcbiAgICAgICAgcmVzdWx0WzFdID0gdG9wTGVmdEF5O1xuICAgICAgICBjbGlwUG9pbnRBRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChzbG9wZUEgPT0gc2xvcGVQcmltZSlcbiAgICB7XG4gICAgICBpZiAocDF4ID4gcDJ4KVxuICAgICAge1xuICAgICAgICByZXN1bHRbMF0gPSB0b3BMZWZ0QXg7XG4gICAgICAgIHJlc3VsdFsxXSA9IHRvcExlZnRBeTtcbiAgICAgICAgY2xpcFBvaW50QUZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgcmVzdWx0WzBdID0gYm90dG9tUmlnaHRBeDtcbiAgICAgICAgcmVzdWx0WzFdID0gYm90dG9tTGVmdEF5O1xuICAgICAgICBjbGlwUG9pbnRBRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vZGV0ZXJtaW5lIHdoZXRoZXIgY2xpcHBpbmcgcG9pbnQgaXMgdGhlIGNvcm5lciBvZiBub2RlQlxuICAgIGlmICgoLXNsb3BlQikgPT0gc2xvcGVQcmltZSlcbiAgICB7XG4gICAgICBpZiAocDJ4ID4gcDF4KVxuICAgICAge1xuICAgICAgICByZXN1bHRbMl0gPSBib3R0b21MZWZ0Qng7XG4gICAgICAgIHJlc3VsdFszXSA9IGJvdHRvbUxlZnRCeTtcbiAgICAgICAgY2xpcFBvaW50QkZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgcmVzdWx0WzJdID0gdG9wUmlnaHRCeDtcbiAgICAgICAgcmVzdWx0WzNdID0gdG9wTGVmdEJ5O1xuICAgICAgICBjbGlwUG9pbnRCRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChzbG9wZUIgPT0gc2xvcGVQcmltZSlcbiAgICB7XG4gICAgICBpZiAocDJ4ID4gcDF4KVxuICAgICAge1xuICAgICAgICByZXN1bHRbMl0gPSB0b3BMZWZ0Qng7XG4gICAgICAgIHJlc3VsdFszXSA9IHRvcExlZnRCeTtcbiAgICAgICAgY2xpcFBvaW50QkZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgcmVzdWx0WzJdID0gYm90dG9tUmlnaHRCeDtcbiAgICAgICAgcmVzdWx0WzNdID0gYm90dG9tTGVmdEJ5O1xuICAgICAgICBjbGlwUG9pbnRCRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vaWYgYm90aCBjbGlwcGluZyBwb2ludHMgYXJlIGNvcm5lcnNcbiAgICBpZiAoY2xpcFBvaW50QUZvdW5kICYmIGNsaXBQb2ludEJGb3VuZClcbiAgICB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy9kZXRlcm1pbmUgQ2FyZGluYWwgRGlyZWN0aW9uIG9mIHJlY3RhbmdsZXNcbiAgICBpZiAocDF4ID4gcDJ4KVxuICAgIHtcbiAgICAgIGlmIChwMXkgPiBwMnkpXG4gICAgICB7XG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQSA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbihzbG9wZUEsIHNsb3BlUHJpbWUsIDQpO1xuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkIgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVCLCBzbG9wZVByaW1lLCAyKTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25BID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUEsIHNsb3BlUHJpbWUsIDMpO1xuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkIgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLXNsb3BlQiwgc2xvcGVQcmltZSwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICBpZiAocDF5ID4gcDJ5KVxuICAgICAge1xuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLXNsb3BlQSwgc2xvcGVQcmltZSwgMSk7XG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQiA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbigtc2xvcGVCLCBzbG9wZVByaW1lLCAzKTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25BID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKHNsb3BlQSwgc2xvcGVQcmltZSwgMik7XG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQiA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbihzbG9wZUIsIHNsb3BlUHJpbWUsIDQpO1xuICAgICAgfVxuICAgIH1cbiAgICAvL2NhbGN1bGF0ZSBjbGlwcGluZyBQb2ludCBpZiBpdCBpcyBub3QgZm91bmQgYmVmb3JlXG4gICAgaWYgKCFjbGlwUG9pbnRBRm91bmQpXG4gICAge1xuICAgICAgc3dpdGNoIChjYXJkaW5hbERpcmVjdGlvbkEpXG4gICAgICB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0ZW1wUG9pbnRBeSA9IHRvcExlZnRBeTtcbiAgICAgICAgICB0ZW1wUG9pbnRBeCA9IHAxeCArICgtaGFsZkhlaWdodEEpIC8gc2xvcGVQcmltZTtcbiAgICAgICAgICByZXN1bHRbMF0gPSB0ZW1wUG9pbnRBeDtcbiAgICAgICAgICByZXN1bHRbMV0gPSB0ZW1wUG9pbnRBeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRlbXBQb2ludEF4ID0gYm90dG9tUmlnaHRBeDtcbiAgICAgICAgICB0ZW1wUG9pbnRBeSA9IHAxeSArIGhhbGZXaWR0aEEgKiBzbG9wZVByaW1lO1xuICAgICAgICAgIHJlc3VsdFswXSA9IHRlbXBQb2ludEF4O1xuICAgICAgICAgIHJlc3VsdFsxXSA9IHRlbXBQb2ludEF5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdGVtcFBvaW50QXkgPSBib3R0b21MZWZ0QXk7XG4gICAgICAgICAgdGVtcFBvaW50QXggPSBwMXggKyBoYWxmSGVpZ2h0QSAvIHNsb3BlUHJpbWU7XG4gICAgICAgICAgcmVzdWx0WzBdID0gdGVtcFBvaW50QXg7XG4gICAgICAgICAgcmVzdWx0WzFdID0gdGVtcFBvaW50QXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB0ZW1wUG9pbnRBeCA9IGJvdHRvbUxlZnRBeDtcbiAgICAgICAgICB0ZW1wUG9pbnRBeSA9IHAxeSArICgtaGFsZldpZHRoQSkgKiBzbG9wZVByaW1lO1xuICAgICAgICAgIHJlc3VsdFswXSA9IHRlbXBQb2ludEF4O1xuICAgICAgICAgIHJlc3VsdFsxXSA9IHRlbXBQb2ludEF5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWNsaXBQb2ludEJGb3VuZClcbiAgICB7XG4gICAgICBzd2l0Y2ggKGNhcmRpbmFsRGlyZWN0aW9uQilcbiAgICAgIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRlbXBQb2ludEJ5ID0gdG9wTGVmdEJ5O1xuICAgICAgICAgIHRlbXBQb2ludEJ4ID0gcDJ4ICsgKC1oYWxmSGVpZ2h0QikgLyBzbG9wZVByaW1lO1xuICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xuICAgICAgICAgIHJlc3VsdFszXSA9IHRlbXBQb2ludEJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGVtcFBvaW50QnggPSBib3R0b21SaWdodEJ4O1xuICAgICAgICAgIHRlbXBQb2ludEJ5ID0gcDJ5ICsgaGFsZldpZHRoQiAqIHNsb3BlUHJpbWU7XG4gICAgICAgICAgcmVzdWx0WzJdID0gdGVtcFBvaW50Qng7XG4gICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICB0ZW1wUG9pbnRCeSA9IGJvdHRvbUxlZnRCeTtcbiAgICAgICAgICB0ZW1wUG9pbnRCeCA9IHAyeCArIGhhbGZIZWlnaHRCIC8gc2xvcGVQcmltZTtcbiAgICAgICAgICByZXN1bHRbMl0gPSB0ZW1wUG9pbnRCeDtcbiAgICAgICAgICByZXN1bHRbM10gPSB0ZW1wUG9pbnRCeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHRlbXBQb2ludEJ4ID0gYm90dG9tTGVmdEJ4O1xuICAgICAgICAgIHRlbXBQb2ludEJ5ID0gcDJ5ICsgKC1oYWxmV2lkdGhCKSAqIHNsb3BlUHJpbWU7XG4gICAgICAgICAgcmVzdWx0WzJdID0gdGVtcFBvaW50Qng7XG4gICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uID0gZnVuY3Rpb24gKHNsb3BlLCBzbG9wZVByaW1lLCBsaW5lKVxue1xuICBpZiAoc2xvcGUgPiBzbG9wZVByaW1lKVxuICB7XG4gICAgcmV0dXJuIGxpbmU7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgcmV0dXJuIDEgKyBsaW5lICUgNDtcbiAgfVxufVxuXG5JR2VvbWV0cnkuZ2V0SW50ZXJzZWN0aW9uID0gZnVuY3Rpb24gKHMxLCBzMiwgZjEsIGYyKVxue1xuICBpZiAoZjIgPT0gbnVsbCkge1xuICAgIHJldHVybiBJR2VvbWV0cnkuZ2V0SW50ZXJzZWN0aW9uMihzMSwgczIsIGYxKTtcbiAgfVxuICB2YXIgeDEgPSBzMS54O1xuICB2YXIgeTEgPSBzMS55O1xuICB2YXIgeDIgPSBzMi54O1xuICB2YXIgeTIgPSBzMi55O1xuICB2YXIgeDMgPSBmMS54O1xuICB2YXIgeTMgPSBmMS55O1xuICB2YXIgeDQgPSBmMi54O1xuICB2YXIgeTQgPSBmMi55O1xuICB2YXIgeCwgeTsgLy8gaW50ZXJzZWN0aW9uIHBvaW50XG4gIHZhciBhMSwgYTIsIGIxLCBiMiwgYzEsIGMyOyAvLyBjb2VmZmljaWVudHMgb2YgbGluZSBlcW5zLlxuICB2YXIgZGVub207XG5cbiAgYTEgPSB5MiAtIHkxO1xuICBiMSA9IHgxIC0geDI7XG4gIGMxID0geDIgKiB5MSAtIHgxICogeTI7ICAvLyB7IGExKnggKyBiMSp5ICsgYzEgPSAwIGlzIGxpbmUgMSB9XG5cbiAgYTIgPSB5NCAtIHkzO1xuICBiMiA9IHgzIC0geDQ7XG4gIGMyID0geDQgKiB5MyAtIHgzICogeTQ7ICAvLyB7IGEyKnggKyBiMip5ICsgYzIgPSAwIGlzIGxpbmUgMiB9XG5cbiAgZGVub20gPSBhMSAqIGIyIC0gYTIgKiBiMTtcblxuICBpZiAoZGVub20gPT0gMClcbiAge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgeCA9IChiMSAqIGMyIC0gYjIgKiBjMSkgLyBkZW5vbTtcbiAgeSA9IChhMiAqIGMxIC0gYTEgKiBjMikgLyBkZW5vbTtcblxuICByZXR1cm4gbmV3IFBvaW50KHgsIHkpO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogQ2xhc3MgQ29uc3RhbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLyoqXG4gKiBTb21lIHVzZWZ1bCBwcmUtY2FsY3VsYXRlZCBjb25zdGFudHNcbiAqL1xuSUdlb21ldHJ5LkhBTEZfUEkgPSAwLjUgKiBNYXRoLlBJO1xuSUdlb21ldHJ5Lk9ORV9BTkRfSEFMRl9QSSA9IDEuNSAqIE1hdGguUEk7XG5JR2VvbWV0cnkuVFdPX1BJID0gMi4wICogTWF0aC5QSTtcbklHZW9tZXRyeS5USFJFRV9QSSA9IDMuMCAqIE1hdGguUEk7XG5cbm1vZHVsZS5leHBvcnRzID0gSUdlb21ldHJ5O1xuIiwiZnVuY3Rpb24gSU1hdGgoKSB7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgc2lnbiBvZiB0aGUgaW5wdXQgdmFsdWUuXG4gKi9cbklNYXRoLnNpZ24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHZhbHVlID4gMClcbiAge1xuICAgIHJldHVybiAxO1xuICB9XG4gIGVsc2UgaWYgKHZhbHVlIDwgMClcbiAge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufVxuXG5JTWF0aC5mbG9vciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPCAwID8gTWF0aC5jZWlsKHZhbHVlKSA6IE1hdGguZmxvb3IodmFsdWUpO1xufVxuXG5JTWF0aC5jZWlsID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA8IDAgPyBNYXRoLmZsb29yKHZhbHVlKSA6IE1hdGguY2VpbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSU1hdGg7XG4iLCJmdW5jdGlvbiBJbnRlZ2VyKCkge1xufVxuXG5JbnRlZ2VyLk1BWF9WQUxVRSA9IDIxNDc0ODM2NDc7XG5JbnRlZ2VyLk1JTl9WQUxVRSA9IC0yMTQ3NDgzNjQ4O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVnZXI7XG4iLCJ2YXIgTEdyYXBoT2JqZWN0ID0gcmVxdWlyZSgnLi9MR3JhcGhPYmplY3QnKTtcbnZhciBJR2VvbWV0cnkgPSByZXF1aXJlKCcuL0lHZW9tZXRyeScpO1xudmFyIElNYXRoID0gcmVxdWlyZSgnLi9JTWF0aCcpO1xuXG5mdW5jdGlvbiBMRWRnZShzb3VyY2UsIHRhcmdldCwgdkVkZ2UpIHtcbiAgTEdyYXBoT2JqZWN0LmNhbGwodGhpcywgdkVkZ2UpO1xuXG4gIHRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0ID0gZmFsc2U7XG4gIHRoaXMudkdyYXBoT2JqZWN0ID0gdkVkZ2U7XG4gIHRoaXMuYmVuZHBvaW50cyA9IFtdO1xuICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG59XG5cbkxFZGdlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEdyYXBoT2JqZWN0LnByb3RvdHlwZSk7XG5cbmZvciAodmFyIHByb3AgaW4gTEdyYXBoT2JqZWN0KSB7XG4gIExFZGdlW3Byb3BdID0gTEdyYXBoT2JqZWN0W3Byb3BdO1xufVxuXG5MRWRnZS5wcm90b3R5cGUuZ2V0U291cmNlID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuc291cmNlO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldFRhcmdldCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnRhcmdldDtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5pc0ludGVyR3JhcGggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5pc0ludGVyR3JhcGg7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubGVuZ3RoO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldDtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRCZW5kcG9pbnRzID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuYmVuZHBvaW50cztcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRMY2EgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sY2E7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0U291cmNlSW5MY2EgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5zb3VyY2VJbkxjYTtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRUYXJnZXRJbkxjYSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnRhcmdldEluTGNhO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldE90aGVyRW5kID0gZnVuY3Rpb24gKG5vZGUpXG57XG4gIGlmICh0aGlzLnNvdXJjZSA9PT0gbm9kZSlcbiAge1xuICAgIHJldHVybiB0aGlzLnRhcmdldDtcbiAgfVxuICBlbHNlIGlmICh0aGlzLnRhcmdldCA9PT0gbm9kZSlcbiAge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICB0aHJvdyBcIk5vZGUgaXMgbm90IGluY2lkZW50IHdpdGggdGhpcyBlZGdlXCI7XG4gIH1cbn1cblxuTEVkZ2UucHJvdG90eXBlLmdldE90aGVyRW5kSW5HcmFwaCA9IGZ1bmN0aW9uIChub2RlLCBncmFwaClcbntcbiAgdmFyIG90aGVyRW5kID0gdGhpcy5nZXRPdGhlckVuZChub2RlKTtcbiAgdmFyIHJvb3QgPSBncmFwaC5nZXRHcmFwaE1hbmFnZXIoKS5nZXRSb290KCk7XG5cbiAgd2hpbGUgKHRydWUpXG4gIHtcbiAgICBpZiAob3RoZXJFbmQuZ2V0T3duZXIoKSA9PSBncmFwaClcbiAgICB7XG4gICAgICByZXR1cm4gb3RoZXJFbmQ7XG4gICAgfVxuXG4gICAgaWYgKG90aGVyRW5kLmdldE93bmVyKCkgPT0gcm9vdClcbiAgICB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBvdGhlckVuZCA9IG90aGVyRW5kLmdldE93bmVyKCkuZ2V0UGFyZW50KCk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS51cGRhdGVMZW5ndGggPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgY2xpcFBvaW50Q29vcmRpbmF0ZXMgPSBuZXcgQXJyYXkoNCk7XG5cbiAgdGhpcy5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQgPVxuICAgICAgICAgIElHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24odGhpcy50YXJnZXQuZ2V0UmVjdCgpLFxuICAgICAgICAgICAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UmVjdCgpLFxuICAgICAgICAgICAgICAgICAgY2xpcFBvaW50Q29vcmRpbmF0ZXMpO1xuXG4gIGlmICghdGhpcy5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQpXG4gIHtcbiAgICB0aGlzLmxlbmd0aFggPSBjbGlwUG9pbnRDb29yZGluYXRlc1swXSAtIGNsaXBQb2ludENvb3JkaW5hdGVzWzJdO1xuICAgIHRoaXMubGVuZ3RoWSA9IGNsaXBQb2ludENvb3JkaW5hdGVzWzFdIC0gY2xpcFBvaW50Q29vcmRpbmF0ZXNbM107XG5cbiAgICBpZiAoTWF0aC5hYnModGhpcy5sZW5ndGhYKSA8IDEuMClcbiAgICB7XG4gICAgICB0aGlzLmxlbmd0aFggPSBJTWF0aC5zaWduKHRoaXMubGVuZ3RoWCk7XG4gICAgfVxuXG4gICAgaWYgKE1hdGguYWJzKHRoaXMubGVuZ3RoWSkgPCAxLjApXG4gICAge1xuICAgICAgdGhpcy5sZW5ndGhZID0gSU1hdGguc2lnbih0aGlzLmxlbmd0aFkpO1xuICAgIH1cblxuICAgIHRoaXMubGVuZ3RoID0gTWF0aC5zcXJ0KFxuICAgICAgICAgICAgdGhpcy5sZW5ndGhYICogdGhpcy5sZW5ndGhYICsgdGhpcy5sZW5ndGhZICogdGhpcy5sZW5ndGhZKTtcbiAgfVxufTtcblxuTEVkZ2UucHJvdG90eXBlLnVwZGF0ZUxlbmd0aFNpbXBsZSA9IGZ1bmN0aW9uICgpXG57XG4gIHRoaXMubGVuZ3RoWCA9IHRoaXMudGFyZ2V0LmdldENlbnRlclgoKSAtIHRoaXMuc291cmNlLmdldENlbnRlclgoKTtcbiAgdGhpcy5sZW5ndGhZID0gdGhpcy50YXJnZXQuZ2V0Q2VudGVyWSgpIC0gdGhpcy5zb3VyY2UuZ2V0Q2VudGVyWSgpO1xuXG4gIGlmIChNYXRoLmFicyh0aGlzLmxlbmd0aFgpIDwgMS4wKVxuICB7XG4gICAgdGhpcy5sZW5ndGhYID0gSU1hdGguc2lnbih0aGlzLmxlbmd0aFgpO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKHRoaXMubGVuZ3RoWSkgPCAxLjApXG4gIHtcbiAgICB0aGlzLmxlbmd0aFkgPSBJTWF0aC5zaWduKHRoaXMubGVuZ3RoWSk7XG4gIH1cblxuICB0aGlzLmxlbmd0aCA9IE1hdGguc3FydChcbiAgICAgICAgICB0aGlzLmxlbmd0aFggKiB0aGlzLmxlbmd0aFggKyB0aGlzLmxlbmd0aFkgKiB0aGlzLmxlbmd0aFkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExFZGdlO1xuIiwidmFyIExHcmFwaE9iamVjdCA9IHJlcXVpcmUoJy4vTEdyYXBoT2JqZWN0Jyk7XG52YXIgSW50ZWdlciA9IHJlcXVpcmUoJy4vSW50ZWdlcicpO1xudmFyIExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vTGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgTEdyYXBoTWFuYWdlciA9IHJlcXVpcmUoJy4vTEdyYXBoTWFuYWdlcicpO1xudmFyIExOb2RlID0gcmVxdWlyZSgnLi9MTm9kZScpO1xudmFyIExFZGdlID0gcmVxdWlyZSgnLi9MRWRnZScpO1xudmFyIEhhc2hTZXQgPSByZXF1aXJlKCcuL0hhc2hTZXQnKTtcbnZhciBSZWN0YW5nbGVEID0gcmVxdWlyZSgnLi9SZWN0YW5nbGVEJyk7XG52YXIgUG9pbnQgPSByZXF1aXJlKCcuL1BvaW50Jyk7XG52YXIgTGlua2VkTGlzdCA9IHJlcXVpcmUoJy4vTGlua2VkTGlzdCcpO1xuXG5mdW5jdGlvbiBMR3JhcGgocGFyZW50LCBvYmoyLCB2R3JhcGgpIHtcbiAgTEdyYXBoT2JqZWN0LmNhbGwodGhpcywgdkdyYXBoKTtcbiAgdGhpcy5lc3RpbWF0ZWRTaXplID0gSW50ZWdlci5NSU5fVkFMVUU7XG4gIHRoaXMubWFyZ2luID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBUEhfTUFSR0lOO1xuICB0aGlzLmVkZ2VzID0gW107XG4gIHRoaXMubm9kZXMgPSBbXTtcbiAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICBpZiAob2JqMiAhPSBudWxsICYmIG9iajIgaW5zdGFuY2VvZiBMR3JhcGhNYW5hZ2VyKSB7XG4gICAgdGhpcy5ncmFwaE1hbmFnZXIgPSBvYmoyO1xuICB9XG4gIGVsc2UgaWYgKG9iajIgIT0gbnVsbCAmJiBvYmoyIGluc3RhbmNlb2YgTGF5b3V0KSB7XG4gICAgdGhpcy5ncmFwaE1hbmFnZXIgPSBvYmoyLmdyYXBoTWFuYWdlcjtcbiAgfVxufVxuXG5MR3JhcGgucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMR3JhcGhPYmplY3QucHJvdG90eXBlKTtcbmZvciAodmFyIHByb3AgaW4gTEdyYXBoT2JqZWN0KSB7XG4gIExHcmFwaFtwcm9wXSA9IExHcmFwaE9iamVjdFtwcm9wXTtcbn1cblxuTEdyYXBoLnByb3RvdHlwZS5nZXROb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMubm9kZXM7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldEVkZ2VzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5lZGdlcztcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0R3JhcGhNYW5hZ2VyID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRQYXJlbnQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5wYXJlbnQ7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sZWZ0O1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRSaWdodCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnJpZ2h0O1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRUb3AgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy50b3A7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldEJvdHRvbSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmJvdHRvbTtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuaXNDb25uZWN0ZWQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5pc0Nvbm5lY3RlZDtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKG9iajEsIHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpIHtcbiAgaWYgKHNvdXJjZU5vZGUgPT0gbnVsbCAmJiB0YXJnZXROb2RlID09IG51bGwpIHtcbiAgICB2YXIgbmV3Tm9kZSA9IG9iajE7XG4gICAgaWYgKHRoaXMuZ3JhcGhNYW5hZ2VyID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiR3JhcGggaGFzIG5vIGdyYXBoIG1nciFcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2V0Tm9kZXMoKS5pbmRleE9mKG5ld05vZGUpID4gLTEpIHtcbiAgICAgIHRocm93IFwiTm9kZSBhbHJlYWR5IGluIGdyYXBoIVwiO1xuICAgIH1cbiAgICBuZXdOb2RlLm93bmVyID0gdGhpcztcbiAgICB0aGlzLmdldE5vZGVzKCkucHVzaChuZXdOb2RlKTtcblxuICAgIHJldHVybiBuZXdOb2RlO1xuICB9XG4gIGVsc2Uge1xuICAgIHZhciBuZXdFZGdlID0gb2JqMTtcbiAgICBpZiAoISh0aGlzLmdldE5vZGVzKCkuaW5kZXhPZihzb3VyY2VOb2RlKSA+IC0xICYmICh0aGlzLmdldE5vZGVzKCkuaW5kZXhPZih0YXJnZXROb2RlKSkgPiAtMSkpIHtcbiAgICAgIHRocm93IFwiU291cmNlIG9yIHRhcmdldCBub3QgaW4gZ3JhcGghXCI7XG4gICAgfVxuXG4gICAgaWYgKCEoc291cmNlTm9kZS5vd25lciA9PSB0YXJnZXROb2RlLm93bmVyICYmIHNvdXJjZU5vZGUub3duZXIgPT0gdGhpcykpIHtcbiAgICAgIHRocm93IFwiQm90aCBvd25lcnMgbXVzdCBiZSB0aGlzIGdyYXBoIVwiO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2VOb2RlLm93bmVyICE9IHRhcmdldE5vZGUub3duZXIpXG4gICAge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gc2V0IHNvdXJjZSBhbmQgdGFyZ2V0XG4gICAgbmV3RWRnZS5zb3VyY2UgPSBzb3VyY2VOb2RlO1xuICAgIG5ld0VkZ2UudGFyZ2V0ID0gdGFyZ2V0Tm9kZTtcblxuICAgIC8vIHNldCBhcyBpbnRyYS1ncmFwaCBlZGdlXG4gICAgbmV3RWRnZS5pc0ludGVyR3JhcGggPSBmYWxzZTtcblxuICAgIC8vIGFkZCB0byBncmFwaCBlZGdlIGxpc3RcbiAgICB0aGlzLmdldEVkZ2VzKCkucHVzaChuZXdFZGdlKTtcblxuICAgIC8vIGFkZCB0byBpbmNpZGVuY3kgbGlzdHNcbiAgICBzb3VyY2VOb2RlLmVkZ2VzLnB1c2gobmV3RWRnZSk7XG5cbiAgICBpZiAodGFyZ2V0Tm9kZSAhPSBzb3VyY2VOb2RlKVxuICAgIHtcbiAgICAgIHRhcmdldE5vZGUuZWRnZXMucHVzaChuZXdFZGdlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RWRnZTtcbiAgfVxufTtcblxuTEdyYXBoLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciBub2RlID0gb2JqO1xuICBpZiAob2JqIGluc3RhbmNlb2YgTE5vZGUpIHtcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIk5vZGUgaXMgbnVsbCFcIjtcbiAgICB9XG4gICAgaWYgKCEobm9kZS5vd25lciAhPSBudWxsICYmIG5vZGUub3duZXIgPT0gdGhpcykpIHtcbiAgICAgIHRocm93IFwiT3duZXIgZ3JhcGggaXMgaW52YWxpZCFcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ3JhcGhNYW5hZ2VyID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiT3duZXIgZ3JhcGggbWFuYWdlciBpcyBpbnZhbGlkIVwiO1xuICAgIH1cbiAgICAvLyByZW1vdmUgaW5jaWRlbnQgZWRnZXMgZmlyc3QgKG1ha2UgYSBjb3B5IHRvIGRvIGl0IHNhZmVseSlcbiAgICB2YXIgZWRnZXNUb0JlUmVtb3ZlZCA9IG5vZGUuZWRnZXMuc2xpY2UoKTtcbiAgICB2YXIgZWRnZTtcbiAgICB2YXIgcyA9IGVkZ2VzVG9CZVJlbW92ZWQubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICAgIHtcbiAgICAgIGVkZ2UgPSBlZGdlc1RvQmVSZW1vdmVkW2ldO1xuXG4gICAgICBpZiAoZWRnZS5pc0ludGVyR3JhcGgpXG4gICAgICB7XG4gICAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlbW92ZShlZGdlKTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgZWRnZS5zb3VyY2Uub3duZXIucmVtb3ZlKGVkZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIG5vdyB0aGUgbm9kZSBpdHNlbGZcbiAgICB2YXIgaW5kZXggPSB0aGlzLm5vZGVzLmluZGV4T2Yobm9kZSk7XG4gICAgaWYgKGluZGV4ID09IC0xKSB7XG4gICAgICB0aHJvdyBcIk5vZGUgbm90IGluIG93bmVyIG5vZGUgbGlzdCFcIjtcbiAgICB9XG5cbiAgICB0aGlzLm5vZGVzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgTEVkZ2UpIHtcbiAgICB2YXIgZWRnZSA9IG9iajtcbiAgICBpZiAoZWRnZSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIkVkZ2UgaXMgbnVsbCFcIjtcbiAgICB9XG4gICAgaWYgKCEoZWRnZS5zb3VyY2UgIT0gbnVsbCAmJiBlZGdlLnRhcmdldCAhPSBudWxsKSkge1xuICAgICAgdGhyb3cgXCJTb3VyY2UgYW5kL29yIHRhcmdldCBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAoIShlZGdlLnNvdXJjZS5vd25lciAhPSBudWxsICYmIGVkZ2UudGFyZ2V0Lm93bmVyICE9IG51bGwgJiZcbiAgICAgICAgICAgIGVkZ2Uuc291cmNlLm93bmVyID09IHRoaXMgJiYgZWRnZS50YXJnZXQub3duZXIgPT0gdGhpcykpIHtcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgb3duZXIgaXMgaW52YWxpZCFcIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5kZXggPSBlZGdlLnNvdXJjZS5lZGdlcy5pbmRleE9mKGVkZ2UpO1xuICAgIHZhciB0YXJnZXRJbmRleCA9IGVkZ2UudGFyZ2V0LmVkZ2VzLmluZGV4T2YoZWRnZSk7XG4gICAgaWYgKCEoc291cmNlSW5kZXggPiAtMSAmJiB0YXJnZXRJbmRleCA+IC0xKSkge1xuICAgICAgdGhyb3cgXCJTb3VyY2UgYW5kL29yIHRhcmdldCBkb2Vzbid0IGtub3cgdGhpcyBlZGdlIVwiO1xuICAgIH1cblxuICAgIGVkZ2Uuc291cmNlLmVkZ2VzLnNwbGljZShzb3VyY2VJbmRleCwgMSk7XG5cbiAgICBpZiAoZWRnZS50YXJnZXQgIT0gZWRnZS5zb3VyY2UpXG4gICAge1xuICAgICAgZWRnZS50YXJnZXQuZWRnZXMuc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBlZGdlLnNvdXJjZS5vd25lci5nZXRFZGdlcygpLmluZGV4T2YoZWRnZSk7XG4gICAgaWYgKGluZGV4ID09IC0xKSB7XG4gICAgICB0aHJvdyBcIk5vdCBpbiBvd25lcidzIGVkZ2UgbGlzdCFcIjtcbiAgICB9XG5cbiAgICBlZGdlLnNvdXJjZS5vd25lci5nZXRFZGdlcygpLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn07XG5cbkxHcmFwaC5wcm90b3R5cGUudXBkYXRlTGVmdFRvcCA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciB0b3AgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIGxlZnQgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIG5vZGVUb3A7XG4gIHZhciBub2RlTGVmdDtcbiAgdmFyIG1hcmdpbjtcblxuICB2YXIgbm9kZXMgPSB0aGlzLmdldE5vZGVzKCk7XG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICB7XG4gICAgdmFyIGxOb2RlID0gbm9kZXNbaV07XG4gICAgbm9kZVRvcCA9IGxOb2RlLmdldFRvcCgpO1xuICAgIG5vZGVMZWZ0ID0gbE5vZGUuZ2V0TGVmdCgpO1xuXG4gICAgaWYgKHRvcCA+IG5vZGVUb3ApXG4gICAge1xuICAgICAgdG9wID0gbm9kZVRvcDtcbiAgICB9XG5cbiAgICBpZiAobGVmdCA+IG5vZGVMZWZ0KVxuICAgIHtcbiAgICAgIGxlZnQgPSBub2RlTGVmdDtcbiAgICB9XG4gIH1cblxuICAvLyBEbyB3ZSBoYXZlIGFueSBub2RlcyBpbiB0aGlzIGdyYXBoP1xuICBpZiAodG9wID09IEludGVnZXIuTUFYX1ZBTFVFKVxuICB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZihub2Rlc1swXS5nZXRQYXJlbnQoKS5wYWRkaW5nTGVmdCAhPSB1bmRlZmluZWQpe1xuICAgIG1hcmdpbiA9IG5vZGVzWzBdLmdldFBhcmVudCgpLnBhZGRpbmdMZWZ0O1xuICB9XG4gIGVsc2V7XG4gICAgbWFyZ2luID0gdGhpcy5tYXJnaW47XG4gIH1cblxuICB0aGlzLmxlZnQgPSBsZWZ0IC0gbWFyZ2luO1xuICB0aGlzLnRvcCA9IHRvcCAtIG1hcmdpbjtcblxuICAvLyBBcHBseSB0aGUgbWFyZ2lucyBhbmQgcmV0dXJuIHRoZSByZXN1bHRcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLmxlZnQsIHRoaXMudG9wKTtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUudXBkYXRlQm91bmRzID0gZnVuY3Rpb24gKHJlY3Vyc2l2ZSlcbntcbiAgLy8gY2FsY3VsYXRlIGJvdW5kc1xuICB2YXIgbGVmdCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgcmlnaHQgPSAtSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciB0b3AgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIGJvdHRvbSA9IC1JbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIG5vZGVMZWZ0O1xuICB2YXIgbm9kZVJpZ2h0O1xuICB2YXIgbm9kZVRvcDtcbiAgdmFyIG5vZGVCb3R0b207XG4gIHZhciBtYXJnaW47XG5cbiAgdmFyIG5vZGVzID0gdGhpcy5ub2RlcztcbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICB7XG4gICAgdmFyIGxOb2RlID0gbm9kZXNbaV07XG5cbiAgICBpZiAocmVjdXJzaXZlICYmIGxOb2RlLmNoaWxkICE9IG51bGwpXG4gICAge1xuICAgICAgbE5vZGUudXBkYXRlQm91bmRzKCk7XG4gICAgfVxuICAgIG5vZGVMZWZ0ID0gbE5vZGUuZ2V0TGVmdCgpO1xuICAgIG5vZGVSaWdodCA9IGxOb2RlLmdldFJpZ2h0KCk7XG4gICAgbm9kZVRvcCA9IGxOb2RlLmdldFRvcCgpO1xuICAgIG5vZGVCb3R0b20gPSBsTm9kZS5nZXRCb3R0b20oKTtcblxuICAgIGlmIChsZWZ0ID4gbm9kZUxlZnQpXG4gICAge1xuICAgICAgbGVmdCA9IG5vZGVMZWZ0O1xuICAgIH1cblxuICAgIGlmIChyaWdodCA8IG5vZGVSaWdodClcbiAgICB7XG4gICAgICByaWdodCA9IG5vZGVSaWdodDtcbiAgICB9XG5cbiAgICBpZiAodG9wID4gbm9kZVRvcClcbiAgICB7XG4gICAgICB0b3AgPSBub2RlVG9wO1xuICAgIH1cblxuICAgIGlmIChib3R0b20gPCBub2RlQm90dG9tKVxuICAgIHtcbiAgICAgIGJvdHRvbSA9IG5vZGVCb3R0b207XG4gICAgfVxuICB9XG5cbiAgdmFyIGJvdW5kaW5nUmVjdCA9IG5ldyBSZWN0YW5nbGVEKGxlZnQsIHRvcCwgcmlnaHQgLSBsZWZ0LCBib3R0b20gLSB0b3ApO1xuICBpZiAobGVmdCA9PSBJbnRlZ2VyLk1BWF9WQUxVRSlcbiAge1xuICAgIHRoaXMubGVmdCA9IHRoaXMucGFyZW50LmdldExlZnQoKTtcbiAgICB0aGlzLnJpZ2h0ID0gdGhpcy5wYXJlbnQuZ2V0UmlnaHQoKTtcbiAgICB0aGlzLnRvcCA9IHRoaXMucGFyZW50LmdldFRvcCgpO1xuICAgIHRoaXMuYm90dG9tID0gdGhpcy5wYXJlbnQuZ2V0Qm90dG9tKCk7XG4gIH1cblxuICBpZihub2Rlc1swXS5nZXRQYXJlbnQoKS5wYWRkaW5nTGVmdCAhPSB1bmRlZmluZWQpe1xuICAgIG1hcmdpbiA9IG5vZGVzWzBdLmdldFBhcmVudCgpLnBhZGRpbmdMZWZ0O1xuICB9XG4gIGVsc2V7XG4gICAgbWFyZ2luID0gdGhpcy5tYXJnaW47XG4gIH1cblxuICB0aGlzLmxlZnQgPSBib3VuZGluZ1JlY3QueCAtIG1hcmdpbjtcbiAgdGhpcy5yaWdodCA9IGJvdW5kaW5nUmVjdC54ICsgYm91bmRpbmdSZWN0LndpZHRoICsgbWFyZ2luO1xuICB0aGlzLnRvcCA9IGJvdW5kaW5nUmVjdC55IC0gbWFyZ2luO1xuICB0aGlzLmJvdHRvbSA9IGJvdW5kaW5nUmVjdC55ICsgYm91bmRpbmdSZWN0LmhlaWdodCArIG1hcmdpbjtcbn07XG5cbkxHcmFwaC5jYWxjdWxhdGVCb3VuZHMgPSBmdW5jdGlvbiAobm9kZXMpXG57XG4gIHZhciBsZWZ0ID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciByaWdodCA9IC1JbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIHRvcCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgYm90dG9tID0gLUludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgbm9kZUxlZnQ7XG4gIHZhciBub2RlUmlnaHQ7XG4gIHZhciBub2RlVG9wO1xuICB2YXIgbm9kZUJvdHRvbTtcblxuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAge1xuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xuICAgIG5vZGVMZWZ0ID0gbE5vZGUuZ2V0TGVmdCgpO1xuICAgIG5vZGVSaWdodCA9IGxOb2RlLmdldFJpZ2h0KCk7XG4gICAgbm9kZVRvcCA9IGxOb2RlLmdldFRvcCgpO1xuICAgIG5vZGVCb3R0b20gPSBsTm9kZS5nZXRCb3R0b20oKTtcblxuICAgIGlmIChsZWZ0ID4gbm9kZUxlZnQpXG4gICAge1xuICAgICAgbGVmdCA9IG5vZGVMZWZ0O1xuICAgIH1cblxuICAgIGlmIChyaWdodCA8IG5vZGVSaWdodClcbiAgICB7XG4gICAgICByaWdodCA9IG5vZGVSaWdodDtcbiAgICB9XG5cbiAgICBpZiAodG9wID4gbm9kZVRvcClcbiAgICB7XG4gICAgICB0b3AgPSBub2RlVG9wO1xuICAgIH1cblxuICAgIGlmIChib3R0b20gPCBub2RlQm90dG9tKVxuICAgIHtcbiAgICAgIGJvdHRvbSA9IG5vZGVCb3R0b207XG4gICAgfVxuICB9XG5cbiAgdmFyIGJvdW5kaW5nUmVjdCA9IG5ldyBSZWN0YW5nbGVEKGxlZnQsIHRvcCwgcmlnaHQgLSBsZWZ0LCBib3R0b20gLSB0b3ApO1xuXG4gIHJldHVybiBib3VuZGluZ1JlY3Q7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldEluY2x1c2lvblRyZWVEZXB0aCA9IGZ1bmN0aW9uICgpXG57XG4gIGlmICh0aGlzID09IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSlcbiAge1xuICAgIHJldHVybiAxO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXRJbmNsdXNpb25UcmVlRGVwdGgoKTtcbiAgfVxufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRFc3RpbWF0ZWRTaXplID0gZnVuY3Rpb24gKClcbntcbiAgaWYgKHRoaXMuZXN0aW1hdGVkU2l6ZSA9PSBJbnRlZ2VyLk1JTl9WQUxVRSkge1xuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICB9XG4gIHJldHVybiB0aGlzLmVzdGltYXRlZFNpemU7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmNhbGNFc3RpbWF0ZWRTaXplID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIHNpemUgPSAwO1xuICB2YXIgbm9kZXMgPSB0aGlzLm5vZGVzO1xuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAge1xuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xuICAgIHNpemUgKz0gbE5vZGUuY2FsY0VzdGltYXRlZFNpemUoKTtcbiAgfVxuXG4gIGlmIChzaXplID09IDApXG4gIHtcbiAgICB0aGlzLmVzdGltYXRlZFNpemUgPSBMYXlvdXRDb25zdGFudHMuRU1QVFlfQ09NUE9VTkRfTk9ERV9TSVpFO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IHNpemUgLyBNYXRoLnNxcnQodGhpcy5ub2Rlcy5sZW5ndGgpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUudXBkYXRlQ29ubmVjdGVkID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZiAodGhpcy5ub2Rlcy5sZW5ndGggPT0gMClcbiAge1xuICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0b0JlVmlzaXRlZCA9IG5ldyBMaW5rZWRMaXN0KCk7XG4gIHZhciB2aXNpdGVkID0gbmV3IEhhc2hTZXQoKTtcbiAgdmFyIGN1cnJlbnROb2RlID0gdGhpcy5ub2Rlc1swXTtcbiAgdmFyIG5laWdoYm9yRWRnZXM7XG4gIHZhciBjdXJyZW50TmVpZ2hib3I7XG4gIHZhciBjaGlsZHJlbk9mTm9kZSA9IGN1cnJlbnROb2RlLndpdGhDaGlsZHJlbigpO1xuICBjaGlsZHJlbk9mTm9kZS5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICB0b0JlVmlzaXRlZC5wdXNoKG5vZGUpO1xuICB9KTtcblxuICB3aGlsZSAodG9CZVZpc2l0ZWQubGVuZ3RoICE9PSAwKVxuICB7XG4gICAgY3VycmVudE5vZGUgPSB0b0JlVmlzaXRlZC5zaGlmdCgpO1xuICAgIHZpc2l0ZWQuYWRkKGN1cnJlbnROb2RlKTtcblxuICAgIC8vIFRyYXZlcnNlIGFsbCBuZWlnaGJvcnMgb2YgdGhpcyBub2RlXG4gICAgbmVpZ2hib3JFZGdlcyA9IGN1cnJlbnROb2RlLmdldEVkZ2VzKCk7XG4gICAgdmFyIHMgPSBuZWlnaGJvckVkZ2VzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAgICB7XG4gICAgICB2YXIgbmVpZ2hib3JFZGdlID0gbmVpZ2hib3JFZGdlc1tpXTtcbiAgICAgIGN1cnJlbnROZWlnaGJvciA9XG4gICAgICAgICAgICAgIG5laWdoYm9yRWRnZS5nZXRPdGhlckVuZEluR3JhcGgoY3VycmVudE5vZGUsIHRoaXMpO1xuXG4gICAgICAvLyBBZGQgdW52aXNpdGVkIG5laWdoYm9ycyB0byB0aGUgbGlzdCB0byB2aXNpdFxuICAgICAgaWYgKGN1cnJlbnROZWlnaGJvciAhPSBudWxsICYmXG4gICAgICAgICAgICAgICF2aXNpdGVkLmNvbnRhaW5zKGN1cnJlbnROZWlnaGJvcikpXG4gICAgICB7XG4gICAgICAgIHZhciBjaGlsZHJlbk9mTmVpZ2hib3IgPSBjdXJyZW50TmVpZ2hib3Iud2l0aENoaWxkcmVuKCk7XG5cbiAgICAgICAgY2hpbGRyZW5PZk5laWdoYm9yLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgIHRvQmVWaXNpdGVkLnB1c2gobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcblxuICBpZiAodmlzaXRlZC5zaXplKCkgPj0gdGhpcy5ub2Rlcy5sZW5ndGgpXG4gIHtcbiAgICB2YXIgbm9PZlZpc2l0ZWRJblRoaXNHcmFwaCA9IDA7XG5cbiAgICB2YXIgcyA9IHZpc2l0ZWQuc2l6ZSgpO1xuICAgICBPYmplY3Qua2V5cyh2aXNpdGVkLnNldCkuZm9yRWFjaChmdW5jdGlvbih2aXNpdGVkSWQpIHtcbiAgICAgIHZhciB2aXNpdGVkTm9kZSA9IHZpc2l0ZWQuc2V0W3Zpc2l0ZWRJZF07XG4gICAgICBpZiAodmlzaXRlZE5vZGUub3duZXIgPT0gc2VsZilcbiAgICAgIHtcbiAgICAgICAgbm9PZlZpc2l0ZWRJblRoaXNHcmFwaCsrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG5vT2ZWaXNpdGVkSW5UaGlzR3JhcGggPT0gdGhpcy5ub2Rlcy5sZW5ndGgpXG4gICAge1xuICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExHcmFwaDtcbiIsInZhciBMR3JhcGg7XG52YXIgTEVkZ2UgPSByZXF1aXJlKCcuL0xFZGdlJyk7XG5cbmZ1bmN0aW9uIExHcmFwaE1hbmFnZXIobGF5b3V0KSB7XG4gIExHcmFwaCA9IHJlcXVpcmUoJy4vTEdyYXBoJyk7IC8vIEl0IG1heSBiZSBiZXR0ZXIgdG8gaW5pdGlsaXplIHRoaXMgb3V0IG9mIHRoaXMgZnVuY3Rpb24gYnV0IGl0IGdpdmVzIGFuIGVycm9yIChSaWdodC1oYW5kIHNpZGUgb2YgJ2luc3RhbmNlb2YnIGlzIG5vdCBjYWxsYWJsZSkgbm93LlxuICB0aGlzLmxheW91dCA9IGxheW91dDtcblxuICB0aGlzLmdyYXBocyA9IFtdO1xuICB0aGlzLmVkZ2VzID0gW107XG59XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmFkZFJvb3QgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgbmdyYXBoID0gdGhpcy5sYXlvdXQubmV3R3JhcGgoKTtcbiAgdmFyIG5ub2RlID0gdGhpcy5sYXlvdXQubmV3Tm9kZShudWxsKTtcbiAgdmFyIHJvb3QgPSB0aGlzLmFkZChuZ3JhcGgsIG5ub2RlKTtcbiAgdGhpcy5zZXRSb290R3JhcGgocm9vdCk7XG4gIHJldHVybiB0aGlzLnJvb3RHcmFwaDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChuZXdHcmFwaCwgcGFyZW50Tm9kZSwgbmV3RWRnZSwgc291cmNlTm9kZSwgdGFyZ2V0Tm9kZSlcbntcbiAgLy90aGVyZSBhcmUganVzdCAyIHBhcmFtZXRlcnMgYXJlIHBhc3NlZCB0aGVuIGl0IGFkZHMgYW4gTEdyYXBoIGVsc2UgaXQgYWRkcyBhbiBMRWRnZVxuICBpZiAobmV3RWRnZSA9PSBudWxsICYmIHNvdXJjZU5vZGUgPT0gbnVsbCAmJiB0YXJnZXROb2RlID09IG51bGwpIHtcbiAgICBpZiAobmV3R3JhcGggPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJHcmFwaCBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAocGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIlBhcmVudCBub2RlIGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmdyYXBocy5pbmRleE9mKG5ld0dyYXBoKSA+IC0xKSB7XG4gICAgICB0aHJvdyBcIkdyYXBoIGFscmVhZHkgaW4gdGhpcyBncmFwaCBtZ3IhXCI7XG4gICAgfVxuXG4gICAgdGhpcy5ncmFwaHMucHVzaChuZXdHcmFwaCk7XG5cbiAgICBpZiAobmV3R3JhcGgucGFyZW50ICE9IG51bGwpIHtcbiAgICAgIHRocm93IFwiQWxyZWFkeSBoYXMgYSBwYXJlbnQhXCI7XG4gICAgfVxuICAgIGlmIChwYXJlbnROb2RlLmNoaWxkICE9IG51bGwpIHtcbiAgICAgIHRocm93ICBcIkFscmVhZHkgaGFzIGEgY2hpbGQhXCI7XG4gICAgfVxuXG4gICAgbmV3R3JhcGgucGFyZW50ID0gcGFyZW50Tm9kZTtcbiAgICBwYXJlbnROb2RlLmNoaWxkID0gbmV3R3JhcGg7XG5cbiAgICByZXR1cm4gbmV3R3JhcGg7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy9jaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBwYXJhbWV0ZXJzXG4gICAgdGFyZ2V0Tm9kZSA9IG5ld0VkZ2U7XG4gICAgc291cmNlTm9kZSA9IHBhcmVudE5vZGU7XG4gICAgbmV3RWRnZSA9IG5ld0dyYXBoO1xuICAgIHZhciBzb3VyY2VHcmFwaCA9IHNvdXJjZU5vZGUuZ2V0T3duZXIoKTtcbiAgICB2YXIgdGFyZ2V0R3JhcGggPSB0YXJnZXROb2RlLmdldE93bmVyKCk7XG5cbiAgICBpZiAoIShzb3VyY2VHcmFwaCAhPSBudWxsICYmIHNvdXJjZUdyYXBoLmdldEdyYXBoTWFuYWdlcigpID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBub3QgaW4gdGhpcyBncmFwaCBtZ3IhXCI7XG4gICAgfVxuICAgIGlmICghKHRhcmdldEdyYXBoICE9IG51bGwgJiYgdGFyZ2V0R3JhcGguZ2V0R3JhcGhNYW5hZ2VyKCkgPT0gdGhpcykpIHtcbiAgICAgIHRocm93IFwiVGFyZ2V0IG5vdCBpbiB0aGlzIGdyYXBoIG1nciFcIjtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlR3JhcGggPT0gdGFyZ2V0R3JhcGgpXG4gICAge1xuICAgICAgbmV3RWRnZS5pc0ludGVyR3JhcGggPSBmYWxzZTtcbiAgICAgIHJldHVybiBzb3VyY2VHcmFwaC5hZGQobmV3RWRnZSwgc291cmNlTm9kZSwgdGFyZ2V0Tm9kZSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICBuZXdFZGdlLmlzSW50ZXJHcmFwaCA9IHRydWU7XG5cbiAgICAgIC8vIHNldCBzb3VyY2UgYW5kIHRhcmdldFxuICAgICAgbmV3RWRnZS5zb3VyY2UgPSBzb3VyY2VOb2RlO1xuICAgICAgbmV3RWRnZS50YXJnZXQgPSB0YXJnZXROb2RlO1xuXG4gICAgICAvLyBhZGQgZWRnZSB0byBpbnRlci1ncmFwaCBlZGdlIGxpc3RcbiAgICAgIGlmICh0aGlzLmVkZ2VzLmluZGV4T2YobmV3RWRnZSkgPiAtMSkge1xuICAgICAgICB0aHJvdyBcIkVkZ2UgYWxyZWFkeSBpbiBpbnRlci1ncmFwaCBlZGdlIGxpc3QhXCI7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWRnZXMucHVzaChuZXdFZGdlKTtcblxuICAgICAgLy8gYWRkIGVkZ2UgdG8gc291cmNlIGFuZCB0YXJnZXQgaW5jaWRlbmN5IGxpc3RzXG4gICAgICBpZiAoIShuZXdFZGdlLnNvdXJjZSAhPSBudWxsICYmIG5ld0VkZ2UudGFyZ2V0ICE9IG51bGwpKSB7XG4gICAgICAgIHRocm93IFwiRWRnZSBzb3VyY2UgYW5kL29yIHRhcmdldCBpcyBudWxsIVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShuZXdFZGdlLnNvdXJjZS5lZGdlcy5pbmRleE9mKG5ld0VkZ2UpID09IC0xICYmIG5ld0VkZ2UudGFyZ2V0LmVkZ2VzLmluZGV4T2YobmV3RWRnZSkgPT0gLTEpKSB7XG4gICAgICAgIHRocm93IFwiRWRnZSBhbHJlYWR5IGluIHNvdXJjZSBhbmQvb3IgdGFyZ2V0IGluY2lkZW5jeSBsaXN0IVwiO1xuICAgICAgfVxuXG4gICAgICBuZXdFZGdlLnNvdXJjZS5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xuICAgICAgbmV3RWRnZS50YXJnZXQuZWRnZXMucHVzaChuZXdFZGdlKTtcblxuICAgICAgcmV0dXJuIG5ld0VkZ2U7XG4gICAgfVxuICB9XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAobE9iaikge1xuICBpZiAobE9iaiBpbnN0YW5jZW9mIExHcmFwaCkge1xuICAgIHZhciBncmFwaCA9IGxPYmo7XG4gICAgaWYgKGdyYXBoLmdldEdyYXBoTWFuYWdlcigpICE9IHRoaXMpIHtcbiAgICAgIHRocm93IFwiR3JhcGggbm90IGluIHRoaXMgZ3JhcGggbWdyXCI7XG4gICAgfVxuICAgIGlmICghKGdyYXBoID09IHRoaXMucm9vdEdyYXBoIHx8IChncmFwaC5wYXJlbnQgIT0gbnVsbCAmJiBncmFwaC5wYXJlbnQuZ3JhcGhNYW5hZ2VyID09IHRoaXMpKSkge1xuICAgICAgdGhyb3cgXCJJbnZhbGlkIHBhcmVudCBub2RlIVwiO1xuICAgIH1cblxuICAgIC8vIGZpcnN0IHRoZSBlZGdlcyAobWFrZSBhIGNvcHkgdG8gZG8gaXQgc2FmZWx5KVxuICAgIHZhciBlZGdlc1RvQmVSZW1vdmVkID0gW107XG5cbiAgICBlZGdlc1RvQmVSZW1vdmVkID0gZWRnZXNUb0JlUmVtb3ZlZC5jb25jYXQoZ3JhcGguZ2V0RWRnZXMoKSk7XG5cbiAgICB2YXIgZWRnZTtcbiAgICB2YXIgcyA9IGVkZ2VzVG9CZVJlbW92ZWQubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICAgIHtcbiAgICAgIGVkZ2UgPSBlZGdlc1RvQmVSZW1vdmVkW2ldO1xuICAgICAgZ3JhcGgucmVtb3ZlKGVkZ2UpO1xuICAgIH1cblxuICAgIC8vIHRoZW4gdGhlIG5vZGVzIChtYWtlIGEgY29weSB0byBkbyBpdCBzYWZlbHkpXG4gICAgdmFyIG5vZGVzVG9CZVJlbW92ZWQgPSBbXTtcblxuICAgIG5vZGVzVG9CZVJlbW92ZWQgPSBub2Rlc1RvQmVSZW1vdmVkLmNvbmNhdChncmFwaC5nZXROb2RlcygpKTtcblxuICAgIHZhciBub2RlO1xuICAgIHMgPSBub2Rlc1RvQmVSZW1vdmVkLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAgICB7XG4gICAgICBub2RlID0gbm9kZXNUb0JlUmVtb3ZlZFtpXTtcbiAgICAgIGdyYXBoLnJlbW92ZShub2RlKTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBncmFwaCBpcyB0aGUgcm9vdFxuICAgIGlmIChncmFwaCA9PSB0aGlzLnJvb3RHcmFwaClcbiAgICB7XG4gICAgICB0aGlzLnNldFJvb3RHcmFwaChudWxsKTtcbiAgICB9XG5cbiAgICAvLyBub3cgcmVtb3ZlIHRoZSBncmFwaCBpdHNlbGZcbiAgICB2YXIgaW5kZXggPSB0aGlzLmdyYXBocy5pbmRleE9mKGdyYXBoKTtcbiAgICB0aGlzLmdyYXBocy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgLy8gYWxzbyByZXNldCB0aGUgcGFyZW50IG9mIHRoZSBncmFwaFxuICAgIGdyYXBoLnBhcmVudCA9IG51bGw7XG4gIH1cbiAgZWxzZSBpZiAobE9iaiBpbnN0YW5jZW9mIExFZGdlKSB7XG4gICAgZWRnZSA9IGxPYmo7XG4gICAgaWYgKGVkZ2UgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJFZGdlIGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmICghZWRnZS5pc0ludGVyR3JhcGgpIHtcbiAgICAgIHRocm93IFwiTm90IGFuIGludGVyLWdyYXBoIGVkZ2UhXCI7XG4gICAgfVxuICAgIGlmICghKGVkZ2Uuc291cmNlICE9IG51bGwgJiYgZWRnZS50YXJnZXQgIT0gbnVsbCkpIHtcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgaXMgbnVsbCFcIjtcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgZWRnZSBmcm9tIHNvdXJjZSBhbmQgdGFyZ2V0IG5vZGVzJyBpbmNpZGVuY3kgbGlzdHNcblxuICAgIGlmICghKGVkZ2Uuc291cmNlLmVkZ2VzLmluZGV4T2YoZWRnZSkgIT0gLTEgJiYgZWRnZS50YXJnZXQuZWRnZXMuaW5kZXhPZihlZGdlKSAhPSAtMSkpIHtcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgZG9lc24ndCBrbm93IHRoaXMgZWRnZSFcIjtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBlZGdlLnNvdXJjZS5lZGdlcy5pbmRleE9mKGVkZ2UpO1xuICAgIGVkZ2Uuc291cmNlLmVkZ2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgaW5kZXggPSBlZGdlLnRhcmdldC5lZGdlcy5pbmRleE9mKGVkZ2UpO1xuICAgIGVkZ2UudGFyZ2V0LmVkZ2VzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAvLyByZW1vdmUgZWRnZSBmcm9tIG93bmVyIGdyYXBoIG1hbmFnZXIncyBpbnRlci1ncmFwaCBlZGdlIGxpc3RcblxuICAgIGlmICghKGVkZ2Uuc291cmNlLm93bmVyICE9IG51bGwgJiYgZWRnZS5zb3VyY2Uub3duZXIuZ2V0R3JhcGhNYW5hZ2VyKCkgIT0gbnVsbCkpIHtcbiAgICAgIHRocm93IFwiRWRnZSBvd25lciBncmFwaCBvciBvd25lciBncmFwaCBtYW5hZ2VyIGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmIChlZGdlLnNvdXJjZS5vd25lci5nZXRHcmFwaE1hbmFnZXIoKS5lZGdlcy5pbmRleE9mKGVkZ2UpID09IC0xKSB7XG4gICAgICB0aHJvdyBcIk5vdCBpbiBvd25lciBncmFwaCBtYW5hZ2VyJ3MgZWRnZSBsaXN0IVwiO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGVkZ2Uuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpLmVkZ2VzLmluZGV4T2YoZWRnZSk7XG4gICAgZWRnZS5zb3VyY2Uub3duZXIuZ2V0R3JhcGhNYW5hZ2VyKCkuZWRnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUudXBkYXRlQm91bmRzID0gZnVuY3Rpb24gKClcbntcbiAgdGhpcy5yb290R3JhcGgudXBkYXRlQm91bmRzKHRydWUpO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0R3JhcGhzID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuZ3JhcGhzO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0QWxsTm9kZXMgPSBmdW5jdGlvbiAoKVxue1xuICBpZiAodGhpcy5hbGxOb2RlcyA9PSBudWxsKVxuICB7XG4gICAgdmFyIG5vZGVMaXN0ID0gW107XG4gICAgdmFyIGdyYXBocyA9IHRoaXMuZ2V0R3JhcGhzKCk7XG4gICAgdmFyIHMgPSBncmFwaHMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICAgIHtcbiAgICAgIG5vZGVMaXN0ID0gbm9kZUxpc3QuY29uY2F0KGdyYXBoc1tpXS5nZXROb2RlcygpKTtcbiAgICB9XG4gICAgdGhpcy5hbGxOb2RlcyA9IG5vZGVMaXN0O1xuICB9XG4gIHJldHVybiB0aGlzLmFsbE5vZGVzO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUucmVzZXRBbGxOb2RlcyA9IGZ1bmN0aW9uICgpXG57XG4gIHRoaXMuYWxsTm9kZXMgPSBudWxsO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUucmVzZXRBbGxFZGdlcyA9IGZ1bmN0aW9uICgpXG57XG4gIHRoaXMuYWxsRWRnZXMgPSBudWxsO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUucmVzZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IGZ1bmN0aW9uICgpXG57XG4gIHRoaXMuYWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBudWxsO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0QWxsRWRnZXMgPSBmdW5jdGlvbiAoKVxue1xuICBpZiAodGhpcy5hbGxFZGdlcyA9PSBudWxsKVxuICB7XG4gICAgdmFyIGVkZ2VMaXN0ID0gW107XG4gICAgdmFyIGdyYXBocyA9IHRoaXMuZ2V0R3JhcGhzKCk7XG4gICAgdmFyIHMgPSBncmFwaHMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JhcGhzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIGVkZ2VMaXN0ID0gZWRnZUxpc3QuY29uY2F0KGdyYXBoc1tpXS5nZXRFZGdlcygpKTtcbiAgICB9XG5cbiAgICBlZGdlTGlzdCA9IGVkZ2VMaXN0LmNvbmNhdCh0aGlzLmVkZ2VzKTtcblxuICAgIHRoaXMuYWxsRWRnZXMgPSBlZGdlTGlzdDtcbiAgfVxuICByZXR1cm4gdGhpcy5hbGxFZGdlcztcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuYWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb247XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5zZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IGZ1bmN0aW9uIChub2RlTGlzdClcbntcbiAgaWYgKHRoaXMuYWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gIT0gbnVsbCkge1xuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICB9XG5cbiAgdGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IG5vZGVMaXN0O1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0Um9vdCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnJvb3RHcmFwaDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnNldFJvb3RHcmFwaCA9IGZ1bmN0aW9uIChncmFwaClcbntcbiAgaWYgKGdyYXBoLmdldEdyYXBoTWFuYWdlcigpICE9IHRoaXMpIHtcbiAgICB0aHJvdyBcIlJvb3Qgbm90IGluIHRoaXMgZ3JhcGggbWdyIVwiO1xuICB9XG5cbiAgdGhpcy5yb290R3JhcGggPSBncmFwaDtcbiAgLy8gcm9vdCBncmFwaCBtdXN0IGhhdmUgYSByb290IG5vZGUgYXNzb2NpYXRlZCB3aXRoIGl0IGZvciBjb252ZW5pZW5jZVxuICBpZiAoZ3JhcGgucGFyZW50ID09IG51bGwpXG4gIHtcbiAgICBncmFwaC5wYXJlbnQgPSB0aGlzLmxheW91dC5uZXdOb2RlKFwiUm9vdCBub2RlXCIpO1xuICB9XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRMYXlvdXQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sYXlvdXQ7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5pc09uZUFuY2VzdG9yT2ZPdGhlciA9IGZ1bmN0aW9uIChmaXJzdE5vZGUsIHNlY29uZE5vZGUpXG57XG4gIGlmICghKGZpcnN0Tm9kZSAhPSBudWxsICYmIHNlY29uZE5vZGUgIT0gbnVsbCkpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuXG4gIGlmIChmaXJzdE5vZGUgPT0gc2Vjb25kTm9kZSlcbiAge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8vIElzIHNlY29uZCBub2RlIGFuIGFuY2VzdG9yIG9mIHRoZSBmaXJzdCBvbmU/XG4gIHZhciBvd25lckdyYXBoID0gZmlyc3ROb2RlLmdldE93bmVyKCk7XG4gIHZhciBwYXJlbnROb2RlO1xuXG4gIGRvXG4gIHtcbiAgICBwYXJlbnROb2RlID0gb3duZXJHcmFwaC5nZXRQYXJlbnQoKTtcblxuICAgIGlmIChwYXJlbnROb2RlID09IG51bGwpXG4gICAge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gc2Vjb25kTm9kZSlcbiAgICB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBvd25lckdyYXBoID0gcGFyZW50Tm9kZS5nZXRPd25lcigpO1xuICAgIGlmIChvd25lckdyYXBoID09IG51bGwpXG4gICAge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9IHdoaWxlICh0cnVlKTtcbiAgLy8gSXMgZmlyc3Qgbm9kZSBhbiBhbmNlc3RvciBvZiB0aGUgc2Vjb25kIG9uZT9cbiAgb3duZXJHcmFwaCA9IHNlY29uZE5vZGUuZ2V0T3duZXIoKTtcblxuICBkb1xuICB7XG4gICAgcGFyZW50Tm9kZSA9IG93bmVyR3JhcGguZ2V0UGFyZW50KCk7XG5cbiAgICBpZiAocGFyZW50Tm9kZSA9PSBudWxsKVxuICAgIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChwYXJlbnROb2RlID09IGZpcnN0Tm9kZSlcbiAgICB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBvd25lckdyYXBoID0gcGFyZW50Tm9kZS5nZXRPd25lcigpO1xuICAgIGlmIChvd25lckdyYXBoID09IG51bGwpXG4gICAge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9IHdoaWxlICh0cnVlKTtcblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5jYWxjTG93ZXN0Q29tbW9uQW5jZXN0b3JzID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIGVkZ2U7XG4gIHZhciBzb3VyY2VOb2RlO1xuICB2YXIgdGFyZ2V0Tm9kZTtcbiAgdmFyIHNvdXJjZUFuY2VzdG9yR3JhcGg7XG4gIHZhciB0YXJnZXRBbmNlc3RvckdyYXBoO1xuXG4gIHZhciBlZGdlcyA9IHRoaXMuZ2V0QWxsRWRnZXMoKTtcbiAgdmFyIHMgPSBlZGdlcy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICB7XG4gICAgZWRnZSA9IGVkZ2VzW2ldO1xuXG4gICAgc291cmNlTm9kZSA9IGVkZ2Uuc291cmNlO1xuICAgIHRhcmdldE5vZGUgPSBlZGdlLnRhcmdldDtcbiAgICBlZGdlLmxjYSA9IG51bGw7XG4gICAgZWRnZS5zb3VyY2VJbkxjYSA9IHNvdXJjZU5vZGU7XG4gICAgZWRnZS50YXJnZXRJbkxjYSA9IHRhcmdldE5vZGU7XG5cbiAgICBpZiAoc291cmNlTm9kZSA9PSB0YXJnZXROb2RlKVxuICAgIHtcbiAgICAgIGVkZ2UubGNhID0gc291cmNlTm9kZS5nZXRPd25lcigpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgc291cmNlQW5jZXN0b3JHcmFwaCA9IHNvdXJjZU5vZGUuZ2V0T3duZXIoKTtcblxuICAgIHdoaWxlIChlZGdlLmxjYSA9PSBudWxsKVxuICAgIHtcbiAgICAgIGVkZ2UudGFyZ2V0SW5MY2EgPSB0YXJnZXROb2RlOyAgXG4gICAgICB0YXJnZXRBbmNlc3RvckdyYXBoID0gdGFyZ2V0Tm9kZS5nZXRPd25lcigpO1xuXG4gICAgICB3aGlsZSAoZWRnZS5sY2EgPT0gbnVsbClcbiAgICAgIHtcbiAgICAgICAgaWYgKHRhcmdldEFuY2VzdG9yR3JhcGggPT0gc291cmNlQW5jZXN0b3JHcmFwaClcbiAgICAgICAge1xuICAgICAgICAgIGVkZ2UubGNhID0gdGFyZ2V0QW5jZXN0b3JHcmFwaDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRBbmNlc3RvckdyYXBoID09IHRoaXMucm9vdEdyYXBoKVxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWRnZS5sY2EgIT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGVkZ2UudGFyZ2V0SW5MY2EgPSB0YXJnZXRBbmNlc3RvckdyYXBoLmdldFBhcmVudCgpO1xuICAgICAgICB0YXJnZXRBbmNlc3RvckdyYXBoID0gZWRnZS50YXJnZXRJbkxjYS5nZXRPd25lcigpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc291cmNlQW5jZXN0b3JHcmFwaCA9PSB0aGlzLnJvb3RHcmFwaClcbiAgICAgIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChlZGdlLmxjYSA9PSBudWxsKVxuICAgICAge1xuICAgICAgICBlZGdlLnNvdXJjZUluTGNhID0gc291cmNlQW5jZXN0b3JHcmFwaC5nZXRQYXJlbnQoKTtcbiAgICAgICAgc291cmNlQW5jZXN0b3JHcmFwaCA9IGVkZ2Uuc291cmNlSW5MY2EuZ2V0T3duZXIoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZWRnZS5sY2EgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gICAgfVxuICB9XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5jYWxjTG93ZXN0Q29tbW9uQW5jZXN0b3IgPSBmdW5jdGlvbiAoZmlyc3ROb2RlLCBzZWNvbmROb2RlKVxue1xuICBpZiAoZmlyc3ROb2RlID09IHNlY29uZE5vZGUpXG4gIHtcbiAgICByZXR1cm4gZmlyc3ROb2RlLmdldE93bmVyKCk7XG4gIH1cbiAgdmFyIGZpcnN0T3duZXJHcmFwaCA9IGZpcnN0Tm9kZS5nZXRPd25lcigpO1xuXG4gIGRvXG4gIHtcbiAgICBpZiAoZmlyc3RPd25lckdyYXBoID09IG51bGwpXG4gICAge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBzZWNvbmRPd25lckdyYXBoID0gc2Vjb25kTm9kZS5nZXRPd25lcigpO1xuXG4gICAgZG9cbiAgICB7XG4gICAgICBpZiAoc2Vjb25kT3duZXJHcmFwaCA9PSBudWxsKVxuICAgICAge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKHNlY29uZE93bmVyR3JhcGggPT0gZmlyc3RPd25lckdyYXBoKVxuICAgICAge1xuICAgICAgICByZXR1cm4gc2Vjb25kT3duZXJHcmFwaDtcbiAgICAgIH1cbiAgICAgIHNlY29uZE93bmVyR3JhcGggPSBzZWNvbmRPd25lckdyYXBoLmdldFBhcmVudCgpLmdldE93bmVyKCk7XG4gICAgfSB3aGlsZSAodHJ1ZSk7XG5cbiAgICBmaXJzdE93bmVyR3JhcGggPSBmaXJzdE93bmVyR3JhcGguZ2V0UGFyZW50KCkuZ2V0T3duZXIoKTtcbiAgfSB3aGlsZSAodHJ1ZSk7XG5cbiAgcmV0dXJuIGZpcnN0T3duZXJHcmFwaDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmNhbGNJbmNsdXNpb25UcmVlRGVwdGhzID0gZnVuY3Rpb24gKGdyYXBoLCBkZXB0aCkge1xuICBpZiAoZ3JhcGggPT0gbnVsbCAmJiBkZXB0aCA9PSBudWxsKSB7XG4gICAgZ3JhcGggPSB0aGlzLnJvb3RHcmFwaDtcbiAgICBkZXB0aCA9IDE7XG4gIH1cbiAgdmFyIG5vZGU7XG5cbiAgdmFyIG5vZGVzID0gZ3JhcGguZ2V0Tm9kZXMoKTtcbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICB7XG4gICAgbm9kZSA9IG5vZGVzW2ldO1xuICAgIG5vZGUuaW5jbHVzaW9uVHJlZURlcHRoID0gZGVwdGg7XG5cbiAgICBpZiAobm9kZS5jaGlsZCAhPSBudWxsKVxuICAgIHtcbiAgICAgIHRoaXMuY2FsY0luY2x1c2lvblRyZWVEZXB0aHMobm9kZS5jaGlsZCwgZGVwdGggKyAxKTtcbiAgICB9XG4gIH1cbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmluY2x1ZGVzSW52YWxpZEVkZ2UgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgZWRnZTtcblxuICB2YXIgcyA9IHRoaXMuZWRnZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAge1xuICAgIGVkZ2UgPSB0aGlzLmVkZ2VzW2ldO1xuXG4gICAgaWYgKHRoaXMuaXNPbmVBbmNlc3Rvck9mT3RoZXIoZWRnZS5zb3VyY2UsIGVkZ2UudGFyZ2V0KSlcbiAgICB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMR3JhcGhNYW5hZ2VyO1xuIiwiZnVuY3Rpb24gTEdyYXBoT2JqZWN0KHZHcmFwaE9iamVjdCkge1xuICB0aGlzLnZHcmFwaE9iamVjdCA9IHZHcmFwaE9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMR3JhcGhPYmplY3Q7XG4iLCJ2YXIgTEdyYXBoT2JqZWN0ID0gcmVxdWlyZSgnLi9MR3JhcGhPYmplY3QnKTtcbnZhciBJbnRlZ2VyID0gcmVxdWlyZSgnLi9JbnRlZ2VyJyk7XG52YXIgUmVjdGFuZ2xlRCA9IHJlcXVpcmUoJy4vUmVjdGFuZ2xlRCcpO1xudmFyIExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vTGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgUmFuZG9tU2VlZCA9IHJlcXVpcmUoJy4vUmFuZG9tU2VlZCcpO1xudmFyIFBvaW50RCA9IHJlcXVpcmUoJy4vUG9pbnREJyk7XG52YXIgSGFzaFNldCA9IHJlcXVpcmUoJy4vSGFzaFNldCcpO1xuXG5mdW5jdGlvbiBMTm9kZShnbSwgbG9jLCBzaXplLCB2Tm9kZSkge1xuICAvL0FsdGVybmF0aXZlIGNvbnN0cnVjdG9yIDEgOiBMTm9kZShMR3JhcGhNYW5hZ2VyIGdtLCBQb2ludCBsb2MsIERpbWVuc2lvbiBzaXplLCBPYmplY3Qgdk5vZGUpXG4gIGlmIChzaXplID09IG51bGwgJiYgdk5vZGUgPT0gbnVsbCkge1xuICAgIHZOb2RlID0gbG9jO1xuICB9XG5cbiAgTEdyYXBoT2JqZWN0LmNhbGwodGhpcywgdk5vZGUpO1xuXG4gIC8vQWx0ZXJuYXRpdmUgY29uc3RydWN0b3IgMiA6IExOb2RlKExheW91dCBsYXlvdXQsIE9iamVjdCB2Tm9kZSlcbiAgaWYgKGdtLmdyYXBoTWFuYWdlciAhPSBudWxsKVxuICAgIGdtID0gZ20uZ3JhcGhNYW5hZ2VyO1xuXG4gIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IEludGVnZXIuTUlOX1ZBTFVFO1xuICB0aGlzLmluY2x1c2lvblRyZWVEZXB0aCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB0aGlzLnZHcmFwaE9iamVjdCA9IHZOb2RlO1xuICB0aGlzLmVkZ2VzID0gW107XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyID0gZ207XG5cbiAgaWYgKHNpemUgIT0gbnVsbCAmJiBsb2MgIT0gbnVsbClcbiAgICB0aGlzLnJlY3QgPSBuZXcgUmVjdGFuZ2xlRChsb2MueCwgbG9jLnksIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcbiAgZWxzZVxuICAgIHRoaXMucmVjdCA9IG5ldyBSZWN0YW5nbGVEKCk7XG59XG5cbkxOb2RlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEdyYXBoT2JqZWN0LnByb3RvdHlwZSk7XG5mb3IgKHZhciBwcm9wIGluIExHcmFwaE9iamVjdCkge1xuICBMTm9kZVtwcm9wXSA9IExHcmFwaE9iamVjdFtwcm9wXTtcbn1cblxuTE5vZGUucHJvdG90eXBlLmdldEVkZ2VzID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuZWRnZXM7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2hpbGQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5jaGlsZDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRPd25lciA9IGZ1bmN0aW9uICgpXG57XG4vLyAgaWYgKHRoaXMub3duZXIgIT0gbnVsbCkge1xuLy8gICAgaWYgKCEodGhpcy5vd25lciA9PSBudWxsIHx8IHRoaXMub3duZXIuZ2V0Tm9kZXMoKS5pbmRleE9mKHRoaXMpID4gLTEpKSB7XG4vLyAgICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuLy8gICAgfVxuLy8gIH1cblxuICByZXR1cm4gdGhpcy5vd25lcjtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnJlY3Qud2lkdGg7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuc2V0V2lkdGggPSBmdW5jdGlvbiAod2lkdGgpXG57XG4gIHRoaXMucmVjdC53aWR0aCA9IHdpZHRoO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnJlY3QuaGVpZ2h0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uIChoZWlnaHQpXG57XG4gIHRoaXMucmVjdC5oZWlnaHQgPSBoZWlnaHQ7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2VudGVyWCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnJlY3QueCArIHRoaXMucmVjdC53aWR0aCAvIDI7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2VudGVyWSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnJlY3QueSArIHRoaXMucmVjdC5oZWlnaHQgLyAyO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldENlbnRlciA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiBuZXcgUG9pbnREKHRoaXMucmVjdC54ICsgdGhpcy5yZWN0LndpZHRoIC8gMixcbiAgICAgICAgICB0aGlzLnJlY3QueSArIHRoaXMucmVjdC5oZWlnaHQgLyAyKTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiBuZXcgUG9pbnREKHRoaXMucmVjdC54LCB0aGlzLnJlY3QueSk7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0UmVjdCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnJlY3Q7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0RGlhZ29uYWwgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMucmVjdC53aWR0aCAqIHRoaXMucmVjdC53aWR0aCArXG4gICAgICAgICAgdGhpcy5yZWN0LmhlaWdodCAqIHRoaXMucmVjdC5oZWlnaHQpO1xufTtcblxuTE5vZGUucHJvdG90eXBlLnNldFJlY3QgPSBmdW5jdGlvbiAodXBwZXJMZWZ0LCBkaW1lbnNpb24pXG57XG4gIHRoaXMucmVjdC54ID0gdXBwZXJMZWZ0Lng7XG4gIHRoaXMucmVjdC55ID0gdXBwZXJMZWZ0Lnk7XG4gIHRoaXMucmVjdC53aWR0aCA9IGRpbWVuc2lvbi53aWR0aDtcbiAgdGhpcy5yZWN0LmhlaWdodCA9IGRpbWVuc2lvbi5oZWlnaHQ7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuc2V0Q2VudGVyID0gZnVuY3Rpb24gKGN4LCBjeSlcbntcbiAgdGhpcy5yZWN0LnggPSBjeCAtIHRoaXMucmVjdC53aWR0aCAvIDI7XG4gIHRoaXMucmVjdC55ID0gY3kgLSB0aGlzLnJlY3QuaGVpZ2h0IC8gMjtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5zZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICh4LCB5KVxue1xuICB0aGlzLnJlY3QueCA9IHg7XG4gIHRoaXMucmVjdC55ID0geTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5tb3ZlQnkgPSBmdW5jdGlvbiAoZHgsIGR5KVxue1xuICB0aGlzLnJlY3QueCArPSBkeDtcbiAgdGhpcy5yZWN0LnkgKz0gZHk7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0RWRnZUxpc3RUb05vZGUgPSBmdW5jdGlvbiAodG8pXG57XG4gIHZhciBlZGdlTGlzdCA9IFtdO1xuICB2YXIgZWRnZTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHNlbGYuZWRnZXMuZm9yRWFjaChmdW5jdGlvbihlZGdlKSB7XG4gICAgXG4gICAgaWYgKGVkZ2UudGFyZ2V0ID09IHRvKVxuICAgIHtcbiAgICAgIGlmIChlZGdlLnNvdXJjZSAhPSBzZWxmKVxuICAgICAgICB0aHJvdyBcIkluY29ycmVjdCBlZGdlIHNvdXJjZSFcIjtcblxuICAgICAgZWRnZUxpc3QucHVzaChlZGdlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlTGlzdDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRFZGdlc0JldHdlZW4gPSBmdW5jdGlvbiAob3RoZXIpXG57XG4gIHZhciBlZGdlTGlzdCA9IFtdO1xuICB2YXIgZWRnZTtcbiAgXG4gIHZhciBzZWxmID0gdGhpcztcbiAgc2VsZi5lZGdlcy5mb3JFYWNoKGZ1bmN0aW9uKGVkZ2UpIHtcblxuICAgIGlmICghKGVkZ2Uuc291cmNlID09IHNlbGYgfHwgZWRnZS50YXJnZXQgPT0gc2VsZikpXG4gICAgICB0aHJvdyBcIkluY29ycmVjdCBlZGdlIHNvdXJjZSBhbmQvb3IgdGFyZ2V0XCI7XG5cbiAgICBpZiAoKGVkZ2UudGFyZ2V0ID09IG90aGVyKSB8fCAoZWRnZS5zb3VyY2UgPT0gb3RoZXIpKVxuICAgIHtcbiAgICAgIGVkZ2VMaXN0LnB1c2goZWRnZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWRnZUxpc3Q7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0TmVpZ2hib3JzTGlzdCA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBuZWlnaGJvcnMgPSBuZXcgSGFzaFNldCgpO1xuICB2YXIgZWRnZTtcbiAgXG4gIHZhciBzZWxmID0gdGhpcztcbiAgc2VsZi5lZGdlcy5mb3JFYWNoKGZ1bmN0aW9uKGVkZ2UpIHtcblxuICAgIGlmIChlZGdlLnNvdXJjZSA9PSBzZWxmKVxuICAgIHtcbiAgICAgIG5laWdoYm9ycy5hZGQoZWRnZS50YXJnZXQpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgaWYgKGVkZ2UudGFyZ2V0ICE9IHNlbGYpIHtcbiAgICAgICAgdGhyb3cgXCJJbmNvcnJlY3QgaW5jaWRlbmN5IVwiO1xuICAgICAgfVxuICAgIFxuICAgICAgbmVpZ2hib3JzLmFkZChlZGdlLnNvdXJjZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbmVpZ2hib3JzO1xufTtcblxuTE5vZGUucHJvdG90eXBlLndpdGhDaGlsZHJlbiA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciB3aXRoTmVpZ2hib3JzTGlzdCA9IG5ldyBTZXQoKTtcbiAgdmFyIGNoaWxkTm9kZTtcbiAgdmFyIGNoaWxkcmVuO1xuXG4gIHdpdGhOZWlnaGJvcnNMaXN0LmFkZCh0aGlzKTtcblxuICBpZiAodGhpcy5jaGlsZCAhPSBudWxsKVxuICB7XG4gICAgdmFyIG5vZGVzID0gdGhpcy5jaGlsZC5nZXROb2RlcygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgY2hpbGROb2RlID0gbm9kZXNbaV07XG4gICAgICBjaGlsZHJlbiA9IGNoaWxkTm9kZS53aXRoQ2hpbGRyZW4oKTtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xuICAgICAgICB3aXRoTmVpZ2hib3JzTGlzdC5hZGQobm9kZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gd2l0aE5laWdoYm9yc0xpc3Q7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Tm9PZkNoaWxkcmVuID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIG5vT2ZDaGlsZHJlbiA9IDA7XG4gIHZhciBjaGlsZE5vZGU7XG5cbiAgaWYodGhpcy5jaGlsZCA9PSBudWxsKXtcbiAgICBub09mQ2hpbGRyZW4gPSAxO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIHZhciBub2RlcyA9IHRoaXMuY2hpbGQuZ2V0Tm9kZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIGNoaWxkTm9kZSA9IG5vZGVzW2ldO1xuXG4gICAgICBub09mQ2hpbGRyZW4gKz0gY2hpbGROb2RlLmdldE5vT2ZDaGlsZHJlbigpO1xuICAgIH1cbiAgfVxuICBcbiAgaWYobm9PZkNoaWxkcmVuID09IDApe1xuICAgIG5vT2ZDaGlsZHJlbiA9IDE7XG4gIH1cbiAgcmV0dXJuIG5vT2ZDaGlsZHJlbjtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRFc3RpbWF0ZWRTaXplID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5lc3RpbWF0ZWRTaXplID09IEludGVnZXIuTUlOX1ZBTFVFKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cbiAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5jYWxjRXN0aW1hdGVkU2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY2hpbGQgPT0gbnVsbClcbiAge1xuICAgIHJldHVybiB0aGlzLmVzdGltYXRlZFNpemUgPSAodGhpcy5yZWN0LndpZHRoICsgdGhpcy5yZWN0LmhlaWdodCkgLyAyO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IHRoaXMuY2hpbGQuY2FsY0VzdGltYXRlZFNpemUoKTtcbiAgICB0aGlzLnJlY3Qud2lkdGggPSB0aGlzLmVzdGltYXRlZFNpemU7XG4gICAgdGhpcy5yZWN0LmhlaWdodCA9IHRoaXMuZXN0aW1hdGVkU2l6ZTtcblxuICAgIHJldHVybiB0aGlzLmVzdGltYXRlZFNpemU7XG4gIH1cbn07XG5cbkxOb2RlLnByb3RvdHlwZS5zY2F0dGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcmFuZG9tQ2VudGVyWDtcbiAgdmFyIHJhbmRvbUNlbnRlclk7XG5cbiAgdmFyIG1pblggPSAtTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlk7XG4gIHZhciBtYXhYID0gTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlk7XG4gIHJhbmRvbUNlbnRlclggPSBMYXlvdXRDb25zdGFudHMuV09STERfQ0VOVEVSX1ggK1xuICAgICAgICAgIChSYW5kb21TZWVkLm5leHREb3VibGUoKSAqIChtYXhYIC0gbWluWCkpICsgbWluWDtcblxuICB2YXIgbWluWSA9IC1MYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcbiAgdmFyIG1heFkgPSBMYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcbiAgcmFuZG9tQ2VudGVyWSA9IExheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWSArXG4gICAgICAgICAgKFJhbmRvbVNlZWQubmV4dERvdWJsZSgpICogKG1heFkgLSBtaW5ZKSkgKyBtaW5ZO1xuXG4gIHRoaXMucmVjdC54ID0gcmFuZG9tQ2VudGVyWDtcbiAgdGhpcy5yZWN0LnkgPSByYW5kb21DZW50ZXJZXG59O1xuXG5MTm9kZS5wcm90b3R5cGUudXBkYXRlQm91bmRzID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5nZXRDaGlsZCgpID09IG51bGwpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuICBpZiAodGhpcy5nZXRDaGlsZCgpLmdldE5vZGVzKCkubGVuZ3RoICE9IDApXG4gIHtcbiAgICAvLyB3cmFwIHRoZSBjaGlsZHJlbiBub2RlcyBieSByZS1hcnJhbmdpbmcgdGhlIGJvdW5kYXJpZXNcbiAgICB2YXIgY2hpbGRHcmFwaCA9IHRoaXMuZ2V0Q2hpbGQoKTtcbiAgICBjaGlsZEdyYXBoLnVwZGF0ZUJvdW5kcyh0cnVlKTtcblxuICAgIHRoaXMucmVjdC54ID0gY2hpbGRHcmFwaC5nZXRMZWZ0KCk7XG4gICAgdGhpcy5yZWN0LnkgPSBjaGlsZEdyYXBoLmdldFRvcCgpO1xuXG4gICAgdGhpcy5zZXRXaWR0aChjaGlsZEdyYXBoLmdldFJpZ2h0KCkgLSBjaGlsZEdyYXBoLmdldExlZnQoKSk7XG4gICAgdGhpcy5zZXRIZWlnaHQoY2hpbGRHcmFwaC5nZXRCb3R0b20oKSAtIGNoaWxkR3JhcGguZ2V0VG9wKCkpO1xuICAgIFxuICAgIC8vIFVwZGF0ZSBjb21wb3VuZCBib3VuZHMgY29uc2lkZXJpbmcgaXRzIGxhYmVsIHByb3BlcnRpZXMgICAgXG4gICAgaWYoTGF5b3V0Q29uc3RhbnRzLk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyl7XG4gICAgICAgIFxuICAgICAgdmFyIHdpZHRoID0gY2hpbGRHcmFwaC5nZXRSaWdodCgpIC0gY2hpbGRHcmFwaC5nZXRMZWZ0KCk7XG4gICAgICB2YXIgaGVpZ2h0ID0gY2hpbGRHcmFwaC5nZXRCb3R0b20oKSAtIGNoaWxkR3JhcGguZ2V0VG9wKCk7XG5cbiAgICAgIGlmKHRoaXMubGFiZWxXaWR0aCA+IHdpZHRoKXtcbiAgICAgICAgdGhpcy5yZWN0LnggLT0gKHRoaXMubGFiZWxXaWR0aCAtIHdpZHRoKSAvIDI7XG4gICAgICAgIHRoaXMuc2V0V2lkdGgodGhpcy5sYWJlbFdpZHRoKTtcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5sYWJlbEhlaWdodCA+IGhlaWdodCl7XG4gICAgICAgIGlmKHRoaXMubGFiZWxQb3MgPT0gXCJjZW50ZXJcIil7XG4gICAgICAgICAgdGhpcy5yZWN0LnkgLT0gKHRoaXMubGFiZWxIZWlnaHQgLSBoZWlnaHQpIC8gMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMubGFiZWxQb3MgPT0gXCJ0b3BcIil7XG4gICAgICAgICAgdGhpcy5yZWN0LnkgLT0gKHRoaXMubGFiZWxIZWlnaHQgLSBoZWlnaHQpOyBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEhlaWdodCh0aGlzLmxhYmVsSGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRJbmNsdXNpb25UcmVlRGVwdGggPSBmdW5jdGlvbiAoKVxue1xuICBpZiAodGhpcy5pbmNsdXNpb25UcmVlRGVwdGggPT0gSW50ZWdlci5NQVhfVkFMVUUpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuICByZXR1cm4gdGhpcy5pbmNsdXNpb25UcmVlRGVwdGg7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKHRyYW5zKVxue1xuICB2YXIgbGVmdCA9IHRoaXMucmVjdC54O1xuXG4gIGlmIChsZWZ0ID4gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZKVxuICB7XG4gICAgbGVmdCA9IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWTtcbiAgfVxuICBlbHNlIGlmIChsZWZ0IDwgLUxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSlcbiAge1xuICAgIGxlZnQgPSAtTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZO1xuICB9XG5cbiAgdmFyIHRvcCA9IHRoaXMucmVjdC55O1xuXG4gIGlmICh0b3AgPiBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkpXG4gIHtcbiAgICB0b3AgPSBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlk7XG4gIH1cbiAgZWxzZSBpZiAodG9wIDwgLUxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSlcbiAge1xuICAgIHRvcCA9IC1MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlk7XG4gIH1cblxuICB2YXIgbGVmdFRvcCA9IG5ldyBQb2ludEQobGVmdCwgdG9wKTtcbiAgdmFyIHZMZWZ0VG9wID0gdHJhbnMuaW52ZXJzZVRyYW5zZm9ybVBvaW50KGxlZnRUb3ApO1xuXG4gIHRoaXMuc2V0TG9jYXRpb24odkxlZnRUb3AueCwgdkxlZnRUb3AueSk7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnJlY3QueDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRSaWdodCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnJlY3QueCArIHRoaXMucmVjdC53aWR0aDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRUb3AgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yZWN0Lnk7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Qm90dG9tID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdC55ICsgdGhpcy5yZWN0LmhlaWdodDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRQYXJlbnQgPSBmdW5jdGlvbiAoKVxue1xuICBpZiAodGhpcy5vd25lciA9PSBudWxsKVxuICB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gdGhpcy5vd25lci5nZXRQYXJlbnQoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTE5vZGU7XG4iLCJ2YXIgTGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9MYXlvdXRDb25zdGFudHMnKTtcbnZhciBIYXNoTWFwID0gcmVxdWlyZSgnLi9IYXNoTWFwJyk7XG52YXIgTEdyYXBoTWFuYWdlciA9IHJlcXVpcmUoJy4vTEdyYXBoTWFuYWdlcicpO1xudmFyIExOb2RlID0gcmVxdWlyZSgnLi9MTm9kZScpO1xudmFyIExFZGdlID0gcmVxdWlyZSgnLi9MRWRnZScpO1xudmFyIExHcmFwaCA9IHJlcXVpcmUoJy4vTEdyYXBoJyk7XG52YXIgUG9pbnREID0gcmVxdWlyZSgnLi9Qb2ludEQnKTtcbnZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL1RyYW5zZm9ybScpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCcuL0VtaXR0ZXInKTtcbnZhciBIYXNoU2V0ID0gcmVxdWlyZSgnLi9IYXNoU2V0Jyk7XG5cbmZ1bmN0aW9uIExheW91dChpc1JlbW90ZVVzZSkge1xuICBFbWl0dGVyLmNhbGwoIHRoaXMgKTtcblxuICAvL0xheW91dCBRdWFsaXR5OiAwOnByb29mLCAxOmRlZmF1bHQsIDI6ZHJhZnRcbiAgdGhpcy5sYXlvdXRRdWFsaXR5ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUVVBTElUWTtcbiAgLy9XaGV0aGVyIGxheW91dCBzaG91bGQgY3JlYXRlIGJlbmRwb2ludHMgYXMgbmVlZGVkIG9yIG5vdFxuICB0aGlzLmNyZWF0ZUJlbmRzQXNOZWVkZWQgPVxuICAgICAgICAgIExheW91dENvbnN0YW50cy5ERUZBVUxUX0NSRUFURV9CRU5EU19BU19ORUVERUQ7XG4gIC8vV2hldGhlciBsYXlvdXQgc2hvdWxkIGJlIGluY3JlbWVudGFsIG9yIG5vdFxuICB0aGlzLmluY3JlbWVudGFsID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUw7XG4gIC8vV2hldGhlciB3ZSBhbmltYXRlIGZyb20gYmVmb3JlIHRvIGFmdGVyIGxheW91dCBub2RlIHBvc2l0aW9uc1xuICB0aGlzLmFuaW1hdGlvbk9uTGF5b3V0ID1cbiAgICAgICAgICBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fT05fTEFZT1VUO1xuICAvL1doZXRoZXIgd2UgYW5pbWF0ZSB0aGUgbGF5b3V0IHByb2Nlc3Mgb3Igbm90XG4gIHRoaXMuYW5pbWF0aW9uRHVyaW5nTGF5b3V0ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX0RVUklOR19MQVlPVVQ7XG4gIC8vTnVtYmVyIGl0ZXJhdGlvbnMgdGhhdCBzaG91bGQgYmUgZG9uZSBiZXR3ZWVuIHR3byBzdWNjZXNzaXZlIGFuaW1hdGlvbnNcbiAgdGhpcy5hbmltYXRpb25QZXJpb2QgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fUEVSSU9EO1xuICAvKipcbiAgICogV2hldGhlciBvciBub3QgbGVhZiBub2RlcyAobm9uLWNvbXBvdW5kIG5vZGVzKSBhcmUgb2YgdW5pZm9ybSBzaXplcy4gV2hlblxuICAgKiB0aGV5IGFyZSwgYm90aCBzcHJpbmcgYW5kIHJlcHVsc2lvbiBmb3JjZXMgYmV0d2VlbiB0d28gbGVhZiBub2RlcyBjYW4gYmVcbiAgICogY2FsY3VsYXRlZCB3aXRob3V0IHRoZSBleHBlbnNpdmUgY2xpcHBpbmcgcG9pbnQgY2FsY3VsYXRpb25zLCByZXN1bHRpbmdcbiAgICogaW4gbWFqb3Igc3BlZWQtdXAuXG4gICAqL1xuICB0aGlzLnVuaWZvcm1MZWFmTm9kZVNpemVzID1cbiAgICAgICAgICBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VTklGT1JNX0xFQUZfTk9ERV9TSVpFUztcbiAgLyoqXG4gICAqIFRoaXMgaXMgdXNlZCBmb3IgY3JlYXRpb24gb2YgYmVuZHBvaW50cyBieSB1c2luZyBkdW1teSBub2RlcyBhbmQgZWRnZXMuXG4gICAqIE1hcHMgYW4gTEVkZ2UgdG8gaXRzIGR1bW15IGJlbmRwb2ludCBwYXRoLlxuICAgKi9cbiAgdGhpcy5lZGdlVG9EdW1teU5vZGVzID0gbmV3IEhhc2hNYXAoKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBuZXcgTEdyYXBoTWFuYWdlcih0aGlzKTtcbiAgdGhpcy5pc0xheW91dEZpbmlzaGVkID0gZmFsc2U7XG4gIHRoaXMuaXNTdWJMYXlvdXQgPSBmYWxzZTtcbiAgdGhpcy5pc1JlbW90ZVVzZSA9IGZhbHNlO1xuXG4gIGlmIChpc1JlbW90ZVVzZSAhPSBudWxsKSB7XG4gICAgdGhpcy5pc1JlbW90ZVVzZSA9IGlzUmVtb3RlVXNlO1xuICB9XG59XG5cbkxheW91dC5SQU5ET01fU0VFRCA9IDE7XG5cbkxheW91dC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFbWl0dGVyLnByb3RvdHlwZSApO1xuXG5MYXlvdXQucHJvdG90eXBlLmdldEdyYXBoTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5nZXRBbGxOb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzKCk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLmdldEFsbEVkZ2VzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsRWRnZXMoKTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUuZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbigpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5uZXdHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBnbSA9IG5ldyBMR3JhcGhNYW5hZ2VyKHRoaXMpO1xuICB0aGlzLmdyYXBoTWFuYWdlciA9IGdtO1xuICByZXR1cm4gZ207XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLm5ld0dyYXBoID0gZnVuY3Rpb24gKHZHcmFwaClcbntcbiAgcmV0dXJuIG5ldyBMR3JhcGgobnVsbCwgdGhpcy5ncmFwaE1hbmFnZXIsIHZHcmFwaCk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLm5ld05vZGUgPSBmdW5jdGlvbiAodk5vZGUpXG57XG4gIHJldHVybiBuZXcgTE5vZGUodGhpcy5ncmFwaE1hbmFnZXIsIHZOb2RlKTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUubmV3RWRnZSA9IGZ1bmN0aW9uICh2RWRnZSlcbntcbiAgcmV0dXJuIG5ldyBMRWRnZShudWxsLCBudWxsLCB2RWRnZSk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLmNoZWNrTGF5b3V0U3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gKHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSA9PSBudWxsKVxuICAgICAgICAgIHx8IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXROb2RlcygpLmxlbmd0aCA9PSAwXG4gICAgICAgICAgfHwgdGhpcy5ncmFwaE1hbmFnZXIuaW5jbHVkZXNJbnZhbGlkRWRnZSgpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5ydW5MYXlvdXQgPSBmdW5jdGlvbiAoKVxue1xuICB0aGlzLmlzTGF5b3V0RmluaXNoZWQgPSBmYWxzZTtcbiAgXG4gIGlmICh0aGlzLnRpbGluZ1ByZUxheW91dCkge1xuICAgIHRoaXMudGlsaW5nUHJlTGF5b3V0KCk7XG4gIH1cblxuICB0aGlzLmluaXRQYXJhbWV0ZXJzKCk7XG4gIHZhciBpc0xheW91dFN1Y2Nlc3NmdWxsO1xuXG4gIGlmICh0aGlzLmNoZWNrTGF5b3V0U3VjY2VzcygpKVxuICB7XG4gICAgaXNMYXlvdXRTdWNjZXNzZnVsbCA9IGZhbHNlO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIGlzTGF5b3V0U3VjY2Vzc2Z1bGwgPSB0aGlzLmxheW91dCgpO1xuICB9XG4gIFxuICBpZiAoTGF5b3V0Q29uc3RhbnRzLkFOSU1BVEUgPT09ICdkdXJpbmcnKSB7XG4gICAgLy8gSWYgdGhpcyBpcyBhICdkdXJpbmcnIGxheW91dCBhbmltYXRpb24uIExheW91dCBpcyBub3QgZmluaXNoZWQgeWV0LiBcbiAgICAvLyBXZSBuZWVkIHRvIHBlcmZvcm0gdGhlc2UgaW4gaW5kZXguanMgd2hlbiBsYXlvdXQgaXMgcmVhbGx5IGZpbmlzaGVkLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgaWYgKGlzTGF5b3V0U3VjY2Vzc2Z1bGwpXG4gIHtcbiAgICBpZiAoIXRoaXMuaXNTdWJMYXlvdXQpXG4gICAge1xuICAgICAgdGhpcy5kb1Bvc3RMYXlvdXQoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGhpcy50aWxpbmdQb3N0TGF5b3V0KSB7XG4gICAgdGhpcy50aWxpbmdQb3N0TGF5b3V0KCk7XG4gIH1cblxuICB0aGlzLmlzTGF5b3V0RmluaXNoZWQgPSB0cnVlO1xuXG4gIHJldHVybiBpc0xheW91dFN1Y2Nlc3NmdWxsO1xufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBwZXJmb3JtcyB0aGUgb3BlcmF0aW9ucyByZXF1aXJlZCBhZnRlciBsYXlvdXQuXG4gKi9cbkxheW91dC5wcm90b3R5cGUuZG9Qb3N0TGF5b3V0ID0gZnVuY3Rpb24gKClcbntcbiAgLy9hc3NlcnQgIWlzU3ViTGF5b3V0IDogXCJTaG91bGQgbm90IGJlIGNhbGxlZCBvbiBzdWItbGF5b3V0IVwiO1xuICAvLyBQcm9wYWdhdGUgZ2VvbWV0cmljIGNoYW5nZXMgdG8gdi1sZXZlbCBvYmplY3RzXG4gIGlmKCF0aGlzLmluY3JlbWVudGFsKXtcbiAgICB0aGlzLnRyYW5zZm9ybSgpO1xuICB9XG4gIHRoaXMudXBkYXRlKCk7XG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHVwZGF0ZXMgdGhlIGdlb21ldHJ5IG9mIHRoZSB0YXJnZXQgZ3JhcGggYWNjb3JkaW5nIHRvXG4gKiBjYWxjdWxhdGVkIGxheW91dC5cbiAqL1xuTGF5b3V0LnByb3RvdHlwZS51cGRhdGUyID0gZnVuY3Rpb24gKCkge1xuICAvLyB1cGRhdGUgYmVuZCBwb2ludHNcbiAgaWYgKHRoaXMuY3JlYXRlQmVuZHNBc05lZWRlZClcbiAge1xuICAgIHRoaXMuY3JlYXRlQmVuZHBvaW50c0Zyb21EdW1teU5vZGVzKCk7XG5cbiAgICAvLyByZXNldCBhbGwgZWRnZXMsIHNpbmNlIHRoZSB0b3BvbG9neSBoYXMgY2hhbmdlZFxuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsRWRnZXMoKTtcbiAgfVxuXG4gIC8vIHBlcmZvcm0gZWRnZSwgbm9kZSBhbmQgcm9vdCB1cGRhdGVzIGlmIGxheW91dCBpcyBub3QgY2FsbGVkXG4gIC8vIHJlbW90ZWx5XG4gIGlmICghdGhpcy5pc1JlbW90ZVVzZSlcbiAge1xuICAgIC8vIHVwZGF0ZSBhbGwgZWRnZXNcbiAgICB2YXIgZWRnZTtcbiAgICB2YXIgYWxsRWRnZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxFZGdlcygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsRWRnZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgZWRnZSA9IGFsbEVkZ2VzW2ldO1xuLy8gICAgICB0aGlzLnVwZGF0ZShlZGdlKTtcbiAgICB9XG5cbiAgICAvLyByZWN1cnNpdmVseSB1cGRhdGUgbm9kZXNcbiAgICB2YXIgbm9kZTtcbiAgICB2YXIgbm9kZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0Tm9kZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIG5vZGUgPSBub2Rlc1tpXTtcbi8vICAgICAgdGhpcy51cGRhdGUobm9kZSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIHJvb3QgZ3JhcGhcbiAgICB0aGlzLnVwZGF0ZSh0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkpO1xuICB9XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgdGhpcy51cGRhdGUyKCk7XG4gIH1cbiAgZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgTE5vZGUpIHtcbiAgICB2YXIgbm9kZSA9IG9iajtcbiAgICBpZiAobm9kZS5nZXRDaGlsZCgpICE9IG51bGwpXG4gICAge1xuICAgICAgLy8gc2luY2Ugbm9kZSBpcyBjb21wb3VuZCwgcmVjdXJzaXZlbHkgdXBkYXRlIGNoaWxkIG5vZGVzXG4gICAgICB2YXIgbm9kZXMgPSBub2RlLmdldENoaWxkKCkuZ2V0Tm9kZXMoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXG4gICAgICB7XG4gICAgICAgIHVwZGF0ZShub2Rlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIGwtbGV2ZWwgbm9kZSBpcyBhc3NvY2lhdGVkIHdpdGggYSB2LWxldmVsIGdyYXBoIG9iamVjdCxcbiAgICAvLyB0aGVuIGl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgdi1sZXZlbCBub2RlIGltcGxlbWVudHMgdGhlXG4gICAgLy8gaW50ZXJmYWNlIFVwZGF0YWJsZS5cbiAgICBpZiAobm9kZS52R3JhcGhPYmplY3QgIT0gbnVsbClcbiAgICB7XG4gICAgICAvLyBjYXN0IHRvIFVwZGF0YWJsZSB3aXRob3V0IGFueSB0eXBlIGNoZWNrXG4gICAgICB2YXIgdk5vZGUgPSBub2RlLnZHcmFwaE9iamVjdDtcblxuICAgICAgLy8gY2FsbCB0aGUgdXBkYXRlIG1ldGhvZCBvZiB0aGUgaW50ZXJmYWNlXG4gICAgICB2Tm9kZS51cGRhdGUobm9kZSk7XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIExFZGdlKSB7XG4gICAgdmFyIGVkZ2UgPSBvYmo7XG4gICAgLy8gaWYgdGhlIGwtbGV2ZWwgZWRnZSBpcyBhc3NvY2lhdGVkIHdpdGggYSB2LWxldmVsIGdyYXBoIG9iamVjdCxcbiAgICAvLyB0aGVuIGl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgdi1sZXZlbCBlZGdlIGltcGxlbWVudHMgdGhlXG4gICAgLy8gaW50ZXJmYWNlIFVwZGF0YWJsZS5cblxuICAgIGlmIChlZGdlLnZHcmFwaE9iamVjdCAhPSBudWxsKVxuICAgIHtcbiAgICAgIC8vIGNhc3QgdG8gVXBkYXRhYmxlIHdpdGhvdXQgYW55IHR5cGUgY2hlY2tcbiAgICAgIHZhciB2RWRnZSA9IGVkZ2UudkdyYXBoT2JqZWN0O1xuXG4gICAgICAvLyBjYWxsIHRoZSB1cGRhdGUgbWV0aG9kIG9mIHRoZSBpbnRlcmZhY2VcbiAgICAgIHZFZGdlLnVwZGF0ZShlZGdlKTtcbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgTEdyYXBoKSB7XG4gICAgdmFyIGdyYXBoID0gb2JqO1xuICAgIC8vIGlmIHRoZSBsLWxldmVsIGdyYXBoIGlzIGFzc29jaWF0ZWQgd2l0aCBhIHYtbGV2ZWwgZ3JhcGggb2JqZWN0LFxuICAgIC8vIHRoZW4gaXQgaXMgYXNzdW1lZCB0aGF0IHRoZSB2LWxldmVsIG9iamVjdCBpbXBsZW1lbnRzIHRoZVxuICAgIC8vIGludGVyZmFjZSBVcGRhdGFibGUuXG5cbiAgICBpZiAoZ3JhcGgudkdyYXBoT2JqZWN0ICE9IG51bGwpXG4gICAge1xuICAgICAgLy8gY2FzdCB0byBVcGRhdGFibGUgd2l0aG91dCBhbnkgdHlwZSBjaGVja1xuICAgICAgdmFyIHZHcmFwaCA9IGdyYXBoLnZHcmFwaE9iamVjdDtcblxuICAgICAgLy8gY2FsbCB0aGUgdXBkYXRlIG1ldGhvZCBvZiB0aGUgaW50ZXJmYWNlXG4gICAgICB2R3JhcGgudXBkYXRlKGdyYXBoKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBzZXQgYWxsIGxheW91dCBwYXJhbWV0ZXJzIHRvIGRlZmF1bHQgdmFsdWVzXG4gKiBkZXRlcm1pbmVkIGF0IGNvbXBpbGUgdGltZS5cbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5pbml0UGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmlzU3ViTGF5b3V0KVxuICB7XG4gICAgdGhpcy5sYXlvdXRRdWFsaXR5ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUVVBTElUWTtcbiAgICB0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VUO1xuICAgIHRoaXMuYW5pbWF0aW9uUGVyaW9kID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRDtcbiAgICB0aGlzLmFuaW1hdGlvbk9uTGF5b3V0ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVDtcbiAgICB0aGlzLmluY3JlbWVudGFsID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUw7XG4gICAgdGhpcy5jcmVhdGVCZW5kc0FzTmVlZGVkID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ1JFQVRFX0JFTkRTX0FTX05FRURFRDtcbiAgICB0aGlzLnVuaWZvcm1MZWFmTm9kZVNpemVzID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVU5JRk9STV9MRUFGX05PREVfU0laRVM7XG4gIH1cblxuICBpZiAodGhpcy5hbmltYXRpb25EdXJpbmdMYXlvdXQpXG4gIHtcbiAgICB0aGlzLmFuaW1hdGlvbk9uTGF5b3V0ID0gZmFsc2U7XG4gIH1cbn07XG5cbkxheW91dC5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKG5ld0xlZnRUb3ApIHtcbiAgaWYgKG5ld0xlZnRUb3AgPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy50cmFuc2Zvcm0obmV3IFBvaW50RCgwLCAwKSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gY3JlYXRlIGEgdHJhbnNmb3JtYXRpb24gb2JqZWN0IChmcm9tIEVjbGlwc2UgdG8gbGF5b3V0KS4gV2hlbiBhblxuICAgIC8vIGludmVyc2UgdHJhbnNmb3JtIGlzIGFwcGxpZWQsIHdlIGdldCB1cHBlci1sZWZ0IGNvb3JkaW5hdGUgb2YgdGhlXG4gICAgLy8gZHJhd2luZyBvciB0aGUgcm9vdCBncmFwaCBhdCBnaXZlbiBpbnB1dCBjb29yZGluYXRlIChzb21lIG1hcmdpbnNcbiAgICAvLyBhbHJlYWR5IGluY2x1ZGVkIGluIGNhbGN1bGF0aW9uIG9mIGxlZnQtdG9wKS5cblxuICAgIHZhciB0cmFucyA9IG5ldyBUcmFuc2Zvcm0oKTtcbiAgICB2YXIgbGVmdFRvcCA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS51cGRhdGVMZWZ0VG9wKCk7XG5cbiAgICBpZiAobGVmdFRvcCAhPSBudWxsKVxuICAgIHtcbiAgICAgIHRyYW5zLnNldFdvcmxkT3JnWChuZXdMZWZ0VG9wLngpO1xuICAgICAgdHJhbnMuc2V0V29ybGRPcmdZKG5ld0xlZnRUb3AueSk7XG5cbiAgICAgIHRyYW5zLnNldERldmljZU9yZ1gobGVmdFRvcC54KTtcbiAgICAgIHRyYW5zLnNldERldmljZU9yZ1kobGVmdFRvcC55KTtcblxuICAgICAgdmFyIG5vZGVzID0gdGhpcy5nZXRBbGxOb2RlcygpO1xuICAgICAgdmFyIG5vZGU7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXG4gICAgICB7XG4gICAgICAgIG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgbm9kZS50cmFuc2Zvcm0odHJhbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuTGF5b3V0LnByb3RvdHlwZS5wb3NpdGlvbk5vZGVzUmFuZG9tbHkgPSBmdW5jdGlvbiAoZ3JhcGgpIHtcblxuICBpZiAoZ3JhcGggPT0gdW5kZWZpbmVkKSB7XG4gICAgLy9hc3NlcnQgIXRoaXMuaW5jcmVtZW50YWw7XG4gICAgdGhpcy5wb3NpdGlvbk5vZGVzUmFuZG9tbHkodGhpcy5nZXRHcmFwaE1hbmFnZXIoKS5nZXRSb290KCkpO1xuICAgIHRoaXMuZ2V0R3JhcGhNYW5hZ2VyKCkuZ2V0Um9vdCgpLnVwZGF0ZUJvdW5kcyh0cnVlKTtcbiAgfVxuICBlbHNlIHtcbiAgICB2YXIgbE5vZGU7XG4gICAgdmFyIGNoaWxkR3JhcGg7XG5cbiAgICB2YXIgbm9kZXMgPSBncmFwaC5nZXROb2RlcygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgbE5vZGUgPSBub2Rlc1tpXTtcbiAgICAgIGNoaWxkR3JhcGggPSBsTm9kZS5nZXRDaGlsZCgpO1xuXG4gICAgICBpZiAoY2hpbGRHcmFwaCA9PSBudWxsKVxuICAgICAge1xuICAgICAgICBsTm9kZS5zY2F0dGVyKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChjaGlsZEdyYXBoLmdldE5vZGVzKCkubGVuZ3RoID09IDApXG4gICAgICB7XG4gICAgICAgIGxOb2RlLnNjYXR0ZXIoKTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbk5vZGVzUmFuZG9tbHkoY2hpbGRHcmFwaCk7XG4gICAgICAgIGxOb2RlLnVwZGF0ZUJvdW5kcygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbGlzdCBvZiB0cmVlcyB3aGVyZSBlYWNoIHRyZWUgaXMgcmVwcmVzZW50ZWQgYXMgYVxuICogbGlzdCBvZiBsLW5vZGVzLiBUaGUgbWV0aG9kIHJldHVybnMgYSBsaXN0IG9mIHNpemUgMCB3aGVuOlxuICogLSBUaGUgZ3JhcGggaXMgbm90IGZsYXQgb3JcbiAqIC0gT25lIG9mIHRoZSBjb21wb25lbnQocykgb2YgdGhlIGdyYXBoIGlzIG5vdCBhIHRyZWUuXG4gKi9cbkxheW91dC5wcm90b3R5cGUuZ2V0RmxhdEZvcmVzdCA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBmbGF0Rm9yZXN0ID0gW107XG4gIHZhciBpc0ZvcmVzdCA9IHRydWU7XG5cbiAgLy8gUXVpY2sgcmVmZXJlbmNlIGZvciBhbGwgbm9kZXMgaW4gdGhlIGdyYXBoIG1hbmFnZXIgYXNzb2NpYXRlZCB3aXRoXG4gIC8vIHRoaXMgbGF5b3V0LiBUaGUgbGlzdCBzaG91bGQgbm90IGJlIGNoYW5nZWQuXG4gIHZhciBhbGxOb2RlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXROb2RlcygpO1xuXG4gIC8vIEZpcnN0IGJlIHN1cmUgdGhhdCB0aGUgZ3JhcGggaXMgZmxhdFxuICB2YXIgaXNGbGF0ID0gdHJ1ZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbE5vZGVzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgaWYgKGFsbE5vZGVzW2ldLmdldENoaWxkKCkgIT0gbnVsbClcbiAgICB7XG4gICAgICBpc0ZsYXQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm4gZW1wdHkgZm9yZXN0IGlmIHRoZSBncmFwaCBpcyBub3QgZmxhdC5cbiAgaWYgKCFpc0ZsYXQpXG4gIHtcbiAgICByZXR1cm4gZmxhdEZvcmVzdDtcbiAgfVxuXG4gIC8vIFJ1biBCRlMgZm9yIGVhY2ggY29tcG9uZW50IG9mIHRoZSBncmFwaC5cblxuICB2YXIgdmlzaXRlZCA9IG5ldyBIYXNoU2V0KCk7XG4gIHZhciB0b0JlVmlzaXRlZCA9IFtdO1xuICB2YXIgcGFyZW50cyA9IG5ldyBIYXNoTWFwKCk7XG4gIHZhciB1blByb2Nlc3NlZE5vZGVzID0gW107XG5cbiAgdW5Qcm9jZXNzZWROb2RlcyA9IHVuUHJvY2Vzc2VkTm9kZXMuY29uY2F0KGFsbE5vZGVzKTtcblxuICAvLyBFYWNoIGl0ZXJhdGlvbiBvZiB0aGlzIGxvb3AgZmluZHMgYSBjb21wb25lbnQgb2YgdGhlIGdyYXBoIGFuZFxuICAvLyBkZWNpZGVzIHdoZXRoZXIgaXQgaXMgYSB0cmVlIG9yIG5vdC4gSWYgaXQgaXMgYSB0cmVlLCBhZGRzIGl0IHRvIHRoZVxuICAvLyBmb3Jlc3QgYW5kIGNvbnRpbnVlZCB3aXRoIHRoZSBuZXh0IGNvbXBvbmVudC5cblxuICB3aGlsZSAodW5Qcm9jZXNzZWROb2Rlcy5sZW5ndGggPiAwICYmIGlzRm9yZXN0KVxuICB7XG4gICAgdG9CZVZpc2l0ZWQucHVzaCh1blByb2Nlc3NlZE5vZGVzWzBdKTtcblxuICAgIC8vIFN0YXJ0IHRoZSBCRlMuIEVhY2ggaXRlcmF0aW9uIG9mIHRoaXMgbG9vcCB2aXNpdHMgYSBub2RlIGluIGFcbiAgICAvLyBCRlMgbWFubmVyLlxuICAgIHdoaWxlICh0b0JlVmlzaXRlZC5sZW5ndGggPiAwICYmIGlzRm9yZXN0KVxuICAgIHtcbiAgICAgIC8vcG9vbCBvcGVyYXRpb25cbiAgICAgIHZhciBjdXJyZW50Tm9kZSA9IHRvQmVWaXNpdGVkWzBdO1xuICAgICAgdG9CZVZpc2l0ZWQuc3BsaWNlKDAsIDEpO1xuICAgICAgdmlzaXRlZC5hZGQoY3VycmVudE5vZGUpO1xuXG4gICAgICAvLyBUcmF2ZXJzZSBhbGwgbmVpZ2hib3JzIG9mIHRoaXMgbm9kZVxuICAgICAgdmFyIG5laWdoYm9yRWRnZXMgPSBjdXJyZW50Tm9kZS5nZXRFZGdlcygpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5laWdoYm9yRWRnZXMubGVuZ3RoOyBpKyspXG4gICAgICB7XG4gICAgICAgIHZhciBjdXJyZW50TmVpZ2hib3IgPVxuICAgICAgICAgICAgICAgIG5laWdoYm9yRWRnZXNbaV0uZ2V0T3RoZXJFbmQoY3VycmVudE5vZGUpO1xuXG4gICAgICAgIC8vIElmIEJGUyBpcyBub3QgZ3Jvd2luZyBmcm9tIHRoaXMgbmVpZ2hib3IuXG4gICAgICAgIGlmIChwYXJlbnRzLmdldChjdXJyZW50Tm9kZSkgIT0gY3VycmVudE5laWdoYm9yKVxuICAgICAgICB7XG4gICAgICAgICAgLy8gV2UgaGF2ZW4ndCBwcmV2aW91c2x5IHZpc2l0ZWQgdGhpcyBuZWlnaGJvci5cbiAgICAgICAgICBpZiAoIXZpc2l0ZWQuY29udGFpbnMoY3VycmVudE5laWdoYm9yKSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0b0JlVmlzaXRlZC5wdXNoKGN1cnJlbnROZWlnaGJvcik7XG4gICAgICAgICAgICBwYXJlbnRzLnB1dChjdXJyZW50TmVpZ2hib3IsIGN1cnJlbnROb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gU2luY2Ugd2UgaGF2ZSBwcmV2aW91c2x5IHZpc2l0ZWQgdGhpcyBuZWlnaGJvciBhbmRcbiAgICAgICAgICAvLyB0aGlzIG5laWdoYm9yIGlzIG5vdCBwYXJlbnQgb2YgY3VycmVudE5vZGUsIGdpdmVuXG4gICAgICAgICAgLy8gZ3JhcGggY29udGFpbnMgYSBjb21wb25lbnQgdGhhdCBpcyBub3QgdHJlZSwgaGVuY2VcbiAgICAgICAgICAvLyBpdCBpcyBub3QgYSBmb3Jlc3QuXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlzRm9yZXN0ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGUgZ3JhcGggY29udGFpbnMgYSBjb21wb25lbnQgdGhhdCBpcyBub3QgYSB0cmVlLiBFbXB0eVxuICAgIC8vIHByZXZpb3VzbHkgZm91bmQgdHJlZXMuIFRoZSBtZXRob2Qgd2lsbCBlbmQuXG4gICAgaWYgKCFpc0ZvcmVzdClcbiAgICB7XG4gICAgICBmbGF0Rm9yZXN0ID0gW107XG4gICAgfVxuICAgIC8vIFNhdmUgY3VycmVudGx5IHZpc2l0ZWQgbm9kZXMgYXMgYSB0cmVlIGluIG91ciBmb3Jlc3QuIFJlc2V0XG4gICAgLy8gdmlzaXRlZCBhbmQgcGFyZW50cyBsaXN0cy4gQ29udGludWUgd2l0aCB0aGUgbmV4dCBjb21wb25lbnQgb2ZcbiAgICAvLyB0aGUgZ3JhcGgsIGlmIGFueS5cbiAgICBlbHNlXG4gICAge1xuICAgICAgdmFyIHRlbXAgPSBbXTtcbiAgICAgIHZpc2l0ZWQuYWRkQWxsVG8odGVtcCk7XG4gICAgICBmbGF0Rm9yZXN0LnB1c2godGVtcCk7XG4gICAgICAvL2ZsYXRGb3Jlc3QgPSBmbGF0Rm9yZXN0LmNvbmNhdCh0ZW1wKTtcbiAgICAgIC8vdW5Qcm9jZXNzZWROb2Rlcy5yZW1vdmVBbGwodmlzaXRlZCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGVtcFtpXTtcbiAgICAgICAgdmFyIGluZGV4ID0gdW5Qcm9jZXNzZWROb2Rlcy5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICB1blByb2Nlc3NlZE5vZGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZpc2l0ZWQgPSBuZXcgSGFzaFNldCgpO1xuICAgICAgcGFyZW50cyA9IG5ldyBIYXNoTWFwKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZsYXRGb3Jlc3Q7XG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGNyZWF0ZXMgZHVtbXkgbm9kZXMgKGFuIGwtbGV2ZWwgbm9kZSB3aXRoIG1pbmltYWwgZGltZW5zaW9ucylcbiAqIGZvciB0aGUgZ2l2ZW4gZWRnZSAob25lIHBlciBiZW5kcG9pbnQpLiBUaGUgZXhpc3RpbmcgbC1sZXZlbCBzdHJ1Y3R1cmVcbiAqIGlzIHVwZGF0ZWQgYWNjb3JkaW5nbHkuXG4gKi9cbkxheW91dC5wcm90b3R5cGUuY3JlYXRlRHVtbXlOb2Rlc0ZvckJlbmRwb2ludHMgPSBmdW5jdGlvbiAoZWRnZSlcbntcbiAgdmFyIGR1bW15Tm9kZXMgPSBbXTtcbiAgdmFyIHByZXYgPSBlZGdlLnNvdXJjZTtcblxuICB2YXIgZ3JhcGggPSB0aGlzLmdyYXBoTWFuYWdlci5jYWxjTG93ZXN0Q29tbW9uQW5jZXN0b3IoZWRnZS5zb3VyY2UsIGVkZ2UudGFyZ2V0KTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVkZ2UuYmVuZHBvaW50cy5sZW5ndGg7IGkrKylcbiAge1xuICAgIC8vIGNyZWF0ZSBuZXcgZHVtbXkgbm9kZVxuICAgIHZhciBkdW1teU5vZGUgPSB0aGlzLm5ld05vZGUobnVsbCk7XG4gICAgZHVtbXlOb2RlLnNldFJlY3QobmV3IFBvaW50KDAsIDApLCBuZXcgRGltZW5zaW9uKDEsIDEpKTtcblxuICAgIGdyYXBoLmFkZChkdW1teU5vZGUpO1xuXG4gICAgLy8gY3JlYXRlIG5ldyBkdW1teSBlZGdlIGJldHdlZW4gcHJldiBhbmQgZHVtbXkgbm9kZVxuICAgIHZhciBkdW1teUVkZ2UgPSB0aGlzLm5ld0VkZ2UobnVsbCk7XG4gICAgdGhpcy5ncmFwaE1hbmFnZXIuYWRkKGR1bW15RWRnZSwgcHJldiwgZHVtbXlOb2RlKTtcblxuICAgIGR1bW15Tm9kZXMuYWRkKGR1bW15Tm9kZSk7XG4gICAgcHJldiA9IGR1bW15Tm9kZTtcbiAgfVxuXG4gIHZhciBkdW1teUVkZ2UgPSB0aGlzLm5ld0VkZ2UobnVsbCk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLmFkZChkdW1teUVkZ2UsIHByZXYsIGVkZ2UudGFyZ2V0KTtcblxuICB0aGlzLmVkZ2VUb0R1bW15Tm9kZXMucHV0KGVkZ2UsIGR1bW15Tm9kZXMpO1xuXG4gIC8vIHJlbW92ZSByZWFsIGVkZ2UgZnJvbSBncmFwaCBtYW5hZ2VyIGlmIGl0IGlzIGludGVyLWdyYXBoXG4gIGlmIChlZGdlLmlzSW50ZXJHcmFwaCgpKVxuICB7XG4gICAgdGhpcy5ncmFwaE1hbmFnZXIucmVtb3ZlKGVkZ2UpO1xuICB9XG4gIC8vIGVsc2UsIHJlbW92ZSB0aGUgZWRnZSBmcm9tIHRoZSBjdXJyZW50IGdyYXBoXG4gIGVsc2VcbiAge1xuICAgIGdyYXBoLnJlbW92ZShlZGdlKTtcbiAgfVxuXG4gIHJldHVybiBkdW1teU5vZGVzO1xufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBjcmVhdGVzIGJlbmRwb2ludHMgZm9yIGVkZ2VzIGZyb20gdGhlIGR1bW15IG5vZGVzXG4gKiBhdCBsLWxldmVsLlxuICovXG5MYXlvdXQucHJvdG90eXBlLmNyZWF0ZUJlbmRwb2ludHNGcm9tRHVtbXlOb2RlcyA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBlZGdlcyA9IFtdO1xuICBlZGdlcyA9IGVkZ2VzLmNvbmNhdCh0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxFZGdlcygpKTtcbiAgZWRnZXMgPSB0aGlzLmVkZ2VUb0R1bW15Tm9kZXMua2V5U2V0KCkuY29uY2F0KGVkZ2VzKTtcblxuICBmb3IgKHZhciBrID0gMDsgayA8IGVkZ2VzLmxlbmd0aDsgaysrKVxuICB7XG4gICAgdmFyIGxFZGdlID0gZWRnZXNba107XG5cbiAgICBpZiAobEVkZ2UuYmVuZHBvaW50cy5sZW5ndGggPiAwKVxuICAgIHtcbiAgICAgIHZhciBwYXRoID0gdGhpcy5lZGdlVG9EdW1teU5vZGVzLmdldChsRWRnZSk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKylcbiAgICAgIHtcbiAgICAgICAgdmFyIGR1bW15Tm9kZSA9IHBhdGhbaV07XG4gICAgICAgIHZhciBwID0gbmV3IFBvaW50RChkdW1teU5vZGUuZ2V0Q2VudGVyWCgpLFxuICAgICAgICAgICAgICAgIGR1bW15Tm9kZS5nZXRDZW50ZXJZKCkpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBiZW5kcG9pbnQncyBsb2NhdGlvbiBhY2NvcmRpbmcgdG8gZHVtbXkgbm9kZVxuICAgICAgICB2YXIgZWJwID0gbEVkZ2UuYmVuZHBvaW50cy5nZXQoaSk7XG4gICAgICAgIGVicC54ID0gcC54O1xuICAgICAgICBlYnAueSA9IHAueTtcblxuICAgICAgICAvLyByZW1vdmUgdGhlIGR1bW15IG5vZGUsIGR1bW15IGVkZ2VzIGluY2lkZW50IHdpdGggdGhpc1xuICAgICAgICAvLyBkdW1teSBub2RlIGlzIGFsc28gcmVtb3ZlZCAod2l0aGluIHRoZSByZW1vdmUgbWV0aG9kKVxuICAgICAgICBkdW1teU5vZGUuZ2V0T3duZXIoKS5yZW1vdmUoZHVtbXlOb2RlKTtcbiAgICAgIH1cblxuICAgICAgLy8gYWRkIHRoZSByZWFsIGVkZ2UgdG8gZ3JhcGhcbiAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLmFkZChsRWRnZSwgbEVkZ2Uuc291cmNlLCBsRWRnZS50YXJnZXQpO1xuICAgIH1cbiAgfVxufTtcblxuTGF5b3V0LnRyYW5zZm9ybSA9IGZ1bmN0aW9uIChzbGlkZXJWYWx1ZSwgZGVmYXVsdFZhbHVlLCBtaW5EaXYsIG1heE11bCkge1xuICBpZiAobWluRGl2ICE9IHVuZGVmaW5lZCAmJiBtYXhNdWwgIT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHZhbHVlID0gZGVmYXVsdFZhbHVlO1xuXG4gICAgaWYgKHNsaWRlclZhbHVlIDw9IDUwKVxuICAgIHtcbiAgICAgIHZhciBtaW5WYWx1ZSA9IGRlZmF1bHRWYWx1ZSAvIG1pbkRpdjtcbiAgICAgIHZhbHVlIC09ICgoZGVmYXVsdFZhbHVlIC0gbWluVmFsdWUpIC8gNTApICogKDUwIC0gc2xpZGVyVmFsdWUpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgdmFyIG1heFZhbHVlID0gZGVmYXVsdFZhbHVlICogbWF4TXVsO1xuICAgICAgdmFsdWUgKz0gKChtYXhWYWx1ZSAtIGRlZmF1bHRWYWx1ZSkgLyA1MCkgKiAoc2xpZGVyVmFsdWUgLSA1MCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGVsc2Uge1xuICAgIHZhciBhLCBiO1xuXG4gICAgaWYgKHNsaWRlclZhbHVlIDw9IDUwKVxuICAgIHtcbiAgICAgIGEgPSA5LjAgKiBkZWZhdWx0VmFsdWUgLyA1MDAuMDtcbiAgICAgIGIgPSBkZWZhdWx0VmFsdWUgLyAxMC4wO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgYSA9IDkuMCAqIGRlZmF1bHRWYWx1ZSAvIDUwLjA7XG4gICAgICBiID0gLTggKiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIChhICogc2xpZGVyVmFsdWUgKyBiKTtcbiAgfVxufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBmaW5kcyBhbmQgcmV0dXJucyB0aGUgY2VudGVyIG9mIHRoZSBnaXZlbiBub2RlcywgYXNzdW1pbmdcbiAqIHRoYXQgdGhlIGdpdmVuIG5vZGVzIGZvcm0gYSB0cmVlIGluIHRoZW1zZWx2ZXMuXG4gKi9cbkxheW91dC5maW5kQ2VudGVyT2ZUcmVlID0gZnVuY3Rpb24gKG5vZGVzKVxue1xuICB2YXIgbGlzdCA9IFtdO1xuICBsaXN0ID0gbGlzdC5jb25jYXQobm9kZXMpO1xuXG4gIHZhciByZW1vdmVkTm9kZXMgPSBbXTtcbiAgdmFyIHJlbWFpbmluZ0RlZ3JlZXMgPSBuZXcgSGFzaE1hcCgpO1xuICB2YXIgZm91bmRDZW50ZXIgPSBmYWxzZTtcbiAgdmFyIGNlbnRlck5vZGUgPSBudWxsO1xuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PSAxIHx8IGxpc3QubGVuZ3RoID09IDIpXG4gIHtcbiAgICBmb3VuZENlbnRlciA9IHRydWU7XG4gICAgY2VudGVyTm9kZSA9IGxpc3RbMF07XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspXG4gIHtcbiAgICB2YXIgbm9kZSA9IGxpc3RbaV07XG4gICAgdmFyIGRlZ3JlZSA9IG5vZGUuZ2V0TmVpZ2hib3JzTGlzdCgpLnNpemUoKTtcbiAgICByZW1haW5pbmdEZWdyZWVzLnB1dChub2RlLCBub2RlLmdldE5laWdoYm9yc0xpc3QoKS5zaXplKCkpO1xuXG4gICAgaWYgKGRlZ3JlZSA9PSAxKVxuICAgIHtcbiAgICAgIHJlbW92ZWROb2Rlcy5wdXNoKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciB0ZW1wTGlzdCA9IFtdO1xuICB0ZW1wTGlzdCA9IHRlbXBMaXN0LmNvbmNhdChyZW1vdmVkTm9kZXMpO1xuXG4gIHdoaWxlICghZm91bmRDZW50ZXIpXG4gIHtcbiAgICB2YXIgdGVtcExpc3QyID0gW107XG4gICAgdGVtcExpc3QyID0gdGVtcExpc3QyLmNvbmNhdCh0ZW1wTGlzdCk7XG4gICAgdGVtcExpc3QgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICB2YXIgbm9kZSA9IGxpc3RbaV07XG5cbiAgICAgIHZhciBpbmRleCA9IGxpc3QuaW5kZXhPZihub2RlKTtcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5laWdoYm91cnMgPSBub2RlLmdldE5laWdoYm9yc0xpc3QoKTtcblxuICAgICAgT2JqZWN0LmtleXMobmVpZ2hib3Vycy5zZXQpLmZvckVhY2goZnVuY3Rpb24oaikge1xuICAgICAgICB2YXIgbmVpZ2hib3VyID0gbmVpZ2hib3Vycy5zZXRbal07XG4gICAgICAgIGlmIChyZW1vdmVkTm9kZXMuaW5kZXhPZihuZWlnaGJvdXIpIDwgMClcbiAgICAgICAge1xuICAgICAgICAgIHZhciBvdGhlckRlZ3JlZSA9IHJlbWFpbmluZ0RlZ3JlZXMuZ2V0KG5laWdoYm91cik7XG4gICAgICAgICAgdmFyIG5ld0RlZ3JlZSA9IG90aGVyRGVncmVlIC0gMTtcblxuICAgICAgICAgIGlmIChuZXdEZWdyZWUgPT0gMSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZW1wTGlzdC5wdXNoKG5laWdoYm91cik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVtYWluaW5nRGVncmVlcy5wdXQobmVpZ2hib3VyLCBuZXdEZWdyZWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmVkTm9kZXMgPSByZW1vdmVkTm9kZXMuY29uY2F0KHRlbXBMaXN0KTtcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PSAxIHx8IGxpc3QubGVuZ3RoID09IDIpXG4gICAge1xuICAgICAgZm91bmRDZW50ZXIgPSB0cnVlO1xuICAgICAgY2VudGVyTm9kZSA9IGxpc3RbMF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNlbnRlck5vZGU7XG59O1xuXG4vKipcbiAqIER1cmluZyB0aGUgY29hcnNlbmluZyBwcm9jZXNzLCB0aGlzIGxheW91dCBtYXkgYmUgcmVmZXJlbmNlZCBieSB0d28gZ3JhcGggbWFuYWdlcnNcbiAqIHRoaXMgc2V0dGVyIGZ1bmN0aW9uIGdyYW50cyBhY2Nlc3MgdG8gY2hhbmdlIHRoZSBjdXJyZW50bHkgYmVpbmcgdXNlZCBncmFwaCBtYW5hZ2VyXG4gKi9cbkxheW91dC5wcm90b3R5cGUuc2V0R3JhcGhNYW5hZ2VyID0gZnVuY3Rpb24gKGdtKVxue1xuICB0aGlzLmdyYXBoTWFuYWdlciA9IGdtO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMYXlvdXQ7XG4iLCJmdW5jdGlvbiBMYXlvdXRDb25zdGFudHMoKSB7XG59XG5cbi8qKlxuICogTGF5b3V0IFF1YWxpdHlcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLlBST09GX1FVQUxJVFkgPSAwO1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUVVBTElUWSA9IDE7XG5MYXlvdXRDb25zdGFudHMuRFJBRlRfUVVBTElUWSA9IDI7XG5cbi8qKlxuICogRGVmYXVsdCBwYXJhbWV0ZXJzXG4gKi9cbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0NSRUFURV9CRU5EU19BU19ORUVERUQgPSBmYWxzZTtcbi8vTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUwgPSB0cnVlO1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUwgPSBmYWxzZTtcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9PTl9MQVlPVVQgPSB0cnVlO1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX0RVUklOR19MQVlPVVQgPSBmYWxzZTtcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9QRVJJT0QgPSA1MDtcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX1VOSUZPUk1fTEVBRl9OT0RFX1NJWkVTID0gZmFsc2U7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBHZW5lcmFsIG90aGVyIGNvbnN0YW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qXG4gKiBNYXJnaW5zIG9mIGEgZ3JhcGggdG8gYmUgYXBwbGllZCBvbiBib3VkaW5nIHJlY3RhbmdsZSBvZiBpdHMgY29udGVudHMuIFdlXG4gKiBhc3N1bWUgbWFyZ2lucyBvbiBhbGwgZm91ciBzaWRlcyB0byBiZSB1bmlmb3JtLlxuICovXG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFQSF9NQVJHSU4gPSAxNTtcblxuLypcbiAqIFdoZXRoZXIgdG8gY29uc2lkZXIgbGFiZWxzIGluIG5vZGUgZGltZW5zaW9ucyBvciBub3RcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyA9IGZhbHNlO1xuXG4vKlxuICogRGVmYXVsdCBkaW1lbnNpb24gb2YgYSBub24tY29tcG91bmQgbm9kZS5cbiAqL1xuTGF5b3V0Q29uc3RhbnRzLlNJTVBMRV9OT0RFX1NJWkUgPSA0MDtcblxuLypcbiAqIERlZmF1bHQgZGltZW5zaW9uIG9mIGEgbm9uLWNvbXBvdW5kIG5vZGUuXG4gKi9cbkxheW91dENvbnN0YW50cy5TSU1QTEVfTk9ERV9IQUxGX1NJWkUgPSBMYXlvdXRDb25zdGFudHMuU0lNUExFX05PREVfU0laRSAvIDI7XG5cbi8qXG4gKiBFbXB0eSBjb21wb3VuZCBub2RlIHNpemUuIFdoZW4gYSBjb21wb3VuZCBub2RlIGlzIGVtcHR5LCBpdHMgYm90aFxuICogZGltZW5zaW9ucyBzaG91bGQgYmUgb2YgdGhpcyB2YWx1ZS5cbiAqL1xuTGF5b3V0Q29uc3RhbnRzLkVNUFRZX0NPTVBPVU5EX05PREVfU0laRSA9IDQwO1xuXG4vKlxuICogTWluaW11bSBsZW5ndGggdGhhdCBhbiBlZGdlIHNob3VsZCB0YWtlIGR1cmluZyBsYXlvdXRcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLk1JTl9FREdFX0xFTkdUSCA9IDE7XG5cbi8qXG4gKiBXb3JsZCBib3VuZGFyaWVzIHRoYXQgbGF5b3V0IG9wZXJhdGVzIG9uXG4gKi9cbkxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSA9IDEwMDAwMDA7XG5cbi8qXG4gKiBXb3JsZCBib3VuZGFyaWVzIHRoYXQgcmFuZG9tIHBvc2l0aW9uaW5nIGNhbiBiZSBwZXJmb3JtZWQgd2l0aFxuICovXG5MYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWSA9IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSAvIDEwMDA7XG5cbi8qXG4gKiBDb29yZGluYXRlcyBvZiB0aGUgd29ybGQgY2VudGVyXG4gKi9cbkxheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWCA9IDEyMDA7XG5MYXlvdXRDb25zdGFudHMuV09STERfQ0VOVEVSX1kgPSA5MDA7XG5cbm1vZHVsZS5leHBvcnRzID0gTGF5b3V0Q29uc3RhbnRzO1xuIiwiY29uc3Qgbm9kZUZyb20gPSB2YWx1ZSA9PiAoeyB2YWx1ZSwgbmV4dDogbnVsbCwgcHJldjogbnVsbCB9KTtcblxuY29uc3QgYWRkID0gKCBwcmV2LCBub2RlLCBuZXh0LCBsaXN0ICkgPT4ge1xuICBpZiggcHJldiAhPT0gbnVsbCApe1xuICAgIHByZXYubmV4dCA9IG5vZGU7XG4gIH0gZWxzZSB7XG4gICAgbGlzdC5oZWFkID0gbm9kZTtcbiAgfVxuXG4gIGlmKCBuZXh0ICE9PSBudWxsICl7XG4gICAgbmV4dC5wcmV2ID0gbm9kZTtcbiAgfSBlbHNlIHtcbiAgICBsaXN0LnRhaWwgPSBub2RlO1xuICB9XG5cbiAgbm9kZS5wcmV2ID0gcHJldjtcbiAgbm9kZS5uZXh0ID0gbmV4dDtcblxuICBsaXN0Lmxlbmd0aCsrO1xuXG4gIHJldHVybiBub2RlO1xufTtcblxuY29uc3QgcmVtb3ZlID0gKCBub2RlLCBsaXN0ICkgPT4ge1xuICBsZXQgeyBwcmV2LCBuZXh0IH0gPSBub2RlO1xuXG4gIGlmKCBwcmV2ICE9PSBudWxsICl7XG4gICAgcHJldi5uZXh0ID0gbmV4dDtcbiAgfSBlbHNlIHtcbiAgICBsaXN0LmhlYWQgPSBuZXh0O1xuICB9XG5cbiAgaWYoIG5leHQgIT09IG51bGwgKXtcbiAgICBuZXh0LnByZXYgPSBwcmV2O1xuICB9IGVsc2Uge1xuICAgIGxpc3QudGFpbCA9IHByZXY7XG4gIH1cblxuICBub2RlLnByZXYgPSBub2RlLm5leHQgPSBudWxsO1xuXG4gIGxpc3QubGVuZ3RoLS07XG5cbiAgcmV0dXJuIG5vZGU7XG59O1xuXG5jbGFzcyBMaW5rZWRMaXN0IHtcbiAgY29uc3RydWN0b3IoIHZhbHMgKXtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5oZWFkID0gbnVsbDtcbiAgICB0aGlzLnRhaWwgPSBudWxsO1xuXG4gICAgaWYoIHZhbHMgIT0gbnVsbCApe1xuICAgICAgdmFscy5mb3JFYWNoKCB2ID0+IHRoaXMucHVzaCh2KSApO1xuICAgIH1cbiAgfVxuXG4gIHNpemUoKXtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGg7XG4gIH1cblxuICBpbnNlcnRCZWZvcmUoIHZhbCwgb3RoZXJOb2RlICl7XG4gICAgcmV0dXJuIGFkZCggb3RoZXJOb2RlLnByZXYsIG5vZGVGcm9tKHZhbCksIG90aGVyTm9kZSwgdGhpcyApO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoIHZhbCwgb3RoZXJOb2RlICl7XG4gICAgcmV0dXJuIGFkZCggb3RoZXJOb2RlLCBub2RlRnJvbSh2YWwpLCBvdGhlck5vZGUubmV4dCwgdGhpcyApO1xuICB9XG5cbiAgaW5zZXJ0Tm9kZUJlZm9yZSggbmV3Tm9kZSwgb3RoZXJOb2RlICl7XG4gICAgcmV0dXJuIGFkZCggb3RoZXJOb2RlLnByZXYsIG5ld05vZGUsIG90aGVyTm9kZSwgdGhpcyApO1xuICB9XG5cbiAgaW5zZXJ0Tm9kZUFmdGVyKCBuZXdOb2RlLCBvdGhlck5vZGUgKXtcbiAgICByZXR1cm4gYWRkKCBvdGhlck5vZGUsIG5ld05vZGUsIG90aGVyTm9kZS5uZXh0LCB0aGlzICk7XG4gIH1cblxuICBwdXNoKCB2YWwgKXtcbiAgICByZXR1cm4gYWRkKCB0aGlzLnRhaWwsIG5vZGVGcm9tKHZhbCksIG51bGwsIHRoaXMgKTtcbiAgfVxuXG4gIHVuc2hpZnQoIHZhbCApe1xuICAgIHJldHVybiBhZGQoIG51bGwsIG5vZGVGcm9tKHZhbCksIHRoaXMuaGVhZCwgdGhpcyApO1xuICB9XG5cbiAgcmVtb3ZlKCBub2RlICl7XG4gICAgcmV0dXJuIHJlbW92ZSggbm9kZSwgdGhpcyApO1xuICB9XG5cbiAgcG9wKCl7XG4gICAgcmV0dXJuIHJlbW92ZSggdGhpcy50YWlsLCB0aGlzICkudmFsdWU7XG4gIH1cblxuICBwb3BOb2RlKCl7XG4gICAgIHJldHVybiByZW1vdmUoIHRoaXMudGFpbCwgdGhpcyApO1xuICB9XG5cbiAgc2hpZnQoKXtcbiAgICByZXR1cm4gcmVtb3ZlKCB0aGlzLmhlYWQsIHRoaXMgKS52YWx1ZTtcbiAgfVxuXG4gIHNoaWZ0Tm9kZSgpe1xuICAgIHJldHVybiByZW1vdmUoIHRoaXMuaGVhZCwgdGhpcyApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGlua2VkTGlzdDtcbiIsIi8qXG4gKlRoaXMgY2xhc3MgaXMgdGhlIGphdmFzY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFBvaW50LmphdmEgY2xhc3MgaW4gamRrXG4gKi9cbmZ1bmN0aW9uIFBvaW50KHgsIHksIHApIHtcbiAgdGhpcy54ID0gbnVsbDtcbiAgdGhpcy55ID0gbnVsbDtcbiAgaWYgKHggPT0gbnVsbCAmJiB5ID09IG51bGwgJiYgcCA9PSBudWxsKSB7XG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnkgPSAwO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiB4ID09ICdudW1iZXInICYmIHR5cGVvZiB5ID09ICdudW1iZXInICYmIHAgPT0gbnVsbCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuICBlbHNlIGlmICh4LmNvbnN0cnVjdG9yLm5hbWUgPT0gJ1BvaW50JyAmJiB5ID09IG51bGwgJiYgcCA9PSBudWxsKSB7XG4gICAgcCA9IHg7XG4gICAgdGhpcy54ID0gcC54O1xuICAgIHRoaXMueSA9IHAueTtcbiAgfVxufVxuXG5Qb2ludC5wcm90b3R5cGUuZ2V0WCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMueDtcbn1cblxuUG9pbnQucHJvdG90eXBlLmdldFkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnk7XG59XG5cblBvaW50LnByb3RvdHlwZS5nZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7XG59XG5cblBvaW50LnByb3RvdHlwZS5zZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICh4LCB5LCBwKSB7XG4gIGlmICh4LmNvbnN0cnVjdG9yLm5hbWUgPT0gJ1BvaW50JyAmJiB5ID09IG51bGwgJiYgcCA9PSBudWxsKSB7XG4gICAgcCA9IHg7XG4gICAgdGhpcy5zZXRMb2NhdGlvbihwLngsIHAueSk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIHggPT0gJ251bWJlcicgJiYgdHlwZW9mIHkgPT0gJ251bWJlcicgJiYgcCA9PSBudWxsKSB7XG4gICAgLy9pZiBib3RoIHBhcmFtZXRlcnMgYXJlIGludGVnZXIganVzdCBtb3ZlICh4LHkpIGxvY2F0aW9uXG4gICAgaWYgKHBhcnNlSW50KHgpID09IHggJiYgcGFyc2VJbnQoeSkgPT0geSkge1xuICAgICAgdGhpcy5tb3ZlKHgsIHkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMueCA9IE1hdGguZmxvb3IoeCArIDAuNSk7XG4gICAgICB0aGlzLnkgPSBNYXRoLmZsb29yKHkgKyAwLjUpO1xuICAgIH1cbiAgfVxufVxuXG5Qb2ludC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gIHRoaXMueCA9IHg7XG4gIHRoaXMueSA9IHk7XG59XG5cblBvaW50LnByb3RvdHlwZS50cmFuc2xhdGUgPSBmdW5jdGlvbiAoZHgsIGR5KSB7XG4gIHRoaXMueCArPSBkeDtcbiAgdGhpcy55ICs9IGR5O1xufVxuXG5Qb2ludC5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAob2JqLmNvbnN0cnVjdG9yLm5hbWUgPT0gXCJQb2ludFwiKSB7XG4gICAgdmFyIHB0ID0gb2JqO1xuICAgIHJldHVybiAodGhpcy54ID09IHB0LngpICYmICh0aGlzLnkgPT0gcHQueSk7XG4gIH1cbiAgcmV0dXJuIHRoaXMgPT0gb2JqO1xufVxuXG5Qb2ludC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgUG9pbnQoKS5jb25zdHJ1Y3Rvci5uYW1lICsgXCJbeD1cIiArIHRoaXMueCArIFwiLHk9XCIgKyB0aGlzLnkgKyBcIl1cIjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb2ludDtcbiIsImZ1bmN0aW9uIFBvaW50RCh4LCB5KSB7XG4gIGlmICh4ID09IG51bGwgJiYgeSA9PSBudWxsKSB7XG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnkgPSAwO1xuICB9IGVsc2Uge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxufVxuXG5Qb2ludEQucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy54O1xufTtcblxuUG9pbnRELnByb3RvdHlwZS5nZXRZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMueTtcbn07XG5cblBvaW50RC5wcm90b3R5cGUuc2V0WCA9IGZ1bmN0aW9uICh4KVxue1xuICB0aGlzLnggPSB4O1xufTtcblxuUG9pbnRELnByb3RvdHlwZS5zZXRZID0gZnVuY3Rpb24gKHkpXG57XG4gIHRoaXMueSA9IHk7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLmdldERpZmZlcmVuY2UgPSBmdW5jdGlvbiAocHQpXG57XG4gIHJldHVybiBuZXcgRGltZW5zaW9uRCh0aGlzLnggLSBwdC54LCB0aGlzLnkgLSBwdC55KTtcbn07XG5cblBvaW50RC5wcm90b3R5cGUuZ2V0Q29weSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiBuZXcgUG9pbnREKHRoaXMueCwgdGhpcy55KTtcbn07XG5cblBvaW50RC5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKGRpbSlcbntcbiAgdGhpcy54ICs9IGRpbS53aWR0aDtcbiAgdGhpcy55ICs9IGRpbS5oZWlnaHQ7XG4gIHJldHVybiB0aGlzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQb2ludEQ7XG4iLCJmdW5jdGlvbiBSYW5kb21TZWVkKCkge1xufVxuUmFuZG9tU2VlZC5zZWVkID0gMTtcblJhbmRvbVNlZWQueCA9IDA7XG5cblJhbmRvbVNlZWQubmV4dERvdWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgUmFuZG9tU2VlZC54ID0gTWF0aC5zaW4oUmFuZG9tU2VlZC5zZWVkKyspICogMTAwMDA7XG4gIHJldHVybiBSYW5kb21TZWVkLnggLSBNYXRoLmZsb29yKFJhbmRvbVNlZWQueCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJhbmRvbVNlZWQ7XG4iLCJmdW5jdGlvbiBSZWN0YW5nbGVEKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgdGhpcy54ID0gMDtcbiAgdGhpcy55ID0gMDtcbiAgdGhpcy53aWR0aCA9IDA7XG4gIHRoaXMuaGVpZ2h0ID0gMDtcblxuICBpZiAoeCAhPSBudWxsICYmIHkgIT0gbnVsbCAmJiB3aWR0aCAhPSBudWxsICYmIGhlaWdodCAhPSBudWxsKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgfVxufVxuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRYID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMueDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLnNldFggPSBmdW5jdGlvbiAoeClcbntcbiAgdGhpcy54ID0geDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFkgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy55O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0WSA9IGZ1bmN0aW9uICh5KVxue1xuICB0aGlzLnkgPSB5O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy53aWR0aDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLnNldFdpZHRoID0gZnVuY3Rpb24gKHdpZHRoKVxue1xuICB0aGlzLndpZHRoID0gd2lkdGg7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5oZWlnaHQ7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbiAoaGVpZ2h0KVxue1xuICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFJpZ2h0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGg7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRCb3R0b20gPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQ7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5pbnRlcnNlY3RzID0gZnVuY3Rpb24gKGEpXG57XG4gIGlmICh0aGlzLmdldFJpZ2h0KCkgPCBhLngpXG4gIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodGhpcy5nZXRCb3R0b20oKSA8IGEueSlcbiAge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChhLmdldFJpZ2h0KCkgPCB0aGlzLngpXG4gIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoYS5nZXRCb3R0b20oKSA8IHRoaXMueSlcbiAge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0Q2VudGVyWCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoIC8gMjtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldE1pblggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5nZXRYKCk7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRNYXhYID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuZ2V0WCgpICsgdGhpcy53aWR0aDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldENlbnRlclkgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQgLyAyO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0TWluWSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmdldFkoKTtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldE1heFkgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5nZXRZKCkgKyB0aGlzLmhlaWdodDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFdpZHRoSGFsZiA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLndpZHRoIC8gMjtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldEhlaWdodEhhbGYgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5oZWlnaHQgLyAyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWN0YW5nbGVEO1xuIiwidmFyIFBvaW50RCA9IHJlcXVpcmUoJy4vUG9pbnREJyk7XG5cbmZ1bmN0aW9uIFRyYW5zZm9ybSh4LCB5KSB7XG4gIHRoaXMubHdvcmxkT3JnWCA9IDAuMDtcbiAgdGhpcy5sd29ybGRPcmdZID0gMC4wO1xuICB0aGlzLmxkZXZpY2VPcmdYID0gMC4wO1xuICB0aGlzLmxkZXZpY2VPcmdZID0gMC4wO1xuICB0aGlzLmx3b3JsZEV4dFggPSAxLjA7XG4gIHRoaXMubHdvcmxkRXh0WSA9IDEuMDtcbiAgdGhpcy5sZGV2aWNlRXh0WCA9IDEuMDtcbiAgdGhpcy5sZGV2aWNlRXh0WSA9IDEuMDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRXb3JsZE9yZ1ggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sd29ybGRPcmdYO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldFdvcmxkT3JnWCA9IGZ1bmN0aW9uICh3b3gpXG57XG4gIHRoaXMubHdvcmxkT3JnWCA9IHdveDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRXb3JsZE9yZ1kgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sd29ybGRPcmdZO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldFdvcmxkT3JnWSA9IGZ1bmN0aW9uICh3b3kpXG57XG4gIHRoaXMubHdvcmxkT3JnWSA9IHdveTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRXb3JsZEV4dFggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sd29ybGRFeHRYO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldFdvcmxkRXh0WCA9IGZ1bmN0aW9uICh3ZXgpXG57XG4gIHRoaXMubHdvcmxkRXh0WCA9IHdleDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRXb3JsZEV4dFkgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sd29ybGRFeHRZO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldFdvcmxkRXh0WSA9IGZ1bmN0aW9uICh3ZXkpXG57XG4gIHRoaXMubHdvcmxkRXh0WSA9IHdleTtcbn1cblxuLyogRGV2aWNlIHJlbGF0ZWQgKi9cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VPcmdYID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubGRldmljZU9yZ1g7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0RGV2aWNlT3JnWCA9IGZ1bmN0aW9uIChkb3gpXG57XG4gIHRoaXMubGRldmljZU9yZ1ggPSBkb3g7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0RGV2aWNlT3JnWSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmxkZXZpY2VPcmdZO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZU9yZ1kgPSBmdW5jdGlvbiAoZG95KVxue1xuICB0aGlzLmxkZXZpY2VPcmdZID0gZG95O1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldERldmljZUV4dFggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sZGV2aWNlRXh0WDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXREZXZpY2VFeHRYID0gZnVuY3Rpb24gKGRleClcbntcbiAgdGhpcy5sZGV2aWNlRXh0WCA9IGRleDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VFeHRZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubGRldmljZUV4dFk7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0RGV2aWNlRXh0WSA9IGZ1bmN0aW9uIChkZXkpXG57XG4gIHRoaXMubGRldmljZUV4dFkgPSBkZXk7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUudHJhbnNmb3JtWCA9IGZ1bmN0aW9uICh4KVxue1xuICB2YXIgeERldmljZSA9IDAuMDtcbiAgdmFyIHdvcmxkRXh0WCA9IHRoaXMubHdvcmxkRXh0WDtcbiAgaWYgKHdvcmxkRXh0WCAhPSAwLjApXG4gIHtcbiAgICB4RGV2aWNlID0gdGhpcy5sZGV2aWNlT3JnWCArXG4gICAgICAgICAgICAoKHggLSB0aGlzLmx3b3JsZE9yZ1gpICogdGhpcy5sZGV2aWNlRXh0WCAvIHdvcmxkRXh0WCk7XG4gIH1cblxuICByZXR1cm4geERldmljZTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS50cmFuc2Zvcm1ZID0gZnVuY3Rpb24gKHkpXG57XG4gIHZhciB5RGV2aWNlID0gMC4wO1xuICB2YXIgd29ybGRFeHRZID0gdGhpcy5sd29ybGRFeHRZO1xuICBpZiAod29ybGRFeHRZICE9IDAuMClcbiAge1xuICAgIHlEZXZpY2UgPSB0aGlzLmxkZXZpY2VPcmdZICtcbiAgICAgICAgICAgICgoeSAtIHRoaXMubHdvcmxkT3JnWSkgKiB0aGlzLmxkZXZpY2VFeHRZIC8gd29ybGRFeHRZKTtcbiAgfVxuXG5cbiAgcmV0dXJuIHlEZXZpY2U7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuaW52ZXJzZVRyYW5zZm9ybVggPSBmdW5jdGlvbiAoeClcbntcbiAgdmFyIHhXb3JsZCA9IDAuMDtcbiAgdmFyIGRldmljZUV4dFggPSB0aGlzLmxkZXZpY2VFeHRYO1xuICBpZiAoZGV2aWNlRXh0WCAhPSAwLjApXG4gIHtcbiAgICB4V29ybGQgPSB0aGlzLmx3b3JsZE9yZ1ggK1xuICAgICAgICAgICAgKCh4IC0gdGhpcy5sZGV2aWNlT3JnWCkgKiB0aGlzLmx3b3JsZEV4dFggLyBkZXZpY2VFeHRYKTtcbiAgfVxuXG5cbiAgcmV0dXJuIHhXb3JsZDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtWSA9IGZ1bmN0aW9uICh5KVxue1xuICB2YXIgeVdvcmxkID0gMC4wO1xuICB2YXIgZGV2aWNlRXh0WSA9IHRoaXMubGRldmljZUV4dFk7XG4gIGlmIChkZXZpY2VFeHRZICE9IDAuMClcbiAge1xuICAgIHlXb3JsZCA9IHRoaXMubHdvcmxkT3JnWSArXG4gICAgICAgICAgICAoKHkgLSB0aGlzLmxkZXZpY2VPcmdZKSAqIHRoaXMubHdvcmxkRXh0WSAvIGRldmljZUV4dFkpO1xuICB9XG4gIHJldHVybiB5V29ybGQ7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuaW52ZXJzZVRyYW5zZm9ybVBvaW50ID0gZnVuY3Rpb24gKGluUG9pbnQpXG57XG4gIHZhciBvdXRQb2ludCA9XG4gICAgICAgICAgbmV3IFBvaW50RCh0aGlzLmludmVyc2VUcmFuc2Zvcm1YKGluUG9pbnQueCksXG4gICAgICAgICAgICAgICAgICB0aGlzLmludmVyc2VUcmFuc2Zvcm1ZKGluUG9pbnQueSkpO1xuICByZXR1cm4gb3V0UG9pbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNmb3JtO1xuIiwiZnVuY3Rpb24gVW5pcXVlSURHZW5lcmV0b3IoKSB7XG59XG5cblVuaXF1ZUlER2VuZXJldG9yLmxhc3RJRCA9IDA7XG5cblVuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAoVW5pcXVlSURHZW5lcmV0b3IuaXNQcmltaXRpdmUob2JqKSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgaWYgKG9iai51bmlxdWVJRCAhPSBudWxsKSB7XG4gICAgcmV0dXJuIG9iai51bmlxdWVJRDtcbiAgfVxuICBvYmoudW5pcXVlSUQgPSBVbmlxdWVJREdlbmVyZXRvci5nZXRTdHJpbmcoKTtcbiAgVW5pcXVlSURHZW5lcmV0b3IubGFzdElEKys7XG4gIHJldHVybiBvYmoudW5pcXVlSUQ7XG59XG5cblVuaXF1ZUlER2VuZXJldG9yLmdldFN0cmluZyA9IGZ1bmN0aW9uIChpZCkge1xuICBpZiAoaWQgPT0gbnVsbClcbiAgICBpZCA9IFVuaXF1ZUlER2VuZXJldG9yLmxhc3RJRDtcbiAgcmV0dXJuIFwiT2JqZWN0I1wiICsgaWQgKyBcIlwiO1xufVxuXG5VbmlxdWVJREdlbmVyZXRvci5pc1ByaW1pdGl2ZSA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgYXJnO1xuICByZXR1cm4gYXJnID09IG51bGwgfHwgKHR5cGUgIT0gXCJvYmplY3RcIiAmJiB0eXBlICE9IFwiZnVuY3Rpb25cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pcXVlSURHZW5lcmV0b3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBEaW1lbnNpb25EID0gcmVxdWlyZSgnLi9EaW1lbnNpb25EJyk7XG52YXIgSGFzaE1hcCA9IHJlcXVpcmUoJy4vSGFzaE1hcCcpO1xudmFyIEhhc2hTZXQgPSByZXF1aXJlKCcuL0hhc2hTZXQnKTtcbnZhciBJR2VvbWV0cnkgPSByZXF1aXJlKCcuL0lHZW9tZXRyeScpO1xudmFyIElNYXRoID0gcmVxdWlyZSgnLi9JTWF0aCcpO1xudmFyIEludGVnZXIgPSByZXF1aXJlKCcuL0ludGVnZXInKTtcbnZhciBQb2ludCA9IHJlcXVpcmUoJy4vUG9pbnQnKTtcbnZhciBQb2ludEQgPSByZXF1aXJlKCcuL1BvaW50RCcpO1xudmFyIFJhbmRvbVNlZWQgPSByZXF1aXJlKCcuL1JhbmRvbVNlZWQnKTtcbnZhciBSZWN0YW5nbGVEID0gcmVxdWlyZSgnLi9SZWN0YW5nbGVEJyk7XG52YXIgVHJhbnNmb3JtID0gcmVxdWlyZSgnLi9UcmFuc2Zvcm0nKTtcbnZhciBVbmlxdWVJREdlbmVyZXRvciA9IHJlcXVpcmUoJy4vVW5pcXVlSURHZW5lcmV0b3InKTtcbnZhciBMR3JhcGhPYmplY3QgPSByZXF1aXJlKCcuL0xHcmFwaE9iamVjdCcpO1xudmFyIExHcmFwaCA9IHJlcXVpcmUoJy4vTEdyYXBoJyk7XG52YXIgTEVkZ2UgPSByZXF1aXJlKCcuL0xFZGdlJyk7XG52YXIgTEdyYXBoTWFuYWdlciA9IHJlcXVpcmUoJy4vTEdyYXBoTWFuYWdlcicpO1xudmFyIExOb2RlID0gcmVxdWlyZSgnLi9MTm9kZScpO1xudmFyIExheW91dCA9IHJlcXVpcmUoJy4vTGF5b3V0Jyk7XG52YXIgTGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9MYXlvdXRDb25zdGFudHMnKTtcbnZhciBGRExheW91dCA9IHJlcXVpcmUoJy4vRkRMYXlvdXQnKTtcbnZhciBGRExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vRkRMYXlvdXRDb25zdGFudHMnKTtcbnZhciBGRExheW91dEVkZ2UgPSByZXF1aXJlKCcuL0ZETGF5b3V0RWRnZScpO1xudmFyIEZETGF5b3V0Tm9kZSA9IHJlcXVpcmUoJy4vRkRMYXlvdXROb2RlJyk7XG52YXIgQ29TRUNvbnN0YW50cyA9IHJlcXVpcmUoJy4vQ29TRUNvbnN0YW50cycpO1xudmFyIENvU0VFZGdlID0gcmVxdWlyZSgnLi9Db1NFRWRnZScpO1xudmFyIENvU0VHcmFwaCA9IHJlcXVpcmUoJy4vQ29TRUdyYXBoJyk7XG52YXIgQ29TRUdyYXBoTWFuYWdlciA9IHJlcXVpcmUoJy4vQ29TRUdyYXBoTWFuYWdlcicpO1xudmFyIENvU0VMYXlvdXQgPSByZXF1aXJlKCcuL0NvU0VMYXlvdXQnKTtcbnZhciBDb1NFTm9kZSA9IHJlcXVpcmUoJy4vQ29TRU5vZGUnKTtcblxudmFyIGRlZmF1bHRzID0ge1xuICAvLyBDYWxsZWQgb24gYGxheW91dHJlYWR5YFxuICByZWFkeTogZnVuY3Rpb24gKCkge1xuICB9LFxuICAvLyBDYWxsZWQgb24gYGxheW91dHN0b3BgXG4gIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgfSxcbiAgLy8gaW5jbHVkZSBsYWJlbHMgaW4gbm9kZSBkaW1lbnNpb25zXG4gIG5vZGVEaW1lbnNpb25zSW5jbHVkZUxhYmVsczogZmFsc2UsXG4gIC8vIG51bWJlciBvZiB0aWNrcyBwZXIgZnJhbWU7IGhpZ2hlciBpcyBmYXN0ZXIgYnV0IG1vcmUgamVya3lcbiAgcmVmcmVzaDogMzAsXG4gIC8vIFdoZXRoZXIgdG8gZml0IHRoZSBuZXR3b3JrIHZpZXcgYWZ0ZXIgd2hlbiBkb25lXG4gIGZpdDogdHJ1ZSxcbiAgLy8gUGFkZGluZyBvbiBmaXRcbiAgcGFkZGluZzogMTAsXG4gIC8vIFdoZXRoZXIgdG8gZW5hYmxlIGluY3JlbWVudGFsIG1vZGVcbiAgcmFuZG9taXplOiB0cnVlLFxuICAvLyBOb2RlIHJlcHVsc2lvbiAobm9uIG92ZXJsYXBwaW5nKSBtdWx0aXBsaWVyXG4gIG5vZGVSZXB1bHNpb246IDQ1MDAsXG4gIC8vIElkZWFsIGVkZ2UgKG5vbiBuZXN0ZWQpIGxlbmd0aFxuICBpZGVhbEVkZ2VMZW5ndGg6IDUwLFxuICAvLyBEaXZpc29yIHRvIGNvbXB1dGUgZWRnZSBmb3JjZXNcbiAgZWRnZUVsYXN0aWNpdHk6IDAuNDUsXG4gIC8vIE5lc3RpbmcgZmFjdG9yIChtdWx0aXBsaWVyKSB0byBjb21wdXRlIGlkZWFsIGVkZ2UgbGVuZ3RoIGZvciBuZXN0ZWQgZWRnZXNcbiAgbmVzdGluZ0ZhY3RvcjogMC4xLFxuICAvLyBHcmF2aXR5IGZvcmNlIChjb25zdGFudClcbiAgZ3Jhdml0eTogMC4yNSxcbiAgLy8gTWF4aW11bSBudW1iZXIgb2YgaXRlcmF0aW9ucyB0byBwZXJmb3JtXG4gIG51bUl0ZXI6IDI1MDAsXG4gIC8vIEZvciBlbmFibGluZyB0aWxpbmdcbiAgdGlsZTogdHJ1ZSxcbiAgLy8gVHlwZSBvZiBsYXlvdXQgYW5pbWF0aW9uLiBUaGUgb3B0aW9uIHNldCBpcyB7J2R1cmluZycsICdlbmQnLCBmYWxzZX1cbiAgYW5pbWF0ZTogJ2VuZCcsXG4gIC8vIER1cmF0aW9uIGZvciBhbmltYXRlOmVuZFxuICBhbmltYXRpb25EdXJhdGlvbjogNTAwLFxuICAvLyBSZXByZXNlbnRzIHRoZSBhbW91bnQgb2YgdGhlIHZlcnRpY2FsIHNwYWNlIHRvIHB1dCBiZXR3ZWVuIHRoZSB6ZXJvIGRlZ3JlZSBtZW1iZXJzIGR1cmluZyB0aGUgdGlsaW5nIG9wZXJhdGlvbihjYW4gYWxzbyBiZSBhIGZ1bmN0aW9uKVxuICB0aWxpbmdQYWRkaW5nVmVydGljYWw6IDEwLFxuICAvLyBSZXByZXNlbnRzIHRoZSBhbW91bnQgb2YgdGhlIGhvcml6b250YWwgc3BhY2UgdG8gcHV0IGJldHdlZW4gdGhlIHplcm8gZGVncmVlIG1lbWJlcnMgZHVyaW5nIHRoZSB0aWxpbmcgb3BlcmF0aW9uKGNhbiBhbHNvIGJlIGEgZnVuY3Rpb24pXG4gIHRpbGluZ1BhZGRpbmdIb3Jpem9udGFsOiAxMCxcbiAgLy8gR3Jhdml0eSByYW5nZSAoY29uc3RhbnQpIGZvciBjb21wb3VuZHNcbiAgZ3Jhdml0eVJhbmdlQ29tcG91bmQ6IDEuNSxcbiAgLy8gR3Jhdml0eSBmb3JjZSAoY29uc3RhbnQpIGZvciBjb21wb3VuZHNcbiAgZ3Jhdml0eUNvbXBvdW5kOiAxLjAsXG4gIC8vIEdyYXZpdHkgcmFuZ2UgKGNvbnN0YW50KVxuICBncmF2aXR5UmFuZ2U6IDMuOCxcbiAgLy8gSW5pdGlhbCBjb29saW5nIGZhY3RvciBmb3IgaW5jcmVtZW50YWwgbGF5b3V0XG4gIGluaXRpYWxFbmVyZ3lPbkluY3JlbWVudGFsOiAwLjVcbn07XG5cbmZ1bmN0aW9uIGV4dGVuZChkZWZhdWx0cywgb3B0aW9ucykge1xuICB2YXIgb2JqID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBkZWZhdWx0cykge1xuICAgIG9ialtpXSA9IGRlZmF1bHRzW2ldO1xuICB9XG5cbiAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgb2JqW2ldID0gb3B0aW9uc1tpXTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG5mdW5jdGlvbiBfQ29TRUxheW91dChfb3B0aW9ucykge1xuICB0aGlzLm9wdGlvbnMgPSBleHRlbmQoZGVmYXVsdHMsIF9vcHRpb25zKTtcbiAgZ2V0VXNlck9wdGlvbnModGhpcy5vcHRpb25zKTtcbn1cblxudmFyIGdldFVzZXJPcHRpb25zID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMubm9kZVJlcHVsc2lvbiAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEggPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX1JFUFVMU0lPTl9TVFJFTkdUSCA9IG9wdGlvbnMubm9kZVJlcHVsc2lvbjtcbiAgaWYgKG9wdGlvbnMuaWRlYWxFZGdlTGVuZ3RoICE9IG51bGwpXG4gICAgQ29TRUNvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCA9IG9wdGlvbnMuaWRlYWxFZGdlTGVuZ3RoO1xuICBpZiAob3B0aW9ucy5lZGdlRWxhc3RpY2l0eSAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9TUFJJTkdfU1RSRU5HVEggPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX1NQUklOR19TVFJFTkdUSCA9IG9wdGlvbnMuZWRnZUVsYXN0aWNpdHk7XG4gIGlmIChvcHRpb25zLm5lc3RpbmdGYWN0b3IgIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLlBFUl9MRVZFTF9JREVBTF9FREdFX0xFTkdUSF9GQUNUT1IgPSBGRExheW91dENvbnN0YW50cy5QRVJfTEVWRUxfSURFQUxfRURHRV9MRU5HVEhfRkFDVE9SID0gb3B0aW9ucy5uZXN0aW5nRmFjdG9yO1xuICBpZiAob3B0aW9ucy5ncmF2aXR5ICE9IG51bGwpXG4gICAgQ29TRUNvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfU1RSRU5HVEggPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfU1RSRU5HVEggPSBvcHRpb25zLmdyYXZpdHk7XG4gIGlmIChvcHRpb25zLm51bUl0ZXIgIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLk1BWF9JVEVSQVRJT05TID0gRkRMYXlvdXRDb25zdGFudHMuTUFYX0lURVJBVElPTlMgPSBvcHRpb25zLm51bUl0ZXI7XG4gIGlmIChvcHRpb25zLmdyYXZpdHlSYW5nZSAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9SQU5HRV9GQUNUT1IgPSBvcHRpb25zLmdyYXZpdHlSYW5nZTtcbiAgaWYob3B0aW9ucy5ncmF2aXR5Q29tcG91bmQgIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9TVFJFTkdUSCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9TVFJFTkdUSCA9IG9wdGlvbnMuZ3Jhdml0eUNvbXBvdW5kO1xuICBpZihvcHRpb25zLmdyYXZpdHlSYW5nZUNvbXBvdW5kICE9IG51bGwpXG4gICAgQ29TRUNvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfUkFOR0VfRkFDVE9SID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiA9IG9wdGlvbnMuZ3Jhdml0eVJhbmdlQ29tcG91bmQ7XG4gIGlmIChvcHRpb25zLmluaXRpYWxFbmVyZ3lPbkluY3JlbWVudGFsICE9IG51bGwpXG4gICAgQ29TRUNvbnN0YW50cy5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCA9IG9wdGlvbnMuaW5pdGlhbEVuZXJneU9uSW5jcmVtZW50YWw7XG5cbiAgQ29TRUNvbnN0YW50cy5OT0RFX0RJTUVOU0lPTlNfSU5DTFVERV9MQUJFTFMgPSBGRExheW91dENvbnN0YW50cy5OT0RFX0RJTUVOU0lPTlNfSU5DTFVERV9MQUJFTFMgPSBMYXlvdXRDb25zdGFudHMuTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTID0gb3B0aW9ucy5ub2RlRGltZW5zaW9uc0luY2x1ZGVMYWJlbHM7XG4gIENvU0VDb25zdGFudHMuREVGQVVMVF9JTkNSRU1FTlRBTCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUwgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9JTkNSRU1FTlRBTCA9XG4gICAgICAgICAgIShvcHRpb25zLnJhbmRvbWl6ZSk7XG4gIENvU0VDb25zdGFudHMuQU5JTUFURSA9IEZETGF5b3V0Q29uc3RhbnRzLkFOSU1BVEUgPSBMYXlvdXRDb25zdGFudHMuQU5JTUFURSA9IG9wdGlvbnMuYW5pbWF0ZTtcbiAgQ29TRUNvbnN0YW50cy5USUxFID0gb3B0aW9ucy50aWxlO1xuICBDb1NFQ29uc3RhbnRzLlRJTElOR19QQURESU5HX1ZFUlRJQ0FMID0gXG4gICAgICAgICAgdHlwZW9mIG9wdGlvbnMudGlsaW5nUGFkZGluZ1ZlcnRpY2FsID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy50aWxpbmdQYWRkaW5nVmVydGljYWwuY2FsbCgpIDogb3B0aW9ucy50aWxpbmdQYWRkaW5nVmVydGljYWw7XG4gIENvU0VDb25zdGFudHMuVElMSU5HX1BBRERJTkdfSE9SSVpPTlRBTCA9IFxuICAgICAgICAgIHR5cGVvZiBvcHRpb25zLnRpbGluZ1BhZGRpbmdIb3Jpem9udGFsID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy50aWxpbmdQYWRkaW5nSG9yaXpvbnRhbC5jYWxsKCkgOiBvcHRpb25zLnRpbGluZ1BhZGRpbmdIb3Jpem9udGFsO1xufTtcblxuX0NvU0VMYXlvdXQucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlYWR5O1xuICB2YXIgZnJhbWVJZDtcbiAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gIHZhciBpZFRvTE5vZGUgPSB0aGlzLmlkVG9MTm9kZSA9IHt9O1xuICB2YXIgbGF5b3V0ID0gdGhpcy5sYXlvdXQgPSBuZXcgQ29TRUxheW91dCgpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIFxuICBzZWxmLnN0b3BwZWQgPSBmYWxzZTtcblxuICB0aGlzLmN5ID0gdGhpcy5vcHRpb25zLmN5O1xuXG4gIHRoaXMuY3kudHJpZ2dlcih7IHR5cGU6ICdsYXlvdXRzdGFydCcsIGxheW91dDogdGhpcyB9KTtcblxuICB2YXIgZ20gPSBsYXlvdXQubmV3R3JhcGhNYW5hZ2VyKCk7XG4gIHRoaXMuZ20gPSBnbTtcblxuICB2YXIgbm9kZXMgPSB0aGlzLm9wdGlvbnMuZWxlcy5ub2RlcygpO1xuICB2YXIgZWRnZXMgPSB0aGlzLm9wdGlvbnMuZWxlcy5lZGdlcygpO1xuXG4gIHRoaXMucm9vdCA9IGdtLmFkZFJvb3QoKTtcbiAgdGhpcy5wcm9jZXNzQ2hpbGRyZW5MaXN0KHRoaXMucm9vdCwgdGhpcy5nZXRUb3BNb3N0Tm9kZXMobm9kZXMpLCBsYXlvdXQpO1xuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlZGdlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBlZGdlID0gZWRnZXNbaV07XG4gICAgdmFyIHNvdXJjZU5vZGUgPSB0aGlzLmlkVG9MTm9kZVtlZGdlLmRhdGEoXCJzb3VyY2VcIildO1xuICAgIHZhciB0YXJnZXROb2RlID0gdGhpcy5pZFRvTE5vZGVbZWRnZS5kYXRhKFwidGFyZ2V0XCIpXTtcbiAgICBpZihzb3VyY2VOb2RlLmdldEVkZ2VzQmV0d2Vlbih0YXJnZXROb2RlKS5sZW5ndGggPT0gMCl7XG4gICAgICB2YXIgZTEgPSBnbS5hZGQobGF5b3V0Lm5ld0VkZ2UoKSwgc291cmNlTm9kZSwgdGFyZ2V0Tm9kZSk7XG4gICAgICBlMS5pZCA9IGVkZ2UuaWQoKTtcbiAgICB9XG4gIH1cbiAgXG4gICB2YXIgZ2V0UG9zaXRpb25zID0gZnVuY3Rpb24oZWxlLCBpKXtcbiAgICBpZih0eXBlb2YgZWxlID09PSBcIm51bWJlclwiKSB7XG4gICAgICBlbGUgPSBpO1xuICAgIH1cbiAgICB2YXIgdGhlSWQgPSBlbGUuZGF0YSgnaWQnKTtcbiAgICB2YXIgbE5vZGUgPSBzZWxmLmlkVG9MTm9kZVt0aGVJZF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogbE5vZGUuZ2V0UmVjdCgpLmdldENlbnRlclgoKSxcbiAgICAgIHk6IGxOb2RlLmdldFJlY3QoKS5nZXRDZW50ZXJZKClcbiAgICB9O1xuICB9O1xuICBcbiAgLypcbiAgICogUmVwb3NpdGlvbiBub2RlcyBpbiBpdGVyYXRpb25zIGFuaW1hdGVkbHlcbiAgICovXG4gIHZhciBpdGVyYXRlQW5pbWF0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVGhpZ3MgdG8gcGVyZm9ybSBhZnRlciBub2RlcyBhcmUgcmVwb3NpdGlvbmVkIG9uIHNjcmVlblxuICAgIHZhciBhZnRlclJlcG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChvcHRpb25zLmZpdCkge1xuICAgICAgICBvcHRpb25zLmN5LmZpdChvcHRpb25zLmVsZXMubm9kZXMoKSwgb3B0aW9ucy5wYWRkaW5nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFyZWFkeSkge1xuICAgICAgICByZWFkeSA9IHRydWU7XG4gICAgICAgIHNlbGYuY3kub25lKCdsYXlvdXRyZWFkeScsIG9wdGlvbnMucmVhZHkpO1xuICAgICAgICBzZWxmLmN5LnRyaWdnZXIoe3R5cGU6ICdsYXlvdXRyZWFkeScsIGxheW91dDogc2VsZn0pO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgdmFyIHRpY2tzUGVyRnJhbWUgPSBzZWxmLm9wdGlvbnMucmVmcmVzaDtcbiAgICB2YXIgaXNEb25lO1xuXG4gICAgZm9yKCB2YXIgaSA9IDA7IGkgPCB0aWNrc1BlckZyYW1lICYmICFpc0RvbmU7IGkrKyApe1xuICAgICAgaXNEb25lID0gc2VsZi5zdG9wcGVkIHx8IHNlbGYubGF5b3V0LnRpY2soKTtcbiAgICB9XG4gICAgXG4gICAgLy8gSWYgbGF5b3V0IGlzIGRvbmVcbiAgICBpZiAoaXNEb25lKSB7XG4gICAgICAvLyBJZiB0aGUgbGF5b3V0IGlzIG5vdCBhIHN1YmxheW91dCBhbmQgaXQgaXMgc3VjY2Vzc2Z1bCBwZXJmb3JtIHBvc3QgbGF5b3V0LlxuICAgICAgaWYgKGxheW91dC5jaGVja0xheW91dFN1Y2Nlc3MoKSAmJiAhbGF5b3V0LmlzU3ViTGF5b3V0KSB7XG4gICAgICAgIGxheW91dC5kb1Bvc3RMYXlvdXQoKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gSWYgbGF5b3V0IGhhcyBhIHRpbGluZ1Bvc3RMYXlvdXQgZnVuY3Rpb24gcHJvcGVydHkgY2FsbCBpdC5cbiAgICAgIGlmIChsYXlvdXQudGlsaW5nUG9zdExheW91dCkge1xuICAgICAgICBsYXlvdXQudGlsaW5nUG9zdExheW91dCgpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBsYXlvdXQuaXNMYXlvdXRGaW5pc2hlZCA9IHRydWU7XG4gICAgICBcbiAgICAgIHNlbGYub3B0aW9ucy5lbGVzLm5vZGVzKCkucG9zaXRpb25zKGdldFBvc2l0aW9ucyk7XG4gICAgICBcbiAgICAgIGFmdGVyUmVwb3NpdGlvbigpO1xuICAgICAgXG4gICAgICAvLyB0cmlnZ2VyIGxheW91dHN0b3Agd2hlbiB0aGUgbGF5b3V0IHN0b3BzIChlLmcuIGZpbmlzaGVzKVxuICAgICAgc2VsZi5jeS5vbmUoJ2xheW91dHN0b3AnLCBzZWxmLm9wdGlvbnMuc3RvcCk7XG4gICAgICBzZWxmLmN5LnRyaWdnZXIoeyB0eXBlOiAnbGF5b3V0c3RvcCcsIGxheW91dDogc2VsZiB9KTtcblxuICAgICAgaWYgKGZyYW1lSWQpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWVJZCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHJlYWR5ID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHZhciBhbmltYXRpb25EYXRhID0gc2VsZi5sYXlvdXQuZ2V0UG9zaXRpb25zRGF0YSgpOyAvLyBHZXQgcG9zaXRpb25zIG9mIGxheW91dCBub2RlcyBub3RlIHRoYXQgYWxsIG5vZGVzIG1heSBub3QgYmUgbGF5b3V0IG5vZGVzIGJlY2F1c2Ugb2YgdGlsaW5nXG4gICAgXG4gICAgLy8gUG9zaXRpb24gbm9kZXMsIGZvciB0aGUgbm9kZXMgd2hvc2UgaWQgZG9lcyBub3QgaW5jbHVkZWQgaW4gZGF0YSAoYmVjYXVzZSB0aGV5IGFyZSByZW1vdmVkIGZyb20gdGhlaXIgcGFyZW50cyBhbmQgaW5jbHVkZWQgaW4gZHVtbXkgY29tcG91bmRzKVxuICAgIC8vIHVzZSBwb3NpdGlvbiBvZiB0aGVpciBhbmNlc3RvcnMgb3IgZHVtbXkgYW5jZXN0b3JzXG4gICAgb3B0aW9ucy5lbGVzLm5vZGVzKCkucG9zaXRpb25zKGZ1bmN0aW9uIChlbGUsIGkpIHtcbiAgICAgIGlmICh0eXBlb2YgZWxlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGVsZSA9IGk7XG4gICAgICB9XG4gICAgICB2YXIgdGhlSWQgPSBlbGUuaWQoKTtcbiAgICAgIHZhciBwTm9kZSA9IGFuaW1hdGlvbkRhdGFbdGhlSWRdO1xuICAgICAgdmFyIHRlbXAgPSBlbGU7XG4gICAgICAvLyBJZiBwTm9kZSBpcyB1bmRlZmluZWQgc2VhcmNoIHVudGlsIGZpbmRpbmcgcG9zaXRpb24gZGF0YSBvZiBpdHMgZmlyc3QgYW5jZXN0b3IgKEl0IG1heSBiZSBkdW1teSBhcyB3ZWxsKVxuICAgICAgd2hpbGUgKHBOb2RlID09IG51bGwpIHtcbiAgICAgICAgcE5vZGUgPSBhbmltYXRpb25EYXRhW3RlbXAuZGF0YSgncGFyZW50JyldIHx8IGFuaW1hdGlvbkRhdGFbJ0R1bW15Q29tcG91bmRfJyArIHRlbXAuZGF0YSgncGFyZW50JyldO1xuICAgICAgICBhbmltYXRpb25EYXRhW3RoZUlkXSA9IHBOb2RlO1xuICAgICAgICB0ZW1wID0gdGVtcC5wYXJlbnQoKVswXTtcbiAgICAgICAgaWYodGVtcCA9PSB1bmRlZmluZWQpe1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihwTm9kZSAhPSBudWxsKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB4OiBwTm9kZS54LFxuICAgICAgICAgIHk6IHBOb2RlLnlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeDogZWxlLngsXG4gICAgICAgICAgeTogZWxlLnlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGFmdGVyUmVwb3NpdGlvbigpO1xuXG4gICAgZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShpdGVyYXRlQW5pbWF0ZWQpO1xuICB9O1xuICBcbiAgLypcbiAgKiBMaXN0ZW4gJ2xheW91dHN0YXJ0ZWQnIGV2ZW50IGFuZCBzdGFydCBhbmltYXRlZCBpdGVyYXRpb24gaWYgYW5pbWF0ZSBvcHRpb24gaXMgJ2R1cmluZydcbiAgKi9cbiAgbGF5b3V0LmFkZExpc3RlbmVyKCdsYXlvdXRzdGFydGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGlmIChzZWxmLm9wdGlvbnMuYW5pbWF0ZSA9PT0gJ2R1cmluZycpIHtcbiAgICAgIGZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaXRlcmF0ZUFuaW1hdGVkKTtcbiAgICB9XG4gIH0pO1xuICBcbiAgbGF5b3V0LnJ1bkxheW91dCgpOyAvLyBSdW4gY29zZSBsYXlvdXRcbiAgXG4gIC8qXG4gICAqIElmIGFuaW1hdGUgb3B0aW9uIGlzIG5vdCAnZHVyaW5nJyAoJ2VuZCcgb3IgZmFsc2UpIHBlcmZvcm0gdGhlc2UgaGVyZSAoSWYgaXQgaXMgJ2R1cmluZycgc2ltaWxhciB0aGluZ3MgYXJlIGFscmVhZHkgcGVyZm9ybWVkKVxuICAgKi9cbiAgaWYodGhpcy5vcHRpb25zLmFuaW1hdGUgIT09IFwiZHVyaW5nXCIpe1xuICAgIHNlbGYub3B0aW9ucy5lbGVzLm5vZGVzKCkubm90KFwiOnBhcmVudFwiKS5sYXlvdXRQb3NpdGlvbnMoc2VsZiwgc2VsZi5vcHRpb25zLCBnZXRQb3NpdGlvbnMpOyAvLyBVc2UgbGF5b3V0IHBvc2l0aW9ucyB0byByZXBvc2l0aW9uIHRoZSBub2RlcyBpdCBjb25zaWRlcnMgdGhlIG9wdGlvbnMgcGFyYW1ldGVyXG4gICAgcmVhZHkgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzOyAvLyBjaGFpbmluZ1xufTtcblxuLy9HZXQgdGhlIHRvcCBtb3N0IG9uZXMgb2YgYSBsaXN0IG9mIG5vZGVzXG5fQ29TRUxheW91dC5wcm90b3R5cGUuZ2V0VG9wTW9zdE5vZGVzID0gZnVuY3Rpb24obm9kZXMpIHtcbiAgdmFyIG5vZGVzTWFwID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5vZGVzTWFwW25vZGVzW2ldLmlkKCldID0gdHJ1ZTtcbiAgfVxuICB2YXIgcm9vdHMgPSBub2Rlcy5maWx0ZXIoZnVuY3Rpb24gKGVsZSwgaSkge1xuICAgICAgaWYodHlwZW9mIGVsZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBlbGUgPSBpO1xuICAgICAgfVxuICAgICAgdmFyIHBhcmVudCA9IGVsZS5wYXJlbnQoKVswXTtcbiAgICAgIHdoaWxlKHBhcmVudCAhPSBudWxsKXtcbiAgICAgICAgaWYobm9kZXNNYXBbcGFyZW50LmlkKCldKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudCgpWzBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiByb290cztcbn07XG5cbl9Db1NFTGF5b3V0LnByb3RvdHlwZS5wcm9jZXNzQ2hpbGRyZW5MaXN0ID0gZnVuY3Rpb24gKHBhcmVudCwgY2hpbGRyZW4sIGxheW91dCkge1xuICB2YXIgc2l6ZSA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICB2YXIgdGhlQ2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICB2YXIgY2hpbGRyZW5fb2ZfY2hpbGRyZW4gPSB0aGVDaGlsZC5jaGlsZHJlbigpO1xuICAgIHZhciB0aGVOb2RlOyAgICBcblxuICAgIHZhciBkaW1lbnNpb25zID0gdGhlQ2hpbGQubGF5b3V0RGltZW5zaW9ucyh7XG4gICAgICBub2RlRGltZW5zaW9uc0luY2x1ZGVMYWJlbHM6IHRoaXMub3B0aW9ucy5ub2RlRGltZW5zaW9uc0luY2x1ZGVMYWJlbHNcbiAgICB9KTtcblxuICAgIGlmICh0aGVDaGlsZC5vdXRlcldpZHRoKCkgIT0gbnVsbFxuICAgICAgICAgICAgJiYgdGhlQ2hpbGQub3V0ZXJIZWlnaHQoKSAhPSBudWxsKSB7XG4gICAgICB0aGVOb2RlID0gcGFyZW50LmFkZChuZXcgQ29TRU5vZGUobGF5b3V0LmdyYXBoTWFuYWdlcixcbiAgICAgICAgICAgICAgbmV3IFBvaW50RCh0aGVDaGlsZC5wb3NpdGlvbigneCcpIC0gZGltZW5zaW9ucy53IC8gMiwgdGhlQ2hpbGQucG9zaXRpb24oJ3knKSAtIGRpbWVuc2lvbnMuaCAvIDIpLFxuICAgICAgICAgICAgICBuZXcgRGltZW5zaW9uRChwYXJzZUZsb2F0KGRpbWVuc2lvbnMudyksIHBhcnNlRmxvYXQoZGltZW5zaW9ucy5oKSkpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGVOb2RlID0gcGFyZW50LmFkZChuZXcgQ29TRU5vZGUodGhpcy5ncmFwaE1hbmFnZXIpKTtcbiAgICB9XG4gICAgLy8gQXR0YWNoIGlkIHRvIHRoZSBsYXlvdXQgbm9kZVxuICAgIHRoZU5vZGUuaWQgPSB0aGVDaGlsZC5kYXRhKFwiaWRcIik7XG4gICAgLy8gQXR0YWNoIHRoZSBwYWRkaW5ncyBvZiBjeSBub2RlIHRvIGxheW91dCBub2RlXG4gICAgdGhlTm9kZS5wYWRkaW5nTGVmdCA9IHBhcnNlSW50KCB0aGVDaGlsZC5jc3MoJ3BhZGRpbmcnKSApO1xuICAgIHRoZU5vZGUucGFkZGluZ1RvcCA9IHBhcnNlSW50KCB0aGVDaGlsZC5jc3MoJ3BhZGRpbmcnKSApO1xuICAgIHRoZU5vZGUucGFkZGluZ1JpZ2h0ID0gcGFyc2VJbnQoIHRoZUNoaWxkLmNzcygncGFkZGluZycpICk7XG4gICAgdGhlTm9kZS5wYWRkaW5nQm90dG9tID0gcGFyc2VJbnQoIHRoZUNoaWxkLmNzcygncGFkZGluZycpICk7XG4gICAgXG4gICAgLy9BdHRhY2ggdGhlIGxhYmVsIHByb3BlcnRpZXMgdG8gY29tcG91bmQgaWYgbGFiZWxzIHdpbGwgYmUgaW5jbHVkZWQgaW4gbm9kZSBkaW1lbnNpb25zICBcbiAgICBpZih0aGlzLm9wdGlvbnMubm9kZURpbWVuc2lvbnNJbmNsdWRlTGFiZWxzKXtcbiAgICAgIGlmKHRoZUNoaWxkLmlzUGFyZW50KCkpe1xuICAgICAgICAgIHZhciBsYWJlbFdpZHRoID0gdGhlQ2hpbGQuYm91bmRpbmdCb3goeyBpbmNsdWRlTGFiZWxzOiB0cnVlLCBpbmNsdWRlTm9kZXM6IGZhbHNlIH0pLnc7ICAgICAgICAgIFxuICAgICAgICAgIHZhciBsYWJlbEhlaWdodCA9IHRoZUNoaWxkLmJvdW5kaW5nQm94KHsgaW5jbHVkZUxhYmVsczogdHJ1ZSwgaW5jbHVkZU5vZGVzOiBmYWxzZSB9KS5oO1xuICAgICAgICAgIHZhciBsYWJlbFBvcyA9IHRoZUNoaWxkLmNzcyhcInRleHQtaGFsaWduXCIpO1xuICAgICAgICAgIHRoZU5vZGUubGFiZWxXaWR0aCA9IGxhYmVsV2lkdGg7XG4gICAgICAgICAgdGhlTm9kZS5sYWJlbEhlaWdodCA9IGxhYmVsSGVpZ2h0O1xuICAgICAgICAgIHRoZU5vZGUubGFiZWxQb3MgPSBsYWJlbFBvcztcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gTWFwIHRoZSBsYXlvdXQgbm9kZVxuICAgIHRoaXMuaWRUb0xOb2RlW3RoZUNoaWxkLmRhdGEoXCJpZFwiKV0gPSB0aGVOb2RlO1xuXG4gICAgaWYgKGlzTmFOKHRoZU5vZGUucmVjdC54KSkge1xuICAgICAgdGhlTm9kZS5yZWN0LnggPSAwO1xuICAgIH1cblxuICAgIGlmIChpc05hTih0aGVOb2RlLnJlY3QueSkpIHtcbiAgICAgIHRoZU5vZGUucmVjdC55ID0gMDtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGRyZW5fb2ZfY2hpbGRyZW4gIT0gbnVsbCAmJiBjaGlsZHJlbl9vZl9jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgdGhlTmV3R3JhcGg7XG4gICAgICB0aGVOZXdHcmFwaCA9IGxheW91dC5nZXRHcmFwaE1hbmFnZXIoKS5hZGQobGF5b3V0Lm5ld0dyYXBoKCksIHRoZU5vZGUpO1xuICAgICAgdGhpcy5wcm9jZXNzQ2hpbGRyZW5MaXN0KHRoZU5ld0dyYXBoLCBjaGlsZHJlbl9vZl9jaGlsZHJlbiwgbGF5b3V0KTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQGJyaWVmIDogY2FsbGVkIG9uIGNvbnRpbnVvdXMgbGF5b3V0cyB0byBzdG9wIHRoZW0gYmVmb3JlIHRoZXkgZmluaXNoXG4gKi9cbl9Db1NFTGF5b3V0LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnN0b3BwZWQgPSB0cnVlO1xuXG4gIHJldHVybiB0aGlzOyAvLyBjaGFpbmluZ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXQoY3l0b3NjYXBlKSB7XG4gIHJldHVybiBfQ29TRUxheW91dDtcbn07XG4iLCJ2YXIgQ29TRU5vZGUgPSByZXF1aXJlKCcuLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dC9Db1NFTm9kZScpO1xudmFyIEZETGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvRkRMYXlvdXRDb25zdGFudHMnKTtcbnZhciBJTWF0aCA9IHJlcXVpcmUoJy4uL2Nvc2UtYmlsa2VudC9zcmMvTGF5b3V0L0lNYXRoJyk7XG5cbkNvU0VOb2RlLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIGxheW91dCA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldExheW91dCgpO1xuICB0aGlzLmRpc3BsYWNlbWVudFggPSBsYXlvdXQuY29vbGluZ0ZhY3RvciAqXG4gICAgICAgICAgKHRoaXMuc3ByaW5nRm9yY2VYICsgdGhpcy5yZXB1bHNpb25Gb3JjZVggKyB0aGlzLmdyYXZpdGF0aW9uRm9yY2VYKSAvIHRoaXMubm9PZkNoaWxkcmVuO1xuICB0aGlzLmRpc3BsYWNlbWVudFkgPSBsYXlvdXQuY29vbGluZ0ZhY3RvciAqXG4gICAgICAgICAgKHRoaXMuc3ByaW5nRm9yY2VZICsgdGhpcy5yZXB1bHNpb25Gb3JjZVkgKyB0aGlzLmdyYXZpdGF0aW9uRm9yY2VZKSAvIHRoaXMubm9PZkNoaWxkcmVuO1xuXG5cbiAgaWYgKE1hdGguYWJzKHRoaXMuZGlzcGxhY2VtZW50WCkgPiBsYXlvdXQuY29vbGluZ0ZhY3RvciAqIGxheW91dC5tYXhOb2RlRGlzcGxhY2VtZW50KVxuICB7XG4gICAgdGhpcy5kaXNwbGFjZW1lbnRYID0gbGF5b3V0LmNvb2xpbmdGYWN0b3IgKiBsYXlvdXQubWF4Tm9kZURpc3BsYWNlbWVudCAqXG4gICAgICAgICAgICBJTWF0aC5zaWduKHRoaXMuZGlzcGxhY2VtZW50WCk7XG4gIH1cblxuICBpZiAoTWF0aC5hYnModGhpcy5kaXNwbGFjZW1lbnRZKSA+IGxheW91dC5jb29saW5nRmFjdG9yICogbGF5b3V0Lm1heE5vZGVEaXNwbGFjZW1lbnQpXG4gIHtcbiAgICB0aGlzLmRpc3BsYWNlbWVudFkgPSBsYXlvdXQuY29vbGluZ0ZhY3RvciAqIGxheW91dC5tYXhOb2RlRGlzcGxhY2VtZW50ICpcbiAgICAgICAgICAgIElNYXRoLnNpZ24odGhpcy5kaXNwbGFjZW1lbnRZKTtcbiAgfVxuXG4gIGlmIChGRExheW91dENvbnN0YW50cy5FWENMVURFRF9OT0RFU1t0aGlzLmlkXSkge1xuICAgIHRoaXMuZGlzcGxhY2VtZW50WCAqPSBGRExheW91dENvbnN0YW50cy5leGNsdWRlZE5vZGVNb3ZlRmFjdG9yO1xuICAgIHRoaXMuZGlzcGxhY2VtZW50WSAqPSBGRExheW91dENvbnN0YW50cy5leGNsdWRlZE5vZGVNb3ZlRmFjdG9yO1xuICB9XG5cbiAgLy8gYSBzaW1wbGUgbm9kZSwganVzdCBtb3ZlIGl0XG4gIGlmICh0aGlzLmNoaWxkID09IG51bGwpXG4gIHtcbiAgICB0aGlzLm1vdmVCeSh0aGlzLmRpc3BsYWNlbWVudFgsIHRoaXMuZGlzcGxhY2VtZW50WSk7XG4gIH1cbiAgLy8gYW4gZW1wdHkgY29tcG91bmQgbm9kZSwgYWdhaW4ganVzdCBtb3ZlIGl0XG4gIGVsc2UgaWYgKHRoaXMuY2hpbGQuZ2V0Tm9kZXMoKS5sZW5ndGggPT0gMClcbiAge1xuICAgIHRoaXMubW92ZUJ5KHRoaXMuZGlzcGxhY2VtZW50WCwgdGhpcy5kaXNwbGFjZW1lbnRZKTtcbiAgfVxuICAvLyBub24tZW1wdHkgY29tcG91bmQgbm9kZSwgcHJvcG9nYXRlIG1vdmVtZW50IHRvIGNoaWxkcmVuIGFzIHdlbGxcbiAgZWxzZVxuICB7XG4gICAgdGhpcy5wcm9wb2dhdGVEaXNwbGFjZW1lbnRUb0NoaWxkcmVuKHRoaXMuZGlzcGxhY2VtZW50WCxcbiAgICAgICAgICAgIHRoaXMuZGlzcGxhY2VtZW50WSk7XG4gIH1cblxuICBsYXlvdXQudG90YWxEaXNwbGFjZW1lbnQgKz1cbiAgICAgICAgICBNYXRoLmFicyh0aGlzLmRpc3BsYWNlbWVudFgpICsgTWF0aC5hYnModGhpcy5kaXNwbGFjZW1lbnRZKTtcblxuICB0aGlzLnNwcmluZ0ZvcmNlWCA9IDA7XG4gIHRoaXMuc3ByaW5nRm9yY2VZID0gMDtcbiAgdGhpcy5yZXB1bHNpb25Gb3JjZVggPSAwO1xuICB0aGlzLnJlcHVsc2lvbkZvcmNlWSA9IDA7XG4gIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVggPSAwO1xuICB0aGlzLmdyYXZpdGF0aW9uRm9yY2VZID0gMDtcbiAgdGhpcy5kaXNwbGFjZW1lbnRYID0gMDtcbiAgdGhpcy5kaXNwbGFjZW1lbnRZID0gMDtcbn07XG4iLCJpbXBvcnQgJy4vY29zZS1iaWxrZW50LW1vZGlmaWNhdGlvbi5qcyc7XG5pbXBvcnQge2NyZWF0ZUhlYWRsZXNzSW5zdGFuY2UsIGFwcGx5QWdncmVnYXRlZExheW91dCwgYXBwbHlJbnRlckxheWVkTGF5b3V0LCBhcHBseUV4dGVuZGVkSW50ZXJMYXllZExheW91dCwgYXBwbHlJdGVyYXRpdmVMYXlvdXR9IGZyb20gJy4vbGF5b3V0cy5qcyc7XG5jb25zdCBnZXRMYXlvdXQgPSByZXF1aXJlKCcuLi9jb3NlLWJpbGtlbnQvc3JjL0xheW91dCcpO1xudmFyIEZETGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29zZS1iaWxrZW50L3NyYy9MYXlvdXQvRkRMYXlvdXRDb25zdGFudHMnKTtcblxuLy8gcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gb24gYSBjeXRvc2NhcGUgbGliIHJlZlxubGV0IHJlZ2lzdGVyID0gZnVuY3Rpb24oIGN5dG9zY2FwZSApe1xuXHRpZiggIWN5dG9zY2FwZSApeyByZXR1cm47IH0gLy8gY2FuJ3QgcmVnaXN0ZXIgaWYgY3l0b3NjYXBlIHVuc3BlY2lmaWVkXG5cblx0Y3JlYXRlSGVhZGxlc3NJbnN0YW5jZShjeXRvc2NhcGUpO1xuXG5cdGxldCBMYXlvdXQgPSBnZXRMYXlvdXQoY3l0b3NjYXBlKTtcblx0bGV0IG9yZ1Byb3RvdHlwZSA9IExheW91dC5wcm90b3R5cGU7XG5cblx0bGV0IGRlZmF1bHRzID0gbmV3IExheW91dCh7fSkub3B0aW9ucztcblxuXHRmdW5jdGlvbiBleHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpIHtcblx0XHR2YXIgb2JqID0ge307XG5cblx0XHRmb3IgKHZhciBpIGluIGRlZmF1bHRzKSB7XG5cdFx0XHRvYmpbaV0gPSBkZWZhdWx0c1tpXTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcblx0XHRcdG9ialtpXSA9IG9wdGlvbnNbaV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9iajtcblx0fTtcblxuXHRmdW5jdGlvbiBfQ29TRUxheW91dChfb3B0aW9ucykge1xuXHRcdHRoaXMub3B0aW9ucyA9IGV4dGVuZChkZWZhdWx0cywgX29wdGlvbnMpO1xuXHRcdG5ldyBMYXlvdXQoX29wdGlvbnMpO1xuXHRcdEZETGF5b3V0Q29uc3RhbnRzLmV4Y2x1ZGVkTm9kZU1vdmVGYWN0b3IgPSBfb3B0aW9ucy5leGNsdWRlZE5vZGVNb3ZlRmFjdG9yIHx8IDA7XG5cblx0XHRpZiAoX29wdGlvbnMuZXhjbHVkZWROb2Rlcykge1xuXHRcdFx0RkRMYXlvdXRDb25zdGFudHMuRVhDTFVERURfTk9ERVMgPSBfb3B0aW9ucy5leGNsdWRlZE5vZGVzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRGRExheW91dENvbnN0YW50cy5FWENMVURFRF9OT0RFUyA9IHt9O1xuXHRcdH1cblxuXHR9O1xuXG5cdF9Db1NFTGF5b3V0LnByb3RvdHlwZSA9IExheW91dC5wcm90b3R5cGU7XG5cblx0Y3l0b3NjYXBlKCAnbGF5b3V0JywgJ2N5dG9zY2FwZS5qcy1zeW5jaGVkJywgX0NvU0VMYXlvdXQpOyAvLyByZWdpc3RlciB3aXRoIGN5dG9zY2FwZS5qc1xuXHRjeXRvc2NhcGUoJ2NvcmUnLCAnc3luY2hlZExheW91dCcsIGZ1bmN0aW9uIChvcHRzKSB7XG5cdFx0bGV0IGFwaSA9IHt9O1xuXHRcdGFwaS5hcHBseUFnZ3JlZ2F0ZWRMYXlvdXQgPSBhcHBseUFnZ3JlZ2F0ZWRMYXlvdXQ7XG5cdFx0YXBpLmFwcGx5SW50ZXJMYXllZExheW91dCA9IGFwcGx5SW50ZXJMYXllZExheW91dDtcblx0XHRhcGkuYXBwbHlFeHRlbmRlZEludGVyTGF5ZWRMYXlvdXQgPSBhcHBseUV4dGVuZGVkSW50ZXJMYXllZExheW91dDtcblx0XHRhcGkuYXBwbHlJdGVyYXRpdmVMYXlvdXQgPSBhcHBseUl0ZXJhdGl2ZUxheW91dDtcblxuXHRcdHJldHVybiBhcGk7XG5cdH0pO1xufTtcblxuaWYoIHR5cGVvZiBjeXRvc2NhcGUgIT09ICd1bmRlZmluZWQnICl7IC8vIGV4cG9zZSB0byBnbG9iYWwgY3l0b3NjYXBlIChpLmUuIHdpbmRvdy5jeXRvc2NhcGUpXG5cdHJlZ2lzdGVyKCBjeXRvc2NhcGUgKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWdpc3RlcjtcbiIsInZhciBjeV9oZWFkbGVzczsgXG5cbnZhciBjcmVhdGVIZWFkbGVzc0luc3RhbmNlID0gZnVuY3Rpb24oY3l0b3NjYXBlKSB7XG5cdGN5X2hlYWRsZXNzID0gY3l0b3NjYXBlKHtcblx0XHRoZWFkbGVzczogdHJ1ZSxcblx0XHRzdHlsZUVuYWJsZWQ6IHRydWUsXG5cdH0pO1xufTtcblxudmFyIGFwcGx5QWdncmVnYXRlZExheW91dCA9IGZ1bmN0aW9uIChjeSwgb3RoZXJDeSkge1xuXHRsZXQgZWxlcyA9IGN5LmVsZW1lbnRzKCk7XG5cdGxldCBvdGhlckVsZXMgPSBvdGhlckN5LmVsZW1lbnRzKCk7XG5cdGxldCBhbGxfZWxlcyA9IGVsZXMudW5pb24ob3RoZXJFbGVzKTtcblx0bGV0IG9wdGlvbnMgPSB7bmFtZTogJ2N5dG9zY2FwZS5qcy1zeW5jaGVkJ307XG5cdFxuXHRjeV9oZWFkbGVzcy5lbGVtZW50cygpLnJlbW92ZSgpO1xuXHRjeV9oZWFkbGVzcy5hZGQoYWxsX2VsZXMpO1xuXHRjeV9oZWFkbGVzcy5sYXlvdXQob3B0aW9ucykucnVuKCk7XG5cblx0Y3lfaGVhZGxlc3Mub25lKFwibGF5b3V0c3RvcFwiLCBmdW5jdGlvbigpe1xuXHRcdGxldCBwb3MgPSB7fTtcblx0XHRjeV9oZWFkbGVzcy5ub2RlcygpLmZvckVhY2goZnVuY3Rpb24oZWxlLCBpKSB7XG5cdFx0XHRwb3NbZWxlLmlkKCldID0ge3g6ZWxlLnBvc2l0aW9uKFwieFwiKSwgeTogZWxlLnBvc2l0aW9uKFwieVwiKX07XG5cdFx0fSlcblxuXHRcdGN5Lm5vZGVzKCkucG9zaXRpb25zKGZ1bmN0aW9uKGVsZSwgaSkge1xuXHRcdFx0cmV0dXJuIHt4OiBwb3NbZWxlLmlkKCldLngsIHk6IHBvc1tlbGUuaWQoKV0ueX1cblx0XHR9KTtcblxuXHRcdG90aGVyQ3kubm9kZXMoKS5wb3NpdGlvbnMoZnVuY3Rpb24oZWxlLCBpKSB7XG5cdFx0XHRyZXR1cm4ge3g6IHBvc1tlbGUuaWQoKV0ueCwgeTogcG9zW2VsZS5pZCgpXS55fVxuXHRcdH0pO1xuXG5cdFx0Y3kudHJpZ2dlcihcInN5bmNoZWRMYXlvdXRTdG9wcGVkXCIpO1xuXHRcdG90aGVyQ3kudHJpZ2dlcihcInN5bmNoZWRMYXlvdXRTdG9wcGVkXCIpO1xuXG5cdH0pO1xufTtcblxubGV0IGFwcGx5SW50ZXJMYXllZExheW91dCA9IGZ1bmN0aW9uKGN5LCBvdGhlckN5LCBleGNsdWRlZE5vZGVNb3ZlRmFjdG9yKSB7XG5cdGxldCBlbGVzID0gY3kuZWxlbWVudHMoKTtcblx0bGV0IG90aGVyRWxlcyA9IG90aGVyQ3kuZWxlbWVudHMoKTtcblx0bGV0IGNvbW1vbkVsZXMgPSBlbGVzLmludGVyc2VjdGlvbihvdGhlckVsZXMpO1xuXG5cdGxldCBjb21tb25faWQgPSB7fTtcblxuXHRjb21tb25FbGVzLmZvckVhY2goZnVuY3Rpb24oZWxlLCBpKSB7XG5cdFx0Y29tbW9uX2lkW2VsZS5pZCgpXSA9IHRydWU7XG5cdH0pO1xuXG5cdGN5X2hlYWRsZXNzLmVsZW1lbnRzKCkucmVtb3ZlKCk7XG5cdGN5X2hlYWRsZXNzLmFkZChjb21tb25FbGVzKTtcblx0Y3lfaGVhZGxlc3MubGF5b3V0KHtuYW1lOiBcImN5dG9zY2FwZS5qcy1zeW5jaGVkXCIsIGV4Y2x1ZGVkTm9kZXM6IHt9fSkucnVuKCk7XG5cblx0Y3lfaGVhZGxlc3Mub25lKFwibGF5b3V0c3RvcFwiLCBmdW5jdGlvbigpe1xuXHRcdGxldCBwb3MgPSB7fTtcblx0XHRjeV9oZWFkbGVzcy5ub2RlcygpLmZvckVhY2goZnVuY3Rpb24oZWxlLCBpKSB7XG5cdFx0XHRwb3NbZWxlLmlkKCldID0ge3g6IGVsZS5wb3NpdGlvbihcInhcIiksIHk6IGVsZS5wb3NpdGlvbihcInlcIil9O1xuXHRcdH0pXG5cblx0XHRjeS5ub2RlcygpLnBvc2l0aW9ucyhmdW5jdGlvbihlbGUsIGkpe1xuXHRcdFx0aWYgKHBvc1tlbGUuaWQoKV0pIHtcblx0XHRcdFx0cmV0dXJuIHt4OiBwb3NbZWxlLmlkKCldLngsIHk6IHBvc1tlbGUuaWQoKV0ueX07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gZWxlLnBvc2l0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRvdGhlckN5Lm5vZGVzKCkucG9zaXRpb25zKGZ1bmN0aW9uKGVsZSwgaSl7XG5cdFx0XHRpZiAocG9zW2VsZS5pZCgpXSkge1xuXHRcdFx0XHRyZXR1cm4ge3g6IHBvc1tlbGUuaWQoKV0ueCwgeTogcG9zW2VsZS5pZCgpXS55fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBlbGUucG9zaXRpb24oKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGN5LmxheW91dCh7bmFtZTogXCJjeXRvc2NhcGUuanMtc3luY2hlZFwiLCAgdGlsZTogZmFsc2UsIHJhbmRvbWl6ZTogZmFsc2UsIGV4Y2x1ZGVkTm9kZXM6IHBvcywgZXhjbHVkZWROb2RlTW92ZUZhY3RvcjogZXhjbHVkZWROb2RlTW92ZUZhY3Rvcn0pLnJ1bigpO1xuXHRcdG90aGVyQ3kubGF5b3V0KHtuYW1lOiBcImN5dG9zY2FwZS5qcy1zeW5jaGVkXCIsIHRpbGU6IGZhbHNlLCAgcmFuZG9taXplOiBmYWxzZSwgZXhjbHVkZWROb2RlczogcG9zLCBleGNsdWRlZE5vZGVNb3ZlRmFjdG9yOiBleGNsdWRlZE5vZGVNb3ZlRmFjdG9yfSkucnVuKCk7XG5cblx0XHRsZXQgaXNMYXlvdXRTdG9wcGVkID0gZmFsc2UsIGlzT3RoZXJMYXlvdXRTdG9wcGVkID0gZmFsc2U7XG5cblx0XHRjeS5vbmUoXCJsYXlvdXRzdG9wXCIsIGZ1bmN0aW9uKCl7XG5cdFx0XHRpc0xheW91dFN0b3BwZWQgPSB0cnVlO1xuXHRcdFx0aWYgKGlzT3RoZXJMYXlvdXRTdG9wcGVkKSB7XG5cdFx0XHRcdGN5LnRyaWdnZXIoXCJzeW5jaGVkTGF5b3V0U3RvcHBlZFwiKTtcblx0XHRcdFx0b3RoZXJDeS50cmlnZ2VyKFwic3luY2hlZExheW91dFN0b3BwZWRcIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRvdGhlckN5Lm9uZShcImxheW91dHN0b3BcIiwgZnVuY3Rpb24oKXtcblx0XHRcdGlzT3RoZXJMYXlvdXRTdG9wcGVkID0gdHJ1ZTtcblx0XHRcdGlmIChpc0xheW91dFN0b3BwZWQpIHtcblx0XHRcdFx0Y3kudHJpZ2dlcihcInN5bmNoZWRMYXlvdXRTdG9wcGVkXCIpO1xuXHRcdFx0XHRvdGhlckN5LnRyaWdnZXIoXCJzeW5jaGVkTGF5b3V0U3RvcHBlZFwiKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHR9KTtcbn07XG5cbmxldCBhcHBseUV4dGVuZGVkSW50ZXJMYXllZExheW91dCA9IGZ1bmN0aW9uKGN5LCBvdGhlckN5LCBleGNsdWRlZE5vZGVNb3ZlRmFjdG9yKSB7XG5cdGxldCBlbGVzID0gY3kuZWxlbWVudHMoKTtcblx0bGV0IG90aGVyRWxlcyA9IG90aGVyQ3kuZWxlbWVudHMoKTtcblx0bGV0IGNvbW1vbkVsZXMgPSBlbGVzLmludGVyc2VjdGlvbihvdGhlckVsZXMpO1xuXG5cdGxldCBjb21tb25faWQgPSB7fTtcblxuXHRjb21tb25FbGVzLmZvckVhY2goZnVuY3Rpb24oZWxlLCBpKSB7XG5cdFx0Y29tbW9uX2lkW2VsZS5pZCgpXSA9IHRydWU7XG5cdH0pO1xuXG5cblx0bGV0IGNvbGxlY3Rpb24gPSBjeS5jb2xsZWN0aW9uKCk7XG5cdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLmFkZChjb21tb25FbGVzKTtcblxuXHRjb21tb25FbGVzLmZvckVhY2goZnVuY3Rpb24oZWxlKSB7XG5cdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24uYWRkKGN5LmdldEVsZW1lbnRCeUlkKGVsZS5pZCgpKS5uZWlnaGJvcmhvb2QoKSk7XG5cdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24uYWRkKG90aGVyQ3kuZ2V0RWxlbWVudEJ5SWQoZWxlLmlkKCkpLm5laWdoYm9yaG9vZCgpKTtcblx0fSk7XG5cblx0Y3lfaGVhZGxlc3MuZWxlbWVudHMoKS5yZW1vdmUoKTtcblx0Y3lfaGVhZGxlc3MuYWRkKGNvbGxlY3Rpb24pO1xuXHRjeV9oZWFkbGVzcy5sYXlvdXQoe25hbWU6IFwiY3l0b3NjYXBlLmpzLXN5bmNoZWRcIiwgZXhjbHVkZWROb2Rlczoge319KS5ydW4oKTtcblxuXHRjeV9oZWFkbGVzcy5vbmUoXCJsYXlvdXRzdG9wXCIsIGZ1bmN0aW9uKCl7XG5cdFx0bGV0IHBvcyA9IHt9O1xuXHRcdGN5X2hlYWRsZXNzLm5vZGVzKCkuZm9yRWFjaChmdW5jdGlvbihlbGUsIGkpIHtcblx0XHRcdHBvc1tlbGUuaWQoKV0gPSB7eDogZWxlLnBvc2l0aW9uKFwieFwiKSwgeTogZWxlLnBvc2l0aW9uKFwieVwiKX07XG5cdFx0fSlcblxuXHRcdGN5Lm5vZGVzKCkucG9zaXRpb25zKGZ1bmN0aW9uKGVsZSwgaSl7XG5cdFx0XHRpZiAocG9zW2VsZS5pZCgpXSkge1xuXHRcdFx0XHRyZXR1cm4ge3g6IHBvc1tlbGUuaWQoKV0ueCwgeTogcG9zW2VsZS5pZCgpXS55fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBlbGUucG9zaXRpb24oKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdG90aGVyQ3kubm9kZXMoKS5wb3NpdGlvbnMoZnVuY3Rpb24oZWxlLCBpKXtcblx0XHRcdGlmIChwb3NbZWxlLmlkKCldKSB7XG5cdFx0XHRcdHJldHVybiB7eDogcG9zW2VsZS5pZCgpXS54LCB5OiBwb3NbZWxlLmlkKCldLnl9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGVsZS5wb3NpdGlvbigpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Y3kubGF5b3V0KHtuYW1lOiBcImN5dG9zY2FwZS5qcy1zeW5jaGVkXCIsICB0aWxlOiBmYWxzZSwgcmFuZG9taXplOiBmYWxzZSwgZXhjbHVkZWROb2RlczogcG9zLCBleGNsdWRlZE5vZGVNb3ZlRmFjdG9yOiBleGNsdWRlZE5vZGVNb3ZlRmFjdG9yfSkucnVuKCk7XG5cdFx0b3RoZXJDeS5sYXlvdXQoe25hbWU6IFwiY3l0b3NjYXBlLmpzLXN5bmNoZWRcIiwgIHRpbGU6IGZhbHNlLCByYW5kb21pemU6IGZhbHNlLCBleGNsdWRlZE5vZGVzOiBwb3MsIGV4Y2x1ZGVkTm9kZU1vdmVGYWN0b3I6IGV4Y2x1ZGVkTm9kZU1vdmVGYWN0b3J9KS5ydW4oKTtcblxuXHRcdGxldCBpc0xheW91dFN0b3BwZWQgPSBmYWxzZSwgaXNPdGhlckxheW91dFN0b3BwZWQgPSBmYWxzZTtcblxuXHRcdGN5Lm9uZShcImxheW91dHN0b3BcIiwgZnVuY3Rpb24oKXtcblx0XHRcdGlzTGF5b3V0U3RvcHBlZCA9IHRydWU7XG5cdFx0XHRpZiAoaXNPdGhlckxheW91dFN0b3BwZWQpIHtcblx0XHRcdFx0Y3kudHJpZ2dlcihcInN5bmNoZWRMYXlvdXRTdG9wcGVkXCIpO1xuXHRcdFx0XHRvdGhlckN5LnRyaWdnZXIoXCJzeW5jaGVkTGF5b3V0U3RvcHBlZFwiKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdG90aGVyQ3kub25lKFwibGF5b3V0c3RvcFwiLCBmdW5jdGlvbigpe1xuXHRcdFx0aXNPdGhlckxheW91dFN0b3BwZWQgPSB0cnVlO1xuXHRcdFx0aWYgKGlzTGF5b3V0U3RvcHBlZCkge1xuXHRcdFx0XHRjeS50cmlnZ2VyKFwic3luY2hlZExheW91dFN0b3BwZWRcIik7XG5cdFx0XHRcdG90aGVyQ3kudHJpZ2dlcihcInN5bmNoZWRMYXlvdXRTdG9wcGVkXCIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdH0pO1xufTtcblxudmFyIGFwcGx5SXRlcmF0aXZlTGF5b3V0ID0gZnVuY3Rpb24oY3ksIG90aGVyQ3ksIG1heEl0ZXIpIHtcblx0dmFyIGNvdW50ZXIgPSAwO1xuXHRtYXhJdGVyID0gMiAqIG1heEl0ZXI7XG5cblx0b3RoZXJDeS5vbignbGF5b3V0c3RvcCcsIGZ1bmN0aW9uKCkge1xuXHRcdGlmIChjb3VudGVyIDwgbWF4SXRlcikge1xuXHRcdFx0Y3kubm9kZXMoKS5wb3NpdGlvbnMobm9kZSA9PiB7XG5cdFx0XHRcdGxldCBvdGhlck5vZGUgPSBvdGhlckN5LmdldEVsZW1lbnRCeUlkKG5vZGUuaWQoKSk7XG5cblx0XHRcdFx0aWYgKG90aGVyTm9kZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG90aGVyTm9kZS5wb3NpdGlvbigpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBub2RlLnBvc2l0aW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRjeS5sYXlvdXQoe25hbWU6IFwiY3l0b3NjYXBlLmpzLXN5bmNoZWRcIiwgIHRpbGU6IGZhbHNlLCAgcmFuZG9taXplOiBmYWxzZSwgbnVtSXRlcjogMX0pLnJ1bigpO1xuXHRcdFx0Y291bnRlcisrO1xuXHRcdH1cblx0fSk7XG5cblx0Y3kub24oJ2xheW91dHN0b3AnLCBmdW5jdGlvbigpIHtcblx0XHRpZiAoY291bnRlciA8IG1heEl0ZXIpIHtcblx0XHRcdG90aGVyQ3kubm9kZXMoKS5wb3NpdGlvbnMobm9kZSA9PiB7XG5cdFx0XHRcdGxldCBvdGhlck5vZGUgPSBjeS5nZXRFbGVtZW50QnlJZChub2RlLmlkKCkpO1xuXG5cdFx0XHRcdGlmIChvdGhlck5vZGUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHJldHVybiBvdGhlck5vZGUucG9zaXRpb24oKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gbm9kZS5wb3NpdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0b3RoZXJDeS5sYXlvdXQoe25hbWU6IFwiY3l0b3NjYXBlLmpzLXN5bmNoZWRcIiwgIHRpbGU6IGZhbHNlLCAgcmFuZG9taXplOiBmYWxzZSwgbnVtSXRlcjogMX0pLnJ1bigpO1xuXHRcdFx0Y291bnRlcisrO1xuXHRcdH1cblx0fSk7XG5cblx0Y3kubGF5b3V0KHtuYW1lOiAncmFuZG9tJ30pLnJ1bigpO1xufTtcblxuZXhwb3J0IHtjcmVhdGVIZWFkbGVzc0luc3RhbmNlLCBhcHBseUFnZ3JlZ2F0ZWRMYXlvdXQsIGFwcGx5SW50ZXJMYXllZExheW91dCwgYXBwbHlFeHRlbmRlZEludGVyTGF5ZWRMYXlvdXQsIGFwcGx5SXRlcmF0aXZlTGF5b3V0fTtcbiJdLCJzb3VyY2VSb290IjoiIn0=