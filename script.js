let students = [
  {
    name: [],
    firstNote: [],
    secondNote: [],
    average: [],
  },
  {
    name: [],
    firstNote: [],
    secondNote: [],
    average: [],
  },
  {
    name: [],
    firstNote: [],
    secondNote: [],
    average: [],
  },
  {
    name: [],
    firstNote: [],
    secondNote: [],
    average: [],
  },
]

for (let student of students) {
  student.name = prompt(`Qual o nome do(a) aluno(a)?`)
}

for (index = 0; index < 4; index++) {
  students[index].firstNote = Number(prompt(`Qual a primeira nota do(a) Aluno(a) ${students[index].name}`))
  students[index].secondNote = Number(prompt(`Qual a segunda nota do(a) Aluno(a) ${students[index].name}`))
}

function fAverage (x, y) {
  return ((x + y) / 2)
}

for (index = 0; index < 4; index++) {
  students[index].average = fAverage (students[index].firstNote, students[index].secondNote)
}

for (index = 0; index < 4; index++) {
  if (students[index].average > 7) {
    alert(`A média do(a) aluno(a) ${students[index].name} é: ${students[index].average} \n Parebéns ${students[index].name}, você foi aprovado(a) no concurso!`)
  } else {
    alert(`A média do(a) aluno(a) ${students[index].name} é: ${students[index].average} \n Não foi dessa vez ${students[index].name}, continue estudando!`)
  }
}

// console.log(students[0].average, students[1].average, students[2].average, students[3].average)



