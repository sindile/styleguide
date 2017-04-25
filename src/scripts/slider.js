// (c) 2016 Mapzen
// LICENSE: MIT
//
// HIDE / SHOW MAIN NAVIGATION
//
// Allows user scrolling to toggle navigation stickyness.
//
// Dependencies: Bootstrap-compatible navbar in HTML/CSS.
// --------------------------------------------------------
(function (root, factory) {
  // Universal Module Definition (UMD)
  // via https://github.com/umdjs/umd/blob/master/templates/returnExports.js
  if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.returnExports = factory();
  }
}(this, function () {
  'use strict'

  $('input[type="range"]').rangeslider({

      polyfill: false,

      // Default CSS classes
      rangeClass: 'rangeslider',
      disabledClass: 'rangeslider--disabled',
      horizontalClass: 'rangeslider--horizontal',
      verticalClass: 'rangeslider--vertical',
      fillClass: 'rangeslider__fill',
      handleClass: 'rangeslider__handle',

      // rangeClass: 'mz-rangeslider',
      // disabledClass: 'mz-rangeslider--disabled',
      // horizontalClass: 'mz-rangeslider--horizontal',
      // verticalClass: 'mz-rangeslider--vertical',
      // fillClass: 'mz-rangeslider-fill',
      // handleClass: 'mz-rangeslider-handle',

  });
  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return {};
}));