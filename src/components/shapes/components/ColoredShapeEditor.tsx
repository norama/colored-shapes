import { Box, Grid } from "@mui/material"
import ColoredShapeImage from "./ColoredShapeImage"
import { useSelectedColoredShape } from "@components/shapes/store/useSelection"
import { TColor, TShape } from "@ts/shapes"
import ColoredShapeButton from "./ColoredShapeButton"

const ColoredShapeEditor = () => {
  const coloredShape = useSelectedColoredShape()

  if (!coloredShape) {
    return null
  }

  const COLORS: TColor[] = ["red", "green", "blue", "gold"]
  const SHAPES: TShape[] = ["square", "circular"]

  return (
    <Grid container spacing={3} columns={2} margin="2rem" width="14rem">
      <Grid item xs={2}>
        <Box display="flex" justifyContent="center" marginBottom="1rem">
          <ColoredShapeImage coloredShape={coloredShape} size={112} />
        </Box>
      </Grid>
      {COLORS.map((color) => (
        <>
          {SHAPES.map((shape) => (
            <Grid item key={`${color}-${shape}`}>
              <ColoredShapeButton coloredShape={{ color, shape }} />
            </Grid>
          ))}
        </>
      ))}
    </Grid>
  )
}

export default ColoredShapeEditor
