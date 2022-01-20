import React, { useCallback, useState } from 'react';
import {
    Box,
    Button,
    Dialog,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
} from '@mui/material';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
    addStudent,
    closeModal,
    editStudent,
    removeStudent,
    selectCurrentStudent,
    selectIsModalOpen,
} from '../store/studentSlice';
import { Student } from '../types/Student';
import { createStudent, deleteStudent, updateStudent } from '../api/studentsApi';
import { SexEnum } from '../types/enums';

const EditStudentModal = () => {
    const dispatch = useAppDispatch();
    const currentStudent = useAppSelector(selectCurrentStudent);
    const isModalOpen = useAppSelector(selectIsModalOpen);
    const [student, setStudent] = useState<Partial<Student>>(currentStudent || {
        name: '',
        sex: SexEnum.Male,
        placeOfBirth: '',
        dateOfBirth: '',
        email: '',
    });

    const onChange = useCallback((fieldName: string) =>
        (e: React.ChangeEvent<{ value: string }> | SelectChangeEvent<string>) => {
            setStudent((s: Partial<Student>) => ({ ...s, [fieldName]: e.target.value }));
        },
        [],
    );

    const onSubmit = useCallback(() => {
        const apiAction = currentStudent ? updateStudent : createStudent;
        const dispatchAction = currentStudent ? editStudent : addStudent;

        apiAction(student as Student)
            .then((result) => {
                dispatch(dispatchAction(result));
                dispatch(closeModal());
            });
    }, [dispatch, currentStudent, student]);

    const onDelete = useCallback(() => {
        currentStudent && deleteStudent(currentStudent.id)
            .then(() => {
                dispatch(removeStudent(currentStudent.id));
                dispatch(closeModal())
            });
    }, [dispatch, currentStudent]);

    const isSubmitDisabled = !(
        student.name && student.sex && student.placeOfBirth && student.dateOfBirth && student.email
    );

    return(
        <Dialog open={isModalOpen} onClose={() => dispatch(closeModal())} fullWidth>
            <Paper>
                <Box display="flex" flexDirection="column" p={3}>
                    <Typography variant="h6" color="textSecondary">
                        {currentStudent ? "Edit" : "Create"} student
                    </Typography>
                    <Box my={2}>
                        <TextField
                            value={student.name}
                            onChange={onChange("name")}
                            label="Name"
                        />
                    </Box>
                    <Box mb={2}>
                        <Select
                            value={student.sex}
                            onChange={onChange("sex")}
                            size="small"
                            fullWidth
                        >
                            <MenuItem value={SexEnum.Male}>Male</MenuItem>
                            <MenuItem value={SexEnum.Female}>Female</MenuItem>
                        </Select>
                    </Box>
                    <Box mb={2}>
                        <TextField
                            value={student.placeOfBirth}
                            onChange={onChange("placeOfBirth")}
                            label="Place of birth"
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            value={student.dateOfBirth}
                            onChange={onChange("dateOfBirth")}
                            label="Date of birth"
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            value={student.email}
                            onChange={onChange("email")}
                            label="Email"
                        />
                    </Box>
                    <Box display="flex" justifyContent="flex-end">
                        {currentStudent && (
                            <Box mr={2}>
                                <Button
                                    color="error"
                                    variant="contained"
                                    onClick={onDelete}
                                    disableElevation>
                                    <Typography color="common.white">
                                        Delete
                                    </Typography>
                                </Button>
                            </Box>
                        )}
                        <Button
                            color="secondary"
                            variant="contained"
                            onClick={onSubmit}
                            disableElevation
                            disabled={isSubmitDisabled}
                        >
                            <Typography color="common.white">
                                Submit
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Dialog>
    );
};

export default EditStudentModal;