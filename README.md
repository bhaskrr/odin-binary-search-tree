# odin-binary-search-tree
## Binary search tree implementation in javascript

- Build a Node class/factory. It should have an attribute for the data it stores as well as its left and right children.

- Build a Tree class/factory which accepts an array when initialized. The Tree class should have a root attribute, which uses the return value of buildTree

- Write a buildTree function that takes an array of data (e.g., [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The buildTree function should return the level-0 root node.

- Write insert and delete functions that accepts a value to insert/delete. You’ll have to deal with several cases for delete, such as when a node has children or not.

- Write a find function that accepts a value and returns the node with the given value.

- Write a levelOrder function that accepts a random optional callback function as its parameter. levelOrder should traverse the tree in breadth-first level order and provide each node as an argument to the callback. As a result, the callback will perform an operation on each node following the order in which they are traversed. levelOrder may be implemented using either iteration or recursion (try implementing both!). The method should return an array of values if no callback is given as an argument.
> Tip: You will want to use an array acting as a queue to keep track of all the child nodes that you have yet to traverse and to add new ones to the list

- Write inOrder, preOrder, and postOrder functions that also accept a random optional callback as a parameter. Each of these functions should traverse the tree in their respective depth-first order and yield each node to the provided callback. The functions should return an array of values if no callback is given as an argument.

- Write a height function that accepts a node and returns its height. Height is defined as the number of edges in the longest path from a given node to a leaf node.

- Write a depth function that accepts a node and returns its depth. Depth is defined as the number of edges in the path from a given node to the tree’s root node.

- Write an isBalanced function that checks if the tree is balanced. A balanced tree is one where the difference between heights of the left subtree and the right subtree of every node is not more than 1.

- Write a rebalance function that rebalances an unbalanced tree.
> Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.

## Tie it all together

Write a driver script that does the following:

    1. Create a binary search tree from an array of random numbers < 100. You can create a function that returns an array of random numbers every time you call it if you wish.
    1. Confirm that the tree is balanced by calling isBalanced.
    1. Print out all elements in level, pre, post, and in order.
    1. Unbalance the tree by adding several numbers > 100.
    1. Confirm that the tree is unbalanced by calling isBalanced.
    1. Balance the tree by calling rebalance.
    1. Confirm that the tree is balanced by calling isBalanced.
    1. Print out all elements in level, pre, post, and in order.
