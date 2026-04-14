// Task 1: Code the timesTwo function declaration
function timesTwo(num) {
    if (typeof num === "number") {
        return num * 2
    } else {
        console.log("Function input must be a parameter.")
    }
}

// Task 2: Export the timesTwo function as a module
module.exports = timesTwo