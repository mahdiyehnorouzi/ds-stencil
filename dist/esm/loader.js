import { b as bootstrapLazy } from './index-DbqPiZ34.js';
export { s as setNonce } from './index-DbqPiZ34.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["stc-button",[[772,"stc-button",{"variant":[1],"size":[1],"disabled":[516],"loading":[4]}]]],["stc-modal",[[772,"stc-modal",{"open":[1540],"title":[1]},[[8,"keydown","onKeyDown"]]]]],["stc-input",[[512,"stc-input",{"label":[1],"placeholder":[1],"value":[1025],"disabled":[4],"state":[1],"helperText":[1,"helper-text"]}]]]], options);
};

export { defineCustomElements };
