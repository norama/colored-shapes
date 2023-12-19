import { Box } from "@mui/material"
import CountsBarChart from "./CountsBarChart"
import ColorInShapePieChart from "./ColorInShapePieChart"
import ShapeInColorPieChart from "./ShapeInColorPieChart"

const ChartsBoard = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    gap={3}
    width="100%"
  >
    <CountsBarChart />
    <Box display="flex" flexWrap="wrap" marginLeft="4rem">
      <ColorInShapePieChart />
      <ShapeInColorPieChart />
    </Box>
  </Box>
)

export default ChartsBoard
