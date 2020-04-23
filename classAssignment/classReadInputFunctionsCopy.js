// This file contain all the functions required for class js
const readlineSync = require("readline-sync");

/* This function is for response 1, This will take the student name, student id and marks for each subject as 
inputs from the user and returns the response as a json object */
readStudentDetails = (studentsArray) => {
    while (true) {
        let name = readlineSync.question("Enter the name of the student: ");
        let id = parseInt(readlineSync.question("Enter the id of the student: "));
        // check if the id is already present in the json object
        //let checkId= obj => obj.id === id;
        if (studentsArray.some(obj => obj.id === id)) {
            console.log(`The id ${id} is already present, please enter a valid student`);
        } else {
            let noOfSubjects = parseInt(readlineSync.question("Enter the number of subjects to be entered: "));
            let marks = [];

            for (let i = 0; i < noOfSubjects; i++) {
                let subject = readlineSync.question("Enter the name of the subject:");
                let mark = parseInt(readlineSync.question(`Enter the mark of ${subject}:`));
                marks.push({subject, mark});
                }
            let newStudent = {name, id ,marks};
            return newStudent;
        }   
    }
}

/* This function is for response 2 which prompts the user to enter the subject and mark 
for a particular student */
readSubjectMarks = (studentsArray) => {
    while (true) {
        let id = parseInt(readlineSync.question("Enter the id of the student: "));
        // check if the id is already present in the json object
        //let checkId= obj => obj.id === id;
        if (!studentsArray.some(obj => obj.id === id)) {
            console.log(`The id ${id} is not present, please enter a valid id`);
        } else {
             let studentDetails = studentsArray.filter(obj => {
                return obj.id === id;
              })
              let markDetails = studentDetails[0].marks;
            let noOfSubjects = parseInt(readlineSync.question("Enter the number of subjects to be entered: "));
            let marks = [];

            for (let i = 0; i < noOfSubjects; i++) {
                while (true) {
                    let subject = readlineSync.question("Enter the name of the subject:");
                    // Check if the subject is already present
                    let checkSubject= obj => obj.subject === subject;
                    if (markDetails.some(checkSubject) === true) {
                        console.log(`The subject ${subject} is already present, please enter a new subject`);
                    }
                    else {
                        let mark = parseInt(readlineSync.question(`Enter the mark of ${subject}:`));
                        marks.push({subject, mark});
                        break;
                    }
                }
            }
            let studentMarks = {id, marks};
            return studentMarks;
        }
    }
}

subjectMarksMultiple = (studentsArray) => {

}




 testFunction = () => {
     console.log("Calling from test function")
 }
module.exports = {readStudentDetails, readSubjectMarks, testFunction}