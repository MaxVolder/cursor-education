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
      if (!this.dismissed) {
        this._marks.push(mark);
      }
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
console.log(student.marks);
  
student.recover();
student.marks = 5;
console.log(student.marks); 
// Advance
class BudgetStudent extends Student {
  constructor(course, university, name, isBudget) {
    super(course, university, name, isBudget);
    this.isBudget = isBudget;
    this.scholarshipTimer = setInterval(() => {
      if (this.isBudget && !this.dismissed) {
        this.getScholarship();
      }
    }, 30000);
  };
  
  getScholarship() {
    if (this.getAverageMark() >= 4.0) {
      console.log(`студент ${this.name} отримав степендію в розмірі 1400 грн`);
    }
    else {
      console.log(`студент ${this.name} не отримав степендії`);
    }
  }
};
const student2 = new BudgetStudent(3, "Hogwards", "Volandemort", true);
student2.marks = 2;
student2.marks = 2;
student2.marks = 1;
student2.marks = 4;
console.log(student2.getScholarship());