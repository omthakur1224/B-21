// interface looks similer to the type 
//difference is that you can create multiple interface with same name
//that's why avoid the use of interfaces because it will create more problem than helping you to solve

type person={
    male:"male";
    female:"female";
    other:"other"
}

interface personX{
    male:"male";
    female:"female";
    other:"other"
}
interface personX{
    male:"male",
    female:"female",
    other:"other",
    trans:"transgender"
}

let om:personX={
    male:"male",
    female:"female",
    other:"other",
    trans:"transgender"
}