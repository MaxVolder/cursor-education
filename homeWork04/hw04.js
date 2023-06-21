const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
function getGenderPairs(students) {
  const maleStudents = [];
  const femaleStudents = [];

  for (const student of students) {
    if (student.endsWith("а")) {
      femaleStudents.push(student);
    } else {
      maleStudents.push(student);
    }
  }

  const pairs = [];
  const count = Math.min(maleStudents.length, femaleStudents.length);

  for (let i = 0; i < count; i++) {
    const male = maleStudents[i];
    const female = femaleStudents[i];
    const pair = [male, female];
    pairs.push(pair);
  }

  return pairs;
}


function assignThemes(pairs, themes) {
  const pairedThemes = [];

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i];
    const theme = themes[i];
    const pairedTheme = pair.join(" і ") + ", " + theme;
    pairedThemes.push(pairedTheme);
  }

  return pairedThemes;
}

function assignMarks(students, marks) {
  const markedStudents = [];

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const mark = marks[i];
    const markedStudent = [student, mark];
    markedStudents.push(markedStudent);
  }

  return markedStudents;
}

function assignRandomMarks(pairsWithThemes) {
  const pairedThemesWithMarks = [];

  for (let i = 0; i < pairsWithThemes.length; i++) {
    const pairWithTheme = pairsWithThemes[i];
    const randomMark = Math.floor(Math.random() * 5) + 1;
    const pairedThemeWithMark = pairWithTheme.concat(randomMark);
    pairedThemesWithMarks.push(pairedThemeWithMark);
  }

  return pairedThemesWithMarks;
}

const pairs = getGenderPairs(students);
console.log("Pairs:", pairs);

const pairsWithThemes = assignThemes(pairs, themes);
console.log("Pairs with Themes:", pairsWithThemes);

const markedStudents = assignMarks(students, marks);
console.log("Marked Students:", markedStudents);

const finalResult = assignRandomMarks(pairsWithThemes);
console.log("Final Result:", finalResult);