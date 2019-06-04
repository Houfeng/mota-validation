import * as React from "react";

const { isString } = require("ntils");

export function toElement(content?: any, props?: any, type?: string) {
  if (!content) content = "";
  return isString(content)
    ? React.createElement(type || "span", { ...props }, content)
    : content;
}
