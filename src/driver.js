import prettyPrint from './prettyPrint.js';
import Tree from './tree.js'
import GetRandomNumbers from "./randomNuberGenerator.js";
import { levelOrder, preOrder, postOrder, inOrder } from './traversal.js';
import { ins, isBalanced, rebalance } from "./binarySearchTree.js";

//creates a tree
let treeElements = GetRandomNumbers();
export let tree = new Tree(treeElements);
console.log('A tree has been created!');
prettyPrint(tree.root);

if (tree) {
    //checks balance
    isBalanced(tree.root) ? console.log("Tree is balanced") : console.log("Tree is not balanced");

    //prints the traversal orders
    console.log(`Level Order traversal : ${levelOrder(tree.root)}`);
    console.log(`Pre Order traversal : ${preOrder(tree.root)}`);
    console.log(`Post Order traversal : ${postOrder(tree.root)}`);
    console.log(`In Order traversal : ${inOrder(tree.root)}`);

    //inserts the given values
    ins(tree.root, 110);
    ins(tree.root, 1110);
    ins(tree.root, 1010);
    ins(tree.root, 1100);
    prettyPrint(tree.root);

    //checks balance after inserting
    isBalanced(tree.root) ? console.log("Tree is balanced") : console.log("Tree is not balanced");


    //rebalances the tree
    if (tree && !isBalanced(tree.root)) {
        console.log("Rebalancing the tree...");
        tree.root = rebalance(tree.root);
    }

    //checks balance and prints the tree
    if (isBalanced(tree.root)) {
        console.log("Tree is balanced");
        prettyPrint(tree.root);
    }
    else {
        console.log("Tree is not balanced");
    }

    //prints the traversal orders
    console.log(`Level Order traversal : ${levelOrder(tree.root)}`);
    console.log(`Pre Order traversal : ${preOrder(tree.root)}`);
    console.log(`Post Order traversal : ${postOrder(tree.root)}`);
    console.log(`In Order traversal : ${inOrder(tree.root)}`);
}
else {
    console.log('Unable to detect an active tree!');
}