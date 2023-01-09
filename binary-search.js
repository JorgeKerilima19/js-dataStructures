array=[1,2,3,4,5,6,7,8,9,10]


function binarySearch(array=[], value) {
    let lowestPoint=0;
    let hightestPoint=array.length;
    do{
        const midPoint=Math.floor(lowestPoint+(hightestPoint-lowestPoint)/2);
        const result=array[midPoint];
        if(result==value){
            return true;
        }else if ( result>value){
            hightestPoint=midPoint;
        }else{
            lowestPoint=midPoint+1;
        }
    }while(lowestPoint<hightestPoint);
    
    return false
}
console.log(binarySearch(array,11))