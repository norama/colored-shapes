"use client"

import ColoredShapesBoard from "./components/ColoredShapesBoard"
import PageHeader from "components/global/page/PageHeader"

const HomeScreen = () => (
  <>
    <PageHeader route="shapes" />
    <ColoredShapesBoard />
  </>
)

export default HomeScreen
