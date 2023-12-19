import {
  Home as HomeIcon,
  DashboardCustomize as ShapesIcon,
  PieChart as ReportIcon,
} from "@mui/icons-material"

interface RouteIconProps {
  route: string
  fontSize?: "small" | "medium" | "large" | "inherit"
}

const RouteIcon = ({ route, fontSize }: RouteIconProps) => {
  switch (route) {
    case "shapes":
      return <ShapesIcon fontSize={fontSize} />
    case "report":
      return <ReportIcon fontSize={fontSize} />
    default:
      return <HomeIcon fontSize={fontSize} />
  }
}

export default RouteIcon
