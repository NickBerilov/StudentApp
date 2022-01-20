import React, { useEffect } from 'react';
import { Box, Container, Paper } from '@mui/material';

import { fetchStudents } from '../api/studentsApi';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectIsModalOpen, setStudentList } from '../store/studentSlice';

import SearchBar from './SearchBar';
import StudentCount from './StudentCount';
import CreateStudentButton from './CreateStudentButton';
import StudentTablePagination from './StudentTablePagination';
import StudentTable from './StudentTable';
import EditStudentModal from './EditStudentModal';

const StudentsTab = () => {
    const dispatch = useAppDispatch();
    const isModalOpen = useAppSelector(selectIsModalOpen);

    useEffect(() => {
        fetchStudents()
            .then((students) => dispatch(setStudentList(students)));
    }, [dispatch]);

    return (
        <Container>
            <Paper>
                <Box p={4} minHeight="80vh">
                    <Box display="flex" justifyContent="space-between" alignItems="flex-end" mb={3}>
                        <Box display="flex" alignItems="flex-end">
                            <SearchBar/>
                            <StudentCount/>
                            <CreateStudentButton/>
                        </Box>
                        <StudentTablePagination/>
                    </Box>
                    <Box>
                        <StudentTable/>
                    </Box>
                </Box>
            </Paper>
            {isModalOpen && <EditStudentModal/>}
        </Container>
    );
};

export default StudentsTab;