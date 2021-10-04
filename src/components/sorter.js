import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export default function SortMenu() {
    
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-controls="demo-customized-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Sort
            </Button>
            <Menu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} disableRipple>
                    <Box>By name A-Z</Box>
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    <Box>By name Z-A</Box>
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple>
                    <Box>By number -1 </Box>
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    <Box>By number +1 </Box>
                </MenuItem>
            </Menu>
        </div>
    );
}
