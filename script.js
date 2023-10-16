var mark = 38

if (mark >= 0 && mark <= 39) {
    console.log("Your Grade is E");
} else if (mark >= 40 && mark <= 59) {
    console.log("Your Grade is D");
} else if (mark >= 60 && mark <= 79) {
    console.log("Your Grade is C");
} else if (mark >= 80 && mark <= 94) {
    console.log("Your Grade is B");
} else if (mark >= 95 && mark <= 100) {
    console.log("Your Grade is A");
} else {
    console.log("Invalid Mark!");
}