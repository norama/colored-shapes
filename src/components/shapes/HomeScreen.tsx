"use client"

import ColoredShapeButton from "./components/ColoredShapeButton"
import ColoredShapesBoard from "./components/ColoredShapesBoard"
import { DashboardCustomize as ShapesIcon } from "@mui/icons-material"
import Link from "@components/global/Link"
import { Box } from "@mui/material"

const HomeHeader = () => (
  <Box width="100%" display="flex" alignItems="center" justifyContent="center" marginBottom="2rem">
    <Link href="/shapes">
      <Box width={128}>
        <ColoredShapeButton
          coloredShape={{ shape: "circular", color: undefined }}
          content={<ShapesIcon fontSize="large" />}
          size={112}
        />
      </Box>
    </Link>
  </Box>
)

const HomeScreen = () => (
  <>
    <HomeHeader />
    <ColoredShapesBoard />
  </>
)

export default HomeScreen
