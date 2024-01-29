//traverse the tree in breadth-first level order and
//provide each node as an argument to the callback
export function levelOrder(node, callbackFn = null) {
    if (node == null) return;

    const levelOrderTraversal = [];
    
    const queue = [];
    queue.push(node);

    while (queue != false) {
        let currentNode = queue.shift();
        let value = currentNode.data;
        if (callbackFn) value = callbackFn(value);
        levelOrderTraversal.push(value);

        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
    }
    if (!callbackFn) return levelOrderTraversal;
}

//depth-first traversal
let inOrderTraversal = [];
export function inOrder(node, callbackFn = null) {
    if (node == null) return;

    if (node.left) inOrder(node.left);

    let value = node.data;
    if (callbackFn) value = callbackFn(value);
    inOrderTraversal.push(value);

    if (node.right) inOrder(node.right);

    if (!callbackFn) return inOrderTraversal;
}

let preOrderTraversal = [];
export function preOrder(node, callbackFn = null) {
    if (node == null) return;

    let value = node.data;
    if (callbackFn) {
        value = callbackFn(value);
    }

    preOrderTraversal.push(value);

    if (node.left) preOrder(node.left);
    if (node.right) preOrder(node.right);

    if (!callbackFn) return preOrderTraversal;
}

let postOrderTraversal = [];
export function postOrder(node, callbackFn = null) {
    if (node == null) return;

    if (node.left) postOrder(node.left);
    if (node.right) postOrder(node.right);

    let value = node.data;
    if (callbackFn) value = callbackFn(value);

    postOrderTraversal.push(value);

    if (!callbackFn) return postOrderTraversal;
}