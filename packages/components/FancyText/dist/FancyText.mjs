// FancyText.tsx
import { jsxs } from "react/jsx-runtime";
function FancyText({ text }) {
  return /* @__PURE__ */ jsxs("h1", {
    children: [
      "Im WEB!!! ",
      text
    ]
  });
}
export {
  FancyText
};
