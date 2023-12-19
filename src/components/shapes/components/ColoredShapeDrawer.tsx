import { Drawer } from "@mui/material"
import { setSelectedId } from "components/shapes/store/selection"
import ColoredShapeEditor from "./ColoredShapeEditor"
import { useSelectedId } from "components/shapes/store/useSelection"

const ColoredShapeDrawer = () => {
  const id = useSelectedId()

  return (
    <Drawer anchor="right" open={id !== null} onClose={() => setSelectedId(null)}>
      <ColoredShapeEditor />
    </Drawer>
  )
}

export default ColoredShapeDrawer
