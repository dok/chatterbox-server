var _ = require('underscore');
/**
 * Parses target and checks if they are valid
 * 
 */
exports.parser = {
  /**
   * Checks if target route is valid
   * @param {array} routes, {string} target
   * @return boolean
   */
  isValid: function(routes, target) {
    // "/classes/*"
    // /classes/room1
    for(var i = 0; i < routes.length; i++) {
      var route = routes[i];
      var routeSplit = _.without(route.split('/'), "");

      var targetSplit = _.without(target.split('/'), "");
      if(routeSplit[0] === targetSplit[0] && _.contains(routeSplit, '*')) {
        return true;
      } else {
        return false;
      }
    }

  }


};