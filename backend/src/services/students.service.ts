import shortid from 'shortid';

import { Student } from '../types/Student';
import { StudentDTO } from '../dto/StudentDTO';

class StudentsService {
    private students: Student[] = [];

    findAll() {
        return this.students;
    }

    create(student: StudentDTO) {
        const newStudent = {
            ...student,
            id: shortid.generate(),
        };
        this.students.push(newStudent);
        return newStudent;
    }

    update(id: string, student: StudentDTO) {
        this.students = this.students.map((existingStudent) =>
            id === existingStudent.id ?
                { ...existingStudent, ...student } :
                existingStudent
        );
        return this.students.find((e) => e.id === id);
    }

    delete(id: string) {
        this.students = this.students.filter((existingStudent) => existingStudent.id !== id);
    }
}

export default new StudentsService();