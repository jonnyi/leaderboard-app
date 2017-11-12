//Shim added to resolve issue https://github.com/facebook/jest/issues/4545
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
