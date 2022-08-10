//task 1
let sampleObject = {
    isItarable: false,
    sampleArray: [12, 63, 21, 34, 98, 57],
}

function isntIter(sampleObject) {
    if (sampleObject.isItarable) {
        return sampleObject.sampleArray;
    } else return "provided array isn't itarable";

}

console.log(isntIter(sampleObject));

// task 2

function checkPythagoras(x, y, z) {
    if (x * x + y * y == z * z || z * z - x * x == y * y || z * z - y * y == x * x) {
        return true;
    } else return false;
};

result = checkPythagoras(3, 4, 5);
console.log(result);

// task 3

let array = [2, 14, 25, 75, 11, 6]

function minMax(array) {

}

// task 4

function angle(degree) {
    if (degree > 0 && degree < 90) {
        return "An angle between 0 and 90 degrees";
    } else if (degree == 90) {
        return "An 90 degree angle";
    } else if (degree > 90 && degree < 180) {
        return "An angle between 90 and 180 degrees";
    } else if (degree == 180) {
        return "A 180 degree angle";
    } else return "jfnajf";
};

result = angle(45);
console.log(result);

result = angle(90);
console.log(result);

result = angle(150);
console.log(result);

result = angle(180);
console.log(result);

// task 5

function checkStudentGrade



// hw 3


// task 1