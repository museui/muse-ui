export const oneOf = (item, arr) => {
  const obj = new Set(arr)
  if (obj.has(item)) {
    return true
  }
  return false
}
