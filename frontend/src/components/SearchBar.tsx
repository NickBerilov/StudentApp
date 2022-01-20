import React from 'react';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import Search from '@mui/icons-material/Search';

import { useAppDispatch } from '../store/hooks';
import { setSearchSlug } from '../store/studentSlice';

const SearchBar = () => {
    const dispatch = useAppDispatch();

    return (
        <Box>
            <Typography color="textSecondary">
                SEARCH FOR NAME
            </Typography>
            <TextField
                size="small"
                color="secondary"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    ),
                }}
                onChange={(e) => dispatch(setSearchSlug(e.target.value))}
            />
        </Box>
    );
};

export default SearchBar;