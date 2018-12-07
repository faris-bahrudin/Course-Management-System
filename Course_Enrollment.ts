interface Course{
    courseName: string;
    courseCode: string;
    courseType: CourseType;
    creditHours: number;
    section: Section[];
    lecturer: Lecturer[];
}

enum CourseType {
    ACADEMIC,
    COCURRICULUM
}

interface Section {
    sectionNumber: number;
    studentNumber: number;
    attendance: Attendance;
    appointment: Appointment;

}

interface Attendance{
    student:Student[];
}

interface Appointment{
    lecturer:Lecturer;
}


interface Student{
    Studentname:string;
    matrixno:string;
    email:string;

}

interface Lecturer{
    lecturername:string;
    staffno:string;
    email:string;

}