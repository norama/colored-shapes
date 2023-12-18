"use client"

import { Box, Typography } from "@mui/material"
import {
  Home as HomeIcon,
  DashboardCustomize as ShapesIcon,
  PieChart as ReportIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material"
import { usePathname } from "next/navigation"
import Link from "@components/global/Link"

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
  const route = parts[1]
  const id = parts[2]

  return (
    <Box display="flex" alignItems="center" gap={2}>
      {route && (
        <>
          <Link href="/">
            <RouteIcon route="" />
          </Link>
          <ChevronRightIcon />
        </>
      )}
      <Link href={`/${route}`}>
        <RouteIcon route={route} />
      </Link>
      {id && (
        <>
          <ChevronRightIcon />
          <Typography variant="h6">{id}</Typography>
        </>
      )}
    </Box>
  )
}

export default Title
