// This file contain all the functions required for class js
const readlineSync = require("readline-sync");
schoolClass = {
	name    : "Class A",
  teacherName   : "Mary",
  students  : [{ 
    name: "nijesh",
    id: 101, 
    marks: [
       {subject: "english", mark : 90},
       {subject: "maths", mark : 40}
        ]
  },{ 
    name: "babu",
    id: 102, 
    marks: [
       {subject: "english", mark : 80},
       {subject: "maths", mark : 60}
        ]
  }]
}

/* This function is for response 2 which prompts the user to enter the subject and mark 
for a particular student */
readSubjectMarks = (schoolClass) => {
    studentsArray = schoolClass.students
    while (true) {
        let id = parseInt(readlineSync.question("Enter the id of the student: ")); 
        if (studentsArray.some(obj => obj.id === id)) {
            return getSubjectMarks(studentsArray, id);
        } 
        console.log(`The id ${id} is not present, please enter a valid id`);
    }
}

getSubjectMarks = (studentsArray, id) => {
    let studentDetails = studentsArray.filter(obj => {
        return obj.id === id;
    })
    let markDetails = studentDetails[0].marks;
    let noOfSubjects = parseInt(readlineSync.question("Enter the number of subjects to be entered: "));
    let marks = [];

    for (let i = 0; i < noOfSubjects; i++) {
        let subject = getSubjectName(markDetails);
        let mark = parseInt(readlineSync.question(`Enter the mark of ${subject}:`));
        marks.push({subject, mark});
    }
    let studentMarks = {id, marks};
    return studentMarks;
}

// Returns subject which is not present in json
getSubjectName = (markDetails) => {
    while (true) {
        let subject = readlineSync.question("Enter the name of the subject:");
        const isSubjectPresent = markDetails.some(markObject => markObject.subject === subject)
        if (!isSubjectPresent) return subject;

        console.log(`The subject ${subject} is already present, please enter a new subject`);
    }
}

console.log(readSubjectMarks(schoolClass))