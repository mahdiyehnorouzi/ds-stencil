'use strict';

var index = require('./index-d8WKoDiR.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["stc-button_3.cjs",[[772,"stc-modal",{"open":[1540],"title":[1]},[[8,"keydown","onKeyDown"]]],[512,"stc-input",{"label":[1],"placeholder":[1],"value":[1025],"disabled":[4],"state":[1],"helperText":[1,"helper-text"]}],[772,"stc-button",{"variant":[1],"size":[1],"disabled":[516],"loading":[4]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
