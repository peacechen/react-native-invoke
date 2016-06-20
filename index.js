var RNInvokeManager = require('react-native').NativeModules.RNInvokeManager;
var Invoke = require('./src/Invoke.js');

function execute(invocation) {
  if (typeof invocation.returns === 'function') {
    invocation = invocation.returns();
  }
  return RNInvokeManager.execute(invocation);
}

module.exports = {
  React: require('./src/React.js'),
  IOS: require('./src/IOS.js'),
  call: Invoke.call,
  execute: execute
};
