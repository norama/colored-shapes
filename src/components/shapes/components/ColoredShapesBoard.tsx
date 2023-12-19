import { Box } from "@mui/material"
import { Visibility as ViewIcon } from "@mui/icons-material"
import ColoredShape from "./ColoredShape"
import Link from "components/global/Link"
import { useColoredShapes } from "store/useShapes"

const ColoredShapesBoard = () => {
  const coloredShapes = useColoredShapes()

  return (
    <Box width="100%" display="flex" alignItems="center" flexWrap="wrap" gap={2}>
      {coloredShapes.map(({ id }) => (
        <Link href={`/shapes/${id}`} key={id}>
          <ColoredShape id={id} hoveredContent={<ViewIcon />} />
        </Link>
      ))}
    </Box>
  )
}

export default ColoredShapesBoard
