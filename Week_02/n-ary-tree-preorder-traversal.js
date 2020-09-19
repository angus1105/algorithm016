/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder_recursive= function(root) {
  const result = []

  const visit = (node, res) => {
    if (node === null) {
      return
    }

    res.push(node.val)
    for (let i = 0; i < node.children.length; i++) {
      visit(node.children[i], res)
    }
  }
  visit(root, result)
  return result
};

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder_iteratively = function(root) {
  if (!root) {
    return []
  }

  const result = []
  const stack = []

  stack.push(root)

  while (stack.length !== 0) {
    const node = stack.pop()
    result.push(node.val)

    if (node.children.length) {
      stack.push(...node.children.reverse())
    } 
  }

  return result
};