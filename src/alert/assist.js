// 判断参数是否是其中之一
export const oneOf = (val, arr) => {
  const set = new Set(arr)
  if (set.has(val)) {
    return true
  }
  return false
}
