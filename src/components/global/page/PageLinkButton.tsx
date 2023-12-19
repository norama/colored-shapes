import { Box } from "@mui/material"
import Link from "components/global/Link"
import RouteIcon from "components/global/RouteIcon"
import ColoredShapeButton from "./ColoredShapeButton"

interface PageLinkButtonProps {
  route: "shapes" | "report" | ""
}

const PageLinkButton = ({ route }: PageLinkButtonProps) => (
  <Link href={`/${route}`}>
    <Box width={128}>
      <ColoredShapeButton
        coloredShape={{ shape: "circular" }}
        content={<RouteIcon route={route} fontSize="large" />}
        size={112}
      />
    </Box>
  </Link>
)

export default PageLinkButton
