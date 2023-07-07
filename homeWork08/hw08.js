class Student {
    constructor(course, university, name) {
      this.course = course;
      this.university = university;
      this.name = name;
      this._marks = [];
      this.dismissed = false;
    }
  
    getInfo() {
      return `Студент ${this.course}го курсу ${this.university}, ${this.name}`;
    };

    get marks() {
      return this._marks;
    };
  
    set marks(mark) {
      this.marks === null ? null : this.marks.push(item)
    };

    getAverageMark() {
      if (this._marks.length === 0) {
        return 0;
      };
  
      const sum = this._marks.reduce((total, mark) => total + mark);
      return sum / this._marks.length;
    };
  
    dismiss() {
      this.dismissed = true;
      this._marks = null;
    };
  
    recover() {
      this.dismissed = false;
      this._marks = [];
    };
  };
const student = new Student(1, "Вищої Школи Психотерапії м. Одеса", "Остап Родоманський Бендер");
console.log(student.getInfo()); 

student.marks = 5;
console.log(student.marks); 
  
student.marks = 4;
student.marks = 4;
student.marks = 5;
console.log(student.marks);
console.log(student.getAverageMark());
  
student.dismiss();
student.marks = 5;
console.log(student.marks); // Виведе null
  
student.recover();
student.marks = 5;
console.log(student.marks); // Виведе [5]
// Advance
class BudgetStudent extends Student {
  constructor(course, university, name, isBudget) {
    super(course, university, name, isBudget);
    this.scholarshipTimer = setInterval(() => {
      if (this.isBudget && !this.dismissed) {
        this.getScholarship();
      }
    }, 30000);
  };
  
  getScholarship() {
    if (this.getAverageMark() >= 4.0) {
      console.log("Ви отримали 1400 грн. стипендії.");
    }
  }
};
