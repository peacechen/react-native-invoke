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
      for (let i = 0; i<args.length; i++) {
        if (typeof args[i].returns === 'function') {
          args[i] = {
            type: 'Invocation',
            value: args[i].returns()
          };
        }
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
