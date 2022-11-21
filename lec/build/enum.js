console.log("hello");
//enum datatypes
var Gen;
(function (Gen) {
    Gen[Gen["male"] = 0] = "male";
    Gen[Gen["female"] = 1] = "female";
    Gen[Gen["other"] = 2] = "other";
})(Gen || (Gen = {}));
const gender1 = Gen.male;
console.log(gender1, "gen1");
var Gender;
(function (Gender) {
    Gender["male"] = "Male";
    Gender["female"] = "Female";
    Gender["other"] = "ohter";
})(Gender || (Gender = {}));
const gender = Gender.male;
console.log(gender, 'gender');
