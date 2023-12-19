import { computed } from "nanostores"
import { $coloredShapes } from "store/shapes"

export const $report = computed($coloredShapes, (coloredShapes) =>
  coloredShapes.reduce(
    (acc, coloredShape) => {
      acc[coloredShape.shape][coloredShape.color]++
      return acc
    },
    {
      square: { red: 0, green: 0, blue: 0, gold: 0 },
      circular: { red: 0, green: 0, blue: 0, gold: 0 },
    },
  ),
)
