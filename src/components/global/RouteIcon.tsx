import {
  Home as HomeIcon,
  DashboardCustomize as ShapesIcon,
  PieChart as ReportIcon,
} from "@mui/icons-material"

interface RouteIconProps {
  route: string
  fontSize?: "small" | "medium" | "large" | "inherit" | string
}

const RouteIcon = ({ route, fontSize }: RouteIconProps) => {
  switch (route) {
    case "shapes":
      return <ShapesIcon sx={{ fontSize }} />
    case "report":
      return <ReportIcon sx={{ fontSize }} />
    default:
      return <HomeIcon sx={{ fontSize }} />
  }
}

export default RouteIcon
