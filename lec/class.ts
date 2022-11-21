import { EndOfLineState } from "./node_modules/typescript/lib/typescript";

//class is used where many things are common in many products;
class cars{
    chassieNumber:number;
    name:string;
    constructor(chassieNumber:number,name:string){
         this.chassieNumber=chassieNumber;
         this.name=name;
    }
}

type tyreSize=22|26|24;
type engineCC=1000|1500|3000;

class Indica extends cars{
    fuelCapacity:number;
    engineCC:engineCC;
    tyreSize:tyreSize;
    constructor(fuelCapacity:number,engineCC:engineCC,tyreSize:tyreSize){
        super(Date.now(),"Indica");
        this.fuelCapacity=fuelCapacity;
       this.engineCC=engineCC;
        this.tyreSize=tyreSize;
    }
}

class Nexon extends cars{
    fuelCapacity:number;
    tyreSize:tyreSize;
    engineCC:engineCC;
    color:"red"|"green";
    constructor(fuelCapacity:number,tyreSize:tyreSize,engineCC:engineCC,color:"red"|"green"){
        super(Date.now(),"Nexon");
        this.tyreSize=tyreSize;
        this.fuelCapacity=fuelCapacity;
        this.engineCC=engineCC;
        this.color=color;
    }
}

let newIndica= new Indica(20,3000,24);
console.log(newIndica)

type Tiago={
    fuelCapacity:number;
    tyreSize:22|24|26;
    engineCC:1000|3000|1500;
    color:"red"|"green";
    chassieNumber:number;
    name:string;
    place:"himachal"|"delhi";
}
// why we prefer class over type in such cases as if new car arrives
// we have to create another type but in class we will create it by some EndOfLineState;