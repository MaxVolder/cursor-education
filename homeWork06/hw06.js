const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
    }];


// повертаємо список предметів
const getSubjects = student => {
    const subjects = Object.keys(student.subjects);
    const formattedSubjects = subjects.map(subject => {
      return subject.charAt(0).toUpperCase() + subject.slice(1).replace("_", " ");
    });
    return formattedSubjects;
  };
console.log(getSubjects(students[0]));


// повертаємо середню оцінку по усім предметам для переданого студента
const getAverageMark = student => {
    const allMarks = Object.values(student.subjects).flatMap(subject => subject);
    const sumMarks = allMarks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const averageMark = sumMarks / allMarks.length;
    return averageMark.toFixed(2);
  };
console.log(getAverageMark(students[0]));


//повертаємо інформацію загального виду по переданому студенту
function getStudentInfo(student) {
    const info = {
      course: student.course,
      name: student.name,
      averageMark: getAverageMark(student)
    };
    return info;
  }
  
  console.log(getStudentInfo(students[0])); 


//повертаємо імена студентів у алфавітному порядку  
const getStudentsNames = students => students.map(student => student.name).sort();
console.log(getStudentsNames(students));


//повертаємо кращого студента зі списку по показнику середньої оцінки
const getBestStudent = students => {
    const bestStudent = students.reduce((prevStudent, currentStudent) => {
      const prevAverageMark = getAverageMark(prevStudent);
      const currentAverageMark = getAverageMark(currentStudent);
      return prevAverageMark > currentAverageMark ? prevStudent : currentStudent;
    });
  
    return bestStudent.name;
  };
  console.log(getBestStudent(students)); 


// створюємо обєкт де ключ це букви, а значення їх повторення
  function calculateWordLetters(word) {
    const letters = {};
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (letters[letter]) {
        letters[letter]++;
      } else {
        letters[letter] = 1;
      }
    }
    return letters;
  }
  
  console.log(calculateWordLetters("тест")); // { "т": 2, "е": 1, "с": 1 }
    
