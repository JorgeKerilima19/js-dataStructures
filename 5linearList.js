class Node{
    constructor(value){
        this.value=value;
        this.pointer=null;
    }
}
class linkedList{
    constructor(){
        this.head=null;
        this.length=0;
    }
    size(){
        return this.length;
    }
    start(){
        if(this.head===null){
            return null
        }else{
            return this.head
        }
    }
    add(val){
        if(this.head===null){
            this.head=val;
        }
        this.length++;
    }
    print(){
        for (let i=0;i<this.length;i++){
            return this.head;
        }
    }
}
newList=new linkedList();
newList.add(87);
console.log(newList.print())
console.log(newList.length)
console.log(newList.start())