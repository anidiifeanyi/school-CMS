// Student Management System using OOP principles

// Base class: Person (Abstraction and Encapsulation)
class Person {
	constructor(name, id) {
		this._name = name
		this._id = id
	}

	getName() {
		return this._name
	}

	getId() {
		return this._id
	}
}

// Derived class: Student (Inheritance)
class Student extends Person {
	constructor(name, id) {
		super(name, id)
		this._grades = []
	}

	// Method to add grades (Encapsulation)
	addGrade(grade) {
		if (grade >= 0 && grade <= 100) {
			this._grades.push(grade)
		} else {
			console.log(
				`Invalid grade: ${grade}. Grade must be between 0 and 100.`
			)
		}
	}

	// Method to get all grades
	getGrades() {
		return this._grades
	}

	// Method to calculate the average grade (Polymorphism)
	calculateAverage() {
		if (this._grades.length === 0) {
			return 'No grades available.'
		}
		const sum = this._grades.reduce((acc, grade) => acc + grade, 0)
		return (sum / this._grades.length).toFixed(2)
	}

	// Method to view student details
	getDetails() {
		return `Student ID: ${this.getId()}, Name: ${this.getName()}, Grades: ${this.getGrades().join(
			', '
		)}, Average Grade: ${this.calculateAverage()}`
	}
}

// Main class to manage students (Encapsulation)
class StudentManagementSystem {
	constructor() {
		this._students = []
	}

	// Method to add a new student
	addStudent(name, id) {
		if (this._students.some((student) => student.getId() === id)) {
			console.log(`Student with ID ${id} already exists.`)
		} else {
			const newStudent = new Student(name, id)
			this._students.push(newStudent)
			console.log(`Student ${name} added successfully.`)
		}
	}

	// Method to find a student by ID
	findStudentById(id) {
		return this._students.find((student) => student.getId() === id)
	}

	// Method to view details of a student
	viewStudentDetails(id) {
		const student = this.findStudentById(id)
		if (student) {
			console.log(student.getDetails())
		} else {
			console.log(`Student with ID ${id} not found.`)
		}
	}

	// Method to add grades to a student
	addGradeToStudent(id, grade) {
		const student = this.findStudentById(id)
		if (student) {
			student.addGrade(grade)
			console.log(`Grade ${grade} added to student ID ${id}.`)
		} else {
			console.log(`Student with ID ${id} not found.`)
		}
	}
}
