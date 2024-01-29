import node from "./node.js";
import sortAndDeduplicate from "./sortAndDeduplicate.js";
import { levelOrder } from "./traversal.js";
import { tree } from "./driver.js";

export function buildTree(Array) {
    if (Array.length < 1) {
        return null;
    }

    let sortedArray;
    sortedArray = sortAndDeduplicate(Array);

    const midElementIndex = Math.floor(sortedArray.length / 2);
    const root = new node(sortedArray[midElementIndex]);

    root.left = buildTree(sortedArray.slice(0, midElementIndex));
    root.right = buildTree(sortedArray.slice(midElementIndex + 1));

    return root;
}

//inserts a node with the given value
export function ins(root, value) {
    if(levelOrder(tree.root).includes(value)){
        throw new Error('The value already exists');
    } 
    if(root == null) return new node(value);

    if(value > root.data){
        //insert in the right subtree
        root.right = ins(root.right, value);
    } else{
        //insert in the left subtree
        root.left = ins(root.left, value);
    }

    //return the updated root node
    return root;
}

//deletes a value
function del(root, value) {
    if(root == null) return null;

    if(value < root.data){
        root.left = del(root.left, value);
    }
    else if(value > root.data){
        root.right = del(root.right, value);
    }
    else{
        if(root.left == null){
            return root.right;
        }
        else if(root.right == null){
            return root.left;
        }
        //node with two children,find in-order successor
        const successor = findMin(root.right);
        root.data = successor.data;
        root.right = deleteNode(root.right, successor.data);
    }

    return root;
}

//get the in-order successor
function findMin(node){
    while(node.left != null){
        node = node.left;
    }
    return node;
}

//accepts a value and returns the node with the given value
function find(currentRoot, value) {
    if (!(root && currentRoot && value)) return false;

    else if(currentRoot.data == value){
        return currentRoot;
    }
    else if(value < currentRoot.data){
        return find(currentRoot.left, value);
    }
    else return find(currentRoot.right, value);
}

//a callback function
function print(num) {
    console.log(num);
    return num;
}

//Height is defined as the number of edges in the longest path 
//from a given node to a leaf node
//gets the height of the given node
function findHeight(node){
    if (node == null) return -1;
    const leftHeight = findHeight(node.left);
    const rightHeight = findHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
}

//retrieves the node from the given value and calls the
//findHeight function
function height(value) {
    const node = find(root, value);

    return findHeight(node);
}

//Depth is defined as the number of edges in the path
//from a given node to the tree’s root node

function findDepth(root, node, depth= 0){
    if(root == null) return false;

    if(root.data == node.data){
        return depth;
    }
    else{
        const leftDepth = findDepth(root.left, node, depth+1);
        const rightDepth = findDepth(root.right, node, depth+1);
        return Math.max(leftDepth, rightDepth);
    }
}

function depth(value){
    const node = find(root, value);

    return findDepth(root, node);
}

//checks if the tree is balanced.
//A balanced tree is one where the difference between
//heights of the left subtree and the right subtree of
//every node is not more than 1.

export function isBalanced(root){
    if(root == null) return true;

    const leftHeight = findHeight(root.left);
    const rightHeight = findHeight(root.right);

    if(Math.abs(leftHeight - rightHeight) <= 1 && isBalanced(root.left) && isBalanced(root.right)){
        return true;
    };
    return false;
}

//rebalances an unbalanced tree
export function rebalance(root){
    return buildTree(levelOrder(root));
}