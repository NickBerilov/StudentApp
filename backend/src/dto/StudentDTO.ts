import { Student } from '../types/Student';

export type StudentDTO = Omit<Student, 'id'>;