function call(target, method, ...args) {
  return {
    returns: function (returnType) {
      if (typeof target.returns === 'function') {
        target = {
          type: 'Invocation',
          value: target.returns()
        };
      }
      if (typeof returnType === 'function') {
        returnType = returnType();
      }
      return {
        target: target,
        method: method,
        args: args,
        returns: returnType
      };
    }
  };
}

module.exports = {
  call: call
};
