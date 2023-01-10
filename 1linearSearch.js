
array1=[0,5,1,8,5,7,2]
function linearSearch(array, value){
    for(let i=0; i<array.length;i++){
        if (array[i]===value){
            return true
        }
    }return false
}
console.log(linearSearch(array1, 2))