'use strict';

var index = require('./index-d8WKoDiR.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/*
 Stencil Client Patch Browser v4.41.3 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('stencil-test.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["ds-button_3.cjs",[[772,"ds-modal",{"open":[1540],"title":[1]},[[8,"keydown","onKeyDown"]]],[512,"ds-input",{"label":[1],"placeholder":[1],"value":[1025],"disabled":[4],"state":[1],"helperText":[1,"helper-text"]}],[772,"ds-button",{"variant":[1],"size":[1],"disabled":[516],"loading":[4]}]]]], options);
});

exports.setNonce = index.setNonce;
