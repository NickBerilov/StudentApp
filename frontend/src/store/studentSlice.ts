import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from './index';
import { Student } from '../types/Student';
import { STUDENTS_PER_PAGE } from '../types/constants';

interface StudentState {
    list: Student[],
    currentPage: number;
    currentStudent?: Student;
    searchSlug?: string;
    isModalOpen: boolean;
}

const initialState: StudentState = {
    list: [],
    currentPage: 1,
    isModalOpen: false,
};

export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        setStudentList: (state, { payload }: PayloadAction<Student[]>) => {
            state.list = payload;
        },
        addStudent: (state, { payload }: PayloadAction<Student>) => {
            state.list.push(payload);
        },
        editStudent: (state, { payload }: PayloadAction<Student>) => {
            state.list = state.list.map(e => e.id === payload.id ? payload : e);
        },
        removeStudent: (state, { payload }: PayloadAction<string>) => {
            state.list = state.list.filter(e => e.id !== payload);
        },
        setCurrentPage: (state, { payload }: PayloadAction<number>) => {
            state.currentPage = payload;
        },
        setSearchSlug: (state, { payload }: PayloadAction<string>) => {
            state.searchSlug = payload;
        },
        openCreateModal: state => {
            state.currentStudent = undefined;
            state.isModalOpen = true;
        },
        openEditModal: (state, { payload }: PayloadAction<Student>) => {
            state.currentStudent = payload;
            state.isModalOpen = true;
        },
        closeModal: state => {
            state.currentStudent = undefined;
            state.isModalOpen = false;
        }
    },
});

export const {
    setStudentList,
    addStudent,
    editStudent,
    removeStudent,
    setCurrentPage,
    setSearchSlug,
    openCreateModal,
    openEditModal,
    closeModal,
} = studentSlice.actions;

export const selectStudents = (state: RootState) => {
    const filteredStudents = state.students.searchSlug ?
        state.students.list
            .filter(e => e.name.toLowerCase().includes(state.students.searchSlug!.toLowerCase())) :
        state.students.list;

    return filteredStudents.slice(
        (state.students.currentPage - 1) * STUDENTS_PER_PAGE,
        state.students.currentPage * STUDENTS_PER_PAGE,
        );
}
export const selectStudentCount = (state: RootState) => state.students.list.length;
export const selectPageCount = (state: RootState) => Math.ceil(state.students.list.length / STUDENTS_PER_PAGE);
export const selectCurrentStudent = (state: RootState) => state.students.currentStudent;
export const selectIsModalOpen = (state: RootState) => state.students.isModalOpen;

export default studentSlice.reducer;