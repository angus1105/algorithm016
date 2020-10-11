/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

var ladderLength = function(beginWord, endWord, wordList) {
  const lw = beginWord.length
  // 将字典转存为一个set，以便校验
  const wordListSet = new Set(wordList)

  if (wordListSet.size === 0 || !wordListSet.has(endWord)) {
    return 0
  }

  wordListSet.delete(beginWord)
  // 图的bfs必须要有visited来过滤掉已经访问过的
  const queue = [ beginWord ]
  const visited = new Set([ beginWord ])

  // 判断current是否为endWord，是返回true
  const changeWordEveryOneLetter = current => {
    for (let i = 0; i < lw; i++) {
      const originChar = current[i]
      const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

      for (let j = 0; j < letters.length; j++) {
        if (originChar === letters[j]) {
          continue
        }

        const next = current.split('')
        next[i] = letters[j]
        const nextWord = next.join('')
        // 如果在字典中发现了这个单词
        if (wordListSet.has(nextWord)) {
          // 如果这个单词与endWord相同，则返回true
          if (endWord === nextWord) {
            return true
          }
          // 如果这个单词未访问过，加入队列中
          if (!visited.has(nextWord)) {
            visited.add(nextWord)
            queue.push(nextWord)
          }
        }
      }
    }

    return false
  }

  let step = 1

  while(queue.length > 0) {
    let n = queue.length

    for (let i = 0; i < n; i++) {
      const currentWord = queue.shift()
      // 如果找到了
      if (changeWordEveryOneLetter(currentWord)) {
        return step + 1
      }
    }

    step++
  }

  return 0
};