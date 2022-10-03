"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// FancyText.native.tsx
var FancyText_native_exports = {};
__export(FancyText_native_exports, {
  FancyText: () => FancyText
});
module.exports = __toCommonJS(FancyText_native_exports);
var import_react_native = require("react-native");
var import_jsx_runtime = require("react/jsx-runtime");
function FancyText({ text }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_native.Text, {
    style: styles.text,
    children: [
      "I am NATIVE!!! ",
      text
    ]
  });
}
var styles = import_react_native.StyleSheet.create({
  text: {
    color: "red"
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FancyText
});
