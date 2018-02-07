import toLower from 'lodash.tolower'
export const levenshteinDistance = (searchText, key) => {
  const current = []
  let prev
  let value

  for (let i = 0; i <= key.length; i++) {
    for (let j = 0; j <= searchText.length; j++) {
      if (i && j) {
        if (searchText.charAt(j - 1) === key.charAt(i - 1)) value = prev
        else value = Math.min(current[j], current[j - 1], prev) + 1
      } else {
        value = i + j
      }
      prev = current[j]
      current[j] = value
    }
  }
  return current.pop()
}

export const noFilter = () => true

// 为了得到输入在目标字符串的位置， 直接返回下标而不是之前的boolean类型
export const caseSensitiveFilter = (searchText, key) => {
  return searchText !== '' && key.indexOf(searchText) !== -1
}

export const caseInsensitiveFilter = (searchText, key) => {
  return searchText !== '' && toLower(key).indexOf(searchText.toLowerCase()) !== -1
}

export const levenshteinDistanceFilter = (distanceLessThan) => {
  if (distanceLessThan === undefined) {
    return levenshteinDistance
  } else if (typeof distanceLessThan !== 'number') {
    /*eslint-disable*/
    throw 'Error: levenshteinDistanceFilter is a filter generator, not a filter!'
    /*eslint-enable*/
  }

  return (s, k) => levenshteinDistance(s, k) < distanceLessThan
}

export const fuzzyFilter = (searchText, key) => {
  const compareString = toLower(key)
  searchText = toLower(searchText)

  let searchTextIndex = 0
  for (let index = 0; index < key.length; index++) {
    if (compareString[index] === searchText[searchTextIndex]) {
      searchTextIndex += 1
    }
  }

  return searchTextIndex === searchText.length
}

// 以下是对于开启高亮模式以后的默认filter改造

export const caseSensitiveFilterHighlight = (searchText, key) => {
  if (searchText !== '') {
    return key.indexOf(searchText)
  }
  return -1
}

export const caseInsensitiveFilterHighlight = (searchText, key) => {
  if (searchText !== '') {
    return toLower(key).indexOf(searchText.toLowerCase())
  }
  return -1
}

export const fuzzyFilterHighlight = (searchText, key) => {
  const compareString = toLower(key)
  searchText = toLower(searchText)
  const matchIndexList = []
  let searchTextIndex = 0
  for (let index = 0; index < key.length; index++) {
    if (compareString[index] === searchText[searchTextIndex]) {
      searchTextIndex += 1
      matchIndexList.push(index)
    }
  }

  if (matchIndexList.length === searchText.length) {
    return matchIndexList
  }
  return []
}

export const ableToHighlight = (filterName) => {
  return filterName === 'caseSensitiveFilter' || filterName === 'caseInsensitiveFilter' ||
  filterName === 'fuzzyFilter'
}
