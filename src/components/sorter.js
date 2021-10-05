import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export default function SortMenu({ sortSelect, sort }) {
  const [anchorEl, setAnchorEl] = useState(null)

  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (value) => {
    sortSelect(value)
    setAnchorEl(null)
  }

  return (
    <Box pl={10}>
      <Button
        id="demo-customized-button"
        aria-controls="demo-customized-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        size="large"
        //width={300}
      >
        Sort by {sort}
      </Button>
      <Menu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose('A-Z')} disableRipple>
          By name A-Z
        </MenuItem>
        <MenuItem onClick={() => handleClose('Z-A')} disableRipple>
          By name Z-A
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={() => handleClose('Type A-Z')} disableRipple>
          By first type A-Z
        </MenuItem>
        <MenuItem onClick={() => handleClose('Type Z-A')} disableRipple>
          By first type Z-A
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={() => handleClose('Id')} disableRipple>
          Number
        </MenuItem>
      </Menu>
    </Box>
  )
}
