"use client"

import { Menu as MenuIcon } from "@mui/icons-material"
import { Menu, Button, IconButton, MenuItem } from "@mui/material"
import Link from "./Link"
import { useState } from "react"

const Navigator = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  return (
    <>
      <IconButton
        onClick={(event) => setAnchorEl(event.currentTarget)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClick={() => setAnchorEl(null)}
        onClose={() => setAnchorEl(null)}
      >
        <Link href="/">
          <MenuItem>Home</MenuItem>
        </Link>
        <Link href="/shapes">
          <MenuItem>Shapes</MenuItem>
        </Link>
        <Link href="/report">
          <MenuItem>Report</MenuItem>
        </Link>
      </Menu>
    </>
  )
}

export default Navigator
