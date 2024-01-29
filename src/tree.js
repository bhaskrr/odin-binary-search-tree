//builds a tree
import { buildTree } from "./binarySearchTree.js";
export default class Tree {
    constructor(arr) {
        this.root = buildTree(arr);
    }
}