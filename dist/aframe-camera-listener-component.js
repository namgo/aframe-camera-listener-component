/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	/*
	mostly copied from
	https://stackoverflow.com/questions/41968142/aframe-emitting-custom-events-between-components
	*/
	/* global AFRAME */

	if (typeof AFRAME === 'undefined') {
	  throw new Error('Component attempted to register before AFRAME was available.');
	}

	var lastPos = {x: 0, y:0, z:0};
	var lastRot = {x: 0, y:0, z:0};

	/* look for significant rotation, 0.1 degree or more
	so as to not take up too much CPU power */
	function diffPosRot(currentPos, currentRot, accuracy) {
	  var val = Object.keys(currentPos).map(function(key){
	    if (key) {
	      if (currentPos[key].toFixed(accuracy) != lastPos[key].toFixed(accuracy)) {
	        lastPos[key] = currentPos[key];
	        return true;
	      }
	      if (currentRot[key].toFixed(accuracy) != lastRot[key].toFixed(accuracy)) {
	        lastRot[key] = currentRot[key];
	        return true;
	      }
	    }
	  });
	  for (var i = 0; i < val.length; i++){
	    if (val[i] == true) {
		return true;
	    }
	  }
	  return false;
	  /*
	  for (key in currentPos) {
	  if (currentRot[key].toFixed(1) == lastRot[key].toFixed(1)) {
	  return false;
	  }
	  }*/
	}
	/**
	* Camera Listener component for A-Frame.
	*/
	AFRAME.registerComponent('camera-listener', {
	  schema: {
	    dataEl: {type: 'selector'},
	    /* maybe pos and rot are unnecessary as they can be
	    queried directly */
	    position: {type: 'vec3'},
	    rotation: {type: 'vec3'}
	  },

	  /**
	  * Set if component needs multiple instancing.
	  */
	  multiple: false,

	  tick: function () {
	    var cameraEl = this.el.sceneEl.camera.el;
	    var pos = cameraEl.getAttribute('position');
	    var rot = cameraEl.getAttribute('rotation');
	      if (diffPosRot(pos, rot, 2)) {
	      this.data.dataEl.emit('camera-moved', {value: {position: pos, rotation: rot}});
	    }
	  },

	  /**
	  * Called once when component is attached. Generally for initial setup.
	  */
	  init: function () {
	    this.data.dataEl = this.el;
	  },

	  /**
	  * Called when component is attached and when component data changes.
	  * Generally modifies the entity based on the data.
	  */
	  updateSchema: function (d) {
	  },

	  /**
	  * Called when a component is removed (e.g., via removeAttribute).
	  * Generally undoes all modifications to the entity.
	  */
	  remove: function () { },

	  /**
	  * Called on each scene tick.
	  */
	  // tick: function (t) { },

	  /**
	  * Called when entity pauses.
	  * Use to stop or remove any dynamic or background behavior such as events.
	  */
	  pause: function () { },

	  /**
	  * Called when entity resumes.
	  * Use to continue or add any dynamic or background behavior such as events.
	  */
	  play: function () { }
	});


/***/ })
/******/ ]);