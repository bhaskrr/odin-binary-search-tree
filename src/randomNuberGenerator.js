//generates random numbers for the tree
export default function GetRandomNumbers(){
    const randomNums = [];
    for(let i = 0;i< 20;i++){
        const number = Math.floor(Math.random() * 100);
        randomNums.push(number);
    }
    return randomNums;
}