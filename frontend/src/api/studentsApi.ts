import API from './apiService';
import { Student } from '../types/Student';

export const fetchStudents = async (): Promise<Student[]> => {
    const { data } = await API.get('/students/all');
    return data;
};

export const createStudent = async (student: Omit<Student, 'id'>): Promise<Student> => {
    const { data } = await API.post('/students/new', student);
    return data;
};

export const updateStudent = async (student: Student): Promise<Student> => {
    const { data } = await API.post(`/students/${student.id}`, student);
    return data;
};

export const deleteStudent = async (id: string): Promise<null> => {
    const { data } = await API.delete(`/students/${id}`);
    return data;
};