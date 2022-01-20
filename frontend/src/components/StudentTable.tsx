import React, { useCallback } from 'react';
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { openEditModal, selectStudents } from '../store/studentSlice';
import { Student } from '../types/Student';

const columns: GridColDef[] = [
    { field: 'name', headerName: 'NAME', width: 200 },
    { field: 'sex', headerName: 'SEX', width: 150 },
    { field: 'placeOfBirth', headerName: 'PLACE OF BIRTH', width: 200 },
    { field: 'dateOfBirth', headerName: 'DATE OF BIRTH', width: 150 },
    { field: 'email', headerName: 'EMAIL ADDRESS', width: 200 },
];

const StudentTable = () => {
    const dispatch = useAppDispatch();
    const students = useAppSelector(selectStudents);

    const onRowClick = useCallback(({ row: student }: GridRowParams) => {
        dispatch(openEditModal(student as Student))
    }, [dispatch]);

    return (
        <DataGrid
            columns={columns}
            rows={students}
            pageSize={10}
            checkboxSelection
            hideFooter
            autoHeight
            disableColumnFilter
            disableColumnMenu
            disableColumnSelector
            disableSelectionOnClick
            onRowClick={onRowClick}
            sx={{
                border: 'none',
                '& .MuiDataGrid-columnSeparator': {
                    display: 'none',
                },
                '& .MuiDataGrid-columnHeaderTitleContainer': {
                    padding: 0,
                },
            }}
        />
    );
};

export default StudentTable;