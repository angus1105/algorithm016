/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  let maxAns = 0
  let pos = [ 0, 0 ] // pos[0] x方向 pos[1] y方向
  let d = 1 // 1: 在 y方向移动， 0: 在x方向移动
  let h = 1 // 1: 正向移动， -1: 负向移动
  const obSet = new Set(obstacles.map(item => item.toString()))

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i]
    let changeDir = false

    if (command > 0) {
      // pos[d] = pos[d] + (command * h)
      // 一步一步的走，每走一步检查一下障碍物
      for (let j = 1; j <= command; j++) {
        pos[d] = pos[d] + (1 * h)

        if (obSet.has(pos.toString())) {
          pos[d] = pos[d] - (1 * h)
          break
        }
      }
    }

    if (command === -2 || command === -1) {
      changeDir = true
      d = (d === 1 ? 0 : 1)
    }

    if (changeDir) {
      // 如果command后当前在y上移动，说明之前在x方向移动
      if (d === 1) {
        if (h === 1) {
          h = (command === -2 ? 1 : -1)
        } else {
          h = (command === -2 ? -1 : 1)
        }
      } else {  // 如果command后在x上移动，说明之前在y方向移动
        if (h === 1) {  // 如果之前在y正向移动
          h = (command === -2 ? -1 : 1)
        } else {
          h = (command === -2 ? 1 : -1)
        }
      }
    }

    maxAns = Math.max(pos[0] * pos[0] + pos[1] * pos[1], maxAns)
  }

  return maxAns
};