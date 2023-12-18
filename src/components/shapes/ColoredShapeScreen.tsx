"use client"

import { Edit as EditIcon } from "@mui/icons-material"
import ColoredShape from "./components/ColoredShape"
import { setSelectedId } from "./store/selection"
import ColoredShapeDrawer from "./components/ColoredShapeDrawer"

interface ColoredShapeScreenProps {
  id: number
}

const ColoredShapeScreen = ({ id }: ColoredShapeScreenProps) => {
  return (
    <>
      <ColoredShape
        id={id}
        onClick={() => setSelectedId(id)}
        hoveredContent={<EditIcon />}
        size={224}
      />
      <ColoredShapeDrawer />
    </>
  )
}

export default ColoredShapeScreen
