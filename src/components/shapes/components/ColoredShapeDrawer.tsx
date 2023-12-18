import ColoredShapeEditor from "./ColoredShapeEditor"
import { useSelectedId } from "@components/shapes/store/useSelection"
import { Drawer } from "@mui/material"

const ColoredShapeDrawer = () => {
  const id = useSelectedId()

  return (
    <Drawer anchor="right" open={id !== null}>
      <ColoredShapeEditor />
    </Drawer>
  )
}

export default ColoredShapeDrawer
