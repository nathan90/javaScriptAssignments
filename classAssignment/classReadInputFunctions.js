// This file contain all the functions required for class js
const readlineSync = require("readline-sync");
// const details = require("./classObjects.js");

// let schoolClass =details.schoolClass

readStudentDetails = (schoolClass) => {
    while (true) {
        let name = readlineSync.question("Enter the name of the student: ");
        let id = readlineSync.question("Enter the id of the student: ");
        id = parseInt(id);
        let studentsArray = schoolClass.students;
        if (!studentsArray.some(students => students.id === id)) {
            let newStudent = {name, id};
            return newStudent;
        } 
        console.log(`The id ${id} is already present, please enter a valid student`);
    }   
}

readSubjectMarks = (schoolClass) => {
    let studentsArray = schoolClass.students;
    while (true) {
        let id = parseInt(readlineSync.question("Enter the id of the student: ")); 
        if (studentsArray.some(obj => obj.id === id)) {
            return getSubjectMarks(studentsArray, id);
        } 
        console.log(`The id ${id} is not present, please enter a valid id`);
    }
}

getSubjectMarks = (studentsArray, id) => {
    let studentDetails = studentsArray.filter(student => {
        return student.id === id;
    })
    let markDetails = studentDetails[0].marks;
    let subject = getSubjectName(markDetails);
    let mark = parseInt(readlineSync.question(`Enter the mark of ${subject}: `));
        marks = {subject, mark};
    let studentMarks = {id, marks};
    return studentMarks;
}

// Returns subject which is not present in json
getSubjectName = (markDetails) => {
    while (true) {
        let subject = readlineSync.question("Enter the name of the subject: ");
        let isSubjectPresent = markDetails.some(markObject => markObject.subject === subject);
        if (!isSubjectPresent) return subject;
        console.log(`The subject ${subject} is already present, please enter a new subject`);
    }
}

//reads subject and marks for multiple students
readSubjectMarksMultiple = (schoolClass) => {
    let numberOfStudents = readlineSync.question("Enter the number of students to be entered: ");
    numberOfStudents = parseInt(numberOfStudents);
    let studentsMarksArray = [];
    for (let i = 0; i < numberOfStudents; i++) {
        studentsMarksArray.push(readSubjectMarks(schoolClass));
    }
    return studentsMarksArray;
}

readSubjectMarksEdit = (schoolClass) => {
    let studentsArray = schoolClass.students;
    let id = parseInt(readlineSync.question("Enter the id of the student: "));
    if (studentsArray.some(students => students.id === id)) {
        let studentDetails = studentsArray.filter(student => {
            return student.id === id;
        })
        let markDetails = studentDetails[0].marks;
        let subject = readlineSync.question("Enter the subject to be edited: ");
        let isSubjectPresent = markDetails.some(markObject => markObject.subject === subject);
        if (isSubjectPresent) {
            let newMark = readlineSync.question(`Enter the new mark for subject ${subject}: `);
            newMark = parseInt(newMark);
            return {id, subject, newMark};
        }
        else {console.log(`The subject ${subject} is not present for Id ${id}`)};
    }
    else {
        console.log(`The student with the Id ${id} is not present`);
    }
}
//console.log(readSubjectMarksEdit(schoolClass))

readNewClassTeacher = () => {
    let newTeacher = readlineSync.question('Enter the name of the new teacher: ');
    return newTeacher;
}

readStudentId = () => {
    let studentId = parseInt(readlineSync.question('Enter the id of the student to be removed: '));
    return studentId;
}

readSubjectToRemove = () => {
    let readSubjectToRemove = readlineSync.question('Enter the subject to be removed: ');
    return readSubjectToRemove;
}

readSubjectForTopper = () => {
    let subjectForTopper = readlineSync.question('Enter the subject for finding the topper: ');
    return subjectForTopper;
}

readSubjectForAverage = () => {
    let subjectForAverage = readlineSync.question('Enter the subject for finding average: ');
    return subjectForAverage;
}

readSortCriteria = () => {
    let sortCriteria = readlineSync.question("Enter 'name' for sorting by name \n or 'subject' for sorting by subject marks: ");
    return sortCriteria.toLowerCase();
}

readSortSubject = () => {
    let sortSubject = readlineSync.question("Enter the subject for sorting: ");
    return sortSubject.toLowerCase();
}

module.exports = {readStudentDetails, readSubjectMarks, readSubjectMarksMultiple, 
    readSubjectMarksEdit, readNewClassTeacher, readStudentId, readSubjectToRemove, readSubjectForTopper, 
    readSubjectForAverage, readSortCriteria, readSortSubject};