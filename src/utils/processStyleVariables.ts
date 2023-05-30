function extractValuesFromString(inputString: string) {
  const regex = /{([^}]*)}/g;
  const matches = inputString.matchAll(regex);
  const values = [];

  for (const match of matches) {
    const proccessMatchedString = `${match[1].trim()}`;
    values.push(proccessMatchedString);
  }

  return values.join("\n");
}

function convertCSSVariables(variables: string): { [key: string]: string } {
  const extractedCSS = extractValuesFromString(variables);

  const variableLines = extractedCSS
    .split(";")
    .filter((line) => line.trim() !== "" && !line.trim().includes("//"));

  const result: { [key: string]: string } = {};

  variableLines.forEach((line) => {
    // Remove whitespace and leading "--" from the variable name
    const splittedLine = line.trim().replace(/^--/, "").split(":");
    result[splittedLine[0]] = `${splittedLine[1].trim()}`;
  });

  return result;
}

function convertSassVariables(variables: string): { [key: string]: string } {
  const variableLines = variables.split(";").filter((line) => line.trim() !== "");

  const result: { [key: string]: string } = {};

  variableLines.forEach((line) => {
    const variableMatch = line.match(/^\$(.*):(.*)/);
    if (variableMatch) {
      const variableName = variableMatch[1].trim();
      const value = variableMatch[2].trim();
      result[variableName] = value;
    }
  });

  return result;
}

export { convertCSSVariables, convertSassVariables, extractValuesFromString };
