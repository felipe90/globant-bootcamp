/* */ 
var onSignalExit = require('../../index');
onSignalExit(function(code, signal) {
  console.log('reached end of execution, ' + code + ', ' + signal);
});
