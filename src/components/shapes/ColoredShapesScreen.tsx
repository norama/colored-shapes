"use client"

import PageHeader from "components/global/page/PageHeader"
import ColoredShapesList from "./components/ColoredShapesList"
import ColoredShapeDrawer from "./components/ColoredShapeDrawer"

const ColoredShapesScreen = () => (
  <>
    <PageHeader route="report" />
    <ColoredShapesList />
    <ColoredShapeDrawer />
  </>
)

export default ColoredShapesScreen
