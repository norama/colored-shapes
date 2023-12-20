import { Box, Grid } from "@mui/material"
import {
  Check as CheckIcon,
  DoneAll as DoneAllIcon,
  Verified as VerifiedIcon,
} from "@mui/icons-material"
import { useSelectedColoredShape } from "components/shapes/store/useSelection"
import type { TColoredShapeTemplate } from "types/index"
import ColoredShapeButton from "components/global/page/ColoredShapeButton"
import { setSelectedId } from "components/shapes/store/selection"
import { COLORS, SHAPES } from "constants/index"
import { emitUpdate } from "transmitter"

const getTemplateKey = ({ color, shape }: TColoredShapeTemplate) => `${color}-${shape}`

const ColoredShapeEditor = () => {
  const coloredShape = useSelectedColoredShape()

  if (!coloredShape) {
    return null
  }

  const selectedKey = getTemplateKey(coloredShape)

  return (
    <Grid container spacing={3} columns={2} margin="0.5rem 1.5rem 0 0" width="14rem">
      <Grid item xs={2} key="selected">
        <Box display="flex" justifyContent="center" marginBottom="1rem">
          <ColoredShapeButton
            coloredShape={coloredShape}
            onClick={() => setSelectedId(null)}
            hoveredContent={<DoneAllIcon />}
            size={112}
          />
        </Box>
      </Grid>
      {COLORS.map((color) =>
        SHAPES.map((shape) => {
          const templateKey = getTemplateKey({ color, shape })
          const isSelected = templateKey === selectedKey
          return (
            <Grid item key={templateKey}>
              <ColoredShapeButton
                key={isSelected ? null : templateKey}
                coloredShape={{ color, shape }}
                onClick={() => emitUpdate(coloredShape.id, { color, shape })}
                content={isSelected ? <VerifiedIcon /> : ""}
                hoveredContent={isSelected ? <VerifiedIcon /> : <CheckIcon />}
                disabled={isSelected}
              />
            </Grid>
          )
        }),
      )}
    </Grid>
  )
}

export default ColoredShapeEditor
