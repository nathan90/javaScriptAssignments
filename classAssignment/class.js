const readlineSync = require("readline-sync");
const inputFunctions = require("./classReadInputFunctions")
const classFunctions =  require("./classFunctions")
const details = require("./classObjects.js");

let schoolClass =details.schoolClass;

console.log( "******************Class Details******************");
console.log("Type 1 to add a Student Details:");
console.log("Type 2 for entering subject and mark for a student:");
console.log("Type 3 for entering mark for a subject for multiple students:");
console.log("Type 4 for editing the mark of a particular subject for a student:");
console.log("Type 5 for changing the class teacher of a class:");
console.log("Type 6 for removing a student from a class:");
console.log("Type 7 for deleting a subject from every student:");
console.log("Type 8 for finding the topper for a given subject:");
console.log("Type 9 for finding the average mark for a given subject:");
console.log("Type 10 for sorting and displaying the details of students:");

let response = parseInt(readlineSync.question("Enter your Response: "));

if (response === 1) {
    let newStudent = inputFunctions.readStudentDetails(schoolClass);
    console.log(classFunctions.addStudent(schoolClass, newStudent.name, newStudent.id));
} 
else if (response === 2) {
    let studentMarks = inputFunctions.readSubjectMarks(schoolClass);
    console.log(classFunctions.enterMarksStudent(schoolClass, studentMarks.id, studentMarks.marks));
} 
else if (response === 3) {
    let studentsMarksArray = inputFunctions.readSubjectMarksMultiple(schoolClass)
    //console.log(studentsMarksArray);
    console.log(classFunctions.enterMarksMultipleStudents(schoolClass, studentsMarksArray)[0]);

} 
else if (response === 4) {
    studentNewMarkDetails = inputFunctions.readSubjectMarksEdit(schoolClass);
    //console.log(studentNewMarkDetails);
    if (studentNewMarkDetails != undefined) {
        let studentEdited = classFunctions.editMarkSubjectStudent(schoolClass, studentNewMarkDetails.id, studentNewMarkDetails.subject, studentNewMarkDetails.newMark);
        console.log(studentEdited);
    }
} 
else if (response === 5) {
    let newTeacher = inputFunctions.readNewClassTeacher();
    console.log(classFunctions.changeClassTeacher(schoolClass, newTeacher));   
}
else if (response === 6) {
    let studentId = inputFunctions.readStudentId();
    let removedStudent = classFunctions.removeStudent(schoolClass, studentId);
    if (removedStudent != undefined) console.log(removedStudent[0]);
}
else if (response === 7) {
    let subjectToRemove = inputFunctions.readSubjectToRemove();
    let removeSubjectArray = removeSubject(schoolClass,subjectToRemove);
    if (removeSubjectArray.length > 0) console.log(removeSubjectArray);
}
else if (response === 8) {
    let subject = inputFunctions.readSubjectForTopper();
    let topper = classFunctions.getTopper(schoolClass, subject);
    if (Object.keys(topper).length !== 0) console.log(topper);
}
else if (response === 9) {
    let subject = inputFunctions.readSubjectForAverage();
    let average = classFunctions.getAverageOfSubject(schoolClass, subject);
    if (!isNaN(average)) console.log(`Average for subject ${subject} is ${average}`);
}
else if (response === 10) {
    let sortCriteria = inputFunctions.readSortCriteria();
    if (sortCriteria === "name") console.log(sortByName(schoolClass).students);
    else if (sortCriteria === "subject") {
        let subject = readSortSubject();
        let sortedStudents = sortByMarks(schoolClass, subject).students;
        console.log(sortedStudents);
    } else console.log("Please enter a correct response");
}
else {
    console.log("Please enter a valid response");
}
