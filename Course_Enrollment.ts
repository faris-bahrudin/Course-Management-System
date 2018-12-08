interface Course {
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

interface Attendance {
    student: Student; // each attendance is tied to a student
    hasAttended: boolean;
    attendedDate: Date;
}

interface Appointment {
    lecturer: Lecturer;
    courseDetails: Course;
}

interface Student {
    studentName: string;
    matricNum: string;
    email: string;

}

interface Lecturer {
    lecturerName: string;
    staffNum: string;
    email: string;

}