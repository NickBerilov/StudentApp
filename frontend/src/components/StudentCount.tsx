import React from 'react';
import { Box, Typography } from '@mui/material';
import PersonOutline from '@mui/icons-material/PersonOutline';

import { useAppSelector } from '../store/hooks';
import { selectStudentCount } from '../store/studentSlice';

const StudentCount = () => {
    const count = useAppSelector(selectStudentCount);

    return (
        <Box display="flex" mx={4}>
            <PersonOutline/>
            <Typography>
                {count} STUDENTS
            </Typography>
        </Box>
    );
};

export default StudentCount;