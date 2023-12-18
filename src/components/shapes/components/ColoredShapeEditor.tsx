import { Box, Grid } from "@mui/material"
import { useSelectedColoredShape } from "@components/shapes/store/useSelection"
import { TColor, TShape } from "@ts/shapes"
import ColoredShapeButton from "./ColoredShapeButton"
import { updateColoredShape } from "@store/shapes"
import { setSelectedId } from "@components/shapes/store/selection"

const ColoredShapeEditor = () => {
  const coloredShape = useSelectedColoredShape()

  if (!coloredShape) {
    return null
  }

  const COLORS: TColor[] = ["red", "green", "blue", "gold"]
  const SHAPES: TShape[] = ["square", "circular"]

  return (
    <Grid container spacing={3} columns={2} margin="2rem" width="14rem">
      <Grid item xs={2} key="selected">
        <Box display="flex" justifyContent="center" marginBottom="1rem">
          <ColoredShapeButton
            coloredShape={coloredShape}
            onClick={() => setSelectedId(null)}
            size={112}
          />
        </Box>
      </Grid>
      {COLORS.map((color) =>
        SHAPES.map((shape) => (
          <Grid item key={`${color}-${shape}`}>
            <ColoredShapeButton
              coloredShape={{ color, shape }}
              onClick={() => updateColoredShape(coloredShape.id, { color, shape })}
            />
          </Grid>
        )),
      )}
    </Grid>
  )
}

export default ColoredShapeEditor
