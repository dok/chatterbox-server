var _ = require('underscore');
exports.storage = {
  storage: [],
  getLength: function() {
    return this.storage.length;
  },
  push: function(username, message, roomname) {
    var msg = {
      username: username,
      message: message,
      roomname: roomname
    };

    this.storage.push(msg);
  },
  get: function(msg) {
    return _.where(this.storage, {
      username: msg.username,
      message: msg.message,
      roomname: msg.roomname
    });
  }

};