export const undoNested = (nestedValue: [] | {}): (string | number)[] => {
  const unNestedValues: (string | number)[] = JSON.stringify(nestedValue)
    .replace(/\[|\]|\{|[^#\&\?,]*:|\}/g, '')
    .split(',')
  return JSON.parse(`[${unNestedValues}]`)
}
