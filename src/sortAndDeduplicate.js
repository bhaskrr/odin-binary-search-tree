//returns a sorted and deduplicated array
export default function sortAndDeduplicate(initialArr){
    initialArr.sort((a, b) => a - b);
    const filteredArray = [...new Set(initialArr)];
    return filteredArray;
}