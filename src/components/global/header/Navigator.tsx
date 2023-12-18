"use client"

import {
  Menu as MenuIcon,
  Home as HomeIcon,
  DashboardCustomize as ShapesIcon,
  PieChart as ReportIcon,
} from "@mui/icons-material"
import { Menu, IconButton, MenuItem } from "@mui/material"
import styled from "@emotion/styled"
import Link from "@components/global/Link"
import { useState } from "react"

const StyledMenuItem = styled(MenuItem)`
  width: 5rem;
  justify-content: center;
`

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
          <StyledMenuItem>
            <HomeIcon />
          </StyledMenuItem>
        </Link>
        <Link href="/shapes">
          <StyledMenuItem>
            <ShapesIcon />
          </StyledMenuItem>
        </Link>
        <Link href="/report">
          <StyledMenuItem>
            <ReportIcon />
          </StyledMenuItem>
        </Link>
      </Menu>
    </>
  )
}

export default Navigator
