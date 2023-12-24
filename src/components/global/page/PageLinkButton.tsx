import { Box } from "@mui/material"
import Link from "components/global/Link"
import RouteIcon from "components/global/RouteIcon"
import ColoredShapeButton from "./ColoredShapeButton"

interface PageLinkButtonProps {
  route: "shapes" | "report" | ""
}

const PageLinkButton = ({ route }: PageLinkButtonProps) => (
  <Link href={`/${route}`}>
    <Box width={86}>
      <ColoredShapeButton
        coloredShape={{ shape: "circular" }}
        content={<RouteIcon route={route} fontSize="2.5rem" />}
        size={86}
      />
    </Box>
  </Link>
)

export default PageLinkButton
