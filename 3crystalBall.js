array=[false,false,false,false,false,true,false,false,];

function crystalBall(array){
    const jumpAmount=Math.floor(Math.sqrt(array.length));
    let i =jumpAmount
    for(;i<array.length;i+=jumpAmount){
        if(array[i]){
            break;
        }
    }
    i-=jumpAmount;
    for( let j=0; j<=jumpAmount && i< array.length;++j,++i){
        if(array[i]){
            return i;
        }
    }
    console.log(jumpAmount)
    return -1;
}
console.log(crystalBall(array))

