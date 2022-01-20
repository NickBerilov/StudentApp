import React from 'react';
import { Button, Typography } from '@mui/material';

import { useAppDispatch } from '../store/hooks';
import { openCreateModal } from '../store/studentSlice';

const CreateStudentButton = () => {
    const dispatch = useAppDispatch();

    return (
        <Button
            color="secondary"
            variant="contained"
            onClick={() => dispatch(openCreateModal())}
            disableElevation
        >
            <Typography color="common.white">
                New
            </Typography>
        </Button>
    );
};

export default CreateStudentButton;