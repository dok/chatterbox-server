var _ = require('underscore');
exports.storage = {
  storage: [],
  getLength: function() {
    return this.storage.length;
  },
  push: function(msg) {
    // var msg = {
    //   username: username,
    //   message: message,
    //   roomname: roomname
    // };
    if(msg.roomname === null) {
      msg.roomname = undefined;
    }

    this.storage.push(msg);
  },

  // Returns an array with the containing results
  get: function(msg) {
    var query = {};
    for(var key in msg) {
      query[key] = msg[key];
    }

    return _.where(this.storage, query);
  },

  getAll: function() {
    return JSON.stringify(this.storage);
  }

};