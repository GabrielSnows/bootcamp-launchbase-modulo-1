// Marcar student como flunked se a grade
// for menor que 5.
// e, também, enviar uma mensagem

const classA = [
    {
        name: 'Mayk',
        grade: 9.8,
    },
    {
        name: 'Diego',
        grade: 10
    },
    {
        name: 'Fulano',
        grade: 2
    },
    {
        name: 'One more student',
        grade: 10
    }
]

const classB = [
    {
        name: 'Cleiton',
        grade: 10
    },
    {
        name: 'Robson',
        grade: 10
    },
    {
        name: 'Siclano',
        grade: 0
    },
    {
        name: 'New student',
        grade: 5
    }
]


function calculateAverage(students) {
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length
    return average
}


function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} average ${average}. Congratulations`)
    } else {
        console.log(`${turma} average ${average}. Is not good.`)
    }
}


function markAsFlunked(student) {
    student.flunked = false
    if (student.grade < 5) {
        student.flunked = true
    }
}


function sendMessageflunked(student) {
    if (student.flunked) {
        console.log(`${student.name} flunked!`)
    }
}


function studentsflunkeds(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendMessageflunked(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentsflunkeds(classA)
studentsflunkeds(classB)