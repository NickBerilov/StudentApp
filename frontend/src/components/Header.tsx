import React from 'react';
import { AppBar, Avatar, Box, Container, Typography } from '@mui/material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

const Header = () => (
    <AppBar position="static" color="transparent" elevation={0}>
        <Container>
            <Box display="flex" justifyContent="space-between" p={4}>
                <Box>
                    <Typography variant="h3" color="primary" sx={{ fontWeight: 'bold' }}>
                        SAF
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Student Administration Framework
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <Avatar sx={{ width: 48, height: 48 }}/>
                    <Box ml={2} mr={1}>
                        <Typography variant="body1">
                            Adam
                        </Typography>
                    </Box>
                    <KeyboardArrowDown color="disabled" fontSize="small"/>
                </Box>
            </Box>
        </Container>
    </AppBar>
);

export default Header;