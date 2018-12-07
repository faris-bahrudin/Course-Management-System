interface Course{
    courseName: string;
    courseCode: string;
    courseType: CourseType;
    creditHours: number;
    section: Section[];
}

enum CourseType {
    ACADEMIC,
    COCURRICULUM
}

interface Section {
    sectionNumber: number;
    lecture: Lecturer[];
    studentNumber: number;
    attendance: Attendance[];

}

interface Attendance{

}

interface Lecturer{

}