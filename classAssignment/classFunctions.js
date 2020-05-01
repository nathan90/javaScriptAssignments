// schoolClass = {
// 	name    : "Class A",
//   teacherName   : "Mary",
//   students  : [{ 
//     name: "nijesh",
//     id: 101, 
//     marks: [
//        //{subject: "english", mark : 90},
//        {subject: "maths", mark : 40}
//         ]
//   },{ 
//     name: "babu",
//     id: 102, 
//     marks: [
//        {subject: "english", mark : 80},
//        {subject: "maths", mark : 60}
//         ]
//   }]
// }

// add the new student to existing school class
addStudent = (schoolClass, name, id) => {
    let marks;
    let newStudent = {name, id, marks};
    //console.log(newStudent);
    schoolClass.students.push(newStudent);
    return schoolClass;
}
//Testing the function
//console.log(addStudent(schoolClass,"Lasar", 103 ))

//adds marks to a single subject for a single student
enterMarksStudent = (schoolClass, id, markObject) => {
    let studentsArray = schoolClass.students;
    for (let i =0; i < studentsArray.length; i++) {
        if (studentsArray[i].id === id) {
            schoolClass.students[i].marks.push(markObject);
            return schoolClass.students[i].marks;
        }
    }
}

//Test the function
// let markObject = {subject: "physics", mark : 80}
// enterMarksStudent(schoolClass, 102, markObject)

// enter marks for a subject for multiple students
enterMarksMultipleStudents = (schoolClass, studentsMarksArray) => {
    let len = studentsMarksArray.length;
    for (let i = 0; i < len ; i++) {
        let id = studentsMarksArray[i].id;
        let marksObject = studentsMarksArray[i].marks;
        enterMarksStudent(schoolClass, id, marksObject);
    }
    return schoolClass.students;
}

//test the function
// let studentsMarksArray = [{
//     id : 101,
//     mark : { subject: 'physics', mark: 80 }
// }, {
//     id : 102,
//     mark : { subject: 'physics', mark: 58 }
// }]

//console.log(enterMarksMultipleStudents(schoolClass, studentsMarksArray));

// edit mark for a subject for a student
editMarkSubjectStudent = (schoolClass, id, subject, newMark) => {
    let studentsArray = schoolClass.students;
    for (let i = 0; i < studentsArray.length; i++) {
        if (studentsArray[i].id === id) {
            let lenMarksArray = studentsArray[i].marks.length;
            for(let j = 0; j < lenMarksArray; j++) { 
                if(studentsArray[i].marks[j].subject === subject) {
                    schoolClass.students[i].marks[j].mark = newMark;
                    return (schoolClass.students[i]);
                }
            }
        }
    }
}
//test the function
//editMarkSubjectStudent(schoolClass, 102, "english", 99)

// change the class teacher
changeClassTeacher = (schoolClass, newTeacher) => {
    schoolClass.teacherName = newTeacher;
    return schoolClass;
}

//testing the function
//console.log(changeClassTeacher(schoolClass, newTeacher = "King Kong"));

// remove a student of particular id
removeStudent = (schoolClass, id) => {
    let studentsArray = schoolClass.students;
    let removedStudent;
    checkId = (studentsArray) =>  studentsArray.id === id;
    if (studentsArray.findIndex(checkId) != -1) {
        removedStudent = schoolClass.students.splice(studentsArray.findIndex(checkId), 1);   
    } 
    else {console.log(`No student with the id ${id} present in data`)}
    return removedStudent;
}

//testing the function
//console.log(removeStudent(schoolClass, 103))

//remove a subject from all students
removeSubject = (schoolClass, subject) => {
    let studentsArray = schoolClass.students;
    let studentsArrayLen = studentsArray.length;
    let removedSubjectArray = [];
    for (let i = studentsArrayLen - 1; i >= 0; i--) {
        let arraysubjects = studentsArray[i].marks;
        //console.log(arraysubjects)
        checkSubject = (arraysubjects) =>  arraysubjects.subject === subject;
        if (arraysubjects.findIndex(checkSubject,1) !== -1) {
            let removedSubject = schoolClass.students[i].marks.splice(arraysubjects.findIndex(checkSubject),1);
            let name = schoolClass.students[i].name;
            removedSubject = removedSubject[0];
            removedSubjectArray.push({name, removedSubject});
        }
        else {console.log(`The subject ${subject} not present for student id ${schoolClass.students[i].id}`)}
    }
    return removedSubjectArray
}

//testing the function
//removeSubject(schoolClass, subject = "maths")

//Get the topper in the class for a given subject
getTopper = (schoolClass, subject) => {
    let studentsArray = schoolClass.students;
    let topper = {};
    let topperMarks = 0;
    for (let i = 0; i < studentsArray.length; i++) {
        let marksArray = studentsArray[i].marks;
        try {
            let mark = marksArray.find(marksArray => marksArray.subject == subject).mark;
            if (mark > topperMarks) {
                topper.name = studentsArray[i].name;
                topper.mark = mark;
                topperMarks = mark;
            }
        } 
        catch(e) {console.log(`Subject ${subject} not present for ${studentsArray[i].name}`)}
    }
    return topper;
}

// x = getTopper(schoolClass, "physics")
// console.log(x)
// console.log(Object.keys(x).length === 0)

getAverageOfSubject = (schoolClass, subject) => {
    let studentsArray = schoolClass.students;
    let studentCount = 0;
    let sumOfMarks = 0;
    for (let i = 0; i < studentsArray.length; i++) {
        let marksArray = studentsArray[i].marks;
        try {
            let mark = marksArray.find(marksArray => marksArray.subject === subject).mark;
            sumOfMarks += mark;
            studentCount++;
        }
        catch (e) {
            console.log(`Subject ${subject} not present for ${studentsArray[i].name}`);
        }
    }
    let averageMarksSubject = sumOfMarks / studentCount;
    return (averageMarksSubject);
    
}

//Testing the function
// x = getAverageOfSubject(schoolClass, subject = "physics")
// console.log(isNaN(x))

sortByName = (schoolClass) => {
    schoolClass.students.sort((student1, student2) => student1.name.localeCompare(student2.name));
    return schoolClass;
}


sortByMarks = (schoolClass, subject) => {
    schoolClass.students.sort((student1, student2) => {
        let arraysubjects1 = student1.marks;
        let arraysubjects2 = student2.marks;
        checkSubject1 = (arraysubjects1) =>  arraysubjects1.subject === subject;
        checkSubject2 = (arraysubjects2) =>  arraysubjects2.subject === subject;
        //console.log(arraysubjects2.findIndex(checkSubject2))
        //console.log(arraysubjects1.findIndex(checkSubject1))
        return student2.marks[arraysubjects2.findIndex(checkSubject2)].mark - student1.marks[arraysubjects1.findIndex(checkSubject1)].mark;
    })
    return schoolClass;
}

//console.log(sortByMarks(schoolClass, subject = 'english'))
//console.table(schoolClass.students)

module.exports = {addStudent, enterMarksStudent, enterMarksMultipleStudents, editMarkSubjectStudent, changeClassTeacher,
removeStudent, removeSubject, getTopper, getAverageOfSubject, sortByName, sortByMarks}