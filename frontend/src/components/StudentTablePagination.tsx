import React from 'react';
import { Pagination } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectPageCount, setCurrentPage } from '../store/studentSlice';

const StudentTablePagination = () => {
    const dispatch = useAppDispatch();
    const pageCount = useAppSelector(selectPageCount);

    return (
        <Pagination
            count={pageCount}
            variant="outlined"
            shape="rounded"
            hideNextButton
            hidePrevButton
            onChange={(e, page) => dispatch(setCurrentPage(page))}
        />
    );
};

export default StudentTablePagination;