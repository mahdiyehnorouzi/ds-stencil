import { p as promiseResolve, b as bootstrapLazy } from './index-DbqPiZ34.js';
export { s as setNonce } from './index-DbqPiZ34.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.41.3 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["stc-button_3",[[772,"stc-modal",{"open":[1540],"title":[1]},[[8,"keydown","onKeyDown"]]],[512,"stc-input",{"label":[1],"placeholder":[1],"value":[1025],"disabled":[4],"state":[1],"helperText":[1,"helper-text"]}],[772,"stc-button",{"variant":[1],"size":[1],"disabled":[516],"loading":[4]}]]]], options);
});
