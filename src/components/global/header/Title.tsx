"use client"

import { Box, Typography } from "@mui/material"
import {
  Home as HomeIcon,
  DashboardCustomize as ShapesIcon,
  PieChart as ReportIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material"
import { usePathname } from "next/navigation"

interface RouteIconProps {
  route: string
}

const RouteIcon = ({ route }: RouteIconProps) => {
  switch (route) {
    case "shapes":
      return <ShapesIcon />
    case "report":
      return <ReportIcon />
    default:
      return <HomeIcon />
  }
}

const Title = () => {
  const path = usePathname()
  const parts = path.split("/")

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <RouteIcon route={parts[1]} />
      {parts[2] && (
        <>
          <ChevronRightIcon />
          <Typography variant="h6">{parts[2]}</Typography>
        </>
      )}
    </Box>
  )
}

export default Title
