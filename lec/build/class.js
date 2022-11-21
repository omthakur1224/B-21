//class is used where many things are common in many products;
class cars {
    chassieNumber;
    name;
    constructor(chassieNumber, name) {
        this.chassieNumber = chassieNumber;
        this.name = name;
    }
}
class Indica extends cars {
    fuelCapacity;
    engineCC;
    tyreSize;
    constructor(fuelCapacity, engineCC, tyreSize) {
        super(Date.now(), "Indica");
        this.fuelCapacity = fuelCapacity;
        this.engineCC = engineCC;
        this.tyreSize = tyreSize;
    }
}
class Nexon extends cars {
    fuelCapacity;
    tyreSize;
    engineCC;
    color;
    constructor(fuelCapacity, tyreSize, engineCC, color) {
        super(Date.now(), "Nexon");
        this.tyreSize = tyreSize;
        this.fuelCapacity = fuelCapacity;
        this.engineCC = engineCC;
        this.color = color;
    }
}
let newIndica = new Indica(20, 3000, 24);
console.log(newIndica);
// why we prefer class over type in such cases as if new car arrives
// we have to create another type but in class we will create it by some EndOfLineState;
