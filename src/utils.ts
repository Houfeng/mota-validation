import * as React from "react";

const { isString } = require("ntils");

export function toElement(content?: any) {
  if (!content) content = "";
  return isString(content)
    ? React.createElement("span", {
        children: content
      })
    : content;
}
