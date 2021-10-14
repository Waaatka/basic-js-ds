const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  _root = null;

  _removeFromNode(node, data) {
    if (node === null) {
      return node;
    }
    if (data < node.data) {
      node.left = this._removeFromNode(node.left, data)
      return node
    } else if (data > node.data) {
      node.right = this._removeFromNode(node.right, data)
      return node;
    }

    if (node.left === null) {
      return node.right
    } else if (node.right === null) {
      return node.left
    }

    node.data = this._minOfNode(node.right)
    node.right = this._removeFromNode(node.right, node.data)
    return node
  }

  _minOfNode(node) {
    while (true) {
      if (node.left === null) {
        return node.data;
      }
      node = node.left
    }
  }

  _maxOfNode(node) {
    while (true) {
      if (node.right === null) {
        return node.data;
      }
      node = node.right
    }
  }

  root() {
    return this._root;
  }

  add(data) {
    if (this._root === null) {
      this._root = new Node(data);
      return
    }
    let currentNode = this._root;
    while (true) {
      if (currentNode.data === data) {
        return
      }
      if (currentNode.data < data) {
        if (currentNode.right === null || currentNode.right.data === null) {
          currentNode.right = new Node(data)
          return;
        } else {
          currentNode = currentNode.right
        }
      } else {
        if (currentNode.left === null || currentNode.left.data === null) {
          currentNode.left = new Node(data)
          return;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    if (this._root === null) {
      return null
    }
    let currentNode = this._root;
    while (true) {
      if (currentNode.data === data) {
        return currentNode;
      }
      if (currentNode.data < data) {
        if (currentNode.right === null) {
          return null;
        } else {
          currentNode = currentNode.right
        }
      } else {
        if (currentNode.left === null) {
          return null;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
  }

  remove(data) {
    this._root = this._removeFromNode(this._root, data)
  }

  min() {
    return this._minOfNode(this._root)
  }

  max() {
    return this._maxOfNode(this._root)
  }

}