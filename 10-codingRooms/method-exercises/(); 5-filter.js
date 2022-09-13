/*
Filtrar a los estudiantes y dejar en el arreglo a todos aquellos que aprobaron el curso, 
la calificación mínima para aprobar es 10.
*/

let students = [
    {
      name: 'Álvaro',
      score: 10,
    },
    {
      name: 'Daniel',
      score: 16,
    },
    {
      name: 'Álex',
      score: 12,
    },
    {
      name: 'Rafa',
      score: 17,
    },
    {
      name: 'Alejandro',
      score: 8,
    },
    {
      name: 'Sofía',
      score: 9,
    }
  ];
  
  let passingStudents = students.filter((student) => {
      return student.score >= '10';
  });
  
  console.log(passingStudents);