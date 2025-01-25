# Example usage

const sms = new StudentManagementSystem();

# Adding students

sms.addStudent("Alice", 101);
sms.addStudent("Bob", 102);

# Adding grades

sms.addGradeToStudent(101, 85);
sms.addGradeToStudent(101, 90);
sms.addGradeToStudent(102, 78);
sms.addGradeToStudent(102, 88);

# Viewing student details

sms.viewStudentDetails(101);
sms.viewStudentDetails(102);
sms.viewStudentDetails(103); // Student not found

# Adding invalid grade

sms.addGradeToStudent(101, 110); // Invalid grade
