import fs from "fs";
import sass from "sass";

interface SassVariables {
  [key: string]: string;
}

export function getSassVariables(filePath: string): SassVariables {
  const sassData = fs.readFileSync(filePath, "utf-8");
  const result = sass.renderSync({ data: sassData });
  const css = result.css.toString();
  const regex = /(\$[a-zA-Z0-9_-]+):\s*([^;]+);/g;
  const variables: SassVariables = {};

  let match = regex.exec(css);
  while (match !== null) {
    const [, variable, value] = match;
    variables[variable] = value.trim();
    match = regex.exec(css);
  }

  return variables;
}
