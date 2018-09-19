/* Object Creation - Literal Notation */
const tac300 = {
  // properties
  code: 'TAC 300',
  name: 'Intro to Computer Science',
  room: '507',
  capacity: 15,
  teacher: 'Emily Pitts',
  students: [
    'Kevin Becker', 'Eliza Carrington', 'Stan Chiang',
    'Ziyi Fu', 'Kris Grant', 'Qianqian Jin', 'Jared Le Doux',
    'Frank Lin', 'Jana Ma', 'Cole Masaitis', 'Alex Perkins',
    'Teddy Raven', 'Charlie Sehres', 'Calvin Smith', 'Thomas Soto',
  ],
  // methods
  getClassTitle: function() {
    // NOTE: this refers to the object bein created
    // (so this.code evaluates to 'TAC 300' in this case)
    return this.code + ": " + this.name;
  },
}

/* Object Creation - Constructor Notation */
function SFCMClass(code, name, room, capacity, teacher, students) {
  // properties
  this.code = code;
  this.name = name;
  this.room = room;
  this.capacity = capacity;
  this.teacher = teacher;
  this.students = students || [];
  // methods
  this.getClassTitle = function() {
    return this.code + ": " + this.name;
  };
  this.addStudent = function(name) {
    // TODO: add name to list of students

    // update the UI
    renderClasses();
  };
  this.dropStudent = function(name) {
    // TODO: remove name from list of students

    // update the UI
    renderClasses();
  };
  this.isStudentInClass = function(name) {
    // TODO: return true if student is in class, false otherwise

    // update the UI
    renderClasses();
  },
  this.renderClass = function(parent) {
    /* Displays the class info on the page by dynamically creating HTML elements */
    // create a new element to render the class inside
    var classEl = document.createElement('div');
    classEl.id = this.code;
    classEl.className = 'sfcmClass';
    parent.appendChild(classEl);

    // render basic class info
    var infoEl = document.createElement('div')
    var info = document.createTextNode(this.getClassTitle() + " (" + this.teacher + ")");
    infoEl.appendChild(info);
    infoEl.className = 'classInfo';
    classEl.appendChild(infoEl);

    // render class list
    var listEl = document.createElement('div')
    for (var i = 0; i < this.students.length; i++) {
      console.log('here');
      var studentEl = document.createElement('div');
      var student = document.createTextNode(this.students[i]);
      studentEl.appendChild(student);
      studentEl.className = 'classStudent';
      listEl.appendChild(studentEl);
    }
    listEl.className = 'classList';
    classEl.appendChild(listEl);
  }
}

/* Objects intialized using the SFCMClass constructor */
allClasses = [];
// var tac300 = new SFCMClass('TAC300', 'Intro to Computer Science', '507', 15, 'Emily Pitts', [
//   'Kevin Becker', 'Eliza Carrington', 'Stan Chiang',
//   'Ziyi Fu', 'Kris Grant', 'Qianqian Jin', 'Jared Le Doux',
//   'Frank Lin', 'Jana Ma', 'Cole Masaitis', 'Alex Perkins',
//   'Teddy Raven', 'Charlie Sehres', 'Calvin Smith', 'Thomas Soto',
// ]);
// allClasses.push(tac300);
// var tac120 = new SFCMClass('TAC120', 'Production Techniques in Logic Pro', '512', 20, 'Mary-Clare Bryztwa');
// allClasses.push(tac120);


/* Rendering Logic */
function renderClasses() {
  parentEl = document.getElementById('classes');
  parentEl.innerHTML = '';

  for (var i = 0; i < allClasses.length; i++) {
    allClasses[i].renderClass(parentEl);
  }
}

document.addEventListener("DOMContentLoaded", renderClasses);
