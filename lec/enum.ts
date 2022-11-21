console.log("hello")
//enum datatypes
enum Gen{
    male,
    female,
    other
}
const gender1:Gen=Gen.male;
console.log(gender1,"gen1")
enum Gender{
    male="Male",
    female="Female",
    other="ohter"
}
const gender:Gender=Gender.male;
console.log(gender,'gender')