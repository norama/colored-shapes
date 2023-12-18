"use client"

import { Edit as EditIcon } from "@mui/icons-material"
import ColoredShape from "./components/ColoredShape"
import { setSelectedId } from "./store/selection"
import ColoredShapeDrawer from "./components/ColoredShapeDrawer"
import { useSelectedId } from "@components/shapes/store/useSelection"

interface ColoredShapeScreenProps {
  id: number
}

const ColoredShapeScreen = ({ id }: ColoredShapeScreenProps) => {
  const selectedId = useSelectedId()

  return (
    <>
      <ColoredShape
        id={id}
        key={id !== selectedId ? id : null}
        onClick={() => setSelectedId(id)}
        content={id === selectedId ? <EditIcon /> : ""}
        hoveredContent={<EditIcon />}
        size={224}
      />
      <ColoredShapeDrawer />
    </>
  )
}

export default ColoredShapeScreen
