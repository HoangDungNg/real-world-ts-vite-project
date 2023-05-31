import { BreakPointValueType, EBREAKPOINTSType } from "@constant";

function removeDuplicateBreakpoint(obj: EBREAKPOINTSType): EBREAKPOINTSType {
  const valueSet = new Set<BreakPointValueType>();
  const result: EBREAKPOINTSType = {};

  for (const [key, value] of Object.entries(obj)) {
    if (!valueSet.has(value as BreakPointValueType)) {
      result[key] = value;
      valueSet.add(value as BreakPointValueType);
    }
  }

  return result;
}

export { removeDuplicateBreakpoint };
