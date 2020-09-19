/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 暴力递归的方式
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return []
  }

  const result = []
  let level = 0

  const visit = (node, level) => {
    if (level > result.length - 1) {
      result.push([])
    }

    result[level].push(node.val)
    // 终止条件
    if (!node.children || node.children.length === 0) {
      return
    }
    
    for (let i = 0; i < node.children.length; i++) {
      visit(node.children[i], level + 1)
    }
  }

  visit(root, level)
  return result
};