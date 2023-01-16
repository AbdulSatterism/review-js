

function getGrade(marks) {
    if (marks >= 80) {
        console.log("You got A+");
    }
    else if (marks >= 70 && marks <= 79) {
        console.log("you got A")
    }
    else if (marks >= 60 && marks <= 67) {
        console.log("you got A-")
    }
    else if (marks >= 50 && marks <= 59) {
        console.log("you got B")
    }
    else if (marks >= 40 && marks <= 49) {
        console.log("you got C")
    }
    else if (marks >= 33 && marks <= 39) {
        console.log("you got D")
    }

    else {
        console.log("oh You are faill")
    }

    return marks;
}

let marks = 70;
let result = getGrade(marks);
console.log(result)