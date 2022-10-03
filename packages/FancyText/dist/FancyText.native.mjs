// FancyText.native.tsx
import { StyleSheet, Text } from "react-native";
import { jsxs } from "react/jsx-runtime";
function FancyText({ text }) {
  return /* @__PURE__ */ jsxs(Text, {
    style: styles.text,
    children: [
      "I am NATIVE!!! ",
      text
    ]
  });
}
var styles = StyleSheet.create({
  text: {
    color: "red"
  }
});
export {
  FancyText
};
